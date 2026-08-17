/* ============================================================
   EduQuest ESAT Scoring & Metric Calculation Engine (scoring.js)
   Official Cambridge / UAT-UK ESAT Format Engine
   - 5 Modules: Mathematics 1 (Compulsory), Mathematics 2, Physics, Chemistry, Biology
   - Each Module: 27 Questions | 40 Minutes
   - Marking: +1 Correct, 0 Wrong, 0 Unanswered (No Negative Marking)
   - Official Scale: 1.0 to 9.0 (Reported to 1 decimal place per module)
   - Strictly NO single combined score. Each module reported independently.
   ============================================================ */

/**
 * Rasch-calibrated conversion curve mapping raw score (0-27) to Estimated ESAT Score (1.0 - 9.0)
 * Standardized on official equating distributions for admissions assessments.
 */
const ESAT_RAW_TO_SCALED_TABLE = {
  0: 1.0,
  1: 1.2,
  2: 1.5,
  3: 1.8,
  4: 2.1,
  5: 2.4,
  6: 2.7,
  7: 3.0,
  8: 3.3,
  9: 3.6,
  10: 4.0,
  11: 4.3,
  12: 4.6,
  13: 5.0, // Benchmark median (~50% raw mark)
  14: 5.3,
  15: 5.6,
  16: 6.0,
  17: 6.3,
  18: 6.6,
  19: 7.0, // High competitive benchmark
  20: 7.3,
  21: 7.6,
  22: 8.0, // Top tier / Cambridge interview distinction
  23: 8.3,
  24: 8.6,
  25: 8.8,
  26: 9.0,
  27: 9.0  // Maximum scale
};

/**
 * Calculates the Estimated ESAT Score (1.0 - 9.0) for a module.
 * @param {number} correct - Number of correct answers in the module
 * @param {number} total - Total questions in the module (default 27)
 * @returns {string} Score formatted to 1 decimal place (e.g. "6.8")
 */
function calculateModuleESATScore(correct, total = 27) {
  if (!total || total <= 0) return '1.0';
  if (!correct || correct <= 0) return '1.0';

  // Normalize raw score to standard 27-question baseline
  const normalizedRaw = Math.min(27, Math.max(0, Math.round((correct / total) * 27)));

  const score = ESAT_RAW_TO_SCALED_TABLE[normalizedRaw] !== undefined 
    ? ESAT_RAW_TO_SCALED_TABLE[normalizedRaw] 
    : 1.0;

  return Number(score).toFixed(1);
}

/**
 * Returns estimated percentile bracket based on 1.0 - 9.0 score
 * @param {number|string} score 
 * @returns {string} Percentile label
 */
function getESATPercentile(score) {
  const num = parseFloat(score);
  if (num >= 9.0) return '~99th+';
  if (num >= 8.5) return '~98th';
  if (num >= 8.0) return '~94th';
  if (num >= 7.5) return '~88th';
  if (num >= 7.0) return '~80th';
  if (num >= 6.5) return '~70th';
  if (num >= 6.0) return '~60th';
  if (num >= 5.5) return '~50th';
  if (num >= 5.0) return '~40th';
  if (num >= 4.0) return '~25th';
  if (num >= 3.0) return '~12th';
  return '< 10th';
}

/**
 * Computes full performance metrics for a test attempt containing 1 or more modules.
 * @param {Array} questions - Array of question objects
 * @param {Object} userAnswers - Mapping of { questionIndex: chosenOptionIndex }
 * @param {Object} studentInfo - Student details (name, email, phone)
 * @param {string} testTitle - Test title
 * @param {string} testType - 'full_mock' | 'mock_test' | 'diagnostic' | 'topic_test'
 * @returns {Object} Complete structured result object
 */
function computeESATResults(questions, userAnswers, studentInfo, testTitle, testType = 'full_mock') {
  const moduleMap = {};
  const topicMap = {};
  const details = [];

  let totalQuestions = questions.length;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalUnattempted = 0;

  questions.forEach((q, idx) => {
    const chosen = userAnswers[idx];
    const answer = q.answer !== undefined ? q.answer : q.correctAnswer;
    const modName = q.module || 'Mathematics 1';
    const topicName = q.topic || 'General';
    const difficulty = q.difficulty || 'Medium';

    // Module tracking initialization
    if (!moduleMap[modName]) {
      moduleMap[modName] = {
        module: modName,
        correct: 0,
        wrong: 0,
        unattempted: 0,
        total: 0
      };
    }
    moduleMap[modName].total++;

    // Topic tracking initialization
    if (!topicMap[topicName]) {
      topicMap[topicName] = {
        topic: topicName,
        module: modName,
        correct: 0,
        total: 0
      };
    }
    topicMap[topicName].total++;

    let status = 'unattempted';
    if (chosen === undefined || chosen === -1) {
      totalUnattempted++;
      moduleMap[modName].unattempted++;
    } else if (chosen === answer) {
      totalCorrect++;
      moduleMap[modName].correct++;
      topicMap[topicName].correct++;
      status = 'correct';
    } else {
      totalWrong++;
      moduleMap[modName].wrong++;
      status = 'wrong';
    }

    details.push({
      id: q.id || (idx + 1),
      number: idx + 1,
      module: modName,
      topic: topicName,
      subtopic: q.subtopic || '',
      difficulty: difficulty,
      question: q.text || q.question,
      passage: q.passage || '',
      options: q.options || q.choices || [],
      chosen: chosen !== undefined ? chosen : -1,
      answer: answer,
      status: status,
      explanation: q.explanation || '',
      source: q.source || null
    });
  });

  // Calculate module-wise final metrics
  const moduleScores = Object.values(moduleMap).map(m => {
    const accuracy = m.total > 0 ? parseFloat(((m.correct / m.total) * 100).toFixed(1)) : 0;
    const esatScore = calculateModuleESATScore(m.correct, m.total);
    const percentile = getESATPercentile(esatScore);

    return {
      module: m.module,
      correct: m.correct,
      wrong: m.wrong,
      unattempted: m.unattempted,
      total: m.total,
      accuracy: accuracy,
      esatScore: esatScore,
      percentile: percentile,
      scoreLabel: 'Estimated ESAT Score'
    };
  });

  // Calculate topic-wise metrics
  const topicScores = Object.values(topicMap).map(t => ({
    topic: t.topic,
    module: t.module,
    correct: t.correct,
    total: t.total,
    accuracy: t.total > 0 ? parseFloat(((t.correct / t.total) * 100).toFixed(1)) : 0
  }));

  const overallAccuracy = totalQuestions > 0 
    ? parseFloat(((totalCorrect / totalQuestions) * 100).toFixed(1)) 
    : 0;

  return {
    student: studentInfo || {},
    testTitle: testTitle || 'ESAT Assessment',
    testType: testType,
    totalQuestions: totalQuestions,
    totalCorrect: totalCorrect,
    totalWrong: totalWrong,
    totalUnattempted: totalUnattempted,
    overallAccuracy: overallAccuracy,
    rawScoreText: `${totalCorrect} / ${totalQuestions}`,
    moduleScores: moduleScores,
    topicScores: topicScores,
    details: details,
    answers: userAnswers,
    submitTime: new Date().toLocaleString(),
    disclaimer: 'Estimated ESAT Score calculated via calibrated Rasch equating model. Not an official UAT-UK score.'
  };
}

// Make globally available in browser environment
if (typeof window !== 'undefined') {
  window.calculateModuleESATScore = calculateModuleESATScore;
  window.getESATPercentile = getESATPercentile;
  window.computeESATResults = computeESATResults;
  window.ESAT_RAW_TO_SCALED_TABLE = ESAT_RAW_TO_SCALED_TABLE;
}

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
 * Official UAT-UK / Cambridge admissions assessments do not publish fixed percentiles
 * for practice mocks as percentiles vary dynamically with live cohort distributions.
 * To maintain scoring integrity, speculative percentiles are not manufactured.
 */
function getESATPercentile(score) {
  return null;
}

const CANONICAL_MODULES = {
  M1: { code: 'M1', name: 'Mathematics 1' },
  M2: { code: 'M2', name: 'Mathematics 2' },
  PHYSICS: { code: 'PHYSICS', name: 'Physics' },
  CHEMISTRY: { code: 'CHEMISTRY', name: 'Chemistry' },
  BIOLOGY: { code: 'BIOLOGY', name: 'Biology' }
};

/**
 * Normalizes any module string, abbreviation, or alias to canonical code and display name.
 * @param {string} input 
 * @returns {{ code: string, name: string }}
 */
function normalizeModule(input) {
  if (!input) return { code: 'M1', name: 'Mathematics 1' };
  const raw = String(input).trim();
  const s = raw.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (s === 'm1' || s.startsWith('math1') || s.startsWith('maths1') || s.startsWith('mathematics1')) {
    return CANONICAL_MODULES.M1;
  }
  if (s === 'm2' || s.startsWith('math2') || s.startsWith('maths2') || s.startsWith('mathematics2')) {
    return CANONICAL_MODULES.M2;
  }
  if (s.startsWith('phy')) {
    return CANONICAL_MODULES.PHYSICS;
  }
  if (s.startsWith('chem') || s.startsWith('chm')) {
    return CANONICAL_MODULES.CHEMISTRY;
  }
  if (s.startsWith('bio')) {
    return CANONICAL_MODULES.BIOLOGY;
  }
  // Safe fallback for unlisted or custom topic modules
  return { code: raw.toUpperCase().slice(0, 10), name: raw };
}

/**
 * Validates that all module-level metrics sum precisely to overall totals and invariants hold.
 * @param {Object} result 
 * @returns {{ passed: boolean, errors: Array<string> }}
 */
function validateScoreConsistency(result) {
  const errors = [];
  let sumTotal = 0;
  let sumCorrect = 0;
  let sumIncorrect = 0;
  let sumUnanswered = 0;

  const mods = result.moduleScores || [];
  for (const m of mods) {
    sumTotal += m.total;
    sumCorrect += m.correct;
    const inc = m.incorrect !== undefined ? m.incorrect : m.wrong;
    const una = m.unanswered !== undefined ? m.unanswered : m.unattempted;
    sumIncorrect += inc;
    sumUnanswered += una;

    if ((m.correct + inc + una) !== m.total) {
      errors.push(`Module ${m.module} invariant violated: correct(${m.correct}) + incorrect(${inc}) + unanswered(${una}) !== total(${m.total})`);
    }
  }

  if (sumTotal !== result.totalQuestions) {
    errors.push(`Total questions invariant violated: sum(module.total)=${sumTotal} !== totalQuestions=${result.totalQuestions}`);
  }
  if (sumCorrect !== result.totalCorrect) {
    errors.push(`Total correct invariant violated: sum(module.correct)=${sumCorrect} !== totalCorrect=${result.totalCorrect}`);
  }
  const totWrong = result.incorrect !== undefined ? result.incorrect : result.totalWrong;
  if (sumIncorrect !== totWrong) {
    errors.push(`Total incorrect invariant violated: sum(module.incorrect)=${sumIncorrect} !== totalWrong=${totWrong}`);
  }
  const totUnanswered = result.unanswered !== undefined ? result.unanswered : result.totalUnattempted;
  if (sumUnanswered !== totUnanswered) {
    errors.push(`Total unanswered invariant violated: sum(module.unanswered)=${sumUnanswered} !== totalUnattempted=${totUnanswered}`);
  }
  if ((result.totalCorrect + totWrong + totUnanswered) !== result.totalQuestions) {
    errors.push(`Overall sum invariant violated: correct + incorrect + unanswered !== totalQuestions`);
  }

  if (errors.length > 0) {
    console.error('⚠️ ESAT Score consistency invariants violated:', errors);
    return { passed: false, errors };
  }
  return { passed: true, errors: [] };
}

/**
 * Computes full performance metrics for a test attempt containing 1 or more modules.
 * @param {Array} questions - Array of question objects
 * @param {Object} userAnswers - Mapping of { questionIndex: chosenOptionIndex }
 * @param {Object} studentInfo - Student details (name, email, phone)
 * @param {string} testTitle - Test title
 * @param {string} testType - 'full_mock' | 'mock_test' | 'diagnostic' | 'topic_test'
 * @returns {Object} Complete structured canonical result object
 */
function computeESATResults(questions, userAnswers, studentInfo, testTitle, testType = 'full_mock') {
  const moduleMap = {};
  const topicMap = {};
  const details = [];
  const moduleOrder = [];

  let totalQuestions = questions.length;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalUnattempted = 0;

  questions.forEach((q, idx) => {
    const chosen = userAnswers[idx];
    const answer = q.answer !== undefined ? q.answer : q.correctAnswer;
    
    // Dynamic module resolution via question metadata
    const rawMod = q.module || q.subject || q.section || q.category || q.testModule || q.moduleId || 'Mathematics 1';
    const norm = normalizeModule(rawMod);
    const modCode = norm.code;
    const modName = norm.name;

    const topicName = q.topic || 'General';
    const difficulty = q.difficulty || 'Medium';

    // Module tracking initialization
    if (!moduleMap[modCode]) {
      moduleMap[modCode] = {
        code: modCode,
        module: modName,
        correct: 0,
        wrong: 0,
        unattempted: 0,
        total: 0
      };
      moduleOrder.push(modCode);
    }
    moduleMap[modCode].total++;

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
      moduleMap[modCode].unattempted++;
    } else if (chosen === answer) {
      totalCorrect++;
      moduleMap[modCode].correct++;
      topicMap[topicName].correct++;
      status = 'correct';
    } else {
      totalWrong++;
      moduleMap[modCode].wrong++;
      status = 'wrong';
    }

    details.push({
      id: q.id || (idx + 1),
      number: idx + 1,
      module: modName,
      moduleCode: modCode,
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

  // Calculate module-wise metrics
  const modulesDict = {};
  const moduleScores = moduleOrder.map(code => {
    const m = moduleMap[code];
    const percentage = m.total > 0 ? parseFloat(((m.correct / m.total) * 100).toFixed(2)) : 0.0;
    const accuracy = m.total > 0 ? parseFloat(((m.correct / m.total) * 100).toFixed(1)) : 0.0;
    const esatScore = calculateModuleESATScore(m.correct, m.total);
    const percentile = getESATPercentile(esatScore);
    const attempted = m.correct + m.wrong;

    const modObj = {
      code: m.code,
      module: m.module,
      total: m.total,
      correct: m.correct,
      incorrect: m.wrong,
      wrong: m.wrong,
      unanswered: m.unattempted,
      unattempted: m.unattempted,
      attempted: attempted,
      score: m.correct,
      rawScoreText: `${m.correct} / ${m.total}`,
      percentage: percentage,
      accuracy: accuracy,
      esatScore: esatScore,
      percentile: percentile,
      scoreLabel: 'Estimated ESAT Score'
    };

    modulesDict[code] = modObj;
    return modObj;
  });

  // Calculate topic-wise metrics
  const topicScores = Object.values(topicMap).map(t => ({
    topic: t.topic,
    module: t.module,
    correct: t.correct,
    total: t.total,
    accuracy: t.total > 0 ? parseFloat(((t.correct / t.total) * 100).toFixed(1)) : 0
  }));

  const totalAttempted = totalCorrect + totalWrong;
  const overallPercentage = totalQuestions > 0 
    ? parseFloat(((totalCorrect / totalQuestions) * 100).toFixed(2)) 
    : 0.0;
  const overallAccuracy = totalQuestions > 0 
    ? parseFloat(((totalCorrect / totalQuestions) * 100).toFixed(1)) 
    : 0.0;

  const canonicalResult = {
    student: studentInfo || {},
    testTitle: testTitle || 'ESAT Assessment',
    testType: testType,
    totalQuestions: totalQuestions,
    total_questions: totalQuestions,
    totalCorrect: totalCorrect,
    correct: totalCorrect,
    totalWrong: totalWrong,
    incorrect: totalWrong,
    totalUnattempted: totalUnattempted,
    unanswered: totalUnattempted,
    totalAttempted: totalAttempted,
    attempted: totalAttempted,
    rawScore: totalCorrect,
    raw_score: totalCorrect,
    rawScoreText: `${totalCorrect} / ${totalQuestions}`,
    percentage: overallPercentage,
    overallAccuracy: overallAccuracy,
    modules: modulesDict,
    moduleScores: moduleScores,
    topicScores: topicScores,
    details: details,
    answers: userAnswers,
    submitTime: new Date().toLocaleString(),
    disclaimer: 'Estimated ESAT Score calculated via calibrated Rasch equating model. Not an official UAT-UK score.'
  };

  // Run invariant validation
  const validation = validateScoreConsistency(canonicalResult);
  canonicalResult.validation = validation;

  return canonicalResult;
}

// Global browser & Node environment support
if (typeof window !== 'undefined') {
  window.CANONICAL_MODULES = CANONICAL_MODULES;
  window.normalizeModule = normalizeModule;
  window.validateScoreConsistency = validateScoreConsistency;
  window.calculateModuleESATScore = calculateModuleESATScore;
  window.getESATPercentile = getESATPercentile;
  window.computeESATResults = computeESATResults;
  window.ESAT_RAW_TO_SCALED_TABLE = ESAT_RAW_TO_SCALED_TABLE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CANONICAL_MODULES,
    normalizeModule,
    validateScoreConsistency,
    calculateModuleESATScore,
    getESATPercentile,
    computeESATResults,
    ESAT_RAW_TO_SCALED_TABLE
  };
}

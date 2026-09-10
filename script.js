/* ============================================================
   EduQuest ESAT Test Engine & Assessment Controller (script.js)
   Official Cambridge / UAT-UK ESAT Format Engine
   - Supports Full Mock (3 Modules = 81 Qs / 3 x 40 Min Sequential)
   - Supports Module Mocks (1 Module = 27 Qs / 40 Min)
   - Supports Diagnostic Assessments (3 Modules = 81 Qs / 3 x 40 Min Sequential)
   - Supports Topic Tests (15 Qs / 25 Min)
   - Official Sequential Modular Timing: 40 Min per module, no carry-over
   - Refresh Immunity: Absolute timestamp recovery, timer does not reset
   - Idempotent Submission: Double-click guard, single attempt tracking
   - Safe Fallback Scoring: Exact parity with Rasch 1.0 - 9.0 table
   ============================================================ */

let currentQIndex = 0;
let userAnswers = {};
let timerInterval = null;
let secondsLeft = 2400; // Active countdown in seconds
let studentData = {};
let activeTestType = 'full_mock';

// Modular Test State
let currentModuleIndex = 0; // 0, 1, or 2
let completedModules = [false, false, false];
let moduleExpiryTimestamp = 0;
let attemptId = null;
let isSubmitting = false;
let isSubmitted = false;

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

document.addEventListener('DOMContentLoaded', () => {
  if (typeof QUESTIONS !== 'undefined' && QUESTIONS.length > 0) {
    initPalette();
    restoreSavedState();
  }
});

function getSessionKey() {
  const path = (window.location.pathname || 'esat_test').replace(/\\/g, '/');
  return `esat_session_${path}`;
}

function isThreeModuleTest() {
  return typeof QUESTIONS !== 'undefined' && QUESTIONS.length === 81;
}

function getModuleForIndex(idx) {
  if (!isThreeModuleTest()) return 0;
  if (idx < 27) return 0;
  if (idx < 54) return 1;
  return 2;
}

function getModuleRange(modIdx) {
  if (!isThreeModuleTest()) {
    return { start: 0, end: QUESTIONS.length - 1 };
  }
  const start = modIdx * 27;
  const end = Math.min(QUESTIONS.length - 1, (modIdx + 1) * 27 - 1);
  return { start: start, end: end };
}

/**
 * Initialize Question Palette grid in sidebar
 */
function initPalette() {
  const pal = document.getElementById('palette');
  if (!pal) return;
  pal.innerHTML = '';

  const isThreeMod = isThreeModuleTest();

  QUESTIONS.forEach((q, idx) => {
    const qMod = getModuleForIndex(idx);
    const btn = document.createElement('button');
    btn.className = `pal-num ${idx === currentQIndex ? 'current' : ''}`;
    btn.id = `pal-${idx}`;
    btn.textContent = idx + 1;

    // Determine lock state
    if (isThreeMod) {
      if (completedModules[qMod]) {
        btn.classList.add('completed-locked');
        btn.title = `Module ${qMod + 1} completed and sealed`;
      } else if (qMod > currentModuleIndex) {
        btn.classList.add('locked');
        btn.title = `Module ${qMod + 1} unlocks sequentially`;
      } else {
        btn.title = `Question ${idx + 1} (${q.module || 'ESAT'})`;
      }
    } else {
      btn.title = `Question ${idx + 1} (${q.module || 'ESAT'})`;
    }

    btn.onclick = () => handlePaletteClick(idx);
    pal.appendChild(btn);
  });
}

function handlePaletteClick(idx) {
  if (isThreeModuleTest()) {
    const qMod = getModuleForIndex(idx);
    if (completedModules[qMod]) {
      showAlert(`🔒 Module ${qMod + 1} (${QUESTIONS[qMod * 27]?.module || ''}) has been completed and sealed in accordance with official ESAT exam rules.`);
      return;
    }
    if (qMod > currentModuleIndex) {
      showAlert(`🔒 Module ${qMod + 1} (${QUESTIONS[qMod * 27]?.module || ''}) will unlock once you complete the current module.`);
      return;
    }
  }
  goToQuestion(idx);
}

/**
 * Start Test execution from Registration view
 */
function startTest() {
  const nameInput = document.getElementById('regName');
  const emailInput = document.getElementById('regEmail');
  const phoneInput = document.getElementById('regPhone');
  const ccInput = document.getElementById('regCC');
  const courseSelect = document.getElementById('regCourse');

  if (!nameInput || !nameInput.value.trim()) {
    showAlert('Please enter your full name.');
    return;
  }
  if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
    showAlert('Please enter a valid email address.');
    return;
  }

  const phoneVal = phoneInput && phoneInput.value.trim() 
    ? `${ccInput ? ccInput.value : ''} ${phoneInput.value.trim()}` 
    : '';

  studentData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneVal,
    targetCourse: courseSelect ? courseSelect.value : 'Engineering'
  };

  attemptId = 'esat_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
  isSubmitting = false;
  isSubmitted = false;
  currentModuleIndex = 0;
  completedModules = [false, false, false];

  const testTitle = document.title || 'ESAT Assessment';
  const modulesInTest = [...new Set(QUESTIONS.map(q => q.module || 'Mathematics 1'))];
  saveRegistration(studentData, testTitle, modulesInTest, studentData.targetCourse);

  document.getElementById('pageReg').classList.remove('active');
  document.getElementById('pageTest').classList.add('active');

  // Determine Duration
  let modDurationSec = 2400; // 40 min default
  if (isThreeModuleTest()) {
    modDurationSec = 40 * 60; // strictly 40 minutes per module
  } else if (typeof TEST_DURATION_MINUTES !== 'undefined') {
    modDurationSec = TEST_DURATION_MINUTES * 60;
  } else if (QUESTIONS.length === 27) {
    modDurationSec = 40 * 60;
  } else {
    modDurationSec = Math.max(15, Math.round(QUESTIONS.length * 1.5)) * 60;
  }

  moduleExpiryTimestamp = Date.now() + (modDurationSec * 1000);
  secondsLeft = modDurationSec;

  saveStateLocally();
  initPalette();
  startTimer();
  loadQuestion(0);
}

/**
 * Start and manage Countdown Timer with absolute expiry timestamp
 */
function startTimer() {
  updateTimerDisplay();
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const now = Date.now();
    if (moduleExpiryTimestamp > 0) {
      secondsLeft = Math.max(0, Math.round((moduleExpiryTimestamp - now) / 1000));
    } else {
      secondsLeft--;
    }

    updateTimerDisplay();

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      if (isThreeModuleTest() && currentModuleIndex < 2) {
        advanceToNextModule(true);
      } else {
        doSubmit(true);
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerBox = document.getElementById('timerDisplay');
  if (!timerBox) return;

  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  timerBox.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  const container = document.getElementById('timerBox');
  if (container) {
    if (secondsLeft <= 300) {
      container.classList.add('warning');
    } else {
      container.classList.remove('warning');
    }
  }

  // Update Module indicator in header if applicable
  const modNameEl = document.getElementById('currentModuleName');
  if (modNameEl && typeof QUESTIONS !== 'undefined') {
    const curQ = QUESTIONS[currentQIndex];
    if (isThreeModuleTest()) {
      modNameEl.textContent = `Module ${currentModuleIndex + 1} of 3: ${curQ ? (curQ.module || '') : ''}`;
    } else if (curQ) {
      modNameEl.textContent = curQ.module || 'Mathematics 1';
    }
  }
}

/**
 * Advance from one module to the next in 3-module tests (Full Mocks & Diagnostics)
 */
function advanceToNextModule(isAutoExpiry = false) {
  if (!isThreeModuleTest() || currentModuleIndex >= 2) return;

  // Seal current module
  completedModules[currentModuleIndex] = true;
  currentModuleIndex++;

  // 40 minutes fresh countdown for next module
  const modDurationSec = 40 * 60;
  moduleExpiryTimestamp = Date.now() + (modDurationSec * 1000);
  secondsLeft = modDurationSec;

  saveStateLocally();
  initPalette();
  startTimer();

  const nextStartQ = currentModuleIndex * 27;
  loadQuestion(nextStartQ);

  const nextModName = QUESTIONS[nextStartQ]?.module || 'Next Module';
  if (isAutoExpiry) {
    showAlert(`⏱ Module ${currentModuleIndex} time has expired and is now sealed.\n\nBeginning Module ${currentModuleIndex + 1}: ${nextModName} (40:00).`);
  } else {
    showAlert(`✅ Module ${currentModuleIndex} has been sealed.\n\nNow beginning Module ${currentModuleIndex + 1}: ${nextModName} (40:00).`);
  }
}

/**
 * Load Question at index
 */
function loadQuestion(idx) {
  if (idx < 0 || idx >= QUESTIONS.length) return;
  currentQIndex = idx;

  const q = QUESTIONS[idx];

  const qBadge = document.getElementById('qBadge');
  if (qBadge) qBadge.textContent = `Q ${idx + 1}`;

  const qTopicTag = document.getElementById('qTopicTag');
  if (qTopicTag) {
    qTopicTag.textContent = `${q.module || 'Mathematics 1'} · ${q.topic || 'General'}`;
  }

  const progress = document.getElementById('modProgress');
  if (progress) {
    if (isThreeModuleTest()) {
      const qInMod = (idx % 27) + 1;
      progress.textContent = `Question ${qInMod} of 27 (Overall Q${idx + 1}/81)`;
    } else {
      progress.textContent = `Question ${idx + 1} of ${QUESTIONS.length}`;
    }
  }

  const qText = document.getElementById('qText');
  if (qText) {
    let html = '';
    if (q.passage) {
      html += `<div class="q-passage">${q.passage}</div>`;
    }
    html += `<div>${q.text || q.question}</div>`;
    qText.innerHTML = html;
  }

  const optsContainer = document.getElementById('qOpts');
  if (optsContainer) {
    optsContainer.innerHTML = '';
    const choices = q.options || q.choices || [];
    const isLocked = isThreeModuleTest() && completedModules[getModuleForIndex(idx)];

    choices.forEach((opt, optIdx) => {
      const btn = document.createElement('div');
      const isSelected = userAnswers[idx] === optIdx;
      btn.className = `opt-btn ${isSelected ? 'selected' : ''} ${isLocked ? 'locked-opt' : ''}`;
      if (!isLocked) {
        btn.onclick = () => selectOption(optIdx);
      }
      btn.innerHTML = `
        <div class="opt-letter">${LETTERS[optIdx]}</div>
        <div style="flex:1;">${opt}</div>
      `;
      optsContainer.appendChild(btn);
    });
  }

  // Navigation button boundaries
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const range = getModuleRange(currentModuleIndex);

  if (btnPrev) {
    if (isThreeModuleTest()) {
      btnPrev.style.visibility = (idx > range.start) ? 'visible' : 'hidden';
    } else {
      btnPrev.style.visibility = (idx > 0) ? 'visible' : 'hidden';
    }
  }

  if (btnNext) {
    if (isThreeModuleTest()) {
      if (idx < range.end) {
        btnNext.textContent = 'Next →';
      } else if (currentModuleIndex < 2) {
        btnNext.textContent = `Finish Module ${currentModuleIndex + 1} & Proceed to Module ${currentModuleIndex + 2} →`;
      } else {
        btnNext.textContent = 'Review & Submit Assessment →';
      }
    } else {
      btnNext.textContent = (idx === QUESTIONS.length - 1) ? 'Review & Submit Assessment →' : 'Next →';
    }
  }

  updatePaletteHighlight();
  renderMath(document.querySelector('.test-main') || document.body);
  saveStateLocally();
}

/**
 * Handle Option Selection
 */
function selectOption(optIdx) {
  if (isThreeModuleTest() && completedModules[getModuleForIndex(currentQIndex)]) {
    showAlert('🔒 Answers for this completed module are sealed and cannot be changed.');
    return;
  }
  userAnswers[currentQIndex] = optIdx;
  loadQuestion(currentQIndex);
  updateProgress();
  saveStateLocally();
}

function nextQ() {
  const range = getModuleRange(currentModuleIndex);
  if (isThreeModuleTest()) {
    if (currentQIndex < range.end) {
      loadQuestion(currentQIndex + 1);
    } else if (currentModuleIndex < 2) {
      confirmModuleCompletion();
    } else {
      confirmSubmit();
    }
  } else {
    if (currentQIndex < QUESTIONS.length - 1) {
      loadQuestion(currentQIndex + 1);
    } else {
      confirmSubmit();
    }
  }
}

function prevQ() {
  const range = getModuleRange(currentModuleIndex);
  if (isThreeModuleTest()) {
    if (currentQIndex > range.start) {
      loadQuestion(currentQIndex - 1);
    }
  } else if (currentQIndex > 0) {
    loadQuestion(currentQIndex - 1);
  }
}

function goToQuestion(idx) {
  loadQuestion(idx);
}

function confirmModuleCompletion() {
  const range = getModuleRange(currentModuleIndex);
  let answered = 0;
  for (let i = range.start; i <= range.end; i++) {
    if (userAnswers[i] !== undefined) answered++;
  }
  const unans = 27 - answered;

  const modalMsg = document.getElementById('modalMsg');
  if (modalMsg) {
    let msg = `You are about to finish Module ${currentModuleIndex + 1} (${QUESTIONS[range.start]?.module || ''}).\n`;
    if (unans > 0) {
      msg += `You have ${unans} unanswered question(s) in this module.\n`;
    }
    msg += `As per official ESAT examination rules, once sealed, you CANNOT return to this module. Proceed to Module ${currentModuleIndex + 2}?`;
    modalMsg.textContent = msg;
  }

  const modalSubmitBtn = document.querySelector('#modalBg .btn-primary');
  if (modalSubmitBtn) {
    modalSubmitBtn.textContent = `Yes, Seal & Start Module ${currentModuleIndex + 2}`;
    modalSubmitBtn.onclick = () => {
      closeModal();
      advanceToNextModule(false);
    };
  }

  document.getElementById('modalBg').classList.add('open');
}

function updatePaletteHighlight() {
  const isThreeMod = isThreeModuleTest();
  QUESTIONS.forEach((_, idx) => {
    const el = document.getElementById(`pal-${idx}`);
    if (el) {
      el.classList.remove('current', 'answered', 'completed-locked', 'locked');
      if (idx === currentQIndex) el.classList.add('current');
      if (userAnswers[idx] !== undefined) el.classList.add('answered');

      if (isThreeMod) {
        const qMod = getModuleForIndex(idx);
        if (completedModules[qMod]) {
          el.classList.add('completed-locked');
        } else if (qMod > currentModuleIndex) {
          el.classList.add('locked');
        }
      }
    }
  });
}

function updateProgress() {
  const answeredCount = Object.keys(userAnswers).length;
  const pct = Math.round((answeredCount / QUESTIONS.length) * 100);

  const fill = document.getElementById('progFill');
  if (fill) fill.style.width = `${pct}%`;

  const lbl = document.getElementById('progLbl');
  if (lbl) lbl.textContent = `${answeredCount} / ${QUESTIONS.length} answered`;
}

function confirmSubmit() {
  const answeredCount = Object.keys(userAnswers).length;
  const unans = QUESTIONS.length - answeredCount;
  const modalMsg = document.getElementById('modalMsg');
  if (modalMsg) {
    if (unans > 0) {
      modalMsg.textContent = `You have ${unans} unanswered question(s) out of ${QUESTIONS.length}. Are you sure you want to finish and submit your ESAT assessment?`;
    } else {
      modalMsg.textContent = `You have answered all ${QUESTIONS.length} questions. Are you ready to submit your ESAT assessment?`;
    }
  }

  const modalSubmitBtn = document.querySelector('#modalBg .btn-primary');
  if (modalSubmitBtn) {
    modalSubmitBtn.textContent = 'Yes, Submit Test';
    modalSubmitBtn.onclick = () => doSubmit(false);
  }

  document.getElementById('modalBg').classList.add('open');
}

function closeModal() {
  const m = document.getElementById('modalBg');
  if (m) m.classList.remove('open');
}

function showAlert(msg) {
  const alertMsg = document.getElementById('alertMsg');
  if (alertMsg) alertMsg.textContent = msg;
  const alertBg = document.getElementById('alertBg');
  if (alertBg) alertBg.classList.add('open');
}

function saveStateLocally() {
  try {
    const key = getSessionKey();
    localStorage.setItem(key, JSON.stringify({
      attemptId: attemptId,
      student: studentData,
      userAnswers: userAnswers,
      currentModuleIndex: currentModuleIndex,
      completedModules: completedModules,
      moduleExpiryTimestamp: moduleExpiryTimestamp,
      currentQIndex: currentQIndex,
      started: true,
      isSubmitted: isSubmitted,
      timestamp: Date.now()
    }));
  } catch (e) {}
}

function restoreSavedState() {
  try {
    const key = getSessionKey();
    const raw = localStorage.getItem(key);
    if (!raw) return;

    const data = JSON.parse(raw);
    if (!data || !data.started) return;

    // Reject stale session (older than 4 hours)
    if (Date.now() - (data.timestamp || 0) > 1000 * 60 * 240) {
      localStorage.removeItem(key);
      return;
    }

    if (data.isSubmitted) {
      localStorage.removeItem(key);
      return;
    }

    studentData = data.student || {};
    userAnswers = data.userAnswers || {};
    attemptId = data.attemptId || ('esat_' + Date.now());
    completedModules = data.completedModules || [false, false, false];
    currentModuleIndex = data.currentModuleIndex || 0;
    moduleExpiryTimestamp = data.moduleExpiryTimestamp || 0;

    const now = Date.now();
    let rem = Math.max(0, Math.round((moduleExpiryTimestamp - now) / 1000));

    if (rem <= 0) {
      if (isThreeModuleTest() && currentModuleIndex < 2) {
        advanceToNextModule(true);
        return;
      } else {
        doSubmit(true);
        return;
      }
    }

    secondsLeft = rem;

    const regPage = document.getElementById('pageReg');
    const testPage = document.getElementById('pageTest');
    if (regPage) regPage.classList.remove('active');
    if (testPage) testPage.classList.add('active');

    const range = getModuleRange(currentModuleIndex);
    let targetQ = (typeof data.currentQIndex === 'number') ? data.currentQIndex : range.start;
    if (targetQ < range.start || targetQ > range.end) {
      targetQ = range.start;
    }

    initPalette();
    updateProgress();
    loadQuestion(targetQ);
    startTimer();
  } catch (e) {
    console.warn('Error restoring saved session:', e);
  }
}

/**
 * Submit Test & Calculate ESAT Metrics (Idempotent submission guard)
 */
async function doSubmit(isAuto = false) {
  if (isSubmitting || isSubmitted) return;
  isSubmitting = true;

  closeModal();
  if (timerInterval) clearInterval(timerInterval);

  // Disable all submit buttons immediately to prevent duplicate requests
  const subBtns = document.querySelectorAll('button[onclick*="doSubmit"], button[onclick*="confirmSubmit"], #btnNext');
  subBtns.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.style.cursor = 'not-allowed';
  });

  const overlay = document.getElementById('savingOverlay');
  if (overlay) overlay.classList.add('active');

  const testTitle = document.title || 'ESAT Assessment';
  let testType = 'full_mock';
  if (QUESTIONS.length === 27) testType = 'mock_test';
  else if (testTitle.toLowerCase().includes('diagnostic')) testType = 'diagnostic';
  else if (testTitle.toLowerCase().includes('topic')) testType = 'topic_test';

  // Compute ESAT results via scoring engine
  const resultObj = typeof computeESATResults === 'function' 
    ? computeESATResults(QUESTIONS, userAnswers, studentData, testTitle, testType)
    : fallbackComputeResults(QUESTIONS, userAnswers, studentData, testTitle, testType);

  resultObj.attemptId = attemptId;

  // Save persistent attempt to Supabase
  await saveToSupabase(resultObj);

  isSubmitted = true;
  isSubmitting = false;

  // Clear local temporary session
  try {
    localStorage.removeItem(getSessionKey());
  } catch (e) {}

  if (overlay) overlay.classList.remove('active');

  renderResults(resultObj);
}

/**
 * Safe fallback computation with exact Rasch 1.0 - 9.0 table parity
 */
function fallbackComputeResults(questions, answers, student, title, type) {
  const moduleMap = {};
  const topicMap = {};
  const details = [];

  let totalQuestions = questions.length;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalUnattempted = 0;

  questions.forEach((q, idx) => {
    const chosen = answers[idx];
    const answer = q.answer !== undefined ? q.answer : q.correctAnswer;
    const modName = q.module || 'Mathematics 1';
    const topicName = q.topic || 'General';

    if (!moduleMap[modName]) {
      moduleMap[modName] = { module: modName, correct: 0, wrong: 0, unattempted: 0, total: 0 };
    }
    moduleMap[modName].total++;

    if (!topicMap[topicName]) {
      topicMap[topicName] = { topic: topicName, module: modName, correct: 0, total: 0 };
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
      question: q.text || q.question,
      options: q.options || q.choices || [],
      chosen: chosen !== undefined ? chosen : -1,
      answer: answer,
      status: status,
      explanation: q.explanation || ''
    });
  });

  const moduleScores = Object.values(moduleMap).map(m => {
    const acc = m.total > 0 ? parseFloat(((m.correct / m.total) * 100).toFixed(1)) : 0;
    let scaled = '1.0';
    if (typeof calculateModuleESATScore === 'function') {
      scaled = calculateModuleESATScore(m.correct, m.total);
    } else {
      const norm = Math.min(27, Math.max(0, Math.round((m.correct / m.total) * 27)));
      const table = (typeof ESAT_RAW_TO_SCALED_TABLE !== 'undefined') ? ESAT_RAW_TO_SCALED_TABLE : {
        0: 1.0, 1: 1.2, 2: 1.5, 3: 1.8, 4: 2.1, 5: 2.4, 6: 2.7, 7: 3.0, 8: 3.3, 9: 3.6,
        10: 4.0, 11: 4.3, 12: 4.6, 13: 5.0, 14: 5.3, 15: 5.6, 16: 6.0, 17: 6.3, 18: 6.6,
        19: 7.0, 20: 7.3, 21: 7.6, 22: 8.0, 23: 8.3, 24: 8.6, 25: 8.8, 26: 9.0, 27: 9.0
      };
      scaled = Number(table[norm] || 1.0).toFixed(1);
    }
    return {
      module: m.module,
      correct: m.correct,
      wrong: m.wrong,
      unattempted: m.unattempted,
      total: m.total,
      accuracy: acc,
      esatScore: scaled
    };
  });

  const topicScores = Object.values(topicMap).map(t => ({
    topic: t.topic,
    module: t.module,
    correct: t.correct,
    total: t.total,
    accuracy: t.total > 0 ? parseFloat(((t.correct / t.total) * 100).toFixed(1)) : 0
  }));

  return {
    student: student || {},
    testTitle: title || 'ESAT Assessment',
    testType: type,
    totalQuestions: totalQuestions,
    totalCorrect: totalCorrect,
    totalWrong: totalWrong,
    totalUnattempted: totalUnattempted,
    overallAccuracy: totalQuestions > 0 ? parseFloat(((totalCorrect / totalQuestions) * 100).toFixed(1)) : 0,
    moduleScores: moduleScores,
    topicScores: topicScores,
    details: details,
    answers: answers,
    submitTime: new Date().toLocaleString(),
    attemptId: attemptId
  };
}

/**
 * Render Post-Test Result & Review Screen
 */
function renderResults(res) {
  document.getElementById('pageTest').classList.remove('active');
  const resPage = document.getElementById('pageResult');
  resPage.classList.add('active');

  const wrap = document.getElementById('resWrap') || document.getElementById('resultContent');
  if (!wrap) return;

  const moduleScores = res.moduleScores || [];
  const topicScores = res.topicScores || [];

  // 1. Generate Module Score Cards (Official 1.0 - 9.0 scale)
  const moduleCardsHtml = moduleScores.map(m => `
    <div style="background:rgba(255,255,255,0.03); border:1.5px solid rgba(59,130,246,0.3); border-radius:14px; padding:22px; text-align:center; position:relative; overflow:hidden;">
      <div style="font-size:0.75rem; text-transform:uppercase; color:#93c5fd; font-weight:800; letter-spacing:0.06em; margin-bottom:4px;">${m.module}</div>
      <div style="font-family:'Syne',sans-serif; font-size:2.8rem; font-weight:800; color:#38bdf8; line-height:1.1;">
        ${m.esatScore} <span style="font-size:1.4rem; color:rgba(255,255,255,0.5); font-weight:600;">/ 9.0</span>
      </div>
      <div style="display:inline-block; background:rgba(59,130,246,0.18); color:#60a5fa; padding:3px 12px; border-radius:20px; font-size:0.75rem; font-weight:700; margin-top:6px;">
        ${m.percentile || 'Estimated Score'}
      </div>
      <div style="display:flex; justify-content:center; gap:16px; margin-top:14px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.08); font-size:0.8rem; color:rgba(255,255,255,0.75);">
        <div>Raw: <strong>${m.correct} / ${m.total}</strong></div>
        <div>Accuracy: <strong>${m.accuracy}%</strong></div>
      </div>
    </div>
  `).join('');

  // 2. Question-by-Question Review Cards
  const qReviewCardsHtml = (res.details || []).map((d, i) => {
    const isCorrect = d.status === 'correct';
    const isWrong = d.status === 'wrong';
    const isSkipped = d.status === 'unattempted' || d.chosen === -1 || d.chosen === undefined;

    const statusClass = isCorrect ? 'color:#10b981' : isWrong ? 'color:#ef4444' : 'color:#f59e0b';
    const statusBadge = isCorrect ? '✅ Correct' : isWrong ? '❌ Wrong' : '⏭ Skipped / Unattempted';

    return `
      <div class="q-review-card pdf-avoid" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:22px; margin-bottom:16px; page-break-inside:avoid; break-inside:avoid;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <div>
            <span style="font-weight:700; font-size:0.95rem;">Question ${d.number || (i + 1)}</span>
            <span style="font-size:0.75rem; background:rgba(59,130,246,0.15); color:#60a5fa; padding:2px 8px; border-radius:4px; margin-left:8px; font-weight:600;">${d.module || 'Mathematics 1'}</span>
            ${d.topic ? `<span style="font-size:0.75rem; background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.7); padding:2px 8px; border-radius:4px; margin-left:6px;">${d.topic}</span>` : ''}
          </div>
          <span style="font-weight:700; font-size:0.85rem; ${statusClass}">${statusBadge}</span>
        </div>
        ${d.passage ? `<div style="background:rgba(255,255,255,0.02); border-left:3px solid #3b82f6; padding:12px 16px; margin-bottom:14px; font-size:0.9rem; color:rgba(255,255,255,0.85); line-height:1.6;">${d.passage}</div>` : ''}
        <div style="font-size:0.98rem; margin-bottom:14px; color:#fff; font-weight:500; line-height:1.5;">${d.question}</div>
        <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
          ${(d.options || []).map((opt, optIdx) => {
            let optStyle = 'background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08);';
            let tag = '';
            const isUserChoice = optIdx === d.chosen;
            const isCorrectOption = optIdx === d.answer;

            if (isCorrectOption && isUserChoice) {
              optStyle = 'background:rgba(16,185,129,0.18); border:1.5px solid #10b981; color:#fff; font-weight:600;';
              tag = '<span style="color:#10b981; font-weight:bold; margin-left:auto; display:flex; align-items:center; gap:4px;">✓ Your Choice &amp; Correct</span>';
            } else if (isCorrectOption) {
              optStyle = 'background:rgba(16,185,129,0.15); border:1.5px solid #10b981; color:#fff;';
              tag = '<span style="color:#10b981; font-weight:bold; margin-left:auto;">✓ Correct Answer</span>';
            } else if (isUserChoice && !isCorrectOption) {
              optStyle = 'background:rgba(239,68,68,0.18); border:1.5px solid #ef4444; color:#fff;';
              tag = '<span style="color:#ef4444; font-weight:bold; margin-left:auto;">✗ Your Choice</span>';
            }
            return `
              <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; font-size:0.88rem; ${optStyle}">
                <div style="font-weight:bold; width:20px;">${LETTERS[optIdx]}</div>
                <div style="flex:1;">${opt}</div>
                ${tag}
              </div>
            `;
          }).join('')}
        </div>
        ${isSkipped ? '<div style="font-size:0.8rem; color:#f59e0b; margin-bottom:10px;">⚠️ You skipped this question without selecting an answer.</div>' : ''}
        ${d.explanation ? `<div style="background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.25); padding:14px; border-radius:8px; font-size:0.88rem; color:#93c5fd; line-height:1.5;">💡 <strong>Explanation:</strong> ${d.explanation}</div>` : ''}
      </div>
    `;
  }).join('');

  const portalHomeUrl = getHomeUrl();
  const dashboardUrl = getDashboardUrl();

  wrap.innerHTML = `
    <div class="res-card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:18px;">
        <div>
          <h2 style="font-family:'Syne',sans-serif; font-size:1.8rem; margin-bottom:4px;">📊 ESAT Performance Report</h2>
          <p style="color:var(--muted); font-size:0.9rem;">Candidate: <strong>${res.student.name || 'Candidate'}</strong> &nbsp;|&nbsp; Target: <strong>${res.student.targetCourse || 'Engineering'}</strong> &nbsp;|&nbsp; ${res.submitTime}</p>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          <button class="btn btn-primary" style="width:auto; font-size:0.88rem; padding:9px 20px; cursor:pointer;" onclick="window.print()">🖨️ Print Report</button>
          <a href="${dashboardUrl}" class="btn btn-outline" style="width:auto; text-decoration:none; font-size:0.88rem; padding:9px 16px;">📈 My Dashboard</a>
          <a href="${portalHomeUrl}" class="btn btn-outline" style="width:auto; text-decoration:none; font-size:0.88rem; padding:9px 16px;">← Home</a>
        </div>
      </div>

      <!-- OFFICIAL MODULE-WISE SCORE CARDS (1.0 - 9.0) -->
      <h3 style="font-family:'Syne',sans-serif; font-size:1.2rem; margin-bottom:14px; color:#f1f5f9;">🎯 Module-wise Estimated ESAT Scores (1.0 – 9.0)</h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:16px; margin-bottom:28px;">
        ${moduleCardsHtml}
      </div>

      <!-- OVERALL RAW AGGREGATE SUMMARY -->
      <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px 24px; margin-bottom:28px; display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:16px; text-align:center;">
        <div>
          <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Total Raw Score</div>
          <div style="font-size:1.4rem; font-weight:800; color:#38bdf8; font-family:'Syne',sans-serif;">${res.totalCorrect} / ${res.totalQuestions}</div>
        </div>
        <div>
          <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Overall Accuracy</div>
          <div style="font-size:1.4rem; font-weight:800; color:#60a5fa; font-family:'Syne',sans-serif;">${res.overallAccuracy}%</div>
        </div>
        <div>
          <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Total Correct</div>
          <div style="font-size:1.4rem; font-weight:800; color:#10b981; font-family:'Syne',sans-serif;">${res.totalCorrect}</div>
        </div>
        <div>
          <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Total Incorrect / Skipped</div>
          <div style="font-size:1.4rem; font-weight:800; color:#f87171; font-family:'Syne',sans-serif;">${res.totalWrong} / ${res.totalUnattempted}</div>
        </div>
      </div>

      <!-- NOTICE & METHODOLOGY DISCLAIMER -->
      <div style="background:rgba(59,130,246,0.08); border-left:3px solid #3b82f6; padding:12px 18px; border-radius:0 8px 8px 0; font-size:0.82rem; color:rgba(255,255,255,0.7); margin-bottom:28px;">
        ℹ️ <strong>Official ESAT Specification:</strong> Each module is evaluated independently on a <strong>1.0 – 9.0 scale</strong> (reported to 1 decimal place). Timing follows the official Cambridge &amp; Imperial 40-minute per module rule (with zero time carry-over). Marking rule: <strong>+1 per correct answer, 0 for incorrect/unanswered (no negative marking)</strong>.
      </div>

      <!-- TOPIC BREAKDOWN -->
      ${topicScores.length > 0 ? `
        <h3 style="font-family:'Syne',sans-serif; font-size:1.15rem; margin-bottom:14px;">🧩 Syllabus Topic Breakdown</h3>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:32px;">
          ${topicScores.map(t => `
            <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:10px; padding:12px 16px;">
              <div style="font-weight:700; font-size:0.88rem; color:#fff; margin-bottom:4px;">${t.topic}</div>
              <div style="font-size:0.72rem; color:var(--muted); margin-bottom:6px;">${t.module}</div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.82rem; color:#38bdf8;">${t.correct} / ${t.total}</span>
                <span style="font-weight:700; font-size:0.85rem; color:${t.accuracy >= 75 ? '#10b981' : t.accuracy >= 50 ? '#fbbf24' : '#f87171'}">${t.accuracy}%</span>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- FULL QUESTION-BY-QUESTION REVIEW -->
      <h3 style="font-family:'Syne',sans-serif; font-size:1.25rem; margin-bottom:18px; border-top:1px solid rgba(255,255,255,0.08); padding-top:24px;">📋 Full Question &amp; Solution Review</h3>
      <div>
        ${qReviewCardsHtml}
      </div>
    </div>
  `;

  renderMath(wrap);
}

function renderMath(targetElement) {
  const el = targetElement || document.body;
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"],
        throwOnError: false
      });
    } catch (e) {
      console.warn('Math rendering error:', e);
    }
  }
}

function getHomeUrl() {
  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  if (path.includes('/full_mock/') || path.includes('/diagnostic_test/') || path.includes('/mock_tests/') || path.includes('/topic_tests/')) {
    if (path.split('/').length > 4) return '../../index.html';
    return '../index.html';
  }
  return 'index.html';
}

function getDashboardUrl() {
  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  if (path.includes('/full_mock/') || path.includes('/diagnostic_test/') || path.includes('/mock_tests/') || path.includes('/topic_tests/')) {
    if (path.split('/').length > 4) return '../../dashboard.html';
    return '../dashboard.html';
  }
  return 'dashboard.html';
}

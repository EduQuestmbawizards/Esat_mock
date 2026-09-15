let currentQIndex = 0;
let userAnswers = {};
let timerInterval = null;
let secondsLeft = 2400; // Active countdown in seconds
let studentData = {};
let activeTestType = 'full_mock';
let activeQuestions = null;

function getActiveQuestions() {
  if (activeQuestions && Array.isArray(activeQuestions) && activeQuestions.length > 0) {
    return activeQuestions;
  }
  if (typeof window !== 'undefined' && window.activeQuestions && Array.isArray(window.activeQuestions) && window.activeQuestions.length > 0) {
    return window.activeQuestions;
  }
  if (typeof QUESTIONS !== 'undefined' && Array.isArray(QUESTIONS)) {
    return QUESTIONS;
  }
  return [];
}

// Modular Test State
let currentModuleIndex = 0; // 0, 1, or 2
let completedModules = [false, false, false];
let moduleExpiryTimestamp = 0;
let attemptId = null;
let isSubmitting = false;
let isSubmitted = false;

// Selected Modules State (ESAT Rules: M1 Compulsory + 2 Selected Optionals)
let selectedModules = ['Mathematics 1'];
let selectedOptionalModules = [];

const ESAT_MODULE_MAP = {
  'm1': 'Mathematics 1',
  'maths 1': 'Mathematics 1',
  'maths1': 'Mathematics 1',
  'mathematics 1': 'Mathematics 1',

  'm2': 'Mathematics 2',
  'maths 2': 'Mathematics 2',
  'maths2': 'Mathematics 2',
  'mathematics 2': 'Mathematics 2',

  'physics': 'Physics',
  'phy': 'Physics',
  'phys': 'Physics',

  'chemistry': 'Chemistry',
  'chem': 'Chemistry',
  'chm': 'Chemistry',

  'biology': 'Biology',
  'bio': 'Biology'
};

const OPTIONAL_MODULES_LIST = [
  { id: 'Mathematics 2', code: 'M2', icon: '🔢', name: 'Mathematics 2', desc: 'Calculus, sequences, coordinate geometry, vectors, and complex numbers.' },
  { id: 'Physics', code: 'PHYSICS', icon: '⚡', name: 'Physics', desc: 'Mechanics, electricity, waves, thermal physics, and gravitational/electric fields.' },
  { id: 'Chemistry', code: 'CHEMISTRY', icon: '🧪', name: 'Chemistry', desc: 'Atomic structure, chemical bonding, energetics, kinetics, and organic chemistry.' },
  { id: 'Biology', code: 'BIOLOGY', icon: '🧬', name: 'Biology', desc: 'Cell biology, genetics, molecular biology, physiology, and ecology.' }
];

function requiresModuleSelection() {
  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  return path.includes('/full_mock/') || path.includes('/diagnostic_test/');
}

function getTestId() {
  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  if (path.includes('full_mock_02') || path.includes('mock2')) return 'full_mock_2';
  if (path.includes('full_mock_03') || path.includes('mock3')) return 'full_mock_3';
  if (path.includes('full_mock')) return 'full_mock_1';
  if (path.includes('diag_02') || path.includes('diag2')) return 'diagnostic_2';
  if (path.includes('diag_03') || path.includes('diag3')) return 'diagnostic_3';
  if (path.includes('diag')) return 'diagnostic_1';
  return 'full_mock_1';
}

function validateModuleSelection(modules) {
  if (!Array.isArray(modules)) return { valid: false, reason: 'Modules must be an array' };
  const normalized = modules.map(m => ESAT_MODULE_MAP[String(m).trim().toLowerCase()] || null);
  if (normalized.includes(null)) {
    return { valid: false, reason: 'Contains unknown or invalid module' };
  }
  if (!normalized.includes('Mathematics 1')) {
    return { valid: false, reason: 'Mathematics 1 is compulsory and must be selected' };
  }
  if (normalized[0] !== 'Mathematics 1') {
    return { valid: false, reason: 'Mathematics 1 must be the first module' };
  }
  if (normalized.length !== 3) {
    return { valid: false, reason: 'Exactly 3 modules (Mathematics 1 + 2 optional) must be selected' };
  }
  const unique = new Set(normalized);
  if (unique.size !== 3) {
    return { valid: false, reason: 'Duplicate module selections are not permitted' };
  }
  const optionals = normalized.filter(m => m !== 'Mathematics 1');
  const validOpts = ['Mathematics 2', 'Physics', 'Chemistry', 'Biology'];
  if (optionals.length !== 2 || !optionals.every(o => validOpts.includes(o))) {
    return { valid: false, reason: 'Exactly 2 optional modules must be chosen from M2, Physics, Chemistry, Biology' };
  }
  return { valid: true, modules: normalized };
}

function assembleQuestionsForModules(testId, modules) {
  if (typeof ESAT_MODULE_POOLS === 'undefined') {
    console.warn('⚠️ ESAT_MODULE_POOLS not loaded, falling back to static questions.');
    return (typeof QUESTIONS !== 'undefined') ? QUESTIONS : [];
  }
  const pool = ESAT_MODULE_POOLS[testId] || ESAT_MODULE_POOLS['full_mock_1'];
  if (!pool) return (typeof QUESTIONS !== 'undefined') ? QUESTIONS : [];

  let assembled = [];
  modules.forEach((modName, modIdx) => {
    const modQuestions = pool[modName] || [];
    modQuestions.forEach((q, qInMod) => {
      assembled.push({
        ...q,
        number: (modIdx * 27) + qInMod + 1
      });
    });
  });
  return assembled;
}

function initModuleSelector() {
  const container = document.getElementById('optionalModulesGrid');
  if (!container) return;

  // Check URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const modParam = urlParams.get('modules');
  if (modParam) {
    const rawList = modParam.split(',').map(s => s.trim()).filter(Boolean);
    const val = validateModuleSelection(rawList);
    if (val.valid) {
      selectedOptionalModules = val.modules.filter(m => m !== 'Mathematics 1');
      console.log('✅ Loaded valid modules from URL:', val.modules);
    } else {
      console.warn('⚠️ Rejected invalid URL parameter:', modParam, val.reason);
      showAlert(`Notice: The module configuration in the URL was invalid (${val.reason}). Please select your 2 optional modules below.`);
    }
  }

  renderOptionalModuleCards();
  updateModuleSelectorUI();

  // If already 2 selected (e.g. from URL), show confirmation directly
  if (selectedOptionalModules.length === 2 && modParam) {
    proceedToConfirmScreen();
  }
}

function renderOptionalModuleCards() {
  const container = document.getElementById('optionalModulesGrid');
  if (!container) return;
  container.innerHTML = '';

  const isFull = selectedOptionalModules.length >= 2;

  OPTIONAL_MODULES_LIST.forEach(opt => {
    const isSelected = selectedOptionalModules.includes(opt.name);
    const isDisabled = isFull && !isSelected;

    const card = document.createElement('div');
    card.className = `mod-card-opt ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`;
    card.id = `modCard-${opt.code}`;
    card.onclick = () => {
      if (!isDisabled) toggleOptionalModule(opt.name);
    };

    card.innerHTML = `
      <div class="mod-card-top">
        <span class="mod-card-icon">${opt.icon}</span>
        <span class="mod-btn-select">${isSelected ? '✓ Selected' : '[ Select ]'}</span>
      </div>
      <div>
        <div class="mod-card-title">${opt.name}</div>
        <div class="mod-card-meta">27 Questions · 40 Minutes</div>
        <p style="font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-top: 6px; line-height: 1.4;">${opt.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleOptionalModule(modName) {
  const idx = selectedOptionalModules.indexOf(modName);
  if (idx !== -1) {
    selectedOptionalModules.splice(idx, 1);
  } else {
    if (selectedOptionalModules.length < 2) {
      selectedOptionalModules.push(modName);
    }
  }
  renderOptionalModuleCards();
  updateModuleSelectorUI();
}

function updateModuleSelectorUI() {
  const count = selectedOptionalModules.length;
  const countBadge = document.getElementById('modSelectionCountBadge');
  if (countBadge) {
    countBadge.textContent = `${count} of 2 Selected`;
  }

  const valBox = document.getElementById('modValidationBox');
  const btnProceed = document.getElementById('btnProceedToConfirm');

  if (count === 0) {
    if (valBox) {
      valBox.className = 'mod-validation-box pending';
      valBox.innerHTML = '<span>⚠️ Please select 2 additional modules.</span>';
    }
    if (btnProceed) {
      btnProceed.disabled = true;
      btnProceed.style.opacity = '0.4';
      btnProceed.style.cursor = 'not-allowed';
    }
  } else if (count === 1) {
    if (valBox) {
      valBox.className = 'mod-validation-box pending';
      valBox.innerHTML = '<span>⚠️ Please select 1 more module.</span>';
    }
    if (btnProceed) {
      btnProceed.disabled = true;
      btnProceed.style.opacity = '0.4';
      btnProceed.style.cursor = 'not-allowed';
    }
  } else if (count === 2) {
    const fullNames = ['Mathematics 1', ...selectedOptionalModules];
    if (valBox) {
      valBox.className = 'mod-validation-box complete';
      valBox.innerHTML = `<span>✓ Module selection complete: <strong>${fullNames.join(' + ')}</strong> (81 Questions · 120 Minutes)</span>`;
    }
    if (btnProceed) {
      btnProceed.disabled = false;
      btnProceed.style.opacity = '1';
      btnProceed.style.cursor = 'pointer';
    }
  }
}

function proceedToConfirmScreen() {
  if (selectedOptionalModules.length !== 2) {
    showAlert('Please select exactly 2 optional modules before proceeding.');
    return;
  }
  const s1 = document.getElementById('stepChooseModules');
  const s2 = document.getElementById('stepConfirmRegistration');
  if (s1 && s2) {
    s1.style.display = 'none';
    s2.style.display = 'block';

    const c1 = document.getElementById('confirmMod1');
    const c2 = document.getElementById('confirmMod2');
    if (c1) c1.textContent = `✓ ${selectedOptionalModules[0]} (27 Q · 40 Min)`;
    if (c2) c2.textContent = `✓ ${selectedOptionalModules[1]} (27 Q · 40 Min)`;
  }
}

function backToModuleSelector() {
  const s1 = document.getElementById('stepChooseModules');
  const s2 = document.getElementById('stepConfirmRegistration');
  if (s1 && s2) {
    s2.style.display = 'none';
    s1.style.display = 'block';
  }
}

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

document.addEventListener('DOMContentLoaded', () => {
  const hasActiveSession = restoreSavedState();
  if (!hasActiveSession && requiresModuleSelection()) {
    initModuleSelector();
  }
  if (getActiveQuestions().length > 0) {
    initPalette();
  }
});

function getSessionKey() {
  const path = (window.location.pathname || 'esat_test').replace(/\\/g, '/');
  return `esat_session_${path}`;
}

function isThreeModuleTest() {
  return getActiveQuestions().length === 81;
}

function getModuleForIndex(idx) {
  if (!isThreeModuleTest()) return 0;
  if (idx < 27) return 0;
  if (idx < 54) return 1;
  return 2;
}

function getModuleRange(modIdx) {
  const qs = getActiveQuestions();
  if (!isThreeModuleTest()) {
    return { start: 0, end: Math.max(0, qs.length - 1) };
  }
  const start = modIdx * 27;
  const end = Math.min(qs.length - 1, (modIdx + 1) * 27 - 1);
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
  const qs = getActiveQuestions();

  qs.forEach((q, idx) => {
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
  const qs = getActiveQuestions();
  if (isThreeModuleTest()) {
    const qMod = getModuleForIndex(idx);
    if (completedModules[qMod]) {
      showAlert(`🔒 Module ${qMod + 1} (${qs[qMod * 27]?.module || ''}) has been completed and sealed in accordance with official ESAT exam rules.`);
      return;
    }
    if (qMod > currentModuleIndex) {
      showAlert(`🔒 Module ${qMod + 1} (${qs[qMod * 27]?.module || ''}) will unlock once you complete the current module.`);
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

  // If this test requires module selection, validate selection strictly:
  if (requiresModuleSelection()) {
    if (selectedOptionalModules.length !== 2) {
      showAlert('Please select exactly 2 optional modules before starting.');
      return;
    }
    const fullSelected = ['Mathematics 1', ...selectedOptionalModules];
    const val = validateModuleSelection(fullSelected);
    if (!val.valid) {
      showAlert(`Invalid module configuration: ${val.reason}`);
      return;
    }
    selectedModules = val.modules;

    // Assemble questions for the selected 3 modules
    const testId = getTestId();
    const assembled = assembleQuestionsForModules(testId, selectedModules);
    if (assembled && assembled.length === 81) {
      activeQuestions = assembled;
      window.activeQuestions = assembled;
    }
  } else {
    activeQuestions = (typeof QUESTIONS !== 'undefined') ? QUESTIONS : [];
    window.activeQuestions = activeQuestions;
    selectedModules = [...new Set(activeQuestions.map(q => q.module || 'Mathematics 1'))];
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

  const qs = getActiveQuestions();
  const testTitle = document.title || 'ESAT Assessment';
  const modulesInTest = selectedModules && selectedModules.length > 0 ? selectedModules : [...new Set(qs.map(q => q.module || 'Mathematics 1'))];
  saveRegistration(studentData, testTitle, modulesInTest, studentData.targetCourse);

  document.getElementById('pageReg').classList.remove('active');
  document.getElementById('pageTest').classList.add('active');

  // Determine Duration
  let modDurationSec = 2400; // 40 min default
  if (isThreeModuleTest()) {
    modDurationSec = 40 * 60; // strictly 40 minutes per module
  } else if (typeof TEST_DURATION_MINUTES !== 'undefined') {
    modDurationSec = TEST_DURATION_MINUTES * 60;
  } else if (qs.length === 27) {
    modDurationSec = 40 * 60;
  } else {
    modDurationSec = Math.max(15, Math.round(qs.length * 1.5)) * 60;
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
  const timerQs = getActiveQuestions();
  if (modNameEl && timerQs.length > 0) {
    const curQ = timerQs[currentQIndex];
    if (isThreeModuleTest()) {
      const activeMod = (selectedModules && selectedModules[currentModuleIndex]) || (curQ ? (curQ.module || '') : '');
      modNameEl.textContent = `Module ${currentModuleIndex + 1} of 3: ${activeMod}`;
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

  const qs = getActiveQuestions();
  const nextModName = (selectedModules && selectedModules[currentModuleIndex]) || (qs[nextStartQ]?.module || 'Next Module');
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
  const qs = getActiveQuestions();
  if (idx < 0 || idx >= qs.length) return;
  currentQIndex = idx;

  const q = qs[idx];

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
      progress.textContent = `Question ${idx + 1} of ${qs.length}`;
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
      btnNext.textContent = (idx === qs.length - 1) ? 'Review & Submit Assessment →' : 'Next →';
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
    const qs = getActiveQuestions();
    if (currentQIndex < qs.length - 1) {
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
    const qs = getActiveQuestions();
    let msg = `You are about to finish Module ${currentModuleIndex + 1} (${qs[range.start]?.module || ''}).\n`;
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
  const qs = getActiveQuestions();
  qs.forEach((_, idx) => {
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
  const qs = getActiveQuestions();
  const answeredCount = Object.keys(userAnswers).length;
  const pct = qs.length > 0 ? Math.round((answeredCount / qs.length) * 100) : 0;

  const fill = document.getElementById('progFill');
  if (fill) fill.style.width = `${pct}%`;

  const lbl = document.getElementById('progLbl');
  if (lbl) lbl.textContent = `${answeredCount} / ${qs.length} answered`;
}

function confirmSubmit() {
  const qs = getActiveQuestions();
  const answeredCount = Object.keys(userAnswers).length;
  const unans = qs.length - answeredCount;
  const modalMsg = document.getElementById('modalMsg');
  if (modalMsg) {
    if (unans > 0) {
      modalMsg.textContent = `You have ${unans} unanswered question(s) out of ${qs.length}. Are you sure you want to finish and submit your ESAT assessment?`;
    } else {
      modalMsg.textContent = `You have answered all ${qs.length} questions. Are you ready to submit your ESAT assessment?`;
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
      selectedModules: selectedModules,
      selectedOptionalModules: selectedOptionalModules,
      questions: getActiveQuestions(),
      started: true,
      isSubmitted: isSubmitted,
      timestamp: Date.now()
    }));
  } catch (e) { }
}

function restoreSavedState() {
  try {
    const key = getSessionKey();
    const raw = localStorage.getItem(key);
    if (!raw) return false;

    const data = JSON.parse(raw);
    if (!data || !data.started) return false;

    // Reject stale session (older than 4 hours)
    if (Date.now() - (data.timestamp || 0) > 1000 * 60 * 240) {
      localStorage.removeItem(key);
      return false;
    }

    if (data.isSubmitted) {
      localStorage.removeItem(key);
      return false;
    }

    studentData = data.student || {};
    userAnswers = data.userAnswers || {};
    attemptId = data.attemptId || ('esat_' + Date.now());
    completedModules = data.completedModules || [false, false, false];
    currentModuleIndex = data.currentModuleIndex || 0;
    moduleExpiryTimestamp = data.moduleExpiryTimestamp || 0;

    if (data.selectedModules && Array.isArray(data.selectedModules) && data.selectedModules.length === 3) {
      selectedModules = data.selectedModules;
      selectedOptionalModules = selectedModules.filter(m => m !== 'Mathematics 1');
    }

    if (data.questions && Array.isArray(data.questions) && data.questions.length > 0) {
      activeQuestions = data.questions;
      window.activeQuestions = data.questions;
    }

    const now = Date.now();
    let rem = Math.max(0, Math.round((moduleExpiryTimestamp - now) / 1000));

    if (rem <= 0) {
      if (isThreeModuleTest() && currentModuleIndex < 2) {
        advanceToNextModule(true);
        return true;
      } else {
        doSubmit(true);
        return true;
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
    return true;
  } catch (e) {
    console.warn('Error restoring saved session:', e);
    return false;
  }
}

let lastSubmissionPromise = null;
let canonicalSubmittedResult = null;

/**
 * Submit Test & Calculate ESAT Metrics (Idempotent submission guard)
 */
async function doSubmit(isAuto = false) {
  if (canonicalSubmittedResult) {
    renderResults(canonicalSubmittedResult);
    return;
  }
  if (isSubmitting) {
    if (lastSubmissionPromise) await lastSubmissionPromise;
    return;
  }
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

  lastSubmissionPromise = (async () => {
    try {
      const qs = getActiveQuestions();
      const testTitle = document.title || 'ESAT Assessment';
      let testType = 'full_mock';
      if (qs.length === 27) testType = 'mock_test';
      else if (testTitle.toLowerCase().includes('diagnostic')) testType = 'diagnostic';
      else if (testTitle.toLowerCase().includes('topic')) testType = 'topic_test';

      // Compute ESAT results via canonical scoring engine
      const resultObj = typeof computeESATResults === 'function'
        ? computeESATResults(qs, userAnswers, studentData, testTitle, testType)
        : fallbackComputeResults(qs, userAnswers, studentData, testTitle, testType);

      resultObj.attemptId = attemptId || ('esat_' + Date.now());
      resultObj.modulesTaken = (selectedModules && selectedModules.length > 0)
        ? selectedModules
        : (resultObj.moduleScores || []).map(m => m.module);

      // Save persistent attempt to Supabase
      await saveToSupabase(resultObj);

      canonicalSubmittedResult = resultObj;
      isSubmitted = true;
      isSubmitting = false;

      // Clear local temporary session
      try {
        localStorage.removeItem(getSessionKey());
      } catch (e) { }

      if (overlay) overlay.classList.remove('active');

      renderResults(resultObj);
    } catch (err) {
      console.error('Error during test submission:', err);
      isSubmitting = false;
      if (overlay) overlay.classList.remove('active');
    }
  })();

  await lastSubmissionPromise;
}

/**
 * Safe fallback computation with exact parity to scoring.js
 */
function fallbackComputeResults(questions, answers, student, title, type) {
  if (typeof computeESATResults === 'function') {
    return computeESATResults(questions, answers, student, title, type);
  }

  const moduleMap = {};
  const topicMap = {};
  const details = [];
  const moduleOrder = [];

  let totalQuestions = questions.length;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalUnattempted = 0;

  questions.forEach((q, idx) => {
    const chosen = answers[idx];
    const answer = q.answer !== undefined ? q.answer : q.correctAnswer;
    const rawMod = q.module || q.subject || q.section || q.category || q.testModule || q.moduleId || 'Mathematics 1';
    
    let norm = { code: 'M1', name: 'Mathematics 1' };
    if (typeof normalizeModule === 'function') {
      norm = normalizeModule(rawMod);
    } else {
      const s = String(rawMod).trim().toLowerCase().replace(/[^a-z0-9]/g, '');
      if (s === 'm1' || s.startsWith('math1') || s.startsWith('maths1')) norm = { code: 'M1', name: 'Mathematics 1' };
      else if (s === 'm2' || s.startsWith('math2') || s.startsWith('maths2')) norm = { code: 'M2', name: 'Mathematics 2' };
      else if (s.startsWith('phy')) norm = { code: 'PHYSICS', name: 'Physics' };
      else if (s.startsWith('chem') || s.startsWith('chm')) norm = { code: 'CHEMISTRY', name: 'Chemistry' };
      else if (s.startsWith('bio')) norm = { code: 'BIOLOGY', name: 'Biology' };
      else norm = { code: String(rawMod).toUpperCase().slice(0, 10), name: String(rawMod) };
    }

    const modCode = norm.code;
    const modName = norm.name;
    const topicName = q.topic || 'General';

    if (!moduleMap[modCode]) {
      moduleMap[modCode] = { code: modCode, module: modName, correct: 0, wrong: 0, unattempted: 0, total: 0 };
      moduleOrder.push(modCode);
    }
    moduleMap[modCode].total++;

    if (!topicMap[topicName]) {
      topicMap[topicName] = { topic: topicName, module: modName, correct: 0, total: 0 };
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
      question: q.text || q.question,
      options: q.options || q.choices || [],
      chosen: chosen !== undefined ? chosen : -1,
      answer: answer,
      status: status,
      explanation: q.explanation || ''
    });
  });

  const modulesDict = {};
  const moduleScores = moduleOrder.map(code => {
    const m = moduleMap[code];
    const pct = m.total > 0 ? parseFloat(((m.correct / m.total) * 100).toFixed(2)) : 0.0;
    const acc = m.total > 0 ? parseFloat(((m.correct / m.total) * 100).toFixed(1)) : 0.0;
    let scaled = '1.0';
    if (typeof calculateModuleESATScore === 'function') {
      scaled = calculateModuleESATScore(m.correct, m.total);
    } else {
      const normVal = Math.min(27, Math.max(0, Math.round((m.correct / m.total) * 27)));
      const table = (typeof ESAT_RAW_TO_SCALED_TABLE !== 'undefined') ? ESAT_RAW_TO_SCALED_TABLE : {
        0: 1.0, 1: 1.2, 2: 1.5, 3: 1.8, 4: 2.1, 5: 2.4, 6: 2.7, 7: 3.0, 8: 3.3, 9: 3.6,
        10: 4.0, 11: 4.3, 12: 4.6, 13: 5.0, 14: 5.3, 15: 5.6, 16: 6.0, 17: 6.3, 18: 6.6,
        19: 7.0, 20: 7.3, 21: 7.6, 22: 8.0, 23: 8.3, 24: 8.6, 25: 8.8, 26: 9.0, 27: 9.0
      };
      scaled = Number(table[normVal] || 1.0).toFixed(1);
    }
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
      percentage: pct,
      accuracy: acc,
      esatScore: scaled,
      percentile: typeof getESATPercentile === 'function' ? getESATPercentile(scaled) : '~50th',
      scoreLabel: 'Estimated ESAT Score'
    };
    modulesDict[code] = modObj;
    return modObj;
  });

  const topicScores = Object.values(topicMap).map(t => ({
    topic: t.topic,
    module: t.module,
    correct: t.correct,
    total: t.total,
    accuracy: t.total > 0 ? parseFloat(((t.correct / t.total) * 100).toFixed(1)) : 0
  }));

  const totalAttempted = totalCorrect + totalWrong;
  const overallPercentage = totalQuestions > 0 ? parseFloat(((totalCorrect / totalQuestions) * 100).toFixed(2)) : 0.0;
  const overallAccuracy = totalQuestions > 0 ? parseFloat(((totalCorrect / totalQuestions) * 100).toFixed(1)) : 0.0;

  return {
    student: student || {},
    testTitle: title || 'ESAT Assessment',
    testType: type,
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
    answers: answers,
    submitTime: new Date().toLocaleString(),
    attemptId: attemptId
  };
}

/**
 * Render Post-Test Result & Review Screen with Full Module-Wise & Overall Metrics
 */
function renderResults(res) {
  document.getElementById('pageTest').classList.remove('active');
  const resPage = document.getElementById('pageResult');
  resPage.classList.add('active');

  const wrap = document.getElementById('resWrap') || document.getElementById('resultContent');
  if (!wrap) return;

  const moduleScores = res.moduleScores || [];
  const topicScores = res.topicScores || [];

  const rawScore = res.rawScore !== undefined ? res.rawScore : res.totalCorrect;
  const totalQuestions = res.totalQuestions || 81;
  const percentage = res.percentage !== undefined ? res.percentage : res.overallAccuracy;
  const correct = res.correct !== undefined ? res.correct : res.totalCorrect;
  const incorrect = res.incorrect !== undefined ? res.incorrect : res.totalWrong;
  const unanswered = res.unanswered !== undefined ? res.unanswered : res.totalUnattempted;
  const attempted = res.attempted !== undefined ? res.attempted : (correct + incorrect);

  // Dynamic modules configuration badge
  const configString = moduleScores.map(m => m.code || m.module).join(' + ');

  // 1. Module Score Cards
  const moduleCardsHtml = moduleScores.map(m => {
    const modAttempted = m.attempted !== undefined ? m.attempted : (m.correct + (m.incorrect || m.wrong || 0));
    const modIncorrect = m.incorrect !== undefined ? m.incorrect : m.wrong;
    const modUnanswered = m.unanswered !== undefined ? m.unanswered : m.unattempted;
    const modPct = m.percentage !== undefined ? m.percentage : m.accuracy;

    return `
      <div style="background:rgba(255,255,255,0.03); border:1.5px solid rgba(59,130,246,0.3); border-radius:16px; padding:20px; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
            <div>
              <div style="font-size:0.72rem; text-transform:uppercase; color:#93c5fd; font-weight:800; letter-spacing:0.06em;">${m.code || 'MODULE'}</div>
              <div style="font-size:1.15rem; font-weight:700; color:#fff;">${m.module}</div>
            </div>
            <div style="background:rgba(59,130,246,0.18); color:#60a5fa; padding:4px 10px; border-radius:20px; font-size:0.75rem; font-weight:700;">
              ${m.percentile || 'Estimated Score'}
            </div>
          </div>

          <div style="display:flex; align-items:baseline; gap:10px; margin:12px 0 6px;">
            <div style="font-family:'Syne',sans-serif; font-size:2.5rem; font-weight:800; color:#38bdf8; line-height:1;">
              ${m.esatScore} <span style="font-size:1.2rem; color:rgba(255,255,255,0.45); font-weight:600;">/ 9.0</span>
            </div>
            <div style="font-size:1.05rem; font-weight:700; color:#fff;">
              (${m.correct} / ${m.total} — ${modPct}%)
            </div>
          </div>
        </div>

        <div style="margin-top:14px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.08); display:grid; grid-template-columns:repeat(4, 1fr); gap:6px; text-align:center; font-size:0.78rem;">
          <div style="background:rgba(255,255,255,0.02); padding:6px 2px; border-radius:6px;">
            <div style="color:var(--muted); font-size:0.68rem; font-weight:600;">ATTEMPTED</div>
            <div style="font-weight:700; color:#a78bfa;">${modAttempted}</div>
          </div>
          <div style="background:rgba(16,185,129,0.08); padding:6px 2px; border-radius:6px;">
            <div style="color:#6ee7b7; font-size:0.68rem; font-weight:600;">CORRECT</div>
            <div style="font-weight:700; color:#10b981;">${m.correct}</div>
          </div>
          <div style="background:rgba(239,68,68,0.08); padding:6px 2px; border-radius:6px;">
            <div style="color:#fca5a5; font-size:0.68rem; font-weight:600;">INCORRECT</div>
            <div style="font-weight:700; color:#ef4444;">${modIncorrect}</div>
          </div>
          <div style="background:rgba(245,158,11,0.08); padding:6px 2px; border-radius:6px;">
            <div style="color:#fcd34d; font-size:0.68rem; font-weight:600;">UNANSWERED</div>
            <div style="font-weight:700; color:#f59e0b;">${modUnanswered}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

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
      <!-- HEADER -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; margin-bottom:24px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:18px;">
        <div>
          <h2 style="font-family:'Syne',sans-serif; font-size:1.85rem; margin-bottom:6px; color:#fff;">📊 ESAT Performance Report</h2>
          <p style="color:var(--muted); font-size:0.9rem;">
            Candidate: <strong>${res.student.name || 'Candidate'}</strong> &nbsp;|&nbsp; 
            Target: <strong>${res.student.targetCourse || 'Engineering'}</strong> &nbsp;|&nbsp; 
            ${res.submitTime}
            ${configString ? ` &nbsp;|&nbsp; <span style="color:#38bdf8; font-weight:700;">🧩 Modules: ${configString}</span>` : ''}
          </p>
        </div>
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <button class="btn btn-primary" style="width:auto; font-size:0.88rem; padding:9px 20px; cursor:pointer;" onclick="window.print()">🖨️ Print Report</button>
          <a href="${dashboardUrl}" class="btn btn-outline" style="width:auto; text-decoration:none; font-size:0.88rem; padding:9px 16px;">📈 My Dashboard</a>
          <a href="${portalHomeUrl}" class="btn btn-outline" style="width:auto; text-decoration:none; font-size:0.88rem; padding:9px 16px;">← Home</a>
        </div>
      </div>

      <!-- OVERALL RESULT HERO CARD -->
      <div style="background:linear-gradient(135deg, rgba(30,58,138,0.25) 0%, rgba(15,23,42,0.6) 100%); border:1.5px solid rgba(59,130,246,0.35); border-radius:18px; padding:24px; margin-bottom:28px; box-shadow:0 10px 30px rgba(0,0,0,0.3);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:18px; margin-bottom:20px;">
          <div>
            <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:#93c5fd; font-weight:800; margin-bottom:4px;">OVERALL PERFORMANCE</div>
            <div style="font-family:'Syne',sans-serif; font-size:3.2rem; font-weight:800; color:#fff; line-height:1;">
              ${rawScore} <span style="font-size:1.6rem; color:rgba(255,255,255,0.45); font-weight:600;">/ ${totalQuestions}</span>
            </div>
            <div style="font-size:0.98rem; color:#60a5fa; font-weight:700; margin-top:6px;">
              Raw Score: ${rawScore} / ${totalQuestions} &nbsp;·&nbsp; Overall: ${percentage}%
            </div>
          </div>
          <div style="display:flex; gap:14px; flex-wrap:wrap;">
            <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:12px 20px; text-align:center; min-width:115px;">
              <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Percentage</div>
              <div style="font-size:1.6rem; font-weight:800; color:#38bdf8; font-family:'Syne',sans-serif;">${percentage}%</div>
            </div>
            <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:12px 20px; text-align:center; min-width:115px;">
              <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Attempted</div>
              <div style="font-size:1.6rem; font-weight:800; color:#a78bfa; font-family:'Syne',sans-serif;">${attempted}</div>
            </div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:12px; text-align:center;">
          <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:10px; padding:12px;">
            <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Total Questions</div>
            <div style="font-size:1.4rem; font-weight:800; color:#fff; font-family:'Syne',sans-serif;">${totalQuestions}</div>
          </div>
          <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.25); border-radius:10px; padding:12px;">
            <div style="font-size:0.72rem; color:#6ee7b7; text-transform:uppercase; font-weight:700;">Correct</div>
            <div style="font-size:1.4rem; font-weight:800; color:#10b981; font-family:'Syne',sans-serif;">${correct}</div>
          </div>
          <div style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25); border-radius:10px; padding:12px;">
            <div style="font-size:0.72rem; color:#fca5a5; text-transform:uppercase; font-weight:700;">Incorrect</div>
            <div style="font-size:1.4rem; font-weight:800; color:#ef4444; font-family:'Syne',sans-serif;">${incorrect}</div>
          </div>
          <div style="background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.25); border-radius:10px; padding:12px;">
            <div style="font-size:0.72rem; color:#fcd34d; text-transform:uppercase; font-weight:700;">Unanswered</div>
            <div style="font-size:1.4rem; font-weight:800; color:#f59e0b; font-family:'Syne',sans-serif;">${unanswered}</div>
          </div>
        </div>
      </div>

      <!-- MODULE PERFORMANCE CARDS -->
      <h3 style="font-family:'Syne',sans-serif; font-size:1.25rem; margin-bottom:14px; color:#f1f5f9;">🎯 Module-wise Estimated ESAT Scores (1.0 – 9.0)</h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-bottom:28px;">
        ${moduleCardsHtml}
      </div>

      <!-- DETAILED MODULE PERFORMANCE TABLE -->
      <h3 style="font-family:'Syne',sans-serif; font-size:1.25rem; margin-bottom:14px; color:#f1f5f9;">📋 Detailed Module Performance Table</h3>
      <div style="width:100%; overflow-x:auto; -webkit-overflow-scrolling:touch; margin-bottom:32px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.02);">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.88rem;">
          <thead>
            <tr style="background:rgba(255,255,255,0.05); border-bottom:1px solid rgba(255,255,255,0.12); color:#93c5fd; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">
              <th style="padding:12px 16px;">Module</th>
              <th style="padding:12px 14px; text-align:center;">Questions</th>
              <th style="padding:12px 14px; text-align:center;">Attempted</th>
              <th style="padding:12px 14px; text-align:center;">Correct</th>
              <th style="padding:12px 14px; text-align:center;">Incorrect</th>
              <th style="padding:12px 14px; text-align:center;">Unanswered</th>
              <th style="padding:12px 14px; text-align:center;">Score</th>
              <th style="padding:12px 14px; text-align:center;">Percentage</th>
              <th style="padding:12px 16px; text-align:right;">ESAT Scaled Score</th>
            </tr>
          </thead>
          <tbody>
            ${moduleScores.map(m => {
              const modAttempted = m.attempted !== undefined ? m.attempted : (m.correct + (m.incorrect || m.wrong || 0));
              const modIncorrect = m.incorrect !== undefined ? m.incorrect : m.wrong;
              const modUnanswered = m.unanswered !== undefined ? m.unanswered : m.unattempted;
              const modPct = m.percentage !== undefined ? m.percentage : m.accuracy;
              return `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                  <td style="padding:12px 16px; font-weight:700; color:#fff;">
                    ${m.module}
                    ${m.code ? `<span style="font-size:0.72rem; color:#60a5fa; background:rgba(59,130,246,0.15); padding:2px 6px; border-radius:4px; margin-left:6px; font-weight:600;">${m.code}</span>` : ''}
                  </td>
                  <td style="padding:12px 14px; text-align:center; color:rgba(255,255,255,0.85);">${m.total}</td>
                  <td style="padding:12px 14px; text-align:center; color:#a78bfa; font-weight:600;">${modAttempted}</td>
                  <td style="padding:12px 14px; text-align:center; color:#10b981; font-weight:700;">${m.correct}</td>
                  <td style="padding:12px 14px; text-align:center; color:#ef4444; font-weight:700;">${modIncorrect}</td>
                  <td style="padding:12px 14px; text-align:center; color:#f59e0b; font-weight:700;">${modUnanswered}</td>
                  <td style="padding:12px 14px; text-align:center; color:#38bdf8; font-weight:700;">${m.correct} / ${m.total}</td>
                  <td style="padding:12px 14px; text-align:center; color:#60a5fa; font-weight:700;">${modPct}%</td>
                  <td style="padding:12px 16px; text-align:right; font-family:'Syne',sans-serif; font-size:1.1rem; font-weight:800; color:#38bdf8;">
                    ${m.esatScore} <span style="font-size:0.78rem; color:rgba(255,255,255,0.4); font-weight:600;">/ 9.0</span>
                  </td>
                </tr>
              `;
            }).join('')}
            <tr style="background:rgba(59,130,246,0.08); border-top:1.5px solid rgba(59,130,246,0.35); font-weight:800;">
              <td style="padding:14px 16px; color:#fff;">TOTAL</td>
              <td style="padding:14px 14px; text-align:center; color:#fff;">${totalQuestions}</td>
              <td style="padding:14px 14px; text-align:center; color:#a78bfa;">${attempted}</td>
              <td style="padding:14px 14px; text-align:center; color:#10b981;">${correct}</td>
              <td style="padding:14px 14px; text-align:center; color:#ef4444;">${incorrect}</td>
              <td style="padding:14px 14px; text-align:center; color:#f59e0b;">${unanswered}</td>
              <td style="padding:14px 14px; text-align:center; color:#38bdf8;">${rawScore} / ${totalQuestions}</td>
              <td style="padding:14px 14px; text-align:center; color:#60a5fa;">${percentage}%</td>
              <td style="padding:14px 16px; text-align:right; color:rgba(255,255,255,0.5); font-size:0.8rem; font-weight:600;">Official Scale</td>
            </tr>
          </tbody>
        </table>
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

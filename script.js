/* ============================================================
   EduQuest ESAT Test Engine & Assessment Controller (script.js)
   Official Cambridge / UAT-UK ESAT Format Engine
   - Supports Full Mock (3 Modules = 81 Qs / 120 Min)
   - Supports Module Mocks (1 Module = 27 Qs / 40 Min)
   - Supports Diagnostic Assessments (81 Qs / 120 Min)
   - Supports Topic Tests (10 - 27 Qs / Configurable Duration)
   - Module-Wise Scoring (1.0 - 9.0 to 1 decimal place)
   - Zero Negative Marking
   ============================================================ */

let currentQIndex = 0;
let userAnswers = {};
let timerInterval = null;
let secondsLeft = 2400; // Default 40 min per module (or configured by test)
let studentData = {};
let activeTestType = 'full_mock';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

document.addEventListener('DOMContentLoaded', () => {
  if (typeof QUESTIONS !== 'undefined' && QUESTIONS.length > 0) {
    initPalette();
    restoreSavedState();
  }
});

/**
 * Initialize Question Palette grid in sidebar
 */
function initPalette() {
  const pal = document.getElementById('palette');
  if (!pal) return;
  pal.innerHTML = '';

  QUESTIONS.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = `pal-num ${idx === 0 ? 'current' : ''}`;
    btn.id = `pal-${idx}`;
    btn.textContent = idx + 1;
    btn.title = `Question ${idx + 1} (${q.module || 'ESAT'})`;
    btn.onclick = () => goToQuestion(idx);
    pal.appendChild(btn);
  });
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

  const testTitle = document.title || 'ESAT Assessment';
  
  // Collect modules present in this test
  const modulesInTest = [...new Set(QUESTIONS.map(q => q.module || 'Mathematics 1'))];
  saveRegistration(studentData, testTitle, modulesInTest, studentData.targetCourse);

  document.getElementById('pageReg').classList.remove('active');
  document.getElementById('pageTest').classList.add('active');

  // Determine Duration
  if (typeof TEST_DURATION_MINUTES !== 'undefined') {
    secondsLeft = TEST_DURATION_MINUTES * 60;
  } else if (QUESTIONS.length >= 81) {
    secondsLeft = 120 * 60; // 120 minutes for 3-module full mock
  } else if (QUESTIONS.length === 27) {
    secondsLeft = 40 * 60;  // 40 minutes for single module mock
  } else {
    secondsLeft = Math.max(15, Math.round(QUESTIONS.length * 1.5)) * 60;
  }

  startTimer();
  loadQuestion(0);
}

/**
 * Start and manage Countdown Timer
 */
function startTimer() {
  updateTimerDisplay();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      showAlert('⏱ Time is up! Submitting your test now.');
      doSubmit();
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
  if (progress) progress.textContent = `Q ${idx + 1} of ${QUESTIONS.length}`;

  const modNameEl = document.getElementById('currentModuleName');
  if (modNameEl) {
    modNameEl.textContent = q.module || 'Mathematics 1';
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
    choices.forEach((opt, optIdx) => {
      const btn = document.createElement('div');
      const isSelected = userAnswers[idx] === optIdx;
      btn.className = `opt-btn ${isSelected ? 'selected' : ''}`;
      btn.onclick = () => selectOption(optIdx);
      btn.innerHTML = `
        <div class="opt-letter">${LETTERS[optIdx]}</div>
        <div style="flex:1;">${opt}</div>
      `;
      optsContainer.appendChild(btn);
    });
  }

  const btnPrev = document.getElementById('btnPrev');
  if (btnPrev) {
    btnPrev.style.visibility = idx === 0 ? 'hidden' : 'visible';
  }

  const btnNext = document.getElementById('btnNext');
  if (btnNext) {
    btnNext.textContent = idx === QUESTIONS.length - 1 ? 'Review & Submit →' : 'Next →';
  }

  updatePaletteHighlight();
  renderMath(document.querySelector('.test-main') || document.body);
}

/**
 * Handle Option Selection
 */
function selectOption(optIdx) {
  userAnswers[currentQIndex] = optIdx;
  loadQuestion(currentQIndex);
  updateProgress();
  saveStateLocally();
}

function nextQ() {
  if (currentQIndex < QUESTIONS.length - 1) {
    loadQuestion(currentQIndex + 1);
  } else {
    confirmSubmit();
  }
}

function prevQ() {
  if (currentQIndex > 0) {
    loadQuestion(currentQIndex - 1);
  }
}

function goToQuestion(idx) {
  loadQuestion(idx);
}

function updatePaletteHighlight() {
  QUESTIONS.forEach((_, idx) => {
    const el = document.getElementById(`pal-${idx}`);
    if (el) {
      el.classList.remove('current', 'answered');
      if (idx === currentQIndex) el.classList.add('current');
      if (userAnswers[idx] !== undefined) el.classList.add('answered');
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
      modalMsg.textContent = `You have ${unans} unanswered question(s) out of ${QUESTIONS.length}. Are you sure you want to submit?`;
    } else {
      modalMsg.textContent = `You have answered all ${QUESTIONS.length} questions. Are you ready to submit your ESAT assessment?`;
    }
  }
  document.getElementById('modalBg').classList.add('open');
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
}

function showAlert(msg) {
  const alertMsg = document.getElementById('alertMsg');
  if (alertMsg) alertMsg.textContent = msg;
  const alertBg = document.getElementById('alertBg');
  if (alertBg) alertBg.classList.add('open');
}

function saveStateLocally() {
  try {
    const key = `esat_progress_${document.title || 'test'}`;
    localStorage.setItem(key, JSON.stringify({
      answers: userAnswers,
      student: studentData,
      secondsLeft: secondsLeft,
      timestamp: Date.now()
    }));
  } catch (e) {}
}

function restoreSavedState() {
  try {
    const key = `esat_progress_${document.title || 'test'}`;
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.answers && (Date.now() - data.timestamp < 1000 * 60 * 180)) {
        userAnswers = data.answers || {};
        updateProgress();
      }
    }
  } catch (e) {}
}

/**
 * Submit Test & Calculate ESAT Metrics
 */
async function doSubmit() {
  closeModal();
  if (timerInterval) clearInterval(timerInterval);

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

  // Save persistent attempt to Supabase
  await saveToSupabase(resultObj);

  // Clear local temporary state
  try {
    localStorage.removeItem(`esat_progress_${document.title || 'test'}`);
  } catch (e) {}

  if (overlay) overlay.classList.remove('active');

  renderResults(resultObj);
}

/**
 * Fallback computation if scoring.js is not loaded
 */
function fallbackComputeResults(questions, answers, student, title, type) {
  let correct = 0;
  let total = questions.length;
  questions.forEach((q, idx) => {
    const chosen = answers[idx];
    const ans = q.answer !== undefined ? q.answer : q.correctAnswer;
    if (chosen === ans) correct++;
  });
  return {
    student: student,
    testTitle: title,
    testType: type,
    totalQuestions: total,
    totalCorrect: correct,
    totalWrong: total - correct,
    totalUnattempted: 0,
    overallAccuracy: ((correct / total) * 100).toFixed(1),
    moduleScores: [{
      module: 'Mathematics 1',
      correct: correct,
      total: total,
      accuracy: ((correct / total) * 100).toFixed(1),
      esatScore: (1.0 + (correct / total) * 8.0).toFixed(1)
    }],
    details: [],
    submitTime: new Date().toLocaleString()
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
            ${d.difficulty ? `<span style="font-size:0.72rem; color:rgba(255,255,255,0.4); margin-left:6px;">[${d.difficulty}]</span>` : ''}
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
        ℹ️ <strong>ESAT Scoring Methodology:</strong> Official ESAT results are reported separately per module on a <strong>1.0 – 9.0 scale</strong> (to 1 decimal place). No single combined composite score is issued. EduQuest practice scores are calculated via calibrated Rasch equating models. Marking rule: <strong>+1 per correct answer, 0 for incorrect/unanswered (no negative marking)</strong>.
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

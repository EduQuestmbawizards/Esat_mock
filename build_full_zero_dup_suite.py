"""
Master Execution Pipeline: Zero Duplication ESAT Test Suite
"""

import os
import json
import re

from generate_unique_banks import (
    build_maths1_288,
    build_maths2_207,
    build_physics_207,
    build_chemistry_207,
    build_biology_207
)

BASE_DIR = r"c:\Users\priya\OneDrive\Desktop\esat"

import random

GLOBAL_HASHES = set()

def validate_and_register(q, seed=None):
    norm = re.sub(r'[^a-zA-Z0-9]', '', q['question'].lower())
    if norm in GLOBAL_HASHES:
        raise ValueError(f"DUPLICATE FOUND:\n{q['question']}")
    GLOBAL_HASHES.add(norm)
    assert len(q['options']) == 5
    assert len(set(q['options'])) == 5

    # Deterministically shuffle options and update answer index
    correct_opt = q['options'][q['answer']]
    opts = list(q['options'])
    rng = random.Random(seed if seed is not None else hash(norm) % 1000000)
    rng.shuffle(opts)
    q['options'] = opts
    q['answer'] = opts.index(correct_opt)

    assert q['answer'] in [0, 1, 2, 3, 4]
    return q

def save_test_bundle(folder_path, html_name, js_name, title, duration_min, questions, depth=2):
    os.makedirs(folder_path, exist_ok=True)
    for i, q in enumerate(questions):
        q['number'] = i + 1

    js_file = os.path.join(folder_path, js_name)
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(f"const QUESTIONS = {json.dumps(questions, indent=2)};\n")

    prefix = '../' * depth
    html_content = f"""<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} – EduQuest</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
  <script src="{prefix}supabase.js"></script>
  <script src="{prefix}access-check.js"></script>
  <script src="{prefix}country-codes.js"></script>
  <script src="{prefix}scoring.js"></script>
  <script src="{js_name}"></script>
  <link rel="stylesheet" href="{prefix}test.css">
  <script> const TEST_DURATION_MINUTES = {duration_min}; </script>
</head>

<body>
  <!-- PAGE 1: REGISTRATION -->
  <div class="page active" id="pageReg">
    <header class="hdr">
      <a href="{prefix}index.html" class="hdr-brand" style="text-decoration:none; color:#fff;"><span>📐</span><span>EduQuest</span><span class="hdr-pill">ESAT Portal</span></a>
      <a href="{prefix}index.html" class="btn btn-outline" style="width:auto; padding:6px 14px; font-size:0.82rem; text-decoration:none;">🏠 Home Portal</a>
    </header>
    <div class="reg-wrap">
      <div class="reg-card">
        <div class="reg-top">
          <span class="icon">📐</span>
          <h2>{title}</h2>
          <p>Official ESAT Specification · 5 Options (A–E) · +1 Point per Correct Answer · No Negative Marking</p>
        </div>
        <div class="field">
          <label>Full Name *</label>
          <input type="text" id="regName" placeholder="Enter your full name" autocomplete="name">
        </div>
        <div class="field">
          <label>Email Address *</label>
          <input type="email" id="regEmail" placeholder="Enter your email" autocomplete="email">
        </div>
        <div class="field">
          <label>Phone Number</label>
          <div class="phone-row">
            <select id="regCC"></select>
            <input type="tel" id="regPhone" placeholder="Mobile number">
          </div>
        </div>
        <button class="btn btn-primary" onclick="startTest()">▶ Start Assessment</button>
      </div>
    </div>
  </div>

  <!-- PAGE 2: TEST PLAYER -->
  <div class="page" id="pageTest">
    <header class="hdr">
      <div class="hdr-brand">
        <span>📐</span><span>EduQuest</span>
        <span class="hdr-pill">ESAT Live Exam</span>
        <span class="hdr-module" id="currentModuleName">Mathematics 1</span>
      </div>
      <div class="timer" id="timerBox">
        <span>⏱️</span>
        <span id="timerDisplay">--:--</span>
      </div>
      <button class="btn btn-primary" onclick="confirmSubmit()" style="width:auto; padding:8px 18px; font-size:0.88rem;">Submit Test →</button>
    </header>

    <div class="test-wrap">
      <main class="test-main">
        <div class="mod-banner">
          <div>
            <div class="mod-name" id="qTopicTag">Mathematics 1 · Topic</div>
            <div class="mod-info" id="modProgress">Question 1 of {len(questions)}</div>
          </div>
          <span class="q-badge" id="qBadge">Q 1</span>
        </div>

        <div class="q-card">
          <div class="q-text" id="qText">Loading question content...</div>
          <div class="opts" id="qOpts"></div>
          <div class="q-nav">
            <button class="btn btn-outline" id="btnPrev" onclick="prevQ()">← Previous</button>
            <button class="btn btn-primary" id="btnNext" onclick="nextQ()">Next →</button>
          </div>
        </div>
      </main>

      <aside class="sidebar">
        <div class="palette-card">
          <h3>Question Palette</h3>
          <div class="pal-grid" id="palette"></div>
        </div>
        <div>
          <div class="prog-bg"><div class="prog-fill" id="progFill" style="width:0%;"></div></div>
          <div class="prog-lbl" id="progLbl">0 / {len(questions)} answered</div>
        </div>
      </aside>
    </div>
  </div>

  <!-- PAGE 3: RESULT REPORT -->
  <div class="page" id="pageResult">
    <header class="hdr">
      <a href="{prefix}index.html" class="hdr-brand" style="text-decoration:none; color:#fff;"><span>📐</span><span>EduQuest</span><span class="hdr-pill">Report</span></a>
      <div style="display:flex; gap:10px;">
        <a href="{prefix}index.html" class="btn btn-outline" style="width:auto; padding:6px 14px; font-size:0.85rem; text-decoration:none;">🏠 Home Portal</a>
        <button class="btn btn-outline" onclick="exportPDF()" style="width:auto; padding:6px 14px; font-size:0.85rem;">📄 Save as PDF</button>
        <a href="{prefix}dashboard.html" class="btn btn-primary" style="width:auto; padding:6px 14px; font-size:0.85rem; text-decoration:none;">Go to Dashboard →</a>
      </div>
    </header>
    <div class="res-wrap" id="resWrap">
      <div id="resultContent"></div>
    </div>
  </div>

  <!-- MODALS -->
  <div class="modal-bg" id="modalBg">
    <div class="modal">
      <h3>Submit Assessment?</h3>
      <p id="modalMsg">Are you sure you want to finish and submit your test?</p>
      <div style="display:flex; gap:12px;">
        <button class="btn btn-outline" onclick="closeModal()">Review More</button>
        <button class="btn btn-primary" onclick="doSubmit()">Yes, Submit Test</button>
      </div>
    </div>
  </div>

  <div class="modal-bg" id="alertBg">
    <div class="modal">
      <h3>Notice</h3>
      <p id="alertMsg">Alert message</p>
      <button class="btn btn-primary" onclick="document.getElementById('alertBg').classList.remove('open')">OK</button>
    </div>
  </div>

  <script src="{prefix}script.js"></script>
</body>
</html>"""

    html_file = os.path.join(folder_path, html_name)
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(html_content)

def run():
    print("Building raw subject banks...")
    m1 = [validate_and_register(q) for q in build_maths1_288()]
    m2 = [validate_and_register(q) for q in build_maths2_207()]
    phy = [validate_and_register(q) for q in build_physics_207()]
    chm = [validate_and_register(q) for q in build_chemistry_207()]
    bio = [validate_and_register(q) for q in build_biology_207()]

    print(f"Validated globally unique questions: M1={len(m1)}, M2={len(m2)}, Phy={len(phy)}, Chm={len(chm)}, Bio={len(bio)}")
    print(f"Total globally unique questions registered: {len(GLOBAL_HASHES)}")

    # 1. Full Length Mocks (3 Tests · 81 Qs each)
    full_dir = os.path.join(BASE_DIR, "full_mock")
    save_test_bundle(full_dir, "test_full_mock.html", "questions_mock1.js", "ESAT Full-Length Practice Mock 1", 120, m1[0:27] + m2[0:27] + phy[0:27], depth=1)
    save_test_bundle(full_dir, "test_full_mock_02.html", "questions_mock2.js", "ESAT Full-Length Practice Mock 2", 120, m1[27:54] + chm[0:27] + bio[0:27], depth=1)
    save_test_bundle(full_dir, "test_full_mock_03.html", "questions_mock3.js", "ESAT Full-Length Practice Mock 3", 120, m1[54:81] + phy[27:54] + chm[27:54], depth=1)

    # 2. Diagnostic Assessments (3 Tests · 81 Qs each)
    diag_dir = os.path.join(BASE_DIR, "diagnostic_test")
    save_test_bundle(diag_dir, "test_diag.html", "questions_diag.js", "ESAT Full Diagnostic Assessment 1", 120, m1[81:108] + m2[27:54] + phy[54:81], depth=1)
    save_test_bundle(diag_dir, "test_diag_02.html", "questions_diag2.js", "ESAT Full Diagnostic Assessment 2", 120, m1[108:135] + chm[54:81] + bio[27:54], depth=1)
    save_test_bundle(diag_dir, "test_diag_03.html", "questions_diag3.js", "ESAT Full Diagnostic Assessment 3", 120, m1[135:162] + m2[54:81] + bio[54:81], depth=1)

    # 3. Single Module Mocks (15 Tests · 27 Qs each)
    # Maths 1 Mocks
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "maths1_mock_01"), "test.html", "questions.js", "ESAT Mathematics 1 Mock Exam 1", 40, m1[162:189], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "maths1_mock_02"), "test.html", "questions.js", "ESAT Mathematics 1 Mock Exam 2", 40, m1[189:216], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "maths1_mock_03"), "test.html", "questions.js", "ESAT Mathematics 1 Mock Exam 3", 40, m1[216:243], depth=2)

    # Maths 2 Mocks
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "maths2_mock_01"), "test.html", "questions.js", "ESAT Mathematics 2 Mock Exam 1", 40, m2[81:108], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "maths2_mock_02"), "test.html", "questions.js", "ESAT Mathematics 2 Mock Exam 2", 40, m2[108:135], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "maths2_mock_03"), "test.html", "questions.js", "ESAT Mathematics 2 Mock Exam 3", 40, m2[135:162], depth=2)

    # Physics Mocks
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "physics_mock_01"), "test.html", "questions.js", "ESAT Physics Mock Exam 1", 40, phy[81:108], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "physics_mock_02"), "test.html", "questions.js", "ESAT Physics Mock Exam 2", 40, phy[108:135], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "physics_mock_03"), "test.html", "questions.js", "ESAT Physics Mock Exam 3", 40, phy[135:162], depth=2)

    # Chemistry Mocks
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "chemistry_mock_01"), "test.html", "questions.js", "ESAT Chemistry Mock Exam 1", 40, chm[81:108], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "chemistry_mock_02"), "test.html", "questions.js", "ESAT Chemistry Mock Exam 2", 40, chm[108:135], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "chemistry_mock_03"), "test.html", "questions.js", "ESAT Chemistry Mock Exam 3", 40, chm[135:162], depth=2)

    # Biology Mocks
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "biology_mock_01"), "test.html", "questions.js", "ESAT Biology Mock Exam 1", 40, bio[81:108], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "biology_mock_02"), "test.html", "questions.js", "ESAT Biology Mock Exam 2", 40, bio[108:135], depth=2)
    save_test_bundle(os.path.join(BASE_DIR, "mock_tests", "biology_mock_03"), "test.html", "questions.js", "ESAT Biology Mock Exam 3", 40, bio[135:162], depth=2)

    # 4. Topic Tests (15 Tests · 15 Qs each)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "maths1", "algebra"), "test.html", "questions.js", "Mathematics 1 Topic Test – Algebra", 25, m1[243:258], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "maths1", "geometry_trig"), "test.html", "questions.js", "Mathematics 1 Topic Test – Geometry & Trig", 25, m1[258:273], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "maths1", "calculus_prob"), "test.html", "questions.js", "Mathematics 1 Topic Test – Calculus & Probability", 25, m1[273:288], depth=3)

    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "maths2", "advanced_calculus"), "test.html", "questions.js", "Mathematics 2 Topic Test – Advanced Calculus", 25, m2[162:177], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "maths2", "vectors_3d"), "test.html", "questions.js", "Mathematics 2 Topic Test – Vectors & 3D", 25, m2[177:192], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "maths2", "matrices_complex"), "test.html", "questions.js", "Mathematics 2 Topic Test – Matrices & Complex", 25, m2[192:207], depth=3)

    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "physics", "mechanics"), "test.html", "questions.js", "Physics Topic Test – Mechanics", 25, phy[162:177], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "physics", "electricity_waves"), "test.html", "questions.js", "Physics Topic Test – Electricity & Waves", 25, phy[177:192], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "physics", "thermal_fields"), "test.html", "questions.js", "Physics Topic Test – Thermal & Fields", 25, phy[192:207], depth=3)

    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "chemistry", "atomic_bonding"), "test.html", "questions.js", "Chemistry Topic Test – Atomic & Bonding", 25, chm[162:177], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "chemistry", "energetics_kinetics"), "test.html", "questions.js", "Chemistry Topic Test – Energetics & Kinetics", 25, chm[177:192], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "chemistry", "organic_chem"), "test.html", "questions.js", "Chemistry Topic Test – Organic Chemistry", 25, chm[192:207], depth=3)

    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "biology", "cell_biology"), "test.html", "questions.js", "Biology Topic Test – Cell Biology", 25, bio[162:177], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "biology", "genetics_molecular"), "test.html", "questions.js", "Biology Topic Test – Genetics & Molecular", 25, bio[177:192], depth=3)
    save_test_bundle(os.path.join(BASE_DIR, "topic_tests", "biology", "physiology_ecology"), "test.html", "questions.js", "Biology Topic Test – Physiology & Ecology", 25, bio[192:207], depth=3)

    print("SUCCESS: All 36 tests generated with 1,116 globally unique questions and ZERO duplication!")

if __name__ == '__main__':
    run()

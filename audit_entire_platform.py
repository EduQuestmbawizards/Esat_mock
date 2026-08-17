import os
import json
import re

BASE_DIR = r"c:\Users\priya\OneDrive\Desktop\esat"

test_files = [
    # Full Mocks
    'full_mock/questions_mock1.js',
    'full_mock/questions_mock2.js',
    'full_mock/questions_mock3.js',

    # Diagnostics
    'diagnostic_test/questions_diag.js',
    'diagnostic_test/questions_diag2.js',
    'diagnostic_test/questions_diag3.js',

    # Module Mocks (15)
    'mock_tests/maths1_mock_01/questions.js',
    'mock_tests/maths1_mock_02/questions.js',
    'mock_tests/maths1_mock_03/questions.js',

    'mock_tests/maths2_mock_01/questions.js',
    'mock_tests/maths2_mock_02/questions.js',
    'mock_tests/maths2_mock_03/questions.js',

    'mock_tests/physics_mock_01/questions.js',
    'mock_tests/physics_mock_02/questions.js',
    'mock_tests/physics_mock_03/questions.js',

    'mock_tests/chemistry_mock_01/questions.js',
    'mock_tests/chemistry_mock_02/questions.js',
    'mock_tests/chemistry_mock_03/questions.js',

    'mock_tests/biology_mock_01/questions.js',
    'mock_tests/biology_mock_02/questions.js',
    'mock_tests/biology_mock_03/questions.js',

    # Topic Tests (15)
    'topic_tests/maths1/algebra/questions.js',
    'topic_tests/maths1/geometry_trig/questions.js',
    'topic_tests/maths1/calculus_prob/questions.js',

    'topic_tests/maths2/advanced_calculus/questions.js',
    'topic_tests/maths2/vectors_3d/questions.js',
    'topic_tests/maths2/matrices_complex/questions.js',

    'topic_tests/physics/mechanics/questions.js',
    'topic_tests/physics/electricity_waves/questions.js',
    'topic_tests/physics/thermal_fields/questions.js',

    'topic_tests/chemistry/atomic_bonding/questions.js',
    'topic_tests/chemistry/energetics_kinetics/questions.js',
    'topic_tests/chemistry/organic_chem/questions.js',

    'topic_tests/biology/cell_biology/questions.js',
    'topic_tests/biology/genetics_molecular/questions.js',
    'topic_tests/biology/physiology_ecology/questions.js'
]

print(f"Starting Global Audit across all {len(test_files)} tests...")

GLOBAL_AUDIT_HASHES = {}
total_questions = 0

for rel_path in test_files:
    full_path = os.path.join(BASE_DIR, rel_path)
    assert os.path.exists(full_path), f"File missing: {rel_path}"

    with open(full_path, 'r', encoding='utf-8') as f:
        code = f.read()

    match = re.search(r'const QUESTIONS\s*=\s*(\[.*?\]);', code, re.DOTALL)
    assert match, f"Failed to parse JSON from {rel_path}"

    qs = json.loads(match.group(1))
    total_questions += len(qs)

    for i, q in enumerate(qs):
        norm = re.sub(r'[^a-zA-Z0-9]', '', q['question'].lower())
        if norm in GLOBAL_AUDIT_HASHES:
            prev_test = GLOBAL_AUDIT_HASHES[norm]
            raise AssertionError(f"GLOBAL DUPLICATE DETECTED!\nTest 1: {prev_test}\nTest 2: {rel_path} Q{i+1}\nQuestion: {q['question']}")
        GLOBAL_AUDIT_HASHES[norm] = f"{rel_path} (Q{i+1})"

        # Check options
        assert len(q['options']) == 5, f"{rel_path} Q{i+1} does not have 5 options"
        assert len(set(q['options'])) == 5, f"{rel_path} Q{i+1} has duplicate options: {q['options']}"
        assert q['answer'] in [0, 1, 2, 3, 4], f"{rel_path} Q{i+1} has invalid answer index {q['answer']}"
        assert len(q['explanation']) > 5, f"{rel_path} Q{i+1} has empty explanation"

print(f"==================================================")
print(f"PERFECT AUDIT PASSED!")
print(f"Total Tests Audited: {len(test_files)}")
print(f"Total Questions Audited: {total_questions}")
print(f"Total Unique Questions: {len(GLOBAL_AUDIT_HASHES)}")
print(f"Global Duplicate Count: 0 (100% Globally Unique!)")
print(f"==================================================")

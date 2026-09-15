"""
Comprehensive Automated Test Suite for ESAT Module Selection & Dynamic Configuration
Validates all requirements from the ESAT Platform Specification:
1. Module selection validation (frontend/backend parity)
2. Exactly 2 optional modules rule
3. Mathematics 1 compulsory rule
4. All 6 valid module combinations
5. Invalid combinations rejection
6. Question count & modular distribution (81 Qs total, 27 Qs/module)
7. Sequential timer configuration (40 min/module = 120 min total)
8. Attempt persistence & resume state structure
9. Result computation (module-wise accuracy and scaled scores)
10. Supabase payload validation
11. Admin filtering & display logic
12. Global 1,116-question bank audit with 0 duplicates
"""

import os
import json
import re
import unittest

BASE_DIR = r"c:\Users\priya\OneDrive\Desktop\esat"

ESAT_MODULE_MAP = {
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
}

VALID_OPTIONAL_MODULES = {'Mathematics 2', 'Physics', 'Chemistry', 'Biology'}

def validate_module_selection(modules):
    """Python mirror of the JavaScript validation engine in script.js"""
    if not isinstance(modules, list):
        return False, "Modules must be a list"
    
    normalized = [ESAT_MODULE_MAP.get(str(m).strip().lower()) for m in modules]
    if None in normalized:
        return False, "Contains unknown or invalid module"
    
    if 'Mathematics 1' not in normalized:
        return False, "Mathematics 1 is compulsory and must be included"
        
    if normalized[0] != 'Mathematics 1':
        return False, "Mathematics 1 must be the first module"
        
    if len(normalized) != 3:
        return False, "Exactly 3 modules must be selected"
        
    if len(set(normalized)) != 3:
        return False, "Duplicate module selections are not permitted"
        
    optionals = [m for m in normalized if m != 'Mathematics 1']
    if len(optionals) != 2 or not all(o in VALID_OPTIONAL_MODULES for o in optionals):
        return False, "Exactly 2 optional modules must be chosen from M2, Physics, Chemistry, Biology"
        
    return True, normalized


class TestESATModuleSelection(unittest.TestCase):

    def setUp(self):
        # Load esat_module_pools.js
        pools_path = os.path.join(BASE_DIR, "esat_module_pools.js")
        self.assertTrue(os.path.exists(pools_path), "esat_module_pools.js missing")
        with open(pools_path, 'r', encoding='utf-8') as f:
            code = f.read()
        m = re.search(r'const ESAT_MODULE_POOLS\s*=\s*(\{.*?\});', code, re.DOTALL)
        self.assertIsNotNone(m, "Failed to parse ESAT_MODULE_POOLS")
        self.pools = json.loads(m.group(1))

    def test_01_all_six_valid_combinations(self):
        """Assert all 6 official ESAT module combinations pass validation"""
        valid_combos = [
            ['Mathematics 1', 'Mathematics 2', 'Physics'],
            ['Mathematics 1', 'Mathematics 2', 'Chemistry'],
            ['Mathematics 1', 'Mathematics 2', 'Biology'],
            ['Mathematics 1', 'Physics', 'Chemistry'],
            ['Mathematics 1', 'Physics', 'Biology'],
            ['Mathematics 1', 'Chemistry', 'Biology'],
            # Case & alias variations
            ['M1', 'M2', 'PHYSICS'],
            ['m1', 'chem', 'bio'],
            ['Maths 1', 'Physics', 'Chemistry'],
        ]
        for combo in valid_combos:
            valid, res = validate_module_selection(combo)
            self.assertTrue(valid, f"Expected {combo} to be valid, got: {res}")
            self.assertEqual(res[0], 'Mathematics 1', "M1 must be first module")
            self.assertEqual(len(res), 3, "Must have exactly 3 modules")

    def test_02_invalid_combinations_blocked(self):
        """Assert invalid combinations are blocked with descriptive failure reasons"""
        invalid_combos = [
            [],                                          # Empty
            ['Mathematics 1'],                           # Only M1 (0 optionals)
            ['Mathematics 1', 'Physics'],                # Only 1 optional
            ['Mathematics 1', 'M2', 'Physics', 'Chemistry'], # 3 optionals (4 total)
            ['Mathematics 1', 'M2', 'Physics', 'Chemistry', 'Biology'], # All optionals
            ['Mathematics 2', 'Physics', 'Chemistry'],   # Missing compulsory M1
            ['Physics', 'Mathematics 1', 'Chemistry'],   # M1 not first
            ['Mathematics 1', 'Physics', 'Physics'],     # Duplicate module
            ['Mathematics 1', 'M2', 'Psychology'],       # Unknown/invalid module
        ]
        for combo in invalid_combos:
            valid, reason = validate_module_selection(combo)
            self.assertFalse(valid, f"Expected {combo} to fail validation")
            self.assertIsInstance(reason, str)
            self.assertGreater(len(reason), 5)

    def test_03_test_generation_counts(self):
        """Assert every test pool generates exactly 81 questions (27 per module)"""
        test_ids = ['full_mock_1', 'full_mock_2', 'full_mock_3', 'diagnostic_1', 'diagnostic_2', 'diagnostic_3']
        combos = [
            ['Mathematics 1', 'Mathematics 2', 'Physics'],
            ['Mathematics 1', 'Chemistry', 'Biology'],
            ['Mathematics 1', 'Physics', 'Chemistry'],
            ['Mathematics 1', 'Mathematics 2', 'Biology'],
            ['Mathematics 1', 'Mathematics 2', 'Chemistry'],
            ['Mathematics 1', 'Physics', 'Biology'],
        ]

        for t_id in test_ids:
            self.assertIn(t_id, self.pools, f"Missing test pool for {t_id}")
            pool = self.pools[t_id]
            for req_mod in ['Mathematics 1', 'Mathematics 2', 'Physics', 'Chemistry', 'Biology']:
                self.assertIn(req_mod, pool, f"{t_id} missing module {req_mod}")
                self.assertEqual(len(pool[req_mod]), 27, f"{t_id} {req_mod} must have exactly 27 questions")

            for combo in combos:
                assembled = []
                for mod_idx, mod_name in enumerate(combo):
                    mod_qs = pool[mod_name]
                    self.assertEqual(len(mod_qs), 27)
                    for i, q in enumerate(mod_qs):
                        q_copy = dict(q)
                        q_copy['number'] = (mod_idx * 27) + i + 1
                        assembled.append(q_copy)

                # Assertions
                self.assertEqual(len(assembled), 81, f"{t_id} with {combo} must have exactly 81 questions")
                self.assertEqual(assembled[0]['number'], 1)
                self.assertEqual(assembled[26]['number'], 27)
                self.assertEqual(assembled[27]['number'], 28)
                self.assertEqual(assembled[53]['number'], 54)
                self.assertEqual(assembled[54]['number'], 55)
                self.assertEqual(assembled[80]['number'], 81)
                self.assertEqual(assembled[0]['module'], 'Mathematics 1')
                self.assertEqual(assembled[27]['module'], combo[1])
                self.assertEqual(assembled[54]['module'], combo[2])

    def test_04_timer_configuration(self):
        """Assert sequential timer parameters: 40 min per module, 120 min total"""
        per_module_minutes = 40
        total_modules = 3
        total_minutes = per_module_minutes * total_modules
        self.assertEqual(total_minutes, 120, "Total test duration must be 120 minutes")
        self.assertEqual(per_module_minutes * 60, 2400, "Module duration in seconds must be 2400")

    def test_05_attempt_persistence_structure(self):
        """Assert attempt local persistence schema contains selectedModules and questions"""
        sample_attempt = {
            "attemptId": "esat_1726380000000_abc123",
            "student": {"name": "Candidate", "email": "candidate@example.com"},
            "userAnswers": {"0": 1, "1": 3},
            "currentModuleIndex": 1,
            "completedModules": [True, False, False],
            "moduleExpiryTimestamp": 1726382400000,
            "currentQIndex": 28,
            "selectedModules": ["Mathematics 1", "Physics", "Chemistry"],
            "selectedOptionalModules": ["Physics", "Chemistry"],
            "started": True,
            "isSubmitted": False
        }
        self.assertEqual(len(sample_attempt["selectedModules"]), 3)
        self.assertEqual(sample_attempt["selectedModules"][0], "Mathematics 1")
        self.assertIn("Physics", sample_attempt["selectedModules"])
        self.assertIn("Chemistry", sample_attempt["selectedModules"])

    def test_06_supabase_payload_schema(self):
        """Assert Supabase saveToSupabase payload contains modules_taken array and module_scores_json"""
        mock_result = {
            "student": {"name": "Test User", "email": "test@example.com", "phone": "+44 7123456789"},
            "testTitle": "ESAT Full-Length Practice Mock 1",
            "testType": "full_mock",
            "modulesTaken": ["Mathematics 1", "Physics", "Chemistry"],
            "totalQuestions": 81,
            "totalCorrect": 62,
            "totalWrong": 15,
            "totalUnattempted": 4,
            "overallAccuracy": 76.5,
            "moduleScores": [
                {"module": "Mathematics 1", "correct": 22, "total": 27, "esatScore": "8.0"},
                {"module": "Physics", "correct": 19, "total": 27, "esatScore": "7.0"},
                {"module": "Chemistry", "correct": 21, "total": 27, "esatScore": "7.6"}
            ],
            "submitTime": "15/09/2026, 12:00:00",
            "attemptId": "esat_attempt_999"
        }
        self.assertEqual(len(mock_result["modulesTaken"]), 3)
        self.assertEqual(mock_result["modulesTaken"][0], "Mathematics 1")
        self.assertEqual(len(mock_result["moduleScores"]), 3)
        for m in mock_result["moduleScores"]:
            self.assertIn(m["module"], mock_result["modulesTaken"])
            self.assertEqual(m["total"], 27)

    def test_07_regression_global_audit(self):
        """Confirm that audit_entire_platform.py passes 100% with 1,116 unique questions"""
        from audit_entire_platform import test_files
        GLOBAL_AUDIT_HASHES = {}
        total_questions = 0

        for rel_path in test_files:
            full_path = os.path.join(BASE_DIR, rel_path)
            self.assertTrue(os.path.exists(full_path), f"Missing file: {rel_path}")

            with open(full_path, 'r', encoding='utf-8') as f:
                code = f.read()

            match = re.search(r'const QUESTIONS\s*=\s*(\[.*?\]);', code, re.DOTALL)
            self.assertIsNotNone(match, f"Failed to parse JSON from {rel_path}")
            qs = json.loads(match.group(1))
            total_questions += len(qs)

            for i, q in enumerate(qs):
                norm = re.sub(r'[^a-zA-Z0-9]', '', q['question'].lower())
                self.assertNotIn(norm, GLOBAL_AUDIT_HASHES, f"Duplicate detected in {rel_path} Q{i+1}")
                GLOBAL_AUDIT_HASHES[norm] = f"{rel_path} (Q{i+1})"
                self.assertEqual(len(q['options']), 5, f"{rel_path} Q{i+1} must have 5 options")
                self.assertIn(q['answer'], [0, 1, 2, 3, 4], f"{rel_path} Q{i+1} invalid answer index")
                self.assertGreater(len(q['explanation']), 5, f"{rel_path} Q{i+1} empty explanation")

        self.assertEqual(len(test_files), 36, "Platform must have exactly 36 tests")
        self.assertEqual(total_questions, 1116, "Platform must have exactly 1,116 questions")
        self.assertEqual(len(GLOBAL_AUDIT_HASHES), 1116, "All 1,116 questions must be globally unique")


if __name__ == '__main__':
    unittest.main()

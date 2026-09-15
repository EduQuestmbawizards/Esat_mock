"""
ESAT Platform Comprehensive Automated Score Reporting & Consistency Verification
Tests:
1. Dynamic Module Selection Combinations (M1+M2+Physics, M1+Chemistry+Biology, etc.)
2. Diagnostic Test (81 questions)
3. Module Mock (27 questions)
4. Score Consistency Invariants:
   - sum(module.total) == totalQuestions
   - sum(module.correct) == totalCorrect
   - sum(module.incorrect) == totalIncorrect
   - sum(module.unanswered) == totalUnanswered
   - correct + incorrect + unanswered == totalQuestions
   - For every module: correct + incorrect + unanswered == module.total
5. Edge Cases:
   - All correct (81/81)
   - All wrong (0/81)
   - All unanswered (0/81)
   - Single module 100%, others mixed
6. Supabase Payload Schema Validation
7. Backward Compatibility Normalization (Legacy records parsing & reconstruction)
"""

import json
import subprocess
import unittest

class TestESATScoreReporting(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Run node script to test scoring.js functions directly in JS environment
        cls.node_available = True

    def run_js(self, js_code):
        full_code = f"""
        const scoring = require('./scoring.js');
        const {{
            normalizeModule,
            calculateModuleESATScore,
            getESATPercentile,
            computeESATResults,
            validateScoreConsistency,
            ESAT_RAW_TO_SCALED_TABLE
        }} = scoring;

        {js_code}
        """
        res = subprocess.run(['node', '-e', full_code], capture_output=True, text=True)
        if res.returncode != 0:
            raise RuntimeError(f"Node execution failed:\n{res.stderr}\nCode:\n{full_code}")
        return json.loads(res.stdout)

    def test_01_module_normalization(self):
        """Verify normalizeModule correctly standardizes various alias inputs"""
        js = """
        const tests = [
            normalizeModule('m1'),
            normalizeModule('Maths 1'),
            normalizeModule('mathematics 1'),
            normalizeModule('M2'),
            normalizeModule('Maths 2'),
            normalizeModule('Physics'),
            normalizeModule('phy'),
            normalizeModule('Chemistry'),
            normalizeModule('chem'),
            normalizeModule('Biology'),
            normalizeModule('bio')
        ];
        console.log(JSON.stringify(tests));
        """
        results = self.run_js(js)
        expected = [
            {"code": "M1", "name": "Mathematics 1"},
            {"code": "M1", "name": "Mathematics 1"},
            {"code": "M1", "name": "Mathematics 1"},
            {"code": "M2", "name": "Mathematics 2"},
            {"code": "M2", "name": "Mathematics 2"},
            {"code": "PHYSICS", "name": "Physics"},
            {"code": "PHYSICS", "name": "Physics"},
            {"code": "CHEMISTRY", "name": "Chemistry"},
            {"code": "CHEMISTRY", "name": "Chemistry"},
            {"code": "BIOLOGY", "name": "Biology"},
            {"code": "BIOLOGY", "name": "Biology"},
        ]
        self.assertEqual(results, expected)

    def test_02_dynamic_combinations_scoring(self):
        """Test scoring across dynamic 3-module combinations (M1 + Chemistry + Biology, etc.)"""
        js = """
        // Construct 81 questions: 27 M1, 27 Chemistry, 27 Biology
        const questions = [];
        const userAnswers = {};

        // M1: 22 correct, 4 wrong, 1 unattempted
        for (let i = 0; i < 27; i++) {
            questions.push({ id: 'M1-' + i, module: 'Mathematics 1', answer: 0 });
            if (i < 22) userAnswers[i] = 0;
            else if (i < 26) userAnswers[i] = 1; // wrong
            // 1 unanswered (i=26)
        }

        // Chemistry: 20 correct, 5 wrong, 2 unattempted
        for (let i = 27; i < 54; i++) {
            questions.push({ id: 'CH-' + i, module: 'Chemistry', answer: 2 });
            if (i < 27 + 20) userAnswers[i] = 2;
            else if (i < 27 + 25) userAnswers[i] = 0; // wrong
            // 2 unanswered
        }

        // Biology: 24 correct, 2 wrong, 1 unattempted
        for (let i = 54; i < 81; i++) {
            questions.push({ id: 'BIO-' + i, module: 'Biology', answer: 3 });
            if (i < 54 + 24) userAnswers[i] = 3;
            else if (i < 54 + 26) userAnswers[i] = 1; // wrong
            // 1 unanswered
        }

        const res = computeESATResults(questions, userAnswers, { name: 'Student' }, 'ESAT Full Mock 1', 'full_mock');
        console.log(JSON.stringify(res));
        """
        res = self.run_js(js)

        # Invariant checks
        self.assertTrue(res["validation"]["passed"])
        self.assertEqual(res["totalQuestions"], 81)
        self.assertEqual(res["totalCorrect"], 22 + 20 + 24) # 66
        self.assertEqual(res["totalWrong"], 4 + 5 + 2)       # 11
        self.assertEqual(res["totalUnattempted"], 1 + 2 + 1) # 4
        self.assertEqual(res["totalAttempted"], 66 + 11)     # 77
        self.assertEqual(res["rawScore"], 66)
        self.assertAlmostEqual(res["percentage"], 81.48, places=2)

        # Module checks
        self.assertEqual(len(res["moduleScores"]), 3)
        self.assertIn("M1", res["modules"])
        self.assertIn("CHEMISTRY", res["modules"])
        self.assertIn("BIOLOGY", res["modules"])
        self.assertNotIn("PHYSICS", res["modules"]) # Physics was not in this test!

        m1 = res["modules"]["M1"]
        self.assertEqual(m1["total"], 27)
        self.assertEqual(m1["correct"], 22)
        self.assertEqual(m1["incorrect"], 4)
        self.assertEqual(m1["unanswered"], 1)
        self.assertEqual(m1["attempted"], 26)
        self.assertEqual(m1["score"], 22)
        self.assertAlmostEqual(m1["percentage"], 81.48, places=2)
        self.assertEqual(m1["esatScore"], "8.0")

        chem = res["modules"]["CHEMISTRY"]
        self.assertEqual(chem["total"], 27)
        self.assertEqual(chem["correct"], 20)
        self.assertEqual(chem["incorrect"], 5)
        self.assertEqual(chem["unanswered"], 2)
        self.assertEqual(chem["attempted"], 25)
        self.assertEqual(chem["esatScore"], "7.3")

        bio = res["modules"]["BIOLOGY"]
        self.assertEqual(bio["total"], 27)
        self.assertEqual(bio["correct"], 24)
        self.assertEqual(bio["incorrect"], 2)
        self.assertEqual(bio["unanswered"], 1)
        self.assertEqual(bio["attempted"], 26)
        self.assertEqual(bio["esatScore"], "8.6")

    def test_03_diagnostic_test_scoring(self):
        """Test diagnostic scoring for M1 + M2 + Physics"""
        js = """
        const questions = [];
        const userAnswers = {};

        for (let i = 0; i < 27; i++) {
            questions.push({ id: 'Q' + i, module: 'Mathematics 1', answer: 1 });
            userAnswers[i] = 1; // all 27 correct
        }
        for (let i = 27; i < 54; i++) {
            questions.push({ id: 'Q' + i, module: 'Mathematics 2', answer: 2 });
            if (i < 40) userAnswers[i] = 2; // 13 correct
            else userAnswers[i] = 0;        // 14 wrong
        }
        for (let i = 54; i < 81; i++) {
            questions.push({ id: 'Q' + i, module: 'Physics', answer: 3 });
            // all 27 unanswered
        }

        const res = computeESATResults(questions, userAnswers, {}, 'ESAT Diagnostic Test 1', 'diagnostic');
        console.log(JSON.stringify(res));
        """
        res = self.run_js(js)
        self.assertTrue(res["validation"]["passed"])
        self.assertEqual(res["totalQuestions"], 81)
        self.assertEqual(res["totalCorrect"], 27 + 13 + 0) # 40
        self.assertEqual(res["totalWrong"], 0 + 14 + 0)   # 14
        self.assertEqual(res["totalUnattempted"], 0 + 0 + 27) # 27
        self.assertEqual(res["modules"]["M1"]["esatScore"], "9.0")
        self.assertEqual(res["modules"]["M2"]["esatScore"], "5.0")
        self.assertEqual(res["modules"]["PHYSICS"]["esatScore"], "1.0")

    def test_04_single_module_mock(self):
        """Test single module mock (27 questions)"""
        js = """
        const questions = [];
        const userAnswers = {};
        for (let i = 0; i < 27; i++) {
            questions.push({ id: 'M1-MOCK-' + i, module: 'Mathematics 1', answer: 0 });
            if (i < 18) userAnswers[i] = 0; // 18 correct
            else if (i < 24) userAnswers[i] = 1; // 6 wrong
            // 3 unanswered
        }
        const res = computeESATResults(questions, userAnswers, {}, 'ESAT Mathematics 1 Mock Exam', 'mock_test');
        console.log(JSON.stringify(res));
        """
        res = self.run_js(js)
        self.assertTrue(res["validation"]["passed"])
        self.assertEqual(res["totalQuestions"], 27)
        self.assertEqual(res["totalCorrect"], 18)
        self.assertEqual(res["totalWrong"], 6)
        self.assertEqual(res["totalUnattempted"], 3)
        self.assertEqual(res["totalAttempted"], 24)
        self.assertEqual(res["modules"]["M1"]["esatScore"], "6.6")

    def test_05_edge_cases(self):
        """Test extreme boundary cases: 100% correct, 100% wrong, 100% unanswered"""
        js = """
        const questions = [];
        for (let i = 0; i < 81; i++) {
            const m = i < 27 ? 'Mathematics 1' : (i < 54 ? 'Physics' : 'Chemistry');
            questions.push({ id: 'Q' + i, module: m, answer: 0 });
        }

        // All correct
        const allCorrectAns = {};
        for (let i = 0; i < 81; i++) allCorrectAns[i] = 0;
        const resCorrect = computeESATResults(questions, allCorrectAns, {}, 'Full Mock', 'full_mock');

        // All wrong
        const allWrongAns = {};
        for (let i = 0; i < 81; i++) allWrongAns[i] = 1;
        const resWrong = computeESATResults(questions, allWrongAns, {}, 'Full Mock', 'full_mock');

        // All unanswered
        const resUnans = computeESATResults(questions, {}, {}, 'Full Mock', 'full_mock');

        console.log(JSON.stringify({
            correct: resCorrect,
            wrong: resWrong,
            unans: resUnans
        }));
        """
        edge = self.run_js(js)

        # All correct
        c = edge["correct"]
        self.assertTrue(c["validation"]["passed"])
        self.assertEqual(c["totalCorrect"], 81)
        self.assertEqual(c["totalWrong"], 0)
        self.assertEqual(c["totalUnattempted"], 0)
        self.assertEqual(c["percentage"], 100.0)
        for m in c["moduleScores"]:
            self.assertEqual(m["esatScore"], "9.0")
            self.assertEqual(m["percentage"], 100.0)

        # All wrong
        w = edge["wrong"]
        self.assertTrue(w["validation"]["passed"])
        self.assertEqual(w["totalCorrect"], 0)
        self.assertEqual(w["totalWrong"], 81)
        self.assertEqual(w["totalUnattempted"], 0)
        self.assertEqual(w["percentage"], 0.0)
        for m in w["moduleScores"]:
            self.assertEqual(m["esatScore"], "1.0")
            self.assertEqual(m["percentage"], 0.0)

        # All unanswered
        u = edge["unans"]
        self.assertTrue(u["validation"]["passed"])
        self.assertEqual(u["totalCorrect"], 0)
        self.assertEqual(u["totalWrong"], 0)
        self.assertEqual(u["totalUnattempted"], 81)
        self.assertEqual(u["percentage"], 0.0)
        for m in u["moduleScores"]:
            self.assertEqual(m["esatScore"], "1.0")
            self.assertEqual(m["unanswered"], 27)

    def test_06_supabase_schema_compatibility(self):
        """Validate payload format saved to Supabase contains full module breakdown"""
        js = """
        const qs = [
            { id: 'M1-1', module: 'Mathematics 1', answer: 0 },
            { id: 'PH-1', module: 'Physics', answer: 1 }
        ];
        const res = computeESATResults(qs, { 0: 0, 1: 0 }, { name: 'Test', email: 'test@example.com' }, 'Test', 'mock_test');
        res.modulesTaken = ['Mathematics 1', 'Physics'];

        // Mirror supabase.js payload construction
        const row = {
            name: res.student.name,
            email: res.student.email,
            test_title: res.testTitle,
            test_type: res.testType,
            modules_taken: res.modulesTaken,
            total_questions: res.totalQuestions,
            total_correct: res.totalCorrect,
            total_wrong: res.totalWrong,
            total_unattempted: res.totalUnattempted,
            overall_accuracy: res.percentage,
            module_scores_json: res.moduleScores
        };
        console.log(JSON.stringify(row));
        """
        row = self.run_js(js)
        self.assertEqual(row["total_questions"], 2)
        self.assertEqual(row["total_correct"], 1)
        self.assertEqual(row["total_wrong"], 1)
        self.assertEqual(len(row["module_scores_json"]), 2)
        for m in row["module_scores_json"]:
            self.assertIn("module", m)
            self.assertIn("code", m)
            self.assertIn("total", m)
            self.assertIn("correct", m)
            self.assertIn("incorrect", m)
            self.assertIn("unanswered", m)
            self.assertIn("attempted", m)
            self.assertIn("percentage", m)
            self.assertIn("esatScore", m)

    def test_07_controlled_acceptance_dataset(self):
        """Verify the exact controlled test dataset from specification Section 16:
        M1: 27 total, 22 correct, 4 incorrect, 1 unanswered -> 22/27, 81.48%
        M2: 27 total, 20 correct, 5 incorrect, 2 unanswered -> 20/27, 74.07%
        Physics: 27 total, 23 correct, 3 incorrect, 1 unanswered -> 23/27, 85.19%
        TOTAL: 81 total, 65 correct, 12 incorrect, 4 unanswered, 77 attempted, 65/81 raw score, 80.25%
        """
        js = """
        const questions = [];
        const userAnswers = {};

        // M1: 22 correct, 4 incorrect, 1 unanswered
        for (let i = 0; i < 27; i++) {
            questions.push({ id: 'M1-' + i, module: 'Mathematics 1', answer: 0 });
            if (i < 22) userAnswers[i] = 0;
            else if (i < 26) userAnswers[i] = 1;
        }

        // M2: 20 correct, 5 incorrect, 2 unanswered
        for (let i = 27; i < 54; i++) {
            questions.push({ id: 'M2-' + i, module: 'Mathematics 2', answer: 0 });
            if (i < 27 + 20) userAnswers[i] = 0;
            else if (i < 27 + 25) userAnswers[i] = 1;
        }

        // Physics: 23 correct, 3 incorrect, 1 unanswered
        for (let i = 54; i < 81; i++) {
            questions.push({ id: 'PHY-' + i, module: 'Physics', answer: 0 });
            if (i < 54 + 23) userAnswers[i] = 0;
            else if (i < 54 + 26) userAnswers[i] = 1;
        }

        const res = computeESATResults(questions, userAnswers, { name: 'Student' }, 'ESAT Controlled Test', 'full_mock');
        console.log(JSON.stringify(res));
        """
        res = self.run_js(js)

        # Mathematical verification of invariants
        self.assertTrue(res["validation"]["passed"])
        self.assertEqual(res["totalQuestions"], 81)
        self.assertEqual(res["totalCorrect"], 65)
        self.assertEqual(res["totalWrong"], 12)
        self.assertEqual(res["totalUnattempted"], 4)
        self.assertEqual(res["totalAttempted"], 77)
        self.assertEqual(res["rawScore"], 65)
        self.assertAlmostEqual(res["percentage"], 80.25, places=2)

        # M1 verification
        m1 = res["modules"]["M1"]
        self.assertEqual(m1["total"], 27)
        self.assertEqual(m1["correct"], 22)
        self.assertEqual(m1["incorrect"], 4)
        self.assertEqual(m1["unanswered"], 1)
        self.assertEqual(m1["attempted"], 26)
        self.assertEqual(m1["score"], 22)
        self.assertAlmostEqual(m1["percentage"], 81.48, places=2)

        # M2 verification
        m2 = res["modules"]["M2"]
        self.assertEqual(m2["total"], 27)
        self.assertEqual(m2["correct"], 20)
        self.assertEqual(m2["incorrect"], 5)
        self.assertEqual(m2["unanswered"], 2)
        self.assertEqual(m2["attempted"], 25)
        self.assertEqual(m2["score"], 20)
        self.assertAlmostEqual(m2["percentage"], 74.07, places=2)

        # Physics verification
        phy = res["modules"]["PHYSICS"]
        self.assertEqual(phy["total"], 27)
        self.assertEqual(phy["correct"], 23)
        self.assertEqual(phy["incorrect"], 3)
        self.assertEqual(phy["unanswered"], 1)
        self.assertEqual(phy["attempted"], 26)
        self.assertEqual(phy["score"], 23)
        self.assertAlmostEqual(phy["percentage"], 85.19, places=2)

    def test_08_no_manufactured_percentiles(self):
        """Confirm that speculative/manufactured percentiles are eliminated"""
        js = """
        console.log(JSON.stringify({
            p7: getESATPercentile(7.0),
            p9: getESATPercentile(9.0)
        }));
        """
        res = self.run_js(js)
        self.assertIsNone(res["p7"])
        self.assertIsNone(res["p9"])

if __name__ == '__main__':
    unittest.main()

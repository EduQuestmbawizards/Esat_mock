const QUESTIONS = [
  {
    "type_tag": "M1_ALG_TRANSFORM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "State the equation after translating $y = f(x)$ by vector $\\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$.",
    "options": [
      "$y = f(x - 3) + 5$",
      "$y = f(x + 3) + 5$",
      "$y = f(x + 3) - 5$",
      "$y = 3f(x) - 5$",
      "$y = f(x - 3) - 5$"
    ],
    "answer": 4,
    "explanation": "$y = f(x - 3) - 5$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_ARC_LEN",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Arc length with radius $8\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$5\\pi\\text{ cm}$",
      "$2\\pi\\text{ cm}$",
      "$3\\pi\\text{ cm}$",
      "$4\\pi\\text{ cm}$",
      "$6\\pi\\text{ cm}$"
    ],
    "answer": 1,
    "explanation": "$s = 8 \\times \\frac{\\pi}{4} = 2\\pi\\text{ cm}$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_GP_SUM_INF",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum to infinity of GP with $a = 6$ and $r = \\frac{1}{4}$.",
    "options": [
      "$8$",
      "$9$",
      "$2$",
      "$6$",
      "$24$"
    ],
    "answer": 0,
    "explanation": "$S_\\infty = \\frac{6}{3/4} = 8$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_INVERSE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $f^{-1}(x)$ for $f(x) = 4x - 6$.",
    "options": [
      "$\\frac{x - 6}{4}$",
      "$4x + 6$",
      "$\\frac{4}{x + 6}$",
      "$\\frac{1}{4x - 6}$",
      "$\\frac{x + 6}{4}$"
    ],
    "answer": 4,
    "explanation": "$f^{-1}(x) = \\frac{x + 6}{4}$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_SECTOR_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Sector area with radius $4\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$\\frac{7\\pi}{2}\\text{ cm}^2$",
      "$5\\pi\\text{ cm}^2$",
      "$\\frac{4\\pi}{2}\\text{ cm}^2$",
      "$11\\pi\\text{ cm}^2$",
      "$\\frac{9\\pi}{4}\\text{ cm}^2$"
    ],
    "answer": 2,
    "explanation": "$A = \\frac{4\\pi}{2}\\text{ cm}^2$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_COND_PROB",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Given $P(A) = 0.40$, $P(B) = 0.40$, and $P(A \\cap B) = 0.16$, calculate $P(B \\mid A)$.",
    "options": [
      "$0.40$",
      "$0.80$",
      "$0.50$",
      "$0.10$",
      "$0.20$"
    ],
    "answer": 0,
    "explanation": "$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = 0.40$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_COMPOSITE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "If $f(x) = 3x + 2$ and $g(x) = x^2$, evaluate $f(g(3))$.",
    "options": [
      "$29$",
      "$37$",
      "$25$",
      "$32$",
      "$42$"
    ],
    "answer": 0,
    "explanation": "$f(g(3)) = 3(9) + 2 = 29$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_DIST_2D",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Distance between $(0,0)$ and $(12, 16)$.",
    "options": [
      "$20$",
      "$16$",
      "$28$",
      "$400$",
      "$22$"
    ],
    "answer": 0,
    "explanation": "$d = \\sqrt{144 + 256} = 20$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_COMBINATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of ways to choose $2$ representatives from $7$ candidates.",
    "options": [
      "$21$",
      "$49$",
      "$24$",
      "$14$",
      "$42$"
    ],
    "answer": 0,
    "explanation": "$\\binom{7}{2} = 21$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_EXP_EQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve for $x$: $3^{x + 1} = 27$.",
    "options": [
      "$x = 6$",
      "$x = 4$",
      "$x = 3$",
      "$x = 2$",
      "$x = 5$"
    ],
    "answer": 3,
    "explanation": "$3^{x+1} = 3^{3} \\implies x = 2$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_MIDPT",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Midpoint of segment connecting $A(8, 0)$ and $B(0, 12)$.",
    "options": [
      "$(4, 6)$",
      "$(2, 2)$",
      "$(6, 4)$",
      "$(5, 6)$",
      "$(8, 12)$"
    ],
    "answer": 0,
    "explanation": "$M = (4, 6)$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_PERMUTATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of permutations of $2$ distinct items from $6$ items.",
    "options": [
      "$34$",
      "$30$",
      "$36$",
      "$32$",
      "$38$"
    ],
    "answer": 1,
    "explanation": "$P(6, 2) = 30$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_LOG_LAWS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Evaluate $\\log_3(9) + \\log_3(27) - \\log_3(3)$.",
    "options": [
      "$5$",
      "$7$",
      "$8$",
      "$4$",
      "$6$"
    ],
    "answer": 3,
    "explanation": "$2 + 3 - 1 = 4$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_DBL_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Simplify $2\\sin(2\\theta)\\cos(2\\theta)$.",
    "options": [
      "$\\tan(4\\theta)$",
      "$\\sin(4\\theta)$",
      "$\\cos(4\\theta)$",
      "$\\sin^2(2\\theta)$",
      "$2\\sin(2\\theta)$"
    ],
    "answer": 1,
    "explanation": "$2\\sin(A)\\cos(A) = \\sin(2A) = \\sin(4\\theta)$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_MEAN_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "A dataset with mean $\\mu = 14$ has each value multiplied by $3$ and plus $2$. Find new mean.",
    "options": [
      "$48$",
      "$42$",
      "$16$",
      "$31$",
      "$44$"
    ],
    "answer": 4,
    "explanation": "$\\mu_{\\text{new}} = 3(14) + 2 = 44$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_ALG_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Simplify $\\frac{x^2 - 9}{x + 3}$.",
    "options": [
      "$x + 4$",
      "$x - 5$",
      "$x - 3$",
      "$x + 3$",
      "$x - 4$"
    ],
    "answer": 2,
    "explanation": "$\\frac{(x - 3)(x + 3)}{x + 3} = x - 3$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_POLY_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Sum of interior angles of regular polygon with $6$ sides.",
    "options": [
      "$540^\\circ$",
      "$1080^\\circ$",
      "$1260^\\circ$",
      "$900^\\circ$",
      "$720^\\circ$"
    ],
    "answer": 4,
    "explanation": "Sum $= 720^\\circ$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_SD_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "If a dataset with standard deviation $\\sigma = 5$ has each value multiplied by $4$, what is the new SD?",
    "options": [
      "$20$",
      "$80$",
      "$10$",
      "$5$",
      "$22$"
    ],
    "answer": 0,
    "explanation": "$\\sigma_{\\text{new}} = 4 \\times (5) = 20$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_PART_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Decompose $\\frac{3}{(x + 1)(x + 4)}$ into partial fractions.",
    "options": [
      "$\\frac{1}{x + 1} + \\frac{1}{x + 4}$",
      "$\\frac{1}{x + 1} - \\frac{2}{x + 4}$",
      "$\\frac{2}{x + 1} - \\frac{1}{x + 4}$",
      "$\\frac{1}{x + 1} - \\frac{1}{x + 4}$",
      "$\\frac{3}{x + 1} + \\frac{3}{x + 4}$"
    ],
    "answer": 3,
    "explanation": "Partial fractions decompose to $\\frac{1}{x + 1} - \\frac{1}{x + 4}$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_COORD_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Area of right triangle with vertices $(0,0)$, $(2, 0)$, and $(0, 5)$.",
    "options": [
      "$15$",
      "$5$",
      "$25$",
      "$20$",
      "$10$"
    ],
    "answer": 1,
    "explanation": "$\\text{Area} = 0.5 \\times 2 \\times 5 = 5$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_SEC_DERIV",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Find $\\frac{d^2y}{dx^2}$ for $y = 4x^3 - 6x$ at $x = 1$.",
    "options": [
      "$12$",
      "$18$",
      "$4$",
      "$24$",
      "$48$"
    ],
    "answer": 3,
    "explanation": "$\\frac{d^2y}{dx^2} = 6(4)x = 24$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_SURDS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Rationalise the denominator of $\\frac{7}{5 - \\sqrt{3}}$ and simplify.",
    "options": [
      "$\\frac{7(5 - \\sqrt{3})}{22}$",
      "$\\frac{7(5 + \\sqrt{3})}{28}$",
      "$\\frac{7\\sqrt{3}}{22}$",
      "$\\frac{5 + \\sqrt{3}}{22}$",
      "$\\frac{7(5 + \\sqrt{3})}{22}$"
    ],
    "answer": 4,
    "explanation": "Multiply numerator and denominator by conjugate $(5 + \\sqrt{3})$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_PERP_GRAD",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Find gradient perpendicular to $y = 4x + 9$.",
    "options": [
      "$-\\frac{1}{5}$",
      "$\\frac{1}{4}$",
      "$-4$",
      "$-\\frac{1}{4}$",
      "$4$"
    ],
    "answer": 3,
    "explanation": "$m_\\perp = -\\frac{1}{4}$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_TANG_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Gradient of tangent to $y = 5x^2$ at $x = 1$.",
    "options": [
      "$10$",
      "$2$",
      "$25$",
      "$5$",
      "$12$"
    ],
    "answer": 0,
    "explanation": "$\\frac{dy}{dx} = 2(5)x = 10$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_EXPONENTS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Easy",
    "question": "Evaluate the exact value of $(16)^{3/2} + 3$.",
    "options": [
      "$83$",
      "$75$",
      "$69$",
      "$67$",
      "$65$"
    ],
    "answer": 3,
    "explanation": "$(\\sqrt{16})^3 + 3 = 67$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_CIRC_TANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Equation of vertical tangent to $x^2 + y^2 = 25$ at $(5, 0)$.",
    "options": [
      "$x = 25$",
      "$x = 5$",
      "$y = 0$",
      "$y = 5$",
      "$x = -5$"
    ],
    "answer": 1,
    "explanation": "Vertical tangent is $x = 5$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_NORM_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "If tangent gradient is $7$, find normal gradient.",
    "options": [
      "$\\frac{1}{7}$",
      "$-\\frac{1}{7}$",
      "$7$",
      "$-7$",
      "$-\\frac{1}{8}$"
    ],
    "answer": 1,
    "explanation": "$m_n = -\\frac{1}{7}$.",
    "number": 27
  }
];

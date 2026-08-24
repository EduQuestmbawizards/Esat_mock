const QUESTIONS = [
  {
    "type_tag": "M1_CALC_TANG_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Gradient of tangent to $y = 3x^2$ at $x = 1$.",
    "options": [
      "$9$",
      "$3$",
      "$6$",
      "$8$",
      "$2$"
    ],
    "answer": 2,
    "explanation": "$\\frac{dy}{dx} = 2(3)x = 6$.",
    "number": 1
  },
  {
    "type_tag": "M1_CALC_NORM_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "If tangent gradient is $3$, find normal gradient.",
    "options": [
      "$-3$",
      "$-\\frac{1}{4}$",
      "$3$",
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$"
    ],
    "answer": 3,
    "explanation": "$m_n = -\\frac{1}{3}$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_STAT_PT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Positive $x$-coordinate of stationary point of $y = x^3 - 6x + 4$.",
    "options": [
      "$4$",
      "$2$",
      "$3$",
      "$\\sqrt{2}$",
      "$\\frac{1}{\\sqrt{2}}$"
    ],
    "answer": 3,
    "explanation": "$3x^2 = 3(2) \\implies x = \\sqrt{2}$.",
    "number": 3
  },
  {
    "type_tag": "M1_CALC_DEF_INT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^2 3x^2 \\, dx$.",
    "options": [
      "$8$",
      "$16$",
      "$12$",
      "$10$",
      "$4$"
    ],
    "answer": 0,
    "explanation": "$\\left[ 1x^3 \\right]_0^2 = 8$.",
    "number": 4
  },
  {
    "type_tag": "M1_CALC_KIN_VEL",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Displacement $s(t) = 2t + 4t^2$. Find velocity at $t = 1\\text{ s}$.",
    "options": [
      "$4\\text{ m s}^{-1}$",
      "$6\\text{ m s}^{-1}$",
      "$12\\text{ m s}^{-1}$",
      "$8\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$"
    ],
    "answer": 4,
    "explanation": "$v(1) = 2 + 8 = 10\\text{ m s}^{-1}$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_KIN_DISP",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Velocity $v(t) = 3 + 6t$. Find displacement $\\Delta s$ from $t=0$ to $t=2\\text{ s}$.",
    "options": [
      "$18\\text{ m}$",
      "$12\\text{ m}$",
      "$10\\text{ m}$",
      "$14\\text{ m}$",
      "$8\\text{ m}$"
    ],
    "answer": 0,
    "explanation": "$\\Delta s = 2(3) + 12 = 18\\text{ m}$.",
    "number": 6
  },
  {
    "type_tag": "M1_CALC_AP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "AP has $a = 2$ and $d = 4$. Find $10\\text{th}$ term ($u_{10}$).",
    "options": [
      "$34$",
      "$36$",
      "$32$",
      "$40$",
      "$38$"
    ],
    "answer": 4,
    "explanation": "$u_{10} = 2 + 36$.",
    "number": 7
  },
  {
    "type_tag": "M1_CALC_AP_SUM",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum of first $10$ terms of AP with $a = 2$ and $d = 3$.",
    "options": [
      "$160$",
      "$150$",
      "$140$",
      "$145$",
      "$155$"
    ],
    "answer": 4,
    "explanation": "$S_{10} = 5(2(2) + 27) = 155$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_GP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "GP has $a = 3$ and $r = 3$. Find $4\\text{th}$ term.",
    "options": [
      "$243$",
      "$27$",
      "$36$",
      "$81$",
      "$83$"
    ],
    "answer": 3,
    "explanation": "$u_4 = (3) \\times 27 = 81$.",
    "number": 9
  },
  {
    "type_tag": "M1_CALC_GP_SUM_INF",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum to infinity of GP with $a = 3$ and $r = \\frac{1}{4}$.",
    "options": [
      "$12$",
      "$3$",
      "$4$",
      "$5$",
      "$1$"
    ],
    "answer": 2,
    "explanation": "$S_\\infty = \\frac{3}{3/4} = 4$.",
    "number": 10
  },
  {
    "type_tag": "M1_CALC_COND_PROB",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Given $P(A) = 0.30$, $P(B) = 0.40$, and $P(A \\cap B) = 0.12$, calculate $P(B \\mid A)$.",
    "options": [
      "$0.20$",
      "$0.40$",
      "$0.80$",
      "$0.50$",
      "$0.10$"
    ],
    "answer": 1,
    "explanation": "$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = 0.40$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_COMBINATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of ways to choose $2$ representatives from $6$ candidates.",
    "options": [
      "$18$",
      "$30$",
      "$15$",
      "$12$",
      "$36$"
    ],
    "answer": 2,
    "explanation": "$\\binom{6}{2} = 15$.",
    "number": 12
  },
  {
    "type_tag": "M1_CALC_PERMUTATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of permutations of $2$ distinct items from $5$ items.",
    "options": [
      "$20$",
      "$24$",
      "$26$",
      "$28$",
      "$22$"
    ],
    "answer": 0,
    "explanation": "$P(5, 2) = 20$.",
    "number": 13
  },
  {
    "type_tag": "M1_CALC_MEAN_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "A dataset with mean $\\mu = 13$ has each value multiplied by $3$ and plus $2$. Find new mean.",
    "options": [
      "$45$",
      "$39$",
      "$41$",
      "$15$",
      "$29$"
    ],
    "answer": 2,
    "explanation": "$\\mu_{\\text{new}} = 3(13) + 2 = 41$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_SD_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "If a dataset with standard deviation $\\sigma = 4$ has each value multiplied by $4$, what is the new SD?",
    "options": [
      "$16$",
      "$4$",
      "$8$",
      "$64$",
      "$18$"
    ],
    "answer": 0,
    "explanation": "$\\sigma_{\\text{new}} = 4 \\times (4) = 16$.",
    "number": 15
  }
];

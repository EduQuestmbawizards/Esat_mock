const QUESTIONS = [
  {
    "type_tag": "M1_ALG_DISCRIM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $c$ such that $x^2 + 8x + c = 0$ has exactly one repeated real root.",
    "options": [
      "$c = 22$",
      "$c = 18$",
      "$c = 16$",
      "$c = 20$",
      "$c = 24$"
    ],
    "answer": 2,
    "explanation": "$\\Delta = (8)^2 - 4c = 0 \\implies c = 16$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_CIRC_EQ",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Cartesian equation of circle with centre $(3, -4)$ and radius $5$.",
    "options": [
      "$(x + 3)^2 + (y + 4)^2 = 25$",
      "$(x - 3)^2 + (y + 4)^2 = 5$",
      "$(x - 3)^2 + (y - 4)^2 = 25$",
      "$(x + 3)^2 + (y - 4)^2 = 25$",
      "$(x - 3)^2 + (y + 4)^2 = 25$"
    ],
    "answer": 4,
    "explanation": "$(x - 3)^2 + (y + 4)^2 = 25$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_STAT_PT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Positive $x$-coordinate of stationary point of $y = x^3 - 12x + 4$.",
    "options": [
      "$4$",
      "$\\frac{1}{\\sqrt{4}}$",
      "$5$",
      "$8$",
      "$\\sqrt{4}$"
    ],
    "answer": 4,
    "explanation": "$3x^2 = 3(4) \\implies x = \\sqrt{4}$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_COMP_SQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find the minimum turning point of $y = x^2 - 8x + 22$.",
    "options": [
      "$(4, -8)$",
      "$(-4, -8)$",
      "$(4, 6)$",
      "$(-4, 6)$",
      "$(4, 10)$"
    ],
    "answer": 2,
    "explanation": "$y = (x - 4)^2 + 6$. Minimum point is $(4, 6)$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_EXACT_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Exact value of $\\tan(45^\\circ) + \\cos(60^\\circ) + 3$.",
    "options": [
      "$3.0$",
      "$4.5$",
      "$3.5$",
      "$4.0$",
      "$5.0$"
    ],
    "answer": 1,
    "explanation": "$1 + 0.5 + 3 = 4.5$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_DEF_INT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^2 9x^2 \\, dx$.",
    "options": [
      "$12$",
      "$26$",
      "$24$",
      "$36$",
      "$48$"
    ],
    "answer": 2,
    "explanation": "$\\left[ 3x^3 \\right]_0^2 = 24$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_INEQUAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve the quadratic inequality $(x - 3)(x - 7) < 0$.",
    "options": [
      "$x < 3 \\text{ or } x > 7$",
      "$3 < x < 7$",
      "$4 < x < 8$",
      "$-7 < x < -3$",
      "$5 < x < 9$"
    ],
    "answer": 1,
    "explanation": "Parabola is below x-axis strictly between roots: $3 < x < 7$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_COS_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle ABC$, $b = 4, c = 5$, $\\angle A = 60^\\circ$. Find $a^2$.",
    "options": [
      "$20$",
      "$41$",
      "$21$",
      "$18$",
      "$61$"
    ],
    "answer": 2,
    "explanation": "$a^2 = 21$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_KIN_VEL",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Displacement $s(t) = 6t + 4t^2$. Find velocity at $t = 1\\text{ s}$.",
    "options": [
      "$12\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$",
      "$14\\text{ m s}^{-1}$",
      "$8\\text{ m s}^{-1}$",
      "$16\\text{ m s}^{-1}$"
    ],
    "answer": 2,
    "explanation": "$v(1) = 6 + 8 = 14\\text{ m s}^{-1}$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_SIMULT",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find positive $x$-intercept of line $y = 5x$ and curve $y = x^2 - 5x$.",
    "options": [
      "$x = 14$",
      "$x = 12$",
      "$x = 10$",
      "$x = 8$",
      "$x = 7$"
    ],
    "answer": 2,
    "explanation": "$x^2 - 10x = 0 \\implies x = 10$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_SIN_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle PQR$, $\\frac{p}{\\sin(30^\\circ)} = 12$. Find $p$.",
    "options": [
      "$24$",
      "$7$",
      "$3$",
      "$6$",
      "$12$"
    ],
    "answer": 3,
    "explanation": "$p = 12 \\times 0.5 = 6$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_KIN_DISP",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Velocity $v(t) = 9 + 6t$. Find displacement $\\Delta s$ from $t=0$ to $t=2\\text{ s}$.",
    "options": [
      "$26\\text{ m}$",
      "$20\\text{ m}$",
      "$22\\text{ m}$",
      "$30\\text{ m}$",
      "$24\\text{ m}$"
    ],
    "answer": 3,
    "explanation": "$\\Delta s = 2(9) + 12 = 30\\text{ m}$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_REMAINDER",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find remainder when $P(x) = 2x^2 - 3x + 8$ is divided by $(x - 3)$.",
    "options": [
      "$17$",
      "$27$",
      "$32$",
      "$22$",
      "$14$"
    ],
    "answer": 0,
    "explanation": "$P(3) = 2(3)^2 - 3(3) + 8 = 17$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_TRI_AREA",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Area of triangle with sides $6\\text{ cm}$ and $6\\text{ cm}$ enclosing $30^\\circ$.",
    "options": [
      "$36\\text{ cm}^2$",
      "$4.5\\text{ cm}^2$",
      "$9\\text{ cm}^2$",
      "$11\\text{ cm}^2$",
      "$18\\text{ cm}^2$"
    ],
    "answer": 2,
    "explanation": "$\\text{Area} = 0.5 \\times 6 \\times 6 \\times 0.5 = 9\\text{ cm}^2$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_AP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "AP has $a = 6$ and $d = 4$. Find $10\\text{th}$ term ($u_{10}$).",
    "options": [
      "$40$",
      "$42$",
      "$36$",
      "$38$",
      "$44$"
    ],
    "answer": 1,
    "explanation": "$u_{10} = 6 + 36$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_FACTOR",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "If $(x - 4)$ is a factor of $x^3 - 6x^2 + kx - 8$, find $k$.",
    "options": [
      "$k = 14$",
      "$k = 7$",
      "$k = 12$",
      "$k = 10$",
      "$k = 8$"
    ],
    "answer": 3,
    "explanation": "$P(4) = 0 \\implies k = 10$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_PYTHAG_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "If acute angle $\\theta$ has $\\sin\\theta = \\frac{8}{17}$, find $\\cos\\theta$.",
    "options": [
      "$\\frac{17}{15}$",
      "$\\frac{1}{17}$",
      "$\\frac{8}{15}$",
      "$\\frac{8}{17}$",
      "$\\frac{15}{17}$"
    ],
    "answer": 4,
    "explanation": "$\\cos\\theta = \\sqrt{1 - (8/17)^2} = \\frac{15}{17}$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_AP_SUM",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum of first $10$ terms of AP with $a = 4$ and $d = 3$.",
    "options": [
      "$180$",
      "$170$",
      "$175$",
      "$160$",
      "$165$"
    ],
    "answer": 2,
    "explanation": "$S_{10} = 5(2(4) + 27) = 175$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_BINOMIAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find coefficient of $x^2$ in the expansion of $(1 + 3x)^5$.",
    "options": [
      "$105$",
      "$110$",
      "$95$",
      "$100$",
      "$90$"
    ],
    "answer": 4,
    "explanation": "$\\binom{5}{2}(1)^3(3)^2 = 90$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_TRIG_SOL",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Hard",
    "question": "Number of distinct solutions to $\\sin(4x) = 0$ in the range $0 \\le x \\le \\pi$.",
    "options": [
      "$6$",
      "$5$",
      "$4$",
      "$7$",
      "$8$"
    ],
    "answer": 1,
    "explanation": "Solutions occur at $(4)x = 0, \\pi, 2\\pi, \\dots, 4\\pi$, giving $5$ solutions.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_GP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "GP has $a = 5$ and $r = 3$. Find $4\\text{th}$ term.",
    "options": [
      "$45$",
      "$137$",
      "$60$",
      "$405$",
      "$135$"
    ],
    "answer": 4,
    "explanation": "$u_4 = (5) \\times 27 = 135$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_TRANSFORM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "State the equation after translating $y = f(x)$ by vector $\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$.",
    "options": [
      "$y = 4f(x) - 6$",
      "$y = f(x + 4) + 6$",
      "$y = f(x - 4) + 6$",
      "$y = f(x + 4) - 6$",
      "$y = f(x - 4) - 6$"
    ],
    "answer": 4,
    "explanation": "$y = f(x - 4) - 6$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_ARC_LEN",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Arc length with radius $12\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$6\\pi\\text{ cm}$",
      "$3\\pi\\text{ cm}$",
      "$4\\pi\\text{ cm}$",
      "$5\\pi\\text{ cm}$",
      "$7\\pi\\text{ cm}$"
    ],
    "answer": 1,
    "explanation": "$s = 12 \\times \\frac{\\pi}{4} = 3\\pi\\text{ cm}$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_GP_SUM_INF",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum to infinity of GP with $a = 9$ and $r = \\frac{1}{4}$.",
    "options": [
      "$36$",
      "$9$",
      "$3$",
      "$13$",
      "$12$"
    ],
    "answer": 4,
    "explanation": "$S_\\infty = \\frac{9}{3/4} = 12$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_INVERSE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $f^{-1}(x)$ for $f(x) = 5x - 7$.",
    "options": [
      "$5x + 7$",
      "$\\frac{x + 7}{5}$",
      "$\\frac{5}{x + 7}$",
      "$\\frac{1}{5x - 7}$",
      "$\\frac{x - 7}{5}$"
    ],
    "answer": 1,
    "explanation": "$f^{-1}(x) = \\frac{x + 7}{5}$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_SECTOR_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Sector area with radius $6\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$16\\pi\\text{ cm}^2$",
      "$10\\pi\\text{ cm}^2$",
      "$\\frac{12\\pi}{2}\\text{ cm}^2$",
      "$\\frac{14\\pi}{4}\\text{ cm}^2$",
      "$\\frac{9\\pi}{2}\\text{ cm}^2$"
    ],
    "answer": 4,
    "explanation": "$A = \\frac{9\\pi}{2}\\text{ cm}^2$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_COND_PROB",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Given $P(A) = 0.50$, $P(B) = 0.40$, and $P(A \\cap B) = 0.20$, calculate $P(B \\mid A)$.",
    "options": [
      "$0.40$",
      "$0.10$",
      "$0.50$",
      "$0.20$",
      "$0.80$"
    ],
    "answer": 0,
    "explanation": "$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = 0.40$.",
    "number": 27
  }
];

const QUESTIONS = [
  {
    "type_tag": "M1_ALG_SURDS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Rationalise the denominator of $\\frac{5}{4 - \\sqrt{3}}$ and simplify.",
    "options": [
      "$\\frac{5(4 + \\sqrt{3})}{13}$",
      "$\\frac{4 + \\sqrt{3}}{13}$",
      "$\\frac{5(4 - \\sqrt{3})}{13}$",
      "$\\frac{5(4 + \\sqrt{3})}{19}$",
      "$\\frac{5\\sqrt{3}}{13}$"
    ],
    "answer": 0,
    "explanation": "Multiply numerator and denominator by conjugate $(4 + \\sqrt{3})$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_PERP_GRAD",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Find gradient perpendicular to $y = 3x + 9$.",
    "options": [
      "$3$",
      "$-3$",
      "$-\\frac{1}{3}$",
      "$-\\frac{1}{4}$",
      "$\\frac{1}{3}$"
    ],
    "answer": 2,
    "explanation": "$m_\\perp = -\\frac{1}{3}$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_TANG_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Gradient of tangent to $y = 4x^2$ at $x = 1$.",
    "options": [
      "$2$",
      "$4$",
      "$8$",
      "$10$",
      "$16$"
    ],
    "answer": 2,
    "explanation": "$\\frac{dy}{dx} = 2(4)x = 8$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_EXPONENTS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Easy",
    "question": "Evaluate the exact value of $(9)^{3/2} + 2$.",
    "options": [
      "$43$",
      "$29$",
      "$27$",
      "$31$",
      "$36$"
    ],
    "answer": 1,
    "explanation": "$(\\sqrt{9})^3 + 2 = 29$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_CIRC_TANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Equation of vertical tangent to $x^2 + y^2 = 16$ at $(4, 0)$.",
    "options": [
      "$y = 4$",
      "$x = 16$",
      "$y = 0$",
      "$x = -4$",
      "$x = 4$"
    ],
    "answer": 4,
    "explanation": "Vertical tangent is $x = 4$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_NORM_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "If tangent gradient is $5$, find normal gradient.",
    "options": [
      "$5$",
      "$-\\frac{1}{6}$",
      "$-5$",
      "$\\frac{1}{5}$",
      "$-\\frac{1}{5}$"
    ],
    "answer": 4,
    "explanation": "$m_n = -\\frac{1}{5}$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_DISCRIM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $c$ such that $x^2 + 6x + c = 0$ has exactly one repeated real root.",
    "options": [
      "$c = 15$",
      "$c = 13$",
      "$c = 17$",
      "$c = 11$",
      "$c = 9$"
    ],
    "answer": 4,
    "explanation": "$\\Delta = (6)^2 - 4c = 0 \\implies c = 9$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_CIRC_EQ",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Cartesian equation of circle with centre $(2, -3)$ and radius $4$.",
    "options": [
      "$(x - 2)^2 + (y + 3)^2 = 4$",
      "$(x + 2)^2 + (y + 3)^2 = 16$",
      "$(x + 2)^2 + (y - 3)^2 = 16$",
      "$(x - 2)^2 + (y - 3)^2 = 16$",
      "$(x - 2)^2 + (y + 3)^2 = 16$"
    ],
    "answer": 4,
    "explanation": "$(x - 2)^2 + (y + 3)^2 = 16$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_STAT_PT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Positive $x$-coordinate of stationary point of $y = x^3 - 9x + 4$.",
    "options": [
      "$4$",
      "$6$",
      "$3$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\sqrt{3}$"
    ],
    "answer": 4,
    "explanation": "$3x^2 = 3(3) \\implies x = \\sqrt{3}$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_COMP_SQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find the minimum turning point of $y = x^2 - 6x + 13$.",
    "options": [
      "$(3, -6)$",
      "$(-3, 4)$",
      "$(-3, -6)$",
      "$(3, 4)$",
      "$(3, 8)$"
    ],
    "answer": 3,
    "explanation": "$y = (x - 3)^2 + 4$. Minimum point is $(3, 4)$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_EXACT_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Exact value of $\\tan(45^\\circ) + \\cos(60^\\circ) + 2$.",
    "options": [
      "$3.0$",
      "$2.0$",
      "$3.5$",
      "$2.5$",
      "$4.0$"
    ],
    "answer": 2,
    "explanation": "$1 + 0.5 + 2 = 3.5$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_DEF_INT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^2 6x^2 \\, dx$.",
    "options": [
      "$32$",
      "$8$",
      "$16$",
      "$24$",
      "$18$"
    ],
    "answer": 2,
    "explanation": "$\\left[ 2x^3 \\right]_0^2 = 16$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_INEQUAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve the quadratic inequality $(x - 2)(x - 6) < 0$.",
    "options": [
      "$-6 < x < -2$",
      "$4 < x < 8$",
      "$x < 2 \\text{ or } x > 6$",
      "$2 < x < 6$",
      "$3 < x < 7$"
    ],
    "answer": 3,
    "explanation": "Parabola is below x-axis strictly between roots: $2 < x < 6$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_COS_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle ABC$, $b = 3, c = 4$, $\\angle A = 60^\\circ$. Find $a^2$.",
    "options": [
      "$25$",
      "$13$",
      "$37$",
      "$12$",
      "$14$"
    ],
    "answer": 1,
    "explanation": "$a^2 = 13$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_KIN_VEL",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Displacement $s(t) = 4t + 4t^2$. Find velocity at $t = 1\\text{ s}$.",
    "options": [
      "$12\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$",
      "$8\\text{ m s}^{-1}$",
      "$6\\text{ m s}^{-1}$",
      "$14\\text{ m s}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$v(1) = 4 + 8 = 12\\text{ m s}^{-1}$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_SIMULT",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find positive $x$-intercept of line $y = 4x$ and curve $y = x^2 - 4x$.",
    "options": [
      "$x = 5$",
      "$x = 12$",
      "$x = 10$",
      "$x = 8$",
      "$x = 6$"
    ],
    "answer": 3,
    "explanation": "$x^2 - 8x = 0 \\implies x = 8$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_SIN_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle PQR$, $\\frac{p}{\\sin(30^\\circ)} = 8$. Find $p$.",
    "options": [
      "$4$",
      "$16$",
      "$2$",
      "$5$",
      "$8$"
    ],
    "answer": 0,
    "explanation": "$p = 8 \\times 0.5 = 4$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_KIN_DISP",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Velocity $v(t) = 6 + 6t$. Find displacement $\\Delta s$ from $t=0$ to $t=2\\text{ s}$.",
    "options": [
      "$18\\text{ m}$",
      "$14\\text{ m}$",
      "$16\\text{ m}$",
      "$20\\text{ m}$",
      "$24\\text{ m}$"
    ],
    "answer": 4,
    "explanation": "$\\Delta s = 2(6) + 12 = 24\\text{ m}$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_REMAINDER",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find remainder when $P(x) = 2x^2 - 3x + 7$ is divided by $(x - 2)$.",
    "options": [
      "$24$",
      "$19$",
      "$9$",
      "$6$",
      "$14$"
    ],
    "answer": 2,
    "explanation": "$P(2) = 2(2)^2 - 3(2) + 7 = 9$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_TRI_AREA",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Area of triangle with sides $4\\text{ cm}$ and $6\\text{ cm}$ enclosing $30^\\circ$.",
    "options": [
      "$24\\text{ cm}^2$",
      "$6\\text{ cm}^2$",
      "$12\\text{ cm}^2$",
      "$8\\text{ cm}^2$",
      "$3.0\\text{ cm}^2$"
    ],
    "answer": 1,
    "explanation": "$\\text{Area} = 0.5 \\times 4 \\times 6 \\times 0.5 = 6\\text{ cm}^2$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_AP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "AP has $a = 4$ and $d = 4$. Find $10\\text{th}$ term ($u_{10}$).",
    "options": [
      "$42$",
      "$34$",
      "$40$",
      "$36$",
      "$38$"
    ],
    "answer": 2,
    "explanation": "$u_{10} = 4 + 36$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_FACTOR",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "If $(x - 3)$ is a factor of $x^3 - 5x^2 + kx - 6$, find $k$.",
    "options": [
      "$k = 5$",
      "$k = 12$",
      "$k = 10$",
      "$k = 6$",
      "$k = 8$"
    ],
    "answer": 4,
    "explanation": "$P(3) = 0 \\implies k = 8$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_PYTHAG_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "If acute angle $\\theta$ has $\\sin\\theta = \\frac{5}{13}$, find $\\cos\\theta$.",
    "options": [
      "$\\frac{5}{13}$",
      "$\\frac{5}{12}$",
      "$\\frac{13}{12}$",
      "$\\frac{12}{13}$",
      "$\\frac{1}{13}$"
    ],
    "answer": 3,
    "explanation": "$\\cos\\theta = \\sqrt{1 - (5/13)^2} = \\frac{12}{13}$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_AP_SUM",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum of first $10$ terms of AP with $a = 3$ and $d = 3$.",
    "options": [
      "$165$",
      "$155$",
      "$170$",
      "$150$",
      "$160$"
    ],
    "answer": 0,
    "explanation": "$S_{10} = 5(2(3) + 27) = 165$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_BINOMIAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find coefficient of $x^2$ in the expansion of $(1 + 2x)^5$.",
    "options": [
      "$55$",
      "$50$",
      "$60$",
      "$40$",
      "$45$"
    ],
    "answer": 3,
    "explanation": "$\\binom{5}{2}(1)^3(2)^2 = 40$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_TRIG_SOL",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Hard",
    "question": "Number of distinct solutions to $\\sin(3x) = 0$ in the range $0 \\le x \\le \\pi$.",
    "options": [
      "$5$",
      "$7$",
      "$4$",
      "$6$",
      "$3$"
    ],
    "answer": 2,
    "explanation": "Solutions occur at $(3)x = 0, \\pi, 2\\pi, \\dots, 3\\pi$, giving $4$ solutions.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_GP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "GP has $a = 4$ and $r = 3$. Find $4\\text{th}$ term.",
    "options": [
      "$108$",
      "$48$",
      "$324$",
      "$36$",
      "$110$"
    ],
    "answer": 0,
    "explanation": "$u_4 = (4) \\times 27 = 108$.",
    "number": 27
  }
];

const QUESTIONS = [
  {
    "type_tag": "M1_ALG_REMAINDER",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find remainder when $P(x) = 2x^2 - 3x + 10$ is divided by $(x - 5)$.",
    "options": [
      "$55$",
      "$42$",
      "$50$",
      "$60$",
      "$45$"
    ],
    "answer": 4,
    "explanation": "$P(5) = 2(5)^2 - 3(5) + 10 = 45$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_TRI_AREA",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Area of triangle with sides $10\\text{ cm}$ and $6\\text{ cm}$ enclosing $30^\\circ$.",
    "options": [
      "$7.5\\text{ cm}^2$",
      "$60\\text{ cm}^2$",
      "$15\\text{ cm}^2$",
      "$30\\text{ cm}^2$",
      "$17\\text{ cm}^2$"
    ],
    "answer": 2,
    "explanation": "$\\text{Area} = 0.5 \\times 10 \\times 6 \\times 0.5 = 15\\text{ cm}^2$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_AP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "AP has $a = 10$ and $d = 4$. Find $10\\text{th}$ term ($u_{10}$).",
    "options": [
      "$46$",
      "$40$",
      "$48$",
      "$42$",
      "$44$"
    ],
    "answer": 0,
    "explanation": "$u_{10} = 10 + 36$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_FACTOR",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "If $(x - 6)$ is a factor of $x^3 - 8x^2 + kx - 12$, find $k$.",
    "options": [
      "$k = 16$",
      "$k = 12$",
      "$k = 11$",
      "$k = 18$",
      "$k = 14$"
    ],
    "answer": 4,
    "explanation": "$P(6) = 0 \\implies k = 14$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_PYTHAG_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "If acute angle $\\theta$ has $\\sin\\theta = \\frac{9}{41}$, find $\\cos\\theta$.",
    "options": [
      "$\\frac{40}{41}$",
      "$\\frac{9}{41}$",
      "$\\frac{9}{40}$",
      "$\\frac{1}{41}$",
      "$\\frac{41}{40}$"
    ],
    "answer": 0,
    "explanation": "$\\cos\\theta = \\sqrt{1 - (9/41)^2} = \\frac{40}{41}$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_AP_SUM",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum of first $10$ terms of AP with $a = 6$ and $d = 3$.",
    "options": [
      "$200$",
      "$185$",
      "$190$",
      "$195$",
      "$180$"
    ],
    "answer": 3,
    "explanation": "$S_{10} = 5(2(6) + 27) = 195$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_BINOMIAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find coefficient of $x^2$ in the expansion of $(1 + 5x)^5$.",
    "options": [
      "$250$",
      "$255$",
      "$260$",
      "$265$",
      "$270$"
    ],
    "answer": 0,
    "explanation": "$\\binom{5}{2}(1)^3(5)^2 = 250$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_TRIG_SOL",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Hard",
    "question": "Number of distinct solutions to $\\sin(6x) = 0$ in the range $0 \\le x \\le \\pi$.",
    "options": [
      "$10$",
      "$9$",
      "$7$",
      "$6$",
      "$8$"
    ],
    "answer": 2,
    "explanation": "Solutions occur at $(6)x = 0, \\pi, 2\\pi, \\dots, 6\\pi$, giving $7$ solutions.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_GP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "GP has $a = 7$ and $r = 3$. Find $4\\text{th}$ term.",
    "options": [
      "$84$",
      "$191$",
      "$189$",
      "$567$",
      "$63$"
    ],
    "answer": 2,
    "explanation": "$u_4 = (7) \\times 27 = 189$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_TRANSFORM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "State the equation after translating $y = f(x)$ by vector $\\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$.",
    "options": [
      "$y = f(x + 6) + 8$",
      "$y = f(x + 6) - 8$",
      "$y = f(x - 6) + 8$",
      "$y = f(x - 6) - 8$",
      "$y = 6f(x) - 8$"
    ],
    "answer": 3,
    "explanation": "$y = f(x - 6) - 8$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_ARC_LEN",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Arc length with radius $20\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$8\\pi\\text{ cm}$",
      "$7\\pi\\text{ cm}$",
      "$6\\pi\\text{ cm}$",
      "$9\\pi\\text{ cm}$",
      "$5\\pi\\text{ cm}$"
    ],
    "answer": 4,
    "explanation": "$s = 20 \\times \\frac{\\pi}{4} = 5\\pi\\text{ cm}$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_GP_SUM_INF",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum to infinity of GP with $a = 15$ and $r = \\frac{1}{4}$.",
    "options": [
      "$60$",
      "$21$",
      "$15$",
      "$20$",
      "$5$"
    ],
    "answer": 3,
    "explanation": "$S_\\infty = \\frac{15}{3/4} = 20$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_INVERSE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $f^{-1}(x)$ for $f(x) = 7x - 9$.",
    "options": [
      "$\\frac{x + 9}{7}$",
      "$\\frac{7}{x + 9}$",
      "$7x + 9$",
      "$\\frac{x - 9}{7}$",
      "$\\frac{1}{7x - 9}$"
    ],
    "answer": 0,
    "explanation": "$f^{-1}(x) = \\frac{x + 9}{7}$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_SECTOR_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Sector area with radius $10\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$26\\pi\\text{ cm}^2$",
      "$\\frac{30\\pi}{4}\\text{ cm}^2$",
      "$32\\pi\\text{ cm}^2$",
      "$\\frac{28\\pi}{2}\\text{ cm}^2$",
      "$\\frac{25\\pi}{2}\\text{ cm}^2$"
    ],
    "answer": 4,
    "explanation": "$A = \\frac{25\\pi}{2}\\text{ cm}^2$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_COND_PROB",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Given $P(A) = 0.70$, $P(B) = 0.40$, and $P(A \\cap B) = 0.28$, calculate $P(B \\mid A)$.",
    "options": [
      "$0.10$",
      "$0.50$",
      "$0.40$",
      "$0.20$",
      "$0.80$"
    ],
    "answer": 2,
    "explanation": "$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = 0.40$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_COMPOSITE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "If $f(x) = 3x + 2$ and $g(x) = x^2$, evaluate $f(g(6))$.",
    "options": [
      "$123$",
      "$118$",
      "$113$",
      "$106$",
      "$110$"
    ],
    "answer": 4,
    "explanation": "$f(g(6)) = 3(36) + 2 = 110$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_DIST_2D",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Distance between $(0,0)$ and $(30, 40)$.",
    "options": [
      "$70$",
      "$52$",
      "$40$",
      "$2500$",
      "$50$"
    ],
    "answer": 4,
    "explanation": "$d = \\sqrt{900 + 1600} = 50$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_COMBINATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of ways to choose $2$ representatives from $10$ candidates.",
    "options": [
      "$45$",
      "$100$",
      "$20$",
      "$90$",
      "$48$"
    ],
    "answer": 0,
    "explanation": "$\\binom{10}{2} = 45$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_EXP_EQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve for $x$: $3^{x + 1} = 729$.",
    "options": [
      "$x = 9$",
      "$x = 6$",
      "$x = 7$",
      "$x = 8$",
      "$x = 5$"
    ],
    "answer": 4,
    "explanation": "$3^{x+1} = 3^{6} \\implies x = 5$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_MIDPT",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Midpoint of segment connecting $A(20, 0)$ and $B(0, 30)$.",
    "options": [
      "$(15, 10)$",
      "$(5, 5)$",
      "$(20, 30)$",
      "$(10, 15)$",
      "$(11, 15)$"
    ],
    "answer": 3,
    "explanation": "$M = (10, 15)$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_PERMUTATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of permutations of $2$ distinct items from $9$ items.",
    "options": [
      "$80$",
      "$78$",
      "$76$",
      "$74$",
      "$72$"
    ],
    "answer": 4,
    "explanation": "$P(9, 2) = 72$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_LOG_LAWS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Evaluate $\\log_3(243) + \\log_3(27) - \\log_3(3)$.",
    "options": [
      "$11$",
      "$9$",
      "$8$",
      "$10$",
      "$7$"
    ],
    "answer": 4,
    "explanation": "$5 + 3 - 1 = 7$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_DBL_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Simplify $2\\sin(5\\theta)\\cos(5\\theta)$.",
    "options": [
      "$\\cos(10\\theta)$",
      "$\\tan(10\\theta)$",
      "$\\sin^2(5\\theta)$",
      "$\\sin(10\\theta)$",
      "$2\\sin(5\\theta)$"
    ],
    "answer": 3,
    "explanation": "$2\\sin(A)\\cos(A) = \\sin(2A) = \\sin(10\\theta)$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_MEAN_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "A dataset with mean $\\mu = 17$ has each value multiplied by $3$ and plus $2$. Find new mean.",
    "options": [
      "$37$",
      "$57$",
      "$19$",
      "$53$",
      "$51$"
    ],
    "answer": 3,
    "explanation": "$\\mu_{\\text{new}} = 3(17) + 2 = 53$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_ALG_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Simplify $\\frac{x^2 - 36}{x + 6}$.",
    "options": [
      "$x - 8$",
      "$x - 6$",
      "$x + 7$",
      "$x + 6$",
      "$x - 7$"
    ],
    "answer": 1,
    "explanation": "$\\frac{(x - 6)(x + 6)}{x + 6} = x - 6$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_POLY_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Sum of interior angles of regular polygon with $9$ sides.",
    "options": [
      "$1440^\\circ$",
      "$1080^\\circ$",
      "$1260^\\circ$",
      "$1800^\\circ$",
      "$1620^\\circ$"
    ],
    "answer": 2,
    "explanation": "Sum $= 1260^\\circ$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_SD_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "If a dataset with standard deviation $\\sigma = 8$ has each value multiplied by $4$, what is the new SD?",
    "options": [
      "$128$",
      "$16$",
      "$34$",
      "$8$",
      "$32$"
    ],
    "answer": 4,
    "explanation": "$\\sigma_{\\text{new}} = 4 \\times (8) = 32$.",
    "number": 27
  },
  {
    "type_tag": "M2_CALC_ARCSIN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arcsin(5x))$.",
    "options": [
      "$\\frac{5}{1 + 25x^2}$",
      "$\\frac{1}{\\sqrt{1 - 25x^2}}$",
      "$\\frac{5}{\\sqrt{1 - x^2}}$",
      "$\\arccos(5x)$",
      "$\\frac{5}{\\sqrt{1 - 25x^2}}$"
    ],
    "answer": 4,
    "explanation": "$\\frac{5}{\\sqrt{1 - (i+1)^2 x^2}}$.",
    "number": 28
  },
  {
    "type_tag": "M2_VEC_CROSS_SELF",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Evaluate $(4\\mathbf{v}) \\times \\mathbf{v}$ for any 3D vector $\\mathbf{v}$.",
    "options": [
      "$4|\\mathbf{v}|^2$",
      "$4$",
      "$8\\mathbf{v}$",
      "$\\mathbf{0}$ (Zero vector)",
      "$\\mathbf{v}$"
    ],
    "answer": 3,
    "explanation": "Cross product of parallel vectors is zero.",
    "number": 29
  },
  {
    "type_tag": "M2_CMP_MODULUS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Modulus of complex number $z = 12 + 16i$.",
    "options": [
      "$21$",
      "$20$",
      "$28$",
      "$12$",
      "$400$"
    ],
    "answer": 1,
    "explanation": "$|z| = 20$.",
    "number": 30
  },
  {
    "type_tag": "M2_CALC_ARCTAN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arctan(5x))$.",
    "options": [
      "$\\frac{5}{1 + 25x^2}$",
      "$\\frac{5}{1 - 25x^2}$",
      "$\\frac{1}{1 + 25x^2}$",
      "$\\frac{1}{5x}$",
      "$\\frac{5}{\\sqrt{1 - 25x^2}}$"
    ],
    "answer": 0,
    "explanation": "$\\frac{5}{1 + (i+1)^2 x^2}$.",
    "number": 31
  },
  {
    "type_tag": "M2_VEC_COLLINEAR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\end{pmatrix}$ and $\\begin{pmatrix} 4 \\\\ 8 \\\\ p \\end{pmatrix}$ are parallel, find $p$.",
    "options": [
      "$p = 25$",
      "$p = 8$",
      "$p = 12$",
      "$p = 4$",
      "$p = 16$"
    ],
    "answer": 2,
    "explanation": "For parallel vectors, corresponding components are proportional: $\\frac{p}{6} = \\frac{4}{2} = 2 \\implies p = 6 \\times 2 = 12$.",
    "number": 32
  },
  {
    "type_tag": "M2_CMP_ARGUMENT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Principal argument $\\arg(z)$ of $z = -4i$.",
    "options": [
      "$-\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{2}$",
      "$-\\pi$",
      "$\\pi$",
      "$0$"
    ],
    "answer": 0,
    "explanation": "$\\arg(-4i) = -\\frac{\\pi}{2}$.",
    "number": 33
  },
  {
    "type_tag": "M2_CALC_CHAIN_LOG",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Easy",
    "question": "Find $\\frac{d}{dx}(\\ln(5x + 2))$.",
    "options": [
      "$5\\ln(5x + 2)$",
      "$\\frac{1}{5x + 2}$",
      "$\\frac{5}{5x + 2}$",
      "$\\frac{5}{x + 2}$",
      "$\\frac{1}{5}$"
    ],
    "answer": 2,
    "explanation": "$\\frac{5}{5x + 2}$.",
    "number": 34
  },
  {
    "type_tag": "M2_VEC_ANGLE_COS",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If vectors $\\mathbf{a}$ and $\\mathbf{b}$ satisfy $\\mathbf{a} \\cdot \\mathbf{b} = 6$, $|\\mathbf{a}| = 2$, and $|\\mathbf{b}| = 6$, find $\\cos\\theta$.",
    "options": [
      "$0.50$",
      "$0.25$",
      "$1.00$",
      "$0.75$",
      "$0.00$"
    ],
    "answer": 0,
    "explanation": "$\\cos\\theta = \\frac{6}{2(6)} = 0.50$.",
    "number": 35
  },
  {
    "type_tag": "M2_CMP_DEMOIVRE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Evaluate $(\\cos\\theta + i\\sin\\theta)^{6}$.",
    "options": [
      "$\\cos(6\\theta) - i\\sin(6\\theta)$",
      "$6(\\cos\\theta + i\\sin\\theta)$",
      "$1$",
      "$\\cos^{6}\\theta + i\\sin^{6}\\theta$",
      "$\\cos(6\\theta) + i\\sin(6\\theta)$"
    ],
    "answer": 4,
    "explanation": "De Moivre's theorem: $\\cos(6\\theta) + i\\sin(6\\theta)$.",
    "number": 36
  },
  {
    "type_tag": "M2_CALC_SECOND_ORD_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{d^2y}{dx^2} + 16y = 0$.",
    "options": [
      "$y = A\\cos(4x) + B\\sin(4x)$",
      "$y = A\\cos(16x)$",
      "$y = A e^{4x} + B e^{-4x}$",
      "$y = (A + Bx)e^{4x}$",
      "$y = A\\sin(4x)$"
    ],
    "answer": 0,
    "explanation": "$y = A\\cos(4x) + B\\sin(4x)$.",
    "number": 37
  },
  {
    "type_tag": "M2_VEC_PLANE_NORMAL",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Normal vector $\\mathbf{n}$ to plane $5x - 3y + 4z = 10$.",
    "options": [
      "$5\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$",
      "$5\\mathbf{i} - 3\\mathbf{j}$",
      "$10\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$",
      "$-5\\mathbf{i} + 3\\mathbf{j} - 4\\mathbf{k}$",
      "$5\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$"
    ],
    "answer": 0,
    "explanation": "$5\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$.",
    "number": 38
  },
  {
    "type_tag": "M2_CMP_LOCUS_CIRCLE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Locus in Argand diagram given by $|z - 4i| = 6$.",
    "options": [
      "Circle with centre $(4, 0)$ and radius $6$",
      "Circle centre $(0, -4)$",
      "Line $y = 4$",
      "Ellipse with foci at $(0, 4)$",
      "Circle with centre $(0, 4)$ and radius $6$"
    ],
    "answer": 4,
    "explanation": "Circle centred at $z_0 = (0, 4)$ with radius $6$.",
    "number": 39
  },
  {
    "type_tag": "M2_CALC_DEF_INT_EXP",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^1 e^{4x} \\, dx$.",
    "options": [
      "$e^{4} - 1$",
      "$\\frac{e^{4}}{4}$",
      "$\\frac{e^{4} + 1}{4}$",
      "$\\frac{e^{4} - 1}{4}$",
      "$4(e^{4} - 1)$"
    ],
    "answer": 3,
    "explanation": "$\\frac{e^{4} - 1}{4}$.",
    "number": 40
  },
  {
    "type_tag": "M2_VEC_DIST_ORIGIN",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Perpendicular distance from origin to plane $2x + y + 2z = 12$.",
    "options": [
      "$4$",
      "$6$",
      "$5$",
      "$8$",
      "$7$"
    ],
    "answer": 0,
    "explanation": "$d = \\frac{12}{\\sqrt{4+1+4}} = 4$.",
    "number": 41
  },
  {
    "type_tag": "M2_CMP_CONJUGATE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Complex conjugate of $z = 6 - 5i$.",
    "options": [
      "$6 + 5i$",
      "$5 - (6)i$",
      "$6$",
      "$-6 + 5i$",
      "$-6 - 5i$"
    ],
    "answer": 0,
    "explanation": "The complex conjugate of $z = a - bi$ is $\\bar{z} = a + bi$. For $z = 6 - 5i$, $\\bar{z} = 6 + 5i$.",
    "number": 42
  },
  {
    "type_tag": "M2_CALC_VOL_REV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Volume of solid formed rotating $y = 4x$ from $x=0$ to $x=2$ about x-axis.",
    "options": [
      "$\\frac{67\\pi}{3}$",
      "$130\\pi$",
      "$\\frac{65\\pi}{3}$",
      "$\\frac{128\\pi}{3}$",
      "$9\\pi$"
    ],
    "answer": 3,
    "explanation": "$V = \\frac{128\\pi}{3}$.",
    "number": 43
  },
  {
    "type_tag": "M2_VEC_MIDPT_3D",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Midpoint between $A(8, 0, 4)$ and $B(0, 4, 0)$.",
    "options": [
      "$(8, 4, 4)$",
      "$(4, 2, 4)$",
      "$(4, 4, 2)$",
      "$(4, 2, 2)$",
      "$(8, 2, 2)$"
    ],
    "answer": 3,
    "explanation": "$M = (4, 2, 2)$.",
    "number": 44
  },
  {
    "type_tag": "M2_CMP_QUAD_ROOTS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Solve $z^2 + 17 = 0$ for complex $z$.",
    "options": [
      "$z = \\pm (17)$",
      "$z = \\pm \\sqrt{17}\\,i$",
      "$z = \\pm i$",
      "$z = \\sqrt{17}$",
      "$z = 0$"
    ],
    "answer": 1,
    "explanation": "$z = \\pm \\sqrt{17}\\,i$.",
    "number": 45
  },
  {
    "type_tag": "M2_CALC_PARAM_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Parametric curve $x = t^2, y = 4t^3$. Find $\\frac{dy}{dx}$ at $t=1$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$8.0$",
      "$4.0$"
    ],
    "answer": 2,
    "explanation": "$\\frac{dy}{dx} = 6.0$.",
    "number": 46
  },
  {
    "type_tag": "M2_VEC_SCALAR_TRIPLE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Find volume of parallelepiped defined by vectors $4\\mathbf{i}, 2\\mathbf{j}, 3\\mathbf{k}$.",
    "options": [
      "$26\\text{ units}^3$",
      "$64\\text{ units}^3$",
      "$24\\text{ units}^3$",
      "$48\\text{ units}^3$",
      "$12\\text{ units}^3$"
    ],
    "answer": 2,
    "explanation": "$V = |4(2)(3)| = 24$.",
    "number": 47
  },
  {
    "type_tag": "M2_CMP_ROOTS_UNITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Sum of all $6$ roots of the polynomial equation $z^{6} - 1 = 0$.",
    "options": [
      "$1$",
      "$-1$",
      "$0$",
      "$6$",
      "$i$"
    ],
    "answer": 2,
    "explanation": "Sum of all roots of unity is $0$.",
    "number": 48
  },
  {
    "type_tag": "M2_CALC_MACLAURIN",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "First two non-zero terms of Maclaurin series for $\\sin(5x)$.",
    "options": [
      "$5x - \\frac{(i+1)**3 x^3}{6}$",
      "$1 - \\frac{(i+1)**2 x^2}{2}$",
      "$5x - 125x^3$",
      "$5x - \\frac{5x^3}{6}$",
      "$5x + \\frac{(i+1)**3 x^3}{6}$"
    ],
    "answer": 0,
    "explanation": "$\\sin(5x) = 5x - \\frac{(i+1)**3 x^3}{6} + \\dots$",
    "number": 49
  },
  {
    "type_tag": "M2_VEC_DIR_COSINE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If direction angles $\\alpha, \\beta, \\gamma$ satisfy $\\cos^2\\alpha = 0.20$ and $\\cos^2\\beta = 0.30$, find $\\cos^2\\gamma$.",
    "options": [
      "$0.60$",
      "$0.55$",
      "$0.50$",
      "$0.40$",
      "$0.45$"
    ],
    "answer": 2,
    "explanation": "$\\cos^2\\gamma = 1 - (0.20 + 0.30) = 0.50$.",
    "number": 50
  },
  {
    "type_tag": "M2_MAT_IDENTITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Determinant of $5\\times5$ identity matrix $\\mathbf{I}_{5}$.",
    "options": [
      "$25$",
      "$5$",
      "$-1$",
      "$1$",
      "$0$"
    ],
    "answer": 3,
    "explanation": "$\\det(\\mathbf{I}) = 1$.",
    "number": 51
  },
  {
    "type_tag": "M2_CALC_INTEG_TRIG_SQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int_0^\\pi \\sin^2(4x) \\, dx$.",
    "options": [
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{3\\pi}{4}$"
    ],
    "answer": 1,
    "explanation": "Average of $\\sin^2(4x)$ over full periods is $1/2 \\implies \\frac{\\pi}{2}$.",
    "number": 52
  },
  {
    "type_tag": "M2_VEC_POSITION_VEC",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Vector $\\vec{AB}$ from $A(4, 2, 1)$ to $B(7, 5, 4)$.",
    "options": [
      "$11\\mathbf{i} + 7\\mathbf{j} + 5\\mathbf{k}$",
      "$6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}$",
      "$-3\\mathbf{i} - 3\\mathbf{j} - 3\\mathbf{k}$",
      "$3\\mathbf{i} + 2\\mathbf{j} + 1\\mathbf{k}$",
      "$3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$"
    ],
    "answer": 4,
    "explanation": "$\\vec{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$.",
    "number": 53
  },
  {
    "type_tag": "M2_MAT_SINGULAR",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Find $k$ such that $\\begin{pmatrix} 5 & k \\\\ 2 & 4 \\end{pmatrix}$ is singular.",
    "options": [
      "$k = 15$",
      "$k = 11$",
      "$k = 13$",
      "$k = 9$",
      "$k = 10$"
    ],
    "answer": 4,
    "explanation": "$4(5) - 2k = 0 \\implies k = 10$.",
    "number": 54
  },
  {
    "type_tag": "PHY_MECH_SUVAT_V",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Car accelerates from $10\\text{ m s}^{-1}$ at $2\\text{ m s}^{-2}$ for $3\\text{ s}$. Find final velocity $v$.",
    "options": [
      "$14\\text{ m s}^{-1}$",
      "$12\\text{ m s}^{-1}$",
      "$16\\text{ m s}^{-1}$",
      "$11\\text{ m s}^{-1}$",
      "$18\\text{ m s}^{-1}$"
    ],
    "answer": 2,
    "explanation": "$v = 10 + 6 = 16\\text{ m s}^{-1}$.",
    "number": 55
  },
  {
    "type_tag": "PHY_ELEC_OHMS_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Current through $25\\,\\Omega$ resistor connected across $10\\text{ V}$.",
    "options": [
      "$2.5\\text{ A}$",
      "$0.20\\text{ A}$",
      "$25.0\\text{ A}$",
      "$50.0\\text{ A}$",
      "$0.40\\text{ A}$"
    ],
    "answer": 4,
    "explanation": "$I = \\frac{10}{25} = 0.40\\text{ A}$.",
    "number": 56
  },
  {
    "type_tag": "PHY_THM_SHC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Heat needed to warm $5\\text{ kg}$ of water ($c=4200$) by $10\\text{ K}$.",
    "options": [
      "$105\\text{ kJ}$",
      "$2100\\text{ kJ}$",
      "$210\\text{ kJ}$",
      "$21.0\\text{ kJ}$",
      "$420\\text{ kJ}$"
    ],
    "answer": 2,
    "explanation": "$Q = mc\\Delta T = 210\\text{ kJ}$.",
    "number": 57
  },
  {
    "type_tag": "PHY_MECH_PROJECTILE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Ball launched horizontally at $50\\text{ m s}^{-1}$ from height $20\\text{ m}$ ($g=10$). Find horizontal range.",
    "options": [
      "$25\\text{ m}$",
      "$110\\text{ m}$",
      "$200\\text{ m}$",
      "$100\\text{ m}$",
      "$50\\text{ m}$"
    ],
    "answer": 3,
    "explanation": "Range $= ut = 50 \\times 2 = 100\\text{ m}$.",
    "number": 58
  },
  {
    "type_tag": "PHY_ELEC_PARALLEL_R",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Equivalent resistance of two identical $50\\,\\Omega$ resistors in parallel.",
    "options": [
      "$100\\,\\Omega$",
      "$75\\,\\Omega$",
      "$50\\,\\Omega$",
      "$25\\,\\Omega$",
      "$12.5\\,\\Omega$"
    ],
    "answer": 3,
    "explanation": "$R_p = 25\\,\\Omega$.",
    "number": 59
  },
  {
    "type_tag": "PHY_THM_BOYLE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Ideal gas at constant $T$ compressed to volume $V/6$. New pressure?",
    "options": [
      "$P_0$",
      "$P_0/6$",
      "$36P_0$",
      "$6P_0$",
      "$P_0/36$"
    ],
    "answer": 3,
    "explanation": "$P_2 = 6P_0$.",
    "number": 60
  },
  {
    "type_tag": "PHY_MECH_NEWTON2",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Net force on mass $6\\text{ kg}$ accelerating at $4\\text{ m s}^{-2}$.",
    "options": [
      "$24\\text{ N}$",
      "$22\\text{ N}$",
      "$25\\text{ N}$",
      "$21\\text{ N}$",
      "$23\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F = ma = 24\\text{ N}$.",
    "number": 61
  },
  {
    "type_tag": "PHY_ELEC_POT_DIVIDER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Potential divider: $R_1 = 100\\,\\Omega, R_2 = 500\\,\\Omega, V_{\\text{in}} = 12\\text{ V}$. Find $V_{\\text{out}}$ across $R_2$.",
    "options": [
      "$2.00\\text{ V}$",
      "$8.00\\text{ V}$",
      "$9.00\\text{ V}$",
      "$10.00\\text{ V}$",
      "$12.00\\text{ V}$"
    ],
    "answer": 3,
    "explanation": "Using the potential divider formula, $V_{\\text{out}} = V_{\\text{in}} \\times \\frac{R_2}{R_1 + R_2} = 12\\text{ V} \\times \\frac{500\\,\\Omega}{100\\,\\Omega + 500\\,\\Omega} = 12 \\times \\frac{5}{6} = 10.00\\text{ V}$.",
    "number": 62
  },
  {
    "type_tag": "PHY_FLD_GRAV_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Distance from planet centre increases by factor $6$. Gravitational field $g$?",
    "options": [
      "Decreases by factor $6$",
      "Unchanged",
      "Decreases by factor $36$",
      "Increases by factor $36$",
      "Increases by factor $6$"
    ],
    "answer": 2,
    "explanation": "$g' = \\frac{g}{36}$.",
    "number": 63
  },
  {
    "type_tag": "PHY_MECH_MOMENTUM",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Trolley of mass $2\\text{ kg}$ at $25\\text{ m s}^{-1}$ collides inelastically with stationary $3\\text{ kg}$ trolley. Common speed?",
    "options": [
      "$12.5\\text{ m s}^{-1}$",
      "$20\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$",
      "$25\\text{ m s}^{-1}$",
      "$5\\text{ m s}^{-1}$"
    ],
    "answer": 2,
    "explanation": "$v = 10\\text{ m s}^{-1}$.",
    "number": 64
  },
  {
    "type_tag": "PHY_ELEC_RESISTIVITY",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Length of wire with original resistance $6\\,\\Omega$ is doubled at constant volume. New resistance?",
    "options": [
      "$48\\,\\Omega$",
      "$12\\,\\Omega$",
      "$24\\,\\Omega$",
      "$3.0\\,\\Omega$",
      "$6\\,\\Omega$"
    ],
    "answer": 2,
    "explanation": "$R' = 4R = 24\\,\\Omega$.",
    "number": 65
  },
  {
    "type_tag": "PHY_FLD_COULOMB",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Electrostatic force between two charges $+5Q$ and $+Q$ at distance $r$.",
    "options": [
      "$F = \\frac{Q^2}{4\\pi\\varepsilon_0 r^2}$",
      "$F = \\frac{5Q^2}{4\\pi\\varepsilon_0 r^2}$ (repulsive)",
      "Attractive force",
      "$F = \\frac{10Q}{4\\pi\\varepsilon_0 r^2}$",
      "$F = \\frac{5Q^2}{4\\pi\\varepsilon_0 r}$"
    ],
    "answer": 1,
    "explanation": "$F = \\frac{5Q^2}{4\\pi\\varepsilon_0 r^2}$.",
    "number": 66
  },
  {
    "type_tag": "PHY_MECH_POWER",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Engine exerts force $250\\text{ N}$ at steady speed $4\\text{ m s}^{-1}$. Power output?",
    "options": [
      "$500\\text{ W}$",
      "$254\\text{ W}$",
      "$250\\text{ W}$",
      "$2000\\text{ W}$",
      "$1000\\text{ W}$"
    ],
    "answer": 4,
    "explanation": "$P = Fv = 1000\\text{ W}$.",
    "number": 67
  },
  {
    "type_tag": "PHY_ELEC_EMF_INTERNAL",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Battery $\\mathcal{E} = 12\\text{ V}, r = 2.5\\,\\Omega$, current $2\\text{ A}$. Terminal p.d. $V$?",
    "options": [
      "$10.0\\text{ V}$",
      "$11.0\\text{ V}$",
      "$5.0\\text{ V}$",
      "$8.0\\text{ V}$",
      "$7.0\\text{ V}$"
    ],
    "answer": 4,
    "explanation": "Terminal potential difference is $V = \\mathcal{E} - I r = 12\\text{ V} - (2\\text{ A} \\times 2.5\\,\\Omega) = 12\\text{ V} - 5.0\\text{ V} = 7.0\\text{ V}$.",
    "number": 68
  },
  {
    "type_tag": "PHY_FLD_MAGNETIC_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Force on wire length $0.5\\text{ m}$ carrying $2\\text{ A}$ perpendicular to field $1.0\\text{ T}$.",
    "options": [
      "$1.0\\text{ N}$",
      "$1.10\\text{ N}$",
      "$0.50\\text{ N}$",
      "$2.0\\text{ N}$",
      "$5.0\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F = BIL = 1.0\\text{ N}$.",
    "number": 69
  },
  {
    "type_tag": "PHY_MECH_HOOKE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Elastic potential energy in spring with $k = 500\\text{ N m}^{-1}$ extended by $0.10\\text{ m}$.",
    "options": [
      "$1.25\\text{ J}$",
      "$5.0\\text{ J}$",
      "$25.0\\text{ J}$",
      "$2.5\\text{ J}$",
      "$50.0\\text{ J}$"
    ],
    "answer": 3,
    "explanation": "$E = 0.5 k x^2 = 2.5\\text{ J}$.",
    "number": 70
  },
  {
    "type_tag": "PHY_ELEC_CAPACITOR_E",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Energy stored in $100\\,\\mu\\text{F}$ capacitor charged to $10\\text{ V}$.",
    "options": [
      "$5.0\\text{ mJ}$",
      "$50.0\\text{ mJ}$",
      "$2.50\\text{ mJ}$",
      "$10.0\\text{ mJ}$",
      "$20.0\\text{ mJ}$"
    ],
    "answer": 0,
    "explanation": "$E = 0.5 C V^2 = 5.0\\text{ mJ}$.",
    "number": 71
  },
  {
    "type_tag": "PHY_NUC_HALF_LIFE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Fraction of sample remaining after $6$ half-lives.",
    "options": [
      "$\\frac{1}{66}$",
      "$\\frac{1}{68}$",
      "$\\frac{1}{64}$",
      "$\\frac{1}{67}$",
      "$\\frac{1}{65}$"
    ],
    "answer": 2,
    "explanation": "Remaining $= \\frac{1}{64}$.",
    "number": 72
  },
  {
    "type_tag": "PHY_MECH_YOUNG_MOD",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Stress $\\sigma$ is $200\\text{ MPa}$, strain $\\varepsilon$ is $0.005$. Young modulus $E$?",
    "options": [
      "$60.0\\text{ GPa}$",
      "$100.0\\text{ GPa}$",
      "$120.0\\text{ GPa}$",
      "$40.0\\text{ GPa}$",
      "$80.0\\text{ GPa}$"
    ],
    "answer": 3,
    "explanation": "$E = \\frac{\\sigma}{\\varepsilon} = 40.0\\text{ GPa}$.",
    "number": 73
  },
  {
    "type_tag": "PHY_WAV_SPEED_FREQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Wave with speed $300\\text{ m s}^{-1}$ and frequency $250\\text{ Hz}$. Wavelength $\\lambda$?",
    "options": [
      "$4.20\\text{ m}$",
      "$5.20\\text{ m}$",
      "$2.20\\text{ m}$",
      "$3.20\\text{ m}$",
      "$1.20\\text{ m}$"
    ],
    "answer": 4,
    "explanation": "$\\lambda = \\frac{300}{250} = 1.20\\text{ m}$.",
    "number": 74
  },
  {
    "type_tag": "PHY_QUA_PHOTOELEC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Photon energy $E$ for frequency $f = 6 \\times 10^{15}\\text{ Hz}$ in terms of Planck's constant $h$.",
    "options": [
      "$36h \\times 10^{15}\\text{ J}$",
      "$6h \\times 10^{8}\\text{ J}$",
      "$6hc\\text{ J}$",
      "$6h \\times 10^{15}\\text{ J}$",
      "$\\frac{h}{6} \\times 10^{15}\\text{ J}$"
    ],
    "answer": 3,
    "explanation": "$E = hf = 6h \\times 10^{15}\\text{ J}$.",
    "number": 75
  },
  {
    "type_tag": "PHY_MECH_INCLINE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Component of gravity down $30^\\circ$ slope for mass $10\\text{ kg}$ ($g=10$).",
    "options": [
      "$50\\text{ N}$",
      "$10\\text{ N}$",
      "$25\\text{ N}$",
      "$86.6\\text{ N}$",
      "$100\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F_\\parallel = mg\\sin(30^\\circ) = 50\\text{ N}$.",
    "number": 76
  },
  {
    "type_tag": "PHY_WAV_SNELL_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Critical angle $\\theta_c$ for medium with refractive index $n = 1.70$ to air ($n=1.00$).",
    "options": [
      "$\\frac{1.70}{1.00}$",
      "$\\arccos(1.70)$",
      "$\\arctan(1.70)$",
      "$\\arcsin(1.70)$",
      "$\\arcsin\\left(\\frac{1}{1.70}\\right)$"
    ],
    "answer": 4,
    "explanation": "$\\sin\\theta_c = \\frac{1}{n} \\implies \\theta_c = \\arcsin(1/1.70)$.",
    "number": 77
  },
  {
    "type_tag": "PHY_THM_RMS_SPEED",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "If absolute temperature is increased by factor $36$, RMS molecular speed increases by factor:",
    "options": [
      "$1$",
      "$36$",
      "$\\sqrt{6}$",
      "$6$",
      "$1296$"
    ],
    "answer": 3,
    "explanation": "$c_{\\text{rms}} \\propto \\sqrt{T} \\implies \\sqrt{36} = 6$.",
    "number": 78
  },
  {
    "type_tag": "PHY_MECH_CENTRIPETAL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Centripetal force on $2\\text{ kg}$ moving at $15\\text{ m s}^{-1}$ in circle radius $3\\text{ m}$.",
    "options": [
      "$150\\text{ N}$",
      "$158\\text{ N}$",
      "$156\\text{ N}$",
      "$152\\text{ N}$",
      "$154\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F_c = \\frac{mv^2}{r} = 150\\text{ N}$.",
    "number": 79
  },
  {
    "type_tag": "PHY_WAV_DIFFRACTION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Light of wavelength $500\\text{ nm}$ incident on grating with $d = 10.0\\,\\mu\\text{m}$. $\\sin\\theta_1$?",
    "options": [
      "$0.050$",
      "$0.450$",
      "$0.150$",
      "$0.350$",
      "$0.250$"
    ],
    "answer": 0,
    "explanation": "$\\sin\\theta = \\frac{\\lambda}{d} = 0.050$.",
    "number": 80
  },
  {
    "type_tag": "PHY_THM_FIRST_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "A gas absorbs $500\\text{ J}$ of heat and does $150\\text{ J}$ of work. Change in internal energy $\\Delta U$?",
    "options": [
      "$650\\text{ J}$",
      "$150\\text{ J}$",
      "$360\\text{ J}$",
      "$500\\text{ J}$",
      "$350\\text{ J}$"
    ],
    "answer": 4,
    "explanation": "$\\Delta U = Q - W = 500 - 150 = 350\\text{ J}$.",
    "number": 81
  }
];

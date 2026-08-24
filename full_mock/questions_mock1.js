const QUESTIONS = [
  {
    "type_tag": "M1_ALG_COMPOSITE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "If $f(x) = 3x + 2$ and $g(x) = x^2$, evaluate $f(g(4))$.",
    "options": [
      "$58$",
      "$50$",
      "$63$",
      "$53$",
      "$46$"
    ],
    "answer": 1,
    "explanation": "$f(g(4)) = 3(16) + 2 = 50$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_DIST_2D",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Distance between $(0,0)$ and $(18, 24)$.",
    "options": [
      "$900$",
      "$30$",
      "$24$",
      "$42$",
      "$32$"
    ],
    "answer": 1,
    "explanation": "$d = \\sqrt{324 + 576} = 30$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_COMBINATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of ways to choose $2$ representatives from $8$ candidates.",
    "options": [
      "$31$",
      "$16$",
      "$56$",
      "$28$",
      "$64$"
    ],
    "answer": 3,
    "explanation": "$\\binom{8}{2} = 28$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_EXP_EQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve for $x$: $3^{x + 1} = 81$.",
    "options": [
      "$x = 5$",
      "$x = 7$",
      "$x = 3$",
      "$x = 6$",
      "$x = 4$"
    ],
    "answer": 2,
    "explanation": "$3^{x+1} = 3^{4} \\implies x = 3$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_MIDPT",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Midpoint of segment connecting $A(12, 0)$ and $B(0, 18)$.",
    "options": [
      "$(3, 3)$",
      "$(7, 9)$",
      "$(6, 9)$",
      "$(12, 18)$",
      "$(9, 6)$"
    ],
    "answer": 2,
    "explanation": "$M = (6, 9)$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_PERMUTATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of permutations of $2$ distinct items from $7$ items.",
    "options": [
      "$44$",
      "$42$",
      "$46$",
      "$48$",
      "$50$"
    ],
    "answer": 1,
    "explanation": "$P(7, 2) = 42$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_LOG_LAWS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Evaluate $\\log_3(27) + \\log_3(27) - \\log_3(3)$.",
    "options": [
      "$6$",
      "$5$",
      "$8$",
      "$7$",
      "$9$"
    ],
    "answer": 1,
    "explanation": "$3 + 3 - 1 = 5$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_DBL_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Simplify $2\\sin(3\\theta)\\cos(3\\theta)$.",
    "options": [
      "$\\tan(6\\theta)$",
      "$\\sin^2(3\\theta)$",
      "$\\cos(6\\theta)$",
      "$2\\sin(3\\theta)$",
      "$\\sin(6\\theta)$"
    ],
    "answer": 4,
    "explanation": "$2\\sin(A)\\cos(A) = \\sin(2A) = \\sin(6\\theta)$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_MEAN_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "A dataset with mean $\\mu = 15$ has each value multiplied by $3$ and plus $2$. Find new mean.",
    "options": [
      "$45$",
      "$51$",
      "$33$",
      "$47$",
      "$17$"
    ],
    "answer": 3,
    "explanation": "$\\mu_{\\text{new}} = 3(15) + 2 = 47$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_ALG_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Simplify $\\frac{x^2 - 16}{x + 4}$.",
    "options": [
      "$x + 5$",
      "$x - 4$",
      "$x + 4$",
      "$x - 5$",
      "$x - 6$"
    ],
    "answer": 1,
    "explanation": "$\\frac{(x - 4)(x + 4)}{x + 4} = x - 4$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_POLY_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Sum of interior angles of regular polygon with $7$ sides.",
    "options": [
      "$720^\\circ$",
      "$900^\\circ$",
      "$1440^\\circ$",
      "$1080^\\circ$",
      "$1260^\\circ$"
    ],
    "answer": 1,
    "explanation": "Sum $= 900^\\circ$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_SD_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "If a dataset with standard deviation $\\sigma = 6$ has each value multiplied by $4$, what is the new SD?",
    "options": [
      "$6$",
      "$24$",
      "$96$",
      "$12$",
      "$26$"
    ],
    "answer": 1,
    "explanation": "$\\sigma_{\\text{new}} = 4 \\times (6) = 24$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_PART_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Decompose $\\frac{3}{(x + 2)(x + 5)}$ into partial fractions.",
    "options": [
      "$\\frac{1}{x + 2} - \\frac{2}{x + 5}$",
      "$\\frac{3}{x + 2} + \\frac{3}{x + 5}$",
      "$\\frac{1}{x + 2} - \\frac{1}{x + 5}$",
      "$\\frac{1}{x + 2} + \\frac{1}{x + 5}$",
      "$\\frac{2}{x + 2} - \\frac{1}{x + 5}$"
    ],
    "answer": 2,
    "explanation": "Partial fractions decompose to $\\frac{1}{x + 2} - \\frac{1}{x + 5}$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_COORD_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Area of right triangle with vertices $(0,0)$, $(4, 0)$, and $(0, 10)$.",
    "options": [
      "$35$",
      "$40$",
      "$30$",
      "$20$",
      "$25$"
    ],
    "answer": 3,
    "explanation": "$\\text{Area} = 0.5 \\times 4 \\times 10 = 20$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_SEC_DERIV",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Find $\\frac{d^2y}{dx^2}$ for $y = 5x^3 - 6x$ at $x = 1$.",
    "options": [
      "$60$",
      "$15$",
      "$24$",
      "$30$",
      "$5$"
    ],
    "answer": 3,
    "explanation": "$\\frac{d^2y}{dx^2} = 6(5)x = 30$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_SURDS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Rationalise the denominator of $\\frac{9}{6 - \\sqrt{3}}$ and simplify.",
    "options": [
      "$\\frac{9(6 - \\sqrt{3})}{33}$",
      "$\\frac{9(6 + \\sqrt{3})}{33}$",
      "$\\frac{9(6 + \\sqrt{3})}{39}$",
      "$\\frac{9\\sqrt{3}}{33}$",
      "$\\frac{6 + \\sqrt{3}}{33}$"
    ],
    "answer": 1,
    "explanation": "Multiply numerator and denominator by conjugate $(6 + \\sqrt{3})$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_PERP_GRAD",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Find gradient perpendicular to $y = 5x + 9$.",
    "options": [
      "$5$",
      "$-5$",
      "$-\\frac{1}{5}$",
      "$-\\frac{1}{6}$",
      "$\\frac{1}{5}$"
    ],
    "answer": 2,
    "explanation": "$m_\\perp = -\\frac{1}{5}$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_TANG_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Gradient of tangent to $y = 6x^2$ at $x = 1$.",
    "options": [
      "$2$",
      "$6$",
      "$12$",
      "$14$",
      "$36$"
    ],
    "answer": 2,
    "explanation": "$\\frac{dy}{dx} = 2(6)x = 12$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_EXPONENTS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Easy",
    "question": "Evaluate the exact value of $(25)^{3/2} + 4$.",
    "options": [
      "$138$",
      "$147$",
      "$131$",
      "$127$",
      "$129$"
    ],
    "answer": 4,
    "explanation": "$(\\sqrt{25})^3 + 4 = 129$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_CIRC_TANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Equation of vertical tangent to $x^2 + y^2 = 36$ at $(6, 0)$.",
    "options": [
      "$x = -6$",
      "$y = 0$",
      "$x = 36$",
      "$x = 6$",
      "$y = 6$"
    ],
    "answer": 3,
    "explanation": "Vertical tangent is $x = 6$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_NORM_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "If tangent gradient is $9$, find normal gradient.",
    "options": [
      "$-\\frac{1}{10}$",
      "$9$",
      "$\\frac{1}{9}$",
      "$-9$",
      "$-\\frac{1}{9}$"
    ],
    "answer": 4,
    "explanation": "$m_n = -\\frac{1}{9}$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_DISCRIM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $c$ such that $x^2 + 10x + c = 0$ has exactly one repeated real root.",
    "options": [
      "$c = 25$",
      "$c = 29$",
      "$c = 27$",
      "$c = 31$",
      "$c = 33$"
    ],
    "answer": 0,
    "explanation": "$\\Delta = (10)^2 - 4c = 0 \\implies c = 25$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_CIRC_EQ",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Cartesian equation of circle with centre $(4, -5)$ and radius $6$.",
    "options": [
      "$(x - 4)^2 + (y + 5)^2 = 36$",
      "$(x + 4)^2 + (y + 5)^2 = 36$",
      "$(x - 4)^2 + (y - 5)^2 = 36$",
      "$(x + 4)^2 + (y - 5)^2 = 36$",
      "$(x - 4)^2 + (y + 5)^2 = 6$"
    ],
    "answer": 0,
    "explanation": "$(x - 4)^2 + (y + 5)^2 = 36$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_STAT_PT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Positive $x$-coordinate of stationary point of $y = x^3 - 15x + 4$.",
    "options": [
      "$6$",
      "$10$",
      "$\\sqrt{5}$",
      "$\\frac{1}{\\sqrt{5}}$",
      "$5$"
    ],
    "answer": 2,
    "explanation": "$3x^2 = 3(5) \\implies x = \\sqrt{5}$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_COMP_SQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find the minimum turning point of $y = x^2 - 10x + 33$.",
    "options": [
      "$(5, -10)$",
      "$(-5, -10)$",
      "$(5, 8)$",
      "$(5, 12)$",
      "$(-5, 8)$"
    ],
    "answer": 2,
    "explanation": "$y = (x - 5)^2 + 8$. Minimum point is $(5, 8)$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_EXACT_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Exact value of $\\tan(45^\\circ) + \\cos(60^\\circ) + 4$.",
    "options": [
      "$4.5$",
      "$6.0$",
      "$4.0$",
      "$5.0$",
      "$5.5$"
    ],
    "answer": 4,
    "explanation": "$1 + 0.5 + 4 = 5.5$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_DEF_INT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^2 12x^2 \\, dx$.",
    "options": [
      "$32$",
      "$64$",
      "$16$",
      "$48$",
      "$34$"
    ],
    "answer": 0,
    "explanation": "$\\left[ 4x^3 \\right]_0^2 = 32$.",
    "number": 27
  },
  {
    "type_tag": "M2_CALC_PARAM_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Parametric curve $x = t^2, y = 3t^3$. Find $\\frac{dy}{dx}$ at $t=1$.",
    "options": [
      "$6.0$",
      "$1.5$",
      "$9.0$",
      "$3.0$",
      "$4.5$"
    ],
    "answer": 4,
    "explanation": "$\\frac{dy}{dx} = 4.5$.",
    "number": 28
  },
  {
    "type_tag": "M2_VEC_SCALAR_TRIPLE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Find volume of parallelepiped defined by vectors $3\\mathbf{i}, 2\\mathbf{j}, 3\\mathbf{k}$.",
    "options": [
      "$18\\text{ units}^3$",
      "$27\\text{ units}^3$",
      "$9\\text{ units}^3$",
      "$20\\text{ units}^3$",
      "$36\\text{ units}^3$"
    ],
    "answer": 0,
    "explanation": "$V = |3(2)(3)| = 18$.",
    "number": 29
  },
  {
    "type_tag": "M2_CMP_ROOTS_UNITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Sum of all $5$ roots of the polynomial equation $z^{5} - 1 = 0$.",
    "options": [
      "$5$",
      "$0$",
      "$1$",
      "$i$",
      "$-1$"
    ],
    "answer": 1,
    "explanation": "Sum of all roots of unity is $0$.",
    "number": 30
  },
  {
    "type_tag": "M2_CALC_MACLAURIN",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "First two non-zero terms of Maclaurin series for $\\sin(4x)$.",
    "options": [
      "$4x - \\frac{4x^3}{6}$",
      "$4x - \\frac{(i+1)**3 x^3}{6}$",
      "$4x + \\frac{(i+1)**3 x^3}{6}$",
      "$1 - \\frac{(i+1)**2 x^2}{2}$",
      "$4x - 64x^3$"
    ],
    "answer": 1,
    "explanation": "$\\sin(4x) = 4x - \\frac{(i+1)**3 x^3}{6} + \\dots$",
    "number": 31
  },
  {
    "type_tag": "M2_VEC_DIR_COSINE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If direction angles $\\alpha, \\beta, \\gamma$ satisfy $\\cos^2\\alpha = 0.15$ and $\\cos^2\\beta = 0.25$, find $\\cos^2\\gamma$.",
    "options": [
      "$0.55$",
      "$0.65$",
      "$0.60$",
      "$0.50$",
      "$0.70$"
    ],
    "answer": 2,
    "explanation": "$\\cos^2\\gamma = 1 - (0.15 + 0.25) = 0.60$.",
    "number": 32
  },
  {
    "type_tag": "M2_MAT_IDENTITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Determinant of $4\\times4$ identity matrix $\\mathbf{I}_{4}$.",
    "options": [
      "$1$",
      "$0$",
      "$-1$",
      "$4$",
      "$16$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{I}) = 1$.",
    "number": 33
  },
  {
    "type_tag": "M2_CALC_INTEG_TRIG_SQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int_0^\\pi \\sin^2(3x) \\, dx$.",
    "options": [
      "$\\frac{3\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$2\\pi$",
      "$\\frac{\\pi}{4}$",
      "$\\pi$"
    ],
    "answer": 1,
    "explanation": "Average of $\\sin^2(3x)$ over full periods is $1/2 \\implies \\frac{\\pi}{2}$.",
    "number": 34
  },
  {
    "type_tag": "M2_VEC_POSITION_VEC",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Vector $\\vec{AB}$ from $A(3, 2, 1)$ to $B(6, 5, 4)$.",
    "options": [
      "$3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$",
      "$6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}$",
      "$9\\mathbf{i} + 7\\mathbf{j} + 5\\mathbf{k}$",
      "$-3\\mathbf{i} - 3\\mathbf{j} - 3\\mathbf{k}$",
      "$3\\mathbf{i} + 2\\mathbf{j} + 1\\mathbf{k}$"
    ],
    "answer": 0,
    "explanation": "$\\vec{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$.",
    "number": 35
  },
  {
    "type_tag": "M2_MAT_SINGULAR",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Find $k$ such that $\\begin{pmatrix} 4 & k \\\\ 2 & 4 \\end{pmatrix}$ is singular.",
    "options": [
      "$k = 9$",
      "$k = 8$",
      "$k = 11$",
      "$k = 13$",
      "$k = 7$"
    ],
    "answer": 1,
    "explanation": "$4(4) - 2k = 0 \\implies k = 8$.",
    "number": 36
  },
  {
    "type_tag": "M2_CALC_PRODUCT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(x e^{5x})$.",
    "options": [
      "$(1 + x)e^{5x}$",
      "$5e^{5x}$",
      "$(1 - 5x)e^{5x}$",
      "$(1 + 5x)e^{5x}$",
      "$5x e^{5x}$"
    ],
    "answer": 3,
    "explanation": "Product rule: $(1 + 5x)e^{5x}$.",
    "number": 37
  },
  {
    "type_tag": "M2_VEC_DOT_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Compute $\\begin{pmatrix} 4 \\\\ 2 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$.",
    "options": [
      "$12$",
      "$24$",
      "$20$",
      "$8$",
      "$16$"
    ],
    "answer": 4,
    "explanation": "$(4)(3) + (2)(-1) + (3)(2) = 16$.",
    "number": 38
  },
  {
    "type_tag": "M2_MAT_DETERMINANT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Determinant of $\\begin{pmatrix} 5 & 2 \\\\ 3 & 6 \\end{pmatrix}$.",
    "options": [
      "$36$",
      "$30$",
      "$24$",
      "$27$",
      "$11$"
    ],
    "answer": 2,
    "explanation": "$\\det = 24$.",
    "number": 39
  },
  {
    "type_tag": "M2_CALC_QUOTIENT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Differentiate $y = \\frac{\\ln x}{x^{5}}$.",
    "options": [
      "$\\frac{1}{x^{6}}$",
      "$\\frac{1 - 5\\ln x}{x^{6}}$",
      "$\\frac{5\\ln x - 1}{x^{6}}$",
      "$\\frac{5}{x^{5}}$",
      "$\\frac{1 - \\ln x}{x^{10}}$"
    ],
    "answer": 1,
    "explanation": "Quotient rule: $\\frac{1 - 5\\ln x}{x^{6}}$.",
    "number": 40
  },
  {
    "type_tag": "M2_VEC_PERP_CHECK",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\mathbf{a} = \\begin{pmatrix} 4 \\\\ 2 \\\\ -4 \\end{pmatrix}$ is perpendicular to $\\mathbf{b} = \\begin{pmatrix} 4 \\\\ 5 \\\\ 2 \\end{pmatrix}$, condition satisfied is:",
    "options": [
      "$\\mathbf{a} \\cdot \\mathbf{b} = 0$",
      "$\\mathbf{a} + \\mathbf{b} = 0$",
      "$\\mathbf{a} \\times \\mathbf{b} = 0$",
      "$|\\mathbf{a}| = |\\mathbf{b}|$",
      "$\\mathbf{a} = 2\\mathbf{b}$"
    ],
    "answer": 0,
    "explanation": "$\\mathbf{a} \\cdot \\mathbf{b} = 0$.",
    "number": 41
  },
  {
    "type_tag": "M2_MAT_INVERSE_2X2",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Inverse of matrix $\\begin{pmatrix} 5 & 1 \\\\ 4 & 1 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 5 & -1 \\\\ -4 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 1 \\\\ 4 & -5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -1 \\\\ -4 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 4 \\\\ 1 & 5 \\end{pmatrix}$"
    ],
    "answer": 3,
    "explanation": "$\\det = (i+1) - i = 1 \\implies \\mathbf{A}^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -4 & 5 \\end{pmatrix}$.",
    "number": 42
  },
  {
    "type_tag": "M2_CALC_IMPLICIT_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Find $\\frac{dy}{dx}$ for $5x^2 + y^2 = 100$.",
    "options": [
      "$-2(5)x$",
      "$-\\frac{y}{5x}$",
      "$\\frac{5x}{y}$",
      "$-\\frac{x}{y}$",
      "$-\\frac{5x}{y}$"
    ],
    "answer": 4,
    "explanation": "$2(5)x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{5x}{y}$.",
    "number": 43
  },
  {
    "type_tag": "M2_VEC_MAGNITUDE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Find magnitude of $\\mathbf{v} = 4\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    "options": [
      "$24$",
      "$8$",
      "$\\sqrt{8}$",
      "$2\\sqrt{4}$",
      "$\\sqrt{24}$"
    ],
    "answer": 4,
    "explanation": "$|\\mathbf{v}| = \\sqrt{24}$.",
    "number": 44
  },
  {
    "type_tag": "M2_MAT_MULTIPLICATION",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Product $\\begin{pmatrix} 4 & 0 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 2 & 0 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 4 & 12 \\\\ 4 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 3 \\\\ 2 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 3 \\\\ 4 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 0 \\\\ 4 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 0 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "$\\begin{pmatrix} 4 & 12 \\\\ 4 & 0 \\end{pmatrix}$.",
    "number": 45
  },
  {
    "type_tag": "M2_CALC_INTEG_PARTS",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int x e^{4x} \\, dx$.",
    "options": [
      "$(x - 1)e^{4x} + C$",
      "$\\frac{e^{4x}}{16} + C$",
      "$\\frac{x^2 e^{4x}}{2} + C$",
      "$\\frac{x e^{4x}}{4} - \\frac{e^{4x}}{16} + C$",
      "$\\frac{x e^{4x}}{4} + C$"
    ],
    "answer": 3,
    "explanation": "$\\frac{x e^{4x}}{4} - \\frac{e^{4x}}{16} + C$.",
    "number": 46
  },
  {
    "type_tag": "M2_VEC_UNIT_VECTOR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Unit vector in direction of $\\mathbf{u} = 12\\mathbf{i} + 16\\mathbf{j}$.",
    "options": [
      "$\\frac{3}{25}\\mathbf{i} + \\frac{4}{25}\\mathbf{j}$",
      "$\\frac{4}{5}\\mathbf{i} + \\frac{3}{5}\\mathbf{j}$",
      "$3\\mathbf{i} + 4\\mathbf{j}$",
      "$20(3\\mathbf{i} + 4\\mathbf{j})$",
      "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$"
    ],
    "answer": 4,
    "explanation": "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$.",
    "number": 47
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_ROT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing anticlockwise rotation by $360^\\circ$ about origin.",
    "options": [
      "$\\begin{pmatrix} \\cos(360^\\circ) & -\\sin(360^\\circ) \\\\ \\sin(360^\\circ) & \\cos(360^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\sin(360^\\circ) & \\cos(360^\\circ) \\\\ -\\cos(360^\\circ) & \\sin(360^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "Standard 2D rotation matrix formula.",
    "number": 48
  },
  {
    "type_tag": "M2_CALC_SUBSTITUTION",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int 2x (x^2 + 4)^3 \\, dx$.",
    "options": [
      "$(x^2 + 4)^4 + C$",
      "$\\frac{(x^2 + 4)^3}{3} + C$",
      "$3(x^2 + 4)^2 + C$",
      "$\\frac{x^2(x^2 + 4)^4}{4} + C$",
      "$\\frac{(x^2 + 4)^4}{4} + C$"
    ],
    "answer": 4,
    "explanation": "$\\frac{(x^2 + 4)^4}{4} + C$.",
    "number": 49
  },
  {
    "type_tag": "M2_VEC_LINE_EQ",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Line passing through $A(4, 1, 2)$ with direction $\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$.",
    "options": [
      "$\\mathbf{r} = (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) + \\lambda(4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) \\times \\mathbf{d}$",
      "$\\mathbf{r} = (6\\mathbf{i} + 3\\mathbf{k})$",
      "$\\mathbf{r} = \\lambda(4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$"
    ],
    "answer": 4,
    "explanation": "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$.",
    "number": 50
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_REFL",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing reflection in line $y = x$ scaled by $4$.",
    "options": [
      "$\\begin{pmatrix} -4 & 0 \\\\ 0 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -4 \\\\ -4 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 4 \\\\ 4 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 0 \\\\ 0 & -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 4 \\\\ 4 & 0 \\end{pmatrix}$"
    ],
    "answer": 4,
    "explanation": "$4\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 4 \\\\ 4 & 0 \\end{pmatrix}$.",
    "number": 51
  },
  {
    "type_tag": "M2_CALC_DIFF_EQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{dy}{dx} = 5y$ with $y(0) = 4$.",
    "options": [
      "$y = 4e^{5x}$",
      "$y = 4\\ln(5x)$",
      "$y = 4e^{-5x}$",
      "$y = e^{5x} + 3$",
      "$y = 5x + 4$"
    ],
    "answer": 0,
    "explanation": "$y = 4e^{5x}$.",
    "number": 52
  },
  {
    "type_tag": "M2_VEC_CROSS_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Evaluate cross product $(4\\mathbf{i}) \\times \\mathbf{j}$.",
    "options": [
      "$4\\mathbf{j}$",
      "$\\mathbf{0}$",
      "$-4\\mathbf{k}$",
      "$4$",
      "$4\\mathbf{k}$"
    ],
    "answer": 4,
    "explanation": "$(4\\mathbf{i}) \\times \\mathbf{j} = 4\\mathbf{k}$.",
    "number": 53
  },
  {
    "type_tag": "M2_CMP_IMAG_POWERS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Evaluate $i^{17}$ where $i = \\sqrt{-1}$.",
    "options": [
      "$1$",
      "$-i$",
      "$0$",
      "$-1$",
      "$i$"
    ],
    "answer": 4,
    "explanation": "$i^{17} = i$.",
    "number": 54
  },
  {
    "type_tag": "PHY_MECH_MOMENT_FORCE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Moment of force of $30\\text{ N}$ acting at perpendicular distance $0.5\\text{ m}$.",
    "options": [
      "$17\\text{ N m}$",
      "$60\\text{ N m}$",
      "$7.5\\text{ N m}$",
      "$15\\text{ N m}$",
      "$30\\text{ N m}$"
    ],
    "answer": 3,
    "explanation": "$\\tau = F d = 15\\text{ N m}$.",
    "number": 55
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF2",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "In a closed loop with EMF $18\\text{ V}$ and resistors $R_1 = 3\\,\\Omega, R_2 = 6\\,\\Omega$, current $I$ is:",
    "options": [
      "$0.8\\text{ A}$",
      "$3.3\\text{ A}$",
      "$2.3\\text{ A}$",
      "$1.3\\text{ A}$",
      "$4.3\\text{ A}$"
    ],
    "answer": 2,
    "explanation": "$I = \\frac{18}{9} = 2.3\\text{ A}$.",
    "number": 56
  },
  {
    "type_tag": "PHY_THM_LATENT_HEAT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Energy required to vaporize mass $3\\text{ kg}$ with specific latent heat $L = 2.26 \\times 10^6\\text{ J kg}^{-1}$.",
    "options": [
      "$9.78 \\times 10^6\\text{ J}$",
      "$10.78 \\times 10^6\\text{ J}$",
      "$7.78 \\times 10^6\\text{ J}$",
      "$8.78 \\times 10^6\\text{ J}$",
      "$6.78 \\times 10^6\\text{ J}$"
    ],
    "answer": 4,
    "explanation": "$Q = mL = 6.78 \\times 10^6\\text{ J}$.",
    "number": 57
  },
  {
    "type_tag": "PHY_MECH_IMPULSE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Force of $60\\text{ N}$ acts for $0.2\\text{ s}$. Calculate impulse $\\Delta p$.",
    "options": [
      "$60\\text{ N s}$",
      "$12\\text{ N s}$",
      "$6\\text{ N s}$",
      "$24\\text{ N s}$",
      "$13\\text{ N s}$"
    ],
    "answer": 1,
    "explanation": "$\\text{Impulse} = 12\\text{ N s}$.",
    "number": 58
  },
  {
    "type_tag": "PHY_WAV_POLARISATION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Which of the following electromagnetic waves (frequency $3 \\times 10^{14}\\text{ Hz}$) can be polarised?",
    "options": [
      "Longitudinal seismic P-waves",
      "Light waves (transverse EM)",
      "Pressure waves in water",
      "Ultrasound waves",
      "Sound waves in air"
    ],
    "answer": 1,
    "explanation": "Only transverse waves can be polarised.",
    "number": 59
  },
  {
    "type_tag": "PHY_FLD_LORENTZ_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Magnetic force on charge $3\\text{ C}$ moving at $5\\text{ m s}^{-1}$ perpendicular to field $0.4\\text{ T}$.",
    "options": [
      "$7\\text{ N}$",
      "$12\\text{ N}$",
      "$7.5\\text{ N}$",
      "$6\\text{ N}$",
      "$3\\text{ N}$"
    ],
    "answer": 3,
    "explanation": "$F = qvB = (3)(5)(0.4) = 6\\text{ N}$.",
    "number": 60
  },
  {
    "type_tag": "PHY_MECH_FREE_FALL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Time taken for an object of mass $3\\text{ kg}$ to drop $45\\text{ m}$ from rest ($g=10\\text{ m s}^{-2}$).",
    "options": [
      "$4.5\\text{ s}$",
      "$3\\text{ s}$",
      "$1.5\\text{ s}$",
      "$9\\text{ s}$",
      "$2\\text{ s}$"
    ],
    "answer": 1,
    "explanation": "$t = \\sqrt{2h/g} = 3\\text{ s}$ (independent of mass).",
    "number": 61
  },
  {
    "type_tag": "PHY_ELEC_POWER_EQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Electrical power dissipated in resistor $R = 5\\,\\Omega$ carrying current $I = 2\\text{ A}$.",
    "options": [
      "$10\\text{ W}$",
      "$40\\text{ W}$",
      "$20\\text{ W}$",
      "$22\\text{ W}$",
      "$5\\text{ W}$"
    ],
    "answer": 2,
    "explanation": "$P = I^2 R = 4(5) = 20\\text{ W}$.",
    "number": 62
  },
  {
    "type_tag": "PHY_NUC_ALPHA_DECAY",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Nuclide $^{238}_{92}\\text{U}$ undergoing $3$ alpha ($\\alpha$) decay(s) has new atomic number $Z$:",
    "options": [
      "$80$",
      "$86$",
      "$89$",
      "$98$",
      "$92$"
    ],
    "answer": 1,
    "explanation": "Each $\\alpha$ decay decreases $Z$ by $2 \\implies 92 - 2(3) = 86$.",
    "number": 63
  },
  {
    "type_tag": "PHY_MECH_SUVAT_V",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Car accelerates from $8\\text{ m s}^{-1}$ at $2\\text{ m s}^{-2}$ for $3\\text{ s}$. Find final velocity $v$.",
    "options": [
      "$10\\text{ m s}^{-1}$",
      "$14\\text{ m s}^{-1}$",
      "$9\\text{ m s}^{-1}$",
      "$16\\text{ m s}^{-1}$",
      "$12\\text{ m s}^{-1}$"
    ],
    "answer": 1,
    "explanation": "$v = 8 + 6 = 14\\text{ m s}^{-1}$.",
    "number": 64
  },
  {
    "type_tag": "PHY_ELEC_OHMS_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Current through $20\\,\\Omega$ resistor connected across $10\\text{ V}$.",
    "options": [
      "$0.25\\text{ A}$",
      "$0.50\\text{ A}$",
      "$20.0\\text{ A}$",
      "$2.0\\text{ A}$",
      "$40.0\\text{ A}$"
    ],
    "answer": 1,
    "explanation": "$I = \\frac{10}{20} = 0.50\\text{ A}$.",
    "number": 65
  },
  {
    "type_tag": "PHY_THM_SHC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Heat needed to warm $4\\text{ kg}$ of water ($c=4200$) by $10\\text{ K}$.",
    "options": [
      "$16.8\\text{ kJ}$",
      "$1680\\text{ kJ}$",
      "$84\\text{ kJ}$",
      "$168\\text{ kJ}$",
      "$336\\text{ kJ}$"
    ],
    "answer": 3,
    "explanation": "$Q = mc\\Delta T = 168\\text{ kJ}$.",
    "number": 66
  },
  {
    "type_tag": "PHY_MECH_PROJECTILE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Ball launched horizontally at $40\\text{ m s}^{-1}$ from height $20\\text{ m}$ ($g=10$). Find horizontal range.",
    "options": [
      "$80\\text{ m}$",
      "$40\\text{ m}$",
      "$90\\text{ m}$",
      "$160\\text{ m}$",
      "$20\\text{ m}$"
    ],
    "answer": 0,
    "explanation": "Range $= ut = 40 \\times 2 = 80\\text{ m}$.",
    "number": 67
  },
  {
    "type_tag": "PHY_ELEC_PARALLEL_R",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Equivalent resistance of two identical $40\\,\\Omega$ resistors in parallel.",
    "options": [
      "$80\\,\\Omega$",
      "$40\\,\\Omega$",
      "$20\\,\\Omega$",
      "$10.0\\,\\Omega$",
      "$60\\,\\Omega$"
    ],
    "answer": 2,
    "explanation": "$R_p = 20\\,\\Omega$.",
    "number": 68
  },
  {
    "type_tag": "PHY_THM_BOYLE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Ideal gas at constant $T$ compressed to volume $V/5$. New pressure?",
    "options": [
      "$25P_0$",
      "$5P_0$",
      "$P_0/25$",
      "$P_0/5$",
      "$P_0$"
    ],
    "answer": 1,
    "explanation": "$P_2 = 5P_0$.",
    "number": 69
  },
  {
    "type_tag": "PHY_MECH_NEWTON2",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Net force on mass $5\\text{ kg}$ accelerating at $4\\text{ m s}^{-2}$.",
    "options": [
      "$20\\text{ N}$",
      "$21\\text{ N}$",
      "$17\\text{ N}$",
      "$19\\text{ N}$",
      "$18\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F = ma = 20\\text{ N}$.",
    "number": 70
  },
  {
    "type_tag": "PHY_ELEC_POT_DIVIDER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Potential divider: $R_1 = 100\\,\\Omega, R_2 = 400\\,\\Omega, V_{\\text{in}} = 12\\text{ V}$. Find $V_{\\text{out}}$ across $R_2$.",
    "options": [
      "$8.00\\text{ V}$",
      "$11.00\\text{ V}$",
      "$9.00\\text{ V}$",
      "$12.00\\text{ V}$",
      "$10.00\\text{ V}$"
    ],
    "answer": 4,
    "explanation": "$V_{\\text{out}} = 10.00\\text{ V}$.",
    "number": 71
  },
  {
    "type_tag": "PHY_FLD_GRAV_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Distance from planet centre increases by factor $5$. Gravitational field $g$?",
    "options": [
      "Increases by factor $25$",
      "Unchanged",
      "Decreases by factor $25$",
      "Increases by factor $5$",
      "Decreases by factor $5$"
    ],
    "answer": 2,
    "explanation": "$g' = \\frac{g}{25}$.",
    "number": 72
  },
  {
    "type_tag": "PHY_MECH_MOMENTUM",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Trolley of mass $2\\text{ kg}$ at $20\\text{ m s}^{-1}$ collides inelastically with stationary $3\\text{ kg}$ trolley. Common speed?",
    "options": [
      "$20\\text{ m s}^{-1}$",
      "$16\\text{ m s}^{-1}$",
      "$4\\text{ m s}^{-1}$",
      "$10.0\\text{ m s}^{-1}$",
      "$8\\text{ m s}^{-1}$"
    ],
    "answer": 4,
    "explanation": "$v = 8\\text{ m s}^{-1}$.",
    "number": 73
  },
  {
    "type_tag": "PHY_ELEC_RESISTIVITY",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Length of wire with original resistance $5\\,\\Omega$ is doubled at constant volume. New resistance?",
    "options": [
      "$10\\,\\Omega$",
      "$5\\,\\Omega$",
      "$2.5\\,\\Omega$",
      "$40\\,\\Omega$",
      "$20\\,\\Omega$"
    ],
    "answer": 4,
    "explanation": "$R' = 4R = 20\\,\\Omega$.",
    "number": 74
  },
  {
    "type_tag": "PHY_FLD_COULOMB",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Electrostatic force between two charges $+4Q$ and $+Q$ at distance $r$.",
    "options": [
      "$F = \\frac{Q^2}{4\\pi\\varepsilon_0 r^2}$",
      "$F = \\frac{8Q}{4\\pi\\varepsilon_0 r^2}$",
      "$F = \\frac{4Q^2}{4\\pi\\varepsilon_0 r}$",
      "$F = \\frac{4Q^2}{4\\pi\\varepsilon_0 r^2}$ (repulsive)",
      "Attractive force"
    ],
    "answer": 3,
    "explanation": "$F = \\frac{4Q^2}{4\\pi\\varepsilon_0 r^2}$.",
    "number": 75
  },
  {
    "type_tag": "PHY_MECH_POWER",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Engine exerts force $200\\text{ N}$ at steady speed $4\\text{ m s}^{-1}$. Power output?",
    "options": [
      "$1600\\text{ W}$",
      "$200\\text{ W}$",
      "$400\\text{ W}$",
      "$800\\text{ W}$",
      "$204\\text{ W}$"
    ],
    "answer": 3,
    "explanation": "$P = Fv = 800\\text{ W}$.",
    "number": 76
  },
  {
    "type_tag": "PHY_ELEC_EMF_INTERNAL",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Battery $\\mathcal{E} = 12\\text{ V}, r = 2.0\\,\\Omega$, current $2\\text{ A}$. Terminal p.d. $V$?",
    "options": [
      "$10.0\\text{ V}$",
      "$8.0\\text{ V}$",
      "$12.0\\text{ V}$",
      "$9.0\\text{ V}$",
      "$11.0\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "$V = 12 - 2(0.5(4)) = 10.0\\text{ V}$.",
    "number": 77
  },
  {
    "type_tag": "PHY_FLD_MAGNETIC_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Force on wire length $0.5\\text{ m}$ carrying $2\\text{ A}$ perpendicular to field $0.8\\text{ T}$.",
    "options": [
      "$0.90\\text{ N}$",
      "$4.0\\text{ N}$",
      "$0.8\\text{ N}$",
      "$1.6\\text{ N}$",
      "$0.40\\text{ N}$"
    ],
    "answer": 2,
    "explanation": "$F = BIL = 0.8\\text{ N}$.",
    "number": 78
  },
  {
    "type_tag": "PHY_MECH_HOOKE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Elastic potential energy in spring with $k = 400\\text{ N m}^{-1}$ extended by $0.10\\text{ m}$.",
    "options": [
      "$4.0\\text{ J}$",
      "$1.00\\text{ J}$",
      "$40.0\\text{ J}$",
      "$2.0\\text{ J}$",
      "$20.0\\text{ J}$"
    ],
    "answer": 3,
    "explanation": "$E = 0.5 k x^2 = 2.0\\text{ J}$.",
    "number": 79
  },
  {
    "type_tag": "PHY_ELEC_CAPACITOR_E",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Energy stored in $80\\,\\mu\\text{F}$ capacitor charged to $10\\text{ V}$.",
    "options": [
      "$2.00\\text{ mJ}$",
      "$4.0\\text{ mJ}$",
      "$40.0\\text{ mJ}$",
      "$16.0\\text{ mJ}$",
      "$8.0\\text{ mJ}$"
    ],
    "answer": 1,
    "explanation": "$E = 0.5 C V^2 = 4.0\\text{ mJ}$.",
    "number": 80
  },
  {
    "type_tag": "PHY_NUC_HALF_LIFE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Fraction of sample remaining after $5$ half-lives.",
    "options": [
      "$\\frac{1}{32}$",
      "$\\frac{1}{33}$",
      "$\\frac{1}{34}$",
      "$\\frac{1}{36}$",
      "$\\frac{1}{35}$"
    ],
    "answer": 0,
    "explanation": "Remaining $= \\frac{1}{32}$.",
    "number": 81
  }
];

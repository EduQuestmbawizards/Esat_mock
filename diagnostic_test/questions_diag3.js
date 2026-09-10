const QUESTIONS = [
  {
    "type_tag": "M1_ALG_BINOMIAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find coefficient of $x^2$ in the expansion of $(1 + 6x)^5$.",
    "options": [
      "$365$",
      "$370$",
      "$375$",
      "$360$",
      "$380$"
    ],
    "answer": 3,
    "explanation": "$\\binom{5}{2}(1)^3(6)^2 = 360$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_TRIG_SOL",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Hard",
    "question": "Number of distinct solutions to $\\sin(7x) = 0$ in the range $0 \\le x \\le \\pi$.",
    "options": [
      "$11$",
      "$8$",
      "$7$",
      "$10$",
      "$9$"
    ],
    "answer": 1,
    "explanation": "Solutions occur at $(7)x = 0, \\pi, 2\\pi, \\dots, 7\\pi$, giving $8$ solutions.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_GP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "GP has $a = 8$ and $r = 3$. Find $4\\text{th}$ term.",
    "options": [
      "$72$",
      "$216$",
      "$96$",
      "$648$",
      "$218$"
    ],
    "answer": 1,
    "explanation": "$u_4 = (8) \\times 27 = 216$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_TRANSFORM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "State the equation after translating $y = f(x)$ by vector $\\begin{pmatrix} 7 \\\\ -9 \\end{pmatrix}$.",
    "options": [
      "$y = f(x + 7) - 9$",
      "$y = 7f(x) - 9$",
      "$y = f(x - 7) - 9$",
      "$y = f(x + 7) + 9$",
      "$y = f(x - 7) + 9$"
    ],
    "answer": 2,
    "explanation": "$y = f(x - 7) - 9$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_ARC_LEN",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Arc length with radius $24\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$9\\pi\\text{ cm}$",
      "$8\\pi\\text{ cm}$",
      "$6\\pi\\text{ cm}$",
      "$7\\pi\\text{ cm}$",
      "$10\\pi\\text{ cm}$"
    ],
    "answer": 2,
    "explanation": "$s = 24 \\times \\frac{\\pi}{4} = 6\\pi\\text{ cm}$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_GP_SUM_INF",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum to infinity of GP with $a = 18$ and $r = \\frac{1}{4}$.",
    "options": [
      "$18$",
      "$25$",
      "$72$",
      "$6$",
      "$24$"
    ],
    "answer": 4,
    "explanation": "$S_\\infty = \\frac{18}{3/4} = 24$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_INVERSE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $f^{-1}(x)$ for $f(x) = 8x - 10$.",
    "options": [
      "$\\frac{8}{x + 10}$",
      "$\\frac{x + 10}{8}$",
      "$\\frac{x - 10}{8}$",
      "$8x + 10$",
      "$\\frac{1}{8x - 10}$"
    ],
    "answer": 1,
    "explanation": "$f^{-1}(x) = \\frac{x + 10}{8}$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_SECTOR_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Sector area with radius $12\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$37\\pi\\text{ cm}^2$",
      "$43\\pi\\text{ cm}^2$",
      "$\\frac{41\\pi}{4}\\text{ cm}^2$",
      "$\\frac{36\\pi}{2}\\text{ cm}^2$",
      "$\\frac{39\\pi}{2}\\text{ cm}^2$"
    ],
    "answer": 3,
    "explanation": "$A = \\frac{36\\pi}{2}\\text{ cm}^2$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_COND_PROB",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Given $P(A) = 0.80$, $P(B) = 0.40$, and $P(A \\cap B) = 0.32$, calculate $P(B \\mid A)$.",
    "options": [
      "$0.40$",
      "$0.50$",
      "$0.10$",
      "$0.80$",
      "$0.20$"
    ],
    "answer": 0,
    "explanation": "$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = 0.40$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_COMPOSITE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "If $f(x) = 3x + 2$ and $g(x) = x^2$, evaluate $f(g(7))$.",
    "options": [
      "$157$",
      "$145$",
      "$162$",
      "$152$",
      "$149$"
    ],
    "answer": 4,
    "explanation": "$f(g(7)) = 3(49) + 2 = 149$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_DIST_2D",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Distance between $(0,0)$ and $(36, 48)$.",
    "options": [
      "$62$",
      "$48$",
      "$3600$",
      "$84$",
      "$60$"
    ],
    "answer": 4,
    "explanation": "$d = \\sqrt{1296 + 2304} = 60$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_COMBINATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of ways to choose $2$ representatives from $11$ candidates.",
    "options": [
      "$58$",
      "$110$",
      "$22$",
      "$121$",
      "$55$"
    ],
    "answer": 4,
    "explanation": "$\\binom{11}{2} = 55$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_EXP_EQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve for $x$: $3^{x + 1} = 2187$.",
    "options": [
      "$x = 6$",
      "$x = 10$",
      "$x = 8$",
      "$x = 7$",
      "$x = 9$"
    ],
    "answer": 0,
    "explanation": "$3^{x+1} = 3^{7} \\implies x = 6$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_MIDPT",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Midpoint of segment connecting $A(24, 0)$ and $B(0, 36)$.",
    "options": [
      "$(12, 18)$",
      "$(6, 6)$",
      "$(13, 18)$",
      "$(24, 36)$",
      "$(18, 12)$"
    ],
    "answer": 0,
    "explanation": "$M = (12, 18)$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_PERMUTATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of permutations of $2$ distinct items from $10$ items.",
    "options": [
      "$96$",
      "$90$",
      "$94$",
      "$92$",
      "$98$"
    ],
    "answer": 1,
    "explanation": "$P(10, 2) = 90$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_LOG_LAWS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Evaluate $\\log_3(729) + \\log_3(27) - \\log_3(3)$.",
    "options": [
      "$9$",
      "$10$",
      "$12$",
      "$11$",
      "$8$"
    ],
    "answer": 4,
    "explanation": "$6 + 3 - 1 = 8$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_DBL_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Simplify $2\\sin(6\\theta)\\cos(6\\theta)$.",
    "options": [
      "$\\tan(12\\theta)$",
      "$2\\sin(6\\theta)$",
      "$\\sin(12\\theta)$",
      "$\\sin^2(6\\theta)$",
      "$\\cos(12\\theta)$"
    ],
    "answer": 2,
    "explanation": "$2\\sin(A)\\cos(A) = \\sin(2A) = \\sin(12\\theta)$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_MEAN_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "A dataset with mean $\\mu = 18$ has each value multiplied by $3$ and plus $2$. Find new mean.",
    "options": [
      "$60$",
      "$56$",
      "$54$",
      "$20$",
      "$39$"
    ],
    "answer": 1,
    "explanation": "$\\mu_{\\text{new}} = 3(18) + 2 = 56$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_ALG_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Simplify $\\frac{x^2 - 49}{x + 7}$.",
    "options": [
      "$x + 8$",
      "$x - 7$",
      "$x - 8$",
      "$x + 7$",
      "$x - 9$"
    ],
    "answer": 1,
    "explanation": "$\\frac{(x - 7)(x + 7)}{x + 7} = x - 7$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_POLY_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Sum of interior angles of regular polygon with $10$ sides.",
    "options": [
      "$1620^\\circ$",
      "$1980^\\circ$",
      "$1260^\\circ$",
      "$1800^\\circ$",
      "$1440^\\circ$"
    ],
    "answer": 4,
    "explanation": "Sum $= 1440^\\circ$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_SD_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "If a dataset with standard deviation $\\sigma = 9$ has each value multiplied by $4$, what is the new SD?",
    "options": [
      "$144$",
      "$36$",
      "$18$",
      "$9$",
      "$38$"
    ],
    "answer": 1,
    "explanation": "$\\sigma_{\\text{new}} = 4 \\times (9) = 36$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_PART_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Decompose $\\frac{3}{(x + 5)(x + 8)}$ into partial fractions.",
    "options": [
      "$\\frac{2}{x + 5} - \\frac{1}{x + 8}$",
      "$\\frac{1}{x + 5} + \\frac{1}{x + 8}$",
      "$\\frac{1}{x + 5} - \\frac{2}{x + 8}$",
      "$\\frac{3}{x + 5} + \\frac{3}{x + 8}$",
      "$\\frac{1}{x + 5} - \\frac{1}{x + 8}$"
    ],
    "answer": 4,
    "explanation": "Partial fractions decompose to $\\frac{1}{x + 5} - \\frac{1}{x + 8}$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_COORD_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Area of right triangle with vertices $(0,0)$, $(10, 0)$, and $(0, 25)$.",
    "options": [
      "$125$",
      "$140$",
      "$145$",
      "$135$",
      "$130$"
    ],
    "answer": 0,
    "explanation": "$\\text{Area} = 0.5 \\times 10 \\times 25 = 125$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_SEC_DERIV",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Find $\\frac{d^2y}{dx^2}$ for $y = 8x^3 - 6x$ at $x = 1$.",
    "options": [
      "$8$",
      "$42$",
      "$24$",
      "$48$",
      "$96$"
    ],
    "answer": 3,
    "explanation": "$\\frac{d^2y}{dx^2} = 6(8)x = 48$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_SURDS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Rationalise the denominator of $\\frac{15}{9 - \\sqrt{3}}$ and simplify.",
    "options": [
      "$\\frac{15(9 + \\sqrt{3})}{84}$",
      "$\\frac{15(9 + \\sqrt{3})}{78}$",
      "$\\frac{15(9 - \\sqrt{3})}{78}$",
      "$\\frac{9 + \\sqrt{3}}{78}$",
      "$\\frac{15\\sqrt{3}}{78}$"
    ],
    "answer": 1,
    "explanation": "Multiply numerator and denominator by conjugate $(9 + \\sqrt{3})$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_PERP_GRAD",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Find gradient perpendicular to $y = 8x + 9$.",
    "options": [
      "$-\\frac{1}{9}$",
      "$8$",
      "$-\\frac{1}{8}$",
      "$-8$",
      "$\\frac{1}{8}$"
    ],
    "answer": 2,
    "explanation": "$m_\\perp = -\\frac{1}{8}$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_TANG_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Gradient of tangent to $y = 9x^2$ at $x = 1$.",
    "options": [
      "$81$",
      "$20$",
      "$9$",
      "$2$",
      "$18$"
    ],
    "answer": 4,
    "explanation": "$\\frac{dy}{dx} = 2(9)x = 18$.",
    "number": 27
  },
  {
    "type_tag": "M2_CALC_PRODUCT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(x e^{6x})$.",
    "options": [
      "$(1 - 6x)e^{6x}$",
      "$(1 + 6x)e^{6x}$",
      "$6e^{6x}$",
      "$6x e^{6x}$",
      "$(1 + x)e^{6x}$"
    ],
    "answer": 1,
    "explanation": "Product rule: $(1 + 6x)e^{6x}$.",
    "number": 28
  },
  {
    "type_tag": "M2_VEC_DOT_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Compute $\\begin{pmatrix} 5 \\\\ 2 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$.",
    "options": [
      "$19$",
      "$30$",
      "$23$",
      "$11$",
      "$15$"
    ],
    "answer": 0,
    "explanation": "$(5)(3) + (2)(-1) + (3)(2) = 19$.",
    "number": 29
  },
  {
    "type_tag": "M2_MAT_DETERMINANT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Determinant of $\\begin{pmatrix} 6 & 2 \\\\ 3 & 7 \\end{pmatrix}$.",
    "options": [
      "$39$",
      "$48$",
      "$36$",
      "$42$",
      "$13$"
    ],
    "answer": 2,
    "explanation": "$\\det = 36$.",
    "number": 30
  },
  {
    "type_tag": "M2_CALC_QUOTIENT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Differentiate $y = \\frac{\\ln x}{x^{6}}$.",
    "options": [
      "$\\frac{6\\ln x - 1}{x^{7}}$",
      "$\\frac{1}{x^{7}}$",
      "$\\frac{6}{x^{6}}$",
      "$\\frac{1 - 6\\ln x}{x^{7}}$",
      "$\\frac{1 - \\ln x}{x^{12}}$"
    ],
    "answer": 3,
    "explanation": "Quotient rule: $\\frac{1 - 6\\ln x}{x^{7}}$.",
    "number": 31
  },
  {
    "type_tag": "M2_VEC_PERP_CHECK",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\mathbf{a} = \\begin{pmatrix} 5 \\\\ 2 \\\\ -4 \\end{pmatrix}$ is perpendicular to $\\mathbf{b} = \\begin{pmatrix} 4 \\\\ 6 \\\\ 2 \\end{pmatrix}$, condition satisfied is:",
    "options": [
      "$\\mathbf{a} \\times \\mathbf{b} = 0$",
      "$\\mathbf{a} + \\mathbf{b} = 0$",
      "$\\mathbf{a} \\cdot \\mathbf{b} = 0$",
      "$\\mathbf{a} = 2\\mathbf{b}$",
      "$|\\mathbf{a}| = |\\mathbf{b}|$"
    ],
    "answer": 2,
    "explanation": "$\\mathbf{a} \\cdot \\mathbf{b} = 0$.",
    "number": 32
  },
  {
    "type_tag": "M2_MAT_INVERSE_2X2",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Inverse of matrix $\\begin{pmatrix} 6 & 1 \\\\ 5 & 1 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 5 \\\\ 1 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & -1 \\\\ -5 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -1 \\\\ -5 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 1 \\\\ 5 & -6 \\end{pmatrix}$"
    ],
    "answer": 3,
    "explanation": "$\\det = (i+1) - i = 1 \\implies \\mathbf{A}^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -5 & 6 \\end{pmatrix}$.",
    "number": 33
  },
  {
    "type_tag": "M2_CALC_IMPLICIT_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Find $\\frac{dy}{dx}$ for $6x^2 + y^2 = 100$.",
    "options": [
      "$-\\frac{y}{6x}$",
      "$-\\frac{6x}{y}$",
      "$-\\frac{x}{y}$",
      "$\\frac{6x}{y}$",
      "$-2(6)x$"
    ],
    "answer": 1,
    "explanation": "$2(6)x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{6x}{y}$.",
    "number": 34
  },
  {
    "type_tag": "M2_VEC_MAGNITUDE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Find magnitude of $\\mathbf{v} = 5\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    "options": [
      "$33$",
      "$9$",
      "$\\sqrt{33}$",
      "$\\sqrt{9}$",
      "$2\\sqrt{5}$"
    ],
    "answer": 2,
    "explanation": "$|\\mathbf{v}| = \\sqrt{33}$.",
    "number": 35
  },
  {
    "type_tag": "M2_MAT_MULTIPLICATION",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Product $\\begin{pmatrix} 5 & 0 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 2 & 0 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 4 & 0 \\\\ 5 & 15 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 3 \\\\ 4 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 15 \\\\ 4 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & 3 \\\\ 2 & 2 \\end{pmatrix}$"
    ],
    "answer": 3,
    "explanation": "$\\begin{pmatrix} 5 & 15 \\\\ 4 & 0 \\end{pmatrix}$.",
    "number": 36
  },
  {
    "type_tag": "M2_CALC_INTEG_PARTS",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int x e^{5x} \\, dx$.",
    "options": [
      "$(x - 1)e^{5x} + C$",
      "$\\frac{e^{5x}}{25} + C$",
      "$\\frac{x e^{5x}}{5} + C$",
      "$\\frac{x^2 e^{5x}}{2} + C$",
      "$\\frac{x e^{5x}}{5} - \\frac{e^{5x}}{25} + C$"
    ],
    "answer": 4,
    "explanation": "$\\frac{x e^{5x}}{5} - \\frac{e^{5x}}{25} + C$.",
    "number": 37
  },
  {
    "type_tag": "M2_VEC_UNIT_VECTOR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Unit vector in direction of $\\mathbf{u} = 15\\mathbf{i} + 20\\mathbf{j}$.",
    "options": [
      "$25(3\\mathbf{i} + 4\\mathbf{j})$",
      "$3\\mathbf{i} + 4\\mathbf{j}$",
      "$\\frac{3}{25}\\mathbf{i} + \\frac{4}{25}\\mathbf{j}$",
      "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$",
      "$\\frac{4}{5}\\mathbf{i} + \\frac{3}{5}\\mathbf{j}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$.",
    "number": 38
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_ROT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing anticlockwise rotation by $450^\\circ$ about origin.",
    "options": [
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\cos(450^\\circ) & -\\sin(450^\\circ) \\\\ \\sin(450^\\circ) & \\cos(450^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\sin(450^\\circ) & \\cos(450^\\circ) \\\\ -\\cos(450^\\circ) & \\sin(450^\\circ) \\end{pmatrix}$"
    ],
    "answer": 2,
    "explanation": "Standard 2D rotation matrix formula.",
    "number": 39
  },
  {
    "type_tag": "M2_CALC_SUBSTITUTION",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int 2x (x^2 + 5)^3 \\, dx$.",
    "options": [
      "$\\frac{x^2(x^2 + 5)^4}{4} + C$",
      "$\\frac{(x^2 + 5)^3}{3} + C$",
      "$\\frac{(x^2 + 5)^4}{4} + C$",
      "$3(x^2 + 5)^2 + C$",
      "$(x^2 + 5)^4 + C$"
    ],
    "answer": 2,
    "explanation": "$\\frac{(x^2 + 5)^4}{4} + C$.",
    "number": 40
  },
  {
    "type_tag": "M2_VEC_LINE_EQ",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Line passing through $A(5, 1, 2)$ with direction $\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$.",
    "options": [
      "$\\mathbf{r} = \\lambda(5\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (5\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$",
      "$\\mathbf{r} = (5\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) \\times \\mathbf{d}$",
      "$\\mathbf{r} = (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) + \\lambda(5\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (7\\mathbf{i} + 3\\mathbf{k})$"
    ],
    "answer": 1,
    "explanation": "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$.",
    "number": 41
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_REFL",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing reflection in line $y = x$ scaled by $5$.",
    "options": [
      "$\\begin{pmatrix} -5 & 0 \\\\ 0 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -5 \\\\ -5 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 5 \\\\ 5 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 5 \\\\ 5 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 0 \\\\ 0 & -5 \\end{pmatrix}$"
    ],
    "answer": 3,
    "explanation": "$5\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 5 \\\\ 5 & 0 \\end{pmatrix}$.",
    "number": 42
  },
  {
    "type_tag": "M2_CALC_DIFF_EQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{dy}{dx} = 6y$ with $y(0) = 4$.",
    "options": [
      "$y = 4e^{-6x}$",
      "$y = 6x + 4$",
      "$y = 4\\ln(6x)$",
      "$y = 4e^{6x}$",
      "$y = e^{6x} + 3$"
    ],
    "answer": 3,
    "explanation": "$y = 4e^{6x}$.",
    "number": 43
  },
  {
    "type_tag": "M2_VEC_CROSS_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Evaluate cross product $(5\\mathbf{i}) \\times \\mathbf{j}$.",
    "options": [
      "$\\mathbf{0}$",
      "$5$",
      "$5\\mathbf{k}$",
      "$-5\\mathbf{k}$",
      "$5\\mathbf{j}$"
    ],
    "answer": 2,
    "explanation": "$(5\\mathbf{i}) \\times \\mathbf{j} = 5\\mathbf{k}$.",
    "number": 44
  },
  {
    "type_tag": "M2_CMP_IMAG_POWERS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Evaluate $i^{21}$ where $i = \\sqrt{-1}$.",
    "options": [
      "$0$",
      "$i$",
      "$-1$",
      "$1$",
      "$-i$"
    ],
    "answer": 1,
    "explanation": "$i^{21} = i$.",
    "number": 45
  },
  {
    "type_tag": "M2_CALC_ARCSIN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arcsin(6x))$.",
    "options": [
      "$\\frac{6}{1 + 36x^2}$",
      "$\\arccos(6x)$",
      "$\\frac{1}{\\sqrt{1 - 36x^2}}$",
      "$\\frac{6}{\\sqrt{1 - 36x^2}}$",
      "$\\frac{6}{\\sqrt{1 - x^2}}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{6}{\\sqrt{1 - (i+1)^2 x^2}}$.",
    "number": 46
  },
  {
    "type_tag": "M2_VEC_CROSS_SELF",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Evaluate $(5\\mathbf{v}) \\times \\mathbf{v}$ for any 3D vector $\\mathbf{v}$.",
    "options": [
      "$10\\mathbf{v}$",
      "$5$",
      "$5|\\mathbf{v}|^2$",
      "$\\mathbf{v}$",
      "$\\mathbf{0}$ (Zero vector)"
    ],
    "answer": 4,
    "explanation": "Cross product of parallel vectors is zero.",
    "number": 47
  },
  {
    "type_tag": "M2_CMP_MODULUS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Modulus of complex number $z = 15 + 20i$.",
    "options": [
      "$25$",
      "$35$",
      "$625$",
      "$26$",
      "$15$"
    ],
    "answer": 0,
    "explanation": "$|z| = 25$.",
    "number": 48
  },
  {
    "type_tag": "M2_CALC_ARCTAN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arctan(6x))$.",
    "options": [
      "$\\frac{6}{1 + 36x^2}$",
      "$\\frac{6}{1 - 36x^2}$",
      "$\\frac{1}{6x}$",
      "$\\frac{1}{1 + 36x^2}$",
      "$\\frac{6}{\\sqrt{1 - 36x^2}}$"
    ],
    "answer": 0,
    "explanation": "$\\frac{6}{1 + (i+1)^2 x^2}$.",
    "number": 49
  },
  {
    "type_tag": "M2_VEC_COLLINEAR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\end{pmatrix}$ and $\\begin{pmatrix} 5 \\\\ 10 \\\\ p \\end{pmatrix}$ are parallel, find $p$.",
    "options": [
      "$p = 20$",
      "$p = 10$",
      "$p = 5$",
      "$p = 31$",
      "$p = 15$"
    ],
    "answer": 4,
    "explanation": "For parallel vectors, corresponding components are proportional: $\\frac{p}{6} = \\frac{5}{2} = 2.5 \\implies p = 6 \\times 2.5 = 15$.",
    "number": 50
  },
  {
    "type_tag": "M2_CMP_ARGUMENT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Principal argument $\\arg(z)$ of $z = -5i$.",
    "options": [
      "$0$",
      "$-\\frac{\\pi}{2}$",
      "$-\\pi$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$"
    ],
    "answer": 1,
    "explanation": "$\\arg(-5i) = -\\frac{\\pi}{2}$.",
    "number": 51
  },
  {
    "type_tag": "M2_CALC_CHAIN_LOG",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Easy",
    "question": "Find $\\frac{d}{dx}(\\ln(6x + 2))$.",
    "options": [
      "$\\frac{1}{6}$",
      "$6\\ln(6x + 2)$",
      "$\\frac{1}{6x + 2}$",
      "$\\frac{6}{x + 2}$",
      "$\\frac{6}{6x + 2}$"
    ],
    "answer": 4,
    "explanation": "$\\frac{6}{6x + 2}$.",
    "number": 52
  },
  {
    "type_tag": "M2_VEC_ANGLE_COS",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If vectors $\\mathbf{a}$ and $\\mathbf{b}$ satisfy $\\mathbf{a} \\cdot \\mathbf{b} = 7$, $|\\mathbf{a}| = 2$, and $|\\mathbf{b}| = 7$, find $\\cos\\theta$.",
    "options": [
      "$0.25$",
      "$0.75$",
      "$1.00$",
      "$0.00$",
      "$0.50$"
    ],
    "answer": 4,
    "explanation": "$\\cos\\theta = \\frac{7}{2(7)} = 0.50$.",
    "number": 53
  },
  {
    "type_tag": "M2_CMP_DEMOIVRE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Evaluate $(\\cos\\theta + i\\sin\\theta)^{7}$.",
    "options": [
      "$\\cos^{7}\\theta + i\\sin^{7}\\theta$",
      "$\\cos(7\\theta) + i\\sin(7\\theta)$",
      "$1$",
      "$\\cos(7\\theta) - i\\sin(7\\theta)$",
      "$7(\\cos\\theta + i\\sin\\theta)$"
    ],
    "answer": 1,
    "explanation": "De Moivre's theorem: $\\cos(7\\theta) + i\\sin(7\\theta)$.",
    "number": 54
  },
  {
    "type_tag": "BIO_CEL_MITOCHONDRIA",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary function of mitochondria in eukaryotic cell lineage 5:",
    "options": [
      "Photosynthesis",
      "Aerobic cellular respiration and ATP synthesis",
      "Protein translation",
      "Waste digestion",
      "Lipid synthesis"
    ],
    "answer": 1,
    "explanation": "Mitochondria synthesize ATP via oxidative phosphorylation.",
    "number": 55
  },
  {
    "type_tag": "BIO_GEN_CHARGAFF",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "DNA sample 5 has $30\\%$ Adenine. Percentage of Cytosine?",
    "options": [
      "$50\\%$",
      "$30\\%$",
      "$60\\%$",
      "$10\\%$",
      "$20\\%$"
    ],
    "answer": 4,
    "explanation": "$\\text{A}=\\text{T}=30\\% \\implies \\text{G}=\\text{C}=50 - (30) = 20\\%$.",
    "number": 56
  },
  {
    "type_tag": "BIO_PHY_AORTA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Vessel carrying oxygenated blood under high pressure from left ventricle to systemic organs in subject 5:",
    "options": [
      "Pulmonary artery",
      "Coronary sinus",
      "Vena cava",
      "Aorta",
      "Pulmonary vein"
    ],
    "answer": 3,
    "explanation": "Aorta distributes oxygenated blood from left ventricle.",
    "number": 57
  },
  {
    "type_tag": "BIO_CEL_RER",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Function of Rough Endoplasmic Reticulum (RER) in secretory tissue 5:",
    "options": [
      "Steroid lipid synthesis",
      "Synthesis and folding of proteins destined for membranes or secretion",
      "DNA replication",
      "Aerobic respiration",
      "Glycogen breakdown"
    ],
    "answer": 1,
    "explanation": "RER-bound ribosomes synthesize secretory proteins.",
    "number": 58
  },
  {
    "type_tag": "BIO_GEN_TRANSCRIPTION",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "DNA coding sequence $5'-\\text{ATG-CGA}-3'$ transcribes to mRNA in clone 5:",
    "options": [
      "$5'-\\text{UAC-GCU}-3'$",
      "$3'-\\text{AUG-CGA}-5'$",
      "$5'-\\text{ATG-CGA}-3'$",
      "$3'-\\text{UAC-GCU}-5'$",
      "$5'-\\text{AUG-CGA}-3'$"
    ],
    "answer": 4,
    "explanation": "mRNA transcript corresponds to coding strand with U replacing T.",
    "number": 59
  },
  {
    "type_tag": "BIO_PHY_BOHR_SHIFT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Bohr shift in exercising muscle tissue 5: elevated $p\\text{CO}_2$ and lower pH shift hemoglobin curve:",
    "options": [
      "To the left, increasing oxygen affinity",
      "No shift",
      "To the right, facilitating oxygen unloading at respiring tissues",
      "Upward",
      "Downward completely"
    ],
    "answer": 2,
    "explanation": "Right shift lowers oxygen affinity, enhancing delivery to tissues.",
    "number": 60
  },
  {
    "type_tag": "BIO_CEL_GOLGI",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary role of the Golgi apparatus in gland cells 5:",
    "options": [
      "Modification, packaging, and sorting of proteins into secretory vesicles",
      "Cell division",
      "ATP synthesis",
      "Translation of mRNA",
      "Photosynthesis"
    ],
    "answer": 0,
    "explanation": "Golgi apparatus modifies and packages proteins.",
    "number": 61
  },
  {
    "type_tag": "BIO_GEN_HAPLOID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Organism with diploid number $2n = 30$. Chromosome count in haploid gamete?",
    "options": [
      "$18$ chromosomes",
      "$15$ chromosomes (haploid)",
      "$19$ chromosomes",
      "$17$ chromosomes",
      "$16$ chromosomes"
    ],
    "answer": 1,
    "explanation": "Haploid number $n = 15$.",
    "number": 62
  },
  {
    "type_tag": "BIO_PHY_DEPOLARIS",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Depolarization phase of neuron action potential in trace 5 is caused by rapid influx of:",
    "options": [
      "Potassium ions ($\\text{K}^+$)",
      "Hydrogen ions",
      "Sodium ions ($\\text{Na}^+$)",
      "Chloride ions ($\\text{Cl}^-$)",
      "Calcium ions ($\\text{Ca}^{2+}$)"
    ],
    "answer": 2,
    "explanation": "Opening of voltage-gated $\\text{Na}^+$ channels causes inward current.",
    "number": 63
  },
  {
    "type_tag": "BIO_CEL_MAGNIFICATION",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Actual cell size $50\\,\\mu\\text{m}$ viewed under magnification $\\times 400$. Image size in mm?",
    "options": [
      "$20.0\\text{ mm}$",
      "$10.0\\text{ mm}$",
      "$2.00\\text{ mm}$",
      "$200.0\\text{ mm}$",
      "$20000\\text{ mm}$"
    ],
    "answer": 0,
    "explanation": "$I = A \\times M = (50 \\times 10^{-3}\\,\\text{mm}) \\times 400 = 20.0\\text{ mm}$.",
    "number": 64
  },
  {
    "type_tag": "BIO_GEN_MONOHYBRID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Monohybrid cross $Tt \\times Tt$ produces $200$ offspring. Expected number of dwarf ($tt$) plants?",
    "options": [
      "$25$ plants",
      "$50$ plants",
      "$100$ plants",
      "$200$ plants",
      "$150$ plants"
    ],
    "answer": 1,
    "explanation": "$25\\%$ of $200$ is $50$ plants.",
    "number": 65
  },
  {
    "type_tag": "BIO_PHY_GLUCAGON",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\alpha$-cells during fasting state 5:",
    "options": [
      "Insulin",
      "Glucagon",
      "Cortisol",
      "Thyroxine",
      "Adrenaline"
    ],
    "answer": 1,
    "explanation": "Glucagon stimulates liver glycogenolysis.",
    "number": 66
  },
  {
    "type_tag": "BIO_CEL_WATER_POT",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Plant cell with solute potential $\\Psi_s = -550\\text{ kPa}$ and pressure potential $\\Psi_p = +200\\text{ kPa}$. Total $\\Psi$?",
    "options": [
      "$-550\\text{ kPa}$",
      "$-400\\text{ kPa}$",
      "$-450\\text{ kPa}$",
      "$-350\\text{ kPa}$",
      "$-500\\text{ kPa}$"
    ],
    "answer": 3,
    "explanation": "$\\Psi = \\Psi_s + \\Psi_p = -350\\text{ kPa}$.",
    "number": 67
  },
  {
    "type_tag": "BIO_GEN_SEX_LINKED",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Carrier mother ($X^B X^b$) and normal father ($X^B Y$) in pedigree 5. Probability of colour-blind son?",
    "options": [
      "$25\\%$",
      "$75\\%$",
      "$50\\%$ of sons",
      "$100\\%$",
      "$0\\%$"
    ],
    "answer": 2,
    "explanation": "Sons have $50\\%$ probability of receiving recessive $X^b$ allele.",
    "number": 68
  },
  {
    "type_tag": "BIO_PHY_ADH",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Action of Anti-Diuretic Hormone (ADH) on collecting duct epithelium in kidney 5:",
    "options": [
      "Inserts aquaporin channels, increasing water reabsorption",
      "Increases sodium excretion",
      "Decreases urine concentration",
      "Blocks water reabsorption",
      "Inhibits Bowman's capsule"
    ],
    "answer": 0,
    "explanation": "ADH promotes aquaporin-2 vesicle insertion to concentrate urine.",
    "number": 69
  },
  {
    "type_tag": "BIO_CEL_TEST_GLUCOSE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming reducing sugars (glucose) in solution 5:",
    "options": [
      "DCPIP test",
      "Benedict's reagent heated (brick-red precipitate)",
      "Iodine solution (blue-black)",
      "Biuret test (purple)",
      "Emulsion test"
    ],
    "answer": 1,
    "explanation": "Benedict's reagent heated gives brick-red copper(I) oxide precipitate.",
    "number": 70
  },
  {
    "type_tag": "BIO_GEN_HARDY_WEIN",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Hard",
    "question": "Population in HW equilibrium has $q^2 = 0.04$ ($4\\%$ recessive) in study 5. Heterozygote frequency $2pq$?",
    "options": [
      "$48\\%$",
      "$16\\%$",
      "$64\\%$",
      "$8\\%$",
      "$32\\%$ ($0.32$)"
    ],
    "answer": 4,
    "explanation": "$q=0.2, p=0.8 \\implies 2pq = 2(0.8)(0.2) = 0.32$.",
    "number": 71
  },
  {
    "type_tag": "BIO_PHY_RUBISCO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Enzyme fixing $\\text{CO}_2$ to ribulose bisphosphate (RuBP) in photosynthetic leaf 5:",
    "options": [
      "Pepsin",
      "ATP Synthase",
      "DNA Polymerase",
      "RuBisCO",
      "Amylase"
    ],
    "answer": 3,
    "explanation": "RuBisCO catalyses carbon fixation in chloroplast stroma.",
    "number": 72
  },
  {
    "type_tag": "BIO_CEL_TEST_STARCH",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of starch in food extract 5:",
    "options": [
      "Iodine in potassium iodide (blue-black colour)",
      "Benedict's solution",
      "Biuret reagent",
      "Ethanol emulsion",
      "DCPIP reagent"
    ],
    "answer": 0,
    "explanation": "Iodine forms blue-black complex with amylose.",
    "number": 73
  },
  {
    "type_tag": "BIO_GEN_NONSENSE_MUT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "A mutation converting an amino acid codon into a premature STOP codon in gene 5 is a:",
    "options": [
      "Duplication",
      "Missense mutation",
      "Silent mutation",
      "Frameshift insertion",
      "Nonsense mutation"
    ],
    "answer": 4,
    "explanation": "Nonsense mutations introduce premature termination codons.",
    "number": 74
  },
  {
    "type_tag": "BIO_PHY_KREBS_SITE",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Subcellular site of Krebs (citric acid) cycle in eukaryotic cell 5:",
    "options": [
      "Inner Mitochondrial Membrane",
      "Cytoplasm",
      "Mitochondrial Matrix",
      "Chloroplast lumen",
      "Intermembrane space"
    ],
    "answer": 2,
    "explanation": "Krebs cycle enzymes are located in mitochondrial matrix.",
    "number": 75
  },
  {
    "type_tag": "BIO_CEL_TEST_PROTEIN",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of proteins in sample 5:",
    "options": [
      "Benedict's test",
      "Biuret test (violet / purple colour)",
      "Emulsion test",
      "Ninhydrin only",
      "Iodine solution"
    ],
    "answer": 1,
    "explanation": "Biuret reagent reacts with peptide bonds to form purple complex.",
    "number": 76
  },
  {
    "type_tag": "BIO_GEN_DNA_POLYMER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme synthesising new DNA strands in $5' \\to 3'$ direction during replication in cell 5:",
    "options": [
      "RNA Polymerase",
      "Topoisomerase",
      "DNA Polymerase",
      "DNA Ligase",
      "DNA Helicase"
    ],
    "answer": 2,
    "explanation": "DNA Polymerase adds complementary nucleotides in $5'\\to 3'$ direction.",
    "number": 77
  },
  {
    "type_tag": "BIO_PHY_TROPHIC_EFF",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Average percentage of energy transferred from trophic level $5$ to level $6$ in ecosystem:",
    "options": [
      "$10\\%$",
      "$100\\%$",
      "$50\\%$",
      "$90\\%$",
      "$1\\%$"
    ],
    "answer": 0,
    "explanation": "Roughly $10\\%$ ecological efficiency transfers between trophic levels.",
    "number": 78
  },
  {
    "type_tag": "BIO_CEL_TEST_LIPID",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Diagnostic test for lipids/triglycerides in emulsion tube 5:",
    "options": [
      "Benedict's test",
      "Biuret test",
      "Ethanol emulsion test (milky white layer)",
      "Iodine test",
      "Fehling's test"
    ],
    "answer": 2,
    "explanation": "Ethanol dissolving lipids forms cloudy emulsion when added to water.",
    "number": 79
  },
  {
    "type_tag": "BIO_GEN_CROSSING_OVER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Meiotic phase where crossing over and chiasmata occur in gametogenesis 5:",
    "options": [
      "Anaphase I",
      "Telophase II",
      "Prophase II",
      "Metaphase I",
      "Prophase I"
    ],
    "answer": 4,
    "explanation": "Crossing over occurs between homologous non-sister chromatids in Prophase I.",
    "number": 80
  },
  {
    "type_tag": "BIO_PHY_SYNAPSE_CA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Ion triggering neurotransmitter vesicle exocytosis at presynaptic terminal 5:",
    "options": [
      "Potassium ($\\text{K}^+$)",
      "Magnesium",
      "Calcium ($\\text{Ca}^{2+}$)",
      "Chloride ($\\text{Cl}^-$)",
      "Sodium ($\\text{Na}^+$)"
    ],
    "answer": 2,
    "explanation": "$\\text{Ca}^{2+}$ influx triggers SNARE-mediated vesicle fusion.",
    "number": 81
  }
];

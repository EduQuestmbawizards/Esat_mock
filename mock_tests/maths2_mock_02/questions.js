const QUESTIONS = [
  {
    "type_tag": "M2_CALC_SECOND_ORD_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{d^2y}{dx^2} + 4y = 0$.",
    "options": [
      "$y = A\\cos(4x)$",
      "$y = A e^{2x} + B e^{-2x}$",
      "$y = (A + Bx)e^{2x}$",
      "$y = A\\cos(2x) + B\\sin(2x)$",
      "$y = A\\sin(2x)$"
    ],
    "answer": 3,
    "explanation": "$y = A\\cos(2x) + B\\sin(2x)$.",
    "number": 1
  },
  {
    "type_tag": "M2_VEC_PLANE_NORMAL",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Normal vector $\\mathbf{n}$ to plane $3x - 3y + 4z = 10$.",
    "options": [
      "$-3\\mathbf{i} + 3\\mathbf{j} - 4\\mathbf{k}$",
      "$3\\mathbf{i} - 3\\mathbf{j}$",
      "$3\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$",
      "$3\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$",
      "$10\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$"
    ],
    "answer": 2,
    "explanation": "$3\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$.",
    "number": 2
  },
  {
    "type_tag": "M2_CMP_LOCUS_CIRCLE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Locus in Argand diagram given by $|z - 2i| = 4$.",
    "options": [
      "Ellipse with foci at $(0, 2)$",
      "Circle with centre $(0, 2)$ and radius $4$",
      "Circle centre $(0, -2)$",
      "Line $y = 2$",
      "Circle with centre $(2, 0)$ and radius $4$"
    ],
    "answer": 1,
    "explanation": "Circle centred at $z_0 = (0, 2)$ with radius $4$.",
    "number": 3
  },
  {
    "type_tag": "M2_CALC_DEF_INT_EXP",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^1 e^{2x} \\, dx$.",
    "options": [
      "$\\frac{e^{2} + 1}{2}$",
      "$\\frac{e^{2}}{2}$",
      "$e^{2} - 1$",
      "$2(e^{2} - 1)$",
      "$\\frac{e^{2} - 1}{2}$"
    ],
    "answer": 4,
    "explanation": "$\\frac{e^{2} - 1}{2}$.",
    "number": 4
  },
  {
    "type_tag": "M2_VEC_DIST_ORIGIN",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Perpendicular distance from origin to plane $2x + y + 2z = 6$.",
    "options": [
      "$2$",
      "$4$",
      "$3$",
      "$5$",
      "$6$"
    ],
    "answer": 0,
    "explanation": "$d = \\frac{6}{\\sqrt{4+1+4}} = 2$.",
    "number": 5
  },
  {
    "type_tag": "M2_CMP_CONJUGATE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Complex conjugate of $z = 4 - 5i$.",
    "options": [
      "$4$",
      "$5 - (4)i$",
      "$-4 - 5i$",
      "$4 + 5i$",
      "$-4 + 5i$"
    ],
    "answer": 3,
    "explanation": "The complex conjugate of $z = a - bi$ is $\\bar{z} = a + bi$. Therefore, the conjugate of $4 - 5i$ is $4 + 5i$.",
    "number": 6
  },
  {
    "type_tag": "M2_CALC_VOL_REV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Volume of solid formed rotating $y = 2x$ from $x=0$ to $x=2$ about x-axis.",
    "options": [
      "$\\frac{17\\pi}{3}$",
      "$\\frac{35\\pi}{3}$",
      "$5\\pi$",
      "$\\frac{32\\pi}{3}$",
      "$34\\pi$"
    ],
    "answer": 3,
    "explanation": "$V = \\frac{32\\pi}{3}$.",
    "number": 7
  },
  {
    "type_tag": "M2_VEC_MIDPT_3D",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Midpoint between $A(4, 0, 4)$ and $B(0, 4, 0)$.",
    "options": [
      "$(2, 2, 4)$",
      "$(4, 4, 4)$",
      "$(4, 2, 2)$",
      "$(2, 4, 2)$",
      "$(2, 2, 2)$"
    ],
    "answer": 4,
    "explanation": "$M = (2, 2, 2)$.",
    "number": 8
  },
  {
    "type_tag": "M2_CMP_QUAD_ROOTS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Solve $z^2 + 5 = 0$ for complex $z$.",
    "options": [
      "$z = \\pm \\sqrt{5}\\,i$",
      "$z = \\sqrt{5}$",
      "$z = \\pm (5)$",
      "$z = \\pm i$",
      "$z = 0$"
    ],
    "answer": 0,
    "explanation": "$z = \\pm \\sqrt{5}\\,i$.",
    "number": 9
  },
  {
    "type_tag": "M2_CALC_PARAM_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Parametric curve $x = t^2, y = 2t^3$. Find $\\frac{dy}{dx}$ at $t=1$.",
    "options": [
      "$3.0$",
      "$2.0$",
      "$1.0$",
      "$4.0$",
      "$6.0$"
    ],
    "answer": 0,
    "explanation": "$\\frac{dy}{dx} = 3.0$.",
    "number": 10
  },
  {
    "type_tag": "M2_VEC_SCALAR_TRIPLE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Find volume of parallelepiped defined by vectors $2\\mathbf{i}, 2\\mathbf{j}, 3\\mathbf{k}$.",
    "options": [
      "$14\\text{ units}^3$",
      "$12\\text{ units}^3$",
      "$8\\text{ units}^3$",
      "$24\\text{ units}^3$",
      "$6\\text{ units}^3$"
    ],
    "answer": 1,
    "explanation": "$V = |2(2)(3)| = 12$.",
    "number": 11
  },
  {
    "type_tag": "M2_CMP_ROOTS_UNITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Sum of all $4$ roots of the polynomial equation $z^{4} - 1 = 0$.",
    "options": [
      "$4$",
      "$1$",
      "$i$",
      "$-1$",
      "$0$"
    ],
    "answer": 4,
    "explanation": "Sum of all roots of unity is $0$.",
    "number": 12
  },
  {
    "type_tag": "M2_CALC_MACLAURIN",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "First two non-zero terms of Maclaurin series for $\\sin(3x)$.",
    "options": [
      "$3x + \\frac{(i+1)**3 x^3}{6}$",
      "$3x - 27x^3$",
      "$3x - \\frac{3x^3}{6}$",
      "$1 - \\frac{(i+1)**2 x^2}{2}$",
      "$3x - \\frac{(i+1)**3 x^3}{6}$"
    ],
    "answer": 4,
    "explanation": "$\\sin(3x) = 3x - \\frac{(i+1)**3 x^3}{6} + \\dots$",
    "number": 13
  },
  {
    "type_tag": "M2_VEC_DIR_COSINE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If direction angles $\\alpha, \\beta, \\gamma$ satisfy $\\cos^2\\alpha = 0.10$ and $\\cos^2\\beta = 0.20$, find $\\cos^2\\gamma$.",
    "options": [
      "$0.80$",
      "$0.75$",
      "$0.60$",
      "$0.65$",
      "$0.70$"
    ],
    "answer": 4,
    "explanation": "$\\cos^2\\gamma = 1 - (0.10 + 0.20) = 0.70$.",
    "number": 14
  },
  {
    "type_tag": "M2_MAT_IDENTITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Determinant of $3\\times3$ identity matrix $\\mathbf{I}_{3}$.",
    "options": [
      "$9$",
      "$0$",
      "$1$",
      "$-1$",
      "$3$"
    ],
    "answer": 2,
    "explanation": "$\\det(\\mathbf{I}) = 1$.",
    "number": 15
  },
  {
    "type_tag": "M2_CALC_INTEG_TRIG_SQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int_0^\\pi \\sin^2(2x) \\, dx$.",
    "options": [
      "$\\frac{3\\pi}{4}$",
      "$2\\pi$",
      "$\\frac{\\pi}{4}$",
      "$\\pi$",
      "$\\frac{\\pi}{2}$"
    ],
    "answer": 4,
    "explanation": "Average of $\\sin^2(2x)$ over full periods is $1/2 \\implies \\frac{\\pi}{2}$.",
    "number": 16
  },
  {
    "type_tag": "M2_VEC_POSITION_VEC",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Vector $\\vec{AB}$ from $A(2, 2, 1)$ to $B(5, 5, 4)$.",
    "options": [
      "$6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}$",
      "$3\\mathbf{i} + 2\\mathbf{j} + 1\\mathbf{k}$",
      "$7\\mathbf{i} + 7\\mathbf{j} + 5\\mathbf{k}$",
      "$-3\\mathbf{i} - 3\\mathbf{j} - 3\\mathbf{k}$",
      "$3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$"
    ],
    "answer": 4,
    "explanation": "$\\vec{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$.",
    "number": 17
  },
  {
    "type_tag": "M2_MAT_SINGULAR",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Find $k$ such that $\\begin{pmatrix} 3 & k \\\\ 2 & 4 \\end{pmatrix}$ is singular.",
    "options": [
      "$k = 11$",
      "$k = 9$",
      "$k = 7$",
      "$k = 6$",
      "$k = 5$"
    ],
    "answer": 3,
    "explanation": "$4(3) - 2k = 0 \\implies k = 6$.",
    "number": 18
  },
  {
    "type_tag": "M2_CALC_PRODUCT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(x e^{4x})$.",
    "options": [
      "$(1 - 4x)e^{4x}$",
      "$(1 + x)e^{4x}$",
      "$4e^{4x}$",
      "$4x e^{4x}$",
      "$(1 + 4x)e^{4x}$"
    ],
    "answer": 4,
    "explanation": "Product rule: $(1 + 4x)e^{4x}$.",
    "number": 19
  },
  {
    "type_tag": "M2_VEC_DOT_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Compute $\\begin{pmatrix} 3 \\\\ 2 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$.",
    "options": [
      "$13$",
      "$5$",
      "$17$",
      "$18$",
      "$9$"
    ],
    "answer": 0,
    "explanation": "$(3)(3) + (2)(-1) + (3)(2) = 13$.",
    "number": 20
  },
  {
    "type_tag": "M2_MAT_DETERMINANT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Determinant of $\\begin{pmatrix} 4 & 2 \\\\ 3 & 5 \\end{pmatrix}$.",
    "options": [
      "$14$",
      "$9$",
      "$17$",
      "$20$",
      "$26$"
    ],
    "answer": 0,
    "explanation": "$\\det = 14$.",
    "number": 21
  },
  {
    "type_tag": "M2_CALC_QUOTIENT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Differentiate $y = \\frac{\\ln x}{x^{4}}$.",
    "options": [
      "$\\frac{4\\ln x - 1}{x^{5}}$",
      "$\\frac{1 - \\ln x}{x^{8}}$",
      "$\\frac{1}{x^{5}}$",
      "$\\frac{4}{x^{4}}$",
      "$\\frac{1 - 4\\ln x}{x^{5}}$"
    ],
    "answer": 4,
    "explanation": "Quotient rule: $\\frac{1 - 4\\ln x}{x^{5}}$.",
    "number": 22
  },
  {
    "type_tag": "M2_VEC_PERP_CHECK",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ 2 \\\\ -4 \\end{pmatrix}$ is perpendicular to $\\mathbf{b} = \\begin{pmatrix} 4 \\\\ 4 \\\\ 2 \\end{pmatrix}$, condition satisfied is:",
    "options": [
      "$\\mathbf{a} = 2\\mathbf{b}$",
      "$|\\mathbf{a}| = |\\mathbf{b}|$",
      "$\\mathbf{a} \\cdot \\mathbf{b} = 0$",
      "$\\mathbf{a} + \\mathbf{b} = 0$",
      "$\\mathbf{a} \\times \\mathbf{b} = 0$"
    ],
    "answer": 2,
    "explanation": "$\\mathbf{a} \\cdot \\mathbf{b} = 0$.",
    "number": 23
  },
  {
    "type_tag": "M2_MAT_INVERSE_2X2",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Inverse of matrix $\\begin{pmatrix} 4 & 1 \\\\ 3 & 1 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 4 & -1 \\\\ -3 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 3 \\\\ 1 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -1 \\\\ -3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 1 \\\\ 3 & -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "answer": 2,
    "explanation": "$\\det = (i+1) - i = 1 \\implies \\mathbf{A}^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -3 & 4 \\end{pmatrix}$.",
    "number": 24
  },
  {
    "type_tag": "M2_CALC_IMPLICIT_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Find $\\frac{dy}{dx}$ for $4x^2 + y^2 = 100$.",
    "options": [
      "$-\\frac{y}{4x}$",
      "$-\\frac{4x}{y}$",
      "$-2(4)x$",
      "$-\\frac{x}{y}$",
      "$\\frac{4x}{y}$"
    ],
    "answer": 1,
    "explanation": "$2(4)x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{4x}{y}$.",
    "number": 25
  },
  {
    "type_tag": "M2_VEC_MAGNITUDE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Find magnitude of $\\mathbf{v} = 3\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    "options": [
      "$\\sqrt{17}$",
      "$\\sqrt{7}$",
      "$2\\sqrt{3}$",
      "$7$",
      "$17$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{17}$.",
    "number": 26
  },
  {
    "type_tag": "M2_MAT_MULTIPLICATION",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Product $\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 2 & 0 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 4 & 0 \\\\ 3 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 3 \\\\ 4 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 9 \\\\ 4 & 0 \\end{pmatrix}$"
    ],
    "answer": 4,
    "explanation": "$\\begin{pmatrix} 3 & 9 \\\\ 4 & 0 \\end{pmatrix}$.",
    "number": 27
  }
];

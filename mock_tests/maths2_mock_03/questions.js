const QUESTIONS = [
  {
    "type_tag": "M2_CALC_INTEG_PARTS",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int x e^{3x} \\, dx$.",
    "options": [
      "$(x - 1)e^{3x} + C$",
      "$\\frac{e^{3x}}{9} + C$",
      "$\\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C$",
      "$\\frac{x e^{3x}}{3} + C$",
      "$\\frac{x^2 e^{3x}}{2} + C$"
    ],
    "answer": 2,
    "explanation": "$\\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C$.",
    "number": 1
  },
  {
    "type_tag": "M2_VEC_UNIT_VECTOR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Unit vector in direction of $\\mathbf{u} = 9\\mathbf{i} + 12\\mathbf{j}$.",
    "options": [
      "$\\frac{4}{5}\\mathbf{i} + \\frac{3}{5}\\mathbf{j}$",
      "$\\frac{3}{25}\\mathbf{i} + \\frac{4}{25}\\mathbf{j}$",
      "$15(3\\mathbf{i} + 4\\mathbf{j})$",
      "$3\\mathbf{i} + 4\\mathbf{j}$",
      "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$"
    ],
    "answer": 4,
    "explanation": "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$.",
    "number": 2
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_ROT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing anticlockwise rotation by $270^\\circ$ about origin.",
    "options": [
      "$\\begin{pmatrix} \\cos(270^\\circ) & -\\sin(270^\\circ) \\\\ \\sin(270^\\circ) & \\cos(270^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} \\sin(270^\\circ) & \\cos(270^\\circ) \\\\ -\\cos(270^\\circ) & \\sin(270^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "Standard 2D rotation matrix formula.",
    "number": 3
  },
  {
    "type_tag": "M2_CALC_SUBSTITUTION",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int 2x (x^2 + 3)^3 \\, dx$.",
    "options": [
      "$3(x^2 + 3)^2 + C$",
      "$\\frac{(x^2 + 3)^4}{4} + C$",
      "$(x^2 + 3)^4 + C$",
      "$\\frac{x^2(x^2 + 3)^4}{4} + C$",
      "$\\frac{(x^2 + 3)^3}{3} + C$"
    ],
    "answer": 1,
    "explanation": "$\\frac{(x^2 + 3)^4}{4} + C$.",
    "number": 4
  },
  {
    "type_tag": "M2_VEC_LINE_EQ",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Line passing through $A(3, 1, 2)$ with direction $\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$.",
    "options": [
      "$\\mathbf{r} = (5\\mathbf{i} + 3\\mathbf{k})$",
      "$\\mathbf{r} = \\lambda(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) \\times \\mathbf{d}$",
      "$\\mathbf{r} = (3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$",
      "$\\mathbf{r} = (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) + \\lambda(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$"
    ],
    "answer": 3,
    "explanation": "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$.",
    "number": 5
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_REFL",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing reflection in line $y = x$ scaled by $3$.",
    "options": [
      "$\\begin{pmatrix} 0 & -3 \\\\ -3 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 0 \\\\ 0 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & 0 \\\\ 0 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 3 \\\\ 3 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 3 \\\\ 3 & 0 \\end{pmatrix}$"
    ],
    "answer": 4,
    "explanation": "$3\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 3 \\\\ 3 & 0 \\end{pmatrix}$.",
    "number": 6
  },
  {
    "type_tag": "M2_CALC_DIFF_EQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{dy}{dx} = 4y$ with $y(0) = 4$.",
    "options": [
      "$y = 4x + 4$",
      "$y = 4e^{-4x}$",
      "$y = 4\\ln(4x)$",
      "$y = 4e^{4x}$",
      "$y = e^{4x} + 3$"
    ],
    "answer": 3,
    "explanation": "$y = 4e^{4x}$.",
    "number": 7
  },
  {
    "type_tag": "M2_VEC_CROSS_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Evaluate cross product $(3\\mathbf{i}) \\times \\mathbf{j}$.",
    "options": [
      "$\\mathbf{0}$",
      "$-3\\mathbf{k}$",
      "$3$",
      "$3\\mathbf{k}$",
      "$3\\mathbf{j}$"
    ],
    "answer": 3,
    "explanation": "$(3\\mathbf{i}) \\times \\mathbf{j} = 3\\mathbf{k}$.",
    "number": 8
  },
  {
    "type_tag": "M2_CMP_IMAG_POWERS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Evaluate $i^{13}$ where $i = \\sqrt{-1}$.",
    "options": [
      "$i$",
      "$-i$",
      "$1$",
      "$-1$",
      "$0$"
    ],
    "answer": 0,
    "explanation": "$i^{13} = i$.",
    "number": 9
  },
  {
    "type_tag": "M2_CALC_ARCSIN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arcsin(4x))$.",
    "options": [
      "$\\frac{4}{1 + 16x^2}$",
      "$\\frac{1}{\\sqrt{1 - 16x^2}}$",
      "$\\frac{4}{\\sqrt{1 - 16x^2}}$",
      "$\\arccos(4x)$",
      "$\\frac{4}{\\sqrt{1 - x^2}}$"
    ],
    "answer": 2,
    "explanation": "$\\frac{4}{\\sqrt{1 - (i+1)^2 x^2}}$.",
    "number": 10
  },
  {
    "type_tag": "M2_VEC_CROSS_SELF",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Evaluate $(3\\mathbf{v}) \\times \\mathbf{v}$ for any 3D vector $\\mathbf{v}$.",
    "options": [
      "$6\\mathbf{v}$",
      "$\\mathbf{v}$",
      "$\\mathbf{0}$ (Zero vector)",
      "$3|\\mathbf{v}|^2$",
      "$3$"
    ],
    "answer": 2,
    "explanation": "Cross product of parallel vectors is zero.",
    "number": 11
  },
  {
    "type_tag": "M2_CMP_MODULUS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Modulus of complex number $z = 9 + 12i$.",
    "options": [
      "$15$",
      "$21$",
      "$9$",
      "$16$",
      "$225$"
    ],
    "answer": 0,
    "explanation": "$|z| = 15$.",
    "number": 12
  },
  {
    "type_tag": "M2_CALC_ARCTAN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arctan(4x))$.",
    "options": [
      "$\\frac{4}{\\sqrt{1 - 16x^2}}$",
      "$\\frac{1}{1 + 16x^2}$",
      "$\\frac{1}{4x}$",
      "$\\frac{4}{1 - 16x^2}$",
      "$\\frac{4}{1 + 16x^2}$"
    ],
    "answer": 4,
    "explanation": "$\\frac{4}{1 + (i+1)^2 x^2}$.",
    "number": 13
  },
  {
    "type_tag": "M2_VEC_COLLINEAR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\end{pmatrix}$ and $\\begin{pmatrix} 3 \\\\ 6 \\\\ p \\end{pmatrix}$ are parallel, find $p$.",
    "options": [
      "$p = 6$",
      "$p = 12$",
      "$p = 3$",
      "$p = 19$",
      "$p = 9$"
    ],
    "answer": 4,
    "explanation": "$p = 9$.",
    "number": 14
  },
  {
    "type_tag": "M2_CMP_ARGUMENT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Principal argument $\\arg(z)$ of $z = -3i$.",
    "options": [
      "$-\\frac{\\pi}{2}$",
      "$-\\pi$",
      "$\\frac{\\pi}{2}$",
      "$0$",
      "$\\pi$"
    ],
    "answer": 0,
    "explanation": "$\\arg(-3i) = -\\frac{\\pi}{2}$.",
    "number": 15
  },
  {
    "type_tag": "M2_CALC_CHAIN_LOG",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Easy",
    "question": "Find $\\frac{d}{dx}(\\ln(4x + 2))$.",
    "options": [
      "$\\frac{1}{4x + 2}$",
      "$\\frac{4}{4x + 2}$",
      "$\\frac{1}{4}$",
      "$\\frac{4}{x + 2}$",
      "$4\\ln(4x + 2)$"
    ],
    "answer": 1,
    "explanation": "$\\frac{4}{4x + 2}$.",
    "number": 16
  },
  {
    "type_tag": "M2_VEC_ANGLE_COS",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If vectors $\\mathbf{a}$ and $\\mathbf{b}$ satisfy $\\mathbf{a} \\cdot \\mathbf{b} = 5$, $|\\mathbf{a}| = 2$, and $|\\mathbf{b}| = 5$, find $\\cos\\theta$.",
    "options": [
      "$0.75$",
      "$0.00$",
      "$0.50$",
      "$1.00$",
      "$0.25$"
    ],
    "answer": 2,
    "explanation": "$\\cos\\theta = \\frac{5}{2(5)} = 0.50$.",
    "number": 17
  },
  {
    "type_tag": "M2_CMP_DEMOIVRE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Evaluate $(\\cos\\theta + i\\sin\\theta)^{5}$.",
    "options": [
      "$\\cos^{5}\\theta + i\\sin^{5}\\theta$",
      "$1$",
      "$\\cos(5\\theta) - i\\sin(5\\theta)$",
      "$\\cos(5\\theta) + i\\sin(5\\theta)$",
      "$5(\\cos\\theta + i\\sin\\theta)$"
    ],
    "answer": 3,
    "explanation": "De Moivre's theorem: $\\cos(5\\theta) + i\\sin(5\\theta)$.",
    "number": 18
  },
  {
    "type_tag": "M2_CALC_SECOND_ORD_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{d^2y}{dx^2} + 9y = 0$.",
    "options": [
      "$y = A\\sin(3x)$",
      "$y = (A + Bx)e^{3x}$",
      "$y = A\\cos(3x) + B\\sin(3x)$",
      "$y = A\\cos(9x)$",
      "$y = A e^{3x} + B e^{-3x}$"
    ],
    "answer": 2,
    "explanation": "$y = A\\cos(3x) + B\\sin(3x)$.",
    "number": 19
  },
  {
    "type_tag": "M2_VEC_PLANE_NORMAL",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Normal vector $\\mathbf{n}$ to plane $4x - 3y + 4z = 10$.",
    "options": [
      "$4\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$",
      "$-4\\mathbf{i} + 3\\mathbf{j} - 4\\mathbf{k}$",
      "$10\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$",
      "$4\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$",
      "$4\\mathbf{i} - 3\\mathbf{j}$"
    ],
    "answer": 3,
    "explanation": "$4\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$.",
    "number": 20
  },
  {
    "type_tag": "M2_CMP_LOCUS_CIRCLE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Locus in Argand diagram given by $|z - 3i| = 5$.",
    "options": [
      "Circle with centre $(0, 3)$ and radius $5$",
      "Ellipse with foci at $(0, 3)$",
      "Circle with centre $(3, 0)$ and radius $5$",
      "Line $y = 3$",
      "Circle centre $(0, -3)$"
    ],
    "answer": 0,
    "explanation": "Circle centred at $z_0 = (0, 3)$ with radius $5$.",
    "number": 21
  },
  {
    "type_tag": "M2_CALC_DEF_INT_EXP",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^1 e^{3x} \\, dx$.",
    "options": [
      "$\\frac{e^{3} + 1}{3}$",
      "$e^{3} - 1$",
      "$\\frac{e^{3} - 1}{3}$",
      "$\\frac{e^{3}}{3}$",
      "$3(e^{3} - 1)$"
    ],
    "answer": 2,
    "explanation": "$\\frac{e^{3} - 1}{3}$.",
    "number": 22
  },
  {
    "type_tag": "M2_VEC_DIST_ORIGIN",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Perpendicular distance from origin to plane $2x + y + 2z = 9$.",
    "options": [
      "$5$",
      "$6$",
      "$4$",
      "$7$",
      "$3$"
    ],
    "answer": 4,
    "explanation": "$d = \\frac{9}{\\sqrt{4+1+4}} = 3$.",
    "number": 23
  },
  {
    "type_tag": "M2_CMP_CONJUGATE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Complex conjugate of $z = 5 - 5i$.",
    "options": [
      "$5$",
      "$-5 - 5i$",
      "$5 + 5i$",
      "$5 - (5)i$",
      "$-5 + 5i$"
    ],
    "answer": 2,
    "explanation": "$5 + 5i$.",
    "number": 24
  },
  {
    "type_tag": "M2_CALC_VOL_REV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Volume of solid formed rotating $y = 3x$ from $x=0$ to $x=2$ about x-axis.",
    "options": [
      "$74\\pi$",
      "$\\frac{37\\pi}{3}$",
      "$\\frac{72\\pi}{3}$",
      "$\\frac{51\\pi}{3}$",
      "$7\\pi$"
    ],
    "answer": 2,
    "explanation": "$V = \\frac{72\\pi}{3}$.",
    "number": 25
  },
  {
    "type_tag": "M2_VEC_MIDPT_3D",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Midpoint between $A(6, 0, 4)$ and $B(0, 4, 0)$.",
    "options": [
      "$(6, 4, 4)$",
      "$(3, 2, 2)$",
      "$(3, 2, 4)$",
      "$(3, 4, 2)$",
      "$(6, 2, 2)$"
    ],
    "answer": 1,
    "explanation": "$M = (3, 2, 2)$.",
    "number": 26
  },
  {
    "type_tag": "M2_CMP_QUAD_ROOTS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Solve $z^2 + 10 = 0$ for complex $z$.",
    "options": [
      "$z = \\pm \\sqrt{10}\\,i$",
      "$z = \\pm (10)$",
      "$z = 0$",
      "$z = \\sqrt{10}$",
      "$z = \\pm i$"
    ],
    "answer": 0,
    "explanation": "$z = \\pm \\sqrt{10}\\,i$.",
    "number": 27
  }
];

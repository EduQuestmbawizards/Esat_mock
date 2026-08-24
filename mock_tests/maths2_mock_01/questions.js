const QUESTIONS = [
  {
    "type_tag": "M2_CALC_PRODUCT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(x e^{3x})$.",
    "options": [
      "$(1 - 3x)e^{3x}$",
      "$(1 + 3x)e^{3x}$",
      "$3e^{3x}$",
      "$(1 + x)e^{3x}$",
      "$3x e^{3x}$"
    ],
    "answer": 1,
    "explanation": "Product rule: $(1 + 3x)e^{3x}$.",
    "number": 1
  },
  {
    "type_tag": "M2_VEC_DOT_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Compute $\\begin{pmatrix} 2 \\\\ 2 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$.",
    "options": [
      "$10$",
      "$14$",
      "$2$",
      "$12$",
      "$6$"
    ],
    "answer": 0,
    "explanation": "$(2)(3) + (2)(-1) + (3)(2) = 10$.",
    "number": 2
  },
  {
    "type_tag": "M2_MAT_DETERMINANT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Determinant of $\\begin{pmatrix} 3 & 2 \\\\ 3 & 4 \\end{pmatrix}$.",
    "options": [
      "$7$",
      "$18$",
      "$9$",
      "$12$",
      "$6$"
    ],
    "answer": 4,
    "explanation": "$\\det = 6$.",
    "number": 3
  },
  {
    "type_tag": "M2_CALC_QUOTIENT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Differentiate $y = \\frac{\\ln x}{x^{3}}$.",
    "options": [
      "$\\frac{3}{x^{3}}$",
      "$\\frac{1 - \\ln x}{x^{6}}$",
      "$\\frac{3\\ln x - 1}{x^{4}}$",
      "$\\frac{1}{x^{4}}$",
      "$\\frac{1 - 3\\ln x}{x^{4}}$"
    ],
    "answer": 4,
    "explanation": "Quotient rule: $\\frac{1 - 3\\ln x}{x^{4}}$.",
    "number": 4
  },
  {
    "type_tag": "M2_VEC_PERP_CHECK",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 2 \\\\ -4 \\end{pmatrix}$ is perpendicular to $\\mathbf{b} = \\begin{pmatrix} 4 \\\\ 3 \\\\ 2 \\end{pmatrix}$, condition satisfied is:",
    "options": [
      "$\\mathbf{a} = 2\\mathbf{b}$",
      "$\\mathbf{a} \\times \\mathbf{b} = 0$",
      "$|\\mathbf{a}| = |\\mathbf{b}|$",
      "$\\mathbf{a} \\cdot \\mathbf{b} = 0$",
      "$\\mathbf{a} + \\mathbf{b} = 0$"
    ],
    "answer": 3,
    "explanation": "$\\mathbf{a} \\cdot \\mathbf{b} = 0$.",
    "number": 5
  },
  {
    "type_tag": "M2_MAT_INVERSE_2X2",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Inverse of matrix $\\begin{pmatrix} 3 & 1 \\\\ 2 & 1 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 1 & -1 \\\\ -2 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 1 \\\\ 2 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 \\\\ -2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 1 & 3 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "$\\det = (i+1) - i = 1 \\implies \\mathbf{A}^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -2 & 3 \\end{pmatrix}$.",
    "number": 6
  },
  {
    "type_tag": "M2_CALC_IMPLICIT_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Find $\\frac{dy}{dx}$ for $3x^2 + y^2 = 100$.",
    "options": [
      "$-\\frac{x}{y}$",
      "$-\\frac{y}{3x}$",
      "$\\frac{3x}{y}$",
      "$-\\frac{3x}{y}$",
      "$-2(3)x$"
    ],
    "answer": 3,
    "explanation": "$2(3)x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{3x}{y}$.",
    "number": 7
  },
  {
    "type_tag": "M2_VEC_MAGNITUDE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Find magnitude of $\\mathbf{v} = 2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    "options": [
      "$6$",
      "$\\sqrt{6}$",
      "$12$",
      "$\\sqrt{12}$",
      "$2\\sqrt{2}$"
    ],
    "answer": 3,
    "explanation": "$|\\mathbf{v}| = \\sqrt{12}$.",
    "number": 8
  },
  {
    "type_tag": "M2_MAT_MULTIPLICATION",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Product $\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 2 & 0 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 4 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 6 \\\\ 4 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 3 \\\\ 2 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 0 \\\\ 2 & 6 \\end{pmatrix}$"
    ],
    "answer": 2,
    "explanation": "$\\begin{pmatrix} 2 & 6 \\\\ 4 & 0 \\end{pmatrix}$.",
    "number": 9
  },
  {
    "type_tag": "M2_CALC_INTEG_PARTS",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int x e^{2x} \\, dx$.",
    "options": [
      "$\\frac{x^2 e^{2x}}{2} + C$",
      "$\\frac{e^{2x}}{4} + C$",
      "$\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C$",
      "$(x - 1)e^{2x} + C$",
      "$\\frac{x e^{2x}}{2} + C$"
    ],
    "answer": 2,
    "explanation": "$\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C$.",
    "number": 10
  },
  {
    "type_tag": "M2_VEC_UNIT_VECTOR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Unit vector in direction of $\\mathbf{u} = 6\\mathbf{i} + 8\\mathbf{j}$.",
    "options": [
      "$3\\mathbf{i} + 4\\mathbf{j}$",
      "$\\frac{4}{5}\\mathbf{i} + \\frac{3}{5}\\mathbf{j}$",
      "$10(3\\mathbf{i} + 4\\mathbf{j})$",
      "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$",
      "$\\frac{3}{25}\\mathbf{i} + \\frac{4}{25}\\mathbf{j}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$.",
    "number": 11
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_ROT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing anticlockwise rotation by $180^\\circ$ about origin.",
    "options": [
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\sin(180^\\circ) & \\cos(180^\\circ) \\\\ -\\cos(180^\\circ) & \\sin(180^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} \\cos(180^\\circ) & -\\sin(180^\\circ) \\\\ \\sin(180^\\circ) & \\cos(180^\\circ) \\end{pmatrix}$"
    ],
    "answer": 4,
    "explanation": "Standard 2D rotation matrix formula.",
    "number": 12
  },
  {
    "type_tag": "M2_CALC_SUBSTITUTION",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int 2x (x^2 + 2)^3 \\, dx$.",
    "options": [
      "$\\frac{(x^2 + 2)^3}{3} + C$",
      "$(x^2 + 2)^4 + C$",
      "$3(x^2 + 2)^2 + C$",
      "$\\frac{(x^2 + 2)^4}{4} + C$",
      "$\\frac{x^2(x^2 + 2)^4}{4} + C$"
    ],
    "answer": 3,
    "explanation": "$\\frac{(x^2 + 2)^4}{4} + C$.",
    "number": 13
  },
  {
    "type_tag": "M2_VEC_LINE_EQ",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Line passing through $A(2, 1, 2)$ with direction $\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$.",
    "options": [
      "$\\mathbf{r} = \\lambda(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) + \\lambda(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$",
      "$\\mathbf{r} = (4\\mathbf{i} + 3\\mathbf{k})$",
      "$\\mathbf{r} = (2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) \\times \\mathbf{d}$"
    ],
    "answer": 2,
    "explanation": "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$.",
    "number": 14
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_REFL",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing reflection in line $y = x$ scaled by $2$.",
    "options": [
      "$\\begin{pmatrix} 0 & 2 \\\\ 2 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -2 \\\\ -2 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 0 \\\\ 0 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "$2\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 2 \\\\ 2 & 0 \\end{pmatrix}$.",
    "number": 15
  },
  {
    "type_tag": "M2_CALC_DIFF_EQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{dy}{dx} = 3y$ with $y(0) = 4$.",
    "options": [
      "$y = e^{3x} + 3$",
      "$y = 4\\ln(3x)$",
      "$y = 4e^{3x}$",
      "$y = 4e^{-3x}$",
      "$y = 3x + 4$"
    ],
    "answer": 2,
    "explanation": "$y = 4e^{3x}$.",
    "number": 16
  },
  {
    "type_tag": "M2_VEC_CROSS_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Evaluate cross product $(2\\mathbf{i}) \\times \\mathbf{j}$.",
    "options": [
      "$2\\mathbf{k}$",
      "$-2\\mathbf{k}$",
      "$2$",
      "$2\\mathbf{j}$",
      "$\\mathbf{0}$"
    ],
    "answer": 0,
    "explanation": "$(2\\mathbf{i}) \\times \\mathbf{j} = 2\\mathbf{k}$.",
    "number": 17
  },
  {
    "type_tag": "M2_CMP_IMAG_POWERS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Evaluate $i^{9}$ where $i = \\sqrt{-1}$.",
    "options": [
      "$-1$",
      "$i$",
      "$1$",
      "$0$",
      "$-i$"
    ],
    "answer": 1,
    "explanation": "$i^{9} = i$.",
    "number": 18
  },
  {
    "type_tag": "M2_CALC_ARCSIN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arcsin(3x))$.",
    "options": [
      "$\\frac{3}{\\sqrt{1 - x^2}}$",
      "$\\arccos(3x)$",
      "$\\frac{3}{\\sqrt{1 - 9x^2}}$",
      "$\\frac{3}{1 + 9x^2}$",
      "$\\frac{1}{\\sqrt{1 - 9x^2}}$"
    ],
    "answer": 2,
    "explanation": "$\\frac{3}{\\sqrt{1 - (i+1)^2 x^2}}$.",
    "number": 19
  },
  {
    "type_tag": "M2_VEC_CROSS_SELF",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Evaluate $(2\\mathbf{v}) \\times \\mathbf{v}$ for any 3D vector $\\mathbf{v}$.",
    "options": [
      "$4\\mathbf{v}$",
      "$\\mathbf{0}$ (Zero vector)",
      "$2$",
      "$2|\\mathbf{v}|^2$",
      "$\\mathbf{v}$"
    ],
    "answer": 1,
    "explanation": "Cross product of parallel vectors is zero.",
    "number": 20
  },
  {
    "type_tag": "M2_CMP_MODULUS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Modulus of complex number $z = 6 + 8i$.",
    "options": [
      "$11$",
      "$100$",
      "$14$",
      "$6$",
      "$10$"
    ],
    "answer": 4,
    "explanation": "$|z| = 10$.",
    "number": 21
  },
  {
    "type_tag": "M2_CALC_ARCTAN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arctan(3x))$.",
    "options": [
      "$\\frac{3}{\\sqrt{1 - 9x^2}}$",
      "$\\frac{3}{1 + 9x^2}$",
      "$\\frac{1}{3x}$",
      "$\\frac{1}{1 + 9x^2}$",
      "$\\frac{3}{1 - 9x^2}$"
    ],
    "answer": 1,
    "explanation": "$\\frac{3}{1 + (i+1)^2 x^2}$.",
    "number": 22
  },
  {
    "type_tag": "M2_VEC_COLLINEAR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\end{pmatrix}$ and $\\begin{pmatrix} 2 \\\\ 4 \\\\ p \\end{pmatrix}$ are parallel, find $p$.",
    "options": [
      "$p = 4$",
      "$p = 6$",
      "$p = 2$",
      "$p = 8$",
      "$p = 13$"
    ],
    "answer": 1,
    "explanation": "$p = 6$.",
    "number": 23
  },
  {
    "type_tag": "M2_CMP_ARGUMENT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Principal argument $\\arg(z)$ of $z = -2i$.",
    "options": [
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$-\\pi$",
      "$0$",
      "$-\\frac{\\pi}{2}$"
    ],
    "answer": 4,
    "explanation": "$\\arg(-2i) = -\\frac{\\pi}{2}$.",
    "number": 24
  },
  {
    "type_tag": "M2_CALC_CHAIN_LOG",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Easy",
    "question": "Find $\\frac{d}{dx}(\\ln(3x + 2))$.",
    "options": [
      "$\\frac{1}{3}$",
      "$\\frac{3}{x + 2}$",
      "$\\frac{1}{3x + 2}$",
      "$\\frac{3}{3x + 2}$",
      "$3\\ln(3x + 2)$"
    ],
    "answer": 3,
    "explanation": "$\\frac{3}{3x + 2}$.",
    "number": 25
  },
  {
    "type_tag": "M2_VEC_ANGLE_COS",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If vectors $\\mathbf{a}$ and $\\mathbf{b}$ satisfy $\\mathbf{a} \\cdot \\mathbf{b} = 4$, $|\\mathbf{a}| = 2$, and $|\\mathbf{b}| = 4$, find $\\cos\\theta$.",
    "options": [
      "$0.50$",
      "$0.00$",
      "$1.00$",
      "$0.75$",
      "$0.25$"
    ],
    "answer": 0,
    "explanation": "$\\cos\\theta = \\frac{4}{2(4)} = 0.50$.",
    "number": 26
  },
  {
    "type_tag": "M2_CMP_DEMOIVRE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Evaluate $(\\cos\\theta + i\\sin\\theta)^{4}$.",
    "options": [
      "$\\cos(4\\theta) + i\\sin(4\\theta)$",
      "$1$",
      "$\\cos(4\\theta) - i\\sin(4\\theta)$",
      "$\\cos^{4}\\theta + i\\sin^{4}\\theta$",
      "$4(\\cos\\theta + i\\sin\\theta)$"
    ],
    "answer": 0,
    "explanation": "De Moivre's theorem: $\\cos(4\\theta) + i\\sin(4\\theta)$.",
    "number": 27
  }
];

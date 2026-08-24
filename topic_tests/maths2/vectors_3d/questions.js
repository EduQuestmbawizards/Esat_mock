const QUESTIONS = [
  {
    "type_tag": "M2_VEC_DOT_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Compute $\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$.",
    "options": [
      "$7$",
      "$6$",
      "$11$",
      "$3$",
      "$-1$"
    ],
    "answer": 0,
    "explanation": "$(1)(3) + (2)(-1) + (3)(2) = 7$.",
    "number": 1
  },
  {
    "type_tag": "M2_VEC_PERP_CHECK",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 2 \\\\ -4 \\end{pmatrix}$ is perpendicular to $\\mathbf{b} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 2 \\end{pmatrix}$, condition satisfied is:",
    "options": [
      "$\\mathbf{a} \\times \\mathbf{b} = 0$",
      "$\\mathbf{a} + \\mathbf{b} = 0$",
      "$\\mathbf{a} = 2\\mathbf{b}$",
      "$|\\mathbf{a}| = |\\mathbf{b}|$",
      "$\\mathbf{a} \\cdot \\mathbf{b} = 0$"
    ],
    "answer": 4,
    "explanation": "$\\mathbf{a} \\cdot \\mathbf{b} = 0$.",
    "number": 2
  },
  {
    "type_tag": "M2_VEC_MAGNITUDE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Find magnitude of $\\mathbf{v} = 1\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    "options": [
      "$\\sqrt{5}$",
      "$5$",
      "$2\\sqrt{1}$",
      "$9$",
      "$\\sqrt{9}$"
    ],
    "answer": 4,
    "explanation": "$|\\mathbf{v}| = \\sqrt{9}$.",
    "number": 3
  },
  {
    "type_tag": "M2_VEC_UNIT_VECTOR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Unit vector in direction of $\\mathbf{u} = 3\\mathbf{i} + 4\\mathbf{j}$.",
    "options": [
      "$5(3\\mathbf{i} + 4\\mathbf{j})$",
      "$\\frac{3}{25}\\mathbf{i} + \\frac{4}{25}\\mathbf{j}$",
      "$\\frac{4}{5}\\mathbf{i} + \\frac{3}{5}\\mathbf{j}$",
      "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$",
      "$3\\mathbf{i} + 4\\mathbf{j}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}$.",
    "number": 4
  },
  {
    "type_tag": "M2_VEC_LINE_EQ",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Line passing through $A(1, 1, 2)$ with direction $\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$.",
    "options": [
      "$\\mathbf{r} = \\lambda(1\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (1\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) \\times \\mathbf{d}$",
      "$\\mathbf{r} = (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) + \\lambda(1\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$",
      "$\\mathbf{r} = (1\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$",
      "$\\mathbf{r} = (3\\mathbf{i} + 3\\mathbf{k})$"
    ],
    "answer": 3,
    "explanation": "$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$.",
    "number": 5
  },
  {
    "type_tag": "M2_VEC_CROSS_PROD",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Evaluate cross product $(1\\mathbf{i}) \\times \\mathbf{j}$.",
    "options": [
      "$1\\mathbf{j}$",
      "$1$",
      "$\\mathbf{0}$",
      "$1\\mathbf{k}$",
      "$-1\\mathbf{k}$"
    ],
    "answer": 3,
    "explanation": "$(1\\mathbf{i}) \\times \\mathbf{j} = 1\\mathbf{k}$.",
    "number": 6
  },
  {
    "type_tag": "M2_VEC_CROSS_SELF",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Evaluate $(1\\mathbf{v}) \\times \\mathbf{v}$ for any 3D vector $\\mathbf{v}$.",
    "options": [
      "$1|\\mathbf{v}|^2$",
      "$1$",
      "$2\\mathbf{v}$",
      "$\\mathbf{v}$",
      "$\\mathbf{0}$ (Zero vector)"
    ],
    "answer": 4,
    "explanation": "Cross product of parallel vectors is zero.",
    "number": 7
  },
  {
    "type_tag": "M2_VEC_COLLINEAR",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If $\\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ 2 \\\\ p \\end{pmatrix}$ are parallel, find $p$.",
    "options": [
      "$p = 7$",
      "$p = 1$",
      "$p = 4$",
      "$p = 2$",
      "$p = 3$"
    ],
    "answer": 4,
    "explanation": "$p = 3$.",
    "number": 8
  },
  {
    "type_tag": "M2_VEC_ANGLE_COS",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If vectors $\\mathbf{a}$ and $\\mathbf{b}$ satisfy $\\mathbf{a} \\cdot \\mathbf{b} = 3$, $|\\mathbf{a}| = 2$, and $|\\mathbf{b}| = 3$, find $\\cos\\theta$.",
    "options": [
      "$0.50$",
      "$1.00$",
      "$0.75$",
      "$0.00$",
      "$0.25$"
    ],
    "answer": 0,
    "explanation": "$\\cos\\theta = \\frac{3}{2(3)} = 0.50$.",
    "number": 9
  },
  {
    "type_tag": "M2_VEC_PLANE_NORMAL",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "Normal vector $\\mathbf{n}$ to plane $2x - 3y + 4z = 10$.",
    "options": [
      "$-2\\mathbf{i} + 3\\mathbf{j} - 4\\mathbf{k}$",
      "$2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$",
      "$2\\mathbf{i} - 3\\mathbf{j}$",
      "$2\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$",
      "$10\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$"
    ],
    "answer": 3,
    "explanation": "$2\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k}$.",
    "number": 10
  },
  {
    "type_tag": "M2_VEC_DIST_ORIGIN",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Perpendicular distance from origin to plane $2x + y + 2z = 3$.",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$3$",
      "$5$"
    ],
    "answer": 0,
    "explanation": "$d = \\frac{3}{\\sqrt{4+1+4}} = 1$.",
    "number": 11
  },
  {
    "type_tag": "M2_VEC_MIDPT_3D",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Midpoint between $A(2, 0, 4)$ and $B(0, 4, 0)$.",
    "options": [
      "$(2, 2, 2)$",
      "$(1, 2, 2)$",
      "$(1, 2, 4)$",
      "$(2, 4, 4)$",
      "$(1, 4, 2)$"
    ],
    "answer": 1,
    "explanation": "$M = (1, 2, 2)$.",
    "number": 12
  },
  {
    "type_tag": "M2_VEC_SCALAR_TRIPLE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Hard",
    "question": "Find volume of parallelepiped defined by vectors $1\\mathbf{i}, 2\\mathbf{j}, 3\\mathbf{k}$.",
    "options": [
      "$3\\text{ units}^3$",
      "$1\\text{ units}^3$",
      "$8\\text{ units}^3$",
      "$6\\text{ units}^3$",
      "$12\\text{ units}^3$"
    ],
    "answer": 3,
    "explanation": "$V = |1(2)(3)| = 6$.",
    "number": 13
  },
  {
    "type_tag": "M2_VEC_DIR_COSINE",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Medium",
    "question": "If direction angles $\\alpha, \\beta, \\gamma$ satisfy $\\cos^2\\alpha = 0.05$ and $\\cos^2\\beta = 0.15$, find $\\cos^2\\gamma$.",
    "options": [
      "$0.70$",
      "$0.80$",
      "$0.85$",
      "$0.90$",
      "$0.75$"
    ],
    "answer": 1,
    "explanation": "$\\cos^2\\gamma = 1 - (0.05 + 0.15) = 0.80$.",
    "number": 14
  },
  {
    "type_tag": "M2_VEC_POSITION_VEC",
    "module": "Mathematics 2",
    "topic": "Vectors & 3D",
    "difficulty": "Easy",
    "question": "Vector $\\vec{AB}$ from $A(1, 2, 1)$ to $B(4, 5, 4)$.",
    "options": [
      "$3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$",
      "$-3\\mathbf{i} - 3\\mathbf{j} - 3\\mathbf{k}$",
      "$5\\mathbf{i} + 7\\mathbf{j} + 5\\mathbf{k}$",
      "$6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}$",
      "$3\\mathbf{i} + 2\\mathbf{j} + 1\\mathbf{k}$"
    ],
    "answer": 0,
    "explanation": "$\\vec{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$.",
    "number": 15
  }
];

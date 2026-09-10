const QUESTIONS = [
  {
    "type_tag": "M2_MAT_DETERMINANT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Determinant of $\\begin{pmatrix} 2 & 2 \\\\ 3 & 3 \\end{pmatrix}$.",
    "options": [
      "$3$",
      "$6$",
      "$5$",
      "$12$",
      "$0$"
    ],
    "answer": 4,
    "explanation": "$\\det = 0$.",
    "number": 1
  },
  {
    "type_tag": "M2_MAT_INVERSE_2X2",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Inverse of matrix $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} -1 & 1 \\\\ 1 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$"
    ],
    "answer": 4,
    "explanation": "$\\det = (i+1) - i = 1 \\implies \\mathbf{A}^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$.",
    "number": 2
  },
  {
    "type_tag": "M2_MAT_MULTIPLICATION",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Product $\\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 2 & 0 \\end{pmatrix}$.",
    "options": [
      "$\\begin{pmatrix} 4 & 0 \\\\ 1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 3 \\\\ 4 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 3 \\\\ 4 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 2 & 2 \\end{pmatrix}$"
    ],
    "answer": 2,
    "explanation": "$\\begin{pmatrix} 1 & 3 \\\\ 4 & 0 \\end{pmatrix}$.",
    "number": 3
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_ROT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing anticlockwise rotation by $90^\\circ$ about origin.",
    "options": [
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\cos(90^\\circ) & -\\sin(90^\\circ) \\\\ \\sin(90^\\circ) & \\cos(90^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\sin(90^\\circ) & \\cos(90^\\circ) \\\\ -\\cos(90^\\circ) & \\sin(90^\\circ) \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
    ],
    "answer": 1,
    "explanation": "Standard 2D rotation matrix formula.",
    "number": 4
  },
  {
    "type_tag": "M2_MAT_TRANSFORM_REFL",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Matrix representing reflection in line $y = x$ scaled by $1$.",
    "options": [
      "$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "answer": 3,
    "explanation": "$1\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.",
    "number": 5
  },
  {
    "type_tag": "M2_CMP_IMAG_POWERS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Evaluate $i^{5}$ where $i = \\sqrt{-1}$.",
    "options": [
      "$0$",
      "$-i$",
      "$-1$",
      "$1$",
      "$i$"
    ],
    "answer": 4,
    "explanation": "$i^{5} = i$.",
    "number": 6
  },
  {
    "type_tag": "M2_CMP_MODULUS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Modulus of complex number $z = 3 + 4i$.",
    "options": [
      "$25$",
      "$3$",
      "$5$",
      "$7$",
      "$6$"
    ],
    "answer": 2,
    "explanation": "$|z| = 5$.",
    "number": 7
  },
  {
    "type_tag": "M2_CMP_ARGUMENT",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Principal argument $\\arg(z)$ of $z = -1i$.",
    "options": [
      "$-\\pi$",
      "$\\pi$",
      "$0$",
      "$-\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{2}$"
    ],
    "answer": 3,
    "explanation": "$\\arg(-1i) = -\\frac{\\pi}{2}$.",
    "number": 8
  },
  {
    "type_tag": "M2_CMP_DEMOIVRE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Evaluate $(\\cos\\theta + i\\sin\\theta)^{3}$.",
    "options": [
      "$\\cos^{3}\\theta + i\\sin^{3}\\theta$",
      "$3(\\cos\\theta + i\\sin\\theta)$",
      "$1$",
      "$\\cos(3\\theta) + i\\sin(3\\theta)$",
      "$\\cos(3\\theta) - i\\sin(3\\theta)$"
    ],
    "answer": 3,
    "explanation": "De Moivre's theorem: $\\cos(3\\theta) + i\\sin(3\\theta)$.",
    "number": 9
  },
  {
    "type_tag": "M2_CMP_LOCUS_CIRCLE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Locus in Argand diagram given by $|z - 1i| = 3$.",
    "options": [
      "Circle with centre $(1, 0)$ and radius $3$",
      "Circle centre $(0, -1)$",
      "Circle with centre $(0, 1)$ and radius $3$",
      "Line $y = 1$",
      "Ellipse with foci at $(0, 1)$"
    ],
    "answer": 2,
    "explanation": "Circle centred at $z_0 = (0, 1)$ with radius $3$.",
    "number": 10
  },
  {
    "type_tag": "M2_CMP_CONJUGATE",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Complex conjugate of $z = 3 - 5i$.",
    "options": [
      "$3 + 5i$",
      "$-3 - 5i$",
      "$5 - (3)i$",
      "$-3 + 5i$",
      "$3$"
    ],
    "answer": 0,
    "explanation": "The complex conjugate of $z = a - bi$ is $\\bar{z} = a + bi$. For $z = 3 - 5i$, $\\bar{z} = 3 + 5i$.",
    "number": 11
  },
  {
    "type_tag": "M2_CMP_QUAD_ROOTS",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Solve $z^2 + 2 = 0$ for complex $z$.",
    "options": [
      "$z = \\sqrt{2}$",
      "$z = \\pm (2)$",
      "$z = 0$",
      "$z = \\pm \\sqrt{2}\\,i$",
      "$z = \\pm i$"
    ],
    "answer": 3,
    "explanation": "$z = \\pm \\sqrt{2}\\,i$.",
    "number": 12
  },
  {
    "type_tag": "M2_CMP_ROOTS_UNITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Hard",
    "question": "Sum of all $3$ roots of the polynomial equation $z^{3} - 1 = 0$.",
    "options": [
      "$3$",
      "$-1$",
      "$1$",
      "$0$",
      "$i$"
    ],
    "answer": 3,
    "explanation": "Sum of all roots of unity is $0$.",
    "number": 13
  },
  {
    "type_tag": "M2_MAT_IDENTITY",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Easy",
    "question": "Determinant of $2\\times2$ identity matrix $\\mathbf{I}_{2}$.",
    "options": [
      "$-1$",
      "$4$",
      "$2$",
      "$0$",
      "$1$"
    ],
    "answer": 4,
    "explanation": "$\\det(\\mathbf{I}) = 1$.",
    "number": 14
  },
  {
    "type_tag": "M2_MAT_SINGULAR",
    "module": "Mathematics 2",
    "topic": "Matrices & Complex",
    "difficulty": "Medium",
    "question": "Find $k$ such that $\\begin{pmatrix} 2 & k \\\\ 2 & 4 \\end{pmatrix}$ is singular.",
    "options": [
      "$k = 4$",
      "$k = 3$",
      "$k = 5$",
      "$k = 9$",
      "$k = 7$"
    ],
    "answer": 0,
    "explanation": "$4(2) - 2k = 0 \\implies k = 4$.",
    "number": 15
  }
];

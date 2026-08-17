const QUESTIONS = [
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{32} = 32\\mathbf{i} + 33\\mathbf{j} + 34\\mathbf{k}$.",
    "options": [
      "$\\sqrt{3269}$",
      "$3269$",
      "$\\sqrt{3278}$",
      "$99$",
      "$\\frac{\\sqrt{3269}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{32^2 + 33^2 + 34^2} = \\sqrt{3269}$.",
    "number": 1
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{33} = 33\\mathbf{i} + 34\\mathbf{j} + 35\\mathbf{k}$.",
    "options": [
      "$\\sqrt{3470}$",
      "$3470$",
      "$\\sqrt{3479}$",
      "$102$",
      "$\\frac{\\sqrt{3470}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{33^2 + 34^2 + 35^2} = \\sqrt{3470}$.",
    "number": 2
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{34} = 34\\mathbf{i} + 35\\mathbf{j} + 36\\mathbf{k}$.",
    "options": [
      "$\\sqrt{3677}$",
      "$3677$",
      "$\\sqrt{3686}$",
      "$105$",
      "$\\frac{\\sqrt{3677}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{34^2 + 35^2 + 36^2} = \\sqrt{3677}$.",
    "number": 3
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{35} = 35\\mathbf{i} + 36\\mathbf{j} + 37\\mathbf{k}$.",
    "options": [
      "$\\sqrt{3890}$",
      "$3890$",
      "$\\sqrt{3899}$",
      "$108$",
      "$\\frac{\\sqrt{3890}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{35^2 + 36^2 + 37^2} = \\sqrt{3890}$.",
    "number": 4
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{36} = 36\\mathbf{i} + 37\\mathbf{j} + 38\\mathbf{k}$.",
    "options": [
      "$\\sqrt{4109}$",
      "$4109$",
      "$\\sqrt{4118}$",
      "$111$",
      "$\\frac{\\sqrt{4109}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{36^2 + 37^2 + 38^2} = \\sqrt{4109}$.",
    "number": 5
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{37} = 37\\mathbf{i} + 38\\mathbf{j} + 39\\mathbf{k}$.",
    "options": [
      "$\\sqrt{4334}$",
      "$4334$",
      "$\\sqrt{4343}$",
      "$114$",
      "$\\frac{\\sqrt{4334}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{37^2 + 38^2 + 39^2} = \\sqrt{4334}$.",
    "number": 6
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{38} = 38\\mathbf{i} + 39\\mathbf{j} + 40\\mathbf{k}$.",
    "options": [
      "$\\sqrt{4565}$",
      "$4565$",
      "$\\sqrt{4574}$",
      "$117$",
      "$\\frac{\\sqrt{4565}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{38^2 + 39^2 + 40^2} = \\sqrt{4565}$.",
    "number": 7
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{39} = 39\\mathbf{i} + 40\\mathbf{j} + 41\\mathbf{k}$.",
    "options": [
      "$\\sqrt{4802}$",
      "$4802$",
      "$\\sqrt{4811}$",
      "$120$",
      "$\\frac{\\sqrt{4802}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{39^2 + 40^2 + 41^2} = \\sqrt{4802}$.",
    "number": 8
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{40} = 40\\mathbf{i} + 41\\mathbf{j} + 42\\mathbf{k}$.",
    "options": [
      "$\\sqrt{5045}$",
      "$5045$",
      "$\\sqrt{5054}$",
      "$123$",
      "$\\frac{\\sqrt{5045}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{40^2 + 41^2 + 42^2} = \\sqrt{5045}$.",
    "number": 9
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{41} = 41\\mathbf{i} + 42\\mathbf{j} + 43\\mathbf{k}$.",
    "options": [
      "$\\sqrt{5294}$",
      "$5294$",
      "$\\sqrt{5303}$",
      "$126$",
      "$\\frac{\\sqrt{5294}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{41^2 + 42^2 + 43^2} = \\sqrt{5294}$.",
    "number": 10
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{42} = 42\\mathbf{i} + 43\\mathbf{j} + 44\\mathbf{k}$.",
    "options": [
      "$\\sqrt{5549}$",
      "$5549$",
      "$\\sqrt{5558}$",
      "$129$",
      "$\\frac{\\sqrt{5549}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{42^2 + 43^2 + 44^2} = \\sqrt{5549}$.",
    "number": 11
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{43} = 43\\mathbf{i} + 44\\mathbf{j} + 45\\mathbf{k}$.",
    "options": [
      "$\\sqrt{5810}$",
      "$5810$",
      "$\\sqrt{5819}$",
      "$132$",
      "$\\frac{\\sqrt{5810}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{43^2 + 44^2 + 45^2} = \\sqrt{5810}$.",
    "number": 12
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{44} = 44\\mathbf{i} + 45\\mathbf{j} + 46\\mathbf{k}$.",
    "options": [
      "$\\sqrt{6077}$",
      "$6077$",
      "$\\sqrt{6086}$",
      "$135$",
      "$\\frac{\\sqrt{6077}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{44^2 + 45^2 + 46^2} = \\sqrt{6077}$.",
    "number": 13
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{45} = 45\\mathbf{i} + 46\\mathbf{j} + 47\\mathbf{k}$.",
    "options": [
      "$\\sqrt{6350}$",
      "$6350$",
      "$\\sqrt{6359}$",
      "$138$",
      "$\\frac{\\sqrt{6350}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{45^2 + 46^2 + 47^2} = \\sqrt{6350}$.",
    "number": 14
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{46} = 46\\mathbf{i} + 47\\mathbf{j} + 48\\mathbf{k}$.",
    "options": [
      "$\\sqrt{6629}$",
      "$6629$",
      "$\\sqrt{6638}$",
      "$141$",
      "$\\frac{\\sqrt{6629}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{46^2 + 47^2 + 48^2} = \\sqrt{6629}$.",
    "number": 15
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{47} = 47\\mathbf{i} + 48\\mathbf{j} + 49\\mathbf{k}$.",
    "options": [
      "$\\sqrt{6914}$",
      "$6914$",
      "$\\sqrt{6923}$",
      "$144$",
      "$\\frac{\\sqrt{6914}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{47^2 + 48^2 + 49^2} = \\sqrt{6914}$.",
    "number": 16
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{48} = 48\\mathbf{i} + 49\\mathbf{j} + 50\\mathbf{k}$.",
    "options": [
      "$\\sqrt{7205}$",
      "$7205$",
      "$\\sqrt{7214}$",
      "$147$",
      "$\\frac{\\sqrt{7205}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{48^2 + 49^2 + 50^2} = \\sqrt{7205}$.",
    "number": 17
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{49} = 49\\mathbf{i} + 50\\mathbf{j} + 51\\mathbf{k}$.",
    "options": [
      "$\\sqrt{7502}$",
      "$7502$",
      "$\\sqrt{7511}$",
      "$150$",
      "$\\frac{\\sqrt{7502}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{49^2 + 50^2 + 51^2} = \\sqrt{7502}$.",
    "number": 18
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{50} = 50\\mathbf{i} + 51\\mathbf{j} + 52\\mathbf{k}$.",
    "options": [
      "$\\sqrt{7805}$",
      "$7805$",
      "$\\sqrt{7814}$",
      "$153$",
      "$\\frac{\\sqrt{7805}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{50^2 + 51^2 + 52^2} = \\sqrt{7805}$.",
    "number": 19
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{1} = \\begin{pmatrix} 2 & 2 \\\\ 3 & 3 \\end{pmatrix}$.",
    "options": [
      "$0$",
      "$6$",
      "$10$",
      "$-4$",
      "$12$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (2)(3) - (2)(3) = 0$.",
    "number": 20
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{2} = \\begin{pmatrix} 3 & 2 \\\\ 3 & 4 \\end{pmatrix}$.",
    "options": [
      "$6$",
      "$12$",
      "$2$",
      "$18$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (3)(4) - (2)(3) = 6$.",
    "number": 21
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{3} = \\begin{pmatrix} 4 & 2 \\\\ 3 & 5 \\end{pmatrix}$.",
    "options": [
      "$14$",
      "$20$",
      "$10$",
      "$26$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (4)(5) - (2)(3) = 14$.",
    "number": 22
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{4} = \\begin{pmatrix} 5 & 2 \\\\ 3 & 6 \\end{pmatrix}$.",
    "options": [
      "$24$",
      "$30$",
      "$16$",
      "$20$",
      "$36$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (5)(6) - (2)(3) = 24$.",
    "number": 23
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{5} = \\begin{pmatrix} 6 & 2 \\\\ 3 & 7 \\end{pmatrix}$.",
    "options": [
      "$36$",
      "$42$",
      "$18$",
      "$32$",
      "$48$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (6)(7) - (2)(3) = 36$.",
    "number": 24
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{6} = \\begin{pmatrix} 7 & 2 \\\\ 3 & 8 \\end{pmatrix}$.",
    "options": [
      "$50$",
      "$56$",
      "$20$",
      "$46$",
      "$62$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (7)(8) - (2)(3) = 50$.",
    "number": 25
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{7} = \\begin{pmatrix} 8 & 2 \\\\ 3 & 9 \\end{pmatrix}$.",
    "options": [
      "$66$",
      "$72$",
      "$22$",
      "$62$",
      "$78$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (8)(9) - (2)(3) = 66$.",
    "number": 26
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{8} = \\begin{pmatrix} 9 & 2 \\\\ 3 & 10 \\end{pmatrix}$.",
    "options": [
      "$84$",
      "$90$",
      "$24$",
      "$80$",
      "$96$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (9)(10) - (2)(3) = 84$.",
    "number": 27
  }
];

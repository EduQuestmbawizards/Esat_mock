const QUESTIONS = [
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{9} = \\begin{pmatrix} 10 & 2 \\\\ 3 & 11 \\end{pmatrix}$.",
    "options": [
      "$104$",
      "$110$",
      "$26$",
      "$100$",
      "$116$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (10)(11) - (2)(3) = 104$.",
    "number": 1
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{10} = \\begin{pmatrix} 11 & 2 \\\\ 3 & 12 \\end{pmatrix}$.",
    "options": [
      "$126$",
      "$132$",
      "$28$",
      "$122$",
      "$138$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (11)(12) - (2)(3) = 126$.",
    "number": 2
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{11} = \\begin{pmatrix} 12 & 2 \\\\ 3 & 13 \\end{pmatrix}$.",
    "options": [
      "$150$",
      "$156$",
      "$30$",
      "$146$",
      "$162$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (12)(13) - (2)(3) = 150$.",
    "number": 3
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{12} = \\begin{pmatrix} 13 & 2 \\\\ 3 & 14 \\end{pmatrix}$.",
    "options": [
      "$176$",
      "$182$",
      "$32$",
      "$172$",
      "$188$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (13)(14) - (2)(3) = 176$.",
    "number": 4
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{13} = \\begin{pmatrix} 14 & 2 \\\\ 3 & 15 \\end{pmatrix}$.",
    "options": [
      "$204$",
      "$210$",
      "$34$",
      "$200$",
      "$216$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (14)(15) - (2)(3) = 204$.",
    "number": 5
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{14} = \\begin{pmatrix} 15 & 2 \\\\ 3 & 16 \\end{pmatrix}$.",
    "options": [
      "$234$",
      "$240$",
      "$36$",
      "$230$",
      "$246$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (15)(16) - (2)(3) = 234$.",
    "number": 6
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{15} = \\begin{pmatrix} 16 & 2 \\\\ 3 & 17 \\end{pmatrix}$.",
    "options": [
      "$266$",
      "$272$",
      "$38$",
      "$262$",
      "$278$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (16)(17) - (2)(3) = 266$.",
    "number": 7
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{16} = \\begin{pmatrix} 17 & 2 \\\\ 3 & 18 \\end{pmatrix}$.",
    "options": [
      "$300$",
      "$306$",
      "$40$",
      "$296$",
      "$312$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (17)(18) - (2)(3) = 300$.",
    "number": 8
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{17} = \\begin{pmatrix} 18 & 2 \\\\ 3 & 19 \\end{pmatrix}$.",
    "options": [
      "$336$",
      "$342$",
      "$42$",
      "$332$",
      "$348$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (18)(19) - (2)(3) = 336$.",
    "number": 9
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{18} = \\begin{pmatrix} 19 & 2 \\\\ 3 & 20 \\end{pmatrix}$.",
    "options": [
      "$374$",
      "$380$",
      "$44$",
      "$370$",
      "$386$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (19)(20) - (2)(3) = 374$.",
    "number": 10
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{19} = \\begin{pmatrix} 20 & 2 \\\\ 3 & 21 \\end{pmatrix}$.",
    "options": [
      "$414$",
      "$420$",
      "$46$",
      "$410$",
      "$426$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (20)(21) - (2)(3) = 414$.",
    "number": 11
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{20} = \\begin{pmatrix} 21 & 2 \\\\ 3 & 22 \\end{pmatrix}$.",
    "options": [
      "$456$",
      "$462$",
      "$48$",
      "$452$",
      "$468$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (21)(22) - (2)(3) = 456$.",
    "number": 12
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{21} = \\begin{pmatrix} 22 & 2 \\\\ 3 & 23 \\end{pmatrix}$.",
    "options": [
      "$500$",
      "$506$",
      "$50$",
      "$496$",
      "$512$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (22)(23) - (2)(3) = 500$.",
    "number": 13
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{22} = \\begin{pmatrix} 23 & 2 \\\\ 3 & 24 \\end{pmatrix}$.",
    "options": [
      "$546$",
      "$552$",
      "$52$",
      "$542$",
      "$558$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (23)(24) - (2)(3) = 546$.",
    "number": 14
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{23} = \\begin{pmatrix} 24 & 2 \\\\ 3 & 25 \\end{pmatrix}$.",
    "options": [
      "$594$",
      "$600$",
      "$54$",
      "$590$",
      "$606$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (24)(25) - (2)(3) = 594$.",
    "number": 15
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{24} = \\begin{pmatrix} 25 & 2 \\\\ 3 & 26 \\end{pmatrix}$.",
    "options": [
      "$644$",
      "$650$",
      "$56$",
      "$640$",
      "$656$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (25)(26) - (2)(3) = 644$.",
    "number": 16
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{25} = \\begin{pmatrix} 26 & 2 \\\\ 3 & 27 \\end{pmatrix}$.",
    "options": [
      "$696$",
      "$702$",
      "$58$",
      "$692$",
      "$708$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (26)(27) - (2)(3) = 696$.",
    "number": 17
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{26} = \\begin{pmatrix} 27 & 2 \\\\ 3 & 28 \\end{pmatrix}$.",
    "options": [
      "$750$",
      "$756$",
      "$60$",
      "$746$",
      "$762$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (27)(28) - (2)(3) = 750$.",
    "number": 18
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{27} = \\begin{pmatrix} 28 & 2 \\\\ 3 & 29 \\end{pmatrix}$.",
    "options": [
      "$806$",
      "$812$",
      "$62$",
      "$802$",
      "$818$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (28)(29) - (2)(3) = 806$.",
    "number": 19
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{28} = \\begin{pmatrix} 29 & 2 \\\\ 3 & 30 \\end{pmatrix}$.",
    "options": [
      "$864$",
      "$870$",
      "$64$",
      "$860$",
      "$876$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (29)(30) - (2)(3) = 864$.",
    "number": 20
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{29} = \\begin{pmatrix} 30 & 2 \\\\ 3 & 31 \\end{pmatrix}$.",
    "options": [
      "$924$",
      "$930$",
      "$66$",
      "$920$",
      "$936$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (30)(31) - (2)(3) = 924$.",
    "number": 21
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{30} = \\begin{pmatrix} 31 & 2 \\\\ 3 & 32 \\end{pmatrix}$.",
    "options": [
      "$986$",
      "$992$",
      "$68$",
      "$982$",
      "$998$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (31)(32) - (2)(3) = 986$.",
    "number": 22
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{31} = \\begin{pmatrix} 32 & 2 \\\\ 3 & 33 \\end{pmatrix}$.",
    "options": [
      "$1050$",
      "$1056$",
      "$70$",
      "$1046$",
      "$1062$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (32)(33) - (2)(3) = 1050$.",
    "number": 23
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{32} = \\begin{pmatrix} 33 & 2 \\\\ 3 & 34 \\end{pmatrix}$.",
    "options": [
      "$1116$",
      "$1122$",
      "$72$",
      "$1112$",
      "$1128$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (33)(34) - (2)(3) = 1116$.",
    "number": 24
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{33} = \\begin{pmatrix} 34 & 2 \\\\ 3 & 35 \\end{pmatrix}$.",
    "options": [
      "$1184$",
      "$1190$",
      "$74$",
      "$1180$",
      "$1196$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (34)(35) - (2)(3) = 1184$.",
    "number": 25
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{34} = \\begin{pmatrix} 35 & 2 \\\\ 3 & 36 \\end{pmatrix}$.",
    "options": [
      "$1254$",
      "$1260$",
      "$76$",
      "$1250$",
      "$1266$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (35)(36) - (2)(3) = 1254$.",
    "number": 26
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{35} = \\begin{pmatrix} 36 & 2 \\\\ 3 & 37 \\end{pmatrix}$.",
    "options": [
      "$1326$",
      "$1332$",
      "$78$",
      "$1322$",
      "$1338$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (36)(37) - (2)(3) = 1326$.",
    "number": 27
  }
];

const QUESTIONS = [
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{36} = \\begin{pmatrix} 37 & 2 \\\\ 3 & 38 \\end{pmatrix}$.",
    "options": [
      "$1400$",
      "$1406$",
      "$80$",
      "$1396$",
      "$1412$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (37)(38) - (2)(3) = 1400$.",
    "number": 1
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{37} = \\begin{pmatrix} 38 & 2 \\\\ 3 & 39 \\end{pmatrix}$.",
    "options": [
      "$1476$",
      "$1482$",
      "$82$",
      "$1472$",
      "$1488$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (38)(39) - (2)(3) = 1476$.",
    "number": 2
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{38} = \\begin{pmatrix} 39 & 2 \\\\ 3 & 40 \\end{pmatrix}$.",
    "options": [
      "$1554$",
      "$1560$",
      "$84$",
      "$1550$",
      "$1566$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (39)(40) - (2)(3) = 1554$.",
    "number": 3
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{39} = \\begin{pmatrix} 40 & 2 \\\\ 3 & 41 \\end{pmatrix}$.",
    "options": [
      "$1634$",
      "$1640$",
      "$86$",
      "$1630$",
      "$1646$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (40)(41) - (2)(3) = 1634$.",
    "number": 4
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{40} = \\begin{pmatrix} 41 & 2 \\\\ 3 & 42 \\end{pmatrix}$.",
    "options": [
      "$1716$",
      "$1722$",
      "$88$",
      "$1712$",
      "$1728$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (41)(42) - (2)(3) = 1716$.",
    "number": 5
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{41} = \\begin{pmatrix} 42 & 2 \\\\ 3 & 43 \\end{pmatrix}$.",
    "options": [
      "$1800$",
      "$1806$",
      "$90$",
      "$1796$",
      "$1812$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (42)(43) - (2)(3) = 1800$.",
    "number": 6
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{42} = \\begin{pmatrix} 43 & 2 \\\\ 3 & 44 \\end{pmatrix}$.",
    "options": [
      "$1886$",
      "$1892$",
      "$92$",
      "$1882$",
      "$1898$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (43)(44) - (2)(3) = 1886$.",
    "number": 7
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{43} = \\begin{pmatrix} 44 & 2 \\\\ 3 & 45 \\end{pmatrix}$.",
    "options": [
      "$1974$",
      "$1980$",
      "$94$",
      "$1970$",
      "$1986$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (44)(45) - (2)(3) = 1974$.",
    "number": 8
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{44} = \\begin{pmatrix} 45 & 2 \\\\ 3 & 46 \\end{pmatrix}$.",
    "options": [
      "$2064$",
      "$2070$",
      "$96$",
      "$2060$",
      "$2076$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (45)(46) - (2)(3) = 2064$.",
    "number": 9
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{45} = \\begin{pmatrix} 46 & 2 \\\\ 3 & 47 \\end{pmatrix}$.",
    "options": [
      "$2156$",
      "$2162$",
      "$98$",
      "$2152$",
      "$2168$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (46)(47) - (2)(3) = 2156$.",
    "number": 10
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{46} = \\begin{pmatrix} 47 & 2 \\\\ 3 & 48 \\end{pmatrix}$.",
    "options": [
      "$2250$",
      "$2256$",
      "$100$",
      "$2246$",
      "$2262$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (47)(48) - (2)(3) = 2250$.",
    "number": 11
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{47} = \\begin{pmatrix} 48 & 2 \\\\ 3 & 49 \\end{pmatrix}$.",
    "options": [
      "$2346$",
      "$2352$",
      "$102$",
      "$2342$",
      "$2358$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (48)(49) - (2)(3) = 2346$.",
    "number": 12
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{48} = \\begin{pmatrix} 49 & 2 \\\\ 3 & 50 \\end{pmatrix}$.",
    "options": [
      "$2444$",
      "$2450$",
      "$104$",
      "$2440$",
      "$2456$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (49)(50) - (2)(3) = 2444$.",
    "number": 13
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{49} = \\begin{pmatrix} 50 & 2 \\\\ 3 & 51 \\end{pmatrix}$.",
    "options": [
      "$2544$",
      "$2550$",
      "$106$",
      "$2540$",
      "$2556$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (50)(51) - (2)(3) = 2544$.",
    "number": 14
  },
  {
    "module": "Mathematics 2",
    "topic": "Matrices",
    "difficulty": "Medium",
    "question": "Calculate the determinant of matrix $\\mathbf{M}_{50} = \\begin{pmatrix} 51 & 2 \\\\ 3 & 52 \\end{pmatrix}$.",
    "options": [
      "$2646$",
      "$2652$",
      "$108$",
      "$2642$",
      "$2658$"
    ],
    "answer": 0,
    "explanation": "$\\det(\\mathbf{M}) = (51)(52) - (2)(3) = 2646$.",
    "number": 15
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{1}|$ of the complex number $z_{1} = 1 + 2i$.",
    "options": [
      "$\\sqrt{5}$",
      "$5$",
      "$\\sqrt{18}$",
      "$\\sqrt{23}$",
      "$51$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$.",
    "number": 16
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{2}|$ of the complex number $z_{2} = 2 + 3i$.",
    "options": [
      "$\\sqrt{13}$",
      "$13$",
      "$\\sqrt{26}$",
      "$\\sqrt{25}$",
      "$52$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{2^2 + 3^2} = \\sqrt{13}$.",
    "number": 17
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{3}|$ of the complex number $z_{3} = 3 + 4i$.",
    "options": [
      "$\\sqrt{25}$",
      "$25$",
      "$\\sqrt{38}$",
      "$\\sqrt{27}$",
      "$53$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{25}$.",
    "number": 18
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{4}|$ of the complex number $z_{4} = 4 + 5i$.",
    "options": [
      "$\\sqrt{41}$",
      "$41$",
      "$\\sqrt{54}$",
      "$\\sqrt{29}$",
      "$54$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{4^2 + 5^2} = \\sqrt{41}$.",
    "number": 19
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{5}|$ of the complex number $z_{5} = 5 + 6i$.",
    "options": [
      "$\\sqrt{61}$",
      "$61$",
      "$\\sqrt{74}$",
      "$\\sqrt{31}$",
      "$55$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{5^2 + 6^2} = \\sqrt{61}$.",
    "number": 20
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{6}|$ of the complex number $z_{6} = 6 + 7i$.",
    "options": [
      "$\\sqrt{85}$",
      "$85$",
      "$\\sqrt{98}$",
      "$\\sqrt{33}$",
      "$56$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{6^2 + 7^2} = \\sqrt{85}$.",
    "number": 21
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{7}|$ of the complex number $z_{7} = 7 + 8i$.",
    "options": [
      "$\\sqrt{113}$",
      "$113$",
      "$\\sqrt{126}$",
      "$\\sqrt{35}$",
      "$57$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{7^2 + 8^2} = \\sqrt{113}$.",
    "number": 22
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{8}|$ of the complex number $z_{8} = 8 + 9i$.",
    "options": [
      "$\\sqrt{145}$",
      "$145$",
      "$\\sqrt{158}$",
      "$\\sqrt{37}$",
      "$58$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{8^2 + 9^2} = \\sqrt{145}$.",
    "number": 23
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{9}|$ of the complex number $z_{9} = 9 + 10i$.",
    "options": [
      "$\\sqrt{181}$",
      "$181$",
      "$\\sqrt{194}$",
      "$\\sqrt{39}$",
      "$59$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{9^2 + 10^2} = \\sqrt{181}$.",
    "number": 24
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{10}|$ of the complex number $z_{10} = 10 + 11i$.",
    "options": [
      "$\\sqrt{221}$",
      "$221$",
      "$\\sqrt{234}$",
      "$\\sqrt{41}$",
      "$60$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{10^2 + 11^2} = \\sqrt{221}$.",
    "number": 25
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{11}|$ of the complex number $z_{11} = 11 + 12i$.",
    "options": [
      "$\\sqrt{265}$",
      "$265$",
      "$\\sqrt{278}$",
      "$\\sqrt{43}$",
      "$61$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{11^2 + 12^2} = \\sqrt{265}$.",
    "number": 26
  },
  {
    "module": "Mathematics 2",
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "question": "Determine the modulus $|z_{12}|$ of the complex number $z_{12} = 12 + 13i$.",
    "options": [
      "$\\sqrt{313}$",
      "$313$",
      "$\\sqrt{326}$",
      "$\\sqrt{45}$",
      "$62$"
    ],
    "answer": 0,
    "explanation": "$|z| = \\sqrt{12^2 + 13^2} = \\sqrt{313}$.",
    "number": 27
  }
];

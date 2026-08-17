const QUESTIONS = [
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Hexane in trial 13.",
    "options": [
      "$\\text{C}_{6}\\text{H}_{14}$",
      "$\\text{C}_{6}\\text{H}_{12}$",
      "$\\text{C}_{6}\\text{H}_{10}$",
      "$\\text{C}_{7}\\text{H}_{14}$",
      "$\\text{C}_{6}\\text{H}_{20}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Hexane ($n = 6$), formula is $\\text{C}_{6}\\text{H}_{14}$.",
    "number": 1
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Heptane in trial 14.",
    "options": [
      "$\\text{C}_{7}\\text{H}_{16}$",
      "$\\text{C}_{7}\\text{H}_{14}$",
      "$\\text{C}_{7}\\text{H}_{12}$",
      "$\\text{C}_{8}\\text{H}_{16}$",
      "$\\text{C}_{7}\\text{H}_{22}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Heptane ($n = 7$), formula is $\\text{C}_{7}\\text{H}_{16}$.",
    "number": 2
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Octane in trial 15.",
    "options": [
      "$\\text{C}_{8}\\text{H}_{18}$",
      "$\\text{C}_{8}\\text{H}_{16}$",
      "$\\text{C}_{8}\\text{H}_{14}$",
      "$\\text{C}_{9}\\text{H}_{18}$",
      "$\\text{C}_{8}\\text{H}_{24}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Octane ($n = 8$), formula is $\\text{C}_{8}\\text{H}_{18}$.",
    "number": 3
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Methane in trial 16.",
    "options": [
      "$\\text{C}_{1}\\text{H}_{4}$",
      "$\\text{C}_{1}\\text{H}_{2}$",
      "$\\text{C}_{1}\\text{H}_{0}$",
      "$\\text{C}_{2}\\text{H}_{4}$",
      "$\\text{C}_{1}\\text{H}_{10}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Methane ($n = 1$), formula is $\\text{C}_{1}\\text{H}_{4}$.",
    "number": 4
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Ethane in trial 17.",
    "options": [
      "$\\text{C}_{2}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{4}$",
      "$\\text{C}_{2}\\text{H}_{2}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{12}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Ethane ($n = 2$), formula is $\\text{C}_{2}\\text{H}_{6}$.",
    "number": 5
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Propane in trial 18.",
    "options": [
      "$\\text{C}_{3}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{3}\\text{H}_{4}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{14}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Propane ($n = 3$), formula is $\\text{C}_{3}\\text{H}_{8}$.",
    "number": 6
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Butane in trial 19.",
    "options": [
      "$\\text{C}_{4}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{4}\\text{H}_{6}$",
      "$\\text{C}_{5}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{16}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Butane ($n = 4$), formula is $\\text{C}_{4}\\text{H}_{10}$.",
    "number": 7
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Pentane in trial 20.",
    "options": [
      "$\\text{C}_{5}\\text{H}_{12}$",
      "$\\text{C}_{5}\\text{H}_{10}$",
      "$\\text{C}_{5}\\text{H}_{8}$",
      "$\\text{C}_{6}\\text{H}_{12}$",
      "$\\text{C}_{5}\\text{H}_{18}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Pentane ($n = 5$), formula is $\\text{C}_{5}\\text{H}_{12}$.",
    "number": 8
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Hexane in trial 21.",
    "options": [
      "$\\text{C}_{6}\\text{H}_{14}$",
      "$\\text{C}_{6}\\text{H}_{12}$",
      "$\\text{C}_{6}\\text{H}_{10}$",
      "$\\text{C}_{7}\\text{H}_{14}$",
      "$\\text{C}_{6}\\text{H}_{20}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Hexane ($n = 6$), formula is $\\text{C}_{6}\\text{H}_{14}$.",
    "number": 9
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Heptane in trial 22.",
    "options": [
      "$\\text{C}_{7}\\text{H}_{16}$",
      "$\\text{C}_{7}\\text{H}_{14}$",
      "$\\text{C}_{7}\\text{H}_{12}$",
      "$\\text{C}_{8}\\text{H}_{16}$",
      "$\\text{C}_{7}\\text{H}_{22}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Heptane ($n = 7$), formula is $\\text{C}_{7}\\text{H}_{16}$.",
    "number": 10
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Octane in trial 23.",
    "options": [
      "$\\text{C}_{8}\\text{H}_{18}$",
      "$\\text{C}_{8}\\text{H}_{16}$",
      "$\\text{C}_{8}\\text{H}_{14}$",
      "$\\text{C}_{9}\\text{H}_{18}$",
      "$\\text{C}_{8}\\text{H}_{24}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Octane ($n = 8$), formula is $\\text{C}_{8}\\text{H}_{18}$.",
    "number": 11
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Methane in trial 24.",
    "options": [
      "$\\text{C}_{1}\\text{H}_{4}$",
      "$\\text{C}_{1}\\text{H}_{2}$",
      "$\\text{C}_{1}\\text{H}_{0}$",
      "$\\text{C}_{2}\\text{H}_{4}$",
      "$\\text{C}_{1}\\text{H}_{10}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Methane ($n = 1$), formula is $\\text{C}_{1}\\text{H}_{4}$.",
    "number": 12
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Ethane in trial 25.",
    "options": [
      "$\\text{C}_{2}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{4}$",
      "$\\text{C}_{2}\\text{H}_{2}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{12}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Ethane ($n = 2$), formula is $\\text{C}_{2}\\text{H}_{6}$.",
    "number": 13
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Propane in trial 26.",
    "options": [
      "$\\text{C}_{3}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{3}\\text{H}_{4}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{14}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Propane ($n = 3$), formula is $\\text{C}_{3}\\text{H}_{8}$.",
    "number": 14
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Butane in trial 27.",
    "options": [
      "$\\text{C}_{4}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{4}\\text{H}_{6}$",
      "$\\text{C}_{5}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{16}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Butane ($n = 4$), formula is $\\text{C}_{4}\\text{H}_{10}$.",
    "number": 15
  }
];

const QUESTIONS = [
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 36 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$1.0$",
      "$13.0$",
      "$5.0$",
      "$9.0$",
      "$7.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 1
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 37 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$10.0$",
      "$8.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 2
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 38 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$11.0$",
      "$7.0$",
      "$9.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 3
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 39 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$10.0$",
      "$8.0$",
      "$12.0$",
      "$10.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 4
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 40 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$9.0$",
      "$13.0$",
      "$11.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 5
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 41 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.",
    "options": [
      "$6.0$",
      "$8.0$",
      "$10.0$",
      "$14.0$",
      "$12.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-6}) = 6.0$.",
    "number": 6
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 42 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$1.0$",
      "$13.0$",
      "$5.0$",
      "$9.0$",
      "$7.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 7
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 43 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$10.0$",
      "$8.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 8
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 44 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$11.0$",
      "$7.0$",
      "$9.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 9
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 45 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$10.0$",
      "$8.0$",
      "$12.0$",
      "$10.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 10
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 46 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$9.0$",
      "$13.0$",
      "$11.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 11
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 47 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.",
    "options": [
      "$6.0$",
      "$8.0$",
      "$10.0$",
      "$14.0$",
      "$12.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-6}) = 6.0$.",
    "number": 12
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 48 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$1.0$",
      "$13.0$",
      "$5.0$",
      "$9.0$",
      "$7.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 13
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 49 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$10.0$",
      "$8.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 14
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 50 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$11.0$",
      "$7.0$",
      "$9.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 15
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Ethane in trial 1.",
    "options": [
      "$\\text{C}_{2}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{4}$",
      "$\\text{C}_{2}\\text{H}_{2}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{12}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Ethane ($n = 2$), formula is $\\text{C}_{2}\\text{H}_{6}$.",
    "number": 16
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Propane in trial 2.",
    "options": [
      "$\\text{C}_{3}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{3}\\text{H}_{4}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{14}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Propane ($n = 3$), formula is $\\text{C}_{3}\\text{H}_{8}$.",
    "number": 17
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Butane in trial 3.",
    "options": [
      "$\\text{C}_{4}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{4}\\text{H}_{6}$",
      "$\\text{C}_{5}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{16}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Butane ($n = 4$), formula is $\\text{C}_{4}\\text{H}_{10}$.",
    "number": 18
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Pentane in trial 4.",
    "options": [
      "$\\text{C}_{5}\\text{H}_{12}$",
      "$\\text{C}_{5}\\text{H}_{10}$",
      "$\\text{C}_{5}\\text{H}_{8}$",
      "$\\text{C}_{6}\\text{H}_{12}$",
      "$\\text{C}_{5}\\text{H}_{18}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Pentane ($n = 5$), formula is $\\text{C}_{5}\\text{H}_{12}$.",
    "number": 19
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Hexane in trial 5.",
    "options": [
      "$\\text{C}_{6}\\text{H}_{14}$",
      "$\\text{C}_{6}\\text{H}_{12}$",
      "$\\text{C}_{6}\\text{H}_{10}$",
      "$\\text{C}_{7}\\text{H}_{14}$",
      "$\\text{C}_{6}\\text{H}_{20}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Hexane ($n = 6$), formula is $\\text{C}_{6}\\text{H}_{14}$.",
    "number": 20
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Heptane in trial 6.",
    "options": [
      "$\\text{C}_{7}\\text{H}_{16}$",
      "$\\text{C}_{7}\\text{H}_{14}$",
      "$\\text{C}_{7}\\text{H}_{12}$",
      "$\\text{C}_{8}\\text{H}_{16}$",
      "$\\text{C}_{7}\\text{H}_{22}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Heptane ($n = 7$), formula is $\\text{C}_{7}\\text{H}_{16}$.",
    "number": 21
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Octane in trial 7.",
    "options": [
      "$\\text{C}_{8}\\text{H}_{18}$",
      "$\\text{C}_{8}\\text{H}_{16}$",
      "$\\text{C}_{8}\\text{H}_{14}$",
      "$\\text{C}_{9}\\text{H}_{18}$",
      "$\\text{C}_{8}\\text{H}_{24}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Octane ($n = 8$), formula is $\\text{C}_{8}\\text{H}_{18}$.",
    "number": 22
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Methane in trial 8.",
    "options": [
      "$\\text{C}_{1}\\text{H}_{4}$",
      "$\\text{C}_{1}\\text{H}_{2}$",
      "$\\text{C}_{1}\\text{H}_{0}$",
      "$\\text{C}_{2}\\text{H}_{4}$",
      "$\\text{C}_{1}\\text{H}_{10}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Methane ($n = 1$), formula is $\\text{C}_{1}\\text{H}_{4}$.",
    "number": 23
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Ethane in trial 9.",
    "options": [
      "$\\text{C}_{2}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{4}$",
      "$\\text{C}_{2}\\text{H}_{2}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{2}\\text{H}_{12}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Ethane ($n = 2$), formula is $\\text{C}_{2}\\text{H}_{6}$.",
    "number": 24
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Propane in trial 10.",
    "options": [
      "$\\text{C}_{3}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{6}$",
      "$\\text{C}_{3}\\text{H}_{4}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{3}\\text{H}_{14}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Propane ($n = 3$), formula is $\\text{C}_{3}\\text{H}_{8}$.",
    "number": 25
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Butane in trial 11.",
    "options": [
      "$\\text{C}_{4}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{8}$",
      "$\\text{C}_{4}\\text{H}_{6}$",
      "$\\text{C}_{5}\\text{H}_{10}$",
      "$\\text{C}_{4}\\text{H}_{16}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Butane ($n = 4$), formula is $\\text{C}_{4}\\text{H}_{10}$.",
    "number": 26
  },
  {
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "State the molecular formula of the straight-chain alkane Pentane in trial 12.",
    "options": [
      "$\\text{C}_{5}\\text{H}_{12}$",
      "$\\text{C}_{5}\\text{H}_{10}$",
      "$\\text{C}_{5}\\text{H}_{8}$",
      "$\\text{C}_{6}\\text{H}_{12}$",
      "$\\text{C}_{5}\\text{H}_{18}$"
    ],
    "answer": 0,
    "explanation": "General formula for alkanes is $\\text{C}_n\\text{H}_{2n+2}$. For Pentane ($n = 5$), formula is $\\text{C}_{5}\\text{H}_{12}$.",
    "number": 27
  }
];

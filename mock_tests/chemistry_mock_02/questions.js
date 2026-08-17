const QUESTIONS = [
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 9 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$10.0$",
      "$8.0$",
      "$12.0$",
      "$10.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 1
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 10 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$9.0$",
      "$13.0$",
      "$11.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 2
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 11 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.",
    "options": [
      "$6.0$",
      "$8.0$",
      "$10.0$",
      "$14.0$",
      "$12.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-6}) = 6.0$.",
    "number": 3
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 12 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$1.0$",
      "$13.0$",
      "$5.0$",
      "$9.0$",
      "$7.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 4
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 13 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$10.0$",
      "$8.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 5
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 14 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$11.0$",
      "$7.0$",
      "$9.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 6
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 15 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$10.0$",
      "$8.0$",
      "$12.0$",
      "$10.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 7
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 16 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$9.0$",
      "$13.0$",
      "$11.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 8
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 17 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.",
    "options": [
      "$6.0$",
      "$8.0$",
      "$10.0$",
      "$14.0$",
      "$12.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-6}) = 6.0$.",
    "number": 9
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 18 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$1.0$",
      "$13.0$",
      "$5.0$",
      "$9.0$",
      "$7.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 10
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 19 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$10.0$",
      "$8.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 11
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 20 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$11.0$",
      "$7.0$",
      "$9.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 12
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 21 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$10.0$",
      "$8.0$",
      "$12.0$",
      "$10.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 13
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 22 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$9.0$",
      "$13.0$",
      "$11.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 14
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 23 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.",
    "options": [
      "$6.0$",
      "$8.0$",
      "$10.0$",
      "$14.0$",
      "$12.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-6}) = 6.0$.",
    "number": 15
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 24 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$1.0$",
      "$13.0$",
      "$5.0$",
      "$9.0$",
      "$7.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 16
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 25 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$10.0$",
      "$8.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 17
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 26 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$11.0$",
      "$7.0$",
      "$9.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 18
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 27 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$10.0$",
      "$8.0$",
      "$12.0$",
      "$10.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 19
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 28 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$9.0$",
      "$13.0$",
      "$11.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 20
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 29 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.",
    "options": [
      "$6.0$",
      "$8.0$",
      "$10.0$",
      "$14.0$",
      "$12.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-6}) = 6.0$.",
    "number": 21
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 30 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$1.0$",
      "$13.0$",
      "$5.0$",
      "$9.0$",
      "$7.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 22
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 31 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$2.0$",
      "$12.0$",
      "$6.0$",
      "$10.0$",
      "$8.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 23
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 32 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$11.0$",
      "$7.0$",
      "$9.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 24
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 33 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$10.0$",
      "$8.0$",
      "$12.0$",
      "$10.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 25
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 34 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$9.0$",
      "$13.0$",
      "$11.5$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 26
  },
  {
    "module": "Chemistry",
    "topic": "Acids & Bases",
    "difficulty": "Medium",
    "question": "Calculate the pH of a hydrochloric acid solution sample 35 with hydrogen ion concentration $[\\text{H}^+] = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.",
    "options": [
      "$6.0$",
      "$8.0$",
      "$10.0$",
      "$14.0$",
      "$12.5$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-6}) = 6.0$.",
    "number": 27
  }
];

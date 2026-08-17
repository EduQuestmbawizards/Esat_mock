const QUESTIONS = [
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 32 contains $29\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$21\\%$",
      "$29\\%$",
      "$59\\%$",
      "$71\\%$",
      "$39\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 29\\% \\implies \\text{A}+\\text{T} = 58\\%$. Remaining $\\text{G}+\\text{C} = 42\\% \\implies \\text{C} = 21\\%$.",
    "number": 1
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 33 contains $30\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$20\\%$",
      "$30\\%$",
      "$61\\%$",
      "$70\\%$",
      "$38\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 30\\% \\implies \\text{A}+\\text{T} = 60\\%$. Remaining $\\text{G}+\\text{C} = 40\\% \\implies \\text{C} = 20\\%$.",
    "number": 2
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 34 contains $31\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$19\\%$",
      "$31\\%$",
      "$63\\%$",
      "$69\\%$",
      "$37\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 31\\% \\implies \\text{A}+\\text{T} = 62\\%$. Remaining $\\text{G}+\\text{C} = 38\\% \\implies \\text{C} = 19\\%$.",
    "number": 3
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 35 contains $32\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$18\\%$",
      "$32\\%$",
      "$65\\%$",
      "$68\\%$",
      "$36\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 32\\% \\implies \\text{A}+\\text{T} = 64\\%$. Remaining $\\text{G}+\\text{C} = 36\\% \\implies \\text{C} = 18\\%$.",
    "number": 4
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 36 contains $15\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$35\\%$",
      "$15\\%$",
      "$31\\%$",
      "$85\\%$",
      "$53\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 15\\% \\implies \\text{A}+\\text{T} = 30\\%$. Remaining $\\text{G}+\\text{C} = 70\\% \\implies \\text{C} = 35\\%$.",
    "number": 5
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 37 contains $16\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$34\\%$",
      "$16\\%$",
      "$33\\%$",
      "$84\\%$",
      "$52\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 16\\% \\implies \\text{A}+\\text{T} = 32\\%$. Remaining $\\text{G}+\\text{C} = 68\\% \\implies \\text{C} = 34\\%$.",
    "number": 6
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 38 contains $17\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$33\\%$",
      "$17\\%$",
      "$35\\%$",
      "$83\\%$",
      "$51\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 17\\% \\implies \\text{A}+\\text{T} = 34\\%$. Remaining $\\text{G}+\\text{C} = 66\\% \\implies \\text{C} = 33\\%$.",
    "number": 7
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 39 contains $18\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$32\\%$",
      "$18\\%$",
      "$37\\%$",
      "$82\\%$",
      "$50\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 18\\% \\implies \\text{A}+\\text{T} = 36\\%$. Remaining $\\text{G}+\\text{C} = 64\\% \\implies \\text{C} = 32\\%$.",
    "number": 8
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 40 contains $19\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$31\\%$",
      "$19\\%$",
      "$39\\%$",
      "$81\\%$",
      "$49\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 19\\% \\implies \\text{A}+\\text{T} = 38\\%$. Remaining $\\text{G}+\\text{C} = 62\\% \\implies \\text{C} = 31\\%$.",
    "number": 9
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 41 contains $20\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$30\\%$",
      "$20\\%$",
      "$41\\%$",
      "$80\\%$",
      "$48\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 20\\% \\implies \\text{A}+\\text{T} = 40\\%$. Remaining $\\text{G}+\\text{C} = 60\\% \\implies \\text{C} = 30\\%$.",
    "number": 10
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 42 contains $21\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$29\\%$",
      "$21\\%$",
      "$43\\%$",
      "$79\\%$",
      "$47\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 21\\% \\implies \\text{A}+\\text{T} = 42\\%$. Remaining $\\text{G}+\\text{C} = 58\\% \\implies \\text{C} = 29\\%$.",
    "number": 11
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 43 contains $22\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$28\\%$",
      "$22\\%$",
      "$45\\%$",
      "$78\\%$",
      "$46\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 22\\% \\implies \\text{A}+\\text{T} = 44\\%$. Remaining $\\text{G}+\\text{C} = 56\\% \\implies \\text{C} = 28\\%$.",
    "number": 12
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 44 contains $23\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$27\\%$",
      "$23\\%$",
      "$47\\%$",
      "$77\\%$",
      "$45\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 23\\% \\implies \\text{A}+\\text{T} = 46\\%$. Remaining $\\text{G}+\\text{C} = 54\\% \\implies \\text{C} = 27\\%$.",
    "number": 13
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 45 contains $24\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$26\\%$",
      "$24\\%$",
      "$49\\%$",
      "$76\\%$",
      "$44\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 24\\% \\implies \\text{A}+\\text{T} = 48\\%$. Remaining $\\text{G}+\\text{C} = 52\\% \\implies \\text{C} = 26\\%$.",
    "number": 14
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 46 contains $26\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$24\\%$",
      "$26\\%$",
      "$53\\%$",
      "$74\\%$",
      "$42\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 26\\% \\implies \\text{A}+\\text{T} = 52\\%$. Remaining $\\text{G}+\\text{C} = 48\\% \\implies \\text{C} = 24\\%$.",
    "number": 15
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 47 contains $26\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$24\\%$",
      "$26\\%$",
      "$53\\%$",
      "$74\\%$",
      "$42\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 26\\% \\implies \\text{A}+\\text{T} = 52\\%$. Remaining $\\text{G}+\\text{C} = 48\\% \\implies \\text{C} = 24\\%$.",
    "number": 16
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 48 contains $27\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$23\\%$",
      "$27\\%$",
      "$55\\%$",
      "$73\\%$",
      "$41\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 27\\% \\implies \\text{A}+\\text{T} = 54\\%$. Remaining $\\text{G}+\\text{C} = 46\\% \\implies \\text{C} = 23\\%$.",
    "number": 17
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 49 contains $28\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$22\\%$",
      "$28\\%$",
      "$57\\%$",
      "$72\\%$",
      "$40\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 28\\% \\implies \\text{A}+\\text{T} = 56\\%$. Remaining $\\text{G}+\\text{C} = 44\\% \\implies \\text{C} = 22\\%$.",
    "number": 18
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 50 contains $29\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$21\\%$",
      "$29\\%$",
      "$59\\%$",
      "$71\\%$",
      "$39\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 29\\% \\implies \\text{A}+\\text{T} = 58\\%$. Remaining $\\text{G}+\\text{C} = 42\\% \\implies \\text{C} = 21\\%$.",
    "number": 19
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $61\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 1. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.27\\text{ dm}^3\\text{ min}^{-1}$",
      "$45.7\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.63\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.57\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.27\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 61 \\times 70\\text{ cm}^3 = 4270\\text{ cm}^3 = 4.27\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 20
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $62\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 2. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.34\\text{ dm}^3\\text{ min}^{-1}$",
      "$46.4\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.67\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.59\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.34\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 62 \\times 70\\text{ cm}^3 = 4340\\text{ cm}^3 = 4.34\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 21
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $63\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 3. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.41\\text{ dm}^3\\text{ min}^{-1}$",
      "$47.1\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.71\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.6\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.41\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 63 \\times 70\\text{ cm}^3 = 4410\\text{ cm}^3 = 4.41\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 22
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $64\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 4. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.48\\text{ dm}^3\\text{ min}^{-1}$",
      "$47.8\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.74\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.61\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.48\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 64 \\times 70\\text{ cm}^3 = 4480\\text{ cm}^3 = 4.48\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 23
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $65\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 5. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.55\\text{ dm}^3\\text{ min}^{-1}$",
      "$48.5\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.77\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.63\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.55\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 65 \\times 70\\text{ cm}^3 = 4550\\text{ cm}^3 = 4.55\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 24
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $66\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 6. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.62\\text{ dm}^3\\text{ min}^{-1}$",
      "$49.2\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.81\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.64\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.620000000000001\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 66 \\times 70\\text{ cm}^3 = 4620\\text{ cm}^3 = 4.62\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 25
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $67\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 7. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.69\\text{ dm}^3\\text{ min}^{-1}$",
      "$49.9\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.85\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.66\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.690000000000001\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 67 \\times 70\\text{ cm}^3 = 4690\\text{ cm}^3 = 4.69\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 26
  },
  {
    "module": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Medium",
    "question": "A human subject has a resting heart rate of $68\\text{ beats min}^{-1}$ and a stroke volume of $70\\text{ cm}^3$ in session 8. Calculate cardiac output in $\\text{dm}^3\\text{ min}^{-1}$.",
    "options": [
      "$4.76\\text{ dm}^3\\text{ min}^{-1}$",
      "$50.6\\text{ dm}^3\\text{ min}^{-1}$",
      "$2.88\\text{ dm}^3\\text{ min}^{-1}$",
      "$1.67\\text{ dm}^3\\text{ min}^{-1}$",
      "$8.76\\text{ dm}^3\\text{ min}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\text{Cardiac Output} = \\text{Heart Rate} \\times \\text{Stroke Volume} = 68 \\times 70\\text{ cm}^3 = 4760\\text{ cm}^3 = 4.76\\text{ dm}^3\\text{ min}^{-1}$.",
    "number": 27
  }
];

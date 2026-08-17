const QUESTIONS = [
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $1.3\\text{ mol}$ of glucose in trial 13?",
    "options": [
      "$41.6\\text{ mol}$",
      "$86.2\\text{ mol}$",
      "$22.0\\text{ mol}$",
      "$0.2906\\text{ mol}$",
      "$56.6\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 1.3 \\times 32 = 41.6\\text{ mol}$.",
    "number": 1
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $1.4\\text{ mol}$ of glucose in trial 14?",
    "options": [
      "$44.8\\text{ mol}$",
      "$92.6\\text{ mol}$",
      "$23.6\\text{ mol}$",
      "$0.2938\\text{ mol}$",
      "$59.8\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 1.4 \\times 32 = 44.8\\text{ mol}$.",
    "number": 2
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $1.5\\text{ mol}$ of glucose in trial 15?",
    "options": [
      "$48.0\\text{ mol}$",
      "$99.0\\text{ mol}$",
      "$25.2\\text{ mol}$",
      "$0.2969\\text{ mol}$",
      "$63.0\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 1.5 \\times 32 = 48.0\\text{ mol}$.",
    "number": 3
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $1.6\\text{ mol}$ of glucose in trial 16?",
    "options": [
      "$51.2\\text{ mol}$",
      "$105.4\\text{ mol}$",
      "$26.8\\text{ mol}$",
      "$0.3\\text{ mol}$",
      "$66.2\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 1.6 \\times 32 = 51.2\\text{ mol}$.",
    "number": 4
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $1.7\\text{ mol}$ of glucose in trial 17?",
    "options": [
      "$54.4\\text{ mol}$",
      "$111.8\\text{ mol}$",
      "$28.4\\text{ mol}$",
      "$0.3031\\text{ mol}$",
      "$69.4\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 1.7 \\times 32 = 54.4\\text{ mol}$.",
    "number": 5
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $1.8\\text{ mol}$ of glucose in trial 18?",
    "options": [
      "$57.6\\text{ mol}$",
      "$118.2\\text{ mol}$",
      "$30.0\\text{ mol}$",
      "$0.3063\\text{ mol}$",
      "$72.6\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 1.8 \\times 32 = 57.6\\text{ mol}$.",
    "number": 6
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $1.9\\text{ mol}$ of glucose in trial 19?",
    "options": [
      "$60.8\\text{ mol}$",
      "$124.6\\text{ mol}$",
      "$31.6\\text{ mol}$",
      "$0.3094\\text{ mol}$",
      "$75.8\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 1.9 \\times 32 = 60.8\\text{ mol}$.",
    "number": 7
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.0\\text{ mol}$ of glucose in trial 20?",
    "options": [
      "$64.0\\text{ mol}$",
      "$131.0\\text{ mol}$",
      "$33.2\\text{ mol}$",
      "$0.3125\\text{ mol}$",
      "$79.0\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.0 \\times 32 = 64.0\\text{ mol}$.",
    "number": 8
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.1\\text{ mol}$ of glucose in trial 21?",
    "options": [
      "$67.2\\text{ mol}$",
      "$137.4\\text{ mol}$",
      "$34.8\\text{ mol}$",
      "$0.3156\\text{ mol}$",
      "$82.2\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.1 \\times 32 = 67.2\\text{ mol}$.",
    "number": 9
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.2\\text{ mol}$ of glucose in trial 22?",
    "options": [
      "$70.4\\text{ mol}$",
      "$143.8\\text{ mol}$",
      "$36.4\\text{ mol}$",
      "$0.3187\\text{ mol}$",
      "$85.4\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.2 \\times 32 = 70.4\\text{ mol}$.",
    "number": 10
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.3\\text{ mol}$ of glucose in trial 23?",
    "options": [
      "$73.6\\text{ mol}$",
      "$150.2\\text{ mol}$",
      "$38.0\\text{ mol}$",
      "$0.3219\\text{ mol}$",
      "$88.6\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.3 \\times 32 = 73.6\\text{ mol}$.",
    "number": 11
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.4\\text{ mol}$ of glucose in trial 24?",
    "options": [
      "$76.8\\text{ mol}$",
      "$156.6\\text{ mol}$",
      "$39.6\\text{ mol}$",
      "$0.325\\text{ mol}$",
      "$91.8\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.4 \\times 32 = 76.8\\text{ mol}$.",
    "number": 12
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.5\\text{ mol}$ of glucose in trial 25?",
    "options": [
      "$80.0\\text{ mol}$",
      "$163.0\\text{ mol}$",
      "$41.2\\text{ mol}$",
      "$0.3281\\text{ mol}$",
      "$95.0\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.5 \\times 32 = 80.0\\text{ mol}$.",
    "number": 13
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.6\\text{ mol}$ of glucose in trial 26?",
    "options": [
      "$83.2\\text{ mol}$",
      "$169.4\\text{ mol}$",
      "$42.8\\text{ mol}$",
      "$0.3312\\text{ mol}$",
      "$98.2\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.6 \\times 32 = 83.2\\text{ mol}$.",
    "number": 14
  },
  {
    "module": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Medium",
    "question": "Assuming an aerobic yield of $32\\text{ ATP}$ per glucose molecule, how many moles of ATP are produced from complete oxidation of $2.7\\text{ mol}$ of glucose in trial 27?",
    "options": [
      "$86.4\\text{ mol}$",
      "$175.8\\text{ mol}$",
      "$44.4\\text{ mol}$",
      "$0.3344\\text{ mol}$",
      "$101.4\\text{ mol}$"
    ],
    "answer": 0,
    "explanation": "Total ATP $= 2.7 \\times 32 = 86.4\\text{ mol}$.",
    "number": 15
  }
];

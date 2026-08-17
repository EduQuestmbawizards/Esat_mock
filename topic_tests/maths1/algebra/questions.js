const QUESTIONS = [
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $47\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{47^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{47^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$47^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{47\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{47^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(47)(47)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{47^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 1
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $3$ red and $4$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{3}{7}$",
      "$\\frac{4}{7}$",
      "$\\frac{3}{10}$",
      "$\\frac{1}{7}$",
      "$\\frac{2}{8}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{3}{7}$.",
    "number": 2
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $4$ red and $5$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{4}{9}$",
      "$\\frac{5}{9}$",
      "$\\frac{4}{12}$",
      "$\\frac{1}{9}$",
      "$\\frac{3}{10}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{4}{9}$.",
    "number": 3
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $5$ red and $6$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{5}{11}$",
      "$\\frac{6}{11}$",
      "$\\frac{5}{14}$",
      "$\\frac{1}{11}$",
      "$\\frac{4}{12}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{5}{11}$.",
    "number": 4
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $6$ red and $7$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{6}{13}$",
      "$\\frac{7}{13}$",
      "$\\frac{6}{16}$",
      "$\\frac{1}{13}$",
      "$\\frac{5}{14}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{6}{13}$.",
    "number": 5
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $7$ red and $8$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{7}{15}$",
      "$\\frac{8}{15}$",
      "$\\frac{7}{18}$",
      "$\\frac{1}{15}$",
      "$\\frac{6}{16}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{7}{15}$.",
    "number": 6
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $8$ red and $9$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{8}{17}$",
      "$\\frac{9}{17}$",
      "$\\frac{8}{20}$",
      "$\\frac{1}{17}$",
      "$\\frac{7}{18}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{8}{17}$.",
    "number": 7
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $9$ red and $10$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{9}{19}$",
      "$\\frac{10}{19}$",
      "$\\frac{9}{22}$",
      "$\\frac{1}{19}$",
      "$\\frac{8}{20}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{9}{19}$.",
    "number": 8
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $10$ red and $11$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{10}{21}$",
      "$\\frac{11}{21}$",
      "$\\frac{10}{24}$",
      "$\\frac{1}{21}$",
      "$\\frac{9}{22}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{10}{21}$.",
    "number": 9
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $11$ red and $12$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{11}{23}$",
      "$\\frac{12}{23}$",
      "$\\frac{11}{26}$",
      "$\\frac{1}{23}$",
      "$\\frac{10}{24}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{11}{23}$.",
    "number": 10
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $12$ red and $13$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{12}{25}$",
      "$\\frac{13}{25}$",
      "$\\frac{12}{28}$",
      "$\\frac{1}{25}$",
      "$\\frac{11}{26}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{12}{25}$.",
    "number": 11
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $13$ red and $14$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{13}{27}$",
      "$\\frac{14}{27}$",
      "$\\frac{13}{30}$",
      "$\\frac{1}{27}$",
      "$\\frac{12}{28}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{13}{27}$.",
    "number": 12
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $14$ red and $15$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{14}{29}$",
      "$\\frac{15}{29}$",
      "$\\frac{14}{32}$",
      "$\\frac{1}{29}$",
      "$\\frac{13}{30}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{14}{29}$.",
    "number": 13
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $15$ red and $16$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{15}{31}$",
      "$\\frac{16}{31}$",
      "$\\frac{15}{34}$",
      "$\\frac{1}{31}$",
      "$\\frac{14}{32}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{15}{31}$.",
    "number": 14
  },
  {
    "module": "Mathematics 1",
    "topic": "Probability",
    "difficulty": "Medium",
    "question": "A bag contains $16$ red and $17$ blue counters. A counter is drawn at random. What is the probability of choosing a red counter?",
    "options": [
      "$\\frac{16}{33}$",
      "$\\frac{17}{33}$",
      "$\\frac{16}{36}$",
      "$\\frac{1}{33}$",
      "$\\frac{15}{34}$"
    ],
    "answer": 0,
    "explanation": "$P(\\text{Red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{16}{33}$.",
    "number": 15
  }
];

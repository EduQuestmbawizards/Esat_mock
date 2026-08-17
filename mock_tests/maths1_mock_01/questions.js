const QUESTIONS = [
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 4)$ is a factor of $P(x) = x^2 - (8)x + k$, find the value of $k$.",
    "options": [
      "$16$",
      "$23$",
      "$-19$",
      "$11$",
      "$31$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(4) = 4^2 - (8)(4) + k = 0 \\implies -4(4) + k = 0 \\implies k = 16$.",
    "number": 1
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 5)$ is a factor of $P(x) = x^2 - (9)x + k$, find the value of $k$.",
    "options": [
      "$20$",
      "$27$",
      "$-23$",
      "$15$",
      "$35$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(5) = 5^2 - (9)(5) + k = 0 \\implies -4(5) + k = 0 \\implies k = 20$.",
    "number": 2
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 6)$ is a factor of $P(x) = x^2 - (10)x + k$, find the value of $k$.",
    "options": [
      "$24$",
      "$31$",
      "$-27$",
      "$19$",
      "$39$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(6) = 6^2 - (10)(6) + k = 0 \\implies -4(6) + k = 0 \\implies k = 24$.",
    "number": 3
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 7)$ is a factor of $P(x) = x^2 - (11)x + k$, find the value of $k$.",
    "options": [
      "$28$",
      "$35$",
      "$-31$",
      "$23$",
      "$43$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(7) = 7^2 - (11)(7) + k = 0 \\implies -4(7) + k = 0 \\implies k = 28$.",
    "number": 4
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 8)$ is a factor of $P(x) = x^2 - (12)x + k$, find the value of $k$.",
    "options": [
      "$32$",
      "$39$",
      "$-35$",
      "$27$",
      "$47$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(8) = 8^2 - (12)(8) + k = 0 \\implies -4(8) + k = 0 \\implies k = 32$.",
    "number": 5
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 9)$ is a factor of $P(x) = x^2 - (13)x + k$, find the value of $k$.",
    "options": [
      "$36$",
      "$43$",
      "$-39$",
      "$31$",
      "$51$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(9) = 9^2 - (13)(9) + k = 0 \\implies -4(9) + k = 0 \\implies k = 36$.",
    "number": 6
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 10)$ is a factor of $P(x) = x^2 - (14)x + k$, find the value of $k$.",
    "options": [
      "$40$",
      "$47$",
      "$-43$",
      "$35$",
      "$55$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(10) = 10^2 - (14)(10) + k = 0 \\implies -4(10) + k = 0 \\implies k = 40$.",
    "number": 7
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 11)$ is a factor of $P(x) = x^2 - (15)x + k$, find the value of $k$.",
    "options": [
      "$44$",
      "$51$",
      "$-47$",
      "$39$",
      "$59$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(11) = 11^2 - (15)(11) + k = 0 \\implies -4(11) + k = 0 \\implies k = 44$.",
    "number": 8
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 12)$ is a factor of $P(x) = x^2 - (16)x + k$, find the value of $k$.",
    "options": [
      "$48$",
      "$55$",
      "$-51$",
      "$43$",
      "$63$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(12) = 12^2 - (16)(12) + k = 0 \\implies -4(12) + k = 0 \\implies k = 48$.",
    "number": 9
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 13)$ is a factor of $P(x) = x^2 - (17)x + k$, find the value of $k$.",
    "options": [
      "$52$",
      "$59$",
      "$-55$",
      "$47$",
      "$67$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(13) = 13^2 - (17)(13) + k = 0 \\implies -4(13) + k = 0 \\implies k = 52$.",
    "number": 10
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 14)$ is a factor of $P(x) = x^2 - (18)x + k$, find the value of $k$.",
    "options": [
      "$56$",
      "$63$",
      "$-59$",
      "$51$",
      "$71$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(14) = 14^2 - (18)(14) + k = 0 \\implies -4(14) + k = 0 \\implies k = 56$.",
    "number": 11
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 15)$ is a factor of $P(x) = x^2 - (19)x + k$, find the value of $k$.",
    "options": [
      "$60$",
      "$67$",
      "$-63$",
      "$55$",
      "$75$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(15) = 15^2 - (19)(15) + k = 0 \\implies -4(15) + k = 0 \\implies k = 60$.",
    "number": 12
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 16)$ is a factor of $P(x) = x^2 - (20)x + k$, find the value of $k$.",
    "options": [
      "$64$",
      "$71$",
      "$-67$",
      "$59$",
      "$79$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(16) = 16^2 - (20)(16) + k = 0 \\implies -4(16) + k = 0 \\implies k = 64$.",
    "number": 13
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 17)$ is a factor of $P(x) = x^2 - (21)x + k$, find the value of $k$.",
    "options": [
      "$68$",
      "$75$",
      "$-71$",
      "$63$",
      "$83$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(17) = 17^2 - (21)(17) + k = 0 \\implies -4(17) + k = 0 \\implies k = 68$.",
    "number": 14
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 18)$ is a factor of $P(x) = x^2 - (22)x + k$, find the value of $k$.",
    "options": [
      "$72$",
      "$79$",
      "$-75$",
      "$67$",
      "$87$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(18) = 18^2 - (22)(18) + k = 0 \\implies -4(18) + k = 0 \\implies k = 72$.",
    "number": 15
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 19)$ is a factor of $P(x) = x^2 - (23)x + k$, find the value of $k$.",
    "options": [
      "$76$",
      "$83$",
      "$-79$",
      "$71$",
      "$91$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(19) = 19^2 - (23)(19) + k = 0 \\implies -4(19) + k = 0 \\implies k = 76$.",
    "number": 16
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 20)$ is a factor of $P(x) = x^2 - (24)x + k$, find the value of $k$.",
    "options": [
      "$80$",
      "$87$",
      "$-83$",
      "$75$",
      "$95$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(20) = 20^2 - (24)(20) + k = 0 \\implies -4(20) + k = 0 \\implies k = 80$.",
    "number": 17
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 21)$ is a factor of $P(x) = x^2 - (25)x + k$, find the value of $k$.",
    "options": [
      "$84$",
      "$91$",
      "$-87$",
      "$79$",
      "$99$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(21) = 21^2 - (25)(21) + k = 0 \\implies -4(21) + k = 0 \\implies k = 84$.",
    "number": 18
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 22)$ is a factor of $P(x) = x^2 - (26)x + k$, find the value of $k$.",
    "options": [
      "$88$",
      "$95$",
      "$-91$",
      "$83$",
      "$103$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(22) = 22^2 - (26)(22) + k = 0 \\implies -4(22) + k = 0 \\implies k = 88$.",
    "number": 19
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 23)$ is a factor of $P(x) = x^2 - (27)x + k$, find the value of $k$.",
    "options": [
      "$92$",
      "$99$",
      "$-95$",
      "$87$",
      "$107$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(23) = 23^2 - (27)(23) + k = 0 \\implies -4(23) + k = 0 \\implies k = 92$.",
    "number": 20
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 24)$ is a factor of $P(x) = x^2 - (28)x + k$, find the value of $k$.",
    "options": [
      "$96$",
      "$103$",
      "$-99$",
      "$91$",
      "$111$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(24) = 24^2 - (28)(24) + k = 0 \\implies -4(24) + k = 0 \\implies k = 96$.",
    "number": 21
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 25)$ is a factor of $P(x) = x^2 - (29)x + k$, find the value of $k$.",
    "options": [
      "$100$",
      "$107$",
      "$-103$",
      "$95$",
      "$115$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(25) = 25^2 - (29)(25) + k = 0 \\implies -4(25) + k = 0 \\implies k = 100$.",
    "number": 22
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 26)$ is a factor of $P(x) = x^2 - (30)x + k$, find the value of $k$.",
    "options": [
      "$104$",
      "$111$",
      "$-107$",
      "$99$",
      "$119$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(26) = 26^2 - (30)(26) + k = 0 \\implies -4(26) + k = 0 \\implies k = 104$.",
    "number": 23
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 27)$ is a factor of $P(x) = x^2 - (31)x + k$, find the value of $k$.",
    "options": [
      "$108$",
      "$115$",
      "$-111$",
      "$103$",
      "$123$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(27) = 27^2 - (31)(27) + k = 0 \\implies -4(27) + k = 0 \\implies k = 108$.",
    "number": 24
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 28)$ is a factor of $P(x) = x^2 - (32)x + k$, find the value of $k$.",
    "options": [
      "$112$",
      "$119$",
      "$-115$",
      "$107$",
      "$127$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(28) = 28^2 - (32)(28) + k = 0 \\implies -4(28) + k = 0 \\implies k = 112$.",
    "number": 25
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 29)$ is a factor of $P(x) = x^2 - (33)x + k$, find the value of $k$.",
    "options": [
      "$116$",
      "$123$",
      "$-119$",
      "$111$",
      "$131$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(29) = 29^2 - (33)(29) + k = 0 \\implies -4(29) + k = 0 \\implies k = 116$.",
    "number": 26
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 30)$ is a factor of $P(x) = x^2 - (34)x + k$, find the value of $k$.",
    "options": [
      "$120$",
      "$127$",
      "$-123$",
      "$115$",
      "$135$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(30) = 30^2 - (34)(30) + k = 0 \\implies -4(30) + k = 0 \\implies k = 120$.",
    "number": 27
  }
];

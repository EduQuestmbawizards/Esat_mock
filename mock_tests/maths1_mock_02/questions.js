const QUESTIONS = [
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 31)$ is a factor of $P(x) = x^2 - (35)x + k$, find the value of $k$.",
    "options": [
      "$124$",
      "$131$",
      "$-127$",
      "$119$",
      "$139$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(31) = 31^2 - (35)(31) + k = 0 \\implies -4(31) + k = 0 \\implies k = 124$.",
    "number": 1
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 32)$ is a factor of $P(x) = x^2 - (36)x + k$, find the value of $k$.",
    "options": [
      "$128$",
      "$135$",
      "$-131$",
      "$123$",
      "$143$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(32) = 32^2 - (36)(32) + k = 0 \\implies -4(32) + k = 0 \\implies k = 128$.",
    "number": 2
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 33)$ is a factor of $P(x) = x^2 - (37)x + k$, find the value of $k$.",
    "options": [
      "$132$",
      "$139$",
      "$-135$",
      "$127$",
      "$147$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(33) = 33^2 - (37)(33) + k = 0 \\implies -4(33) + k = 0 \\implies k = 132$.",
    "number": 3
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 34)$ is a factor of $P(x) = x^2 - (38)x + k$, find the value of $k$.",
    "options": [
      "$136$",
      "$143$",
      "$-139$",
      "$131$",
      "$151$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(34) = 34^2 - (38)(34) + k = 0 \\implies -4(34) + k = 0 \\implies k = 136$.",
    "number": 4
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 35)$ is a factor of $P(x) = x^2 - (39)x + k$, find the value of $k$.",
    "options": [
      "$140$",
      "$147$",
      "$-143$",
      "$135$",
      "$155$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(35) = 35^2 - (39)(35) + k = 0 \\implies -4(35) + k = 0 \\implies k = 140$.",
    "number": 5
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 36)$ is a factor of $P(x) = x^2 - (40)x + k$, find the value of $k$.",
    "options": [
      "$144$",
      "$151$",
      "$-147$",
      "$139$",
      "$159$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(36) = 36^2 - (40)(36) + k = 0 \\implies -4(36) + k = 0 \\implies k = 144$.",
    "number": 6
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 37)$ is a factor of $P(x) = x^2 - (41)x + k$, find the value of $k$.",
    "options": [
      "$148$",
      "$155$",
      "$-151$",
      "$143$",
      "$163$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(37) = 37^2 - (41)(37) + k = 0 \\implies -4(37) + k = 0 \\implies k = 148$.",
    "number": 7
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 38)$ is a factor of $P(x) = x^2 - (42)x + k$, find the value of $k$.",
    "options": [
      "$152$",
      "$159$",
      "$-155$",
      "$147$",
      "$167$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(38) = 38^2 - (42)(38) + k = 0 \\implies -4(38) + k = 0 \\implies k = 152$.",
    "number": 8
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 39)$ is a factor of $P(x) = x^2 - (43)x + k$, find the value of $k$.",
    "options": [
      "$156$",
      "$163$",
      "$-159$",
      "$151$",
      "$171$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(39) = 39^2 - (43)(39) + k = 0 \\implies -4(39) + k = 0 \\implies k = 156$.",
    "number": 9
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 40)$ is a factor of $P(x) = x^2 - (44)x + k$, find the value of $k$.",
    "options": [
      "$160$",
      "$167$",
      "$-163$",
      "$155$",
      "$175$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(40) = 40^2 - (44)(40) + k = 0 \\implies -4(40) + k = 0 \\implies k = 160$.",
    "number": 10
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 41)$ is a factor of $P(x) = x^2 - (45)x + k$, find the value of $k$.",
    "options": [
      "$164$",
      "$171$",
      "$-167$",
      "$159$",
      "$179$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(41) = 41^2 - (45)(41) + k = 0 \\implies -4(41) + k = 0 \\implies k = 164$.",
    "number": 11
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $4\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{4^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{4^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$4^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{4\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{4^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(4)(4)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{4^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 12
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $5\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{5^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{5^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$5^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{5\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{5^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(5)(5)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{5^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 13
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $6\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{6^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{6^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$6^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{6\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{6^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(6)(6)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{6^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 14
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $7\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{7^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{7^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$7^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{7\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{7^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(7)(7)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{7^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 15
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $8\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{8^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{8^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$8^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{8\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{8^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(8)(8)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{8^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 16
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $9\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{9^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{9^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$9^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{9\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{9^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(9)(9)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{9^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 17
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $10\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{10^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{10^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$10^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{10\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{10^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(10)(10)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{10^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 18
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $11\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{11^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{11^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$11^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{11\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{11^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(11)(11)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{11^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 19
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $12\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{12^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{12^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$12^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{12\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{12^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(12)(12)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{12^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 20
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $13\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{13^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{13^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$13^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{13\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{13^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(13)(13)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{13^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 21
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $14\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{14^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{14^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$14^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{14\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{14^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(14)(14)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{14^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 22
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $15\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{15^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{15^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$15^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{15\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{15^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(15)(15)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{15^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 23
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $16\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{16^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{16^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$16^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{16\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{16^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(16)(16)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{16^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 24
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $17\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{17^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{17^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$17^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{17\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{17^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(17)(17)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{17^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 25
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $18\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{18^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{18^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$18^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{18\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{18^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(18)(18)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{18^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 26
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $19\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{19^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{19^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$19^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{19\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{19^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(19)(19)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{19^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 27
  }
];

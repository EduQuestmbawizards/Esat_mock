const QUESTIONS = [
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $20\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{20^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{20^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$20^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{20\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{20^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(20)(20)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{20^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 1
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $21\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{21^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{21^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$21^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{21\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{21^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(21)(21)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{21^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 2
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $22\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{22^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{22^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$22^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{22\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{22^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(22)(22)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{22^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 3
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $23\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{23^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{23^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$23^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{23\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{23^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(23)(23)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{23^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 4
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $24\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{24^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{24^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$24^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{24\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{24^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(24)(24)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{24^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 5
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $25\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{25^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{25^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$25^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{25\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{25^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(25)(25)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{25^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 6
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $26\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{26^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{26^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$26^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{26\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{26^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(26)(26)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{26^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 7
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $27\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{27^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{27^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$27^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{27\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{27^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(27)(27)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{27^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 8
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $28\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{28^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{28^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$28^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{28\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{28^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(28)(28)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{28^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 9
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $29\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{29^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{29^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$29^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{29\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{29^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(29)(29)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{29^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 10
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $30\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{30^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{30^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$30^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{30\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{30^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(30)(30)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{30^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 11
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $31\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{31^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{31^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$31^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{31\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{31^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(31)(31)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{31^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 12
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $32\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{32^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{32^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$32^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{32\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{32^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(32)(32)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{32^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 13
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $33\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{33^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{33^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$33^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{33\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{33^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(33)(33)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{33^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 14
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $34\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{34^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{34^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$34^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{34\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{34^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(34)(34)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{34^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 15
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $35\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{35^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{35^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$35^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{35\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{35^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(35)(35)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{35^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 16
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $36\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{36^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{36^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$36^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{36\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{36^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(36)(36)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{36^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 17
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $37\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{37^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{37^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$37^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{37\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{37^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(37)(37)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{37^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 18
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $38\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{38^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{38^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$38^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{38\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{38^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(38)(38)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{38^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 19
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $39\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{39^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{39^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$39^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{39\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{39^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(39)(39)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{39^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 20
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $40\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{40^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{40^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$40^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{40\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{40^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(40)(40)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{40^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 21
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $41\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{41^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{41^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$41^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{41\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{41^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(41)(41)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{41^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 22
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $42\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{42^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{42^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$42^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{42\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{42^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(42)(42)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{42^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 23
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $43\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{43^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{43^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$43^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{43\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{43^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(43)(43)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{43^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 24
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $44\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{44^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{44^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$44^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{44\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{44^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(44)(44)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{44^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 25
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $45\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{45^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{45^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$45^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{45\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{45^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(45)(45)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{45^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 26
  },
  {
    "module": "Mathematics 1",
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "question": "In an equilateral triangle of side length $46\\text{ cm}$, calculate its exact area.",
    "options": [
      "$\\frac{46^2\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{46^2\\sqrt{3}}{2}\\text{ cm}^2$",
      "$46^2\\sqrt{3}\\text{ cm}^2$",
      "$\\frac{46\\sqrt{3}}{4}\\text{ cm}^2$",
      "$\\frac{46^2}{4}\\text{ cm}^2$"
    ],
    "answer": 0,
    "explanation": "Area $= \\frac{1}{2} a b \\sin(60^\\circ) = \\frac{1}{2}(46)(46)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{46^2\\sqrt{3}}{4}\\text{ cm}^2$.",
    "number": 27
  }
];

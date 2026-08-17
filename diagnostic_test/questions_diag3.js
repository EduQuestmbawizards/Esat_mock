const QUESTIONS = [
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 17)^2 + (y - 19)^2 = 324$. What is its circumference?",
    "options": [
      "$36\\pi$",
      "$331\\pi$",
      "$33\\pi$",
      "$47\\pi$",
      "$43\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{324} = 18$. Circumference $= 2\\pi r = 36\\pi$.",
    "number": 1
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 18)^2 + (y - 20)^2 = 361$. What is its circumference?",
    "options": [
      "$38\\pi$",
      "$368\\pi$",
      "$34\\pi$",
      "$49\\pi$",
      "$44\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{361} = 19$. Circumference $= 2\\pi r = 38\\pi$.",
    "number": 2
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 19)^2 + (y - 21)^2 = 400$. What is its circumference?",
    "options": [
      "$40\\pi$",
      "$407\\pi$",
      "$35\\pi$",
      "$51\\pi$",
      "$45\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{400} = 20$. Circumference $= 2\\pi r = 40\\pi$.",
    "number": 3
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 20)^2 + (y - 22)^2 = 441$. What is its circumference?",
    "options": [
      "$42\\pi$",
      "$448\\pi$",
      "$36\\pi$",
      "$53\\pi$",
      "$46\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{441} = 21$. Circumference $= 2\\pi r = 42\\pi$.",
    "number": 4
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 21)^2 + (y - 23)^2 = 484$. What is its circumference?",
    "options": [
      "$44\\pi$",
      "$491\\pi$",
      "$37\\pi$",
      "$55\\pi$",
      "$47\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{484} = 22$. Circumference $= 2\\pi r = 44\\pi$.",
    "number": 5
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 22)^2 + (y - 24)^2 = 529$. What is its circumference?",
    "options": [
      "$46\\pi$",
      "$536\\pi$",
      "$38\\pi$",
      "$57\\pi$",
      "$48\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{529} = 23$. Circumference $= 2\\pi r = 46\\pi$.",
    "number": 6
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 23)^2 + (y - 25)^2 = 576$. What is its circumference?",
    "options": [
      "$48\\pi$",
      "$583\\pi$",
      "$39\\pi$",
      "$59\\pi$",
      "$49\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{576} = 24$. Circumference $= 2\\pi r = 48\\pi$.",
    "number": 7
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 24)^2 + (y - 26)^2 = 625$. What is its circumference?",
    "options": [
      "$50\\pi$",
      "$632\\pi$",
      "$40\\pi$",
      "$61\\pi$",
      "$\\text{Option } E$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{625} = 25$. Circumference $= 2\\pi r = 50\\pi$.",
    "number": 8
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 25)^2 + (y - 27)^2 = 676$. What is its circumference?",
    "options": [
      "$52\\pi$",
      "$683\\pi$",
      "$41\\pi$",
      "$63\\pi$",
      "$51\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{676} = 26$. Circumference $= 2\\pi r = 52\\pi$.",
    "number": 9
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 26)^2 + (y - 28)^2 = 729$. What is its circumference?",
    "options": [
      "$54\\pi$",
      "$736\\pi$",
      "$42\\pi$",
      "$65\\pi$",
      "$52\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{729} = 27$. Circumference $= 2\\pi r = 54\\pi$.",
    "number": 10
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 27)^2 + (y - 29)^2 = 784$. What is its circumference?",
    "options": [
      "$56\\pi$",
      "$791\\pi$",
      "$43\\pi$",
      "$67\\pi$",
      "$53\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{784} = 28$. Circumference $= 2\\pi r = 56\\pi$.",
    "number": 11
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 28)^2 + (y - 30)^2 = 841$. What is its circumference?",
    "options": [
      "$58\\pi$",
      "$848\\pi$",
      "$44\\pi$",
      "$69\\pi$",
      "$54\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{841} = 29$. Circumference $= 2\\pi r = 58\\pi$.",
    "number": 12
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 29)^2 + (y - 31)^2 = 900$. What is its circumference?",
    "options": [
      "$60\\pi$",
      "$907\\pi$",
      "$45\\pi$",
      "$71\\pi$",
      "$55\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{900} = 30$. Circumference $= 2\\pi r = 60\\pi$.",
    "number": 13
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 30)^2 + (y - 32)^2 = 961$. What is its circumference?",
    "options": [
      "$62\\pi$",
      "$968\\pi$",
      "$46\\pi$",
      "$73\\pi$",
      "$56\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{961} = 31$. Circumference $= 2\\pi r = 62\\pi$.",
    "number": 14
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 31)^2 + (y - 33)^2 = 1024$. What is its circumference?",
    "options": [
      "$64\\pi$",
      "$1031\\pi$",
      "$47\\pi$",
      "$75\\pi$",
      "$57\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1024} = 32$. Circumference $= 2\\pi r = 64\\pi$.",
    "number": 15
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 32)^2 + (y - 34)^2 = 1089$. What is its circumference?",
    "options": [
      "$66\\pi$",
      "$1096\\pi$",
      "$48\\pi$",
      "$77\\pi$",
      "$58\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1089} = 33$. Circumference $= 2\\pi r = 66\\pi$.",
    "number": 16
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 33)^2 + (y - 35)^2 = 1156$. What is its circumference?",
    "options": [
      "$68\\pi$",
      "$1163\\pi$",
      "$49\\pi$",
      "$79\\pi$",
      "$59\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1156} = 34$. Circumference $= 2\\pi r = 68\\pi$.",
    "number": 17
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 34)^2 + (y - 36)^2 = 1225$. What is its circumference?",
    "options": [
      "$70\\pi$",
      "$1232\\pi$",
      "$50\\pi$",
      "$81\\pi$",
      "$60\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1225} = 35$. Circumference $= 2\\pi r = 70\\pi$.",
    "number": 18
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 35)^2 + (y - 37)^2 = 1296$. What is its circumference?",
    "options": [
      "$72\\pi$",
      "$1303\\pi$",
      "$51\\pi$",
      "$83\\pi$",
      "$61\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1296} = 36$. Circumference $= 2\\pi r = 72\\pi$.",
    "number": 19
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 36)^2 + (y - 38)^2 = 1369$. What is its circumference?",
    "options": [
      "$74\\pi$",
      "$1376\\pi$",
      "$52\\pi$",
      "$85\\pi$",
      "$62\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1369} = 37$. Circumference $= 2\\pi r = 74\\pi$.",
    "number": 20
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 37)^2 + (y - 39)^2 = 1444$. What is its circumference?",
    "options": [
      "$76\\pi$",
      "$1451\\pi$",
      "$53\\pi$",
      "$87\\pi$",
      "$63\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1444} = 38$. Circumference $= 2\\pi r = 76\\pi$.",
    "number": 21
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 38)^2 + (y - 40)^2 = 1521$. What is its circumference?",
    "options": [
      "$78\\pi$",
      "$1528\\pi$",
      "$54\\pi$",
      "$89\\pi$",
      "$64\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1521} = 39$. Circumference $= 2\\pi r = 78\\pi$.",
    "number": 22
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 39)^2 + (y - 41)^2 = 1600$. What is its circumference?",
    "options": [
      "$80\\pi$",
      "$1607\\pi$",
      "$55\\pi$",
      "$91\\pi$",
      "$65\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1600} = 40$. Circumference $= 2\\pi r = 80\\pi$.",
    "number": 23
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 40)^2 + (y - 42)^2 = 1681$. What is its circumference?",
    "options": [
      "$82\\pi$",
      "$1688\\pi$",
      "$56\\pi$",
      "$93\\pi$",
      "$66\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1681} = 41$. Circumference $= 2\\pi r = 82\\pi$.",
    "number": 24
  },
  {
    "module": "Mathematics 1",
    "topic": "Circles",
    "difficulty": "Hard",
    "question": "A circle has equation $(x - 41)^2 + (y - 43)^2 = 1764$. What is its circumference?",
    "options": [
      "$84\\pi$",
      "$1771\\pi$",
      "$57\\pi$",
      "$95\\pi$",
      "$67\\pi$"
    ],
    "answer": 0,
    "explanation": "Radius $r = \\sqrt{1764} = 42$. Circumference $= 2\\pi r = 84\\pi$.",
    "number": 25
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 2)$ is a factor of $P(x) = x^2 - (6)x + k$, find the value of $k$.",
    "options": [
      "$8$",
      "$15$",
      "$-11$",
      "$3$",
      "$23$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(2) = 2^2 - (6)(2) + k = 0 \\implies -4(2) + k = 0 \\implies k = 8$.",
    "number": 26
  },
  {
    "module": "Mathematics 1",
    "topic": "Polynomials",
    "difficulty": "Medium",
    "question": "If $(x - 3)$ is a factor of $P(x) = x^2 - (7)x + k$, find the value of $k$.",
    "options": [
      "$12$",
      "$19$",
      "$-15$",
      "$7$",
      "$27$"
    ],
    "answer": 0,
    "explanation": "By factor theorem: $P(3) = 3^2 - (7)(3) + k = 0 \\implies -4(3) + k = 0 \\implies k = 12$.",
    "number": 27
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{5} = 5\\mathbf{i} + 6\\mathbf{j} + 7\\mathbf{k}$.",
    "options": [
      "$\\sqrt{110}$",
      "$110$",
      "$\\sqrt{119}$",
      "$18$",
      "$\\frac{\\sqrt{110}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{5^2 + 6^2 + 7^2} = \\sqrt{110}$.",
    "number": 28
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{6} = 6\\mathbf{i} + 7\\mathbf{j} + 8\\mathbf{k}$.",
    "options": [
      "$\\sqrt{149}$",
      "$149$",
      "$\\sqrt{158}$",
      "$21$",
      "$\\frac{\\sqrt{149}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{6^2 + 7^2 + 8^2} = \\sqrt{149}$.",
    "number": 29
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{7} = 7\\mathbf{i} + 8\\mathbf{j} + 9\\mathbf{k}$.",
    "options": [
      "$\\sqrt{194}$",
      "$194$",
      "$\\sqrt{203}$",
      "$24$",
      "$\\frac{\\sqrt{194}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{7^2 + 8^2 + 9^2} = \\sqrt{194}$.",
    "number": 30
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{8} = 8\\mathbf{i} + 9\\mathbf{j} + 10\\mathbf{k}$.",
    "options": [
      "$\\sqrt{245}$",
      "$245$",
      "$\\sqrt{254}$",
      "$27$",
      "$\\frac{\\sqrt{245}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{8^2 + 9^2 + 10^2} = \\sqrt{245}$.",
    "number": 31
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{9} = 9\\mathbf{i} + 10\\mathbf{j} + 11\\mathbf{k}$.",
    "options": [
      "$\\sqrt{302}$",
      "$302$",
      "$\\sqrt{311}$",
      "$30$",
      "$\\frac{\\sqrt{302}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{9^2 + 10^2 + 11^2} = \\sqrt{302}$.",
    "number": 32
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{10} = 10\\mathbf{i} + 11\\mathbf{j} + 12\\mathbf{k}$.",
    "options": [
      "$\\sqrt{365}$",
      "$365$",
      "$\\sqrt{374}$",
      "$33$",
      "$\\frac{\\sqrt{365}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{10^2 + 11^2 + 12^2} = \\sqrt{365}$.",
    "number": 33
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{11} = 11\\mathbf{i} + 12\\mathbf{j} + 13\\mathbf{k}$.",
    "options": [
      "$\\sqrt{434}$",
      "$434$",
      "$\\sqrt{443}$",
      "$36$",
      "$\\frac{\\sqrt{434}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{11^2 + 12^2 + 13^2} = \\sqrt{434}$.",
    "number": 34
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{12} = 12\\mathbf{i} + 13\\mathbf{j} + 14\\mathbf{k}$.",
    "options": [
      "$\\sqrt{509}$",
      "$509$",
      "$\\sqrt{518}$",
      "$39$",
      "$\\frac{\\sqrt{509}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{12^2 + 13^2 + 14^2} = \\sqrt{509}$.",
    "number": 35
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{13} = 13\\mathbf{i} + 14\\mathbf{j} + 15\\mathbf{k}$.",
    "options": [
      "$\\sqrt{590}$",
      "$590$",
      "$\\sqrt{599}$",
      "$42$",
      "$\\frac{\\sqrt{590}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{13^2 + 14^2 + 15^2} = \\sqrt{590}$.",
    "number": 36
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{14} = 14\\mathbf{i} + 15\\mathbf{j} + 16\\mathbf{k}$.",
    "options": [
      "$\\sqrt{677}$",
      "$677$",
      "$\\sqrt{686}$",
      "$45$",
      "$\\frac{\\sqrt{677}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{14^2 + 15^2 + 16^2} = \\sqrt{677}$.",
    "number": 37
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{15} = 15\\mathbf{i} + 16\\mathbf{j} + 17\\mathbf{k}$.",
    "options": [
      "$\\sqrt{770}$",
      "$770$",
      "$\\sqrt{779}$",
      "$48$",
      "$\\frac{\\sqrt{770}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{15^2 + 16^2 + 17^2} = \\sqrt{770}$.",
    "number": 38
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{16} = 16\\mathbf{i} + 17\\mathbf{j} + 18\\mathbf{k}$.",
    "options": [
      "$\\sqrt{869}$",
      "$869$",
      "$\\sqrt{878}$",
      "$51$",
      "$\\frac{\\sqrt{869}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{16^2 + 17^2 + 18^2} = \\sqrt{869}$.",
    "number": 39
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{17} = 17\\mathbf{i} + 18\\mathbf{j} + 19\\mathbf{k}$.",
    "options": [
      "$\\sqrt{974}$",
      "$974$",
      "$\\sqrt{983}$",
      "$54$",
      "$\\frac{\\sqrt{974}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{17^2 + 18^2 + 19^2} = \\sqrt{974}$.",
    "number": 40
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{18} = 18\\mathbf{i} + 19\\mathbf{j} + 20\\mathbf{k}$.",
    "options": [
      "$\\sqrt{1085}$",
      "$1085$",
      "$\\sqrt{1094}$",
      "$57$",
      "$\\frac{\\sqrt{1085}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{18^2 + 19^2 + 20^2} = \\sqrt{1085}$.",
    "number": 41
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{19} = 19\\mathbf{i} + 20\\mathbf{j} + 21\\mathbf{k}$.",
    "options": [
      "$\\sqrt{1202}$",
      "$1202$",
      "$\\sqrt{1211}$",
      "$60$",
      "$\\frac{\\sqrt{1202}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{19^2 + 20^2 + 21^2} = \\sqrt{1202}$.",
    "number": 42
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{20} = 20\\mathbf{i} + 21\\mathbf{j} + 22\\mathbf{k}$.",
    "options": [
      "$\\sqrt{1325}$",
      "$1325$",
      "$\\sqrt{1334}$",
      "$63$",
      "$\\frac{\\sqrt{1325}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{20^2 + 21^2 + 22^2} = \\sqrt{1325}$.",
    "number": 43
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{21} = 21\\mathbf{i} + 22\\mathbf{j} + 23\\mathbf{k}$.",
    "options": [
      "$\\sqrt{1454}$",
      "$1454$",
      "$\\sqrt{1463}$",
      "$66$",
      "$\\frac{\\sqrt{1454}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{21^2 + 22^2 + 23^2} = \\sqrt{1454}$.",
    "number": 44
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{22} = 22\\mathbf{i} + 23\\mathbf{j} + 24\\mathbf{k}$.",
    "options": [
      "$\\sqrt{1589}$",
      "$1589$",
      "$\\sqrt{1598}$",
      "$69$",
      "$\\frac{\\sqrt{1589}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{22^2 + 23^2 + 24^2} = \\sqrt{1589}$.",
    "number": 45
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{23} = 23\\mathbf{i} + 24\\mathbf{j} + 25\\mathbf{k}$.",
    "options": [
      "$\\sqrt{1730}$",
      "$1730$",
      "$\\sqrt{1739}$",
      "$72$",
      "$\\frac{\\sqrt{1730}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{23^2 + 24^2 + 25^2} = \\sqrt{1730}$.",
    "number": 46
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{24} = 24\\mathbf{i} + 25\\mathbf{j} + 26\\mathbf{k}$.",
    "options": [
      "$\\sqrt{1877}$",
      "$1877$",
      "$\\sqrt{1886}$",
      "$75$",
      "$\\frac{\\sqrt{1877}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{24^2 + 25^2 + 26^2} = \\sqrt{1877}$.",
    "number": 47
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{25} = 25\\mathbf{i} + 26\\mathbf{j} + 27\\mathbf{k}$.",
    "options": [
      "$\\sqrt{2030}$",
      "$2030$",
      "$\\sqrt{2039}$",
      "$78$",
      "$\\frac{\\sqrt{2030}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{25^2 + 26^2 + 27^2} = \\sqrt{2030}$.",
    "number": 48
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{26} = 26\\mathbf{i} + 27\\mathbf{j} + 28\\mathbf{k}$.",
    "options": [
      "$\\sqrt{2189}$",
      "$2189$",
      "$\\sqrt{2198}$",
      "$81$",
      "$\\frac{\\sqrt{2189}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{26^2 + 27^2 + 28^2} = \\sqrt{2189}$.",
    "number": 49
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{27} = 27\\mathbf{i} + 28\\mathbf{j} + 29\\mathbf{k}$.",
    "options": [
      "$\\sqrt{2354}$",
      "$2354$",
      "$\\sqrt{2363}$",
      "$84$",
      "$\\frac{\\sqrt{2354}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{27^2 + 28^2 + 29^2} = \\sqrt{2354}$.",
    "number": 50
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{28} = 28\\mathbf{i} + 29\\mathbf{j} + 30\\mathbf{k}$.",
    "options": [
      "$\\sqrt{2525}$",
      "$2525$",
      "$\\sqrt{2534}$",
      "$87$",
      "$\\frac{\\sqrt{2525}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{28^2 + 29^2 + 30^2} = \\sqrt{2525}$.",
    "number": 51
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{29} = 29\\mathbf{i} + 30\\mathbf{j} + 31\\mathbf{k}$.",
    "options": [
      "$\\sqrt{2702}$",
      "$2702$",
      "$\\sqrt{2711}$",
      "$90$",
      "$\\frac{\\sqrt{2702}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{29^2 + 30^2 + 31^2} = \\sqrt{2702}$.",
    "number": 52
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{30} = 30\\mathbf{i} + 31\\mathbf{j} + 32\\mathbf{k}$.",
    "options": [
      "$\\sqrt{2885}$",
      "$2885$",
      "$\\sqrt{2894}$",
      "$93$",
      "$\\frac{\\sqrt{2885}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{30^2 + 31^2 + 32^2} = \\sqrt{2885}$.",
    "number": 53
  },
  {
    "module": "Mathematics 2",
    "topic": "3D Vectors",
    "difficulty": "Medium",
    "question": "Find the magnitude of the 3D vector $\\mathbf{v}_{31} = 31\\mathbf{i} + 32\\mathbf{j} + 33\\mathbf{k}$.",
    "options": [
      "$\\sqrt{3074}$",
      "$3074$",
      "$\\sqrt{3083}$",
      "$96$",
      "$\\frac{\\sqrt{3074}}{2}$"
    ],
    "answer": 0,
    "explanation": "$|\\mathbf{v}| = \\sqrt{31^2 + 32^2 + 33^2} = \\sqrt{3074}$.",
    "number": 54
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 5 contains $20\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$30\\%$",
      "$20\\%$",
      "$41\\%$",
      "$80\\%$",
      "$48\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 20\\% \\implies \\text{A}+\\text{T} = 40\\%$. Remaining $\\text{G}+\\text{C} = 60\\% \\implies \\text{C} = 30\\%$.",
    "number": 55
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 6 contains $21\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$29\\%$",
      "$21\\%$",
      "$43\\%$",
      "$79\\%$",
      "$47\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 21\\% \\implies \\text{A}+\\text{T} = 42\\%$. Remaining $\\text{G}+\\text{C} = 58\\% \\implies \\text{C} = 29\\%$.",
    "number": 56
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 7 contains $22\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$28\\%$",
      "$22\\%$",
      "$45\\%$",
      "$78\\%$",
      "$46\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 22\\% \\implies \\text{A}+\\text{T} = 44\\%$. Remaining $\\text{G}+\\text{C} = 56\\% \\implies \\text{C} = 28\\%$.",
    "number": 57
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 8 contains $23\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$27\\%$",
      "$23\\%$",
      "$47\\%$",
      "$77\\%$",
      "$45\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 23\\% \\implies \\text{A}+\\text{T} = 46\\%$. Remaining $\\text{G}+\\text{C} = 54\\% \\implies \\text{C} = 27\\%$.",
    "number": 58
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 9 contains $24\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$26\\%$",
      "$24\\%$",
      "$49\\%$",
      "$76\\%$",
      "$44\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 24\\% \\implies \\text{A}+\\text{T} = 48\\%$. Remaining $\\text{G}+\\text{C} = 52\\% \\implies \\text{C} = 26\\%$.",
    "number": 59
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 10 contains $26\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$24\\%$",
      "$26\\%$",
      "$53\\%$",
      "$74\\%$",
      "$42\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 26\\% \\implies \\text{A}+\\text{T} = 52\\%$. Remaining $\\text{G}+\\text{C} = 48\\% \\implies \\text{C} = 24\\%$.",
    "number": 60
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 11 contains $26\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$24\\%$",
      "$26\\%$",
      "$53\\%$",
      "$74\\%$",
      "$42\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 26\\% \\implies \\text{A}+\\text{T} = 52\\%$. Remaining $\\text{G}+\\text{C} = 48\\% \\implies \\text{C} = 24\\%$.",
    "number": 61
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 12 contains $27\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$23\\%$",
      "$27\\%$",
      "$55\\%$",
      "$73\\%$",
      "$41\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 27\\% \\implies \\text{A}+\\text{T} = 54\\%$. Remaining $\\text{G}+\\text{C} = 46\\% \\implies \\text{C} = 23\\%$.",
    "number": 62
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 13 contains $28\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$22\\%$",
      "$28\\%$",
      "$57\\%$",
      "$72\\%$",
      "$40\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 28\\% \\implies \\text{A}+\\text{T} = 56\\%$. Remaining $\\text{G}+\\text{C} = 44\\% \\implies \\text{C} = 22\\%$.",
    "number": 63
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 14 contains $29\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$21\\%$",
      "$29\\%$",
      "$59\\%$",
      "$71\\%$",
      "$39\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 29\\% \\implies \\text{A}+\\text{T} = 58\\%$. Remaining $\\text{G}+\\text{C} = 42\\% \\implies \\text{C} = 21\\%$.",
    "number": 64
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 15 contains $30\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$20\\%$",
      "$30\\%$",
      "$61\\%$",
      "$70\\%$",
      "$38\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 30\\% \\implies \\text{A}+\\text{T} = 60\\%$. Remaining $\\text{G}+\\text{C} = 40\\% \\implies \\text{C} = 20\\%$.",
    "number": 65
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 16 contains $31\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$19\\%$",
      "$31\\%$",
      "$63\\%$",
      "$69\\%$",
      "$37\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 31\\% \\implies \\text{A}+\\text{T} = 62\\%$. Remaining $\\text{G}+\\text{C} = 38\\% \\implies \\text{C} = 19\\%$.",
    "number": 66
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 17 contains $32\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$18\\%$",
      "$32\\%$",
      "$65\\%$",
      "$68\\%$",
      "$36\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 32\\% \\implies \\text{A}+\\text{T} = 64\\%$. Remaining $\\text{G}+\\text{C} = 36\\% \\implies \\text{C} = 18\\%$.",
    "number": 67
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 18 contains $15\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$35\\%$",
      "$15\\%$",
      "$31\\%$",
      "$85\\%$",
      "$53\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 15\\% \\implies \\text{A}+\\text{T} = 30\\%$. Remaining $\\text{G}+\\text{C} = 70\\% \\implies \\text{C} = 35\\%$.",
    "number": 68
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 19 contains $16\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$34\\%$",
      "$16\\%$",
      "$33\\%$",
      "$84\\%$",
      "$52\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 16\\% \\implies \\text{A}+\\text{T} = 32\\%$. Remaining $\\text{G}+\\text{C} = 68\\% \\implies \\text{C} = 34\\%$.",
    "number": 69
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 20 contains $17\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$33\\%$",
      "$17\\%$",
      "$35\\%$",
      "$83\\%$",
      "$51\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 17\\% \\implies \\text{A}+\\text{T} = 34\\%$. Remaining $\\text{G}+\\text{C} = 66\\% \\implies \\text{C} = 33\\%$.",
    "number": 70
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 21 contains $18\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$32\\%$",
      "$18\\%$",
      "$37\\%$",
      "$82\\%$",
      "$50\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 18\\% \\implies \\text{A}+\\text{T} = 36\\%$. Remaining $\\text{G}+\\text{C} = 64\\% \\implies \\text{C} = 32\\%$.",
    "number": 71
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 22 contains $19\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$31\\%$",
      "$19\\%$",
      "$39\\%$",
      "$81\\%$",
      "$49\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 19\\% \\implies \\text{A}+\\text{T} = 38\\%$. Remaining $\\text{G}+\\text{C} = 62\\% \\implies \\text{C} = 31\\%$.",
    "number": 72
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 23 contains $20\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$30\\%$",
      "$20\\%$",
      "$41\\%$",
      "$80\\%$",
      "$48\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 20\\% \\implies \\text{A}+\\text{T} = 40\\%$. Remaining $\\text{G}+\\text{C} = 60\\% \\implies \\text{C} = 30\\%$.",
    "number": 73
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 24 contains $21\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$29\\%$",
      "$21\\%$",
      "$43\\%$",
      "$79\\%$",
      "$47\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 21\\% \\implies \\text{A}+\\text{T} = 42\\%$. Remaining $\\text{G}+\\text{C} = 58\\% \\implies \\text{C} = 29\\%$.",
    "number": 74
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 25 contains $22\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$28\\%$",
      "$22\\%$",
      "$45\\%$",
      "$78\\%$",
      "$46\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 22\\% \\implies \\text{A}+\\text{T} = 44\\%$. Remaining $\\text{G}+\\text{C} = 56\\% \\implies \\text{C} = 28\\%$.",
    "number": 75
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 26 contains $23\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$27\\%$",
      "$23\\%$",
      "$47\\%$",
      "$77\\%$",
      "$45\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 23\\% \\implies \\text{A}+\\text{T} = 46\\%$. Remaining $\\text{G}+\\text{C} = 54\\% \\implies \\text{C} = 27\\%$.",
    "number": 76
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 27 contains $24\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$26\\%$",
      "$24\\%$",
      "$49\\%$",
      "$76\\%$",
      "$44\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 24\\% \\implies \\text{A}+\\text{T} = 48\\%$. Remaining $\\text{G}+\\text{C} = 52\\% \\implies \\text{C} = 26\\%$.",
    "number": 77
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 28 contains $26\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$24\\%$",
      "$26\\%$",
      "$53\\%$",
      "$74\\%$",
      "$42\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 26\\% \\implies \\text{A}+\\text{T} = 52\\%$. Remaining $\\text{G}+\\text{C} = 48\\% \\implies \\text{C} = 24\\%$.",
    "number": 78
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 29 contains $26\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$24\\%$",
      "$26\\%$",
      "$53\\%$",
      "$74\\%$",
      "$42\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 26\\% \\implies \\text{A}+\\text{T} = 52\\%$. Remaining $\\text{G}+\\text{C} = 48\\% \\implies \\text{C} = 24\\%$.",
    "number": 79
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 30 contains $27\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$23\\%$",
      "$27\\%$",
      "$55\\%$",
      "$73\\%$",
      "$41\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 27\\% \\implies \\text{A}+\\text{T} = 54\\%$. Remaining $\\text{G}+\\text{C} = 46\\% \\implies \\text{C} = 23\\%$.",
    "number": 80
  },
  {
    "module": "Biology",
    "topic": "Molecular Genetics",
    "difficulty": "Medium",
    "question": "A double-stranded DNA molecule from organism 31 contains $28\\%$ adenine. Calculate the percentage of cytosine.",
    "options": [
      "$22\\%$",
      "$28\\%$",
      "$57\\%$",
      "$72\\%$",
      "$40\\%$"
    ],
    "answer": 0,
    "explanation": "By Chargaff's rules: $\\text{A} = \\text{T} = 28\\% \\implies \\text{A}+\\text{T} = 56\\%$. Remaining $\\text{G}+\\text{C} = 44\\% \\implies \\text{C} = 22\\%$.",
    "number": 81
  }
];

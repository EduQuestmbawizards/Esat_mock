const QUESTIONS = [
  {
    "type_tag": "M1_GEO_PERP_GRAD",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Find gradient perpendicular to $y = 2x + 9$.",
    "options": [
      "$-\\frac{1}{3}$",
      "$2$",
      "$-2$",
      "$\\frac{1}{2}$",
      "$-\\frac{1}{2}$"
    ],
    "answer": 4,
    "explanation": "$m_\\perp = -\\frac{1}{2}$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_CIRC_TANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Equation of vertical tangent to $x^2 + y^2 = 9$ at $(3, 0)$.",
    "options": [
      "$x = 9$",
      "$y = 3$",
      "$x = -3$",
      "$x = 3$",
      "$y = 0$"
    ],
    "answer": 3,
    "explanation": "Vertical tangent is $x = 3$.",
    "number": 2
  },
  {
    "type_tag": "M1_GEO_CIRC_EQ",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Cartesian equation of circle with centre $(1, -2)$ and radius $3$.",
    "options": [
      "$(x + 1)^2 + (y + 2)^2 = 9$",
      "$(x - 1)^2 + (y + 2)^2 = 9$",
      "$(x - 1)^2 + (y - 2)^2 = 9$",
      "$(x - 1)^2 + (y + 2)^2 = 3$",
      "$(x + 1)^2 + (y - 2)^2 = 9$"
    ],
    "answer": 1,
    "explanation": "$(x - 1)^2 + (y + 2)^2 = 9$.",
    "number": 3
  },
  {
    "type_tag": "M1_GEO_EXACT_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Exact value of $\\tan(45^\\circ) + \\cos(60^\\circ) + 1$.",
    "options": [
      "$1.5$",
      "$2.5$",
      "$3.0$",
      "$1.0$",
      "$2.0$"
    ],
    "answer": 1,
    "explanation": "$1 + 0.5 + 1 = 2.5$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_COS_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle ABC$, $b = 2, c = 3$, $\\angle A = 60^\\circ$. Find $a^2$.",
    "options": [
      "$19$",
      "$10$",
      "$6$",
      "$7$",
      "$13$"
    ],
    "answer": 3,
    "explanation": "$a^2 = 7$.",
    "number": 5
  },
  {
    "type_tag": "M1_GEO_SIN_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle PQR$, $\\frac{p}{\\sin(30^\\circ)} = 4$. Find $p$.",
    "options": [
      "$3$",
      "$8$",
      "$4$",
      "$1$",
      "$2$"
    ],
    "answer": 4,
    "explanation": "$p = 4 \\times 0.5 = 2$.",
    "number": 6
  },
  {
    "type_tag": "M1_GEO_TRI_AREA",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Area of triangle with sides $2\\text{ cm}$ and $6\\text{ cm}$ enclosing $30^\\circ$.",
    "options": [
      "$1.5\\text{ cm}^2$",
      "$5\\text{ cm}^2$",
      "$6\\text{ cm}^2$",
      "$12\\text{ cm}^2$",
      "$3\\text{ cm}^2$"
    ],
    "answer": 4,
    "explanation": "$\\text{Area} = 0.5 \\times 2 \\times 6 \\times 0.5 = 3\\text{ cm}^2$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_PYTHAG_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "If acute angle $\\theta$ has $\\sin\\theta = \\frac{3}{5}$, find $\\cos\\theta$.",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{1}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{5}{4}$",
      "$\\frac{4}{5}$"
    ],
    "answer": 4,
    "explanation": "$\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$.",
    "number": 8
  },
  {
    "type_tag": "M1_GEO_TRIG_SOL",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Hard",
    "question": "Number of distinct solutions to $\\sin(2x) = 0$ in the range $0 \\le x \\le \\pi$.",
    "options": [
      "$6$",
      "$4$",
      "$2$",
      "$3$",
      "$5$"
    ],
    "answer": 3,
    "explanation": "Solutions occur at $(2)x = 0, \\pi, 2\\pi, \\dots, 2\\pi$, giving $3$ solutions.",
    "number": 9
  },
  {
    "type_tag": "M1_GEO_ARC_LEN",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Arc length with radius $4\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$1\\pi\\text{ cm}$",
      "$2\\pi\\text{ cm}$",
      "$3\\pi\\text{ cm}$",
      "$4\\pi\\text{ cm}$",
      "$5\\pi\\text{ cm}$"
    ],
    "answer": 0,
    "explanation": "$s = 4 \\times \\frac{\\pi}{4} = 1\\pi\\text{ cm}$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_SECTOR_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Sector area with radius $2\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$\\frac{4\\pi}{2}\\text{ cm}^2$",
      "$\\frac{1\\pi}{2}\\text{ cm}^2$",
      "$8\\pi\\text{ cm}^2$",
      "$2\\pi\\text{ cm}^2$",
      "$\\frac{6\\pi}{4}\\text{ cm}^2$"
    ],
    "answer": 1,
    "explanation": "$A = \\frac{1\\pi}{2}\\text{ cm}^2$.",
    "number": 11
  },
  {
    "type_tag": "M1_GEO_DIST_2D",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Distance between $(0,0)$ and $(6, 8)$.",
    "options": [
      "$12$",
      "$10$",
      "$100$",
      "$8$",
      "$14$"
    ],
    "answer": 1,
    "explanation": "$d = \\sqrt{36 + 64} = 10$.",
    "number": 12
  },
  {
    "type_tag": "M1_GEO_MIDPT",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Midpoint of segment connecting $A(4, 0)$ and $B(0, 6)$.",
    "options": [
      "$(2, 3)$",
      "$(3, 2)$",
      "$(4, 6)$",
      "$(3, 3)$",
      "$(1, 1)$"
    ],
    "answer": 0,
    "explanation": "$M = (2, 3)$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_DBL_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Simplify $2\\sin(1\\theta)\\cos(1\\theta)$.",
    "options": [
      "$\\tan(2\\theta)$",
      "$\\sin(2\\theta)$",
      "$\\cos(2\\theta)$",
      "$\\sin^2(1\\theta)$",
      "$2\\sin(1\\theta)$"
    ],
    "answer": 1,
    "explanation": "$2\\sin(A)\\cos(A) = \\sin(2A) = \\sin(2\\theta)$.",
    "number": 14
  },
  {
    "type_tag": "M1_GEO_POLY_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Sum of interior angles of regular polygon with $5$ sides.",
    "options": [
      "$720^\\circ$",
      "$900^\\circ$",
      "$1080^\\circ$",
      "$540^\\circ$",
      "$360^\\circ$"
    ],
    "answer": 3,
    "explanation": "Sum $= 540^\\circ$.",
    "number": 15
  }
];

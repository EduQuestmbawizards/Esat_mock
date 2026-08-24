const QUESTIONS = [
  {
    "type_tag": "PHY_MECH_SUVAT_V",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Car accelerates from $2\\text{ m s}^{-1}$ at $2\\text{ m s}^{-2}$ for $3\\text{ s}$. Find final velocity $v$.",
    "options": [
      "$8\\text{ m s}^{-1}$",
      "$6\\text{ m s}^{-1}$",
      "$3\\text{ m s}^{-1}$",
      "$4\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$v = 2 + 6 = 8\\text{ m s}^{-1}$.",
    "number": 1
  },
  {
    "type_tag": "PHY_MECH_PROJECTILE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Ball launched horizontally at $10\\text{ m s}^{-1}$ from height $20\\text{ m}$ ($g=10$). Find horizontal range.",
    "options": [
      "$20\\text{ m}$",
      "$30\\text{ m}$",
      "$5\\text{ m}$",
      "$10\\text{ m}$",
      "$40\\text{ m}$"
    ],
    "answer": 0,
    "explanation": "Range $= ut = 10 \\times 2 = 20\\text{ m}$.",
    "number": 2
  },
  {
    "type_tag": "PHY_MECH_NEWTON2",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Net force on mass $2\\text{ kg}$ accelerating at $4\\text{ m s}^{-2}$.",
    "options": [
      "$9\\text{ N}$",
      "$7\\text{ N}$",
      "$5\\text{ N}$",
      "$8\\text{ N}$",
      "$6\\text{ N}$"
    ],
    "answer": 3,
    "explanation": "$F = ma = 8\\text{ N}$.",
    "number": 3
  },
  {
    "type_tag": "PHY_MECH_MOMENTUM",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Trolley of mass $2\\text{ kg}$ at $5\\text{ m s}^{-1}$ collides inelastically with stationary $3\\text{ kg}$ trolley. Common speed?",
    "options": [
      "$4\\text{ m s}^{-1}$",
      "$1\\text{ m s}^{-1}$",
      "$2\\text{ m s}^{-1}$",
      "$2.5\\text{ m s}^{-1}$",
      "$5\\text{ m s}^{-1}$"
    ],
    "answer": 2,
    "explanation": "$v = 2\\text{ m s}^{-1}$.",
    "number": 4
  },
  {
    "type_tag": "PHY_MECH_POWER",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Engine exerts force $50\\text{ N}$ at steady speed $4\\text{ m s}^{-1}$. Power output?",
    "options": [
      "$100\\text{ W}$",
      "$400\\text{ W}$",
      "$200\\text{ W}$",
      "$50\\text{ W}$",
      "$54\\text{ W}$"
    ],
    "answer": 2,
    "explanation": "$P = Fv = 200\\text{ W}$.",
    "number": 5
  },
  {
    "type_tag": "PHY_MECH_HOOKE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Elastic potential energy in spring with $k = 100\\text{ N m}^{-1}$ extended by $0.10\\text{ m}$.",
    "options": [
      "$0.25\\text{ J}$",
      "$1.0\\text{ J}$",
      "$10.0\\text{ J}$",
      "$0.5\\text{ J}$",
      "$5.0\\text{ J}$"
    ],
    "answer": 3,
    "explanation": "$E = 0.5 k x^2 = 0.5\\text{ J}$.",
    "number": 6
  },
  {
    "type_tag": "PHY_MECH_YOUNG_MOD",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Stress $\\sigma$ is $200\\text{ MPa}$, strain $\\varepsilon$ is $0.001$. Young modulus $E$?",
    "options": [
      "$200.0\\text{ GPa}$",
      "$240.0\\text{ GPa}$",
      "$280.0\\text{ GPa}$",
      "$220.0\\text{ GPa}$",
      "$260.0\\text{ GPa}$"
    ],
    "answer": 0,
    "explanation": "$E = \\frac{\\sigma}{\\varepsilon} = 200.0\\text{ GPa}$.",
    "number": 7
  },
  {
    "type_tag": "PHY_MECH_INCLINE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Component of gravity down $30^\\circ$ slope for mass $2\\text{ kg}$ ($g=10$).",
    "options": [
      "$2\\text{ N}$",
      "$17.3\\text{ N}$",
      "$10\\text{ N}$",
      "$20\\text{ N}$",
      "$5\\text{ N}$"
    ],
    "answer": 2,
    "explanation": "$F_\\parallel = mg\\sin(30^\\circ) = 10\\text{ N}$.",
    "number": 8
  },
  {
    "type_tag": "PHY_MECH_CENTRIPETAL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Centripetal force on $2\\text{ kg}$ moving at $3\\text{ m s}^{-1}$ in circle radius $3\\text{ m}$.",
    "options": [
      "$6\\text{ N}$",
      "$12\\text{ N}$",
      "$10\\text{ N}$",
      "$14\\text{ N}$",
      "$8\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F_c = \\frac{mv^2}{r} = 6\\text{ N}$.",
    "number": 9
  },
  {
    "type_tag": "PHY_MECH_DENSITY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Density of object with mass $100\\text{ g}$ and volume $50\\text{ cm}^3$.",
    "options": [
      "$50\\text{ g cm}^{-3}$",
      "$2\\text{ g cm}^{-3}$",
      "$4\\text{ g cm}^{-3}$",
      "$3\\text{ g cm}^{-3}$",
      "$1\\text{ g cm}^{-3}$"
    ],
    "answer": 1,
    "explanation": "$\\rho = \\frac{m}{V} = 2\\text{ g cm}^{-3}$.",
    "number": 10
  },
  {
    "type_tag": "PHY_MECH_PRESSURE_FLUID",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Hydrostatic pressure at depth $5\\text{ m}$ in water ($\\rho=1000, g=10$).",
    "options": [
      "$25\\text{ kPa}$",
      "$5\\text{ kPa}$",
      "$10\\text{ kPa}$",
      "$50\\text{ kPa}$",
      "$500\\text{ kPa}$"
    ],
    "answer": 3,
    "explanation": "$P = \\rho gh = 50\\text{ kPa}$.",
    "number": 11
  },
  {
    "type_tag": "PHY_MECH_EFFICIENCY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Useful work output is $40\\text{ J}$ from total input $50\\text{ J}$. Efficiency?",
    "options": [
      "$50\\%$",
      "$20\\%$",
      "$90\\%$",
      "$80\\%$",
      "$40\\%$"
    ],
    "answer": 3,
    "explanation": "$\\text{Efficiency} = 80\\%$.",
    "number": 12
  },
  {
    "type_tag": "PHY_MECH_MOMENT_FORCE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Moment of force of $10\\text{ N}$ acting at perpendicular distance $0.5\\text{ m}$.",
    "options": [
      "$20\\text{ N m}$",
      "$7\\text{ N m}$",
      "$10\\text{ N m}$",
      "$5\\text{ N m}$",
      "$2.5\\text{ N m}$"
    ],
    "answer": 3,
    "explanation": "$\\tau = F d = 5\\text{ N m}$.",
    "number": 13
  },
  {
    "type_tag": "PHY_MECH_IMPULSE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Force of $20\\text{ N}$ acts for $0.2\\text{ s}$. Calculate impulse $\\Delta p$.",
    "options": [
      "$2\\text{ N s}$",
      "$8\\text{ N s}$",
      "$20\\text{ N s}$",
      "$5\\text{ N s}$",
      "$4\\text{ N s}$"
    ],
    "answer": 4,
    "explanation": "$\\text{Impulse} = 4\\text{ N s}$.",
    "number": 14
  },
  {
    "type_tag": "PHY_MECH_FREE_FALL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Time taken for an object of mass $1\\text{ kg}$ to drop $45\\text{ m}$ from rest ($g=10\\text{ m s}^{-2}$).",
    "options": [
      "$4.5\\text{ s}$",
      "$1.5\\text{ s}$",
      "$2\\text{ s}$",
      "$3\\text{ s}$",
      "$9\\text{ s}$"
    ],
    "answer": 3,
    "explanation": "$t = \\sqrt{2h/g} = 3\\text{ s}$ (independent of mass).",
    "number": 15
  }
];

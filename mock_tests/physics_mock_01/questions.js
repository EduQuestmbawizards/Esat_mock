const QUESTIONS = [
  {
    "type_tag": "PHY_MECH_SUVAT_V",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Car accelerates from $4\\text{ m s}^{-1}$ at $2\\text{ m s}^{-2}$ for $3\\text{ s}$. Find final velocity $v$.",
    "options": [
      "$5\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$",
      "$12\\text{ m s}^{-1}$",
      "$8\\text{ m s}^{-1}$",
      "$6\\text{ m s}^{-1}$"
    ],
    "answer": 1,
    "explanation": "$v = 4 + 6 = 10\\text{ m s}^{-1}$.",
    "number": 1
  },
  {
    "type_tag": "PHY_ELEC_OHMS_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Current through $10\\,\\Omega$ resistor connected across $10\\text{ V}$.",
    "options": [
      "$10.0\\text{ A}$",
      "$1.00\\text{ A}$",
      "$0.50\\text{ A}$",
      "$20.0\\text{ A}$",
      "$1.0\\text{ A}$"
    ],
    "answer": 1,
    "explanation": "$I = \\frac{10}{10} = 1.00\\text{ A}$.",
    "number": 2
  },
  {
    "type_tag": "PHY_THM_SHC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Heat needed to warm $2\\text{ kg}$ of water ($c=4200$) by $10\\text{ K}$.",
    "options": [
      "$8.4\\text{ kJ}$",
      "$168\\text{ kJ}$",
      "$84\\text{ kJ}$",
      "$840\\text{ kJ}$",
      "$42\\text{ kJ}$"
    ],
    "answer": 2,
    "explanation": "$Q = mc\\Delta T = 84\\text{ kJ}$.",
    "number": 3
  },
  {
    "type_tag": "PHY_MECH_PROJECTILE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Ball launched horizontally at $20\\text{ m s}^{-1}$ from height $20\\text{ m}$ ($g=10$). Find horizontal range.",
    "options": [
      "$50\\text{ m}$",
      "$10\\text{ m}$",
      "$40\\text{ m}$",
      "$20\\text{ m}$",
      "$80\\text{ m}$"
    ],
    "answer": 2,
    "explanation": "Range $= ut = 20 \\times 2 = 40\\text{ m}$.",
    "number": 4
  },
  {
    "type_tag": "PHY_ELEC_PARALLEL_R",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Equivalent resistance of two identical $20\\,\\Omega$ resistors in parallel.",
    "options": [
      "$30\\,\\Omega$",
      "$10\\,\\Omega$",
      "$20\\,\\Omega$",
      "$40\\,\\Omega$",
      "$5.0\\,\\Omega$"
    ],
    "answer": 1,
    "explanation": "$R_p = 10\\,\\Omega$.",
    "number": 5
  },
  {
    "type_tag": "PHY_THM_BOYLE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Ideal gas at constant $T$ compressed to volume $V/3$. New pressure?",
    "options": [
      "$9P_0$",
      "$3P_0$",
      "$P_0/9$",
      "$P_0/3$",
      "$P_0$"
    ],
    "answer": 1,
    "explanation": "$P_2 = 3P_0$.",
    "number": 6
  },
  {
    "type_tag": "PHY_MECH_NEWTON2",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Net force on mass $3\\text{ kg}$ accelerating at $4\\text{ m s}^{-2}$.",
    "options": [
      "$13\\text{ N}$",
      "$11\\text{ N}$",
      "$10\\text{ N}$",
      "$9\\text{ N}$",
      "$12\\text{ N}$"
    ],
    "answer": 4,
    "explanation": "$F = ma = 12\\text{ N}$.",
    "number": 7
  },
  {
    "type_tag": "PHY_ELEC_POT_DIVIDER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Potential divider: $R_1 = 100\\,\\Omega, R_2 = 200\\,\\Omega, V_{\\text{in}} = 12\\text{ V}$. Find $V_{\\text{out}}$ across $R_2$.",
    "options": [
      "$9.00\\text{ V}$",
      "$8.00\\text{ V}$",
      "$10.00\\text{ V}$",
      "$7.00\\text{ V}$",
      "$11.00\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "$V_{\\text{out}} = 9.00\\text{ V}$.",
    "number": 8
  },
  {
    "type_tag": "PHY_FLD_GRAV_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Distance from planet centre increases by factor $3$. Gravitational field $g$?",
    "options": [
      "Increases by factor $3$",
      "Decreases by factor $9$",
      "Increases by factor $9$",
      "Unchanged",
      "Decreases by factor $3$"
    ],
    "answer": 1,
    "explanation": "$g' = \\frac{g}{9}$.",
    "number": 9
  },
  {
    "type_tag": "PHY_MECH_MOMENTUM",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Trolley of mass $2\\text{ kg}$ at $10\\text{ m s}^{-1}$ collides inelastically with stationary $3\\text{ kg}$ trolley. Common speed?",
    "options": [
      "$10\\text{ m s}^{-1}$",
      "$5.0\\text{ m s}^{-1}$",
      "$8\\text{ m s}^{-1}$",
      "$2\\text{ m s}^{-1}$",
      "$4\\text{ m s}^{-1}$"
    ],
    "answer": 4,
    "explanation": "$v = 4\\text{ m s}^{-1}$.",
    "number": 10
  },
  {
    "type_tag": "PHY_ELEC_RESISTIVITY",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Length of wire with original resistance $3\\,\\Omega$ is doubled at constant volume. New resistance?",
    "options": [
      "$12\\,\\Omega$",
      "$6\\,\\Omega$",
      "$24\\,\\Omega$",
      "$3\\,\\Omega$",
      "$1.5\\,\\Omega$"
    ],
    "answer": 0,
    "explanation": "$R' = 4R = 12\\,\\Omega$.",
    "number": 11
  },
  {
    "type_tag": "PHY_FLD_COULOMB",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Electrostatic force between two charges $+2Q$ and $+Q$ at distance $r$.",
    "options": [
      "$F = \\frac{Q^2}{4\\pi\\varepsilon_0 r^2}$",
      "$F = \\frac{2Q^2}{4\\pi\\varepsilon_0 r}$",
      "$F = \\frac{2Q^2}{4\\pi\\varepsilon_0 r^2}$ (repulsive)",
      "Attractive force",
      "$F = \\frac{4Q}{4\\pi\\varepsilon_0 r^2}$"
    ],
    "answer": 2,
    "explanation": "$F = \\frac{2Q^2}{4\\pi\\varepsilon_0 r^2}$.",
    "number": 12
  },
  {
    "type_tag": "PHY_MECH_POWER",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Engine exerts force $100\\text{ N}$ at steady speed $4\\text{ m s}^{-1}$. Power output?",
    "options": [
      "$104\\text{ W}$",
      "$200\\text{ W}$",
      "$800\\text{ W}$",
      "$100\\text{ W}$",
      "$400\\text{ W}$"
    ],
    "answer": 4,
    "explanation": "$P = Fv = 400\\text{ W}$.",
    "number": 13
  },
  {
    "type_tag": "PHY_ELEC_EMF_INTERNAL",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Battery $\\mathcal{E} = 12\\text{ V}, r = 1.0\\,\\Omega$, current $2\\text{ A}$. Terminal p.d. $V$?",
    "options": [
      "$9.0\\text{ V}$",
      "$12.0\\text{ V}$",
      "$10.0\\text{ V}$",
      "$11.0\\text{ V}$",
      "$13.0\\text{ V}$"
    ],
    "answer": 3,
    "explanation": "$V = 12 - 2(0.5(2)) = 11.0\\text{ V}$.",
    "number": 14
  },
  {
    "type_tag": "PHY_FLD_MAGNETIC_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Force on wire length $0.5\\text{ m}$ carrying $2\\text{ A}$ perpendicular to field $0.4\\text{ T}$.",
    "options": [
      "$0.4\\text{ N}$",
      "$0.50\\text{ N}$",
      "$2.0\\text{ N}$",
      "$0.8\\text{ N}$",
      "$0.20\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F = BIL = 0.4\\text{ N}$.",
    "number": 15
  },
  {
    "type_tag": "PHY_MECH_HOOKE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Elastic potential energy in spring with $k = 200\\text{ N m}^{-1}$ extended by $0.10\\text{ m}$.",
    "options": [
      "$2.0\\text{ J}$",
      "$20.0\\text{ J}$",
      "$0.50\\text{ J}$",
      "$10.0\\text{ J}$",
      "$1.0\\text{ J}$"
    ],
    "answer": 4,
    "explanation": "$E = 0.5 k x^2 = 1.0\\text{ J}$.",
    "number": 16
  },
  {
    "type_tag": "PHY_ELEC_CAPACITOR_E",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Energy stored in $40\\,\\mu\\text{F}$ capacitor charged to $10\\text{ V}$.",
    "options": [
      "$4.0\\text{ mJ}$",
      "$2.0\\text{ mJ}$",
      "$1.00\\text{ mJ}$",
      "$20.0\\text{ mJ}$",
      "$8.0\\text{ mJ}$"
    ],
    "answer": 1,
    "explanation": "$E = 0.5 C V^2 = 2.0\\text{ mJ}$.",
    "number": 17
  },
  {
    "type_tag": "PHY_NUC_HALF_LIFE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Fraction of sample remaining after $3$ half-lives.",
    "options": [
      "$\\frac{1}{9}$",
      "$\\frac{1}{11}$",
      "$\\frac{1}{12}$",
      "$\\frac{1}{10}$",
      "$\\frac{1}{8}$"
    ],
    "answer": 4,
    "explanation": "Remaining $= \\frac{1}{8}$.",
    "number": 18
  },
  {
    "type_tag": "PHY_MECH_YOUNG_MOD",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Stress $\\sigma$ is $200\\text{ MPa}$, strain $\\varepsilon$ is $0.002$. Young modulus $E$?",
    "options": [
      "$120.0\\text{ GPa}$",
      "$180.0\\text{ GPa}$",
      "$160.0\\text{ GPa}$",
      "$100.0\\text{ GPa}$",
      "$140.0\\text{ GPa}$"
    ],
    "answer": 3,
    "explanation": "$E = \\frac{\\sigma}{\\varepsilon} = 100.0\\text{ GPa}$.",
    "number": 19
  },
  {
    "type_tag": "PHY_WAV_SPEED_FREQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Wave with speed $300\\text{ m s}^{-1}$ and frequency $100\\text{ Hz}$. Wavelength $\\lambda$?",
    "options": [
      "$4.00\\text{ m}$",
      "$6.00\\text{ m}$",
      "$5.00\\text{ m}$",
      "$7.00\\text{ m}$",
      "$3.00\\text{ m}$"
    ],
    "answer": 4,
    "explanation": "$\\lambda = \\frac{300}{100} = 3.00\\text{ m}$.",
    "number": 20
  },
  {
    "type_tag": "PHY_QUA_PHOTOELEC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Photon energy $E$ for frequency $f = 3 \\times 10^{15}\\text{ Hz}$ in terms of Planck's constant $h$.",
    "options": [
      "$9h \\times 10^{15}\\text{ J}$",
      "$3h \\times 10^{8}\\text{ J}$",
      "$\\frac{h}{3} \\times 10^{15}\\text{ J}$",
      "$3h \\times 10^{15}\\text{ J}$",
      "$3hc\\text{ J}$"
    ],
    "answer": 3,
    "explanation": "$E = hf = 3h \\times 10^{15}\\text{ J}$.",
    "number": 21
  },
  {
    "type_tag": "PHY_MECH_INCLINE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Component of gravity down $30^\\circ$ slope for mass $4\\text{ kg}$ ($g=10$).",
    "options": [
      "$40\\text{ N}$",
      "$10\\text{ N}$",
      "$4\\text{ N}$",
      "$20\\text{ N}$",
      "$34.6\\text{ N}$"
    ],
    "answer": 3,
    "explanation": "$F_\\parallel = mg\\sin(30^\\circ) = 20\\text{ N}$.",
    "number": 22
  },
  {
    "type_tag": "PHY_WAV_SNELL_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Critical angle $\\theta_c$ for medium with refractive index $n = 1.40$ to air ($n=1.00$).",
    "options": [
      "$\\arcsin(1.40)$",
      "$\\frac{1.40}{1.00}$",
      "$\\arccos(1.40)$",
      "$\\arcsin\\left(\\frac{1}{1.40}\\right)$",
      "$\\arctan(1.40)$"
    ],
    "answer": 3,
    "explanation": "$\\sin\\theta_c = \\frac{1}{n} \\implies \\theta_c = \\arcsin(1/1.40)$.",
    "number": 23
  },
  {
    "type_tag": "PHY_THM_RMS_SPEED",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "If absolute temperature is increased by factor $9$, RMS molecular speed increases by factor:",
    "options": [
      "$\\sqrt{3}$",
      "$1$",
      "$9$",
      "$81$",
      "$3$"
    ],
    "answer": 4,
    "explanation": "$c_{\\text{rms}} \\propto \\sqrt{T} \\implies \\sqrt{9} = 3$.",
    "number": 24
  },
  {
    "type_tag": "PHY_MECH_CENTRIPETAL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Centripetal force on $2\\text{ kg}$ moving at $6\\text{ m s}^{-1}$ in circle radius $3\\text{ m}$.",
    "options": [
      "$24\\text{ N}$",
      "$28\\text{ N}$",
      "$32\\text{ N}$",
      "$30\\text{ N}$",
      "$26\\text{ N}$"
    ],
    "answer": 0,
    "explanation": "$F_c = \\frac{mv^2}{r} = 24\\text{ N}$.",
    "number": 25
  },
  {
    "type_tag": "PHY_WAV_DIFFRACTION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Light of wavelength $500\\text{ nm}$ incident on grating with $d = 4.0\\,\\mu\\text{m}$. $\\sin\\theta_1$?",
    "options": [
      "$0.425$",
      "$0.225$",
      "$0.525$",
      "$0.125$",
      "$0.325$"
    ],
    "answer": 3,
    "explanation": "$\\sin\\theta = \\frac{\\lambda}{d} = 0.125$.",
    "number": 26
  },
  {
    "type_tag": "PHY_THM_FIRST_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "A gas absorbs $200\\text{ J}$ of heat and does $60\\text{ J}$ of work. Change in internal energy $\\Delta U$?",
    "options": [
      "$60\\text{ J}$",
      "$200\\text{ J}$",
      "$150\\text{ J}$",
      "$140\\text{ J}$",
      "$260\\text{ J}$"
    ],
    "answer": 3,
    "explanation": "$\\Delta U = Q - W = 200 - 60 = 140\\text{ J}$.",
    "number": 27
  }
];

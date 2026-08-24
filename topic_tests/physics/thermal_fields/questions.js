const QUESTIONS = [
  {
    "type_tag": "PHY_THM_SHC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Heat needed to warm $1\\text{ kg}$ of water ($c=4200$) by $10\\text{ K}$.",
    "options": [
      "$84\\text{ kJ}$",
      "$21\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$4.2\\text{ kJ}$",
      "$42\\text{ kJ}$"
    ],
    "answer": 4,
    "explanation": "$Q = mc\\Delta T = 42\\text{ kJ}$.",
    "number": 1
  },
  {
    "type_tag": "PHY_THM_BOYLE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Ideal gas at constant $T$ compressed to volume $V/2$. New pressure?",
    "options": [
      "$2P_0$",
      "$P_0/4$",
      "$P_0$",
      "$P_0/2$",
      "$4P_0$"
    ],
    "answer": 0,
    "explanation": "$P_2 = 2P_0$.",
    "number": 2
  },
  {
    "type_tag": "PHY_FLD_GRAV_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Distance from planet centre increases by factor $2$. Gravitational field $g$?",
    "options": [
      "Decreases by factor $2$",
      "Unchanged",
      "Decreases by factor $4$",
      "Increases by factor $2$",
      "Increases by factor $4$"
    ],
    "answer": 2,
    "explanation": "$g' = \\frac{g}{4}$.",
    "number": 3
  },
  {
    "type_tag": "PHY_FLD_COULOMB",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Electrostatic force between two charges $+1Q$ and $+Q$ at distance $r$.",
    "options": [
      "$F = \\frac{1Q^2}{4\\pi\\varepsilon_0 r^2}$ (repulsive)",
      "$F = \\frac{1Q^2}{4\\pi\\varepsilon_0 r}$",
      "Attractive force",
      "$F = \\frac{Q^2}{4\\pi\\varepsilon_0 r^2}$",
      "$F = \\frac{2Q}{4\\pi\\varepsilon_0 r^2}$"
    ],
    "answer": 0,
    "explanation": "$F = \\frac{1Q^2}{4\\pi\\varepsilon_0 r^2}$.",
    "number": 4
  },
  {
    "type_tag": "PHY_FLD_MAGNETIC_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Force on wire length $0.5\\text{ m}$ carrying $2\\text{ A}$ perpendicular to field $0.2\\text{ T}$.",
    "options": [
      "$0.30\\text{ N}$",
      "$0.10\\text{ N}$",
      "$0.4\\text{ N}$",
      "$1.0\\text{ N}$",
      "$0.2\\text{ N}$"
    ],
    "answer": 4,
    "explanation": "$F = BIL = 0.2\\text{ N}$.",
    "number": 5
  },
  {
    "type_tag": "PHY_NUC_HALF_LIFE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Fraction of sample remaining after $2$ half-lives.",
    "options": [
      "$\\frac{1}{8}$",
      "$\\frac{1}{5}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{7}$",
      "$\\frac{1}{6}$"
    ],
    "answer": 2,
    "explanation": "Remaining $= \\frac{1}{4}$.",
    "number": 6
  },
  {
    "type_tag": "PHY_QUA_PHOTOELEC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Photon energy $E$ for frequency $f = 2 \\times 10^{15}\\text{ Hz}$ in terms of Planck's constant $h$.",
    "options": [
      "$4h \\times 10^{15}\\text{ J}$",
      "$\\frac{h}{2} \\times 10^{15}\\text{ J}$",
      "$2h \\times 10^{15}\\text{ J}$",
      "$2h \\times 10^{8}\\text{ J}$",
      "$2hc\\text{ J}$"
    ],
    "answer": 2,
    "explanation": "$E = hf = 2h \\times 10^{15}\\text{ J}$.",
    "number": 7
  },
  {
    "type_tag": "PHY_THM_RMS_SPEED",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "If absolute temperature is increased by factor $4$, RMS molecular speed increases by factor:",
    "options": [
      "$16$",
      "$4$",
      "$2$",
      "$\\sqrt{2}$",
      "$1$"
    ],
    "answer": 2,
    "explanation": "$c_{\\text{rms}} \\propto \\sqrt{T} \\implies \\sqrt{4} = 2$.",
    "number": 8
  },
  {
    "type_tag": "PHY_THM_FIRST_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "A gas absorbs $100\\text{ J}$ of heat and does $30\\text{ J}$ of work. Change in internal energy $\\Delta U$?",
    "options": [
      "$100\\text{ J}$",
      "$130\\text{ J}$",
      "$80\\text{ J}$",
      "$30\\text{ J}$",
      "$70\\text{ J}$"
    ],
    "answer": 4,
    "explanation": "$\\Delta U = Q - W = 100 - 30 = 70\\text{ J}$.",
    "number": 9
  },
  {
    "type_tag": "PHY_FLD_ESCAPE_VEL",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Escape velocity from planet of mass $1M$ and radius $R$.",
    "options": [
      "$\\frac{1GM}{R^2}$",
      "$\\sqrt{2\\frac{GM}{R}}$",
      "$\\sqrt{\\frac{GM}{R}}$",
      "$\\sqrt{\\frac{1GM}{2R}}$",
      "$2\\frac{GM}{R}$"
    ],
    "answer": 1,
    "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2G(1M)}{R}} = \\sqrt{2\\frac{GM}{R}}$.",
    "number": 10
  },
  {
    "type_tag": "PHY_NUC_MASS_DEFECT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Mass defect $\\Delta m = 1 \\times 10^{-28}\\text{ kg}$ converted to energy ($c=3\\times 10^8\\text{ m s}^{-1}$).",
    "options": [
      "$9 \\times 10^{-20}\\text{ J}$",
      "$9 \\times 10^{-12}\\text{ J}$",
      "$3 \\times 10^{-12}\\text{ J}$",
      "$1 \\times 10^{-12}\\text{ J}$",
      "$6 \\times 10^{-12}\\text{ J}$"
    ],
    "answer": 1,
    "explanation": "$E = \\Delta m c^2 = (1 \\times 10^{-28})(9 \\times 10^{16}) = 9 \\times 10^{-12}\\text{ J}$.",
    "number": 11
  },
  {
    "type_tag": "PHY_QUA_DE_BROGLIE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "de Broglie wavelength of particle with momentum $p = 2 \\times 10^{-24}\\text{ kg m s}^{-1}$ in terms of $h$.",
    "options": [
      "$\\frac{hc}{2}$",
      "$\\frac{h}{4 \\times 10^{-24}}$",
      "$2h \\times 10^{-24}$",
      "$\\frac{2 \\times 10^{-24}}{h}$",
      "$\\frac{h}{2 \\times 10^{-24}}$"
    ],
    "answer": 4,
    "explanation": "$\\lambda = \\frac{h}{p} = \\frac{h}{2 \\times 10^{-24}}$.",
    "number": 12
  },
  {
    "type_tag": "PHY_THM_LATENT_HEAT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Energy required to vaporize mass $1\\text{ kg}$ with specific latent heat $L = 2.26 \\times 10^6\\text{ J kg}^{-1}$.",
    "options": [
      "$5.26 \\times 10^6\\text{ J}$",
      "$6.26 \\times 10^6\\text{ J}$",
      "$2.26 \\times 10^6\\text{ J}$",
      "$4.26 \\times 10^6\\text{ J}$",
      "$3.26 \\times 10^6\\text{ J}$"
    ],
    "answer": 2,
    "explanation": "$Q = mL = 2.26 \\times 10^6\\text{ J}$.",
    "number": 13
  },
  {
    "type_tag": "PHY_FLD_LORENTZ_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Magnetic force on charge $1\\text{ C}$ moving at $5\\text{ m s}^{-1}$ perpendicular to field $0.4\\text{ T}$.",
    "options": [
      "$4\\text{ N}$",
      "$1\\text{ N}$",
      "$3\\text{ N}$",
      "$2.5\\text{ N}$",
      "$2\\text{ N}$"
    ],
    "answer": 4,
    "explanation": "$F = qvB = (1)(5)(0.4) = 2\\text{ N}$.",
    "number": 14
  },
  {
    "type_tag": "PHY_NUC_ALPHA_DECAY",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Nuclide $^{238}_{92}\\text{U}$ undergoing $1$ alpha ($\\alpha$) decay(s) has new atomic number $Z$:",
    "options": [
      "$91$",
      "$94$",
      "$92$",
      "$90$",
      "$88$"
    ],
    "answer": 3,
    "explanation": "Each $\\alpha$ decay decreases $Z$ by $2 \\implies 92 - 2(1) = 90$.",
    "number": 15
  }
];

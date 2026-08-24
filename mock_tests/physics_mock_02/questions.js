const QUESTIONS = [
  {
    "type_tag": "PHY_MECH_DENSITY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Density of object with mass $200\\text{ g}$ and volume $50\\text{ cm}^3$.",
    "options": [
      "$8\\text{ g cm}^{-3}$",
      "$100\\text{ g cm}^{-3}$",
      "$2\\text{ g cm}^{-3}$",
      "$5\\text{ g cm}^{-3}$",
      "$4\\text{ g cm}^{-3}$"
    ],
    "answer": 4,
    "explanation": "$\\rho = \\frac{m}{V} = 4\\text{ g cm}^{-3}$.",
    "number": 1
  },
  {
    "type_tag": "PHY_WAV_DOPPLER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Sound source of frequency $500\\text{ Hz}$ moves towards stationary observer. Observed frequency $f'$ is:",
    "options": [
      "Greater than $500\\text{ Hz}$",
      "Less than $500\\text{ Hz}$",
      "Halved",
      "$0\\text{ Hz}$",
      "Exactly $500\\text{ Hz}$"
    ],
    "answer": 0,
    "explanation": "Approaching source increases observed frequency.",
    "number": 2
  },
  {
    "type_tag": "PHY_FLD_ESCAPE_VEL",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Escape velocity from planet of mass $2M$ and radius $R$.",
    "options": [
      "$\\sqrt{\\frac{2GM}{2R}}$",
      "$4\\frac{GM}{R}$",
      "$\\sqrt{4\\frac{GM}{R}}$",
      "$\\frac{2GM}{R^2}$",
      "$\\sqrt{\\frac{GM}{R}}$"
    ],
    "answer": 2,
    "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2G(2M)}{R}} = \\sqrt{4\\frac{GM}{R}}$.",
    "number": 3
  },
  {
    "type_tag": "PHY_MECH_PRESSURE_FLUID",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Hydrostatic pressure at depth $10\\text{ m}$ in water ($\\rho=1000, g=10$).",
    "options": [
      "$100\\text{ kPa}$",
      "$50\\text{ kPa}$",
      "$1000\\text{ kPa}$",
      "$10\\text{ kPa}$",
      "$20\\text{ kPa}$"
    ],
    "answer": 0,
    "explanation": "$P = \\rho gh = 100\\text{ kPa}$.",
    "number": 4
  },
  {
    "type_tag": "PHY_WAV_INTERFERENCE",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Path difference for the $2\\text{th}$ order constructive interference of wavelength $\\lambda$.",
    "options": [
      "$2\\lambda$",
      "$(2 + 0.5)\\lambda$",
      "$\\frac{2\\lambda}{2}$",
      "$(2(2)+1)\\lambda$",
      "$4\\lambda$"
    ],
    "answer": 0,
    "explanation": "Path difference $= n\\lambda = 2\\lambda$.",
    "number": 5
  },
  {
    "type_tag": "PHY_NUC_MASS_DEFECT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Mass defect $\\Delta m = 2 \\times 10^{-28}\\text{ kg}$ converted to energy ($c=3\\times 10^8\\text{ m s}^{-1}$).",
    "options": [
      "$12 \\times 10^{-12}\\text{ J}$",
      "$18 \\times 10^{-20}\\text{ J}$",
      "$6 \\times 10^{-12}\\text{ J}$",
      "$2 \\times 10^{-12}\\text{ J}$",
      "$18 \\times 10^{-12}\\text{ J}$"
    ],
    "answer": 4,
    "explanation": "$E = \\Delta m c^2 = (2 \\times 10^{-28})(9 \\times 10^{16}) = 18 \\times 10^{-12}\\text{ J}$.",
    "number": 6
  },
  {
    "type_tag": "PHY_MECH_EFFICIENCY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Useful work output is $80\\text{ J}$ from total input $100\\text{ J}$. Efficiency?",
    "options": [
      "$20\\%$",
      "$90\\%$",
      "$80\\%$",
      "$40\\%$",
      "$50\\%$"
    ],
    "answer": 2,
    "explanation": "$\\text{Efficiency} = 80\\%$.",
    "number": 7
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF1",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "At a circuit junction, currents $I_1 = 2\\text{ A}$ and $I_2 = 4\\text{ A}$ enter. Current $I_3$ leaving junction is:",
    "options": [
      "$9\\text{ A}$",
      "$7\\text{ A}$",
      "$5\\text{ A}$",
      "$6\\text{ A}$",
      "$8\\text{ A}$"
    ],
    "answer": 3,
    "explanation": "$I_3 = I_1 + I_2 = 2 + (4) = 6\\text{ A}$.",
    "number": 8
  },
  {
    "type_tag": "PHY_QUA_DE_BROGLIE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "de Broglie wavelength of particle with momentum $p = 3 \\times 10^{-24}\\text{ kg m s}^{-1}$ in terms of $h$.",
    "options": [
      "$\\frac{3 \\times 10^{-24}}{h}$",
      "$\\frac{h}{9 \\times 10^{-24}}$",
      "$\\frac{hc}{3}$",
      "$\\frac{h}{3 \\times 10^{-24}}$",
      "$3h \\times 10^{-24}$"
    ],
    "answer": 3,
    "explanation": "$\\lambda = \\frac{h}{p} = \\frac{h}{3 \\times 10^{-24}}$.",
    "number": 9
  },
  {
    "type_tag": "PHY_MECH_MOMENT_FORCE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Moment of force of $20\\text{ N}$ acting at perpendicular distance $0.5\\text{ m}$.",
    "options": [
      "$20\\text{ N m}$",
      "$40\\text{ N m}$",
      "$5.0\\text{ N m}$",
      "$10\\text{ N m}$",
      "$12\\text{ N m}$"
    ],
    "answer": 3,
    "explanation": "$\\tau = F d = 10\\text{ N m}$.",
    "number": 10
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF2",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "In a closed loop with EMF $12\\text{ V}$ and resistors $R_1 = 2\\,\\Omega, R_2 = 4\\,\\Omega$, current $I$ is:",
    "options": [
      "$1.2\\text{ A}$",
      "$0.7\\text{ A}$",
      "$4.2\\text{ A}$",
      "$2.2\\text{ A}$",
      "$3.2\\text{ A}$"
    ],
    "answer": 3,
    "explanation": "$I = \\frac{12}{6} = 2.2\\text{ A}$.",
    "number": 11
  },
  {
    "type_tag": "PHY_THM_LATENT_HEAT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Energy required to vaporize mass $2\\text{ kg}$ with specific latent heat $L = 2.26 \\times 10^6\\text{ J kg}^{-1}$.",
    "options": [
      "$8.52 \\times 10^6\\text{ J}$",
      "$6.52 \\times 10^6\\text{ J}$",
      "$4.52 \\times 10^6\\text{ J}$",
      "$7.52 \\times 10^6\\text{ J}$",
      "$5.52 \\times 10^6\\text{ J}$"
    ],
    "answer": 2,
    "explanation": "$Q = mL = 4.52 \\times 10^6\\text{ J}$.",
    "number": 12
  },
  {
    "type_tag": "PHY_MECH_IMPULSE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Force of $40\\text{ N}$ acts for $0.2\\text{ s}$. Calculate impulse $\\Delta p$.",
    "options": [
      "$40\\text{ N s}$",
      "$4\\text{ N s}$",
      "$16\\text{ N s}$",
      "$9\\text{ N s}$",
      "$8\\text{ N s}$"
    ],
    "answer": 4,
    "explanation": "$\\text{Impulse} = 8\\text{ N s}$.",
    "number": 13
  },
  {
    "type_tag": "PHY_WAV_POLARISATION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Which of the following electromagnetic waves (frequency $2 \\times 10^{14}\\text{ Hz}$) can be polarised?",
    "options": [
      "Light waves (transverse EM)",
      "Sound waves in air",
      "Ultrasound waves",
      "Pressure waves in water",
      "Longitudinal seismic P-waves"
    ],
    "answer": 0,
    "explanation": "Only transverse waves can be polarised.",
    "number": 14
  },
  {
    "type_tag": "PHY_FLD_LORENTZ_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Magnetic force on charge $2\\text{ C}$ moving at $5\\text{ m s}^{-1}$ perpendicular to field $0.4\\text{ T}$.",
    "options": [
      "$8\\text{ N}$",
      "$5\\text{ N}$",
      "$2\\text{ N}$",
      "$4\\text{ N}$",
      "$5.0\\text{ N}$"
    ],
    "answer": 3,
    "explanation": "$F = qvB = (2)(5)(0.4) = 4\\text{ N}$.",
    "number": 15
  },
  {
    "type_tag": "PHY_MECH_FREE_FALL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Time taken for an object of mass $2\\text{ kg}$ to drop $45\\text{ m}$ from rest ($g=10\\text{ m s}^{-2}$).",
    "options": [
      "$2\\text{ s}$",
      "$9\\text{ s}$",
      "$3\\text{ s}$",
      "$4.5\\text{ s}$",
      "$1.5\\text{ s}$"
    ],
    "answer": 2,
    "explanation": "$t = \\sqrt{2h/g} = 3\\text{ s}$ (independent of mass).",
    "number": 16
  },
  {
    "type_tag": "PHY_ELEC_POWER_EQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Electrical power dissipated in resistor $R = 4\\,\\Omega$ carrying current $I = 2\\text{ A}$.",
    "options": [
      "$18\\text{ W}$",
      "$32\\text{ W}$",
      "$4\\text{ W}$",
      "$16\\text{ W}$",
      "$8\\text{ W}$"
    ],
    "answer": 3,
    "explanation": "$P = I^2 R = 4(4) = 16\\text{ W}$.",
    "number": 17
  },
  {
    "type_tag": "PHY_NUC_ALPHA_DECAY",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Nuclide $^{238}_{92}\\text{U}$ undergoing $2$ alpha ($\\alpha$) decay(s) has new atomic number $Z$:",
    "options": [
      "$84$",
      "$88$",
      "$96$",
      "$92$",
      "$90$"
    ],
    "answer": 1,
    "explanation": "Each $\\alpha$ decay decreases $Z$ by $2 \\implies 92 - 2(2) = 88$.",
    "number": 18
  },
  {
    "type_tag": "PHY_MECH_SUVAT_V",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Car accelerates from $6\\text{ m s}^{-1}$ at $2\\text{ m s}^{-2}$ for $3\\text{ s}$. Find final velocity $v$.",
    "options": [
      "$12\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$",
      "$8\\text{ m s}^{-1}$",
      "$14\\text{ m s}^{-1}$",
      "$7\\text{ m s}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$v = 6 + 6 = 12\\text{ m s}^{-1}$.",
    "number": 19
  },
  {
    "type_tag": "PHY_ELEC_OHMS_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Current through $15\\,\\Omega$ resistor connected across $10\\text{ V}$.",
    "options": [
      "$1.5\\text{ A}$",
      "$30.0\\text{ A}$",
      "$0.67\\text{ A}$",
      "$15.0\\text{ A}$",
      "$0.33\\text{ A}$"
    ],
    "answer": 2,
    "explanation": "$I = \\frac{10}{15} = 0.67\\text{ A}$.",
    "number": 20
  },
  {
    "type_tag": "PHY_THM_SHC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Heat needed to warm $3\\text{ kg}$ of water ($c=4200$) by $10\\text{ K}$.",
    "options": [
      "$63\\text{ kJ}$",
      "$126\\text{ kJ}$",
      "$12.6\\text{ kJ}$",
      "$252\\text{ kJ}$",
      "$1260\\text{ kJ}$"
    ],
    "answer": 1,
    "explanation": "$Q = mc\\Delta T = 126\\text{ kJ}$.",
    "number": 21
  },
  {
    "type_tag": "PHY_MECH_PROJECTILE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Ball launched horizontally at $30\\text{ m s}^{-1}$ from height $20\\text{ m}$ ($g=10$). Find horizontal range.",
    "options": [
      "$15\\text{ m}$",
      "$60\\text{ m}$",
      "$70\\text{ m}$",
      "$30\\text{ m}$",
      "$120\\text{ m}$"
    ],
    "answer": 1,
    "explanation": "Range $= ut = 30 \\times 2 = 60\\text{ m}$.",
    "number": 22
  },
  {
    "type_tag": "PHY_ELEC_PARALLEL_R",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Equivalent resistance of two identical $30\\,\\Omega$ resistors in parallel.",
    "options": [
      "$15\\,\\Omega$",
      "$30\\,\\Omega$",
      "$60\\,\\Omega$",
      "$7.5\\,\\Omega$",
      "$45\\,\\Omega$"
    ],
    "answer": 0,
    "explanation": "$R_p = 15\\,\\Omega$.",
    "number": 23
  },
  {
    "type_tag": "PHY_THM_BOYLE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Ideal gas at constant $T$ compressed to volume $V/4$. New pressure?",
    "options": [
      "$P_0/4$",
      "$P_0$",
      "$16P_0$",
      "$4P_0$",
      "$P_0/16$"
    ],
    "answer": 3,
    "explanation": "$P_2 = 4P_0$.",
    "number": 24
  },
  {
    "type_tag": "PHY_MECH_NEWTON2",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Net force on mass $4\\text{ kg}$ accelerating at $4\\text{ m s}^{-2}$.",
    "options": [
      "$15\\text{ N}$",
      "$16\\text{ N}$",
      "$17\\text{ N}$",
      "$13\\text{ N}$",
      "$14\\text{ N}$"
    ],
    "answer": 1,
    "explanation": "$F = ma = 16\\text{ N}$.",
    "number": 25
  },
  {
    "type_tag": "PHY_ELEC_POT_DIVIDER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Potential divider: $R_1 = 100\\,\\Omega, R_2 = 300\\,\\Omega, V_{\\text{in}} = 12\\text{ V}$. Find $V_{\\text{out}}$ across $R_2$.",
    "options": [
      "$7.60\\text{ V}$",
      "$10.60\\text{ V}$",
      "$11.60\\text{ V}$",
      "$8.60\\text{ V}$",
      "$9.60\\text{ V}$"
    ],
    "answer": 4,
    "explanation": "$V_{\\text{out}} = 9.60\\text{ V}$.",
    "number": 26
  },
  {
    "type_tag": "PHY_FLD_GRAV_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Distance from planet centre increases by factor $4$. Gravitational field $g$?",
    "options": [
      "Increases by factor $16$",
      "Increases by factor $4$",
      "Decreases by factor $16$",
      "Unchanged",
      "Decreases by factor $4$"
    ],
    "answer": 2,
    "explanation": "$g' = \\frac{g}{16}$.",
    "number": 27
  }
];

const QUESTIONS = [
  {
    "type_tag": "PHY_ELEC_OHMS_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Current through $5\\,\\Omega$ resistor connected across $10\\text{ V}$.",
    "options": [
      "$2.00\\text{ A}$",
      "$10.0\\text{ A}$",
      "$1.00\\text{ A}$",
      "$0.5\\text{ A}$",
      "$5.0\\text{ A}$"
    ],
    "answer": 0,
    "explanation": "$I = \\frac{10}{5} = 2.00\\text{ A}$.",
    "number": 1
  },
  {
    "type_tag": "PHY_ELEC_PARALLEL_R",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Equivalent resistance of two identical $10\\,\\Omega$ resistors in parallel.",
    "options": [
      "$5\\,\\Omega$",
      "$20\\,\\Omega$",
      "$2.5\\,\\Omega$",
      "$10\\,\\Omega$",
      "$15\\,\\Omega$"
    ],
    "answer": 0,
    "explanation": "$R_p = 5\\,\\Omega$.",
    "number": 2
  },
  {
    "type_tag": "PHY_ELEC_POT_DIVIDER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Potential divider: $R_1 = 100\\,\\Omega, R_2 = 100\\,\\Omega, V_{\\text{in}} = 12\\text{ V}$. Find $V_{\\text{out}}$ across $R_2$.",
    "options": [
      "$8.00\\text{ V}$",
      "$6.00\\text{ V}$",
      "$9.00\\text{ V}$",
      "$7.00\\text{ V}$",
      "$10.00\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "Since $R_1 = R_2 = 100\\,\\Omega$, the voltage divides equally: $V_{\\text{out}} = 12\\text{ V} \\times \\frac{100\\,\\Omega}{100\\,\\Omega + 100\\,\\Omega} = 6.00\\text{ V}$.",
    "number": 3
  },
  {
    "type_tag": "PHY_ELEC_RESISTIVITY",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Length of wire with original resistance $2\\,\\Omega$ is doubled at constant volume. New resistance?",
    "options": [
      "$1.0\\,\\Omega$",
      "$2\\,\\Omega$",
      "$4\\,\\Omega$",
      "$8\\,\\Omega$",
      "$16\\,\\Omega$"
    ],
    "answer": 3,
    "explanation": "$R' = 4R = 8\\,\\Omega$.",
    "number": 4
  },
  {
    "type_tag": "PHY_ELEC_EMF_INTERNAL",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Battery $\\mathcal{E} = 12\\text{ V}, r = 0.5\\,\\Omega$, current $2\\text{ A}$. Terminal p.d. $V$?",
    "options": [
      "$9.0\\text{ V}$",
      "$12.0\\text{ V}$",
      "$10.0\\text{ V}$",
      "$11.0\\text{ V}$",
      "$8.0\\text{ V}$"
    ],
    "answer": 3,
    "explanation": "Terminal potential difference is $V = \\mathcal{E} - I r = 12\\text{ V} - (2\\text{ A} \\times 0.5\\,\\Omega) = 12\\text{ V} - 1.0\\text{ V} = 11.0\\text{ V}$.",
    "number": 5
  },
  {
    "type_tag": "PHY_ELEC_CAPACITOR_E",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Energy stored in $20\\,\\mu\\text{F}$ capacitor charged to $10\\text{ V}$.",
    "options": [
      "$2.0\\text{ mJ}$",
      "$0.50\\text{ mJ}$",
      "$10.0\\text{ mJ}$",
      "$1.0\\text{ mJ}$",
      "$4.0\\text{ mJ}$"
    ],
    "answer": 3,
    "explanation": "$E = 0.5 C V^2 = 1.0\\text{ mJ}$.",
    "number": 6
  },
  {
    "type_tag": "PHY_WAV_SPEED_FREQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Wave with speed $300\\text{ m s}^{-1}$ and frequency $50\\text{ Hz}$. Wavelength $\\lambda$?",
    "options": [
      "$10.00\\text{ m}$",
      "$9.00\\text{ m}$",
      "$8.00\\text{ m}$",
      "$6.00\\text{ m}$",
      "$7.00\\text{ m}$"
    ],
    "answer": 3,
    "explanation": "$\\lambda = \\frac{300}{50} = 6.00\\text{ m}$.",
    "number": 7
  },
  {
    "type_tag": "PHY_WAV_SNELL_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Critical angle $\\theta_c$ for medium with refractive index $n = 1.30$ to air ($n=1.00$).",
    "options": [
      "$\\arccos(1.30)$",
      "$\\arcsin\\left(\\frac{1}{1.30}\\right)$",
      "$\\frac{1.30}{1.00}$",
      "$\\arcsin(1.30)$",
      "$\\arctan(1.30)$"
    ],
    "answer": 1,
    "explanation": "$\\sin\\theta_c = \\frac{1}{n} \\implies \\theta_c = \\arcsin(1/1.30)$.",
    "number": 8
  },
  {
    "type_tag": "PHY_WAV_DIFFRACTION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Light of wavelength $500\\text{ nm}$ incident on grating with $d = 2.0\\,\\mu\\text{m}$. $\\sin\\theta_1$?",
    "options": [
      "$0.650$",
      "$0.550$",
      "$0.450$",
      "$0.350$",
      "$0.250$"
    ],
    "answer": 4,
    "explanation": "$\\sin\\theta = \\frac{\\lambda}{d} = 0.250$.",
    "number": 9
  },
  {
    "type_tag": "PHY_WAV_DOPPLER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Sound source of frequency $450\\text{ Hz}$ moves towards stationary observer. Observed frequency $f'$ is:",
    "options": [
      "$0\\text{ Hz}$",
      "Halved",
      "Exactly $450\\text{ Hz}$",
      "Greater than $450\\text{ Hz}$",
      "Less than $450\\text{ Hz}$"
    ],
    "answer": 3,
    "explanation": "Approaching source increases observed frequency.",
    "number": 10
  },
  {
    "type_tag": "PHY_WAV_INTERFERENCE",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Path difference for the $1\\text{th}$ order constructive interference of wavelength $\\lambda$.",
    "options": [
      "$(2(1)+1)\\lambda$",
      "$2\\lambda$",
      "$\\frac{1\\lambda}{2}$",
      "$1\\lambda$",
      "$(1 + 0.5)\\lambda$"
    ],
    "answer": 3,
    "explanation": "Path difference $= n\\lambda = 1\\lambda$.",
    "number": 11
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF1",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "At a circuit junction, currents $I_1 = 1\\text{ A}$ and $I_2 = 3\\text{ A}$ enter. Current $I_3$ leaving junction is:",
    "options": [
      "$7\\text{ A}$",
      "$3\\text{ A}$",
      "$6\\text{ A}$",
      "$4\\text{ A}$",
      "$5\\text{ A}$"
    ],
    "answer": 3,
    "explanation": "$I_3 = I_1 + I_2 = 1 + (3) = 4\\text{ A}$.",
    "number": 12
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF2",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "In a closed loop with EMF $6\\text{ V}$ and resistors $R_1 = 1\\,\\Omega, R_2 = 2\\,\\Omega$, current $I$ is:",
    "options": [
      "$1.0\\text{ A}$",
      "$0.5\\text{ A}$",
      "$4.0\\text{ A}$",
      "$3.0\\text{ A}$",
      "$2.0\\text{ A}$"
    ],
    "answer": 4,
    "explanation": "Total resistance $R_{\\text{total}} = R_1 + R_2 = 1\\,\\Omega + 2\\,\\Omega = 3\\,\\Omega$. By Ohm's law, $I = \\frac{\\mathcal{E}}{R_{\\text{total}}} = \\frac{6\\text{ V}}{3\\,\\Omega} = 2.0\\text{ A}$.",
    "number": 13
  },
  {
    "type_tag": "PHY_WAV_POLARISATION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Which of the following electromagnetic waves (frequency $1 \\times 10^{14}\\text{ Hz}$) can be polarised?",
    "options": [
      "Pressure waves in water",
      "Ultrasound waves",
      "Longitudinal seismic P-waves",
      "Sound waves in air",
      "Light waves (transverse EM)"
    ],
    "answer": 4,
    "explanation": "Only transverse waves can be polarised.",
    "number": 14
  },
  {
    "type_tag": "PHY_ELEC_POWER_EQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Electrical power dissipated in resistor $R = 3\\,\\Omega$ carrying current $I = 2\\text{ A}$.",
    "options": [
      "$24\\text{ W}$",
      "$6\\text{ W}$",
      "$12\\text{ W}$",
      "$3\\text{ W}$",
      "$14\\text{ W}$"
    ],
    "answer": 2,
    "explanation": "$P = I^2 R = 4(3) = 12\\text{ W}$.",
    "number": 15
  }
];

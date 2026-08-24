const QUESTIONS = [
  {
    "type_tag": "PHY_MECH_MOMENTUM",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Trolley of mass $2\\text{ kg}$ at $15\\text{ m s}^{-1}$ collides inelastically with stationary $3\\text{ kg}$ trolley. Common speed?",
    "options": [
      "$12\\text{ m s}^{-1}$",
      "$7.5\\text{ m s}^{-1}$",
      "$3\\text{ m s}^{-1}$",
      "$6\\text{ m s}^{-1}$",
      "$15\\text{ m s}^{-1}$"
    ],
    "answer": 3,
    "explanation": "$v = 6\\text{ m s}^{-1}$.",
    "number": 1
  },
  {
    "type_tag": "PHY_ELEC_RESISTIVITY",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Length of wire with original resistance $4\\,\\Omega$ is doubled at constant volume. New resistance?",
    "options": [
      "$2.0\\,\\Omega$",
      "$32\\,\\Omega$",
      "$8\\,\\Omega$",
      "$4\\,\\Omega$",
      "$16\\,\\Omega$"
    ],
    "answer": 4,
    "explanation": "$R' = 4R = 16\\,\\Omega$.",
    "number": 2
  },
  {
    "type_tag": "PHY_FLD_COULOMB",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Electrostatic force between two charges $+3Q$ and $+Q$ at distance $r$.",
    "options": [
      "$F = \\frac{Q^2}{4\\pi\\varepsilon_0 r^2}$",
      "$F = \\frac{3Q^2}{4\\pi\\varepsilon_0 r}$",
      "Attractive force",
      "$F = \\frac{3Q^2}{4\\pi\\varepsilon_0 r^2}$ (repulsive)",
      "$F = \\frac{6Q}{4\\pi\\varepsilon_0 r^2}$"
    ],
    "answer": 3,
    "explanation": "$F = \\frac{3Q^2}{4\\pi\\varepsilon_0 r^2}$.",
    "number": 3
  },
  {
    "type_tag": "PHY_MECH_POWER",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Engine exerts force $150\\text{ N}$ at steady speed $4\\text{ m s}^{-1}$. Power output?",
    "options": [
      "$154\\text{ W}$",
      "$600\\text{ W}$",
      "$300\\text{ W}$",
      "$150\\text{ W}$",
      "$1200\\text{ W}$"
    ],
    "answer": 1,
    "explanation": "$P = Fv = 600\\text{ W}$.",
    "number": 4
  },
  {
    "type_tag": "PHY_ELEC_EMF_INTERNAL",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Battery $\\mathcal{E} = 12\\text{ V}, r = 1.5\\,\\Omega$, current $2\\text{ A}$. Terminal p.d. $V$?",
    "options": [
      "$12.5\\text{ V}$",
      "$8.5\\text{ V}$",
      "$11.5\\text{ V}$",
      "$9.5\\text{ V}$",
      "$10.5\\text{ V}$"
    ],
    "answer": 4,
    "explanation": "$V = 12 - 2(0.5(3)) = 10.5\\text{ V}$.",
    "number": 5
  },
  {
    "type_tag": "PHY_FLD_MAGNETIC_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Force on wire length $0.5\\text{ m}$ carrying $2\\text{ A}$ perpendicular to field $0.6\\text{ T}$.",
    "options": [
      "$3.0\\text{ N}$",
      "$0.6\\text{ N}$",
      "$0.70\\text{ N}$",
      "$1.2\\text{ N}$",
      "$0.30\\text{ N}$"
    ],
    "answer": 1,
    "explanation": "$F = BIL = 0.6\\text{ N}$.",
    "number": 6
  },
  {
    "type_tag": "PHY_MECH_HOOKE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Elastic potential energy in spring with $k = 300\\text{ N m}^{-1}$ extended by $0.10\\text{ m}$.",
    "options": [
      "$1.5\\text{ J}$",
      "$3.0\\text{ J}$",
      "$30.0\\text{ J}$",
      "$15.0\\text{ J}$",
      "$0.75\\text{ J}$"
    ],
    "answer": 0,
    "explanation": "$E = 0.5 k x^2 = 1.5\\text{ J}$.",
    "number": 7
  },
  {
    "type_tag": "PHY_ELEC_CAPACITOR_E",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Energy stored in $60\\,\\mu\\text{F}$ capacitor charged to $10\\text{ V}$.",
    "options": [
      "$3.0\\text{ mJ}$",
      "$30.0\\text{ mJ}$",
      "$6.0\\text{ mJ}$",
      "$12.0\\text{ mJ}$",
      "$1.50\\text{ mJ}$"
    ],
    "answer": 0,
    "explanation": "$E = 0.5 C V^2 = 3.0\\text{ mJ}$.",
    "number": 8
  },
  {
    "type_tag": "PHY_NUC_HALF_LIFE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Fraction of sample remaining after $4$ half-lives.",
    "options": [
      "$\\frac{1}{18}$",
      "$\\frac{1}{17}$",
      "$\\frac{1}{20}$",
      "$\\frac{1}{19}$",
      "$\\frac{1}{16}$"
    ],
    "answer": 4,
    "explanation": "Remaining $= \\frac{1}{16}$.",
    "number": 9
  },
  {
    "type_tag": "PHY_MECH_YOUNG_MOD",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Stress $\\sigma$ is $200\\text{ MPa}$, strain $\\varepsilon$ is $0.003$. Young modulus $E$?",
    "options": [
      "$66.7\\text{ GPa}$",
      "$106.7\\text{ GPa}$",
      "$126.7\\text{ GPa}$",
      "$146.7\\text{ GPa}$",
      "$86.7\\text{ GPa}$"
    ],
    "answer": 0,
    "explanation": "$E = \\frac{\\sigma}{\\varepsilon} = 66.7\\text{ GPa}$.",
    "number": 10
  },
  {
    "type_tag": "PHY_WAV_SPEED_FREQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Wave with speed $300\\text{ m s}^{-1}$ and frequency $150\\text{ Hz}$. Wavelength $\\lambda$?",
    "options": [
      "$5.00\\text{ m}$",
      "$6.00\\text{ m}$",
      "$2.00\\text{ m}$",
      "$3.00\\text{ m}$",
      "$4.00\\text{ m}$"
    ],
    "answer": 2,
    "explanation": "$\\lambda = \\frac{300}{150} = 2.00\\text{ m}$.",
    "number": 11
  },
  {
    "type_tag": "PHY_QUA_PHOTOELEC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Photon energy $E$ for frequency $f = 4 \\times 10^{15}\\text{ Hz}$ in terms of Planck's constant $h$.",
    "options": [
      "$4h \\times 10^{15}\\text{ J}$",
      "$16h \\times 10^{15}\\text{ J}$",
      "$\\frac{h}{4} \\times 10^{15}\\text{ J}$",
      "$4hc\\text{ J}$",
      "$4h \\times 10^{8}\\text{ J}$"
    ],
    "answer": 0,
    "explanation": "$E = hf = 4h \\times 10^{15}\\text{ J}$.",
    "number": 12
  },
  {
    "type_tag": "PHY_MECH_INCLINE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Component of gravity down $30^\\circ$ slope for mass $6\\text{ kg}$ ($g=10$).",
    "options": [
      "$15\\text{ N}$",
      "$6\\text{ N}$",
      "$60\\text{ N}$",
      "$52.0\\text{ N}$",
      "$30\\text{ N}$"
    ],
    "answer": 4,
    "explanation": "$F_\\parallel = mg\\sin(30^\\circ) = 30\\text{ N}$.",
    "number": 13
  },
  {
    "type_tag": "PHY_WAV_SNELL_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Critical angle $\\theta_c$ for medium with refractive index $n = 1.50$ to air ($n=1.00$).",
    "options": [
      "$\\arctan(1.50)$",
      "$\\arccos(1.50)$",
      "$\\arcsin(1.50)$",
      "$\\frac{1.50}{1.00}$",
      "$\\arcsin\\left(\\frac{1}{1.50}\\right)$"
    ],
    "answer": 4,
    "explanation": "$\\sin\\theta_c = \\frac{1}{n} \\implies \\theta_c = \\arcsin(1/1.50)$.",
    "number": 14
  },
  {
    "type_tag": "PHY_THM_RMS_SPEED",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "If absolute temperature is increased by factor $16$, RMS molecular speed increases by factor:",
    "options": [
      "$16$",
      "$\\sqrt{4}$",
      "$1$",
      "$256$",
      "$4$"
    ],
    "answer": 4,
    "explanation": "$c_{\\text{rms}} \\propto \\sqrt{T} \\implies \\sqrt{16} = 4$.",
    "number": 15
  },
  {
    "type_tag": "PHY_MECH_CENTRIPETAL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Centripetal force on $2\\text{ kg}$ moving at $9\\text{ m s}^{-1}$ in circle radius $3\\text{ m}$.",
    "options": [
      "$56\\text{ N}$",
      "$60\\text{ N}$",
      "$54\\text{ N}$",
      "$62\\text{ N}$",
      "$58\\text{ N}$"
    ],
    "answer": 2,
    "explanation": "$F_c = \\frac{mv^2}{r} = 54\\text{ N}$.",
    "number": 16
  },
  {
    "type_tag": "PHY_WAV_DIFFRACTION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Light of wavelength $500\\text{ nm}$ incident on grating with $d = 6.0\\,\\mu\\text{m}$. $\\sin\\theta_1$?",
    "options": [
      "$0.483$",
      "$0.083$",
      "$0.283$",
      "$0.383$",
      "$0.183$"
    ],
    "answer": 1,
    "explanation": "$\\sin\\theta = \\frac{\\lambda}{d} = 0.083$.",
    "number": 17
  },
  {
    "type_tag": "PHY_THM_FIRST_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "A gas absorbs $300\\text{ J}$ of heat and does $90\\text{ J}$ of work. Change in internal energy $\\Delta U$?",
    "options": [
      "$300\\text{ J}$",
      "$220\\text{ J}$",
      "$210\\text{ J}$",
      "$90\\text{ J}$",
      "$390\\text{ J}$"
    ],
    "answer": 2,
    "explanation": "$\\Delta U = Q - W = 300 - 90 = 210\\text{ J}$.",
    "number": 18
  },
  {
    "type_tag": "PHY_MECH_DENSITY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Density of object with mass $300\\text{ g}$ and volume $50\\text{ cm}^3$.",
    "options": [
      "$12\\text{ g cm}^{-3}$",
      "$7\\text{ g cm}^{-3}$",
      "$150\\text{ g cm}^{-3}$",
      "$6\\text{ g cm}^{-3}$",
      "$3\\text{ g cm}^{-3}$"
    ],
    "answer": 3,
    "explanation": "$\\rho = \\frac{m}{V} = 6\\text{ g cm}^{-3}$.",
    "number": 19
  },
  {
    "type_tag": "PHY_WAV_DOPPLER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Sound source of frequency $550\\text{ Hz}$ moves towards stationary observer. Observed frequency $f'$ is:",
    "options": [
      "Halved",
      "$0\\text{ Hz}$",
      "Exactly $550\\text{ Hz}$",
      "Less than $550\\text{ Hz}$",
      "Greater than $550\\text{ Hz}$"
    ],
    "answer": 4,
    "explanation": "Approaching source increases observed frequency.",
    "number": 20
  },
  {
    "type_tag": "PHY_FLD_ESCAPE_VEL",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Escape velocity from planet of mass $3M$ and radius $R$.",
    "options": [
      "$6\\frac{GM}{R}$",
      "$\\sqrt{\\frac{3GM}{2R}}$",
      "$\\sqrt{6\\frac{GM}{R}}$",
      "$\\sqrt{\\frac{GM}{R}}$",
      "$\\frac{3GM}{R^2}$"
    ],
    "answer": 2,
    "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2G(3M)}{R}} = \\sqrt{6\\frac{GM}{R}}$.",
    "number": 21
  },
  {
    "type_tag": "PHY_MECH_PRESSURE_FLUID",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Hydrostatic pressure at depth $15\\text{ m}$ in water ($\\rho=1000, g=10$).",
    "options": [
      "$15\\text{ kPa}$",
      "$1500\\text{ kPa}$",
      "$30\\text{ kPa}$",
      "$75\\text{ kPa}$",
      "$150\\text{ kPa}$"
    ],
    "answer": 4,
    "explanation": "$P = \\rho gh = 150\\text{ kPa}$.",
    "number": 22
  },
  {
    "type_tag": "PHY_WAV_INTERFERENCE",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Path difference for the $3\\text{th}$ order constructive interference of wavelength $\\lambda$.",
    "options": [
      "$6\\lambda$",
      "$(3 + 0.5)\\lambda$",
      "$3\\lambda$",
      "$\\frac{3\\lambda}{2}$",
      "$(2(3)+1)\\lambda$"
    ],
    "answer": 2,
    "explanation": "Path difference $= n\\lambda = 3\\lambda$.",
    "number": 23
  },
  {
    "type_tag": "PHY_NUC_MASS_DEFECT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Mass defect $\\Delta m = 3 \\times 10^{-28}\\text{ kg}$ converted to energy ($c=3\\times 10^8\\text{ m s}^{-1}$).",
    "options": [
      "$18 \\times 10^{-12}\\text{ J}$",
      "$27 \\times 10^{-12}\\text{ J}$",
      "$27 \\times 10^{-20}\\text{ J}$",
      "$9 \\times 10^{-12}\\text{ J}$",
      "$3 \\times 10^{-12}\\text{ J}$"
    ],
    "answer": 1,
    "explanation": "$E = \\Delta m c^2 = (3 \\times 10^{-28})(9 \\times 10^{16}) = 27 \\times 10^{-12}\\text{ J}$.",
    "number": 24
  },
  {
    "type_tag": "PHY_MECH_EFFICIENCY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Useful work output is $120\\text{ J}$ from total input $150\\text{ J}$. Efficiency?",
    "options": [
      "$90\\%$",
      "$40\\%$",
      "$80\\%$",
      "$50\\%$",
      "$20\\%$"
    ],
    "answer": 2,
    "explanation": "$\\text{Efficiency} = 80\\%$.",
    "number": 25
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF1",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "At a circuit junction, currents $I_1 = 3\\text{ A}$ and $I_2 = 5\\text{ A}$ enter. Current $I_3$ leaving junction is:",
    "options": [
      "$7\\text{ A}$",
      "$8\\text{ A}$",
      "$11\\text{ A}$",
      "$9\\text{ A}$",
      "$10\\text{ A}$"
    ],
    "answer": 1,
    "explanation": "$I_3 = I_1 + I_2 = 3 + (5) = 8\\text{ A}$.",
    "number": 26
  },
  {
    "type_tag": "PHY_QUA_DE_BROGLIE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "de Broglie wavelength of particle with momentum $p = 4 \\times 10^{-24}\\text{ kg m s}^{-1}$ in terms of $h$.",
    "options": [
      "$\\frac{h}{16 \\times 10^{-24}}$",
      "$\\frac{h}{4 \\times 10^{-24}}$",
      "$\\frac{hc}{4}$",
      "$4h \\times 10^{-24}$",
      "$\\frac{4 \\times 10^{-24}}{h}$"
    ],
    "answer": 1,
    "explanation": "$\\lambda = \\frac{h}{p} = \\frac{h}{4 \\times 10^{-24}}$.",
    "number": 27
  }
];

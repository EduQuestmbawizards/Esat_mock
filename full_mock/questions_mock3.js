const QUESTIONS = [
  {
    "type_tag": "M1_ALG_LOG_LAWS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Evaluate $\\log_3(81) + \\log_3(27) - \\log_3(3)$.",
    "options": [
      "$8$",
      "$10$",
      "$6$",
      "$7$",
      "$9$"
    ],
    "answer": 2,
    "explanation": "$4 + 3 - 1 = 6$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_DBL_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Simplify $2\\sin(4\\theta)\\cos(4\\theta)$.",
    "options": [
      "$\\sin(8\\theta)$",
      "$2\\sin(4\\theta)$",
      "$\\tan(8\\theta)$",
      "$\\cos(8\\theta)$",
      "$\\sin^2(4\\theta)$"
    ],
    "answer": 0,
    "explanation": "$2\\sin(A)\\cos(A) = \\sin(2A) = \\sin(8\\theta)$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_MEAN_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "A dataset with mean $\\mu = 16$ has each value multiplied by $3$ and plus $2$. Find new mean.",
    "options": [
      "$48$",
      "$35$",
      "$18$",
      "$54$",
      "$50$"
    ],
    "answer": 4,
    "explanation": "$\\mu_{\\text{new}} = 3(16) + 2 = 50$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_ALG_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Simplify $\\frac{x^2 - 25}{x + 5}$.",
    "options": [
      "$x + 6$",
      "$x - 5$",
      "$x + 5$",
      "$x - 7$",
      "$x - 6$"
    ],
    "answer": 1,
    "explanation": "$\\frac{(x - 5)(x + 5)}{x + 5} = x - 5$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_POLY_ANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Sum of interior angles of regular polygon with $8$ sides.",
    "options": [
      "$1260^\\circ$",
      "$900^\\circ$",
      "$1440^\\circ$",
      "$1620^\\circ$",
      "$1080^\\circ$"
    ],
    "answer": 4,
    "explanation": "Sum $= 1080^\\circ$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_SD_SCALE",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "If a dataset with standard deviation $\\sigma = 7$ has each value multiplied by $4$, what is the new SD?",
    "options": [
      "$7$",
      "$14$",
      "$28$",
      "$30$",
      "$112$"
    ],
    "answer": 2,
    "explanation": "$\\sigma_{\\text{new}} = 4 \\times (7) = 28$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_PART_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Decompose $\\frac{3}{(x + 3)(x + 6)}$ into partial fractions.",
    "options": [
      "$\\frac{2}{x + 3} - \\frac{1}{x + 6}$",
      "$\\frac{3}{x + 3} + \\frac{3}{x + 6}$",
      "$\\frac{1}{x + 3} - \\frac{2}{x + 6}$",
      "$\\frac{1}{x + 3} - \\frac{1}{x + 6}$",
      "$\\frac{1}{x + 3} + \\frac{1}{x + 6}$"
    ],
    "answer": 3,
    "explanation": "Partial fractions decompose to $\\frac{1}{x + 3} - \\frac{1}{x + 6}$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_COORD_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Area of right triangle with vertices $(0,0)$, $(6, 0)$, and $(0, 15)$.",
    "options": [
      "$55$",
      "$50$",
      "$45$",
      "$65$",
      "$60$"
    ],
    "answer": 2,
    "explanation": "$\\text{Area} = 0.5 \\times 6 \\times 15 = 45$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_SEC_DERIV",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Find $\\frac{d^2y}{dx^2}$ for $y = 6x^3 - 6x$ at $x = 1$.",
    "options": [
      "$72$",
      "$30$",
      "$18$",
      "$36$",
      "$6$"
    ],
    "answer": 3,
    "explanation": "$\\frac{d^2y}{dx^2} = 6(6)x = 36$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_SURDS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Rationalise the denominator of $\\frac{11}{7 - \\sqrt{3}}$ and simplify.",
    "options": [
      "$\\frac{11\\sqrt{3}}{46}$",
      "$\\frac{7 + \\sqrt{3}}{46}$",
      "$\\frac{11(7 - \\sqrt{3})}{46}$",
      "$\\frac{11(7 + \\sqrt{3})}{52}$",
      "$\\frac{11(7 + \\sqrt{3})}{46}$"
    ],
    "answer": 4,
    "explanation": "Multiply numerator and denominator by conjugate $(7 + \\sqrt{3})$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_PERP_GRAD",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Find gradient perpendicular to $y = 6x + 9$.",
    "options": [
      "$-6$",
      "$\\frac{1}{6}$",
      "$-\\frac{1}{6}$",
      "$6$",
      "$-\\frac{1}{7}$"
    ],
    "answer": 2,
    "explanation": "$m_\\perp = -\\frac{1}{6}$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_TANG_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Gradient of tangent to $y = 7x^2$ at $x = 1$.",
    "options": [
      "$14$",
      "$49$",
      "$16$",
      "$7$",
      "$2$"
    ],
    "answer": 0,
    "explanation": "$\\frac{dy}{dx} = 2(7)x = 14$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_EXPONENTS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Easy",
    "question": "Evaluate the exact value of $(36)^{3/2} + 5$.",
    "options": [
      "$241$",
      "$231$",
      "$219$",
      "$221$",
      "$223$"
    ],
    "answer": 3,
    "explanation": "$(\\sqrt{36})^3 + 5 = 221$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_CIRC_TANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Equation of vertical tangent to $x^2 + y^2 = 49$ at $(7, 0)$.",
    "options": [
      "$y = 0$",
      "$x = -7$",
      "$x = 49$",
      "$x = 7$",
      "$y = 7$"
    ],
    "answer": 3,
    "explanation": "Vertical tangent is $x = 7$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_NORM_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "If tangent gradient is $11$, find normal gradient.",
    "options": [
      "$-11$",
      "$-\\frac{1}{11}$",
      "$-\\frac{1}{12}$",
      "$11$",
      "$\\frac{1}{11}$"
    ],
    "answer": 1,
    "explanation": "$m_n = -\\frac{1}{11}$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_DISCRIM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $c$ such that $x^2 + 12x + c = 0$ has exactly one repeated real root.",
    "options": [
      "$c = 36$",
      "$c = 42$",
      "$c = 38$",
      "$c = 44$",
      "$c = 40$"
    ],
    "answer": 0,
    "explanation": "$\\Delta = (12)^2 - 4c = 0 \\implies c = 36$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_CIRC_EQ",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Cartesian equation of circle with centre $(5, -6)$ and radius $7$.",
    "options": [
      "$(x + 5)^2 + (y - 6)^2 = 49$",
      "$(x + 5)^2 + (y + 6)^2 = 49$",
      "$(x - 5)^2 + (y + 6)^2 = 49$",
      "$(x - 5)^2 + (y - 6)^2 = 49$",
      "$(x - 5)^2 + (y + 6)^2 = 7$"
    ],
    "answer": 2,
    "explanation": "$(x - 5)^2 + (y + 6)^2 = 49$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_STAT_PT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Positive $x$-coordinate of stationary point of $y = x^3 - 18x + 4$.",
    "options": [
      "$\\frac{1}{\\sqrt{6}}$",
      "$7$",
      "$12$",
      "$\\sqrt{6}$",
      "$6$"
    ],
    "answer": 3,
    "explanation": "$3x^2 = 3(6) \\implies x = \\sqrt{6}$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_COMP_SQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find the minimum turning point of $y = x^2 - 12x + 46$.",
    "options": [
      "$(6, 10)$",
      "$(-6, -12)$",
      "$(-6, 10)$",
      "$(6, -12)$",
      "$(6, 14)$"
    ],
    "answer": 0,
    "explanation": "$y = (x - 6)^2 + 10$. Minimum point is $(6, 10)$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_EXACT_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Exact value of $\\tan(45^\\circ) + \\cos(60^\\circ) + 5$.",
    "options": [
      "$6.5$",
      "$5.5$",
      "$7.0$",
      "$6.0$",
      "$5.0$"
    ],
    "answer": 0,
    "explanation": "$1 + 0.5 + 5 = 6.5$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_DEF_INT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^2 15x^2 \\, dx$.",
    "options": [
      "$42$",
      "$40$",
      "$60$",
      "$20$",
      "$80$"
    ],
    "answer": 1,
    "explanation": "$\\left[ 5x^3 \\right]_0^2 = 40$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_INEQUAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve the quadratic inequality $(x - 5)(x - 9) < 0$.",
    "options": [
      "$5 < x < 9$",
      "$6 < x < 10$",
      "$7 < x < 11$",
      "$x < 5 \\text{ or } x > 9$",
      "$-9 < x < -5$"
    ],
    "answer": 0,
    "explanation": "Parabola is below x-axis strictly between roots: $5 < x < 9$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_COS_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle ABC$, $b = 6, c = 7$, $\\angle A = 60^\\circ$. Find $a^2$.",
    "options": [
      "$26$",
      "$42$",
      "$85$",
      "$127$",
      "$43$"
    ],
    "answer": 4,
    "explanation": "$a^2 = 43$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_KIN_VEL",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Displacement $s(t) = 10t + 4t^2$. Find velocity at $t = 1\\text{ s}$.",
    "options": [
      "$12\\text{ m s}^{-1}$",
      "$16\\text{ m s}^{-1}$",
      "$20\\text{ m s}^{-1}$",
      "$14\\text{ m s}^{-1}$",
      "$18\\text{ m s}^{-1}$"
    ],
    "answer": 4,
    "explanation": "$v(1) = 10 + 8 = 18\\text{ m s}^{-1}$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_SIMULT",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find positive $x$-intercept of line $y = 7x$ and curve $y = x^2 - 7x$.",
    "options": [
      "$x = 16$",
      "$x = 12$",
      "$x = 11$",
      "$x = 18$",
      "$x = 14$"
    ],
    "answer": 4,
    "explanation": "$x^2 - 14x = 0 \\implies x = 14$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_SIN_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle PQR$, $\\frac{p}{\\sin(30^\\circ)} = 20$. Find $p$.",
    "options": [
      "$40$",
      "$10$",
      "$5$",
      "$11$",
      "$20$"
    ],
    "answer": 1,
    "explanation": "$p = 20 \\times 0.5 = 10$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_KIN_DISP",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Velocity $v(t) = 15 + 6t$. Find displacement $\\Delta s$ from $t=0$ to $t=2\\text{ s}$.",
    "options": [
      "$32\\text{ m}$",
      "$38\\text{ m}$",
      "$34\\text{ m}$",
      "$42\\text{ m}$",
      "$36\\text{ m}$"
    ],
    "answer": 3,
    "explanation": "$\\Delta s = 2(15) + 12 = 42\\text{ m}$.",
    "number": 27
  },
  {
    "type_tag": "PHY_MECH_YOUNG_MOD",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Stress $\\sigma$ is $200\\text{ MPa}$, strain $\\varepsilon$ is $0.004$. Young modulus $E$?",
    "options": [
      "$50.0\\text{ GPa}$",
      "$110.0\\text{ GPa}$",
      "$70.0\\text{ GPa}$",
      "$90.0\\text{ GPa}$",
      "$130.0\\text{ GPa}$"
    ],
    "answer": 0,
    "explanation": "$E = \\frac{\\sigma}{\\varepsilon} = 50.0\\text{ GPa}$.",
    "number": 28
  },
  {
    "type_tag": "PHY_WAV_SPEED_FREQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Wave with speed $300\\text{ m s}^{-1}$ and frequency $200\\text{ Hz}$. Wavelength $\\lambda$?",
    "options": [
      "$4.50\\text{ m}$",
      "$5.50\\text{ m}$",
      "$2.50\\text{ m}$",
      "$1.50\\text{ m}$",
      "$3.50\\text{ m}$"
    ],
    "answer": 3,
    "explanation": "$\\lambda = \\frac{300}{200} = 1.50\\text{ m}$.",
    "number": 29
  },
  {
    "type_tag": "PHY_QUA_PHOTOELEC",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Photon energy $E$ for frequency $f = 5 \\times 10^{15}\\text{ Hz}$ in terms of Planck's constant $h$.",
    "options": [
      "$25h \\times 10^{15}\\text{ J}$",
      "$5h \\times 10^{8}\\text{ J}$",
      "$5h \\times 10^{15}\\text{ J}$",
      "$5hc\\text{ J}$",
      "$\\frac{h}{5} \\times 10^{15}\\text{ J}$"
    ],
    "answer": 2,
    "explanation": "$E = hf = 5h \\times 10^{15}\\text{ J}$.",
    "number": 30
  },
  {
    "type_tag": "PHY_MECH_INCLINE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Component of gravity down $30^\\circ$ slope for mass $8\\text{ kg}$ ($g=10$).",
    "options": [
      "$80\\text{ N}$",
      "$8\\text{ N}$",
      "$69.3\\text{ N}$",
      "$20\\text{ N}$",
      "$40\\text{ N}$"
    ],
    "answer": 4,
    "explanation": "$F_\\parallel = mg\\sin(30^\\circ) = 40\\text{ N}$.",
    "number": 31
  },
  {
    "type_tag": "PHY_WAV_SNELL_LAW",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Critical angle $\\theta_c$ for medium with refractive index $n = 1.60$ to air ($n=1.00$).",
    "options": [
      "$\\arcsin(1.60)$",
      "$\\frac{1.60}{1.00}$",
      "$\\arcsin\\left(\\frac{1}{1.60}\\right)$",
      "$\\arccos(1.60)$",
      "$\\arctan(1.60)$"
    ],
    "answer": 2,
    "explanation": "$\\sin\\theta_c = \\frac{1}{n} \\implies \\theta_c = \\arcsin(1/1.60)$.",
    "number": 32
  },
  {
    "type_tag": "PHY_THM_RMS_SPEED",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "If absolute temperature is increased by factor $25$, RMS molecular speed increases by factor:",
    "options": [
      "$625$",
      "$1$",
      "$5$",
      "$\\sqrt{5}$",
      "$25$"
    ],
    "answer": 2,
    "explanation": "$c_{\\text{rms}} \\propto \\sqrt{T} \\implies \\sqrt{25} = 5$.",
    "number": 33
  },
  {
    "type_tag": "PHY_MECH_CENTRIPETAL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Hard",
    "question": "Centripetal force on $2\\text{ kg}$ moving at $12\\text{ m s}^{-1}$ in circle radius $3\\text{ m}$.",
    "options": [
      "$98\\text{ N}$",
      "$102\\text{ N}$",
      "$104\\text{ N}$",
      "$100\\text{ N}$",
      "$96\\text{ N}$"
    ],
    "answer": 4,
    "explanation": "$F_c = \\frac{mv^2}{r} = 96\\text{ N}$.",
    "number": 34
  },
  {
    "type_tag": "PHY_WAV_DIFFRACTION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Hard",
    "question": "Light of wavelength $500\\text{ nm}$ incident on grating with $d = 8.0\\,\\mu\\text{m}$. $\\sin\\theta_1$?",
    "options": [
      "$0.163$",
      "$0.062$",
      "$0.463$",
      "$0.263$",
      "$0.362$"
    ],
    "answer": 1,
    "explanation": "$\\sin\\theta = \\frac{\\lambda}{d} = 0.062$.",
    "number": 35
  },
  {
    "type_tag": "PHY_THM_FIRST_LAW",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "A gas absorbs $400\\text{ J}$ of heat and does $120\\text{ J}$ of work. Change in internal energy $\\Delta U$?",
    "options": [
      "$290\\text{ J}$",
      "$400\\text{ J}$",
      "$520\\text{ J}$",
      "$120\\text{ J}$",
      "$280\\text{ J}$"
    ],
    "answer": 4,
    "explanation": "$\\Delta U = Q - W = 400 - 120 = 280\\text{ J}$.",
    "number": 36
  },
  {
    "type_tag": "PHY_MECH_DENSITY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Density of object with mass $400\\text{ g}$ and volume $50\\text{ cm}^3$.",
    "options": [
      "$9\\text{ g cm}^{-3}$",
      "$200\\text{ g cm}^{-3}$",
      "$4\\text{ g cm}^{-3}$",
      "$16\\text{ g cm}^{-3}$",
      "$8\\text{ g cm}^{-3}$"
    ],
    "answer": 4,
    "explanation": "$\\rho = \\frac{m}{V} = 8\\text{ g cm}^{-3}$.",
    "number": 37
  },
  {
    "type_tag": "PHY_WAV_DOPPLER",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Sound source of frequency $600\\text{ Hz}$ moves towards stationary observer. Observed frequency $f'$ is:",
    "options": [
      "Halved",
      "Exactly $600\\text{ Hz}$",
      "$0\\text{ Hz}$",
      "Less than $600\\text{ Hz}$",
      "Greater than $600\\text{ Hz}$"
    ],
    "answer": 4,
    "explanation": "Approaching source increases observed frequency.",
    "number": 38
  },
  {
    "type_tag": "PHY_FLD_ESCAPE_VEL",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Escape velocity from planet of mass $4M$ and radius $R$.",
    "options": [
      "$\\sqrt{\\frac{4GM}{2R}}$",
      "$8\\frac{GM}{R}$",
      "$\\sqrt{8\\frac{GM}{R}}$",
      "$\\sqrt{\\frac{GM}{R}}$",
      "$\\frac{4GM}{R^2}$"
    ],
    "answer": 2,
    "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2G(4M)}{R}} = \\sqrt{8\\frac{GM}{R}}$.",
    "number": 39
  },
  {
    "type_tag": "PHY_MECH_PRESSURE_FLUID",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Hydrostatic pressure at depth $20\\text{ m}$ in water ($\\rho=1000, g=10$).",
    "options": [
      "$2000\\text{ kPa}$",
      "$200\\text{ kPa}$",
      "$40\\text{ kPa}$",
      "$100\\text{ kPa}$",
      "$20\\text{ kPa}$"
    ],
    "answer": 1,
    "explanation": "$P = \\rho gh = 200\\text{ kPa}$.",
    "number": 40
  },
  {
    "type_tag": "PHY_WAV_INTERFERENCE",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Medium",
    "question": "Path difference for the $4\\text{th}$ order constructive interference of wavelength $\\lambda$.",
    "options": [
      "$(2(4)+1)\\lambda$",
      "$8\\lambda$",
      "$(4 + 0.5)\\lambda$",
      "$4\\lambda$",
      "$\\frac{4\\lambda}{2}$"
    ],
    "answer": 3,
    "explanation": "Path difference $= n\\lambda = 4\\lambda$.",
    "number": 41
  },
  {
    "type_tag": "PHY_NUC_MASS_DEFECT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "Mass defect $\\Delta m = 4 \\times 10^{-28}\\text{ kg}$ converted to energy ($c=3\\times 10^8\\text{ m s}^{-1}$).",
    "options": [
      "$36 \\times 10^{-12}\\text{ J}$",
      "$36 \\times 10^{-20}\\text{ J}$",
      "$24 \\times 10^{-12}\\text{ J}$",
      "$4 \\times 10^{-12}\\text{ J}$",
      "$12 \\times 10^{-12}\\text{ J}$"
    ],
    "answer": 0,
    "explanation": "$E = \\Delta m c^2 = (4 \\times 10^{-28})(9 \\times 10^{16}) = 36 \\times 10^{-12}\\text{ J}$.",
    "number": 42
  },
  {
    "type_tag": "PHY_MECH_EFFICIENCY",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Useful work output is $160\\text{ J}$ from total input $200\\text{ J}$. Efficiency?",
    "options": [
      "$90\\%$",
      "$50\\%$",
      "$20\\%$",
      "$40\\%$",
      "$80\\%$"
    ],
    "answer": 4,
    "explanation": "$\\text{Efficiency} = 80\\%$.",
    "number": 43
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF1",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "At a circuit junction, currents $I_1 = 4\\text{ A}$ and $I_2 = 6\\text{ A}$ enter. Current $I_3$ leaving junction is:",
    "options": [
      "$13\\text{ A}$",
      "$12\\text{ A}$",
      "$10\\text{ A}$",
      "$11\\text{ A}$",
      "$9\\text{ A}$"
    ],
    "answer": 2,
    "explanation": "$I_3 = I_1 + I_2 = 4 + (6) = 10\\text{ A}$.",
    "number": 44
  },
  {
    "type_tag": "PHY_QUA_DE_BROGLIE",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Medium",
    "question": "de Broglie wavelength of particle with momentum $p = 5 \\times 10^{-24}\\text{ kg m s}^{-1}$ in terms of $h$.",
    "options": [
      "$\\frac{h}{5 \\times 10^{-24}}$",
      "$5h \\times 10^{-24}$",
      "$\\frac{hc}{5}$",
      "$\\frac{5 \\times 10^{-24}}{h}$",
      "$\\frac{h}{25 \\times 10^{-24}}$"
    ],
    "answer": 0,
    "explanation": "$\\lambda = \\frac{h}{p} = \\frac{h}{5 \\times 10^{-24}}$.",
    "number": 45
  },
  {
    "type_tag": "PHY_MECH_MOMENT_FORCE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Moment of force of $40\\text{ N}$ acting at perpendicular distance $0.5\\text{ m}$.",
    "options": [
      "$80\\text{ N m}$",
      "$20\\text{ N m}$",
      "$10.0\\text{ N m}$",
      "$40\\text{ N m}$",
      "$22\\text{ N m}$"
    ],
    "answer": 1,
    "explanation": "$\\tau = F d = 20\\text{ N m}$.",
    "number": 46
  },
  {
    "type_tag": "PHY_ELEC_KIRCHHOFF2",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "In a closed loop with EMF $24\\text{ V}$ and resistors $R_1 = 4\\,\\Omega, R_2 = 8\\,\\Omega$, current $I$ is:",
    "options": [
      "$4.4\\text{ A}$",
      "$3.4\\text{ A}$",
      "$0.9\\text{ A}$",
      "$2.4\\text{ A}$",
      "$1.4\\text{ A}$"
    ],
    "answer": 3,
    "explanation": "$I = \\frac{24}{12} = 2.4\\text{ A}$.",
    "number": 47
  },
  {
    "type_tag": "PHY_THM_LATENT_HEAT",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Energy required to vaporize mass $4\\text{ kg}$ with specific latent heat $L = 2.26 \\times 10^6\\text{ J kg}^{-1}$.",
    "options": [
      "$9.04 \\times 10^6\\text{ J}$",
      "$11.04 \\times 10^6\\text{ J}$",
      "$13.04 \\times 10^6\\text{ J}$",
      "$10.04 \\times 10^6\\text{ J}$",
      "$12.04 \\times 10^6\\text{ J}$"
    ],
    "answer": 0,
    "explanation": "$Q = mL = 9.04 \\times 10^6\\text{ J}$.",
    "number": 48
  },
  {
    "type_tag": "PHY_MECH_IMPULSE",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Medium",
    "question": "Force of $80\\text{ N}$ acts for $0.2\\text{ s}$. Calculate impulse $\\Delta p$.",
    "options": [
      "$32\\text{ N s}$",
      "$17\\text{ N s}$",
      "$80\\text{ N s}$",
      "$8\\text{ N s}$",
      "$16\\text{ N s}$"
    ],
    "answer": 4,
    "explanation": "$\\text{Impulse} = 16\\text{ N s}$.",
    "number": 49
  },
  {
    "type_tag": "PHY_WAV_POLARISATION",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Which of the following electromagnetic waves (frequency $4 \\times 10^{14}\\text{ Hz}$) can be polarised?",
    "options": [
      "Ultrasound waves",
      "Longitudinal seismic P-waves",
      "Light waves (transverse EM)",
      "Sound waves in air",
      "Pressure waves in water"
    ],
    "answer": 2,
    "explanation": "Only transverse waves can be polarised.",
    "number": 50
  },
  {
    "type_tag": "PHY_FLD_LORENTZ_F",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Hard",
    "question": "Magnetic force on charge $4\\text{ C}$ moving at $5\\text{ m s}^{-1}$ perpendicular to field $0.4\\text{ T}$.",
    "options": [
      "$10.0\\text{ N}$",
      "$8\\text{ N}$",
      "$16\\text{ N}$",
      "$9\\text{ N}$",
      "$4\\text{ N}$"
    ],
    "answer": 1,
    "explanation": "$F = qvB = (4)(5)(0.4) = 8\\text{ N}$.",
    "number": 51
  },
  {
    "type_tag": "PHY_MECH_FREE_FALL",
    "module": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "question": "Time taken for an object of mass $4\\text{ kg}$ to drop $45\\text{ m}$ from rest ($g=10\\text{ m s}^{-2}$).",
    "options": [
      "$1.5\\text{ s}$",
      "$2\\text{ s}$",
      "$3\\text{ s}$",
      "$4.5\\text{ s}$",
      "$9\\text{ s}$"
    ],
    "answer": 2,
    "explanation": "$t = \\sqrt{2h/g} = 3\\text{ s}$ (independent of mass).",
    "number": 52
  },
  {
    "type_tag": "PHY_ELEC_POWER_EQ",
    "module": "Physics",
    "topic": "Electricity & Waves",
    "difficulty": "Easy",
    "question": "Electrical power dissipated in resistor $R = 6\\,\\Omega$ carrying current $I = 2\\text{ A}$.",
    "options": [
      "$26\\text{ W}$",
      "$24\\text{ W}$",
      "$48\\text{ W}$",
      "$12\\text{ W}$",
      "$6\\text{ W}$"
    ],
    "answer": 1,
    "explanation": "$P = I^2 R = 4(6) = 24\\text{ W}$.",
    "number": 53
  },
  {
    "type_tag": "PHY_NUC_ALPHA_DECAY",
    "module": "Physics",
    "topic": "Thermal & Fields",
    "difficulty": "Easy",
    "question": "Nuclide $^{238}_{92}\\text{U}$ undergoing $4$ alpha ($\\alpha$) decay(s) has new atomic number $Z$:",
    "options": [
      "$76$",
      "$88$",
      "$100$",
      "$92$",
      "$84$"
    ],
    "answer": 4,
    "explanation": "Each $\\alpha$ decay decreases $Z$ by $2 \\implies 92 - 2(4) = 84$.",
    "number": 54
  },
  {
    "type_tag": "CHM_ATM_INTERMOL_H",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Which alcohol among isomers in batch 4 forms intermolecular hydrogen bonds?",
    "options": [
      "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)",
      "Ethane ($\\text{C}_2\\text{H}_6$)",
      "Fluoroethane",
      "Dimethyl ether ($\\text{CH}_3\\text{OCH}_3$)",
      "Propane"
    ],
    "answer": 0,
    "explanation": "Ethanol contains $-\\text{OH}$ group capable of hydrogen bonding.",
    "number": 55
  },
  {
    "type_tag": "CHM_ENR_CELL_EMF",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Standard cell potential given $E^\\circ[\\text{anode}] = -0.90\\text{ V}, E^\\circ[\\text{cathode}] = +0.34\\text{ V}$.",
    "options": [
      "$-0.56\\text{ V}$",
      "$-1.24\\text{ V}$",
      "$+0.34\\text{ V}$",
      "$+0.56\\text{ V}$",
      "$+1.24\\text{ V}$"
    ],
    "answer": 4,
    "explanation": "$E^\\circ_{\\text{cell}} = +0.34 - (-0.90) = +1.24\\text{ V}$.",
    "number": 56
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_SEC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Oxidation of secondary alcohol (e.g. propan-2-ol) in tube 4 yields:",
    "options": [
      "An aldehyde",
      "A carboxylic acid",
      "An ester",
      "A ketone (propanone)",
      "An alkene"
    ],
    "answer": 3,
    "explanation": "Secondary alcohols oxidize to ketones.",
    "number": 57
  },
  {
    "type_tag": "CHM_ATM_LATTICE_E",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Which ionic solid has stronger lattice enthalpy: $\\text{MgO}$ or $\\text{NaCl}$ in comparison 4?",
    "options": [
      "$\\text{NaCl}$",
      "Equal lattice energy",
      "$\\text{NaBr}$",
      "$\\text{MgO}$ (due to $+2/-2$ charges)",
      "$\\text{KCl}$"
    ],
    "answer": 3,
    "explanation": "Doubled charges in $\\text{MgO}$ give roughly $4\\times$ lattice enthalpy.",
    "number": 58
  },
  {
    "type_tag": "CHM_ENR_MOLES_VOL",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Volume of $2.0\\text{ mol}$ ideal gas at RTP ($24.0\\text{ dm}^3\\text{ mol}^{-1}$).",
    "options": [
      "$96.0\\text{ dm}^3$",
      "$192.0\\text{ dm}^3$",
      "$24.0\\text{ dm}^3$",
      "$48.0\\text{ dm}^3$",
      "$50.0\\text{ dm}^3$"
    ],
    "answer": 3,
    "explanation": "$V = n \\times 24.0 = 48.0\\text{ dm}^3$.",
    "number": 59
  },
  {
    "type_tag": "CHM_ORG_ESTERIFICATION",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reagents for esterification of ethanol and ethanoic acid in flask 4:",
    "options": [
      "Nickel catalyst",
      "Concentrated $\\text{H}_2\\text{SO}_4$ catalyst and heat",
      "Dry ether",
      "Acidified $\\text{KMnO}_4$",
      "Aqueous $\\text{NaOH}$"
    ],
    "answer": 1,
    "explanation": "Concentrated $\\text{H}_2\\text{SO}_4$ catalyses Fischer esterification.",
    "number": 60
  },
  {
    "type_tag": "CHM_ATM_PERIOD_RADIUS",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Across Period 3 from Na to Cl, atomic radius trend observed in experiment 4:",
    "options": [
      "Increases due to more electrons",
      "Remains constant",
      "Decreases due to higher effective nuclear charge with constant shielding",
      "Increases then decreases",
      "Decreases then increases"
    ],
    "answer": 2,
    "explanation": "Greater $Z_{\\text{eff}}$ pulls electrons closer.",
    "number": 61
  },
  {
    "type_tag": "CHM_ENR_BOND_ENTHALPY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Enthalpy change $\\Delta H$ calculated from bond enthalpies in reaction 4:",
    "options": [
      "$\\text{Products} - \\text{Reactants}$",
      "$\\sum BE(\\text{bonds broken}) - \\sum BE(\\text{bonds formed})$",
      "$\\sum BE(\\text{products}) + \\sum BE(\\text{reactants})$",
      "$\\sum BE(\\text{reactants}) \\times 2$",
      "$\\sum BE(\\text{formed}) - \\sum BE(\\text{broken})$"
    ],
    "answer": 1,
    "explanation": "$\\Delta H = \\text{Bonds broken} - \\text{Bonds formed}$.",
    "number": 62
  },
  {
    "type_tag": "CHM_ORG_COND_POLY",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Small molecule eliminated during Nylon-6,6 condensation polymerisation in reactor 4:",
    "options": [
      "$\\text{HCl}$",
      "$\\text{NH}_3$",
      "$\\text{CH}_4$",
      "$\\text{CO}_2$",
      "Water ($\\text{H}_2\\text{O}$)"
    ],
    "answer": 4,
    "explanation": "Amide bond formation eliminates water.",
    "number": 63
  },
  {
    "type_tag": "CHM_ATM_REDOX_HALF",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Electrons transferred in: $\\text{MnO}_4^- + 8\\text{H}^+ + ne^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ in titration 4.",
    "options": [
      "$5e^-$",
      "$2e^-$",
      "$7e^-$",
      "$8e^-$",
      "$3e^-$"
    ],
    "answer": 0,
    "explanation": "Mn oxidation state $+7 \\to +2 \\implies 5e^-$.",
    "number": 64
  },
  {
    "type_tag": "CHM_ENR_ARRHENIUS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "In Arrhenius reaction system 4 with rate $k = A e^{-E_a/RT}$, the parameter $E_a$ is:",
    "options": [
      "Entropy of activation",
      "Enthalpy of reaction",
      "Activation energy for the reaction",
      "Frequency factor",
      "Equilibrium constant"
    ],
    "answer": 2,
    "explanation": "$E_a$ is the activation energy.",
    "number": 65
  },
  {
    "type_tag": "CHM_ORG_TLC_RF",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Spot moves $6.0\\text{ cm}$, solvent front moves $10.0\\text{ cm}$. $R_f$ value?",
    "options": [
      "$0.80$",
      "$0.40$",
      "$0.50$",
      "$0.60$",
      "$0.70$"
    ],
    "answer": 3,
    "explanation": "$R_f = \\frac{6.0}{10.0} = 0.60$.",
    "number": 66
  },
  {
    "type_tag": "CHM_ATM_BOND_POLARITY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Bond type between atoms having Pauling electronegativity difference $\\Delta \\chi = 2.0$:",
    "options": [
      "Coordinate covalent",
      "Metallic",
      "Non-polar covalent",
      "Polar covalent bond (with partial dipole)",
      "Pure ionic"
    ],
    "answer": 3,
    "explanation": "Electronegativity difference creates polar covalent dipole.",
    "number": 67
  },
  {
    "type_tag": "CHM_ENR_TITRATION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Moles of $\\text{HCl}$ in $80.0\\text{ cm}^3$ of $0.50\\text{ mol dm}^{-3}$ solution.",
    "options": [
      "$0.080\\text{ mol}$",
      "$0.40\\text{ mol}$",
      "$40.0\\text{ mol}$",
      "$0.040\\text{ mol}$",
      "$0.0040\\text{ mol}$"
    ],
    "answer": 3,
    "explanation": "$n = 0.50 \\times \\frac{80.0}{1000} = 0.040\\text{ mol}$.",
    "number": 68
  },
  {
    "type_tag": "CHM_ORG_TEST_ALKENE",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Reagent test confirming C=C unsaturation in alkene sample 4:",
    "options": [
      "Acidified dichromate",
      "Tollens' reagent",
      "Biuret reagent",
      "Benedict's solution",
      "Bromine water (orange-brown decolourises)"
    ],
    "answer": 4,
    "explanation": "Electrophilic addition of bromine decolourises solution.",
    "number": 69
  },
  {
    "type_tag": "CHM_ATM_OCTET_EXPAND",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Molecule $\\text{BrF}_5$ features:",
    "options": [
      "No covalent bonds",
      "Coordinate bonds only",
      "An incomplete octet (less than 8)",
      "An expanded octet on central atom",
      "Exactly 8 valence electrons"
    ],
    "answer": 3,
    "explanation": "$\\text{BrF}_5$ expands octet using available d-orbitals.",
    "number": 70
  },
  {
    "type_tag": "CHM_ENR_CATALYST",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "In reaction 4, adding a catalyst increases rate by:",
    "options": [
      "Increasing $\\Delta H$ of reaction",
      "Increasing equilibrium constant $K_c$",
      "Increasing temperature of reactants",
      "Providing an alternative pathway with lower activation energy",
      "Consuming excess products"
    ],
    "answer": 3,
    "explanation": "Catalysts lower $E_a$ without altering equilibrium.",
    "number": 71
  },
  {
    "type_tag": "CHM_ORG_TOLLENS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Tollens' reagent ($[\\text{Ag}(\\text{NH}_3)_2]^+$) gives silver mirror with sample 4 containing:",
    "options": [
      "A ketone only",
      "An alkane",
      "An ester",
      "A tertiary alcohol",
      "An aldehyde (oxidised to carboxylate)"
    ],
    "answer": 4,
    "explanation": "Aldehydes reduce Tollens' reagent to metallic silver.",
    "number": 72
  },
  {
    "type_tag": "CHM_ATM_ISOTOPES",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Two isotopes of element with atomic number $Z=14$ have:",
    "options": [
      "Different atomic numbers",
      "Different electron numbers",
      "Same protons ($14$), different neutrons",
      "Different chemical properties",
      "Same neutrons, different protons"
    ],
    "answer": 2,
    "explanation": "Isotopes share identical proton number $Z$.",
    "number": 73
  },
  {
    "type_tag": "CHM_ENR_ENDOTHERMIC",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "An endothermic reaction with $\\Delta H = +100\\text{ kJ mol}^{-1}$:",
    "options": [
      "Has $\\Delta H < 0$",
      "Absorbs heat from surroundings (surroundings cool)",
      "Releases heat to surroundings",
      "Has zero entropy change",
      "Cannot proceed spontaneously"
    ],
    "answer": 1,
    "explanation": "Endothermic reactions absorb thermal energy ($\\Delta H > 0$).",
    "number": 74
  },
  {
    "type_tag": "CHM_ORG_HOMOLOGOUS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "In series of alkanes ($C_n H_{2n+2}$) up to $n=7$, members share:",
    "options": [
      "Same boiling point",
      "Different general formulas",
      "Same general formula and functional group with successive $-\\text{CH}_2-$ difference",
      "Same melting point",
      "Same molar mass"
    ],
    "answer": 2,
    "explanation": "Homologous series share general formula and functional group.",
    "number": 75
  },
  {
    "type_tag": "CHM_ATM_HYBRIDISATION",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Hybridisation of carbon atoms in alkene $C_{5}H_{10}$ double bond.",
    "options": [
      "$sp^2$",
      "$sp^3$",
      "$dsp^2$",
      "$sp$",
      "$sp^3d$"
    ],
    "answer": 0,
    "explanation": "Trigonal planar carbon with double bond has $sp^2$ hybridisation.",
    "number": 76
  },
  {
    "type_tag": "CHM_ENR_ATOM_ECONOMY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Formula for Percentage Atom Economy in synthetic route 4:",
    "options": [
      "$\\frac{\\text{Mass of product}}{\\text{Mass of waste}} \\times 100\\%$",
      "$\\frac{\\text{Molar mass of desired product}}{\\text{Total molar mass of all reactants}} \\times 100\\%$",
      "$\\frac{\\text{Actual yield}}{\\text{Theoretical yield}} \\times 100\\%$",
      "$\\frac{\\text{Reactant mass}}{\\text{Product mass}} \\times 100\\%$",
      "$\\text{Percentage yield} \\times 2$"
    ],
    "answer": 1,
    "explanation": "Atom economy measures incorporated reactant atoms.",
    "number": 77
  },
  {
    "type_tag": "CHM_ORG_BENZENE_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "question": "Characteristic reaction mechanism of benzene ring in nitration experiment 4:",
    "options": [
      "Nucleophilic Substitution",
      "Electrophilic Addition",
      "Electrophilic Aromatic Substitution",
      "Elimination",
      "Free Radical Addition"
    ],
    "answer": 2,
    "explanation": "Electrophilic substitution preserves aromatic resonance stability.",
    "number": 78
  },
  {
    "type_tag": "CHM_ATM_NOBLE_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Electronic configuration of noble gas Krypton (Kr, Z=36).",
    "options": [
      "$1s^2 2s^2 2p^6 3s^2$",
      "$[\\text{He}] 2s^1$",
      "$[\\text{Ar}] 3d^{10} 4s^2 4p^6$",
      "$1s^2 2s^2 2p^4$",
      "$1s^2 2s^2 2p^5 3s^1$"
    ],
    "answer": 2,
    "explanation": "Full outer shell configuration: $[\\text{Ar}] 3d^{10} 4s^2 4p^6$.",
    "number": 79
  },
  {
    "type_tag": "CHM_ENR_KP_EXPRESSION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Equilibrium expression $K_p$ for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$ in vessel 4:",
    "options": [
      "$K_p = p(\\text{SO}_3)^2 - p(\\text{SO}_2)^2$",
      "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$",
      "$K_p = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]}$",
      "$K_p = \\frac{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}{p(\\text{SO}_3)^2}$",
      "$K_p = \\frac{2p(\\text{SO}_3)}{2p(\\text{SO}_2) + p(\\text{O}_2)}$"
    ],
    "answer": 1,
    "explanation": "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$.",
    "number": 80
  },
  {
    "type_tag": "CHM_ORG_EZ_ISOMER",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Requirement for $E/Z$ stereoisomerism in alkene sample 4:",
    "options": [
      "Triple bond",
      "Restricted rotation around C=C and two different groups on each double-bonded carbon",
      "Chiral carbon atom",
      "Four identical groups on carbons",
      "Hydrogen bonding capability"
    ],
    "answer": 1,
    "explanation": "Requires restricted rotation and non-identical substituents on both carbons.",
    "number": 81
  }
];

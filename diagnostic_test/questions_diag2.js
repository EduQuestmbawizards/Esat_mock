const QUESTIONS = [
  {
    "type_tag": "M1_ALG_PART_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Decompose $\\frac{3}{(x + 4)(x + 7)}$ into partial fractions.",
    "options": [
      "$\\frac{1}{x + 4} - \\frac{1}{x + 7}$",
      "$\\frac{2}{x + 4} - \\frac{1}{x + 7}$",
      "$\\frac{1}{x + 4} + \\frac{1}{x + 7}$",
      "$\\frac{1}{x + 4} - \\frac{2}{x + 7}$",
      "$\\frac{3}{x + 4} + \\frac{3}{x + 7}$"
    ],
    "answer": 0,
    "explanation": "Partial fractions decompose to $\\frac{1}{x + 4} - \\frac{1}{x + 7}$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_COORD_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Area of right triangle with vertices $(0,0)$, $(8, 0)$, and $(0, 20)$.",
    "options": [
      "$80$",
      "$100$",
      "$90$",
      "$85$",
      "$95$"
    ],
    "answer": 0,
    "explanation": "$\\text{Area} = 0.5 \\times 8 \\times 20 = 80$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_SEC_DERIV",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Find $\\frac{d^2y}{dx^2}$ for $y = 7x^3 - 6x$ at $x = 1$.",
    "options": [
      "$42$",
      "$21$",
      "$84$",
      "$36$",
      "$7$"
    ],
    "answer": 0,
    "explanation": "$\\frac{d^2y}{dx^2} = 6(7)x = 42$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_SURDS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Rationalise the denominator of $\\frac{13}{8 - \\sqrt{3}}$ and simplify.",
    "options": [
      "$\\frac{13(8 + \\sqrt{3})}{67}$",
      "$\\frac{13(8 + \\sqrt{3})}{61}$",
      "$\\frac{8 + \\sqrt{3}}{61}$",
      "$\\frac{13\\sqrt{3}}{61}$",
      "$\\frac{13(8 - \\sqrt{3})}{61}$"
    ],
    "answer": 1,
    "explanation": "Multiply numerator and denominator by conjugate $(8 + \\sqrt{3})$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_PERP_GRAD",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Find gradient perpendicular to $y = 7x + 9$.",
    "options": [
      "$-7$",
      "$\\frac{1}{7}$",
      "$7$",
      "$-\\frac{1}{7}$",
      "$-\\frac{1}{8}$"
    ],
    "answer": 3,
    "explanation": "$m_\\perp = -\\frac{1}{7}$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_TANG_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Gradient of tangent to $y = 8x^2$ at $x = 1$.",
    "options": [
      "$16$",
      "$2$",
      "$64$",
      "$8$",
      "$18$"
    ],
    "answer": 0,
    "explanation": "$\\frac{dy}{dx} = 2(8)x = 16$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_EXPONENTS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Easy",
    "question": "Evaluate the exact value of $(49)^{3/2} + 6$.",
    "options": [
      "$360$",
      "$371$",
      "$347$",
      "$351$",
      "$349$"
    ],
    "answer": 4,
    "explanation": "$(\\sqrt{49})^3 + 6 = 349$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_CIRC_TANG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Equation of vertical tangent to $x^2 + y^2 = 64$ at $(8, 0)$.",
    "options": [
      "$x = 64$",
      "$x = -8$",
      "$y = 8$",
      "$y = 0$",
      "$x = 8$"
    ],
    "answer": 4,
    "explanation": "Vertical tangent is $x = 8$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_NORM_GRAD",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "If tangent gradient is $13$, find normal gradient.",
    "options": [
      "$-\\frac{1}{13}$",
      "$-\\frac{1}{14}$",
      "$13$",
      "$-13$",
      "$\\frac{1}{13}$"
    ],
    "answer": 0,
    "explanation": "$m_n = -\\frac{1}{13}$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_DISCRIM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $c$ such that $x^2 + 14x + c = 0$ has exactly one repeated real root.",
    "options": [
      "$c = 51$",
      "$c = 55$",
      "$c = 53$",
      "$c = 49$",
      "$c = 57$"
    ],
    "answer": 3,
    "explanation": "$\\Delta = (14)^2 - 4c = 0 \\implies c = 49$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_CIRC_EQ",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Cartesian equation of circle with centre $(6, -7)$ and radius $8$.",
    "options": [
      "$(x - 6)^2 + (y - 7)^2 = 64$",
      "$(x + 6)^2 + (y - 7)^2 = 64$",
      "$(x + 6)^2 + (y + 7)^2 = 64$",
      "$(x - 6)^2 + (y + 7)^2 = 64$",
      "$(x - 6)^2 + (y + 7)^2 = 8$"
    ],
    "answer": 3,
    "explanation": "$(x - 6)^2 + (y + 7)^2 = 64$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_STAT_PT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Positive $x$-coordinate of stationary point of $y = x^3 - 21x + 4$.",
    "options": [
      "$\\sqrt{7}$",
      "$7$",
      "$\\frac{1}{\\sqrt{7}}$",
      "$8$",
      "$14$"
    ],
    "answer": 0,
    "explanation": "$3x^2 = 3(7) \\implies x = \\sqrt{7}$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_COMP_SQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find the minimum turning point of $y = x^2 - 14x + 61$.",
    "options": [
      "$(7, -14)$",
      "$(-7, -14)$",
      "$(-7, 12)$",
      "$(7, 16)$",
      "$(7, 12)$"
    ],
    "answer": 4,
    "explanation": "$y = (x - 7)^2 + 12$. Minimum point is $(7, 12)$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_EXACT_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Exact value of $\\tan(45^\\circ) + \\cos(60^\\circ) + 6$.",
    "options": [
      "$7.0$",
      "$6.5$",
      "$7.5$",
      "$8.0$",
      "$6.0$"
    ],
    "answer": 2,
    "explanation": "$1 + 0.5 + 6 = 7.5$.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_DEF_INT",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^2 18x^2 \\, dx$.",
    "options": [
      "$96$",
      "$72$",
      "$50$",
      "$24$",
      "$48$"
    ],
    "answer": 4,
    "explanation": "$\\left[ 6x^3 \\right]_0^2 = 48$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_INEQUAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve the quadratic inequality $(x - 6)(x - 10) < 0$.",
    "options": [
      "$x < 6 \\text{ or } x > 10$",
      "$-10 < x < -6$",
      "$6 < x < 10$",
      "$7 < x < 11$",
      "$8 < x < 12$"
    ],
    "answer": 2,
    "explanation": "Parabola is below x-axis strictly between roots: $6 < x < 10$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_COS_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle ABC$, $b = 7, c = 8$, $\\angle A = 60^\\circ$. Find $a^2$.",
    "options": [
      "$113$",
      "$30$",
      "$169$",
      "$57$",
      "$56$"
    ],
    "answer": 3,
    "explanation": "$a^2 = 57$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_KIN_VEL",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Displacement $s(t) = 12t + 4t^2$. Find velocity at $t = 1\\text{ s}$.",
    "options": [
      "$20\\text{ m s}^{-1}$",
      "$18\\text{ m s}^{-1}$",
      "$16\\text{ m s}^{-1}$",
      "$22\\text{ m s}^{-1}$",
      "$14\\text{ m s}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$v(1) = 12 + 8 = 20\\text{ m s}^{-1}$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_SIMULT",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find positive $x$-intercept of line $y = 8x$ and curve $y = x^2 - 8x$.",
    "options": [
      "$x = 18$",
      "$x = 20$",
      "$x = 14$",
      "$x = 13$",
      "$x = 16$"
    ],
    "answer": 4,
    "explanation": "$x^2 - 16x = 0 \\implies x = 16$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_SIN_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle PQR$, $\\frac{p}{\\sin(30^\\circ)} = 24$. Find $p$.",
    "options": [
      "$6$",
      "$48$",
      "$13$",
      "$12$",
      "$24$"
    ],
    "answer": 3,
    "explanation": "$p = 24 \\times 0.5 = 12$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_KIN_DISP",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Velocity $v(t) = 18 + 6t$. Find displacement $\\Delta s$ from $t=0$ to $t=2\\text{ s}$.",
    "options": [
      "$44\\text{ m}$",
      "$38\\text{ m}$",
      "$42\\text{ m}$",
      "$48\\text{ m}$",
      "$40\\text{ m}$"
    ],
    "answer": 3,
    "explanation": "$\\Delta s = 2(18) + 12 = 48\\text{ m}$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_REMAINDER",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find remainder when $P(x) = 2x^2 - 3x + 11$ is divided by $(x - 6)$.",
    "options": [
      "$65$",
      "$80$",
      "$75$",
      "$70$",
      "$62$"
    ],
    "answer": 0,
    "explanation": "$P(6) = 2(6)^2 - 3(6) + 11 = 65$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_TRI_AREA",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Area of triangle with sides $12\\text{ cm}$ and $6\\text{ cm}$ enclosing $30^\\circ$.",
    "options": [
      "$36\\text{ cm}^2$",
      "$20\\text{ cm}^2$",
      "$9.0\\text{ cm}^2$",
      "$72\\text{ cm}^2$",
      "$18\\text{ cm}^2$"
    ],
    "answer": 4,
    "explanation": "$\\text{Area} = 0.5 \\times 12 \\times 6 \\times 0.5 = 18\\text{ cm}^2$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_AP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "AP has $a = 12$ and $d = 4$. Find $10\\text{th}$ term ($u_{10}$).",
    "options": [
      "$42$",
      "$48$",
      "$44$",
      "$46$",
      "$50$"
    ],
    "answer": 1,
    "explanation": "$u_{10} = 12 + 36$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_FACTOR",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "If $(x - 7)$ is a factor of $x^3 - 9x^2 + kx - 14$, find $k$.",
    "options": [
      "$k = 18$",
      "$k = 20$",
      "$k = 14$",
      "$k = 16$",
      "$k = 13$"
    ],
    "answer": 3,
    "explanation": "$P(7) = 0 \\implies k = 16$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_PYTHAG_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "If acute angle $\\theta$ has $\\sin\\theta = \\frac{12}{37}$, find $\\cos\\theta$.",
    "options": [
      "$\\frac{37}{35}$",
      "$\\frac{35}{37}$",
      "$\\frac{1}{37}$",
      "$\\frac{12}{37}$",
      "$\\frac{12}{35}$"
    ],
    "answer": 1,
    "explanation": "$\\cos\\theta = \\sqrt{1 - (12/37)^2} = \\frac{35}{37}$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_AP_SUM",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum of first $10$ terms of AP with $a = 7$ and $d = 3$.",
    "options": [
      "$210$",
      "$200$",
      "$195$",
      "$205$",
      "$190$"
    ],
    "answer": 3,
    "explanation": "$S_{10} = 5(2(7) + 27) = 205$.",
    "number": 27
  },
  {
    "type_tag": "CHM_ATM_E_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Ground state electron configuration of neutral Phosphorus (P, Z=15).",
    "options": [
      "$1s^2 2s^2 2p^6 3s^2 3p^3$",
      "$[\\text{He}] 2s^2$",
      "$1s^2 2s^2 2p^6 3s^{10}$",
      "$1s^2 2s^2 2p^6$",
      "$1s^2 2s^2 2p^5 3s^2$"
    ],
    "answer": 0,
    "explanation": "Electronic configuration fills subshells: $1s^2 2s^2 2p^6 3s^2 3p^3$.",
    "number": 28
  },
  {
    "type_tag": "CHM_ENR_HESS_LAW",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Calculate $\\Delta H$ given $\\sum \\Delta H_f^\\circ(\\text{prod}) = -1300\\text{ kJ}$ and $\\sum \\Delta H_f^\\circ(\\text{react}) = -450\\text{ kJ}$.",
    "options": [
      "$-1750\\text{ kJ mol}^{-1}$",
      "$-650\\text{ kJ mol}^{-1}$",
      "$-850\\text{ kJ mol}^{-1}$",
      "$+1750\\text{ kJ mol}^{-1}$",
      "$+850\\text{ kJ mol}^{-1}$"
    ],
    "answer": 2,
    "explanation": "$\\Delta H = \\text{Products} - \\text{Reactants} = -850\\text{ kJ mol}^{-1}$.",
    "number": 29
  },
  {
    "type_tag": "CHM_ORG_IUPAC_ALC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of straight-chain alcohol Pentan-1-ol.",
    "options": [
      "Pentan-1-ol",
      "Propanone",
      "Propanoic acid",
      "Ethane",
      "Methoxyethane"
    ],
    "answer": 0,
    "explanation": "Pentan-1-ol is a primary alcohol.",
    "number": 30
  },
  {
    "type_tag": "CHM_ATM_VSEPR_CH4",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR molecular shape and bond angle of methane ($\\text{CH}_4$) in sample 5.",
    "options": [
      "Trigonal planar, $120^\\circ$",
      "Tetrahedral, $109.5^\\circ$",
      "Bent, $104.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Linear, $180^\\circ$"
    ],
    "answer": 1,
    "explanation": "4 bonding pairs, 0 lone pairs $\\implies$ Tetrahedral, $109.5^\\circ$.",
    "number": 31
  },
  {
    "type_tag": "CHM_ENR_GIBBS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Temperature at which reaction with $\\Delta H = +150\\text{ kJ}, \\Delta S = +500\\text{ J K}^{-1}$ has $\\Delta G = 0$.",
    "options": [
      "$T = 30\\text{ K}$",
      "$T = 100\\text{ K}$",
      "$T = 300\\text{ K}$",
      "$T = 3000\\text{ K}$",
      "$T = 0\\text{ K}$"
    ],
    "answer": 2,
    "explanation": "$T = \\frac{\\Delta H}{\\Delta S} = \\frac{150000}{500} = 300\\text{ K}$.",
    "number": 32
  },
  {
    "type_tag": "CHM_ORG_IUPAC_KET",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of ketone Hexan-2-one.",
    "options": [
      "Propanoic acid",
      "Propan-1-ol",
      "Methyl ethanoate",
      "Propanal",
      "Hexan-2-one"
    ],
    "answer": 4,
    "explanation": "Hexan-2-one is an aliphatic ketone.",
    "number": 33
  },
  {
    "type_tag": "CHM_ATM_VSEPR_NH3",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of ammonia ($\\text{NH}_3$) in container 5.",
    "options": [
      "T-shaped, $90^\\circ$",
      "Tetrahedral, $109.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Trigonal planar, $120^\\circ$",
      "Bent, $104.5^\\circ$"
    ],
    "answer": 2,
    "explanation": "3 bonding pairs, 1 lone pair $\\implies$ Trigonal pyramidal, $107^\\circ$.",
    "number": 34
  },
  {
    "type_tag": "CHM_ENR_RATE_EQ",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "$\\text{Rate} = k[A]^{5}[B]$. If $[A]$ is doubled and $[B]$ unchanged, rate increases by factor:",
    "options": [
      "$33$",
      "$34$",
      "$32$",
      "$35$",
      "$36$"
    ],
    "answer": 2,
    "explanation": "Factor $= 2^{5} = 32$.",
    "number": 35
  },
  {
    "type_tag": "CHM_ORG_CHIRAL",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Which compound in set 5 contains an asymmetric chiral carbon?",
    "options": [
      "Ethane",
      "Propan-1-ol",
      "Butan-2-ol ($\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3$)",
      "Propan-2-ol",
      "Butan-1-ol"
    ],
    "answer": 2,
    "explanation": "C-2 in butan-2-ol has 4 distinct substituents.",
    "number": 36
  },
  {
    "type_tag": "CHM_ATM_VSEPR_H2O",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of water ($\\text{H}_2\\text{O}$) in trial 5.",
    "options": [
      "Bent, $104.5^\\circ$",
      "Trigonal planar, $120^\\circ$",
      "Linear, $180^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Tetrahedral, $109.5^\\circ$"
    ],
    "answer": 0,
    "explanation": "2 bonding pairs, 2 lone pairs $\\implies$ Bent, $104.5^\\circ$.",
    "number": 37
  },
  {
    "type_tag": "CHM_ENR_LE_CHATELIER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Exothermic reaction with $\\Delta H = -250\\text{ kJ mol}^{-1}$. Increasing temperature causes $K_c$ to:",
    "options": [
      "Double",
      "Increase",
      "Decrease (equilibrium shifts in reverse)",
      "Remain constant",
      "Become zero"
    ],
    "answer": 2,
    "explanation": "Exothermic reactions shift left when heated, lowering $K_c$.",
    "number": 38
  },
  {
    "type_tag": "CHM_ORG_MARKOVNIKOV",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Major organic product of propene reacting with $\\text{HBr}$ in trial 5:",
    "options": [
      "2-bromopropene",
      "Propane",
      "1-bromopropane",
      "2-bromopropane",
      "1,2-dibromopropane"
    ],
    "answer": 3,
    "explanation": "Markovnikov addition proceeds via more stable secondary carbocation.",
    "number": 39
  },
  {
    "type_tag": "CHM_ATM_IONIS_ENERGY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Sharp jump between the 6th and 7th ionisation energies indicates valence electron count of:",
    "options": [
      "$9$ valence electrons",
      "$6$ valence electrons",
      "$10$ valence electrons",
      "$7$ valence electrons",
      "$8$ valence electrons"
    ],
    "answer": 1,
    "explanation": "Jump occurs when removing electron from inner shell after losing all $6$ valence electrons.",
    "number": 40
  },
  {
    "type_tag": "CHM_ENR_PH_STRONG",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "pH of solution with $[\\text{H}^+] = 1.0 \\times 10^{-5}\\text{ mol dm}^{-3}$.",
    "options": [
      "$8.0$",
      "$9.0$",
      "$5.0$",
      "$7.0$",
      "$6.0$"
    ],
    "answer": 2,
    "explanation": "$\\text{pH} = -\\log_{10}(10^{-5}) = 5.0$.",
    "number": 41
  },
  {
    "type_tag": "CHM_ORG_NUCLEO_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reaction mechanism for bromoethane with aqueous $\\text{NaOH}$ in flask 5:",
    "options": [
      "Electrophilic Addition",
      "Elimination",
      "Nucleophilic Substitution ($S_N2$)",
      "Electrophilic Substitution",
      "Free Radical Substitution"
    ],
    "answer": 2,
    "explanation": "$\\text{OH}^-$ nucleophile attacks primary haloalkane via $S_N2$.",
    "number": 42
  },
  {
    "type_tag": "CHM_ATM_ELECTRONEG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Which element among (F, Cl, Br, I, At) has the highest Pauling electronegativity in group set 5?",
    "options": [
      "Astatine (At)",
      "Bromine (Br)",
      "Fluorine (F, 4.0)",
      "Chlorine (Cl)",
      "Iodine (I)"
    ],
    "answer": 2,
    "explanation": "Fluorine has highest electronegativity (4.0).",
    "number": 43
  },
  {
    "type_tag": "CHM_ENR_BUFFER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "pH of buffer with $[\\text{acid}] = [\\text{salt}]$ and $pK_a = 5.00$.",
    "options": [
      "$7.00$",
      "$9.00$",
      "$1.00$",
      "$4.00$",
      "$5.00$"
    ],
    "answer": 4,
    "explanation": "$\\text{pH} = pK_a = 5.00$.",
    "number": 44
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_PRI",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Product of primary alcohol heated under reflux with excess acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in run 5:",
    "options": [
      "Carboxylic acid",
      "Alkene",
      "Aldehyde",
      "Ketone",
      "Ester"
    ],
    "answer": 0,
    "explanation": "Full reflux oxidation yields carboxylic acid.",
    "number": 45
  },
  {
    "type_tag": "CHM_ATM_INTERMOL_H",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Which alcohol among isomers in batch 5 forms intermolecular hydrogen bonds?",
    "options": [
      "Dimethyl ether ($\\text{CH}_3\\text{OCH}_3$)",
      "Fluoroethane",
      "Propane",
      "Ethane ($\\text{C}_2\\text{H}_6$)",
      "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)"
    ],
    "answer": 4,
    "explanation": "Ethanol contains $-\\text{OH}$ group capable of hydrogen bonding.",
    "number": 46
  },
  {
    "type_tag": "CHM_ENR_CELL_EMF",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Standard cell potential given $E^\\circ[\\text{anode}] = -1.00\\text{ V}, E^\\circ[\\text{cathode}] = +0.34\\text{ V}$.",
    "options": [
      "$+1.34\\text{ V}$",
      "$-1.34\\text{ V}$",
      "$+0.66\\text{ V}$",
      "$+0.34\\text{ V}$",
      "$-0.66\\text{ V}$"
    ],
    "answer": 0,
    "explanation": "$E^\\circ_{\\text{cell}} = +0.34 - (-1.00) = +1.34\\text{ V}$.",
    "number": 47
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_SEC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Oxidation of secondary alcohol (e.g. propan-2-ol) in tube 5 yields:",
    "options": [
      "A carboxylic acid",
      "An aldehyde",
      "A ketone (propanone)",
      "An alkene",
      "An ester"
    ],
    "answer": 2,
    "explanation": "Secondary alcohols oxidize to ketones.",
    "number": 48
  },
  {
    "type_tag": "CHM_ATM_LATTICE_E",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Which ionic solid has stronger lattice enthalpy: $\\text{MgO}$ or $\\text{NaCl}$ in comparison 5?",
    "options": [
      "$\\text{NaBr}$",
      "$\\text{NaCl}$",
      "Equal lattice energy",
      "$\\text{MgO}$ (due to $+2/-2$ charges)",
      "$\\text{KCl}$"
    ],
    "answer": 3,
    "explanation": "Doubled charges in $\\text{MgO}$ give roughly $4\\times$ lattice enthalpy.",
    "number": 49
  },
  {
    "type_tag": "CHM_ENR_MOLES_VOL",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Volume of $2.5\\text{ mol}$ ideal gas at RTP ($24.0\\text{ dm}^3\\text{ mol}^{-1}$).",
    "options": [
      "$60.0\\text{ dm}^3$",
      "$62.0\\text{ dm}^3$",
      "$120.0\\text{ dm}^3$",
      "$30.0\\text{ dm}^3$",
      "$240.0\\text{ dm}^3$"
    ],
    "answer": 0,
    "explanation": "$V = n \\times 24.0 = 60.0\\text{ dm}^3$.",
    "number": 50
  },
  {
    "type_tag": "CHM_ORG_ESTERIFICATION",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reagents for esterification of ethanol and ethanoic acid in flask 5:",
    "options": [
      "Nickel catalyst",
      "Concentrated $\\text{H}_2\\text{SO}_4$ catalyst and heat",
      "Acidified $\\text{KMnO}_4$",
      "Dry ether",
      "Aqueous $\\text{NaOH}$"
    ],
    "answer": 1,
    "explanation": "Concentrated $\\text{H}_2\\text{SO}_4$ catalyses Fischer esterification.",
    "number": 51
  },
  {
    "type_tag": "CHM_ATM_PERIOD_RADIUS",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Across Period 3 from Na to Cl, atomic radius trend observed in experiment 5:",
    "options": [
      "Increases due to more electrons",
      "Decreases due to higher effective nuclear charge with constant shielding",
      "Increases then decreases",
      "Remains constant",
      "Decreases then increases"
    ],
    "answer": 1,
    "explanation": "Greater $Z_{\\text{eff}}$ pulls electrons closer.",
    "number": 52
  },
  {
    "type_tag": "CHM_ENR_BOND_ENTHALPY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Enthalpy change $\\Delta H$ calculated from bond enthalpies in reaction 5:",
    "options": [
      "$\\sum BE(\\text{formed}) - \\sum BE(\\text{broken})$",
      "$\\sum BE(\\text{reactants}) \\times 2$",
      "$\\text{Products} - \\text{Reactants}$",
      "$\\sum BE(\\text{bonds broken}) - \\sum BE(\\text{bonds formed})$",
      "$\\sum BE(\\text{products}) + \\sum BE(\\text{reactants})$"
    ],
    "answer": 3,
    "explanation": "$\\Delta H = \\text{Bonds broken} - \\text{Bonds formed}$.",
    "number": 53
  },
  {
    "type_tag": "CHM_ORG_COND_POLY",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Small molecule eliminated during Nylon-6,6 condensation polymerisation in reactor 5:",
    "options": [
      "$\\text{CH}_4$",
      "$\\text{CO}_2$",
      "$\\text{NH}_3$",
      "Water ($\\text{H}_2\\text{O}$)",
      "$\\text{HCl}$"
    ],
    "answer": 3,
    "explanation": "Amide bond formation eliminates water.",
    "number": 54
  },
  {
    "type_tag": "BIO_CEL_TEST_STARCH",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of starch in food extract 4:",
    "options": [
      "Benedict's solution",
      "DCPIP reagent",
      "Ethanol emulsion",
      "Biuret reagent",
      "Iodine in potassium iodide (blue-black colour)"
    ],
    "answer": 4,
    "explanation": "Iodine forms blue-black complex with amylose.",
    "number": 55
  },
  {
    "type_tag": "BIO_GEN_NONSENSE_MUT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "A mutation converting an amino acid codon into a premature STOP codon in gene 4 is a:",
    "options": [
      "Nonsense mutation",
      "Silent mutation",
      "Missense mutation",
      "Frameshift insertion",
      "Duplication"
    ],
    "answer": 0,
    "explanation": "Nonsense mutations introduce premature termination codons.",
    "number": 56
  },
  {
    "type_tag": "BIO_PHY_KREBS_SITE",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Subcellular site of Krebs (citric acid) cycle in eukaryotic cell 4:",
    "options": [
      "Cytoplasm",
      "Intermembrane space",
      "Chloroplast lumen",
      "Mitochondrial Matrix",
      "Inner Mitochondrial Membrane"
    ],
    "answer": 3,
    "explanation": "Krebs cycle enzymes are located in mitochondrial matrix.",
    "number": 57
  },
  {
    "type_tag": "BIO_CEL_TEST_PROTEIN",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of proteins in sample 4:",
    "options": [
      "Iodine solution",
      "Emulsion test",
      "Biuret test (violet / purple colour)",
      "Benedict's test",
      "Ninhydrin only"
    ],
    "answer": 2,
    "explanation": "Biuret reagent reacts with peptide bonds to form purple complex.",
    "number": 58
  },
  {
    "type_tag": "BIO_GEN_DNA_POLYMER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme synthesising new DNA strands in $5' \\to 3'$ direction during replication in cell 4:",
    "options": [
      "DNA Helicase",
      "DNA Ligase",
      "Topoisomerase",
      "DNA Polymerase",
      "RNA Polymerase"
    ],
    "answer": 3,
    "explanation": "DNA Polymerase adds complementary nucleotides in $5'\\to 3'$ direction.",
    "number": 59
  },
  {
    "type_tag": "BIO_PHY_TROPHIC_EFF",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Average percentage of energy transferred from trophic level $4$ to level $5$ in ecosystem:",
    "options": [
      "$10\\%$",
      "$100\\%$",
      "$90\\%$",
      "$1\\%$",
      "$50\\%$"
    ],
    "answer": 0,
    "explanation": "Roughly $10\\%$ ecological efficiency transfers between trophic levels.",
    "number": 60
  },
  {
    "type_tag": "BIO_CEL_TEST_LIPID",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Diagnostic test for lipids/triglycerides in emulsion tube 4:",
    "options": [
      "Fehling's test",
      "Benedict's test",
      "Biuret test",
      "Iodine test",
      "Ethanol emulsion test (milky white layer)"
    ],
    "answer": 4,
    "explanation": "Ethanol dissolving lipids forms cloudy emulsion when added to water.",
    "number": 61
  },
  {
    "type_tag": "BIO_GEN_CROSSING_OVER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Meiotic phase where crossing over and chiasmata occur in gametogenesis 4:",
    "options": [
      "Prophase I",
      "Prophase II",
      "Telophase II",
      "Metaphase I",
      "Anaphase I"
    ],
    "answer": 0,
    "explanation": "Crossing over occurs between homologous non-sister chromatids in Prophase I.",
    "number": 62
  },
  {
    "type_tag": "BIO_PHY_SYNAPSE_CA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Ion triggering neurotransmitter vesicle exocytosis at presynaptic terminal 4:",
    "options": [
      "Calcium ($\\text{Ca}^{2+}$)",
      "Potassium ($\\text{K}^+$)",
      "Magnesium",
      "Chloride ($\\text{Cl}^-$)",
      "Sodium ($\\text{Na}^+$)"
    ],
    "answer": 0,
    "explanation": "$\\text{Ca}^{2+}$ influx triggers SNARE-mediated vesicle fusion.",
    "number": 63
  },
  {
    "type_tag": "BIO_CEL_COMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of competitive inhibitor on enzyme kinetics in assay 4:",
    "options": [
      "Both increase",
      "$V_{\\max}$ decreases; $K_m$ unchanged",
      "Both $V_{\\max}$ and $K_m$ decrease",
      "Neither changes",
      "$V_{\\max}$ unchanged; $K_m$ increases"
    ],
    "answer": 4,
    "explanation": "Competitive inhibitor competes for active site: $V_{\\max}$ unchanged, $K_m$ increases.",
    "number": 64
  },
  {
    "type_tag": "BIO_GEN_DIHYBRID_RATIO",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Expected phenotypic ratio in $F_2$ generation of Mendelian dihybrid cross $AaBb \\times AaBb$ in cross 4:",
    "options": [
      "$1 : 2 : 1$",
      "$3 : 1$",
      "$12 : 3 : 1$",
      "$9 : 3 : 3 : 1$",
      "$1 : 1 : 1 : 1$"
    ],
    "answer": 3,
    "explanation": "Standard unlinked dihybrid cross yields $9:3:3:1$ ratio.",
    "number": 65
  },
  {
    "type_tag": "BIO_PHY_CARDIAC_SYST",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "State of cardiac valves during ventricular systole in cycle 4:",
    "options": [
      "Atrioventricular (AV) valves closed; Semilunar valves open",
      "AV valves open; Semilunar closed",
      "Both open",
      "Tricuspid open; Bicuspid closed",
      "Both closed"
    ],
    "answer": 0,
    "explanation": "High ventricular pressure forces semilunars open and AVs shut.",
    "number": 66
  },
  {
    "type_tag": "BIO_CEL_NONCOMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of non-competitive inhibitor on enzyme kinetics in assay 4:",
    "options": [
      "$V_{\\max}$ unchanged; $K_m$ increases",
      "Both increase",
      "Both decrease",
      "$V_{\\max}$ increases",
      "$V_{\\max}$ decreases; $K_m$ unchanged"
    ],
    "answer": 4,
    "explanation": "Non-competitive inhibitor lowers catalytic turnover without affecting substrate binding.",
    "number": 67
  },
  {
    "type_tag": "BIO_GEN_FRAME_SHIFT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Insertion of $1$ nucleotide base pair in an exon of gene 4 causes a:",
    "options": [
      "Inversion",
      "Silent mutation",
      "Polyploidy",
      "Frameshift mutation",
      "Point substitution only"
    ],
    "answer": 3,
    "explanation": "Non-multiple-of-three insertions alter the translational reading frame.",
    "number": 68
  },
  {
    "type_tag": "BIO_PHY_RESTING_POT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Resting membrane potential maintained across axon membrane in experiment 4:",
    "options": [
      "$-120\\text{ mV}$",
      "$-20\\text{ mV}$",
      "$+40\\text{ mV}$",
      "$-70\\text{ mV}$",
      "$0\\text{ mV}$"
    ],
    "answer": 3,
    "explanation": "Resting potential is maintained at approx $-70\\text{ mV}$ by $\\text{Na}^+/\\text{K}^+$ ATPase.",
    "number": 69
  },
  {
    "type_tag": "BIO_CEL_FLUID_MOSAIC",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Role of cholesterol in mammalian cell membrane model 4:",
    "options": [
      "Transcribes rRNA",
      "Forms cell wall",
      "Pumps sodium ions",
      "Regulates fluidity and stability across changing temperatures",
      "Synthesizes ATP"
    ],
    "answer": 3,
    "explanation": "Cholesterol modulates lipid bilayer fluidity.",
    "number": 70
  },
  {
    "type_tag": "BIO_GEN_DNA_LIGASE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme responsible for joining Okazaki fragments on the lagging strand in cell 4:",
    "options": [
      "DNA Ligase",
      "Exonuclease",
      "DNA Primase",
      "DNA Helicase",
      "DNA Polymerase I"
    ],
    "answer": 0,
    "explanation": "DNA Ligase catalyses phosphodiester bond formation between fragments.",
    "number": 71
  },
  {
    "type_tag": "BIO_PHY_INSULIN",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\beta$-cells following meal in subject 4:",
    "options": [
      "Aldosterone",
      "Insulin",
      "Glucagon",
      "Adrenaline",
      "Somatostatin"
    ],
    "answer": 1,
    "explanation": "Insulin stimulates cellular glucose uptake and glycogenesis.",
    "number": 72
  },
  {
    "type_tag": "BIO_CEL_PROKARYOTE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Structural feature present in prokaryotic bacterium 4 but absent in eukaryotes:",
    "options": [
      "Linear chromosomes",
      "Nucleus",
      "Mitochondria",
      "$80\\text{S}$ ribosomes",
      "Peptidoglycan cell wall and circular naked DNA ($70\\text{S}$ ribosomes)"
    ],
    "answer": 4,
    "explanation": "Prokaryotes possess circular DNA and $70\\text{S}$ ribosomes.",
    "number": 73
  },
  {
    "type_tag": "BIO_GEN_KARYOTYPE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Genetic condition caused by trisomy $21$ ($47$ chromosomes) diagnosed in karyotype 4:",
    "options": [
      "Klinefelter Syndrome",
      "Sickle Cell",
      "Down Syndrome",
      "Turner Syndrome",
      "Hemophilia"
    ],
    "answer": 2,
    "explanation": "Trisomy 21 is Down syndrome.",
    "number": 74
  },
  {
    "type_tag": "BIO_PHY_ALVEOLI_ADAPT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Structural adaptation of pulmonary alveoli maximizing gas exchange rate in lung 4:",
    "options": [
      "Thick lining",
      "Low capillary density",
      "Single-cell thin epithelial wall and extensive capillary network",
      "Small total surface area",
      "Dry surface"
    ],
    "answer": 2,
    "explanation": "Alveoli minimize diffusion distance and maximize surface area.",
    "number": 75
  },
  {
    "type_tag": "BIO_CEL_FACIL_DIFF",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Facilitated diffusion of solute across membrane in cell 4 differs from active transport because it:",
    "options": [
      "Is passive (down gradient) and requires no ATP",
      "Only transports water",
      "Uses endocytosis",
      "Moves solutes against gradient",
      "Requires ATP hydrolysis"
    ],
    "answer": 0,
    "explanation": "Facilitated diffusion is passive downhill transport.",
    "number": 76
  },
  {
    "type_tag": "BIO_GEN_CODOMINANCE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "In human blood group pedigree 4, alleles $I^A$ and $I^B$ exhibiting equal phenotypic expression demonstrate:",
    "options": [
      "Incomplete dominance",
      "Epistasis",
      "Codominance",
      "Sex-linkage",
      "Pleiotropy"
    ],
    "answer": 2,
    "explanation": "Both alleles are expressed simultaneously $\\implies$ codominance.",
    "number": 77
  },
  {
    "type_tag": "BIO_PHY_LIGHT_DEP_PHO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Photolysis of water yielding oxygen occurs at which complex in thylakoid 4:",
    "options": [
      "Mitochondrial matrix",
      "Photosystem I (PSI)",
      "Calvin cycle (Stroma)",
      "Outer membrane",
      "Photosystem II (PSII)"
    ],
    "answer": 4,
    "explanation": "Water oxidation occurs at the oxygen-evolving complex of PSII.",
    "number": 78
  },
  {
    "type_tag": "BIO_CEL_LYSOSOMES",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Organelle containing hydrolytic digestive enzymes in phagocyte 4:",
    "options": [
      "Nucleolus",
      "Ribosome",
      "Lysosome",
      "Peroxisome only",
      "Centriole"
    ],
    "answer": 2,
    "explanation": "Lysosomes contain acid hydrolases for intracellular degradation.",
    "number": 79
  },
  {
    "type_tag": "BIO_GEN_SEMICONSERV",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Meselson-Stahl density gradient experiment in culture 4 confirmed DNA replication is:",
    "options": [
      "Dispersive",
      "Semi-conservative",
      "Random",
      "Non-conservative",
      "Conservative"
    ],
    "answer": 1,
    "explanation": "Each replicated DNA duplex retains one parental and one newly synthesized strand.",
    "number": 80
  },
  {
    "type_tag": "BIO_PHY_GLYCOLYSIS_LOC",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Cellular location of initial anaerobic glycolysis pathway in cell 4:",
    "options": [
      "Thylakoid",
      "Cristae",
      "Mitochondrial matrix",
      "Nucleus",
      "Cytoplasm / Cytosol"
    ],
    "answer": 4,
    "explanation": "Glycolysis enzymes reside in the soluble cytosol.",
    "number": 81
  }
];

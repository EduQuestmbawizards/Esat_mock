const QUESTIONS = [
  {
    "type_tag": "CHM_ENR_HESS_LAW",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Calculate $\\Delta H$ given $\\sum \\Delta H_f^\\circ(\\text{prod}) = -900\\text{ kJ}$ and $\\sum \\Delta H_f^\\circ(\\text{react}) = -250\\text{ kJ}$.",
    "options": [
      "$-450\\text{ kJ mol}^{-1}$",
      "$+1150\\text{ kJ mol}^{-1}$",
      "$-650\\text{ kJ mol}^{-1}$",
      "$-1150\\text{ kJ mol}^{-1}$",
      "$+650\\text{ kJ mol}^{-1}$"
    ],
    "answer": 2,
    "explanation": "$\\Delta H = \\text{Products} - \\text{Reactants} = -650\\text{ kJ mol}^{-1}$.",
    "number": 1
  },
  {
    "type_tag": "CHM_ENR_GIBBS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Temperature at which reaction with $\\Delta H = +30\\text{ kJ}, \\Delta S = +100\\text{ J K}^{-1}$ has $\\Delta G = 0$.",
    "options": [
      "$T = 3000\\text{ K}$",
      "$T = 30\\text{ K}$",
      "$T = 0\\text{ K}$",
      "$T = 100\\text{ K}$",
      "$T = 300\\text{ K}$"
    ],
    "answer": 4,
    "explanation": "$T = \\frac{\\Delta H}{\\Delta S} = \\frac{30000}{100} = 300\\text{ K}$.",
    "number": 2
  },
  {
    "type_tag": "CHM_ENR_RATE_EQ",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "$\\text{Rate} = k[A]^{1}[B]$. If $[A]$ is doubled and $[B]$ unchanged, rate increases by factor:",
    "options": [
      "$4$",
      "$2$",
      "$5$",
      "$6$",
      "$3$"
    ],
    "answer": 1,
    "explanation": "Factor $= 2^{1} = 2$.",
    "number": 3
  },
  {
    "type_tag": "CHM_ENR_LE_CHATELIER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Exothermic reaction with $\\Delta H = -50\\text{ kJ mol}^{-1}$. Increasing temperature causes $K_c$ to:",
    "options": [
      "Decrease (equilibrium shifts in reverse)",
      "Double",
      "Increase",
      "Become zero",
      "Remain constant"
    ],
    "answer": 0,
    "explanation": "Exothermic reactions shift left when heated, lowering $K_c$.",
    "number": 4
  },
  {
    "type_tag": "CHM_ENR_PH_STRONG",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "pH of solution with $[\\text{H}^+] = 1.0 \\times 10^{-1}\\text{ mol dm}^{-3}$.",
    "options": [
      "$4.0$",
      "$5.0$",
      "$1.0$",
      "$2.0$",
      "$3.0$"
    ],
    "answer": 2,
    "explanation": "$\\text{pH} = -\\log_{10}(10^{-1}) = 1.0$.",
    "number": 5
  },
  {
    "type_tag": "CHM_ENR_BUFFER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "pH of buffer with $[\\text{acid}] = [\\text{salt}]$ and $pK_a = 4.60$.",
    "options": [
      "$9.40$",
      "$4.60$",
      "$3.60$",
      "$7.00$",
      "$1.00$"
    ],
    "answer": 1,
    "explanation": "$\\text{pH} = pK_a = 4.60$.",
    "number": 6
  },
  {
    "type_tag": "CHM_ENR_CELL_EMF",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Standard cell potential given $E^\\circ[\\text{anode}] = -0.60\\text{ V}, E^\\circ[\\text{cathode}] = +0.34\\text{ V}$.",
    "options": [
      "$-0.94\\text{ V}$",
      "$-0.26\\text{ V}$",
      "$+0.26\\text{ V}$",
      "$+0.34\\text{ V}$",
      "$+0.94\\text{ V}$"
    ],
    "answer": 4,
    "explanation": "$E^\\circ_{\\text{cell}} = +0.34 - (-0.60) = +0.94\\text{ V}$.",
    "number": 7
  },
  {
    "type_tag": "CHM_ENR_MOLES_VOL",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Volume of $0.5\\text{ mol}$ ideal gas at RTP ($24.0\\text{ dm}^3\\text{ mol}^{-1}$).",
    "options": [
      "$12.0\\text{ dm}^3$",
      "$48.0\\text{ dm}^3$",
      "$6.0\\text{ dm}^3$",
      "$24.0\\text{ dm}^3$",
      "$14.0\\text{ dm}^3$"
    ],
    "answer": 0,
    "explanation": "$V = n \\times 24.0 = 12.0\\text{ dm}^3$.",
    "number": 8
  },
  {
    "type_tag": "CHM_ENR_BOND_ENTHALPY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Enthalpy change $\\Delta H$ calculated from bond enthalpies in reaction 1:",
    "options": [
      "$\\sum BE(\\text{products}) + \\sum BE(\\text{reactants})$",
      "$\\sum BE(\\text{formed}) - \\sum BE(\\text{broken})$",
      "$\\sum BE(\\text{reactants}) \\times 2$",
      "$\\sum BE(\\text{bonds broken}) - \\sum BE(\\text{bonds formed})$",
      "$\\text{Products} - \\text{Reactants}$"
    ],
    "answer": 3,
    "explanation": "$\\Delta H = \\text{Bonds broken} - \\text{Bonds formed}$.",
    "number": 9
  },
  {
    "type_tag": "CHM_ENR_ARRHENIUS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "In Arrhenius reaction system 1 with rate $k = A e^{-E_a/RT}$, the parameter $E_a$ is:",
    "options": [
      "Frequency factor",
      "Enthalpy of reaction",
      "Activation energy for the reaction",
      "Equilibrium constant",
      "Entropy of activation"
    ],
    "answer": 2,
    "explanation": "$E_a$ is the activation energy.",
    "number": 10
  },
  {
    "type_tag": "CHM_ENR_TITRATION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Moles of $\\text{HCl}$ in $20.0\\text{ cm}^3$ of $0.50\\text{ mol dm}^{-3}$ solution.",
    "options": [
      "$0.020\\text{ mol}$",
      "$10.0\\text{ mol}$",
      "$0.0010\\text{ mol}$",
      "$0.010\\text{ mol}$",
      "$0.10\\text{ mol}$"
    ],
    "answer": 3,
    "explanation": "$n = 0.50 \\times \\frac{20.0}{1000} = 0.010\\text{ mol}$.",
    "number": 11
  },
  {
    "type_tag": "CHM_ENR_CATALYST",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "In reaction 1, adding a catalyst increases rate by:",
    "options": [
      "Increasing $\\Delta H$ of reaction",
      "Increasing temperature of reactants",
      "Consuming excess products",
      "Increasing equilibrium constant $K_c$",
      "Providing an alternative pathway with lower activation energy"
    ],
    "answer": 4,
    "explanation": "Catalysts lower $E_a$ without altering equilibrium.",
    "number": 12
  },
  {
    "type_tag": "CHM_ENR_ENDOTHERMIC",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "An endothermic reaction with $\\Delta H = +25\\text{ kJ mol}^{-1}$:",
    "options": [
      "Has $\\Delta H < 0$",
      "Absorbs heat from surroundings (surroundings cool)",
      "Releases heat to surroundings",
      "Has zero entropy change",
      "Cannot proceed spontaneously"
    ],
    "answer": 1,
    "explanation": "Endothermic reactions absorb thermal energy ($\\Delta H > 0$).",
    "number": 13
  },
  {
    "type_tag": "CHM_ENR_ATOM_ECONOMY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Formula for Percentage Atom Economy in synthetic route 1:",
    "options": [
      "$\\text{Percentage yield} \\times 2$",
      "$\\frac{\\text{Mass of product}}{\\text{Mass of waste}} \\times 100\\%$",
      "$\\frac{\\text{Actual yield}}{\\text{Theoretical yield}} \\times 100\\%$",
      "$\\frac{\\text{Molar mass of desired product}}{\\text{Total molar mass of all reactants}} \\times 100\\%$",
      "$\\frac{\\text{Reactant mass}}{\\text{Product mass}} \\times 100\\%$"
    ],
    "answer": 3,
    "explanation": "Atom economy measures incorporated reactant atoms.",
    "number": 14
  },
  {
    "type_tag": "CHM_ENR_KP_EXPRESSION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Equilibrium expression $K_p$ for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$ in vessel 1:",
    "options": [
      "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$",
      "$K_p = p(\\text{SO}_3)^2 - p(\\text{SO}_2)^2$",
      "$K_p = \\frac{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}{p(\\text{SO}_3)^2}$",
      "$K_p = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]}$",
      "$K_p = \\frac{2p(\\text{SO}_3)}{2p(\\text{SO}_2) + p(\\text{O}_2)}$"
    ],
    "answer": 0,
    "explanation": "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$.",
    "number": 15
  }
];

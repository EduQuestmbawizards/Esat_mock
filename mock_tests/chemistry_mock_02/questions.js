const QUESTIONS = [
  {
    "type_tag": "CHM_ATM_REDOX_HALF",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Electrons transferred in: $\\text{MnO}_4^- + 8\\text{H}^+ + ne^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ in titration 2.",
    "options": [
      "$2e^-$",
      "$3e^-$",
      "$5e^-$",
      "$8e^-$",
      "$7e^-$"
    ],
    "answer": 2,
    "explanation": "Mn oxidation state $+7 \\to +2 \\implies 5e^-$.",
    "number": 1
  },
  {
    "type_tag": "CHM_ENR_ARRHENIUS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "In Arrhenius reaction system 2 with rate $k = A e^{-E_a/RT}$, the parameter $E_a$ is:",
    "options": [
      "Entropy of activation",
      "Frequency factor",
      "Equilibrium constant",
      "Enthalpy of reaction",
      "Activation energy for the reaction"
    ],
    "answer": 4,
    "explanation": "$E_a$ is the activation energy.",
    "number": 2
  },
  {
    "type_tag": "CHM_ORG_TLC_RF",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Spot moves $4.0\\text{ cm}$, solvent front moves $10.0\\text{ cm}$. $R_f$ value?",
    "options": [
      "$0.30$",
      "$0.60$",
      "$0.20$",
      "$0.40$",
      "$0.50$"
    ],
    "answer": 3,
    "explanation": "$R_f = \\frac{4.0}{10.0} = 0.40$.",
    "number": 3
  },
  {
    "type_tag": "CHM_ATM_BOND_POLARITY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Bond type between atoms having Pauling electronegativity difference $\\Delta \\chi = 1.0$:",
    "options": [
      "Coordinate covalent",
      "Metallic",
      "Non-polar covalent",
      "Pure ionic",
      "Polar covalent bond (with partial dipole)"
    ],
    "answer": 4,
    "explanation": "Electronegativity difference creates polar covalent dipole.",
    "number": 4
  },
  {
    "type_tag": "CHM_ENR_TITRATION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Moles of $\\text{HCl}$ in $40.0\\text{ cm}^3$ of $0.50\\text{ mol dm}^{-3}$ solution.",
    "options": [
      "$0.040\\text{ mol}$",
      "$20.0\\text{ mol}$",
      "$0.20\\text{ mol}$",
      "$0.0020\\text{ mol}$",
      "$0.020\\text{ mol}$"
    ],
    "answer": 4,
    "explanation": "$n = 0.50 \\times \\frac{40.0}{1000} = 0.020\\text{ mol}$.",
    "number": 5
  },
  {
    "type_tag": "CHM_ORG_TEST_ALKENE",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Reagent test confirming C=C unsaturation in alkene sample 2:",
    "options": [
      "Biuret reagent",
      "Tollens' reagent",
      "Acidified dichromate",
      "Bromine water (orange-brown decolourises)",
      "Benedict's solution"
    ],
    "answer": 3,
    "explanation": "Electrophilic addition of bromine decolourises solution.",
    "number": 6
  },
  {
    "type_tag": "CHM_ATM_OCTET_EXPAND",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Molecule $\\text{PCl}_5$ features:",
    "options": [
      "Coordinate bonds only",
      "Exactly 8 valence electrons",
      "No covalent bonds",
      "An expanded octet on central atom",
      "An incomplete octet (less than 8)"
    ],
    "answer": 3,
    "explanation": "$\\text{PCl}_5$ expands octet using available d-orbitals.",
    "number": 7
  },
  {
    "type_tag": "CHM_ENR_CATALYST",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "In reaction 2, adding a catalyst increases rate by:",
    "options": [
      "Increasing $\\Delta H$ of reaction",
      "Increasing equilibrium constant $K_c$",
      "Consuming excess products",
      "Increasing temperature of reactants",
      "Providing an alternative pathway with lower activation energy"
    ],
    "answer": 4,
    "explanation": "Catalysts lower $E_a$ without altering equilibrium.",
    "number": 8
  },
  {
    "type_tag": "CHM_ORG_TOLLENS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Tollens' reagent ($[\\text{Ag}(\\text{NH}_3)_2]^+$) gives silver mirror with sample 2 containing:",
    "options": [
      "An aldehyde (oxidised to carboxylate)",
      "An ester",
      "A tertiary alcohol",
      "An alkane",
      "A ketone only"
    ],
    "answer": 0,
    "explanation": "Aldehydes reduce Tollens' reagent to metallic silver.",
    "number": 9
  },
  {
    "type_tag": "CHM_ATM_ISOTOPES",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Two isotopes of element with atomic number $Z=12$ have:",
    "options": [
      "Different chemical properties",
      "Same neutrons, different protons",
      "Different atomic numbers",
      "Same protons ($12$), different neutrons",
      "Different electron numbers"
    ],
    "answer": 3,
    "explanation": "Isotopes share identical proton number $Z$.",
    "number": 10
  },
  {
    "type_tag": "CHM_ENR_ENDOTHERMIC",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "An endothermic reaction with $\\Delta H = +50\\text{ kJ mol}^{-1}$:",
    "options": [
      "Has $\\Delta H < 0$",
      "Cannot proceed spontaneously",
      "Absorbs heat from surroundings (surroundings cool)",
      "Releases heat to surroundings",
      "Has zero entropy change"
    ],
    "answer": 2,
    "explanation": "Endothermic reactions absorb thermal energy ($\\Delta H > 0$).",
    "number": 11
  },
  {
    "type_tag": "CHM_ORG_HOMOLOGOUS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "In series of alkanes ($C_n H_{2n+2}$) up to $n=5$, members share:",
    "options": [
      "Same melting point",
      "Different general formulas",
      "Same molar mass",
      "Same general formula and functional group with successive $-\\text{CH}_2-$ difference",
      "Same boiling point"
    ],
    "answer": 3,
    "explanation": "Homologous series share general formula and functional group.",
    "number": 12
  },
  {
    "type_tag": "CHM_ATM_HYBRIDISATION",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Hybridisation of carbon atoms in alkene $C_{3}H_{6}$ double bond.",
    "options": [
      "$sp^3$",
      "$sp^2$",
      "$sp$",
      "$sp^3d$",
      "$dsp^2$"
    ],
    "answer": 1,
    "explanation": "Trigonal planar carbon with double bond has $sp^2$ hybridisation.",
    "number": 13
  },
  {
    "type_tag": "CHM_ENR_ATOM_ECONOMY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Formula for Percentage Atom Economy in synthetic route 2:",
    "options": [
      "$\\text{Percentage yield} \\times 2$",
      "$\\frac{\\text{Mass of product}}{\\text{Mass of waste}} \\times 100\\%$",
      "$\\frac{\\text{Molar mass of desired product}}{\\text{Total molar mass of all reactants}} \\times 100\\%$",
      "$\\frac{\\text{Actual yield}}{\\text{Theoretical yield}} \\times 100\\%$",
      "$\\frac{\\text{Reactant mass}}{\\text{Product mass}} \\times 100\\%$"
    ],
    "answer": 2,
    "explanation": "Atom economy measures incorporated reactant atoms.",
    "number": 14
  },
  {
    "type_tag": "CHM_ORG_BENZENE_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "question": "Characteristic reaction mechanism of benzene ring in nitration experiment 2:",
    "options": [
      "Free Radical Addition",
      "Elimination",
      "Nucleophilic Substitution",
      "Electrophilic Aromatic Substitution",
      "Electrophilic Addition"
    ],
    "answer": 3,
    "explanation": "Electrophilic substitution preserves aromatic resonance stability.",
    "number": 15
  },
  {
    "type_tag": "CHM_ATM_NOBLE_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Electronic configuration of noble gas Neon (Ne, Z=10).",
    "options": [
      "$[\\text{He}] 2s^1$",
      "$1s^2 2s^2 2p^6$",
      "$1s^2 2s^2 2p^4$",
      "$1s^2 2s^2 2p^5 3s^1$",
      "$1s^2 2s^2 2p^6 3s^2$"
    ],
    "answer": 1,
    "explanation": "Full outer shell configuration: $1s^2 2s^2 2p^6$.",
    "number": 16
  },
  {
    "type_tag": "CHM_ENR_KP_EXPRESSION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Equilibrium expression $K_p$ for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$ in vessel 2:",
    "options": [
      "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$",
      "$K_p = p(\\text{SO}_3)^2 - p(\\text{SO}_2)^2$",
      "$K_p = \\frac{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}{p(\\text{SO}_3)^2}$",
      "$K_p = \\frac{2p(\\text{SO}_3)}{2p(\\text{SO}_2) + p(\\text{O}_2)}$",
      "$K_p = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]}$"
    ],
    "answer": 0,
    "explanation": "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$.",
    "number": 17
  },
  {
    "type_tag": "CHM_ORG_EZ_ISOMER",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Requirement for $E/Z$ stereoisomerism in alkene sample 2:",
    "options": [
      "Four identical groups on carbons",
      "Chiral carbon atom",
      "Triple bond",
      "Restricted rotation around C=C and two different groups on each double-bonded carbon",
      "Hydrogen bonding capability"
    ],
    "answer": 3,
    "explanation": "Requires restricted rotation and non-identical substituents on both carbons.",
    "number": 18
  },
  {
    "type_tag": "CHM_ATM_E_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Ground state electron configuration of neutral Aluminium (Al, Z=13).",
    "options": [
      "$1s^2 2s^2 2p^5 3s^2$",
      "$[\\text{He}] 2s^2$",
      "$1s^2 2s^2 2p^6$",
      "$1s^2 2s^2 2p^6 3s^{10}$",
      "$1s^2 2s^2 2p^6 3s^2 3p^1$"
    ],
    "answer": 4,
    "explanation": "Electronic configuration fills subshells: $1s^2 2s^2 2p^6 3s^2 3p^1$.",
    "number": 19
  },
  {
    "type_tag": "CHM_ENR_HESS_LAW",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Calculate $\\Delta H$ given $\\sum \\Delta H_f^\\circ(\\text{prod}) = -1100\\text{ kJ}$ and $\\sum \\Delta H_f^\\circ(\\text{react}) = -350\\text{ kJ}$.",
    "options": [
      "$-750\\text{ kJ mol}^{-1}$",
      "$+1450\\text{ kJ mol}^{-1}$",
      "$+750\\text{ kJ mol}^{-1}$",
      "$-550\\text{ kJ mol}^{-1}$",
      "$-1450\\text{ kJ mol}^{-1}$"
    ],
    "answer": 0,
    "explanation": "$\\Delta H = \\text{Products} - \\text{Reactants} = -750\\text{ kJ mol}^{-1}$.",
    "number": 20
  },
  {
    "type_tag": "CHM_ORG_IUPAC_ALC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of straight-chain alcohol Propan-1-ol.",
    "options": [
      "Ethane",
      "Propanone",
      "Propan-1-ol",
      "Methoxyethane",
      "Propanoic acid"
    ],
    "answer": 2,
    "explanation": "Propan-1-ol is a primary alcohol.",
    "number": 21
  },
  {
    "type_tag": "CHM_ATM_VSEPR_CH4",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR molecular shape and bond angle of methane ($\\text{CH}_4$) in sample 3.",
    "options": [
      "Tetrahedral, $109.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Bent, $104.5^\\circ$",
      "Linear, $180^\\circ$",
      "Trigonal planar, $120^\\circ$"
    ],
    "answer": 0,
    "explanation": "4 bonding pairs, 0 lone pairs $\\implies$ Tetrahedral, $109.5^\\circ$.",
    "number": 22
  },
  {
    "type_tag": "CHM_ENR_GIBBS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Temperature at which reaction with $\\Delta H = +90\\text{ kJ}, \\Delta S = +300\\text{ J K}^{-1}$ has $\\Delta G = 0$.",
    "options": [
      "$T = 0\\text{ K}$",
      "$T = 300\\text{ K}$",
      "$T = 100\\text{ K}$",
      "$T = 30\\text{ K}$",
      "$T = 3000\\text{ K}$"
    ],
    "answer": 1,
    "explanation": "$T = \\frac{\\Delta H}{\\Delta S} = \\frac{90000}{300} = 300\\text{ K}$.",
    "number": 23
  },
  {
    "type_tag": "CHM_ORG_IUPAC_KET",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of ketone Pentan-2-one.",
    "options": [
      "Pentan-2-one",
      "Methyl ethanoate",
      "Propanal",
      "Propan-1-ol",
      "Propanoic acid"
    ],
    "answer": 0,
    "explanation": "Pentan-2-one is an aliphatic ketone.",
    "number": 24
  },
  {
    "type_tag": "CHM_ATM_VSEPR_NH3",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of ammonia ($\\text{NH}_3$) in container 3.",
    "options": [
      "Trigonal planar, $120^\\circ$",
      "Bent, $104.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "T-shaped, $90^\\circ$",
      "Tetrahedral, $109.5^\\circ$"
    ],
    "answer": 2,
    "explanation": "3 bonding pairs, 1 lone pair $\\implies$ Trigonal pyramidal, $107^\\circ$.",
    "number": 25
  },
  {
    "type_tag": "CHM_ENR_RATE_EQ",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "$\\text{Rate} = k[A]^{3}[B]$. If $[A]$ is doubled and $[B]$ unchanged, rate increases by factor:",
    "options": [
      "$9$",
      "$8$",
      "$10$",
      "$12$",
      "$11$"
    ],
    "answer": 1,
    "explanation": "Factor $= 2^{3} = 8$.",
    "number": 26
  },
  {
    "type_tag": "CHM_ORG_CHIRAL",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Which compound in set 3 contains an asymmetric chiral carbon?",
    "options": [
      "Propan-2-ol",
      "Butan-1-ol",
      "Ethane",
      "Propan-1-ol",
      "Butan-2-ol ($\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3$)"
    ],
    "answer": 4,
    "explanation": "C-2 in butan-2-ol has 4 distinct substituents.",
    "number": 27
  }
];

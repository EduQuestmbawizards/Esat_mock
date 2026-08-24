const QUESTIONS = [
  {
    "type_tag": "CHM_ATM_E_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Ground state electron configuration of neutral Magnesium (Mg, Z=12).",
    "options": [
      "$[\\text{He}] 2s^2$",
      "$1s^2 2s^2 2p^6 3s^2$",
      "$1s^2 2s^2 2p^5 3s^2$",
      "$1s^2 2s^2 2p^6$",
      "$1s^2 2s^2 2p^6 3s^{10}$"
    ],
    "answer": 1,
    "explanation": "Electronic configuration fills subshells: $1s^2 2s^2 2p^6 3s^2$.",
    "number": 1
  },
  {
    "type_tag": "CHM_ENR_HESS_LAW",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Calculate $\\Delta H$ given $\\sum \\Delta H_f^\\circ(\\text{prod}) = -1000\\text{ kJ}$ and $\\sum \\Delta H_f^\\circ(\\text{react}) = -300\\text{ kJ}$.",
    "options": [
      "$-500\\text{ kJ mol}^{-1}$",
      "$-700\\text{ kJ mol}^{-1}$",
      "$+700\\text{ kJ mol}^{-1}$",
      "$+1300\\text{ kJ mol}^{-1}$",
      "$-1300\\text{ kJ mol}^{-1}$"
    ],
    "answer": 1,
    "explanation": "$\\Delta H = \\text{Products} - \\text{Reactants} = -700\\text{ kJ mol}^{-1}$.",
    "number": 2
  },
  {
    "type_tag": "CHM_ORG_IUPAC_ALC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of straight-chain alcohol Ethanol.",
    "options": [
      "Propanoic acid",
      "Methoxyethane",
      "Ethane",
      "Ethanol",
      "Propanone"
    ],
    "answer": 3,
    "explanation": "Ethanol is a primary alcohol.",
    "number": 3
  },
  {
    "type_tag": "CHM_ATM_VSEPR_CH4",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR molecular shape and bond angle of methane ($\\text{CH}_4$) in sample 2.",
    "options": [
      "Tetrahedral, $109.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Linear, $180^\\circ$",
      "Trigonal planar, $120^\\circ$",
      "Bent, $104.5^\\circ$"
    ],
    "answer": 0,
    "explanation": "4 bonding pairs, 0 lone pairs $\\implies$ Tetrahedral, $109.5^\\circ$.",
    "number": 4
  },
  {
    "type_tag": "CHM_ENR_GIBBS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Temperature at which reaction with $\\Delta H = +60\\text{ kJ}, \\Delta S = +200\\text{ J K}^{-1}$ has $\\Delta G = 0$.",
    "options": [
      "$T = 100\\text{ K}$",
      "$T = 0\\text{ K}$",
      "$T = 3000\\text{ K}$",
      "$T = 300\\text{ K}$",
      "$T = 30\\text{ K}$"
    ],
    "answer": 3,
    "explanation": "$T = \\frac{\\Delta H}{\\Delta S} = \\frac{60000}{200} = 300\\text{ K}$.",
    "number": 5
  },
  {
    "type_tag": "CHM_ORG_IUPAC_KET",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of ketone Butan-2-one.",
    "options": [
      "Methyl ethanoate",
      "Butan-2-one",
      "Propanal",
      "Propanoic acid",
      "Propan-1-ol"
    ],
    "answer": 1,
    "explanation": "Butan-2-one is an aliphatic ketone.",
    "number": 6
  },
  {
    "type_tag": "CHM_ATM_VSEPR_NH3",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of ammonia ($\\text{NH}_3$) in container 2.",
    "options": [
      "T-shaped, $90^\\circ$",
      "Bent, $104.5^\\circ$",
      "Tetrahedral, $109.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Trigonal planar, $120^\\circ$"
    ],
    "answer": 3,
    "explanation": "3 bonding pairs, 1 lone pair $\\implies$ Trigonal pyramidal, $107^\\circ$.",
    "number": 7
  },
  {
    "type_tag": "CHM_ENR_RATE_EQ",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "$\\text{Rate} = k[A]^{2}[B]$. If $[A]$ is doubled and $[B]$ unchanged, rate increases by factor:",
    "options": [
      "$7$",
      "$4$",
      "$5$",
      "$6$",
      "$8$"
    ],
    "answer": 1,
    "explanation": "Factor $= 2^{2} = 4$.",
    "number": 8
  },
  {
    "type_tag": "CHM_ORG_CHIRAL",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Which compound in set 2 contains an asymmetric chiral carbon?",
    "options": [
      "Ethane",
      "Butan-1-ol",
      "Propan-1-ol",
      "Butan-2-ol ($\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3$)",
      "Propan-2-ol"
    ],
    "answer": 3,
    "explanation": "C-2 in butan-2-ol has 4 distinct substituents.",
    "number": 9
  },
  {
    "type_tag": "CHM_ATM_VSEPR_H2O",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of water ($\\text{H}_2\\text{O}$) in trial 2.",
    "options": [
      "Bent, $104.5^\\circ$",
      "Tetrahedral, $109.5^\\circ$",
      "Linear, $180^\\circ$",
      "Trigonal planar, $120^\\circ$",
      "Trigonal pyramidal, $107^\\circ$"
    ],
    "answer": 0,
    "explanation": "2 bonding pairs, 2 lone pairs $\\implies$ Bent, $104.5^\\circ$.",
    "number": 10
  },
  {
    "type_tag": "CHM_ENR_LE_CHATELIER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Exothermic reaction with $\\Delta H = -100\\text{ kJ mol}^{-1}$. Increasing temperature causes $K_c$ to:",
    "options": [
      "Double",
      "Increase",
      "Become zero",
      "Remain constant",
      "Decrease (equilibrium shifts in reverse)"
    ],
    "answer": 4,
    "explanation": "Exothermic reactions shift left when heated, lowering $K_c$.",
    "number": 11
  },
  {
    "type_tag": "CHM_ORG_MARKOVNIKOV",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Major organic product of propene reacting with $\\text{HBr}$ in trial 2:",
    "options": [
      "Propane",
      "2-bromopropene",
      "1-bromopropane",
      "1,2-dibromopropane",
      "2-bromopropane"
    ],
    "answer": 4,
    "explanation": "Markovnikov addition proceeds via more stable secondary carbocation.",
    "number": 12
  },
  {
    "type_tag": "CHM_ATM_IONIS_ENERGY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Sharp jump between the 3th and 4th ionisation energies indicates valence electron count of:",
    "options": [
      "$3$ valence electrons",
      "$6$ valence electrons",
      "$5$ valence electrons",
      "$7$ valence electrons",
      "$4$ valence electrons"
    ],
    "answer": 0,
    "explanation": "Jump occurs when removing electron from inner shell after losing all $3$ valence electrons.",
    "number": 13
  },
  {
    "type_tag": "CHM_ENR_PH_STRONG",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "pH of solution with $[\\text{H}^+] = 1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$.",
    "options": [
      "$3.0$",
      "$5.0$",
      "$4.0$",
      "$6.0$",
      "$2.0$"
    ],
    "answer": 4,
    "explanation": "$\\text{pH} = -\\log_{10}(10^{-2}) = 2.0$.",
    "number": 14
  },
  {
    "type_tag": "CHM_ORG_NUCLEO_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reaction mechanism for bromoethane with aqueous $\\text{NaOH}$ in flask 2:",
    "options": [
      "Electrophilic Addition",
      "Electrophilic Substitution",
      "Nucleophilic Substitution ($S_N2$)",
      "Elimination",
      "Free Radical Substitution"
    ],
    "answer": 2,
    "explanation": "$\\text{OH}^-$ nucleophile attacks primary haloalkane via $S_N2$.",
    "number": 15
  },
  {
    "type_tag": "CHM_ATM_ELECTRONEG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Which element among (F, Cl, Br, I, At) has the highest Pauling electronegativity in group set 2?",
    "options": [
      "Iodine (I)",
      "Bromine (Br)",
      "Chlorine (Cl)",
      "Fluorine (F, 4.0)",
      "Astatine (At)"
    ],
    "answer": 3,
    "explanation": "Fluorine has highest electronegativity (4.0).",
    "number": 16
  },
  {
    "type_tag": "CHM_ENR_BUFFER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "pH of buffer with $[\\text{acid}] = [\\text{salt}]$ and $pK_a = 4.70$.",
    "options": [
      "$4.70$",
      "$7.00$",
      "$1.00$",
      "$9.30$",
      "$3.70$"
    ],
    "answer": 0,
    "explanation": "$\\text{pH} = pK_a = 4.70$.",
    "number": 17
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_PRI",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Product of primary alcohol heated under reflux with excess acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in run 2:",
    "options": [
      "Carboxylic acid",
      "Ketone",
      "Aldehyde",
      "Ester",
      "Alkene"
    ],
    "answer": 0,
    "explanation": "Full reflux oxidation yields carboxylic acid.",
    "number": 18
  },
  {
    "type_tag": "CHM_ATM_INTERMOL_H",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Which alcohol among isomers in batch 2 forms intermolecular hydrogen bonds?",
    "options": [
      "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)",
      "Dimethyl ether ($\\text{CH}_3\\text{OCH}_3$)",
      "Fluoroethane",
      "Propane",
      "Ethane ($\\text{C}_2\\text{H}_6$)"
    ],
    "answer": 0,
    "explanation": "Ethanol contains $-\\text{OH}$ group capable of hydrogen bonding.",
    "number": 19
  },
  {
    "type_tag": "CHM_ENR_CELL_EMF",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Standard cell potential given $E^\\circ[\\text{anode}] = -0.70\\text{ V}, E^\\circ[\\text{cathode}] = +0.34\\text{ V}$.",
    "options": [
      "$-0.36\\text{ V}$",
      "$+0.36\\text{ V}$",
      "$-1.04\\text{ V}$",
      "$+1.04\\text{ V}$",
      "$+0.34\\text{ V}$"
    ],
    "answer": 3,
    "explanation": "$E^\\circ_{\\text{cell}} = +0.34 - (-0.70) = +1.04\\text{ V}$.",
    "number": 20
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_SEC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Oxidation of secondary alcohol (e.g. propan-2-ol) in tube 2 yields:",
    "options": [
      "A carboxylic acid",
      "An aldehyde",
      "An ester",
      "A ketone (propanone)",
      "An alkene"
    ],
    "answer": 3,
    "explanation": "Secondary alcohols oxidize to ketones.",
    "number": 21
  },
  {
    "type_tag": "CHM_ATM_LATTICE_E",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Which ionic solid has stronger lattice enthalpy: $\\text{MgO}$ or $\\text{NaCl}$ in comparison 2?",
    "options": [
      "$\\text{MgO}$ (due to $+2/-2$ charges)",
      "$\\text{KCl}$",
      "$\\text{NaCl}$",
      "Equal lattice energy",
      "$\\text{NaBr}$"
    ],
    "answer": 0,
    "explanation": "Doubled charges in $\\text{MgO}$ give roughly $4\\times$ lattice enthalpy.",
    "number": 22
  },
  {
    "type_tag": "CHM_ENR_MOLES_VOL",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Volume of $1.0\\text{ mol}$ ideal gas at RTP ($24.0\\text{ dm}^3\\text{ mol}^{-1}$).",
    "options": [
      "$96.0\\text{ dm}^3$",
      "$48.0\\text{ dm}^3$",
      "$24.0\\text{ dm}^3$",
      "$12.0\\text{ dm}^3$",
      "$26.0\\text{ dm}^3$"
    ],
    "answer": 2,
    "explanation": "$V = n \\times 24.0 = 24.0\\text{ dm}^3$.",
    "number": 23
  },
  {
    "type_tag": "CHM_ORG_ESTERIFICATION",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reagents for esterification of ethanol and ethanoic acid in flask 2:",
    "options": [
      "Concentrated $\\text{H}_2\\text{SO}_4$ catalyst and heat",
      "Acidified $\\text{KMnO}_4$",
      "Dry ether",
      "Nickel catalyst",
      "Aqueous $\\text{NaOH}$"
    ],
    "answer": 0,
    "explanation": "Concentrated $\\text{H}_2\\text{SO}_4$ catalyses Fischer esterification.",
    "number": 24
  },
  {
    "type_tag": "CHM_ATM_PERIOD_RADIUS",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Across Period 3 from Na to Cl, atomic radius trend observed in experiment 2:",
    "options": [
      "Remains constant",
      "Increases due to more electrons",
      "Decreases due to higher effective nuclear charge with constant shielding",
      "Increases then decreases",
      "Decreases then increases"
    ],
    "answer": 2,
    "explanation": "Greater $Z_{\\text{eff}}$ pulls electrons closer.",
    "number": 25
  },
  {
    "type_tag": "CHM_ENR_BOND_ENTHALPY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Enthalpy change $\\Delta H$ calculated from bond enthalpies in reaction 2:",
    "options": [
      "$\\sum BE(\\text{reactants}) \\times 2$",
      "$\\sum BE(\\text{products}) + \\sum BE(\\text{reactants})$",
      "$\\sum BE(\\text{formed}) - \\sum BE(\\text{broken})$",
      "$\\text{Products} - \\text{Reactants}$",
      "$\\sum BE(\\text{bonds broken}) - \\sum BE(\\text{bonds formed})$"
    ],
    "answer": 4,
    "explanation": "$\\Delta H = \\text{Bonds broken} - \\text{Bonds formed}$.",
    "number": 26
  },
  {
    "type_tag": "CHM_ORG_COND_POLY",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Small molecule eliminated during Nylon-6,6 condensation polymerisation in reactor 2:",
    "options": [
      "$\\text{HCl}$",
      "$\\text{CH}_4$",
      "Water ($\\text{H}_2\\text{O}$)",
      "$\\text{CO}_2$",
      "$\\text{NH}_3$"
    ],
    "answer": 2,
    "explanation": "Amide bond formation eliminates water.",
    "number": 27
  }
];

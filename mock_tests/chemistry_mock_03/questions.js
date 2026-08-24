const QUESTIONS = [
  {
    "type_tag": "CHM_ATM_VSEPR_H2O",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of water ($\\text{H}_2\\text{O}$) in trial 3.",
    "options": [
      "Linear, $180^\\circ$",
      "Trigonal planar, $120^\\circ$",
      "Bent, $104.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Tetrahedral, $109.5^\\circ$"
    ],
    "answer": 2,
    "explanation": "2 bonding pairs, 2 lone pairs $\\implies$ Bent, $104.5^\\circ$.",
    "number": 1
  },
  {
    "type_tag": "CHM_ENR_LE_CHATELIER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Exothermic reaction with $\\Delta H = -150\\text{ kJ mol}^{-1}$. Increasing temperature causes $K_c$ to:",
    "options": [
      "Become zero",
      "Double",
      "Decrease (equilibrium shifts in reverse)",
      "Remain constant",
      "Increase"
    ],
    "answer": 2,
    "explanation": "Exothermic reactions shift left when heated, lowering $K_c$.",
    "number": 2
  },
  {
    "type_tag": "CHM_ORG_MARKOVNIKOV",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Major organic product of propene reacting with $\\text{HBr}$ in trial 3:",
    "options": [
      "1,2-dibromopropane",
      "2-bromopropene",
      "Propane",
      "1-bromopropane",
      "2-bromopropane"
    ],
    "answer": 4,
    "explanation": "Markovnikov addition proceeds via more stable secondary carbocation.",
    "number": 3
  },
  {
    "type_tag": "CHM_ATM_IONIS_ENERGY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Sharp jump between the 4th and 5th ionisation energies indicates valence electron count of:",
    "options": [
      "$7$ valence electrons",
      "$8$ valence electrons",
      "$4$ valence electrons",
      "$6$ valence electrons",
      "$5$ valence electrons"
    ],
    "answer": 2,
    "explanation": "Jump occurs when removing electron from inner shell after losing all $4$ valence electrons.",
    "number": 4
  },
  {
    "type_tag": "CHM_ENR_PH_STRONG",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "pH of solution with $[\\text{H}^+] = 1.0 \\times 10^{-3}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$6.0$",
      "$7.0$",
      "$4.0$",
      "$3.0$"
    ],
    "answer": 4,
    "explanation": "$\\text{pH} = -\\log_{10}(10^{-3}) = 3.0$.",
    "number": 5
  },
  {
    "type_tag": "CHM_ORG_NUCLEO_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reaction mechanism for bromoethane with aqueous $\\text{NaOH}$ in flask 3:",
    "options": [
      "Elimination",
      "Free Radical Substitution",
      "Nucleophilic Substitution ($S_N2$)",
      "Electrophilic Addition",
      "Electrophilic Substitution"
    ],
    "answer": 2,
    "explanation": "$\\text{OH}^-$ nucleophile attacks primary haloalkane via $S_N2$.",
    "number": 6
  },
  {
    "type_tag": "CHM_ATM_ELECTRONEG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Which element among (F, Cl, Br, I, At) has the highest Pauling electronegativity in group set 3?",
    "options": [
      "Iodine (I)",
      "Chlorine (Cl)",
      "Bromine (Br)",
      "Astatine (At)",
      "Fluorine (F, 4.0)"
    ],
    "answer": 4,
    "explanation": "Fluorine has highest electronegativity (4.0).",
    "number": 7
  },
  {
    "type_tag": "CHM_ENR_BUFFER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "pH of buffer with $[\\text{acid}] = [\\text{salt}]$ and $pK_a = 4.80$.",
    "options": [
      "$7.00$",
      "$9.20$",
      "$4.80$",
      "$1.00$",
      "$3.80$"
    ],
    "answer": 2,
    "explanation": "$\\text{pH} = pK_a = 4.80$.",
    "number": 8
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_PRI",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Product of primary alcohol heated under reflux with excess acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in run 3:",
    "options": [
      "Ketone",
      "Alkene",
      "Carboxylic acid",
      "Ester",
      "Aldehyde"
    ],
    "answer": 2,
    "explanation": "Full reflux oxidation yields carboxylic acid.",
    "number": 9
  },
  {
    "type_tag": "CHM_ATM_INTERMOL_H",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Which alcohol among isomers in batch 3 forms intermolecular hydrogen bonds?",
    "options": [
      "Fluoroethane",
      "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)",
      "Ethane ($\\text{C}_2\\text{H}_6$)",
      "Dimethyl ether ($\\text{CH}_3\\text{OCH}_3$)",
      "Propane"
    ],
    "answer": 1,
    "explanation": "Ethanol contains $-\\text{OH}$ group capable of hydrogen bonding.",
    "number": 10
  },
  {
    "type_tag": "CHM_ENR_CELL_EMF",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Standard cell potential given $E^\\circ[\\text{anode}] = -0.80\\text{ V}, E^\\circ[\\text{cathode}] = +0.34\\text{ V}$.",
    "options": [
      "$+0.46\\text{ V}$",
      "$+1.14\\text{ V}$",
      "$-0.46\\text{ V}$",
      "$-1.14\\text{ V}$",
      "$+0.34\\text{ V}$"
    ],
    "answer": 1,
    "explanation": "$E^\\circ_{\\text{cell}} = +0.34 - (-0.80) = +1.14\\text{ V}$.",
    "number": 11
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_SEC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Oxidation of secondary alcohol (e.g. propan-2-ol) in tube 3 yields:",
    "options": [
      "An aldehyde",
      "A carboxylic acid",
      "An ester",
      "A ketone (propanone)",
      "An alkene"
    ],
    "answer": 3,
    "explanation": "Secondary alcohols oxidize to ketones.",
    "number": 12
  },
  {
    "type_tag": "CHM_ATM_LATTICE_E",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Which ionic solid has stronger lattice enthalpy: $\\text{MgO}$ or $\\text{NaCl}$ in comparison 3?",
    "options": [
      "$\\text{NaCl}$",
      "$\\text{NaBr}$",
      "$\\text{MgO}$ (due to $+2/-2$ charges)",
      "Equal lattice energy",
      "$\\text{KCl}$"
    ],
    "answer": 2,
    "explanation": "Doubled charges in $\\text{MgO}$ give roughly $4\\times$ lattice enthalpy.",
    "number": 13
  },
  {
    "type_tag": "CHM_ENR_MOLES_VOL",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Volume of $1.5\\text{ mol}$ ideal gas at RTP ($24.0\\text{ dm}^3\\text{ mol}^{-1}$).",
    "options": [
      "$144.0\\text{ dm}^3$",
      "$18.0\\text{ dm}^3$",
      "$72.0\\text{ dm}^3$",
      "$38.0\\text{ dm}^3$",
      "$36.0\\text{ dm}^3$"
    ],
    "answer": 4,
    "explanation": "$V = n \\times 24.0 = 36.0\\text{ dm}^3$.",
    "number": 14
  },
  {
    "type_tag": "CHM_ORG_ESTERIFICATION",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reagents for esterification of ethanol and ethanoic acid in flask 3:",
    "options": [
      "Aqueous $\\text{NaOH}$",
      "Nickel catalyst",
      "Concentrated $\\text{H}_2\\text{SO}_4$ catalyst and heat",
      "Acidified $\\text{KMnO}_4$",
      "Dry ether"
    ],
    "answer": 2,
    "explanation": "Concentrated $\\text{H}_2\\text{SO}_4$ catalyses Fischer esterification.",
    "number": 15
  },
  {
    "type_tag": "CHM_ATM_PERIOD_RADIUS",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Across Period 3 from Na to Cl, atomic radius trend observed in experiment 3:",
    "options": [
      "Decreases due to higher effective nuclear charge with constant shielding",
      "Remains constant",
      "Decreases then increases",
      "Increases then decreases",
      "Increases due to more electrons"
    ],
    "answer": 0,
    "explanation": "Greater $Z_{\\text{eff}}$ pulls electrons closer.",
    "number": 16
  },
  {
    "type_tag": "CHM_ENR_BOND_ENTHALPY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Enthalpy change $\\Delta H$ calculated from bond enthalpies in reaction 3:",
    "options": [
      "$\\sum BE(\\text{reactants}) \\times 2$",
      "$\\sum BE(\\text{bonds broken}) - \\sum BE(\\text{bonds formed})$",
      "$\\sum BE(\\text{products}) + \\sum BE(\\text{reactants})$",
      "$\\sum BE(\\text{formed}) - \\sum BE(\\text{broken})$",
      "$\\text{Products} - \\text{Reactants}$"
    ],
    "answer": 1,
    "explanation": "$\\Delta H = \\text{Bonds broken} - \\text{Bonds formed}$.",
    "number": 17
  },
  {
    "type_tag": "CHM_ORG_COND_POLY",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Small molecule eliminated during Nylon-6,6 condensation polymerisation in reactor 3:",
    "options": [
      "$\\text{NH}_3$",
      "$\\text{CH}_4$",
      "$\\text{CO}_2$",
      "Water ($\\text{H}_2\\text{O}$)",
      "$\\text{HCl}$"
    ],
    "answer": 3,
    "explanation": "Amide bond formation eliminates water.",
    "number": 18
  },
  {
    "type_tag": "CHM_ATM_REDOX_HALF",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Electrons transferred in: $\\text{MnO}_4^- + 8\\text{H}^+ + ne^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ in titration 3.",
    "options": [
      "$8e^-$",
      "$2e^-$",
      "$7e^-$",
      "$3e^-$",
      "$5e^-$"
    ],
    "answer": 4,
    "explanation": "Mn oxidation state $+7 \\to +2 \\implies 5e^-$.",
    "number": 19
  },
  {
    "type_tag": "CHM_ENR_ARRHENIUS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "In Arrhenius reaction system 3 with rate $k = A e^{-E_a/RT}$, the parameter $E_a$ is:",
    "options": [
      "Frequency factor",
      "Equilibrium constant",
      "Activation energy for the reaction",
      "Enthalpy of reaction",
      "Entropy of activation"
    ],
    "answer": 2,
    "explanation": "$E_a$ is the activation energy.",
    "number": 20
  },
  {
    "type_tag": "CHM_ORG_TLC_RF",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Spot moves $5.0\\text{ cm}$, solvent front moves $10.0\\text{ cm}$. $R_f$ value?",
    "options": [
      "$0.60$",
      "$0.50$",
      "$0.30$",
      "$0.70$",
      "$0.40$"
    ],
    "answer": 1,
    "explanation": "$R_f = \\frac{5.0}{10.0} = 0.50$.",
    "number": 21
  },
  {
    "type_tag": "CHM_ATM_BOND_POLARITY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Bond type between atoms having Pauling electronegativity difference $\\Delta \\chi = 1.5$:",
    "options": [
      "Coordinate covalent",
      "Non-polar covalent",
      "Metallic",
      "Pure ionic",
      "Polar covalent bond (with partial dipole)"
    ],
    "answer": 4,
    "explanation": "Electronegativity difference creates polar covalent dipole.",
    "number": 22
  },
  {
    "type_tag": "CHM_ENR_TITRATION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "Moles of $\\text{HCl}$ in $60.0\\text{ cm}^3$ of $0.50\\text{ mol dm}^{-3}$ solution.",
    "options": [
      "$0.0030\\text{ mol}$",
      "$30.0\\text{ mol}$",
      "$0.060\\text{ mol}$",
      "$0.30\\text{ mol}$",
      "$0.030\\text{ mol}$"
    ],
    "answer": 4,
    "explanation": "$n = 0.50 \\times \\frac{60.0}{1000} = 0.030\\text{ mol}$.",
    "number": 23
  },
  {
    "type_tag": "CHM_ORG_TEST_ALKENE",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Reagent test confirming C=C unsaturation in alkene sample 3:",
    "options": [
      "Acidified dichromate",
      "Benedict's solution",
      "Tollens' reagent",
      "Bromine water (orange-brown decolourises)",
      "Biuret reagent"
    ],
    "answer": 3,
    "explanation": "Electrophilic addition of bromine decolourises solution.",
    "number": 24
  },
  {
    "type_tag": "CHM_ATM_OCTET_EXPAND",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Molecule $\\text{XeF}_4$ features:",
    "options": [
      "Coordinate bonds only",
      "An incomplete octet (less than 8)",
      "No covalent bonds",
      "Exactly 8 valence electrons",
      "An expanded octet on central atom"
    ],
    "answer": 4,
    "explanation": "$\\text{XeF}_4$ expands octet using available d-orbitals.",
    "number": 25
  },
  {
    "type_tag": "CHM_ENR_CATALYST",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "In reaction 3, adding a catalyst increases rate by:",
    "options": [
      "Consuming excess products",
      "Increasing temperature of reactants",
      "Increasing $\\Delta H$ of reaction",
      "Providing an alternative pathway with lower activation energy",
      "Increasing equilibrium constant $K_c$"
    ],
    "answer": 3,
    "explanation": "Catalysts lower $E_a$ without altering equilibrium.",
    "number": 26
  },
  {
    "type_tag": "CHM_ORG_TOLLENS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Tollens' reagent ($[\\text{Ag}(\\text{NH}_3)_2]^+$) gives silver mirror with sample 3 containing:",
    "options": [
      "A ketone only",
      "A tertiary alcohol",
      "An ester",
      "An aldehyde (oxidised to carboxylate)",
      "An alkane"
    ],
    "answer": 3,
    "explanation": "Aldehydes reduce Tollens' reagent to metallic silver.",
    "number": 27
  }
];

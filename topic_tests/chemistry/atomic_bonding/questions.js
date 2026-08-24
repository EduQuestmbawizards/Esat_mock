const QUESTIONS = [
  {
    "type_tag": "CHM_ATM_E_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Ground state electron configuration of neutral Sodium (Na, Z=11).",
    "options": [
      "$1s^2 2s^2 2p^6$",
      "$[\\text{He}] 2s^2$",
      "$1s^2 2s^2 2p^6 3s^{10}$",
      "$1s^2 2s^2 2p^5 3s^2$",
      "$1s^2 2s^2 2p^6 3s^1$"
    ],
    "answer": 4,
    "explanation": "Electronic configuration fills subshells: $1s^2 2s^2 2p^6 3s^1$.",
    "number": 1
  },
  {
    "type_tag": "CHM_ATM_VSEPR_CH4",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR molecular shape and bond angle of methane ($\\text{CH}_4$) in sample 1.",
    "options": [
      "Bent, $104.5^\\circ$",
      "Linear, $180^\\circ$",
      "Tetrahedral, $109.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Trigonal planar, $120^\\circ$"
    ],
    "answer": 2,
    "explanation": "4 bonding pairs, 0 lone pairs $\\implies$ Tetrahedral, $109.5^\\circ$.",
    "number": 2
  },
  {
    "type_tag": "CHM_ATM_VSEPR_NH3",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of ammonia ($\\text{NH}_3$) in container 1.",
    "options": [
      "Tetrahedral, $109.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Trigonal planar, $120^\\circ$",
      "Bent, $104.5^\\circ$",
      "T-shaped, $90^\\circ$"
    ],
    "answer": 1,
    "explanation": "3 bonding pairs, 1 lone pair $\\implies$ Trigonal pyramidal, $107^\\circ$.",
    "number": 3
  },
  {
    "type_tag": "CHM_ATM_VSEPR_H2O",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of water ($\\text{H}_2\\text{O}$) in trial 1.",
    "options": [
      "Tetrahedral, $109.5^\\circ$",
      "Bent, $104.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Linear, $180^\\circ$",
      "Trigonal planar, $120^\\circ$"
    ],
    "answer": 1,
    "explanation": "2 bonding pairs, 2 lone pairs $\\implies$ Bent, $104.5^\\circ$.",
    "number": 4
  },
  {
    "type_tag": "CHM_ATM_IONIS_ENERGY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Sharp jump between the 2th and 3th ionisation energies indicates valence electron count of:",
    "options": [
      "$2$ valence electrons",
      "$3$ valence electrons",
      "$4$ valence electrons",
      "$5$ valence electrons",
      "$6$ valence electrons"
    ],
    "answer": 0,
    "explanation": "Jump occurs when removing electron from inner shell after losing all $2$ valence electrons.",
    "number": 5
  },
  {
    "type_tag": "CHM_ATM_ELECTRONEG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Which element among (F, Cl, Br, I, At) has the highest Pauling electronegativity in group set 1?",
    "options": [
      "Iodine (I)",
      "Astatine (At)",
      "Chlorine (Cl)",
      "Fluorine (F, 4.0)",
      "Bromine (Br)"
    ],
    "answer": 3,
    "explanation": "Fluorine has highest electronegativity (4.0).",
    "number": 6
  },
  {
    "type_tag": "CHM_ATM_INTERMOL_H",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Which alcohol among isomers in batch 1 forms intermolecular hydrogen bonds?",
    "options": [
      "Dimethyl ether ($\\text{CH}_3\\text{OCH}_3$)",
      "Fluoroethane",
      "Ethane ($\\text{C}_2\\text{H}_6$)",
      "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)",
      "Propane"
    ],
    "answer": 3,
    "explanation": "Ethanol contains $-\\text{OH}$ group capable of hydrogen bonding.",
    "number": 7
  },
  {
    "type_tag": "CHM_ATM_LATTICE_E",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Which ionic solid has stronger lattice enthalpy: $\\text{MgO}$ or $\\text{NaCl}$ in comparison 1?",
    "options": [
      "$\\text{NaCl}$",
      "Equal lattice energy",
      "$\\text{NaBr}$",
      "$\\text{MgO}$ (due to $+2/-2$ charges)",
      "$\\text{KCl}$"
    ],
    "answer": 3,
    "explanation": "Doubled charges in $\\text{MgO}$ give roughly $4\\times$ lattice enthalpy.",
    "number": 8
  },
  {
    "type_tag": "CHM_ATM_PERIOD_RADIUS",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Across Period 3 from Na to Cl, atomic radius trend observed in experiment 1:",
    "options": [
      "Decreases due to higher effective nuclear charge with constant shielding",
      "Increases due to more electrons",
      "Increases then decreases",
      "Decreases then increases",
      "Remains constant"
    ],
    "answer": 0,
    "explanation": "Greater $Z_{\\text{eff}}$ pulls electrons closer.",
    "number": 9
  },
  {
    "type_tag": "CHM_ATM_REDOX_HALF",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Electrons transferred in: $\\text{MnO}_4^- + 8\\text{H}^+ + ne^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ in titration 1.",
    "options": [
      "$3e^-$",
      "$2e^-$",
      "$8e^-$",
      "$7e^-$",
      "$5e^-$"
    ],
    "answer": 4,
    "explanation": "Mn oxidation state $+7 \\to +2 \\implies 5e^-$.",
    "number": 10
  },
  {
    "type_tag": "CHM_ATM_BOND_POLARITY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Bond type between atoms having Pauling electronegativity difference $\\Delta \\chi = 0.5$:",
    "options": [
      "Coordinate covalent",
      "Polar covalent bond (with partial dipole)",
      "Metallic",
      "Non-polar covalent",
      "Pure ionic"
    ],
    "answer": 1,
    "explanation": "Electronegativity difference creates polar covalent dipole.",
    "number": 11
  },
  {
    "type_tag": "CHM_ATM_OCTET_EXPAND",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Molecule $\\text{SF}_6$ features:",
    "options": [
      "An incomplete octet (less than 8)",
      "An expanded octet on central atom",
      "Coordinate bonds only",
      "No covalent bonds",
      "Exactly 8 valence electrons"
    ],
    "answer": 1,
    "explanation": "$\\text{SF}_6$ expands octet using available d-orbitals.",
    "number": 12
  },
  {
    "type_tag": "CHM_ATM_ISOTOPES",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Two isotopes of element with atomic number $Z=11$ have:",
    "options": [
      "Same neutrons, different protons",
      "Different electron numbers",
      "Different chemical properties",
      "Different atomic numbers",
      "Same protons ($11$), different neutrons"
    ],
    "answer": 4,
    "explanation": "Isotopes share identical proton number $Z$.",
    "number": 13
  },
  {
    "type_tag": "CHM_ATM_HYBRIDISATION",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Hybridisation of carbon atoms in alkene $C_{2}H_{4}$ double bond.",
    "options": [
      "$sp^2$",
      "$sp$",
      "$sp^3d$",
      "$dsp^2$",
      "$sp^3$"
    ],
    "answer": 0,
    "explanation": "Trigonal planar carbon with double bond has $sp^2$ hybridisation.",
    "number": 14
  },
  {
    "type_tag": "CHM_ATM_NOBLE_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Electronic configuration of noble gas Helium (He, Z=2).",
    "options": [
      "$1s^2 2s^2 2p^6 3s^2$",
      "$1s^2 2s^2 2p^4$",
      "$1s^2 2s^2 2p^5 3s^1$",
      "$1s^2$",
      "$[\\text{He}] 2s^1$"
    ],
    "answer": 3,
    "explanation": "Full outer shell configuration: $1s^2$.",
    "number": 15
  }
];

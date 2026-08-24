const QUESTIONS = [
  {
    "type_tag": "CHM_ORG_IUPAC_ALC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of straight-chain alcohol Methanol.",
    "options": [
      "Methoxyethane",
      "Propanone",
      "Methanol",
      "Propanoic acid",
      "Ethane"
    ],
    "answer": 2,
    "explanation": "Methanol is a primary alcohol.",
    "number": 1
  },
  {
    "type_tag": "CHM_ORG_IUPAC_KET",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of ketone Propanone.",
    "options": [
      "Propan-1-ol",
      "Propanone",
      "Propanal",
      "Propanoic acid",
      "Methyl ethanoate"
    ],
    "answer": 1,
    "explanation": "Propanone is an aliphatic ketone.",
    "number": 2
  },
  {
    "type_tag": "CHM_ORG_CHIRAL",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Which compound in set 1 contains an asymmetric chiral carbon?",
    "options": [
      "Butan-1-ol",
      "Butan-2-ol ($\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3$)",
      "Ethane",
      "Propan-1-ol",
      "Propan-2-ol"
    ],
    "answer": 1,
    "explanation": "C-2 in butan-2-ol has 4 distinct substituents.",
    "number": 3
  },
  {
    "type_tag": "CHM_ORG_MARKOVNIKOV",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Major organic product of propene reacting with $\\text{HBr}$ in trial 1:",
    "options": [
      "2-bromopropene",
      "Propane",
      "1,2-dibromopropane",
      "1-bromopropane",
      "2-bromopropane"
    ],
    "answer": 4,
    "explanation": "Markovnikov addition proceeds via more stable secondary carbocation.",
    "number": 4
  },
  {
    "type_tag": "CHM_ORG_NUCLEO_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reaction mechanism for bromoethane with aqueous $\\text{NaOH}$ in flask 1:",
    "options": [
      "Electrophilic Substitution",
      "Elimination",
      "Electrophilic Addition",
      "Free Radical Substitution",
      "Nucleophilic Substitution ($S_N2$)"
    ],
    "answer": 4,
    "explanation": "$\\text{OH}^-$ nucleophile attacks primary haloalkane via $S_N2$.",
    "number": 5
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_PRI",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Product of primary alcohol heated under reflux with excess acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in run 1:",
    "options": [
      "Alkene",
      "Aldehyde",
      "Carboxylic acid",
      "Ketone",
      "Ester"
    ],
    "answer": 2,
    "explanation": "Full reflux oxidation yields carboxylic acid.",
    "number": 6
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_SEC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Oxidation of secondary alcohol (e.g. propan-2-ol) in tube 1 yields:",
    "options": [
      "A carboxylic acid",
      "A ketone (propanone)",
      "An ester",
      "An alkene",
      "An aldehyde"
    ],
    "answer": 1,
    "explanation": "Secondary alcohols oxidize to ketones.",
    "number": 7
  },
  {
    "type_tag": "CHM_ORG_ESTERIFICATION",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reagents for esterification of ethanol and ethanoic acid in flask 1:",
    "options": [
      "Aqueous $\\text{NaOH}$",
      "Nickel catalyst",
      "Concentrated $\\text{H}_2\\text{SO}_4$ catalyst and heat",
      "Acidified $\\text{KMnO}_4$",
      "Dry ether"
    ],
    "answer": 2,
    "explanation": "Concentrated $\\text{H}_2\\text{SO}_4$ catalyses Fischer esterification.",
    "number": 8
  },
  {
    "type_tag": "CHM_ORG_COND_POLY",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Small molecule eliminated during Nylon-6,6 condensation polymerisation in reactor 1:",
    "options": [
      "$\\text{CH}_4$",
      "Water ($\\text{H}_2\\text{O}$)",
      "$\\text{NH}_3$",
      "$\\text{CO}_2$",
      "$\\text{HCl}$"
    ],
    "answer": 1,
    "explanation": "Amide bond formation eliminates water.",
    "number": 9
  },
  {
    "type_tag": "CHM_ORG_TLC_RF",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Spot moves $3.0\\text{ cm}$, solvent front moves $10.0\\text{ cm}$. $R_f$ value?",
    "options": [
      "$0.30$",
      "$0.20$",
      "$0.40$",
      "$0.50$",
      "$0.10$"
    ],
    "answer": 0,
    "explanation": "$R_f = \\frac{3.0}{10.0} = 0.30$.",
    "number": 10
  },
  {
    "type_tag": "CHM_ORG_TEST_ALKENE",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "Reagent test confirming C=C unsaturation in alkene sample 1:",
    "options": [
      "Tollens' reagent",
      "Acidified dichromate",
      "Benedict's solution",
      "Biuret reagent",
      "Bromine water (orange-brown decolourises)"
    ],
    "answer": 4,
    "explanation": "Electrophilic addition of bromine decolourises solution.",
    "number": 11
  },
  {
    "type_tag": "CHM_ORG_TOLLENS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Tollens' reagent ($[\\text{Ag}(\\text{NH}_3)_2]^+$) gives silver mirror with sample 1 containing:",
    "options": [
      "A ketone only",
      "An aldehyde (oxidised to carboxylate)",
      "An alkane",
      "A tertiary alcohol",
      "An ester"
    ],
    "answer": 1,
    "explanation": "Aldehydes reduce Tollens' reagent to metallic silver.",
    "number": 12
  },
  {
    "type_tag": "CHM_ORG_HOMOLOGOUS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "In series of alkanes ($C_n H_{2n+2}$) up to $n=4$, members share:",
    "options": [
      "Same molar mass",
      "Same boiling point",
      "Different general formulas",
      "Same melting point",
      "Same general formula and functional group with successive $-\\text{CH}_2-$ difference"
    ],
    "answer": 4,
    "explanation": "Homologous series share general formula and functional group.",
    "number": 13
  },
  {
    "type_tag": "CHM_ORG_BENZENE_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "question": "Characteristic reaction mechanism of benzene ring in nitration experiment 1:",
    "options": [
      "Elimination",
      "Free Radical Addition",
      "Electrophilic Aromatic Substitution",
      "Electrophilic Addition",
      "Nucleophilic Substitution"
    ],
    "answer": 2,
    "explanation": "Electrophilic substitution preserves aromatic resonance stability.",
    "number": 14
  },
  {
    "type_tag": "CHM_ORG_EZ_ISOMER",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Requirement for $E/Z$ stereoisomerism in alkene sample 1:",
    "options": [
      "Hydrogen bonding capability",
      "Triple bond",
      "Chiral carbon atom",
      "Four identical groups on carbons",
      "Restricted rotation around C=C and two different groups on each double-bonded carbon"
    ],
    "answer": 4,
    "explanation": "Requires restricted rotation and non-identical substituents on both carbons.",
    "number": 15
  }
];

const QUESTIONS = [
  {
    "type_tag": "BIO_CEL_MITOCHONDRIA",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary function of mitochondria in eukaryotic cell lineage 1:",
    "options": [
      "Protein translation",
      "Photosynthesis",
      "Waste digestion",
      "Lipid synthesis",
      "Aerobic cellular respiration and ATP synthesis"
    ],
    "answer": 4,
    "explanation": "Mitochondria synthesize ATP via oxidative phosphorylation.",
    "number": 1
  },
  {
    "type_tag": "BIO_CEL_RER",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Function of Rough Endoplasmic Reticulum (RER) in secretory tissue 1:",
    "options": [
      "Glycogen breakdown",
      "Steroid lipid synthesis",
      "DNA replication",
      "Synthesis and folding of proteins destined for membranes or secretion",
      "Aerobic respiration"
    ],
    "answer": 3,
    "explanation": "RER-bound ribosomes synthesize secretory proteins.",
    "number": 2
  },
  {
    "type_tag": "BIO_CEL_GOLGI",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary role of the Golgi apparatus in gland cells 1:",
    "options": [
      "Photosynthesis",
      "ATP synthesis",
      "Modification, packaging, and sorting of proteins into secretory vesicles",
      "Cell division",
      "Translation of mRNA"
    ],
    "answer": 2,
    "explanation": "Golgi apparatus modifies and packages proteins.",
    "number": 3
  },
  {
    "type_tag": "BIO_CEL_MAGNIFICATION",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Actual cell size $10\\,\\mu\\text{m}$ viewed under magnification $\\times 400$. Image size in mm?",
    "options": [
      "$0.40\\text{ mm}$",
      "$2.0\\text{ mm}$",
      "$4.0\\text{ mm}$",
      "$4000\\text{ mm}$",
      "$40.0\\text{ mm}$"
    ],
    "answer": 2,
    "explanation": "$I = A \\times M = (10 \\times 10^{-3}\\,\\text{mm}) \\times 400 = 4.0\\text{ mm}$.",
    "number": 4
  },
  {
    "type_tag": "BIO_CEL_WATER_POT",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Plant cell with solute potential $\\Psi_s = -350\\text{ kPa}$ and pressure potential $\\Psi_p = +200\\text{ kPa}$. Total $\\Psi$?",
    "options": [
      "$-300\\text{ kPa}$",
      "$-250\\text{ kPa}$",
      "$-200\\text{ kPa}$",
      "$-350\\text{ kPa}$",
      "$-150\\text{ kPa}$"
    ],
    "answer": 4,
    "explanation": "$\\Psi = \\Psi_s + \\Psi_p = -150\\text{ kPa}$.",
    "number": 5
  },
  {
    "type_tag": "BIO_CEL_TEST_GLUCOSE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming reducing sugars (glucose) in solution 1:",
    "options": [
      "DCPIP test",
      "Iodine solution (blue-black)",
      "Biuret test (purple)",
      "Benedict's reagent heated (brick-red precipitate)",
      "Emulsion test"
    ],
    "answer": 3,
    "explanation": "Benedict's reagent heated gives brick-red copper(I) oxide precipitate.",
    "number": 6
  },
  {
    "type_tag": "BIO_CEL_TEST_STARCH",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of starch in food extract 1:",
    "options": [
      "Ethanol emulsion",
      "Benedict's solution",
      "Iodine in potassium iodide (blue-black colour)",
      "Biuret reagent",
      "DCPIP reagent"
    ],
    "answer": 2,
    "explanation": "Iodine forms blue-black complex with amylose.",
    "number": 7
  },
  {
    "type_tag": "BIO_CEL_TEST_PROTEIN",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of proteins in sample 1:",
    "options": [
      "Biuret test (violet / purple colour)",
      "Ninhydrin only",
      "Emulsion test",
      "Iodine solution",
      "Benedict's test"
    ],
    "answer": 0,
    "explanation": "Biuret reagent reacts with peptide bonds to form purple complex.",
    "number": 8
  },
  {
    "type_tag": "BIO_CEL_TEST_LIPID",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Diagnostic test for lipids/triglycerides in emulsion tube 1:",
    "options": [
      "Iodine test",
      "Benedict's test",
      "Fehling's test",
      "Biuret test",
      "Ethanol emulsion test (milky white layer)"
    ],
    "answer": 4,
    "explanation": "Ethanol dissolving lipids forms cloudy emulsion when added to water.",
    "number": 9
  },
  {
    "type_tag": "BIO_CEL_COMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of competitive inhibitor on enzyme kinetics in assay 1:",
    "options": [
      "$V_{\\max}$ decreases; $K_m$ unchanged",
      "$V_{\\max}$ unchanged; $K_m$ increases",
      "Both increase",
      "Both $V_{\\max}$ and $K_m$ decrease",
      "Neither changes"
    ],
    "answer": 1,
    "explanation": "Competitive inhibitor competes for active site: $V_{\\max}$ unchanged, $K_m$ increases.",
    "number": 10
  },
  {
    "type_tag": "BIO_CEL_NONCOMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of non-competitive inhibitor on enzyme kinetics in assay 1:",
    "options": [
      "Both decrease",
      "$V_{\\max}$ increases",
      "$V_{\\max}$ decreases; $K_m$ unchanged",
      "$V_{\\max}$ unchanged; $K_m$ increases",
      "Both increase"
    ],
    "answer": 2,
    "explanation": "Non-competitive inhibitor lowers catalytic turnover without affecting substrate binding.",
    "number": 11
  },
  {
    "type_tag": "BIO_CEL_FLUID_MOSAIC",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Role of cholesterol in mammalian cell membrane model 1:",
    "options": [
      "Forms cell wall",
      "Pumps sodium ions",
      "Regulates fluidity and stability across changing temperatures",
      "Synthesizes ATP",
      "Transcribes rRNA"
    ],
    "answer": 2,
    "explanation": "Cholesterol modulates lipid bilayer fluidity.",
    "number": 12
  },
  {
    "type_tag": "BIO_CEL_PROKARYOTE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Structural feature present in prokaryotic bacterium 1 but absent in eukaryotes:",
    "options": [
      "$80\\text{S}$ ribosomes",
      "Linear chromosomes",
      "Nucleus",
      "Peptidoglycan cell wall and circular naked DNA ($70\\text{S}$ ribosomes)",
      "Mitochondria"
    ],
    "answer": 3,
    "explanation": "Prokaryotes possess circular DNA and $70\\text{S}$ ribosomes.",
    "number": 13
  },
  {
    "type_tag": "BIO_CEL_FACIL_DIFF",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Facilitated diffusion of solute across membrane in cell 1 differs from active transport because it:",
    "options": [
      "Uses endocytosis",
      "Only transports water",
      "Is passive (down gradient) and requires no ATP",
      "Moves solutes against gradient",
      "Requires ATP hydrolysis"
    ],
    "answer": 2,
    "explanation": "Facilitated diffusion is passive downhill transport.",
    "number": 14
  },
  {
    "type_tag": "BIO_CEL_LYSOSOMES",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Organelle containing hydrolytic digestive enzymes in phagocyte 1:",
    "options": [
      "Nucleolus",
      "Lysosome",
      "Ribosome",
      "Peroxisome only",
      "Centriole"
    ],
    "answer": 1,
    "explanation": "Lysosomes contain acid hydrolases for intracellular degradation.",
    "number": 15
  }
];

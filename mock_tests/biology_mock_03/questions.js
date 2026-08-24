const QUESTIONS = [
  {
    "type_tag": "BIO_CEL_MAGNIFICATION",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Actual cell size $30\\,\\mu\\text{m}$ viewed under magnification $\\times 400$. Image size in mm?",
    "options": [
      "$12.0\\text{ mm}$",
      "$12000\\text{ mm}$",
      "$6.0\\text{ mm}$",
      "$1.20\\text{ mm}$",
      "$120.0\\text{ mm}$"
    ],
    "answer": 0,
    "explanation": "$I = A \\times M = (30 \\times 10^{-3}\\,\\text{mm}) \\times 400 = 12.0\\text{ mm}$.",
    "number": 1
  },
  {
    "type_tag": "BIO_GEN_MONOHYBRID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Monohybrid cross $Tt \\times Tt$ produces $120$ offspring. Expected number of dwarf ($tt$) plants?",
    "options": [
      "$120$ plants",
      "$60$ plants",
      "$30$ plants",
      "$90$ plants",
      "$15$ plants"
    ],
    "answer": 2,
    "explanation": "$25\\%$ of $120$ is $30$ plants.",
    "number": 2
  },
  {
    "type_tag": "BIO_PHY_GLUCAGON",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\alpha$-cells during fasting state 3:",
    "options": [
      "Thyroxine",
      "Adrenaline",
      "Cortisol",
      "Glucagon",
      "Insulin"
    ],
    "answer": 3,
    "explanation": "Glucagon stimulates liver glycogenolysis.",
    "number": 3
  },
  {
    "type_tag": "BIO_CEL_WATER_POT",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Plant cell with solute potential $\\Psi_s = -450\\text{ kPa}$ and pressure potential $\\Psi_p = +200\\text{ kPa}$. Total $\\Psi$?",
    "options": [
      "$-450\\text{ kPa}$",
      "$-250\\text{ kPa}$",
      "$-400\\text{ kPa}$",
      "$-300\\text{ kPa}$",
      "$-350\\text{ kPa}$"
    ],
    "answer": 1,
    "explanation": "$\\Psi = \\Psi_s + \\Psi_p = -250\\text{ kPa}$.",
    "number": 4
  },
  {
    "type_tag": "BIO_GEN_SEX_LINKED",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Carrier mother ($X^B X^b$) and normal father ($X^B Y$) in pedigree 3. Probability of colour-blind son?",
    "options": [
      "$50\\%$ of sons",
      "$75\\%$",
      "$0\\%$",
      "$100\\%$",
      "$25\\%$"
    ],
    "answer": 0,
    "explanation": "Sons have $50\\%$ probability of receiving recessive $X^b$ allele.",
    "number": 5
  },
  {
    "type_tag": "BIO_PHY_ADH",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Action of Anti-Diuretic Hormone (ADH) on collecting duct epithelium in kidney 3:",
    "options": [
      "Blocks water reabsorption",
      "Inserts aquaporin channels, increasing water reabsorption",
      "Increases sodium excretion",
      "Decreases urine concentration",
      "Inhibits Bowman's capsule"
    ],
    "answer": 1,
    "explanation": "ADH promotes aquaporin-2 vesicle insertion to concentrate urine.",
    "number": 6
  },
  {
    "type_tag": "BIO_CEL_TEST_GLUCOSE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming reducing sugars (glucose) in solution 3:",
    "options": [
      "Iodine solution (blue-black)",
      "DCPIP test",
      "Biuret test (purple)",
      "Emulsion test",
      "Benedict's reagent heated (brick-red precipitate)"
    ],
    "answer": 4,
    "explanation": "Benedict's reagent heated gives brick-red copper(I) oxide precipitate.",
    "number": 7
  },
  {
    "type_tag": "BIO_GEN_HARDY_WEIN",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Hard",
    "question": "Population in HW equilibrium has $q^2 = 0.04$ ($4\\%$ recessive) in study 3. Heterozygote frequency $2pq$?",
    "options": [
      "$48\\%$",
      "$16\\%$",
      "$32\\%$ ($0.32$)",
      "$8\\%$",
      "$64\\%$"
    ],
    "answer": 2,
    "explanation": "$q=0.2, p=0.8 \\implies 2pq = 2(0.8)(0.2) = 0.32$.",
    "number": 8
  },
  {
    "type_tag": "BIO_PHY_RUBISCO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Enzyme fixing $\\text{CO}_2$ to ribulose bisphosphate (RuBP) in photosynthetic leaf 3:",
    "options": [
      "ATP Synthase",
      "RuBisCO",
      "DNA Polymerase",
      "Amylase",
      "Pepsin"
    ],
    "answer": 1,
    "explanation": "RuBisCO catalyses carbon fixation in chloroplast stroma.",
    "number": 9
  },
  {
    "type_tag": "BIO_CEL_TEST_STARCH",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of starch in food extract 3:",
    "options": [
      "DCPIP reagent",
      "Ethanol emulsion",
      "Benedict's solution",
      "Iodine in potassium iodide (blue-black colour)",
      "Biuret reagent"
    ],
    "answer": 3,
    "explanation": "Iodine forms blue-black complex with amylose.",
    "number": 10
  },
  {
    "type_tag": "BIO_GEN_NONSENSE_MUT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "A mutation converting an amino acid codon into a premature STOP codon in gene 3 is a:",
    "options": [
      "Silent mutation",
      "Frameshift insertion",
      "Nonsense mutation",
      "Duplication",
      "Missense mutation"
    ],
    "answer": 2,
    "explanation": "Nonsense mutations introduce premature termination codons.",
    "number": 11
  },
  {
    "type_tag": "BIO_PHY_KREBS_SITE",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Subcellular site of Krebs (citric acid) cycle in eukaryotic cell 3:",
    "options": [
      "Cytoplasm",
      "Intermembrane space",
      "Mitochondrial Matrix",
      "Chloroplast lumen",
      "Inner Mitochondrial Membrane"
    ],
    "answer": 2,
    "explanation": "Krebs cycle enzymes are located in mitochondrial matrix.",
    "number": 12
  },
  {
    "type_tag": "BIO_CEL_TEST_PROTEIN",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of proteins in sample 3:",
    "options": [
      "Ninhydrin only",
      "Emulsion test",
      "Iodine solution",
      "Biuret test (violet / purple colour)",
      "Benedict's test"
    ],
    "answer": 3,
    "explanation": "Biuret reagent reacts with peptide bonds to form purple complex.",
    "number": 13
  },
  {
    "type_tag": "BIO_GEN_DNA_POLYMER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme synthesising new DNA strands in $5' \\to 3'$ direction during replication in cell 3:",
    "options": [
      "DNA Polymerase",
      "RNA Polymerase",
      "DNA Ligase",
      "DNA Helicase",
      "Topoisomerase"
    ],
    "answer": 0,
    "explanation": "DNA Polymerase adds complementary nucleotides in $5'\\to 3'$ direction.",
    "number": 14
  },
  {
    "type_tag": "BIO_PHY_TROPHIC_EFF",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Average percentage of energy transferred from trophic level $3$ to level $4$ in ecosystem:",
    "options": [
      "$90\\%$",
      "$100\\%$",
      "$10\\%$",
      "$50\\%$",
      "$1\\%$"
    ],
    "answer": 2,
    "explanation": "Roughly $10\\%$ ecological efficiency transfers between trophic levels.",
    "number": 15
  },
  {
    "type_tag": "BIO_CEL_TEST_LIPID",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Diagnostic test for lipids/triglycerides in emulsion tube 3:",
    "options": [
      "Iodine test",
      "Biuret test",
      "Fehling's test",
      "Benedict's test",
      "Ethanol emulsion test (milky white layer)"
    ],
    "answer": 4,
    "explanation": "Ethanol dissolving lipids forms cloudy emulsion when added to water.",
    "number": 16
  },
  {
    "type_tag": "BIO_GEN_CROSSING_OVER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Meiotic phase where crossing over and chiasmata occur in gametogenesis 3:",
    "options": [
      "Prophase II",
      "Prophase I",
      "Telophase II",
      "Anaphase I",
      "Metaphase I"
    ],
    "answer": 1,
    "explanation": "Crossing over occurs between homologous non-sister chromatids in Prophase I.",
    "number": 17
  },
  {
    "type_tag": "BIO_PHY_SYNAPSE_CA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Ion triggering neurotransmitter vesicle exocytosis at presynaptic terminal 3:",
    "options": [
      "Chloride ($\\text{Cl}^-$)",
      "Magnesium",
      "Sodium ($\\text{Na}^+$)",
      "Calcium ($\\text{Ca}^{2+}$)",
      "Potassium ($\\text{K}^+$)"
    ],
    "answer": 3,
    "explanation": "$\\text{Ca}^{2+}$ influx triggers SNARE-mediated vesicle fusion.",
    "number": 18
  },
  {
    "type_tag": "BIO_CEL_COMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of competitive inhibitor on enzyme kinetics in assay 3:",
    "options": [
      "Both $V_{\\max}$ and $K_m$ decrease",
      "Both increase",
      "Neither changes",
      "$V_{\\max}$ decreases; $K_m$ unchanged",
      "$V_{\\max}$ unchanged; $K_m$ increases"
    ],
    "answer": 4,
    "explanation": "Competitive inhibitor competes for active site: $V_{\\max}$ unchanged, $K_m$ increases.",
    "number": 19
  },
  {
    "type_tag": "BIO_GEN_DIHYBRID_RATIO",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Expected phenotypic ratio in $F_2$ generation of Mendelian dihybrid cross $AaBb \\times AaBb$ in cross 3:",
    "options": [
      "$9 : 3 : 3 : 1$",
      "$3 : 1$",
      "$1 : 1 : 1 : 1$",
      "$1 : 2 : 1$",
      "$12 : 3 : 1$"
    ],
    "answer": 0,
    "explanation": "Standard unlinked dihybrid cross yields $9:3:3:1$ ratio.",
    "number": 20
  },
  {
    "type_tag": "BIO_PHY_CARDIAC_SYST",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "State of cardiac valves during ventricular systole in cycle 3:",
    "options": [
      "Atrioventricular (AV) valves closed; Semilunar valves open",
      "Both closed",
      "Both open",
      "Tricuspid open; Bicuspid closed",
      "AV valves open; Semilunar closed"
    ],
    "answer": 0,
    "explanation": "High ventricular pressure forces semilunars open and AVs shut.",
    "number": 21
  },
  {
    "type_tag": "BIO_CEL_NONCOMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of non-competitive inhibitor on enzyme kinetics in assay 3:",
    "options": [
      "Both increase",
      "$V_{\\max}$ decreases; $K_m$ unchanged",
      "$V_{\\max}$ unchanged; $K_m$ increases",
      "$V_{\\max}$ increases",
      "Both decrease"
    ],
    "answer": 1,
    "explanation": "Non-competitive inhibitor lowers catalytic turnover without affecting substrate binding.",
    "number": 22
  },
  {
    "type_tag": "BIO_GEN_FRAME_SHIFT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Insertion of $1$ nucleotide base pair in an exon of gene 3 causes a:",
    "options": [
      "Silent mutation",
      "Point substitution only",
      "Polyploidy",
      "Inversion",
      "Frameshift mutation"
    ],
    "answer": 4,
    "explanation": "Non-multiple-of-three insertions alter the translational reading frame.",
    "number": 23
  },
  {
    "type_tag": "BIO_PHY_RESTING_POT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Resting membrane potential maintained across axon membrane in experiment 3:",
    "options": [
      "$-20\\text{ mV}$",
      "$0\\text{ mV}$",
      "$+40\\text{ mV}$",
      "$-70\\text{ mV}$",
      "$-120\\text{ mV}$"
    ],
    "answer": 3,
    "explanation": "Resting potential is maintained at approx $-70\\text{ mV}$ by $\\text{Na}^+/\\text{K}^+$ ATPase.",
    "number": 24
  },
  {
    "type_tag": "BIO_CEL_FLUID_MOSAIC",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Role of cholesterol in mammalian cell membrane model 3:",
    "options": [
      "Regulates fluidity and stability across changing temperatures",
      "Forms cell wall",
      "Pumps sodium ions",
      "Synthesizes ATP",
      "Transcribes rRNA"
    ],
    "answer": 0,
    "explanation": "Cholesterol modulates lipid bilayer fluidity.",
    "number": 25
  },
  {
    "type_tag": "BIO_GEN_DNA_LIGASE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme responsible for joining Okazaki fragments on the lagging strand in cell 3:",
    "options": [
      "DNA Ligase",
      "DNA Polymerase I",
      "Exonuclease",
      "DNA Primase",
      "DNA Helicase"
    ],
    "answer": 0,
    "explanation": "DNA Ligase catalyses phosphodiester bond formation between fragments.",
    "number": 26
  },
  {
    "type_tag": "BIO_PHY_INSULIN",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\beta$-cells following meal in subject 3:",
    "options": [
      "Insulin",
      "Adrenaline",
      "Somatostatin",
      "Glucagon",
      "Aldosterone"
    ],
    "answer": 0,
    "explanation": "Insulin stimulates cellular glucose uptake and glycogenesis.",
    "number": 27
  }
];

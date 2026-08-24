const QUESTIONS = [
  {
    "type_tag": "BIO_CEL_MITOCHONDRIA",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary function of mitochondria in eukaryotic cell lineage 2:",
    "options": [
      "Photosynthesis",
      "Protein translation",
      "Lipid synthesis",
      "Waste digestion",
      "Aerobic cellular respiration and ATP synthesis"
    ],
    "answer": 4,
    "explanation": "Mitochondria synthesize ATP via oxidative phosphorylation.",
    "number": 1
  },
  {
    "type_tag": "BIO_GEN_CHARGAFF",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "DNA sample 2 has $21\\%$ Adenine. Percentage of Cytosine?",
    "options": [
      "$50\\%$",
      "$10\\%$",
      "$29\\%$",
      "$21\\%$",
      "$42\\%$"
    ],
    "answer": 2,
    "explanation": "$\\text{A}=\\text{T}=21\\% \\implies \\text{G}=\\text{C}=50 - (21) = 29\\%$.",
    "number": 2
  },
  {
    "type_tag": "BIO_PHY_AORTA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Vessel carrying oxygenated blood under high pressure from left ventricle to systemic organs in subject 2:",
    "options": [
      "Pulmonary vein",
      "Pulmonary artery",
      "Coronary sinus",
      "Aorta",
      "Vena cava"
    ],
    "answer": 3,
    "explanation": "Aorta distributes oxygenated blood from left ventricle.",
    "number": 3
  },
  {
    "type_tag": "BIO_CEL_RER",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Function of Rough Endoplasmic Reticulum (RER) in secretory tissue 2:",
    "options": [
      "DNA replication",
      "Steroid lipid synthesis",
      "Synthesis and folding of proteins destined for membranes or secretion",
      "Glycogen breakdown",
      "Aerobic respiration"
    ],
    "answer": 2,
    "explanation": "RER-bound ribosomes synthesize secretory proteins.",
    "number": 4
  },
  {
    "type_tag": "BIO_GEN_TRANSCRIPTION",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "DNA coding sequence $5'-\\text{ATG-CGA}-3'$ transcribes to mRNA in clone 2:",
    "options": [
      "$5'-\\text{ATG-CGA}-3'$",
      "$5'-\\text{UAC-GCU}-3'$",
      "$3'-\\text{AUG-CGA}-5'$",
      "$3'-\\text{UAC-GCU}-5'$",
      "$5'-\\text{AUG-CGA}-3'$"
    ],
    "answer": 4,
    "explanation": "mRNA transcript corresponds to coding strand with U replacing T.",
    "number": 5
  },
  {
    "type_tag": "BIO_PHY_BOHR_SHIFT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Bohr shift in exercising muscle tissue 2: elevated $p\\text{CO}_2$ and lower pH shift hemoglobin curve:",
    "options": [
      "To the right, facilitating oxygen unloading at respiring tissues",
      "Downward completely",
      "No shift",
      "Upward",
      "To the left, increasing oxygen affinity"
    ],
    "answer": 0,
    "explanation": "Right shift lowers oxygen affinity, enhancing delivery to tissues.",
    "number": 6
  },
  {
    "type_tag": "BIO_CEL_GOLGI",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary role of the Golgi apparatus in gland cells 2:",
    "options": [
      "Translation of mRNA",
      "Photosynthesis",
      "ATP synthesis",
      "Modification, packaging, and sorting of proteins into secretory vesicles",
      "Cell division"
    ],
    "answer": 3,
    "explanation": "Golgi apparatus modifies and packages proteins.",
    "number": 7
  },
  {
    "type_tag": "BIO_GEN_HAPLOID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Organism with diploid number $2n = 24$. Chromosome count in haploid gamete?",
    "options": [
      "$13$ chromosomes",
      "$14$ chromosomes",
      "$16$ chromosomes",
      "$15$ chromosomes",
      "$12$ chromosomes (haploid)"
    ],
    "answer": 4,
    "explanation": "Haploid number $n = 12$.",
    "number": 8
  },
  {
    "type_tag": "BIO_PHY_DEPOLARIS",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Depolarization phase of neuron action potential in trace 2 is caused by rapid influx of:",
    "options": [
      "Chloride ions ($\\text{Cl}^-$)",
      "Hydrogen ions",
      "Sodium ions ($\\text{Na}^+$)",
      "Potassium ions ($\\text{K}^+$)",
      "Calcium ions ($\\text{Ca}^{2+}$)"
    ],
    "answer": 2,
    "explanation": "Opening of voltage-gated $\\text{Na}^+$ channels causes inward current.",
    "number": 9
  },
  {
    "type_tag": "BIO_CEL_MAGNIFICATION",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Actual cell size $20\\,\\mu\\text{m}$ viewed under magnification $\\times 400$. Image size in mm?",
    "options": [
      "$8.0\\text{ mm}$",
      "$80.0\\text{ mm}$",
      "$8000\\text{ mm}$",
      "$0.80\\text{ mm}$",
      "$4.0\\text{ mm}$"
    ],
    "answer": 0,
    "explanation": "$I = A \\times M = (20 \\times 10^{-3}\\,\\text{mm}) \\times 400 = 8.0\\text{ mm}$.",
    "number": 10
  },
  {
    "type_tag": "BIO_GEN_MONOHYBRID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Monohybrid cross $Tt \\times Tt$ produces $80$ offspring. Expected number of dwarf ($tt$) plants?",
    "options": [
      "$20$ plants",
      "$10$ plants",
      "$60$ plants",
      "$40$ plants",
      "$80$ plants"
    ],
    "answer": 0,
    "explanation": "$25\\%$ of $80$ is $20$ plants.",
    "number": 11
  },
  {
    "type_tag": "BIO_PHY_GLUCAGON",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\alpha$-cells during fasting state 2:",
    "options": [
      "Thyroxine",
      "Adrenaline",
      "Glucagon",
      "Cortisol",
      "Insulin"
    ],
    "answer": 2,
    "explanation": "Glucagon stimulates liver glycogenolysis.",
    "number": 12
  },
  {
    "type_tag": "BIO_CEL_WATER_POT",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Plant cell with solute potential $\\Psi_s = -400\\text{ kPa}$ and pressure potential $\\Psi_p = +200\\text{ kPa}$. Total $\\Psi$?",
    "options": [
      "$-300\\text{ kPa}$",
      "$-350\\text{ kPa}$",
      "$-200\\text{ kPa}$",
      "$-400\\text{ kPa}$",
      "$-250\\text{ kPa}$"
    ],
    "answer": 2,
    "explanation": "$\\Psi = \\Psi_s + \\Psi_p = -200\\text{ kPa}$.",
    "number": 13
  },
  {
    "type_tag": "BIO_GEN_SEX_LINKED",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Carrier mother ($X^B X^b$) and normal father ($X^B Y$) in pedigree 2. Probability of colour-blind son?",
    "options": [
      "$25\\%$",
      "$100\\%$",
      "$0\\%$",
      "$50\\%$ of sons",
      "$75\\%$"
    ],
    "answer": 3,
    "explanation": "Sons have $50\\%$ probability of receiving recessive $X^b$ allele.",
    "number": 14
  },
  {
    "type_tag": "BIO_PHY_ADH",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Action of Anti-Diuretic Hormone (ADH) on collecting duct epithelium in kidney 2:",
    "options": [
      "Inhibits Bowman's capsule",
      "Increases sodium excretion",
      "Blocks water reabsorption",
      "Decreases urine concentration",
      "Inserts aquaporin channels, increasing water reabsorption"
    ],
    "answer": 4,
    "explanation": "ADH promotes aquaporin-2 vesicle insertion to concentrate urine.",
    "number": 15
  },
  {
    "type_tag": "BIO_CEL_TEST_GLUCOSE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming reducing sugars (glucose) in solution 2:",
    "options": [
      "Iodine solution (blue-black)",
      "DCPIP test",
      "Benedict's reagent heated (brick-red precipitate)",
      "Biuret test (purple)",
      "Emulsion test"
    ],
    "answer": 2,
    "explanation": "Benedict's reagent heated gives brick-red copper(I) oxide precipitate.",
    "number": 16
  },
  {
    "type_tag": "BIO_GEN_HARDY_WEIN",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Hard",
    "question": "Population in HW equilibrium has $q^2 = 0.04$ ($4\\%$ recessive) in study 2. Heterozygote frequency $2pq$?",
    "options": [
      "$48\\%$",
      "$8\\%$",
      "$16\\%$",
      "$32\\%$ ($0.32$)",
      "$64\\%$"
    ],
    "answer": 3,
    "explanation": "$q=0.2, p=0.8 \\implies 2pq = 2(0.8)(0.2) = 0.32$.",
    "number": 17
  },
  {
    "type_tag": "BIO_PHY_RUBISCO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Enzyme fixing $\\text{CO}_2$ to ribulose bisphosphate (RuBP) in photosynthetic leaf 2:",
    "options": [
      "Pepsin",
      "ATP Synthase",
      "RuBisCO",
      "Amylase",
      "DNA Polymerase"
    ],
    "answer": 2,
    "explanation": "RuBisCO catalyses carbon fixation in chloroplast stroma.",
    "number": 18
  },
  {
    "type_tag": "BIO_CEL_TEST_STARCH",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of starch in food extract 2:",
    "options": [
      "Benedict's solution",
      "Ethanol emulsion",
      "Biuret reagent",
      "Iodine in potassium iodide (blue-black colour)",
      "DCPIP reagent"
    ],
    "answer": 3,
    "explanation": "Iodine forms blue-black complex with amylose.",
    "number": 19
  },
  {
    "type_tag": "BIO_GEN_NONSENSE_MUT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "A mutation converting an amino acid codon into a premature STOP codon in gene 2 is a:",
    "options": [
      "Nonsense mutation",
      "Frameshift insertion",
      "Duplication",
      "Missense mutation",
      "Silent mutation"
    ],
    "answer": 0,
    "explanation": "Nonsense mutations introduce premature termination codons.",
    "number": 20
  },
  {
    "type_tag": "BIO_PHY_KREBS_SITE",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Subcellular site of Krebs (citric acid) cycle in eukaryotic cell 2:",
    "options": [
      "Chloroplast lumen",
      "Mitochondrial Matrix",
      "Cytoplasm",
      "Intermembrane space",
      "Inner Mitochondrial Membrane"
    ],
    "answer": 1,
    "explanation": "Krebs cycle enzymes are located in mitochondrial matrix.",
    "number": 21
  },
  {
    "type_tag": "BIO_CEL_TEST_PROTEIN",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming presence of proteins in sample 2:",
    "options": [
      "Ninhydrin only",
      "Benedict's test",
      "Iodine solution",
      "Emulsion test",
      "Biuret test (violet / purple colour)"
    ],
    "answer": 4,
    "explanation": "Biuret reagent reacts with peptide bonds to form purple complex.",
    "number": 22
  },
  {
    "type_tag": "BIO_GEN_DNA_POLYMER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme synthesising new DNA strands in $5' \\to 3'$ direction during replication in cell 2:",
    "options": [
      "DNA Helicase",
      "DNA Polymerase",
      "RNA Polymerase",
      "DNA Ligase",
      "Topoisomerase"
    ],
    "answer": 1,
    "explanation": "DNA Polymerase adds complementary nucleotides in $5'\\to 3'$ direction.",
    "number": 23
  },
  {
    "type_tag": "BIO_PHY_TROPHIC_EFF",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Average percentage of energy transferred from trophic level $2$ to level $3$ in ecosystem:",
    "options": [
      "$10\\%$",
      "$1\\%$",
      "$90\\%$",
      "$100\\%$",
      "$50\\%$"
    ],
    "answer": 0,
    "explanation": "Roughly $10\\%$ ecological efficiency transfers between trophic levels.",
    "number": 24
  },
  {
    "type_tag": "BIO_CEL_TEST_LIPID",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Diagnostic test for lipids/triglycerides in emulsion tube 2:",
    "options": [
      "Biuret test",
      "Ethanol emulsion test (milky white layer)",
      "Iodine test",
      "Benedict's test",
      "Fehling's test"
    ],
    "answer": 1,
    "explanation": "Ethanol dissolving lipids forms cloudy emulsion when added to water.",
    "number": 25
  },
  {
    "type_tag": "BIO_GEN_CROSSING_OVER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Meiotic phase where crossing over and chiasmata occur in gametogenesis 2:",
    "options": [
      "Metaphase I",
      "Prophase I",
      "Telophase II",
      "Anaphase I",
      "Prophase II"
    ],
    "answer": 1,
    "explanation": "Crossing over occurs between homologous non-sister chromatids in Prophase I.",
    "number": 26
  },
  {
    "type_tag": "BIO_PHY_SYNAPSE_CA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Ion triggering neurotransmitter vesicle exocytosis at presynaptic terminal 2:",
    "options": [
      "Potassium ($\\text{K}^+$)",
      "Chloride ($\\text{Cl}^-$)",
      "Calcium ($\\text{Ca}^{2+}$)",
      "Magnesium",
      "Sodium ($\\text{Na}^+$)"
    ],
    "answer": 2,
    "explanation": "$\\text{Ca}^{2+}$ influx triggers SNARE-mediated vesicle fusion.",
    "number": 27
  }
];

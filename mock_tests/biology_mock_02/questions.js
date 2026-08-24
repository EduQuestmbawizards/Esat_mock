const QUESTIONS = [
  {
    "type_tag": "BIO_CEL_COMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of competitive inhibitor on enzyme kinetics in assay 2:",
    "options": [
      "$V_{\\max}$ unchanged; $K_m$ increases",
      "$V_{\\max}$ decreases; $K_m$ unchanged",
      "Both $V_{\\max}$ and $K_m$ decrease",
      "Both increase",
      "Neither changes"
    ],
    "answer": 0,
    "explanation": "Competitive inhibitor competes for active site: $V_{\\max}$ unchanged, $K_m$ increases.",
    "number": 1
  },
  {
    "type_tag": "BIO_GEN_DIHYBRID_RATIO",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Expected phenotypic ratio in $F_2$ generation of Mendelian dihybrid cross $AaBb \\times AaBb$ in cross 2:",
    "options": [
      "$3 : 1$",
      "$9 : 3 : 3 : 1$",
      "$1 : 1 : 1 : 1$",
      "$12 : 3 : 1$",
      "$1 : 2 : 1$"
    ],
    "answer": 1,
    "explanation": "Standard unlinked dihybrid cross yields $9:3:3:1$ ratio.",
    "number": 2
  },
  {
    "type_tag": "BIO_PHY_CARDIAC_SYST",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "State of cardiac valves during ventricular systole in cycle 2:",
    "options": [
      "AV valves open; Semilunar closed",
      "Tricuspid open; Bicuspid closed",
      "Atrioventricular (AV) valves closed; Semilunar valves open",
      "Both open",
      "Both closed"
    ],
    "answer": 2,
    "explanation": "High ventricular pressure forces semilunars open and AVs shut.",
    "number": 3
  },
  {
    "type_tag": "BIO_CEL_NONCOMP_INHIB",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "question": "Effect of non-competitive inhibitor on enzyme kinetics in assay 2:",
    "options": [
      "Both decrease",
      "$V_{\\max}$ decreases; $K_m$ unchanged",
      "$V_{\\max}$ increases",
      "$V_{\\max}$ unchanged; $K_m$ increases",
      "Both increase"
    ],
    "answer": 1,
    "explanation": "Non-competitive inhibitor lowers catalytic turnover without affecting substrate binding.",
    "number": 4
  },
  {
    "type_tag": "BIO_GEN_FRAME_SHIFT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Insertion of $1$ nucleotide base pair in an exon of gene 2 causes a:",
    "options": [
      "Point substitution only",
      "Inversion",
      "Polyploidy",
      "Frameshift mutation",
      "Silent mutation"
    ],
    "answer": 3,
    "explanation": "Non-multiple-of-three insertions alter the translational reading frame.",
    "number": 5
  },
  {
    "type_tag": "BIO_PHY_RESTING_POT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Resting membrane potential maintained across axon membrane in experiment 2:",
    "options": [
      "$+40\\text{ mV}$",
      "$-120\\text{ mV}$",
      "$-70\\text{ mV}$",
      "$-20\\text{ mV}$",
      "$0\\text{ mV}$"
    ],
    "answer": 2,
    "explanation": "Resting potential is maintained at approx $-70\\text{ mV}$ by $\\text{Na}^+/\\text{K}^+$ ATPase.",
    "number": 6
  },
  {
    "type_tag": "BIO_CEL_FLUID_MOSAIC",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Role of cholesterol in mammalian cell membrane model 2:",
    "options": [
      "Regulates fluidity and stability across changing temperatures",
      "Forms cell wall",
      "Synthesizes ATP",
      "Transcribes rRNA",
      "Pumps sodium ions"
    ],
    "answer": 0,
    "explanation": "Cholesterol modulates lipid bilayer fluidity.",
    "number": 7
  },
  {
    "type_tag": "BIO_GEN_DNA_LIGASE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme responsible for joining Okazaki fragments on the lagging strand in cell 2:",
    "options": [
      "DNA Ligase",
      "DNA Polymerase I",
      "DNA Primase",
      "DNA Helicase",
      "Exonuclease"
    ],
    "answer": 0,
    "explanation": "DNA Ligase catalyses phosphodiester bond formation between fragments.",
    "number": 8
  },
  {
    "type_tag": "BIO_PHY_INSULIN",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\beta$-cells following meal in subject 2:",
    "options": [
      "Aldosterone",
      "Insulin",
      "Glucagon",
      "Somatostatin",
      "Adrenaline"
    ],
    "answer": 1,
    "explanation": "Insulin stimulates cellular glucose uptake and glycogenesis.",
    "number": 9
  },
  {
    "type_tag": "BIO_CEL_PROKARYOTE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Structural feature present in prokaryotic bacterium 2 but absent in eukaryotes:",
    "options": [
      "Linear chromosomes",
      "Peptidoglycan cell wall and circular naked DNA ($70\\text{S}$ ribosomes)",
      "$80\\text{S}$ ribosomes",
      "Nucleus",
      "Mitochondria"
    ],
    "answer": 1,
    "explanation": "Prokaryotes possess circular DNA and $70\\text{S}$ ribosomes.",
    "number": 10
  },
  {
    "type_tag": "BIO_GEN_KARYOTYPE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Genetic condition caused by trisomy $21$ ($47$ chromosomes) diagnosed in karyotype 2:",
    "options": [
      "Klinefelter Syndrome",
      "Sickle Cell",
      "Turner Syndrome",
      "Down Syndrome",
      "Hemophilia"
    ],
    "answer": 3,
    "explanation": "Trisomy 21 is Down syndrome.",
    "number": 11
  },
  {
    "type_tag": "BIO_PHY_ALVEOLI_ADAPT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Structural adaptation of pulmonary alveoli maximizing gas exchange rate in lung 2:",
    "options": [
      "Thick lining",
      "Single-cell thin epithelial wall and extensive capillary network",
      "Low capillary density",
      "Small total surface area",
      "Dry surface"
    ],
    "answer": 1,
    "explanation": "Alveoli minimize diffusion distance and maximize surface area.",
    "number": 12
  },
  {
    "type_tag": "BIO_CEL_FACIL_DIFF",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Facilitated diffusion of solute across membrane in cell 2 differs from active transport because it:",
    "options": [
      "Moves solutes against gradient",
      "Is passive (down gradient) and requires no ATP",
      "Only transports water",
      "Uses endocytosis",
      "Requires ATP hydrolysis"
    ],
    "answer": 1,
    "explanation": "Facilitated diffusion is passive downhill transport.",
    "number": 13
  },
  {
    "type_tag": "BIO_GEN_CODOMINANCE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "In human blood group pedigree 2, alleles $I^A$ and $I^B$ exhibiting equal phenotypic expression demonstrate:",
    "options": [
      "Incomplete dominance",
      "Epistasis",
      "Sex-linkage",
      "Pleiotropy",
      "Codominance"
    ],
    "answer": 4,
    "explanation": "Both alleles are expressed simultaneously $\\implies$ codominance.",
    "number": 14
  },
  {
    "type_tag": "BIO_PHY_LIGHT_DEP_PHO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Photolysis of water yielding oxygen occurs at which complex in thylakoid 2:",
    "options": [
      "Mitochondrial matrix",
      "Photosystem II (PSII)",
      "Outer membrane",
      "Photosystem I (PSI)",
      "Calvin cycle (Stroma)"
    ],
    "answer": 1,
    "explanation": "Water oxidation occurs at the oxygen-evolving complex of PSII.",
    "number": 15
  },
  {
    "type_tag": "BIO_CEL_LYSOSOMES",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Organelle containing hydrolytic digestive enzymes in phagocyte 2:",
    "options": [
      "Peroxisome only",
      "Nucleolus",
      "Centriole",
      "Lysosome",
      "Ribosome"
    ],
    "answer": 3,
    "explanation": "Lysosomes contain acid hydrolases for intracellular degradation.",
    "number": 16
  },
  {
    "type_tag": "BIO_GEN_SEMICONSERV",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Meselson-Stahl density gradient experiment in culture 2 confirmed DNA replication is:",
    "options": [
      "Conservative",
      "Non-conservative",
      "Semi-conservative",
      "Dispersive",
      "Random"
    ],
    "answer": 2,
    "explanation": "Each replicated DNA duplex retains one parental and one newly synthesized strand.",
    "number": 17
  },
  {
    "type_tag": "BIO_PHY_GLYCOLYSIS_LOC",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Cellular location of initial anaerobic glycolysis pathway in cell 2:",
    "options": [
      "Nucleus",
      "Mitochondrial matrix",
      "Thylakoid",
      "Cytoplasm / Cytosol",
      "Cristae"
    ],
    "answer": 3,
    "explanation": "Glycolysis enzymes reside in the soluble cytosol.",
    "number": 18
  },
  {
    "type_tag": "BIO_CEL_MITOCHONDRIA",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary function of mitochondria in eukaryotic cell lineage 3:",
    "options": [
      "Aerobic cellular respiration and ATP synthesis",
      "Photosynthesis",
      "Lipid synthesis",
      "Waste digestion",
      "Protein translation"
    ],
    "answer": 0,
    "explanation": "Mitochondria synthesize ATP via oxidative phosphorylation.",
    "number": 19
  },
  {
    "type_tag": "BIO_GEN_CHARGAFF",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "DNA sample 3 has $24\\%$ Adenine. Percentage of Cytosine?",
    "options": [
      "$10\\%$",
      "$50\\%$",
      "$24\\%$",
      "$48\\%$",
      "$26\\%$"
    ],
    "answer": 4,
    "explanation": "$\\text{A}=\\text{T}=24\\% \\implies \\text{G}=\\text{C}=50 - (24) = 26\\%$.",
    "number": 20
  },
  {
    "type_tag": "BIO_PHY_AORTA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Vessel carrying oxygenated blood under high pressure from left ventricle to systemic organs in subject 3:",
    "options": [
      "Aorta",
      "Coronary sinus",
      "Pulmonary artery",
      "Vena cava",
      "Pulmonary vein"
    ],
    "answer": 0,
    "explanation": "Aorta distributes oxygenated blood from left ventricle.",
    "number": 21
  },
  {
    "type_tag": "BIO_CEL_RER",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Function of Rough Endoplasmic Reticulum (RER) in secretory tissue 3:",
    "options": [
      "Aerobic respiration",
      "Steroid lipid synthesis",
      "Synthesis and folding of proteins destined for membranes or secretion",
      "DNA replication",
      "Glycogen breakdown"
    ],
    "answer": 2,
    "explanation": "RER-bound ribosomes synthesize secretory proteins.",
    "number": 22
  },
  {
    "type_tag": "BIO_GEN_TRANSCRIPTION",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "DNA coding sequence $5'-\\text{ATG-CGA}-3'$ transcribes to mRNA in clone 3:",
    "options": [
      "$5'-\\text{ATG-CGA}-3'$",
      "$3'-\\text{AUG-CGA}-5'$",
      "$5'-\\text{UAC-GCU}-3'$",
      "$3'-\\text{UAC-GCU}-5'$",
      "$5'-\\text{AUG-CGA}-3'$"
    ],
    "answer": 4,
    "explanation": "mRNA transcript corresponds to coding strand with U replacing T.",
    "number": 23
  },
  {
    "type_tag": "BIO_PHY_BOHR_SHIFT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Bohr shift in exercising muscle tissue 3: elevated $p\\text{CO}_2$ and lower pH shift hemoglobin curve:",
    "options": [
      "To the left, increasing oxygen affinity",
      "To the right, facilitating oxygen unloading at respiring tissues",
      "Downward completely",
      "Upward",
      "No shift"
    ],
    "answer": 1,
    "explanation": "Right shift lowers oxygen affinity, enhancing delivery to tissues.",
    "number": 24
  },
  {
    "type_tag": "BIO_CEL_GOLGI",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary role of the Golgi apparatus in gland cells 3:",
    "options": [
      "Translation of mRNA",
      "Photosynthesis",
      "Modification, packaging, and sorting of proteins into secretory vesicles",
      "Cell division",
      "ATP synthesis"
    ],
    "answer": 2,
    "explanation": "Golgi apparatus modifies and packages proteins.",
    "number": 25
  },
  {
    "type_tag": "BIO_GEN_HAPLOID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Organism with diploid number $2n = 26$. Chromosome count in haploid gamete?",
    "options": [
      "$16$ chromosomes",
      "$15$ chromosomes",
      "$13$ chromosomes (haploid)",
      "$17$ chromosomes",
      "$14$ chromosomes"
    ],
    "answer": 2,
    "explanation": "Haploid number $n = 13$.",
    "number": 26
  },
  {
    "type_tag": "BIO_PHY_DEPOLARIS",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Depolarization phase of neuron action potential in trace 3 is caused by rapid influx of:",
    "options": [
      "Sodium ions ($\\text{Na}^+$)",
      "Calcium ions ($\\text{Ca}^{2+}$)",
      "Potassium ions ($\\text{K}^+$)",
      "Chloride ions ($\\text{Cl}^-$)",
      "Hydrogen ions"
    ],
    "answer": 0,
    "explanation": "Opening of voltage-gated $\\text{Na}^+$ channels causes inward current.",
    "number": 27
  }
];

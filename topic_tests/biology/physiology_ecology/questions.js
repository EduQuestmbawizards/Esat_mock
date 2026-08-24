const QUESTIONS = [
  {
    "type_tag": "BIO_PHY_AORTA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Vessel carrying oxygenated blood under high pressure from left ventricle to systemic organs in subject 1:",
    "options": [
      "Vena cava",
      "Aorta",
      "Pulmonary artery",
      "Coronary sinus",
      "Pulmonary vein"
    ],
    "answer": 1,
    "explanation": "Aorta distributes oxygenated blood from left ventricle.",
    "number": 1
  },
  {
    "type_tag": "BIO_PHY_BOHR_SHIFT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Bohr shift in exercising muscle tissue 1: elevated $p\\text{CO}_2$ and lower pH shift hemoglobin curve:",
    "options": [
      "To the left, increasing oxygen affinity",
      "No shift",
      "Downward completely",
      "To the right, facilitating oxygen unloading at respiring tissues",
      "Upward"
    ],
    "answer": 3,
    "explanation": "Right shift lowers oxygen affinity, enhancing delivery to tissues.",
    "number": 2
  },
  {
    "type_tag": "BIO_PHY_DEPOLARIS",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Depolarization phase of neuron action potential in trace 1 is caused by rapid influx of:",
    "options": [
      "Calcium ions ($\\text{Ca}^{2+}$)",
      "Sodium ions ($\\text{Na}^+$)",
      "Chloride ions ($\\text{Cl}^-$)",
      "Hydrogen ions",
      "Potassium ions ($\\text{K}^+$)"
    ],
    "answer": 1,
    "explanation": "Opening of voltage-gated $\\text{Na}^+$ channels causes inward current.",
    "number": 3
  },
  {
    "type_tag": "BIO_PHY_GLUCAGON",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\alpha$-cells during fasting state 1:",
    "options": [
      "Thyroxine",
      "Glucagon",
      "Cortisol",
      "Adrenaline",
      "Insulin"
    ],
    "answer": 1,
    "explanation": "Glucagon stimulates liver glycogenolysis.",
    "number": 4
  },
  {
    "type_tag": "BIO_PHY_ADH",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Action of Anti-Diuretic Hormone (ADH) on collecting duct epithelium in kidney 1:",
    "options": [
      "Inserts aquaporin channels, increasing water reabsorption",
      "Blocks water reabsorption",
      "Increases sodium excretion",
      "Inhibits Bowman's capsule",
      "Decreases urine concentration"
    ],
    "answer": 0,
    "explanation": "ADH promotes aquaporin-2 vesicle insertion to concentrate urine.",
    "number": 5
  },
  {
    "type_tag": "BIO_PHY_RUBISCO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Enzyme fixing $\\text{CO}_2$ to ribulose bisphosphate (RuBP) in photosynthetic leaf 1:",
    "options": [
      "ATP Synthase",
      "Pepsin",
      "DNA Polymerase",
      "Amylase",
      "RuBisCO"
    ],
    "answer": 4,
    "explanation": "RuBisCO catalyses carbon fixation in chloroplast stroma.",
    "number": 6
  },
  {
    "type_tag": "BIO_PHY_KREBS_SITE",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Subcellular site of Krebs (citric acid) cycle in eukaryotic cell 1:",
    "options": [
      "Cytoplasm",
      "Mitochondrial Matrix",
      "Inner Mitochondrial Membrane",
      "Chloroplast lumen",
      "Intermembrane space"
    ],
    "answer": 1,
    "explanation": "Krebs cycle enzymes are located in mitochondrial matrix.",
    "number": 7
  },
  {
    "type_tag": "BIO_PHY_TROPHIC_EFF",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Average percentage of energy transferred from trophic level $1$ to level $2$ in ecosystem:",
    "options": [
      "$90\\%$",
      "$1\\%$",
      "$50\\%$",
      "$100\\%$",
      "$10\\%$"
    ],
    "answer": 4,
    "explanation": "Roughly $10\\%$ ecological efficiency transfers between trophic levels.",
    "number": 8
  },
  {
    "type_tag": "BIO_PHY_SYNAPSE_CA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Ion triggering neurotransmitter vesicle exocytosis at presynaptic terminal 1:",
    "options": [
      "Magnesium",
      "Chloride ($\\text{Cl}^-$)",
      "Potassium ($\\text{K}^+$)",
      "Sodium ($\\text{Na}^+$)",
      "Calcium ($\\text{Ca}^{2+}$)"
    ],
    "answer": 4,
    "explanation": "$\\text{Ca}^{2+}$ influx triggers SNARE-mediated vesicle fusion.",
    "number": 9
  },
  {
    "type_tag": "BIO_PHY_CARDIAC_SYST",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "State of cardiac valves during ventricular systole in cycle 1:",
    "options": [
      "Tricuspid open; Bicuspid closed",
      "Both open",
      "AV valves open; Semilunar closed",
      "Both closed",
      "Atrioventricular (AV) valves closed; Semilunar valves open"
    ],
    "answer": 4,
    "explanation": "High ventricular pressure forces semilunars open and AVs shut.",
    "number": 10
  },
  {
    "type_tag": "BIO_PHY_RESTING_POT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Resting membrane potential maintained across axon membrane in experiment 1:",
    "options": [
      "$-70\\text{ mV}$",
      "$0\\text{ mV}$",
      "$-20\\text{ mV}$",
      "$-120\\text{ mV}$",
      "$+40\\text{ mV}$"
    ],
    "answer": 0,
    "explanation": "Resting potential is maintained at approx $-70\\text{ mV}$ by $\\text{Na}^+/\\text{K}^+$ ATPase.",
    "number": 11
  },
  {
    "type_tag": "BIO_PHY_INSULIN",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\beta$-cells following meal in subject 1:",
    "options": [
      "Insulin",
      "Adrenaline",
      "Aldosterone",
      "Glucagon",
      "Somatostatin"
    ],
    "answer": 0,
    "explanation": "Insulin stimulates cellular glucose uptake and glycogenesis.",
    "number": 12
  },
  {
    "type_tag": "BIO_PHY_ALVEOLI_ADAPT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Structural adaptation of pulmonary alveoli maximizing gas exchange rate in lung 1:",
    "options": [
      "Thick lining",
      "Dry surface",
      "Low capillary density",
      "Small total surface area",
      "Single-cell thin epithelial wall and extensive capillary network"
    ],
    "answer": 4,
    "explanation": "Alveoli minimize diffusion distance and maximize surface area.",
    "number": 13
  },
  {
    "type_tag": "BIO_PHY_LIGHT_DEP_PHO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Photolysis of water yielding oxygen occurs at which complex in thylakoid 1:",
    "options": [
      "Outer membrane",
      "Photosystem II (PSII)",
      "Calvin cycle (Stroma)",
      "Mitochondrial matrix",
      "Photosystem I (PSI)"
    ],
    "answer": 1,
    "explanation": "Water oxidation occurs at the oxygen-evolving complex of PSII.",
    "number": 14
  },
  {
    "type_tag": "BIO_PHY_GLYCOLYSIS_LOC",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Cellular location of initial anaerobic glycolysis pathway in cell 1:",
    "options": [
      "Cytoplasm / Cytosol",
      "Thylakoid",
      "Mitochondrial matrix",
      "Cristae",
      "Nucleus"
    ],
    "answer": 0,
    "explanation": "Glycolysis enzymes reside in the soluble cytosol.",
    "number": 15
  }
];

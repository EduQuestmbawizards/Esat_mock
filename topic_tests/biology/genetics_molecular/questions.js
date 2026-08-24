const QUESTIONS = [
  {
    "type_tag": "BIO_GEN_CHARGAFF",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "DNA sample 1 has $18\\%$ Adenine. Percentage of Cytosine?",
    "options": [
      "$50\\%$",
      "$18\\%$",
      "$36\\%$",
      "$10\\%$",
      "$32\\%$"
    ],
    "answer": 4,
    "explanation": "$\\text{A}=\\text{T}=18\\% \\implies \\text{G}=\\text{C}=50 - (18) = 32\\%$.",
    "number": 1
  },
  {
    "type_tag": "BIO_GEN_TRANSCRIPTION",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "DNA coding sequence $5'-\\text{ATG-CGA}-3'$ transcribes to mRNA in clone 1:",
    "options": [
      "$3'-\\text{UAC-GCU}-5'$",
      "$3'-\\text{AUG-CGA}-5'$",
      "$5'-\\text{AUG-CGA}-3'$",
      "$5'-\\text{UAC-GCU}-3'$",
      "$5'-\\text{ATG-CGA}-3'$"
    ],
    "answer": 2,
    "explanation": "mRNA transcript corresponds to coding strand with U replacing T.",
    "number": 2
  },
  {
    "type_tag": "BIO_GEN_HAPLOID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Organism with diploid number $2n = 22$. Chromosome count in haploid gamete?",
    "options": [
      "$15$ chromosomes",
      "$11$ chromosomes (haploid)",
      "$14$ chromosomes",
      "$13$ chromosomes",
      "$12$ chromosomes"
    ],
    "answer": 1,
    "explanation": "Haploid number $n = 11$.",
    "number": 3
  },
  {
    "type_tag": "BIO_GEN_MONOHYBRID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Monohybrid cross $Tt \\times Tt$ produces $40$ offspring. Expected number of dwarf ($tt$) plants?",
    "options": [
      "$30$ plants",
      "$5$ plants",
      "$40$ plants",
      "$20$ plants",
      "$10$ plants"
    ],
    "answer": 4,
    "explanation": "$25\\%$ of $40$ is $10$ plants.",
    "number": 4
  },
  {
    "type_tag": "BIO_GEN_SEX_LINKED",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Carrier mother ($X^B X^b$) and normal father ($X^B Y$) in pedigree 1. Probability of colour-blind son?",
    "options": [
      "$100\\%$",
      "$50\\%$ of sons",
      "$75\\%$",
      "$25\\%$",
      "$0\\%$"
    ],
    "answer": 1,
    "explanation": "Sons have $50\\%$ probability of receiving recessive $X^b$ allele.",
    "number": 5
  },
  {
    "type_tag": "BIO_GEN_HARDY_WEIN",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Hard",
    "question": "Population in HW equilibrium has $q^2 = 0.04$ ($4\\%$ recessive) in study 1. Heterozygote frequency $2pq$?",
    "options": [
      "$32\\%$ ($0.32$)",
      "$48\\%$",
      "$8\\%$",
      "$64\\%$",
      "$16\\%$"
    ],
    "answer": 0,
    "explanation": "$q=0.2, p=0.8 \\implies 2pq = 2(0.8)(0.2) = 0.32$.",
    "number": 6
  },
  {
    "type_tag": "BIO_GEN_NONSENSE_MUT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "A mutation converting an amino acid codon into a premature STOP codon in gene 1 is a:",
    "options": [
      "Duplication",
      "Frameshift insertion",
      "Silent mutation",
      "Nonsense mutation",
      "Missense mutation"
    ],
    "answer": 3,
    "explanation": "Nonsense mutations introduce premature termination codons.",
    "number": 7
  },
  {
    "type_tag": "BIO_GEN_DNA_POLYMER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme synthesising new DNA strands in $5' \\to 3'$ direction during replication in cell 1:",
    "options": [
      "Topoisomerase",
      "DNA Polymerase",
      "RNA Polymerase",
      "DNA Helicase",
      "DNA Ligase"
    ],
    "answer": 1,
    "explanation": "DNA Polymerase adds complementary nucleotides in $5'\\to 3'$ direction.",
    "number": 8
  },
  {
    "type_tag": "BIO_GEN_CROSSING_OVER",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Meiotic phase where crossing over and chiasmata occur in gametogenesis 1:",
    "options": [
      "Prophase II",
      "Anaphase I",
      "Prophase I",
      "Telophase II",
      "Metaphase I"
    ],
    "answer": 2,
    "explanation": "Crossing over occurs between homologous non-sister chromatids in Prophase I.",
    "number": 9
  },
  {
    "type_tag": "BIO_GEN_DIHYBRID_RATIO",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Expected phenotypic ratio in $F_2$ generation of Mendelian dihybrid cross $AaBb \\times AaBb$ in cross 1:",
    "options": [
      "$1 : 1 : 1 : 1$",
      "$3 : 1$",
      "$1 : 2 : 1$",
      "$9 : 3 : 3 : 1$",
      "$12 : 3 : 1$"
    ],
    "answer": 3,
    "explanation": "Standard unlinked dihybrid cross yields $9:3:3:1$ ratio.",
    "number": 10
  },
  {
    "type_tag": "BIO_GEN_FRAME_SHIFT",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Insertion of $1$ nucleotide base pair in an exon of gene 1 causes a:",
    "options": [
      "Frameshift mutation",
      "Inversion",
      "Point substitution only",
      "Silent mutation",
      "Polyploidy"
    ],
    "answer": 0,
    "explanation": "Non-multiple-of-three insertions alter the translational reading frame.",
    "number": 11
  },
  {
    "type_tag": "BIO_GEN_DNA_LIGASE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Enzyme responsible for joining Okazaki fragments on the lagging strand in cell 1:",
    "options": [
      "DNA Ligase",
      "DNA Helicase",
      "DNA Primase",
      "DNA Polymerase I",
      "Exonuclease"
    ],
    "answer": 0,
    "explanation": "DNA Ligase catalyses phosphodiester bond formation between fragments.",
    "number": 12
  },
  {
    "type_tag": "BIO_GEN_KARYOTYPE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Genetic condition caused by trisomy $21$ ($47$ chromosomes) diagnosed in karyotype 1:",
    "options": [
      "Klinefelter Syndrome",
      "Sickle Cell",
      "Hemophilia",
      "Down Syndrome",
      "Turner Syndrome"
    ],
    "answer": 3,
    "explanation": "Trisomy 21 is Down syndrome.",
    "number": 13
  },
  {
    "type_tag": "BIO_GEN_CODOMINANCE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "In human blood group pedigree 1, alleles $I^A$ and $I^B$ exhibiting equal phenotypic expression demonstrate:",
    "options": [
      "Epistasis",
      "Incomplete dominance",
      "Pleiotropy",
      "Codominance",
      "Sex-linkage"
    ],
    "answer": 3,
    "explanation": "Both alleles are expressed simultaneously $\\implies$ codominance.",
    "number": 14
  },
  {
    "type_tag": "BIO_GEN_SEMICONSERV",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Meselson-Stahl density gradient experiment in culture 1 confirmed DNA replication is:",
    "options": [
      "Conservative",
      "Non-conservative",
      "Dispersive",
      "Random",
      "Semi-conservative"
    ],
    "answer": 4,
    "explanation": "Each replicated DNA duplex retains one parental and one newly synthesized strand.",
    "number": 15
  }
];

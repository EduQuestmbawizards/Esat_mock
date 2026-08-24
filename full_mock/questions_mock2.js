const QUESTIONS = [
  {
    "type_tag": "M1_ALG_INEQUAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve the quadratic inequality $(x - 4)(x - 8) < 0$.",
    "options": [
      "$x < 4 \\text{ or } x > 8$",
      "$6 < x < 10$",
      "$-8 < x < -4$",
      "$4 < x < 8$",
      "$5 < x < 9$"
    ],
    "answer": 3,
    "explanation": "Parabola is below x-axis strictly between roots: $4 < x < 8$.",
    "number": 1
  },
  {
    "type_tag": "M1_GEO_COS_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle ABC$, $b = 5, c = 6$, $\\angle A = 60^\\circ$. Find $a^2$.",
    "options": [
      "$61$",
      "$22$",
      "$31$",
      "$91$",
      "$30$"
    ],
    "answer": 2,
    "explanation": "$a^2 = 31$.",
    "number": 2
  },
  {
    "type_tag": "M1_CALC_KIN_VEL",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Displacement $s(t) = 8t + 4t^2$. Find velocity at $t = 1\\text{ s}$.",
    "options": [
      "$18\\text{ m s}^{-1}$",
      "$16\\text{ m s}^{-1}$",
      "$12\\text{ m s}^{-1}$",
      "$14\\text{ m s}^{-1}$",
      "$10\\text{ m s}^{-1}$"
    ],
    "answer": 1,
    "explanation": "$v(1) = 8 + 8 = 16\\text{ m s}^{-1}$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_SIMULT",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find positive $x$-intercept of line $y = 6x$ and curve $y = x^2 - 6x$.",
    "options": [
      "$x = 16$",
      "$x = 10$",
      "$x = 12$",
      "$x = 9$",
      "$x = 14$"
    ],
    "answer": 2,
    "explanation": "$x^2 - 12x = 0 \\implies x = 12$.",
    "number": 4
  },
  {
    "type_tag": "M1_GEO_SIN_RULE",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "In $\\triangle PQR$, $\\frac{p}{\\sin(30^\\circ)} = 16$. Find $p$.",
    "options": [
      "$4$",
      "$9$",
      "$32$",
      "$8$",
      "$16$"
    ],
    "answer": 3,
    "explanation": "$p = 16 \\times 0.5 = 8$.",
    "number": 5
  },
  {
    "type_tag": "M1_CALC_KIN_DISP",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Velocity $v(t) = 12 + 6t$. Find displacement $\\Delta s$ from $t=0$ to $t=2\\text{ s}$.",
    "options": [
      "$32\\text{ m}$",
      "$30\\text{ m}$",
      "$28\\text{ m}$",
      "$26\\text{ m}$",
      "$36\\text{ m}$"
    ],
    "answer": 4,
    "explanation": "$\\Delta s = 2(12) + 12 = 36\\text{ m}$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_REMAINDER",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find remainder when $P(x) = 2x^2 - 3x + 9$ is divided by $(x - 4)$.",
    "options": [
      "$29$",
      "$26$",
      "$34$",
      "$44$",
      "$39$"
    ],
    "answer": 0,
    "explanation": "$P(4) = 2(4)^2 - 3(4) + 9 = 29$.",
    "number": 7
  },
  {
    "type_tag": "M1_GEO_TRI_AREA",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Area of triangle with sides $8\\text{ cm}$ and $6\\text{ cm}$ enclosing $30^\\circ$.",
    "options": [
      "$14\\text{ cm}^2$",
      "$24\\text{ cm}^2$",
      "$12\\text{ cm}^2$",
      "$6.0\\text{ cm}^2$",
      "$48\\text{ cm}^2$"
    ],
    "answer": 2,
    "explanation": "$\\text{Area} = 0.5 \\times 8 \\times 6 \\times 0.5 = 12\\text{ cm}^2$.",
    "number": 8
  },
  {
    "type_tag": "M1_CALC_AP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "AP has $a = 8$ and $d = 4$. Find $10\\text{th}$ term ($u_{10}$).",
    "options": [
      "$42$",
      "$44$",
      "$38$",
      "$40$",
      "$46$"
    ],
    "answer": 1,
    "explanation": "$u_{10} = 8 + 36$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_FACTOR",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "If $(x - 5)$ is a factor of $x^3 - 7x^2 + kx - 10$, find $k$.",
    "options": [
      "$k = 16$",
      "$k = 14$",
      "$k = 10$",
      "$k = 9$",
      "$k = 12$"
    ],
    "answer": 4,
    "explanation": "$P(5) = 0 \\implies k = 12$.",
    "number": 10
  },
  {
    "type_tag": "M1_GEO_PYTHAG_TRIG",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "If acute angle $\\theta$ has $\\sin\\theta = \\frac{7}{25}$, find $\\cos\\theta$.",
    "options": [
      "$\\frac{24}{25}$",
      "$\\frac{25}{24}$",
      "$\\frac{7}{24}$",
      "$\\frac{1}{25}$",
      "$\\frac{7}{25}$"
    ],
    "answer": 0,
    "explanation": "$\\cos\\theta = \\sqrt{1 - (7/25)^2} = \\frac{24}{25}$.",
    "number": 11
  },
  {
    "type_tag": "M1_CALC_AP_SUM",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum of first $10$ terms of AP with $a = 5$ and $d = 3$.",
    "options": [
      "$180$",
      "$190$",
      "$170$",
      "$185$",
      "$175$"
    ],
    "answer": 3,
    "explanation": "$S_{10} = 5(2(5) + 27) = 185$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_BINOMIAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find coefficient of $x^2$ in the expansion of $(1 + 4x)^5$.",
    "options": [
      "$165$",
      "$175$",
      "$170$",
      "$160$",
      "$180$"
    ],
    "answer": 3,
    "explanation": "$\\binom{5}{2}(1)^3(4)^2 = 160$.",
    "number": 13
  },
  {
    "type_tag": "M1_GEO_TRIG_SOL",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Hard",
    "question": "Number of distinct solutions to $\\sin(5x) = 0$ in the range $0 \\le x \\le \\pi$.",
    "options": [
      "$9$",
      "$7$",
      "$5$",
      "$6$",
      "$8$"
    ],
    "answer": 3,
    "explanation": "Solutions occur at $(5)x = 0, \\pi, 2\\pi, \\dots, 5\\pi$, giving $6$ solutions.",
    "number": 14
  },
  {
    "type_tag": "M1_CALC_GP_NTH",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "GP has $a = 6$ and $r = 3$. Find $4\\text{th}$ term.",
    "options": [
      "$72$",
      "$164$",
      "$54$",
      "$486$",
      "$162$"
    ],
    "answer": 4,
    "explanation": "$u_4 = (6) \\times 27 = 162$.",
    "number": 15
  },
  {
    "type_tag": "M1_ALG_TRANSFORM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "State the equation after translating $y = f(x)$ by vector $\\begin{pmatrix} 5 \\\\ -7 \\end{pmatrix}$.",
    "options": [
      "$y = f(x + 5) + 7$",
      "$y = f(x - 5) - 7$",
      "$y = 5f(x) - 7$",
      "$y = f(x - 5) + 7$",
      "$y = f(x + 5) - 7$"
    ],
    "answer": 1,
    "explanation": "$y = f(x - 5) - 7$.",
    "number": 16
  },
  {
    "type_tag": "M1_GEO_ARC_LEN",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Arc length with radius $16\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$6\\pi\\text{ cm}$",
      "$4\\pi\\text{ cm}$",
      "$8\\pi\\text{ cm}$",
      "$7\\pi\\text{ cm}$",
      "$5\\pi\\text{ cm}$"
    ],
    "answer": 1,
    "explanation": "$s = 16 \\times \\frac{\\pi}{4} = 4\\pi\\text{ cm}$.",
    "number": 17
  },
  {
    "type_tag": "M1_CALC_GP_SUM_INF",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Sum to infinity of GP with $a = 12$ and $r = \\frac{1}{4}$.",
    "options": [
      "$48$",
      "$4$",
      "$12$",
      "$17$",
      "$16$"
    ],
    "answer": 4,
    "explanation": "$S_\\infty = \\frac{12}{3/4} = 16$.",
    "number": 18
  },
  {
    "type_tag": "M1_ALG_INVERSE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $f^{-1}(x)$ for $f(x) = 6x - 8$.",
    "options": [
      "$\\frac{6}{x + 8}$",
      "$\\frac{x + 8}{6}$",
      "$\\frac{x - 8}{6}$",
      "$6x + 8$",
      "$\\frac{1}{6x - 8}$"
    ],
    "answer": 1,
    "explanation": "$f^{-1}(x) = \\frac{x + 8}{6}$.",
    "number": 19
  },
  {
    "type_tag": "M1_GEO_SECTOR_A",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Medium",
    "question": "Sector area with radius $8\\text{ cm}$ and angle $\\frac{\\pi}{4}\\text{ rad}$.",
    "options": [
      "$17\\pi\\text{ cm}^2$",
      "$\\frac{21\\pi}{4}\\text{ cm}^2$",
      "$\\frac{16\\pi}{2}\\text{ cm}^2$",
      "$\\frac{19\\pi}{2}\\text{ cm}^2$",
      "$23\\pi\\text{ cm}^2$"
    ],
    "answer": 2,
    "explanation": "$A = \\frac{16\\pi}{2}\\text{ cm}^2$.",
    "number": 20
  },
  {
    "type_tag": "M1_CALC_COND_PROB",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Medium",
    "question": "Given $P(A) = 0.60$, $P(B) = 0.40$, and $P(A \\cap B) = 0.24$, calculate $P(B \\mid A)$.",
    "options": [
      "$0.50$",
      "$0.40$",
      "$0.10$",
      "$0.80$",
      "$0.20$"
    ],
    "answer": 1,
    "explanation": "$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = 0.40$.",
    "number": 21
  },
  {
    "type_tag": "M1_ALG_COMPOSITE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "If $f(x) = 3x + 2$ and $g(x) = x^2$, evaluate $f(g(5))$.",
    "options": [
      "$90$",
      "$85$",
      "$80$",
      "$73$",
      "$77$"
    ],
    "answer": 4,
    "explanation": "$f(g(5)) = 3(25) + 2 = 77$.",
    "number": 22
  },
  {
    "type_tag": "M1_GEO_DIST_2D",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Distance between $(0,0)$ and $(24, 32)$.",
    "options": [
      "$40$",
      "$42$",
      "$56$",
      "$1600$",
      "$32$"
    ],
    "answer": 0,
    "explanation": "$d = \\sqrt{576 + 1024} = 40$.",
    "number": 23
  },
  {
    "type_tag": "M1_CALC_COMBINATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of ways to choose $2$ representatives from $9$ candidates.",
    "options": [
      "$81$",
      "$18$",
      "$72$",
      "$39$",
      "$36$"
    ],
    "answer": 4,
    "explanation": "$\\binom{9}{2} = 36$.",
    "number": 24
  },
  {
    "type_tag": "M1_ALG_EXP_EQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve for $x$: $3^{x + 1} = 243$.",
    "options": [
      "$x = 6$",
      "$x = 5$",
      "$x = 4$",
      "$x = 8$",
      "$x = 7$"
    ],
    "answer": 2,
    "explanation": "$3^{x+1} = 3^{5} \\implies x = 4$.",
    "number": 25
  },
  {
    "type_tag": "M1_GEO_MIDPT",
    "module": "Mathematics 1",
    "topic": "Geometry & Trig",
    "difficulty": "Easy",
    "question": "Midpoint of segment connecting $A(16, 0)$ and $B(0, 24)$.",
    "options": [
      "$(4, 4)$",
      "$(8, 12)$",
      "$(16, 24)$",
      "$(9, 12)$",
      "$(12, 8)$"
    ],
    "answer": 1,
    "explanation": "$M = (8, 12)$.",
    "number": 26
  },
  {
    "type_tag": "M1_CALC_PERMUTATIONS",
    "module": "Mathematics 1",
    "topic": "Calculus & Prob",
    "difficulty": "Easy",
    "question": "Number of permutations of $2$ distinct items from $8$ items.",
    "options": [
      "$56$",
      "$60$",
      "$58$",
      "$64$",
      "$62$"
    ],
    "answer": 0,
    "explanation": "$P(8, 2) = 56$.",
    "number": 27
  },
  {
    "type_tag": "CHM_ATM_ISOTOPES",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Two isotopes of element with atomic number $Z=13$ have:",
    "options": [
      "Different electron numbers",
      "Different atomic numbers",
      "Different chemical properties",
      "Same protons ($13$), different neutrons",
      "Same neutrons, different protons"
    ],
    "answer": 3,
    "explanation": "Isotopes share identical proton number $Z$.",
    "number": 28
  },
  {
    "type_tag": "CHM_ENR_ENDOTHERMIC",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "An endothermic reaction with $\\Delta H = +75\\text{ kJ mol}^{-1}$:",
    "options": [
      "Absorbs heat from surroundings (surroundings cool)",
      "Has $\\Delta H < 0$",
      "Has zero entropy change",
      "Releases heat to surroundings",
      "Cannot proceed spontaneously"
    ],
    "answer": 0,
    "explanation": "Endothermic reactions absorb thermal energy ($\\Delta H > 0$).",
    "number": 29
  },
  {
    "type_tag": "CHM_ORG_HOMOLOGOUS",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "In series of alkanes ($C_n H_{2n+2}$) up to $n=6$, members share:",
    "options": [
      "Same general formula and functional group with successive $-\\text{CH}_2-$ difference",
      "Same boiling point",
      "Same melting point",
      "Same molar mass",
      "Different general formulas"
    ],
    "answer": 0,
    "explanation": "Homologous series share general formula and functional group.",
    "number": 30
  },
  {
    "type_tag": "CHM_ATM_HYBRIDISATION",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Hard",
    "question": "Hybridisation of carbon atoms in alkene $C_{4}H_{8}$ double bond.",
    "options": [
      "$sp^3$",
      "$sp$",
      "$sp^2$",
      "$sp^3d$",
      "$dsp^2$"
    ],
    "answer": 2,
    "explanation": "Trigonal planar carbon with double bond has $sp^2$ hybridisation.",
    "number": 31
  },
  {
    "type_tag": "CHM_ENR_ATOM_ECONOMY",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Formula for Percentage Atom Economy in synthetic route 3:",
    "options": [
      "$\\frac{\\text{Actual yield}}{\\text{Theoretical yield}} \\times 100\\%$",
      "$\\frac{\\text{Reactant mass}}{\\text{Product mass}} \\times 100\\%$",
      "$\\text{Percentage yield} \\times 2$",
      "$\\frac{\\text{Mass of product}}{\\text{Mass of waste}} \\times 100\\%$",
      "$\\frac{\\text{Molar mass of desired product}}{\\text{Total molar mass of all reactants}} \\times 100\\%$"
    ],
    "answer": 4,
    "explanation": "Atom economy measures incorporated reactant atoms.",
    "number": 32
  },
  {
    "type_tag": "CHM_ORG_BENZENE_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "question": "Characteristic reaction mechanism of benzene ring in nitration experiment 3:",
    "options": [
      "Electrophilic Addition",
      "Elimination",
      "Nucleophilic Substitution",
      "Free Radical Addition",
      "Electrophilic Aromatic Substitution"
    ],
    "answer": 4,
    "explanation": "Electrophilic substitution preserves aromatic resonance stability.",
    "number": 33
  },
  {
    "type_tag": "CHM_ATM_NOBLE_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Electronic configuration of noble gas Argon (Ar, Z=18).",
    "options": [
      "$1s^2 2s^2 2p^6 3s^2$",
      "$[\\text{He}] 2s^1$",
      "$[\\text{Ne}] 3s^2 3p^6$",
      "$1s^2 2s^2 2p^5 3s^1$",
      "$1s^2 2s^2 2p^4$"
    ],
    "answer": 2,
    "explanation": "Full outer shell configuration: $[\\text{Ne}] 3s^2 3p^6$.",
    "number": 34
  },
  {
    "type_tag": "CHM_ENR_KP_EXPRESSION",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Equilibrium expression $K_p$ for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$ in vessel 3:",
    "options": [
      "$K_p = p(\\text{SO}_3)^2 - p(\\text{SO}_2)^2$",
      "$K_p = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]}$",
      "$K_p = \\frac{2p(\\text{SO}_3)}{2p(\\text{SO}_2) + p(\\text{O}_2)}$",
      "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$",
      "$K_p = \\frac{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}{p(\\text{SO}_3)^2}$"
    ],
    "answer": 3,
    "explanation": "$K_p = \\frac{p(\\text{SO}_3)^2}{p(\\text{SO}_2)^2 \\cdot p(\\text{O}_2)}$.",
    "number": 35
  },
  {
    "type_tag": "CHM_ORG_EZ_ISOMER",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Requirement for $E/Z$ stereoisomerism in alkene sample 3:",
    "options": [
      "Hydrogen bonding capability",
      "Triple bond",
      "Chiral carbon atom",
      "Restricted rotation around C=C and two different groups on each double-bonded carbon",
      "Four identical groups on carbons"
    ],
    "answer": 3,
    "explanation": "Requires restricted rotation and non-identical substituents on both carbons.",
    "number": 36
  },
  {
    "type_tag": "CHM_ATM_E_CONFIG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Ground state electron configuration of neutral Silicon (Si, Z=14).",
    "options": [
      "$1s^2 2s^2 2p^6 3s^2 3p^2$",
      "$[\\text{He}] 2s^2$",
      "$1s^2 2s^2 2p^6$",
      "$1s^2 2s^2 2p^6 3s^{10}$",
      "$1s^2 2s^2 2p^5 3s^2$"
    ],
    "answer": 0,
    "explanation": "Electronic configuration fills subshells: $1s^2 2s^2 2p^6 3s^2 3p^2$.",
    "number": 37
  },
  {
    "type_tag": "CHM_ENR_HESS_LAW",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Calculate $\\Delta H$ given $\\sum \\Delta H_f^\\circ(\\text{prod}) = -1200\\text{ kJ}$ and $\\sum \\Delta H_f^\\circ(\\text{react}) = -400\\text{ kJ}$.",
    "options": [
      "$-600\\text{ kJ mol}^{-1}$",
      "$+800\\text{ kJ mol}^{-1}$",
      "$-800\\text{ kJ mol}^{-1}$",
      "$-1600\\text{ kJ mol}^{-1}$",
      "$+1600\\text{ kJ mol}^{-1}$"
    ],
    "answer": 2,
    "explanation": "$\\Delta H = \\text{Products} - \\text{Reactants} = -800\\text{ kJ mol}^{-1}$.",
    "number": 38
  },
  {
    "type_tag": "CHM_ORG_IUPAC_ALC",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of straight-chain alcohol Butan-1-ol.",
    "options": [
      "Propanoic acid",
      "Ethane",
      "Butan-1-ol",
      "Propanone",
      "Methoxyethane"
    ],
    "answer": 2,
    "explanation": "Butan-1-ol is a primary alcohol.",
    "number": 39
  },
  {
    "type_tag": "CHM_ATM_VSEPR_CH4",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR molecular shape and bond angle of methane ($\\text{CH}_4$) in sample 4.",
    "options": [
      "Trigonal planar, $120^\\circ$",
      "Bent, $104.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "Linear, $180^\\circ$",
      "Tetrahedral, $109.5^\\circ$"
    ],
    "answer": 4,
    "explanation": "4 bonding pairs, 0 lone pairs $\\implies$ Tetrahedral, $109.5^\\circ$.",
    "number": 40
  },
  {
    "type_tag": "CHM_ENR_GIBBS",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "Temperature at which reaction with $\\Delta H = +120\\text{ kJ}, \\Delta S = +400\\text{ J K}^{-1}$ has $\\Delta G = 0$.",
    "options": [
      "$T = 0\\text{ K}$",
      "$T = 3000\\text{ K}$",
      "$T = 30\\text{ K}$",
      "$T = 300\\text{ K}$",
      "$T = 100\\text{ K}$"
    ],
    "answer": 3,
    "explanation": "$T = \\frac{\\Delta H}{\\Delta S} = \\frac{120000}{400} = 300\\text{ K}$.",
    "number": 41
  },
  {
    "type_tag": "CHM_ORG_IUPAC_KET",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Easy",
    "question": "IUPAC name of ketone Pentan-3-one.",
    "options": [
      "Methyl ethanoate",
      "Propanoic acid",
      "Propan-1-ol",
      "Propanal",
      "Pentan-3-one"
    ],
    "answer": 4,
    "explanation": "Pentan-3-one is an aliphatic ketone.",
    "number": 42
  },
  {
    "type_tag": "CHM_ATM_VSEPR_NH3",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of ammonia ($\\text{NH}_3$) in container 4.",
    "options": [
      "Trigonal planar, $120^\\circ$",
      "Tetrahedral, $109.5^\\circ$",
      "Trigonal pyramidal, $107^\\circ$",
      "T-shaped, $90^\\circ$",
      "Bent, $104.5^\\circ$"
    ],
    "answer": 2,
    "explanation": "3 bonding pairs, 1 lone pair $\\implies$ Trigonal pyramidal, $107^\\circ$.",
    "number": 43
  },
  {
    "type_tag": "CHM_ENR_RATE_EQ",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "$\\text{Rate} = k[A]^{4}[B]$. If $[A]$ is doubled and $[B]$ unchanged, rate increases by factor:",
    "options": [
      "$20$",
      "$16$",
      "$17$",
      "$19$",
      "$18$"
    ],
    "answer": 1,
    "explanation": "Factor $= 2^{4} = 16$.",
    "number": 44
  },
  {
    "type_tag": "CHM_ORG_CHIRAL",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Which compound in set 4 contains an asymmetric chiral carbon?",
    "options": [
      "Butan-2-ol ($\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3$)",
      "Ethane",
      "Propan-2-ol",
      "Butan-1-ol",
      "Propan-1-ol"
    ],
    "answer": 0,
    "explanation": "C-2 in butan-2-ol has 4 distinct substituents.",
    "number": 45
  },
  {
    "type_tag": "CHM_ATM_VSEPR_H2O",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "VSEPR shape and bond angle of water ($\\text{H}_2\\text{O}$) in trial 4.",
    "options": [
      "Tetrahedral, $109.5^\\circ$",
      "Bent, $104.5^\\circ$",
      "Linear, $180^\\circ$",
      "Trigonal planar, $120^\\circ$",
      "Trigonal pyramidal, $107^\\circ$"
    ],
    "answer": 1,
    "explanation": "2 bonding pairs, 2 lone pairs $\\implies$ Bent, $104.5^\\circ$.",
    "number": 46
  },
  {
    "type_tag": "CHM_ENR_LE_CHATELIER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Medium",
    "question": "Exothermic reaction with $\\Delta H = -200\\text{ kJ mol}^{-1}$. Increasing temperature causes $K_c$ to:",
    "options": [
      "Become zero",
      "Remain constant",
      "Double",
      "Decrease (equilibrium shifts in reverse)",
      "Increase"
    ],
    "answer": 3,
    "explanation": "Exothermic reactions shift left when heated, lowering $K_c$.",
    "number": 47
  },
  {
    "type_tag": "CHM_ORG_MARKOVNIKOV",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Major organic product of propene reacting with $\\text{HBr}$ in trial 4:",
    "options": [
      "1,2-dibromopropane",
      "2-bromopropene",
      "1-bromopropane",
      "2-bromopropane",
      "Propane"
    ],
    "answer": 3,
    "explanation": "Markovnikov addition proceeds via more stable secondary carbocation.",
    "number": 48
  },
  {
    "type_tag": "CHM_ATM_IONIS_ENERGY",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Medium",
    "question": "Sharp jump between the 5th and 6th ionisation energies indicates valence electron count of:",
    "options": [
      "$5$ valence electrons",
      "$6$ valence electrons",
      "$7$ valence electrons",
      "$8$ valence electrons",
      "$9$ valence electrons"
    ],
    "answer": 0,
    "explanation": "Jump occurs when removing electron from inner shell after losing all $5$ valence electrons.",
    "number": 49
  },
  {
    "type_tag": "CHM_ENR_PH_STRONG",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Easy",
    "question": "pH of solution with $[\\text{H}^+] = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.",
    "options": [
      "$5.0$",
      "$6.0$",
      "$8.0$",
      "$7.0$",
      "$4.0$"
    ],
    "answer": 4,
    "explanation": "$\\text{pH} = -\\log_{10}(10^{-4}) = 4.0$.",
    "number": 50
  },
  {
    "type_tag": "CHM_ORG_NUCLEO_SUB",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Reaction mechanism for bromoethane with aqueous $\\text{NaOH}$ in flask 4:",
    "options": [
      "Elimination",
      "Nucleophilic Substitution ($S_N2$)",
      "Electrophilic Substitution",
      "Free Radical Substitution",
      "Electrophilic Addition"
    ],
    "answer": 1,
    "explanation": "$\\text{OH}^-$ nucleophile attacks primary haloalkane via $S_N2$.",
    "number": 51
  },
  {
    "type_tag": "CHM_ATM_ELECTRONEG",
    "module": "Chemistry",
    "topic": "Atomic & Bonding",
    "difficulty": "Easy",
    "question": "Which element among (F, Cl, Br, I, At) has the highest Pauling electronegativity in group set 4?",
    "options": [
      "Iodine (I)",
      "Fluorine (F, 4.0)",
      "Bromine (Br)",
      "Astatine (At)",
      "Chlorine (Cl)"
    ],
    "answer": 1,
    "explanation": "Fluorine has highest electronegativity (4.0).",
    "number": 52
  },
  {
    "type_tag": "CHM_ENR_BUFFER",
    "module": "Chemistry",
    "topic": "Energetics & Kinetics",
    "difficulty": "Hard",
    "question": "pH of buffer with $[\\text{acid}] = [\\text{salt}]$ and $pK_a = 4.90$.",
    "options": [
      "$9.10$",
      "$7.00$",
      "$1.00$",
      "$3.90$",
      "$4.90$"
    ],
    "answer": 4,
    "explanation": "$\\text{pH} = pK_a = 4.90$.",
    "number": 53
  },
  {
    "type_tag": "CHM_ORG_OXID_ALC_PRI",
    "module": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "question": "Product of primary alcohol heated under reflux with excess acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in run 4:",
    "options": [
      "Ester",
      "Alkene",
      "Aldehyde",
      "Carboxylic acid",
      "Ketone"
    ],
    "answer": 3,
    "explanation": "Full reflux oxidation yields carboxylic acid.",
    "number": 54
  },
  {
    "type_tag": "BIO_CEL_PROKARYOTE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Structural feature present in prokaryotic bacterium 3 but absent in eukaryotes:",
    "options": [
      "$80\\text{S}$ ribosomes",
      "Linear chromosomes",
      "Mitochondria",
      "Peptidoglycan cell wall and circular naked DNA ($70\\text{S}$ ribosomes)",
      "Nucleus"
    ],
    "answer": 3,
    "explanation": "Prokaryotes possess circular DNA and $70\\text{S}$ ribosomes.",
    "number": 55
  },
  {
    "type_tag": "BIO_GEN_KARYOTYPE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Genetic condition caused by trisomy $21$ ($47$ chromosomes) diagnosed in karyotype 3:",
    "options": [
      "Klinefelter Syndrome",
      "Hemophilia",
      "Turner Syndrome",
      "Down Syndrome",
      "Sickle Cell"
    ],
    "answer": 3,
    "explanation": "Trisomy 21 is Down syndrome.",
    "number": 56
  },
  {
    "type_tag": "BIO_PHY_ALVEOLI_ADAPT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Structural adaptation of pulmonary alveoli maximizing gas exchange rate in lung 3:",
    "options": [
      "Low capillary density",
      "Small total surface area",
      "Thick lining",
      "Single-cell thin epithelial wall and extensive capillary network",
      "Dry surface"
    ],
    "answer": 3,
    "explanation": "Alveoli minimize diffusion distance and maximize surface area.",
    "number": 57
  },
  {
    "type_tag": "BIO_CEL_FACIL_DIFF",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Facilitated diffusion of solute across membrane in cell 3 differs from active transport because it:",
    "options": [
      "Requires ATP hydrolysis",
      "Uses endocytosis",
      "Is passive (down gradient) and requires no ATP",
      "Moves solutes against gradient",
      "Only transports water"
    ],
    "answer": 2,
    "explanation": "Facilitated diffusion is passive downhill transport.",
    "number": 58
  },
  {
    "type_tag": "BIO_GEN_CODOMINANCE",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "In human blood group pedigree 3, alleles $I^A$ and $I^B$ exhibiting equal phenotypic expression demonstrate:",
    "options": [
      "Pleiotropy",
      "Codominance",
      "Incomplete dominance",
      "Epistasis",
      "Sex-linkage"
    ],
    "answer": 1,
    "explanation": "Both alleles are expressed simultaneously $\\implies$ codominance.",
    "number": 59
  },
  {
    "type_tag": "BIO_PHY_LIGHT_DEP_PHO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Photolysis of water yielding oxygen occurs at which complex in thylakoid 3:",
    "options": [
      "Photosystem I (PSI)",
      "Photosystem II (PSII)",
      "Outer membrane",
      "Calvin cycle (Stroma)",
      "Mitochondrial matrix"
    ],
    "answer": 1,
    "explanation": "Water oxidation occurs at the oxygen-evolving complex of PSII.",
    "number": 60
  },
  {
    "type_tag": "BIO_CEL_LYSOSOMES",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Organelle containing hydrolytic digestive enzymes in phagocyte 3:",
    "options": [
      "Ribosome",
      "Peroxisome only",
      "Nucleolus",
      "Centriole",
      "Lysosome"
    ],
    "answer": 4,
    "explanation": "Lysosomes contain acid hydrolases for intracellular degradation.",
    "number": 61
  },
  {
    "type_tag": "BIO_GEN_SEMICONSERV",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Meselson-Stahl density gradient experiment in culture 3 confirmed DNA replication is:",
    "options": [
      "Semi-conservative",
      "Non-conservative",
      "Conservative",
      "Random",
      "Dispersive"
    ],
    "answer": 0,
    "explanation": "Each replicated DNA duplex retains one parental and one newly synthesized strand.",
    "number": 62
  },
  {
    "type_tag": "BIO_PHY_GLYCOLYSIS_LOC",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Cellular location of initial anaerobic glycolysis pathway in cell 3:",
    "options": [
      "Cristae",
      "Mitochondrial matrix",
      "Cytoplasm / Cytosol",
      "Nucleus",
      "Thylakoid"
    ],
    "answer": 2,
    "explanation": "Glycolysis enzymes reside in the soluble cytosol.",
    "number": 63
  },
  {
    "type_tag": "BIO_CEL_MITOCHONDRIA",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary function of mitochondria in eukaryotic cell lineage 4:",
    "options": [
      "Aerobic cellular respiration and ATP synthesis",
      "Photosynthesis",
      "Lipid synthesis",
      "Waste digestion",
      "Protein translation"
    ],
    "answer": 0,
    "explanation": "Mitochondria synthesize ATP via oxidative phosphorylation.",
    "number": 64
  },
  {
    "type_tag": "BIO_GEN_CHARGAFF",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "DNA sample 4 has $27\\%$ Adenine. Percentage of Cytosine?",
    "options": [
      "$10\\%$",
      "$50\\%$",
      "$23\\%$",
      "$27\\%$",
      "$54\\%$"
    ],
    "answer": 2,
    "explanation": "$\\text{A}=\\text{T}=27\\% \\implies \\text{G}=\\text{C}=50 - (27) = 23\\%$.",
    "number": 65
  },
  {
    "type_tag": "BIO_PHY_AORTA",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Vessel carrying oxygenated blood under high pressure from left ventricle to systemic organs in subject 4:",
    "options": [
      "Pulmonary vein",
      "Aorta",
      "Pulmonary artery",
      "Vena cava",
      "Coronary sinus"
    ],
    "answer": 1,
    "explanation": "Aorta distributes oxygenated blood from left ventricle.",
    "number": 66
  },
  {
    "type_tag": "BIO_CEL_RER",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Function of Rough Endoplasmic Reticulum (RER) in secretory tissue 4:",
    "options": [
      "Steroid lipid synthesis",
      "DNA replication",
      "Glycogen breakdown",
      "Aerobic respiration",
      "Synthesis and folding of proteins destined for membranes or secretion"
    ],
    "answer": 4,
    "explanation": "RER-bound ribosomes synthesize secretory proteins.",
    "number": 67
  },
  {
    "type_tag": "BIO_GEN_TRANSCRIPTION",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "DNA coding sequence $5'-\\text{ATG-CGA}-3'$ transcribes to mRNA in clone 4:",
    "options": [
      "$3'-\\text{UAC-GCU}-5'$",
      "$5'-\\text{AUG-CGA}-3'$",
      "$5'-\\text{ATG-CGA}-3'$",
      "$5'-\\text{UAC-GCU}-3'$",
      "$3'-\\text{AUG-CGA}-5'$"
    ],
    "answer": 1,
    "explanation": "mRNA transcript corresponds to coding strand with U replacing T.",
    "number": 68
  },
  {
    "type_tag": "BIO_PHY_BOHR_SHIFT",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Bohr shift in exercising muscle tissue 4: elevated $p\\text{CO}_2$ and lower pH shift hemoglobin curve:",
    "options": [
      "To the left, increasing oxygen affinity",
      "To the right, facilitating oxygen unloading at respiring tissues",
      "Downward completely",
      "No shift",
      "Upward"
    ],
    "answer": 1,
    "explanation": "Right shift lowers oxygen affinity, enhancing delivery to tissues.",
    "number": 69
  },
  {
    "type_tag": "BIO_CEL_GOLGI",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Primary role of the Golgi apparatus in gland cells 4:",
    "options": [
      "Photosynthesis",
      "Modification, packaging, and sorting of proteins into secretory vesicles",
      "Translation of mRNA",
      "Cell division",
      "ATP synthesis"
    ],
    "answer": 1,
    "explanation": "Golgi apparatus modifies and packages proteins.",
    "number": 70
  },
  {
    "type_tag": "BIO_GEN_HAPLOID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Easy",
    "question": "Organism with diploid number $2n = 28$. Chromosome count in haploid gamete?",
    "options": [
      "$15$ chromosomes",
      "$16$ chromosomes",
      "$18$ chromosomes",
      "$17$ chromosomes",
      "$14$ chromosomes (haploid)"
    ],
    "answer": 4,
    "explanation": "Haploid number $n = 14$.",
    "number": 71
  },
  {
    "type_tag": "BIO_PHY_DEPOLARIS",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Depolarization phase of neuron action potential in trace 4 is caused by rapid influx of:",
    "options": [
      "Potassium ions ($\\text{K}^+$)",
      "Sodium ions ($\\text{Na}^+$)",
      "Chloride ions ($\\text{Cl}^-$)",
      "Calcium ions ($\\text{Ca}^{2+}$)",
      "Hydrogen ions"
    ],
    "answer": 1,
    "explanation": "Opening of voltage-gated $\\text{Na}^+$ channels causes inward current.",
    "number": 72
  },
  {
    "type_tag": "BIO_CEL_MAGNIFICATION",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Actual cell size $40\\,\\mu\\text{m}$ viewed under magnification $\\times 400$. Image size in mm?",
    "options": [
      "$8.0\\text{ mm}$",
      "$1.60\\text{ mm}$",
      "$16.0\\text{ mm}$",
      "$16000\\text{ mm}$",
      "$160.0\\text{ mm}$"
    ],
    "answer": 2,
    "explanation": "$I = A \\times M = (40 \\times 10^{-3}\\,\\text{mm}) \\times 400 = 16.0\\text{ mm}$.",
    "number": 73
  },
  {
    "type_tag": "BIO_GEN_MONOHYBRID",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Monohybrid cross $Tt \\times Tt$ produces $160$ offspring. Expected number of dwarf ($tt$) plants?",
    "options": [
      "$160$ plants",
      "$120$ plants",
      "$80$ plants",
      "$20$ plants",
      "$40$ plants"
    ],
    "answer": 4,
    "explanation": "$25\\%$ of $160$ is $40$ plants.",
    "number": 74
  },
  {
    "type_tag": "BIO_PHY_GLUCAGON",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Easy",
    "question": "Hormone secreted by pancreatic $\\alpha$-cells during fasting state 4:",
    "options": [
      "Cortisol",
      "Insulin",
      "Glucagon",
      "Adrenaline",
      "Thyroxine"
    ],
    "answer": 2,
    "explanation": "Glucagon stimulates liver glycogenolysis.",
    "number": 75
  },
  {
    "type_tag": "BIO_CEL_WATER_POT",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "question": "Plant cell with solute potential $\\Psi_s = -500\\text{ kPa}$ and pressure potential $\\Psi_p = +200\\text{ kPa}$. Total $\\Psi$?",
    "options": [
      "$-400\\text{ kPa}$",
      "$-300\\text{ kPa}$",
      "$-450\\text{ kPa}$",
      "$-350\\text{ kPa}$",
      "$-500\\text{ kPa}$"
    ],
    "answer": 1,
    "explanation": "$\\Psi = \\Psi_s + \\Psi_p = -300\\text{ kPa}$.",
    "number": 76
  },
  {
    "type_tag": "BIO_GEN_SEX_LINKED",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Medium",
    "question": "Carrier mother ($X^B X^b$) and normal father ($X^B Y$) in pedigree 4. Probability of colour-blind son?",
    "options": [
      "$0\\%$",
      "$100\\%$",
      "$25\\%$",
      "$50\\%$ of sons",
      "$75\\%$"
    ],
    "answer": 3,
    "explanation": "Sons have $50\\%$ probability of receiving recessive $X^b$ allele.",
    "number": 77
  },
  {
    "type_tag": "BIO_PHY_ADH",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Hard",
    "question": "Action of Anti-Diuretic Hormone (ADH) on collecting duct epithelium in kidney 4:",
    "options": [
      "Inhibits Bowman's capsule",
      "Increases sodium excretion",
      "Inserts aquaporin channels, increasing water reabsorption",
      "Blocks water reabsorption",
      "Decreases urine concentration"
    ],
    "answer": 2,
    "explanation": "ADH promotes aquaporin-2 vesicle insertion to concentrate urine.",
    "number": 78
  },
  {
    "type_tag": "BIO_CEL_TEST_GLUCOSE",
    "module": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "question": "Reagent test confirming reducing sugars (glucose) in solution 4:",
    "options": [
      "Iodine solution (blue-black)",
      "Benedict's reagent heated (brick-red precipitate)",
      "Biuret test (purple)",
      "Emulsion test",
      "DCPIP test"
    ],
    "answer": 1,
    "explanation": "Benedict's reagent heated gives brick-red copper(I) oxide precipitate.",
    "number": 79
  },
  {
    "type_tag": "BIO_GEN_HARDY_WEIN",
    "module": "Biology",
    "topic": "Genetics & Molecular",
    "difficulty": "Hard",
    "question": "Population in HW equilibrium has $q^2 = 0.04$ ($4\\%$ recessive) in study 4. Heterozygote frequency $2pq$?",
    "options": [
      "$16\\%$",
      "$48\\%$",
      "$32\\%$ ($0.32$)",
      "$8\\%$",
      "$64\\%$"
    ],
    "answer": 2,
    "explanation": "$q=0.2, p=0.8 \\implies 2pq = 2(0.8)(0.2) = 0.32$.",
    "number": 80
  },
  {
    "type_tag": "BIO_PHY_RUBISCO",
    "module": "Biology",
    "topic": "Physiology & Ecology",
    "difficulty": "Medium",
    "question": "Enzyme fixing $\\text{CO}_2$ to ribulose bisphosphate (RuBP) in photosynthetic leaf 4:",
    "options": [
      "DNA Polymerase",
      "RuBisCO",
      "ATP Synthase",
      "Pepsin",
      "Amylase"
    ],
    "answer": 1,
    "explanation": "RuBisCO catalyses carbon fixation in chloroplast stroma.",
    "number": 81
  }
];

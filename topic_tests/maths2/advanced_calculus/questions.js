const QUESTIONS = [
  {
    "type_tag": "M2_CALC_PRODUCT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(x e^{2x})$.",
    "options": [
      "$2e^{2x}$",
      "$(1 + x)e^{2x}$",
      "$2x e^{2x}$",
      "$(1 - 2x)e^{2x}$",
      "$(1 + 2x)e^{2x}$"
    ],
    "answer": 4,
    "explanation": "Product rule: $(1 + 2x)e^{2x}$.",
    "number": 1
  },
  {
    "type_tag": "M2_CALC_QUOTIENT_RULE",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Differentiate $y = \\frac{\\ln x}{x^{2}}$.",
    "options": [
      "$\\frac{2\\ln x - 1}{x^{3}}$",
      "$\\frac{1 - \\ln x}{x^{4}}$",
      "$\\frac{2}{x^{2}}$",
      "$\\frac{1}{x^{3}}$",
      "$\\frac{1 - 2\\ln x}{x^{3}}$"
    ],
    "answer": 4,
    "explanation": "Quotient rule: $\\frac{1 - 2\\ln x}{x^{3}}$.",
    "number": 2
  },
  {
    "type_tag": "M2_CALC_IMPLICIT_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Find $\\frac{dy}{dx}$ for $2x^2 + y^2 = 100$.",
    "options": [
      "$\\frac{2x}{y}$",
      "$-\\frac{2x}{y}$",
      "$-2(2)x$",
      "$-\\frac{y}{2x}$",
      "$-\\frac{x}{y}$"
    ],
    "answer": 1,
    "explanation": "$2(2)x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{y}$.",
    "number": 3
  },
  {
    "type_tag": "M2_CALC_INTEG_PARTS",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int x e^{1x} \\, dx$.",
    "options": [
      "$\\frac{x^2 e^{1x}}{2} + C$",
      "$\\frac{e^{1x}}{1} + C$",
      "$\\frac{x e^{1x}}{1} - \\frac{e^{1x}}{1} + C$",
      "$(x - 1)e^{1x} + C$",
      "$\\frac{x e^{1x}}{1} + C$"
    ],
    "answer": 2,
    "explanation": "$\\frac{x e^{1x}}{1} - \\frac{e^{1x}}{1} + C$.",
    "number": 4
  },
  {
    "type_tag": "M2_CALC_SUBSTITUTION",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int 2x (x^2 + 1)^3 \\, dx$.",
    "options": [
      "$\\frac{(x^2 + 1)^3}{3} + C$",
      "$3(x^2 + 1)^2 + C$",
      "$\\frac{x^2(x^2 + 1)^4}{4} + C$",
      "$\\frac{(x^2 + 1)^4}{4} + C$",
      "$(x^2 + 1)^4 + C$"
    ],
    "answer": 3,
    "explanation": "$\\frac{(x^2 + 1)^4}{4} + C$.",
    "number": 5
  },
  {
    "type_tag": "M2_CALC_DIFF_EQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{dy}{dx} = 2y$ with $y(0) = 4$.",
    "options": [
      "$y = 4e^{-2x}$",
      "$y = 4\\ln(2x)$",
      "$y = 4e^{2x}$",
      "$y = e^{2x} + 3$",
      "$y = 2x + 4$"
    ],
    "answer": 2,
    "explanation": "$y = 4e^{2x}$.",
    "number": 6
  },
  {
    "type_tag": "M2_CALC_ARCSIN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arcsin(2x))$.",
    "options": [
      "$\\frac{2}{1 + 4x^2}$",
      "$\\frac{1}{\\sqrt{1 - 4x^2}}$",
      "$\\frac{2}{\\sqrt{1 - x^2}}$",
      "$\\frac{2}{\\sqrt{1 - 4x^2}}$",
      "$\\arccos(2x)$"
    ],
    "answer": 3,
    "explanation": "$\\frac{2}{\\sqrt{1 - (i+1)^2 x^2}}$.",
    "number": 7
  },
  {
    "type_tag": "M2_CALC_ARCTAN_DERIV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Find $\\frac{d}{dx}(\\arctan(2x))$.",
    "options": [
      "$\\frac{2}{\\sqrt{1 - 4x^2}}$",
      "$\\frac{1}{1 + 4x^2}$",
      "$\\frac{1}{2x}$",
      "$\\frac{2}{1 + 4x^2}$",
      "$\\frac{2}{1 - 4x^2}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{2}{1 + (i+1)^2 x^2}$.",
    "number": 8
  },
  {
    "type_tag": "M2_CALC_CHAIN_LOG",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Easy",
    "question": "Find $\\frac{d}{dx}(\\ln(2x + 2))$.",
    "options": [
      "$\\frac{2}{x + 2}$",
      "$2\\ln(2x + 2)$",
      "$\\frac{1}{2x + 2}$",
      "$\\frac{2}{2x + 2}$",
      "$\\frac{1}{2}$"
    ],
    "answer": 3,
    "explanation": "$\\frac{2}{2x + 2}$.",
    "number": 9
  },
  {
    "type_tag": "M2_CALC_SECOND_ORD_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Solve $\\frac{d^2y}{dx^2} + 1y = 0$.",
    "options": [
      "$y = A\\cos(1x)$",
      "$y = A\\cos(1x) + B\\sin(1x)$",
      "$y = (A + Bx)e^{1x}$",
      "$y = A\\sin(1x)$",
      "$y = A e^{1x} + B e^{-1x}$"
    ],
    "answer": 1,
    "explanation": "$y = A\\cos(1x) + B\\sin(1x)$.",
    "number": 10
  },
  {
    "type_tag": "M2_CALC_DEF_INT_EXP",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "Evaluate $\\int_0^1 e^{1x} \\, dx$.",
    "options": [
      "$\\frac{e^{1} + 1}{1}$",
      "$1(e^{1} - 1)$",
      "$e^{1} - 1$",
      "$\\frac{e^{1}}{1}$",
      "$\\frac{e^{1} - 1}{1}$"
    ],
    "answer": 4,
    "explanation": "$\\frac{e^{1} - 1}{1}$.",
    "number": 11
  },
  {
    "type_tag": "M2_CALC_VOL_REV",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Volume of solid formed rotating $y = 1x$ from $x=0$ to $x=2$ about x-axis.",
    "options": [
      "$\\frac{19\\pi}{3}$",
      "$10\\pi$",
      "$3\\pi$",
      "$\\frac{5\\pi}{3}$",
      "$\\frac{8\\pi}{3}$"
    ],
    "answer": 4,
    "explanation": "$V = \\frac{8\\pi}{3}$.",
    "number": 12
  },
  {
    "type_tag": "M2_CALC_PARAM_DIFF",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Parametric curve $x = t^2, y = 1t^3$. Find $\\frac{dy}{dx}$ at $t=1$.",
    "options": [
      "$0.5$",
      "$1.5$",
      "$3.0$",
      "$2.0$",
      "$1.0$"
    ],
    "answer": 1,
    "explanation": "$\\frac{dy}{dx} = 1.5$.",
    "number": 13
  },
  {
    "type_tag": "M2_CALC_MACLAURIN",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Medium",
    "question": "First two non-zero terms of Maclaurin series for $\\sin(2x)$.",
    "options": [
      "$2x + \\frac{(i+1)**3 x^3}{6}$",
      "$2x - \\frac{(i+1)**3 x^3}{6}$",
      "$2x - \\frac{2x^3}{6}$",
      "$2x - 8x^3$",
      "$1 - \\frac{(i+1)**2 x^2}{2}$"
    ],
    "answer": 1,
    "explanation": "$\\sin(2x) = 2x - \\frac{(i+1)**3 x^3}{6} + \\dots$",
    "number": 14
  },
  {
    "type_tag": "M2_CALC_INTEG_TRIG_SQ",
    "module": "Mathematics 2",
    "topic": "Advanced Calculus",
    "difficulty": "Hard",
    "question": "Evaluate $\\int_0^\\pi \\sin^2(1x) \\, dx$.",
    "options": [
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{3\\pi}{4}$"
    ],
    "answer": 1,
    "explanation": "Average of $\\sin^2(1x)$ over full periods is $1/2 \\implies \\frac{\\pi}{2}$.",
    "number": 15
  }
];

const QUESTIONS = [
  {
    "type_tag": "M1_ALG_SURDS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Rationalise the denominator of $\\frac{3}{3 - \\sqrt{3}}$ and simplify.",
    "options": [
      "$\\frac{3(3 + \\sqrt{3})}{6}$",
      "$\\frac{3 + \\sqrt{3}}{6}$",
      "$\\frac{3(3 - \\sqrt{3})}{6}$",
      "$\\frac{3\\sqrt{3}}{6}$",
      "$\\frac{3(3 + \\sqrt{3})}{12}$"
    ],
    "answer": 0,
    "explanation": "Multiply numerator and denominator by conjugate $(3 + \\sqrt{3})$.",
    "number": 1
  },
  {
    "type_tag": "M1_ALG_EXPONENTS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Easy",
    "question": "Evaluate the exact value of $(4)^{3/2} + 1$.",
    "options": [
      "$21$",
      "$15$",
      "$11$",
      "$7$",
      "$9$"
    ],
    "answer": 4,
    "explanation": "$(\\sqrt{4})^3 + 1 = 9$.",
    "number": 2
  },
  {
    "type_tag": "M1_ALG_DISCRIM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $c$ such that $x^2 + 4x + c = 0$ has exactly one repeated real root.",
    "options": [
      "$c = 8$",
      "$c = 6$",
      "$c = 4$",
      "$c = 12$",
      "$c = 10$"
    ],
    "answer": 2,
    "explanation": "$\\Delta = (4)^2 - 4c = 0 \\implies c = 4$.",
    "number": 3
  },
  {
    "type_tag": "M1_ALG_COMP_SQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find the minimum turning point of $y = x^2 - 4x + 6$.",
    "options": [
      "$(2, 6)$",
      "$(-2, 2)$",
      "$(2, -4)$",
      "$(2, 2)$",
      "$(-2, -4)$"
    ],
    "answer": 3,
    "explanation": "$y = (x - 2)^2 + 2$. Minimum point is $(2, 2)$.",
    "number": 4
  },
  {
    "type_tag": "M1_ALG_INEQUAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve the quadratic inequality $(x - 1)(x - 5) < 0$.",
    "options": [
      "$x < 1 \\text{ or } x > 5$",
      "$1 < x < 5$",
      "$3 < x < 7$",
      "$2 < x < 6$",
      "$-5 < x < -1$"
    ],
    "answer": 1,
    "explanation": "Parabola is below x-axis strictly between roots: $1 < x < 5$.",
    "number": 5
  },
  {
    "type_tag": "M1_ALG_SIMULT",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find positive $x$-intercept of line $y = 3x$ and curve $y = x^2 - 3x$.",
    "options": [
      "$x = 4$",
      "$x = 6$",
      "$x = 10$",
      "$x = 8$",
      "$x = 3$"
    ],
    "answer": 1,
    "explanation": "$x^2 - 6x = 0 \\implies x = 6$.",
    "number": 6
  },
  {
    "type_tag": "M1_ALG_REMAINDER",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find remainder when $P(x) = 2x^2 - 3x + 6$ is divided by $(x - 1)$.",
    "options": [
      "$10$",
      "$5$",
      "$20$",
      "$2$",
      "$15$"
    ],
    "answer": 1,
    "explanation": "$P(1) = 2(1)^2 - 3(1) + 6 = 5$.",
    "number": 7
  },
  {
    "type_tag": "M1_ALG_FACTOR",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "If $(x - 2)$ is a factor of $x^3 - 4x^2 + kx - 4$, find $k$.",
    "options": [
      "$k = 10$",
      "$k = 6$",
      "$k = 4$",
      "$k = 3$",
      "$k = 8$"
    ],
    "answer": 1,
    "explanation": "$P(2) = 0 \\implies k = 6$.",
    "number": 8
  },
  {
    "type_tag": "M1_ALG_BINOMIAL",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Hard",
    "question": "Find coefficient of $x^2$ in the expansion of $(1 + 1x)^5$.",
    "options": [
      "$10$",
      "$30$",
      "$25$",
      "$15$",
      "$20$"
    ],
    "answer": 0,
    "explanation": "$\\binom{5}{2}(1)^3(1)^2 = 10$.",
    "number": 9
  },
  {
    "type_tag": "M1_ALG_TRANSFORM",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "State the equation after translating $y = f(x)$ by vector $\\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix}$.",
    "options": [
      "$y = 2f(x) - 4$",
      "$y = f(x - 2) + 4$",
      "$y = f(x + 2) + 4$",
      "$y = f(x - 2) - 4$",
      "$y = f(x + 2) - 4$"
    ],
    "answer": 3,
    "explanation": "$y = f(x - 2) - 4$.",
    "number": 10
  },
  {
    "type_tag": "M1_ALG_INVERSE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Find $f^{-1}(x)$ for $f(x) = 3x - 5$.",
    "options": [
      "$3x + 5$",
      "$\\frac{1}{3x - 5}$",
      "$\\frac{3}{x + 5}$",
      "$\\frac{x + 5}{3}$",
      "$\\frac{x - 5}{3}$"
    ],
    "answer": 3,
    "explanation": "$f^{-1}(x) = \\frac{x + 5}{3}$.",
    "number": 11
  },
  {
    "type_tag": "M1_ALG_COMPOSITE",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "If $f(x) = 3x + 2$ and $g(x) = x^2$, evaluate $f(g(2))$.",
    "options": [
      "$17$",
      "$14$",
      "$10$",
      "$27$",
      "$22$"
    ],
    "answer": 1,
    "explanation": "$f(g(2)) = 3(4) + 2 = 14$.",
    "number": 12
  },
  {
    "type_tag": "M1_ALG_EXP_EQ",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Solve for $x$: $3^{x + 1} = 9$.",
    "options": [
      "$x = 3$",
      "$x = 2$",
      "$x = 1$",
      "$x = 5$",
      "$x = 4$"
    ],
    "answer": 2,
    "explanation": "$3^{x+1} = 3^{2} \\implies x = 1$.",
    "number": 13
  },
  {
    "type_tag": "M1_ALG_LOG_LAWS",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Evaluate $\\log_3(3) + \\log_3(27) - \\log_3(3)$.",
    "options": [
      "$3$",
      "$6$",
      "$4$",
      "$5$",
      "$7$"
    ],
    "answer": 0,
    "explanation": "$1 + 3 - 1 = 3$.",
    "number": 14
  },
  {
    "type_tag": "M1_ALG_ALG_FRAC",
    "module": "Mathematics 1",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question": "Simplify $\\frac{x^2 - 4}{x + 2}$.",
    "options": [
      "$x - 3$",
      "$x - 4$",
      "$x + 2$",
      "$x + 3$",
      "$x - 2$"
    ],
    "answer": 4,
    "explanation": "$\\frac{(x - 2)(x + 2)}{x + 2} = x - 2$.",
    "number": 15
  }
];

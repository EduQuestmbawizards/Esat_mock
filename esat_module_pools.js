/* EduQuest ESAT - Dynamic Module Pools (Syllabus Aligned & High Diversity) */
const ESAT_MODULE_POOLS = {
  "full_mock_1": {
    "Mathematics 1": [
      {
        "module": "Mathematics 1",
        "topic": "Surds & Indices",
        "difficulty": "Medium",
        "question": "Rationalise the denominator and simplify fully: $\\frac{3}{\\sqrt{3} - \\sqrt{2}}$.",
        "options": [
          "$3(\\sqrt{3} + \\sqrt{2})$",
          "$3(\\sqrt{3} - \\sqrt{2})$",
          "$\\frac{3(\\sqrt{3} + \\sqrt{2})}{5}$",
          "$3\\sqrt{2}$",
          "$3\\sqrt{3}$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by the conjugate $(\\sqrt{3} + \\sqrt{2})$. The denominator simplifies to $(3) - (2) = 1$. The result is $3(\\sqrt{3} + \\sqrt{2})$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "Find the gradient of the straight line perpendicular to the line $y = 2x + 1$.",
        "options": [
          "$-\\frac{1}{2}$",
          "$2$",
          "$-2$",
          "$\\frac{1}{2}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "For perpendicular lines, $m_1 m_2 = -1$. With $m_1 = 2$, the perpendicular gradient is $m_2 = -\\frac{1}{2}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Easy",
        "question": "Given the curve $y = 3x^{4} - 6x$, calculate the value of the derivative $\\frac{dy}{dx}$ at $x = 1$.",
        "options": [
          "$6$",
          "$12$",
          "$3$",
          "$9$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Differentiating: $\\frac{dy}{dx} = 12x^{3} - 6$. At $x = 1$, this equals $12(1^{3}) - 6 = 6$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "For what range of real values of $k$ does the equation $x^2 - 2kx + 9 = 0$ have two distinct real roots?",
        "options": [
          "$k < -3$ or $k > 3$",
          "$-3 < k < 3$",
          "$k = 3$",
          "$k \\ge 0$",
          "$k > 3$ only"
        ],
        "answer": 0,
        "explanation": "Distinct real roots require discriminant $\\Delta > 0$: $(-2k)^2 - 4(1)(9) > 0 \\implies 4k^2 - 36 > 0 \\implies k^2 > 9 \\implies k < -3$ or $k > 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Easy",
        "question": "A circle is given by $(x - 1)^2 + (y + 1)^2 = 9$. Identify its center and radius.",
        "options": [
          "Center $(1, -1)$, radius $r = 3$",
          "Center $(-1, 1)$, radius $r = 3$",
          "Center $(1, -1)$, radius $r = 9$",
          "Center $(0, 0)$, radius $r = 3$",
          "Center $(1, 1)$, radius $r = 3$"
        ],
        "answer": 0,
        "explanation": "Standard circle form $(x - h)^2 + (y - k)^2 = r^2$ gives center $(h, k) = (1, -1)$ and radius $r = \\sqrt{9} = 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "In how many distinct ways can a committee of $3$ individuals be selected from a pool of $7$ candidates?",
        "options": [
          "$35$",
          "$105$",
          "$45$",
          "$30$",
          "$21$"
        ],
        "answer": 0,
        "explanation": "Selection without regard to order is evaluated by combinations: $\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Solve for $x$ in the equation $\\log_{2}(x + 2) = 4$.",
        "options": [
          "$14$",
          "$16$",
          "$12$",
          "$8$",
          "$16$"
        ],
        "answer": 0,
        "explanation": "Rewriting in exponential form: $x + 2 = 2^{4} = 16 \\implies x = 16 - 2 = 14$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "Using trigonometric identities, simplify $2\\sin(15^\\circ)\\cos(15^\\circ)$.",
        "options": [
          "$\\sin(30^\\circ)$",
          "$\\cos(30^\\circ)$",
          "$\\tan(30^\\circ)$",
          "$\\frac{1}{2}\\sin(30^\\circ)$",
          "$2\\sin(15^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the double-angle identity $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$, substituting $\\theta = 15^\\circ$ gives $\\sin(30^\\circ)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Determine the exact area bounded by the curve $y = 3x^2 + 1$, the $x$-axis, and vertical lines $x = 0$ and $x = 2$.",
        "options": [
          "$10$",
          "$8$",
          "$11$",
          "$12$",
          "$8$"
        ],
        "answer": 0,
        "explanation": "The area is $\\int_0^{2} (3x^2 + 1)\\,dx = [x^3 + 1x]_0^{2} = (2^3 + 1(2)) - 0 = 10$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Easy",
        "question": "If functions are defined as $f(x) = 2x$ and $g(x) = x^2 + 1$, evaluate $f(g(2))$.",
        "options": [
          "$10$",
          "$8$",
          "$12$",
          "$17$",
          "$5$"
        ],
        "answer": 0,
        "explanation": "Evaluating inside first: $g(2) = 2^2 + 1 = 5$. Then $f(5) = 2 \\times 5 = 10$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Medium",
        "question": "In $\\triangle ABC$, the side $a = 10\\,\\text{cm}$ lies opposite angle $A = 30^\\circ$. What is the circumcircle diameter $2R$?",
        "options": [
          "$\\frac{10}{\\sin(30^\\circ)}$",
          "$10\\sin(30^\\circ)$",
          "$\\frac{10}{2\\sin(30^\\circ)}$",
          "$20\\sin(30^\\circ)$",
          "$10\\cos(30^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the extended Sine Rule, $\\frac{a}{\\sin A} = 2R$, so circumdiameter $2R = \\frac{10}{\\sin(30^\\circ)}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "For random events $A$ and $B$, $P(A) = 0.4$ and $P(A \\cap B) = 0.2$. Calculate the conditional probability $P(B | A)$.",
        "options": [
          "$0.50$",
          "$0.080$",
          "$0.20$",
          "$0.60$",
          "$0.50$"
        ],
        "answer": 0,
        "explanation": "By Bayes/conditional rule, $P(B | A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.2}{0.4} = 0.50$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Find the coefficient of $x^2$ in the algebraic binomial expansion of $(1 + x)^{4}$.",
        "options": [
          "$6$",
          "$4$",
          "$4$",
          "$12$",
          "$10$"
        ],
        "answer": 0,
        "explanation": "The general expansion term is $\\binom{n}{r} x^r$. For $x^2$, $r = 2$, so the coefficient is $\\binom{4}{2} = 6$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry",
        "difficulty": "Easy",
        "question": "What is the total sum of all interior angles of a convex polygon having $6$ sides?",
        "options": [
          "$720^\\circ$",
          "$900^\\circ$",
          "$540^\\circ$",
          "$1080^\\circ$",
          "$360^\\circ$"
        ],
        "answer": 0,
        "explanation": "The interior angle sum formula is $(n - 2) \\times 180^\\circ = (6 - 2) \\times 180^\\circ = 720^\\circ$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Locate the $x$-coordinate of the stationary point on the parabola $y = 3x^2 - 18x + 7$.",
        "options": [
          "$3$",
          "$3$",
          "$-3$",
          "$0$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "Setting the derivative to zero: $\\frac{dy}{dx} = 6x - 18 = 0 \\implies x = 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "In a geometric sequence with first term $a = 3$ and common ratio $r = 2$, determine the $4^{\\text{th}}$ term.",
        "options": [
          "$24$",
          "$48$",
          "$21$",
          "$27$",
          "$24$"
        ],
        "answer": 0,
        "explanation": "The $n^{\\text{th}}$ term is $T_n = a r^{n-1}$. For $n = 4$: $T_4 = 3 \\times 2^3 = 24$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "A circular sector of radius $r = 6\\,\\text{cm}$ has central angle $\\theta = \\frac{\\pi}{3}\\,\\text{rad}$. Compute its area.",
        "options": [
          "$6.00\\pi\\,\\text{cm}^2$",
          "$6\\pi\\,\\text{cm}^2$",
          "$12.00\\pi\\,\\text{cm}^2$",
          "$2\\pi\\,\\text{cm}^2$",
          "$\\pi\\,\\text{cm}^2$"
        ],
        "answer": 0,
        "explanation": "Sector area formula: $A = \\frac{1}{2}r^2 \\theta = \\frac{1}{2}(6)^2 \\left(\\frac{\\pi}{3}\\right) = 6.00\\pi\\,\\text{cm}^2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Statistics",
        "difficulty": "Medium",
        "question": "A sample has mean $\\mu = 20$ and standard deviation $\\sigma = 4$. What is the standard deviation after transformation $Y = 3X + 5$?",
        "options": [
          "$12$",
          "$17$",
          "$36$",
          "$4$",
          "$65$"
        ],
        "answer": 0,
        "explanation": "Adding a constant does not alter spread. Multiplying by $a$ scales standard deviation by $|a|$: $\\sigma_Y = 3\\sigma_X = 3(4) = 12$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "When the polynomial $P(x) = 2x^3 - 3x^2 + 5$ is divided by $(x - 1)$, what is the numerical remainder?",
        "options": [
          "$4$",
          "$6$",
          "$1$",
          "$0$",
          "$-4$"
        ],
        "answer": 0,
        "explanation": "By the Remainder Theorem, the remainder upon division by $(x - c)$ equals $P(c) = 2(1)^3 - 3(1)^2 + 5 = 4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "The graph of $y = f(x)$ is translated horizontally by vector $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$. State the new equation.",
        "options": [
          "$y = f(x - 2)$",
          "$y = f(x + 2)$",
          "$y = f(x) + 2$",
          "$y = f(x) - 2$",
          "$y = 2f(x)$"
        ],
        "answer": 0,
        "explanation": "A translation by $+a$ along the $x$-axis maps $x \\mapsto x - a$, giving $y = f(x - 2)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Hard",
        "question": "Find the Cartesian equation of the tangent line to the parabola $y = x^2$ at the point with $x$-coordinate $x = 1$.",
        "options": [
          "$y = 2x -1$",
          "$y = -\\frac{1}{2}x + 1$",
          "$y = 4x$",
          "$y = x + 1$",
          "$y = 2x + 1$"
        ],
        "answer": 0,
        "explanation": "Gradient is $m = \\frac{dy}{dx} = 2x = 2$. At $x = 1, y = 1$. Using $y - y_1 = m(x - x_1)$ yields $y = 2x -1$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Hard",
        "question": "Decompose $\\frac{2x + 5}{(x + 1)(x + 2)}$ into partial fractions $\\frac{A}{x + 1} + \\frac{B}{x + 2}$. Find $(A, B)$.",
        "options": [
          "$(3, -1)$",
          "$(1, 1)$",
          "$(2, 3)$",
          "$(5, -3)$",
          "$(4, -2)$"
        ],
        "answer": 0,
        "explanation": "$2x + 5 = A(x + 2) + B(x + 1)$. At $x = -1 \\implies A = 3$. At $x = -2 \\implies B = -1$. Thus $(A, B) = (3, -1)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Vectors",
        "difficulty": "Easy",
        "question": "Compute the scalar dot product between $\\mathbf{u} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.",
        "options": [
          "$2$",
          "$7$",
          "$-2$",
          "$6$",
          "$-4$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{u} \\cdot \\mathbf{v} = (3)(2) + (4)(-1) = 6 - 4 = 2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Easy",
        "question": "If events $E_1$ and $E_2$ are statistically independent with $P(E_1) = 0.3$ and $P(E_2) = 0.5$, what is $P(E_1 \\cap E_2)$?",
        "options": [
          "$0.150$",
          "$0.80$",
          "$0.65$",
          "$0.3$",
          "$0.5$"
        ],
        "answer": 0,
        "explanation": "Independence implies $P(E_1 \\cap E_2) = P(E_1) \\times P(E_2) = 0.3 \\times 0.5 = 0.150$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "Find the sum of the first 10 terms of an arithmetic progression with first term $a = 5$ and common difference $d = 3$.",
        "options": [
          "$185$",
          "$165$",
          "$215$",
          "$32$",
          "$50$"
        ],
        "answer": 0,
        "explanation": "$S_n = \\frac{n}{2}[2a + (n-1)d] = 5[2(5) + 9(3)] = 185$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Hard",
        "question": "Solve $\\cos(x) = \\frac{1}{2}$ for all values in the principal interval $0 \\le x \\le 2\\pi$.",
        "options": [
          "$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          "$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$",
          "$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{4}, \\frac{7\\pi}{4}$",
          "$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$"
        ],
        "answer": 0,
        "explanation": "Cosine is positive in quadrants I and IV: $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Evaluate the second derivative $\\frac{d^2y}{dx^2}$ of $y = 2x^3 - 12x^2$ at $x = 2$.",
        "options": [
          "$0$",
          "$12$",
          "$-12$",
          "$24$",
          "$-24$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = 6x^2 - 24x$, so $\\frac{d^2y}{dx^2} = 12x - 24$. At $x = 2$: 12(2) - 24 = 0$."
      }
    ],
    "Mathematics 2": [
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Apply the product rule to differentiate $y = x^{2} e^{2x}$ with respect to $x$.",
        "options": [
          "$x^{1} e^{2x}(2 + 2x)$",
          "$2 x^{1} e^{2x}$",
          "$2x^{2} e^{2x}$",
          "$22 x e^{2x}$",
          "$x^{2} e^{2x}$"
        ],
        "answer": 0,
        "explanation": "By $(uv)' = u'v + uv'$: $u' = 2x^{1}, v' = 2e^{2x}$. Factoring gives $x^{1} e^{2x}(2 + 2x)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Calculate the vector cross product $\\mathbf{i} \\times \\mathbf{j}$ in a right-handed Cartesian coordinate system.",
        "options": [
          "$\\mathbf{k}$",
          "$-\\mathbf{k}$",
          "$\\mathbf{0}$",
          "$\\mathbf{i}$",
          "$\\mathbf{j}$"
        ],
        "answer": 0,
        "explanation": "By the right-hand rule definition of orthonormal unit basis vectors, $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Easy",
        "question": "Compute the determinant of the $2 \\times 2$ matrix $M = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$.",
        "options": [
          "$10$",
          "$14$",
          "$8$",
          "$12$",
          "$7$"
        ],
        "answer": 0,
        "explanation": "$\\det(M) = ad - bc = (3)(4) - (1)(2) = 10$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Using the substitution $u = x^2 + 2$, evaluate $\\int 2x(x^2 + 2)^3\\,dx$.",
        "options": [
          "$\\frac{1}{4}(x^2 + 2)^4 + C$",
          "$\\frac{1}{3}(x^2 + 2)^3 + C$",
          "$(x^2 + 2)^4 + C$",
          "$\\frac{1}{2}(x^2 + 2)^4 + C$",
          "$6x^2(x^2 + 2)^2 + C$"
        ],
        "answer": 0,
        "explanation": "$du = 2x\\,dx$. The integral transforms to $\\int u^3\\,du = \\frac{1}{4}u^4 + C = \\frac{1}{4}(x^2 + 2)^4 + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "For what value of $\\lambda$ are the 3D vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -1 \\\\ \\lambda \\end{pmatrix}$ perpendicular?",
        "options": [
          "$-1$",
          "$1$",
          "$5$",
          "$-5$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Perpendicular vectors have zero dot product: $2(1) + 3(-1) - \\lambda = 0 \\implies -1 - \\lambda = 0 \\implies \\lambda = -1$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Determine the modulus $|z|$ and principal argument $\\arg(z)$ of the complex number $z = 1 + i\\sqrt{3}$.",
        "options": [
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{6}$",
          "$|z| = 4, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 1, \\arg(z) = \\frac{\\pi}{4}$",
          "$|z| = \\sqrt{3}, \\arg(z) = \\frac{\\pi}{2}$"
        ],
        "answer": 0,
        "explanation": "$|z| = \\sqrt{1^2 + 3} = 2$. In quadrant I, $\\theta = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Differentiate $y = \\frac{\\sin(x)}{x}$ with respect to $x$ using the quotient rule.",
        "options": [
          "$\\frac{x\\cos(x) - \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x)}{1}$",
          "$\\frac{x\\sin(x) - \\cos(x)}{x^2}$",
          "$\\frac{x\\cos(x) + \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x) - x\\sin(x)}{x^2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{u'v - uv'}{v^2} = \\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "A plane has normal vector $\\mathbf{n} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 4 \\end{pmatrix}$ and passes through $(1, 0, 1)$. Find its equation.",
        "options": [
          "$2x - 3y + 4z = 6$",
          "$2x - 3y + 4z = 0$",
          "$2x - 3y + 4z = 2$",
          "$x + z = 6$",
          "$-2x + 3y - 4z = 1$"
        ],
        "answer": 0,
        "explanation": "$ax + by + cz = d \\implies 2(1) - 3(0) + 4(1) = 6$, so $2x - 3y + 4z = 6$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "By De Moivre's theorem, simplify the complex power $(\\cos\\theta + i\\sin\\theta)^{3}$.",
        "options": [
          "$\\cos(3\\theta) + i\\sin(3\\theta)$",
          "$\\cos^3\\theta + i\\sin^3\\theta$",
          "$3(\\cos\\theta + i\\sin\\theta)$",
          "$\\cos(\\theta / 3) + i\\sin(\\theta / 3)$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, which for $n = 3$ yields $\\cos(3\\theta) + i\\sin(3\\theta)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find $\\frac{dy}{dx}$ for the ellipse $x^2 + 4y^2 = 25$ using implicit differentiation.",
        "options": [
          "$-\\frac{x}{4y}$",
          "$-\\frac{4x}{y}$",
          "$\\frac{x}{4y}$",
          "$-\\frac{x}{2y}$",
          "$\\frac{25 - x}{4y}$"
        ],
        "answer": 0,
        "explanation": "$2x + 8y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Calculate the perpendicular distance from the origin $(0,0,0)$ to the plane $2x - y + 2z = 9$.",
        "options": [
          "$3$",
          "$9$",
          "$\\frac{9}{2}$",
          "$\\sqrt{9}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$D = \\frac{|0 - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{\\sqrt{9}} = 3$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the matrix inverse $A^{-1}$ for $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "options": [
          "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 6 - 5 = 1$. The inverse is $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Evaluate $\\int x e^x\\,dx$ using integration by parts.",
        "options": [
          "$x e^x - e^x + C$",
          "$x e^x + e^x + C$",
          "$\\frac{1}{2}x^2 e^x + C$",
          "$e^x - x e^x + C$",
          "$x^2 e^x + C$"
        ],
        "answer": 0,
        "explanation": "$u = x, dv = e^x dx \\implies uv - \\int v du = x e^x - \\int e^x dx = x e^x - e^x + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Two lines have direction vectors $\\mathbf{d}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{d}_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$. What is the acute angle between them?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$0^\\circ$"
        ],
        "answer": 0,
        "explanation": "$\\cos\\theta = \\frac{1(1) + 0 + 0}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "Evaluate the determinant of the upper-triangular matrix $M = \\begin{pmatrix} 2 & 4 & 5 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
        "options": [
          "$24$",
          "$9$",
          "$0$",
          "$48$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The determinant of any triangular matrix is the product of its diagonal elements: $2 \\times 3 \\times 4 = 24$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Solve the separable differential equation $\\frac{dy}{dx} = 2x y$ with initial condition $y(0) = 1$.",
        "options": [
          "$y = e^{x^2}$",
          "$y = e^{2x}$",
          "$y = x^2 + 1$",
          "$y = 2e^x - 1$",
          "$y = e^{x^2/2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{y}dy = 2x dx \\implies \\ln|y| = x^2 + C$. With $y(0) = 1 \\implies C = 0$, so $y = e^{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "At what point does the line $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ intersect the plane $x + y + z = 7$?",
        "options": [
          "$(3, 2, 2)$",
          "$(2, 2, 1)$",
          "$(1, 2, 0)$",
          "$(4, 2, 3)$",
          "$(0, 2, -1)$"
        ],
        "answer": 0,
        "explanation": "$(1 + t) + 2 + t = 7 \\implies 2t + 3 = 7 \\implies t = 2$. The point is $(1 + 2, 2, 0 + 2) = (3, 2, 2)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the roots of the quadratic equation $z^2 + 4z + 13 = 0$ in the complex domain.",
        "options": [
          "$-2 \\pm 3i$",
          "$2 \\pm 3i$",
          "$-4 \\pm 6i$",
          "$-2 \\pm 9i$",
          "$-2 \\pm i\\sqrt{13}$"
        ],
        "answer": 0,
        "explanation": "$z = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = -2 \\pm 3i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find the general solution to the homogeneous equation $\\frac{d^2y}{dx^2} - 9y = 0$.",
        "options": [
          "$y = A e^{3x} + B e^{-3x}$",
          "$y = A\\cos(3x) + B\\sin(3x)$",
          "$y = (A + Bx)e^{3x}$",
          "$y = A e^{9x}$",
          "$y = A\\cosh(9x)$"
        ],
        "answer": 0,
        "explanation": "Characteristic equation $m^2 - 9 = 0 \\implies m = \\pm 3$, giving $y = A e^{3x} + B e^{-3x}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Which vector operation yields the common perpendicular direction to two skew lines with direction vectors $\\mathbf{d}_1$ and $\\mathbf{d}_2$?",
        "options": [
          "$\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "$\\mathbf{d}_1 \\cdot \\mathbf{d}_2$",
          "$\\mathbf{d}_1 + \\mathbf{d}_2$",
          "$\\frac{\\mathbf{d}_1}{|\\mathbf{d}_2|}$",
          "$\\mathbf{d}_1 - \\mathbf{d}_2$"
        ],
        "answer": 0,
        "explanation": "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ produces a vector mutually perpendicular to both direction vectors."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Express the complex quotient $\\frac{5}{2 + i}$ in standard Cartesian form $x + iy$.",
        "options": [
          "$2 - i$",
          "$2 + i$",
          "$1 - 2i$",
          "$\\frac{10 - 5i}{3}$",
          "$5 - 2.5i$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by conjugate $(2 - i)$: $\\frac{5(2 - i)}{4 + 1} = 2 - i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Easy",
        "question": "Differentiate $y = \\cos(4x^3)$ with respect to $x$.",
        "options": [
          "$-12x^2 \\sin(4x^3)$",
          "$12x^2 \\sin(4x^3)$",
          "$-4\\sin(4x^3)$",
          "$-12x \\cos(4x^3)$",
          "$\\sin(12x^2)$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = -\\sin(4x^3) \\cdot \\frac{d}{dx}(4x^3) = -12x^2 \\sin(4x^3)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Easy",
        "question": "Determine the exact magnitude of the 3D position vector $\\mathbf{r} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 6 \\end{pmatrix}$.",
        "options": [
          "$\\sqrt{49}$",
          "$11$",
          "$\\sqrt{11}$",
          "$36$",
          "$\\sqrt{32}$"
        ],
        "answer": 0,
        "explanation": "$|\\mathbf{r}| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{49}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "What geometric transformation is represented by the matrix $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ in $\\mathbb{R}^2$?",
        "options": [
          "Counter-clockwise rotation by $90^\\circ$ about the origin",
          "Clockwise rotation by $90^\\circ$ about the origin",
          "Reflection across the line $y = x$",
          "Reflection across the line $y = -x$",
          "Uniform scale factor of $-1$"
        ],
        "answer": 0,
        "explanation": "The standard rotation matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ with $\\theta = 90^\\circ$ matches $R$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "What are the first three non-zero terms of the Maclaurin expansion for $\\sin(x)$?",
        "options": [
          "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$1 - \\frac{x^2}{2} + \\frac{x^4}{24}$",
          "$x + \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$x - x^3 + x^5$",
          "$1 - x + \\frac{x^2}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + \\frac{x^5}{120}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Find a unit normal vector to the plane $3x + 4z = 10$.",
        "options": [
          "$\\begin{pmatrix} 3/5 \\\\ 0 \\\\ 4/5 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3/7 \\\\ 0 \\\\ 4/7 \\end{pmatrix}$",
          "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
          "$\\begin{pmatrix} 4/5 \\\\ 0 \\\\ -3/5 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{n} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$, magnitude $\\sqrt{3^2 + 4^2} = 5$. The unit normal is $\\frac{1}{5}\\mathbf{n}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "What is the algebraic sum of all $n$ complex $n^{\\text{th}}$ roots of unity for any integer $n \\ge 2$?",
        "options": [
          "$0$",
          "$1$",
          "$n$",
          "$-1$",
          "$n\\pi$"
        ],
        "answer": 0,
        "explanation": "The roots satisfy $z^n - 1 = 0$. By Vieta's formulas, the sum of roots is the coefficient of $z^{n-1}$, which is $0$."
      }
    ],
    "Physics": [
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A car starts with velocity $u = 0\\,\\text{m s}^{-1}$ and accelerates uniformly at $a = 2\\,\\text{m s}^{-2}$ for $t = 4\\,\\text{s}$. Find displacement $s$.",
        "options": [
          "$16\\,\\text{m}$",
          "$26\\,\\text{m}$",
          "$11\\,\\text{m}$",
          "$8\\,\\text{m}$",
          "$4\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$s = ut + \\frac{1}{2}at^2 = (0)(4) + 0.5(2)(4^2) = 16\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "Two identical resistors of $R = 10\\,\\Omega$ are wired in parallel across a 12\\,\\text{V}$ ideal battery. What total current is drawn?",
        "options": [
          "$2.40\\,\\text{A}$",
          "$1.20\\,\\text{A}$",
          "$4.80\\,\\text{A}$",
          "$1.20\\,\\text{A}$",
          "$120\\,\\text{A}$"
        ],
        "answer": 0,
        "explanation": "$R_{eq} = \\frac{10}{2} = 5\\,\\Omega$. $I = \\frac{V}{R_{eq}} = \\frac{12}{5} = 2.40\\,\\text{A}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "An ideal gas at temperature $T_1 = 300\\,\\text{K}$ and pressure $P_1$ in a rigid sealed container has its temperature raised to $600\\,\\text{K}$. What is the new pressure $P_2$?",
        "options": [
          "$2P_1$",
          "$\\frac{1}{2}P_1$",
          "$4P_1$",
          "$P_1$",
          "$\\sqrt{2}P_1$"
        ],
        "answer": 0,
        "explanation": "At constant volume, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\frac{600}{300} = 2P_1$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A pulling force of 50\\,\\text{N}$ acts on a mass of 5\\,\\text{kg}$ against friction of 10\\,\\text{N}$. Calculate its acceleration.",
        "options": [
          "$8.00\\,\\text{m s}^{-2}$",
          "$10.00\\,\\text{m s}^{-2}$",
          "$12.00\\,\\text{m s}^{-2}$",
          "$2.00\\,\\text{m s}^{-2}$",
          "$250\\,\\text{m s}^{-2}$"
        ],
        "answer": 0,
        "explanation": "$F_{net} = 50 - 10 = 40\\,\\text{N}$. $a = \\frac{F_{net}}{m} = \\frac{40}{5} = 8.00\\,\\text{m s}^{-2}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Easy",
        "question": "A sound wave propagates at $340\\,\\text{m s}^{-1}$ with frequency $f = 200\\,\\text{Hz}$. What is its wavelength $\\lambda$?",
        "options": [
          "$1.70\\,\\text{m}$",
          "$68000\\,\\text{m}$",
          "$0.59\\,\\text{m}$",
          "$3.40\\,\\text{m}$",
          "$0.85\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$\\lambda = \\frac{v}{f} = \\frac{340}{200} = 1.70\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "A satellite orbits Earth at radius $r$ with speed $v$. If it moves to an orbit of radius $4r$, what is its new orbital speed?",
        "options": [
          "$\\frac{1}{2}v$",
          "$\\frac{1}{4}v$",
          "$2v$",
          "$4v$",
          "$\\frac{1}{\\sqrt{2}}v$"
        ],
        "answer": 0,
        "explanation": "$v = \\sqrt{\\frac{GM}{r}}$. At radius $4r$, $v' = \\sqrt{\\frac{GM}{4r}} = \\frac{1}{2}v$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A cart of mass 2\\,\\text{kg}$ moving at 6\\,\\text{m s}^{-1}$ collides with and sticks to a stationary cart of mass 4\\,\\text{kg}$. Find their final speed.",
        "options": [
          "$2.00\\,\\text{m s}^{-1}$",
          "$6\\,\\text{m s}^{-1}$",
          "$4.00\\,\\text{m s}^{-1}$",
          "$3.00\\,\\text{m s}^{-1}$",
          "$0\\,\\text{m s}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{2 \\times 6}{6} = 2.00\\,\\text{m s}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "In a Young's double-slit experiment, fringe separation is $w$. If slit separation $s$ is doubled and screen distance $D$ is halved, what is the new fringe width?",
        "options": [
          "$\\frac{1}{4}w$",
          "$\\frac{1}{2}w$",
          "$w$",
          "$2w$",
          "$4w$"
        ],
        "answer": 0,
        "explanation": "$w = \\frac{\\lambda D}{s}$. New width $w' = \\frac{\\lambda (D/2)}{2s} = \\frac{1}{4}w$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "Two point charges experience electrostatic force $F$ at distance $d$. What is the force when separation is reduced to $\\frac{d}{3}$?",
        "options": [
          "$9F$",
          "$3F$",
          "$\\frac{1}{3}F$",
          "$\\frac{1}{9}F$",
          "$6F$"
        ],
        "answer": 0,
        "explanation": "$F \\propto \\frac{1}{r^2}$. Dividing distance by 3 multiplies force by $3^2 = 9$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "Calculate the gravitational potential energy gained when an object of mass 2\\,\\text{kg}$ is lifted vertically by 10\\,\\text{m}$ ($g = 9.8\\,\\text{m s}^{-2}$).",
        "options": [
          "$196.0\\,\\text{J}$",
          "$98.0\\,\\text{J}$",
          "$392.0\\,\\text{J}$",
          "$20\\,\\text{J}$",
          "$2.0\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta E_p = mgh = (2)(9.8)(10) = 196.0\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A battery with $\\text{EMF} = 12\\,\\text{V}$ and internal resistance $r = 1\\,\\Omega$ is connected to load $R = 5\\,\\Omega$. Find the terminal potential difference.",
        "options": [
          "$10.00\\,\\text{V}$",
          "$12\\,\\text{V}$",
          "$2.00\\,\\text{V}$",
          "$2.00\\,\\text{V}$",
          "$5.00\\,\\text{V}$"
        ],
        "answer": 0,
        "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{12}{6}$. Terminal $V = IR = 10.00\\,\\text{V}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "How much heat is required to warm 2\\,\\text{kg}$ of liquid water ($c = 4200\\,\\text{J kg}^{-1}\\,\\text{K}^{-1}$) by $\\Delta T = 10\\,\\text{K}$?",
        "options": [
          "$84000\\,\\text{J}$",
          "$42000\\,\\text{J}$",
          "$168000\\,\\text{J}$",
          "$42000\\,\\text{J}$",
          "$20\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$Q = mc\\Delta T = (2)(4200)(10) = 84000\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A car of mass 1000\\,\\text{kg}$ negotiates a curve of radius 50\\,\\text{m}$ at speed 20\\,\\text{m s}^{-1}$. Compute the centripetal force required.",
        "options": [
          "$8000\\,\\text{N}$",
          "$16000\\,\\text{N}$",
          "$4000\\,\\text{N}$",
          "$20000\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "$F_c = \\frac{mv^2}{r} = \\frac{1000 \\times 20^2}{50} = 8000\\,\\text{N}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A light beam in air ($n_1 = 1.0$) enters glass ($n_2 = 1.50$) at angle of incidence $\\theta_1 = 30^\\circ$. What is the value of $\\sin(\\theta_2)$?",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$",
          "$\\frac{\\sqrt{3}}{3}$"
        ],
        "answer": 0,
        "explanation": "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies (1.0)\\sin(30^\\circ) = 1.50\\sin\\theta_2 \\implies 0.5 = 1.5\\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{1}{3}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "A charged particle enters a uniform magnetic field with velocity perpendicular to the field lines. What trajectory does it follow?",
        "options": [
          "A circle in the plane perpendicular to the magnetic field",
          "A straight line with uniform acceleration",
          "A parabolic path along the magnetic field",
          "A hyperbolic escape path",
          "A stationary oscillation"
        ],
        "answer": 0,
        "explanation": "Because the magnetic force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ is always normal to velocity, speed is constant and motion is uniform circular."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A spring of stiffness $k = 100\\,\\text{N m}^{-1}$ is extended by $\\Delta x = 0.1\\,\\text{m}$. What is the stored elastic potential energy?",
        "options": [
          "$0.500\\,\\text{J}$",
          "$10.00\\,\\text{J}$",
          "$1.000\\,\\text{J}$",
          "$5.000\\,\\text{J}$",
          "$0.125\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$E_e = \\frac{1}{2}k(\\Delta x)^2 = 0.5(100)(0.1^2) = 0.500\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Light of wavelength $\\lambda = 500\\,\\text{nm}$ illuminates a diffraction grating with $500\\,\\text{lines per mm}$. What is the highest observable order $m$?",
        "options": [
          "$4$",
          "$2$",
          "$5$",
          "$3$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "Slit spacing $d = \\frac{10^{-3}\\,\\text{m}}{500} = 2 \\times 10^{-6}\\,\\text{m}$. Max order is $m \\le \\frac{d}{\\lambda} = \\frac{2 \\times 10^{-6}}{500 \\times 10^{-9}} = 4$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "Two parallel metal plates separated by 0.02\\,\\text{m}$ have a potential difference of 100\\,\\text{V}$. Find the electric field strength $E$.",
        "options": [
          "$5000\\,\\text{V m}^{-1}$",
          "$2500\\,\\text{V m}^{-1}$",
          "$10000\\,\\text{V m}^{-1}$",
          "$2\\,\\text{V m}^{-1}$",
          "$0\\,\\text{V m}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$E = \\frac{V}{d} = \\frac{100}{0.02} = 5000\\,\\text{V m}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A uniform plank of length $4.0\\,\\text{m}$ and weight $200\\,\\text{N}$ is supported at its midpoint. What force applied at one end maintains equilibrium?",
        "options": [
          "$0\\,\\text{N}$",
          "$100\\,\\text{N}$",
          "$200\\,\\text{N}$",
          "$50\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "Because the pivot is at the centre of mass, the plank's weight exerts zero torque about the pivot, requiring zero force to maintain balance."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A wire of resistance $R$ is drawn out so that its length is doubled while volume is conserved. What is its new resistance?",
        "options": [
          "$4R$",
          "$2R$",
          "$R$",
          "$\\frac{1}{2}R$",
          "$\\frac{1}{4}R$"
        ],
        "answer": 0,
        "explanation": "Doubling length ($L \\to 2L$) halves cross-sectional area ($A \\to A/2$). Resistance $R' = \\rho \\frac{2L}{A/2} = 4R$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "If the absolute temperature of an ideal gas is quadrupled, what factor does the root-mean-square molecular speed $c_{\\text{rms}}$ increase by?",
        "options": [
          "Factor of 2",
          "Factor of 4",
          "Factor of 16",
          "Factor of 1.41",
          "Remains unchanged"
        ],
        "answer": 0,
        "explanation": "$c_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} \\propto \\sqrt{T}$. Quadrupling $T$ multiplies speed by $\\sqrt{4} = 2$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "At what launch angle $\\theta$ above horizontal does a projectile achieve maximum horizontal range on level ground?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$15^\\circ$"
        ],
        "answer": 0,
        "explanation": "Range $R = \\frac{u^2 \\sin(2\\theta)}{g}$ is maximized when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A stretched string of length $L$ vibrates in its fundamental harmonic mode with nodes at both fixed ends. What is the wavelength $\\lambda_1$?",
        "options": [
          "$2L$",
          "$L$",
          "$\\frac{L}{2}$",
          "$4L$",
          "$\\frac{2L}{3}$"
        ],
        "answer": 0,
        "explanation": "Fundamental mode consists of a single loop: $L = \\frac{\\lambda}{2} \\implies \\lambda = 2L$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "According to Faraday's Law, the induced electromotive force in a circuit is directly proportional to the:",
        "options": [
          "Time rate of change of magnetic flux linkage",
          "Total resistance of the circuit loop",
          "Steady current flowing in the coil",
          "Temperature of the magnet",
          "Square of the magnetic flux"
        ],
        "answer": 0,
        "explanation": "Faraday's Law states $\\mathcal{E} = -\\frac{d\\Phi}{dt}$, so induced EMF equals the rate of change of flux linkage."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A constant force of 20\\,\\text{N}$ acts on an object for a duration of $\\Delta t = 0.1\\,\\text{s}$. What impulse is imparted?",
        "options": [
          "$2.00\\,\\text{N s}$",
          "$4.00\\,\\text{N s}$",
          "$200.0\\,\\text{N s}$",
          "$1.00\\,\\text{N s}$",
          "$20.1\\,\\text{N s}$"
        ],
        "answer": 0,
        "explanation": "$\\text{Impulse} = F \\Delta t = (20)(0.1) = 2.00\\,\\text{N s}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Why does an observer perceive a higher pitch when an emergency siren approaches at constant velocity?",
        "options": [
          "The emitted wavefronts are compressed in the forward direction, reducing observed wavelength",
          "The velocity of sound in the air increases toward the observer",
          "The source emits sound with a physically higher intrinsic frequency",
          "The acoustic amplitude of the sound wave increases linearly",
          "Air molecules accelerate along with the vehicle"
        ],
        "answer": 0,
        "explanation": "Motion towards the listener crowds wavefronts, shortening perceived wavelength $\\lambda$. Since wave speed $v$ in air is constant, observed frequency $f = \\frac{v}{\\lambda}$ rises."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "What is the theoretical ratio of surface escape velocity $v_{\\text{esc}}$ to circular surface orbital speed $v_{\\text{orb}}$ for any spherical planet?",
        "options": [
          "$\\sqrt{2}$",
          "$2$",
          "$1$",
          "$\\frac{1}{\\sqrt{2}}$",
          "$4$"
        ],
        "answer": 0,
        "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$ and $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$, giving $\\frac{v_{\\text{esc}}}{v_{\\text{orb}}} = \\sqrt{2}$."
      }
    ],
    "Chemistry": [
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "What is the ground-state electron configuration of neutral Sodium (Z=11)?",
        "options": [
          "$1s^2 2s^2 2p^6 3s^1$",
          "$1s^2 2s^2 2p^6 3d^1$",
          "$1s^2 2s^2 2p^5 3s^2$",
          "$1s^2 2s^2 2p^6 4s^1$",
          "$1s^2 2s^2 2p^6 3s^2 3d^1$"
        ],
        "answer": 0,
        "explanation": "Electrons populate orbitals in order of ascending energy according to the Aufbau principle: $1s \\to 2s \\to 2p \\to 3s \\to 3p$. For Sodium (Z=11), this is $1s^2 2s^2 2p^6 3s^1$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "Given $\\sum \\Delta H_f^\\circ(\\text{products}) = -1200\\,\\text{kJ mol}^{-1}$ and $\\sum \\Delta H_f^\\circ(\\text{reactants}) = -400\\,\\text{kJ mol}^{-1}$, calculate the reaction enthalpy $\\Delta H_{\\text{rxn}}^\\circ$.",
        "options": [
          "$-800\\,\\text{kJ mol}^{-1}$",
          "$800\\,\\text{kJ mol}^{-1}$",
          "$-1600\\,\\text{kJ mol}^{-1}$",
          "$-1200\\,\\text{kJ mol}^{-1}$",
          "$-400\\,\\text{kJ mol}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta H^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants}) = (-1200) - (-400) = -800\\,\\text{kJ mol}^{-1}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "State the official IUPAC systematic name for the organic molecule with formula $\\text{CH_3CH_2OH}$.",
        "options": [
          "Ethanol",
          "Methanol",
          "Methanoic acid",
          "Butanone",
          "Ethyl methanoate"
        ],
        "answer": 0,
        "explanation": "The molecular structure $\\text{CH_3CH_2OH}$ matches the functional group of Ethanol."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Predict the molecular geometry and characteristic bond angle of Methane (CH_4) using VSEPR theory.",
        "options": [
          "Tetrahedral, 109.5°",
          "Linear, 180°",
          "Tetrahedral, 109.5°",
          "T-shaped, 90°",
          "Square planar, 90°"
        ],
        "answer": 0,
        "explanation": "Minimizing electron pair repulsions gives Methane (CH_4) its characteristic geometry: Tetrahedral, 109.5°."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "For the exothermic equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ ($\\Delta H < 0$), which combination shifts position towards products?",
        "options": [
          "Decreasing temperature and increasing total pressure",
          "Increasing temperature and decreasing total pressure",
          "Introducing an iron catalyst at constant volume",
          "Decreasing total pressure only",
          "Selectively withdrawing nitrogen gas"
        ],
        "answer": 0,
        "explanation": "Lower temperature favours the forward exothermic direction; higher pressure favours the side with fewer gas moles (2 moles vs 4 moles)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "Hydrolysis of 2-bromo-2-methylpropane in aqueous hydroxide proceeds predominantly via which pathway?",
        "options": [
          "$S_N1$ mechanism via a stable tertiary carbocation intermediate",
          "$S_N2$ mechanism via a single concerted transition state",
          "Electrophilic addition across a double bond",
          "Free-radical chain substitution",
          "Elimination forming exclusively 2-methylprop-1-ene"
        ],
        "answer": 0,
        "explanation": "Tertiary haloalkanes undergo $S_N1$ hydrolysis because steric hindrance impedes backside nucleophilic attack while the tertiary carbocation is stabilised by hyperconjugation."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why is the first ionisation energy of oxygen slightly lower than that of nitrogen?",
        "options": [
          "Spin-pair repulsion between the two paired electrons in one of oxygen's 2p orbitals",
          "Oxygen has greater shielding from core electrons",
          "Nitrogen's 2p electrons reside in a higher shell",
          "Oxygen has a larger atomic radius than nitrogen",
          "Oxygen possesses fewer protons than nitrogen"
        ],
        "answer": 0,
        "explanation": "Nitrogen has a half-filled $2p^3$ subshell. Oxygen's fourth 2p electron must pair up, and mutual spin-pair repulsion eases its removal."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "Calculate the pH of a hydrochloric acid solution with $[\\text{H}^+] = 0.01\\,\\text{mol dm}^{-3}$.",
        "options": [
          "$2.00$",
          "$12.00$",
          "$3.00$",
          "$1.00$",
          "$7.00$"
        ],
        "answer": 0,
        "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(0.01) = 2.00$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following molecules possesses a chiral carbon centre and exhibits optical isomerism?",
        "options": [
          "Butan-2-ol",
          "Propan-2-ol",
          "Ethanol",
          "Propane",
          "Methanol"
        ],
        "answer": 0,
        "explanation": "In butan-2-ol, carbon-2 is bonded to 4 distinct ligands: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{C}_2\\text{H}_5$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does water have an anomalously high boiling point compared to hydrogen sulfide?",
        "options": [
          "Strong intermolecular hydrogen bonding between electronegative oxygen and hydrogen",
          "Covalent O-H bonds inside water molecules are stronger than S-H bonds",
          "Hydrogen sulfide exhibits stronger London dispersion forces",
          "Water is non-polar while H2S is ionic",
          "Sulfur is more electronegative than oxygen"
        ],
        "answer": 0,
        "explanation": "Oxygen is small and strongly electronegative, creating extensive networks of intermolecular hydrogen bonds that require large thermal energy to disrupt."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "For a reaction with empirical rate equation $\\text{Rate} = k[A]^2 [B]$, what is the overall reaction order?",
        "options": [
          "Third order",
          "Second order",
          "First order",
          "Zero order",
          "Fourth order"
        ],
        "answer": 0,
        "explanation": "The overall order is the sum of exponents in the rate law: $2 + 1 = 3$ (third order)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "What is the major organic product when propene reacts with hydrogen bromide ($\\text{HBr}$)?",
        "options": [
          "2-bromopropane",
          "1-bromopropane",
          "1,2-dibromopropane",
          "Propane",
          "Bromopropene"
        ],
        "answer": 0,
        "explanation": "Markovnikov addition yields the more stable secondary carbocation intermediate, producing 2-bromopropane as the major product."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Determine the number of moles in 50\\,\\text{cm}^3$ of a 0.1\\,\\text{mol dm}^{-3}$ solution.",
        "options": [
          "$0.0050\\,\\text{mol}$",
          "$0.050\\,\\text{mol}$",
          "$0.00050\\,\\text{mol}$",
          "$5\\,\\text{mol}$",
          "$500.0\\,\\text{mol}$"
        ],
        "answer": 0,
        "explanation": "$n = C \\times V = 0.1 \\times \\frac{50}{1000} = 0.0050\\,\\text{mol}$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "How does the addition of a positive catalyst increase the rate of a chemical reaction?",
        "options": [
          "Provides an alternative mechanism with lower activation energy",
          "Increases the average kinetic energy of reactant molecules",
          "Increases the total enthalpy of the products",
          "Decreases the total volume of the reaction container",
          "Increases the frequency of collision of all particles"
        ],
        "answer": 0,
        "explanation": "A catalyst lowers the activation energy $E_a$, so a greater proportion of molecular collisions satisfy $E \\ge E_a$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "What functional group is produced when a secondary alcohol such as propan-2-ol is heated under reflux with acidified dichromate?",
        "options": [
          "Ketone",
          "Carboxylic acid",
          "Aldehyde",
          "Ester",
          "Alkene"
        ],
        "answer": 0,
        "explanation": "Oxidation of a secondary alcohol produces a ketone; it cannot undergo further oxidation under mild conditions."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does solid sodium chloride not conduct electricity, while molten sodium chloride conducts readily?",
        "options": [
          "Ions are held in fixed lattice positions in the solid but are free to move in the molten liquid",
          "Electrons become delocalised only during the phase transition",
          "Ionic bonds convert to covalent bonds upon melting",
          "Sodium atoms lose their charge in the liquid phase",
          "Solid NaCl contains neutral atoms rather than ions"
        ],
        "answer": 0,
        "explanation": "Electrical conduction requires mobile charge carriers. In molten NaCl, the giant ionic lattice breaks down, freeing $\\text{Na}^+$ and $\\text{Cl}^-$ ions to migrate."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "In an Arrhenius plot of $\\ln k$ against $\\frac{1}{T}$, what physical quantity does the gradient represent?",
        "options": [
          "$-\\frac{E_a}{R}$",
          "$\\frac{E_a}{R}$",
          "$-E_a$",
          "$\\ln A$",
          "$-RT$"
        ],
        "answer": 0,
        "explanation": "Taking logs of $k = A e^{-E_a/RT}$ gives $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Gradient is $-\\frac{E_a}{R}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "In TLC, a dye spot travels 3\\,\\text{cm}$ while the solvent front advances $10.0\\,\\text{cm}$. What is the $R_f$ value?",
        "options": [
          "$0.30$",
          "$3.0$",
          "$0.70$",
          "$3.33$",
          "$0.15$"
        ],
        "answer": 0,
        "explanation": "$R_f = \\frac{\\text{distance travelled by spot}}{\\text{distance travelled by solvent}} = \\frac{3}{10.0} = 0.30$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does magnesium have a significantly higher melting point than sodium in Period 3?",
        "options": [
          "Magnesium ions ($Mg^{2+}$) have higher charge and release 2 delocalised electrons per atom into the sea",
          "Magnesium forms giant covalent lattices whereas sodium is simple molecular",
          "Sodium has a higher atomic mass than magnesium",
          "Magnesium has more electron shells than sodium",
          "Sodium forms weaker covalent bonds"
        ],
        "answer": 0,
        "explanation": "$\\text{Mg}^{2+}$ has higher charge density and twice as many delocalised electrons as $\\text{Na}^+$, resulting in stronger electrostatic attraction."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "Which mixture forms an acidic buffer capable of resisting pH changes on addition of small amounts of acid or alkali?",
        "options": [
          "Ethanoic acid and sodium ethanoate",
          "Hydrochloric acid and sodium hydroxide in equal moles",
          "Hydrochloric acid and sodium chloride",
          "Pure distilled water",
          "Concentrated ammonia and sodium chloride"
        ],
        "answer": 0,
        "explanation": "An acidic buffer requires a weak acid (e.g. $\\text{CH}_3\\text{COOH}$) and its conjugate base salt (e.g. $\\text{CH}_3\\text{COONa}$)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which reactants combine in the presence of an acid catalyst to produce ethyl ethanoate?",
        "options": [
          "Ethanoic acid and ethanol",
          "Methanoic acid and propanol",
          "Ethanol and ethanal",
          "Ethylamine and ethanoic acid",
          "Ethene and steam"
        ],
        "answer": 0,
        "explanation": "$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Chlorine comprises $^{35}\\text{Cl}$ (75%) and $^{37}\\text{Cl}$ (25%). Calculate its relative atomic mass $A_r$.",
        "options": [
          "$35.50$",
          "$36.00$",
          "$36.00$",
          "$35.00$",
          "$35.00$"
        ],
        "answer": 0,
        "explanation": "$A_r = \\frac{35(75) + 37(25)}{100} = 35.50$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "What is the equilibrium constant $K_c$ expression for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$?",
        "options": [
          "$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$",
          "$K_c = \\frac{[\\text{SO}_2]^2 [\\text{O}_2]}{[\\text{SO}_3]^2}$",
          "$K_c = \\frac{2[\\text{SO}_3]}{2[\\text{SO}_2] + [\\text{O}_2]}$",
          "$K_c = [\\text{SO}_3]^2 - [\\text{SO}_2]^2 [\\text{O}_2]$",
          "$K_c = \\frac{[\\text{SO}_3]}{[\\text{SO}_2][\\text{O}_2]}$"
        ],
        "answer": 0,
        "explanation": "Products over reactants, raised to stoichiometric powers: $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following represents a termination step in the free-radical chlorination of methane?",
        "options": [
          "$\\text{Cl}^\\bullet + \\text{Cl}^\\bullet \\to \\text{Cl}_2$",
          "$\\text{Cl}_2 \\to 2\\text{Cl}^\\bullet$",
          "$\\text{CH}_4 + \\text{Cl}^\\bullet \\to \\text{CH}_3^\\bullet + \\text{HCl}$",
          "$\\text{CH}_3^\\bullet + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$",
          "$\\text{CH}_4 \\to \\text{CH}_3^\\bullet + \\text{H}^\\bullet$"
        ],
        "answer": 0,
        "explanation": "Termination involves two radical species combining to form a stable covalent bond, removing radicals from the system."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Why can graphite conduct electricity while diamond cannot?",
        "options": [
          "Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along layers",
          "Graphite consists of ionic bonds between layers",
          "Diamond has a smaller bandgap than graphite",
          "Graphite contains mobile carbon ions",
          "Diamond has weak intermolecular forces"
        ],
        "answer": 0,
        "explanation": "In graphite, each carbon is $sp^2$ hybridized with 3 covalent bonds; the fourth valence electron is delocalised across planar hexagonal sheets."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "What is the oxidation number of manganese in the permanganate ion $\\text{MnO}_4^-$?",
        "options": [
          "$+7$",
          "$+4$",
          "$+2$",
          "$+6$",
          "$+5$"
        ],
        "answer": 0,
        "explanation": "$x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "An intense, sharp absorption band at $\\sim 1715\\,\\text{cm}^{-1}$ in an infrared spectrum indicates which functional group?",
        "options": [
          "Carbonyl (C=O)",
          "Alcohol (O-H broad stretch)",
          "Alkyne (C≡C)",
          "Alkane (C-C single bond)",
          "Amine (N-H stretch)"
        ],
        "answer": 0,
        "explanation": "The $\\text{C=O}$ double bond has a strong dipole change during stretching, producing a sharp characteristic peak between $1680 - 1750\\,\\text{cm}^{-1}$."
      }
    ],
    "Biology": [
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "What is the primary cellular function of Mitochondria in eukaryotic cells?",
        "options": [
          "ATP synthesis via oxidative phosphorylation",
          "Cellulose cell wall synthesis",
          "Active transport of sodium across myelin sheath",
          "DNA replication proofreading",
          "Glycogen granule storage"
        ],
        "answer": 0,
        "explanation": "In cell ultrastructure, the distinct physiological role of Mitochondria is ATP synthesis via oxidative phosphorylation."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "A double-stranded DNA sample contains 20% Adenine. What percentage of Cytosine does it contain?",
        "options": [
          "30%",
          "20%",
          "40%",
          "80%",
          "50%"
        ],
        "answer": 0,
        "explanation": "By Chargaff's rules, $%A = \\%T = 20\\%$. $%G + \\%C = 100 - 40 = 60\\%$. Since $%G = \\%C$, Cytosine is $\\frac{60}{2} = 30\\%$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "During ventricular systole in the human cardiac cycle, what is the operational state of the valves?",
        "options": [
          "Atrioventricular valves closed; semilunar valves open",
          "Atrioventricular valves open; semilunar valves closed",
          "Both atrioventricular and semilunar valves are open",
          "Both atrioventricular and semilunar valves are closed",
          "Tricuspid open; bicuspid closed"
        ],
        "answer": 0,
        "explanation": "Ventricular pressure exceeds atrial pressure, snapping AV valves shut (first heart sound), while exceeding arterial pressure to open semilunar valves."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "A cell with actual diameter 25\\,\\mu\\text{m}$ is viewed under magnification $\\times 400$. Calculate its image size in mm.",
        "options": [
          "$10.00\\,\\text{mm}$",
          "$100.0\\,\\text{mm}$",
          "$1.000\\,\\text{mm}$",
          "$10000\\,\\text{mm}$",
          "$16.00\\,\\text{mm}$"
        ],
        "answer": 0,
        "explanation": "$I = A \\times M = 25\\,\\mu\\text{m} \\times 400 = 10000\\,\\mu\\text{m} = 10.00\\,\\text{mm}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "If a DNA template strand reads $3'-TAC-GGA-CAT-5'$, what is the complementary mRNA sequence produced?",
        "options": [
          "$5'-AUG-CCU-GUA-3'$",
          "$5'-TAC-GGA-CAT-3'$",
          "$3'-AUG-CCU-GUA-5'$",
          "$5'-AUG-AAA-CCC-3'$",
          "$3'-UAC-GGA-CAU-5'$"
        ],
        "answer": 0,
        "explanation": "RNA synthesis pairs $T\\to A, A\\to U, C\\to G, G\\to C$ antiparallel to template: $5'-AUG-CCU-GUA-3'$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which feature of human lungs is an adaptation specifically maximizing diffusion rate according to Fick's Law?",
        "options": [
          "A single layer of flattened squamous epithelial cells minimizing diffusion pathway",
          "Cartilage rings preventing bronchial collapse",
          "Goblet cells secreting protective mucus",
          "Pleural fluid lubricating thoracic movements",
          "Intercostal muscles expanding the rib cage"
        ],
        "answer": 0,
        "explanation": "Fick's law states diffusion rate is inversely proportional to barrier thickness. Squamous epithelium provides an ultra-thin pathway (~0.5 $\\mu$m)."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "How does a competitive inhibitor influence the enzyme kinetic parameters $V_{\\text{max}}$ and $K_m$?",
        "options": [
          "$V_{\\text{max}}$ remains unchanged; $K_m$ increases",
          "$V_{\\text{max}}$ decreases; $K_m$ remains unchanged",
          "$V_{\\text{max}}$ decreases; $K_m$ decreases",
          "Both $V_{\\text{max}}$ and $K_m$ increase",
          "Both $V_{\\text{max}}$ and $K_m$ remain unchanged"
        ],
        "answer": 0,
        "explanation": "High substrate concentrations displace competitive inhibitors from the active site ($V_{\\text{max}}$ unchanged), but higher $[S]$ is required for half-maximal velocity ($K_m$ increases)."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "In a monohybrid cross $Aa \\times Aa$ producing 200$ total offspring, how many are expected to display the recessive phenotype?",
        "options": [
          "$50$",
          "$150$",
          "$100$",
          "$25$",
          "$200$"
        ],
        "answer": 0,
        "explanation": "Mendelian monohybrid cross produces a $3:1$ ratio. The recessive frequency is $\\frac{1}{4} \\times 200 = 50$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "Which ion movement causes the initial rapid depolarization phase of a neuronal action potential?",
        "options": [
          "Rapid influx of $\\text{Na}^+$ through voltage-gated sodium channels",
          "Efflux of $\\text{K}^+$ through voltage-gated potassium channels",
          "Active transport of $3\\text{Na}^+$ out and $2\\text{K}^+$ in",
          "Influx of $\\text{Cl}^-$ through GABA receptor channels",
          "Efflux of calcium from the endoplasmic reticulum"
        ],
        "answer": 0,
        "explanation": "Depolarization to threshold opens voltage-gated $\\text{Na}^+$ channels; sodium ions rush into the axon down their electrochemical gradient."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which cellular transport mechanism moves solutes against a concentration gradient utilizing ATP hydrolysis?",
        "options": [
          "Primary active transport via carrier protein pumps",
          "Facilitated diffusion through channel proteins",
          "Simple passive diffusion across lipid bilayer",
          "Osmosis via aquaporin water channels",
          "Bulk gas exchange across cell membrane"
        ],
        "answer": 0,
        "explanation": "Active transport moves molecules from low to high concentration, which requires energy derived from ATP."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What is the expected phenotypic ratio in the $F_2$ generation of a dihybrid cross $AaBb \\times AaBb$ with unlinked genes?",
        "options": [
          "$9 : 3 : 3 : 1$",
          "$1 : 1 : 1 : 1$",
          "$3 : 1$",
          "$9 : 7$",
          "$12 : 3 : 1$"
        ],
        "answer": 0,
        "explanation": "By Mendel's Law of Independent Assortment, two unlinked heterozygous genes assort independently to produce a $9:3:3:1$ phenotypic ratio."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "At a chemical synapse, action potential arrival at the axon terminal directly triggers the opening of:",
        "options": [
          "Voltage-gated $\\text{Ca}^{2+}$ channels",
          "Voltage-gated $\\text{K}^+$ channels only",
          "Ligand-gated $\\text{Cl}^-$ channels",
          "Mechanically-gated sodium channels",
          "Leak potassium channels"
        ],
        "answer": 0,
        "explanation": "Depolarization activates voltage-gated $\\text{Ca}^{2+}$ channels. Inflowing calcium stimulates neurotransmitter vesicle fusion with the presynaptic membrane."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "A plant cell with solute potential $\\Psi_s = -600\\,\\text{kPa}$ and pressure potential $\\Psi_p = +200\\,\\text{kPa}$ has net water potential $\\Psi$ of:",
        "options": [
          "$-400\\,\\text{kPa}$",
          "$-800\\,\\text{kPa}$",
          "$+400\\,\\text{kPa}$",
          "$0\\,\\text{kPa}$",
          "$-1200\\,\\text{kPa}$"
        ],
        "answer": 0,
        "explanation": "$\\Psi = \\Psi_s + \\Psi_p = (-600) + (+200) = -400\\,\\text{kPa}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which type of mutation in a gene's coding region is most likely to alter all downstream amino acids?",
        "options": [
          "Single nucleotide insertion causing a frameshift",
          "Silent base substitution in the wobble position",
          "Conservative missense substitution",
          "Inversion of three complete codons",
          "Duplication of an entire promoter"
        ],
        "answer": 0,
        "explanation": "Adding a single base shifts the reading frame of all subsequent codons, completely altering the synthesized polypeptide."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "How does antidiuretic hormone (ADH) promote water retention in the mammalian kidney?",
        "options": [
          "Stimulates insertion of aquaporins into collecting duct luminal membranes",
          "Inhibits sodium pumps in the ascending limb of Henle",
          "Actively secretes water into the renal medulla",
          "Constricts the afferent arteriole to stop glomerular filtration",
          "Hydrolyses urea in the loop of Henle"
        ],
        "answer": 0,
        "explanation": "ADH binds to basolateral receptors, triggering insertion of aquaporin-2 water channels into the collecting duct apical membrane to reabsorb water."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "During which phase of mitosis do sister chromatids disjoin and migrate toward opposite spindle poles?",
        "options": [
          "Anaphase",
          "Metaphase",
          "Prophase",
          "Telophase",
          "Interphase"
        ],
        "answer": 0,
        "explanation": "In anaphase, centromeric cohesins are degraded and kinetochore microtubules shorten, drawing sister chromatids to opposite poles."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which enzyme is responsible for breaking hydrogen bonds to unwind the double helix during replication?",
        "options": [
          "DNA Helicase",
          "DNA Polymerase III",
          "DNA Ligase",
          "RNA Primase",
          "Topoisomerase"
        ],
        "answer": 0,
        "explanation": "DNA Helicase moves along the DNA phosphodiester backbone, disrupting base pair hydrogen bonds to advance the replication fork."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Approximately what proportion of energy is transferred from one trophic level to the next in food chains?",
        "options": [
          "$10\\%$",
          "$50\\%$",
          "$90\\%$",
          "$1\\%$",
          "$25\\%$"
        ],
        "answer": 0,
        "explanation": "Trophic efficiency is approximately 10%; ~90% of energy is dissipated as respiratory heat, excretory waste, and unconsumed material."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "Where does a non-competitive allosteric inhibitor bind on an enzyme?",
        "options": [
          "At a distinct regulatory allosteric site separate from the catalytic active site",
          "Directly inside the active site blocking substrate binding",
          "To the substrate molecule preventing association",
          "Exclusively to the product molecule",
          "To the aqueous solvent altering local pH"
        ],
        "answer": 0,
        "explanation": "Allosteric inhibitors bind to a non-active site, inducing a conformational change that alters active site geometry and catalytic activity."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Hard",
        "question": "A mother is a carrier ($X^H X^h$) for X-linked haemophilia and the father is unaffected ($X^H Y$). What is the probability their son has haemophilia?",
        "options": [
          "$50\\%$",
          "$25\\%$",
          "$0\\%$",
          "$100\\%$",
          "$75\\%$"
        ],
        "answer": 0,
        "explanation": "A son receives the Y chromosome from the father. There is a 50% chance he inherits $X^h$ from his mother, resulting in haemophilia."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "What is the specific role of calcium ions ($\\text{Ca}^{2+}$) in skeletal muscle contraction?",
        "options": [
          "Binds to troponin, shifting tropomyosin away from myosin-binding sites on actin",
          "Phosphorylates the myosin head directly",
          "Hydrolyses ATP inside the sarcoplasmic reticulum",
          "Blocks sodium channels on the sarcolemma",
          "Breaks down acetylcholine in the synaptic cleft"
        ],
        "answer": 0,
        "explanation": "$\\text{Ca}^{2+}$ binds to troponin C, triggering a conformational movement of tropomyosin that uncovers the active binding sites on actin."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "What chemical bonds primarily stabilize the secondary structure ($\\alpha$-helices and $\\beta$-sheets) of proteins?",
        "options": [
          "Hydrogen bonds between main-chain carbonyl and amide groups",
          "Disulfide bridges between cysteine side chains",
          "Ionic interactions between acidic and basic R-groups",
          "Hydrophobic interactions between aliphatic residues",
          "Covalent peptide bonds between adjacent amino acids"
        ],
        "answer": 0,
        "explanation": "Secondary structure is stabilized by regular hydrogen bonds between peptide backbone $N-H$ and $C=O$ groups."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What occurs during the annealing stage ($55^\\circ\\text{C}-65^\\circ\\text{C}$) of a PCR cycle?",
        "options": [
          "Oligonucleotide primers hybridize specifically to complementary flanking sequences on template strands",
          "Double-stranded DNA denatures into single strands",
          "Taq polymerase synthesizes daughter strands at its optimal rate",
          "Residual primers are degraded by nucleases",
          "dNTPs are phosphorylated to form ATP"
        ],
        "answer": 0,
        "explanation": "At annealing temperature, short single-stranded primers anneal by complementary base pairing to the template DNA strands."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which endocrine cells synthesize and secrete insulin in response to elevated blood glucose?",
        "options": [
          "Beta ($\\beta$) cells of pancreatic islets of Langerhans",
          "Alpha ($\\alpha$) cells of the pancreas",
          "Hepatocytes in the liver",
          "Adrenal cortex steroidogenic cells",
          "Pituitary somatotrophs"
        ],
        "answer": 0,
        "explanation": "Pancreatic $\\beta$-cells detect elevated blood glucose and release insulin to stimulate glucose uptake and glycogenesis."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which piece of evidence strongly supports the endosymbiotic origin of mitochondria?",
        "options": [
          "Mitochondria possess circular naked DNA and 70S ribosomes like prokaryotes",
          "They have a single phospholipid bilayer membrane",
          "They can synthesize glucose from carbon dioxide",
          "They lack any transport proteins in their envelope",
          "They contain 80S ribosomes identical to the cytoplasm"
        ],
        "answer": 0,
        "explanation": "Mitochondria contain their own circular genome, 70S ribosomes, divide by binary fission, and have a double membrane."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "The observation that 61 mRNA codons code for only 20 standard amino acids indicates that the code is:",
        "options": [
          "Degenerate",
          "Universal",
          "Non-overlapping",
          "Ambiguous",
          "Overlapping"
        ],
        "answer": 0,
        "explanation": "The genetic code is degenerate (redundant) because multiple synonymous codons specify the same amino acid."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "According to the cohesion-tension theory, what is the primary driving force pulling water up through xylem vessels?",
        "options": [
          "Negative hydrostatic pressure generated by evaporation from mesophyll cell walls",
          "Active ATP pumping by root cortical cells",
          "Positive root pressure pushing water from below",
          "Phloem osmotic pressure gradient",
          "Centripetal force from wind movement"
        ],
        "answer": 0,
        "explanation": "Transpiration from stomata creates tension (negative pressure) in leaf xylem, pulling water upward due to hydrogen-bonded cohesion."
      }
    ]
  },
  "full_mock_2": {
    "Mathematics 1": [
      {
        "module": "Mathematics 1",
        "topic": "Surds & Indices",
        "difficulty": "Medium",
        "question": "Rationalise the denominator and simplify fully: $\\frac{4}{\\sqrt{4} - \\sqrt{3}}$.",
        "options": [
          "$4(\\sqrt{4} + \\sqrt{3})$",
          "$4(\\sqrt{4} - \\sqrt{3})$",
          "$\\frac{4(\\sqrt{4} + \\sqrt{3})}{7}$",
          "$4\\sqrt{3}$",
          "$4\\sqrt{4}$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by the conjugate $(\\sqrt{4} + \\sqrt{3})$. The denominator simplifies to $(4) - (3) = 1$. The result is $4(\\sqrt{4} + \\sqrt{3})$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "Find the gradient of the straight line perpendicular to the line $y = 3x + 2$.",
        "options": [
          "$-\\frac{1}{3}$",
          "$3$",
          "$-3$",
          "$\\frac{1}{3}$",
          "$2$"
        ],
        "answer": 0,
        "explanation": "For perpendicular lines, $m_1 m_2 = -1$. With $m_1 = 3$, the perpendicular gradient is $m_2 = -\\frac{1}{3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Easy",
        "question": "Given the curve $y = 4x^{3} - 8x$, calculate the value of the derivative $\\frac{dy}{dx}$ at $x = 2$.",
        "options": [
          "$40$",
          "$48$",
          "$36$",
          "$44$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Differentiating: $\\frac{dy}{dx} = 12x^{2} - 8$. At $x = 2$, this equals $12(2^{2}) - 8 = 40$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "For what range of real values of $k$ does the equation $x^2 - 2kx + 16 = 0$ have two distinct real roots?",
        "options": [
          "$k < -4$ or $k > 4$",
          "$-4 < k < 4$",
          "$k = 4$",
          "$k \\ge 0$",
          "$k > 4$ only"
        ],
        "answer": 0,
        "explanation": "Distinct real roots require discriminant $\\Delta > 0$: $(-2k)^2 - 4(1)(16) > 0 \\implies 4k^2 - 64 > 0 \\implies k^2 > 16 \\implies k < -4$ or $k > 4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Easy",
        "question": "A circle is given by $(x - 2)^2 + (y + 2)^2 = 16$. Identify its center and radius.",
        "options": [
          "Center $(2, -2)$, radius $r = 4$",
          "Center $(-2, 2)$, radius $r = 4$",
          "Center $(2, -2)$, radius $r = 16$",
          "Center $(0, 0)$, radius $r = 4$",
          "Center $(2, 2)$, radius $r = 4$"
        ],
        "answer": 0,
        "explanation": "Standard circle form $(x - h)^2 + (y - k)^2 = r^2$ gives center $(h, k) = (2, -2)$ and radius $r = \\sqrt{16} = 4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "In how many distinct ways can a committee of $3$ individuals be selected from a pool of $8$ candidates?",
        "options": [
          "$56$",
          "$168$",
          "$66$",
          "$51$",
          "$24$"
        ],
        "answer": 0,
        "explanation": "Selection without regard to order is evaluated by combinations: $\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Solve for $x$ in the equation $\\log_{3}(x + 3) = 3$.",
        "options": [
          "$24$",
          "$27$",
          "$21$",
          "$9$",
          "$27$"
        ],
        "answer": 0,
        "explanation": "Rewriting in exponential form: $x + 3 = 3^{3} = 27 \\implies x = 27 - 3 = 24$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "Using trigonometric identities, simplify $2\\sin(22.5^\\circ)\\cos(22.5^\\circ)$.",
        "options": [
          "$\\sin(45^\\circ)$",
          "$\\cos(45^\\circ)$",
          "$\\tan(45^\\circ)$",
          "$\\frac{1}{2}\\sin(45^\\circ)$",
          "$2\\sin(22.5^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the double-angle identity $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$, substituting $\\theta = 22.5^\\circ$ gives $\\sin(45^\\circ)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Determine the exact area bounded by the curve $y = 3x^2 + 2$, the $x$-axis, and vertical lines $x = 0$ and $x = 3$.",
        "options": [
          "$33$",
          "$29$",
          "$35$",
          "$27$",
          "$27$"
        ],
        "answer": 0,
        "explanation": "The area is $\\int_0^{3} (3x^2 + 2)\\,dx = [x^3 + 2x]_0^{3} = (3^3 + 2(3)) - 0 = 33$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Easy",
        "question": "If functions are defined as $f(x) = 3x$ and $g(x) = x^2 + 2$, evaluate $f(g(1))$.",
        "options": [
          "$9$",
          "$6$",
          "$12$",
          "$11$",
          "$5$"
        ],
        "answer": 0,
        "explanation": "Evaluating inside first: $g(1) = 1^2 + 2 = 3$. Then $f(3) = 3 \\times 3 = 9$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Medium",
        "question": "In $\\triangle ABC$, the side $a = 14\\,\\text{cm}$ lies opposite angle $A = 45^\\circ$. What is the circumcircle diameter $2R$?",
        "options": [
          "$\\frac{14}{\\sin(45^\\circ)}$",
          "$14\\sin(45^\\circ)$",
          "$\\frac{14}{2\\sin(45^\\circ)}$",
          "$28\\sin(45^\\circ)$",
          "$14\\cos(45^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the extended Sine Rule, $\\frac{a}{\\sin A} = 2R$, so circumdiameter $2R = \\frac{14}{\\sin(45^\\circ)}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "For random events $A$ and $B$, $P(A) = 0.5$ and $P(A \\cap B) = 0.25$. Calculate the conditional probability $P(B | A)$.",
        "options": [
          "$0.50$",
          "$0.125$",
          "$0.25$",
          "$0.75$",
          "$0.50$"
        ],
        "answer": 0,
        "explanation": "By Bayes/conditional rule, $P(B | A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.25}{0.5} = 0.50$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Find the coefficient of $x^2$ in the algebraic binomial expansion of $(1 + x)^{5}$.",
        "options": [
          "$10$",
          "$5$",
          "$10$",
          "$20$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The general expansion term is $\\binom{n}{r} x^r$. For $x^2$, $r = 2$, so the coefficient is $\\binom{5}{2} = 10$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry",
        "difficulty": "Easy",
        "question": "What is the total sum of all interior angles of a convex polygon having $8$ sides?",
        "options": [
          "$1080^\\circ$",
          "$1260^\\circ$",
          "$900^\\circ$",
          "$1440^\\circ$",
          "$360^\\circ$"
        ],
        "answer": 0,
        "explanation": "The interior angle sum formula is $(n - 2) \\times 180^\\circ = (8 - 2) \\times 180^\\circ = 1080^\\circ$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Locate the $x$-coordinate of the stationary point on the parabola $y = 2x^2 - 12x + 7$.",
        "options": [
          "$3$",
          "$2$",
          "$-3$",
          "$0$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "Setting the derivative to zero: $\\frac{dy}{dx} = 4x - 12 = 0 \\implies x = 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "In a geometric sequence with first term $a = 2$ and common ratio $r = 3$, determine the $4^{\\text{th}}$ term.",
        "options": [
          "$54$",
          "$162$",
          "$52$",
          "$56$",
          "$24$"
        ],
        "answer": 0,
        "explanation": "The $n^{\\text{th}}$ term is $T_n = a r^{n-1}$. For $n = 4$: $T_4 = 2 \\times 3^3 = 54$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "A circular sector of radius $r = 4\\,\\text{cm}$ has central angle $\\theta = \\frac{\\pi}{3}\\,\\text{rad}$. Compute its area.",
        "options": [
          "$2.67\\pi\\,\\text{cm}^2$",
          "$4\\pi\\,\\text{cm}^2$",
          "$5.33\\pi\\,\\text{cm}^2$",
          "$2\\pi\\,\\text{cm}^2$",
          "$\\pi\\,\\text{cm}^2$"
        ],
        "answer": 0,
        "explanation": "Sector area formula: $A = \\frac{1}{2}r^2 \\theta = \\frac{1}{2}(4)^2 \\left(\\frac{\\pi}{3}\\right) = 2.67\\pi\\,\\text{cm}^2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Statistics",
        "difficulty": "Medium",
        "question": "A sample has mean $\\mu = 25$ and standard deviation $\\sigma = 5$. What is the standard deviation after transformation $Y = 3X + 5$?",
        "options": [
          "$15$",
          "$20$",
          "$45$",
          "$5$",
          "$80$"
        ],
        "answer": 0,
        "explanation": "Adding a constant does not alter spread. Multiplying by $a$ scales standard deviation by $|a|$: $\\sigma_Y = 3\\sigma_X = 3(5) = 15$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "When the polynomial $P(x) = 2x^3 - 3x^2 + 5$ is divided by $(x - 2)$, what is the numerical remainder?",
        "options": [
          "$9$",
          "$11$",
          "$6$",
          "$0$",
          "$-9$"
        ],
        "answer": 0,
        "explanation": "By the Remainder Theorem, the remainder upon division by $(x - c)$ equals $P(c) = 2(2)^3 - 3(2)^2 + 5 = 9$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "The graph of $y = f(x)$ is translated horizontally by vector $\\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}$. State the new equation.",
        "options": [
          "$y = f(x - 3)$",
          "$y = f(x + 3)$",
          "$y = f(x) + 3$",
          "$y = f(x) - 3$",
          "$y = 3f(x)$"
        ],
        "answer": 0,
        "explanation": "A translation by $+a$ along the $x$-axis maps $x \\mapsto x - a$, giving $y = f(x - 3)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Hard",
        "question": "Find the Cartesian equation of the tangent line to the parabola $y = x^2$ at the point with $x$-coordinate $x = 2$.",
        "options": [
          "$y = 4x -4$",
          "$y = -\\frac{1}{4}x + 1$",
          "$y = 8x$",
          "$y = x + 2$",
          "$y = 4x + 4$"
        ],
        "answer": 0,
        "explanation": "Gradient is $m = \\frac{dy}{dx} = 2x = 4$. At $x = 2, y = 4$. Using $y - y_1 = m(x - x_1)$ yields $y = 4x -4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Hard",
        "question": "Decompose $\\frac{2x + 5}{(x + 1)(x + 2)}$ into partial fractions $\\frac{A}{x + 1} + \\frac{B}{x + 2}$. Find $(A, B)$.",
        "options": [
          "$(3, -1)$",
          "$(1, 1)$",
          "$(2, 3)$",
          "$(5, -3)$",
          "$(4, -2)$"
        ],
        "answer": 0,
        "explanation": "$2x + 5 = A(x + 2) + B(x + 1)$. At $x = -1 \\implies A = 3$. At $x = -2 \\implies B = -1$. Thus $(A, B) = (3, -1)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Vectors",
        "difficulty": "Easy",
        "question": "Compute the scalar dot product between $\\mathbf{u} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.",
        "options": [
          "$5$",
          "$10$",
          "$1$",
          "$8$",
          "$-3$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{u} \\cdot \\mathbf{v} = (4)(2) + (3)(-1) = 8 - 3 = 5$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Easy",
        "question": "If events $E_1$ and $E_2$ are statistically independent with $P(E_1) = 0.4$ and $P(E_2) = 0.5$, what is $P(E_1 \\cap E_2)$?",
        "options": [
          "$0.200$",
          "$0.90$",
          "$0.70$",
          "$0.4$",
          "$0.5$"
        ],
        "answer": 0,
        "explanation": "Independence implies $P(E_1 \\cap E_2) = P(E_1) \\times P(E_2) = 0.4 \\times 0.5 = 0.200$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "Find the sum of the first 10 terms of an arithmetic progression with first term $a = 7$ and common difference $d = 4$.",
        "options": [
          "$250$",
          "$230$",
          "$280$",
          "$43$",
          "$70$"
        ],
        "answer": 0,
        "explanation": "$S_n = \\frac{n}{2}[2a + (n-1)d] = 5[2(7) + 9(4)] = 250$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Hard",
        "question": "Solve $\\cos(x) = \\frac{1}{2}$ for all values in the principal interval $0 \\le x \\le 2\\pi$.",
        "options": [
          "$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          "$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$",
          "$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{4}, \\frac{7\\pi}{4}$",
          "$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$"
        ],
        "answer": 0,
        "explanation": "Cosine is positive in quadrants I and IV: $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Evaluate the second derivative $\\frac{d^2y}{dx^2}$ of $y = 3x^3 - 18x^2$ at $x = 2$.",
        "options": [
          "$0$",
          "$18$",
          "$-18$",
          "$36$",
          "$-36$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = 9x^2 - 36x$, so $\\frac{d^2y}{dx^2} = 18x - 36$. At $x = 2$: 18(2) - 36 = 0$."
      }
    ],
    "Mathematics 2": [
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Apply the product rule to differentiate $y = x^{3} e^{2x}$ with respect to $x$.",
        "options": [
          "$x^{2} e^{2x}(3 + 2x)$",
          "$3 x^{2} e^{2x}$",
          "$2x^{3} e^{2x}$",
          "$23 x e^{2x}$",
          "$x^{3} e^{2x}$"
        ],
        "answer": 0,
        "explanation": "By $(uv)' = u'v + uv'$: $u' = 3x^{2}, v' = 2e^{2x}$. Factoring gives $x^{2} e^{2x}(3 + 2x)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Calculate the vector cross product $\\mathbf{i} \\times \\mathbf{j}$ in a right-handed Cartesian coordinate system.",
        "options": [
          "$\\mathbf{k}$",
          "$-\\mathbf{k}$",
          "$\\mathbf{0}$",
          "$\\mathbf{i}$",
          "$\\mathbf{j}$"
        ],
        "answer": 0,
        "explanation": "By the right-hand rule definition of orthonormal unit basis vectors, $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Easy",
        "question": "Compute the determinant of the $2 \\times 2$ matrix $M = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$.",
        "options": [
          "$10$",
          "$14$",
          "$8$",
          "$12$",
          "$7$"
        ],
        "answer": 0,
        "explanation": "$\\det(M) = ad - bc = (4)(3) - (1)(2) = 10$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Using the substitution $u = x^2 + 3$, evaluate $\\int 2x(x^2 + 3)^3\\,dx$.",
        "options": [
          "$\\frac{1}{4}(x^2 + 3)^4 + C$",
          "$\\frac{1}{3}(x^2 + 3)^3 + C$",
          "$(x^2 + 3)^4 + C$",
          "$\\frac{1}{2}(x^2 + 3)^4 + C$",
          "$6x^2(x^2 + 3)^2 + C$"
        ],
        "answer": 0,
        "explanation": "$du = 2x\\,dx$. The integral transforms to $\\int u^3\\,du = \\frac{1}{4}u^4 + C = \\frac{1}{4}(x^2 + 3)^4 + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "For what value of $\\lambda$ are the 3D vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -1 \\\\ \\lambda \\end{pmatrix}$ perpendicular?",
        "options": [
          "$-1$",
          "$1$",
          "$5$",
          "$-5$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Perpendicular vectors have zero dot product: $2(1) + 3(-1) - \\lambda = 0 \\implies -1 - \\lambda = 0 \\implies \\lambda = -1$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Determine the modulus $|z|$ and principal argument $\\arg(z)$ of the complex number $z = 1 + i\\sqrt{3}$.",
        "options": [
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{6}$",
          "$|z| = 4, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 1, \\arg(z) = \\frac{\\pi}{4}$",
          "$|z| = \\sqrt{3}, \\arg(z) = \\frac{\\pi}{2}$"
        ],
        "answer": 0,
        "explanation": "$|z| = \\sqrt{1^2 + 3} = 2$. In quadrant I, $\\theta = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Differentiate $y = \\frac{\\sin(x)}{x}$ with respect to $x$ using the quotient rule.",
        "options": [
          "$\\frac{x\\cos(x) - \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x)}{1}$",
          "$\\frac{x\\sin(x) - \\cos(x)}{x^2}$",
          "$\\frac{x\\cos(x) + \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x) - x\\sin(x)}{x^2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{u'v - uv'}{v^2} = \\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "A plane has normal vector $\\mathbf{n} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 4 \\end{pmatrix}$ and passes through $(1, 0, 1)$. Find its equation.",
        "options": [
          "$2x - 3y + 4z = 6$",
          "$2x - 3y + 4z = 0$",
          "$2x - 3y + 4z = 2$",
          "$x + z = 6$",
          "$-2x + 3y - 4z = 1$"
        ],
        "answer": 0,
        "explanation": "$ax + by + cz = d \\implies 2(1) - 3(0) + 4(1) = 6$, so $2x - 3y + 4z = 6$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "By De Moivre's theorem, simplify the complex power $(\\cos\\theta + i\\sin\\theta)^{4}$.",
        "options": [
          "$\\cos(4\\theta) + i\\sin(4\\theta)$",
          "$\\cos^3\\theta + i\\sin^3\\theta$",
          "$4(\\cos\\theta + i\\sin\\theta)$",
          "$\\cos(\\theta / 4) + i\\sin(\\theta / 4)$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, which for $n = 4$ yields $\\cos(4\\theta) + i\\sin(4\\theta)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find $\\frac{dy}{dx}$ for the ellipse $x^2 + 4y^2 = 25$ using implicit differentiation.",
        "options": [
          "$-\\frac{x}{4y}$",
          "$-\\frac{4x}{y}$",
          "$\\frac{x}{4y}$",
          "$-\\frac{x}{2y}$",
          "$\\frac{25 - x}{4y}$"
        ],
        "answer": 0,
        "explanation": "$2x + 8y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Calculate the perpendicular distance from the origin $(0,0,0)$ to the plane $2x - y + 2z = 9$.",
        "options": [
          "$3$",
          "$9$",
          "$\\frac{9}{2}$",
          "$\\sqrt{9}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$D = \\frac{|0 - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{\\sqrt{9}} = 3$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the matrix inverse $A^{-1}$ for $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "options": [
          "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 6 - 5 = 1$. The inverse is $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Evaluate $\\int x e^x\\,dx$ using integration by parts.",
        "options": [
          "$x e^x - e^x + C$",
          "$x e^x + e^x + C$",
          "$\\frac{1}{2}x^2 e^x + C$",
          "$e^x - x e^x + C$",
          "$x^2 e^x + C$"
        ],
        "answer": 0,
        "explanation": "$u = x, dv = e^x dx \\implies uv - \\int v du = x e^x - \\int e^x dx = x e^x - e^x + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Two lines have direction vectors $\\mathbf{d}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{d}_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$. What is the acute angle between them?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$0^\\circ$"
        ],
        "answer": 0,
        "explanation": "$\\cos\\theta = \\frac{1(1) + 0 + 0}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "Evaluate the determinant of the upper-triangular matrix $M = \\begin{pmatrix} 2 & 4 & 5 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
        "options": [
          "$24$",
          "$9$",
          "$0$",
          "$48$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The determinant of any triangular matrix is the product of its diagonal elements: $2 \\times 3 \\times 4 = 24$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Solve the separable differential equation $\\frac{dy}{dx} = 2x y$ with initial condition $y(0) = 1$.",
        "options": [
          "$y = e^{x^2}$",
          "$y = e^{2x}$",
          "$y = x^2 + 1$",
          "$y = 2e^x - 1$",
          "$y = e^{x^2/2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{y}dy = 2x dx \\implies \\ln|y| = x^2 + C$. With $y(0) = 1 \\implies C = 0$, so $y = e^{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "At what point does the line $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ intersect the plane $x + y + z = 7$?",
        "options": [
          "$(3, 2, 2)$",
          "$(2, 2, 1)$",
          "$(1, 2, 0)$",
          "$(4, 2, 3)$",
          "$(0, 2, -1)$"
        ],
        "answer": 0,
        "explanation": "$(1 + t) + 2 + t = 7 \\implies 2t + 3 = 7 \\implies t = 2$. The point is $(1 + 2, 2, 0 + 2) = (3, 2, 2)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the roots of the quadratic equation $z^2 + 4z + 13 = 0$ in the complex domain.",
        "options": [
          "$-2 \\pm 3i$",
          "$2 \\pm 3i$",
          "$-4 \\pm 6i$",
          "$-2 \\pm 9i$",
          "$-2 \\pm i\\sqrt{13}$"
        ],
        "answer": 0,
        "explanation": "$z = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = -2 \\pm 3i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find the general solution to the homogeneous equation $\\frac{d^2y}{dx^2} - 9y = 0$.",
        "options": [
          "$y = A e^{3x} + B e^{-3x}$",
          "$y = A\\cos(3x) + B\\sin(3x)$",
          "$y = (A + Bx)e^{3x}$",
          "$y = A e^{9x}$",
          "$y = A\\cosh(9x)$"
        ],
        "answer": 0,
        "explanation": "Characteristic equation $m^2 - 9 = 0 \\implies m = \\pm 3$, giving $y = A e^{3x} + B e^{-3x}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Which vector operation yields the common perpendicular direction to two skew lines with direction vectors $\\mathbf{d}_1$ and $\\mathbf{d}_2$?",
        "options": [
          "$\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "$\\mathbf{d}_1 \\cdot \\mathbf{d}_2$",
          "$\\mathbf{d}_1 + \\mathbf{d}_2$",
          "$\\frac{\\mathbf{d}_1}{|\\mathbf{d}_2|}$",
          "$\\mathbf{d}_1 - \\mathbf{d}_2$"
        ],
        "answer": 0,
        "explanation": "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ produces a vector mutually perpendicular to both direction vectors."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Express the complex quotient $\\frac{5}{2 + i}$ in standard Cartesian form $x + iy$.",
        "options": [
          "$2 - i$",
          "$2 + i$",
          "$1 - 2i$",
          "$\\frac{10 - 5i}{3}$",
          "$5 - 2.5i$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by conjugate $(2 - i)$: $\\frac{5(2 - i)}{4 + 1} = 2 - i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Easy",
        "question": "Differentiate $y = \\cos(4x^3)$ with respect to $x$.",
        "options": [
          "$-12x^2 \\sin(4x^3)$",
          "$12x^2 \\sin(4x^3)$",
          "$-4\\sin(4x^3)$",
          "$-12x \\cos(4x^3)$",
          "$\\sin(12x^2)$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = -\\sin(4x^3) \\cdot \\frac{d}{dx}(4x^3) = -12x^2 \\sin(4x^3)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Easy",
        "question": "Determine the exact magnitude of the 3D position vector $\\mathbf{r} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 6 \\end{pmatrix}$.",
        "options": [
          "$\\sqrt{49}$",
          "$11$",
          "$\\sqrt{11}$",
          "$36$",
          "$\\sqrt{27}$"
        ],
        "answer": 0,
        "explanation": "$|\\mathbf{r}| = \\sqrt{3^2 + 2^2 + 6^2} = \\sqrt{49}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "What geometric transformation is represented by the matrix $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ in $\\mathbb{R}^2$?",
        "options": [
          "Counter-clockwise rotation by $90^\\circ$ about the origin",
          "Clockwise rotation by $90^\\circ$ about the origin",
          "Reflection across the line $y = x$",
          "Reflection across the line $y = -x$",
          "Uniform scale factor of $-1$"
        ],
        "answer": 0,
        "explanation": "The standard rotation matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ with $\\theta = 90^\\circ$ matches $R$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "What are the first three non-zero terms of the Maclaurin expansion for $\\sin(x)$?",
        "options": [
          "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$1 - \\frac{x^2}{2} + \\frac{x^4}{24}$",
          "$x + \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$x - x^3 + x^5$",
          "$1 - x + \\frac{x^2}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + \\frac{x^5}{120}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Find a unit normal vector to the plane $3x + 4z = 10$.",
        "options": [
          "$\\begin{pmatrix} 3/5 \\\\ 0 \\\\ 4/5 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3/7 \\\\ 0 \\\\ 4/7 \\end{pmatrix}$",
          "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
          "$\\begin{pmatrix} 4/5 \\\\ 0 \\\\ -3/5 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{n} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$, magnitude $\\sqrt{3^2 + 4^2} = 5$. The unit normal is $\\frac{1}{5}\\mathbf{n}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "What is the algebraic sum of all $n$ complex $n^{\\text{th}}$ roots of unity for any integer $n \\ge 2$?",
        "options": [
          "$0$",
          "$1$",
          "$n$",
          "$-1$",
          "$n\\pi$"
        ],
        "answer": 0,
        "explanation": "The roots satisfy $z^n - 1 = 0$. By Vieta's formulas, the sum of roots is the coefficient of $z^{n-1}$, which is $0$."
      }
    ],
    "Physics": [
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A car starts with velocity $u = 5\\,\\text{m s}^{-1}$ and accelerates uniformly at $a = 3\\,\\text{m s}^{-2}$ for $t = 3\\,\\text{s}$. Find displacement $s$.",
        "options": [
          "$28.5\\,\\text{m}$",
          "$38.5\\,\\text{m}$",
          "$23.5\\,\\text{m}$",
          "$24\\,\\text{m}$",
          "$4.5\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$s = ut + \\frac{1}{2}at^2 = (5)(3) + 0.5(3)(3^2) = 28.5\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "Two identical resistors of $R = 20\\,\\Omega$ are wired in parallel across a 24\\,\\text{V}$ ideal battery. What total current is drawn?",
        "options": [
          "$2.40\\,\\text{A}$",
          "$1.20\\,\\text{A}$",
          "$4.80\\,\\text{A}$",
          "$1.20\\,\\text{A}$",
          "$480\\,\\text{A}$"
        ],
        "answer": 0,
        "explanation": "$R_{eq} = \\frac{20}{2} = 10\\,\\Omega$. $I = \\frac{V}{R_{eq}} = \\frac{24}{10} = 2.40\\,\\text{A}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "An ideal gas at temperature $T_1 = 300\\,\\text{K}$ and pressure $P_1$ in a rigid sealed container has its temperature raised to $600\\,\\text{K}$. What is the new pressure $P_2$?",
        "options": [
          "$2P_1$",
          "$\\frac{1}{2}P_1$",
          "$4P_1$",
          "$P_1$",
          "$\\sqrt{2}P_1$"
        ],
        "answer": 0,
        "explanation": "At constant volume, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\frac{600}{300} = 2P_1$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A pulling force of 80\\,\\text{N}$ acts on a mass of 10\\,\\text{kg}$ against friction of 20\\,\\text{N}$. Calculate its acceleration.",
        "options": [
          "$6.00\\,\\text{m s}^{-2}$",
          "$8.00\\,\\text{m s}^{-2}$",
          "$10.00\\,\\text{m s}^{-2}$",
          "$2.00\\,\\text{m s}^{-2}$",
          "$800\\,\\text{m s}^{-2}$"
        ],
        "answer": 0,
        "explanation": "$F_{net} = 80 - 20 = 60\\,\\text{N}$. $a = \\frac{F_{net}}{m} = \\frac{60}{10} = 6.00\\,\\text{m s}^{-2}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Easy",
        "question": "A sound wave propagates at $340\\,\\text{m s}^{-1}$ with frequency $f = 250\\,\\text{Hz}$. What is its wavelength $\\lambda$?",
        "options": [
          "$1.36\\,\\text{m}$",
          "$85000\\,\\text{m}$",
          "$0.74\\,\\text{m}$",
          "$2.72\\,\\text{m}$",
          "$0.68\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$\\lambda = \\frac{v}{f} = \\frac{340}{250} = 1.36\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "A satellite orbits Earth at radius $r$ with speed $v$. If it moves to an orbit of radius $4r$, what is its new orbital speed?",
        "options": [
          "$\\frac{1}{2}v$",
          "$\\frac{1}{4}v$",
          "$2v$",
          "$4v$",
          "$\\frac{1}{\\sqrt{2}}v$"
        ],
        "answer": 0,
        "explanation": "$v = \\sqrt{\\frac{GM}{r}}$. At radius $4r$, $v' = \\sqrt{\\frac{GM}{4r}} = \\frac{1}{2}v$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A cart of mass 3\\,\\text{kg}$ moving at 4\\,\\text{m s}^{-1}$ collides with and sticks to a stationary cart of mass 3\\,\\text{kg}$. Find their final speed.",
        "options": [
          "$2.00\\,\\text{m s}^{-1}$",
          "$4\\,\\text{m s}^{-1}$",
          "$4.00\\,\\text{m s}^{-1}$",
          "$4.00\\,\\text{m s}^{-1}$",
          "$0\\,\\text{m s}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{3 \\times 4}{6} = 2.00\\,\\text{m s}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "In a Young's double-slit experiment, fringe separation is $w$. If slit separation $s$ is doubled and screen distance $D$ is halved, what is the new fringe width?",
        "options": [
          "$\\frac{1}{4}w$",
          "$\\frac{1}{2}w$",
          "$w$",
          "$2w$",
          "$4w$"
        ],
        "answer": 0,
        "explanation": "$w = \\frac{\\lambda D}{s}$. New width $w' = \\frac{\\lambda (D/2)}{2s} = \\frac{1}{4}w$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "Two point charges experience electrostatic force $F$ at distance $d$. What is the force when separation is reduced to $\\frac{d}{3}$?",
        "options": [
          "$9F$",
          "$3F$",
          "$\\frac{1}{3}F$",
          "$\\frac{1}{9}F$",
          "$6F$"
        ],
        "answer": 0,
        "explanation": "$F \\propto \\frac{1}{r^2}$. Dividing distance by 3 multiplies force by $3^2 = 9$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "Calculate the gravitational potential energy gained when an object of mass 4\\,\\text{kg}$ is lifted vertically by 5\\,\\text{m}$ ($g = 9.8\\,\\text{m s}^{-2}$).",
        "options": [
          "$196.0\\,\\text{J}$",
          "$98.0\\,\\text{J}$",
          "$392.0\\,\\text{J}$",
          "$20\\,\\text{J}$",
          "$2.0\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta E_p = mgh = (4)(9.8)(5) = 196.0\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A battery with $\\text{EMF} = 9\\,\\text{V}$ and internal resistance $r = 2\\,\\Omega$ is connected to load $R = 4\\,\\Omega$. Find the terminal potential difference.",
        "options": [
          "$6.00\\,\\text{V}$",
          "$9\\,\\text{V}$",
          "$3.00\\,\\text{V}$",
          "$1.50\\,\\text{V}$",
          "$3.00\\,\\text{V}$"
        ],
        "answer": 0,
        "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{9}{6}$. Terminal $V = IR = 6.00\\,\\text{V}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "How much heat is required to warm 1\\,\\text{kg}$ of liquid water ($c = 4200\\,\\text{J kg}^{-1}\\,\\text{K}^{-1}$) by $\\Delta T = 20\\,\\text{K}$?",
        "options": [
          "$84000\\,\\text{J}$",
          "$42000\\,\\text{J}$",
          "$168000\\,\\text{J}$",
          "$84000\\,\\text{J}$",
          "$20\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$Q = mc\\Delta T = (1)(4200)(20) = 84000\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A car of mass 1200\\,\\text{kg}$ negotiates a curve of radius 45\\,\\text{m}$ at speed 15\\,\\text{m s}^{-1}$. Compute the centripetal force required.",
        "options": [
          "$6000\\,\\text{N}$",
          "$12000\\,\\text{N}$",
          "$3000\\,\\text{N}$",
          "$18000\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "$F_c = \\frac{mv^2}{r} = \\frac{1200 \\times 15^2}{45} = 6000\\,\\text{N}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A light beam in air ($n_1 = 1.0$) enters glass ($n_2 = 1.50$) at angle of incidence $\\theta_1 = 30^\\circ$. What is the value of $\\sin(\\theta_2)$?",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$",
          "$\\frac{\\sqrt{3}}{3}$"
        ],
        "answer": 0,
        "explanation": "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies (1.0)\\sin(30^\\circ) = 1.50\\sin\\theta_2 \\implies 0.5 = 1.5\\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{1}{3}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "A charged particle enters a uniform magnetic field with velocity perpendicular to the field lines. What trajectory does it follow?",
        "options": [
          "A circle in the plane perpendicular to the magnetic field",
          "A straight line with uniform acceleration",
          "A parabolic path along the magnetic field",
          "A hyperbolic escape path",
          "A stationary oscillation"
        ],
        "answer": 0,
        "explanation": "Because the magnetic force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ is always normal to velocity, speed is constant and motion is uniform circular."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A spring of stiffness $k = 200\\,\\text{N m}^{-1}$ is extended by $\\Delta x = 0.2\\,\\text{m}$. What is the stored elastic potential energy?",
        "options": [
          "$4.000\\,\\text{J}$",
          "$40.00\\,\\text{J}$",
          "$8.000\\,\\text{J}$",
          "$20.000\\,\\text{J}$",
          "$1.000\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$E_e = \\frac{1}{2}k(\\Delta x)^2 = 0.5(200)(0.2^2) = 4.000\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Light of wavelength $\\lambda = 500\\,\\text{nm}$ illuminates a diffraction grating with $500\\,\\text{lines per mm}$. What is the highest observable order $m$?",
        "options": [
          "$4$",
          "$2$",
          "$5$",
          "$3$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "Slit spacing $d = \\frac{10^{-3}\\,\\text{m}}{500} = 2 \\times 10^{-6}\\,\\text{m}$. Max order is $m \\le \\frac{d}{\\lambda} = \\frac{2 \\times 10^{-6}}{500 \\times 10^{-9}} = 4$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "Two parallel metal plates separated by 0.05\\,\\text{m}$ have a potential difference of 200\\,\\text{V}$. Find the electric field strength $E$.",
        "options": [
          "$4000\\,\\text{V m}^{-1}$",
          "$2000\\,\\text{V m}^{-1}$",
          "$8000\\,\\text{V m}^{-1}$",
          "$10\\,\\text{V m}^{-1}$",
          "$0\\,\\text{V m}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$E = \\frac{V}{d} = \\frac{200}{0.05} = 4000\\,\\text{V m}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A uniform plank of length $4.0\\,\\text{m}$ and weight $200\\,\\text{N}$ is supported at its midpoint. What force applied at one end maintains equilibrium?",
        "options": [
          "$0\\,\\text{N}$",
          "$100\\,\\text{N}$",
          "$200\\,\\text{N}$",
          "$50\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "Because the pivot is at the centre of mass, the plank's weight exerts zero torque about the pivot, requiring zero force to maintain balance."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A wire of resistance $R$ is drawn out so that its length is doubled while volume is conserved. What is its new resistance?",
        "options": [
          "$4R$",
          "$2R$",
          "$R$",
          "$\\frac{1}{2}R$",
          "$\\frac{1}{4}R$"
        ],
        "answer": 0,
        "explanation": "Doubling length ($L \\to 2L$) halves cross-sectional area ($A \\to A/2$). Resistance $R' = \\rho \\frac{2L}{A/2} = 4R$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "If the absolute temperature of an ideal gas is quadrupled, what factor does the root-mean-square molecular speed $c_{\\text{rms}}$ increase by?",
        "options": [
          "Factor of 2",
          "Factor of 4",
          "Factor of 16",
          "Factor of 1.41",
          "Remains unchanged"
        ],
        "answer": 0,
        "explanation": "$c_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} \\propto \\sqrt{T}$. Quadrupling $T$ multiplies speed by $\\sqrt{4} = 2$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "At what launch angle $\\theta$ above horizontal does a projectile achieve maximum horizontal range on level ground?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$15^\\circ$"
        ],
        "answer": 0,
        "explanation": "Range $R = \\frac{u^2 \\sin(2\\theta)}{g}$ is maximized when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A stretched string of length $L$ vibrates in its fundamental harmonic mode with nodes at both fixed ends. What is the wavelength $\\lambda_1$?",
        "options": [
          "$2L$",
          "$L$",
          "$\\frac{L}{2}$",
          "$4L$",
          "$\\frac{2L}{3}$"
        ],
        "answer": 0,
        "explanation": "Fundamental mode consists of a single loop: $L = \\frac{\\lambda}{2} \\implies \\lambda = 2L$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "According to Faraday's Law, the induced electromotive force in a circuit is directly proportional to the:",
        "options": [
          "Time rate of change of magnetic flux linkage",
          "Total resistance of the circuit loop",
          "Steady current flowing in the coil",
          "Temperature of the magnet",
          "Square of the magnetic flux"
        ],
        "answer": 0,
        "explanation": "Faraday's Law states $\\mathcal{E} = -\\frac{d\\Phi}{dt}$, so induced EMF equals the rate of change of flux linkage."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A constant force of 30\\,\\text{N}$ acts on an object for a duration of $\\Delta t = 0.2\\,\\text{s}$. What impulse is imparted?",
        "options": [
          "$6.00\\,\\text{N s}$",
          "$12.00\\,\\text{N s}$",
          "$150.0\\,\\text{N s}$",
          "$3.00\\,\\text{N s}$",
          "$30.2\\,\\text{N s}$"
        ],
        "answer": 0,
        "explanation": "$\\text{Impulse} = F \\Delta t = (30)(0.2) = 6.00\\,\\text{N s}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Why does an observer perceive a higher pitch when an emergency siren approaches at constant velocity?",
        "options": [
          "The emitted wavefronts are compressed in the forward direction, reducing observed wavelength",
          "The velocity of sound in the air increases toward the observer",
          "The source emits sound with a physically higher intrinsic frequency",
          "The acoustic amplitude of the sound wave increases linearly",
          "Air molecules accelerate along with the vehicle"
        ],
        "answer": 0,
        "explanation": "Motion towards the listener crowds wavefronts, shortening perceived wavelength $\\lambda$. Since wave speed $v$ in air is constant, observed frequency $f = \\frac{v}{\\lambda}$ rises."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "What is the theoretical ratio of surface escape velocity $v_{\\text{esc}}$ to circular surface orbital speed $v_{\\text{orb}}$ for any spherical planet?",
        "options": [
          "$\\sqrt{2}$",
          "$2$",
          "$1$",
          "$\\frac{1}{\\sqrt{2}}$",
          "$4$"
        ],
        "answer": 0,
        "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$ and $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$, giving $\\frac{v_{\\text{esc}}}{v_{\\text{orb}}} = \\sqrt{2}$."
      }
    ],
    "Chemistry": [
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "What is the ground-state electron configuration of neutral Magnesium (Z=12)?",
        "options": [
          "$1s^2 2s^2 2p^6 3s^2$",
          "$1s^2 2s^2 2p^6 3d^1$",
          "$1s^2 2s^2 2p^5 3s^2$",
          "$1s^2 2s^2 2p^6 4s^1$",
          "$1s^2 2s^2 2p^6 3s^2 3d^1$"
        ],
        "answer": 0,
        "explanation": "Electrons populate orbitals in order of ascending energy according to the Aufbau principle: $1s \\to 2s \\to 2p \\to 3s \\to 3p$. For Magnesium (Z=12), this is $1s^2 2s^2 2p^6 3s^2$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "Given $\\sum \\Delta H_f^\\circ(\\text{products}) = -1500\\,\\text{kJ mol}^{-1}$ and $\\sum \\Delta H_f^\\circ(\\text{reactants}) = -500\\,\\text{kJ mol}^{-1}$, calculate the reaction enthalpy $\\Delta H_{\\text{rxn}}^\\circ$.",
        "options": [
          "$-1000\\,\\text{kJ mol}^{-1}$",
          "$1000\\,\\text{kJ mol}^{-1}$",
          "$-2000\\,\\text{kJ mol}^{-1}$",
          "$-1500\\,\\text{kJ mol}^{-1}$",
          "$-500\\,\\text{kJ mol}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta H^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants}) = (-1500) - (-500) = -1000\\,\\text{kJ mol}^{-1}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "State the official IUPAC systematic name for the organic molecule with formula $\\text{CH_3COOH}$.",
        "options": [
          "Ethanoic acid",
          "Methanol",
          "Methanoic acid",
          "Butanone",
          "Ethyl methanoate"
        ],
        "answer": 0,
        "explanation": "The molecular structure $\\text{CH_3COOH}$ matches the functional group of Ethanoic acid."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Predict the molecular geometry and characteristic bond angle of Ammonia (NH_3) using VSEPR theory.",
        "options": [
          "Trigonal pyramidal, ~107°",
          "Linear, 180°",
          "Tetrahedral, 109.5°",
          "T-shaped, 90°",
          "Square planar, 90°"
        ],
        "answer": 0,
        "explanation": "Minimizing electron pair repulsions gives Ammonia (NH_3) its characteristic geometry: Trigonal pyramidal, ~107°."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "For the exothermic equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ ($\\Delta H < 0$), which combination shifts position towards products?",
        "options": [
          "Decreasing temperature and increasing total pressure",
          "Increasing temperature and decreasing total pressure",
          "Introducing an iron catalyst at constant volume",
          "Decreasing total pressure only",
          "Selectively withdrawing nitrogen gas"
        ],
        "answer": 0,
        "explanation": "Lower temperature favours the forward exothermic direction; higher pressure favours the side with fewer gas moles (2 moles vs 4 moles)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "Hydrolysis of 2-bromo-2-methylpropane in aqueous hydroxide proceeds predominantly via which pathway?",
        "options": [
          "$S_N1$ mechanism via a stable tertiary carbocation intermediate",
          "$S_N2$ mechanism via a single concerted transition state",
          "Electrophilic addition across a double bond",
          "Free-radical chain substitution",
          "Elimination forming exclusively 2-methylprop-1-ene"
        ],
        "answer": 0,
        "explanation": "Tertiary haloalkanes undergo $S_N1$ hydrolysis because steric hindrance impedes backside nucleophilic attack while the tertiary carbocation is stabilised by hyperconjugation."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why is the first ionisation energy of oxygen slightly lower than that of nitrogen?",
        "options": [
          "Spin-pair repulsion between the two paired electrons in one of oxygen's 2p orbitals",
          "Oxygen has greater shielding from core electrons",
          "Nitrogen's 2p electrons reside in a higher shell",
          "Oxygen has a larger atomic radius than nitrogen",
          "Oxygen possesses fewer protons than nitrogen"
        ],
        "answer": 0,
        "explanation": "Nitrogen has a half-filled $2p^3$ subshell. Oxygen's fourth 2p electron must pair up, and mutual spin-pair repulsion eases its removal."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "Calculate the pH of a hydrochloric acid solution with $[\\text{H}^+] = 0.001\\,\\text{mol dm}^{-3}$.",
        "options": [
          "$3.00$",
          "$11.00$",
          "$4.00$",
          "$2.00$",
          "$7.00$"
        ],
        "answer": 0,
        "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(0.001) = 3.00$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following molecules possesses a chiral carbon centre and exhibits optical isomerism?",
        "options": [
          "Butan-2-ol",
          "Propan-2-ol",
          "Ethanol",
          "Propane",
          "Methanol"
        ],
        "answer": 0,
        "explanation": "In butan-2-ol, carbon-2 is bonded to 4 distinct ligands: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{C}_2\\text{H}_5$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does water have an anomalously high boiling point compared to hydrogen sulfide?",
        "options": [
          "Strong intermolecular hydrogen bonding between electronegative oxygen and hydrogen",
          "Covalent O-H bonds inside water molecules are stronger than S-H bonds",
          "Hydrogen sulfide exhibits stronger London dispersion forces",
          "Water is non-polar while H2S is ionic",
          "Sulfur is more electronegative than oxygen"
        ],
        "answer": 0,
        "explanation": "Oxygen is small and strongly electronegative, creating extensive networks of intermolecular hydrogen bonds that require large thermal energy to disrupt."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "For a reaction with empirical rate equation $\\text{Rate} = k[A]^2 [B]$, what is the overall reaction order?",
        "options": [
          "Third order",
          "Second order",
          "First order",
          "Zero order",
          "Fourth order"
        ],
        "answer": 0,
        "explanation": "The overall order is the sum of exponents in the rate law: $2 + 1 = 3$ (third order)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "What is the major organic product when propene reacts with hydrogen bromide ($\\text{HBr}$)?",
        "options": [
          "2-bromopropane",
          "1-bromopropane",
          "1,2-dibromopropane",
          "Propane",
          "Bromopropene"
        ],
        "answer": 0,
        "explanation": "Markovnikov addition yields the more stable secondary carbocation intermediate, producing 2-bromopropane as the major product."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Determine the number of moles in 25\\,\\text{cm}^3$ of a 0.2\\,\\text{mol dm}^{-3}$ solution.",
        "options": [
          "$0.0050\\,\\text{mol}$",
          "$0.050\\,\\text{mol}$",
          "$0.00050\\,\\text{mol}$",
          "$5\\,\\text{mol}$",
          "$125.0\\,\\text{mol}$"
        ],
        "answer": 0,
        "explanation": "$n = C \\times V = 0.2 \\times \\frac{25}{1000} = 0.0050\\,\\text{mol}$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "How does the addition of a positive catalyst increase the rate of a chemical reaction?",
        "options": [
          "Provides an alternative mechanism with lower activation energy",
          "Increases the average kinetic energy of reactant molecules",
          "Increases the total enthalpy of the products",
          "Decreases the total volume of the reaction container",
          "Increases the frequency of collision of all particles"
        ],
        "answer": 0,
        "explanation": "A catalyst lowers the activation energy $E_a$, so a greater proportion of molecular collisions satisfy $E \\ge E_a$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "What functional group is produced when a secondary alcohol such as propan-2-ol is heated under reflux with acidified dichromate?",
        "options": [
          "Ketone",
          "Carboxylic acid",
          "Aldehyde",
          "Ester",
          "Alkene"
        ],
        "answer": 0,
        "explanation": "Oxidation of a secondary alcohol produces a ketone; it cannot undergo further oxidation under mild conditions."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does solid sodium chloride not conduct electricity, while molten sodium chloride conducts readily?",
        "options": [
          "Ions are held in fixed lattice positions in the solid but are free to move in the molten liquid",
          "Electrons become delocalised only during the phase transition",
          "Ionic bonds convert to covalent bonds upon melting",
          "Sodium atoms lose their charge in the liquid phase",
          "Solid NaCl contains neutral atoms rather than ions"
        ],
        "answer": 0,
        "explanation": "Electrical conduction requires mobile charge carriers. In molten NaCl, the giant ionic lattice breaks down, freeing $\\text{Na}^+$ and $\\text{Cl}^-$ ions to migrate."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "In an Arrhenius plot of $\\ln k$ against $\\frac{1}{T}$, what physical quantity does the gradient represent?",
        "options": [
          "$-\\frac{E_a}{R}$",
          "$\\frac{E_a}{R}$",
          "$-E_a$",
          "$\\ln A$",
          "$-RT$"
        ],
        "answer": 0,
        "explanation": "Taking logs of $k = A e^{-E_a/RT}$ gives $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Gradient is $-\\frac{E_a}{R}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "In TLC, a dye spot travels 4\\,\\text{cm}$ while the solvent front advances $10.0\\,\\text{cm}$. What is the $R_f$ value?",
        "options": [
          "$0.40$",
          "$4.0$",
          "$0.60$",
          "$2.50$",
          "$0.20$"
        ],
        "answer": 0,
        "explanation": "$R_f = \\frac{\\text{distance travelled by spot}}{\\text{distance travelled by solvent}} = \\frac{4}{10.0} = 0.40$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does magnesium have a significantly higher melting point than sodium in Period 3?",
        "options": [
          "Magnesium ions ($Mg^{2+}$) have higher charge and release 2 delocalised electrons per atom into the sea",
          "Magnesium forms giant covalent lattices whereas sodium is simple molecular",
          "Sodium has a higher atomic mass than magnesium",
          "Magnesium has more electron shells than sodium",
          "Sodium forms weaker covalent bonds"
        ],
        "answer": 0,
        "explanation": "$\\text{Mg}^{2+}$ has higher charge density and twice as many delocalised electrons as $\\text{Na}^+$, resulting in stronger electrostatic attraction."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "Which mixture forms an acidic buffer capable of resisting pH changes on addition of small amounts of acid or alkali?",
        "options": [
          "Ethanoic acid and sodium ethanoate",
          "Hydrochloric acid and sodium hydroxide in equal moles",
          "Hydrochloric acid and sodium chloride",
          "Pure distilled water",
          "Concentrated ammonia and sodium chloride"
        ],
        "answer": 0,
        "explanation": "An acidic buffer requires a weak acid (e.g. $\\text{CH}_3\\text{COOH}$) and its conjugate base salt (e.g. $\\text{CH}_3\\text{COONa}$)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which reactants combine in the presence of an acid catalyst to produce ethyl ethanoate?",
        "options": [
          "Ethanoic acid and ethanol",
          "Methanoic acid and propanol",
          "Ethanol and ethanal",
          "Ethylamine and ethanoic acid",
          "Ethene and steam"
        ],
        "answer": 0,
        "explanation": "$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Chlorine comprises $^{35}\\text{Cl}$ (70%) and $^{37}\\text{Cl}$ (30%). Calculate its relative atomic mass $A_r$.",
        "options": [
          "$35.60$",
          "$36.00$",
          "$36.10$",
          "$35.10$",
          "$35.00$"
        ],
        "answer": 0,
        "explanation": "$A_r = \\frac{35(70) + 37(30)}{100} = 35.60$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "What is the equilibrium constant $K_c$ expression for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$?",
        "options": [
          "$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$",
          "$K_c = \\frac{[\\text{SO}_2]^2 [\\text{O}_2]}{[\\text{SO}_3]^2}$",
          "$K_c = \\frac{2[\\text{SO}_3]}{2[\\text{SO}_2] + [\\text{O}_2]}$",
          "$K_c = [\\text{SO}_3]^2 - [\\text{SO}_2]^2 [\\text{O}_2]$",
          "$K_c = \\frac{[\\text{SO}_3]}{[\\text{SO}_2][\\text{O}_2]}$"
        ],
        "answer": 0,
        "explanation": "Products over reactants, raised to stoichiometric powers: $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following represents a termination step in the free-radical chlorination of methane?",
        "options": [
          "$\\text{Cl}^\\bullet + \\text{Cl}^\\bullet \\to \\text{Cl}_2$",
          "$\\text{Cl}_2 \\to 2\\text{Cl}^\\bullet$",
          "$\\text{CH}_4 + \\text{Cl}^\\bullet \\to \\text{CH}_3^\\bullet + \\text{HCl}$",
          "$\\text{CH}_3^\\bullet + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$",
          "$\\text{CH}_4 \\to \\text{CH}_3^\\bullet + \\text{H}^\\bullet$"
        ],
        "answer": 0,
        "explanation": "Termination involves two radical species combining to form a stable covalent bond, removing radicals from the system."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Why can graphite conduct electricity while diamond cannot?",
        "options": [
          "Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along layers",
          "Graphite consists of ionic bonds between layers",
          "Diamond has a smaller bandgap than graphite",
          "Graphite contains mobile carbon ions",
          "Diamond has weak intermolecular forces"
        ],
        "answer": 0,
        "explanation": "In graphite, each carbon is $sp^2$ hybridized with 3 covalent bonds; the fourth valence electron is delocalised across planar hexagonal sheets."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "What is the oxidation number of manganese in the permanganate ion $\\text{MnO}_4^-$?",
        "options": [
          "$+7$",
          "$+4$",
          "$+2$",
          "$+6$",
          "$+5$"
        ],
        "answer": 0,
        "explanation": "$x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "An intense, sharp absorption band at $\\sim 1715\\,\\text{cm}^{-1}$ in an infrared spectrum indicates which functional group?",
        "options": [
          "Carbonyl (C=O)",
          "Alcohol (O-H broad stretch)",
          "Alkyne (C≡C)",
          "Alkane (C-C single bond)",
          "Amine (N-H stretch)"
        ],
        "answer": 0,
        "explanation": "The $\\text{C=O}$ double bond has a strong dipole change during stretching, producing a sharp characteristic peak between $1680 - 1750\\,\\text{cm}^{-1}$."
      }
    ],
    "Biology": [
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "What is the primary cellular function of Rough Endoplasmic Reticulum in eukaryotic cells?",
        "options": [
          "Synthesis and folding of secretory proteins",
          "Cellulose cell wall synthesis",
          "Active transport of sodium across myelin sheath",
          "DNA replication proofreading",
          "Glycogen granule storage"
        ],
        "answer": 0,
        "explanation": "In cell ultrastructure, the distinct physiological role of Rough Endoplasmic Reticulum is Synthesis and folding of secretory proteins."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "A double-stranded DNA sample contains 24% Adenine. What percentage of Cytosine does it contain?",
        "options": [
          "26%",
          "24%",
          "48%",
          "76%",
          "50%"
        ],
        "answer": 0,
        "explanation": "By Chargaff's rules, $%A = \\%T = 24\\%$. $%G + \\%C = 100 - 48 = 52\\%$. Since $%G = \\%C$, Cytosine is $\\frac{52}{2} = 26\\%$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "During ventricular systole in the human cardiac cycle, what is the operational state of the valves?",
        "options": [
          "Atrioventricular valves closed; semilunar valves open",
          "Atrioventricular valves open; semilunar valves closed",
          "Both atrioventricular and semilunar valves are open",
          "Both atrioventricular and semilunar valves are closed",
          "Tricuspid open; bicuspid closed"
        ],
        "answer": 0,
        "explanation": "Ventricular pressure exceeds atrial pressure, snapping AV valves shut (first heart sound), while exceeding arterial pressure to open semilunar valves."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "A cell with actual diameter 40\\,\\mu\\text{m}$ is viewed under magnification $\\times 200$. Calculate its image size in mm.",
        "options": [
          "$8.00\\,\\text{mm}$",
          "$80.0\\,\\text{mm}$",
          "$0.800\\,\\text{mm}$",
          "$8000\\,\\text{mm}$",
          "$5.00\\,\\text{mm}$"
        ],
        "answer": 0,
        "explanation": "$I = A \\times M = 40\\,\\mu\\text{m} \\times 200 = 8000\\,\\mu\\text{m} = 8.00\\,\\text{mm}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "If a DNA template strand reads $3'-TAC-CGA-TTA-5'$, what is the complementary mRNA sequence produced?",
        "options": [
          "$5'-AUG-GCU-AAU-3'$",
          "$5'-TAC-CGA-TTA-3'$",
          "$3'-AUG-GCU-AAU-5'$",
          "$5'-AUG-AAA-CCC-3'$",
          "$3'-UAC-GGA-CAU-5'$"
        ],
        "answer": 0,
        "explanation": "RNA synthesis pairs $T\\to A, A\\to U, C\\to G, G\\to C$ antiparallel to template: $5'-AUG-GCU-AAU-3'$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which feature of human lungs is an adaptation specifically maximizing diffusion rate according to Fick's Law?",
        "options": [
          "A single layer of flattened squamous epithelial cells minimizing diffusion pathway",
          "Cartilage rings preventing bronchial collapse",
          "Goblet cells secreting protective mucus",
          "Pleural fluid lubricating thoracic movements",
          "Intercostal muscles expanding the rib cage"
        ],
        "answer": 0,
        "explanation": "Fick's law states diffusion rate is inversely proportional to barrier thickness. Squamous epithelium provides an ultra-thin pathway (~0.5 $\\mu$m)."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "How does a competitive inhibitor influence the enzyme kinetic parameters $V_{\\text{max}}$ and $K_m$?",
        "options": [
          "$V_{\\text{max}}$ remains unchanged; $K_m$ increases",
          "$V_{\\text{max}}$ decreases; $K_m$ remains unchanged",
          "$V_{\\text{max}}$ decreases; $K_m$ decreases",
          "Both $V_{\\text{max}}$ and $K_m$ increase",
          "Both $V_{\\text{max}}$ and $K_m$ remain unchanged"
        ],
        "answer": 0,
        "explanation": "High substrate concentrations displace competitive inhibitors from the active site ($V_{\\text{max}}$ unchanged), but higher $[S]$ is required for half-maximal velocity ($K_m$ increases)."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "In a monohybrid cross $Aa \\times Aa$ producing 400$ total offspring, how many are expected to display the recessive phenotype?",
        "options": [
          "$100$",
          "$300$",
          "$200$",
          "$50$",
          "$400$"
        ],
        "answer": 0,
        "explanation": "Mendelian monohybrid cross produces a $3:1$ ratio. The recessive frequency is $\\frac{1}{4} \\times 400 = 100$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "Which ion movement causes the initial rapid depolarization phase of a neuronal action potential?",
        "options": [
          "Rapid influx of $\\text{Na}^+$ through voltage-gated sodium channels",
          "Efflux of $\\text{K}^+$ through voltage-gated potassium channels",
          "Active transport of $3\\text{Na}^+$ out and $2\\text{K}^+$ in",
          "Influx of $\\text{Cl}^-$ through GABA receptor channels",
          "Efflux of calcium from the endoplasmic reticulum"
        ],
        "answer": 0,
        "explanation": "Depolarization to threshold opens voltage-gated $\\text{Na}^+$ channels; sodium ions rush into the axon down their electrochemical gradient."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which cellular transport mechanism moves solutes against a concentration gradient utilizing ATP hydrolysis?",
        "options": [
          "Primary active transport via carrier protein pumps",
          "Facilitated diffusion through channel proteins",
          "Simple passive diffusion across lipid bilayer",
          "Osmosis via aquaporin water channels",
          "Bulk gas exchange across cell membrane"
        ],
        "answer": 0,
        "explanation": "Active transport moves molecules from low to high concentration, which requires energy derived from ATP."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What is the expected phenotypic ratio in the $F_2$ generation of a dihybrid cross $AaBb \\times AaBb$ with unlinked genes?",
        "options": [
          "$9 : 3 : 3 : 1$",
          "$1 : 1 : 1 : 1$",
          "$3 : 1$",
          "$9 : 7$",
          "$12 : 3 : 1$"
        ],
        "answer": 0,
        "explanation": "By Mendel's Law of Independent Assortment, two unlinked heterozygous genes assort independently to produce a $9:3:3:1$ phenotypic ratio."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "At a chemical synapse, action potential arrival at the axon terminal directly triggers the opening of:",
        "options": [
          "Voltage-gated $\\text{Ca}^{2+}$ channels",
          "Voltage-gated $\\text{K}^+$ channels only",
          "Ligand-gated $\\text{Cl}^-$ channels",
          "Mechanically-gated sodium channels",
          "Leak potassium channels"
        ],
        "answer": 0,
        "explanation": "Depolarization activates voltage-gated $\\text{Ca}^{2+}$ channels. Inflowing calcium stimulates neurotransmitter vesicle fusion with the presynaptic membrane."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "A plant cell with solute potential $\\Psi_s = -600\\,\\text{kPa}$ and pressure potential $\\Psi_p = +200\\,\\text{kPa}$ has net water potential $\\Psi$ of:",
        "options": [
          "$-400\\,\\text{kPa}$",
          "$-800\\,\\text{kPa}$",
          "$+400\\,\\text{kPa}$",
          "$0\\,\\text{kPa}$",
          "$-1200\\,\\text{kPa}$"
        ],
        "answer": 0,
        "explanation": "$\\Psi = \\Psi_s + \\Psi_p = (-600) + (+200) = -400\\,\\text{kPa}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which type of mutation in a gene's coding region is most likely to alter all downstream amino acids?",
        "options": [
          "Single nucleotide insertion causing a frameshift",
          "Silent base substitution in the wobble position",
          "Conservative missense substitution",
          "Inversion of three complete codons",
          "Duplication of an entire promoter"
        ],
        "answer": 0,
        "explanation": "Adding a single base shifts the reading frame of all subsequent codons, completely altering the synthesized polypeptide."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "How does antidiuretic hormone (ADH) promote water retention in the mammalian kidney?",
        "options": [
          "Stimulates insertion of aquaporins into collecting duct luminal membranes",
          "Inhibits sodium pumps in the ascending limb of Henle",
          "Actively secretes water into the renal medulla",
          "Constricts the afferent arteriole to stop glomerular filtration",
          "Hydrolyses urea in the loop of Henle"
        ],
        "answer": 0,
        "explanation": "ADH binds to basolateral receptors, triggering insertion of aquaporin-2 water channels into the collecting duct apical membrane to reabsorb water."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "During which phase of mitosis do sister chromatids disjoin and migrate toward opposite spindle poles?",
        "options": [
          "Anaphase",
          "Metaphase",
          "Prophase",
          "Telophase",
          "Interphase"
        ],
        "answer": 0,
        "explanation": "In anaphase, centromeric cohesins are degraded and kinetochore microtubules shorten, drawing sister chromatids to opposite poles."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which enzyme is responsible for breaking hydrogen bonds to unwind the double helix during replication?",
        "options": [
          "DNA Helicase",
          "DNA Polymerase III",
          "DNA Ligase",
          "RNA Primase",
          "Topoisomerase"
        ],
        "answer": 0,
        "explanation": "DNA Helicase moves along the DNA phosphodiester backbone, disrupting base pair hydrogen bonds to advance the replication fork."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Approximately what proportion of energy is transferred from one trophic level to the next in food chains?",
        "options": [
          "$10\\%$",
          "$50\\%$",
          "$90\\%$",
          "$1\\%$",
          "$25\\%$"
        ],
        "answer": 0,
        "explanation": "Trophic efficiency is approximately 10%; ~90% of energy is dissipated as respiratory heat, excretory waste, and unconsumed material."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "Where does a non-competitive allosteric inhibitor bind on an enzyme?",
        "options": [
          "At a distinct regulatory allosteric site separate from the catalytic active site",
          "Directly inside the active site blocking substrate binding",
          "To the substrate molecule preventing association",
          "Exclusively to the product molecule",
          "To the aqueous solvent altering local pH"
        ],
        "answer": 0,
        "explanation": "Allosteric inhibitors bind to a non-active site, inducing a conformational change that alters active site geometry and catalytic activity."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Hard",
        "question": "A mother is a carrier ($X^H X^h$) for X-linked haemophilia and the father is unaffected ($X^H Y$). What is the probability their son has haemophilia?",
        "options": [
          "$50\\%$",
          "$25\\%$",
          "$0\\%$",
          "$100\\%$",
          "$75\\%$"
        ],
        "answer": 0,
        "explanation": "A son receives the Y chromosome from the father. There is a 50% chance he inherits $X^h$ from his mother, resulting in haemophilia."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "What is the specific role of calcium ions ($\\text{Ca}^{2+}$) in skeletal muscle contraction?",
        "options": [
          "Binds to troponin, shifting tropomyosin away from myosin-binding sites on actin",
          "Phosphorylates the myosin head directly",
          "Hydrolyses ATP inside the sarcoplasmic reticulum",
          "Blocks sodium channels on the sarcolemma",
          "Breaks down acetylcholine in the synaptic cleft"
        ],
        "answer": 0,
        "explanation": "$\\text{Ca}^{2+}$ binds to troponin C, triggering a conformational movement of tropomyosin that uncovers the active binding sites on actin."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "What chemical bonds primarily stabilize the secondary structure ($\\alpha$-helices and $\\beta$-sheets) of proteins?",
        "options": [
          "Hydrogen bonds between main-chain carbonyl and amide groups",
          "Disulfide bridges between cysteine side chains",
          "Ionic interactions between acidic and basic R-groups",
          "Hydrophobic interactions between aliphatic residues",
          "Covalent peptide bonds between adjacent amino acids"
        ],
        "answer": 0,
        "explanation": "Secondary structure is stabilized by regular hydrogen bonds between peptide backbone $N-H$ and $C=O$ groups."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What occurs during the annealing stage ($55^\\circ\\text{C}-65^\\circ\\text{C}$) of a PCR cycle?",
        "options": [
          "Oligonucleotide primers hybridize specifically to complementary flanking sequences on template strands",
          "Double-stranded DNA denatures into single strands",
          "Taq polymerase synthesizes daughter strands at its optimal rate",
          "Residual primers are degraded by nucleases",
          "dNTPs are phosphorylated to form ATP"
        ],
        "answer": 0,
        "explanation": "At annealing temperature, short single-stranded primers anneal by complementary base pairing to the template DNA strands."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which endocrine cells synthesize and secrete insulin in response to elevated blood glucose?",
        "options": [
          "Beta ($\\beta$) cells of pancreatic islets of Langerhans",
          "Alpha ($\\alpha$) cells of the pancreas",
          "Hepatocytes in the liver",
          "Adrenal cortex steroidogenic cells",
          "Pituitary somatotrophs"
        ],
        "answer": 0,
        "explanation": "Pancreatic $\\beta$-cells detect elevated blood glucose and release insulin to stimulate glucose uptake and glycogenesis."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which piece of evidence strongly supports the endosymbiotic origin of mitochondria?",
        "options": [
          "Mitochondria possess circular naked DNA and 70S ribosomes like prokaryotes",
          "They have a single phospholipid bilayer membrane",
          "They can synthesize glucose from carbon dioxide",
          "They lack any transport proteins in their envelope",
          "They contain 80S ribosomes identical to the cytoplasm"
        ],
        "answer": 0,
        "explanation": "Mitochondria contain their own circular genome, 70S ribosomes, divide by binary fission, and have a double membrane."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "The observation that 61 mRNA codons code for only 20 standard amino acids indicates that the code is:",
        "options": [
          "Degenerate",
          "Universal",
          "Non-overlapping",
          "Ambiguous",
          "Overlapping"
        ],
        "answer": 0,
        "explanation": "The genetic code is degenerate (redundant) because multiple synonymous codons specify the same amino acid."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "According to the cohesion-tension theory, what is the primary driving force pulling water up through xylem vessels?",
        "options": [
          "Negative hydrostatic pressure generated by evaporation from mesophyll cell walls",
          "Active ATP pumping by root cortical cells",
          "Positive root pressure pushing water from below",
          "Phloem osmotic pressure gradient",
          "Centripetal force from wind movement"
        ],
        "answer": 0,
        "explanation": "Transpiration from stomata creates tension (negative pressure) in leaf xylem, pulling water upward due to hydrogen-bonded cohesion."
      }
    ]
  },
  "full_mock_3": {
    "Mathematics 1": [
      {
        "module": "Mathematics 1",
        "topic": "Surds & Indices",
        "difficulty": "Medium",
        "question": "Rationalise the denominator and simplify fully: $\\frac{2}{\\sqrt{6} - \\sqrt{5}}$.",
        "options": [
          "$2(\\sqrt{6} + \\sqrt{5})$",
          "$2(\\sqrt{6} - \\sqrt{5})$",
          "$\\frac{2(\\sqrt{6} + \\sqrt{5})}{11}$",
          "$2\\sqrt{5}$",
          "$2\\sqrt{6}$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by the conjugate $(\\sqrt{6} + \\sqrt{5})$. The denominator simplifies to $(6) - (5) = 1$. The result is $2(\\sqrt{6} + \\sqrt{5})$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "Find the gradient of the straight line perpendicular to the line $y = 4x + 3$.",
        "options": [
          "$-\\frac{1}{4}$",
          "$4$",
          "$-4$",
          "$\\frac{1}{4}$",
          "$3$"
        ],
        "answer": 0,
        "explanation": "For perpendicular lines, $m_1 m_2 = -1$. With $m_1 = 4$, the perpendicular gradient is $m_2 = -\\frac{1}{4}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Easy",
        "question": "Given the curve $y = 5x^{2} - 10x$, calculate the value of the derivative $\\frac{dy}{dx}$ at $x = 1$.",
        "options": [
          "$0$",
          "$10$",
          "$-5$",
          "$5$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Differentiating: $\\frac{dy}{dx} = 10x^{1} - 10$. At $x = 1$, this equals $10(1^{1}) - 10 = 0$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "For what range of real values of $k$ does the equation $x^2 - 2kx + 25 = 0$ have two distinct real roots?",
        "options": [
          "$k < -5$ or $k > 5$",
          "$-5 < k < 5$",
          "$k = 5$",
          "$k \\ge 0$",
          "$k > 5$ only"
        ],
        "answer": 0,
        "explanation": "Distinct real roots require discriminant $\\Delta > 0$: $(-2k)^2 - 4(1)(25) > 0 \\implies 4k^2 - 100 > 0 \\implies k^2 > 25 \\implies k < -5$ or $k > 5$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Easy",
        "question": "A circle is given by $(x - -1)^2 + (y + 1)^2 = 25$. Identify its center and radius.",
        "options": [
          "Center $(-1, -1)$, radius $r = 5$",
          "Center $(--1, 1)$, radius $r = 5$",
          "Center $(-1, -1)$, radius $r = 25$",
          "Center $(0, 0)$, radius $r = 5$",
          "Center $(-1, 1)$, radius $r = 5$"
        ],
        "answer": 0,
        "explanation": "Standard circle form $(x - h)^2 + (y - k)^2 = r^2$ gives center $(h, k) = (-1, -1)$ and radius $r = \\sqrt{25} = 5$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "In how many distinct ways can a committee of $3$ individuals be selected from a pool of $9$ candidates?",
        "options": [
          "$84$",
          "$252$",
          "$94$",
          "$79$",
          "$27$"
        ],
        "answer": 0,
        "explanation": "Selection without regard to order is evaluated by combinations: $\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Solve for $x$ in the equation $\\log_{5}(x + 5) = 2$.",
        "options": [
          "$20$",
          "$25$",
          "$15$",
          "$10$",
          "$32$"
        ],
        "answer": 0,
        "explanation": "Rewriting in exponential form: $x + 5 = 5^{2} = 25 \\implies x = 25 - 5 = 20$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "Using trigonometric identities, simplify $2\\sin(30^\\circ)\\cos(30^\\circ)$.",
        "options": [
          "$\\sin(60^\\circ)$",
          "$\\cos(60^\\circ)$",
          "$\\tan(60^\\circ)$",
          "$\\frac{1}{2}\\sin(60^\\circ)$",
          "$2\\sin(30^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the double-angle identity $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$, substituting $\\theta = 30^\\circ$ gives $\\sin(60^\\circ)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Determine the exact area bounded by the curve $y = 3x^2 + 3$, the $x$-axis, and vertical lines $x = 0$ and $x = 2$.",
        "options": [
          "$14$",
          "$8$",
          "$17$",
          "$12$",
          "$8$"
        ],
        "answer": 0,
        "explanation": "The area is $\\int_0^{2} (3x^2 + 3)\\,dx = [x^3 + 3x]_0^{2} = (2^3 + 3(2)) - 0 = 14$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Easy",
        "question": "If functions are defined as $f(x) = 4x$ and $g(x) = x^2 + 3$, evaluate $f(g(2))$.",
        "options": [
          "$28$",
          "$24$",
          "$32$",
          "$67$",
          "$11$"
        ],
        "answer": 0,
        "explanation": "Evaluating inside first: $g(2) = 2^2 + 3 = 7$. Then $f(7) = 4 \\times 7 = 28$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Medium",
        "question": "In $\\triangle ABC$, the side $a = 12\\,\\text{cm}$ lies opposite angle $A = 60^\\circ$. What is the circumcircle diameter $2R$?",
        "options": [
          "$\\frac{12}{\\sin(60^\\circ)}$",
          "$12\\sin(60^\\circ)$",
          "$\\frac{12}{2\\sin(60^\\circ)}$",
          "$24\\sin(60^\\circ)$",
          "$12\\cos(60^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the extended Sine Rule, $\\frac{a}{\\sin A} = 2R$, so circumdiameter $2R = \\frac{12}{\\sin(60^\\circ)}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "For random events $A$ and $B$, $P(A) = 0.6$ and $P(A \\cap B) = 0.3$. Calculate the conditional probability $P(B | A)$.",
        "options": [
          "$0.50$",
          "$0.180$",
          "$0.30$",
          "$0.90$",
          "$0.50$"
        ],
        "answer": 0,
        "explanation": "By Bayes/conditional rule, $P(B | A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.3}{0.6} = 0.50$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Find the coefficient of $x^2$ in the algebraic binomial expansion of $(1 + x)^{6}$.",
        "options": [
          "$15$",
          "$6$",
          "$20$",
          "$30$",
          "$19$"
        ],
        "answer": 0,
        "explanation": "The general expansion term is $\\binom{n}{r} x^r$. For $x^2$, $r = 2$, so the coefficient is $\\binom{6}{2} = 15$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry",
        "difficulty": "Easy",
        "question": "What is the total sum of all interior angles of a convex polygon having $10$ sides?",
        "options": [
          "$1440^\\circ$",
          "$1620^\\circ$",
          "$1260^\\circ$",
          "$1800^\\circ$",
          "$360^\\circ$"
        ],
        "answer": 0,
        "explanation": "The interior angle sum formula is $(n - 2) \\times 180^\\circ = (10 - 2) \\times 180^\\circ = 1440^\\circ$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Locate the $x$-coordinate of the stationary point on the parabola $y = 4x^2 - 24x + 7$.",
        "options": [
          "$3$",
          "$4$",
          "$-3$",
          "$0$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "Setting the derivative to zero: $\\frac{dy}{dx} = 8x - 24 = 0 \\implies x = 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "In a geometric sequence with first term $a = 5$ and common ratio $r = 2$, determine the $4^{\\text{th}}$ term.",
        "options": [
          "$40$",
          "$80$",
          "$35$",
          "$45$",
          "$40$"
        ],
        "answer": 0,
        "explanation": "The $n^{\\text{th}}$ term is $T_n = a r^{n-1}$. For $n = 4$: $T_4 = 5 \\times 2^3 = 40$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "A circular sector of radius $r = 8\\,\\text{cm}$ has central angle $\\theta = \\frac{\\pi}{3}\\,\\text{rad}$. Compute its area.",
        "options": [
          "$10.67\\pi\\,\\text{cm}^2$",
          "$8\\pi\\,\\text{cm}^2$",
          "$21.33\\pi\\,\\text{cm}^2$",
          "$2\\pi\\,\\text{cm}^2$",
          "$\\pi\\,\\text{cm}^2$"
        ],
        "answer": 0,
        "explanation": "Sector area formula: $A = \\frac{1}{2}r^2 \\theta = \\frac{1}{2}(8)^2 \\left(\\frac{\\pi}{3}\\right) = 10.67\\pi\\,\\text{cm}^2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Statistics",
        "difficulty": "Medium",
        "question": "A sample has mean $\\mu = 30$ and standard deviation $\\sigma = 3$. What is the standard deviation after transformation $Y = 3X + 5$?",
        "options": [
          "$9$",
          "$14$",
          "$27$",
          "$3$",
          "$95$"
        ],
        "answer": 0,
        "explanation": "Adding a constant does not alter spread. Multiplying by $a$ scales standard deviation by $|a|$: $\\sigma_Y = 3\\sigma_X = 3(3) = 9$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "When the polynomial $P(x) = 2x^3 - 3x^2 + 5$ is divided by $(x - -1)$, what is the numerical remainder?",
        "options": [
          "$0$",
          "$2$",
          "$-3$",
          "$0$",
          "$-0$"
        ],
        "answer": 0,
        "explanation": "By the Remainder Theorem, the remainder upon division by $(x - c)$ equals $P(c) = 2(-1)^3 - 3(-1)^2 + 5 = 0$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "The graph of $y = f(x)$ is translated horizontally by vector $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$. State the new equation.",
        "options": [
          "$y = f(x - 4)$",
          "$y = f(x + 4)$",
          "$y = f(x) + 4$",
          "$y = f(x) - 4$",
          "$y = 4f(x)$"
        ],
        "answer": 0,
        "explanation": "A translation by $+a$ along the $x$-axis maps $x \\mapsto x - a$, giving $y = f(x - 4)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Hard",
        "question": "Find the Cartesian equation of the tangent line to the parabola $y = x^2$ at the point with $x$-coordinate $x = 1$.",
        "options": [
          "$y = 2x -1$",
          "$y = -\\frac{1}{2}x + 1$",
          "$y = 4x$",
          "$y = x + 1$",
          "$y = 2x + 1$"
        ],
        "answer": 0,
        "explanation": "Gradient is $m = \\frac{dy}{dx} = 2x = 2$. At $x = 1, y = 1$. Using $y - y_1 = m(x - x_1)$ yields $y = 2x -1$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Hard",
        "question": "Decompose $\\frac{2x + 5}{(x + 1)(x + 2)}$ into partial fractions $\\frac{A}{x + 1} + \\frac{B}{x + 2}$. Find $(A, B)$.",
        "options": [
          "$(3, -1)$",
          "$(1, 1)$",
          "$(2, 3)$",
          "$(5, -3)$",
          "$(4, -2)$"
        ],
        "answer": 0,
        "explanation": "$2x + 5 = A(x + 2) + B(x + 1)$. At $x = -1 \\implies A = 3$. At $x = -2 \\implies B = -1$. Thus $(A, B) = (3, -1)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Vectors",
        "difficulty": "Easy",
        "question": "Compute the scalar dot product between $\\mathbf{u} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.",
        "options": [
          "$-1$",
          "$4$",
          "$-5$",
          "$4$",
          "$-5$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{u} \\cdot \\mathbf{v} = (2)(2) + (5)(-1) = 4 - 5 = -1$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Easy",
        "question": "If events $E_1$ and $E_2$ are statistically independent with $P(E_1) = 0.5$ and $P(E_2) = 0.4$, what is $P(E_1 \\cap E_2)$?",
        "options": [
          "$0.200$",
          "$0.90$",
          "$0.70$",
          "$0.5$",
          "$0.4$"
        ],
        "answer": 0,
        "explanation": "Independence implies $P(E_1 \\cap E_2) = P(E_1) \\times P(E_2) = 0.5 \\times 0.4 = 0.200$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "Find the sum of the first 10 terms of an arithmetic progression with first term $a = 4$ and common difference $d = 5$.",
        "options": [
          "$265$",
          "$245$",
          "$295$",
          "$49$",
          "$40$"
        ],
        "answer": 0,
        "explanation": "$S_n = \\frac{n}{2}[2a + (n-1)d] = 5[2(4) + 9(5)] = 265$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Hard",
        "question": "Solve $\\cos(x) = \\frac{1}{2}$ for all values in the principal interval $0 \\le x \\le 2\\pi$.",
        "options": [
          "$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          "$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$",
          "$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{4}, \\frac{7\\pi}{4}$",
          "$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$"
        ],
        "answer": 0,
        "explanation": "Cosine is positive in quadrants I and IV: $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Evaluate the second derivative $\\frac{d^2y}{dx^2}$ of $y = 1x^3 - 6x^2$ at $x = 2$.",
        "options": [
          "$0$",
          "$6$",
          "$-6$",
          "$12$",
          "$-12$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = 3x^2 - 12x$, so $\\frac{d^2y}{dx^2} = 6x - 12$. At $x = 2$: 6(2) - 12 = 0$."
      }
    ],
    "Mathematics 2": [
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Apply the product rule to differentiate $y = x^{4} e^{2x}$ with respect to $x$.",
        "options": [
          "$x^{3} e^{2x}(4 + 2x)$",
          "$4 x^{3} e^{2x}$",
          "$2x^{4} e^{2x}$",
          "$24 x e^{2x}$",
          "$x^{4} e^{2x}$"
        ],
        "answer": 0,
        "explanation": "By $(uv)' = u'v + uv'$: $u' = 4x^{3}, v' = 2e^{2x}$. Factoring gives $x^{3} e^{2x}(4 + 2x)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Calculate the vector cross product $\\mathbf{i} \\times \\mathbf{j}$ in a right-handed Cartesian coordinate system.",
        "options": [
          "$\\mathbf{k}$",
          "$-\\mathbf{k}$",
          "$\\mathbf{0}$",
          "$\\mathbf{i}$",
          "$\\mathbf{j}$"
        ],
        "answer": 0,
        "explanation": "By the right-hand rule definition of orthonormal unit basis vectors, $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Easy",
        "question": "Compute the determinant of the $2 \\times 2$ matrix $M = \\begin{pmatrix} 5 & 1 \\\\ 2 & 2 \\end{pmatrix}$.",
        "options": [
          "$8$",
          "$12$",
          "$6$",
          "$10$",
          "$7$"
        ],
        "answer": 0,
        "explanation": "$\\det(M) = ad - bc = (5)(2) - (1)(2) = 8$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Using the substitution $u = x^2 + 4$, evaluate $\\int 2x(x^2 + 4)^3\\,dx$.",
        "options": [
          "$\\frac{1}{4}(x^2 + 4)^4 + C$",
          "$\\frac{1}{3}(x^2 + 4)^3 + C$",
          "$(x^2 + 4)^4 + C$",
          "$\\frac{1}{2}(x^2 + 4)^4 + C$",
          "$6x^2(x^2 + 4)^2 + C$"
        ],
        "answer": 0,
        "explanation": "$du = 2x\\,dx$. The integral transforms to $\\int u^3\\,du = \\frac{1}{4}u^4 + C = \\frac{1}{4}(x^2 + 4)^4 + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "For what value of $\\lambda$ are the 3D vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -1 \\\\ \\lambda \\end{pmatrix}$ perpendicular?",
        "options": [
          "$-1$",
          "$1$",
          "$5$",
          "$-5$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Perpendicular vectors have zero dot product: $2(1) + 3(-1) - \\lambda = 0 \\implies -1 - \\lambda = 0 \\implies \\lambda = -1$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Determine the modulus $|z|$ and principal argument $\\arg(z)$ of the complex number $z = 1 + i\\sqrt{3}$.",
        "options": [
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{6}$",
          "$|z| = 4, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 1, \\arg(z) = \\frac{\\pi}{4}$",
          "$|z| = \\sqrt{3}, \\arg(z) = \\frac{\\pi}{2}$"
        ],
        "answer": 0,
        "explanation": "$|z| = \\sqrt{1^2 + 3} = 2$. In quadrant I, $\\theta = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Differentiate $y = \\frac{\\sin(x)}{x}$ with respect to $x$ using the quotient rule.",
        "options": [
          "$\\frac{x\\cos(x) - \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x)}{1}$",
          "$\\frac{x\\sin(x) - \\cos(x)}{x^2}$",
          "$\\frac{x\\cos(x) + \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x) - x\\sin(x)}{x^2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{u'v - uv'}{v^2} = \\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "A plane has normal vector $\\mathbf{n} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 4 \\end{pmatrix}$ and passes through $(1, 0, 1)$. Find its equation.",
        "options": [
          "$2x - 3y + 4z = 6$",
          "$2x - 3y + 4z = 0$",
          "$2x - 3y + 4z = 2$",
          "$x + z = 6$",
          "$-2x + 3y - 4z = 1$"
        ],
        "answer": 0,
        "explanation": "$ax + by + cz = d \\implies 2(1) - 3(0) + 4(1) = 6$, so $2x - 3y + 4z = 6$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "By De Moivre's theorem, simplify the complex power $(\\cos\\theta + i\\sin\\theta)^{6}$.",
        "options": [
          "$\\cos(6\\theta) + i\\sin(6\\theta)$",
          "$\\cos^3\\theta + i\\sin^3\\theta$",
          "$6(\\cos\\theta + i\\sin\\theta)$",
          "$\\cos(\\theta / 6) + i\\sin(\\theta / 6)$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, which for $n = 6$ yields $\\cos(6\\theta) + i\\sin(6\\theta)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find $\\frac{dy}{dx}$ for the ellipse $x^2 + 4y^2 = 25$ using implicit differentiation.",
        "options": [
          "$-\\frac{x}{4y}$",
          "$-\\frac{4x}{y}$",
          "$\\frac{x}{4y}$",
          "$-\\frac{x}{2y}$",
          "$\\frac{25 - x}{4y}$"
        ],
        "answer": 0,
        "explanation": "$2x + 8y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Calculate the perpendicular distance from the origin $(0,0,0)$ to the plane $2x - y + 2z = 9$.",
        "options": [
          "$3$",
          "$9$",
          "$\\frac{9}{2}$",
          "$\\sqrt{9}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$D = \\frac{|0 - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{\\sqrt{9}} = 3$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the matrix inverse $A^{-1}$ for $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "options": [
          "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 6 - 5 = 1$. The inverse is $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Evaluate $\\int x e^x\\,dx$ using integration by parts.",
        "options": [
          "$x e^x - e^x + C$",
          "$x e^x + e^x + C$",
          "$\\frac{1}{2}x^2 e^x + C$",
          "$e^x - x e^x + C$",
          "$x^2 e^x + C$"
        ],
        "answer": 0,
        "explanation": "$u = x, dv = e^x dx \\implies uv - \\int v du = x e^x - \\int e^x dx = x e^x - e^x + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Two lines have direction vectors $\\mathbf{d}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{d}_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$. What is the acute angle between them?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$0^\\circ$"
        ],
        "answer": 0,
        "explanation": "$\\cos\\theta = \\frac{1(1) + 0 + 0}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "Evaluate the determinant of the upper-triangular matrix $M = \\begin{pmatrix} 2 & 4 & 5 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
        "options": [
          "$24$",
          "$9$",
          "$0$",
          "$48$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The determinant of any triangular matrix is the product of its diagonal elements: $2 \\times 3 \\times 4 = 24$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Solve the separable differential equation $\\frac{dy}{dx} = 2x y$ with initial condition $y(0) = 1$.",
        "options": [
          "$y = e^{x^2}$",
          "$y = e^{2x}$",
          "$y = x^2 + 1$",
          "$y = 2e^x - 1$",
          "$y = e^{x^2/2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{y}dy = 2x dx \\implies \\ln|y| = x^2 + C$. With $y(0) = 1 \\implies C = 0$, so $y = e^{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "At what point does the line $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ intersect the plane $x + y + z = 7$?",
        "options": [
          "$(3, 2, 2)$",
          "$(2, 2, 1)$",
          "$(1, 2, 0)$",
          "$(4, 2, 3)$",
          "$(0, 2, -1)$"
        ],
        "answer": 0,
        "explanation": "$(1 + t) + 2 + t = 7 \\implies 2t + 3 = 7 \\implies t = 2$. The point is $(1 + 2, 2, 0 + 2) = (3, 2, 2)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the roots of the quadratic equation $z^2 + 4z + 13 = 0$ in the complex domain.",
        "options": [
          "$-2 \\pm 3i$",
          "$2 \\pm 3i$",
          "$-4 \\pm 6i$",
          "$-2 \\pm 9i$",
          "$-2 \\pm i\\sqrt{13}$"
        ],
        "answer": 0,
        "explanation": "$z = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = -2 \\pm 3i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find the general solution to the homogeneous equation $\\frac{d^2y}{dx^2} - 9y = 0$.",
        "options": [
          "$y = A e^{3x} + B e^{-3x}$",
          "$y = A\\cos(3x) + B\\sin(3x)$",
          "$y = (A + Bx)e^{3x}$",
          "$y = A e^{9x}$",
          "$y = A\\cosh(9x)$"
        ],
        "answer": 0,
        "explanation": "Characteristic equation $m^2 - 9 = 0 \\implies m = \\pm 3$, giving $y = A e^{3x} + B e^{-3x}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Which vector operation yields the common perpendicular direction to two skew lines with direction vectors $\\mathbf{d}_1$ and $\\mathbf{d}_2$?",
        "options": [
          "$\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "$\\mathbf{d}_1 \\cdot \\mathbf{d}_2$",
          "$\\mathbf{d}_1 + \\mathbf{d}_2$",
          "$\\frac{\\mathbf{d}_1}{|\\mathbf{d}_2|}$",
          "$\\mathbf{d}_1 - \\mathbf{d}_2$"
        ],
        "answer": 0,
        "explanation": "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ produces a vector mutually perpendicular to both direction vectors."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Express the complex quotient $\\frac{5}{2 + i}$ in standard Cartesian form $x + iy$.",
        "options": [
          "$2 - i$",
          "$2 + i$",
          "$1 - 2i$",
          "$\\frac{10 - 5i}{3}$",
          "$5 - 2.5i$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by conjugate $(2 - i)$: $\\frac{5(2 - i)}{4 + 1} = 2 - i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Easy",
        "question": "Differentiate $y = \\cos(4x^3)$ with respect to $x$.",
        "options": [
          "$-12x^2 \\sin(4x^3)$",
          "$12x^2 \\sin(4x^3)$",
          "$-4\\sin(4x^3)$",
          "$-12x \\cos(4x^3)$",
          "$\\sin(12x^2)$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = -\\sin(4x^3) \\cdot \\frac{d}{dx}(4x^3) = -12x^2 \\sin(4x^3)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Easy",
        "question": "Determine the exact magnitude of the 3D position vector $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 8 \\end{pmatrix}$.",
        "options": [
          "$\\sqrt{81}$",
          "$13$",
          "$\\sqrt{13}$",
          "$32$",
          "$\\sqrt{63}$"
        ],
        "answer": 0,
        "explanation": "$|\\mathbf{r}| = \\sqrt{1^2 + 4^2 + 8^2} = \\sqrt{81}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "What geometric transformation is represented by the matrix $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ in $\\mathbb{R}^2$?",
        "options": [
          "Counter-clockwise rotation by $90^\\circ$ about the origin",
          "Clockwise rotation by $90^\\circ$ about the origin",
          "Reflection across the line $y = x$",
          "Reflection across the line $y = -x$",
          "Uniform scale factor of $-1$"
        ],
        "answer": 0,
        "explanation": "The standard rotation matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ with $\\theta = 90^\\circ$ matches $R$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "What are the first three non-zero terms of the Maclaurin expansion for $\\sin(x)$?",
        "options": [
          "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$1 - \\frac{x^2}{2} + \\frac{x^4}{24}$",
          "$x + \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$x - x^3 + x^5$",
          "$1 - x + \\frac{x^2}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + \\frac{x^5}{120}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Find a unit normal vector to the plane $3x + 4z = 10$.",
        "options": [
          "$\\begin{pmatrix} 3/5 \\\\ 0 \\\\ 4/5 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3/7 \\\\ 0 \\\\ 4/7 \\end{pmatrix}$",
          "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
          "$\\begin{pmatrix} 4/5 \\\\ 0 \\\\ -3/5 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{n} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$, magnitude $\\sqrt{3^2 + 4^2} = 5$. The unit normal is $\\frac{1}{5}\\mathbf{n}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "What is the algebraic sum of all $n$ complex $n^{\\text{th}}$ roots of unity for any integer $n \\ge 2$?",
        "options": [
          "$0$",
          "$1$",
          "$n$",
          "$-1$",
          "$n\\pi$"
        ],
        "answer": 0,
        "explanation": "The roots satisfy $z^n - 1 = 0$. By Vieta's formulas, the sum of roots is the coefficient of $z^{n-1}$, which is $0$."
      }
    ],
    "Physics": [
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A car starts with velocity $u = 10\\,\\text{m s}^{-1}$ and accelerates uniformly at $a = 2\\,\\text{m s}^{-2}$ for $t = 5\\,\\text{s}$. Find displacement $s$.",
        "options": [
          "$75\\,\\text{m}$",
          "$85\\,\\text{m}$",
          "$70\\,\\text{m}$",
          "$60\\,\\text{m}$",
          "$5\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$s = ut + \\frac{1}{2}at^2 = (10)(5) + 0.5(2)(5^2) = 75\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "Two identical resistors of $R = 30\\,\\Omega$ are wired in parallel across a 12\\,\\text{V}$ ideal battery. What total current is drawn?",
        "options": [
          "$0.80\\,\\text{A}$",
          "$0.40\\,\\text{A}$",
          "$1.60\\,\\text{A}$",
          "$0.40\\,\\text{A}$",
          "$360\\,\\text{A}$"
        ],
        "answer": 0,
        "explanation": "$R_{eq} = \\frac{30}{2} = 15\\,\\Omega$. $I = \\frac{V}{R_{eq}} = \\frac{12}{15} = 0.80\\,\\text{A}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "An ideal gas at temperature $T_1 = 300\\,\\text{K}$ and pressure $P_1$ in a rigid sealed container has its temperature raised to $600\\,\\text{K}$. What is the new pressure $P_2$?",
        "options": [
          "$2P_1$",
          "$\\frac{1}{2}P_1$",
          "$4P_1$",
          "$P_1$",
          "$\\sqrt{2}P_1$"
        ],
        "answer": 0,
        "explanation": "At constant volume, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\frac{600}{300} = 2P_1$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A pulling force of 60\\,\\text{N}$ acts on a mass of 8\\,\\text{kg}$ against friction of 12\\,\\text{N}$. Calculate its acceleration.",
        "options": [
          "$6.00\\,\\text{m s}^{-2}$",
          "$7.50\\,\\text{m s}^{-2}$",
          "$9.00\\,\\text{m s}^{-2}$",
          "$1.50\\,\\text{m s}^{-2}$",
          "$480\\,\\text{m s}^{-2}$"
        ],
        "answer": 0,
        "explanation": "$F_{net} = 60 - 12 = 48\\,\\text{N}$. $a = \\frac{F_{net}}{m} = \\frac{48}{8} = 6.00\\,\\text{m s}^{-2}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Easy",
        "question": "A sound wave propagates at $340\\,\\text{m s}^{-1}$ with frequency $f = 400\\,\\text{Hz}$. What is its wavelength $\\lambda$?",
        "options": [
          "$0.85\\,\\text{m}$",
          "$136000\\,\\text{m}$",
          "$1.18\\,\\text{m}$",
          "$1.70\\,\\text{m}$",
          "$0.42\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$\\lambda = \\frac{v}{f} = \\frac{340}{400} = 0.85\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "A satellite orbits Earth at radius $r$ with speed $v$. If it moves to an orbit of radius $4r$, what is its new orbital speed?",
        "options": [
          "$\\frac{1}{2}v$",
          "$\\frac{1}{4}v$",
          "$2v$",
          "$4v$",
          "$\\frac{1}{\\sqrt{2}}v$"
        ],
        "answer": 0,
        "explanation": "$v = \\sqrt{\\frac{GM}{r}}$. At radius $4r$, $v' = \\sqrt{\\frac{GM}{4r}} = \\frac{1}{2}v$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A cart of mass 2\\,\\text{kg}$ moving at 5\\,\\text{m s}^{-1}$ collides with and sticks to a stationary cart of mass 3\\,\\text{kg}$. Find their final speed.",
        "options": [
          "$2.00\\,\\text{m s}^{-1}$",
          "$5\\,\\text{m s}^{-1}$",
          "$4.00\\,\\text{m s}^{-1}$",
          "$3.33\\,\\text{m s}^{-1}$",
          "$0\\,\\text{m s}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{2 \\times 5}{5} = 2.00\\,\\text{m s}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "In a Young's double-slit experiment, fringe separation is $w$. If slit separation $s$ is doubled and screen distance $D$ is halved, what is the new fringe width?",
        "options": [
          "$\\frac{1}{4}w$",
          "$\\frac{1}{2}w$",
          "$w$",
          "$2w$",
          "$4w$"
        ],
        "answer": 0,
        "explanation": "$w = \\frac{\\lambda D}{s}$. New width $w' = \\frac{\\lambda (D/2)}{2s} = \\frac{1}{4}w$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "Two point charges experience electrostatic force $F$ at distance $d$. What is the force when separation is reduced to $\\frac{d}{3}$?",
        "options": [
          "$9F$",
          "$3F$",
          "$\\frac{1}{3}F$",
          "$\\frac{1}{9}F$",
          "$6F$"
        ],
        "answer": 0,
        "explanation": "$F \\propto \\frac{1}{r^2}$. Dividing distance by 3 multiplies force by $3^2 = 9$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "Calculate the gravitational potential energy gained when an object of mass 3\\,\\text{kg}$ is lifted vertically by 8\\,\\text{m}$ ($g = 9.8\\,\\text{m s}^{-2}$).",
        "options": [
          "$235.2\\,\\text{J}$",
          "$117.6\\,\\text{J}$",
          "$470.4\\,\\text{J}$",
          "$24\\,\\text{J}$",
          "$2.4\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta E_p = mgh = (3)(9.8)(8) = 235.2\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A battery with $\\text{EMF} = 6\\,\\text{V}$ and internal resistance $r = 0.5\\,\\Omega$ is connected to load $R = 2.5\\,\\Omega$. Find the terminal potential difference.",
        "options": [
          "$5.00\\,\\text{V}$",
          "$6\\,\\text{V}$",
          "$1.00\\,\\text{V}$",
          "$2.00\\,\\text{V}$",
          "$2.50\\,\\text{V}$"
        ],
        "answer": 0,
        "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{6}{3}$. Terminal $V = IR = 5.00\\,\\text{V}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "How much heat is required to warm 3\\,\\text{kg}$ of liquid water ($c = 4200\\,\\text{J kg}^{-1}\\,\\text{K}^{-1}$) by $\\Delta T = 15\\,\\text{K}$?",
        "options": [
          "$189000\\,\\text{J}$",
          "$94500\\,\\text{J}$",
          "$378000\\,\\text{J}$",
          "$63000\\,\\text{J}$",
          "$45\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$Q = mc\\Delta T = (3)(4200)(15) = 189000\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A car of mass 800\\,\\text{kg}$ negotiates a curve of radius 100\\,\\text{m}$ at speed 25\\,\\text{m s}^{-1}$. Compute the centripetal force required.",
        "options": [
          "$5000\\,\\text{N}$",
          "$10000\\,\\text{N}$",
          "$2500\\,\\text{N}$",
          "$20000\\,\\text{N}$",
          "$200\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "$F_c = \\frac{mv^2}{r} = \\frac{800 \\times 25^2}{100} = 5000\\,\\text{N}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A light beam in air ($n_1 = 1.0$) enters glass ($n_2 = 1.50$) at angle of incidence $\\theta_1 = 30^\\circ$. What is the value of $\\sin(\\theta_2)$?",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$",
          "$\\frac{\\sqrt{3}}{3}$"
        ],
        "answer": 0,
        "explanation": "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies (1.0)\\sin(30^\\circ) = 1.50\\sin\\theta_2 \\implies 0.5 = 1.5\\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{1}{3}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "A charged particle enters a uniform magnetic field with velocity perpendicular to the field lines. What trajectory does it follow?",
        "options": [
          "A circle in the plane perpendicular to the magnetic field",
          "A straight line with uniform acceleration",
          "A parabolic path along the magnetic field",
          "A hyperbolic escape path",
          "A stationary oscillation"
        ],
        "answer": 0,
        "explanation": "Because the magnetic force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ is always normal to velocity, speed is constant and motion is uniform circular."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A spring of stiffness $k = 150\\,\\text{N m}^{-1}$ is extended by $\\Delta x = 0.1\\,\\text{m}$. What is the stored elastic potential energy?",
        "options": [
          "$0.750\\,\\text{J}$",
          "$15.00\\,\\text{J}$",
          "$1.500\\,\\text{J}$",
          "$7.500\\,\\text{J}$",
          "$0.188\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$E_e = \\frac{1}{2}k(\\Delta x)^2 = 0.5(150)(0.1^2) = 0.750\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Light of wavelength $\\lambda = 500\\,\\text{nm}$ illuminates a diffraction grating with $500\\,\\text{lines per mm}$. What is the highest observable order $m$?",
        "options": [
          "$4$",
          "$2$",
          "$5$",
          "$3$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "Slit spacing $d = \\frac{10^{-3}\\,\\text{m}}{500} = 2 \\times 10^{-6}\\,\\text{m}$. Max order is $m \\le \\frac{d}{\\lambda} = \\frac{2 \\times 10^{-6}}{500 \\times 10^{-9}} = 4$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "Two parallel metal plates separated by 0.03\\,\\text{m}$ have a potential difference of 300\\,\\text{V}$. Find the electric field strength $E$.",
        "options": [
          "$10000\\,\\text{V m}^{-1}$",
          "$5000\\,\\text{V m}^{-1}$",
          "$20000\\,\\text{V m}^{-1}$",
          "$9\\,\\text{V m}^{-1}$",
          "$0\\,\\text{V m}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$E = \\frac{V}{d} = \\frac{300}{0.03} = 10000\\,\\text{V m}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A uniform plank of length $4.0\\,\\text{m}$ and weight $200\\,\\text{N}$ is supported at its midpoint. What force applied at one end maintains equilibrium?",
        "options": [
          "$0\\,\\text{N}$",
          "$100\\,\\text{N}$",
          "$200\\,\\text{N}$",
          "$50\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "Because the pivot is at the centre of mass, the plank's weight exerts zero torque about the pivot, requiring zero force to maintain balance."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A wire of resistance $R$ is drawn out so that its length is doubled while volume is conserved. What is its new resistance?",
        "options": [
          "$4R$",
          "$2R$",
          "$R$",
          "$\\frac{1}{2}R$",
          "$\\frac{1}{4}R$"
        ],
        "answer": 0,
        "explanation": "Doubling length ($L \\to 2L$) halves cross-sectional area ($A \\to A/2$). Resistance $R' = \\rho \\frac{2L}{A/2} = 4R$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "If the absolute temperature of an ideal gas is quadrupled, what factor does the root-mean-square molecular speed $c_{\\text{rms}}$ increase by?",
        "options": [
          "Factor of 2",
          "Factor of 4",
          "Factor of 16",
          "Factor of 1.41",
          "Remains unchanged"
        ],
        "answer": 0,
        "explanation": "$c_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} \\propto \\sqrt{T}$. Quadrupling $T$ multiplies speed by $\\sqrt{4} = 2$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "At what launch angle $\\theta$ above horizontal does a projectile achieve maximum horizontal range on level ground?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$15^\\circ$"
        ],
        "answer": 0,
        "explanation": "Range $R = \\frac{u^2 \\sin(2\\theta)}{g}$ is maximized when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A stretched string of length $L$ vibrates in its fundamental harmonic mode with nodes at both fixed ends. What is the wavelength $\\lambda_1$?",
        "options": [
          "$2L$",
          "$L$",
          "$\\frac{L}{2}$",
          "$4L$",
          "$\\frac{2L}{3}$"
        ],
        "answer": 0,
        "explanation": "Fundamental mode consists of a single loop: $L = \\frac{\\lambda}{2} \\implies \\lambda = 2L$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "According to Faraday's Law, the induced electromotive force in a circuit is directly proportional to the:",
        "options": [
          "Time rate of change of magnetic flux linkage",
          "Total resistance of the circuit loop",
          "Steady current flowing in the coil",
          "Temperature of the magnet",
          "Square of the magnetic flux"
        ],
        "answer": 0,
        "explanation": "Faraday's Law states $\\mathcal{E} = -\\frac{d\\Phi}{dt}$, so induced EMF equals the rate of change of flux linkage."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A constant force of 40\\,\\text{N}$ acts on an object for a duration of $\\Delta t = 0.05\\,\\text{s}$. What impulse is imparted?",
        "options": [
          "$2.00\\,\\text{N s}$",
          "$4.00\\,\\text{N s}$",
          "$800.0\\,\\text{N s}$",
          "$1.00\\,\\text{N s}$",
          "$40.05\\,\\text{N s}$"
        ],
        "answer": 0,
        "explanation": "$\\text{Impulse} = F \\Delta t = (40)(0.05) = 2.00\\,\\text{N s}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Why does an observer perceive a higher pitch when an emergency siren approaches at constant velocity?",
        "options": [
          "The emitted wavefronts are compressed in the forward direction, reducing observed wavelength",
          "The velocity of sound in the air increases toward the observer",
          "The source emits sound with a physically higher intrinsic frequency",
          "The acoustic amplitude of the sound wave increases linearly",
          "Air molecules accelerate along with the vehicle"
        ],
        "answer": 0,
        "explanation": "Motion towards the listener crowds wavefronts, shortening perceived wavelength $\\lambda$. Since wave speed $v$ in air is constant, observed frequency $f = \\frac{v}{\\lambda}$ rises."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "What is the theoretical ratio of surface escape velocity $v_{\\text{esc}}$ to circular surface orbital speed $v_{\\text{orb}}$ for any spherical planet?",
        "options": [
          "$\\sqrt{2}$",
          "$2$",
          "$1$",
          "$\\frac{1}{\\sqrt{2}}$",
          "$4$"
        ],
        "answer": 0,
        "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$ and $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$, giving $\\frac{v_{\\text{esc}}}{v_{\\text{orb}}} = \\sqrt{2}$."
      }
    ],
    "Chemistry": [
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "What is the ground-state electron configuration of neutral Aluminium (Z=13)?",
        "options": [
          "$1s^2 2s^2 2p^6 3s^2 3p^1$",
          "$1s^2 2s^2 2p^6 3d^1$",
          "$1s^2 2s^2 2p^5 3s^2$",
          "$1s^2 2s^2 2p^6 4s^1$",
          "$1s^2 2s^2 2p^6 3s^2 3d^1$"
        ],
        "answer": 0,
        "explanation": "Electrons populate orbitals in order of ascending energy according to the Aufbau principle: $1s \\to 2s \\to 2p \\to 3s \\to 3p$. For Aluminium (Z=13), this is $1s^2 2s^2 2p^6 3s^2 3p^1$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "Given $\\sum \\Delta H_f^\\circ(\\text{products}) = -900\\,\\text{kJ mol}^{-1}$ and $\\sum \\Delta H_f^\\circ(\\text{reactants}) = -300\\,\\text{kJ mol}^{-1}$, calculate the reaction enthalpy $\\Delta H_{\\text{rxn}}^\\circ$.",
        "options": [
          "$-600\\,\\text{kJ mol}^{-1}$",
          "$600\\,\\text{kJ mol}^{-1}$",
          "$-1200\\,\\text{kJ mol}^{-1}$",
          "$-900\\,\\text{kJ mol}^{-1}$",
          "$-300\\,\\text{kJ mol}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta H^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants}) = (-900) - (-300) = -600\\,\\text{kJ mol}^{-1}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "State the official IUPAC systematic name for the organic molecule with formula $\\text{CH_3COCH_3}$.",
        "options": [
          "Propanone",
          "Methanol",
          "Methanoic acid",
          "Butanone",
          "Ethyl methanoate"
        ],
        "answer": 0,
        "explanation": "The molecular structure $\\text{CH_3COCH_3}$ matches the functional group of Propanone."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Predict the molecular geometry and characteristic bond angle of Water (H_2O) using VSEPR theory.",
        "options": [
          "Bent / Non-linear, ~104.5°",
          "Linear, 180°",
          "Tetrahedral, 109.5°",
          "T-shaped, 90°",
          "Square planar, 90°"
        ],
        "answer": 0,
        "explanation": "Minimizing electron pair repulsions gives Water (H_2O) its characteristic geometry: Bent / Non-linear, ~104.5°."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "For the exothermic equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ ($\\Delta H < 0$), which combination shifts position towards products?",
        "options": [
          "Decreasing temperature and increasing total pressure",
          "Increasing temperature and decreasing total pressure",
          "Introducing an iron catalyst at constant volume",
          "Decreasing total pressure only",
          "Selectively withdrawing nitrogen gas"
        ],
        "answer": 0,
        "explanation": "Lower temperature favours the forward exothermic direction; higher pressure favours the side with fewer gas moles (2 moles vs 4 moles)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "Hydrolysis of 2-bromo-2-methylpropane in aqueous hydroxide proceeds predominantly via which pathway?",
        "options": [
          "$S_N1$ mechanism via a stable tertiary carbocation intermediate",
          "$S_N2$ mechanism via a single concerted transition state",
          "Electrophilic addition across a double bond",
          "Free-radical chain substitution",
          "Elimination forming exclusively 2-methylprop-1-ene"
        ],
        "answer": 0,
        "explanation": "Tertiary haloalkanes undergo $S_N1$ hydrolysis because steric hindrance impedes backside nucleophilic attack while the tertiary carbocation is stabilised by hyperconjugation."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why is the first ionisation energy of oxygen slightly lower than that of nitrogen?",
        "options": [
          "Spin-pair repulsion between the two paired electrons in one of oxygen's 2p orbitals",
          "Oxygen has greater shielding from core electrons",
          "Nitrogen's 2p electrons reside in a higher shell",
          "Oxygen has a larger atomic radius than nitrogen",
          "Oxygen possesses fewer protons than nitrogen"
        ],
        "answer": 0,
        "explanation": "Nitrogen has a half-filled $2p^3$ subshell. Oxygen's fourth 2p electron must pair up, and mutual spin-pair repulsion eases its removal."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "Calculate the pH of a hydrochloric acid solution with $[\\text{H}^+] = 0.0001\\,\\text{mol dm}^{-3}$.",
        "options": [
          "$4.00$",
          "$10.00$",
          "$5.00$",
          "$3.00$",
          "$7.00$"
        ],
        "answer": 0,
        "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(0.0001) = 4.00$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following molecules possesses a chiral carbon centre and exhibits optical isomerism?",
        "options": [
          "Butan-2-ol",
          "Propan-2-ol",
          "Ethanol",
          "Propane",
          "Methanol"
        ],
        "answer": 0,
        "explanation": "In butan-2-ol, carbon-2 is bonded to 4 distinct ligands: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{C}_2\\text{H}_5$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does water have an anomalously high boiling point compared to hydrogen sulfide?",
        "options": [
          "Strong intermolecular hydrogen bonding between electronegative oxygen and hydrogen",
          "Covalent O-H bonds inside water molecules are stronger than S-H bonds",
          "Hydrogen sulfide exhibits stronger London dispersion forces",
          "Water is non-polar while H2S is ionic",
          "Sulfur is more electronegative than oxygen"
        ],
        "answer": 0,
        "explanation": "Oxygen is small and strongly electronegative, creating extensive networks of intermolecular hydrogen bonds that require large thermal energy to disrupt."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "For a reaction with empirical rate equation $\\text{Rate} = k[A]^2 [B]$, what is the overall reaction order?",
        "options": [
          "Third order",
          "Second order",
          "First order",
          "Zero order",
          "Fourth order"
        ],
        "answer": 0,
        "explanation": "The overall order is the sum of exponents in the rate law: $2 + 1 = 3$ (third order)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "What is the major organic product when propene reacts with hydrogen bromide ($\\text{HBr}$)?",
        "options": [
          "2-bromopropane",
          "1-bromopropane",
          "1,2-dibromopropane",
          "Propane",
          "Bromopropene"
        ],
        "answer": 0,
        "explanation": "Markovnikov addition yields the more stable secondary carbocation intermediate, producing 2-bromopropane as the major product."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Determine the number of moles in 100\\,\\text{cm}^3$ of a 0.05\\,\\text{mol dm}^{-3}$ solution.",
        "options": [
          "$0.0050\\,\\text{mol}$",
          "$0.050\\,\\text{mol}$",
          "$0.00050\\,\\text{mol}$",
          "$5\\,\\text{mol}$",
          "$2000.0\\,\\text{mol}$"
        ],
        "answer": 0,
        "explanation": "$n = C \\times V = 0.05 \\times \\frac{100}{1000} = 0.0050\\,\\text{mol}$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "How does the addition of a positive catalyst increase the rate of a chemical reaction?",
        "options": [
          "Provides an alternative mechanism with lower activation energy",
          "Increases the average kinetic energy of reactant molecules",
          "Increases the total enthalpy of the products",
          "Decreases the total volume of the reaction container",
          "Increases the frequency of collision of all particles"
        ],
        "answer": 0,
        "explanation": "A catalyst lowers the activation energy $E_a$, so a greater proportion of molecular collisions satisfy $E \\ge E_a$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "What functional group is produced when a secondary alcohol such as propan-2-ol is heated under reflux with acidified dichromate?",
        "options": [
          "Ketone",
          "Carboxylic acid",
          "Aldehyde",
          "Ester",
          "Alkene"
        ],
        "answer": 0,
        "explanation": "Oxidation of a secondary alcohol produces a ketone; it cannot undergo further oxidation under mild conditions."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does solid sodium chloride not conduct electricity, while molten sodium chloride conducts readily?",
        "options": [
          "Ions are held in fixed lattice positions in the solid but are free to move in the molten liquid",
          "Electrons become delocalised only during the phase transition",
          "Ionic bonds convert to covalent bonds upon melting",
          "Sodium atoms lose their charge in the liquid phase",
          "Solid NaCl contains neutral atoms rather than ions"
        ],
        "answer": 0,
        "explanation": "Electrical conduction requires mobile charge carriers. In molten NaCl, the giant ionic lattice breaks down, freeing $\\text{Na}^+$ and $\\text{Cl}^-$ ions to migrate."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "In an Arrhenius plot of $\\ln k$ against $\\frac{1}{T}$, what physical quantity does the gradient represent?",
        "options": [
          "$-\\frac{E_a}{R}$",
          "$\\frac{E_a}{R}$",
          "$-E_a$",
          "$\\ln A$",
          "$-RT$"
        ],
        "answer": 0,
        "explanation": "Taking logs of $k = A e^{-E_a/RT}$ gives $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Gradient is $-\\frac{E_a}{R}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "In TLC, a dye spot travels 2.5\\,\\text{cm}$ while the solvent front advances $10.0\\,\\text{cm}$. What is the $R_f$ value?",
        "options": [
          "$0.25$",
          "$2.5$",
          "$0.75$",
          "$4.00$",
          "$0.13$"
        ],
        "answer": 0,
        "explanation": "$R_f = \\frac{\\text{distance travelled by spot}}{\\text{distance travelled by solvent}} = \\frac{2.5}{10.0} = 0.25$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does magnesium have a significantly higher melting point than sodium in Period 3?",
        "options": [
          "Magnesium ions ($Mg^{2+}$) have higher charge and release 2 delocalised electrons per atom into the sea",
          "Magnesium forms giant covalent lattices whereas sodium is simple molecular",
          "Sodium has a higher atomic mass than magnesium",
          "Magnesium has more electron shells than sodium",
          "Sodium forms weaker covalent bonds"
        ],
        "answer": 0,
        "explanation": "$\\text{Mg}^{2+}$ has higher charge density and twice as many delocalised electrons as $\\text{Na}^+$, resulting in stronger electrostatic attraction."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "Which mixture forms an acidic buffer capable of resisting pH changes on addition of small amounts of acid or alkali?",
        "options": [
          "Ethanoic acid and sodium ethanoate",
          "Hydrochloric acid and sodium hydroxide in equal moles",
          "Hydrochloric acid and sodium chloride",
          "Pure distilled water",
          "Concentrated ammonia and sodium chloride"
        ],
        "answer": 0,
        "explanation": "An acidic buffer requires a weak acid (e.g. $\\text{CH}_3\\text{COOH}$) and its conjugate base salt (e.g. $\\text{CH}_3\\text{COONa}$)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which reactants combine in the presence of an acid catalyst to produce ethyl ethanoate?",
        "options": [
          "Ethanoic acid and ethanol",
          "Methanoic acid and propanol",
          "Ethanol and ethanal",
          "Ethylamine and ethanoic acid",
          "Ethene and steam"
        ],
        "answer": 0,
        "explanation": "$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Chlorine comprises $^{35}\\text{Cl}$ (80%) and $^{37}\\text{Cl}$ (20%). Calculate its relative atomic mass $A_r$.",
        "options": [
          "$35.40$",
          "$36.00$",
          "$35.90$",
          "$34.90$",
          "$35.00$"
        ],
        "answer": 0,
        "explanation": "$A_r = \\frac{35(80) + 37(20)}{100} = 35.40$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "What is the equilibrium constant $K_c$ expression for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$?",
        "options": [
          "$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$",
          "$K_c = \\frac{[\\text{SO}_2]^2 [\\text{O}_2]}{[\\text{SO}_3]^2}$",
          "$K_c = \\frac{2[\\text{SO}_3]}{2[\\text{SO}_2] + [\\text{O}_2]}$",
          "$K_c = [\\text{SO}_3]^2 - [\\text{SO}_2]^2 [\\text{O}_2]$",
          "$K_c = \\frac{[\\text{SO}_3]}{[\\text{SO}_2][\\text{O}_2]}$"
        ],
        "answer": 0,
        "explanation": "Products over reactants, raised to stoichiometric powers: $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following represents a termination step in the free-radical chlorination of methane?",
        "options": [
          "$\\text{Cl}^\\bullet + \\text{Cl}^\\bullet \\to \\text{Cl}_2$",
          "$\\text{Cl}_2 \\to 2\\text{Cl}^\\bullet$",
          "$\\text{CH}_4 + \\text{Cl}^\\bullet \\to \\text{CH}_3^\\bullet + \\text{HCl}$",
          "$\\text{CH}_3^\\bullet + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$",
          "$\\text{CH}_4 \\to \\text{CH}_3^\\bullet + \\text{H}^\\bullet$"
        ],
        "answer": 0,
        "explanation": "Termination involves two radical species combining to form a stable covalent bond, removing radicals from the system."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Why can graphite conduct electricity while diamond cannot?",
        "options": [
          "Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along layers",
          "Graphite consists of ionic bonds between layers",
          "Diamond has a smaller bandgap than graphite",
          "Graphite contains mobile carbon ions",
          "Diamond has weak intermolecular forces"
        ],
        "answer": 0,
        "explanation": "In graphite, each carbon is $sp^2$ hybridized with 3 covalent bonds; the fourth valence electron is delocalised across planar hexagonal sheets."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "What is the oxidation number of manganese in the permanganate ion $\\text{MnO}_4^-$?",
        "options": [
          "$+7$",
          "$+4$",
          "$+2$",
          "$+6$",
          "$+5$"
        ],
        "answer": 0,
        "explanation": "$x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "An intense, sharp absorption band at $\\sim 1715\\,\\text{cm}^{-1}$ in an infrared spectrum indicates which functional group?",
        "options": [
          "Carbonyl (C=O)",
          "Alcohol (O-H broad stretch)",
          "Alkyne (C≡C)",
          "Alkane (C-C single bond)",
          "Amine (N-H stretch)"
        ],
        "answer": 0,
        "explanation": "The $\\text{C=O}$ double bond has a strong dipole change during stretching, producing a sharp characteristic peak between $1680 - 1750\\,\\text{cm}^{-1}$."
      }
    ],
    "Biology": [
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "What is the primary cellular function of Golgi Apparatus in eukaryotic cells?",
        "options": [
          "Modification, packaging and sorting of glycoproteins",
          "Cellulose cell wall synthesis",
          "Active transport of sodium across myelin sheath",
          "DNA replication proofreading",
          "Glycogen granule storage"
        ],
        "answer": 0,
        "explanation": "In cell ultrastructure, the distinct physiological role of Golgi Apparatus is Modification, packaging and sorting of glycoproteins."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "A double-stranded DNA sample contains 28% Adenine. What percentage of Cytosine does it contain?",
        "options": [
          "22%",
          "28%",
          "56%",
          "72%",
          "50%"
        ],
        "answer": 0,
        "explanation": "By Chargaff's rules, $%A = \\%T = 28\\%$. $%G + \\%C = 100 - 56 = 44\\%$. Since $%G = \\%C$, Cytosine is $\\frac{44}{2} = 22\\%$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "During ventricular systole in the human cardiac cycle, what is the operational state of the valves?",
        "options": [
          "Atrioventricular valves closed; semilunar valves open",
          "Atrioventricular valves open; semilunar valves closed",
          "Both atrioventricular and semilunar valves are open",
          "Both atrioventricular and semilunar valves are closed",
          "Tricuspid open; bicuspid closed"
        ],
        "answer": 0,
        "explanation": "Ventricular pressure exceeds atrial pressure, snapping AV valves shut (first heart sound), while exceeding arterial pressure to open semilunar valves."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "A cell with actual diameter 15\\,\\mu\\text{m}$ is viewed under magnification $\\times 1000$. Calculate its image size in mm.",
        "options": [
          "$15.00\\,\\text{mm}$",
          "$150.0\\,\\text{mm}$",
          "$1.500\\,\\text{mm}$",
          "$15000\\,\\text{mm}$",
          "$66.67\\,\\text{mm}$"
        ],
        "answer": 0,
        "explanation": "$I = A \\times M = 15\\,\\mu\\text{m} \\times 1000 = 15000\\,\\mu\\text{m} = 15.00\\,\\text{mm}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "If a DNA template strand reads $3'-TAC-AAA-GCT-5'$, what is the complementary mRNA sequence produced?",
        "options": [
          "$5'-AUG-UUU-CGA-3'$",
          "$5'-TAC-AAA-GCT-3'$",
          "$3'-AUG-UUU-CGA-5'$",
          "$5'-AUG-AAA-CCC-3'$",
          "$3'-UAC-GGA-CAU-5'$"
        ],
        "answer": 0,
        "explanation": "RNA synthesis pairs $T\\to A, A\\to U, C\\to G, G\\to C$ antiparallel to template: $5'-AUG-UUU-CGA-3'$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which feature of human lungs is an adaptation specifically maximizing diffusion rate according to Fick's Law?",
        "options": [
          "A single layer of flattened squamous epithelial cells minimizing diffusion pathway",
          "Cartilage rings preventing bronchial collapse",
          "Goblet cells secreting protective mucus",
          "Pleural fluid lubricating thoracic movements",
          "Intercostal muscles expanding the rib cage"
        ],
        "answer": 0,
        "explanation": "Fick's law states diffusion rate is inversely proportional to barrier thickness. Squamous epithelium provides an ultra-thin pathway (~0.5 $\\mu$m)."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "How does a competitive inhibitor influence the enzyme kinetic parameters $V_{\\text{max}}$ and $K_m$?",
        "options": [
          "$V_{\\text{max}}$ remains unchanged; $K_m$ increases",
          "$V_{\\text{max}}$ decreases; $K_m$ remains unchanged",
          "$V_{\\text{max}}$ decreases; $K_m$ decreases",
          "Both $V_{\\text{max}}$ and $K_m$ increase",
          "Both $V_{\\text{max}}$ and $K_m$ remain unchanged"
        ],
        "answer": 0,
        "explanation": "High substrate concentrations displace competitive inhibitors from the active site ($V_{\\text{max}}$ unchanged), but higher $[S]$ is required for half-maximal velocity ($K_m$ increases)."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "In a monohybrid cross $Aa \\times Aa$ producing 300$ total offspring, how many are expected to display the recessive phenotype?",
        "options": [
          "$75$",
          "$225$",
          "$150$",
          "$37.5$",
          "$300$"
        ],
        "answer": 0,
        "explanation": "Mendelian monohybrid cross produces a $3:1$ ratio. The recessive frequency is $\\frac{1}{4} \\times 300 = 75$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "Which ion movement causes the initial rapid depolarization phase of a neuronal action potential?",
        "options": [
          "Rapid influx of $\\text{Na}^+$ through voltage-gated sodium channels",
          "Efflux of $\\text{K}^+$ through voltage-gated potassium channels",
          "Active transport of $3\\text{Na}^+$ out and $2\\text{K}^+$ in",
          "Influx of $\\text{Cl}^-$ through GABA receptor channels",
          "Efflux of calcium from the endoplasmic reticulum"
        ],
        "answer": 0,
        "explanation": "Depolarization to threshold opens voltage-gated $\\text{Na}^+$ channels; sodium ions rush into the axon down their electrochemical gradient."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which cellular transport mechanism moves solutes against a concentration gradient utilizing ATP hydrolysis?",
        "options": [
          "Primary active transport via carrier protein pumps",
          "Facilitated diffusion through channel proteins",
          "Simple passive diffusion across lipid bilayer",
          "Osmosis via aquaporin water channels",
          "Bulk gas exchange across cell membrane"
        ],
        "answer": 0,
        "explanation": "Active transport moves molecules from low to high concentration, which requires energy derived from ATP."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What is the expected phenotypic ratio in the $F_2$ generation of a dihybrid cross $AaBb \\times AaBb$ with unlinked genes?",
        "options": [
          "$9 : 3 : 3 : 1$",
          "$1 : 1 : 1 : 1$",
          "$3 : 1$",
          "$9 : 7$",
          "$12 : 3 : 1$"
        ],
        "answer": 0,
        "explanation": "By Mendel's Law of Independent Assortment, two unlinked heterozygous genes assort independently to produce a $9:3:3:1$ phenotypic ratio."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "At a chemical synapse, action potential arrival at the axon terminal directly triggers the opening of:",
        "options": [
          "Voltage-gated $\\text{Ca}^{2+}$ channels",
          "Voltage-gated $\\text{K}^+$ channels only",
          "Ligand-gated $\\text{Cl}^-$ channels",
          "Mechanically-gated sodium channels",
          "Leak potassium channels"
        ],
        "answer": 0,
        "explanation": "Depolarization activates voltage-gated $\\text{Ca}^{2+}$ channels. Inflowing calcium stimulates neurotransmitter vesicle fusion with the presynaptic membrane."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "A plant cell with solute potential $\\Psi_s = -600\\,\\text{kPa}$ and pressure potential $\\Psi_p = +200\\,\\text{kPa}$ has net water potential $\\Psi$ of:",
        "options": [
          "$-400\\,\\text{kPa}$",
          "$-800\\,\\text{kPa}$",
          "$+400\\,\\text{kPa}$",
          "$0\\,\\text{kPa}$",
          "$-1200\\,\\text{kPa}$"
        ],
        "answer": 0,
        "explanation": "$\\Psi = \\Psi_s + \\Psi_p = (-600) + (+200) = -400\\,\\text{kPa}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which type of mutation in a gene's coding region is most likely to alter all downstream amino acids?",
        "options": [
          "Single nucleotide insertion causing a frameshift",
          "Silent base substitution in the wobble position",
          "Conservative missense substitution",
          "Inversion of three complete codons",
          "Duplication of an entire promoter"
        ],
        "answer": 0,
        "explanation": "Adding a single base shifts the reading frame of all subsequent codons, completely altering the synthesized polypeptide."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "How does antidiuretic hormone (ADH) promote water retention in the mammalian kidney?",
        "options": [
          "Stimulates insertion of aquaporins into collecting duct luminal membranes",
          "Inhibits sodium pumps in the ascending limb of Henle",
          "Actively secretes water into the renal medulla",
          "Constricts the afferent arteriole to stop glomerular filtration",
          "Hydrolyses urea in the loop of Henle"
        ],
        "answer": 0,
        "explanation": "ADH binds to basolateral receptors, triggering insertion of aquaporin-2 water channels into the collecting duct apical membrane to reabsorb water."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "During which phase of mitosis do sister chromatids disjoin and migrate toward opposite spindle poles?",
        "options": [
          "Anaphase",
          "Metaphase",
          "Prophase",
          "Telophase",
          "Interphase"
        ],
        "answer": 0,
        "explanation": "In anaphase, centromeric cohesins are degraded and kinetochore microtubules shorten, drawing sister chromatids to opposite poles."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which enzyme is responsible for breaking hydrogen bonds to unwind the double helix during replication?",
        "options": [
          "DNA Helicase",
          "DNA Polymerase III",
          "DNA Ligase",
          "RNA Primase",
          "Topoisomerase"
        ],
        "answer": 0,
        "explanation": "DNA Helicase moves along the DNA phosphodiester backbone, disrupting base pair hydrogen bonds to advance the replication fork."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Approximately what proportion of energy is transferred from one trophic level to the next in food chains?",
        "options": [
          "$10\\%$",
          "$50\\%$",
          "$90\\%$",
          "$1\\%$",
          "$25\\%$"
        ],
        "answer": 0,
        "explanation": "Trophic efficiency is approximately 10%; ~90% of energy is dissipated as respiratory heat, excretory waste, and unconsumed material."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "Where does a non-competitive allosteric inhibitor bind on an enzyme?",
        "options": [
          "At a distinct regulatory allosteric site separate from the catalytic active site",
          "Directly inside the active site blocking substrate binding",
          "To the substrate molecule preventing association",
          "Exclusively to the product molecule",
          "To the aqueous solvent altering local pH"
        ],
        "answer": 0,
        "explanation": "Allosteric inhibitors bind to a non-active site, inducing a conformational change that alters active site geometry and catalytic activity."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Hard",
        "question": "A mother is a carrier ($X^H X^h$) for X-linked haemophilia and the father is unaffected ($X^H Y$). What is the probability their son has haemophilia?",
        "options": [
          "$50\\%$",
          "$25\\%$",
          "$0\\%$",
          "$100\\%$",
          "$75\\%$"
        ],
        "answer": 0,
        "explanation": "A son receives the Y chromosome from the father. There is a 50% chance he inherits $X^h$ from his mother, resulting in haemophilia."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "What is the specific role of calcium ions ($\\text{Ca}^{2+}$) in skeletal muscle contraction?",
        "options": [
          "Binds to troponin, shifting tropomyosin away from myosin-binding sites on actin",
          "Phosphorylates the myosin head directly",
          "Hydrolyses ATP inside the sarcoplasmic reticulum",
          "Blocks sodium channels on the sarcolemma",
          "Breaks down acetylcholine in the synaptic cleft"
        ],
        "answer": 0,
        "explanation": "$\\text{Ca}^{2+}$ binds to troponin C, triggering a conformational movement of tropomyosin that uncovers the active binding sites on actin."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "What chemical bonds primarily stabilize the secondary structure ($\\alpha$-helices and $\\beta$-sheets) of proteins?",
        "options": [
          "Hydrogen bonds between main-chain carbonyl and amide groups",
          "Disulfide bridges between cysteine side chains",
          "Ionic interactions between acidic and basic R-groups",
          "Hydrophobic interactions between aliphatic residues",
          "Covalent peptide bonds between adjacent amino acids"
        ],
        "answer": 0,
        "explanation": "Secondary structure is stabilized by regular hydrogen bonds between peptide backbone $N-H$ and $C=O$ groups."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What occurs during the annealing stage ($55^\\circ\\text{C}-65^\\circ\\text{C}$) of a PCR cycle?",
        "options": [
          "Oligonucleotide primers hybridize specifically to complementary flanking sequences on template strands",
          "Double-stranded DNA denatures into single strands",
          "Taq polymerase synthesizes daughter strands at its optimal rate",
          "Residual primers are degraded by nucleases",
          "dNTPs are phosphorylated to form ATP"
        ],
        "answer": 0,
        "explanation": "At annealing temperature, short single-stranded primers anneal by complementary base pairing to the template DNA strands."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which endocrine cells synthesize and secrete insulin in response to elevated blood glucose?",
        "options": [
          "Beta ($\\beta$) cells of pancreatic islets of Langerhans",
          "Alpha ($\\alpha$) cells of the pancreas",
          "Hepatocytes in the liver",
          "Adrenal cortex steroidogenic cells",
          "Pituitary somatotrophs"
        ],
        "answer": 0,
        "explanation": "Pancreatic $\\beta$-cells detect elevated blood glucose and release insulin to stimulate glucose uptake and glycogenesis."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which piece of evidence strongly supports the endosymbiotic origin of mitochondria?",
        "options": [
          "Mitochondria possess circular naked DNA and 70S ribosomes like prokaryotes",
          "They have a single phospholipid bilayer membrane",
          "They can synthesize glucose from carbon dioxide",
          "They lack any transport proteins in their envelope",
          "They contain 80S ribosomes identical to the cytoplasm"
        ],
        "answer": 0,
        "explanation": "Mitochondria contain their own circular genome, 70S ribosomes, divide by binary fission, and have a double membrane."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "The observation that 61 mRNA codons code for only 20 standard amino acids indicates that the code is:",
        "options": [
          "Degenerate",
          "Universal",
          "Non-overlapping",
          "Ambiguous",
          "Overlapping"
        ],
        "answer": 0,
        "explanation": "The genetic code is degenerate (redundant) because multiple synonymous codons specify the same amino acid."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "According to the cohesion-tension theory, what is the primary driving force pulling water up through xylem vessels?",
        "options": [
          "Negative hydrostatic pressure generated by evaporation from mesophyll cell walls",
          "Active ATP pumping by root cortical cells",
          "Positive root pressure pushing water from below",
          "Phloem osmotic pressure gradient",
          "Centripetal force from wind movement"
        ],
        "answer": 0,
        "explanation": "Transpiration from stomata creates tension (negative pressure) in leaf xylem, pulling water upward due to hydrogen-bonded cohesion."
      }
    ]
  },
  "diagnostic_1": {
    "Mathematics 1": [
      {
        "module": "Mathematics 1",
        "topic": "Surds & Indices",
        "difficulty": "Medium",
        "question": "Rationalise the denominator and simplify fully: $\\frac{5}{\\sqrt{7} - \\sqrt{6}}$.",
        "options": [
          "$5(\\sqrt{7} + \\sqrt{6})$",
          "$5(\\sqrt{7} - \\sqrt{6})$",
          "$\\frac{5(\\sqrt{7} + \\sqrt{6})}{13}$",
          "$5\\sqrt{6}$",
          "$5\\sqrt{7}$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by the conjugate $(\\sqrt{7} + \\sqrt{6})$. The denominator simplifies to $(7) - (6) = 1$. The result is $5(\\sqrt{7} + \\sqrt{6})$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "Find the gradient of the straight line perpendicular to the line $y = -2x + 4$.",
        "options": [
          "$\\frac{1}{2}$",
          "$-2$",
          "$--2$",
          "$-\\frac{1}{2}$",
          "$4$"
        ],
        "answer": 0,
        "explanation": "For perpendicular lines, $m_1 m_2 = -1$. With $m_1 = -2$, the perpendicular gradient is $m_2 = -\\frac{1}{-2}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Easy",
        "question": "Given the curve $y = 2x^{5} - 4x$, calculate the value of the derivative $\\frac{dy}{dx}$ at $x = 2$.",
        "options": [
          "$156$",
          "$160$",
          "$154$",
          "$158$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Differentiating: $\\frac{dy}{dx} = 10x^{4} - 4$. At $x = 2$, this equals $10(2^{4}) - 4 = 156$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "For what range of real values of $k$ does the equation $x^2 - 2kx + 36 = 0$ have two distinct real roots?",
        "options": [
          "$k < -6$ or $k > 6$",
          "$-6 < k < 6$",
          "$k = 6$",
          "$k \\ge 0$",
          "$k > 6$ only"
        ],
        "answer": 0,
        "explanation": "Distinct real roots require discriminant $\\Delta > 0$: $(-2k)^2 - 4(1)(36) > 0 \\implies 4k^2 - 144 > 0 \\implies k^2 > 36 \\implies k < -6$ or $k > 6$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Easy",
        "question": "A circle is given by $(x - -2)^2 + (y + 2)^2 = 36$. Identify its center and radius.",
        "options": [
          "Center $(-2, -2)$, radius $r = 6$",
          "Center $(--2, 2)$, radius $r = 6$",
          "Center $(-2, -2)$, radius $r = 36$",
          "Center $(0, 0)$, radius $r = 6$",
          "Center $(-2, 2)$, radius $r = 6$"
        ],
        "answer": 0,
        "explanation": "Standard circle form $(x - h)^2 + (y - k)^2 = r^2$ gives center $(h, k) = (-2, -2)$ and radius $r = \\sqrt{36} = 6$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "In how many distinct ways can a committee of $3$ individuals be selected from a pool of $6$ candidates?",
        "options": [
          "$20$",
          "$60$",
          "$30$",
          "$15$",
          "$18$"
        ],
        "answer": 0,
        "explanation": "Selection without regard to order is evaluated by combinations: $\\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Solve for $x$ in the equation $\\log_{2}(x + 2) = 5$.",
        "options": [
          "$30$",
          "$32$",
          "$28$",
          "$10$",
          "$25$"
        ],
        "answer": 0,
        "explanation": "Rewriting in exponential form: $x + 2 = 2^{5} = 32 \\implies x = 32 - 2 = 30$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "Using trigonometric identities, simplify $2\\sin(45^\\circ)\\cos(45^\\circ)$.",
        "options": [
          "$\\sin(90^\\circ)$",
          "$\\cos(90^\\circ)$",
          "$\\tan(90^\\circ)$",
          "$\\frac{1}{2}\\sin(90^\\circ)$",
          "$2\\sin(45^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the double-angle identity $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$, substituting $\\theta = 45^\\circ$ gives $\\sin(90^\\circ)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Determine the exact area bounded by the curve $y = 3x^2 + 1$, the $x$-axis, and vertical lines $x = 0$ and $x = 4$.",
        "options": [
          "$68$",
          "$66$",
          "$69$",
          "$48$",
          "$64$"
        ],
        "answer": 0,
        "explanation": "The area is $\\int_0^{4} (3x^2 + 1)\\,dx = [x^3 + 1x]_0^{4} = (4^3 + 1(4)) - 0 = 68$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Easy",
        "question": "If functions are defined as $f(x) = 5x$ and $g(x) = x^2 + 1$, evaluate $f(g(1))$.",
        "options": [
          "$10$",
          "$5$",
          "$15$",
          "$26$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "Evaluating inside first: $g(1) = 1^2 + 1 = 2$. Then $f(2) = 5 \\times 2 = 10$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Medium",
        "question": "In $\\triangle ABC$, the side $a = 16\\,\\text{cm}$ lies opposite angle $A = 30^\\circ$. What is the circumcircle diameter $2R$?",
        "options": [
          "$\\frac{16}{\\sin(30^\\circ)}$",
          "$16\\sin(30^\\circ)$",
          "$\\frac{16}{2\\sin(30^\\circ)}$",
          "$32\\sin(30^\\circ)$",
          "$16\\cos(30^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the extended Sine Rule, $\\frac{a}{\\sin A} = 2R$, so circumdiameter $2R = \\frac{16}{\\sin(30^\\circ)}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "For random events $A$ and $B$, $P(A) = 0.3$ and $P(A \\cap B) = 0.15$. Calculate the conditional probability $P(B | A)$.",
        "options": [
          "$0.50$",
          "$0.045$",
          "$0.15$",
          "$0.45$",
          "$0.50$"
        ],
        "answer": 0,
        "explanation": "By Bayes/conditional rule, $P(B | A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.15}{0.3} = 0.50$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Find the coefficient of $x^2$ in the algebraic binomial expansion of $(1 + x)^{4}$.",
        "options": [
          "$6$",
          "$4$",
          "$4$",
          "$12$",
          "$10$"
        ],
        "answer": 0,
        "explanation": "The general expansion term is $\\binom{n}{r} x^r$. For $x^2$, $r = 2$, so the coefficient is $\\binom{4}{2} = 6$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry",
        "difficulty": "Easy",
        "question": "What is the total sum of all interior angles of a convex polygon having $5$ sides?",
        "options": [
          "$540^\\circ$",
          "$720^\\circ$",
          "$360^\\circ$",
          "$900^\\circ$",
          "$360^\\circ$"
        ],
        "answer": 0,
        "explanation": "The interior angle sum formula is $(n - 2) \\times 180^\\circ = (5 - 2) \\times 180^\\circ = 540^\\circ$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Locate the $x$-coordinate of the stationary point on the parabola $y = 1x^2 - 6x + 7$.",
        "options": [
          "$3$",
          "$1$",
          "$-3$",
          "$0$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "Setting the derivative to zero: $\\frac{dy}{dx} = 2x - 6 = 0 \\implies x = 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "In a geometric sequence with first term $a = 1$ and common ratio $r = 4$, determine the $4^{\\text{th}}$ term.",
        "options": [
          "$64$",
          "$256$",
          "$63$",
          "$65$",
          "$16$"
        ],
        "answer": 0,
        "explanation": "The $n^{\\text{th}}$ term is $T_n = a r^{n-1}$. For $n = 4$: $T_4 = 1 \\times 4^3 = 64$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "A circular sector of radius $r = 10\\,\\text{cm}$ has central angle $\\theta = \\frac{\\pi}{3}\\,\\text{rad}$. Compute its area.",
        "options": [
          "$16.67\\pi\\,\\text{cm}^2$",
          "$10\\pi\\,\\text{cm}^2$",
          "$33.33\\pi\\,\\text{cm}^2$",
          "$2\\pi\\,\\text{cm}^2$",
          "$\\pi\\,\\text{cm}^2$"
        ],
        "answer": 0,
        "explanation": "Sector area formula: $A = \\frac{1}{2}r^2 \\theta = \\frac{1}{2}(10)^2 \\left(\\frac{\\pi}{3}\\right) = 16.67\\pi\\,\\text{cm}^2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Statistics",
        "difficulty": "Medium",
        "question": "A sample has mean $\\mu = 40$ and standard deviation $\\sigma = 6$. What is the standard deviation after transformation $Y = 3X + 5$?",
        "options": [
          "$18$",
          "$23$",
          "$54$",
          "$6$",
          "$125$"
        ],
        "answer": 0,
        "explanation": "Adding a constant does not alter spread. Multiplying by $a$ scales standard deviation by $|a|$: $\\sigma_Y = 3\\sigma_X = 3(6) = 18$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "When the polynomial $P(x) = 2x^3 - 3x^2 + 5$ is divided by $(x - 3)$, what is the numerical remainder?",
        "options": [
          "$32$",
          "$34$",
          "$29$",
          "$0$",
          "$-32$"
        ],
        "answer": 0,
        "explanation": "By the Remainder Theorem, the remainder upon division by $(x - c)$ equals $P(c) = 2(3)^3 - 3(3)^2 + 5 = 32$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "The graph of $y = f(x)$ is translated horizontally by vector $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$. State the new equation.",
        "options": [
          "$y = f(x - 1)$",
          "$y = f(x + 1)$",
          "$y = f(x) + 1$",
          "$y = f(x) - 1$",
          "$y = 1f(x)$"
        ],
        "answer": 0,
        "explanation": "A translation by $+a$ along the $x$-axis maps $x \\mapsto x - a$, giving $y = f(x - 1)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Hard",
        "question": "Find the Cartesian equation of the tangent line to the parabola $y = x^2$ at the point with $x$-coordinate $x = 2$.",
        "options": [
          "$y = 4x -4$",
          "$y = -\\frac{1}{4}x + 1$",
          "$y = 8x$",
          "$y = x + 2$",
          "$y = 4x + 4$"
        ],
        "answer": 0,
        "explanation": "Gradient is $m = \\frac{dy}{dx} = 2x = 4$. At $x = 2, y = 4$. Using $y - y_1 = m(x - x_1)$ yields $y = 4x -4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Hard",
        "question": "Decompose $\\frac{2x + 5}{(x + 1)(x + 2)}$ into partial fractions $\\frac{A}{x + 1} + \\frac{B}{x + 2}$. Find $(A, B)$.",
        "options": [
          "$(3, -1)$",
          "$(1, 1)$",
          "$(2, 3)$",
          "$(5, -3)$",
          "$(4, -2)$"
        ],
        "answer": 0,
        "explanation": "$2x + 5 = A(x + 2) + B(x + 1)$. At $x = -1 \\implies A = 3$. At $x = -2 \\implies B = -1$. Thus $(A, B) = (3, -1)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Vectors",
        "difficulty": "Easy",
        "question": "Compute the scalar dot product between $\\mathbf{u} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.",
        "options": [
          "$8$",
          "$13$",
          "$4$",
          "$10$",
          "$-2$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{u} \\cdot \\mathbf{v} = (5)(2) + (2)(-1) = 10 - 2 = 8$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Easy",
        "question": "If events $E_1$ and $E_2$ are statistically independent with $P(E_1) = 0.2$ and $P(E_2) = 0.6$, what is $P(E_1 \\cap E_2)$?",
        "options": [
          "$0.120$",
          "$0.80$",
          "$0.68$",
          "$0.2$",
          "$0.6$"
        ],
        "answer": 0,
        "explanation": "Independence implies $P(E_1 \\cap E_2) = P(E_1) \\times P(E_2) = 0.2 \\times 0.6 = 0.120$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "Find the sum of the first 10 terms of an arithmetic progression with first term $a = 6$ and common difference $d = 2$.",
        "options": [
          "$150$",
          "$130$",
          "$180$",
          "$24$",
          "$60$"
        ],
        "answer": 0,
        "explanation": "$S_n = \\frac{n}{2}[2a + (n-1)d] = 5[2(6) + 9(2)] = 150$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Hard",
        "question": "Solve $\\cos(x) = \\frac{1}{2}$ for all values in the principal interval $0 \\le x \\le 2\\pi$.",
        "options": [
          "$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          "$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$",
          "$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{4}, \\frac{7\\pi}{4}$",
          "$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$"
        ],
        "answer": 0,
        "explanation": "Cosine is positive in quadrants I and IV: $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Evaluate the second derivative $\\frac{d^2y}{dx^2}$ of $y = 4x^3 - 24x^2$ at $x = 2$.",
        "options": [
          "$0$",
          "$24$",
          "$-24$",
          "$48$",
          "$-48$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = 12x^2 - 48x$, so $\\frac{d^2y}{dx^2} = 24x - 48$. At $x = 2$: 24(2) - 48 = 0$."
      }
    ],
    "Mathematics 2": [
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Apply the product rule to differentiate $y = x^{1} e^{2x}$ with respect to $x$.",
        "options": [
          "$e^{2x}(1 + 2x)$",
          "$1 x^{0} e^{2x}$",
          "$2x^{1} e^{2x}$",
          "$21 x e^{2x}$",
          "$x^{1} e^{2x}$"
        ],
        "answer": 0,
        "explanation": "By $(uv)' = u'v + uv'$: $u' = 1x^{0}, v' = 2e^{2x}$. Factoring gives $x^{0} e^{2x}(1 + 2x)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Calculate the vector cross product $\\mathbf{i} \\times \\mathbf{j}$ in a right-handed Cartesian coordinate system.",
        "options": [
          "$\\mathbf{k}$",
          "$-\\mathbf{k}$",
          "$\\mathbf{0}$",
          "$\\mathbf{i}$",
          "$\\mathbf{j}$"
        ],
        "answer": 0,
        "explanation": "By the right-hand rule definition of orthonormal unit basis vectors, $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Easy",
        "question": "Compute the determinant of the $2 \\times 2$ matrix $M = \\begin{pmatrix} 2 & 1 \\\\ 2 & 5 \\end{pmatrix}$.",
        "options": [
          "$8$",
          "$12$",
          "$6$",
          "$10$",
          "$7$"
        ],
        "answer": 0,
        "explanation": "$\\det(M) = ad - bc = (2)(5) - (1)(2) = 8$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Using the substitution $u = x^2 + 5$, evaluate $\\int 2x(x^2 + 5)^3\\,dx$.",
        "options": [
          "$\\frac{1}{4}(x^2 + 5)^4 + C$",
          "$\\frac{1}{3}(x^2 + 5)^3 + C$",
          "$(x^2 + 5)^4 + C$",
          "$\\frac{1}{2}(x^2 + 5)^4 + C$",
          "$6x^2(x^2 + 5)^2 + C$"
        ],
        "answer": 0,
        "explanation": "$du = 2x\\,dx$. The integral transforms to $\\int u^3\\,du = \\frac{1}{4}u^4 + C = \\frac{1}{4}(x^2 + 5)^4 + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "For what value of $\\lambda$ are the 3D vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -1 \\\\ \\lambda \\end{pmatrix}$ perpendicular?",
        "options": [
          "$-1$",
          "$1$",
          "$5$",
          "$-5$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Perpendicular vectors have zero dot product: $2(1) + 3(-1) - \\lambda = 0 \\implies -1 - \\lambda = 0 \\implies \\lambda = -1$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Determine the modulus $|z|$ and principal argument $\\arg(z)$ of the complex number $z = 1 + i\\sqrt{3}$.",
        "options": [
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{6}$",
          "$|z| = 4, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 1, \\arg(z) = \\frac{\\pi}{4}$",
          "$|z| = \\sqrt{3}, \\arg(z) = \\frac{\\pi}{2}$"
        ],
        "answer": 0,
        "explanation": "$|z| = \\sqrt{1^2 + 3} = 2$. In quadrant I, $\\theta = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Differentiate $y = \\frac{\\sin(x)}{x}$ with respect to $x$ using the quotient rule.",
        "options": [
          "$\\frac{x\\cos(x) - \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x)}{1}$",
          "$\\frac{x\\sin(x) - \\cos(x)}{x^2}$",
          "$\\frac{x\\cos(x) + \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x) - x\\sin(x)}{x^2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{u'v - uv'}{v^2} = \\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "A plane has normal vector $\\mathbf{n} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 4 \\end{pmatrix}$ and passes through $(1, 0, 1)$. Find its equation.",
        "options": [
          "$2x - 3y + 4z = 6$",
          "$2x - 3y + 4z = 0$",
          "$2x - 3y + 4z = 2$",
          "$x + z = 6$",
          "$-2x + 3y - 4z = 1$"
        ],
        "answer": 0,
        "explanation": "$ax + by + cz = d \\implies 2(1) - 3(0) + 4(1) = 6$, so $2x - 3y + 4z = 6$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "By De Moivre's theorem, simplify the complex power $(\\cos\\theta + i\\sin\\theta)^{3}$.",
        "options": [
          "$\\cos(3\\theta) + i\\sin(3\\theta)$",
          "$\\cos^3\\theta + i\\sin^3\\theta$",
          "$3(\\cos\\theta + i\\sin\\theta)$",
          "$\\cos(\\theta / 3) + i\\sin(\\theta / 3)$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, which for $n = 3$ yields $\\cos(3\\theta) + i\\sin(3\\theta)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find $\\frac{dy}{dx}$ for the ellipse $x^2 + 4y^2 = 25$ using implicit differentiation.",
        "options": [
          "$-\\frac{x}{4y}$",
          "$-\\frac{4x}{y}$",
          "$\\frac{x}{4y}$",
          "$-\\frac{x}{2y}$",
          "$\\frac{25 - x}{4y}$"
        ],
        "answer": 0,
        "explanation": "$2x + 8y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Calculate the perpendicular distance from the origin $(0,0,0)$ to the plane $2x - y + 2z = 9$.",
        "options": [
          "$3$",
          "$9$",
          "$\\frac{9}{2}$",
          "$\\sqrt{9}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$D = \\frac{|0 - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{\\sqrt{9}} = 3$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the matrix inverse $A^{-1}$ for $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "options": [
          "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 6 - 5 = 1$. The inverse is $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Evaluate $\\int x e^x\\,dx$ using integration by parts.",
        "options": [
          "$x e^x - e^x + C$",
          "$x e^x + e^x + C$",
          "$\\frac{1}{2}x^2 e^x + C$",
          "$e^x - x e^x + C$",
          "$x^2 e^x + C$"
        ],
        "answer": 0,
        "explanation": "$u = x, dv = e^x dx \\implies uv - \\int v du = x e^x - \\int e^x dx = x e^x - e^x + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Two lines have direction vectors $\\mathbf{d}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{d}_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$. What is the acute angle between them?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$0^\\circ$"
        ],
        "answer": 0,
        "explanation": "$\\cos\\theta = \\frac{1(1) + 0 + 0}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "Evaluate the determinant of the upper-triangular matrix $M = \\begin{pmatrix} 2 & 4 & 5 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
        "options": [
          "$24$",
          "$9$",
          "$0$",
          "$48$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The determinant of any triangular matrix is the product of its diagonal elements: $2 \\times 3 \\times 4 = 24$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Solve the separable differential equation $\\frac{dy}{dx} = 2x y$ with initial condition $y(0) = 1$.",
        "options": [
          "$y = e^{x^2}$",
          "$y = e^{2x}$",
          "$y = x^2 + 1$",
          "$y = 2e^x - 1$",
          "$y = e^{x^2/2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{y}dy = 2x dx \\implies \\ln|y| = x^2 + C$. With $y(0) = 1 \\implies C = 0$, so $y = e^{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "At what point does the line $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ intersect the plane $x + y + z = 7$?",
        "options": [
          "$(3, 2, 2)$",
          "$(2, 2, 1)$",
          "$(1, 2, 0)$",
          "$(4, 2, 3)$",
          "$(0, 2, -1)$"
        ],
        "answer": 0,
        "explanation": "$(1 + t) + 2 + t = 7 \\implies 2t + 3 = 7 \\implies t = 2$. The point is $(1 + 2, 2, 0 + 2) = (3, 2, 2)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the roots of the quadratic equation $z^2 + 4z + 13 = 0$ in the complex domain.",
        "options": [
          "$-2 \\pm 3i$",
          "$2 \\pm 3i$",
          "$-4 \\pm 6i$",
          "$-2 \\pm 9i$",
          "$-2 \\pm i\\sqrt{13}$"
        ],
        "answer": 0,
        "explanation": "$z = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = -2 \\pm 3i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find the general solution to the homogeneous equation $\\frac{d^2y}{dx^2} - 9y = 0$.",
        "options": [
          "$y = A e^{3x} + B e^{-3x}$",
          "$y = A\\cos(3x) + B\\sin(3x)$",
          "$y = (A + Bx)e^{3x}$",
          "$y = A e^{9x}$",
          "$y = A\\cosh(9x)$"
        ],
        "answer": 0,
        "explanation": "Characteristic equation $m^2 - 9 = 0 \\implies m = \\pm 3$, giving $y = A e^{3x} + B e^{-3x}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Which vector operation yields the common perpendicular direction to two skew lines with direction vectors $\\mathbf{d}_1$ and $\\mathbf{d}_2$?",
        "options": [
          "$\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "$\\mathbf{d}_1 \\cdot \\mathbf{d}_2$",
          "$\\mathbf{d}_1 + \\mathbf{d}_2$",
          "$\\frac{\\mathbf{d}_1}{|\\mathbf{d}_2|}$",
          "$\\mathbf{d}_1 - \\mathbf{d}_2$"
        ],
        "answer": 0,
        "explanation": "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ produces a vector mutually perpendicular to both direction vectors."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Express the complex quotient $\\frac{5}{2 + i}$ in standard Cartesian form $x + iy$.",
        "options": [
          "$2 - i$",
          "$2 + i$",
          "$1 - 2i$",
          "$\\frac{10 - 5i}{3}$",
          "$5 - 2.5i$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by conjugate $(2 - i)$: $\\frac{5(2 - i)}{4 + 1} = 2 - i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Easy",
        "question": "Differentiate $y = \\cos(4x^3)$ with respect to $x$.",
        "options": [
          "$-12x^2 \\sin(4x^3)$",
          "$12x^2 \\sin(4x^3)$",
          "$-4\\sin(4x^3)$",
          "$-12x \\cos(4x^3)$",
          "$\\sin(12x^2)$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = -\\sin(4x^3) \\cdot \\frac{d}{dx}(4x^3) = -12x^2 \\sin(4x^3)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Easy",
        "question": "Determine the exact magnitude of the 3D position vector $\\mathbf{r} = \\begin{pmatrix} 4 \\\\ 1 \\\\ 8 \\end{pmatrix}$.",
        "options": [
          "$\\sqrt{81}$",
          "$13$",
          "$\\sqrt{13}$",
          "$32$",
          "$\\sqrt{48}$"
        ],
        "answer": 0,
        "explanation": "$|\\mathbf{r}| = \\sqrt{4^2 + 1^2 + 8^2} = \\sqrt{81}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "What geometric transformation is represented by the matrix $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ in $\\mathbb{R}^2$?",
        "options": [
          "Counter-clockwise rotation by $90^\\circ$ about the origin",
          "Clockwise rotation by $90^\\circ$ about the origin",
          "Reflection across the line $y = x$",
          "Reflection across the line $y = -x$",
          "Uniform scale factor of $-1$"
        ],
        "answer": 0,
        "explanation": "The standard rotation matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ with $\\theta = 90^\\circ$ matches $R$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "What are the first three non-zero terms of the Maclaurin expansion for $\\sin(x)$?",
        "options": [
          "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$1 - \\frac{x^2}{2} + \\frac{x^4}{24}$",
          "$x + \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$x - x^3 + x^5$",
          "$1 - x + \\frac{x^2}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + \\frac{x^5}{120}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Find a unit normal vector to the plane $3x + 4z = 10$.",
        "options": [
          "$\\begin{pmatrix} 3/5 \\\\ 0 \\\\ 4/5 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3/7 \\\\ 0 \\\\ 4/7 \\end{pmatrix}$",
          "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
          "$\\begin{pmatrix} 4/5 \\\\ 0 \\\\ -3/5 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{n} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$, magnitude $\\sqrt{3^2 + 4^2} = 5$. The unit normal is $\\frac{1}{5}\\mathbf{n}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "What is the algebraic sum of all $n$ complex $n^{\\text{th}}$ roots of unity for any integer $n \\ge 2$?",
        "options": [
          "$0$",
          "$1$",
          "$n$",
          "$-1$",
          "$n\\pi$"
        ],
        "answer": 0,
        "explanation": "The roots satisfy $z^n - 1 = 0$. By Vieta's formulas, the sum of roots is the coefficient of $z^{n-1}$, which is $0$."
      }
    ],
    "Physics": [
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A car starts with velocity $u = 0\\,\\text{m s}^{-1}$ and accelerates uniformly at $a = 4\\,\\text{m s}^{-2}$ for $t = 2\\,\\text{s}$. Find displacement $s$.",
        "options": [
          "$8\\,\\text{m}$",
          "$18\\,\\text{m}$",
          "$3\\,\\text{m}$",
          "$8\\,\\text{m}$",
          "$4\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$s = ut + \\frac{1}{2}at^2 = (0)(2) + 0.5(4)(2^2) = 8\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "Two identical resistors of $R = 15\\,\\Omega$ are wired in parallel across a 18\\,\\text{V}$ ideal battery. What total current is drawn?",
        "options": [
          "$2.40\\,\\text{A}$",
          "$1.20\\,\\text{A}$",
          "$4.80\\,\\text{A}$",
          "$1.20\\,\\text{A}$",
          "$270\\,\\text{A}$"
        ],
        "answer": 0,
        "explanation": "$R_{eq} = \\frac{15}{2} = 7.5\\,\\Omega$. $I = \\frac{V}{R_{eq}} = \\frac{18}{7.5} = 2.40\\,\\text{A}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "An ideal gas at temperature $T_1 = 300\\,\\text{K}$ and pressure $P_1$ in a rigid sealed container has its temperature raised to $600\\,\\text{K}$. What is the new pressure $P_2$?",
        "options": [
          "$2P_1$",
          "$\\frac{1}{2}P_1$",
          "$4P_1$",
          "$P_1$",
          "$\\sqrt{2}P_1$"
        ],
        "answer": 0,
        "explanation": "At constant volume, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\frac{600}{300} = 2P_1$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A pulling force of 40\\,\\text{N}$ acts on a mass of 4\\,\\text{kg}$ against friction of 8\\,\\text{N}$. Calculate its acceleration.",
        "options": [
          "$8.00\\,\\text{m s}^{-2}$",
          "$10.00\\,\\text{m s}^{-2}$",
          "$12.00\\,\\text{m s}^{-2}$",
          "$2.00\\,\\text{m s}^{-2}$",
          "$160\\,\\text{m s}^{-2}$"
        ],
        "answer": 0,
        "explanation": "$F_{net} = 40 - 8 = 32\\,\\text{N}$. $a = \\frac{F_{net}}{m} = \\frac{32}{4} = 8.00\\,\\text{m s}^{-2}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Easy",
        "question": "A sound wave propagates at $340\\,\\text{m s}^{-1}$ with frequency $f = 500\\,\\text{Hz}$. What is its wavelength $\\lambda$?",
        "options": [
          "$0.68\\,\\text{m}$",
          "$170000\\,\\text{m}$",
          "$1.47\\,\\text{m}$",
          "$1.36\\,\\text{m}$",
          "$0.34\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$\\lambda = \\frac{v}{f} = \\frac{340}{500} = 0.68\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "A satellite orbits Earth at radius $r$ with speed $v$. If it moves to an orbit of radius $4r$, what is its new orbital speed?",
        "options": [
          "$\\frac{1}{2}v$",
          "$\\frac{1}{4}v$",
          "$2v$",
          "$4v$",
          "$\\frac{1}{\\sqrt{2}}v$"
        ],
        "answer": 0,
        "explanation": "$v = \\sqrt{\\frac{GM}{r}}$. At radius $4r$, $v' = \\sqrt{\\frac{GM}{4r}} = \\frac{1}{2}v$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A cart of mass 4\\,\\text{kg}$ moving at 3\\,\\text{m s}^{-1}$ collides with and sticks to a stationary cart of mass 2\\,\\text{kg}$. Find their final speed.",
        "options": [
          "$2.00\\,\\text{m s}^{-1}$",
          "$3\\,\\text{m s}^{-1}$",
          "$4.00\\,\\text{m s}^{-1}$",
          "$6.00\\,\\text{m s}^{-1}$",
          "$0\\,\\text{m s}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{4 \\times 3}{6} = 2.00\\,\\text{m s}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "In a Young's double-slit experiment, fringe separation is $w$. If slit separation $s$ is doubled and screen distance $D$ is halved, what is the new fringe width?",
        "options": [
          "$\\frac{1}{4}w$",
          "$\\frac{1}{2}w$",
          "$w$",
          "$2w$",
          "$4w$"
        ],
        "answer": 0,
        "explanation": "$w = \\frac{\\lambda D}{s}$. New width $w' = \\frac{\\lambda (D/2)}{2s} = \\frac{1}{4}w$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "Two point charges experience electrostatic force $F$ at distance $d$. What is the force when separation is reduced to $\\frac{d}{3}$?",
        "options": [
          "$9F$",
          "$3F$",
          "$\\frac{1}{3}F$",
          "$\\frac{1}{9}F$",
          "$6F$"
        ],
        "answer": 0,
        "explanation": "$F \\propto \\frac{1}{r^2}$. Dividing distance by 3 multiplies force by $3^2 = 9$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "Calculate the gravitational potential energy gained when an object of mass 5\\,\\text{kg}$ is lifted vertically by 4\\,\\text{m}$ ($g = 9.8\\,\\text{m s}^{-2}$).",
        "options": [
          "$196.0\\,\\text{J}$",
          "$98.0\\,\\text{J}$",
          "$392.0\\,\\text{J}$",
          "$20\\,\\text{J}$",
          "$2.0\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta E_p = mgh = (5)(9.8)(4) = 196.0\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A battery with $\\text{EMF} = 12\\,\\text{V}$ and internal resistance $r = 1.5\\,\\Omega$ is connected to load $R = 4.5\\,\\Omega$. Find the terminal potential difference.",
        "options": [
          "$9.00\\,\\text{V}$",
          "$12\\,\\text{V}$",
          "$3.00\\,\\text{V}$",
          "$2.00\\,\\text{V}$",
          "$4.50\\,\\text{V}$"
        ],
        "answer": 0,
        "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{12}{6}$. Terminal $V = IR = 9.00\\,\\text{V}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "How much heat is required to warm 2\\,\\text{kg}$ of liquid water ($c = 4200\\,\\text{J kg}^{-1}\\,\\text{K}^{-1}$) by $\\Delta T = 25\\,\\text{K}$?",
        "options": [
          "$210000\\,\\text{J}$",
          "$105000\\,\\text{J}$",
          "$420000\\,\\text{J}$",
          "$105000\\,\\text{J}$",
          "$50\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$Q = mc\\Delta T = (2)(4200)(25) = 210000\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A car of mass 1500\\,\\text{kg}$ negotiates a curve of radius 80\\,\\text{m}$ at speed 20\\,\\text{m s}^{-1}$. Compute the centripetal force required.",
        "options": [
          "$7500\\,\\text{N}$",
          "$15000\\,\\text{N}$",
          "$3750\\,\\text{N}$",
          "$30000\\,\\text{N}$",
          "$375\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "$F_c = \\frac{mv^2}{r} = \\frac{1500 \\times 20^2}{80} = 7500\\,\\text{N}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A light beam in air ($n_1 = 1.0$) enters glass ($n_2 = 1.50$) at angle of incidence $\\theta_1 = 30^\\circ$. What is the value of $\\sin(\\theta_2)$?",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$",
          "$\\frac{\\sqrt{3}}{3}$"
        ],
        "answer": 0,
        "explanation": "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies (1.0)\\sin(30^\\circ) = 1.50\\sin\\theta_2 \\implies 0.5 = 1.5\\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{1}{3}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "A charged particle enters a uniform magnetic field with velocity perpendicular to the field lines. What trajectory does it follow?",
        "options": [
          "A circle in the plane perpendicular to the magnetic field",
          "A straight line with uniform acceleration",
          "A parabolic path along the magnetic field",
          "A hyperbolic escape path",
          "A stationary oscillation"
        ],
        "answer": 0,
        "explanation": "Because the magnetic force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ is always normal to velocity, speed is constant and motion is uniform circular."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A spring of stiffness $k = 250\\,\\text{N m}^{-1}$ is extended by $\\Delta x = 0.05\\,\\text{m}$. What is the stored elastic potential energy?",
        "options": [
          "$0.313\\,\\text{J}$",
          "$12.50\\,\\text{J}$",
          "$0.626\\,\\text{J}$",
          "$6.250\\,\\text{J}$",
          "$0.078\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$E_e = \\frac{1}{2}k(\\Delta x)^2 = 0.5(250)(0.05^2) = 0.313\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Light of wavelength $\\lambda = 500\\,\\text{nm}$ illuminates a diffraction grating with $500\\,\\text{lines per mm}$. What is the highest observable order $m$?",
        "options": [
          "$4$",
          "$2$",
          "$5$",
          "$3$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "Slit spacing $d = \\frac{10^{-3}\\,\\text{m}}{500} = 2 \\times 10^{-6}\\,\\text{m}$. Max order is $m \\le \\frac{d}{\\lambda} = \\frac{2 \\times 10^{-6}}{500 \\times 10^{-9}} = 4$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "Two parallel metal plates separated by 0.01\\,\\text{m}$ have a potential difference of 150\\,\\text{V}$. Find the electric field strength $E$.",
        "options": [
          "$15000\\,\\text{V m}^{-1}$",
          "$7500\\,\\text{V m}^{-1}$",
          "$30000\\,\\text{V m}^{-1}$",
          "$1.5\\,\\text{V m}^{-1}$",
          "$0\\,\\text{V m}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$E = \\frac{V}{d} = \\frac{150}{0.01} = 15000\\,\\text{V m}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A uniform plank of length $4.0\\,\\text{m}$ and weight $200\\,\\text{N}$ is supported at its midpoint. What force applied at one end maintains equilibrium?",
        "options": [
          "$0\\,\\text{N}$",
          "$100\\,\\text{N}$",
          "$200\\,\\text{N}$",
          "$50\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "Because the pivot is at the centre of mass, the plank's weight exerts zero torque about the pivot, requiring zero force to maintain balance."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A wire of resistance $R$ is drawn out so that its length is doubled while volume is conserved. What is its new resistance?",
        "options": [
          "$4R$",
          "$2R$",
          "$R$",
          "$\\frac{1}{2}R$",
          "$\\frac{1}{4}R$"
        ],
        "answer": 0,
        "explanation": "Doubling length ($L \\to 2L$) halves cross-sectional area ($A \\to A/2$). Resistance $R' = \\rho \\frac{2L}{A/2} = 4R$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "If the absolute temperature of an ideal gas is quadrupled, what factor does the root-mean-square molecular speed $c_{\\text{rms}}$ increase by?",
        "options": [
          "Factor of 2",
          "Factor of 4",
          "Factor of 16",
          "Factor of 1.41",
          "Remains unchanged"
        ],
        "answer": 0,
        "explanation": "$c_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} \\propto \\sqrt{T}$. Quadrupling $T$ multiplies speed by $\\sqrt{4} = 2$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "At what launch angle $\\theta$ above horizontal does a projectile achieve maximum horizontal range on level ground?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$15^\\circ$"
        ],
        "answer": 0,
        "explanation": "Range $R = \\frac{u^2 \\sin(2\\theta)}{g}$ is maximized when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A stretched string of length $L$ vibrates in its fundamental harmonic mode with nodes at both fixed ends. What is the wavelength $\\lambda_1$?",
        "options": [
          "$2L$",
          "$L$",
          "$\\frac{L}{2}$",
          "$4L$",
          "$\\frac{2L}{3}$"
        ],
        "answer": 0,
        "explanation": "Fundamental mode consists of a single loop: $L = \\frac{\\lambda}{2} \\implies \\lambda = 2L$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "According to Faraday's Law, the induced electromotive force in a circuit is directly proportional to the:",
        "options": [
          "Time rate of change of magnetic flux linkage",
          "Total resistance of the circuit loop",
          "Steady current flowing in the coil",
          "Temperature of the magnet",
          "Square of the magnetic flux"
        ],
        "answer": 0,
        "explanation": "Faraday's Law states $\\mathcal{E} = -\\frac{d\\Phi}{dt}$, so induced EMF equals the rate of change of flux linkage."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A constant force of 50\\,\\text{N}$ acts on an object for a duration of $\\Delta t = 0.1\\,\\text{s}$. What impulse is imparted?",
        "options": [
          "$5.00\\,\\text{N s}$",
          "$10.00\\,\\text{N s}$",
          "$500.0\\,\\text{N s}$",
          "$2.50\\,\\text{N s}$",
          "$50.1\\,\\text{N s}$"
        ],
        "answer": 0,
        "explanation": "$\\text{Impulse} = F \\Delta t = (50)(0.1) = 5.00\\,\\text{N s}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Why does an observer perceive a higher pitch when an emergency siren approaches at constant velocity?",
        "options": [
          "The emitted wavefronts are compressed in the forward direction, reducing observed wavelength",
          "The velocity of sound in the air increases toward the observer",
          "The source emits sound with a physically higher intrinsic frequency",
          "The acoustic amplitude of the sound wave increases linearly",
          "Air molecules accelerate along with the vehicle"
        ],
        "answer": 0,
        "explanation": "Motion towards the listener crowds wavefronts, shortening perceived wavelength $\\lambda$. Since wave speed $v$ in air is constant, observed frequency $f = \\frac{v}{\\lambda}$ rises."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "What is the theoretical ratio of surface escape velocity $v_{\\text{esc}}$ to circular surface orbital speed $v_{\\text{orb}}$ for any spherical planet?",
        "options": [
          "$\\sqrt{2}$",
          "$2$",
          "$1$",
          "$\\frac{1}{\\sqrt{2}}$",
          "$4$"
        ],
        "answer": 0,
        "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$ and $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$, giving $\\frac{v_{\\text{esc}}}{v_{\\text{orb}}} = \\sqrt{2}$."
      }
    ],
    "Chemistry": [
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "What is the ground-state electron configuration of neutral Phosphorus (Z=15)?",
        "options": [
          "$1s^2 2s^2 2p^6 3s^2 3p^3$",
          "$1s^2 2s^2 2p^6 3d^1$",
          "$1s^2 2s^2 2p^5 3s^2$",
          "$1s^2 2s^2 2p^6 4s^1$",
          "$1s^2 2s^2 2p^6 3s^2 3d^1$"
        ],
        "answer": 0,
        "explanation": "Electrons populate orbitals in order of ascending energy according to the Aufbau principle: $1s \\to 2s \\to 2p \\to 3s \\to 3p$. For Phosphorus (Z=15), this is $1s^2 2s^2 2p^6 3s^2 3p^3$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "Given $\\sum \\Delta H_f^\\circ(\\text{products}) = -1100\\,\\text{kJ mol}^{-1}$ and $\\sum \\Delta H_f^\\circ(\\text{reactants}) = -350\\,\\text{kJ mol}^{-1}$, calculate the reaction enthalpy $\\Delta H_{\\text{rxn}}^\\circ$.",
        "options": [
          "$-750\\,\\text{kJ mol}^{-1}$",
          "$750\\,\\text{kJ mol}^{-1}$",
          "$-1450\\,\\text{kJ mol}^{-1}$",
          "$-1100\\,\\text{kJ mol}^{-1}$",
          "$-350\\,\\text{kJ mol}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta H^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants}) = (-1100) - (-350) = -750\\,\\text{kJ mol}^{-1}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "State the official IUPAC systematic name for the organic molecule with formula $\\text{CH_3CHO}$.",
        "options": [
          "Ethanal",
          "Methanol",
          "Methanoic acid",
          "Butanone",
          "Ethyl methanoate"
        ],
        "answer": 0,
        "explanation": "The molecular structure $\\text{CH_3CHO}$ matches the functional group of Ethanal."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Predict the molecular geometry and characteristic bond angle of Boron trifluoride (BF_3) using VSEPR theory.",
        "options": [
          "Trigonal planar, 120°",
          "Linear, 180°",
          "Tetrahedral, 109.5°",
          "T-shaped, 90°",
          "Square planar, 90°"
        ],
        "answer": 0,
        "explanation": "Minimizing electron pair repulsions gives Boron trifluoride (BF_3) its characteristic geometry: Trigonal planar, 120°."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "For the exothermic equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ ($\\Delta H < 0$), which combination shifts position towards products?",
        "options": [
          "Decreasing temperature and increasing total pressure",
          "Increasing temperature and decreasing total pressure",
          "Introducing an iron catalyst at constant volume",
          "Decreasing total pressure only",
          "Selectively withdrawing nitrogen gas"
        ],
        "answer": 0,
        "explanation": "Lower temperature favours the forward exothermic direction; higher pressure favours the side with fewer gas moles (2 moles vs 4 moles)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "Hydrolysis of 2-bromo-2-methylpropane in aqueous hydroxide proceeds predominantly via which pathway?",
        "options": [
          "$S_N1$ mechanism via a stable tertiary carbocation intermediate",
          "$S_N2$ mechanism via a single concerted transition state",
          "Electrophilic addition across a double bond",
          "Free-radical chain substitution",
          "Elimination forming exclusively 2-methylprop-1-ene"
        ],
        "answer": 0,
        "explanation": "Tertiary haloalkanes undergo $S_N1$ hydrolysis because steric hindrance impedes backside nucleophilic attack while the tertiary carbocation is stabilised by hyperconjugation."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why is the first ionisation energy of oxygen slightly lower than that of nitrogen?",
        "options": [
          "Spin-pair repulsion between the two paired electrons in one of oxygen's 2p orbitals",
          "Oxygen has greater shielding from core electrons",
          "Nitrogen's 2p electrons reside in a higher shell",
          "Oxygen has a larger atomic radius than nitrogen",
          "Oxygen possesses fewer protons than nitrogen"
        ],
        "answer": 0,
        "explanation": "Nitrogen has a half-filled $2p^3$ subshell. Oxygen's fourth 2p electron must pair up, and mutual spin-pair repulsion eases its removal."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "Calculate the pH of a hydrochloric acid solution with $[\\text{H}^+] = 0.05\\,\\text{mol dm}^{-3}$.",
        "options": [
          "$1.30$",
          "$12.70$",
          "$2.30$",
          "$0.30$",
          "$7.00$"
        ],
        "answer": 0,
        "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(0.05) = 1.30$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following molecules possesses a chiral carbon centre and exhibits optical isomerism?",
        "options": [
          "Butan-2-ol",
          "Propan-2-ol",
          "Ethanol",
          "Propane",
          "Methanol"
        ],
        "answer": 0,
        "explanation": "In butan-2-ol, carbon-2 is bonded to 4 distinct ligands: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{C}_2\\text{H}_5$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does water have an anomalously high boiling point compared to hydrogen sulfide?",
        "options": [
          "Strong intermolecular hydrogen bonding between electronegative oxygen and hydrogen",
          "Covalent O-H bonds inside water molecules are stronger than S-H bonds",
          "Hydrogen sulfide exhibits stronger London dispersion forces",
          "Water is non-polar while H2S is ionic",
          "Sulfur is more electronegative than oxygen"
        ],
        "answer": 0,
        "explanation": "Oxygen is small and strongly electronegative, creating extensive networks of intermolecular hydrogen bonds that require large thermal energy to disrupt."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "For a reaction with empirical rate equation $\\text{Rate} = k[A]^2 [B]$, what is the overall reaction order?",
        "options": [
          "Third order",
          "Second order",
          "First order",
          "Zero order",
          "Fourth order"
        ],
        "answer": 0,
        "explanation": "The overall order is the sum of exponents in the rate law: $2 + 1 = 3$ (third order)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "What is the major organic product when propene reacts with hydrogen bromide ($\\text{HBr}$)?",
        "options": [
          "2-bromopropane",
          "1-bromopropane",
          "1,2-dibromopropane",
          "Propane",
          "Bromopropene"
        ],
        "answer": 0,
        "explanation": "Markovnikov addition yields the more stable secondary carbocation intermediate, producing 2-bromopropane as the major product."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Determine the number of moles in 40\\,\\text{cm}^3$ of a 0.25\\,\\text{mol dm}^{-3}$ solution.",
        "options": [
          "$0.0100\\,\\text{mol}$",
          "$0.100\\,\\text{mol}$",
          "$0.00100\\,\\text{mol}$",
          "$10\\,\\text{mol}$",
          "$160.0\\,\\text{mol}$"
        ],
        "answer": 0,
        "explanation": "$n = C \\times V = 0.25 \\times \\frac{40}{1000} = 0.0100\\,\\text{mol}$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "How does the addition of a positive catalyst increase the rate of a chemical reaction?",
        "options": [
          "Provides an alternative mechanism with lower activation energy",
          "Increases the average kinetic energy of reactant molecules",
          "Increases the total enthalpy of the products",
          "Decreases the total volume of the reaction container",
          "Increases the frequency of collision of all particles"
        ],
        "answer": 0,
        "explanation": "A catalyst lowers the activation energy $E_a$, so a greater proportion of molecular collisions satisfy $E \\ge E_a$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "What functional group is produced when a secondary alcohol such as propan-2-ol is heated under reflux with acidified dichromate?",
        "options": [
          "Ketone",
          "Carboxylic acid",
          "Aldehyde",
          "Ester",
          "Alkene"
        ],
        "answer": 0,
        "explanation": "Oxidation of a secondary alcohol produces a ketone; it cannot undergo further oxidation under mild conditions."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does solid sodium chloride not conduct electricity, while molten sodium chloride conducts readily?",
        "options": [
          "Ions are held in fixed lattice positions in the solid but are free to move in the molten liquid",
          "Electrons become delocalised only during the phase transition",
          "Ionic bonds convert to covalent bonds upon melting",
          "Sodium atoms lose their charge in the liquid phase",
          "Solid NaCl contains neutral atoms rather than ions"
        ],
        "answer": 0,
        "explanation": "Electrical conduction requires mobile charge carriers. In molten NaCl, the giant ionic lattice breaks down, freeing $\\text{Na}^+$ and $\\text{Cl}^-$ ions to migrate."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "In an Arrhenius plot of $\\ln k$ against $\\frac{1}{T}$, what physical quantity does the gradient represent?",
        "options": [
          "$-\\frac{E_a}{R}$",
          "$\\frac{E_a}{R}$",
          "$-E_a$",
          "$\\ln A$",
          "$-RT$"
        ],
        "answer": 0,
        "explanation": "Taking logs of $k = A e^{-E_a/RT}$ gives $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Gradient is $-\\frac{E_a}{R}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "In TLC, a dye spot travels 5\\,\\text{cm}$ while the solvent front advances $10.0\\,\\text{cm}$. What is the $R_f$ value?",
        "options": [
          "$0.50$",
          "$5.0$",
          "$0.50$",
          "$2.00$",
          "$0.25$"
        ],
        "answer": 0,
        "explanation": "$R_f = \\frac{\\text{distance travelled by spot}}{\\text{distance travelled by solvent}} = \\frac{5}{10.0} = 0.50$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does magnesium have a significantly higher melting point than sodium in Period 3?",
        "options": [
          "Magnesium ions ($Mg^{2+}$) have higher charge and release 2 delocalised electrons per atom into the sea",
          "Magnesium forms giant covalent lattices whereas sodium is simple molecular",
          "Sodium has a higher atomic mass than magnesium",
          "Magnesium has more electron shells than sodium",
          "Sodium forms weaker covalent bonds"
        ],
        "answer": 0,
        "explanation": "$\\text{Mg}^{2+}$ has higher charge density and twice as many delocalised electrons as $\\text{Na}^+$, resulting in stronger electrostatic attraction."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "Which mixture forms an acidic buffer capable of resisting pH changes on addition of small amounts of acid or alkali?",
        "options": [
          "Ethanoic acid and sodium ethanoate",
          "Hydrochloric acid and sodium hydroxide in equal moles",
          "Hydrochloric acid and sodium chloride",
          "Pure distilled water",
          "Concentrated ammonia and sodium chloride"
        ],
        "answer": 0,
        "explanation": "An acidic buffer requires a weak acid (e.g. $\\text{CH}_3\\text{COOH}$) and its conjugate base salt (e.g. $\\text{CH}_3\\text{COONa}$)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which reactants combine in the presence of an acid catalyst to produce ethyl ethanoate?",
        "options": [
          "Ethanoic acid and ethanol",
          "Methanoic acid and propanol",
          "Ethanol and ethanal",
          "Ethylamine and ethanoic acid",
          "Ethene and steam"
        ],
        "answer": 0,
        "explanation": "$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Chlorine comprises $^{35}\\text{Cl}$ (60%) and $^{37}\\text{Cl}$ (40%). Calculate its relative atomic mass $A_r$.",
        "options": [
          "$35.80$",
          "$36.00$",
          "$36.30$",
          "$35.30$",
          "$35.00$"
        ],
        "answer": 0,
        "explanation": "$A_r = \\frac{35(60) + 37(40)}{100} = 35.80$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "What is the equilibrium constant $K_c$ expression for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$?",
        "options": [
          "$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$",
          "$K_c = \\frac{[\\text{SO}_2]^2 [\\text{O}_2]}{[\\text{SO}_3]^2}$",
          "$K_c = \\frac{2[\\text{SO}_3]}{2[\\text{SO}_2] + [\\text{O}_2]}$",
          "$K_c = [\\text{SO}_3]^2 - [\\text{SO}_2]^2 [\\text{O}_2]$",
          "$K_c = \\frac{[\\text{SO}_3]}{[\\text{SO}_2][\\text{O}_2]}$"
        ],
        "answer": 0,
        "explanation": "Products over reactants, raised to stoichiometric powers: $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following represents a termination step in the free-radical chlorination of methane?",
        "options": [
          "$\\text{Cl}^\\bullet + \\text{Cl}^\\bullet \\to \\text{Cl}_2$",
          "$\\text{Cl}_2 \\to 2\\text{Cl}^\\bullet$",
          "$\\text{CH}_4 + \\text{Cl}^\\bullet \\to \\text{CH}_3^\\bullet + \\text{HCl}$",
          "$\\text{CH}_3^\\bullet + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$",
          "$\\text{CH}_4 \\to \\text{CH}_3^\\bullet + \\text{H}^\\bullet$"
        ],
        "answer": 0,
        "explanation": "Termination involves two radical species combining to form a stable covalent bond, removing radicals from the system."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Why can graphite conduct electricity while diamond cannot?",
        "options": [
          "Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along layers",
          "Graphite consists of ionic bonds between layers",
          "Diamond has a smaller bandgap than graphite",
          "Graphite contains mobile carbon ions",
          "Diamond has weak intermolecular forces"
        ],
        "answer": 0,
        "explanation": "In graphite, each carbon is $sp^2$ hybridized with 3 covalent bonds; the fourth valence electron is delocalised across planar hexagonal sheets."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "What is the oxidation number of manganese in the permanganate ion $\\text{MnO}_4^-$?",
        "options": [
          "$+7$",
          "$+4$",
          "$+2$",
          "$+6$",
          "$+5$"
        ],
        "answer": 0,
        "explanation": "$x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "An intense, sharp absorption band at $\\sim 1715\\,\\text{cm}^{-1}$ in an infrared spectrum indicates which functional group?",
        "options": [
          "Carbonyl (C=O)",
          "Alcohol (O-H broad stretch)",
          "Alkyne (C≡C)",
          "Alkane (C-C single bond)",
          "Amine (N-H stretch)"
        ],
        "answer": 0,
        "explanation": "The $\\text{C=O}$ double bond has a strong dipole change during stretching, producing a sharp characteristic peak between $1680 - 1750\\,\\text{cm}^{-1}$."
      }
    ],
    "Biology": [
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "What is the primary cellular function of Chloroplast in eukaryotic cells?",
        "options": [
          "Light-dependent and independent photosynthesis",
          "Cellulose cell wall synthesis",
          "Active transport of sodium across myelin sheath",
          "DNA replication proofreading",
          "Glycogen granule storage"
        ],
        "answer": 0,
        "explanation": "In cell ultrastructure, the distinct physiological role of Chloroplast is Light-dependent and independent photosynthesis."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "A double-stranded DNA sample contains 18% Adenine. What percentage of Cytosine does it contain?",
        "options": [
          "32%",
          "18%",
          "36%",
          "82%",
          "50%"
        ],
        "answer": 0,
        "explanation": "By Chargaff's rules, $%A = \\%T = 18\\%$. $%G + \\%C = 100 - 36 = 64\\%$. Since $%G = \\%C$, Cytosine is $\\frac{64}{2} = 32\\%$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "During ventricular systole in the human cardiac cycle, what is the operational state of the valves?",
        "options": [
          "Atrioventricular valves closed; semilunar valves open",
          "Atrioventricular valves open; semilunar valves closed",
          "Both atrioventricular and semilunar valves are open",
          "Both atrioventricular and semilunar valves are closed",
          "Tricuspid open; bicuspid closed"
        ],
        "answer": 0,
        "explanation": "Ventricular pressure exceeds atrial pressure, snapping AV valves shut (first heart sound), while exceeding arterial pressure to open semilunar valves."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "A cell with actual diameter 30\\,\\mu\\text{m}$ is viewed under magnification $\\times 500$. Calculate its image size in mm.",
        "options": [
          "$15.00\\,\\text{mm}$",
          "$150.0\\,\\text{mm}$",
          "$1.500\\,\\text{mm}$",
          "$15000\\,\\text{mm}$",
          "$16.67\\,\\text{mm}$"
        ],
        "answer": 0,
        "explanation": "$I = A \\times M = 30\\,\\mu\\text{m} \\times 500 = 15000\\,\\mu\\text{m} = 15.00\\,\\text{mm}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "If a DNA template strand reads $3'-TAC-GCT-ACT-5'$, what is the complementary mRNA sequence produced?",
        "options": [
          "$5'-AUG-CGA-UGA-3'$",
          "$5'-TAC-GCT-ACT-3'$",
          "$3'-AUG-CGA-UGA-5'$",
          "$5'-AUG-AAA-CCC-3'$",
          "$3'-UAC-GGA-CAU-5'$"
        ],
        "answer": 0,
        "explanation": "RNA synthesis pairs $T\\to A, A\\to U, C\\to G, G\\to C$ antiparallel to template: $5'-AUG-CGA-UGA-3'$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which feature of human lungs is an adaptation specifically maximizing diffusion rate according to Fick's Law?",
        "options": [
          "A single layer of flattened squamous epithelial cells minimizing diffusion pathway",
          "Cartilage rings preventing bronchial collapse",
          "Goblet cells secreting protective mucus",
          "Pleural fluid lubricating thoracic movements",
          "Intercostal muscles expanding the rib cage"
        ],
        "answer": 0,
        "explanation": "Fick's law states diffusion rate is inversely proportional to barrier thickness. Squamous epithelium provides an ultra-thin pathway (~0.5 $\\mu$m)."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "How does a competitive inhibitor influence the enzyme kinetic parameters $V_{\\text{max}}$ and $K_m$?",
        "options": [
          "$V_{\\text{max}}$ remains unchanged; $K_m$ increases",
          "$V_{\\text{max}}$ decreases; $K_m$ remains unchanged",
          "$V_{\\text{max}}$ decreases; $K_m$ decreases",
          "Both $V_{\\text{max}}$ and $K_m$ increase",
          "Both $V_{\\text{max}}$ and $K_m$ remain unchanged"
        ],
        "answer": 0,
        "explanation": "High substrate concentrations displace competitive inhibitors from the active site ($V_{\\text{max}}$ unchanged), but higher $[S]$ is required for half-maximal velocity ($K_m$ increases)."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "In a monohybrid cross $Aa \\times Aa$ producing 160$ total offspring, how many are expected to display the recessive phenotype?",
        "options": [
          "$40$",
          "$120$",
          "$80$",
          "$20$",
          "$160$"
        ],
        "answer": 0,
        "explanation": "Mendelian monohybrid cross produces a $3:1$ ratio. The recessive frequency is $\\frac{1}{4} \\times 160 = 40$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "Which ion movement causes the initial rapid depolarization phase of a neuronal action potential?",
        "options": [
          "Rapid influx of $\\text{Na}^+$ through voltage-gated sodium channels",
          "Efflux of $\\text{K}^+$ through voltage-gated potassium channels",
          "Active transport of $3\\text{Na}^+$ out and $2\\text{K}^+$ in",
          "Influx of $\\text{Cl}^-$ through GABA receptor channels",
          "Efflux of calcium from the endoplasmic reticulum"
        ],
        "answer": 0,
        "explanation": "Depolarization to threshold opens voltage-gated $\\text{Na}^+$ channels; sodium ions rush into the axon down their electrochemical gradient."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which cellular transport mechanism moves solutes against a concentration gradient utilizing ATP hydrolysis?",
        "options": [
          "Primary active transport via carrier protein pumps",
          "Facilitated diffusion through channel proteins",
          "Simple passive diffusion across lipid bilayer",
          "Osmosis via aquaporin water channels",
          "Bulk gas exchange across cell membrane"
        ],
        "answer": 0,
        "explanation": "Active transport moves molecules from low to high concentration, which requires energy derived from ATP."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What is the expected phenotypic ratio in the $F_2$ generation of a dihybrid cross $AaBb \\times AaBb$ with unlinked genes?",
        "options": [
          "$9 : 3 : 3 : 1$",
          "$1 : 1 : 1 : 1$",
          "$3 : 1$",
          "$9 : 7$",
          "$12 : 3 : 1$"
        ],
        "answer": 0,
        "explanation": "By Mendel's Law of Independent Assortment, two unlinked heterozygous genes assort independently to produce a $9:3:3:1$ phenotypic ratio."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "At a chemical synapse, action potential arrival at the axon terminal directly triggers the opening of:",
        "options": [
          "Voltage-gated $\\text{Ca}^{2+}$ channels",
          "Voltage-gated $\\text{K}^+$ channels only",
          "Ligand-gated $\\text{Cl}^-$ channels",
          "Mechanically-gated sodium channels",
          "Leak potassium channels"
        ],
        "answer": 0,
        "explanation": "Depolarization activates voltage-gated $\\text{Ca}^{2+}$ channels. Inflowing calcium stimulates neurotransmitter vesicle fusion with the presynaptic membrane."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "A plant cell with solute potential $\\Psi_s = -600\\,\\text{kPa}$ and pressure potential $\\Psi_p = +200\\,\\text{kPa}$ has net water potential $\\Psi$ of:",
        "options": [
          "$-400\\,\\text{kPa}$",
          "$-800\\,\\text{kPa}$",
          "$+400\\,\\text{kPa}$",
          "$0\\,\\text{kPa}$",
          "$-1200\\,\\text{kPa}$"
        ],
        "answer": 0,
        "explanation": "$\\Psi = \\Psi_s + \\Psi_p = (-600) + (+200) = -400\\,\\text{kPa}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which type of mutation in a gene's coding region is most likely to alter all downstream amino acids?",
        "options": [
          "Single nucleotide insertion causing a frameshift",
          "Silent base substitution in the wobble position",
          "Conservative missense substitution",
          "Inversion of three complete codons",
          "Duplication of an entire promoter"
        ],
        "answer": 0,
        "explanation": "Adding a single base shifts the reading frame of all subsequent codons, completely altering the synthesized polypeptide."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "How does antidiuretic hormone (ADH) promote water retention in the mammalian kidney?",
        "options": [
          "Stimulates insertion of aquaporins into collecting duct luminal membranes",
          "Inhibits sodium pumps in the ascending limb of Henle",
          "Actively secretes water into the renal medulla",
          "Constricts the afferent arteriole to stop glomerular filtration",
          "Hydrolyses urea in the loop of Henle"
        ],
        "answer": 0,
        "explanation": "ADH binds to basolateral receptors, triggering insertion of aquaporin-2 water channels into the collecting duct apical membrane to reabsorb water."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "During which phase of mitosis do sister chromatids disjoin and migrate toward opposite spindle poles?",
        "options": [
          "Anaphase",
          "Metaphase",
          "Prophase",
          "Telophase",
          "Interphase"
        ],
        "answer": 0,
        "explanation": "In anaphase, centromeric cohesins are degraded and kinetochore microtubules shorten, drawing sister chromatids to opposite poles."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which enzyme is responsible for breaking hydrogen bonds to unwind the double helix during replication?",
        "options": [
          "DNA Helicase",
          "DNA Polymerase III",
          "DNA Ligase",
          "RNA Primase",
          "Topoisomerase"
        ],
        "answer": 0,
        "explanation": "DNA Helicase moves along the DNA phosphodiester backbone, disrupting base pair hydrogen bonds to advance the replication fork."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Approximately what proportion of energy is transferred from one trophic level to the next in food chains?",
        "options": [
          "$10\\%$",
          "$50\\%$",
          "$90\\%$",
          "$1\\%$",
          "$25\\%$"
        ],
        "answer": 0,
        "explanation": "Trophic efficiency is approximately 10%; ~90% of energy is dissipated as respiratory heat, excretory waste, and unconsumed material."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "Where does a non-competitive allosteric inhibitor bind on an enzyme?",
        "options": [
          "At a distinct regulatory allosteric site separate from the catalytic active site",
          "Directly inside the active site blocking substrate binding",
          "To the substrate molecule preventing association",
          "Exclusively to the product molecule",
          "To the aqueous solvent altering local pH"
        ],
        "answer": 0,
        "explanation": "Allosteric inhibitors bind to a non-active site, inducing a conformational change that alters active site geometry and catalytic activity."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Hard",
        "question": "A mother is a carrier ($X^H X^h$) for X-linked haemophilia and the father is unaffected ($X^H Y$). What is the probability their son has haemophilia?",
        "options": [
          "$50\\%$",
          "$25\\%$",
          "$0\\%$",
          "$100\\%$",
          "$75\\%$"
        ],
        "answer": 0,
        "explanation": "A son receives the Y chromosome from the father. There is a 50% chance he inherits $X^h$ from his mother, resulting in haemophilia."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "What is the specific role of calcium ions ($\\text{Ca}^{2+}$) in skeletal muscle contraction?",
        "options": [
          "Binds to troponin, shifting tropomyosin away from myosin-binding sites on actin",
          "Phosphorylates the myosin head directly",
          "Hydrolyses ATP inside the sarcoplasmic reticulum",
          "Blocks sodium channels on the sarcolemma",
          "Breaks down acetylcholine in the synaptic cleft"
        ],
        "answer": 0,
        "explanation": "$\\text{Ca}^{2+}$ binds to troponin C, triggering a conformational movement of tropomyosin that uncovers the active binding sites on actin."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "What chemical bonds primarily stabilize the secondary structure ($\\alpha$-helices and $\\beta$-sheets) of proteins?",
        "options": [
          "Hydrogen bonds between main-chain carbonyl and amide groups",
          "Disulfide bridges between cysteine side chains",
          "Ionic interactions between acidic and basic R-groups",
          "Hydrophobic interactions between aliphatic residues",
          "Covalent peptide bonds between adjacent amino acids"
        ],
        "answer": 0,
        "explanation": "Secondary structure is stabilized by regular hydrogen bonds between peptide backbone $N-H$ and $C=O$ groups."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What occurs during the annealing stage ($55^\\circ\\text{C}-65^\\circ\\text{C}$) of a PCR cycle?",
        "options": [
          "Oligonucleotide primers hybridize specifically to complementary flanking sequences on template strands",
          "Double-stranded DNA denatures into single strands",
          "Taq polymerase synthesizes daughter strands at its optimal rate",
          "Residual primers are degraded by nucleases",
          "dNTPs are phosphorylated to form ATP"
        ],
        "answer": 0,
        "explanation": "At annealing temperature, short single-stranded primers anneal by complementary base pairing to the template DNA strands."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which endocrine cells synthesize and secrete insulin in response to elevated blood glucose?",
        "options": [
          "Beta ($\\beta$) cells of pancreatic islets of Langerhans",
          "Alpha ($\\alpha$) cells of the pancreas",
          "Hepatocytes in the liver",
          "Adrenal cortex steroidogenic cells",
          "Pituitary somatotrophs"
        ],
        "answer": 0,
        "explanation": "Pancreatic $\\beta$-cells detect elevated blood glucose and release insulin to stimulate glucose uptake and glycogenesis."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which piece of evidence strongly supports the endosymbiotic origin of mitochondria?",
        "options": [
          "Mitochondria possess circular naked DNA and 70S ribosomes like prokaryotes",
          "They have a single phospholipid bilayer membrane",
          "They can synthesize glucose from carbon dioxide",
          "They lack any transport proteins in their envelope",
          "They contain 80S ribosomes identical to the cytoplasm"
        ],
        "answer": 0,
        "explanation": "Mitochondria contain their own circular genome, 70S ribosomes, divide by binary fission, and have a double membrane."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "The observation that 61 mRNA codons code for only 20 standard amino acids indicates that the code is:",
        "options": [
          "Degenerate",
          "Universal",
          "Non-overlapping",
          "Ambiguous",
          "Overlapping"
        ],
        "answer": 0,
        "explanation": "The genetic code is degenerate (redundant) because multiple synonymous codons specify the same amino acid."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "According to the cohesion-tension theory, what is the primary driving force pulling water up through xylem vessels?",
        "options": [
          "Negative hydrostatic pressure generated by evaporation from mesophyll cell walls",
          "Active ATP pumping by root cortical cells",
          "Positive root pressure pushing water from below",
          "Phloem osmotic pressure gradient",
          "Centripetal force from wind movement"
        ],
        "answer": 0,
        "explanation": "Transpiration from stomata creates tension (negative pressure) in leaf xylem, pulling water upward due to hydrogen-bonded cohesion."
      }
    ]
  },
  "diagnostic_2": {
    "Mathematics 1": [
      {
        "module": "Mathematics 1",
        "topic": "Surds & Indices",
        "difficulty": "Medium",
        "question": "Rationalise the denominator and simplify fully: $\\frac{2}{\\sqrt{8} - \\sqrt{7}}$.",
        "options": [
          "$2(\\sqrt{8} + \\sqrt{7})$",
          "$2(\\sqrt{8} - \\sqrt{7})$",
          "$\\frac{2(\\sqrt{8} + \\sqrt{7})}{15}$",
          "$2\\sqrt{7}$",
          "$2\\sqrt{8}$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by the conjugate $(\\sqrt{8} + \\sqrt{7})$. The denominator simplifies to $(8) - (7) = 1$. The result is $2(\\sqrt{8} + \\sqrt{7})$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "Find the gradient of the straight line perpendicular to the line $y = -3x + 5$.",
        "options": [
          "$\\frac{1}{3}$",
          "$-3$",
          "$--3$",
          "$-\\frac{1}{3}$",
          "$5$"
        ],
        "answer": 0,
        "explanation": "For perpendicular lines, $m_1 m_2 = -1$. With $m_1 = -3$, the perpendicular gradient is $m_2 = -\\frac{1}{-3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Easy",
        "question": "Given the curve $y = 6x^{3} - 12x$, calculate the value of the derivative $\\frac{dy}{dx}$ at $x = 1$.",
        "options": [
          "$6$",
          "$18$",
          "$0$",
          "$12$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Differentiating: $\\frac{dy}{dx} = 18x^{2} - 12$. At $x = 1$, this equals $18(1^{2}) - 12 = 6$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "For what range of real values of $k$ does the equation $x^2 - 2kx + 4 = 0$ have two distinct real roots?",
        "options": [
          "$k < -2$ or $k > 2$",
          "$-2 < k < 2$",
          "$k = 2$",
          "$k \\ge 0$",
          "$k > 2$ only"
        ],
        "answer": 0,
        "explanation": "Distinct real roots require discriminant $\\Delta > 0$: $(-2k)^2 - 4(1)(4) > 0 \\implies 4k^2 - 16 > 0 \\implies k^2 > 4 \\implies k < -2$ or $k > 2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Easy",
        "question": "A circle is given by $(x - 3)^2 + (y + 3)^2 = 49$. Identify its center and radius.",
        "options": [
          "Center $(3, -3)$, radius $r = 7$",
          "Center $(-3, 3)$, radius $r = 7$",
          "Center $(3, -3)$, radius $r = 49$",
          "Center $(0, 0)$, radius $r = 7$",
          "Center $(3, 3)$, radius $r = 7$"
        ],
        "answer": 0,
        "explanation": "Standard circle form $(x - h)^2 + (y - k)^2 = r^2$ gives center $(h, k) = (3, -3)$ and radius $r = \\sqrt{49} = 7$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "In how many distinct ways can a committee of $3$ individuals be selected from a pool of $10$ candidates?",
        "options": [
          "$120$",
          "$360$",
          "$130$",
          "$115$",
          "$30$"
        ],
        "answer": 0,
        "explanation": "Selection without regard to order is evaluated by combinations: $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Solve for $x$ in the equation $\\log_{3}(x + 3) = 4$.",
        "options": [
          "$78$",
          "$81$",
          "$75$",
          "$12$",
          "$64$"
        ],
        "answer": 0,
        "explanation": "Rewriting in exponential form: $x + 3 = 3^{4} = 81 \\implies x = 81 - 3 = 78$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "Using trigonometric identities, simplify $2\\sin(60^\\circ)\\cos(60^\\circ)$.",
        "options": [
          "$\\sin(120^\\circ)$",
          "$\\cos(120^\\circ)$",
          "$\\tan(120^\\circ)$",
          "$\\frac{1}{2}\\sin(120^\\circ)$",
          "$2\\sin(60^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the double-angle identity $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$, substituting $\\theta = 60^\\circ$ gives $\\sin(120^\\circ)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Determine the exact area bounded by the curve $y = 3x^2 + 2$, the $x$-axis, and vertical lines $x = 0$ and $x = 3$.",
        "options": [
          "$33$",
          "$29$",
          "$35$",
          "$27$",
          "$27$"
        ],
        "answer": 0,
        "explanation": "The area is $\\int_0^{3} (3x^2 + 2)\\,dx = [x^3 + 2x]_0^{3} = (3^3 + 2(3)) - 0 = 33$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Easy",
        "question": "If functions are defined as $f(x) = 2x$ and $g(x) = x^2 + 4$, evaluate $f(g(3))$.",
        "options": [
          "$26$",
          "$24$",
          "$28$",
          "$40$",
          "$10$"
        ],
        "answer": 0,
        "explanation": "Evaluating inside first: $g(3) = 3^2 + 4 = 13$. Then $f(13) = 2 \\times 13 = 26$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Medium",
        "question": "In $\\triangle ABC$, the side $a = 20\\,\\text{cm}$ lies opposite angle $A = 45^\\circ$. What is the circumcircle diameter $2R$?",
        "options": [
          "$\\frac{20}{\\sin(45^\\circ)}$",
          "$20\\sin(45^\\circ)$",
          "$\\frac{20}{2\\sin(45^\\circ)}$",
          "$40\\sin(45^\\circ)$",
          "$20\\cos(45^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the extended Sine Rule, $\\frac{a}{\\sin A} = 2R$, so circumdiameter $2R = \\frac{20}{\\sin(45^\\circ)}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "For random events $A$ and $B$, $P(A) = 0.4$ and $P(A \\cap B) = 0.2$. Calculate the conditional probability $P(B | A)$.",
        "options": [
          "$0.50$",
          "$0.080$",
          "$0.20$",
          "$0.60$",
          "$0.50$"
        ],
        "answer": 0,
        "explanation": "By Bayes/conditional rule, $P(B | A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.2}{0.4} = 0.50$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Find the coefficient of $x^2$ in the algebraic binomial expansion of $(1 + x)^{5}$.",
        "options": [
          "$10$",
          "$5$",
          "$10$",
          "$20$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The general expansion term is $\\binom{n}{r} x^r$. For $x^2$, $r = 2$, so the coefficient is $\\binom{5}{2} = 10$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry",
        "difficulty": "Easy",
        "question": "What is the total sum of all interior angles of a convex polygon having $12$ sides?",
        "options": [
          "$1800^\\circ$",
          "$1980^\\circ$",
          "$1620^\\circ$",
          "$2160^\\circ$",
          "$360^\\circ$"
        ],
        "answer": 0,
        "explanation": "The interior angle sum formula is $(n - 2) \\times 180^\\circ = (12 - 2) \\times 180^\\circ = 1800^\\circ$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Locate the $x$-coordinate of the stationary point on the parabola $y = 5x^2 - 30x + 7$.",
        "options": [
          "$3$",
          "$5$",
          "$-3$",
          "$0$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "Setting the derivative to zero: $\\frac{dy}{dx} = 10x - 30 = 0 \\implies x = 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "In a geometric sequence with first term $a = 4$ and common ratio $r = 2$, determine the $4^{\\text{th}}$ term.",
        "options": [
          "$32$",
          "$64$",
          "$28$",
          "$36$",
          "$32$"
        ],
        "answer": 0,
        "explanation": "The $n^{\\text{th}}$ term is $T_n = a r^{n-1}$. For $n = 4$: $T_4 = 4 \\times 2^3 = 32$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "A circular sector of radius $r = 12\\,\\text{cm}$ has central angle $\\theta = \\frac{\\pi}{3}\\,\\text{rad}$. Compute its area.",
        "options": [
          "$24.00\\pi\\,\\text{cm}^2$",
          "$12\\pi\\,\\text{cm}^2$",
          "$48.00\\pi\\,\\text{cm}^2$",
          "$2\\pi\\,\\text{cm}^2$",
          "$\\pi\\,\\text{cm}^2$"
        ],
        "answer": 0,
        "explanation": "Sector area formula: $A = \\frac{1}{2}r^2 \\theta = \\frac{1}{2}(12)^2 \\left(\\frac{\\pi}{3}\\right) = 24.00\\pi\\,\\text{cm}^2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Statistics",
        "difficulty": "Medium",
        "question": "A sample has mean $\\mu = 50$ and standard deviation $\\sigma = 8$. What is the standard deviation after transformation $Y = 3X + 5$?",
        "options": [
          "$24$",
          "$29$",
          "$72$",
          "$8$",
          "$155$"
        ],
        "answer": 0,
        "explanation": "Adding a constant does not alter spread. Multiplying by $a$ scales standard deviation by $|a|$: $\\sigma_Y = 3\\sigma_X = 3(8) = 24$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "When the polynomial $P(x) = 2x^3 - 3x^2 + 5$ is divided by $(x - -2)$, what is the numerical remainder?",
        "options": [
          "$-23$",
          "$-21$",
          "$-26$",
          "$0$",
          "$--23$"
        ],
        "answer": 0,
        "explanation": "By the Remainder Theorem, the remainder upon division by $(x - c)$ equals $P(c) = 2(-2)^3 - 3(-2)^2 + 5 = -23$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "The graph of $y = f(x)$ is translated horizontally by vector $\\begin{pmatrix} 5 \\\\ 0 \\end{pmatrix}$. State the new equation.",
        "options": [
          "$y = f(x - 5)$",
          "$y = f(x + 5)$",
          "$y = f(x) + 5$",
          "$y = f(x) - 5$",
          "$y = 5f(x)$"
        ],
        "answer": 0,
        "explanation": "A translation by $+a$ along the $x$-axis maps $x \\mapsto x - a$, giving $y = f(x - 5)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Hard",
        "question": "Find the Cartesian equation of the tangent line to the parabola $y = x^2$ at the point with $x$-coordinate $x = 1$.",
        "options": [
          "$y = 2x -1$",
          "$y = -\\frac{1}{2}x + 1$",
          "$y = 4x$",
          "$y = x + 1$",
          "$y = 2x + 1$"
        ],
        "answer": 0,
        "explanation": "Gradient is $m = \\frac{dy}{dx} = 2x = 2$. At $x = 1, y = 1$. Using $y - y_1 = m(x - x_1)$ yields $y = 2x -1$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Hard",
        "question": "Decompose $\\frac{2x + 5}{(x + 1)(x + 2)}$ into partial fractions $\\frac{A}{x + 1} + \\frac{B}{x + 2}$. Find $(A, B)$.",
        "options": [
          "$(3, -1)$",
          "$(1, 1)$",
          "$(2, 3)$",
          "$(5, -3)$",
          "$(4, -2)$"
        ],
        "answer": 0,
        "explanation": "$2x + 5 = A(x + 2) + B(x + 1)$. At $x = -1 \\implies A = 3$. At $x = -2 \\implies B = -1$. Thus $(A, B) = (3, -1)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Vectors",
        "difficulty": "Easy",
        "question": "Compute the scalar dot product between $\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 6 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.",
        "options": [
          "$-4$",
          "$1$",
          "$-8$",
          "$2$",
          "$-6$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{u} \\cdot \\mathbf{v} = (1)(2) + (6)(-1) = 2 - 6 = -4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Easy",
        "question": "If events $E_1$ and $E_2$ are statistically independent with $P(E_1) = 0.3$ and $P(E_2) = 0.7$, what is $P(E_1 \\cap E_2)$?",
        "options": [
          "$0.210$",
          "$1.00$",
          "$0.79$",
          "$0.3$",
          "$0.7$"
        ],
        "answer": 0,
        "explanation": "Independence implies $P(E_1 \\cap E_2) = P(E_1) \\times P(E_2) = 0.3 \\times 0.7 = 0.210$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "Find the sum of the first 10 terms of an arithmetic progression with first term $a = 8$ and common difference $d = 3$.",
        "options": [
          "$215$",
          "$195$",
          "$245$",
          "$35$",
          "$80$"
        ],
        "answer": 0,
        "explanation": "$S_n = \\frac{n}{2}[2a + (n-1)d] = 5[2(8) + 9(3)] = 215$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Hard",
        "question": "Solve $\\cos(x) = \\frac{1}{2}$ for all values in the principal interval $0 \\le x \\le 2\\pi$.",
        "options": [
          "$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          "$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$",
          "$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{4}, \\frac{7\\pi}{4}$",
          "$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$"
        ],
        "answer": 0,
        "explanation": "Cosine is positive in quadrants I and IV: $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Evaluate the second derivative $\\frac{d^2y}{dx^2}$ of $y = 2x^3 - 12x^2$ at $x = 2$.",
        "options": [
          "$0$",
          "$12$",
          "$-12$",
          "$24$",
          "$-24$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = 6x^2 - 24x$, so $\\frac{d^2y}{dx^2} = 12x - 24$. At $x = 2$: 12(2) - 24 = 0$."
      }
    ],
    "Mathematics 2": [
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Apply the product rule to differentiate $y = x^{5} e^{2x}$ with respect to $x$.",
        "options": [
          "$x^{4} e^{2x}(5 + 2x)$",
          "$5 x^{4} e^{2x}$",
          "$2x^{5} e^{2x}$",
          "$25 x e^{2x}$",
          "$x^{5} e^{2x}$"
        ],
        "answer": 0,
        "explanation": "By $(uv)' = u'v + uv'$: $u' = 5x^{4}, v' = 2e^{2x}$. Factoring gives $x^{4} e^{2x}(5 + 2x)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Calculate the vector cross product $\\mathbf{i} \\times \\mathbf{j}$ in a right-handed Cartesian coordinate system.",
        "options": [
          "$\\mathbf{k}$",
          "$-\\mathbf{k}$",
          "$\\mathbf{0}$",
          "$\\mathbf{i}$",
          "$\\mathbf{j}$"
        ],
        "answer": 0,
        "explanation": "By the right-hand rule definition of orthonormal unit basis vectors, $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Easy",
        "question": "Compute the determinant of the $2 \\times 2$ matrix $M = \\begin{pmatrix} 6 & 1 \\\\ 2 & 2 \\end{pmatrix}$.",
        "options": [
          "$10$",
          "$14$",
          "$8$",
          "$12$",
          "$8$"
        ],
        "answer": 0,
        "explanation": "$\\det(M) = ad - bc = (6)(2) - (1)(2) = 10$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Using the substitution $u = x^2 + 2$, evaluate $\\int 2x(x^2 + 2)^3\\,dx$.",
        "options": [
          "$\\frac{1}{4}(x^2 + 2)^4 + C$",
          "$\\frac{1}{3}(x^2 + 2)^3 + C$",
          "$(x^2 + 2)^4 + C$",
          "$\\frac{1}{2}(x^2 + 2)^4 + C$",
          "$6x^2(x^2 + 2)^2 + C$"
        ],
        "answer": 0,
        "explanation": "$du = 2x\\,dx$. The integral transforms to $\\int u^3\\,du = \\frac{1}{4}u^4 + C = \\frac{1}{4}(x^2 + 2)^4 + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "For what value of $\\lambda$ are the 3D vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -1 \\\\ \\lambda \\end{pmatrix}$ perpendicular?",
        "options": [
          "$-1$",
          "$1$",
          "$5$",
          "$-5$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Perpendicular vectors have zero dot product: $2(1) + 3(-1) - \\lambda = 0 \\implies -1 - \\lambda = 0 \\implies \\lambda = -1$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Determine the modulus $|z|$ and principal argument $\\arg(z)$ of the complex number $z = 1 + i\\sqrt{3}$.",
        "options": [
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{6}$",
          "$|z| = 4, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 1, \\arg(z) = \\frac{\\pi}{4}$",
          "$|z| = \\sqrt{3}, \\arg(z) = \\frac{\\pi}{2}$"
        ],
        "answer": 0,
        "explanation": "$|z| = \\sqrt{1^2 + 3} = 2$. In quadrant I, $\\theta = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Differentiate $y = \\frac{\\sin(x)}{x}$ with respect to $x$ using the quotient rule.",
        "options": [
          "$\\frac{x\\cos(x) - \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x)}{1}$",
          "$\\frac{x\\sin(x) - \\cos(x)}{x^2}$",
          "$\\frac{x\\cos(x) + \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x) - x\\sin(x)}{x^2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{u'v - uv'}{v^2} = \\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "A plane has normal vector $\\mathbf{n} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 4 \\end{pmatrix}$ and passes through $(1, 0, 1)$. Find its equation.",
        "options": [
          "$2x - 3y + 4z = 6$",
          "$2x - 3y + 4z = 0$",
          "$2x - 3y + 4z = 2$",
          "$x + z = 6$",
          "$-2x + 3y - 4z = 1$"
        ],
        "answer": 0,
        "explanation": "$ax + by + cz = d \\implies 2(1) - 3(0) + 4(1) = 6$, so $2x - 3y + 4z = 6$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "By De Moivre's theorem, simplify the complex power $(\\cos\\theta + i\\sin\\theta)^{4}$.",
        "options": [
          "$\\cos(4\\theta) + i\\sin(4\\theta)$",
          "$\\cos^3\\theta + i\\sin^3\\theta$",
          "$4(\\cos\\theta + i\\sin\\theta)$",
          "$\\cos(\\theta / 4) + i\\sin(\\theta / 4)$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, which for $n = 4$ yields $\\cos(4\\theta) + i\\sin(4\\theta)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find $\\frac{dy}{dx}$ for the ellipse $x^2 + 4y^2 = 25$ using implicit differentiation.",
        "options": [
          "$-\\frac{x}{4y}$",
          "$-\\frac{4x}{y}$",
          "$\\frac{x}{4y}$",
          "$-\\frac{x}{2y}$",
          "$\\frac{25 - x}{4y}$"
        ],
        "answer": 0,
        "explanation": "$2x + 8y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Calculate the perpendicular distance from the origin $(0,0,0)$ to the plane $2x - y + 2z = 9$.",
        "options": [
          "$3$",
          "$9$",
          "$\\frac{9}{2}$",
          "$\\sqrt{9}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$D = \\frac{|0 - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{\\sqrt{9}} = 3$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the matrix inverse $A^{-1}$ for $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "options": [
          "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 6 - 5 = 1$. The inverse is $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Evaluate $\\int x e^x\\,dx$ using integration by parts.",
        "options": [
          "$x e^x - e^x + C$",
          "$x e^x + e^x + C$",
          "$\\frac{1}{2}x^2 e^x + C$",
          "$e^x - x e^x + C$",
          "$x^2 e^x + C$"
        ],
        "answer": 0,
        "explanation": "$u = x, dv = e^x dx \\implies uv - \\int v du = x e^x - \\int e^x dx = x e^x - e^x + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Two lines have direction vectors $\\mathbf{d}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{d}_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$. What is the acute angle between them?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$0^\\circ$"
        ],
        "answer": 0,
        "explanation": "$\\cos\\theta = \\frac{1(1) + 0 + 0}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "Evaluate the determinant of the upper-triangular matrix $M = \\begin{pmatrix} 2 & 4 & 5 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
        "options": [
          "$24$",
          "$9$",
          "$0$",
          "$48$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The determinant of any triangular matrix is the product of its diagonal elements: $2 \\times 3 \\times 4 = 24$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Solve the separable differential equation $\\frac{dy}{dx} = 2x y$ with initial condition $y(0) = 1$.",
        "options": [
          "$y = e^{x^2}$",
          "$y = e^{2x}$",
          "$y = x^2 + 1$",
          "$y = 2e^x - 1$",
          "$y = e^{x^2/2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{y}dy = 2x dx \\implies \\ln|y| = x^2 + C$. With $y(0) = 1 \\implies C = 0$, so $y = e^{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "At what point does the line $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ intersect the plane $x + y + z = 7$?",
        "options": [
          "$(3, 2, 2)$",
          "$(2, 2, 1)$",
          "$(1, 2, 0)$",
          "$(4, 2, 3)$",
          "$(0, 2, -1)$"
        ],
        "answer": 0,
        "explanation": "$(1 + t) + 2 + t = 7 \\implies 2t + 3 = 7 \\implies t = 2$. The point is $(1 + 2, 2, 0 + 2) = (3, 2, 2)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the roots of the quadratic equation $z^2 + 4z + 13 = 0$ in the complex domain.",
        "options": [
          "$-2 \\pm 3i$",
          "$2 \\pm 3i$",
          "$-4 \\pm 6i$",
          "$-2 \\pm 9i$",
          "$-2 \\pm i\\sqrt{13}$"
        ],
        "answer": 0,
        "explanation": "$z = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = -2 \\pm 3i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find the general solution to the homogeneous equation $\\frac{d^2y}{dx^2} - 9y = 0$.",
        "options": [
          "$y = A e^{3x} + B e^{-3x}$",
          "$y = A\\cos(3x) + B\\sin(3x)$",
          "$y = (A + Bx)e^{3x}$",
          "$y = A e^{9x}$",
          "$y = A\\cosh(9x)$"
        ],
        "answer": 0,
        "explanation": "Characteristic equation $m^2 - 9 = 0 \\implies m = \\pm 3$, giving $y = A e^{3x} + B e^{-3x}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Which vector operation yields the common perpendicular direction to two skew lines with direction vectors $\\mathbf{d}_1$ and $\\mathbf{d}_2$?",
        "options": [
          "$\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "$\\mathbf{d}_1 \\cdot \\mathbf{d}_2$",
          "$\\mathbf{d}_1 + \\mathbf{d}_2$",
          "$\\frac{\\mathbf{d}_1}{|\\mathbf{d}_2|}$",
          "$\\mathbf{d}_1 - \\mathbf{d}_2$"
        ],
        "answer": 0,
        "explanation": "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ produces a vector mutually perpendicular to both direction vectors."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Express the complex quotient $\\frac{5}{2 + i}$ in standard Cartesian form $x + iy$.",
        "options": [
          "$2 - i$",
          "$2 + i$",
          "$1 - 2i$",
          "$\\frac{10 - 5i}{3}$",
          "$5 - 2.5i$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by conjugate $(2 - i)$: $\\frac{5(2 - i)}{4 + 1} = 2 - i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Easy",
        "question": "Differentiate $y = \\cos(4x^3)$ with respect to $x$.",
        "options": [
          "$-12x^2 \\sin(4x^3)$",
          "$12x^2 \\sin(4x^3)$",
          "$-4\\sin(4x^3)$",
          "$-12x \\cos(4x^3)$",
          "$\\sin(12x^2)$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = -\\sin(4x^3) \\cdot \\frac{d}{dx}(4x^3) = -12x^2 \\sin(4x^3)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Easy",
        "question": "Determine the exact magnitude of the 3D position vector $\\mathbf{r} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 6 \\end{pmatrix}$.",
        "options": [
          "$\\sqrt{49}$",
          "$11$",
          "$\\sqrt{11}$",
          "$36$",
          "$\\sqrt{32}$"
        ],
        "answer": 0,
        "explanation": "$|\\mathbf{r}| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{49}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "What geometric transformation is represented by the matrix $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ in $\\mathbb{R}^2$?",
        "options": [
          "Counter-clockwise rotation by $90^\\circ$ about the origin",
          "Clockwise rotation by $90^\\circ$ about the origin",
          "Reflection across the line $y = x$",
          "Reflection across the line $y = -x$",
          "Uniform scale factor of $-1$"
        ],
        "answer": 0,
        "explanation": "The standard rotation matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ with $\\theta = 90^\\circ$ matches $R$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "What are the first three non-zero terms of the Maclaurin expansion for $\\sin(x)$?",
        "options": [
          "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$1 - \\frac{x^2}{2} + \\frac{x^4}{24}$",
          "$x + \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$x - x^3 + x^5$",
          "$1 - x + \\frac{x^2}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + \\frac{x^5}{120}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Find a unit normal vector to the plane $3x + 4z = 10$.",
        "options": [
          "$\\begin{pmatrix} 3/5 \\\\ 0 \\\\ 4/5 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3/7 \\\\ 0 \\\\ 4/7 \\end{pmatrix}$",
          "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
          "$\\begin{pmatrix} 4/5 \\\\ 0 \\\\ -3/5 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{n} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$, magnitude $\\sqrt{3^2 + 4^2} = 5$. The unit normal is $\\frac{1}{5}\\mathbf{n}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "What is the algebraic sum of all $n$ complex $n^{\\text{th}}$ roots of unity for any integer $n \\ge 2$?",
        "options": [
          "$0$",
          "$1$",
          "$n$",
          "$-1$",
          "$n\\pi$"
        ],
        "answer": 0,
        "explanation": "The roots satisfy $z^n - 1 = 0$. By Vieta's formulas, the sum of roots is the coefficient of $z^{n-1}$, which is $0$."
      }
    ],
    "Physics": [
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A car starts with velocity $u = 4\\,\\text{m s}^{-1}$ and accelerates uniformly at $a = 2\\,\\text{m s}^{-2}$ for $t = 4\\,\\text{s}$. Find displacement $s$.",
        "options": [
          "$32\\,\\text{m}$",
          "$42\\,\\text{m}$",
          "$27\\,\\text{m}$",
          "$24\\,\\text{m}$",
          "$4\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$s = ut + \\frac{1}{2}at^2 = (4)(4) + 0.5(2)(4^2) = 32\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "Two identical resistors of $R = 25\\,\\Omega$ are wired in parallel across a 20\\,\\text{V}$ ideal battery. What total current is drawn?",
        "options": [
          "$1.60\\,\\text{A}$",
          "$0.80\\,\\text{A}$",
          "$3.20\\,\\text{A}$",
          "$0.80\\,\\text{A}$",
          "$500\\,\\text{A}$"
        ],
        "answer": 0,
        "explanation": "$R_{eq} = \\frac{25}{2} = 12.5\\,\\Omega$. $I = \\frac{V}{R_{eq}} = \\frac{20}{12.5} = 1.60\\,\\text{A}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "An ideal gas at temperature $T_1 = 300\\,\\text{K}$ and pressure $P_1$ in a rigid sealed container has its temperature raised to $600\\,\\text{K}$. What is the new pressure $P_2$?",
        "options": [
          "$2P_1$",
          "$\\frac{1}{2}P_1$",
          "$4P_1$",
          "$P_1$",
          "$\\sqrt{2}P_1$"
        ],
        "answer": 0,
        "explanation": "At constant volume, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\frac{600}{300} = 2P_1$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A pulling force of 50\\,\\text{N}$ acts on a mass of 6\\,\\text{kg}$ against friction of 14\\,\\text{N}$. Calculate its acceleration.",
        "options": [
          "$6.00\\,\\text{m s}^{-2}$",
          "$8.33\\,\\text{m s}^{-2}$",
          "$10.67\\,\\text{m s}^{-2}$",
          "$2.33\\,\\text{m s}^{-2}$",
          "$300\\,\\text{m s}^{-2}$"
        ],
        "answer": 0,
        "explanation": "$F_{net} = 50 - 14 = 36\\,\\text{N}$. $a = \\frac{F_{net}}{m} = \\frac{36}{6} = 6.00\\,\\text{m s}^{-2}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Easy",
        "question": "A sound wave propagates at $340\\,\\text{m s}^{-1}$ with frequency $f = 300\\,\\text{Hz}$. What is its wavelength $\\lambda$?",
        "options": [
          "$1.13\\,\\text{m}$",
          "$102000\\,\\text{m}$",
          "$0.88\\,\\text{m}$",
          "$2.26\\,\\text{m}$",
          "$0.56\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$\\lambda = \\frac{v}{f} = \\frac{340}{300} = 1.13\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "A satellite orbits Earth at radius $r$ with speed $v$. If it moves to an orbit of radius $4r$, what is its new orbital speed?",
        "options": [
          "$\\frac{1}{2}v$",
          "$\\frac{1}{4}v$",
          "$2v$",
          "$4v$",
          "$\\frac{1}{\\sqrt{2}}v$"
        ],
        "answer": 0,
        "explanation": "$v = \\sqrt{\\frac{GM}{r}}$. At radius $4r$, $v' = \\sqrt{\\frac{GM}{4r}} = \\frac{1}{2}v$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A cart of mass 1\\,\\text{kg}$ moving at 8\\,\\text{m s}^{-1}$ collides with and sticks to a stationary cart of mass 3\\,\\text{kg}$. Find their final speed.",
        "options": [
          "$2.00\\,\\text{m s}^{-1}$",
          "$8\\,\\text{m s}^{-1}$",
          "$4.00\\,\\text{m s}^{-1}$",
          "$2.67\\,\\text{m s}^{-1}$",
          "$0\\,\\text{m s}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{1 \\times 8}{4} = 2.00\\,\\text{m s}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "In a Young's double-slit experiment, fringe separation is $w$. If slit separation $s$ is doubled and screen distance $D$ is halved, what is the new fringe width?",
        "options": [
          "$\\frac{1}{4}w$",
          "$\\frac{1}{2}w$",
          "$w$",
          "$2w$",
          "$4w$"
        ],
        "answer": 0,
        "explanation": "$w = \\frac{\\lambda D}{s}$. New width $w' = \\frac{\\lambda (D/2)}{2s} = \\frac{1}{4}w$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "Two point charges experience electrostatic force $F$ at distance $d$. What is the force when separation is reduced to $\\frac{d}{3}$?",
        "options": [
          "$9F$",
          "$3F$",
          "$\\frac{1}{3}F$",
          "$\\frac{1}{9}F$",
          "$6F$"
        ],
        "answer": 0,
        "explanation": "$F \\propto \\frac{1}{r^2}$. Dividing distance by 3 multiplies force by $3^2 = 9$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "Calculate the gravitational potential energy gained when an object of mass 2\\,\\text{kg}$ is lifted vertically by 15\\,\\text{m}$ ($g = 9.8\\,\\text{m s}^{-2}$).",
        "options": [
          "$294.0\\,\\text{J}$",
          "$147.0\\,\\text{J}$",
          "$588.0\\,\\text{J}$",
          "$30\\,\\text{J}$",
          "$3.1\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta E_p = mgh = (2)(9.8)(15) = 294.0\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A battery with $\\text{EMF} = 15\\,\\text{V}$ and internal resistance $r = 2\\,\\Omega$ is connected to load $R = 3\\,\\Omega$. Find the terminal potential difference.",
        "options": [
          "$9.00\\,\\text{V}$",
          "$15\\,\\text{V}$",
          "$6.00\\,\\text{V}$",
          "$3.00\\,\\text{V}$",
          "$4.50\\,\\text{V}$"
        ],
        "answer": 0,
        "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{15}{5}$. Terminal $V = IR = 9.00\\,\\text{V}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "How much heat is required to warm 1\\,\\text{kg}$ of liquid water ($c = 4200\\,\\text{J kg}^{-1}\\,\\text{K}^{-1}$) by $\\Delta T = 30\\,\\text{K}$?",
        "options": [
          "$126000\\,\\text{J}$",
          "$63000\\,\\text{J}$",
          "$252000\\,\\text{J}$",
          "$126000\\,\\text{J}$",
          "$30\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$Q = mc\\Delta T = (1)(4200)(30) = 126000\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A car of mass 900\\,\\text{kg}$ negotiates a curve of radius 25\\,\\text{m}$ at speed 10\\,\\text{m s}^{-1}$. Compute the centripetal force required.",
        "options": [
          "$3600\\,\\text{N}$",
          "$7200\\,\\text{N}$",
          "$1800\\,\\text{N}$",
          "$9000\\,\\text{N}$",
          "$360\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "$F_c = \\frac{mv^2}{r} = \\frac{900 \\times 10^2}{25} = 3600\\,\\text{N}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A light beam in air ($n_1 = 1.0$) enters glass ($n_2 = 1.50$) at angle of incidence $\\theta_1 = 30^\\circ$. What is the value of $\\sin(\\theta_2)$?",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$",
          "$\\frac{\\sqrt{3}}{3}$"
        ],
        "answer": 0,
        "explanation": "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies (1.0)\\sin(30^\\circ) = 1.50\\sin\\theta_2 \\implies 0.5 = 1.5\\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{1}{3}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "A charged particle enters a uniform magnetic field with velocity perpendicular to the field lines. What trajectory does it follow?",
        "options": [
          "A circle in the plane perpendicular to the magnetic field",
          "A straight line with uniform acceleration",
          "A parabolic path along the magnetic field",
          "A hyperbolic escape path",
          "A stationary oscillation"
        ],
        "answer": 0,
        "explanation": "Because the magnetic force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ is always normal to velocity, speed is constant and motion is uniform circular."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A spring of stiffness $k = 300\\,\\text{N m}^{-1}$ is extended by $\\Delta x = 0.1\\,\\text{m}$. What is the stored elastic potential energy?",
        "options": [
          "$1.500\\,\\text{J}$",
          "$30.00\\,\\text{J}$",
          "$3.000\\,\\text{J}$",
          "$15.000\\,\\text{J}$",
          "$0.375\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$E_e = \\frac{1}{2}k(\\Delta x)^2 = 0.5(300)(0.1^2) = 1.500\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Light of wavelength $\\lambda = 500\\,\\text{nm}$ illuminates a diffraction grating with $500\\,\\text{lines per mm}$. What is the highest observable order $m$?",
        "options": [
          "$4$",
          "$2$",
          "$5$",
          "$3$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "Slit spacing $d = \\frac{10^{-3}\\,\\text{m}}{500} = 2 \\times 10^{-6}\\,\\text{m}$. Max order is $m \\le \\frac{d}{\\lambda} = \\frac{2 \\times 10^{-6}}{500 \\times 10^{-9}} = 4$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "Two parallel metal plates separated by 0.05\\,\\text{m}$ have a potential difference of 250\\,\\text{V}$. Find the electric field strength $E$.",
        "options": [
          "$5000\\,\\text{V m}^{-1}$",
          "$2500\\,\\text{V m}^{-1}$",
          "$10000\\,\\text{V m}^{-1}$",
          "$12.5\\,\\text{V m}^{-1}$",
          "$0\\,\\text{V m}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$E = \\frac{V}{d} = \\frac{250}{0.05} = 5000\\,\\text{V m}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A uniform plank of length $4.0\\,\\text{m}$ and weight $200\\,\\text{N}$ is supported at its midpoint. What force applied at one end maintains equilibrium?",
        "options": [
          "$0\\,\\text{N}$",
          "$100\\,\\text{N}$",
          "$200\\,\\text{N}$",
          "$50\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "Because the pivot is at the centre of mass, the plank's weight exerts zero torque about the pivot, requiring zero force to maintain balance."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A wire of resistance $R$ is drawn out so that its length is doubled while volume is conserved. What is its new resistance?",
        "options": [
          "$4R$",
          "$2R$",
          "$R$",
          "$\\frac{1}{2}R$",
          "$\\frac{1}{4}R$"
        ],
        "answer": 0,
        "explanation": "Doubling length ($L \\to 2L$) halves cross-sectional area ($A \\to A/2$). Resistance $R' = \\rho \\frac{2L}{A/2} = 4R$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "If the absolute temperature of an ideal gas is quadrupled, what factor does the root-mean-square molecular speed $c_{\\text{rms}}$ increase by?",
        "options": [
          "Factor of 2",
          "Factor of 4",
          "Factor of 16",
          "Factor of 1.41",
          "Remains unchanged"
        ],
        "answer": 0,
        "explanation": "$c_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} \\propto \\sqrt{T}$. Quadrupling $T$ multiplies speed by $\\sqrt{4} = 2$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "At what launch angle $\\theta$ above horizontal does a projectile achieve maximum horizontal range on level ground?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$15^\\circ$"
        ],
        "answer": 0,
        "explanation": "Range $R = \\frac{u^2 \\sin(2\\theta)}{g}$ is maximized when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A stretched string of length $L$ vibrates in its fundamental harmonic mode with nodes at both fixed ends. What is the wavelength $\\lambda_1$?",
        "options": [
          "$2L$",
          "$L$",
          "$\\frac{L}{2}$",
          "$4L$",
          "$\\frac{2L}{3}$"
        ],
        "answer": 0,
        "explanation": "Fundamental mode consists of a single loop: $L = \\frac{\\lambda}{2} \\implies \\lambda = 2L$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "According to Faraday's Law, the induced electromotive force in a circuit is directly proportional to the:",
        "options": [
          "Time rate of change of magnetic flux linkage",
          "Total resistance of the circuit loop",
          "Steady current flowing in the coil",
          "Temperature of the magnet",
          "Square of the magnetic flux"
        ],
        "answer": 0,
        "explanation": "Faraday's Law states $\\mathcal{E} = -\\frac{d\\Phi}{dt}$, so induced EMF equals the rate of change of flux linkage."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A constant force of 25\\,\\text{N}$ acts on an object for a duration of $\\Delta t = 0.2\\,\\text{s}$. What impulse is imparted?",
        "options": [
          "$5.00\\,\\text{N s}$",
          "$10.00\\,\\text{N s}$",
          "$125.0\\,\\text{N s}$",
          "$2.50\\,\\text{N s}$",
          "$25.2\\,\\text{N s}$"
        ],
        "answer": 0,
        "explanation": "$\\text{Impulse} = F \\Delta t = (25)(0.2) = 5.00\\,\\text{N s}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Why does an observer perceive a higher pitch when an emergency siren approaches at constant velocity?",
        "options": [
          "The emitted wavefronts are compressed in the forward direction, reducing observed wavelength",
          "The velocity of sound in the air increases toward the observer",
          "The source emits sound with a physically higher intrinsic frequency",
          "The acoustic amplitude of the sound wave increases linearly",
          "Air molecules accelerate along with the vehicle"
        ],
        "answer": 0,
        "explanation": "Motion towards the listener crowds wavefronts, shortening perceived wavelength $\\lambda$. Since wave speed $v$ in air is constant, observed frequency $f = \\frac{v}{\\lambda}$ rises."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "What is the theoretical ratio of surface escape velocity $v_{\\text{esc}}$ to circular surface orbital speed $v_{\\text{orb}}$ for any spherical planet?",
        "options": [
          "$\\sqrt{2}$",
          "$2$",
          "$1$",
          "$\\frac{1}{\\sqrt{2}}$",
          "$4$"
        ],
        "answer": 0,
        "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$ and $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$, giving $\\frac{v_{\\text{esc}}}{v_{\\text{orb}}} = \\sqrt{2}$."
      }
    ],
    "Chemistry": [
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "What is the ground-state electron configuration of neutral Sulfur (Z=16)?",
        "options": [
          "$1s^2 2s^2 2p^6 3s^2 3p^4$",
          "$1s^2 2s^2 2p^6 3d^1$",
          "$1s^2 2s^2 2p^5 3s^2$",
          "$1s^2 2s^2 2p^6 4s^1$",
          "$1s^2 2s^2 2p^6 3s^2 3d^1$"
        ],
        "answer": 0,
        "explanation": "Electrons populate orbitals in order of ascending energy according to the Aufbau principle: $1s \\to 2s \\to 2p \\to 3s \\to 3p$. For Sulfur (Z=16), this is $1s^2 2s^2 2p^6 3s^2 3p^4$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "Given $\\sum \\Delta H_f^\\circ(\\text{products}) = -1350\\,\\text{kJ mol}^{-1}$ and $\\sum \\Delta H_f^\\circ(\\text{reactants}) = -450\\,\\text{kJ mol}^{-1}$, calculate the reaction enthalpy $\\Delta H_{\\text{rxn}}^\\circ$.",
        "options": [
          "$-900\\,\\text{kJ mol}^{-1}$",
          "$900\\,\\text{kJ mol}^{-1}$",
          "$-1800\\,\\text{kJ mol}^{-1}$",
          "$-1350\\,\\text{kJ mol}^{-1}$",
          "$-450\\,\\text{kJ mol}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta H^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants}) = (-1350) - (-450) = -900\\,\\text{kJ mol}^{-1}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "State the official IUPAC systematic name for the organic molecule with formula $\\text{CH_3COOCH_3}$.",
        "options": [
          "Methyl ethanoate",
          "Methanol",
          "Methanoic acid",
          "Butanone",
          "Ethyl methanoate"
        ],
        "answer": 0,
        "explanation": "The molecular structure $\\text{CH_3COOCH_3}$ matches the functional group of Methyl ethanoate."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Predict the molecular geometry and characteristic bond angle of Carbon dioxide (CO_2) using VSEPR theory.",
        "options": [
          "Linear, 180°",
          "Linear, 180°",
          "Tetrahedral, 109.5°",
          "T-shaped, 90°",
          "Square planar, 90°"
        ],
        "answer": 0,
        "explanation": "Minimizing electron pair repulsions gives Carbon dioxide (CO_2) its characteristic geometry: Linear, 180°."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "For the exothermic equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ ($\\Delta H < 0$), which combination shifts position towards products?",
        "options": [
          "Decreasing temperature and increasing total pressure",
          "Increasing temperature and decreasing total pressure",
          "Introducing an iron catalyst at constant volume",
          "Decreasing total pressure only",
          "Selectively withdrawing nitrogen gas"
        ],
        "answer": 0,
        "explanation": "Lower temperature favours the forward exothermic direction; higher pressure favours the side with fewer gas moles (2 moles vs 4 moles)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "Hydrolysis of 2-bromo-2-methylpropane in aqueous hydroxide proceeds predominantly via which pathway?",
        "options": [
          "$S_N1$ mechanism via a stable tertiary carbocation intermediate",
          "$S_N2$ mechanism via a single concerted transition state",
          "Electrophilic addition across a double bond",
          "Free-radical chain substitution",
          "Elimination forming exclusively 2-methylprop-1-ene"
        ],
        "answer": 0,
        "explanation": "Tertiary haloalkanes undergo $S_N1$ hydrolysis because steric hindrance impedes backside nucleophilic attack while the tertiary carbocation is stabilised by hyperconjugation."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why is the first ionisation energy of oxygen slightly lower than that of nitrogen?",
        "options": [
          "Spin-pair repulsion between the two paired electrons in one of oxygen's 2p orbitals",
          "Oxygen has greater shielding from core electrons",
          "Nitrogen's 2p electrons reside in a higher shell",
          "Oxygen has a larger atomic radius than nitrogen",
          "Oxygen possesses fewer protons than nitrogen"
        ],
        "answer": 0,
        "explanation": "Nitrogen has a half-filled $2p^3$ subshell. Oxygen's fourth 2p electron must pair up, and mutual spin-pair repulsion eases its removal."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "Calculate the pH of a hydrochloric acid solution with $[\\text{H}^+] = 0.1\\,\\text{mol dm}^{-3}$.",
        "options": [
          "$1.00$",
          "$13.00$",
          "$2.00$",
          "$0.00$",
          "$7.00$"
        ],
        "answer": 0,
        "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(0.1) = 1.00$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following molecules possesses a chiral carbon centre and exhibits optical isomerism?",
        "options": [
          "Butan-2-ol",
          "Propan-2-ol",
          "Ethanol",
          "Propane",
          "Methanol"
        ],
        "answer": 0,
        "explanation": "In butan-2-ol, carbon-2 is bonded to 4 distinct ligands: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{C}_2\\text{H}_5$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does water have an anomalously high boiling point compared to hydrogen sulfide?",
        "options": [
          "Strong intermolecular hydrogen bonding between electronegative oxygen and hydrogen",
          "Covalent O-H bonds inside water molecules are stronger than S-H bonds",
          "Hydrogen sulfide exhibits stronger London dispersion forces",
          "Water is non-polar while H2S is ionic",
          "Sulfur is more electronegative than oxygen"
        ],
        "answer": 0,
        "explanation": "Oxygen is small and strongly electronegative, creating extensive networks of intermolecular hydrogen bonds that require large thermal energy to disrupt."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "For a reaction with empirical rate equation $\\text{Rate} = k[A]^2 [B]$, what is the overall reaction order?",
        "options": [
          "Third order",
          "Second order",
          "First order",
          "Zero order",
          "Fourth order"
        ],
        "answer": 0,
        "explanation": "The overall order is the sum of exponents in the rate law: $2 + 1 = 3$ (third order)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "What is the major organic product when propene reacts with hydrogen bromide ($\\text{HBr}$)?",
        "options": [
          "2-bromopropane",
          "1-bromopropane",
          "1,2-dibromopropane",
          "Propane",
          "Bromopropene"
        ],
        "answer": 0,
        "explanation": "Markovnikov addition yields the more stable secondary carbocation intermediate, producing 2-bromopropane as the major product."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Determine the number of moles in 20\\,\\text{cm}^3$ of a 0.5\\,\\text{mol dm}^{-3}$ solution.",
        "options": [
          "$0.0100\\,\\text{mol}$",
          "$0.100\\,\\text{mol}$",
          "$0.00100\\,\\text{mol}$",
          "$10\\,\\text{mol}$",
          "$40.0\\,\\text{mol}$"
        ],
        "answer": 0,
        "explanation": "$n = C \\times V = 0.5 \\times \\frac{20}{1000} = 0.0100\\,\\text{mol}$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "How does the addition of a positive catalyst increase the rate of a chemical reaction?",
        "options": [
          "Provides an alternative mechanism with lower activation energy",
          "Increases the average kinetic energy of reactant molecules",
          "Increases the total enthalpy of the products",
          "Decreases the total volume of the reaction container",
          "Increases the frequency of collision of all particles"
        ],
        "answer": 0,
        "explanation": "A catalyst lowers the activation energy $E_a$, so a greater proportion of molecular collisions satisfy $E \\ge E_a$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "What functional group is produced when a secondary alcohol such as propan-2-ol is heated under reflux with acidified dichromate?",
        "options": [
          "Ketone",
          "Carboxylic acid",
          "Aldehyde",
          "Ester",
          "Alkene"
        ],
        "answer": 0,
        "explanation": "Oxidation of a secondary alcohol produces a ketone; it cannot undergo further oxidation under mild conditions."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does solid sodium chloride not conduct electricity, while molten sodium chloride conducts readily?",
        "options": [
          "Ions are held in fixed lattice positions in the solid but are free to move in the molten liquid",
          "Electrons become delocalised only during the phase transition",
          "Ionic bonds convert to covalent bonds upon melting",
          "Sodium atoms lose their charge in the liquid phase",
          "Solid NaCl contains neutral atoms rather than ions"
        ],
        "answer": 0,
        "explanation": "Electrical conduction requires mobile charge carriers. In molten NaCl, the giant ionic lattice breaks down, freeing $\\text{Na}^+$ and $\\text{Cl}^-$ ions to migrate."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "In an Arrhenius plot of $\\ln k$ against $\\frac{1}{T}$, what physical quantity does the gradient represent?",
        "options": [
          "$-\\frac{E_a}{R}$",
          "$\\frac{E_a}{R}$",
          "$-E_a$",
          "$\\ln A$",
          "$-RT$"
        ],
        "answer": 0,
        "explanation": "Taking logs of $k = A e^{-E_a/RT}$ gives $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Gradient is $-\\frac{E_a}{R}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "In TLC, a dye spot travels 6\\,\\text{cm}$ while the solvent front advances $10.0\\,\\text{cm}$. What is the $R_f$ value?",
        "options": [
          "$0.60$",
          "$6.0$",
          "$0.40$",
          "$1.67$",
          "$0.30$"
        ],
        "answer": 0,
        "explanation": "$R_f = \\frac{\\text{distance travelled by spot}}{\\text{distance travelled by solvent}} = \\frac{6}{10.0} = 0.60$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does magnesium have a significantly higher melting point than sodium in Period 3?",
        "options": [
          "Magnesium ions ($Mg^{2+}$) have higher charge and release 2 delocalised electrons per atom into the sea",
          "Magnesium forms giant covalent lattices whereas sodium is simple molecular",
          "Sodium has a higher atomic mass than magnesium",
          "Magnesium has more electron shells than sodium",
          "Sodium forms weaker covalent bonds"
        ],
        "answer": 0,
        "explanation": "$\\text{Mg}^{2+}$ has higher charge density and twice as many delocalised electrons as $\\text{Na}^+$, resulting in stronger electrostatic attraction."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "Which mixture forms an acidic buffer capable of resisting pH changes on addition of small amounts of acid or alkali?",
        "options": [
          "Ethanoic acid and sodium ethanoate",
          "Hydrochloric acid and sodium hydroxide in equal moles",
          "Hydrochloric acid and sodium chloride",
          "Pure distilled water",
          "Concentrated ammonia and sodium chloride"
        ],
        "answer": 0,
        "explanation": "An acidic buffer requires a weak acid (e.g. $\\text{CH}_3\\text{COOH}$) and its conjugate base salt (e.g. $\\text{CH}_3\\text{COONa}$)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which reactants combine in the presence of an acid catalyst to produce ethyl ethanoate?",
        "options": [
          "Ethanoic acid and ethanol",
          "Methanoic acid and propanol",
          "Ethanol and ethanal",
          "Ethylamine and ethanoic acid",
          "Ethene and steam"
        ],
        "answer": 0,
        "explanation": "$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Chlorine comprises $^{35}\\text{Cl}$ (75%) and $^{37}\\text{Cl}$ (25%). Calculate its relative atomic mass $A_r$.",
        "options": [
          "$35.50$",
          "$36.00$",
          "$36.00$",
          "$35.00$",
          "$35.00$"
        ],
        "answer": 0,
        "explanation": "$A_r = \\frac{35(75) + 37(25)}{100} = 35.50$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "What is the equilibrium constant $K_c$ expression for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$?",
        "options": [
          "$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$",
          "$K_c = \\frac{[\\text{SO}_2]^2 [\\text{O}_2]}{[\\text{SO}_3]^2}$",
          "$K_c = \\frac{2[\\text{SO}_3]}{2[\\text{SO}_2] + [\\text{O}_2]}$",
          "$K_c = [\\text{SO}_3]^2 - [\\text{SO}_2]^2 [\\text{O}_2]$",
          "$K_c = \\frac{[\\text{SO}_3]}{[\\text{SO}_2][\\text{O}_2]}$"
        ],
        "answer": 0,
        "explanation": "Products over reactants, raised to stoichiometric powers: $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following represents a termination step in the free-radical chlorination of methane?",
        "options": [
          "$\\text{Cl}^\\bullet + \\text{Cl}^\\bullet \\to \\text{Cl}_2$",
          "$\\text{Cl}_2 \\to 2\\text{Cl}^\\bullet$",
          "$\\text{CH}_4 + \\text{Cl}^\\bullet \\to \\text{CH}_3^\\bullet + \\text{HCl}$",
          "$\\text{CH}_3^\\bullet + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$",
          "$\\text{CH}_4 \\to \\text{CH}_3^\\bullet + \\text{H}^\\bullet$"
        ],
        "answer": 0,
        "explanation": "Termination involves two radical species combining to form a stable covalent bond, removing radicals from the system."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Why can graphite conduct electricity while diamond cannot?",
        "options": [
          "Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along layers",
          "Graphite consists of ionic bonds between layers",
          "Diamond has a smaller bandgap than graphite",
          "Graphite contains mobile carbon ions",
          "Diamond has weak intermolecular forces"
        ],
        "answer": 0,
        "explanation": "In graphite, each carbon is $sp^2$ hybridized with 3 covalent bonds; the fourth valence electron is delocalised across planar hexagonal sheets."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "What is the oxidation number of manganese in the permanganate ion $\\text{MnO}_4^-$?",
        "options": [
          "$+7$",
          "$+4$",
          "$+2$",
          "$+6$",
          "$+5$"
        ],
        "answer": 0,
        "explanation": "$x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "An intense, sharp absorption band at $\\sim 1715\\,\\text{cm}^{-1}$ in an infrared spectrum indicates which functional group?",
        "options": [
          "Carbonyl (C=O)",
          "Alcohol (O-H broad stretch)",
          "Alkyne (C≡C)",
          "Alkane (C-C single bond)",
          "Amine (N-H stretch)"
        ],
        "answer": 0,
        "explanation": "The $\\text{C=O}$ double bond has a strong dipole change during stretching, producing a sharp characteristic peak between $1680 - 1750\\,\\text{cm}^{-1}$."
      }
    ],
    "Biology": [
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "What is the primary cellular function of Lysosome in eukaryotic cells?",
        "options": [
          "Enzymatic hydrolysis of cellular waste",
          "Cellulose cell wall synthesis",
          "Active transport of sodium across myelin sheath",
          "DNA replication proofreading",
          "Glycogen granule storage"
        ],
        "answer": 0,
        "explanation": "In cell ultrastructure, the distinct physiological role of Lysosome is Enzymatic hydrolysis of cellular waste."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "A double-stranded DNA sample contains 22% Adenine. What percentage of Cytosine does it contain?",
        "options": [
          "28%",
          "22%",
          "44%",
          "78%",
          "50%"
        ],
        "answer": 0,
        "explanation": "By Chargaff's rules, $%A = \\%T = 22\\%$. $%G + \\%C = 100 - 44 = 56\\%$. Since $%G = \\%C$, Cytosine is $\\frac{56}{2} = 28\\%$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "During ventricular systole in the human cardiac cycle, what is the operational state of the valves?",
        "options": [
          "Atrioventricular valves closed; semilunar valves open",
          "Atrioventricular valves open; semilunar valves closed",
          "Both atrioventricular and semilunar valves are open",
          "Both atrioventricular and semilunar valves are closed",
          "Tricuspid open; bicuspid closed"
        ],
        "answer": 0,
        "explanation": "Ventricular pressure exceeds atrial pressure, snapping AV valves shut (first heart sound), while exceeding arterial pressure to open semilunar valves."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "A cell with actual diameter 50\\,\\mu\\text{m}$ is viewed under magnification $\\times 400$. Calculate its image size in mm.",
        "options": [
          "$20.00\\,\\text{mm}$",
          "$200.0\\,\\text{mm}$",
          "$2.000\\,\\text{mm}$",
          "$20000\\,\\text{mm}$",
          "$8.00\\,\\text{mm}$"
        ],
        "answer": 0,
        "explanation": "$I = A \\times M = 50\\,\\mu\\text{m} \\times 400 = 20000\\,\\mu\\text{m} = 20.00\\,\\text{mm}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "If a DNA template strand reads $3'-TAC-TTT-ATC-5'$, what is the complementary mRNA sequence produced?",
        "options": [
          "$5'-AUG-AAA-UAG-3'$",
          "$5'-TAC-TTT-ATC-3'$",
          "$3'-AUG-AAA-UAG-5'$",
          "$5'-AUG-AAA-CCC-3'$",
          "$3'-UAC-GGA-CAU-5'$"
        ],
        "answer": 0,
        "explanation": "RNA synthesis pairs $T\\to A, A\\to U, C\\to G, G\\to C$ antiparallel to template: $5'-AUG-AAA-UAG-3'$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which feature of human lungs is an adaptation specifically maximizing diffusion rate according to Fick's Law?",
        "options": [
          "A single layer of flattened squamous epithelial cells minimizing diffusion pathway",
          "Cartilage rings preventing bronchial collapse",
          "Goblet cells secreting protective mucus",
          "Pleural fluid lubricating thoracic movements",
          "Intercostal muscles expanding the rib cage"
        ],
        "answer": 0,
        "explanation": "Fick's law states diffusion rate is inversely proportional to barrier thickness. Squamous epithelium provides an ultra-thin pathway (~0.5 $\\mu$m)."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "How does a competitive inhibitor influence the enzyme kinetic parameters $V_{\\text{max}}$ and $K_m$?",
        "options": [
          "$V_{\\text{max}}$ remains unchanged; $K_m$ increases",
          "$V_{\\text{max}}$ decreases; $K_m$ remains unchanged",
          "$V_{\\text{max}}$ decreases; $K_m$ decreases",
          "Both $V_{\\text{max}}$ and $K_m$ increase",
          "Both $V_{\\text{max}}$ and $K_m$ remain unchanged"
        ],
        "answer": 0,
        "explanation": "High substrate concentrations displace competitive inhibitors from the active site ($V_{\\text{max}}$ unchanged), but higher $[S]$ is required for half-maximal velocity ($K_m$ increases)."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "In a monohybrid cross $Aa \\times Aa$ producing 240$ total offspring, how many are expected to display the recessive phenotype?",
        "options": [
          "$60$",
          "$180$",
          "$120$",
          "$30$",
          "$240$"
        ],
        "answer": 0,
        "explanation": "Mendelian monohybrid cross produces a $3:1$ ratio. The recessive frequency is $\\frac{1}{4} \\times 240 = 60$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "Which ion movement causes the initial rapid depolarization phase of a neuronal action potential?",
        "options": [
          "Rapid influx of $\\text{Na}^+$ through voltage-gated sodium channels",
          "Efflux of $\\text{K}^+$ through voltage-gated potassium channels",
          "Active transport of $3\\text{Na}^+$ out and $2\\text{K}^+$ in",
          "Influx of $\\text{Cl}^-$ through GABA receptor channels",
          "Efflux of calcium from the endoplasmic reticulum"
        ],
        "answer": 0,
        "explanation": "Depolarization to threshold opens voltage-gated $\\text{Na}^+$ channels; sodium ions rush into the axon down their electrochemical gradient."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which cellular transport mechanism moves solutes against a concentration gradient utilizing ATP hydrolysis?",
        "options": [
          "Primary active transport via carrier protein pumps",
          "Facilitated diffusion through channel proteins",
          "Simple passive diffusion across lipid bilayer",
          "Osmosis via aquaporin water channels",
          "Bulk gas exchange across cell membrane"
        ],
        "answer": 0,
        "explanation": "Active transport moves molecules from low to high concentration, which requires energy derived from ATP."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What is the expected phenotypic ratio in the $F_2$ generation of a dihybrid cross $AaBb \\times AaBb$ with unlinked genes?",
        "options": [
          "$9 : 3 : 3 : 1$",
          "$1 : 1 : 1 : 1$",
          "$3 : 1$",
          "$9 : 7$",
          "$12 : 3 : 1$"
        ],
        "answer": 0,
        "explanation": "By Mendel's Law of Independent Assortment, two unlinked heterozygous genes assort independently to produce a $9:3:3:1$ phenotypic ratio."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "At a chemical synapse, action potential arrival at the axon terminal directly triggers the opening of:",
        "options": [
          "Voltage-gated $\\text{Ca}^{2+}$ channels",
          "Voltage-gated $\\text{K}^+$ channels only",
          "Ligand-gated $\\text{Cl}^-$ channels",
          "Mechanically-gated sodium channels",
          "Leak potassium channels"
        ],
        "answer": 0,
        "explanation": "Depolarization activates voltage-gated $\\text{Ca}^{2+}$ channels. Inflowing calcium stimulates neurotransmitter vesicle fusion with the presynaptic membrane."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "A plant cell with solute potential $\\Psi_s = -600\\,\\text{kPa}$ and pressure potential $\\Psi_p = +200\\,\\text{kPa}$ has net water potential $\\Psi$ of:",
        "options": [
          "$-400\\,\\text{kPa}$",
          "$-800\\,\\text{kPa}$",
          "$+400\\,\\text{kPa}$",
          "$0\\,\\text{kPa}$",
          "$-1200\\,\\text{kPa}$"
        ],
        "answer": 0,
        "explanation": "$\\Psi = \\Psi_s + \\Psi_p = (-600) + (+200) = -400\\,\\text{kPa}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which type of mutation in a gene's coding region is most likely to alter all downstream amino acids?",
        "options": [
          "Single nucleotide insertion causing a frameshift",
          "Silent base substitution in the wobble position",
          "Conservative missense substitution",
          "Inversion of three complete codons",
          "Duplication of an entire promoter"
        ],
        "answer": 0,
        "explanation": "Adding a single base shifts the reading frame of all subsequent codons, completely altering the synthesized polypeptide."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "How does antidiuretic hormone (ADH) promote water retention in the mammalian kidney?",
        "options": [
          "Stimulates insertion of aquaporins into collecting duct luminal membranes",
          "Inhibits sodium pumps in the ascending limb of Henle",
          "Actively secretes water into the renal medulla",
          "Constricts the afferent arteriole to stop glomerular filtration",
          "Hydrolyses urea in the loop of Henle"
        ],
        "answer": 0,
        "explanation": "ADH binds to basolateral receptors, triggering insertion of aquaporin-2 water channels into the collecting duct apical membrane to reabsorb water."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "During which phase of mitosis do sister chromatids disjoin and migrate toward opposite spindle poles?",
        "options": [
          "Anaphase",
          "Metaphase",
          "Prophase",
          "Telophase",
          "Interphase"
        ],
        "answer": 0,
        "explanation": "In anaphase, centromeric cohesins are degraded and kinetochore microtubules shorten, drawing sister chromatids to opposite poles."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which enzyme is responsible for breaking hydrogen bonds to unwind the double helix during replication?",
        "options": [
          "DNA Helicase",
          "DNA Polymerase III",
          "DNA Ligase",
          "RNA Primase",
          "Topoisomerase"
        ],
        "answer": 0,
        "explanation": "DNA Helicase moves along the DNA phosphodiester backbone, disrupting base pair hydrogen bonds to advance the replication fork."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Approximately what proportion of energy is transferred from one trophic level to the next in food chains?",
        "options": [
          "$10\\%$",
          "$50\\%$",
          "$90\\%$",
          "$1\\%$",
          "$25\\%$"
        ],
        "answer": 0,
        "explanation": "Trophic efficiency is approximately 10%; ~90% of energy is dissipated as respiratory heat, excretory waste, and unconsumed material."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "Where does a non-competitive allosteric inhibitor bind on an enzyme?",
        "options": [
          "At a distinct regulatory allosteric site separate from the catalytic active site",
          "Directly inside the active site blocking substrate binding",
          "To the substrate molecule preventing association",
          "Exclusively to the product molecule",
          "To the aqueous solvent altering local pH"
        ],
        "answer": 0,
        "explanation": "Allosteric inhibitors bind to a non-active site, inducing a conformational change that alters active site geometry and catalytic activity."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Hard",
        "question": "A mother is a carrier ($X^H X^h$) for X-linked haemophilia and the father is unaffected ($X^H Y$). What is the probability their son has haemophilia?",
        "options": [
          "$50\\%$",
          "$25\\%$",
          "$0\\%$",
          "$100\\%$",
          "$75\\%$"
        ],
        "answer": 0,
        "explanation": "A son receives the Y chromosome from the father. There is a 50% chance he inherits $X^h$ from his mother, resulting in haemophilia."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "What is the specific role of calcium ions ($\\text{Ca}^{2+}$) in skeletal muscle contraction?",
        "options": [
          "Binds to troponin, shifting tropomyosin away from myosin-binding sites on actin",
          "Phosphorylates the myosin head directly",
          "Hydrolyses ATP inside the sarcoplasmic reticulum",
          "Blocks sodium channels on the sarcolemma",
          "Breaks down acetylcholine in the synaptic cleft"
        ],
        "answer": 0,
        "explanation": "$\\text{Ca}^{2+}$ binds to troponin C, triggering a conformational movement of tropomyosin that uncovers the active binding sites on actin."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "What chemical bonds primarily stabilize the secondary structure ($\\alpha$-helices and $\\beta$-sheets) of proteins?",
        "options": [
          "Hydrogen bonds between main-chain carbonyl and amide groups",
          "Disulfide bridges between cysteine side chains",
          "Ionic interactions between acidic and basic R-groups",
          "Hydrophobic interactions between aliphatic residues",
          "Covalent peptide bonds between adjacent amino acids"
        ],
        "answer": 0,
        "explanation": "Secondary structure is stabilized by regular hydrogen bonds between peptide backbone $N-H$ and $C=O$ groups."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What occurs during the annealing stage ($55^\\circ\\text{C}-65^\\circ\\text{C}$) of a PCR cycle?",
        "options": [
          "Oligonucleotide primers hybridize specifically to complementary flanking sequences on template strands",
          "Double-stranded DNA denatures into single strands",
          "Taq polymerase synthesizes daughter strands at its optimal rate",
          "Residual primers are degraded by nucleases",
          "dNTPs are phosphorylated to form ATP"
        ],
        "answer": 0,
        "explanation": "At annealing temperature, short single-stranded primers anneal by complementary base pairing to the template DNA strands."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which endocrine cells synthesize and secrete insulin in response to elevated blood glucose?",
        "options": [
          "Beta ($\\beta$) cells of pancreatic islets of Langerhans",
          "Alpha ($\\alpha$) cells of the pancreas",
          "Hepatocytes in the liver",
          "Adrenal cortex steroidogenic cells",
          "Pituitary somatotrophs"
        ],
        "answer": 0,
        "explanation": "Pancreatic $\\beta$-cells detect elevated blood glucose and release insulin to stimulate glucose uptake and glycogenesis."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which piece of evidence strongly supports the endosymbiotic origin of mitochondria?",
        "options": [
          "Mitochondria possess circular naked DNA and 70S ribosomes like prokaryotes",
          "They have a single phospholipid bilayer membrane",
          "They can synthesize glucose from carbon dioxide",
          "They lack any transport proteins in their envelope",
          "They contain 80S ribosomes identical to the cytoplasm"
        ],
        "answer": 0,
        "explanation": "Mitochondria contain their own circular genome, 70S ribosomes, divide by binary fission, and have a double membrane."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "The observation that 61 mRNA codons code for only 20 standard amino acids indicates that the code is:",
        "options": [
          "Degenerate",
          "Universal",
          "Non-overlapping",
          "Ambiguous",
          "Overlapping"
        ],
        "answer": 0,
        "explanation": "The genetic code is degenerate (redundant) because multiple synonymous codons specify the same amino acid."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "According to the cohesion-tension theory, what is the primary driving force pulling water up through xylem vessels?",
        "options": [
          "Negative hydrostatic pressure generated by evaporation from mesophyll cell walls",
          "Active ATP pumping by root cortical cells",
          "Positive root pressure pushing water from below",
          "Phloem osmotic pressure gradient",
          "Centripetal force from wind movement"
        ],
        "answer": 0,
        "explanation": "Transpiration from stomata creates tension (negative pressure) in leaf xylem, pulling water upward due to hydrogen-bonded cohesion."
      }
    ]
  },
  "diagnostic_3": {
    "Mathematics 1": [
      {
        "module": "Mathematics 1",
        "topic": "Surds & Indices",
        "difficulty": "Medium",
        "question": "Rationalise the denominator and simplify fully: $\\frac{3}{\\sqrt{11} - \\sqrt{10}}$.",
        "options": [
          "$3(\\sqrt{11} + \\sqrt{10})$",
          "$3(\\sqrt{11} - \\sqrt{10})$",
          "$\\frac{3(\\sqrt{11} + \\sqrt{10})}{21}$",
          "$3\\sqrt{10}$",
          "$3\\sqrt{11}$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by the conjugate $(\\sqrt{11} + \\sqrt{10})$. The denominator simplifies to $(11) - (10) = 1$. The result is $3(\\sqrt{11} + \\sqrt{10})$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "Find the gradient of the straight line perpendicular to the line $y = 5x + 6$.",
        "options": [
          "$-\\frac{1}{5}$",
          "$5$",
          "$-5$",
          "$\\frac{1}{5}$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "For perpendicular lines, $m_1 m_2 = -1$. With $m_1 = 5$, the perpendicular gradient is $m_2 = -\\frac{1}{5}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Easy",
        "question": "Given the curve $y = 7x^{2} - 14x$, calculate the value of the derivative $\\frac{dy}{dx}$ at $x = 2$.",
        "options": [
          "$14$",
          "$28$",
          "$7$",
          "$21$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Differentiating: $\\frac{dy}{dx} = 14x^{1} - 14$. At $x = 2$, this equals $14(2^{1}) - 14 = 14$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "For what range of real values of $k$ does the equation $x^2 - 2kx + 49 = 0$ have two distinct real roots?",
        "options": [
          "$k < -7$ or $k > 7$",
          "$-7 < k < 7$",
          "$k = 7$",
          "$k \\ge 0$",
          "$k > 7$ only"
        ],
        "answer": 0,
        "explanation": "Distinct real roots require discriminant $\\Delta > 0$: $(-2k)^2 - 4(1)(49) > 0 \\implies 4k^2 - 196 > 0 \\implies k^2 > 49 \\implies k < -7$ or $k > 7$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Easy",
        "question": "A circle is given by $(x - -3)^2 + (y + 3)^2 = 64$. Identify its center and radius.",
        "options": [
          "Center $(-3, -3)$, radius $r = 8$",
          "Center $(--3, 3)$, radius $r = 8$",
          "Center $(-3, -3)$, radius $r = 64$",
          "Center $(0, 0)$, radius $r = 8$",
          "Center $(-3, 3)$, radius $r = 8$"
        ],
        "answer": 0,
        "explanation": "Standard circle form $(x - h)^2 + (y - k)^2 = r^2$ gives center $(h, k) = (-3, -3)$ and radius $r = \\sqrt{64} = 8$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "In how many distinct ways can a committee of $3$ individuals be selected from a pool of $8$ candidates?",
        "options": [
          "$56$",
          "$168$",
          "$66$",
          "$51$",
          "$24$"
        ],
        "answer": 0,
        "explanation": "Selection without regard to order is evaluated by combinations: $\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Solve for $x$ in the equation $\\log_{4}(x + 4) = 3$.",
        "options": [
          "$60$",
          "$64$",
          "$56$",
          "$12$",
          "$81$"
        ],
        "answer": 0,
        "explanation": "Rewriting in exponential form: $x + 4 = 4^{3} = 64 \\implies x = 64 - 4 = 60$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "Using trigonometric identities, simplify $2\\sin(75^\\circ)\\cos(75^\\circ)$.",
        "options": [
          "$\\sin(150^\\circ)$",
          "$\\cos(150^\\circ)$",
          "$\\tan(150^\\circ)$",
          "$\\frac{1}{2}\\sin(150^\\circ)$",
          "$2\\sin(75^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the double-angle identity $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$, substituting $\\theta = 75^\\circ$ gives $\\sin(150^\\circ)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Determine the exact area bounded by the curve $y = 3x^2 + 4$, the $x$-axis, and vertical lines $x = 0$ and $x = 2$.",
        "options": [
          "$16$",
          "$8$",
          "$20$",
          "$12$",
          "$8$"
        ],
        "answer": 0,
        "explanation": "The area is $\\int_0^{2} (3x^2 + 4)\\,dx = [x^3 + 4x]_0^{2} = (2^3 + 4(2)) - 0 = 16$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Easy",
        "question": "If functions are defined as $f(x) = 3x$ and $g(x) = x^2 + 2$, evaluate $f(g(2))$.",
        "options": [
          "$18$",
          "$15$",
          "$21$",
          "$38$",
          "$8$"
        ],
        "answer": 0,
        "explanation": "Evaluating inside first: $g(2) = 2^2 + 2 = 6$. Then $f(6) = 3 \\times 6 = 18$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry & Trig",
        "difficulty": "Medium",
        "question": "In $\\triangle ABC$, the side $a = 18\\,\\text{cm}$ lies opposite angle $A = 60^\\circ$. What is the circumcircle diameter $2R$?",
        "options": [
          "$\\frac{18}{\\sin(60^\\circ)}$",
          "$18\\sin(60^\\circ)$",
          "$\\frac{18}{2\\sin(60^\\circ)}$",
          "$36\\sin(60^\\circ)$",
          "$18\\cos(60^\\circ)$"
        ],
        "answer": 0,
        "explanation": "By the extended Sine Rule, $\\frac{a}{\\sin A} = 2R$, so circumdiameter $2R = \\frac{18}{\\sin(60^\\circ)}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Medium",
        "question": "For random events $A$ and $B$, $P(A) = 0.5$ and $P(A \\cap B) = 0.25$. Calculate the conditional probability $P(B | A)$.",
        "options": [
          "$0.50$",
          "$0.125$",
          "$0.25$",
          "$0.75$",
          "$0.50$"
        ],
        "answer": 0,
        "explanation": "By Bayes/conditional rule, $P(B | A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.25}{0.5} = 0.50$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "Find the coefficient of $x^2$ in the algebraic binomial expansion of $(1 + x)^{6}$.",
        "options": [
          "$15$",
          "$6$",
          "$20$",
          "$30$",
          "$19$"
        ],
        "answer": 0,
        "explanation": "The general expansion term is $\\binom{n}{r} x^r$. For $x^2$, $r = 2$, so the coefficient is $\\binom{6}{2} = 15$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Geometry",
        "difficulty": "Easy",
        "question": "What is the total sum of all interior angles of a convex polygon having $7$ sides?",
        "options": [
          "$900^\\circ$",
          "$1080^\\circ$",
          "$720^\\circ$",
          "$1260^\\circ$",
          "$360^\\circ$"
        ],
        "answer": 0,
        "explanation": "The interior angle sum formula is $(n - 2) \\times 180^\\circ = (7 - 2) \\times 180^\\circ = 900^\\circ$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Locate the $x$-coordinate of the stationary point on the parabola $y = 2x^2 - 12x + 7$.",
        "options": [
          "$3$",
          "$2$",
          "$-3$",
          "$0$",
          "$6$"
        ],
        "answer": 0,
        "explanation": "Setting the derivative to zero: $\\frac{dy}{dx} = 4x - 12 = 0 \\implies x = 3$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "In a geometric sequence with first term $a = 2$ and common ratio $r = 3$, determine the $4^{\\text{th}}$ term.",
        "options": [
          "$54$",
          "$162$",
          "$52$",
          "$56$",
          "$24$"
        ],
        "answer": 0,
        "explanation": "The $n^{\\text{th}}$ term is $T_n = a r^{n-1}$. For $n = 4$: $T_4 = 2 \\times 3^3 = 54$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Medium",
        "question": "A circular sector of radius $r = 6\\,\\text{cm}$ has central angle $\\theta = \\frac{\\pi}{3}\\,\\text{rad}$. Compute its area.",
        "options": [
          "$6.00\\pi\\,\\text{cm}^2$",
          "$6\\pi\\,\\text{cm}^2$",
          "$12.00\\pi\\,\\text{cm}^2$",
          "$2\\pi\\,\\text{cm}^2$",
          "$\\pi\\,\\text{cm}^2$"
        ],
        "answer": 0,
        "explanation": "Sector area formula: $A = \\frac{1}{2}r^2 \\theta = \\frac{1}{2}(6)^2 \\left(\\frac{\\pi}{3}\\right) = 6.00\\pi\\,\\text{cm}^2$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Statistics",
        "difficulty": "Medium",
        "question": "A sample has mean $\\mu = 35$ and standard deviation $\\sigma = 5$. What is the standard deviation after transformation $Y = 3X + 5$?",
        "options": [
          "$15$",
          "$20$",
          "$45$",
          "$5$",
          "$110$"
        ],
        "answer": 0,
        "explanation": "Adding a constant does not alter spread. Multiplying by $a$ scales standard deviation by $|a|$: $\\sigma_Y = 3\\sigma_X = 3(5) = 15$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Medium",
        "question": "When the polynomial $P(x) = 2x^3 - 3x^2 + 5$ is divided by $(x - 1)$, what is the numerical remainder?",
        "options": [
          "$4$",
          "$6$",
          "$1$",
          "$0$",
          "$-4$"
        ],
        "answer": 0,
        "explanation": "By the Remainder Theorem, the remainder upon division by $(x - c)$ equals $P(c) = 2(1)^3 - 3(1)^2 + 5 = 4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Coordinate Geometry",
        "difficulty": "Easy",
        "question": "The graph of $y = f(x)$ is translated horizontally by vector $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$. State the new equation.",
        "options": [
          "$y = f(x - 2)$",
          "$y = f(x + 2)$",
          "$y = f(x) + 2$",
          "$y = f(x) - 2$",
          "$y = 2f(x)$"
        ],
        "answer": 0,
        "explanation": "A translation by $+a$ along the $x$-axis maps $x \\mapsto x - a$, giving $y = f(x - 2)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Hard",
        "question": "Find the Cartesian equation of the tangent line to the parabola $y = x^2$ at the point with $x$-coordinate $x = 2$.",
        "options": [
          "$y = 4x -4$",
          "$y = -\\frac{1}{4}x + 1$",
          "$y = 8x$",
          "$y = x + 2$",
          "$y = 4x + 4$"
        ],
        "answer": 0,
        "explanation": "Gradient is $m = \\frac{dy}{dx} = 2x = 4$. At $x = 2, y = 4$. Using $y - y_1 = m(x - x_1)$ yields $y = 4x -4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Algebra",
        "difficulty": "Hard",
        "question": "Decompose $\\frac{2x + 5}{(x + 1)(x + 2)}$ into partial fractions $\\frac{A}{x + 1} + \\frac{B}{x + 2}$. Find $(A, B)$.",
        "options": [
          "$(3, -1)$",
          "$(1, 1)$",
          "$(2, 3)$",
          "$(5, -3)$",
          "$(4, -2)$"
        ],
        "answer": 0,
        "explanation": "$2x + 5 = A(x + 2) + B(x + 1)$. At $x = -1 \\implies A = 3$. At $x = -2 \\implies B = -1$. Thus $(A, B) = (3, -1)$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Vectors",
        "difficulty": "Easy",
        "question": "Compute the scalar dot product between $\\mathbf{u} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.",
        "options": [
          "$4$",
          "$9$",
          "$0$",
          "$6$",
          "$-2$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{u} \\cdot \\mathbf{v} = (3)(2) + (2)(-1) = 6 - 2 = 4$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Probability",
        "difficulty": "Easy",
        "question": "If events $E_1$ and $E_2$ are statistically independent with $P(E_1) = 0.4$ and $P(E_2) = 0.6$, what is $P(E_1 \\cap E_2)$?",
        "options": [
          "$0.240$",
          "$1.00$",
          "$0.76$",
          "$0.4$",
          "$0.6$"
        ],
        "answer": 0,
        "explanation": "Independence implies $P(E_1 \\cap E_2) = P(E_1) \\times P(E_2) = 0.4 \\times 0.6 = 0.240$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Sequences & Series",
        "difficulty": "Medium",
        "question": "Find the sum of the first 10 terms of an arithmetic progression with first term $a = 3$ and common difference $d = 4$.",
        "options": [
          "$210$",
          "$190$",
          "$240$",
          "$39$",
          "$30$"
        ],
        "answer": 0,
        "explanation": "$S_n = \\frac{n}{2}[2a + (n-1)d] = 5[2(3) + 9(4)] = 210$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Trigonometry",
        "difficulty": "Hard",
        "question": "Solve $\\cos(x) = \\frac{1}{2}$ for all values in the principal interval $0 \\le x \\le 2\\pi$.",
        "options": [
          "$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$",
          "$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$",
          "$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{4}, \\frac{7\\pi}{4}$",
          "$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$"
        ],
        "answer": 0,
        "explanation": "Cosine is positive in quadrants I and IV: $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$."
      },
      {
        "module": "Mathematics 1",
        "topic": "Calculus",
        "difficulty": "Medium",
        "question": "Evaluate the second derivative $\\frac{d^2y}{dx^2}$ of $y = 3x^3 - 18x^2$ at $x = 2$.",
        "options": [
          "$0$",
          "$18$",
          "$-18$",
          "$36$",
          "$-36$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = 9x^2 - 36x$, so $\\frac{d^2y}{dx^2} = 18x - 36$. At $x = 2$: 18(2) - 36 = 0$."
      }
    ],
    "Mathematics 2": [
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Apply the product rule to differentiate $y = x^{2} e^{2x}$ with respect to $x$.",
        "options": [
          "$x^{1} e^{2x}(2 + 2x)$",
          "$2 x^{1} e^{2x}$",
          "$2x^{2} e^{2x}$",
          "$22 x e^{2x}$",
          "$x^{2} e^{2x}$"
        ],
        "answer": 0,
        "explanation": "By $(uv)' = u'v + uv'$: $u' = 2x^{1}, v' = 2e^{2x}$. Factoring gives $x^{1} e^{2x}(2 + 2x)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Calculate the vector cross product $\\mathbf{i} \\times \\mathbf{j}$ in a right-handed Cartesian coordinate system.",
        "options": [
          "$\\mathbf{k}$",
          "$-\\mathbf{k}$",
          "$\\mathbf{0}$",
          "$\\mathbf{i}$",
          "$\\mathbf{j}$"
        ],
        "answer": 0,
        "explanation": "By the right-hand rule definition of orthonormal unit basis vectors, $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Easy",
        "question": "Compute the determinant of the $2 \\times 2$ matrix $M = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$.",
        "options": [
          "$10$",
          "$14$",
          "$8$",
          "$12$",
          "$7$"
        ],
        "answer": 0,
        "explanation": "$\\det(M) = ad - bc = (3)(4) - (1)(2) = 10$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Using the substitution $u = x^2 + 3$, evaluate $\\int 2x(x^2 + 3)^3\\,dx$.",
        "options": [
          "$\\frac{1}{4}(x^2 + 3)^4 + C$",
          "$\\frac{1}{3}(x^2 + 3)^3 + C$",
          "$(x^2 + 3)^4 + C$",
          "$\\frac{1}{2}(x^2 + 3)^4 + C$",
          "$6x^2(x^2 + 3)^2 + C$"
        ],
        "answer": 0,
        "explanation": "$du = 2x\\,dx$. The integral transforms to $\\int u^3\\,du = \\frac{1}{4}u^4 + C = \\frac{1}{4}(x^2 + 3)^4 + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "For what value of $\\lambda$ are the 3D vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -1 \\\\ \\lambda \\end{pmatrix}$ perpendicular?",
        "options": [
          "$-1$",
          "$1$",
          "$5$",
          "$-5$",
          "$0$"
        ],
        "answer": 0,
        "explanation": "Perpendicular vectors have zero dot product: $2(1) + 3(-1) - \\lambda = 0 \\implies -1 - \\lambda = 0 \\implies \\lambda = -1$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Determine the modulus $|z|$ and principal argument $\\arg(z)$ of the complex number $z = 1 + i\\sqrt{3}$.",
        "options": [
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 2, \\arg(z) = \\frac{\\pi}{6}$",
          "$|z| = 4, \\arg(z) = \\frac{\\pi}{3}$",
          "$|z| = 1, \\arg(z) = \\frac{\\pi}{4}$",
          "$|z| = \\sqrt{3}, \\arg(z) = \\frac{\\pi}{2}$"
        ],
        "answer": 0,
        "explanation": "$|z| = \\sqrt{1^2 + 3} = 2$. In quadrant I, $\\theta = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Medium",
        "question": "Differentiate $y = \\frac{\\sin(x)}{x}$ with respect to $x$ using the quotient rule.",
        "options": [
          "$\\frac{x\\cos(x) - \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x)}{1}$",
          "$\\frac{x\\sin(x) - \\cos(x)}{x^2}$",
          "$\\frac{x\\cos(x) + \\sin(x)}{x^2}$",
          "$\\frac{\\cos(x) - x\\sin(x)}{x^2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{u'v - uv'}{v^2} = \\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "A plane has normal vector $\\mathbf{n} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 4 \\end{pmatrix}$ and passes through $(1, 0, 1)$. Find its equation.",
        "options": [
          "$2x - 3y + 4z = 6$",
          "$2x - 3y + 4z = 0$",
          "$2x - 3y + 4z = 2$",
          "$x + z = 6$",
          "$-2x + 3y - 4z = 1$"
        ],
        "answer": 0,
        "explanation": "$ax + by + cz = d \\implies 2(1) - 3(0) + 4(1) = 6$, so $2x - 3y + 4z = 6$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "By De Moivre's theorem, simplify the complex power $(\\cos\\theta + i\\sin\\theta)^{6}$.",
        "options": [
          "$\\cos(6\\theta) + i\\sin(6\\theta)$",
          "$\\cos^3\\theta + i\\sin^3\\theta$",
          "$6(\\cos\\theta + i\\sin\\theta)$",
          "$\\cos(\\theta / 6) + i\\sin(\\theta / 6)$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, which for $n = 6$ yields $\\cos(6\\theta) + i\\sin(6\\theta)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find $\\frac{dy}{dx}$ for the ellipse $x^2 + 4y^2 = 25$ using implicit differentiation.",
        "options": [
          "$-\\frac{x}{4y}$",
          "$-\\frac{4x}{y}$",
          "$\\frac{x}{4y}$",
          "$-\\frac{x}{2y}$",
          "$\\frac{25 - x}{4y}$"
        ],
        "answer": 0,
        "explanation": "$2x + 8y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Calculate the perpendicular distance from the origin $(0,0,0)$ to the plane $2x - y + 2z = 9$.",
        "options": [
          "$3$",
          "$9$",
          "$\\frac{9}{2}$",
          "$\\sqrt{9}$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$D = \\frac{|0 - 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{\\sqrt{9}} = 3$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the matrix inverse $A^{-1}$ for $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "options": [
          "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
          "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 6 - 5 = 1$. The inverse is $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Evaluate $\\int x e^x\\,dx$ using integration by parts.",
        "options": [
          "$x e^x - e^x + C$",
          "$x e^x + e^x + C$",
          "$\\frac{1}{2}x^2 e^x + C$",
          "$e^x - x e^x + C$",
          "$x^2 e^x + C$"
        ],
        "answer": 0,
        "explanation": "$u = x, dv = e^x dx \\implies uv - \\int v du = x e^x - \\int e^x dx = x e^x - e^x + C$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Medium",
        "question": "Two lines have direction vectors $\\mathbf{d}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{d}_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$. What is the acute angle between them?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$0^\\circ$"
        ],
        "answer": 0,
        "explanation": "$\\cos\\theta = \\frac{1(1) + 0 + 0}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "Evaluate the determinant of the upper-triangular matrix $M = \\begin{pmatrix} 2 & 4 & 5 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
        "options": [
          "$24$",
          "$9$",
          "$0$",
          "$48$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "The determinant of any triangular matrix is the product of its diagonal elements: $2 \\times 3 \\times 4 = 24$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Solve the separable differential equation $\\frac{dy}{dx} = 2x y$ with initial condition $y(0) = 1$.",
        "options": [
          "$y = e^{x^2}$",
          "$y = e^{2x}$",
          "$y = x^2 + 1$",
          "$y = 2e^x - 1$",
          "$y = e^{x^2/2}$"
        ],
        "answer": 0,
        "explanation": "$\\frac{1}{y}dy = 2x dx \\implies \\ln|y| = x^2 + C$. With $y(0) = 1 \\implies C = 0$, so $y = e^{x^2}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "At what point does the line $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ intersect the plane $x + y + z = 7$?",
        "options": [
          "$(3, 2, 2)$",
          "$(2, 2, 1)$",
          "$(1, 2, 0)$",
          "$(4, 2, 3)$",
          "$(0, 2, -1)$"
        ],
        "answer": 0,
        "explanation": "$(1 + t) + 2 + t = 7 \\implies 2t + 3 = 7 \\implies t = 2$. The point is $(1 + 2, 2, 0 + 2) = (3, 2, 2)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Find the roots of the quadratic equation $z^2 + 4z + 13 = 0$ in the complex domain.",
        "options": [
          "$-2 \\pm 3i$",
          "$2 \\pm 3i$",
          "$-4 \\pm 6i$",
          "$-2 \\pm 9i$",
          "$-2 \\pm i\\sqrt{13}$"
        ],
        "answer": 0,
        "explanation": "$z = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = -2 \\pm 3i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "Find the general solution to the homogeneous equation $\\frac{d^2y}{dx^2} - 9y = 0$.",
        "options": [
          "$y = A e^{3x} + B e^{-3x}$",
          "$y = A\\cos(3x) + B\\sin(3x)$",
          "$y = (A + Bx)e^{3x}$",
          "$y = A e^{9x}$",
          "$y = A\\cosh(9x)$"
        ],
        "answer": 0,
        "explanation": "Characteristic equation $m^2 - 9 = 0 \\implies m = \\pm 3$, giving $y = A e^{3x} + B e^{-3x}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Which vector operation yields the common perpendicular direction to two skew lines with direction vectors $\\mathbf{d}_1$ and $\\mathbf{d}_2$?",
        "options": [
          "$\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "$\\mathbf{d}_1 \\cdot \\mathbf{d}_2$",
          "$\\mathbf{d}_1 + \\mathbf{d}_2$",
          "$\\frac{\\mathbf{d}_1}{|\\mathbf{d}_2|}$",
          "$\\mathbf{d}_1 - \\mathbf{d}_2$"
        ],
        "answer": 0,
        "explanation": "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ produces a vector mutually perpendicular to both direction vectors."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "Express the complex quotient $\\frac{5}{2 + i}$ in standard Cartesian form $x + iy$.",
        "options": [
          "$2 - i$",
          "$2 + i$",
          "$1 - 2i$",
          "$\\frac{10 - 5i}{3}$",
          "$5 - 2.5i$"
        ],
        "answer": 0,
        "explanation": "Multiply numerator and denominator by conjugate $(2 - i)$: $\\frac{5(2 - i)}{4 + 1} = 2 - i$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Easy",
        "question": "Differentiate $y = \\cos(4x^3)$ with respect to $x$.",
        "options": [
          "$-12x^2 \\sin(4x^3)$",
          "$12x^2 \\sin(4x^3)$",
          "$-4\\sin(4x^3)$",
          "$-12x \\cos(4x^3)$",
          "$\\sin(12x^2)$"
        ],
        "answer": 0,
        "explanation": "$\\frac{dy}{dx} = -\\sin(4x^3) \\cdot \\frac{d}{dx}(4x^3) = -12x^2 \\sin(4x^3)$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Easy",
        "question": "Determine the exact magnitude of the 3D position vector $\\mathbf{r} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 6 \\end{pmatrix}$.",
        "options": [
          "$\\sqrt{49}$",
          "$11$",
          "$\\sqrt{11}$",
          "$36$",
          "$\\sqrt{27}$"
        ],
        "answer": 0,
        "explanation": "$|\\mathbf{r}| = \\sqrt{3^2 + 2^2 + 6^2} = \\sqrt{49}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Medium",
        "question": "What geometric transformation is represented by the matrix $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ in $\\mathbb{R}^2$?",
        "options": [
          "Counter-clockwise rotation by $90^\\circ$ about the origin",
          "Clockwise rotation by $90^\\circ$ about the origin",
          "Reflection across the line $y = x$",
          "Reflection across the line $y = -x$",
          "Uniform scale factor of $-1$"
        ],
        "answer": 0,
        "explanation": "The standard rotation matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ with $\\theta = 90^\\circ$ matches $R$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Advanced Calculus",
        "difficulty": "Hard",
        "question": "What are the first three non-zero terms of the Maclaurin expansion for $\\sin(x)$?",
        "options": [
          "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$1 - \\frac{x^2}{2} + \\frac{x^4}{24}$",
          "$x + \\frac{x^3}{6} + \\frac{x^5}{120}$",
          "$x - x^3 + x^5$",
          "$1 - x + \\frac{x^2}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + \\frac{x^5}{120}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Vectors & 3D",
        "difficulty": "Hard",
        "question": "Find a unit normal vector to the plane $3x + 4z = 10$.",
        "options": [
          "$\\begin{pmatrix} 3/5 \\\\ 0 \\\\ 4/5 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$",
          "$\\begin{pmatrix} 3/7 \\\\ 0 \\\\ 4/7 \\end{pmatrix}$",
          "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
          "$\\begin{pmatrix} 4/5 \\\\ 0 \\\\ -3/5 \\end{pmatrix}$"
        ],
        "answer": 0,
        "explanation": "$\\mathbf{n} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix}$, magnitude $\\sqrt{3^2 + 4^2} = 5$. The unit normal is $\\frac{1}{5}\\mathbf{n}$."
      },
      {
        "module": "Mathematics 2",
        "topic": "Matrices & Complex",
        "difficulty": "Hard",
        "question": "What is the algebraic sum of all $n$ complex $n^{\\text{th}}$ roots of unity for any integer $n \\ge 2$?",
        "options": [
          "$0$",
          "$1$",
          "$n$",
          "$-1$",
          "$n\\pi$"
        ],
        "answer": 0,
        "explanation": "The roots satisfy $z^n - 1 = 0$. By Vieta's formulas, the sum of roots is the coefficient of $z^{n-1}$, which is $0$."
      }
    ],
    "Physics": [
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A car starts with velocity $u = 0\\,\\text{m s}^{-1}$ and accelerates uniformly at $a = 3\\,\\text{m s}^{-2}$ for $t = 3\\,\\text{s}$. Find displacement $s$.",
        "options": [
          "$13.5\\,\\text{m}$",
          "$23.5\\,\\text{m}$",
          "$8.5\\,\\text{m}$",
          "$9\\,\\text{m}$",
          "$4.5\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$s = ut + \\frac{1}{2}at^2 = (0)(3) + 0.5(3)(3^2) = 13.5\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "Two identical resistors of $R = 12\\,\\Omega$ are wired in parallel across a 24\\,\\text{V}$ ideal battery. What total current is drawn?",
        "options": [
          "$4.00\\,\\text{A}$",
          "$2.00\\,\\text{A}$",
          "$8.00\\,\\text{A}$",
          "$2.00\\,\\text{A}$",
          "$288\\,\\text{A}$"
        ],
        "answer": 0,
        "explanation": "$R_{eq} = \\frac{12}{2} = 6\\,\\Omega$. $I = \\frac{V}{R_{eq}} = \\frac{24}{6} = 4.00\\,\\text{A}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "An ideal gas at temperature $T_1 = 300\\,\\text{K}$ and pressure $P_1$ in a rigid sealed container has its temperature raised to $600\\,\\text{K}$. What is the new pressure $P_2$?",
        "options": [
          "$2P_1$",
          "$\\frac{1}{2}P_1$",
          "$4P_1$",
          "$P_1$",
          "$\\sqrt{2}P_1$"
        ],
        "answer": 0,
        "explanation": "At constant volume, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\frac{600}{300} = 2P_1$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A pulling force of 100\\,\\text{N}$ acts on a mass of 12\\,\\text{kg}$ against friction of 16\\,\\text{N}$. Calculate its acceleration.",
        "options": [
          "$7.00\\,\\text{m s}^{-2}$",
          "$8.33\\,\\text{m s}^{-2}$",
          "$9.67\\,\\text{m s}^{-2}$",
          "$1.33\\,\\text{m s}^{-2}$",
          "$1200\\,\\text{m s}^{-2}$"
        ],
        "answer": 0,
        "explanation": "$F_{net} = 100 - 16 = 84\\,\\text{N}$. $a = \\frac{F_{net}}{m} = \\frac{84}{12} = 7.00\\,\\text{m s}^{-2}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Easy",
        "question": "A sound wave propagates at $340\\,\\text{m s}^{-1}$ with frequency $f = 350\\,\\text{Hz}$. What is its wavelength $\\lambda$?",
        "options": [
          "$0.97\\,\\text{m}$",
          "$119000\\,\\text{m}$",
          "$1.03\\,\\text{m}$",
          "$1.94\\,\\text{m}$",
          "$0.48\\,\\text{m}$"
        ],
        "answer": 0,
        "explanation": "$\\lambda = \\frac{v}{f} = \\frac{340}{350} = 0.97\\,\\text{m}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "A satellite orbits Earth at radius $r$ with speed $v$. If it moves to an orbit of radius $4r$, what is its new orbital speed?",
        "options": [
          "$\\frac{1}{2}v$",
          "$\\frac{1}{4}v$",
          "$2v$",
          "$4v$",
          "$\\frac{1}{\\sqrt{2}}v$"
        ],
        "answer": 0,
        "explanation": "$v = \\sqrt{\\frac{GM}{r}}$. At radius $4r$, $v' = \\sqrt{\\frac{GM}{4r}} = \\frac{1}{2}v$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A cart of mass 2\\,\\text{kg}$ moving at 5\\,\\text{m s}^{-1}$ collides with and sticks to a stationary cart of mass 3\\,\\text{kg}$. Find their final speed.",
        "options": [
          "$2.00\\,\\text{m s}^{-1}$",
          "$5\\,\\text{m s}^{-1}$",
          "$4.00\\,\\text{m s}^{-1}$",
          "$3.33\\,\\text{m s}^{-1}$",
          "$0\\,\\text{m s}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{2 \\times 5}{5} = 2.00\\,\\text{m s}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "In a Young's double-slit experiment, fringe separation is $w$. If slit separation $s$ is doubled and screen distance $D$ is halved, what is the new fringe width?",
        "options": [
          "$\\frac{1}{4}w$",
          "$\\frac{1}{2}w$",
          "$w$",
          "$2w$",
          "$4w$"
        ],
        "answer": 0,
        "explanation": "$w = \\frac{\\lambda D}{s}$. New width $w' = \\frac{\\lambda (D/2)}{2s} = \\frac{1}{4}w$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "Two point charges experience electrostatic force $F$ at distance $d$. What is the force when separation is reduced to $\\frac{d}{3}$?",
        "options": [
          "$9F$",
          "$3F$",
          "$\\frac{1}{3}F$",
          "$\\frac{1}{9}F$",
          "$6F$"
        ],
        "answer": 0,
        "explanation": "$F \\propto \\frac{1}{r^2}$. Dividing distance by 3 multiplies force by $3^2 = 9$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "Calculate the gravitational potential energy gained when an object of mass 4\\,\\text{kg}$ is lifted vertically by 6\\,\\text{m}$ ($g = 9.8\\,\\text{m s}^{-2}$).",
        "options": [
          "$235.2\\,\\text{J}$",
          "$117.6\\,\\text{J}$",
          "$470.4\\,\\text{J}$",
          "$24\\,\\text{J}$",
          "$2.4\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta E_p = mgh = (4)(9.8)(6) = 235.2\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A battery with $\\text{EMF} = 24\\,\\text{V}$ and internal resistance $r = 1\\,\\Omega$ is connected to load $R = 5\\,\\Omega$. Find the terminal potential difference.",
        "options": [
          "$20.00\\,\\text{V}$",
          "$24\\,\\text{V}$",
          "$4.00\\,\\text{V}$",
          "$4.00\\,\\text{V}$",
          "$10.00\\,\\text{V}$"
        ],
        "answer": 0,
        "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{24}{6}$. Terminal $V = IR = 20.00\\,\\text{V}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "How much heat is required to warm 2\\,\\text{kg}$ of liquid water ($c = 4200\\,\\text{J kg}^{-1}\\,\\text{K}^{-1}$) by $\\Delta T = 15\\,\\text{K}$?",
        "options": [
          "$126000\\,\\text{J}$",
          "$63000\\,\\text{J}$",
          "$252000\\,\\text{J}$",
          "$63000\\,\\text{J}$",
          "$30\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$Q = mc\\Delta T = (2)(4200)(15) = 126000\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A car of mass 1100\\,\\text{kg}$ negotiates a curve of radius 150\\,\\text{m}$ at speed 30\\,\\text{m s}^{-1}$. Compute the centripetal force required.",
        "options": [
          "$6600\\,\\text{N}$",
          "$13200\\,\\text{N}$",
          "$3300\\,\\text{N}$",
          "$33000\\,\\text{N}$",
          "$220\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "$F_c = \\frac{mv^2}{r} = \\frac{1100 \\times 30^2}{150} = 6600\\,\\text{N}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A light beam in air ($n_1 = 1.0$) enters glass ($n_2 = 1.50$) at angle of incidence $\\theta_1 = 30^\\circ$. What is the value of $\\sin(\\theta_2)$?",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$",
          "$\\frac{\\sqrt{3}}{3}$"
        ],
        "answer": 0,
        "explanation": "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies (1.0)\\sin(30^\\circ) = 1.50\\sin\\theta_2 \\implies 0.5 = 1.5\\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{1}{3}$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "A charged particle enters a uniform magnetic field with velocity perpendicular to the field lines. What trajectory does it follow?",
        "options": [
          "A circle in the plane perpendicular to the magnetic field",
          "A straight line with uniform acceleration",
          "A parabolic path along the magnetic field",
          "A hyperbolic escape path",
          "A stationary oscillation"
        ],
        "answer": 0,
        "explanation": "Because the magnetic force $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$ is always normal to velocity, speed is constant and motion is uniform circular."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A spring of stiffness $k = 120\\,\\text{N m}^{-1}$ is extended by $\\Delta x = 0.2\\,\\text{m}$. What is the stored elastic potential energy?",
        "options": [
          "$2.400\\,\\text{J}$",
          "$24.00\\,\\text{J}$",
          "$4.800\\,\\text{J}$",
          "$12.000\\,\\text{J}$",
          "$0.600\\,\\text{J}$"
        ],
        "answer": 0,
        "explanation": "$E_e = \\frac{1}{2}k(\\Delta x)^2 = 0.5(120)(0.2^2) = 2.400\\,\\text{J}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Light of wavelength $\\lambda = 500\\,\\text{nm}$ illuminates a diffraction grating with $500\\,\\text{lines per mm}$. What is the highest observable order $m$?",
        "options": [
          "$4$",
          "$2$",
          "$5$",
          "$3$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "Slit spacing $d = \\frac{10^{-3}\\,\\text{m}}{500} = 2 \\times 10^{-6}\\,\\text{m}$. Max order is $m \\le \\frac{d}{\\lambda} = \\frac{2 \\times 10^{-6}}{500 \\times 10^{-9}} = 4$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Easy",
        "question": "Two parallel metal plates separated by 0.04\\,\\text{m}$ have a potential difference of 400\\,\\text{V}$. Find the electric field strength $E$.",
        "options": [
          "$10000\\,\\text{V m}^{-1}$",
          "$5000\\,\\text{V m}^{-1}$",
          "$20000\\,\\text{V m}^{-1}$",
          "$16\\,\\text{V m}^{-1}$",
          "$0\\,\\text{V m}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$E = \\frac{V}{d} = \\frac{400}{0.04} = 10000\\,\\text{V m}^{-1}$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "A uniform plank of length $4.0\\,\\text{m}$ and weight $200\\,\\text{N}$ is supported at its midpoint. What force applied at one end maintains equilibrium?",
        "options": [
          "$0\\,\\text{N}$",
          "$100\\,\\text{N}$",
          "$200\\,\\text{N}$",
          "$50\\,\\text{N}$",
          "$400\\,\\text{N}$"
        ],
        "answer": 0,
        "explanation": "Because the pivot is at the centre of mass, the plank's weight exerts zero torque about the pivot, requiring zero force to maintain balance."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "A wire of resistance $R$ is drawn out so that its length is doubled while volume is conserved. What is its new resistance?",
        "options": [
          "$4R$",
          "$2R$",
          "$R$",
          "$\\frac{1}{2}R$",
          "$\\frac{1}{4}R$"
        ],
        "answer": 0,
        "explanation": "Doubling length ($L \\to 2L$) halves cross-sectional area ($A \\to A/2$). Resistance $R' = \\rho \\frac{2L}{A/2} = 4R$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "If the absolute temperature of an ideal gas is quadrupled, what factor does the root-mean-square molecular speed $c_{\\text{rms}}$ increase by?",
        "options": [
          "Factor of 2",
          "Factor of 4",
          "Factor of 16",
          "Factor of 1.41",
          "Remains unchanged"
        ],
        "answer": 0,
        "explanation": "$c_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} \\propto \\sqrt{T}$. Quadrupling $T$ multiplies speed by $\\sqrt{4} = 2$."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Medium",
        "question": "At what launch angle $\\theta$ above horizontal does a projectile achieve maximum horizontal range on level ground?",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$",
          "$15^\\circ$"
        ],
        "answer": 0,
        "explanation": "Range $R = \\frac{u^2 \\sin(2\\theta)}{g}$ is maximized when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Medium",
        "question": "A stretched string of length $L$ vibrates in its fundamental harmonic mode with nodes at both fixed ends. What is the wavelength $\\lambda_1$?",
        "options": [
          "$2L$",
          "$L$",
          "$\\frac{L}{2}$",
          "$4L$",
          "$\\frac{2L}{3}$"
        ],
        "answer": 0,
        "explanation": "Fundamental mode consists of a single loop: $L = \\frac{\\lambda}{2} \\implies \\lambda = 2L$."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Medium",
        "question": "According to Faraday's Law, the induced electromotive force in a circuit is directly proportional to the:",
        "options": [
          "Time rate of change of magnetic flux linkage",
          "Total resistance of the circuit loop",
          "Steady current flowing in the coil",
          "Temperature of the magnet",
          "Square of the magnetic flux"
        ],
        "answer": 0,
        "explanation": "Faraday's Law states $\\mathcal{E} = -\\frac{d\\Phi}{dt}$, so induced EMF equals the rate of change of flux linkage."
      },
      {
        "module": "Physics",
        "topic": "Mechanics",
        "difficulty": "Easy",
        "question": "A constant force of 35\\,\\text{N}$ acts on an object for a duration of $\\Delta t = 0.1\\,\\text{s}$. What impulse is imparted?",
        "options": [
          "$3.50\\,\\text{N s}$",
          "$7.00\\,\\text{N s}$",
          "$350.0\\,\\text{N s}$",
          "$1.75\\,\\text{N s}$",
          "$35.1\\,\\text{N s}$"
        ],
        "answer": 0,
        "explanation": "$\\text{Impulse} = F \\Delta t = (35)(0.1) = 3.50\\,\\text{N s}$."
      },
      {
        "module": "Physics",
        "topic": "Electricity & Waves",
        "difficulty": "Hard",
        "question": "Why does an observer perceive a higher pitch when an emergency siren approaches at constant velocity?",
        "options": [
          "The emitted wavefronts are compressed in the forward direction, reducing observed wavelength",
          "The velocity of sound in the air increases toward the observer",
          "The source emits sound with a physically higher intrinsic frequency",
          "The acoustic amplitude of the sound wave increases linearly",
          "Air molecules accelerate along with the vehicle"
        ],
        "answer": 0,
        "explanation": "Motion towards the listener crowds wavefronts, shortening perceived wavelength $\\lambda$. Since wave speed $v$ in air is constant, observed frequency $f = \\frac{v}{\\lambda}$ rises."
      },
      {
        "module": "Physics",
        "topic": "Thermal & Fields",
        "difficulty": "Hard",
        "question": "What is the theoretical ratio of surface escape velocity $v_{\\text{esc}}$ to circular surface orbital speed $v_{\\text{orb}}$ for any spherical planet?",
        "options": [
          "$\\sqrt{2}$",
          "$2$",
          "$1$",
          "$\\frac{1}{\\sqrt{2}}$",
          "$4$"
        ],
        "answer": 0,
        "explanation": "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$ and $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$, giving $\\frac{v_{\\text{esc}}}{v_{\\text{orb}}} = \\sqrt{2}$."
      }
    ],
    "Chemistry": [
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "What is the ground-state electron configuration of neutral Chlorine (Z=17)?",
        "options": [
          "$1s^2 2s^2 2p^6 3s^2 3p^5$",
          "$1s^2 2s^2 2p^6 3d^1$",
          "$1s^2 2s^2 2p^5 3s^2$",
          "$1s^2 2s^2 2p^6 4s^1$",
          "$1s^2 2s^2 2p^6 3s^2 3d^1$"
        ],
        "answer": 0,
        "explanation": "Electrons populate orbitals in order of ascending energy according to the Aufbau principle: $1s \\to 2s \\to 2p \\to 3s \\to 3p$. For Chlorine (Z=17), this is $1s^2 2s^2 2p^6 3s^2 3p^5$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "Given $\\sum \\Delta H_f^\\circ(\\text{products}) = -1050\\,\\text{kJ mol}^{-1}$ and $\\sum \\Delta H_f^\\circ(\\text{reactants}) = -350\\,\\text{kJ mol}^{-1}$, calculate the reaction enthalpy $\\Delta H_{\\text{rxn}}^\\circ$.",
        "options": [
          "$-700\\,\\text{kJ mol}^{-1}$",
          "$700\\,\\text{kJ mol}^{-1}$",
          "$-1400\\,\\text{kJ mol}^{-1}$",
          "$-1050\\,\\text{kJ mol}^{-1}$",
          "$-350\\,\\text{kJ mol}^{-1}$"
        ],
        "answer": 0,
        "explanation": "$\\Delta H^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants}) = (-1050) - (-350) = -700\\,\\text{kJ mol}^{-1}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "State the official IUPAC systematic name for the organic molecule with formula $\\text{CH_3CH_2CH_2OH}$.",
        "options": [
          "Propan-1-ol",
          "Methanol",
          "Methanoic acid",
          "Butanone",
          "Ethyl methanoate"
        ],
        "answer": 0,
        "explanation": "The molecular structure $\\text{CH_3CH_2CH_2OH}$ matches the functional group of Propan-1-ol."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Predict the molecular geometry and characteristic bond angle of Sulfur hexafluoride (SF_6) using VSEPR theory.",
        "options": [
          "Octahedral, 90°",
          "Linear, 180°",
          "Tetrahedral, 109.5°",
          "T-shaped, 90°",
          "Square planar, 90°"
        ],
        "answer": 0,
        "explanation": "Minimizing electron pair repulsions gives Sulfur hexafluoride (SF_6) its characteristic geometry: Octahedral, 90°."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "For the exothermic equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ ($\\Delta H < 0$), which combination shifts position towards products?",
        "options": [
          "Decreasing temperature and increasing total pressure",
          "Increasing temperature and decreasing total pressure",
          "Introducing an iron catalyst at constant volume",
          "Decreasing total pressure only",
          "Selectively withdrawing nitrogen gas"
        ],
        "answer": 0,
        "explanation": "Lower temperature favours the forward exothermic direction; higher pressure favours the side with fewer gas moles (2 moles vs 4 moles)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "Hydrolysis of 2-bromo-2-methylpropane in aqueous hydroxide proceeds predominantly via which pathway?",
        "options": [
          "$S_N1$ mechanism via a stable tertiary carbocation intermediate",
          "$S_N2$ mechanism via a single concerted transition state",
          "Electrophilic addition across a double bond",
          "Free-radical chain substitution",
          "Elimination forming exclusively 2-methylprop-1-ene"
        ],
        "answer": 0,
        "explanation": "Tertiary haloalkanes undergo $S_N1$ hydrolysis because steric hindrance impedes backside nucleophilic attack while the tertiary carbocation is stabilised by hyperconjugation."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why is the first ionisation energy of oxygen slightly lower than that of nitrogen?",
        "options": [
          "Spin-pair repulsion between the two paired electrons in one of oxygen's 2p orbitals",
          "Oxygen has greater shielding from core electrons",
          "Nitrogen's 2p electrons reside in a higher shell",
          "Oxygen has a larger atomic radius than nitrogen",
          "Oxygen possesses fewer protons than nitrogen"
        ],
        "answer": 0,
        "explanation": "Nitrogen has a half-filled $2p^3$ subshell. Oxygen's fourth 2p electron must pair up, and mutual spin-pair repulsion eases its removal."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "Calculate the pH of a hydrochloric acid solution with $[\\text{H}^+] = 0.02\\,\\text{mol dm}^{-3}$.",
        "options": [
          "$1.70$",
          "$12.30$",
          "$2.70$",
          "$0.70$",
          "$7.00$"
        ],
        "answer": 0,
        "explanation": "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(0.02) = 1.70$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following molecules possesses a chiral carbon centre and exhibits optical isomerism?",
        "options": [
          "Butan-2-ol",
          "Propan-2-ol",
          "Ethanol",
          "Propane",
          "Methanol"
        ],
        "answer": 0,
        "explanation": "In butan-2-ol, carbon-2 is bonded to 4 distinct ligands: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, and $-\\text{C}_2\\text{H}_5$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does water have an anomalously high boiling point compared to hydrogen sulfide?",
        "options": [
          "Strong intermolecular hydrogen bonding between electronegative oxygen and hydrogen",
          "Covalent O-H bonds inside water molecules are stronger than S-H bonds",
          "Hydrogen sulfide exhibits stronger London dispersion forces",
          "Water is non-polar while H2S is ionic",
          "Sulfur is more electronegative than oxygen"
        ],
        "answer": 0,
        "explanation": "Oxygen is small and strongly electronegative, creating extensive networks of intermolecular hydrogen bonds that require large thermal energy to disrupt."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "For a reaction with empirical rate equation $\\text{Rate} = k[A]^2 [B]$, what is the overall reaction order?",
        "options": [
          "Third order",
          "Second order",
          "First order",
          "Zero order",
          "Fourth order"
        ],
        "answer": 0,
        "explanation": "The overall order is the sum of exponents in the rate law: $2 + 1 = 3$ (third order)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "What is the major organic product when propene reacts with hydrogen bromide ($\\text{HBr}$)?",
        "options": [
          "2-bromopropane",
          "1-bromopropane",
          "1,2-dibromopropane",
          "Propane",
          "Bromopropene"
        ],
        "answer": 0,
        "explanation": "Markovnikov addition yields the more stable secondary carbocation intermediate, producing 2-bromopropane as the major product."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Determine the number of moles in 80\\,\\text{cm}^3$ of a 0.15\\,\\text{mol dm}^{-3}$ solution.",
        "options": [
          "$0.0120\\,\\text{mol}$",
          "$0.120\\,\\text{mol}$",
          "$0.00120\\,\\text{mol}$",
          "$12\\,\\text{mol}$",
          "$533.3\\,\\text{mol}$"
        ],
        "answer": 0,
        "explanation": "$n = C \\times V = 0.15 \\times \\frac{80}{1000} = 0.0120\\,\\text{mol}$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "How does the addition of a positive catalyst increase the rate of a chemical reaction?",
        "options": [
          "Provides an alternative mechanism with lower activation energy",
          "Increases the average kinetic energy of reactant molecules",
          "Increases the total enthalpy of the products",
          "Decreases the total volume of the reaction container",
          "Increases the frequency of collision of all particles"
        ],
        "answer": 0,
        "explanation": "A catalyst lowers the activation energy $E_a$, so a greater proportion of molecular collisions satisfy $E \\ge E_a$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "What functional group is produced when a secondary alcohol such as propan-2-ol is heated under reflux with acidified dichromate?",
        "options": [
          "Ketone",
          "Carboxylic acid",
          "Aldehyde",
          "Ester",
          "Alkene"
        ],
        "answer": 0,
        "explanation": "Oxidation of a secondary alcohol produces a ketone; it cannot undergo further oxidation under mild conditions."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does solid sodium chloride not conduct electricity, while molten sodium chloride conducts readily?",
        "options": [
          "Ions are held in fixed lattice positions in the solid but are free to move in the molten liquid",
          "Electrons become delocalised only during the phase transition",
          "Ionic bonds convert to covalent bonds upon melting",
          "Sodium atoms lose their charge in the liquid phase",
          "Solid NaCl contains neutral atoms rather than ions"
        ],
        "answer": 0,
        "explanation": "Electrical conduction requires mobile charge carriers. In molten NaCl, the giant ionic lattice breaks down, freeing $\\text{Na}^+$ and $\\text{Cl}^-$ ions to migrate."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "In an Arrhenius plot of $\\ln k$ against $\\frac{1}{T}$, what physical quantity does the gradient represent?",
        "options": [
          "$-\\frac{E_a}{R}$",
          "$\\frac{E_a}{R}$",
          "$-E_a$",
          "$\\ln A$",
          "$-RT$"
        ],
        "answer": 0,
        "explanation": "Taking logs of $k = A e^{-E_a/RT}$ gives $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Gradient is $-\\frac{E_a}{R}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Easy",
        "question": "In TLC, a dye spot travels 3.5\\,\\text{cm}$ while the solvent front advances $10.0\\,\\text{cm}$. What is the $R_f$ value?",
        "options": [
          "$0.35$",
          "$3.5$",
          "$0.65$",
          "$2.86$",
          "$0.17$"
        ],
        "answer": 0,
        "explanation": "$R_f = \\frac{\\text{distance travelled by spot}}{\\text{distance travelled by solvent}} = \\frac{3.5}{10.0} = 0.35$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Medium",
        "question": "Why does magnesium have a significantly higher melting point than sodium in Period 3?",
        "options": [
          "Magnesium ions ($Mg^{2+}$) have higher charge and release 2 delocalised electrons per atom into the sea",
          "Magnesium forms giant covalent lattices whereas sodium is simple molecular",
          "Sodium has a higher atomic mass than magnesium",
          "Magnesium has more electron shells than sodium",
          "Sodium forms weaker covalent bonds"
        ],
        "answer": 0,
        "explanation": "$\\text{Mg}^{2+}$ has higher charge density and twice as many delocalised electrons as $\\text{Na}^+$, resulting in stronger electrostatic attraction."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Hard",
        "question": "Which mixture forms an acidic buffer capable of resisting pH changes on addition of small amounts of acid or alkali?",
        "options": [
          "Ethanoic acid and sodium ethanoate",
          "Hydrochloric acid and sodium hydroxide in equal moles",
          "Hydrochloric acid and sodium chloride",
          "Pure distilled water",
          "Concentrated ammonia and sodium chloride"
        ],
        "answer": 0,
        "explanation": "An acidic buffer requires a weak acid (e.g. $\\text{CH}_3\\text{COOH}$) and its conjugate base salt (e.g. $\\text{CH}_3\\text{COONa}$)."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which reactants combine in the presence of an acid catalyst to produce ethyl ethanoate?",
        "options": [
          "Ethanoic acid and ethanol",
          "Methanoic acid and propanol",
          "Ethanol and ethanal",
          "Ethylamine and ethanoic acid",
          "Ethene and steam"
        ],
        "answer": 0,
        "explanation": "$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Chlorine comprises $^{35}\\text{Cl}$ (80%) and $^{37}\\text{Cl}$ (20%). Calculate its relative atomic mass $A_r$.",
        "options": [
          "$35.40$",
          "$36.00$",
          "$35.90$",
          "$34.90$",
          "$35.00$"
        ],
        "answer": 0,
        "explanation": "$A_r = \\frac{35(80) + 37(20)}{100} = 35.40$."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Medium",
        "question": "What is the equilibrium constant $K_c$ expression for $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$?",
        "options": [
          "$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$",
          "$K_c = \\frac{[\\text{SO}_2]^2 [\\text{O}_2]}{[\\text{SO}_3]^2}$",
          "$K_c = \\frac{2[\\text{SO}_3]}{2[\\text{SO}_2] + [\\text{O}_2]}$",
          "$K_c = [\\text{SO}_3]^2 - [\\text{SO}_2]^2 [\\text{O}_2]$",
          "$K_c = \\frac{[\\text{SO}_3]}{[\\text{SO}_2][\\text{O}_2]}$"
        ],
        "answer": 0,
        "explanation": "Products over reactants, raised to stoichiometric powers: $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Medium",
        "question": "Which of the following represents a termination step in the free-radical chlorination of methane?",
        "options": [
          "$\\text{Cl}^\\bullet + \\text{Cl}^\\bullet \\to \\text{Cl}_2$",
          "$\\text{Cl}_2 \\to 2\\text{Cl}^\\bullet$",
          "$\\text{CH}_4 + \\text{Cl}^\\bullet \\to \\text{CH}_3^\\bullet + \\text{HCl}$",
          "$\\text{CH}_3^\\bullet + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$",
          "$\\text{CH}_4 \\to \\text{CH}_3^\\bullet + \\text{H}^\\bullet$"
        ],
        "answer": 0,
        "explanation": "Termination involves two radical species combining to form a stable covalent bond, removing radicals from the system."
      },
      {
        "module": "Chemistry",
        "topic": "Atomic & Bonding",
        "difficulty": "Easy",
        "question": "Why can graphite conduct electricity while diamond cannot?",
        "options": [
          "Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along layers",
          "Graphite consists of ionic bonds between layers",
          "Diamond has a smaller bandgap than graphite",
          "Graphite contains mobile carbon ions",
          "Diamond has weak intermolecular forces"
        ],
        "answer": 0,
        "explanation": "In graphite, each carbon is $sp^2$ hybridized with 3 covalent bonds; the fourth valence electron is delocalised across planar hexagonal sheets."
      },
      {
        "module": "Chemistry",
        "topic": "Energetics & Kinetics",
        "difficulty": "Easy",
        "question": "What is the oxidation number of manganese in the permanganate ion $\\text{MnO}_4^-$?",
        "options": [
          "$+7$",
          "$+4$",
          "$+2$",
          "$+6$",
          "$+5$"
        ],
        "answer": 0,
        "explanation": "$x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$."
      },
      {
        "module": "Chemistry",
        "topic": "Organic Chemistry",
        "difficulty": "Hard",
        "question": "An intense, sharp absorption band at $\\sim 1715\\,\\text{cm}^{-1}$ in an infrared spectrum indicates which functional group?",
        "options": [
          "Carbonyl (C=O)",
          "Alcohol (O-H broad stretch)",
          "Alkyne (C≡C)",
          "Alkane (C-C single bond)",
          "Amine (N-H stretch)"
        ],
        "answer": 0,
        "explanation": "The $\\text{C=O}$ double bond has a strong dipole change during stretching, producing a sharp characteristic peak between $1680 - 1750\\,\\text{cm}^{-1}$."
      }
    ],
    "Biology": [
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "What is the primary cellular function of Ribosome in eukaryotic cells?",
        "options": [
          "Polypeptide translation from mRNA codons",
          "Cellulose cell wall synthesis",
          "Active transport of sodium across myelin sheath",
          "DNA replication proofreading",
          "Glycogen granule storage"
        ],
        "answer": 0,
        "explanation": "In cell ultrastructure, the distinct physiological role of Ribosome is Polypeptide translation from mRNA codons."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "A double-stranded DNA sample contains 26% Adenine. What percentage of Cytosine does it contain?",
        "options": [
          "24%",
          "26%",
          "52%",
          "74%",
          "50%"
        ],
        "answer": 0,
        "explanation": "By Chargaff's rules, $%A = \\%T = 26\\%$. $%G + \\%C = 100 - 52 = 48\\%$. Since $%G = \\%C$, Cytosine is $\\frac{48}{2} = 24\\%$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "During ventricular systole in the human cardiac cycle, what is the operational state of the valves?",
        "options": [
          "Atrioventricular valves closed; semilunar valves open",
          "Atrioventricular valves open; semilunar valves closed",
          "Both atrioventricular and semilunar valves are open",
          "Both atrioventricular and semilunar valves are closed",
          "Tricuspid open; bicuspid closed"
        ],
        "answer": 0,
        "explanation": "Ventricular pressure exceeds atrial pressure, snapping AV valves shut (first heart sound), while exceeding arterial pressure to open semilunar valves."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "A cell with actual diameter 20\\,\\mu\\text{m}$ is viewed under magnification $\\times 250$. Calculate its image size in mm.",
        "options": [
          "$5.00\\,\\text{mm}$",
          "$50.0\\,\\text{mm}$",
          "$0.500\\,\\text{mm}$",
          "$5000\\,\\text{mm}$",
          "$12.50\\,\\text{mm}$"
        ],
        "answer": 0,
        "explanation": "$I = A \\times M = 20\\,\\mu\\text{m} \\times 250 = 5000\\,\\mu\\text{m} = 5.00\\,\\text{mm}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "If a DNA template strand reads $3'-TAC-CAT-GGG-5'$, what is the complementary mRNA sequence produced?",
        "options": [
          "$5'-AUG-GUA-CCC-3'$",
          "$5'-TAC-CAT-GGG-3'$",
          "$3'-AUG-GUA-CCC-5'$",
          "$5'-AUG-AAA-CCC-3'$",
          "$3'-UAC-GGA-CAU-5'$"
        ],
        "answer": 0,
        "explanation": "RNA synthesis pairs $T\\to A, A\\to U, C\\to G, G\\to C$ antiparallel to template: $5'-AUG-GUA-CCC-3'$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which feature of human lungs is an adaptation specifically maximizing diffusion rate according to Fick's Law?",
        "options": [
          "A single layer of flattened squamous epithelial cells minimizing diffusion pathway",
          "Cartilage rings preventing bronchial collapse",
          "Goblet cells secreting protective mucus",
          "Pleural fluid lubricating thoracic movements",
          "Intercostal muscles expanding the rib cage"
        ],
        "answer": 0,
        "explanation": "Fick's law states diffusion rate is inversely proportional to barrier thickness. Squamous epithelium provides an ultra-thin pathway (~0.5 $\\mu$m)."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "How does a competitive inhibitor influence the enzyme kinetic parameters $V_{\\text{max}}$ and $K_m$?",
        "options": [
          "$V_{\\text{max}}$ remains unchanged; $K_m$ increases",
          "$V_{\\text{max}}$ decreases; $K_m$ remains unchanged",
          "$V_{\\text{max}}$ decreases; $K_m$ decreases",
          "Both $V_{\\text{max}}$ and $K_m$ increase",
          "Both $V_{\\text{max}}$ and $K_m$ remain unchanged"
        ],
        "answer": 0,
        "explanation": "High substrate concentrations displace competitive inhibitors from the active site ($V_{\\text{max}}$ unchanged), but higher $[S]$ is required for half-maximal velocity ($K_m$ increases)."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "In a monohybrid cross $Aa \\times Aa$ producing 360$ total offspring, how many are expected to display the recessive phenotype?",
        "options": [
          "$90$",
          "$270$",
          "$180$",
          "$45$",
          "$360$"
        ],
        "answer": 0,
        "explanation": "Mendelian monohybrid cross produces a $3:1$ ratio. The recessive frequency is $\\frac{1}{4} \\times 360 = 90$."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "Which ion movement causes the initial rapid depolarization phase of a neuronal action potential?",
        "options": [
          "Rapid influx of $\\text{Na}^+$ through voltage-gated sodium channels",
          "Efflux of $\\text{K}^+$ through voltage-gated potassium channels",
          "Active transport of $3\\text{Na}^+$ out and $2\\text{K}^+$ in",
          "Influx of $\\text{Cl}^-$ through GABA receptor channels",
          "Efflux of calcium from the endoplasmic reticulum"
        ],
        "answer": 0,
        "explanation": "Depolarization to threshold opens voltage-gated $\\text{Na}^+$ channels; sodium ions rush into the axon down their electrochemical gradient."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which cellular transport mechanism moves solutes against a concentration gradient utilizing ATP hydrolysis?",
        "options": [
          "Primary active transport via carrier protein pumps",
          "Facilitated diffusion through channel proteins",
          "Simple passive diffusion across lipid bilayer",
          "Osmosis via aquaporin water channels",
          "Bulk gas exchange across cell membrane"
        ],
        "answer": 0,
        "explanation": "Active transport moves molecules from low to high concentration, which requires energy derived from ATP."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What is the expected phenotypic ratio in the $F_2$ generation of a dihybrid cross $AaBb \\times AaBb$ with unlinked genes?",
        "options": [
          "$9 : 3 : 3 : 1$",
          "$1 : 1 : 1 : 1$",
          "$3 : 1$",
          "$9 : 7$",
          "$12 : 3 : 1$"
        ],
        "answer": 0,
        "explanation": "By Mendel's Law of Independent Assortment, two unlinked heterozygous genes assort independently to produce a $9:3:3:1$ phenotypic ratio."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "At a chemical synapse, action potential arrival at the axon terminal directly triggers the opening of:",
        "options": [
          "Voltage-gated $\\text{Ca}^{2+}$ channels",
          "Voltage-gated $\\text{K}^+$ channels only",
          "Ligand-gated $\\text{Cl}^-$ channels",
          "Mechanically-gated sodium channels",
          "Leak potassium channels"
        ],
        "answer": 0,
        "explanation": "Depolarization activates voltage-gated $\\text{Ca}^{2+}$ channels. Inflowing calcium stimulates neurotransmitter vesicle fusion with the presynaptic membrane."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "A plant cell with solute potential $\\Psi_s = -600\\,\\text{kPa}$ and pressure potential $\\Psi_p = +200\\,\\text{kPa}$ has net water potential $\\Psi$ of:",
        "options": [
          "$-400\\,\\text{kPa}$",
          "$-800\\,\\text{kPa}$",
          "$+400\\,\\text{kPa}$",
          "$0\\,\\text{kPa}$",
          "$-1200\\,\\text{kPa}$"
        ],
        "answer": 0,
        "explanation": "$\\Psi = \\Psi_s + \\Psi_p = (-600) + (+200) = -400\\,\\text{kPa}$."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which type of mutation in a gene's coding region is most likely to alter all downstream amino acids?",
        "options": [
          "Single nucleotide insertion causing a frameshift",
          "Silent base substitution in the wobble position",
          "Conservative missense substitution",
          "Inversion of three complete codons",
          "Duplication of an entire promoter"
        ],
        "answer": 0,
        "explanation": "Adding a single base shifts the reading frame of all subsequent codons, completely altering the synthesized polypeptide."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "How does antidiuretic hormone (ADH) promote water retention in the mammalian kidney?",
        "options": [
          "Stimulates insertion of aquaporins into collecting duct luminal membranes",
          "Inhibits sodium pumps in the ascending limb of Henle",
          "Actively secretes water into the renal medulla",
          "Constricts the afferent arteriole to stop glomerular filtration",
          "Hydrolyses urea in the loop of Henle"
        ],
        "answer": 0,
        "explanation": "ADH binds to basolateral receptors, triggering insertion of aquaporin-2 water channels into the collecting duct apical membrane to reabsorb water."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Easy",
        "question": "During which phase of mitosis do sister chromatids disjoin and migrate toward opposite spindle poles?",
        "options": [
          "Anaphase",
          "Metaphase",
          "Prophase",
          "Telophase",
          "Interphase"
        ],
        "answer": 0,
        "explanation": "In anaphase, centromeric cohesins are degraded and kinetochore microtubules shorten, drawing sister chromatids to opposite poles."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "Which enzyme is responsible for breaking hydrogen bonds to unwind the double helix during replication?",
        "options": [
          "DNA Helicase",
          "DNA Polymerase III",
          "DNA Ligase",
          "RNA Primase",
          "Topoisomerase"
        ],
        "answer": 0,
        "explanation": "DNA Helicase moves along the DNA phosphodiester backbone, disrupting base pair hydrogen bonds to advance the replication fork."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Approximately what proportion of energy is transferred from one trophic level to the next in food chains?",
        "options": [
          "$10\\%$",
          "$50\\%$",
          "$90\\%$",
          "$1\\%$",
          "$25\\%$"
        ],
        "answer": 0,
        "explanation": "Trophic efficiency is approximately 10%; ~90% of energy is dissipated as respiratory heat, excretory waste, and unconsumed material."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Hard",
        "question": "Where does a non-competitive allosteric inhibitor bind on an enzyme?",
        "options": [
          "At a distinct regulatory allosteric site separate from the catalytic active site",
          "Directly inside the active site blocking substrate binding",
          "To the substrate molecule preventing association",
          "Exclusively to the product molecule",
          "To the aqueous solvent altering local pH"
        ],
        "answer": 0,
        "explanation": "Allosteric inhibitors bind to a non-active site, inducing a conformational change that alters active site geometry and catalytic activity."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Hard",
        "question": "A mother is a carrier ($X^H X^h$) for X-linked haemophilia and the father is unaffected ($X^H Y$). What is the probability their son has haemophilia?",
        "options": [
          "$50\\%$",
          "$25\\%$",
          "$0\\%$",
          "$100\\%$",
          "$75\\%$"
        ],
        "answer": 0,
        "explanation": "A son receives the Y chromosome from the father. There is a 50% chance he inherits $X^h$ from his mother, resulting in haemophilia."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Hard",
        "question": "What is the specific role of calcium ions ($\\text{Ca}^{2+}$) in skeletal muscle contraction?",
        "options": [
          "Binds to troponin, shifting tropomyosin away from myosin-binding sites on actin",
          "Phosphorylates the myosin head directly",
          "Hydrolyses ATP inside the sarcoplasmic reticulum",
          "Blocks sodium channels on the sarcolemma",
          "Breaks down acetylcholine in the synaptic cleft"
        ],
        "answer": 0,
        "explanation": "$\\text{Ca}^{2+}$ binds to troponin C, triggering a conformational movement of tropomyosin that uncovers the active binding sites on actin."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "What chemical bonds primarily stabilize the secondary structure ($\\alpha$-helices and $\\beta$-sheets) of proteins?",
        "options": [
          "Hydrogen bonds between main-chain carbonyl and amide groups",
          "Disulfide bridges between cysteine side chains",
          "Ionic interactions between acidic and basic R-groups",
          "Hydrophobic interactions between aliphatic residues",
          "Covalent peptide bonds between adjacent amino acids"
        ],
        "answer": 0,
        "explanation": "Secondary structure is stabilized by regular hydrogen bonds between peptide backbone $N-H$ and $C=O$ groups."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "What occurs during the annealing stage ($55^\\circ\\text{C}-65^\\circ\\text{C}$) of a PCR cycle?",
        "options": [
          "Oligonucleotide primers hybridize specifically to complementary flanking sequences on template strands",
          "Double-stranded DNA denatures into single strands",
          "Taq polymerase synthesizes daughter strands at its optimal rate",
          "Residual primers are degraded by nucleases",
          "dNTPs are phosphorylated to form ATP"
        ],
        "answer": 0,
        "explanation": "At annealing temperature, short single-stranded primers anneal by complementary base pairing to the template DNA strands."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Easy",
        "question": "Which endocrine cells synthesize and secrete insulin in response to elevated blood glucose?",
        "options": [
          "Beta ($\\beta$) cells of pancreatic islets of Langerhans",
          "Alpha ($\\alpha$) cells of the pancreas",
          "Hepatocytes in the liver",
          "Adrenal cortex steroidogenic cells",
          "Pituitary somatotrophs"
        ],
        "answer": 0,
        "explanation": "Pancreatic $\\beta$-cells detect elevated blood glucose and release insulin to stimulate glucose uptake and glycogenesis."
      },
      {
        "module": "Biology",
        "topic": "Cell Biology",
        "difficulty": "Medium",
        "question": "Which piece of evidence strongly supports the endosymbiotic origin of mitochondria?",
        "options": [
          "Mitochondria possess circular naked DNA and 70S ribosomes like prokaryotes",
          "They have a single phospholipid bilayer membrane",
          "They can synthesize glucose from carbon dioxide",
          "They lack any transport proteins in their envelope",
          "They contain 80S ribosomes identical to the cytoplasm"
        ],
        "answer": 0,
        "explanation": "Mitochondria contain their own circular genome, 70S ribosomes, divide by binary fission, and have a double membrane."
      },
      {
        "module": "Biology",
        "topic": "Genetics & Molecular",
        "difficulty": "Medium",
        "question": "The observation that 61 mRNA codons code for only 20 standard amino acids indicates that the code is:",
        "options": [
          "Degenerate",
          "Universal",
          "Non-overlapping",
          "Ambiguous",
          "Overlapping"
        ],
        "answer": 0,
        "explanation": "The genetic code is degenerate (redundant) because multiple synonymous codons specify the same amino acid."
      },
      {
        "module": "Biology",
        "topic": "Physiology & Ecology",
        "difficulty": "Medium",
        "question": "According to the cohesion-tension theory, what is the primary driving force pulling water up through xylem vessels?",
        "options": [
          "Negative hydrostatic pressure generated by evaporation from mesophyll cell walls",
          "Active ATP pumping by root cortical cells",
          "Positive root pressure pushing water from below",
          "Phloem osmotic pressure gradient",
          "Centripetal force from wind movement"
        ],
        "answer": 0,
        "explanation": "Transpiration from stomata creates tension (negative pressure) in leaf xylem, pulling water upward due to hydrogen-bonded cohesion."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ESAT_MODULE_POOLS;
}

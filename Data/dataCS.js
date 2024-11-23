export const DataCS = [
    {
        "question": "Quelle méthode d'intégration numérique utilise des segments linéaires pour approximer une intégrale ?",
        "answers": [
            ["Méthode des trapèzes", true],
            ["Méthode de Simpson", false],
            ["Quadrature gaussienne", false],
            ["Interpolation lagrangienne", false]
        ]
    },
    {
        "question": "Quelle méthode est connue pour résoudre les équations différentielles avec une précision d'ordre 4 ?",
        "answers": [
            ["Méthode d'Euler", false],
            ["Méthode de Runge-Kutta (RK4)", true],
            ["Différences finies", false],
            ["Quadrature gaussienne", false]
        ]
    },
    {
        "question": "Dans la méthode de Simpson, quel type d’interpolation est utilisé ?",
        "answers": [
            ["Interpolation linéaire", false],
            ["Interpolation cubique", false],
            ["Interpolation quadratique", true],
            ["Interpolation trigonométrique", false]
        ]
    },
    {
        "question": "Quelle méthode numérique est la plus simple pour résoudre une EDO d'ordre 1 ?",
        "answers": [
            ["Méthode de Newton-Raphson", false],
            ["Méthode de Gauss-Seidel", false],
            ["Méthode d'Euler", true],
            ["Méthode des trapèzes", false]
        ]
    },
    {
        "question": "Quelle méthode est utilisée pour approximer les solutions des équations différentielles aux dérivées partielles (EDP) ?",
        "answers": [
            ["Méthode des moindres carrés", false],
            ["Quadrature gaussienne", false],
            ["Différences finies", true],
            ["Interpolation de Newton", false]
        ]
    },
    {
        "question": "Quelle est la principale limitation de la méthode d'Euler pour résoudre une EDO ?",
        "answers": [
            ["Elle est moins précise pour des pas de temps importants", true],
            ["Elle ne peut pas être utilisée pour des EDO linéaires", false],
            ["Elle est trop complexe à implémenter", false],
            ["Elle ne fonctionne pas avec des conditions initiales", false]
        ]
    },
    {
        "question": "La quadrature gaussienne est particulièrement efficace pour :",
        "answers": [
            ["Des fonctions discontinues", false],
            ["Des fonctions périodiques", false],
            ["Des fonctions polynomiales", true],
            ["Des intégrales définies impropres", false]
        ]
    },
    {
        "question": "La méthode des différences finies repose sur quelle approximation fondamentale ?",
        "answers": [
            ["La dérivée comme un taux de variation entre deux points", true],
            ["L'intégrale comme une somme discrète", false],
            ["La fonction comme une série de Fourier", false],
            ["La fonction comme une spline cubique", false]
        ]
    },
    {
        "question": "Pour intégrer une fonction oscillante rapidement convergente, quelle méthode est souvent recommandée ?",
        "answers": [
            ["Méthode de Simpson", false],
            ["Méthode d'Euler", false],
            ["Quadrature gaussienne", true],
            ["Méthode des trapèzes", false]
        ]
    },
    {
        "question": "Quelle méthode peut résoudre des équations différentielles avec conditions initiales et limites ?",
        "answers": [
            ["Méthode d'Euler explicite", false],
            ["Quadrature adaptative", false],
            ["Différences finies", true],
            ["Interpolation cubique", false]
        ]
    },
    {
        "question": "Quelle méthode numérique utilise une approche itérative pour résoudre des équations non linéaires ?",
        "answers": [
            ["Méthode de Simpson", false],
            ["Quadrature gaussienne", false],
            ["Méthode de Newton-Raphson", true],
            ["Méthode de Runge-Kutta", false]
        ]
    },
    {
        "question": "Dans les différences finies, que représente la 'différence avant' pour une fonction f(x) ?",
        "answers": [
            ["f(x) - f(x-h)", false],
            ["f(x+h) - f(x)", true],
            ["(f(x+h) - f(x-h))/2", false],
            ["f'(x)", false]
        ]
    },
    {
        "question": "Quel est l'objectif principal de la méthode adaptative dans l'intégration numérique ?",
        "answers": [
            ["Raffiner le maillage là où l'erreur est élevée", true],
            ["Calculer l'intégrale uniquement pour des polynômes", false],
            ["Augmenter la vitesse de convergence pour les fonctions périodiques", false],
            ["Réduire le besoin de conditions initiales", false]
        ]
    },
    {
        "question": "Quel est le principal avantage de la méthode de Runge-Kutta par rapport à la méthode d'Euler ?",
        "answers": [
            ["Un calcul plus rapide", false],
            ["Moins de mémoire utilisée", false],
            ["Une meilleure précision pour des pas de temps équivalents", true],
            ["Simplicité d'implémentation", false]
        ]
    },
    {
        "question": "Quelle méthode est souvent utilisée pour résoudre des EDP impliquant la chaleur ou la diffusion ?",
        "answers": [
            ["Quadrature gaussienne", false],
            ["Méthode des différences finies", true],
            ["Interpolation de Lagrange", false],
            ["Méthode d'Euler explicite", false]
        ]
    },
    {
        "question": "Lorsque la quadrature gaussienne est utilisée, que représentent les points de Gauss ?",
        "answers": [
            ["Les points où la fonction est évaluée pour maximiser la précision", true],
            ["Les zéros d'un polynôme linéaire", false],
            ["Les extrémités de l'intervalle d'intégration", false],
            ["Des points équidistants sur l'intervalle", false]
        ]
    },
    {
        "question": "Dans une intégrale numérique, comment la règle de Boole améliore-t-elle la précision ?",
        "answers": [
            ["Elle réduit l'intervalle d'intégration", false],
            ["Elle applique un ajustement logarithmique", false],
            ["Elle utilise un polynôme d'ordre 4 pour approximer la fonction", true],
            ["Elle utilise une interpolation linéaire", false]
        ]
    },
    {
        "question": "La méthode Crank-Nicolson est connue pour résoudre :",
        "answers": [
            ["Des équations algébriques", false],
            ["Des intégrales impropres", false],
            ["Des EDO avec conditions initiales", false],
            ["Des EDP par une méthode implicite", true]
        ]
    },
    {
        "question": "Quelle est la complexité de calcul principale de la méthode d'Euler explicite pour résoudre des EDO ?",
        "answers": [
            ["Incapacité à résoudre des systèmes non linéaires", false],
            ["Instabilité pour de grands pas de temps", true],
            ["Nécessité d'interpolations complexes", false],
            ["Dépendance à des conditions aux limites", false]
        ]
    },
    {
        "question": "Pourquoi les splines cubiques sont-elles souvent utilisées dans les méthodes numériques ?",
        "answers": [
            ["Elles sont plus rapides que les interpolations linéaires", false],
            ["Elles nécessitent moins de points d'interpolation", false],
            ["Elles garantissent une interpolation lisse avec des dérivées continues", true],
            ["Elles fonctionnent uniquement pour les polynômes", false]
        ]
    },
    {
        "question": "Quelle méthode numérique est utilisée pour résoudre des systèmes linéaires dans les équations différentielles aux dérivées partielles (EDP) ?",
        "answers": [
            ["Méthode de Runge-Kutta", false],
            ["Méthode de Gauss-Seidel", false],
            ["Méthode des éléments finis", true],
            ["Méthode de Newton-Raphson", false]
        ]
    },
    {
        "question": "Dans la méthode des différences finies, quel est le rôle des 'points de grille' ?",
        "answers": [
            ["Ajuster la méthode de quadrature", false],
            ["Calculer les dérivées par interpolation", false],
            ["Représenter les valeurs discrètes de la fonction", true],
            ["Appliquer des conditions aux limites", false]
        ]
    },
    {
        "question": "Dans l'intégration numérique, que signifie une 'intégrale impropre' ?",
        "answers": [
            ["Une intégrale avec un intervalle très petit", false],
            ["Une intégrale où la fonction est polynomiale", false],
            ["Une intégrale calculée par une méthode de quadrature adaptative", false],
            ["Une intégrale avec une borne infinie ou une fonction non bornée", true]
        ]
    },
    {
        "question": "Quel est l'objectif principal de la méthode de Runge-Kutta d'ordre 4 ?",
        "answers": [
            ["Réduire le nombre de calculs", false],
            ["Assurer la convergence des solutions", false],
            ["Améliorer la précision de la solution des EDO", true],
            ["Optimiser l'utilisation de la mémoire", false]
        ]
    },
    {
        "question": "Quel est l'avantage principal de la méthode de Crank-Nicolson par rapport à la méthode explicite de différences finies ?",
        "answers": [
            ["Elle est plus rapide pour des systèmes linéaires", false],
            ["Elle est plus stable pour des pas de temps plus grands", true],
            ["Elle réduit les erreurs d'approximation", false],
            ["Elle est plus simple à implémenter", false]
        ]
    },
    {
        "question": "Pour une méthode de quadrature adaptative, quel facteur influence le raffinement de la grille ?",
        "answers": [
            ["Le type de fonction", false],
            ["L'erreur locale estimée", true],
            ["Le nombre d'itérations nécessaires", false],
            ["La forme de l'intervalle", false]
        ]
    },
    {
        "question": "La méthode de Galerkin est utilisée principalement dans quel domaine ?",
        "answers": [
            ["L'intégration de fonctions complexes", false],
            ["L'approximation des systèmes linéaires", false],
            ["La minimisation des erreurs d'approximation", false],
            ["La résolution des équations aux dérivées partielles", true]
        ]
    },
    {
        "question": "Quel est le principal avantage de la méthode des moindres carrés dans le calcul scientifique ?",
        "answers": [
            ["Elle permet de minimiser l'erreur entre les données expérimentales et les modèles théoriques", true],
            ["Elle résout directement les équations différentielles", false],
            ["Elle fournit des solutions exactes", false],
            ["Elle est rapide pour les grands systèmes non linéaires", false]
        ]
    },
    {
        "question": "Quand on utilise la méthode de la règle de Simpson, quel est l'impact de la division de l'intervalle en un nombre pair de sous-intervalles ?",
        "answers": [
            ["Cela permet d'obtenir une meilleure approximation de l'intégrale", true],
            ["Cela réduit la complexité du calcul", false],
            ["Cela accélère la convergence de la méthode", false],
            ["Cela donne une solution exacte", false]
        ]
    },
    {
        "question": "La méthode de Monte Carlo est utilisée principalement pour :",
        "answers": [
            ["Approcher des solutions d'équations différentielles linéaires", false],
            ["Calculer les dérivées de fonctions", false],
            ["Résoudre des intégrales complexes et des problèmes d'optimisation", true],
            ["Effectuer des interpolations polynomiales", false]
        ]
    },
    {
        "question": "Quelle est la formule de l'approximation de l'intégrale par la méthode des trapèzes ?",
        "answers": [
            ["(b - a) * (f(a) + f(b))", false],
            ["(b - a) / 2 * (f(a) - f(b))", false],
            ["(b - a) / 2 * (f(a) + f(b))", true],
            ["(b - a) * (f(a) - f(b))", false]
        ]
    },
    {
        "question": "La méthode de Runge-Kutta d'ordre 4 (RK4) utilise les valeurs suivantes pour calculer une approximation de la solution. Quelle est la formule générale pour k1 ?",
        "answers": [
            ["k1 = h * f(xn+1, yn+1)", false],
            ["k1 = h * f(xn, yn)", true],
            ["k1 = h * f(xn-1, yn-1)", false],
            ["k1 = h * f(xn, yn) / 2", false]
        ]
    },
    {
        "question": "Quel est l'élément de la formule de Simpson utilisé pour l'intégration numérique ?",
        "answers": [
            ["(b - a) / 6 * (f(a) + 4 * f((a + b) / 2) + f(b))", true],
            ["(b - a) / 2 * (f(a) + f(b))", false],
            ["(b - a) / 4 * (f(a) + 3 * f((a + b) / 2) + f(b))", false],
            ["(b - a) / 3 * (f(a) + f(b))", false]
        ]
    },
    {
        "question": "Dans la méthode de Newton-Raphson, quelle est la formule utilisée pour calculer la prochaine approximation ?",
        "answers": [
            ["x_{n+1} = x_n + f(x_n) / f'(x_n)", false],
            ["x_{n+1} = x_n - f'(x_n) / f(x_n)", false],
            ["x_{n+1} = x_n + f'(x_n) / f(x_n)", false],
            ["x_{n+1} = x_n - f(x_n) / f'(x_n)", true],
        ]
    },
    {
        "question": "Dans l'intégration par la règle de Simpson, quel est le rôle de f(a), f(b) et f((a+b)/2) ?",
        "answers": [
            ["Les dérivées de la fonction aux points de l'intervalle", false],
            ["Les approximations des intégrales", false],
            ["Les erreurs d'approximation aux points extrêmes", false],
            ["Les valeurs de la fonction aux points de l'intervalle et au point médian", true]
        ]
    },
    {
        "question": "Quel est le calcul pour déterminer l'erreur dans la méthode des trapèzes, selon la formule d'erreur ?",
        "answers": [
            ["E = -((b - a)^2 / 6) * f'(ξ)", false],
            ["E = -((b - a)^3 / 12) * f''(ξ)", true],
            ["E = ((b - a)^4 / 24) * f'''(ξ)", false],
            ["E = ((b - a)^2 / 4) * f'(ξ)", false]
        ]
    },
    {
        "question": "La formule d'Euler pour résoudre une équation différentielle du premier ordre est :",
        "answers": [
            ["y_{n+1} = y_n - h * f(x_n, y_n)", false],
            ["y_{n+1} = y_n + h * f(x_n, y_n)", true],
            ["y_{n+1} = y_n + h / 2 * (f(x_n, y_n) + f(x_n+1, y_n+1))", false],
            ["y_{n+1} = y_n * f(x_n, y_n)", false]
        ]
    },
    {
        "question": "Dans le calcul numérique des dérivées par la méthode des différences finies, quelle est la formule pour la dérivée première ?",
        "answers": [
            ["(f(x) - f(x-h)) / h", false],
            ["(f(x+h) + f(x-h)) / 2h", false],
            ["(f(x+h) - f(x)) / h", true],
            ["(f(x+h) - f(x-h)) / 2h", false]
        ]
    },
    {
        "question": "Quel est l'avantage principal de la méthode des éléments finis pour résoudre les équations aux dérivées partielles ?",
        "answers": [
            ["Elle ne nécessite pas de maillage", false],
            ["Elle permet de traiter des géométries complexes", true],
            ["Elle est plus rapide que les méthodes d'intégration", false],
            ["Elle ne fonctionne qu'avec des systèmes linéaires", false]
        ]
    },
    {
        "question": "Quelle est la formule de l'intégration par la méthode de Gauss-Legendre pour l'intégrale d'une fonction f(x) ?",
        "answers": [
            ["∫_{a}^{b} f(x) dx", false],
            ["∫_{-∞}^{∞} f(x) dx", false],
            ["∫_{-1}^{1} f(x) w(x) dx", true],
            ["∫_{0}^{1} f(x) dx", false]
        ]
    },
    {
        "question": "Quelle est la formule utilisée pour l'approximation de l'intégrale par la méthode de la règle des rectangles ?",
        "answers": [
            ["I ≈ (b - a) * f((a + b) / 2)", true],
            ["I ≈ (b - a) * (f(a) + f(b))", false],
            ["I ≈ (b - a) * f(a)", false],
            ["I ≈ (b - a) * f(b)", false]
        ]
    },
    {
        "question": "Dans la méthode d'Euler explicite, quelle est la formule pour obtenir la solution au pas de temps suivant ?",
        "answers": [
            ["y_{n+1} = y_n - h * f(x_n, y_n)", false],
            ["y_{n+1} = y_n + h * f(x_{n+1}, y_{n+1})", false],
            ["y_{n+1} = y_n + h * (f(x_n, y_n) + f(x_{n+1}, y_{n+1}))", false],
            ["y_{n+1} = y_n + h * f(x_n, y_n)", true]
        ]
    },
    {
        "question": "Quel est le principe de la méthode de Gauss-Seidel dans la résolution des systèmes linéaires ?",
        "answers": [
            ["Les solutions sont itérées en utilisant les anciennes valeurs pour chaque variable", false],
            ["Les solutions sont itérées en utilisant les valeurs les plus récentes pour chaque variable", true],
            ["Les solutions sont calculées directement sans itérations", false],
            ["Les variables sont résolues simultanément", false]
        ]
    },
    {
        "question": "Dans la méthode des différences finies pour résoudre des équations aux dérivées partielles, quelle est la formule pour approcher la dérivée seconde ?",
        "answers": [
            ["(f(x+h) - f(x-h)) / 2h", false],
            ["(f(x+h) - 2f(x) + f(x-h)) / h^2", true],
            ["(f(x+h) - f(x)) / h", false],
            ["(f(x) - f(x-h)) / h", false]
        ]
    },
    {
        "question": "Quel est l'avantage principal de l'utilisation des splines cubiques pour l'interpolation ?",
        "answers": [
            ["Elles sont plus simples à calculer que les interpolations polynomiales classiques", false],
            ["Elles minimisent l'erreur d'approximation", false],
            ["Elles assurent une continuité dans les dérivées jusqu'à la troisième ordre", true],
            ["Elles fonctionnent seulement pour des données uniformément espacées", false]
        ]
    },
    {
        "question": "Dans le calcul de l'intégrale d'une fonction f(x) par la méthode de Simpson, quelle est la formule générale utilisée ?",
        "answers": [
            ["(b - a) / 6 * (f(a) + 4 * f((a + b) / 2) + f(b))", true],
            ["(b - a) / 2 * (f(a) + f(b))", false],
            ["(b - a) / 4 * (f(a) + 3 * f((a + b) / 2) + f(b))", false],
            ["(b - a) * (f(a) + f(b))", false]
        ]
    },
    {
        "question": "Dans la méthode de la descente de gradient, quelle est la formule pour mettre à jour la variable x ?",
        "answers": [
            ["x_{n+1} = x_n - α * ∇f(x_n)", true],
            ["x_{n+1} = x_n + α * ∇f(x_n)", false],
            ["x_{n+1} = x_n - α * f(x_n)", false],
            ["x_{n+1} = x_n + α * f(x_n)", false]
        ]
    },
    {
        "question": "Quel est l'objectif principal de la méthode de la quadrature de Gauss-Legendre ?",
        "answers": [
            ["Calculer des intégrales avec une meilleure précision en réduisant le nombre de points d'évaluation", true],
            ["Minimiser l'erreur d'approximation pour les dérivées", false],
            ["Calculer des solutions d'équations différentielles", false],
            ["Optimiser la résolution des systèmes linéaires", false]
        ]
    },
    {
        "question": "Quelle formule permet de calculer l'erreur d'approximation dans la méthode de Simpson ?",
        "answers": [
            ["E = -((b - a)^4 / 24) * f''''(ξ)", false],
            ["E = -((b - a)^5 / 180) * f''''(ξ)", true],
            ["E = ((b - a)^3 / 6) * f'''(ξ)", false],
            ["E = ((b - a)^2 / 12) * f''(ξ)", false]
        ]
    },
    {
        "question": "Dans la méthode de Newton-Raphson, quel est l'avantage principal pour résoudre une équation non linéaire ?",
        "answers": [
            ["Elle ne nécessite aucune information sur la dérivée de la fonction", false],
            ["Elle converge rapidement si la fonction est bien conditionnée", true],
            ["Elle fonctionne uniquement pour les équations différentielles", false],
            ["Elle garantit une solution exacte", false]
        ]
    }
]

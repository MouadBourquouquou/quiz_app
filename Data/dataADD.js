export const DataADD = [
    {
        "question": "Quelle est la formule de la variance d'une variable X ?",
        "answers": [
            ["Var(X) = Σ(x_i - μ)", false],
            ["Var(X) = 1/N * Σ(x_i - μ)^2", true],
            ["Var(X) = Σ(x_i * μ)", false],
            ["Var(X) = Σ(x_i)^2", false]
        ]
    },
    {
        "question": "L'écart-type est la racine carrée de quelle statistique ?",
        "answers": [
            ["La variance", true],
            ["La covariance", false],
            ["La moyenne", false],
            ["La médiane", false]
        ]
    },
    {
        "question": "Si la covariance entre deux variables X et Y est positive, que signifie-t-il ?",
        "answers": [
            ["Les variables sont indépendantes", false],
            ["Les variables varient dans des directions opposées", false],
            ["Les variables n'ont aucune relation", false],
            ["Les variables varient dans le même sens", true]
        ]
    },
    {
        "question": "Qu'est-ce que le centrage des données ?",
        "answers": [
            ["Diviser chaque valeur par la moyenne", false],
            ["Soustraire la moyenne de chaque valeur pour que la moyenne des données soit égale à zéro", true],
            ["Soustraire l'écart-type de chaque valeur", false],
            ["Diviser chaque valeur par l'écart-type", false]
        ]
    },
    {
        "question": "Quelle est la principale raison de centrer et de réduire les données avant d'appliquer l'ACP ?",
        "answers": [
            ["Cela améliore la précision des prédictions", false],
            ["Les données doivent être sur la même échelle pour éviter que les variables de grande échelle dominent l'analyse", true],
            ["Cela rend les variables qualitatives plus comparables", false],
            ["Cela simplifie l'analyse des données", false]
        ]
    },
    {
        "question": "Quelle est la formule de l'écart-type pour une population ?",
        "answers": [
            ["σ = √(Σ(x_i - μ))", false],
            ["σ = Σ(x_i - μ)", false],
            ["σ = √(Σ(x_i)^2)", false],
            ["σ = √(1/N * Σ(x_i - μ)^2)", true]
        ]
    },
    {
        "question": "Dans la matrice de covariance, qu'est-ce que l'élément (i, j) représente ?",
        "answers": [
            ["La covariance entre les variables i et j", true],
            ["La variance de la variable i", false],
            ["La moyenne de la variable i", false],
            ["La corrélation entre les variables i et j", false]
        ]
    },
    {
        "question": "Dans le centrage et la réduction des données, quelle étape suit directement le centrage ?",
        "answers": [
            ["La réduction, qui consiste à diviser par l'écart-type", true],
            ["La multiplication par la moyenne", false],
            ["L'ajout d'une constante", false],
            ["La normalisation, qui consiste à multiplier par un facteur", false]
        ]
    },
    {
        "question": "Qu'est-ce que l'Analyse en Composantes Principales (ACP) cherche à accomplir ?",
        "answers": [
            ["Calculer la covariance entre les variables", false],
            ["Optimiser les données qualitatives", false],
            ["Réduire la dimensionnalité des données tout en préservant la variance maximale", true],
            ["Trouver une solution unique à un système d'équations", false]
        ]
    },
    {
        "question": "Quel est le rôle de la matrice de corrélation dans l'ACP ?",
        "answers": [
            ["Elle calcule la variance des données", false],
            ["Elle détermine la direction des composantes principales", false],
            ["Elle est utilisée pour normaliser les variables avant d'appliquer l'ACP", true],
            ["Elle est utilisée pour sélectionner les variables les plus importantes", false]
        ]
    },
    {
        "question": "Quelle est la principale différence entre la variance et l'écart-type ?",
        "answers": [
            ["L'écart-type est la racine carrée de la variance", true],
            ["L'écart-type mesure la dispersion dans les mêmes unités que les données, tandis que la variance ne le fait pas", true],
            ["La variance est plus utilisée que l'écart-type", false],
            ["L'écart-type est toujours plus grand que la variance", false]
        ]
    },
    {
        "question": "Qu'est-ce qu'une matrice de covariance symétrique signifie dans le contexte de l'analyse multivariée ?",
        "answers": [
            ["Les variables ne sont pas corrélées", false],
            ["Les covariances sont égales", false],
            ["Les variables sont corrélées de manière symétrique", true],
            ["Les variances des variables sont identiques", false]
        ]
    },
    {
        "question": "En ACP, que représente la première composante principale (CP1) ?",
        "answers": [
            ["La moyenne des données", false],
            ["La direction de la plus grande variance des données", true],
            ["La direction de la plus petite variance des données", false],
            ["Une combinaison des moyennes des données", false]
        ]
    },
    {
        "question": "Qu'est-ce que la **normalisation** des données signifie avant de les utiliser dans l'ACP ?",
        "answers": [
            ["Réduire le nombre de données", false],
            ["Rendre les données comparables en les mettant sur la même échelle", true],
            ["Calculer la moyenne des données", false],
            ["Rendre les données moins dispersées", false]
        ]
    },
    {
        "question": "Dans le cadre de l'ACP, pourquoi est-il important de centrer les données ?",
        "answers": [
            ["Pour maximiser la variance", false],
            ["Pour que les variables soient indépendantes", false],
            ["Pour éliminer les variables redondantes", false],
            ["Pour que la moyenne des variables soit égale à zéro, ce qui facilite l'interprétation", true]
        ]
    },
    {
        "question": "La matrice de corrélation est souvent utilisée en ACP pour :",
        "answers": [
            ["Calculer les valeurs propres", false],
            ["Déterminer les composantes principales", false],
            ["Ajuster les données à une distribution normale", false],
            ["Mettre les variables sur une échelle comparable", true]
        ]
    },
    {
        "question": "Quelle est la relation entre la covariance et la corrélation ?",
        "answers": [
            ["La corrélation est la covariance normalisée", true],
            ["La covariance est la corrélation normalisée", false],
            ["La corrélation et la covariance sont indépendantes", false],
            ["La corrélation est l'inverse de la covariance", false]
        ]
    },
    {
        "question": "Dans l'ACP, quel est le but de la réduction de dimension ?",
        "answers": [
            ["Réduire le nombre de variables tout en préservant autant d'information que possible", true],
            ["Augmenter le nombre de variables pour capturer plus d'informations", false],
            ["Transformer les données en une forme plus complexe", false],
            ["Rendre les données plus faciles à visualiser", false]
        ]
    },
    {
        "question": "Lorsque vous calculez l'ACP, que signifie une **valeur propre élevée** ?",
        "answers": [
            ["Elle signifie que la composante principale est moins significative", false],
            ["Elle signifie que la variable est moins importante", false],
            ["Elle indique que la composante principale représente une grande quantité de variance", true],
            ["Elle indique que les données sont très dispersées", false]
        ]
    },
    {
        "question": "Lors de la réduction des données, que fait-on avec les **composantes principales** avec des valeurs propres faibles ?",
        "answers": [
            ["Elles sont conservées, car elles expliquent une grande partie de la variance", false],
            ["Elles sont transformées pour devenir plus significatives", false],
            ["Elles sont généralement éliminées, car elles expliquent peu de variance", true],
            ["Elles sont utilisées pour augmenter la dimension des données", false]
        ]
    },
    {
        "question": "Quelle est la formule de la covariance entre deux variables X et Y ?",
        "answers": [
            ["Cov(X, Y) = Σ(x_i + y_i)", false],
            ["Cov(X, Y) = Σ(x_i * y_i)", false],
            ["Cov(X, Y) = (1/N) * Σ(x_i - μ_X)(y_i - μ_Y)", true],
            ["Cov(X, Y) = (1/N) * Σ(x_i * y_i)", false]
        ]
    },
    {
        "question": "Quel est l'objectif de l'ACP lorsqu'on parle de la maximisation de la variance ?",
        "answers": [
            ["L'ACP cherche à réduire la variance pour simplifier l'analyse", false],
            ["L'ACP cherche à minimiser la variance totale", false],
            ["L'ACP cherche à rendre la variance nulle", false],
            ["L'ACP cherche à maximiser la variance expliquée par les composantes principales", true]
        ]
    },
    {
        "question": "La formule de l'écart-type pour un échantillon est :",
        "answers": [
            ["σ = √(1/N * Σ(x_i - μ)^2)", false],
            ["σ = √(1/(N-1) * Σ(x_i - μ)^2)", true],
            ["σ = Σ(x_i - μ)", false],
            ["σ = Σ(x_i^2)", false]
        ]
    },
    {
        "question": "Quelle formule utilise-t-on pour normaliser les données (réduction) ?",
        "answers": [
            ["x' = x_i / μ", false],
            ["x' = x_i - μ", false],
            ["x' = (x_i - μ) / σ", true],
            ["x' = x_i * σ", false]
        ]
    },
    {
        "question": "Qu'est-ce qu'une composante principale dans le cadre de l'ACP ?",
        "answers": [
            ["Un vecteur aléatoire qui représente les données", false],
            ["Un calcul de la moyenne des données", false],
            ["Une direction qui maximise la variance des données", true],
            ["Une projection des données dans un espace de plus grande dimension", false]
        ]
    },
    {
        "question": "Quelle est la formule de la matrice de covariance d'un ensemble de variables X1, X2, ..., Xp ?",
        "answers": [
            ["Σ = 1/(N-1) * (X - μ)(X - μ)^T", true],
            ["Σ = 1/N * (X - μ)(X - μ)^T", false],
            ["Σ = X^T * X", false],
            ["Σ = 1/N * X * μ", false]
        ]
    },
    {
        "question": "Dans l'ACP, que représente la somme des valeurs propres ?",
        "answers": [
            ["Le nombre de variables utilisées", false],
            ["La variance totale expliquée par toutes les composantes principales", true],
            ["La somme des covariances entre toutes les variables", false],
            ["La variance totale des données sans réduction", false]
        ]
    },
    {
        "question": "Quel est l'objectif principal du centrage des données ?",
        "answers": [
            ["Déplacer les données pour que leur moyenne soit égale à zéro", true],
            ["Réduire la dispersion des données", false],
            ["Augmenter la variance des données", false],
            ["Changer l'échelle des données", false]
        ]
    },
    {
        "question": "La formule de la corrélation entre deux variables X et Y est :",
        "answers": [
            ["ρ(X, Y) = Σ(x_i * y_i)", false],
            ["ρ(X, Y) = Cov(X, Y) / N", false],
            ["ρ(X, Y) = (x_i + y_i) / 2", false],
            ["ρ(X, Y) = Cov(X, Y) / (σ_X * σ_Y)", true]
        ]
    },
    {
        "question": "Pourquoi doit-on effectuer la réduction des données dans l'ACP ?",
        "answers": [
            ["Pour ajouter des informations supplémentaires", false],
            ["Pour rendre les variables indépendantes", false],
            ["Pour s'assurer que les variables sont sur une échelle comparable", true],
            ["Pour obtenir des résultats moins dispersés", false]
        ]
    },
    {
        "question": "Quelle est la formule pour calculer la variance d'un échantillon ?",
        "answers": [
            ["Var(X) = 1/N * Σ(x_i - μ)^2", false],
            ["Var(X) = 1/(N-1) * Σ(x_i - μ)^2", true],
            ["Var(X) = Σ(x_i - μ)", false],
            ["Var(X) = Σ(x_i^2)", false]
        ]
    },
    {
        "question": "Dans l'ACP, pourquoi les données sont-elles souvent centrées et réduites ?",
        "answers": [
            ["Pour augmenter la dispersion des données", false],
            ["Pour s'assurer que chaque variable a une moyenne de zéro et une variance de un, facilitant la comparaison", true],
            ["Pour rendre les données plus complexes", false],
            ["Pour éliminer les variables redondantes", false]
        ]
    },
    {
        "question": "Que représente la matrice de covariance d'une paire de variables X et Y ?",
        "answers": [
            ["La relation linéaire entre X et Y", true],
            ["La dispersion totale des données", false],
            ["Les valeurs propres des données", false],
            ["La normalisation des données", false]
        ]
    },
    {
        "question": "Qu'est-ce que la **correlation** entre deux variables ?",
        "answers": [
            ["Mesure la force et la direction de la relation linéaire entre deux variables", true],
            ["Mesure l'indépendance des variables", false],
            ["Indique la variance entre les variables", false],
            ["Est égale à la covariance divisée par la somme des variances", false]
        ]
    },
    {
        "question": "Quelle est la formule de la **moyenne** d'un échantillon de données ?",
        "answers": [
            ["μ = Σ(x_i^2) / N", false],
            ["μ = Σ(x_i - μ) / N", false],
            ["μ = Σ(x_i) * N", false],
            ["μ = Σ(x_i) / N", true]
        ]
    },
    {
        "question": "Dans l'ACP, comment est calculée une **composante principale** (CP) ?",
        "answers": [
            ["Elle est obtenue par l'addition de toutes les variables", false],
            ["Elle est obtenue par la transformation de la moyenne des données", false],
            ["Elle est obtenue en projetant les données sur les vecteurs propres associés aux valeurs propres les plus élevées", true],
            ["Elle est obtenue en divisant la covariance par la variance", false]
        ]
    },
    {
        "question": "Dans l'analyse de données, que fait une **régression linéaire** ?",
        "answers": [
            ["Elle analyse les données sans déterminer de relation", false],
            ["Elle modélise la relation linéaire entre une variable dépendante et une ou plusieurs variables indépendantes", true],
            ["Elle cherche à réduire les dimensions des données", false],
            ["Elle mesure la dispersion des données", false]
        ]
    },
    {
        "question": "Comment calcule-t-on l'**écart-type** dans le cadre d'un échantillon ?",
        "answers": [
            ["σ = Σ(x_i - μ)", false],
            ["σ = Σ(x_i^2)", false],
            ["σ = Σ(x_i) / N", false],
            ["σ = √(1/(N-1) * Σ(x_i - μ)^2)", true]
        ]
    },
    {
        "question": "Qu'est-ce qu'une **valeur propre** dans l'ACP ?",
        "answers": [
            ["Elle est utilisée pour calculer la moyenne des données", false],
            ["Elle représente la quantité de variance expliquée par chaque composante principale", true],
            ["Elle mesure la dispersion autour de la moyenne", false],
            ["Elle est équivalente à la covariance", false]
        ]
    },
    {
        "question": "Quelle est la formule de la **moyenne centrée** ?",
        "answers": [
            ["Moyenne centrée = Σ(x_i - μ) / N", false],
            ["Moyenne centrée = x_i - μ", true],
            ["Moyenne centrée = Σ(x_i) / N", false],
            ["Moyenne centrée = μ - x_i", false]
        ]
    },
    {
        "question": "Quelle est la formule pour calculer la **covariance** entre deux variables X et Y ?",
        "answers": [
            ["Cov(X, Y) = Σ((x_i + μ_X) * (y_i + μ_Y))", false],
            ["Cov(X, Y) = (1/N) * Σ((x_i * y_i))", false],
            ["Cov(X, Y) = (1/(N-1)) * Σ((x_i - μ_X) * (y_i - μ_Y))", true],
            ["Cov(X, Y) = Σ(x_i * y_i)", false]
        ]
    },
    {
        "question": "Quelle formule représente l'**écart-type** d'un échantillon ?",
        "answers": [
            ["σ = Σ(x_i - μ)^2", false],
            ["σ = 1/N * Σ(x_i - μ)^2", false],
            ["σ = Σ(x_i)^2 / N", false],
            ["σ = √(1/(N-1) * Σ(x_i - μ)^2)", true]
        ]
    },
    {
        "question": "Lors de l'**analyse en composantes principales (ACP)**, les **composantes principales** sont des vecteurs associés à quelles propriétés ?",
        "answers": [
            ["Les variances des variables", false],
            ["Les corrélations entre les variables", false],
            ["Les valeurs propres de la matrice de covariance", true],
            ["Les moyennes des données", false]
        ]
    },
    {
        "question": "Quelle est la formule de la **variance** d'une population ?",
        "answers": [
            ["Var(X) = Σ(x_i - μ)^2", false],
            ["Var(X) = 1/N * Σ(x_i - μ)^2", true],
            ["Var(X) = (1/(N-1)) * Σ(x_i - μ)^2", false],
            ["Var(X) = (Σ(x_i - μ))^2", false]
        ]
    },
    {
        "question": "Qu'est-ce que la **normalisation** des données en analyse de données ?",
        "answers": [
            ["La mise à l'échelle des données pour qu'elles aient une moyenne de zéro et une variance de un", true],
            ["La réduction de la dimension des données", false],
            ["La transformation des données en un format catégorique", false],
            ["La suppression des valeurs extrêmes dans les données", false]
        ]
    },
    {
        "question": "La formule pour calculer la **correlation de Pearson** entre deux variables X et Y est :",
        "answers": [
            ["ρ(X, Y) = Σ(x_i - μ_X)(y_i - μ_Y)", false],
            ["ρ(X, Y) = Σ(x_i * y_i)", false],
            ["ρ(X, Y) = Σ(x_i + y_i)", false],
            ["ρ(X, Y) = Cov(X, Y) / (σ_X * σ_Y)", true]
        ]
    },
    {
        "question": "Dans l'**ACP**, qu'est-ce que l'**analyse des valeurs propres** permet de déterminer ?",
        "answers": [
            ["Le nombre de dimensions à retenir pour l'analyse", false],
            ["La corrélation entre les variables", false],
            ["La quantité de variance expliquée par chaque composante principale", true],
            ["La moyenne des données", false]
        ]
    },
    {
        "question": "Quel est l'objectif de la **réduction de dimension** dans l'**ACP** ?",
        "answers": [
            ["Augmenter la complexité du modèle", false],
            ["Modifier l'échelle des variables", false],
            ["Simplifier les données tout en conservant la variance maximale", true],
            ["Ajouter des variables supplémentaires", false]
        ]
    },
    {
        "question": "La **matrice de covariance** entre deux variables X et Y peut être calculée par la formule :",
        "answers": [
            ["Cov(X, Y) = Σ(x_i * y_i) / N", false],
            ["Cov(X, Y) = Σ(x_i + y_i) / N", false],
            ["Cov(X, Y) = (x_i * y_i) / N", false],
            ["Cov(X, Y) = Σ((x_i - μ_X)(y_i - μ_Y)) / (N-1)", true]
        ]
    },
    {
        "question": "En **analyse de données**, que représente une **valeur propre** d'une matrice de covariance ?",
        "answers": [
            ["La moyenne des observations", false],
            ["La quantité de variance expliquée par une composante principale", true],
            ["La somme des valeurs des variables", false],
            ["Le produit des variances des variables", false]
        ]
    }
];
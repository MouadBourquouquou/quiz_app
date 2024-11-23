export const dataSql =[
    {
        "question": "Quelle commande est utilisée pour récupérer des données d'une table en MySQL ?",
        "answers": [
            ["INSERT", false],
            ["UPDATE", false],
            ["SELECT", true],
            ["DELETE", false]
        ]
    },
    {
        "question": "Comment ajouter une nouvelle ligne de données dans une table ?",
        "answers": [
            ["ADD ROW", false],
            ["INSERT INTO", true],
            ["CREATE", false],
            ["ALTER TABLE", false]
        ]
    },
    {
        "question": "Quelle commande permet de modifier les données existantes dans une table ?",
        "answers": [
            ["UPDATE", true],
            ["MODIFY", false],
            ["CHANGE", false],
            ["SET DATA", false]
        ]
    },
    {
        "question": "Quelle commande supprime complètement une table de la base de données ?",
        "answers": [
            ["DELETE TABLE", false],
            ["TRUNCATE TABLE", false],
            ["REMOVE TABLE", false],
            ["DROP TABLE", true]
        ]
    },
    {
        "question": "Comment supprimer toutes les lignes d'une table sans supprimer la table elle-même ?",
        "answers": [
            ["DELETE TABLE", false],
            ["TRUNCATE TABLE", true],
            ["CLEAR TABLE", false],
            ["RESET TABLE", false]
        ]
    },
    {
        "question": "Comment limiter le nombre de résultats retournés par une requête SELECT ?",
        "answers": [
            ["LIMIT", true],
            ["MAXROWS", false],
            ["ROWCOUNT", false],
            ["LIMITATION", false]
        ]
    },
    {
        "question": "Quelle clause est utilisée pour filtrer les résultats d'une requête SELECT ?",
        "answers": [
            ["FILTER", false],
            ["HAVING", false],
            ["WHERE", true],
            ["CONDITION", false]
        ]
    },
    {
        "question": "Comment créer une nouvelle base de données en MySQL ?",
        "answers": [
            ["CREATE DATABASE", true],
            ["NEW DATABASE", false],
            ["MAKE DATABASE", false],
            ["ADD DATABASE", false]
        ]
    },
    {
        "question": "Quelle commande est utilisée pour ajouter une nouvelle colonne à une table existante ?",
        "answers": [
            ["MODIFY TABLE", false],
            ["ADD COLUMN", false],
            ["INSERT COLUMN", false],
            ["ALTER TABLE", true]
        ]
    },
    {
        "question": "Comment récupérer des lignes uniques (sans doublons) dans une requête SELECT ?",
        "answers": [
            ["DISTINCT", true],
            ["UNIQUE", false],
            ["FILTER UNIQUE", false],
            ["REMOVE DUPLICATES", false]
        ]
    },
    {
        "question": "Comment combiner les données de deux tables en utilisant une condition où la clé étrangère de la première table est égale à la clé primaire de la seconde table ?",
        "answers": [
            ["Utiliser la clause WHERE pour comparer les clés", true],
            ["Utiliser un croisement entre les tables", false],
            ["Utiliser une agrégation pour relier les tables", false],
            ["Utiliser une opération UNION pour combiner les résultats", false]
        ]
    },
    {
        "question": "Comment récupérer les lignes où les données de deux tables correspondent, en comparant la clé étrangère de la première table avec la clé primaire de la seconde ?",
        "answers": [
            ["Utiliser une fonction spéciale", false],
            ["Utiliser la condition WHERE", true],
            ["Utiliser GROUP BY", false],
            ["Utiliser l'opération INTERSECT", false]
        ]
    },
    {
        "question": "Quelle clause permet de lier deux tables en se basant sur une relation entre une clé étrangère et une clé primaire ?",
        "answers": [
            ["GROUP BY", false],
            ["ORDER BY", false],
            ["WHERE", true],
            ["HAVING", false]
        ]
    },
    {
        "question": "Comment obtenir des résultats combinés de deux tables en se basant sur la correspondance entre une clé étrangère et une clé primaire ?",
        "answers": [
            ["Utiliser un filtre spécifique", false],
            ["Utiliser une fonction de regroupement", false],
            ["Utiliser la condition de comparaison dans WHERE", true],
            ["Utiliser une sous-requête", false]
        ]
    },
    {
        "question": "Dans une requête SQL, comment lier les données de deux tables en comparant les valeurs de la clé primaire d'une table avec la clé étrangère d'une autre ?",
        "answers": [
            ["Utiliser WHERE pour la condition de correspondance", true],
            ["Utiliser une sous-requête dans SELECT", false],
            ["Utiliser GROUP BY pour relier les données", false],
            ["Utiliser une fonction d'agrégation", false]
        ]
    },
    {
        "question": "Comment lier les données de deux tables en utilisant la condition où une clé étrangère de la première table correspond à la clé primaire de la seconde table ?",
        "answers": [
            ["Utiliser l'opération UNION", false],
            ["Utiliser GROUP BY", false],
            ["Utiliser la clause WHERE avec les clés", true],
            ["Utiliser une sous-requête", false]
        ]
    },
    {
        "question": "Comment récupérer les lignes où une colonne d'une table correspond à une valeur d'une colonne dans une autre table ?",
        "answers": [
            ["Utiliser HAVING", false],
            ["Utiliser ORDER BY", false],
            ["Utiliser WHERE pour comparer les valeurs", true],
            ["Utiliser une fonction d'agrégation", false]
        ]
    },
    {
        "question": "Quelle condition permet de relier les enregistrements de deux tables selon une clé étrangère et une clé primaire ?",
        "answers": [
            ["HAVING", false],
            ["GROUP BY", false],
            ["LIMIT", false],
            ["WHERE", true]
        ]
    },
    {
        "question": "Comment obtenir les lignes correspondantes de deux tables en se basant sur la relation de clés entre elles ?",
        "answers": [
            ["Utiliser une agrégation", false],
            ["Utiliser une sous-requête", false],
            ["Utiliser ORDER BY", false],
            ["Comparer les clés avec WHERE", true]
        ]
    },
    {
        "question": "Comment récupérer les données des deux tables où la clé étrangère d'une table correspond à la clé primaire de l'autre ?",
        "answers": [
            ["Utiliser la condition WHERE", true],
            ["Utiliser HAVING", false],
            ["Utiliser GROUP BY", false],
            ["Utiliser DISTINCT", false]
        ]
    },
    {
        "question": "Comment combiner les résultats de deux requêtes en récupérant uniquement les lignes de la première table et les lignes correspondantes de la seconde ?",
        "answers": [
            ["Utiliser GROUP BY", false],
            ["Utiliser WHERE pour comparer les clés", true],
            ["Utiliser UNION", false],
            ["Utiliser SELECT DISTINCT", false]
        ]
    },
    {
        "question": "Comment récupérer toutes les lignes de la première table et les lignes correspondantes de la seconde table ?",
        "answers": [
            ["Utiliser LIMIT", false],
            ["Utiliser ORDER BY", false],
            ["Utiliser WHERE pour comparer les clés", true],
            ["Utiliser GROUP BY", false]
        ]
    },
    {
        "question": "Comment récupérer toutes les lignes de la seconde table et les lignes correspondantes de la première table ?",
        "answers": [
            ["Utiliser WHERE pour comparer les clés", true],
            ["Utiliser GROUP BY", false],
            ["Utiliser DISTINCT", false],
            ["Utiliser UNION", false]
        ]
    },
    {
        "question": "Quelle clause permet de filtrer les résultats après avoir lié les données de deux tables ?",
        "answers": [
            ["WHERE", false],
            ["ORDER BY", false],
            ["GROUP BY", false],
            ["HAVING", true]
        ]
    },
    {
        "question": "Quelle fonction permet d'agréger les données d'une colonne numérique dans une table ?",
        "answers": [
            ["SUM()", true],
            ["COUNT()", false],
            ["AVG()", false],
            ["MAX()", false]
        ]
    },
    {
        "question": "Comment obtenir les lignes d'une table où les valeurs d'une colonne correspondent à celles d'une autre table ?",
        "answers": [
            ["Utiliser HAVING", false],
            ["Utiliser GROUP BY", false],
            ["Utiliser SELECT DISTINCT", false],
            ["Utiliser WHERE pour comparer les valeurs", true]
        ]
    },
    {
        "question": "Comment limiter le nombre de résultats retournés par une requête ?",
        "answers": [
            ["Utiliser ORDER BY", false],
            ["Utiliser GROUP BY", false],
            ["Utiliser HAVING", false],
            ["Utiliser LIMIT", true]
        ]
    },
    {
        "question": "Comment combiner les résultats de deux requêtes en récupérant les résultats distincts de chaque requête ?",
        "answers": [
            ["Utiliser GROUP BY", false],
            ["Utiliser WHERE", false],
            ["Utiliser JOIN", false],
            ["Utiliser UNION", true]
        ]
    },
    {
        "question": "Comment récupérer les lignes où une valeur d'une colonne est supérieure à une valeur dans une autre table ?",
        "answers": [
            ["Utiliser WHERE avec une condition de comparaison", true],
            ["Utiliser GROUP BY", false],
            ["Utiliser SELECT DISTINCT", false],
            ["Utiliser HAVING", false]
        ]
    },
    {
        "question": "Comment créer un index sur une colonne pour améliorer les performances des requêtes ?",
        "answers": [
            ["Utiliser CREATE INDEX", true],
            ["Utiliser ADD COLUMN", false],
            ["Utiliser CREATE TABLE", false],
            ["Utiliser ALTER TABLE", false]
        ]
    },
    {
        "question": "Comment récupérer toutes les lignes d'une table où une colonne spécifique est égale à une valeur donnée ?",
        "answers": [
            ["Utiliser HAVING", false],
            ["Utiliser WHERE", true],
            ["Utiliser GROUP BY", false],
            ["Utiliser ORDER BY", false]
        ]
    },
    {
        "question": "Comment filtrer les résultats en fonction d'une condition sur une colonne d'une table ?",
        "answers": [
            ["Utiliser ORDER BY", false],
            ["Utiliser GROUP BY", false],
            ["Utiliser LIMIT", false],
            ["Utiliser WHERE", true]
        ]
    },
    {
        "question": "Comment combiner les résultats de deux tables en excluant les doublons ?",
        "answers": [
            ["Utiliser GROUP BY", false],
            ["Utiliser WHERE", false],
            ["Utiliser UNION", true],
            ["Utiliser HAVING", false]
        ]
    },
    {
        "question": "Comment trier les résultats par ordre croissant d'une colonne spécifique ?",
        "answers": [
            ["Utiliser ORDER BY DESC", false],
            ["Utiliser GROUP BY", false],
            ["Utiliser HAVING", false],
            ["Utiliser ORDER BY ASC", true]
        ]
    },
    {
        "question": "Comment obtenir la somme des valeurs dans une colonne numérique d'une table ?",
        "answers": [
            ["Utiliser SUM()", true],
            ["Utiliser AVG()", false],
            ["Utiliser COUNT()", false],
            ["Utiliser MAX()", false]
        ]
    },
    {
        "question": "Comment récupérer les données les plus récentes d'une table en fonction d'une colonne de date ?",
        "answers": [
            ["Utiliser ORDER BY avec DESC", true],
            ["Utiliser GROUP BY", false],
            ["Utiliser WHERE", false],
            ["Utiliser LIMIT", false]
        ]
    },
    {
        "question": "Comment vérifier si une valeur existe dans une colonne d'une table ?",
        "answers": [
            ["Utiliser WHERE", false],
            ["Utiliser EXISTS", true],
            ["Utiliser IN", false],
            ["Utiliser SELECT DISTINCT", false]
        ]
    },
    {
        "question": "Comment limiter le nombre de résultats retournés par une requête ?",
        "answers": [
            ["Utiliser OFFSET", false],
            ["Utiliser GROUP BY", false],
            ["Utiliser LIMIT", true],
            ["Utiliser HAVING", false]
        ]
    },
    {
        "question": "Comment regrouper les données d'une table selon une colonne spécifique ?",
        "answers": [
            ["Utiliser HAVING", false],
            ["Utiliser ORDER BY", false],
            ["Utiliser WHERE", false],
            ["Utiliser GROUP BY", true]
        ]
    },
    {
        "question": "Comment sélectionner une valeur unique parmi les résultats d'une colonne ?",
        "answers": [
            ["Utiliser GROUP BY", false],
            ["Utiliser DISTINCT", true],
            ["Utiliser COUNT()", false],
            ["Utiliser SUM()", false]
        ]
    },
    {
        "question": "Comment modifier une valeur d'une colonne dans une table ?",
        "answers": [
            ["Utiliser UPDATE", true],
            ["Utiliser INSERT", false],
            ["Utiliser DELETE", false],
            ["Utiliser ALTER", false]
        ]
    },
    {
        "question": "Comment ajouter une nouvelle colonne à une table existante ?",
        "answers": [
            ["Utiliser CREATE TABLE", false],
            ["Utiliser DROP COLUMN", false],
            ["Utiliser ALTER TABLE ADD COLUMN", true],
            ["Utiliser INSERT INTO", false]
        ]
    },
    {
        "question": "Comment supprimer une ligne d'une table ?",
        "answers": [
            ["Utiliser REMOVE", false],
            ["Utiliser DROP", false],
            ["Utiliser TRUNCATE", false],
            ["Utiliser DELETE", true]
        ]
    },
    {
        "question": "Comment créer une nouvelle table dans une base de données ?",
        "answers": [
            ["Utiliser CREATE TABLE", true],
            ["Utiliser ALTER TABLE", false],
            ["Utiliser INSERT INTO", false],
            ["Utiliser UPDATE", false]
        ]
    },
    {
        "question": "Comment supprimer une colonne d'une table existante ?",
        "answers": [
            ["Utiliser DELETE COLUMN", false],
            ["Utiliser REMOVE COLUMN", false],
            ["Utiliser ALTER TABLE DROP COLUMN", true],
            ["Utiliser TRUNCATE", false]
        ]
    },
    {
        "question": "Comment rechercher une valeur spécifique dans une colonne ?",
        "answers": [
            ["Utiliser GROUP BY", false],
            ["Utiliser WHERE", true],
            ["Utiliser HAVING", false],
            ["Utiliser ORDER BY", false]
        ]
    },
    {
        "question": "Comment compter le nombre de lignes dans une table ?",
        "answers": [
            ["Utiliser COUNT()", true],
            ["Utiliser SUM()", false],
            ["Utiliser MAX()", false],
            ["Utiliser AVG()", false]
        ]
    },
    {
        "question": "Comment modifier la structure d'une table en ajoutant une contrainte unique à une colonne ?",
        "answers": [
            ["Utiliser CREATE INDEX", false],
            ["Utiliser INSERT INTO", false],
            ["Utiliser ALTER TABLE ADD CONSTRAINT", true],
            ["Utiliser UPDATE", false]
        ]
    },
    {
        "question": "Comment récupérer les valeurs moyennes d'une colonne numérique ?",
        "answers": [
            ["Utiliser COUNT()", false],
            ["Utiliser MAX()", false],
            ["Utiliser SUM()", false],
            ["Utiliser AVG()", true]
        ]
    },
    {
        "question": "Comment récupérer les valeurs les plus élevées d'une colonne numérique ?",
        "answers": [
            ["Utiliser MAX()", true],
            ["Utiliser MIN()", false],
            ["Utiliser AVG()", false],
            ["Utiliser SUM()", false]
        ]
    }
];

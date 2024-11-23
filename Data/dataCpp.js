export const dataCpp = [
    {
        "question": "Qu'est-ce que l'encapsulation en C++ ?",
        "answers": [
            ["Créer plusieurs objets d'une classe", false],
            ["Hériter des propriétés d'une autre classe", false],
            ["Cacher les détails internes d'un objet et exposer uniquement les fonctions nécessaires", true],
            ["Le processus de suppression des objets", false]
        ]
    },
    {
        "question": "Qu'est-ce que l'héritage en C++ ?",
        "answers": [
            ["Encapsuler des données au sein d'une classe", false],
            ["La capacité de dériver de nouvelles classes à partir de classes existantes", true],
            ["Définir les types de données dans une classe", false],
            ["Le processus d'élimination des variables inutilisées", false]
        ]
    },
    {
        "question": "Qu'est-ce que le polymorphisme en C++ ?",
        "answers": [
            ["Créer plusieurs copies du même objet", false],
            ["Le processus de conversion d'un type en un autre", false],
            ["Cacher les détails d'implémentation d'une classe", false],
            ["La capacité d'utiliser le même nom de fonction mais avec des implémentations différentes", true]
        ]
    },
    {
        "question": "Lequel des éléments suivants est utilisé pour créer un nouvel objet en C++ ?",
        "answers": [
            ["new", true],
            ["malloc", false],
            ["create", false],
            ["initialize", false]
        ]
    },
    {
        "question": "Qu'est-ce qu'un constructeur en C++ ?",
        "answers": [
            ["Une fonction qui détruit un objet", false],
            ["Une fonction spéciale utilisée pour initialiser un objet", true],
            ["Une fonction qui retourne une valeur", false],
            ["Un type de pointeur utilisé pour la création d'objets", false]
        ]
    },
    {
        "question": "Que réfère le pointeur 'this' en C++ ?",
        "answers": [
            ["Il réfère à l'objet courant", true],
            ["Il réfère à la classe de base", false],
            ["Il réfère à la fonction parente", false],
            ["Il réfère au dernier objet créé", false]
        ]
    },
    {
        "question": "Quel est le but du mot-clé 'virtual' en C++ ?",
        "answers": [
            ["Déclarer une classe abstraite", false],
            ["Définir une interface", false],
            ["Activer le polymorphisme dynamique (polymorphisme à l'exécution)", true],
            ["Indiquer une fonction statique", false]
        ]
    },
    {
        "question": "Qu'est-ce que l'abstraction en C++ ?",
        "answers": [
            ["Le processus de création de nouvelles classes à partir de classes existantes", false],
            ["La capacité de créer plusieurs objets d'une classe", false],
            ["Le processus de définir plusieurs méthodes avec le même nom", false],
            ["Cacher les détails d'implémentation complexes et exposer uniquement les parties nécessaires", true]
        ]
    },
    {
        "question": "Lequel des éléments suivants n'est PAS une caractéristique de la POO ?",
        "answers": [
            ["Programmation structurée", true],
            ["Encapsulation", false],
            ["Héritage", false],
            ["Polymorphisme", false]
        ]
    },
    {
        "question": "Quelle est la différence entre les modificateurs d'accès 'public', 'private' et 'protected' ?",
        "answers": [
            ["Ils spécifient le type de données des variables", false],
            ["Ils contrôlent la visibilité des membres de la classe", true],
            ["Ils définissent le type de retour des fonctions", false],
            ["Ils sont utilisés pour définir des constructeurs", false]
        ]
    },
    {
        "question": "Que fait le mot-clé 'delete' en C++ ?",
        "answers": [
            ["Supprime une variable définitivement", false],
            ["Supprime un élément d'un tableau", false],
            ["Désalloue la mémoire allouée avec 'new'", true],
            ["Supprime une classe entière", false]
        ]
    },
    {
        "question": "Quel est l'usage de l'opérateur 'new' en C++ ?",
        "answers": [
            ["Déclare une nouvelle classe", false],
            ["Alloue de la mémoire dynamiquement", true],
            ["Crée un nouveau thread", false],
            ["Assigne une valeur à une variable", false]
        ]
    },
    {
        "question": "Quel mot-clé est utilisé pour créer une classe abstraite en C++ ?",
        "answers": [
            ["static", false],
            ["override", false],
            ["final", false],
            ["virtual", true]
        ]
    },
    {
        "question": "Que fait 'namespace' en C++ ?",
        "answers": [
            ["Déclare une nouvelle classe", false],
            ["Empêche les conflits de noms dans les grands projets", true],
            ["Définit la fonction principale", false],
            ["Assigne une portée aux variables", false]
        ]
    },
    {
        "question": "Quel fichier d'en-tête est requis pour les opérations d'entrée/sortie en C++ ?",
        "answers": [
            ["iostream", true],
            ["stdio.h", false],
            ["fstream", false],
            ["conio.h", false]
        ]
    },
    {
        "question": "Quel est le but du mot-clé 'friend' en C++ ?",
        "answers": [
            ["Permet à une fonction d'accéder aux membres privés et protégés d'une autre classe", true],
            ["Crée une référence à une variable privée", false],
            ["Déclare une fonction statique", false],
            ["Définit une fonction virtuelle", false]
        ]
    },
    {
        "question": "Que fait le mot-clé 'typedef' en C++ ?",
        "answers": [
            ["Définit une fonction", false],
            ["Crée un alias pour un type de données", true],
            ["Déclare une constante", false],
            ["Spécifie le type de retour d'une fonction", false]
        ]
    },
    {
        "question": "Lequel des éléments suivants n'est PAS un type de données fondamental en C++ ?",
        "answers": [
            ["int", false],
            ["float", false],
            ["double", false],
            ["string", true]
        ]
    },
    {
        "question": "Que fait le mot-clé 'continue' en C++ ?",
        "answers": [
            ["Termine le programme", false],
            ["Quitte la boucle actuelle", false],
            ["Met en pause l'exécution d'une boucle", false],
            ["Saute le reste de l'itération de la boucle et continue avec l'itération suivante", true]
        ]
    },
    {
        "question": "Qu'est-ce qu'une fonction virtuelle pure en C++ ?",
        "answers": [
            ["Une fonction qui n'a pas d'implémentation", false],
            ["Une fonction qui est statique", false],
            ["Une fonction déclarée dans une classe de base qui doit être redéfinie dans une classe dérivée", true],
            ["Une fonction qui ne peut pas être héritée", false]
        ]
    },
    {
        "question": "Quel est le modificateur d'accès par défaut pour les membres d'une classe en C++ ?",
        "answers": [
            ["private", true],
            ["public", false],
            ["protected", false],
            ["static", false]
        ]
    },
    {
        "question": "Que signifie le mot-clé 'static' en C++ ?",
        "answers": [
            ["La variable ou fonction est accessible en dehors de la classe", false],
            ["La variable ou fonction appartient à la classe plutôt qu'à un objet", true],
            ["La variable est allouée dynamiquement", false],
            ["La variable ne peut pas changer sa valeur", false]
        ]
    },
    {
        "question": "Laquelle des déclarations suivantes est une déclaration de fonction valide en C++ ?",
        "answers": [
            ["int add(int a, int b);", true],
            ["int add(a, b);", false],
            ["add(int a, int b);", false],
            ["add(a, b);", false]
        ]
    },
    {
        "question": "Quel est le but du mot-clé 'return' en C++ ?",
        "answers": [
            ["Retourne le flux de contrôle au début d'une boucle", false],
            ["Termine le programme", false],
            ["Appelle une autre fonction", false],
            ["Quitte une fonction et retourne éventuellement une valeur", true]
        ]
    },
    {
        "question": "Quelle est la différence entre 'struct' et 'class' en C++ ?",
        "answers": [
            ["Les membres d'une 'struct' sont privés par défaut, tandis que les membres d'une 'class' sont publics par défaut", false],
            ["Une 'struct' ne peut pas avoir de fonctions membres, tandis qu'une 'class' peut", false],
            ["Les membres d'une 'struct' sont publics par défaut, tandis que les membres d'une 'class' sont privés par défaut", true],
            ["Une 'struct' est utilisée uniquement pour les POD (Plain Old Data)", false]
        ]
    },
    {
        "question": "Que garantit le 'destructeur virtuel' en C++ ?",
        "answers": [
            ["Destruction correcte des objets de classe dérivée lorsqu'ils sont supprimés via un pointeur de classe de base", true],
            ["Redéfinition des méthodes de la classe de base", false],
            ["Allocation de mémoire pour le destructeur", false],
            ["Prévention de l'héritage", false]
        ]
    },
    {
        "question": "Qu'est-ce qu'une fonction inline en C++ ?",
        "answers": [
            ["Une fonction appelée au sein d'une classe", false],
            ["Une fonction définie avec le mot-clé 'inline', permettant une exécution plus rapide en évitant la surcharge des appels de fonction", true],
            ["Une fonction qui ne peut être utilisée que dans le même fichier", false],
            ["Une fonction qui retourne plusieurs valeurs", false]
        ]
    },
    {
        "question": "Quel est le but du mot-clé 'const' en C++ ?",
        "answers": [
            ["Définit un pointeur constant", false],
            ["Indique que la valeur d'une variable ne peut pas être modifiée", true],
            ["Restreint l'accès à une variable", false],
            ["Force l'allocation de mémoire", false]
        ]
    },
    {
        "question": "Quel est le rôle de la fonction 'main' dans un programme C++ ?",
        "answers": [
            ["Elle définit les variables globales du programme", false],
            ["Elle initialise toutes les classes", false],
            ["Elle sert de point d'entrée du programme", true],
            ["Elle termine l'exécution du programme", false]
        ]
    },
    {
        "question": "Laquelle des structures de boucle suivantes n'est PAS valide en C++ ?",
        "answers": [
            ["for", false],
            ["while", false],
            ["do-while", false],
            ["repeat-until", true]
        ]
    },
    {
        "question": "Quel est le but d'un constructeur en C++ ?",
        "answers": [
            ["Détruire un objet lorsqu'il n'est plus nécessaire", false],
            ["Initialiser un objet lorsqu'il est créé", true],
            ["Surcharger une fonction", false],
            ["Créer une classe", false]
        ]
    },
    {
        "question": "Que retourne l'opérateur 'new' en C++ ?",
        "answers": [
            ["Un pointeur vers la mémoire allouée", true],
            ["L'adresse de l'objet", false],
            ["Une référence à l'objet", false],
            ["Une valeur de type int", false]
        ]
    },
    {
        "question": "Quelle est la différence entre '++i' et 'i++' en C++ ?",
        "answers": [
            ["Il n'y a aucune différence", false],
            ["'++i' est uniquement utilisé dans les boucles for", false],
            ["'i++' incrémente i avant de l'utiliser", false],
            ["'++i' incrémente i avant de l'utiliser, 'i++' incrémente après", true]
        ]
    },
    {
        "question": "Lequel des éléments suivants est utilisé pour vérifier si un pointeur est NULL en C++ ?",
        "answers": [
            ["if (pointer != NULL)", false],
            ["if (pointer == 0)", false],
            ["if (pointer == NULL)", true],
            ["if (pointer != 0)", false]
        ]
    },
    {
        "question": "Quel est le résultat de la division d'un entier par zéro en C++ ?",
        "answers": [
            ["Cela provoque un comportement indéfini", true],
            ["Cela donne zéro", false],
            ["Cela lance une exception", false],
            ["Cela retourne l'infini", false]
        ]
    },
    {
        "question": "À quoi sert le mot-clé 'const' en C++ ?",
        "answers": [
            ["Pour déclarer une fonction qui peut être appelée par d'autres fonctions", false],
            ["Pour définir une valeur constante qui ne peut pas être modifiée", true],
            ["Pour restreindre l'accès à une variable", false],
            ["Pour allouer de la mémoire pour une variable", false]
        ]
    },
    {
        "question": "Qu'est-ce qu'un template en C++ ?",
        "answers": [
            ["Un outil pour créer des macros", false],
            ["Une classe qui ne peut pas être héritée", false],
            ["Un type de pointeur de fonction", false],
            ["Un moyen de définir des classes ou des fonctions génériques", true]
        ]
    },
    {
        "question": "Que fait le mot-clé 'break' en C++ ?",
        "answers": [
            ["Quitte la boucle ou l'instruction switch actuelle", true],
            ["Met en pause l'itération actuelle d'une boucle", false],
            ["Passe à l'itération suivante d'une boucle", false],
            ["Termine la fonction actuelle", false]
        ]
    },
    {
        "question": "Que fait l'opérateur 'sizeof' en C++ ?",
        "answers": [
            ["Retourne le nombre d'éléments dans un tableau", false],
            ["Retourne la taille d'un type de donnée ou d'un objet en octets", true],
            ["Alloue de la mémoire pour une variable", false],
            ["Vérifie si un type de donnée est valide", false]
        ]
    },
    {
        "question": "Quelle est la différence entre 'malloc' et 'new' en C++ ?",
        "answers": [
            ["'malloc' est utilisé pour la création d'objets, 'new' est utilisé pour les tableaux", false],
            ["'malloc' alloue de la mémoire pour des objets, 'new' alloue pour des types primitifs", false],
            ["'new' initialise la mémoire, tandis que 'malloc' ne le fait pas", true],
            ["Il n'y a pas de différence", false]
        ]
    },
    {
        "question": "Quel est le but du mot-clé 'static' en C++ ?",
        "answers": [
            ["Il restreint la portée d'une variable à la fonction dans laquelle elle est déclarée", false],
            ["Il rend la variable ou la fonction partagée par toutes les instances de la classe", true],
            ["Il indique qu'une fonction est virtuelle", false],
            ["Il définit une variable globale", false]
        ]
    },
    {
        "question": "Lequel des éléments suivants est vrai concernant le mot-clé 'new' en C++ ?",
        "answers": [
            ["Il alloue de la mémoire dynamiquement", true],
            ["Il alloue de la mémoire statiquement", false],
            ["Il désalloue de la mémoire", false],
            ["Il est utilisé pour l'initialisation des tableaux", false]
        ]
    },
    {
        "question": "Que fait 'cin' en C++ ?",
        "answers": [
            ["Il affiche des données dans la console", false],
            ["Il est utilisé pour prendre des entrées de l'utilisateur", true],
            ["Il initialise des variables", false],
            ["Il crée une nouvelle instance d'une classe", false]
        ]
    },
    {
        "question": "Lequel des éléments suivants est vrai concernant une 'class' en C++ ?",
        "answers": [
            ["Une class est un type de fonction", false],
            ["Une class est une variable prédéfinie", false],
            ["Une class est un modèle pour créer des objets", true],
            ["Une class est utilisée pour l'allocation de mémoire", false]
        ]
    },
    {
        "question": "Quel est le résultat de l'utilisation de 'delete' sur un pointeur en C++ ?",
        "answers": [
            ["Il réalloue de la mémoire pour le pointeur", false],
            ["Il désalloue la mémoire pointée par le pointeur", true],
            ["Il initialise le pointeur à null", false],
            ["Il affiche la valeur du pointeur", false]
        ]
    },
    {
        "question": "Que fait l'opérateur 'sizeof' en C++ ?",
        "answers": [
            ["Il retourne la taille d'un type de donnée ou d'un objet", true],
            ["Il alloue de la mémoire", false],
            ["Il déclare une variable", false],
            ["Il initialise un objet", false]
        ]
    },
    {
        "question": "Quelle est la différence entre '++i' et 'i++' en C++ ?",
        "answers": [
            ["'++i' incrémente i avant de retourner sa valeur, 'i++' incrémente i après avoir retourné sa valeur", true],
            ["Il n'y a pas de différence", false],
            ["'i++' est utilisé pour les valeurs de type float, tandis que '++i' est utilisé pour les entiers", false],
            ["'i++' incrémente i avant de retourner sa valeur", false]
        ]
    },
    {
        "question": "Lequel des éléments suivants décrit le mieux l'opérateur 'new' en C++ ?",
        "answers": [
            ["Il libère la mémoire allouée", false],
            ["Il initialise les variables à zéro", false],
            ["Il affiche des valeurs dans la console", false],
            ["Il alloue de la mémoire dynamiquement pour une variable ou un tableau", true]
        ]
    },
    {
        "question": "Que fait l'instruction 'break' en C++ ?",
        "answers": [
            ["Elle met en pause l'exécution du programme", false],
            ["Elle termine la boucle ou l'instruction switch la plus proche", true],
            ["Elle continue à la prochaine itération de la boucle", false],
            ["Elle quitte la fonction", false]
        ]
    },
    {
        "question": "Lequel des éléments suivants est vrai concernant un 'constructor' en C++ ?",
        "answers": [
            ["Il est utilisé pour supprimer un objet", false],
            ["C'est un type d'opérateur", false],
            ["C'est une fonction spéciale qui est appelée lorsqu'un objet est créé", true],
            ["Il est utilisé pour stocker des données", false]
        ]
    }
]
export const DataTele = [
    {
        "question": "Quel est le rôle principal du protocole TCP dans les réseaux ?",
        "answers": [
            ["Gérer les adresses IP", false],
            ["Fournir un service sans connexion", false],
            ["Assurer la transmission fiable des données", true],
            ["Chiffrer les données", false]
        ]
    },
    {
        "question": "Le protocole UDP est principalement utilisé pour :",
        "answers": [
            ["Les applications en temps réel", true],
            ["La navigation web", false],
            ["Les transferts de fichiers fiables", false],
            ["Le streaming vidéo avec correction d'erreur", false]
        ]
    },
    {
        "question": "Quel type de connexion est utilisé par le protocole HDLC ?",
        "answers": [
            ["Connexion orientée caractère", false],
            ["Sans connexion", false],
            ["Connexion orientée bit", true],
            ["Connexion orientée flux", false]
        ]
    },
    {
        "question": "Dans le protocole IP, quel est le rôle principal de l'adresse IP ?",
        "answers": [
            ["Assurer la sécurité des données", false],
            ["Identifier l'origine et la destination des données", true],
            ["Fournir un numéro de port", false],
            ["Gérer les sessions de communication", false]
        ]
    },
    {
        "question": "Quel est l'inconvénient principal de UDP par rapport à TCP ?",
        "answers": [
            ["Absence de mécanisme de contrôle de flux", true],
            ["Latence plus élevée", false],
            ["Coût de transmission plus élevé", false],
            ["Incompatibilité avec les applications en temps réel", false]
        ]
    },
    {
        "question": "Quelle est la taille d'une adresse IPv4 ?",
        "answers": [
            ["64 bits", false],
            ["128 bits", false],
            ["256 bits", false],
            ["32 bits", true]
        ]
    },
    {
        "question": "Le protocole HDLC appartient à quelle couche du modèle OSI ?",
        "answers": [
            ["Couche réseau", false],
            ["Couche transport", false],
            ["Couche application", false],
            ["Couche liaison de données", true]
        ]
    },
    {
        "question": "Quel port est utilisé par défaut pour le protocole HTTP ?",
        "answers": [
            ["80", true],
            ["443", false],
            ["25", false],
            ["53", false]
        ]
    },
    {
        "question": "Quelle est la principale différence entre IPv4 et IPv6 ?",
        "answers": [
            ["Le protocole de transport utilisé", false],
            ["La taille de l'adresse", true],
            ["La couche OSI à laquelle ils appartiennent", false],
            ["Le niveau de sécurité", false]
        ]
    },
    {
        "question": "Quel mécanisme est utilisé par TCP pour garantir une transmission fiable ?",
        "answers": [
            ["Le contrôle d'accès", false],
            ["Le chiffrement", false],
            ["L'accusé de réception", true],
            ["Le routage dynamique", false]
        ]
    },
    {
        "question": "Quelle est la classe d'adresse IP qui peut avoir une plage de 1 à 126 pour l'octet le plus significatif ?",
        "answers": [
            ["Classe B", false],
            ["Classe C", false],
            ["Classe D", false],
            ["Classe A", true]
        ]
    },
    {
        "question": "Quelle adresse IP est utilisée pour représenter toutes les adresses dans un réseau local ?",
        "answers": [
            ["255.255.255.255", true],
            ["192.168.0.1", false],
            ["0.0.0.0", false],
            ["127.0.0.1", false]
        ]
    },
    {
        "question": "Quelle est la plage des adresses privées de classe C ?",
        "answers": [
            ["172.16.0.0 à 172.31.255.255", false],
            ["10.0.0.0 à 10.255.255.255", false],
            ["192.168.0.0 à 192.168.255.255", true],
            ["127.0.0.1 à 127.255.255.255", false]
        ]
    },
    {
        "question": "Quelle adresse est utilisée pour les tests de boucle locale (loopback) ?",
        "answers": [
            ["192.168.1.1", false],
            ["127.0.0.1", true],
            ["255.255.255.0", false],
            ["0.0.0.0", false]
        ]
    },
    {
        "question": "Quel masque de sous-réseau est associé à une adresse IPv4 de classe B par défaut ?",
        "answers": [
            ["255.255.0.0", true],
            ["255.0.0.0", false],
            ["255.255.255.0", false],
            ["255.255.255.255", false]
        ]
    },
    {
        "question": "Combien d'adresses peuvent être assignées dans un sous-réseau /24 en IPv4 ?",
        "answers": [
            ["254", true],
            ["256", false],
            ["512", false],
            ["1024", false]
        ]
    },
    {
        "question": "Quelle est la plage des adresses IP privées de classe A ?",
        "answers": [
            ["172.16.0.0 à 172.31.255.255", false],
            ["10.0.0.0 à 10.255.255.255", true],
            ["192.168.0.0 à 192.168.255.255", false],
            ["1.0.0.0 à 126.255.255.255", false]
        ]
    },
    {
        "question": "Qu'indique un masque de sous-réseau de 255.255.255.252 ?",
        "answers": [
            ["Un sous-réseau contenant 6 adresses", false],
            ["Un sous-réseau contenant 8 adresses", false],
            ["Un sous-réseau contenant 2 adresses", false],
            ["Un sous-réseau contenant 4 adresses", true]
        ]
    },
    {
        "question": "Que signifie CIDR en adressage IP ?",
        "answers": [
            ["Connectionless Internet Data Routing", false],
            ["Common Inter-Domain Routing", false],
            ["Classless Inter-Domain Routing", true],
            ["Classified Internet Domain Range", false]
        ]
    },
    {
        "question": "Quelle adresse est utilisée pour désigner un réseau non spécifié ?",
        "answers": [
            ["0.0.0.0", true],
            ["255.255.255.255", false],
            ["127.0.0.1", false],
            ["192.168.1.1", false]
        ]
    },
    {
        "question": "Combien d'adresses sont disponibles dans un sous-réseau IPv4 avec un masque de /30 ?",
        "answers": [
            ["2", false],
            ["4", true],
            ["6", false],
            ["8", false]
        ]
    },
    {
        "question": "Quelle est la plage des adresses privées de classe B ?",
        "answers": [
            ["192.168.0.0 à 192.168.255.255", false],
            ["10.0.0.0 à 10.255.255.255", false],
            ["1.0.0.0 à 126.255.255.255", false],
            ["172.16.0.0 à 172.31.255.255", true]
        ]
    },
    {
        "question": "Que signifie le terme 'adresse de diffusion' (broadcast) en IPv4 ?",
        "answers": [
            ["Une adresse utilisée pour envoyer des données à tous les hôtes d'un réseau", true],
            ["Une adresse utilisée pour la communication entre deux hôtes", false],
            ["Une adresse pour les communications de routage", false],
            ["Une adresse réservée à l'administration réseau", false]
        ]
    },
    {
        "question": "Quel est le rôle principal du protocole ARP dans les réseaux IP ?",
        "answers": [
            ["Associer une adresse IP à un nom de domaine", false],
            ["Associer une adresse IP à une adresse MAC", true],
            ["Attribuer dynamiquement des adresses IP", false],
            ["Convertir une adresse IPv4 en IPv6", false]
        ]
    },
    {
        "question": "Quelle est la plage des adresses multicast en IPv4 ?",
        "answers": [
            ["224.0.0.0 à 239.255.255.255", true],
            ["192.0.2.0 à 192.0.2.255", false],
            ["10.0.0.0 à 10.255.255.255", false],
            ["240.0.0.0 à 255.255.255.255", false]
        ]
    },
    {
        "question": "Qu'indique une adresse IP se terminant par .0 ou .255 dans un sous-réseau ?",
        "answers": [
            ["Ce sont des adresses utilisables", false],
            ["Ce sont des adresses pour les routeurs uniquement", false],
            ["Ce sont des adresses non valides", false],
            ["Ce sont des adresses réservées", true]
        ]
    },
    {
        "question": "Quelle commande peut être utilisée pour vérifier la connectivité IP vers une autre machine ?",
        "answers": [
            ["ping", true],
            ["tracert", false],
            ["ipconfig", false],
            ["nslookup", false]
        ]
    },
    {
        "question": "Quel type d'adresse IP est 169.254.x.x ?",
        "answers": [
            ["Adresse multicast", false],
            ["Adresse APIPA (Automatic Private IP Addressing)", true],
            ["Adresse de boucle locale", false],
            ["Adresse publique", false]
        ]
    },
    {
        "question": "Combien d'adresses IP sont disponibles dans un sous-réseau /28 en IPv4 ?",
        "answers": [
            ["16", true],
            ["32", false],
            ["64", false],
            ["8", false]
        ]
    },
    {
        "question": "Qu'indique le masque de sous-réseau 255.255.255.128 en termes de bits pour le réseau ?",
        "answers": [
            ["24 bits", false],
            ["26 bits", false],
            ["25 bits", true],
            ["23 bits", false]
        ]
    },
    {
        "question": "Quel type de protocole est HDLC ?",
        "answers": [
            ["Protocole de la couche réseau", false],
            ["Protocole de la couche transport", false],
            ["Protocole de la couche liaison de données", true],
            ["Protocole de la couche application", false]
        ]
    },
    {
        "question": "Quelle est la longueur minimale d'une trame Ethernet ?",
        "answers": [
            ["64 octets", true],
            ["32 octets", false],
            ["128 octets", false],
            ["256 octets", false]
        ]
    },
    {
        "question": "Que signifie le champ FCS dans une trame Ethernet ?",
        "answers": [
            ["Frame Check Sequence", true],
            ["Frame Connection Service", false],
            ["Frame Control System", false],
            ["Fast Communication Sequence", false]
        ]
    },
    {
        "question": "Quelle est la longueur maximale d'une trame Ethernet standard sans jumbo frame ?",
        "answers": [
            ["1518 octets", true],
            ["1024 octets", false],
            ["4096 octets", false],
            ["9000 octets", false]
        ]
    },
    {
        "question": "Dans HDLC, que représente le mode 'ABM' (Asynchronous Balanced Mode) ?",
        "answers": [
            ["Un mode pour les communications unidirectionnelles", false],
            ["Un mode où les deux extrémités peuvent envoyer des données simultanément", true],
            ["Un mode pour la gestion des erreurs", false],
            ["Un mode de connexion sans état", false]
        ]
    },
    {
        "question": "Quel champ de la trame Ethernet identifie le type de protocole transporté ?",
        "answers": [
            ["Adresse MAC source", false],
            ["Adresse MAC destination", false],
            ["FCS", false],
            ["Type/EtherType", true]
        ]
    },
    {
        "question": "Dans une trame HDLC, que contient le champ *Control* ?",
        "answers": [
            ["L'adresse source et destination", false],
            ["Une vérification d'erreur", false],
            ["Un code de priorité", false],
            ["Des informations sur le type de trame et le numéro de séquence", true]
        ]
    },
    {
        "question": "Quel est le rôle principal du champ 'Adresse MAC destination' dans une trame Ethernet ?",
        "answers": [
            ["Identifier la source de la trame", false],
            ["Transporter les données utilisateur", false],
            ["Identifier le destinataire de la trame", true],
            ["Indiquer la priorité du trafic", false]
        ]
    },
    {
        "question": "Dans une trame Ethernet, que signifie l'adresse MAC  FF:FF:FF:FF:FF:FF ?",
        "answers": [
            ["Une diffusion (broadcast)", true],
            ["Une adresse non valide", false],
            ["Une adresse réservée", false],
            ["Une adresse pour le routage", false]
        ]
    },
    {
        "question": "Dans HDLC, quelle est la fonction principale du bit de bourrage (bit stuffing) ?",
        "answers": [
            ["Accélérer la transmission des données", false],
            ["Éviter la confusion avec les séquences de délimitation", true],
            ["Gérer le contrôle de flux", false],
            ["Améliorer la sécurité des données", false]
        ]
    },
    {
        "question": "Dans une trame HDLC, quel champ est utilisé pour détecter les erreurs ?",
        "answers": [
            ["Champ Adresse", false],
            ["FCS (Frame Check Sequence)", true],
            ["Champ Contrôle", false],
            ["Drapeau de début/fin", false]
        ]
    },
    {
        "question": "Quelle est la longueur maximale des données utiles dans une trame Ethernet standard ?",
        "answers": [
            ["1500 octets", true],
            ["1518 octets", false],
            ["64 octets", false],
            ["4096 octets", false]
        ]
    },
    {
        "question": "Quelle plage d'adresses IPv4 est réservée pour la boucle locale (loopback) ?",
        "answers": [
            ["192.168.0.0 à 192.168.255.255", false],
            ["10.0.0.0 à 10.255.255.255", false],
            ["127.0.0.0 à 127.255.255.255", true],
            ["169.254.0.0 à 169.254.255.255", false]
        ]
    },
    {
        "question": "Quel est l'objectif principal de HDLC dans la communication ?",
        "answers": [
            ["Attribuer dynamiquement des adresses IP", false],
            ["Assurer une transmission fiable entre deux points", true],
            ["Gérer les connexions réseau sur Internet", false],
            ["Accélérer le routage des paquets", false]
        ]
    },
    {
        "question": "Dans une trame Ethernet, que signifie une adresse MAC source de 00:00:00:00:00:00 ?",
        "answers": [
            ["Adresse de diffusion", false],
            ["Adresse de boucle locale", false],
            ["Adresse non attribuée ou non définie", true],
            ["Adresse réservée", false]
        ]
    },
    {
        "question": "Quel est le rôle du champ 'Contrôle' dans HDLC ?",
        "answers": [
            ["Détecter et corriger les erreurs", false],
            ["Transporter les données utilisateur", false],
            ["Indiquer l'adresse de destination", false],
            ["Indiquer le type de trame et gérer les numéros de séquence", true]
        ]
    },
    {
        "question": "Quel type d'adresse IPv4 est utilisé pour une diffusion (broadcast) ?",
        "answers": [
            ["255.255.255.255", true],
            ["192.168.0.1", false],
            ["10.0.0.0", false],
            ["0.0.0.0", false]
        ]
    },
    {
        "question": "Quelle est la méthode de contrôle d'erreur utilisée dans Ethernet ?",
        "answers": [
            ["Checksum", false],
            ["Parity Bit", false],
            ["FCS (Frame Check Sequence)", true],
            ["CRC uniquement", false]
        ]
    },
    {
        "question": "Quel est le rôle principal de l'adresse MAC dans une trame Ethernet ?",
        "answers": [
            ["Identifier un appareil au niveau de la couche réseau", false],
            ["Identifier l'appareil source et destination au niveau de la couche liaison", true],
            ["Affecter une adresse dynamique", false],
            ["Chiffrer les données utilisateur", false]
        ]
    },
    {
        "question": "Dans une trame HDLC, quelle séquence marque le début et la fin d'une trame ?",
        "answers": [
            ["01111110", true],
            ["10101010", false],
            ["11110000", false],
            ["00000000", false]
        ]
    }
]
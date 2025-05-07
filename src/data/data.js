import morpion from '../assets/images/morpion.png';
import compteur from '../assets/images/compteur.png';
import generateur from '../assets/images/generateur.png';
import inscription from '../assets/images/inscription.png';
import inversseur from '../assets/images/Inversseur.png';

export const projects = [{
        id: 1,
        image: inversseur,
        title: "Developpement d'un inversseur de chaine de caracteres",
        description: "Cette application est une petite interface web qui permet d’inverser une chaîne de caractères. Elle contient un titre, 'Inverseur de String', qui s’affiche en haut de la page pour expliquer son utilité. En dessous, il y a un champ où l’utilisateur peut écrire une suite de lettres ou de mots. Dès que l’utilisateur écrit quelque chose, le texte inversé apparaît immédiatement en dessous, sans besoin de cliquer sur un bouton. L’application est simple et rapide, idéale pour jouer avec des mots ou tester des idées.",
        link: "https://inverseur.onrender.com/",
    },
    {
        id: 2,
        image: compteur,
        title: "Developpement d'un compteur",
        description: "Cette application est un outil simple qui affiche un compteur interactif. En haut de la page, un titre indique son objectif : 'Compteur'. Au centre, la valeur du compteur est visible, et trois boutons permettent de la modifier : un bouton pour augmenter le chiffre, un autre pour le diminuer, et un bouton pour réinitialiser ou appliquer une action spéciale. Chaque fois que vous appuyez sur un bouton, la valeur change immédiatement, offrant une expérience rapide et facile à utiliser.",
        link: "https://moncompteur.netlify.app/",
    },
    {
        id: 3,
        image: inscription,
        title: "Developpement d'un site web d'enregistrement ",
        description: "Cette application est un outil simple pour ajouter des informations sur un étudiant. L'utilisateur remplit un formulaire avec trois champs : prénom, nom de famille et matricule. En cliquant sur le bouton 'Ajouter', un message s'affiche pour confirmer les informations saisies. Ensuite, les champs se vident automatiquement, prêts pour une nouvelle entrée. C'est une interface claire et facile à utiliser, parfaite pour enregistrer rapidement des étudiants.",
        link: "https://enregistreur.onrender.com",
    },
    {
        id: 4,
        image: generateur,
        title: "Developpement du site web de generation de mots de passes",
        description: "Cette application React se compose de deux composants principaux, Header et Passw, rendus dans un conteneur stylisé pour créer une interface simple et conviviale. La mise en page et le design de l'application sont gérés via un fichier CSS moderne, offrant une disposition épurée et centrée ainsi que des éléments interactifs tels que des boutons avec effets au survol. L'application est initialisée et rendue sur une page web à l'aide de la fonction ReactDOM.createRoot de React. Sa structure modulaire permet une personnalisation facile et l'ajout de fonctionnalités, idéale pour des tâches comme la gestion ou la validation de mots de passe.",
        link: "https://passwordcreater.onrender.com",
    },
    {
        id: 5,
        image: morpion,
        title: "Site web : Jeu du Morpion",
        description: "Ce code crée un jeu interactif de Tic-Tac-Toe jouable dans un navigateur web. Les joueurs choisissent leur symbole (X ou O) et jouent à tour de rôle en cliquant sur les cases d'une grille 3x3. Le jeu vérifie automatiquement les conditions de victoire (trois symboles alignés) ou d’égalité, et met en évidence le gagnant ou affiche un message de match nul. Une simple IA peut bloquer les coups adverses ou jouer au hasard si nécessaire. Le bouton 'Redémarrer' permet de relancer une nouvelle partie, tandis que l’interface claire et réactive offre une expérience utilisateur agréable et intuitive.",
        link: "https://morpiongame.onrender.com",
    },
];

export const experience = [{
        id: 1,
        title: "Co-Fondateur & Lead Developer - Startup Hub (2022 - Present)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto quos earum minus modi blanditiis aperiam officiis, explicabo sint nulla ipsam adipisci excepturi. Nulla, quis. Iusto molestias eligendi optio fugiat! Quam qui laborum culpa sequi saepe commodi dolorum voluptatum sunt dignissimos molestias recusandae corporis facilis, quos maxime voluptates accusamus eveniet, non illo atque! Minima laudantium exercitationem deserunt maiores optio nam?",
    },
    {
        id: 2,
        title: "Ingenieur Logiciel - Google (2019 - 2022)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto quos earum minus modi blanditiis aperiam officiis, explicabo sint nulla ipsam adipisci excepturi. Nulla, quis. Iusto molestias eligendi optio fugiat! Quam qui laborum culpa sequi saepe commodi dolorum voluptatum sunt dignissimos molestias recusandae corporis facilis, quos maxime voluptates accusamus eveniet, non illo atque! Minima laudantium exercitationem deserunt maiores optio nam?",
    },
    {
        id: 3,
        title: "Ingenieur Logiciel - eBay (2018 - 2019)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto quos earum minus modi blanditiis aperiam officiis, explicabo sint nulla ipsam adipisci excepturi. Nulla, quis. Iusto molestias eligendi optio fugiat! Quam qui laborum culpa sequi saepe commodi dolorum voluptatum sunt dignissimos molestias recusandae corporis facilis, quos maxime voluptates accusamus eveniet, non illo atque! Minima laudantium exercitationem deserunt maiores optio nam?",
    },
];

export const educations = [{
        title: "DEC Informatique",
        name: "Institute teccart",
    },
    {
        title: "General English Course",
        name: "Lingua Institute",
    },
];
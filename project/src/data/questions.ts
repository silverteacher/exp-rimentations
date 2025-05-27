import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Qu'est-ce que la pensée computationnelle?",
    options: [
      "Penser uniquement aux ordinateurs",
      "Une approche de résolution de problèmes inspirée par l'informatique",
      "Calculer mentalement",
      "Utiliser une calculatrice"
    ],
    correctAnswer: 1,
    explanation: "La pensée computationnelle est une approche de résolution de problèmes qui utilise des concepts fondamentaux de l'informatique comme la décomposition, la reconnaissance de modèles et l'abstraction.",
    category: 'programming'
  },
  {
    id: 2,
    text: "Lequel de ces éléments n'est pas un composant essentiel d'un ordinateur?",
    options: [
      "CPU (processeur)",
      "RAM (mémoire vive)",
      "GPS",
      "Disque dur"
    ],
    correctAnswer: 2,
    explanation: "Le GPS n'est pas un composant essentiel d'un ordinateur. Les composants essentiels sont le CPU, la RAM, et un dispositif de stockage comme un disque dur.",
    category: 'hardware'
  },
  {
    id: 3,
    text: "Qu'est-ce qu'un mot de passe fort?",
    options: [
      "Un mot simple facile à retenir",
      "Le nom de votre animal de compagnie",
      "Une combinaison complexe de lettres, chiffres et symboles",
      "Votre date de naissance"
    ],
    correctAnswer: 2,
    explanation: "Un mot de passe fort contient une combinaison de lettres majuscules et minuscules, de chiffres et de symboles, et ne devrait pas être facilement devinable.",
    category: 'online-safety'
  },
  {
    id: 4,
    text: "Que signifie HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyper Technical Meta Language"
    ],
    correctAnswer: 0,
    explanation: "HTML signifie Hyper Text Markup Language. C'est le langage standard pour créer des pages web.",
    category: 'programming'
  },
  {
    id: 5,
    text: "Qu'est-ce que le phishing?",
    options: [
      "Une technique de pêche virtuelle",
      "Une tentative frauduleuse d'obtenir des informations sensibles",
      "Un jeu en ligne",
      "Un type de virus informatique"
    ],
    correctAnswer: 1,
    explanation: "Le phishing est une technique frauduleuse utilisée pour obtenir des informations personnelles comme les mots de passe et les numéros de carte de crédit en se faisant passer pour une entité de confiance.",
    category: 'online-safety'
  },
  {
    id: 6,
    text: "Qu'est-ce qu'un algorithme?",
    options: [
      "Un type de virus informatique",
      "Une séquence d'instructions pour résoudre un problème",
      "Un langage de programmation",
      "Un composant matériel"
    ],
    correctAnswer: 1,
    explanation: "Un algorithme est une séquence d'instructions ou de règles bien définies, généralement destinées à résoudre un problème ou à effectuer un calcul.",
    category: 'programming'
  },
  {
    id: 7,
    text: "Quelle est la meilleure pratique pour protéger vos données personnelles en ligne?",
    options: [
      "Partager vos mots de passe avec des amis",
      "Utiliser le même mot de passe pour tous vos comptes",
      "Activer l'authentification à deux facteurs",
      "Accepter toutes les demandes d'amis sur les réseaux sociaux"
    ],
    correctAnswer: 2,
    explanation: "L'authentification à deux facteurs ajoute une couche de sécurité supplémentaire en exigeant une deuxième forme de vérification en plus du mot de passe.",
    category: 'online-safety'
  },
  {
    id: 8,
    text: "Qu'est-ce que le cloud computing?",
    options: [
      "La météorologie informatique",
      "L'utilisation de serveurs distants pour stocker et traiter des données",
      "Un type de logiciel antivirus",
      "Un système d'exploitation"
    ],
    correctAnswer: 1,
    explanation: "Le cloud computing permet d'accéder à des ressources informatiques (comme le stockage et la puissance de calcul) via Internet, sans avoir à les gérer directement.",
    category: 'internet'
  },
  {
    id: 9,
    text: "Qu'est-ce qu'une URL?",
    options: [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Universal Reference Link",
      "Unified Resource Link"
    ],
    correctAnswer: 1,
    explanation: "URL signifie Uniform Resource Locator. C'est l'adresse d'une ressource sur le Web, comme une page web.",
    category: 'internet'
  },
  {
    id: 10,
    text: "Quel outil est le plus approprié pour créer une présentation?",
    options: [
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Microsoft Excel",
      "Notepad"
    ],
    correctAnswer: 1,
    explanation: "Microsoft PowerPoint est spécifiquement conçu pour créer des présentations avec des diapositives, des transitions et des effets visuels.",
    category: 'digital-tools'
  }
];
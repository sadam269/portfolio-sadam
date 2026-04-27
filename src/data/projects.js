// ─────────────────────────────────────────────
//  CONFIG PROJETS
//  Pour chaque projet, renseigne :
//    liveUrl  → URL du site déployé (Vercel, Netlify…) — laisser null si absent
//    githubUrl → URL du repo GitHub — laisser null si absent
// ─────────────────────────────────────────────

const projects = [
  {
    tag: 'Projet académique',
    title: 'Détection de fraude bancaire en temps réel',
    desc: "Conception et déploiement d'un système de détection de transactions frauduleuses basé sur le machine learning. Traitement de flux de données en temps réel, entraînement de modèles de classification et évaluation des performances.",
    skills: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Temps réel'],
    period: '03/2025 – 07/2025',
    featured: true,
    liveUrl: null,               // ex: 'https://fraud-detection.vercel.app'
    githubUrl: null,             // ex: 'https://github.com/sadam269/fraud-detection'
  },
  {
    tag: 'Stage',
    title: 'Ingénieur en Intelligence Artificielle — CFHT SARL',
    desc: "Développement et entraînement de modèles de machine learning et deep learning pour des projets clients. Travail en environnement agile, itérations rapides et intégration des modèles dans des solutions applicatives.",
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Agile'],
    period: '06/2024 – 09/2024',
    featured: false,
    liveUrl: null,
    githubUrl: null,
  },
  {
    tag: 'Projet web',
    title: "Application de planification d'événements",
    desc: "Conception et développement d'une application web complète — interface utilisateur (HTML, CSS, Bootstrap) et back-end (PHP, MySQL). Gestion des utilisateurs, création et suivi d'événements.",
    skills: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    period: '02/2022 – 07/2022',
    featured: false,
    liveUrl: null,               // ex: 'https://events-app.netlify.app'
    githubUrl: null,             // ex: 'https://github.com/sadam269/events-app'
  },
  {
    tag: 'Engagement associatif',
    title: 'Développement numérique — ACEM',
    desc: "Organisation et coordination d'événements associatifs. Conception et développement d'outils numériques internes pour faciliter la gestion des membres et des activités.",
    skills: ['Gestion de projet', 'Outils numériques', 'Coordination'],
    period: '11/2021 – 09/2022',
    featured: false,
    liveUrl: null,
    githubUrl: null,
  },
]

export default projects

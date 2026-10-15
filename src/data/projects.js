// ─────────────────────────────────────────────
//  CONFIG PROJETS
//  Pour chaque projet, renseigne :
//    liveUrl  → URL du site déployé (Vercel, Netlify…) — laisser null si absent
//    githubUrl → URL du repo GitHub — laisser null si absent
//    privateRepo → true si le code est dans un dépôt privé
// ─────────────────────────────────────────────

const projects = [
  {
    tag: 'Projet en équipe · 3 développeurs · en production',
    title: 'Bahati Marketplace — Marketplace multi-vendeurs & livraison',
    desc: "Marketplace comorienne en ligne (≈ 200 produits, plus de 40 boutiques) : profils acheteur, vendeur, fournisseur et livreur sur un compte unique, panier, checkout avec choix du livreur, chat et notifications. Développement de fonctionnalités sur l'ensemble de la stack (une branche Git par fonctionnalité), revue et validation des intégrations sur le backend Medusa, administration de la plateforme. Déployée sur VPS Ubuntu (Docker Compose, Nginx, SSL) ; application mobile en cours de développement.",
    skills: ['MedusaJS v2', 'Next.js 15', 'Firebase', 'Stripe Connect', 'Docker Compose', 'Nginx', 'n8n'],
    period: '04/2025 – Présent',
    featured: true,
    liveUrl: 'https://bahati-marketplace.tech',
    githubUrl: null,
  },
  {
    tag: 'Projet personnel · MVP en cours',
    title: 'SCHOOLIA — Plateforme de gestion scolaire',
    desc: "Application de gestion d'établissement (élèves, classes, notes et bulletins, paiements et reçus), basée sur les documents réels d'un établissement local et pensée pour évoluer vers un SaaS multi-écoles.",
    skills: ['Flask', 'PostgreSQL', 'HTMX', 'Alpine.js', 'Bootstrap 5'],
    period: '2026',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,          // dépôt privé → affiche « Code privé · démo sur demande »
  },
  {
    tag: 'Projet personnel · en développement',
    title: 'Mirontsy Smart Commune — Digitalisation municipale',
    desc: "Plateforme de services communaux (état civil, démarches administratives, portail citoyen) bilingue français / arabe, avec contrôle d'accès par rôles (Citoyen, Agent, Administrateur, Maire).",
    skills: ['Flask', 'PostgreSQL', 'HTMX', 'Alpine.js', 'Bootstrap 5'],
    period: '2026',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,          // dépôt privé → affiche « Code privé · démo sur demande »
  },
  {
    tag: "Projet de fin d'études · Master Big Data",
    title: 'Détection de fraude bancaire en temps réel',
    desc: "Système ML de détection de transactions frauduleuses (Random Forest, XGBoost, Régression Logistique) avec API Flask et dashboards d'alertes — réduction de 30 % des faux positifs (ROC-AUC, matrice de confusion).",
    skills: ['Python', 'Flask', 'Random Forest', 'XGBoost', 'Scikit-learn', 'Keras', 'API REST'],
    period: '03/2025 – 07/2025',
    featured: false,
    liveUrl: null,
    githubUrl: null,
  },
]

export default projects

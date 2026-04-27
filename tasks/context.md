# Contexte projet — Portfolio Sadam Soufiani

## Identité
- Nom : Sadam Soufiani
- Formation : Master Big Data & E-Business
- Email : soufianisadam01@gmail.com
- Téléphone : 0638405286

## Profil
Pas un développeur — profil orienté data, business digital, stratégie e-commerce et analyse de données.
Le site doit refléter un profil analytique et business, pas un profil purement technique.

## Stack
- React + Vite (créé via `npm create vite@latest --template react`)
- Tailwind CSS v4 avec plugin `@tailwindcss/vite` (pas de tailwind.config.js)
- Framer Motion (animations)
- React Router v6 (routing)
- Déploiement prévu : Vercel (site statique)

## Architecture du projet
```
portfolio-sadam/
├── index.html                    ← titre + Google Fonts en <link>
├── vite.config.js                ← plugins: react + tailwindcss
├── src/
│   ├── main.jsx                  ← point d'entrée
│   ├── index.css                 ← @import "tailwindcss" + reset body
│   ├── App.jsx                   ← BrowserRouter + 4 routes
│   ├── components/
│   │   ├── Navbar.jsx            ← fixed, white bg, responsive, burger mobile
│   │   └── Footer.jsx            ← liens + copyright
│   └── pages/
│       ├── Home.jsx              ← Hero + 3 highlights + CTA
│       ├── About.jsx             ← Parcours académique + compétences
│       ├── Projects.jsx          ← 3 cartes projet (placeholders)
│       └── Contact.jsx           ← email, téléphone, formulaire mailto
└── tasks/                        ← contexte, todo, lessons
```

## Pages implémentées
1. **Accueil** — Hero (nom, titre, description, 2 CTA), 3 highlights (Data, E-Business, Master), section CTA bas
2. **À propos** — Timeline formation, grille compétences par catégorie (Data, E-Commerce, Business, Outils)
3. **Projets** — 3 cartes placeholder avec tag, titre, description, skills tags
4. **Contact** — Carte email cliquable, carte téléphone cliquable, carte LinkedIn (placeholder), formulaire mailto

## Choix techniques notables
- Google Fonts chargé via `<link>` dans index.html (pas dans CSS) — évite conflit avec Tailwind v4
- Composants Home.jsx et Navbar.jsx utilisent styles inline pour garantir rendu sans dépendre du parsing Tailwind
- Navbar toujours fond blanc (pas transparent au départ) — meilleure lisibilité
- Formulaire contact → ouvre le client mail via `mailto:` (pas de backend)

## Assets manquants (à fournir par Sadam)
- [ ] Logo personnel
- [ ] Photo de profil
- [ ] Bio / description personnelle réelle
- [ ] Projets réels : titres, descriptions, compétences utilisées
- [ ] Formation précise : école, dates, spécialisation
- [ ] LinkedIn URL
- [ ] Autres réseaux (GitHub si applicable)

## Palette de couleurs
- Primaire : #0f172a (slate-900) — textes
- Accent : #4f46e5 (indigo-600) — boutons, liens actifs
- Surface : #f8fafc — fond sections
- Muted : #64748b — texte secondaire
- Bordures : #e2e8f0

## Décisions irréversibles
- Stack React + Vite
- Déploiement statique
- Structure 4 pages
- Tailwind v4 avec @tailwindcss/vite

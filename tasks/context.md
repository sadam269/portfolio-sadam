# Contexte projet — Portfolio Sadam Soufiani
Dernière mise à jour : 2026-10-15

## Identité (source : CV oct. 2026)
- Nom : Sadam Soufiani
- Titre : Data Scientist & Ingénieur IA · Développeur Python Full Stack
- Email : soufianisadam01@gmail.com
- Téléphone : +269 460 1550 — Anjouan, Comores (ancien n° marocain +212 638 405 286 : ne plus utiliser sur le site)
- LinkedIn : https://www.linkedin.com/in/sadam-soufiani-3bb32a320
- GitHub : https://github.com/sadam269 (SCHOOLIA et Mirontsy sont en dépôts PRIVÉS)
- CV source : `C:\Users\PC\OneDrive\Desktop\CV_Sadam_Soufiani.pdf` → copié dans `public/CV_Sadam_Soufiani.pdf`

## Profil
Double compétence machine learning + développement web Full Stack.
- SOINAA-TECH (https://soinaa-tech.com) : co-fondateur & développeur Full Stack (CV) ; listé « Directeur des Systèmes d'information » sur le site Soinaa
- Bahati Marketplace (https://bahati-marketplace.tech) : CO-DÉVELOPPEUR (projet en équipe de 3), PAS co-fondateur
- Formation : Master Spécialisé Big Data & Digital Business (Sup'Management Fès, 2025, mention Bien) ; Licence Maths-Info (Ibn Zohr, Agadir) ; formation continue Infrastructure (2026, en cours)
- Langues : Comorien (maternelle), Français (courant), Arabe (lecture), Anglais (notions — lecture)
- Cible : recruteurs, ONG / organisations internationales (ONU, OMS…), clients Soinaa

## Règles de contenu (décisions Sadam)
- Source de vérité = le CV le plus récent. Ne rien inventer qui n'y figure pas.
- NE PAS ajouter LADHA ni Halibou School (refus explicite du 2026-10-15).
- Niveaux de langue modestes et honnêtes (peuvent être testés en entretien).
- Dépôts privés → `privateRepo: true` dans projects.js (affiche « Code privé · démo sur demande »), jamais de lien vers le profil GitHub à la place.

## Où modifier quoi
| Contenu | Fichier |
|---|---|
| Projets (titre, desc, stack, liens, privé) | `src/data/projects.js` |
| Expérience pro, formation, compétences, langues, bio | `src/pages/About.jsx` (constantes en haut) |
| Titre hero, résumé, expertises, cartes Soinaa/Bahati, bouton CV | `src/pages/Home.jsx` |
| Coordonnées, texte de disponibilité | `src/pages/Contact.jsx` (tableau `contacts`) |
| Signature bas de page | `src/components/Footer.jsx` |
| Titre onglet, meta description, balises og: | `index.html` |
| Image d'aperçu LinkedIn/WhatsApp | `public/og-image.jpg` (1200×630, générée avec Pillow) |
| CV téléchargeable | `public/CV_Sadam_Soufiani.pdf` |

## Procédure de mise à jour (nouveau CV)
1. Lire le nouveau CV, comparer section par section avec les fichiers ci-dessus
2. Mettre à jour les fichiers + remplacer `public/CV_Sadam_Soufiani.pdf`
3. Si le titre change : mettre à jour index.html (title, description, og:) + régénérer og-image.jpg
4. grep des termes obsolètes sur toutes les pages (cf. lessons.md)
5. `npm run build` → validation Sadam → commit + `git push origin main`
6. Vercel redéploie automatiquement depuis `main` (~30 s) ; vérifier le <title> en ligne

## Stack
- React + Vite, Tailwind CSS v4 (`@tailwindcss/vite`, pas de tailwind.config.js), Framer Motion, React Router v6
- Déploiement : Vercel, auto-deploy sur push `main` — **Live : https://portfolio-sadam.vercel.app**
- Repo : https://github.com/sadam269/portfolio-sadam
- `vercel.json` : rewrite SPA vers index.html (une URL inconnue renvoie 200 → page NotFound.jsx côté React)

## Architecture
```
portfolio-sadam/
├── index.html              ← title, meta, og:, Google Fonts en <link>
├── vercel.json             ← rewrite SPA
├── public/                 ← favicon.svg, og-image.jpg, CV_Sadam_Soufiani.pdf
├── src/
│   ├── App.jsx             ← BrowserRouter, 4 routes + 404 (*)
│   ├── index.css           ← tokens CSS (:root) + reset
│   ├── assets/             ← profile.webp, logo-soinaa.webp, logo-bahati.webp
│   ├── data/projects.js    ← données projets
│   ├── components/         ← Navbar.jsx, Footer.jsx
│   └── pages/              ← Home, About, Projects, Contact, NotFound
└── tasks/                  ← context, todo, lessons
```

## Design system (validé)
- Serif Playfair Display (titres) · Source Sans 3 (texte) · IBM Plex Mono (labels)
- Tokens dans `src/index.css` : --bg #FAFAF8, --bg-muted #F5F3F0, --fg #1A1A1A, --fg-muted #6B6B6B, --accent #B8860B (or), --accent-light #D4A84B, --border #E8E4DF, --card #FFFFFF
- Styles inline dans les composants (choix historique pour fiabilité du rendu)
- Navbar fond plein dès le départ (pas transparent)
- Formulaire contact → `mailto:` (pas de backend)

## Pistes futures
- Version anglaise (candidatures internationales)
- Pré-rendu pour le référencement Google (seulement si besoin réel)
- Captures d'écran des projets

## Décisions irréversibles
- Stack React + Vite
- Déploiement statique (Vercel)
- Structure 4 pages
- Tailwind v4 avec @tailwindcss/vite

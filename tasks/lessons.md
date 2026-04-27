# Lessons learned

Format : [YYYY-MM-DD] | CE QUI A MAL TOURNÉ | RÈGLE POUR L'ÉVITER

---

[2026-04-27] | Google Fonts via @import dans index.css bloque le parsing Tailwind v4 | Toujours mettre Google Fonts en <link> dans index.html, jamais dans le CSS quand on utilise @tailwindcss/vite

[2026-04-27] | Navbar transparent au départ = contenu page visuellement superposé avec la nav | Toujours donner un fond blanc à la navbar dès le départ, ne pas partir sur transparent même si "effet scroll" prévu

[2026-04-27] | bg-white + border-slate-100 sur fond blanc = cartes invisibles | Pour les cartes sur fond blanc, utiliser border-slate-200 minimum + box-shadow visible, ou changer le fond section en slate-50

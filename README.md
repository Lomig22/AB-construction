# 🏗️ AB Construction Rénovation Brest - Site Web

Site web moderne et professionnel pour AB Construction Rénovation, entreprise artisanale de maçonnerie, peinture et rénovation complète basée à Brest.

## 📋 Vue d'ensemble

Site vitrine haut de gamme conçu pour convertir les visiteurs en clients. Design moderne, responsive et optimisé pour l'expérience utilisateur.

### ✨ Caractéristiques principales

- **Design moderne et immersif** avec animations subtiles
- **100% Responsive** : desktop, tablette, mobile
- **Navigation intuitive** avec menu hamburger mobile
- **Formulaire multi-étapes** pour demande de devis
- **Galeries avant/après** interactives
- **Sections témoignages** avec slider
- **Palettes de couleurs** pour inspiration peinture
- **FAQ interactive** avec accordéon
- **Optimisé SEO** avec méta-tags appropriés
- **Performance optimisée** avec lazy loading

## 📁 Structure du projet

```
AB-construction-main/
├── index.html              # Page d'accueil
├── maconnerie.html         # Page Maçonnerie
├── peinture.html           # Page Peinture
├── theme-dancy.html        # Page Thème Dancy
├── contact.html            # Page Contact/Devis
├── css/
│   ├── style.css          # Styles principaux
│   └── pages.css          # Styles pages internes
├── js/
│   └── main.js            # JavaScript principal
└── README.md              # Documentation
```

## 🎨 Pages du site

### 1. **Page d'accueil** (`index.html`)
- Hero section avec vidéo/image de fond
- Statistiques clés (15+ ans, 500+ projets, 98% satisfaction)
- Section "Pourquoi nous choisir" (6 avantages)
- Présentation des 3 services principaux
- Galerie de réalisations avec filtres
- Témoignages clients avec slider
- Call-to-action pour devis gratuit

### 2. **Page Maçonnerie** (`maconnerie.html`)
- Introduction détaillée du service
- 6 sous-services (construction, rénovation, joints, extensions, etc.)
- Processus en 4 étapes
- Galerie de réalisations
- Section garanties (décennale, normes, délais, matériaux)

### 3. **Page Peinture** (`peinture.html`)
- Présentation des services de peinture
- 6 spécialités (intérieure, extérieure, boiseries, effets déco, etc.)
- Palette de 8 couleurs tendances
- Section avant/après avec comparaisons
- Processus de réalisation
- Garanties et certifications

### 4. **Page Thème Dancy** (`theme-dancy.html`)
- Concept de rénovation thématique sur-mesure
- 6 styles d'ambiances (industriel, scandinave, contemporain, etc.)
- Processus en 5 étapes (rencontre, conception, sélection, réalisation, mise en scène)
- Portfolio de créations
- Témoignages clients spécifiques

### 5. **Page Contact** (`contact.html`)
- Informations de contact complètes
- Formulaire de devis multi-étapes (3 étapes)
- Carte interactive de la zone d'intervention
- FAQ avec 8 questions fréquentes
- Horaires et zones desservies

## 🎯 Fonctionnalités JavaScript

### Navigation
- Menu hamburger responsive
- Effet scroll sur la navbar (transparente → opaque)
- Smooth scrolling vers les ancres
- Lien actif selon la section visible

### Interactions
- Slider avant/après interactif (drag & drop)
- Carousel de témoignages automatique avec contrôles
- Filtres de galerie avec animations
- Formulaire multi-étapes avec progression
- FAQ accordéon
- Bouton CTA flottant avec apparition au scroll
- Animations à l'apparition des éléments (Intersection Observer)

### Formulaires
- Validation des champs requis
- Gestion multi-étapes avec barre de progression
- Message de confirmation après soumission
- Gestion des erreurs

## 🎨 Design & Styles

### Palette de couleurs
- **Primary:** `#D4A574` (Beige doré)
- **Secondary:** `#2C3E50` (Bleu nuit)
- **Accent:** `#E74C3C` (Rouge)
- **Neutrals:** Blanc, Gris clair, Noir

### Typographie
- **Titres:** Playfair Display (serif élégant)
- **Corps:** Montserrat (sans-serif moderne)
- Hiérarchie claire et lisible

### Espacements
- Système cohérent de spacing (0.5rem à 6rem)
- Marges et paddings harmonieux
- Sections bien aérées

## 📱 Responsive Design

### Breakpoints
- **Desktop:** > 1024px
- **Tablette:** 768px - 1024px
- **Mobile:** < 768px
- **Small mobile:** < 480px

### Adaptations mobiles
- Navigation hamburger
- Grilles en colonne unique
- Images optimisées
- Boutons pleine largeur
- Timeline verticale simplifiée
- Formulaires adaptatifs

## 🚀 Optimisations

### Performance
- Lazy loading des images
- Animations GPU-accelerated
- Transitions CSS optimisées
- Code JavaScript vanilla (pas de frameworks lourds)
- Fichiers CSS organisés et minifiables

### SEO
- Structure HTML sémantique
- Méta-descriptions sur chaque page
- Balises alt sur toutes les images
- Hiérarchie de titres H1-H6 correcte
- URLs propres et descriptives
- Schema markup ready

### Accessibilité
- Contraste des couleurs conforme WCAG
- Labels sur tous les formulaires
- Navigation au clavier
- Attributs ARIA appropriés
- Focus visible

## 🔧 Installation & Utilisation

### Prérequis
Aucun ! Le site utilise uniquement HTML, CSS et JavaScript vanilla.

### Lancement local
1. Clonez ou téléchargez le repository
2. Ouvrez `index.html` dans votre navigateur
3. Ou utilisez un serveur local :
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Avec Node.js
   npx http-server
   ```
4. Accédez à `http://localhost:8000`

### Déploiement
Le site peut être déployé sur n'importe quel hébergement web :
- GitHub Pages
- Netlify
- Vercel
- Hébergeur traditionnel (OVH, O2Switch, etc.)

Simplement uploader tous les fichiers via FTP ou Git.

## 📝 Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `css/style.css` :
```css
:root {
    --primary-color: #D4A574;
    --secondary-color: #2C3E50;
    /* ... */
}
```

### Modifier le contenu
- Textes : directement dans les fichiers HTML
- Images : remplacer les URLs Unsplash par vos propres images
- Contact : mettre à jour téléphone, email, adresse

### Ajouter une page
1. Créer un nouveau fichier HTML
2. Copier la structure d'une page existante
3. Ajouter le lien dans la navigation
4. Mettre à jour le footer

## 🌟 Fonctionnalités avancées

### Intégrations possibles
- **Analytics:** Google Analytics, Matomo
- **CRM:** Formulaire vers Mailchimp, HubSpot
- **Chat:** Intégration Tawk.to, Crisp
- **Maps:** Google Maps API (déjà intégré)
- **Booking:** Calendly pour prise de RDV
- **Paiement:** Stripe pour acomptes en ligne

### Backend (optionnel)
Pour un site dynamique complet, ajouter :
- Node.js + Express pour l'API
- Base de données (MongoDB, PostgreSQL)
- Gestion admin pour les réalisations
- Système d'envoi d'emails automatique
- Upload de photos clients

## 📞 Support & Contact

Pour toute question sur ce projet web :
- **Email:** contact@ab-construction-brest.fr
- **Téléphone:** 02 98 00 00 00

## 📄 Licence

© 2026 AB Construction Rénovation Brest. Tous droits réservés.

---

## 🎯 Objectifs atteints

✅ Design haut de gamme et professionnel  
✅ Navigation intuitive et fluide  
✅ Responsive complet (mobile/tablette/desktop)  
✅ Formulaire de devis multi-étapes  
✅ Galeries avant/après interactives  
✅ Sections témoignages dynamiques  
✅ Optimisation SEO de base  
✅ Animations et micro-interactions  
✅ FAQ interactive  
✅ Zone d'intervention avec carte  
✅ CTA à chaque étape du parcours  
✅ Preuves sociales et garanties  

## 🚀 Prochaines étapes recommandées

1. **Remplacer les images placeholder** par de vraies photos de chantiers
2. **Configurer Google Analytics** pour suivre le trafic
3. **Connecter le formulaire** à un service d'emailing
4. **Optimiser les images** (compression, formats WebP)
5. **Ajouter un blog** pour le référencement naturel
6. **Mettre en place un système de gestion** des témoignages
7. **Créer des landing pages** spécifiques par service
8. **Ajouter des vidéos** de présentation et de chantiers

---

**Développé avec ❤️ pour AB Construction Rénovation Brest**

# 💍 Invitation de Mariage — Abdoul Aziz & Kadidiata

Site web d'invitation de mariage musulman, élégant, animé et pensé **mobile-first** pour offrir une expérience sur smartphone (iPhone, Android) et sur grand écran.

---

## 🌟 Caractéristiques du Projet

- **Ouverture interactive 3D** : Enveloppe crème et or scellée par un cachet de cire doré gravé « A & K », avec rabat animé et émergence de la lettre au clic.
- **Direction artistique soignée** : Fond crème lumineux, touches d'or (#C9A227), typographies nobles (*Pinyon Script*, *Bodoni Moda*, *Cinzel*, *Jost*), ornementations royales et verset coranique (Sourate Ar-Roum, 30, 21).
- **100% Modifiable** : Tous les textes, dates, liens, familles, programme, dress code et contacts sont réunis dans l'objet `CONFIG` en tête du fichier `script.js`.
- **Technologies natives** : HTML5 sémantique, CSS3 moderne et JavaScript natif — sans framework, sans dépendances, ultra-rapide.
- **Fonctionnalités incluses** :
  - Compte à rebours dynamique jusqu'au 20 décembre 2026 à 09h00 (heure de Bamako).
  - Générateur d'événement calendrier standard (.ics) pour Apple Calendar, Google Calendar et Outlook.
  - Itinéraire direct vers Google Maps (`https://maps.app.goo.gl/E4fRV92Nnu2j5933A`).
  - Confirmation de présence (RSVP) par WhatsApp avec message pré-rempli et bouton d'appel direct (+223 91 06 38 83).
  - Galerie photos avec modale plein écran (lightbox accessible).
  - Balises Open Graph optimisées pour un aperçu avec photo et description sur WhatsApp.

---

## 📁 Structure des Fichiers

```text
invitation-mariage-aziz-kadidiata/
├── index.html       # Structure HTML5 & balises Open Graph
├── style.css        # Styles responsive, animations 3D & thèmes
├── script.js        # Objet CONFIG, compte à rebours & interactions
├── .gitignore       # Fichiers exclus du dépôt Git
├── README.md        # Documentation du projet
└── photos/          # Dossier des photos optimisées
    ├── couple.jpg   # Photo officielle des mariés (médaillon)
    ├── photo-2.jpg  # Photo galerie 1
    ├── photo-3.jpg  # Photo galerie 2
    ├── photo-4.jpg  # Photo galerie 3
    ├── photo-5.jpg  # Photo galerie 4
    └── photo-6.jpg  # Photo galerie 5
```

---

## ✏️ Personnalisation Rapide (`script.js`)

Tous les contenus modifiables sont dans l'objet `CONFIG` au tout début de `script.js` :

```javascript
const CONFIG = {
  groom: { name: "Abdoul Aziz", fullName: "Abdoul Aziz Traoré" },
  bride: { name: "Kadidiata", fullName: "Kadidiata Sogoré" },
  eventDateISO: "2026-12-20T09:00:00Z",
  eventDateFormatted: "Dimanche 20 Décembre 2026",
  eventTimeFormatted: "à 09h00",
  location: {
    mapsUrl: "https://maps.app.goo.gl/E4fRV92Nnu2j5933A"
  },
  whatsapp: {
    phoneNumber: "+22391063883",
    displayNumber: "+223 91 06 38 83",
    message: "Bonjour, je confirme ma présence au mariage d'Abdoul Aziz & Kadidiata."
  },
  hashtag: "#AzizEtKadidiata2026", // Laissez vide "" pour masquer
  rsvpDeadline: "10 décembre 2026", // Laissez vide "" pour masquer
  ...
};
```

---

## 🚀 Déploiement sur Vercel via GitHub

1. Créez un dépôt vide sur [GitHub](https://github.com/new) nommé `invitation-mariage` (sans cocher README, .gitignore ni licence).
2. Poussez votre code local vers GitHub :
   ```bash
   git remote add origin https://github.com/VOTRE_PSEUDO/invitation-mariage.git
   git branch -M main
   git push -u origin main
   ```
3. Connectez-vous sur [Vercel](https://vercel.com) et cliquez sur **Add New...** > **Project**.
4. Importez le dépôt `invitation-mariage`.
5. Dans les paramètres de projet :
   - **Framework Preset** : `Other`
   - **Root Directory** : `./` (laisser par défaut)
   - **Build and Output Settings** : Aucun build requis (laisser vide)
6. Cliquez sur **Deploy** : votre site est en ligne en quelques secondes !

---

## 🔄 Mises à Jour Futures

Pour modifier un texte ou une photo à tout moment :
1. Modifiez les fichiers en local.
2. Publiez les changements :
   ```bash
   git add .
   git commit -m "Mise à jour des informations"
   git push
   ```
3. Vercel détecte le push et redéploie automatiquement le site en ~15 secondes.

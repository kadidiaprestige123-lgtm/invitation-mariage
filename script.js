/**
 * ==============================================================================
 * SCRIPT.JS — INVITATION DE MARIAGE D'ABDOUL AZIZ & KADIDIATA
 * ==============================================================================
 * Tous les textes, dates, contacts et options sont modifiables ci-dessous dans
 * l'objet CONFIG. Modifiez facilement les valeurs sans toucher au reste du code.
 * ==============================================================================
 */

// ==============================================================================
// 1. CONFIGURATION GLOBALE DU FAIRE-PART (MODIFIABLE ICI)
// ==============================================================================
const CONFIG = {
  // Prénoms et identité des mariés
  groom: {
    name: "Abdoul Aziz",
    fullName: "Abdoul Aziz Traoré",
    family: "Famille Traoré"
  },
  bride: {
    name: "Kadidiata",
    fullName: "Kadidiata Sogoré",
    family: "Famille Sogoré"
  },
  initials: "A & K",

  // Date et heure de l'événement
  // Note : Bamako est sur le fuseau horaire UTC/GMT (Z)
  eventDateISO: "2026-12-20T09:00:00Z",
  eventDateFormatted: "Dimanche 20 Décembre 2026",
  eventTimeFormatted: "à 09h00",
  eventCity: "Lafiabougou, Bamako, Mali",

  // Verset coranique
  verse: {
    arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    text: "« Et parmi Ses signes, Il a créé pour vous des épouses parmi vous, afin que vous trouviez auprès d'elles tranquillité et Il a mis entre vous de l'amour et de la miséricorde. »",
    reference: "Sourate Ar-Roum, 30, 21"
  },

  // Phrases et formules solennelles
  invitationPhrase: "Nous avons la joie de vous inviter à notre mariage",
  closingFormula: "« Qu'Allah bénisse notre union et fasse de notre foyer un havre de paix et de bonheur. »",

  // Lieu de la célébration
  location: {
    title: "Lafiabougou, Bamako",
    subtitle: "Célébration dans les familles respectives des mariés",
    // Lien direct Google Maps (modifiez ce lien pour changer la localisation)
    mapsUrl: "https://maps.app.goo.gl/E4fRV92Nnu2j5933A"
  },

  // Coordonnées des familles (Optionnel : laissez vide pour masquer)
  familyTraore: {
    name: "Famille Traoré",
    badge: "Côté Marié",
    address: "Lafiabougou, Bamako",
    landmark: "Repère : Non loin de la mosquée de Lafiabougou"
  },
  familySogore: {
    name: "Famille Sogoré",
    badge: "Côté Mariée",
    address: "Lafiabougou, Bamako",
    landmark: "Repère : Côté marché de Lafiabougou"
  },

  // Contact et confirmation (RSVP)
  whatsapp: {
    phoneNumber: "+22391063883",
    displayNumber: "+223 91 06 38 83",
    message: "Bonjour, je confirme ma présence au mariage d'Abdoul Aziz & Kadidiata."
  },
  // Date limite pour répondre (Optionnel : laissez vide "" pour masquer)
  rsvpDeadline: "10 décembre 2026",

  // Hashtag du mariage (Optionnel : laissez vide "" pour masquer)
  hashtag: "#AzizEtKadidiata2026",

  // Dress code et palette de couleurs suggérées
  dressCode: {
    instruction: "Pour célébrer ce moment en harmonie, nous vous invitons à vous parer de vos plus beaux habits traditionnels ou de soirée dans ces teintes :",
    colors: [
      { name: "Or Royal", hex: "#C9A227" },
      { name: "Vert Sauge", hex: "#8A9A86" },
      { name: "Blanc Cassé", hex: "#F7F3EB" }
    ]
  },

  // Le programme de la journée
  // Laissez le tableau vide [] pour masquer la section Programme
  program: [
    {
      time: "09h00",
      title: "Célébration Religieuse",
      description: "Fatiha & Bénédictions de l'union dans la pure tradition et le recueillement."
    },
    {
      time: "13h30",
      title: "Déjeuner & Réception Familiale",
      description: "Partage d'un repas convivial et chaleureux en compagnie de nos proches."
    },
    {
      time: "16h30",
      title: "Félicitations & Réjouissances",
      description: "Moments de festivités, prises de photos souvenirs et échanges de vœux."
    }
  ],

  // Notre histoire / Frise chronologique
  // Laissez le tableau vide [] pour masquer la section Histoire
  story: [
    {
      date: "2023",
      title: "La Rencontre",
      description: "Une étincelle, des valeurs partagées et le début d'une complicité sincère sous le regard bienveillant du destin."
    },
    {
      date: "2025",
      title: "Les Fiançailles",
      description: "L'officialisation de nos sentiments et l'accord chaleureux de nos deux familles unies dans la joie."
    },
    {
      date: "20 Décembre 2026",
      title: "Notre Mariage",
      description: "Le début officiel de notre vie à deux par la grâce d'Allah, entourés de notre famille et de nos amis."
    }
  ],

  // Photos de la galerie
  // Remplaçables facilement par vos propres photos dans le dossier /photos
  gallery: [
    { src: "photos/couple.jpg", caption: "Abdoul Aziz & Kadidiata" },
    { src: "photos/photo-2.jpg", caption: "Regards partagés" },
    { src: "photos/photo-3.jpg", caption: "Complicité et tendresse" },
    { src: "photos/photo-4.jpg", caption: "Vers un avenir commun" },
    { src: "photos/photo-5.jpg", caption: "Un pas de plus ensemble" },
    { src: "photos/photo-6.jpg", caption: "Amour et sérénité" }
  ]
};


// ==============================================================================
// 2. INITIALISATION ET INJECTION DES DONNÉES DE CONFIG
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initDOMContent();
  initEnvelopeInteraction();
  initCountdown();
  initCalendarGenerator();
  initGallery();
  initStoryTimeline();
  initProgramList();
  initDressCodePalette();
  initLocationAndFamilies();
  initRSVPLinks();
  initScrollAnimations();
});

/**
 * Remplit les éléments textuels principaux à partir de CONFIG
 */
function initDOMContent() {
  // Prénoms du Hero
  const groomEl = document.getElementById("groomName");
  const brideEl = document.getElementById("brideName");
  if (groomEl) groomEl.textContent = CONFIG.groom.name;
  if (brideEl) brideEl.textContent = CONFIG.bride.name;

  // Verset coranique
  const verseTextEl = document.getElementById("verseText");
  const verseRefEl = document.getElementById("verseRef");
  if (verseTextEl) verseTextEl.textContent = CONFIG.verse.text;
  if (verseRefEl) verseRefEl.textContent = CONFIG.verse.reference;

  // Phrase d'invitation
  const invitationPhraseEl = document.getElementById("invitationPhrase");
  if (invitationPhraseEl) invitationPhraseEl.textContent = CONFIG.invitationPhrase;

  // Date et heure
  const dateEl = document.getElementById("eventDateFormatted");
  const timeEl = document.getElementById("eventTimeFormatted");
  const cityEl = document.getElementById("eventCityFormatted");
  if (dateEl) dateEl.textContent = CONFIG.eventDateFormatted;
  if (timeEl) timeEl.textContent = CONFIG.eventTimeFormatted;
  if (cityEl) cityEl.textContent = CONFIG.eventCity;

  // Formule de clôture
  const closingEl = document.getElementById("closingFormula");
  if (closingEl) closingEl.textContent = CONFIG.closingFormula;

  // Hashtag
  const hashtagWrapper = document.getElementById("footerHashtagWrapper");
  const hashtagLink = document.getElementById("footerHashtagLink");
  if (hashtagWrapper && hashtagLink) {
    if (CONFIG.hashtag && CONFIG.hashtag.trim() !== "") {
      hashtagLink.textContent = CONFIG.hashtag;
      hashtagLink.href = `https://www.instagram.com/explore/tags/${encodeURIComponent(CONFIG.hashtag.replace('#', ''))}/`;
    } else {
      hashtagWrapper.style.display = "none";
    }
  }

  // Date limite RSVP
  const rsvpDeadlineContainer = document.getElementById("rsvpDeadlineContainer");
  const rsvpDeadlineText = document.getElementById("rsvpDeadlineText");
  if (rsvpDeadlineContainer && rsvpDeadlineText) {
    if (CONFIG.rsvpDeadline && CONFIG.rsvpDeadline.trim() !== "") {
      rsvpDeadlineText.textContent = CONFIG.rsvpDeadline;
    } else {
      rsvpDeadlineContainer.style.display = "none";
    }
  }
}


// ==============================================================================
// 3. INTERACTION DE L'ENVELOPPE (OUVERTURE 3D ET TRANSITION)
// ==============================================================================
function initEnvelopeInteraction() {
  const envelopeScreen = document.getElementById("envelope-screen");
  const envelopeContainer = document.getElementById("envelopeContainer");
  const waxSeal = document.getElementById("openInvitationBtn");
  const openTextBtn = document.getElementById("openInvitationTextBtn");
  const mainContent = document.getElementById("main-content");
  const reopenBtn = document.getElementById("reopenEnvelopeBtn");

  if (!envelopeScreen || !mainContent) return;

  function openEnvelope() {
    if (envelopeContainer) {
      envelopeContainer.classList.add("opening");
    }

    // Temporisation fluide pour laisser l'animation 3D du rabat et de la lettre se jouer
    setTimeout(() => {
      mainContent.classList.remove("is-hidden");
      envelopeScreen.classList.add("is-opened");

      // Révèle les premiers éléments du Hero
      triggerInitialHeroReveals();

      // Mémorise dans la session que l'invitation a été ouverte
      try {
        sessionStorage.setItem("invitation_opened", "true");
      } catch (e) {
        // En cas de navigation privée stricte
      }
    }, 750);
  }

  // Clic sur le cachet de cire ou sur le bouton
  if (waxSeal) waxSeal.addEventListener("click", openEnvelope);
  if (openTextBtn) openTextBtn.addEventListener("click", openEnvelope);

  // Vérification de l'URL pour ouverture directe en test/débogage (?opened=true)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("opened") === "true") {
      mainContent.classList.remove("is-hidden");
      envelopeScreen.classList.add("is-opened");
      triggerInitialHeroReveals();
    }
  } catch(e) {}

  // Bouton pour réafficher l'enveloppe à tout moment
  if (reopenBtn) {
    reopenBtn.addEventListener("click", () => {
      if (envelopeContainer) envelopeContainer.classList.remove("opening");
      envelopeScreen.classList.remove("is-opened");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/**
 * Force la révélation des éléments du haut de page dès l'ouverture
 */
function triggerInitialHeroReveals() {
  const heroReveals = document.querySelectorAll("#accueil .reveal-item");
  heroReveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("is-revealed");
    }, 120 * index);
  });
}


// ==============================================================================
// 4. COMPTE À REBOURS DYNAMIQUE
// ==============================================================================
function initCountdown() {
  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minutesEl = document.getElementById("cdMinutes");
  const secondsEl = document.getElementById("cdSeconds");
  const countdownWrapper = document.getElementById("countdownWrapper");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(CONFIG.eventDateISO).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      const heading = countdownWrapper.querySelector(".countdown-heading");
      if (heading) heading.textContent = "Le grand jour est arrivé !";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? `0${days}` : days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}


// ==============================================================================
// 5. GÉNÉRATION DE FICHIER CALENDRIER (.ICS) POUR APPLE/GOOGLE/OUTLOOK
// ==============================================================================
function initCalendarGenerator() {
  const calendarBtn = document.getElementById("addToCalendarBtn");
  if (!calendarBtn) return;

  calendarBtn.addEventListener("click", () => {
    // Événement du 20/12/2026 de 09h00 à 19h00 UTC
    const icsEvent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mariage Abdoul Aziz & Kadidiata//FR",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:mariage-aziz-kadidiata-20261220@bamako",
      "DTSTAMP:20261220T000000Z",
      "DTSTART:20261220T090000Z",
      "DTEND:20261220T190000Z",
      `SUMMARY:Mariage de ${CONFIG.groom.name} & ${CONFIG.bride.name}`,
      `DESCRIPTION:Célébration du mariage de ${CONFIG.groom.fullName} & ${CONFIG.bride.fullName}. ${CONFIG.closingFormula}`,
      `LOCATION:${CONFIG.location.title}, ${CONFIG.eventCity}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsEvent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "mariage-abdoul-aziz-et-kadidiata.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


// ==============================================================================
// 6. NOTRE HISTOIRE (TIMELINE DYNAMIQUE)
// ==============================================================================
function initStoryTimeline() {
  const storySection = document.getElementById("histoire");
  const timelineContainer = document.getElementById("storyTimeline");

  if (!storySection || !timelineContainer) return;

  // Si le tableau d'histoire est vide, masquer la section
  if (!CONFIG.story || CONFIG.story.length === 0) {
    storySection.style.display = "none";
    return;
  }

  timelineContainer.innerHTML = "";

  CONFIG.story.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = "timeline-item reveal-item";

    itemEl.innerHTML = `
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-card">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `;

    timelineContainer.appendChild(itemEl);
  });
}


// ==============================================================================
// 7. GALERIE DE PHOTOS ET MODALE LIGHTBOX
// ==============================================================================
function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  if (!galleryGrid || !CONFIG.gallery || CONFIG.gallery.length === 0) return;

  galleryGrid.innerHTML = "";

  CONFIG.gallery.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card reveal-item";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Agrandir la photo : ${photo.caption}`);

    card.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption}" loading="lazy" width="400" height="500" onerror="this.src='photos/couple.jpg'">
      <div class="gallery-overlay" aria-hidden="true">
        <span>Agrandir</span>
      </div>
    `;

    // Clic pour ouvrir la lightbox
    const openInLightbox = () => {
      if (lightboxImg && lightboxCaption && lightboxModal) {
        lightboxImg.src = photo.src;
        lightboxImg.alt = photo.caption;
        lightboxCaption.textContent = photo.caption;
        lightboxModal.removeAttribute("hidden");
        document.body.style.overflow = "hidden";
      }
    };

    card.addEventListener("click", openInLightbox);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openInLightbox();
      }
    });

    galleryGrid.appendChild(card);
  });

  // Fermeture de la lightbox
  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.setAttribute("hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal && !lightboxModal.hasAttribute("hidden")) {
      closeLightbox();
    }
  });
}


// ==============================================================================
// 8. LE PROGRAMME DE LA JOURNÉE
// ==============================================================================
function initProgramList() {
  const programSection = document.getElementById("programme");
  const programContainer = document.getElementById("programList");

  if (!programSection || !programContainer) return;

  // Si le tableau est vide, masque la section
  if (!CONFIG.program || CONFIG.program.length === 0) {
    programSection.style.display = "none";
    return;
  }

  programContainer.innerHTML = "";

  CONFIG.program.forEach((item) => {
    const card = document.createElement("div");
    card.className = "program-card reveal-item";

    card.innerHTML = `
      <div class="program-time-badge">${item.time}</div>
      <div class="program-details">
        <h3 class="program-event-title">${item.title}</h3>
        <p class="program-event-desc">${item.description}</p>
      </div>
    `;

    programContainer.appendChild(card);
  });
}


// ==============================================================================
// 9. LIEU, ITINÉRAIRE ET FAMILLES
// ==============================================================================
function initLocationAndFamilies() {
  // Titre et sous-titre
  const locTitle = document.getElementById("locationTitle");
  const locSub = document.getElementById("locationSubtitle");
  const mapsBtn = document.getElementById("mapsButton");

  if (locTitle) locTitle.textContent = CONFIG.location.title;
  if (locSub) locSub.textContent = CONFIG.location.subtitle;

  // Bouton Google Maps direct dans un nouvel onglet
  if (mapsBtn && CONFIG.location.mapsUrl) {
    mapsBtn.href = CONFIG.location.mapsUrl;
  }

  // Blocs Famille Traoré & Sogoré
  const cardTraore = document.getElementById("cardFamilyTraore");
  const cardSogore = document.getElementById("cardFamilySogore");
  const familiesContainer = document.getElementById("familiesContainer");

  let hasTraore = false;
  let hasSogore = false;

  if (CONFIG.familyTraore && CONFIG.familyTraore.name && cardTraore) {
    document.getElementById("family1Name").textContent = CONFIG.familyTraore.name;
    document.getElementById("family1Address").textContent = CONFIG.familyTraore.address;
    document.getElementById("family1Landmark").textContent = CONFIG.familyTraore.landmark;
    hasTraore = true;
  } else if (cardTraore) {
    cardTraore.style.display = "none";
  }

  if (CONFIG.familySogore && CONFIG.familySogore.name && cardSogore) {
    document.getElementById("family2Name").textContent = CONFIG.familySogore.name;
    document.getElementById("family2Address").textContent = CONFIG.familySogore.address;
    document.getElementById("family2Landmark").textContent = CONFIG.familySogore.landmark;
    hasSogore = true;
  } else if (cardSogore) {
    cardSogore.style.display = "none";
  }

  if (!hasTraore && !hasSogore && familiesContainer) {
    familiesContainer.style.display = "none";
  }
}


// ==============================================================================
// 10. DRESS CODE & PALETTE DE COULEURS
// ==============================================================================
function initDressCodePalette() {
  const dressSection = document.getElementById("tenue");
  const instructionEl = document.getElementById("dresscodeInstruction");
  const paletteEl = document.getElementById("colorPalette");

  if (!dressSection || !paletteEl) return;

  if (!CONFIG.dressCode || !CONFIG.dressCode.colors || CONFIG.dressCode.colors.length === 0) {
    dressSection.style.display = "none";
    return;
  }

  if (instructionEl && CONFIG.dressCode.instruction) {
    instructionEl.textContent = CONFIG.dressCode.instruction;
  }

  paletteEl.innerHTML = "";

  CONFIG.dressCode.colors.forEach((c) => {
    const swatch = document.createElement("div");
    swatch.className = "color-swatch-item";

    swatch.innerHTML = `
      <div class="color-circle" style="background-color: ${c.hex};" title="${c.name} (${c.hex})" aria-label="${c.name}"></div>
      <span class="color-swatch-name">${c.name}</span>
      <span class="color-swatch-hex">${c.hex}</span>
    `;

    paletteEl.appendChild(swatch);
  });
}


// ==============================================================================
// 11. CONFIRMATION DE PRÉSENCE (WHATSAPP ET APPEL TÉLÉPHONIQUE)
// ==============================================================================
function initRSVPLinks() {
  const whatsappBtn = document.getElementById("whatsappButton");
  const callBtn = document.getElementById("callButton");
  const callLabel = document.getElementById("callButtonLabel");

  if (!CONFIG.whatsapp) return;

  const rawPhone = CONFIG.whatsapp.phoneNumber.replace(/[^\d+]/g, "");
  const cleanPhoneForWa = rawPhone.replace("+", "");

  // Lien WhatsApp officiel avec message pré-rempli
  if (whatsappBtn) {
    const encodedMsg = encodeURIComponent(CONFIG.whatsapp.message);
    whatsappBtn.href = `https://wa.me/${cleanPhoneForWa}?text=${encodedMsg}`;
  }

  // Bouton Appel direct
  if (callBtn) {
    callBtn.href = `tel:${rawPhone}`;
    if (callLabel && CONFIG.whatsapp.displayNumber) {
      callLabel.textContent = `Appeler (${CONFIG.whatsapp.displayNumber})`;
    }
  }
}


// ==============================================================================
// 12. ANIMATIONS AU DÉFILEMENT (SCROLL REVEAL & ACCESSIBILITÉ)
// ==============================================================================
function initScrollAnimations() {
  // Si l'utilisateur a demandé à réduire les mouvements
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.querySelectorAll(".reveal-item").forEach((el) => {
      el.classList.add("is-revealed");
    });
    return;
  }

  // Découpage dynamique des titres de section pour une apparition mot par mot
  const titlesToSplit = document.querySelectorAll(".section-title");
  titlesToSplit.forEach((title) => {
    const text = title.textContent.trim();
    if (!text || title.children.length > 0) return;

    const words = text.split(" ");
    title.innerHTML = words
      .map((word, i) => `<span class="word-span" style="transition-delay: ${i * 0.08}s">${word}</span>`)
      .join(" ");
  });

  // IntersectionObserver pour déclencher l'apparition douce
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  document.querySelectorAll(".reveal-item").forEach((el) => {
    observer.observe(el);
  });
}

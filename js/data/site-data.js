// Contenus Ã©ditoriaux, images et listes du site.
const image = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

const edition2024Photos = Array.from({ length: 62 }, (_, index) => {
  const number = index + 1;
  const label = String(number).padStart(2, "0");

  return [
    `Souvenir FISD 2024 - ${label}`,
    `assets/images/edition-2024/${number}.jpg`,
    "Moment capture lors de l'edition 2024 du FISD a Montreal."
  ];
});

const edition2025Photos = Array.from({ length: 82 }, (_, index) => {
  const number = index + 1;
  const label = String(number).padStart(2, "0");

  return [
    `Souvenir FISD 2025 - ${label}`,
    `assets/images/edition-2025/${number}.jpg`,
    "Moment capture lors de l'edition 2025 du FISD a Montreal."
  ];
});

const siteData = {
  slides: [
    {
      image: "assets/images/slider-groupe.jpg",
      kicker: "Prochaine édition du FISD",
      title: "Édition 2026 : rendez-vous à Montréal",
      text: "Les 26, 27 et 28 novembre 2026, le Forum International Solidarité et Développement revient au Centre Mont-Royal pour 3 jours d'immersion, de rencontres et de retombées stratégiques.",
      place: "Centre Mont-Royal - 2200 rue Mansfield, Montréal"
    },
    {
      image: "assets/images/slider-panel-large.jpg",
      kicker: "26, 27 et 28 novembre 2026",
      title: "Connecter les acteurs d'ici et d'ailleurs",
      text: "Institutions, diasporas, entrepreneurs, partenaires et acteurs du développement international se retrouveront à Montréal autour d'une vision commune.",
      place: "Montréal, Canada"
    },
    {
      image: "assets/images/slider-panel-podium.jpeg",
      kicker: "Lieu de l'événement",
      title: "Centre Mont-Royal, au coeur de Montréal",
      text: "Adresse : 2200 rue Mansfield, Montréal. Un espace central pour favoriser les panels, les rencontres ciblées, le réseautage et les activités post-forum.",
      place: "FISD 2026"
    }
  ],
  pillars: [
    {
      title: "Un espace de concertations",
      text: "Un lieu de dialogue stratégique entre acteurs du développement international, diasporas, ONG et représentants publics.",
      image: "assets/images/fisd-est-concertation.jpg",
      icon: "01"
    },
    {
      title: "Un cadre de plaidoyer et d'actions citoyennes",
      text: "Une plateforme qui met en avant les enjeux sociaux, économiques et humains afin de porter une voix collective.",
      image: "assets/images/fisd-est-visibilite.jpg",
      icon: "02"
    },
    {
      title: "Un espace de visibilité et de réseautage",
      text: "Un environnement propice aux rencontres, aux opportunités et à la mise en valeur des initiatives à fort impact.",
      image: "assets/images/fisd-est-plaidoyer.jpg",
      icon: "03"
    }
  ],
  participants: [
    ["Associations", "Diaspora africaine, haïtienne et communautaire.", "AS"],
    ["ONG", "Organismes du secteur du développement international.", "ON"],
    ["Universitaires", "Québécois, Canadiens et autres acteurs dans le monde.", "UN"],
    ["Entrepreneurs", "Québécois, Canadiens et membres de la diaspora africaine et haïtienne.", "EN"],
    ["Diplomates", "Du Canada et des pays de l'Afrique de l'Ouest francophone.", "DI"],
    ["Pouvoirs publics", "Ministres, députés, élus locaux et leurs représentants.", "PP"]
  ],
  speakers: [
    {
      name: "Mahamat Tochi Chidi",
      role: "Sénateur du Tchad, rapporteur 2e adjoint de la commission Défense, Sécurité et Souveraineté",
      image: "assets/images/intervenants/mahamat-tochi-chidi.jpg",
      description: "Panéliste du FISD 2025, sénateur du Tchad."
    },
    {
      name: "Bénie Kouyaté",
      role: "Présidente de Bénie Foundation Inc.",
      image: "assets/images/intervenants/benie-kouyate.jpg",
      description: "Panéliste du FISD 2025, présentée comme présidente de Bénie Foundation Inc."
    },
    {
      name: "Hawa Barry Diallo",
      role: "Présidente de Guinean Women Development",
      image: "assets/images/intervenants/hawa-barry-diallo.jpg",
      description: "Panéliste du FISD 2025, présentée comme présidente de Guinean Women Development."
    },
    {
      name: "Pr. François Audet",
      role: "Directeur de l'Observatoire canadien sur les crises et l'action humanitaires (OCCAH)",
      image: "assets/images/intervenants/francois-audet.jpg",
      description: "Panéliste du FISD 2025 et directeur de l'OCCAH."
    },
    {
      name: "Catherine Cauchon",
      role: "Directrice des programmes / Terre Sans Frontières",
      image: "assets/images/intervenants/catherine-cauchon.jpg",
      description: "Panéliste du FISD 2025, directrice des programmes chez Terre Sans Frontières."
    },
    {
      name: "Alpha Touré",
      role: "Président du comité administratif de Jeunes Solidaires",
      image: "assets/images/intervenants/alpha-toure.jpg",
      description: "Président du FISD 2025 et président du comité administratif de Jeunes Solidaires."
    },
    {
      name: "M. Seydou Togola",
      role: "Directeur pays / Terre Sans Frontières - Mali",
      image: "assets/images/intervenants/seydou-togola.jpg",
      description: "Panéliste du FISD 2025, directeur pays pour Terre Sans Frontières au Mali."
    },
    {
      name: "M. Sansy Kaba Diakité",
      role: "Directeur de L'Harmattan Guinée et président-fondateur du Lions Club Conakry Bate",
      image: "assets/images/intervenants/sansy-kaba-diakite.jpg",
      description: "Panéliste du FISD 2025, directeur de L'Harmattan Guinée et président-fondateur du Lions Club Conakry Bate."
    },
    {
      name: "Mme Pauline Effa",
      role: "Vice-présidente du Forum International de l'Économie Sociale et Solidaire",
      image: "assets/images/intervenants/pauline-effa.jpg",
      description: "Panéliste du FISD 2025, vice-présidente du Forum International de l'Économie Sociale et Solidaire et cofondatrice du FORAESS."
    },
    {
      name: "Dr. Paubert T. Mahatante",
      role: "Ministre de la Pêche et de l'Économie bleue de Madagascar",
      image: "assets/images/intervenants/paubert-mahatante.jpg",
      description: "Panéliste du FISD 2025, ministre de la Pêche et de l'Économie bleue de Madagascar."
    },
    {
      name: "Mme Michèle Asselin",
      role: "Directrice générale - AQOCI",
      image: "assets/images/intervenants/michele-asselin.jpg",
      description: "Panéliste du FISD 2025, directrice générale de l'AQOCI."
    },
    {
      name: "M. Michel Filion, Ph.D.",
      role: "Spécialiste des politiques et des finances publiques",
      image: "assets/images/intervenants/michel-filion.jpg",
      description: "Panéliste du FISD 2025, spécialiste des politiques et des finances publiques."
    },
    {
      name: "Bigsoul 224",
      role: "Créateur de contenu",
      image: "assets/images/intervenants/bigsoul-224.jpg",
      description: "Panéliste du FISD 2025 et créateur de contenu."
    },
    {
      name: "Sénateur Abdallah Darkallah Sidi",
      role: "Rapporteur 1er adjoint à la commission des Affaires étrangères et des Tchadiens de l'étranger / Sénat du Tchad",
      image: "assets/images/intervenants/abdallah-darkallah-sidi.jpg",
      description: "Panéliste du FISD 2025, sénateur et rapporteur 1er adjoint au Sénat du Tchad."
    }
  ],
  partners: [
    { name: "Ville de Montréal", logo: "assets/logos/partenaires/montreal.jpg" },
    { name: "Gouvernement du Québec", logo: "assets/logos/partenaires/quebec.png" },
    { name: "FISIQ", logo: "assets/logos/partenaires/fisiq.png" },
    { name: "CECI", logo: "assets/logos/partenaires/ceci.png" },
    { name: "Educonnexion", logo: "assets/logos/partenaires/educonnexion.png" },
    { name: "Village Monde", logo: "assets/logos/partenaires/village-monde.png" },
    { name: "SUCO", logo: "assets/logos/partenaires/suco.png" },
    { name: "Terre Sans Frontières", logo: "assets/logos/partenaires/terre-sans-frontieres.png" },
    { name: "Coopération Canada", logo: "assets/logos/partenaires/cooperation-canada.png" },
    { name: "AQOCI", logo: "assets/logos/partenaires/aqoci.png" },
    { name: "AEOC", logo: "assets/logos/partenaires/aeoc.png" },
    { name: "UQAM IEIM", logo: "assets/logos/partenaires/uqam-ieim.png" },
    { name: "Ad Alefa Diaspora", logo: "assets/logos/partenaires/ad-alefa-diaspora.png" },
    { name: "Espace Afrique", logo: "assets/logos/partenaires/espace-afrique.png" },
    { name: "ComDev Africa", logo: "assets/logos/partenaires/comdev-africa.png" },
    { name: "Guinean Women Development Foundation", logo: "assets/logos/partenaires/guinean-women.png" }
  ],
  actions: [
    {
      title: "Devenir partenaire",
      text: "Associer votre organisation au FISD et construire une collaboration visible, durable et utile.",
      icon: "PT",
      link: "https://docs.google.com/forms/d/1wj2F1RXTcSjzTfX-KGPXceh_wCg-hfQ3LZ5prZvRlxw/viewform?edit_requested=true",
      cta: "Remplir le formulaire partenaire",
      detail: "Pour les institutions, organisations, entreprises ou structures qui souhaitent soutenir le forum."
    },
    {
      title: "Prendre un stand",
      text: "Presenter vos initiatives, projets, produits ou services dans un espace dedie pendant le forum.",
      icon: "ST",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSep06rVkgrzSKk0sCVjhix5B0cRHw_wkrbdQvxIbagHcf4zxA/viewform",
      cta: "Demander un stand",
      detail: "Pour les exposants qui veulent rencontrer le public, les partenaires et les participants."
    },
    {
      title: "Devenir benevole",
      text: "Contribuer a l'accueil, a l'organisation et au bon deroulement des activites du FISD.",
      icon: "BV",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdOfyKT8_KsmNQYFPWtLFssvd-Yb9d6iKAu7hOPC6kC07qcJQ/viewform",
      cta: "Rejoindre l'equipe benevole",
      detail: "Pour les personnes qui veulent donner du temps et participer concretement a l'evenement."
    }
  ],
  programs: [
    {
      id: "2025",
      badge: "Édition 2025",
      title: "Programme officiel de l'édition 2025",
      text: "Préparez-vous à vivre 2 jours d'immersion transformative, suivis d'activités post-forum exclusives, conçues pour maximiser les retombées stratégiques de votre participation au FISD. La prochaine édition se tiendra les 5 et 6 décembre 2025 à Montréal, au Canada.",
      days: [
        {
          id: "j1",
          label: "Jour 1",
          date: "Vendredi 5 décembre 2025",
          schedule: [
            ["08h00 - 09h00", "Accueil et enregistrement des invités", "Accueil", "Accueil des participants, enregistrement des invités et orientation sur le site du forum.", "Hall principal"],
            ["09h00", "Cérémonie d'ouverture", "Ouverture", "Lancement officiel de l'édition 2025 du FISD.", "Salle principale"],
            ["Matin", "Panel 1", "Panel", "Premier panel de réflexion et d'échanges autour des grands enjeux du forum.", "Salle principale"],
            ["Midi", "Pause déjeuner", "Pause", "Temps de repas, d'échange libre et de réseautage entre participants.", "Espace restauration"],
            ["Après-midi", "Panel 2", "Panel", "Deuxième panel de la journée avec les intervenants et parties prenantes du forum.", "Salle principale"],
            ["Après-midi", "Ateliers thématiques", "Atelier", "Sessions de travail en groupes autour des thèmes stratégiques du FISD.", "Salles ateliers"],
            ["Fin de journée", "FISD Connect", "Réseautage", "Moment de mise en relation entre participants, partenaires, organisations et exposants.", "Espace réseautage"],
            ["En continu", "Animation des stands", "Exposition", "Animation des stands des entreprises, organismes du secteur du développement international, municipalités et autres exposants.", "Espace exposants"]
          ]
        },
        {
          id: "j2",
          label: "Jour 2",
          date: "Samedi 6 décembre 2025",
          schedule: [
            ["08h00 - 09h00", "Accueil et enregistrement des invités", "Accueil", "Accueil des participants et enregistrement des invités pour la deuxième journée du forum.", "Hall principal"],
            ["Matin", "Connexion solidaire : ONG internationales et diasporas", "Rencontre", "Moment d'échange entre ONG internationales, diasporas et acteurs du développement.", "Salle principale"],
            ["Matin", "Panel 3", "Panel", "Troisième panel de l'édition 2025 du FISD.", "Salle principale"],
            ["Midi", "Pause déjeuner", "Pause", "Temps de repas, d'échange libre et de réseautage.", "Espace restauration"],
            ["Après-midi", "Keynote", "Conférence", "Intervention principale autour des enjeux de solidarité, de coopération et de développement.", "Salle principale"],
            ["Après-midi", "Panel 4", "Panel", "Quatrième panel de discussion avec les intervenants invités.", "Salle principale"],
            ["Après-midi", "Ateliers thématiques", "Atelier", "Sessions participatives autour des thèmes majeurs du forum.", "Salles ateliers"],
            ["Fin de journée", "Présentation des exposants et remerciements des partenaires", "Présentation", "Mise en valeur des exposants et reconnaissance des partenaires du FISD.", "Salle principale"],
            ["Fin de journée", "Cérémonie de clôture", "Clôture", "Clôture officielle de l'édition 2025 du FISD.", "Salle principale"]
          ]
        },
        {
          id: "marge",
          label: "Activités en marge du FISD",
          date: "Du 13 au 15 décembre 2025",
          schedule: [
            ["Sur rendez-vous", "Visites institutionnelles", "Visite", "Visites prévues pour les dignitaires internationaux qui prendront part au FISD et certains participants, notamment maires, députés et ministres.", "Ottawa, Montréal et Québec"],
            ["Visite 1", "Parlement du Canada", "Institutionnel", "Rencontre et visite institutionnelle.", "Ottawa"],
            ["Visite 2", "Ministère canadien", "Institutionnel", "Visite à confirmer.", "Canada"],
            ["Visite 3", "Ambassade africaine à Ottawa", "Institutionnel", "Visite à confirmer.", "Ottawa"],
            ["Visite 4", "Ville de Montréal", "Institutionnel", "Rencontre avec les acteurs municipaux.", "Montréal"],
            ["Visite 5", "Municipalités au Québec", "Institutionnel", "Visites à confirmer.", "Québec"],
            ["Sur mesure", "Réseautage ciblé", "Réseautage", "Mise en relation ciblée selon les profils et objectifs des participants.", "À confirmer"],
            ["Sur mesure", "Agendas sur mesure", "Accompagnement", "Organisation d'agendas personnalisés pour maximiser les retombées de la participation.", "À confirmer"],
            ["Optionnel", "Visites touristiques", "Découverte", "Activités de découverte et visites touristiques.", "Montréal et environs"]
          ]
        }
      ]
    },
    {
      id: "2026",
      badge: "Édition 2026",
      title: "Rendez-vous à Montréal",
      text: "L'édition 2026 du FISD se déroulera les 26, 27 et 28 novembre 2026 à Montréal, au Canada. Préparez-vous à vivre 3 jours d'immersion transformative, suivis d'activités post-forum exclusives, conçues pour maximiser les retombées stratégiques de votre participation au FISD. Adresse : Centre Mont-Royal - 2200 rue Mansfield, Montréal.",
      days: [
        {
          id: "avenir",
          label: "À venir",
          date: "26, 27 et 28 novembre 2026",
          schedule: [
            ["À venir", "Programme en préparation", "Information", "Le programme détaillé de l'édition 2026 sera communiqué prochainement.", "À confirmer"]
          ]
        }
      ]
    }
  ],
  previousEvents: [
    {
      id: "2024",
      year: "Édition 2024",
      title: "Rencontres et collaborations",
      text: "Une édition orientée vers les initiatives citoyennes.",
      photos: edition2024Photos
    },
    {
      id: "2025",
      year: "Édition 2025",
      title: "Moments forts du forum",
      text: "Panels, conférences, rencontres institutionnelles et échanges.",
      photos: edition2025Photos
    },
    {
      id: "2026",
      year: "Édition 2026",
      title: "À venir",
      text: "Les souvenirs de l'édition 2026 seront ajoutés ici après l'événement.",
      statusTitle: "À venir",
      statusText: "Les photos et moments forts de l'édition 2026 seront publiés ici dès qu'ils seront disponibles.",
      photos: []
    }
  ],
  testimonials: [
    ["Marie Veillette", "Caravane Philanthrope", "Merci infiniment aux organisatrices et organisateurs de ce forum ! Quel bel événement rempli d’apprentissage et d’échanges enrichissants. Pour un organisme comme le nôtre Caravane Philanthrope qui vise des pratiques éthiques en coopération internationale, ce genre de moment est vraiment précieux. J’espère que ce ne sera pas le dernier et que d’autres occasions comme celle-ci continueront d’inspirer et de rassembler. Chapeau pour votre merveilleuse organisation."],
    ["Benie Kouyate", "Participante", "Je suis particulièrement reconnaissante d'avoir eu l'opportunité de partager mes idées et d'échanger avec des participants aussi passionnés et engagés. Je vous remercie également pour l'accueil chaleureux et l'organisation remarquable de cet événement. Je suis convaincue que le FISD continuera à jouer un rôle crucial dans la promotion de la solidarité et du développement à l'échelle internationale."],
    ["Valérie Phaneuf", "Participante", "Merci pour cette belle opportunité de mettre de l'avant des entrepreneurs sociaux et de discuter de grands enjeux de coopération internationale ! Quel bel événement ! Merci à tous les organisateurs et participants ! Merci Alpha Touré pour l'invitation !"]
  ],
  news: [],
  contacts: [
    {
      title: "Téléphone",
      text: "Appelez l'équipe du FISD pour une question, une collaboration ou une information pratique.",
      value: "+1 514 974 - 1455",
      href: "tel:+15149741455",
      cta: "Appeler"
    },
    {
      title: "WhatsApp",
      text: "Écrivez-nous directement sur WhatsApp pour un échange rapide.",
      value: "+1 514 974 - 1455",
      href: "https://wa.me/15149741455",
      cta: "Ouvrir WhatsApp",
      external: true
    },
    {
      title: "Courriel",
      text: "Pour les demandes officielles, les partenariats et les informations générales.",
      value: "info@fisd.ca",
      href: "mailto:info@fisd.ca",
      cta: "Envoyer un courriel"
    }
  ],
  reservationTypes: ["Participant", "Partenaire", "Invité", "Exposant", "Bénévole"]
};

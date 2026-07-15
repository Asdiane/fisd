// Synchronise le contenu Supabase avec la structure attendue par les pages.
(function () {
  function mapArticle(article) {
    return {
      id: String(article.id),
      title: article.title || "",
      description: article.excerpt || article.content || "",
      content: article.content || "",
      imageUrl: article.image_url || "",
      status: article.status === "draft" ? "Brouillon" : "Publié",
      createdAt: article.published_at || article.created_at || "",
    };
  }

  function mapContact(contact) {
    const descriptions = {
      phone: "Appelez l'équipe du FISD pour une question, une collaboration ou une information pratique.",
      whatsapp: "Écrivez-nous directement sur WhatsApp pour un échange rapide.",
      email: "Pour les demandes officielles, les partenariats et les informations générales.",
    };
    const ctas = {
      phone: "Appeler",
      whatsapp: "Ouvrir WhatsApp",
      email: "Envoyer un courriel",
    };

    return {
      title: contact.label || "Contact",
      text: descriptions[contact.type] || "Contactez l'équipe du FISD.",
      value: contact.value || "",
      href: contact.href || "#",
      cta: ctas[contact.type] || "Nous joindre",
      external: contact.type === "whatsapp",
    };
  }

  function mapTestimonial(testimonial) {
    return [
      testimonial.author_name || "",
      testimonial.author_role || "Participant(e)",
      testimonial.content || "",
    ];
  }

  function mapSouvenir(souvenir, photos) {
    const year = String(souvenir.year);
    const isComingSoon = souvenir.status === "coming_soon";

    return {
      id: year,
      year: `Édition ${year}`,
      title: souvenir.title || `Édition ${year}`,
      text: souvenir.description || "",
      statusTitle: isComingSoon ? "À venir" : "",
      statusText: isComingSoon
        ? "Les souvenirs de cette édition seront publiés ici dès qu'ils seront disponibles."
        : "",
      photos: isComingSoon
        ? []
        : photos.map((photo, index) => [
            photo.caption || `Souvenir FISD ${year} - photo ${index + 1}`,
            photo.image_url,
            photo.caption || `Moment capturé lors de l'édition ${year} du FISD.`,
          ]),
    };
  }

  async function hydrateSiteDataFromDatabase() {
    if (
      typeof siteData === "undefined" ||
      !window.fisdDatabase ||
      !window.fisdDatabase.isEnabled()
    ) {
      return false;
    }

    try {
      const [articles, contacts, souvenirs, testimonials] = await Promise.all([
        window.fisdDatabase.articles(),
        window.fisdDatabase.contacts(),
        window.fisdDatabase.souvenirs(),
        window.fisdDatabase.testimonials(),
      ]);

      if (Array.isArray(articles)) {
        siteData.news = articles.map(mapArticle);
      }

      if (Array.isArray(contacts) && contacts.length > 0) {
        siteData.contacts = contacts.map(mapContact);
      }

      if (Array.isArray(testimonials) && testimonials.length > 0) {
        siteData.testimonials = testimonials.map(mapTestimonial);
      }

      if (Array.isArray(souvenirs) && souvenirs.length > 0) {
        const events = [];

        for (const souvenir of souvenirs) {
          const photos = await window.fisdDatabase.souvenirPhotos(souvenir.id);
          events.push(mapSouvenir(souvenir, Array.isArray(photos) ? photos : []));
        }

        siteData.previousEvents = events;

        if (typeof state !== "undefined") {
          const selectedEdition = siteData.previousEvents.find(
            (event) => event.id === state.galleryEdition
          );

          if (!selectedEdition) {
            state.galleryEdition = siteData.previousEvents[0]
              ? siteData.previousEvents[0].id
              : "2026";
            state.galleryPhoto = 0;
          }
        }
      }

      return true;
    } catch (error) {
      console.warn("Chargement Supabase impossible, contenu local conservé.", error);
      return false;
    }
  }

  window.hydrateSiteDataFromDatabase = hydrateSiteDataFromDatabase;
})();

// Delegation des evenements: un seul point d'entree pour les boutons du site.
function registerAppEvents() {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("submit", handleDocumentSubmit, true);

  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function handleDocumentClick(event) {
  const ticketButton = event.target.closest("[data-ticket-url]");
  if (ticketButton) {
    window.open(ticketButton.dataset.ticketUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const contactMailButton = event.target.closest("[data-contact-mail]");
  if (contactMailButton) {
    event.preventDefault();
    const email = contactMailButton.dataset.contactMail;
    if (email) window.location.href = `mailto:${email}`;
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    setPage(pageButton.dataset.page);
    return;
  }

  const slideButton = event.target.closest("[data-slide]");
  if (slideButton) {
    state.slide = Number(slideButton.dataset.slide);
    render();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    state.action = Number(actionButton.dataset.action);
    render();
    return;
  }

  const editionButton = event.target.closest("[data-edition]");
  if (editionButton) {
    state.edition = editionButton.dataset.edition;
    const edition = siteData.programs.find((item) => item.id === state.edition);
    if (edition && edition.days.length) {
      state.day = edition.days[0].id;
    }
    render();
    return;
  }

  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    state.day = dayButton.dataset.day;
    render();
    return;
  }

  const galleryEditionButton = event.target.closest("[data-gallery-edition]");
  if (galleryEditionButton) {
    state.galleryEdition = galleryEditionButton.dataset.galleryEdition;
    state.galleryPhoto = 0;
    render();
    return;
  }

  const galleryPhotoButton = event.target.closest("[data-gallery-photo]");
  if (galleryPhotoButton) {
    const photoIndex = Number(galleryPhotoButton.dataset.galleryPhoto);
    if (typeof updateGalleryPhoto === "function") {
      updateGalleryPhoto(photoIndex);
    } else {
      state.galleryPhoto = photoIndex;
      render();
    }
    return;
  }

  const speakerButton = event.target.closest("[data-speaker-index]");
  if (speakerButton) {
    state.speaker = Number(speakerButton.dataset.speakerIndex);
    render();
    return;
  }

  if (event.target.closest("[data-speaker-prev]")) {
    state.speaker = (state.speaker - 1 + siteData.speakers.length) % siteData.speakers.length;
    render();
    return;
  }

  if (event.target.closest("[data-speaker-next]")) {
    state.speaker = (state.speaker + 1) % siteData.speakers.length;
    render();
    return;
  }

  const partnerButton = event.target.closest("[data-partner-index]");
  if (partnerButton) {
    state.partner = Number(partnerButton.dataset.partnerIndex);
    render();
  }
}

function handleDocumentSubmit(event) {
  if (event.target.id === "contact-form") {
    event.preventDefault();
    window.location.href = "mailto:info@fisd.ca";
  }
}

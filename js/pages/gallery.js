// Page Souvenirs.
function renderGalleryPhotoContent(photo, edition) {
  return `
    <img src="${photo[1]}" alt="${escapeHtml(photo[0])}">
    <div class="gallery-caption">
      <p class="eyebrow">${edition.year}</p>
      <h2>${edition.title}</h2>
      <p>${edition.text}</p>
    </div>
  `;
}

function updateGalleryPhoto(index) {
  const edition = siteData.previousEvents.find((item) => item.id === state.galleryEdition) || siteData.previousEvents[0];
  const photos = Array.isArray(edition.photos) ? edition.photos : [];
  const photo = photos[index];

  if (!photo) {
    return;
  }

  state.galleryPhoto = index;

  const galleryPhoto = document.querySelector(".gallery-photo");
  if (galleryPhoto) {
    galleryPhoto.classList.remove("is-upcoming");
    galleryPhoto.innerHTML = renderGalleryPhotoContent(photo, edition);
  }

  document.querySelectorAll("[data-gallery-photo]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.galleryPhoto) === index);
  });
}

function renderGalerie() {
  const edition = siteData.previousEvents.find((item) => item.id === state.galleryEdition) || siteData.previousEvents[0];
  const photos = Array.isArray(edition.photos) ? edition.photos : [];
  const photo = photos[state.galleryPhoto] || photos[0];
  const hasPhotos = Boolean(photo);
  const statusTitle = edition.statusTitle || "À venir";
  const statusText = edition.statusText || "Les souvenirs de cette édition seront publiés ici dès qu'ils seront disponibles.";
  return `
    ${pageHero("Souvenirs", "Parcourir les éditions précédentes du FISD", "Sélectionnez une édition, puis parcourez les photos associées pour revivre les moments forts du forum.")}
    <section class="section">
      <div class="section-inner">
        ${sectionTitle("Souvenirs des éditions précédentes", "Une galerie organisée par édition", "Chaque édition peut contenir plusieurs photos et témoignages.")}
        <div class="edition-tabs">
          ${siteData.previousEvents.map((item) => `
            <button class="edition-btn ${item.id === state.galleryEdition ? "active" : ""}" type="button" data-gallery-edition="${item.id}">${item.year}</button>
          `).join("")}
        </div>
        <div class="gallery-layout">
          <div class="gallery-main">
            <div class="gallery-photo ${hasPhotos ? "" : "is-upcoming"}">
              ${hasPhotos ? renderGalleryPhotoContent(photo, edition) : `
                <div class="gallery-upcoming">
                  <p class="eyebrow">${edition.year}</p>
                  <h2>${escapeHtml(statusTitle)}</h2>
                  <p>${escapeHtml(statusText)}</p>
                </div>
              `}
            </div>
          </div>
          <aside class="form-card">
            <p class="eyebrow">${edition.year}</p>
            <h3>${edition.title}</h3>
            <p>${edition.text}</p>
            ${hasPhotos ? `
              <div class="thumb-grid">
                ${photos.map((item, index) => `
                  <button class="thumb-card ${index === state.galleryPhoto ? "active" : ""}" type="button" data-gallery-photo="${index}">
                    <img src="${item[1]}" alt="${escapeHtml(item[0])}">
                  </button>
                `).join("")}
              </div>
            ` : `
              <div class="gallery-upcoming-note">
                <p class="eyebrow">${escapeHtml(statusTitle)}</p>
                <p>${escapeHtml(statusText)}</p>
              </div>
            `}
          </aside>
        </div>
      </div>
    </section>
    <section class="section white">
      <div class="section-inner">
        ${sectionTitle("Témoignages", "Ce que disent les participants du FISD")}
        <div class="card-grid">
          ${siteData.testimonials.map(([name, role, quote]) => `
            <article class="news-card">
              <p class="eyebrow">Témoignage</p>
              <p>${quote}</p>
              <h3>${name}</h3>
              <p>${role}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

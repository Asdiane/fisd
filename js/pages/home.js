// Page d'accueil.
function renderHome() {
  const slide = siteData.slides[state.slide];
  return `
    <section class="hero">
      ${siteData.slides.map((item, index) => `
        <div class="slide ${index === state.slide ? "active" : ""}">
          <img src="${item.image}" alt="${escapeHtml(item.title)}">
        </div>
      `).join("")}
      <div class="hero-content">
        <div>
          <div class="hero-meta">
            <span>${slide.kicker}</span>
            <span>${slide.place}</span>
          </div>
          <h1>${slide.title}</h1>
          <p>${slide.text}</p>
          <div class="hero-actions">
            <button class="secondary-btn" type="button" data-page="programmation">Découvrir le FISD</button>
            <button class="ghost-btn" type="button" data-page="galerie">Voir les éditions précédentes</button>
          </div>
        </div>
      </div>
      <div class="slider-dots">
        ${siteData.slides.map((_, index) => `
          <button class="${index === state.slide ? "active" : ""}" type="button" data-slide="${index}" aria-label="Slide ${index + 1}"></button>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-inner presentation-grid">
        <div class="copy-block">
          ${sectionTitle("Présentation du FISD", "Un rendez-vous annuel au service de la solidarité et du développement")}
          <p>Le Forum International Solidarité et Développement (FISD) réunit les acteurs clés du développement international, les pouvoirs publics, les organismes du secteur et les diasporas africaines et haïtiennes.</p>
          <p>Le FISD constitue un cadre ouvert et inclusif, conçu pour stimuler les échanges constructifs, favoriser une collaboration efficace et nourrir une pensée critique.</p>
          <p>Son ambition est de générer un impact social et économique accru grâce à une démarche d'amélioration continue.</p>
        </div>
        <div class="blue-panel">
          <div class="hero-logo panel-logo"><img src="assets/logos/logo-fisd.png" alt="Logo FISD"></div>
          <h3>Catalyser les synergies et amplifier l'impact</h3>
          <p>Le FISD se veut un moyen puissant de mobilisation sociale et de sensibilisation, incluant les acteurs du développement international et le public.</p>
          <span class="tag">Initiative de Jeunes Solidaires Canada</span>
        </div>
      </div>
    </section>

    <section class="section white">
      <div class="section-inner">
        ${sectionTitle("Le FISD est...", "Trois dimensions fortes mises en avant visuellement")}
        <div class="card-grid">
          ${siteData.pillars.map((item) => `
            <article class="card">
              <div class="card-media">
                <img src="${item.image}" alt="${escapeHtml(item.title)}">
                <span class="icon-badge">${item.icon}</span>
              </div>
              <div class="card-body">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        ${sectionTitle("Les participants", "Les participants attendus lors du forum")}
        <div class="participants-grid">
          ${siteData.participants.map(([title, text, icon]) => `
            <article class="participant">
              <span class="mini-icon">${icon}</span>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section white">
      <div class="section-inner">
        ${sectionTitle("Quelques personnalités", "Des intervenants de l'édition du FISD", "Les intervenants de l'édition 2025 sont affichés avec leurs noms et fonctions.")}
        ${renderSpeakers()}
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        ${sectionTitle("Partenaires", "Un réseau de partenaires engagés autour du FISD", "La section met en avant les partenaires du forum avec une rotation dynamique et une galerie de logos.")}
        ${renderPartners()}
      </div>
    </section>
  `;
}

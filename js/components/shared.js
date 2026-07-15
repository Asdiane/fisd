// Composants HTML rÃ©utilisables par plusieurs pages.
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function sectionTitle(eyebrow, title, description = "", light = false) {
  return `
    <div class="section-title ${light ? "light" : ""}">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${description ? `<p>${description}</p>` : ""}
    </div>
  `;
}

function pageHero(eyebrow, title, description) {
  return `
    <section class="page-hero">
      <div class="section-inner">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </section>
  `;
}

function renderPartners() {
  return `
    <div class="partners-wall">
      <div class="partners-grid">
        ${siteData.partners.map((partner, index) => `
          <button class="partner-logo-card ${index === state.partner ? "active" : ""}" type="button" data-partner-index="${index}">
            <img src="${partner.logo}" alt="${escapeHtml(partner.name)}">
            <span>${partner.name}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderSpeakers() {
  const speaker = siteData.speakers[state.speaker] || siteData.speakers[0];

  return `
    <div class="speaker-feature">
      <div class="speaker-feature-media">
        <img src="${speaker.image}" alt="${escapeHtml(speaker.name)}">
      </div>
      <div class="speaker-feature-content">
        <p class="eyebrow">Intervenant en vedette</p>
        <h3>${speaker.name}</h3>
        <p class="speaker-role">${speaker.role}</p>
        <p>${speaker.description}</p>
        <div class="speaker-controls">
          <button type="button" data-speaker-prev>Précédent</button>
          <span>${state.speaker + 1} / ${siteData.speakers.length}</span>
          <button type="button" data-speaker-next>Suivant</button>
        </div>
      </div>
    </div>

    <div class="speakers-gallery">
      ${siteData.speakers.map((item, index) => `
        <button class="speaker-card ${index === state.speaker ? "active" : ""}" type="button" data-speaker-index="${index}">
          <img src="${item.image}" alt="${escapeHtml(item.name)}">
          <div class="speaker-card-body">
            <h3>${item.name}</h3>
            <p>${item.role}</p>
          </div>
        </button>
      `).join("")}
    </div>
  `;
}

function fieldTemplate(label, type = "input", full = false) {
  return `
    <div class="field ${full ? "full" : ""}">
      <label>${label}</label>
      ${type === "textarea" ? `<textarea rows="5" placeholder="${label}"></textarea>` : `<input type="text" placeholder="${label}">`}
    </div>
  `;
}

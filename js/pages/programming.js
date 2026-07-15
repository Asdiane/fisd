// Page Programmation.
function renderProgrammation() {
  const edition = siteData.programs.find((item) => item.id === state.edition) || siteData.programs[0];
  const day = edition.days.find((item) => item.id === state.day) || edition.days[0];
  return `
    ${pageHero("Programmation", "Choisissez une édition et consultez le programme détaillé", "Une page de programmation claire avec les heures, les panels, les conférences et le déroulement de chaque journée.")}
    <section class="section">
      <div class="section-inner">
        ${sectionTitle("Programme du forum", "Une programmation claire avec sélection d'édition", "Le visiteur peut choisir une édition, puis consulter les journées et les horaires.")}
        <div class="program-visual">
          <img src="assets/images/programme-fisd.jpeg" alt="Panel du Forum International Solidarité et Développement">
        </div>
        <div class="edition-tabs">
          ${siteData.programs.map((program) => `
            <button class="edition-btn ${program.id === state.edition ? "active" : ""}" type="button" data-edition="${program.id}">${program.badge}</button>
          `).join("")}
        </div>
        <div class="program-layout">
          <aside class="form-card">
            <p class="eyebrow">${edition.badge}</p>
            <h3>${edition.title}</h3>
            <p>${edition.text}</p>
            <div class="day-list">
              ${edition.days.map((item) => `
                <button class="day-btn ${item.id === day.id ? "active" : ""}" type="button" data-day="${item.id}">
                  <span><strong>${item.label}</strong><br><small>${item.date}</small></span>
                  <span>${item.schedule.length} activités</span>
                </button>
              `).join("")}
            </div>
          </aside>
          <div class="form-card">
            <p class="eyebrow">${edition.badge}</p>
            <h3>${day.label}</h3>
            <p>${day.date}</p>
            <div class="schedule-list">
              ${day.schedule.map(([time, title, type, description, location]) => `
                <article class="schedule-item">
                  <div class="time">${time}</div>
                  <div>
                    <h3>${title}<span class="type">${type}</span></h3>
                    <p>${description}</p>
                    <small>Lieu : ${location}</small>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

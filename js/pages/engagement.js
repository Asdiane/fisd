// Page Agir avec nous.
function renderAgir() {
  const engagementSteps = [
    ["1", "Choisissez votre role", "Selectionnez le formulaire qui correspond a votre participation."],
    ["2", "Remplissez le formulaire", "Les demandes arrivent directement a l'equipe du FISD."],
    ["3", "Notre equipe vous recontacte", "Un suivi est fait pour confirmer les prochaines etapes."]
  ];

  return `
    ${pageHero("Agir avec nous", "Passez de visiteur a acteur engage du FISD", "Cette page regroupe les differentes facons de participer activement au forum.")}
    <section class="section white">
      <div class="section-inner engage-intro">
        <div class="engage-intro-media">
          <img src="assets/images/agir-avec-nous.jpg" alt="Rencontre avec des partenaires du FISD">
        </div>
        <div class="engage-intro-copy">
          <p class="eyebrow">N'hesitez plus!</p>
          <h2>Choisissez la bonne facon de participer au Forum International Solidarite et Developpement</h2>
          <p>Partenariat, stand ou benevolat: chaque parcours dispose maintenant de son formulaire dedie pour simplifier le suivi avec l'equipe du FISD.</p>
          <div class="engage-highlights">
            <span>Partenaires</span>
            <span>Exposants</span>
            <span>Benevoles</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        ${sectionTitle("S'impliquer", "Trois parcours clairs pour agir avec nous", "Choisissez l'option qui correspond a votre besoin. Le formulaire s'ouvrira dans un nouvel onglet.")}
        <div class="engage-workspace">
          <div class="action-list action-link-list">
            ${siteData.actions.map((action) => `
              <article class="action-card action-link-card">
                <span class="mini-icon">${action.icon}</span>
                <h3>${action.title}</h3>
                <p>${action.text}</p>
                <p class="action-detail">${action.detail}</p>
                <a class="primary-btn action-cta" href="${action.link}" target="_blank" rel="noopener noreferrer">${action.cta}</a>
              </article>
            `).join("")}
          </div>
          <div class="form-card engage-form-card engage-guide-card">
            <p class="eyebrow">Comment ca marche</p>
            <h3>Un chemin simple, sans formulaire en double</h3>
            <p>Pour eviter les demandes perdues, chaque bouton renvoie directement au formulaire officiel correspondant.</p>
            <div class="engage-steps">
              ${engagementSteps.map(([number, title, text]) => `
                <div class="engage-step">
                  <span>${number}</span>
                  <div>
                    <h4>${title}</h4>
                    <p>${text}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section white">
      <div class="section-inner">
        ${sectionTitle("Nos partenaires", "Ils accompagnent la dynamique du FISD", "Retrouvez les institutions et organisations qui soutiennent la portee du forum.")}
        ${renderPartners()}
      </div>
    </section>
  `;
}

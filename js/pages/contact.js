// Page Contacts.
function renderContact() {
  return `
    ${pageHero("Contacts", "Contacter l'equipe du FISD", "Telephone, WhatsApp ou courriel : choisissez le canal le plus simple pour vos questions, partenariats et informations pratiques.")}
    <section class="section">
      <div class="section-inner">
        ${sectionTitle("Nous joindre", "Coordonnees officielles", "Les informations ci-dessous sont les points de contact officiels du Forum International Solidarite et Developpement.")}
        <div class="two-col" style="margin-top:44px">
          <div class="form-card">
            <h3>Ecrivez-nous</h3>
            <p class="contact-intro">Votre message sera adresse a l'equipe FISD via info@fisd.ca.</p>
            <form id="contact-form" class="form-grid" action="mailto:info@fisd.ca" method="post" enctype="text/plain" novalidate>
              ${fieldTemplate("Nom complet")}
              ${fieldTemplate("Adresse e-mail")}
              ${fieldTemplate("Message", "textarea", true)}
              <button class="primary-btn" type="submit" data-contact-mail="info@fisd.ca">Envoyer un courriel</button>
            </form>
          </div>
          <div class="news-list contact-list">
            ${siteData.contacts.map((contact) => `
              <article class="news-card contact-card">
                <h3>${contact.title}</h3>
                <p>${contact.text}</p>
                <p class="contact-value">${contact.value}</p>
                <a class="secondary-btn contact-link" href="${contact.href}" ${contact.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${contact.cta}</a>
              </article>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

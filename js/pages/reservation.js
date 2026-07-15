// Pages RÃ©servation et Conditions gÃ©nÃ©rales.
function renderReservation() {
  return `
    ${pageHero("Réserver une place", "Acheter votre ticket", "Le nombre de personnes pouvant participer au Forum International Solidarité et Développement (FISD) étant limité, prenez action, inscrivez-vous.")}
    <section class="section">
      <div class="section-inner">
        <div class="reservation-layout">
          <div class="ticket-card">
            <p class="eyebrow">Billetterie FISD 2026</p>
            <h2>Acheter votre ticket</h2>
            <div class="upcoming-edition">
              <span>Prochaine édition</span>
              <strong>FISD 2026 - 26, 27 et 28 novembre 2026</strong>
              <small>Centre Mont-Royal - 2200 rue Mansfield, Montréal</small>
              <button type="button" data-ticket-url="https://www.zeffy.com/fr-CA/ticketing/forum-international-solidarite-et-developpement-fisd--2026">Lien de réservation Zeffy</button>
            </div>
            <p>Le nombre de personnes pouvant participer au Forum International Solidarité et Développement (FISD) étant limité, prenez action, inscrivez-vous.</p>
            <p class="ticket-note">
              En poursuivant votre achat, vous reconnaissez avoir lu les
              <button type="button" data-page="conditions">conditions générales de participation</button>.
            </p>
            <label class="terms-check">
              <input type="checkbox">
              <span>J'ai lu et j'accepte les conditions d'utilisation</span>
            </label>
            <button class="primary-btn ticket-main-btn" type="button" data-ticket-url="https://www.zeffy.com/fr-CA/ticketing/forum-international-solidarite-et-developpement-fisd--2026">Réserver ma place</button>
          </div>
          <aside class="form-card">
            <h3>Participation au FISD</h3>
            <p>Choisissez votre catégorie de participation avant de finaliser votre réservation.</p>
            <div class="reservation-list">
              ${siteData.reservationTypes.map((type) => `<button type="button">${type}</button>`).join("")}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function renderConditions() {
  return `
    ${pageHero("Conditions générales", "Conditions générales de participation au FISD 2026", "Veuillez lire attentivement les conditions de participation avant de réserver votre place.")}
    <section class="section">
      <div class="section-inner terms-page">
        <button class="secondary-btn" type="button" data-page="reservation">Retour à la réservation</button>

        <article class="terms-card">
          <h2>Présentation</h2>
          <p>Le FISD (Forum International Solidarité et Développement) est un événement annuel organisé par Jeunes Solidaires Canada, une organisation à but non lucratif constituée en vertu de la Loi canadienne sur les organisations à but non lucratif.</p>
          <p>Pour s'inscrire au forum, il est impératif pour tout participant de prendre connaissance et d'accepter les conditions de participation ainsi que les modalités d'inscription décrites ci-après. Le non-respect de ces conditions peut entraîner un refus de participation au Forum par l'organisateur.</p>

          <h2>Admissibilité</h2>
          <p>Sont admissibles :</p>
          <ul>
            <li>Les personnes qui ont fait leur inscription en ligne et payé leur ticket de participation.</li>
            <li>Les personnes invitées par le FISD (participants, panélistes, exposants, partenaires, etc.), qui résident au Canada ou ailleurs dans le monde et qui souhaitent proposer un sujet en lien avec le thème du Forum ou proposer un partenariat.</li>
          </ul>

          <h2>Méthode d'inscription en ligne</h2>
          <ul>
            <li>Pour participer au Forum, il faut obligatoirement remplir le formulaire d'inscription en ligne sur le site officiel du FISD.</li>
            <li>Une fois le formulaire rempli, une notification est envoyée par e-mail confirmant que votre inscription a bien été prise en compte.</li>
            <li>Une lettre d'invitation officielle de participation au forum vous sera transmise, incluant des directives sur l'organisation de l'événement.</li>
            <li>Les frais d'inscription sont payés au moment de l'inscription en ligne, selon les modalités figurant sur le site web du FISD.</li>
            <li>Le paiement se fait sur la plateforme de billetterie Zeffy.</li>
            <li>Les modes de paiement autorisés sont : carte de débit, Visa, MasterCard, Amex, etc.</li>
          </ul>
          <p>Si vous rencontrez des difficultés liées au paiement, écrivez-nous à <strong>info@fisd.ca</strong> ou appelez-nous au <strong>+1 514 974-1455</strong>.</p>

          <h2>Annulation</h2>
          <p>Aucun remboursement ne sera effectué en cas d'annulation de votre inscription, peu importe les raisons. Néanmoins, en cas d'annulation, nous garantissons l'accès à certains contenus en ligne pendant et après le Forum.</p>

          <h2>Clauses de participation</h2>
          <h3>Participants</h3>
          <ul>
            <li>Les participants doivent faire preuve de respect envers les autres participants, organisateurs, panélistes et exposants.</li>
            <li>Les comportements inappropriés (harcèlement, sexisme, discrimination, racisme, violence physique, etc.) sont interdits. L'organisateur peut exclure un participant du forum sans remboursement en cas d'un tel comportement.</li>
            <li>Les participants doivent se soumettre aux conditions de sécurité mises en place sur le lieu du forum.</li>
          </ul>

          <h3>Panélistes</h3>
          <ul>
            <li>Les panélistes doivent soumettre leurs propositions d'intervention via le site web du forum.</li>
            <li>Seuls les panélistes dont les propositions ont été retenues seront contactés.</li>
            <li>L'organisateur communiquera avec les panélistes retenus au sujet de la stratégie de déroulement du panel.</li>
            <li>En cas de désistement, les panélistes doivent informer l'organisateur afin que celui-ci puisse prendre les mesures nécessaires.</li>
          </ul>

          <h3>Partenaires</h3>
          <ul>
            <li>Les partenaires doivent s'engager à participer au Forum en tant que sponsors ou exposants.</li>
            <li>Toute autre initiative doit faire l'objet d'une discussion préalable avec le président du comité organisateur et obtenir son approbation.</li>
            <li>Un contrat relatif aux conditions de participation sera établi entre les partenaires et l'organisateur du Forum.</li>
            <li>Les deux parties devront respecter les engagements stipulés dans le contrat.</li>
          </ul>

          <h2>Participants venant de l'étranger</h2>
          <p>Les personnes qui résident en dehors du Canada et qui souhaitent prendre part au forum doivent prendre en charge tous les frais liés à leur déplacement vers le Canada : démarches de visa, billet d'avion, hôtel, restauration, etc.</p>

          <h2>Visa, hébergement et restauration</h2>
          <p>Nous prenons en charge la restauration de tous les participants inscrits pour la journée du 26 novembre ainsi que ceux inscrits pour les journées du 27 et 28 novembre 2026. Toutefois, la restauration en dehors de ces périodes, l'hébergement et les démarches de visa restent sous la responsabilité de chaque participant.</p>
          <p>Lorsque votre inscription est complétée, nous vous transmettrons une lettre de confirmation d'inscription au FISD ainsi qu'une copie de la facture relative au paiement des frais d'inscription afin de vous permettre d'entamer les démarches pour l'obtention d'un visa si nécessaire.</p>
          <p>Ressource utile : <a href="https://ircc.canada.ca/francais/visiter/visas.asp" target="_blank" rel="noreferrer">Immigration, Réfugiés et Citoyenneté Canada (IRCC)</a>.</p>

          <h2>Droit d'image</h2>
          <p>En tant que participant ou panéliste au FISD, vous acceptez d'être photographié, filmé ou enregistré à des fins promotionnelles au compte de Jeunes Solidaires et du Forum International Solidarité et Développement (FISD).</p>

          <button class="primary-btn" type="button" data-ticket-url="https://www.zeffy.com/fr-CA/ticketing/forum-international-solidarite-et-developpement-fisd--2026">Réserver ma place</button>
        </article>
      </div>
    </section>
  `;
}

// Page Actualites: les articles restent publics et les acces prives restent hors du navigateur.
function createNewsArticleId() {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `article-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeNewsArticle(article) {
  return {
    id: article.id || createNewsArticleId(),
    title: article.title || "Actualite FISD",
    description: article.description || article.text || "",
    imageUrl: article.imageUrl || article.image_url || article.image || "",
    status: article.status === "Brouillon" ? "Brouillon" : "Publie",
    createdAt: article.createdAt || article.created_at || article.date || new Date().toISOString()
  };
}

function getNewsArticles() {
  return (siteData.news || [])
    .map((article, index) => normalizeNewsArticle({
      id: article.id || `configured-news-${index}`,
      ...article
    }))
    .filter((article) => article.status !== "Brouillon")
    .sort((a, b) => {
      const first = new Date(a.createdAt).getTime();
      const second = new Date(b.createdAt).getTime();
      return (Number.isNaN(second) ? 0 : second) - (Number.isNaN(first) ? 0 : first);
    });
}

function formatNewsDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "A venir";
  }

  return date.toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function escapeNewsAttr(value) {
  return escapeHtml(String(value || "")).replace(/"/g, "&quot;");
}

function renderActualites() {
  const articles = getNewsArticles();

  return `
    ${pageHero("Actualites", "Articles et publications du FISD", "Retrouvez les annonces, nouvelles et publications du Forum dans un espace simple, vivant et coherent avec le site.")}
    <section class="section">
      <div class="section-inner">
        <div class="news-toolbar">
          <div>
            ${sectionTitle("Publications", "Actualites du FISD", "Les contenus publies sont regroupes ici pour garder une trace claire de la vie du forum.")}
          </div>
        </div>

        ${articles.length
          ? `<div class="news-article-list">${articles.map(renderNewsArticleCard).join("")}</div>`
          : renderNewsEmptyState()}
      </div>
    </section>
  `;
}

function renderNewsArticleCard(article) {
  const image = article.imageUrl
    ? `<div class="news-article-media"><img src="${escapeNewsAttr(article.imageUrl)}" alt="${escapeNewsAttr(article.title)}"></div>`
    : "";

  return `
    <article class="news-card news-article-card ${article.imageUrl ? "" : "is-text-only"}" data-news-article-id="${escapeNewsAttr(article.id)}">
      ${image}
      <div class="news-article-body">
        <div class="news-meta">
          <span class="news-badge">${escapeHtml(article.status)}</span>
          <span>${formatNewsDate(article.createdAt)}</span>
        </div>
        <h3>${escapeHtml(article.title)}</h3>
        <p>${escapeHtml(article.description)}</p>
      </div>
    </article>
  `;
}

function renderNewsEmptyState() {
  return `
    <div class="news-empty">
      <p class="eyebrow">Actualites</p>
      <h3>Aucun article pour le moment</h3>
      <p>Les nouvelles et publications du FISD seront affichees ici des leur ajout dans la base de donnees.</p>
    </div>
  `;
}

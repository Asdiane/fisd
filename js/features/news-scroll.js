// Garde la page Actualites en place quand un article est selectionne.
function scrollToNewsArticle(articleId) {
  requestAnimationFrame(() => {
    const article = Array.from(document.querySelectorAll("[data-news-article-id]")).find(
      (item) => item.dataset.newsArticleId === articleId
    );

    if (article) {
      article.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const list = document.querySelector(".news-article-list");
    if (list) list.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// Routeur simple: choisit la page active, rend son HTML et synchronise la navigation.
const app = document.querySelector("#app");
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

const pageRenderers = {
  accueil: renderHome,
  agir: renderAgir,
  programmation: renderProgrammation,
  galerie: renderGalerie,
  actualites: renderActualites,
  contact: renderContact,
  reservation: renderReservation,
  conditions: renderConditions
};

function setPage(page) {
  state.page = page;
  header.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  render();
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNav() {
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === state.page);
  });
}

function render() {
  updateNav();
  const renderer = pageRenderers[state.page] || pageRenderers.accueil;
  app.innerHTML = renderer();
}

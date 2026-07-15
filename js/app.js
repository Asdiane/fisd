// Point d'entree: branche les evenements, demarre les rotations et affiche la premiere page.
function startHomeRotations() {
  setInterval(() => {
    if (state.page === "accueil") {
      state.slide = (state.slide + 1) % siteData.slides.length;
      render();
    }
  }, 5000);

  setInterval(() => {
    state.partner = (state.partner + 1) % siteData.partners.length;
    if (state.page === "accueil") render();
  }, 2200);

  setInterval(() => {
    state.speaker = (state.speaker + 1) % siteData.speakers.length;
    if (state.page === "accueil") render();
  }, 4200);
}

registerAppEvents();
startHomeRotations();
render();

if (typeof hydrateSiteDataFromDatabase === "function") {
  hydrateSiteDataFromDatabase()
    .then((hasRemoteContent) => {
      if (hasRemoteContent) render();
    })
    .catch((error) => {
      console.warn("Hydratation Supabase ignorée.", error);
    });
}

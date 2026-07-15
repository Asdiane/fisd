// Etat partage entre les pages, le routeur et les interactions.
// On garde cet objet unique pour que les scripts classiques fonctionnent aussi en file://.
const state = {
  page: "accueil",
  slide: 0,
  partner: 0,
  speaker: 0,
  action: 0,
  edition: "2025",
  day: "j1",
  galleryEdition: "2025",
  galleryPhoto: 0,
  news: [...siteData.news]
};

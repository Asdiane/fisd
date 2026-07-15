(function () {
  function getConfig() {
    return window.FISD_SUPABASE_CONFIG || { enabled: false, url: "", anonKey: "" };
  }

  function isEnabled() {
    const config = getConfig();
    return Boolean(config.enabled && config.url && config.anonKey);
  }

  async function select(table, params) {
    if (!isEnabled()) {
      return [];
    }

    const config = getConfig();
    const query = params || "select=*";
    const endpoint = `${config.url.replace(/\/$/, "")}/rest/v1/${table}?${query}`;

    const response = await fetch(endpoint, {
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${config.anonKey}`,
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Supabase request failed: ${response.status}`);
    }

    return response.json();
  }

  window.fisdDatabase = {
    isEnabled,
    articles: () => select("articles", "select=*&status=eq.published&order=published_at.desc"),
    contacts: () => select("contacts", "select=*&is_visible=eq.true&order=display_order.asc"),
    souvenirs: () => select("souvenirs", "select=*&order=year.desc"),
    souvenirPhotos: (souvenirId) =>
      select("souvenir_photos", `select=*&souvenir_id=eq.${souvenirId}&order=display_order.asc`),
    testimonials: () =>
      select("testimonials", "select=*&is_visible=eq.true&order=display_order.asc")
  };
})();

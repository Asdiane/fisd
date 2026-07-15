# FISD - Site statique

Le site fonctionne avec deux niveaux de contenu :

- `js/data/site-data.js` garde un contenu local de secours pour que le site reste visible meme si Supabase n'est pas configure.
- Supabase devient la source de contenu en ligne quand `js/services/supabase-config.js` est active avec l'URL du projet et la cle `anon`.



## Structure

```text
index.html
assets/
  images/
    edition-2024/
    edition-2025/
css/
js/
  core/
  components/
  data/
  features/
  pages/
  services/
database/
supabase/
  migrations/
```

## Contenu en base

La migration de seed ajoute :

- les contacts publics du FISD ;
- les temoignages fournis ;
- les souvenirs 2024, 2025 et 2026 ;
- les chemins des photos 2024 et 2025 ;
- l'edition 2026 en statut `coming_soon`.

La table `articles` est prete pour les actualites, mais aucun article editorial final n'etait present dans le fichier ZIP recu. On peut les ajouter dans Supabase des que les textes definitifs sont disponibles.

## Activer Supabase

Dans `js/services/supabase-config.js`, renseigner uniquement les informations publiques :

```js
window.FISD_SUPABASE_CONFIG = {
  enabled: true,
  url: "https://PROJECT_REF.supabase.co",
  anonKey: "VOTRE_CLE_ANON_PUBLIQUE",
};
```

## Migrations

Le schema et le contenu se poussent avec la CLI Supabase :

```powershell
npx.cmd supabase db push
```

## Deploiement

Le projet est statique. Pour deployer, publier le dossier du projet avec `index.html`, `assets/`, `css/`, `js/`, et la configuration Supabase publique activee.

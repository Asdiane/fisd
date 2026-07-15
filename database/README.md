# Base de donnees FISD

La base recommandee est **Supabase**, qui fournit PostgreSQL en ligne, une API REST automatique, du stockage pour les images et une interface d'administration simple.

## Mise en ligne

1. Creer un projet sur Supabase.
2. Ouvrir `SQL Editor`.
3. Coller et executer le contenu de `database/schema.sql`.
4. Creer un bucket Storage public nomme `fisd-media` pour les images du site.
5. Recuperer `Project URL` et `anon public key` dans `Project Settings > API`.
6. Mettre ces valeurs dans `js/services/supabase-config.js`.

La cle `anon` peut etre dans le navigateur. La cle `service_role` ne doit jamais etre mise dans ce projet front-end.

## Tables

- `articles`: actualites publiees ou brouillons.
- `souvenirs`: annees des editions, avec le statut `published` ou `coming_soon`.
- `souvenir_photos`: photos rattachees a une edition.
- `testimonials`: temoignages affichables sur le site.
- `contacts`: telephone, WhatsApp, courriel et futurs liens utiles.
- `settings`: configuration globale du site.

## Securite

Le script active Row Level Security. Le public peut lire seulement le contenu visible ou publie. Les modifications doivent passer par le dashboard Supabase, ou par un espace admin authentifie qu'on pourra brancher ensuite.

## Prochaine etape

Quand le projet Supabase est cree, il faut renseigner `js/services/supabase-config.js`, puis brancher progressivement les pages `Actualites`, `Souvenirs`, `Temoignages` et `Contact` sur le client Supabase.

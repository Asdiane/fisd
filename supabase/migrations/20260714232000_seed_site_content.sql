-- Seed du contenu public du site FISD.
-- Les actualites restent pretes cote schema, mais aucun article editorial final
-- n'a encore ete fourni dans les fichiers recus.

create unique index if not exists souvenir_photos_unique_image
on public.souvenir_photos (souvenir_id, image_url);

create unique index if not exists testimonials_author_content_uidx
on public.testimonials (author_name, content);

create unique index if not exists contacts_type_label_uidx
on public.contacts (type, label);

insert into public.contacts (type, label, value, href, is_visible, display_order)
values
  ('phone', 'Téléphone', '+1 514 974 - 1455', 'tel:+15149741455', true, 1),
  ('whatsapp', 'WhatsApp', '+1 514 974 - 1455', 'https://wa.me/15149741455', true, 2),
  ('email', 'Courriel', 'info@fisd.ca', 'mailto:info@fisd.ca', true, 3)
on conflict (type, label) do update
set
  value = excluded.value,
  href = excluded.href,
  is_visible = excluded.is_visible,
  display_order = excluded.display_order,
  updated_at = now();

insert into public.testimonials (author_name, author_role, content, is_visible, display_order)
values
  (
    'Marie Veillette',
    'Caravane Philanthrope',
    'Merci infiniment aux organisatrices et organisateurs de ce forum ! Quel bel événement rempli d’apprentissage et d’échanges enrichissants. Pour un organisme comme le nôtre Caravane Philanthrope qui vise des pratiques éthiques en coopération internationale, ce genre de moment est vraiment précieux. J’espère que ce ne sera pas le dernier et que d’autres occasions comme celle-ci continueront d’inspirer et de rassembler. Chapeau pour votre merveilleuse organisation.',
    true,
    1
  ),
  (
    'Benie Kouyate',
    'Participante',
    'Je suis particulièrement reconnaissante d''avoir eu l''opportunité de partager mes idées et d''échanger avec des participants aussi passionnés et engagés. Je vous remercie également pour l''accueil chaleureux et l''organisation remarquable de cet événement. Je suis convaincue que le FISD continuera à jouer un rôle crucial dans la promotion de la solidarité et du développement à l''échelle internationale.',
    true,
    2
  ),
  (
    'Valérie Phaneuf',
    'Participante',
    'Merci pour cette belle opportunité de mettre de l''avant des entrepreneurs sociaux et de discuter de grands enjeux de coopération internationale ! Quel bel événement ! Merci à tous les organisateurs et participants ! Merci Alpha Touré pour l''invitation !',
    true,
    3
  )
on conflict (author_name, content) do update
set
  author_role = excluded.author_role,
  is_visible = excluded.is_visible,
  display_order = excluded.display_order,
  updated_at = now();

insert into public.souvenirs (year, title, description, status)
values
  (2026, 'Édition 2026', 'Les souvenirs de cette édition seront publiés bientôt.', 'coming_soon'),
  (2025, 'Édition 2025', 'Photos officielles de l''édition 2025 du FISD.', 'published'),
  (2024, 'Édition 2024', 'Retour en images sur l''édition 2024 du FISD.', 'published')
on conflict (year) do update
set
  title = excluded.title,
  description = excluded.description,
  status = excluded.status,
  updated_at = now();

with selected_souvenir as (
  select id from public.souvenirs where year = 2025
)
insert into public.souvenir_photos (souvenir_id, image_url, caption, display_order)
select
  selected_souvenir.id,
  'assets/images/edition-2025/' || photo_number || '.jpg',
  'Souvenir FISD 2025 - photo ' || photo_number,
  photo_number
from selected_souvenir
cross join generate_series(1, 82) as photo_number
on conflict (souvenir_id, image_url) do update
set
  caption = excluded.caption,
  display_order = excluded.display_order;

with selected_souvenir as (
  select id from public.souvenirs where year = 2024
)
insert into public.souvenir_photos (souvenir_id, image_url, caption, display_order)
select
  selected_souvenir.id,
  'assets/images/edition-2024/' || photo_number || '.jpg',
  'Souvenir FISD 2024 - photo ' || photo_number,
  photo_number
from selected_souvenir
cross join generate_series(1, 62) as photo_number
on conflict (souvenir_id, image_url) do update
set
  caption = excluded.caption,
  display_order = excluded.display_order;

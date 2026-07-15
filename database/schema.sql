-- FISD - Supabase/PostgreSQL schema
-- Run this file in the Supabase SQL editor.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  excerpt text,
  content text not null,
  image_url text,
  status text not null default 'published'
    check (status in ('published', 'draft')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.souvenirs (
  id uuid primary key default gen_random_uuid(),
  year integer not null unique,
  title text not null,
  description text,
  status text not null default 'published'
    check (status in ('published', 'coming_soon')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.souvenir_photos (
  id uuid primary key default gen_random_uuid(),
  souvenir_id uuid not null references public.souvenirs(id) on delete cascade,
  image_url text not null,
  caption text,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_role text,
  content text not null,
  is_visible boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('phone', 'whatsapp', 'email', 'address', 'social')),
  label text not null,
  value text not null,
  href text,
  is_visible boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.settings (
  key text primary key,
  value jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists articles_status_published_at_idx
  on public.articles (status, published_at desc);

create index if not exists souvenirs_year_idx
  on public.souvenirs (year desc);

create index if not exists souvenir_photos_order_idx
  on public.souvenir_photos (souvenir_id, display_order);

create index if not exists testimonials_visible_order_idx
  on public.testimonials (is_visible, display_order);

create index if not exists contacts_visible_order_idx
  on public.contacts (is_visible, display_order);

drop trigger if exists articles_set_updated_at on public.articles;
create trigger articles_set_updated_at
before update on public.articles
for each row execute function public.set_updated_at();

drop trigger if exists souvenirs_set_updated_at on public.souvenirs;
create trigger souvenirs_set_updated_at
before update on public.souvenirs
for each row execute function public.set_updated_at();

drop trigger if exists testimonials_set_updated_at on public.testimonials;
create trigger testimonials_set_updated_at
before update on public.testimonials
for each row execute function public.set_updated_at();

drop trigger if exists contacts_set_updated_at on public.contacts;
create trigger contacts_set_updated_at
before update on public.contacts
for each row execute function public.set_updated_at();

drop trigger if exists settings_set_updated_at on public.settings;
create trigger settings_set_updated_at
before update on public.settings
for each row execute function public.set_updated_at();

alter table public.articles enable row level security;
alter table public.souvenirs enable row level security;
alter table public.souvenir_photos enable row level security;
alter table public.testimonials enable row level security;
alter table public.contacts enable row level security;
alter table public.settings enable row level security;

drop policy if exists "Public can read published articles" on public.articles;
create policy "Public can read published articles"
on public.articles for select
using (status = 'published');

drop policy if exists "Public can read souvenirs" on public.souvenirs;
create policy "Public can read souvenirs"
on public.souvenirs for select
using (true);

drop policy if exists "Public can read souvenir photos" on public.souvenir_photos;
create policy "Public can read souvenir photos"
on public.souvenir_photos for select
using (true);

drop policy if exists "Public can read visible testimonials" on public.testimonials;
create policy "Public can read visible testimonials"
on public.testimonials for select
using (is_visible = true);

drop policy if exists "Public can read visible contacts" on public.contacts;
create policy "Public can read visible contacts"
on public.contacts for select
using (is_visible = true);

drop policy if exists "Public can read settings" on public.settings;
create policy "Public can read settings"
on public.settings for select
using (true);

insert into public.contacts (type, label, value, href, display_order)
values
  ('phone', 'Telephone', '+1 514 974 - 1455', 'tel:+15149741455', 1),
  ('whatsapp', 'WhatsApp', '+1 514 974 - 1455', 'https://wa.me/15149741455', 2),
  ('email', 'Courriel', 'info@fisd.ca', 'mailto:info@fisd.ca', 3)
on conflict do nothing;

insert into public.testimonials (author_name, author_role, content, display_order)
values
  (
    'Marie Veillette',
    'Caravane Philanthrope',
    'Merci infiniment aux organisatrices et organisateurs de ce forum ! Quel bel evenement rempli d''apprentissage et d''echanges enrichissants. Pour un organisme comme le notre Caravane Philanthrope qui vise des pratiques ethiques en cooperation internationale, ce genre de moment est vraiment precieux. J''espere que ce ne sera pas le dernier et que d''autres occasions comme celle-ci continueront d''inspirer et de rassembler. Chapeau pour votre merveilleuse organisation.',
    1
  ),
  (
    'Benie Kouyate',
    'Participante',
    'Je suis particulierement reconnaissante d''avoir eu l''opportunite de partager mes idees et d''echanger avec des participants aussi passionnes et engages. Je vous remercie egalement pour l''accueil chaleureux et l''organisation remarquable de cet evenement. Je suis convaincue que le FISD continuera a jouer un role crucial dans la promotion de la solidarite et du developpement a l''echelle internationale.',
    2
  ),
  (
    'Valerie Phaneuf',
    'Participante',
    'Merci pour cette belle opportunite de mettre de l''avant des entrepreneurs sociaux et de discuter de grands enjeux de cooperation internationale ! Quel bel evenement ! Merci a tous les organisateurs et participants ! Merci Alpha Toure pour l''invitation !',
    3
  )
on conflict do nothing;

insert into public.souvenirs (year, title, description, status)
values
  (2024, 'Edition 2024', 'Galerie photo de l''edition 2024.', 'published'),
  (2025, 'Edition 2025', 'Galerie photo de l''edition 2025.', 'published'),
  (2026, 'A venir', 'Les souvenirs de l''edition 2026 seront ajoutes apres l''evenement.', 'coming_soon')
on conflict (year) do update
set
  title = excluded.title,
  description = excluded.description,
  status = excluded.status;

insert into public.settings (key, value)
values
  ('site', '{"name":"FISD","locale":"fr-CA"}'::jsonb)
on conflict (key) do nothing;

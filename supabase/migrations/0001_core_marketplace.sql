-- BeautyDoorstep initial marketplace schema
-- Apply only in a dedicated development Supabase project after review.
create extension if not exists pgcrypto;

create type public.provider_review_status as enum ('draft','pending','rejected','expired','approved');
create type public.marketplace_request_status as enum ('requested','quoted','accepted','scheduled','in_progress','completed','cancelled','disputed');
create type public.listing_status as enum ('draft','pending','rejected','paused','approved');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_path text,
  country_code char(2),
  preferred_language text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Role assignment is intentionally separate from profiles. Client users receive no write policy.
create table public.user_roles (
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('customer','provider','merchant','driver','agent','contractor','project_buyer','support','admin')),
  created_at timestamptz not null default now(),
  primary key (user_id, role)
);

create table public.marketplace_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  parent_id uuid references public.marketplace_categories(id),
  vertical text not null,
  description text,
  regulated boolean not null default false,
  launch_wave text not null default 'later' check (launch_wave in ('foundation','next','later')),
  enabled boolean not null default false,
  catalogue_visible boolean not null default true,
  ordering_enabled boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.provider_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  business_name text,
  bio text,
  country_code char(2),
  service_areas jsonb not null default '[]'::jsonb,
  review_status public.provider_review_status not null default 'pending',
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.provider_documents (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid not null references public.provider_profiles(id) on delete cascade,
  document_type text not null,
  private_storage_path text not null,
  review_status public.provider_review_status not null default 'pending',
  expires_at date,
  created_at timestamptz not null default now()
);

create table public.provider_services (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid not null references public.provider_profiles(id) on delete cascade,
  category_id uuid not null references public.marketplace_categories(id),
  title text not null,
  description text,
  price_amount numeric(12,2),
  currency char(3),
  pricing_type text not null default 'quote' check (pricing_type in ('fixed','hourly','quote')),
  active boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.merchant_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  business_name text not null,
  country_code char(2),
  review_status public.provider_review_status not null default 'pending',
  created_at timestamptz not null default now(),
  unique(user_id, business_name)
);

create table public.product_listings (
  id uuid primary key default gen_random_uuid(),
  merchant_id uuid not null references public.merchant_profiles(id) on delete cascade,
  category_id uuid not null references public.marketplace_categories(id),
  title text not null,
  description text,
  sku text,
  price_amount numeric(12,2) not null check (price_amount >= 0),
  currency char(3) not null,
  stock_quantity integer not null default 0 check (stock_quantity >= 0),
  fulfilment_options text[] not null default array['delivery'],
  review_status public.listing_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.service_requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.profiles(id),
  provider_id uuid references public.provider_profiles(id),
  category_id uuid not null references public.marketplace_categories(id),
  description text not null,
  requested_at timestamptz,
  status public.marketplace_request_status not null default 'requested',
  country_code char(2),
  service_area text,
  private_address jsonb,
  quoted_amount numeric(12,2),
  currency char(3),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.commerce_orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.profiles(id),
  merchant_id uuid references public.merchant_profiles(id),
  status text not null default 'created' check (status in ('created','confirmed','packed','dispatched','delivered','cancelled','refunded','disputed')),
  currency char(3) not null,
  subtotal numeric(12,2) not null default 0,
  delivery_fee numeric(12,2) not null default 0,
  tax_amount numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

create table public.delivery_jobs (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.commerce_orders(id),
  requested_by uuid not null references public.profiles(id),
  assigned_provider uuid references public.profiles(id),
  pickup_area text,
  dropoff_area text,
  status text not null default 'requested' check (status in ('requested','assigned','picked_up','in_transit','delivered','cancelled')),
  location_sharing_expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.ride_requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.profiles(id),
  assigned_driver uuid references public.profiles(id),
  country_code char(2),
  pickup_area text,
  dropoff_area text,
  status text not null default 'requested' check (status in ('requested','matched','driver_arriving','in_progress','completed','cancelled')),
  location_sharing_expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.property_listings (
  id uuid primary key default gen_random_uuid(),
  listed_by uuid not null references public.profiles(id),
  listing_type text not null check (listing_type in ('sale','rent','commercial','land','short_stay')),
  title text not null,
  description text,
  country_code char(2),
  region text,
  city text,
  approximate_location text,
  price_amount numeric(14,2),
  currency char(3),
  review_status public.listing_status not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.project_requests (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid not null references public.profiles(id),
  category_id uuid references public.marketplace_categories(id),
  title text not null,
  scope_description text not null,
  country_code char(2),
  service_area text,
  budget_min numeric(14,2),
  budget_max numeric(14,2),
  currency char(3),
  status text not null default 'open' check (status in ('draft','open','reviewing','awarded','completed','cancelled','disputed')),
  created_at timestamptz not null default now()
);

create table public.project_bids (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.project_requests(id) on delete cascade,
  bidder_id uuid not null references public.profiles(id),
  proposal text not null,
  amount numeric(14,2),
  currency char(3),
  created_at timestamptz not null default now(),
  unique(project_id, bidder_id)
);

create table public.audit_events (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id),
  event_type text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Seed the extensible global catalogue. Visibility does not mean ordering is live.
insert into public.marketplace_categories
  (slug, name, vertical, description, regulated, launch_wave, enabled, catalogue_visible, ordering_enabled)
values
  ('beauty-personal-care','Beauty & personal care','Personal care','Barbers, salons, makeup, nails, skincare and qualified wellness professionals.',false,'foundation',false,true,false),
  ('home-cleaning','Home & office cleaning','Home services','Housekeeping, deep cleaning, laundry, pest control and sanitation.',false,'foundation',false,true,false),
  ('plumbing','Plumbing & water systems','Repairs & maintenance','Leaks, taps, pipes, drains, pumps, tanks and installations.',false,'foundation',false,true,false),
  ('electrical','Electrical work','Repairs & maintenance','Wiring, lighting, switches, fans, inverters and electrical troubleshooting.',true,'foundation',false,true,false),
  ('appliance-repair','Appliance & electronics repair','Repairs & maintenance','AC, refrigerator, washing machine, television, computer and device repair.',false,'foundation',false,true,false),
  ('handyman-carpentry','Handyman & carpentry','Repairs & maintenance','Furniture assembly, doors, locks, fixtures, shelves and general repairs.',false,'foundation',false,true,false),
  ('painting-interiors','Painting & interiors','Building & projects','Painting, flooring, ceilings, wallpaper, modular fittings and interiors.',false,'next',false,true,false),
  ('construction-renovation','Construction & renovation','Building & projects','Civil works, renovations, structural projects and licensed contractors.',true,'later',false,true,false),
  ('building-materials','Building materials & equipment','Shopping & supplies','Cement, steel, timber, tools, sanitaryware, electrical and plumbing supplies.',false,'next',false,true,false),
  ('groceries-essentials','Groceries & daily essentials','Quick commerce','Fresh produce, staples, dairy, snacks, beverages and household essentials.',false,'next',false,true,false),
  ('food-restaurants','Food, restaurants & catering','Quick commerce','Meals, bakery, catering, meal prep and local food businesses.',false,'later',false,true,false),
  ('pharmacy-health','Pharmacy & health essentials','Shopping & supplies','Permitted pharmacy and wellness products from authorised sellers.',true,'later',false,true,false),
  ('general-ecommerce','General online shopping','E-commerce','Clothing, footwear, electronics, books, furniture, homeware and more.',false,'next',false,true,false),
  ('local-store-shopping','Shop local & same-day delivery','E-commerce','Discover nearby stores, compare products and arrange pickup or delivery.',false,'next',false,true,false),
  ('courier-parcel','Courier, parcel & errands','Delivery & logistics','Document delivery, parcel pickup, shopping errands and business deliveries.',false,'next',false,true,false),
  ('bike-taxi-rides','Bike taxi, rides & taxis','Mobility','Licensed two-wheeler, car, taxi and accessible ride services where permitted.',true,'later',false,true,false),
  ('vehicle-services','Vehicle repair & roadside help','Mobility','Mechanics, tyre repair, towing, car wash, servicing and EV support.',false,'next',false,true,false),
  ('moving-logistics','Moving, freight & logistics','Delivery & logistics','Packers, movers, storage, cargo, furniture delivery and business logistics.',false,'later',false,true,false),
  ('real-estate','Real estate & rentals','Property','Property discovery, rentals, sales, agents, inspections and property management.',true,'later',false,true,false),
  ('property-maintenance','Property maintenance & management','Property','Caretaking, inspections, repairs, cleaning and facility management.',false,'next',false,true,false),
  ('professional-projects','Professional & project work','Business & projects','Architecture, design, engineering, IT, consulting, procurement and project tenders.',true,'later',false,true,false),
  ('education-tutoring','Education, tutors & training','Personal & professional','Home tuition, online learning, music, languages, coaching and skills training.',false,'later',false,true,false),
  ('health-wellness','Healthcare & wellness','Personal & professional','Eligible care, fitness, yoga and wellness services from qualified professionals.',true,'later',false,true,false),
  ('pet-care','Pet care & veterinary','Personal & professional','Pet grooming, sitting, walking and veterinary services where licensed.',true,'later',false,true,false),
  ('events-hospitality','Events, travel & hospitality','Personal & professional','Photography, event support, hotels, tours, guides and travel services.',false,'later',false,true,false),
  ('agriculture','Agriculture & farm supplies','Business & projects','Farm inputs, equipment, produce, livestock services and rural logistics.',true,'later',false,true,false),
  ('wholesale-b2b','Wholesale & business supplies','Business & projects','Bulk buying, trade suppliers, office supplies and business procurement.',false,'later',false,true,false),
  ('jobs-gigs','Jobs, gigs & local talent','Personal & professional','Local work opportunities, freelancers and verified specialist talent.',false,'later',false,true,false),
  ('emergency-assistance','Emergency & urgent assistance','Special assistance','Urgent non-emergency repair dispatch and links to appropriate emergency services.',true,'later',false,true,false)
on conflict (slug) do update set
  name = excluded.name, vertical = excluded.vertical, description = excluded.description,
  regulated = excluded.regulated, launch_wave = excluded.launch_wave,
  catalogue_visible = excluded.catalogue_visible;

-- Create a minimal profile when a Supabase Auth user is registered.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'display_name', ''));
  insert into public.user_roles (user_id, role) values (new.id, 'customer');
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- Keep moderation and activation fields under trusted server-side control.
create or replace function public.guard_marketplace_moderation_fields()
returns trigger
language plpgsql
set search_path = ''
as $
begin
  if coalesce(auth.role(), '') <> 'service_role' then
    if tg_table_name = 'provider_profiles' then
      new.review_status := 'pending';
      new.reviewed_at := null;
      new.reviewed_by := null;
    elsif tg_table_name = 'merchant_profiles' then
      new.review_status := 'pending';
    elsif tg_table_name = 'product_listings' or tg_table_name = 'property_listings' then
      new.review_status := 'pending';
    elsif tg_table_name = 'provider_services' then
      new.active := false;
    end if;
  end if;
  return new;
end;
$;

create trigger guard_provider_review before insert or update on public.provider_profiles
for each row execute function public.guard_marketplace_moderation_fields();
create trigger guard_merchant_review before insert or update on public.merchant_profiles
for each row execute function public.guard_marketplace_moderation_fields();
create trigger guard_product_review before insert or update on public.product_listings
for each row execute function public.guard_marketplace_moderation_fields();
create trigger guard_property_review before insert or update on public.property_listings
for each row execute function public.guard_marketplace_moderation_fields();
create trigger guard_provider_service_activation before insert or update on public.provider_services
for each row execute function public.guard_marketplace_moderation_fields();

-- Private identity and qualification documents: no public bucket or public URL.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('private-provider-documents', 'private-provider-documents', false, 10485760,
        array['image/jpeg','image/png','application/pdf'])
on conflict (id) do nothing;

create policy "provider owns private document objects"
on storage.objects for select to authenticated
using (bucket_id = 'private-provider-documents' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "provider uploads own private document objects"
on storage.objects for insert to authenticated
with check (bucket_id = 'private-provider-documents' and (storage.foldername(name))[1] = (select auth.uid())::text);

-- Enable RLS on all user/business data.
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.marketplace_categories enable row level security;
alter table public.provider_profiles enable row level security;
alter table public.provider_documents enable row level security;
alter table public.provider_services enable row level security;
alter table public.merchant_profiles enable row level security;
alter table public.product_listings enable row level security;
alter table public.service_requests enable row level security;
alter table public.commerce_orders enable row level security;
alter table public.delivery_jobs enable row level security;
alter table public.ride_requests enable row level security;
alter table public.property_listings enable row level security;
alter table public.project_requests enable row level security;
alter table public.project_bids enable row level security;
alter table public.audit_events enable row level security;

-- Profiles: users can view and edit only their own basic profile.
create policy "profile read own" on public.profiles for select to authenticated using (id = (select auth.uid()));
create policy "profile update own" on public.profiles for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

-- Roles: users can read their own role assignments; role writes are server/admin only.
create policy "read own roles" on public.user_roles for select to authenticated using (user_id = (select auth.uid()));

-- Categories are public catalogue data; only enabled categories are exposed.
create policy "read enabled categories" on public.marketplace_categories for select to anon, authenticated using (catalogue_visible = true);

-- Provider applications: owners may create and read their own; public may see approved providers only.
create policy "provider read approved or own" on public.provider_profiles for select to anon, authenticated using (review_status = 'approved' or user_id = (select auth.uid()));
create policy "provider create own" on public.provider_profiles for insert to authenticated with check (user_id = (select auth.uid()));
create policy "provider document owner read" on public.provider_documents for select to authenticated using (exists (select 1 from public.provider_profiles p where p.id = provider_id and p.user_id = (select auth.uid())));
create policy "provider document owner insert" on public.provider_documents for insert to authenticated with check (exists (select 1 from public.provider_profiles p where p.id = provider_id and p.user_id = (select auth.uid())));
create policy "provider services read active or own" on public.provider_services for select to anon, authenticated using ((active = true and exists (select 1 from public.provider_profiles p where p.id = provider_id and p.review_status = 'approved')) or exists (select 1 from public.provider_profiles p where p.id = provider_id and p.user_id = (select auth.uid())));
create policy "provider services create own" on public.provider_services for insert to authenticated with check (exists (select 1 from public.provider_profiles p where p.id = provider_id and p.user_id = (select auth.uid())));

-- Merchants and product catalogues.
create policy "merchant read own" on public.merchant_profiles for select to authenticated using (user_id = (select auth.uid()));
create policy "merchant create own" on public.merchant_profiles for insert to authenticated with check (user_id = (select auth.uid()));
create policy "product read approved" on public.product_listings for select to anon, authenticated using (review_status = 'approved');
create policy "product owner read" on public.product_listings for select to authenticated using (exists (select 1 from public.merchant_profiles m where m.id = merchant_id and m.user_id = (select auth.uid())));
create policy "product owner create" on public.product_listings for insert to authenticated with check (exists (select 1 from public.merchant_profiles m where m.id = merchant_id and m.user_id = (select auth.uid())));

-- Requests and transactions are visible only to their participants.
create policy "service request customer or provider read" on public.service_requests for select to authenticated using (customer_id = (select auth.uid()) or exists (select 1 from public.provider_profiles p where p.id = provider_id and p.user_id = (select auth.uid())));
create policy "service request customer create" on public.service_requests for insert to authenticated with check (customer_id = (select auth.uid()));
create policy "commerce order customer read" on public.commerce_orders for select to authenticated using (customer_id = (select auth.uid()));
create policy "commerce order customer create" on public.commerce_orders for insert to authenticated with check (customer_id = (select auth.uid()));
create policy "delivery job participant read" on public.delivery_jobs for select to authenticated using (requested_by = (select auth.uid()) or assigned_provider = (select auth.uid()));
create policy "delivery job requester create" on public.delivery_jobs for insert to authenticated with check (requested_by = (select auth.uid()));
create policy "ride participant read" on public.ride_requests for select to authenticated using (customer_id = (select auth.uid()) or assigned_driver = (select auth.uid()));
create policy "ride customer create" on public.ride_requests for insert to authenticated with check (customer_id = (select auth.uid()));
create policy "property public approved read" on public.property_listings for select to anon, authenticated using (review_status = 'approved' or listed_by = (select auth.uid()));
create policy "property owner create" on public.property_listings for insert to authenticated with check (listed_by = (select auth.uid()));
create policy "project buyer or bidder read" on public.project_requests for select to authenticated using (buyer_id = (select auth.uid()));
create policy "project buyer create" on public.project_requests for insert to authenticated with check (buyer_id = (select auth.uid()));
create policy "project bid participant read" on public.project_bids for select to authenticated using (bidder_id = (select auth.uid()));
create policy "project bidder create" on public.project_bids for insert to authenticated with check (bidder_id = (select auth.uid()));
create policy "audit events owner read" on public.audit_events for select to authenticated using (actor_id = (select auth.uid()));

-- Intentionally no client update/delete policies for review decisions, financial states,
-- assigned providers/drivers, audit logs, or privileged moderation. Implement server-side.
-- Admin review of project bids must use a trusted server-side endpoint (service role),
-- not a client-side cross-table policy, to avoid recursive RLS evaluation.

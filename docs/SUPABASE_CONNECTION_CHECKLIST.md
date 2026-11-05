# DoorSphere Supabase connection checklist

## Project confirmed
The owner has confirmed that the Supabase project is dedicated exclusively to DoorSphere.

Project URL (public project identifier): `https://xuglowoqhbdngripaojk.supabase.co`

Do not infer that repository code is connected merely because this URL is known. The project currently has no migrations applied and the repository has no GitHub connection configured in the Supabase dashboard.

## Owner steps in Supabase

1. Open Project Settings → API (or API Keys, depending on the dashboard version).
2. Copy the Project URL and the publishable key (or legacy anon key). These are client-side configuration values; do not copy the secret/service-role key.
3. In the development workspace, create a local `.env.local` from `.env.example`.
4. Set `NEXT_PUBLIC_SUPABASE_URL` to the project URL and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the publishable/anon key.
5. Keep `.env.local` out of Git. Never paste the service-role/secret key into chat, a browser field, GitHub, or a `NEXT_PUBLIC_*` variable.

## Before applying database SQL

The current migration is a proposed baseline, not yet applied or verified against this project. First inspect it in the SQL Editor and apply it only to this dedicated development project after reviewing the SQL. Then verify the tables, enums, trigger, private storage bucket and RLS policies. Test with anonymous and separate customer/provider/merchant accounts before enabling any real user data.

The current SQL seed and frontend category catalogue are not yet guaranteed to be identical. A category reconciliation migration should be prepared and tested before the UI is switched to database-backed category results.

## Integration sequence

- Add and lock compatible Supabase client packages in the project workspace.
- Create browser and server Supabase clients using the supported SSR package.
- Implement email/password authentication, confirmation redirects, sign-out and protected account pages.
- Add profile and role onboarding. Client-side users must never be able to grant themselves privileged roles.
- Read public catalogue data from the database with a safe fallback during development.
- Add provider/merchant application workflows and admin-only review actions.
- Add automated RLS tests and build/runtime checks.
- Only after these checks, plan a controlled deployment to the selected host/domain.

## Current status

- Dedicated Supabase project: confirmed by owner.
- Project URL: known.
- Publishable/anon key: not yet configured in the development environment.
- Supabase packages and lockfile: not yet installed/updated.
- Migration: not applied.
- Authentication and database-backed directory: not implemented.
- Production deployment: not authorised or performed.

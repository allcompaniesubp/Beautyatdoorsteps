# Supabase setup — DoorSphere (working brand)

The repository includes a proposed PostgreSQL migration at `supabase/migrations/0001_core_marketplace.sql`.

## Before applying it

1. Create a dedicated Supabase project for this marketplace only. Do not reuse a database from KnowledgeX, Research Fellowship or AllCompanies.
2. Select the initial deployment region based on the first pilot country and data residency needs.
3. Review the migration and country-specific privacy/data-retention requirements.
4. Apply the migration in a development project first, not production.
5. Enable email authentication and configure allowed redirect URLs only after the production domain is selected.
6. Keep the Supabase service-role key only in server-side environment variables. Never commit it or expose it through `NEXT_PUBLIC_*`.
7. Configure private document storage, retention, deletion and access logs before collecting any real identity documents.

## Environment variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY= # publishable/anon key only; safe for browser use with RLS
SUPABASE_SERVICE_ROLE_KEY=
```

The current UI does not yet connect to Supabase. No Supabase project is connected, and this migration has not been applied. Create a dedicated project first; then configure the project URL and publishable/anon key as environment variables in the development environment. Do not send credentials in chat or commit them to GitHub. Authentication screens and server-side session handling still need to be implemented and tested. Do not put credentials in GitHub issues, commits or chat messages.

## Schema scope

The initial migration creates profiles, role assignments, categories, provider applications, private-document metadata, merchant/product catalogues, service requests, commerce orders, delivery jobs, ride requests, property listings, project requests/bids and audit events.

RLS is enabled for user-owned data. Admin review, financial state transitions and other privileged operations must be implemented in trusted server-side functions using narrowly scoped permissions and audited actions. The service-role key bypasses RLS and must never be used in the browser.

## Important

This is a starting schema, not a complete legal or security certification. Test every policy with anonymous, customer, provider, merchant, driver and administrator test accounts before accepting real users. Do not enable regulated categories until local legal and operational checks are completed.


## Project access boundary

The repository can be prepared for Supabase, but repository access does not grant access to your Supabase account. Project creation, billing choices, organisation membership, secrets and dashboard settings must be completed by an authorised account owner. Do not share passwords, recovery codes or the service-role key. Start with a free development project if its region, limits and data-residency terms suit the pilot. Do not enable paid plans or production data collection until separately approved.

## Before the first migration

- Confirm the project belongs only to this marketplace and is not shared with KnowledgeX, Research Fellowship or AllCompanies/UBP.
- Choose the project region after deciding the first pilot country and checking applicable data-residency obligations.
- Apply migrations only to a disposable development project first.
- Verify RLS with separate anonymous, customer, provider, merchant and administrator test identities.
- Confirm storage bucket privacy, upload size/type restrictions, retention and deletion workflows.
- Do not upload real identity, medical, legal or financial records during initial testing.

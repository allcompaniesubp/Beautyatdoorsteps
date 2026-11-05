# Supabase setup — BeautyDoorstep

The repository includes a proposed PostgreSQL migration at `supabase/migrations/0001_core_marketplace.sql`.

## Before applying it

1. Create a dedicated Supabase project for BeautyDoorstep only. Do not reuse a database from KnowledgeX, Research Fellowship or AllCompanies.
2. Select the initial deployment region based on the first pilot country and data residency needs.
3. Review the migration and country-specific privacy/data-retention requirements.
4. Apply the migration in a development project first, not production.
5. Enable email authentication and configure allowed redirect URLs only after the production domain is selected.
6. Keep the Supabase service-role key only in server-side environment variables. Never commit it or expose it through `NEXT_PUBLIC_*`.
7. Configure private document storage, retention, deletion and access logs before collecting any real identity documents.

## Environment variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

The current UI does not yet connect to Supabase. Authentication screens and server-side session handling should be added after a dedicated project is created and its URL/anon key are provided through the deployment environment. Do not put credentials in GitHub issues, commits or chat messages.

## Schema scope

The initial migration creates profiles, role assignments, categories, provider applications, private-document metadata, merchant/product catalogues, service requests, commerce orders, delivery jobs, ride requests, property listings, project requests/bids and audit events.

RLS is enabled for user-owned data. Admin review, financial state transitions and other privileged operations must be implemented in trusted server-side functions using narrowly scoped permissions and audited actions. The service-role key bypasses RLS and must never be used in the browser.

## Important

This is a starting schema, not a complete legal or security certification. Test every policy with anonymous, customer, provider, merchant, driver and administrator test accounts before accepting real users. Do not enable regulated categories until local legal and operational checks are completed.

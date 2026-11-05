# BeautyDoorstep — starter project

A mobile-first Next.js starter for an international home grooming and beauty marketplace.

## Included in this first preview

- Brand homepage and service categories
- Responsive customer-facing landing page
- Professional application form
- Local photo preview
- Sample application ID card preview marked **PENDING REVIEW**
- Safety, verification and booking workflow explanations

## Important limitations

This is a frontend starter, not a production marketplace. The application form currently runs in the browser only. It does not save applications, verify identity documents, issue official IDs, accept payments, send messages, or track locations. Do not enter real identity numbers or upload sensitive documents into this demo.

The sample application number is intentionally a demo value. It is not a globally unique or official ID.

Before real users are onboarded, implement:
- Supabase authentication, database, private storage and row-level security
- Server-side validation, audit logs, rate limits and secure admin roles
- Consent-based location sharing only during active jobs
- Document review and manual approval before issuing signed QR-backed professional IDs
- Booking lifecycle, service catalogue, availability and cancellation rules
- Payment provider and marketplace payout compliance for each country
- Privacy notices, retention/deletion workflows and country-specific legal review
- Abuse reporting, emergency escalation, safeguarding and insurance processes

## Run locally

1. Install Node.js 20 LTS.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` only after creating a Supabase project. Never expose a service-role key in browser code.

## Free/open-source-first approach

Next.js, React, TypeScript, MapLibre GL JS, QR libraries and Supabase's open-source stack are candidates. Hosting, database, map tiles, email, SMS, WhatsApp, identity verification, payment processing and storage can have limits or fees. Check current terms and country availability before commercial use.

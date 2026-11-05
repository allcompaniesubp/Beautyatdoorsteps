# BeautyDoorstep — Global discovery and services marketplace blueprint

## Product direction

BeautyDoorstep is being designed as a global, location-aware, Justdial-style business discovery directory combined with a multi-category marketplace. It can help people discover businesses, professionals, products, public information and services, then—only where enabled—request a quote, book, buy or contact an approved provider.

The catalogue is broad by design. Actual availability is always determined by country, state/province, city, provider capacity, licences, insurance, payment access, safety and local law. A visible category is not a promise that the service is live.

## Marketplace coverage

The category registry includes personal care; home and office services; plumbing, electrical and repairs; construction and materials; groceries, food and retail; general e-commerce and second-hand goods; courier, logistics and transport; vehicles; property; legal information and eligible lawyer discovery; telemedicine, clinics, diagnostics and home healthcare; education and careers; finance and accounting; public services and government information; local business directories; manufacturing and wholesale; travel, events, pets, agriculture, security, recycling, family care and emergency-resource signposting.

The registry is data-driven. New categories can be added without treating each one as a separate app. Categories must carry a launch state and, where needed, a regulated-service flag.

## Directory versus transaction

- **Directory:** business name, category, address/service area, official website, opening hours and public contact details where lawful.
- **Information:** neutral links to official public resources and explanatory information with source/date labels.
- **Lead or quote request:** only when legally permitted and with clear user consent.
- **Booking/order/consultation:** only after the vertical is approved, operationally supported and enabled for the user's location.
- **Official government transaction:** only through an authorised official integration or by redirecting users to the genuine government portal. Never imitate a government portal or claim government endorsement.

## Regulated verticals and India-specific launch gates

### Lawyers and legal services
India's Bar Council of India Rules, Rule 36 restricts advocates from advertising or soliciting work. BeautyDoorstep must not launch paid lawyer rankings, promotional claims, lead-selling, solicitation campaigns or pay-per-client referral arrangements without a written legal opinion confirming what is permitted. A neutral public-information directory, official bar/court links and user-initiated discovery still require review of the exact presentation and workflow by Indian legal counsel. Verify enrolment and current standing through an authorised source where available; do not describe platform checks as Bar Council certification. The platform does not provide legal advice or create an advocate-client relationship.

### Doctors and healthcare
Online consultations must be provided by appropriately registered practitioners who independently decide whether telemedicine is suitable, identify themselves and the patient, obtain required consent, maintain appropriate records and follow current professional rules. The platform must not diagnose, prescribe, triage emergencies or substitute for a clinician. Emergency symptoms require clear directions to local emergency services. Healthcare facilities, labs, pharmacies, nursing and allied professionals each need their own local registration, scope-of-practice and privacy checks. Do not expose health records in public profiles or ordinary support tooling.

### Government and public services
Start with a verified directory of official departments, schemes, portals, offices, public utilities, tenders, certificates, licences, transport and consular resources. Show the responsible agency, official domain, jurisdiction, last-checked date and direct official link. Do not collect government ID documents or fees merely to provide directory information. Integrations such as DigiLocker/API Setu require the organisation to apply, be accepted, receive credentials, build to the API specification and complete required testing/audit before going live. Access to one API does not grant access to every department or service. No impersonation, unofficial certificate issuance, guaranteed benefit claims or unauthorised scraping.

### Other regulated/high-risk categories
Transport, pharmacy, finance, insurance, real estate, construction, electrical work, security, childcare, veterinary care, agriculture inputs and waste handling require country/state-specific checks, professional credentials, permits, insurance and consumer disclosures. Disable transactions until each launch checklist is signed off.

## Business directory and listings

Support sole traders, professionals, shops, local branches, companies, manufacturers, wholesalers, NGOs and public institutions. Collect only information needed for the listing. Business owners must confirm authority to manage a listing. Provide claim, correction, duplicate, impersonation, complaint and removal workflows. Public ratings must be based on genuine, policy-compliant experiences; prohibit fake reviews, purchased ratings, defamatory content and undisclosed paid placement. Clearly label sponsored placement if it is legally permitted.

## Core platform modules

- Identity and access: customers, providers, merchants, drivers, agents, professionals, business owners, public information editors, support and tightly controlled administrators.
- Global directory: business profiles, branch locations, categories, opening hours, contact preferences, official links, service areas and claim/moderation workflow.
- Catalogue: hierarchical categories, country/city availability, regulated flags, launch waves and transaction switches.
- Provider onboarding: business details, skills, service areas, private documents, qualification checks, review expiry and appeals.
- Commerce: products, variants, inventory, carts, orders, taxes, shipping, returns, refunds and seller payouts.
- Services: request, quote, scheduling, assignment, check-in, completion, review, cancellation and dispute.
- Legal: jurisdiction and practice-area discovery only after ethics review; conflict checks and engagement agreements remain between client and lawyer.
- Healthcare: practitioner/facility credential review, consent, secure consultation, clinical records controls, escalation and retention rules.
- Government directory: agency/source registry, official links, jurisdiction, freshness checks, accessibility and approved API connector registry.
- Mobility and delivery: eligible dispatch, trip/order states, location consent, proof of delivery and incident handling.
- Property and projects: listings, authority/ownership checks, bids, quotations, milestones and dispute records.
- Trust and safety: moderation, fraud reporting, private documents, safeguarding, audit logs, appeals and incident response.
- Payments: country-specific providers, taxes, commissions, refunds, payout reconciliation and financial audit.
- Internationalization: country, currency, language, time zone, units, address formats and local rules.

## Terms and policy pack

Before public launch, publish counsel-reviewed versions of:
1. Customer Terms of Use.
2. Business/Provider and Merchant Terms.
3. Marketplace and Listing Rules.
4. Booking, Cancellation, Refund and Dispute Policy.
5. Privacy Notice and Cookie/Tracking Notice.
6. Healthcare/Telemedicine Terms and informed-consent workflow.
7. Legal-directory disclaimer and professional-conduct rules.
8. Government-information and third-party-link disclaimer.
9. Prohibited and restricted products/services policy.
10. Community, review and content policy.
11. Safety, safeguarding and emergency policy.
12. Accessibility, complaints and grievance procedure.
13. Country-specific addenda, tax disclosures and consumer rights.

Drafts are not legal advice and must be reviewed by qualified counsel in each launch jurisdiction. A single global terms document cannot replace mandatory local terms or professional rules.

## Launch strategy

### Foundation
- Global business discovery directory and category registry.
- Customer/business roles, business claim process, moderation and admin controls.
- Start with lower-risk directory information and a limited pilot of approved personal/home services.

### Next
- Local retail, e-commerce, groceries, delivery and business quote requests after seller, fulfilment, tax and payment readiness.
- Government/public service directory using official links and verified sources.

### Later / gated
- Lawyers, doctors, telemedicine, pharmacies, financial services, transport, property transactions, childcare, security, construction and other regulated verticals.
- Each needs a separate jurisdictional legal memo, partner approval, credentials, insurance, operating procedures, privacy assessment and incident response plan.

## Non-negotiable safeguards

- Catalogue visibility is separate from transaction availability.
- Never imply government ownership, endorsement or official status.
- Government ID and professional documents remain in private storage with least-privilege access and retention/deletion controls.
- A platform badge is not a government licence, police clearance or professional qualification.
- Precise location is collected only with explicit consent for a stated purpose and automatically stops when the active booking/trip ends.
- Health, legal and financial data receive stricter access controls and are not used for advertising.
- Never expose service-role keys or administrative credentials in browser code.
- No paid ranking, referral or lead-selling for regulated professions until counsel confirms it is lawful.
- Do not enable regulated transactions globally by default.
- Do not promise universal delivery or service availability.

## Architecture direction

- Next.js App Router + TypeScript.
- Dedicated Supabase project for BeautyDoorstep only, with Auth, PostgreSQL and private Storage after credentials are configured securely.
- Row-level security for customer/provider data; privileged moderation and financial operations only through trusted server-side code.
- Data-driven country, category, directory-source and launch configuration.
- Separate adapters for maps, payments, messaging, identity checks and official government APIs. Integrate only after checking regional availability, pricing, data-processing terms, permission and compliance.
- Keep verticals modular so directory, commerce, healthcare, legal, mobility, property and government information can be independently disabled.

## Current implementation status

The homepage and category registry are a product preview. The Supabase SQL migration is a proposed starting schema and has not been applied or tested against a live project. Authentication, business directory search backed by a database, online consultations, legal engagement, government API connections, booking, dispatch, payments, QR IDs and live tracking are not implemented. This repository has not been deployed as part of this work.

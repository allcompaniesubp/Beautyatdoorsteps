# BeautyDoorstep — Global marketplace blueprint

## Product direction

BeautyDoorstep is evolving from a beauty/home-grooming concept into a multi-vertical, location-aware marketplace. The brand remains BeautyDoorstep for now; the product experience must make clear that it covers much more than beauty.

The platform connects customers with local businesses, independent professionals, merchants, delivery partners, mobility operators, property professionals and project suppliers. It should support B2C, B2B, C2C and B2B2C models where lawful and operationally appropriate.

## Catalogue domains

1. Personal care: barbering, salons, makeup, nails, skincare, qualified wellness.
2. Home and facility services: cleaning, laundry, housekeeping, pest control, gardening, security and facility maintenance.
3. Repairs: plumbing, electrical, carpentry, locksmiths, appliances, electronics, HVAC, solar and general handyman work.
4. Building and projects: architecture, engineering, construction, renovation, painting, interiors, contractors, project tenders, tools and building materials.
5. Quick commerce: groceries, fresh produce, household essentials, food, bakery, beverages and permitted pharmacy products.
6. E-commerce: fashion, footwear, electronics, phones, furniture, homeware, books, toys, sports, beauty products, automotive parts, office supplies and local shop inventory.
7. Delivery and logistics: instant/local delivery, scheduled delivery, courier, parcels, errands, moving, freight, warehousing and business logistics.
8. Mobility: bike taxi, taxis, rides, car hire, accessible transport, vehicle service, roadside assistance and EV charging.
9. Property: property discovery, rentals, sales, agents, inspections, property management and maintenance.
10. Professional and personal services: education, tutoring, IT, design, consulting, photography, events, travel, hospitality, pet care and eligible healthcare/wellness.
11. Business and rural markets: wholesale, procurement, agriculture, farm supplies, equipment, produce, livestock services and local business services.
12. Future discovery categories: jobs, local gigs, second-hand goods, rentals, subscriptions, repair/reuse, community services and other lawful categories.

The category registry is intentionally data-driven so new categories can be added without rebuilding the marketplace architecture.

## Reference research

This initial scan reviewed public product/service descriptions and marketplace models, not every website in the world. Useful reference points:

- Swiggy describes separate food delivery, grocery/Instamart and dining use cases: https://www.swiggy.com/corporate/our-business/
- Taskrabbit describes local tasks, moving, delivery, shopping and errands: https://www.taskrabbit.com/Delivery and https://www.taskrabbit.com/services/shopping-delivery
- RENET publicly groups e-commerce, local services, grocery, real estate, construction, transport, B2B and many adjacent categories: https://renet.co.in/
- Everyday Superapp separates live, pilot, launching and roadmap services, a useful model for honest availability labels: https://everydaysuperapp.com/services/
- PwC's super-app analysis explains horizontal and vertical integration of services under a shared user experience: https://www.pwc.in/assets/pdfs/superapps-breaking-down-barriers-building-bridges.pdf

These are design references only. BeautyDoorstep must create its own original design, code, policies and partner relationships. It must not copy another platform's protected content or imply partnerships.

## Platform modules

- Identity and access: customer, provider, merchant, driver/courier, agent, contractor, project buyer, support and administrator roles.
- Marketplace catalogue: hierarchical categories, country/city availability, regulated-service flags and launch-wave controls.
- Provider onboarding: profiles, business details, skills, service areas, private documents, review workflow and approval expiry.
- Commerce: merchants, product listings, inventory, variants, carts, orders, refunds, returns and fulfilment.
- Service bookings: request, quote, scheduling, assignment, check-in, completion, review, cancellation and dispute.
- Mobility: ride requests, eligible drivers/operators, fare estimates, dispatch, trip states and emergency/support events.
- Delivery: pickup/dropoff, parcel metadata, delivery assignment, proof of delivery and tracking consent.
- Projects: scope documents, quote requests, milestones, bids, contracts and dispute records.
- Property: listings, agents, viewing requests, ownership/authority checks, rental/sale workflows and anti-fraud moderation.
- Trust and safety: identity and licence checks, private documents, moderation, incident reports, audit trail and appeals.
- Payments: country-specific payment providers, tax calculation, commissions, refunds, payout reconciliation and financial audit.
- Internationalization: country, currency, language, time zone, units, tax rules, address format and local availability.

## Launch strategy

### Foundation
- Account and role model, database, category registry, admin review controls.
- First pilot categories: beauty/personal care, cleaning, plumbing, electrical (only with local qualification controls), appliance repair and handyman services.
- Provider application, secure document process, booking requests and admin moderation.

### Next
- Local stores and general e-commerce catalogue.
- Groceries and essentials where merchant and fulfilment partners exist.
- Courier, errands, vehicle repair, property maintenance and building-material listings.

### Later / gated
- Ride-hailing and bike taxi; construction and large project contracts; real estate transactions; healthcare, pharmacy, finance, childcare, security, agriculture and other regulated or high-risk categories.
- Each requires separate legal, insurance, safety, identity, licence, payment and operational readiness reviews for each target jurisdiction.

## Non-negotiable safeguards

- Do not advertise a service as bookable in a city until approved providers and operational support exist there.
- Do not represent a platform identity check as a government licence, police clearance or professional qualification.
- Government identity documents and sensitive application data must be stored in private storage, never public buckets or public profile fields.
- A professional credential is issued only after admin review; statuses include draft, pending, rejected, expired and approved.
- Precise location is collected only when needed, with explicit consent, a clear purpose, limited access and automatic expiry when the active job/trip ends.
- Never expose service-role keys or administrative credentials in browser code.
- Use provider/merchant status checks, moderation, fraud prevention, audit logs and dispute handling.
- Payments, escrow, wallets, insurance, tax, pharmacy, healthcare, real estate, transport and construction obligations vary by country. Do not enable them globally by default.
- Avoid promising universal instant delivery. Delivery speed depends on local inventory, distance, weather, staffing and partner capacity.

## Architecture direction

- Next.js App Router + TypeScript for web experience.
- Supabase Auth + PostgreSQL + private Storage as a candidate first backend.
- Row-level security for customer/provider data; privileged moderation and financial operations only through trusted server-side code.
- Category and country configuration must be data-driven.
- Integrate maps, payment processors, messaging and identity-verification vendors only after checking regional availability, cost, data-processing terms and compliance.
- Keep modules separable so mobility, commerce, property and projects can scale independently.

## Current implementation status

The homepage and category registry are a product preview. The SQL migration is a proposed initial schema and has not yet been applied to a Supabase project. There is no live authentication, payment processing, real booking, dispatch, tracking or identity verification until credentials, policies, testing and deployment are completed.

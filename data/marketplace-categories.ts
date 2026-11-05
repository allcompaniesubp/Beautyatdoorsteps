export type MarketplaceCategory = {
  slug: string;
  name: string;
  group: string;
  description: string;
  launchWave: "foundation" | "next" | "later";
  regulated?: boolean;
};

export const marketplaceCategories: MarketplaceCategory[] = [
  // Personal care and home
  { slug: "beauty-personal-care", name: "Beauty & personal care", group: "Personal care", description: "Barbers, salons, makeup, nails, skincare and qualified wellness professionals.", launchWave: "foundation" },
  { slug: "home-cleaning", name: "Home & office cleaning", group: "Home services", description: "Housekeeping, deep cleaning, laundry, pest control and sanitation.", launchWave: "foundation" },
  { slug: "gardening-landscaping", name: "Gardening & landscaping", group: "Home services", description: "Garden care, landscaping, lawn services, tree care and irrigation.", launchWave: "next" },
  { slug: "plumbing", name: "Plumbing & water systems", group: "Repairs & maintenance", description: "Leaks, taps, pipes, drains, pumps, tanks and installations.", launchWave: "foundation" },
  { slug: "electrical", name: "Electrical work", group: "Repairs & maintenance", description: "Wiring, lighting, switches, fans, inverters and electrical troubleshooting.", launchWave: "foundation", regulated: true },
  { slug: "appliance-repair", name: "Appliance & electronics repair", group: "Repairs & maintenance", description: "AC, refrigerator, washing machine, television, computer and device repair.", launchWave: "foundation" },
  { slug: "handyman-carpentry", name: "Handyman & carpentry", group: "Repairs & maintenance", description: "Furniture assembly, doors, locks, fixtures, shelves and general repairs.", launchWave: "foundation" },
  { slug: "painting-interiors", name: "Painting & interiors", group: "Building & projects", description: "Painting, flooring, ceilings, wallpaper, modular fittings and interiors.", launchWave: "next" },
  { slug: "construction-renovation", name: "Construction & renovation", group: "Building & projects", description: "Civil works, renovations, structural projects and qualified contractors.", launchWave: "later", regulated: true },
  { slug: "building-materials", name: "Building materials & equipment", group: "Shopping & supplies", description: "Cement, steel, timber, tools, sanitaryware, electrical and plumbing supplies.", launchWave: "next" },

  // Shopping, food and delivery
  { slug: "groceries-essentials", name: "Groceries & daily essentials", group: "Quick commerce", description: "Fresh produce, staples, dairy, snacks, beverages and household essentials.", launchWave: "next" },
  { slug: "food-restaurants", name: "Food, restaurants & catering", group: "Quick commerce", description: "Meals, bakery, catering, meal preparation and local food businesses.", launchWave: "later" },
  { slug: "pharmacy-health", name: "Pharmacy & health essentials", group: "Shopping & supplies", description: "Permitted pharmacy and wellness products from authorised sellers only.", launchWave: "later", regulated: true },
  { slug: "general-ecommerce", name: "General online shopping", group: "E-commerce", description: "Clothing, footwear, electronics, phones, furniture, books, toys and homeware.", launchWave: "next" },
  { slug: "local-store-shopping", name: "Shop local & same-day delivery", group: "E-commerce", description: "Discover nearby stores, compare products and arrange pickup or delivery.", launchWave: "next" },
  { slug: "secondhand-rentals", name: "Pre-owned goods & rentals", group: "E-commerce", description: "Approved second-hand goods, equipment rental, furniture rental and reuse.", launchWave: "later" },
  { slug: "courier-parcel", name: "Courier, parcel & errands", group: "Delivery & logistics", description: "Document delivery, parcel pickup, shopping errands and business deliveries.", launchWave: "next" },
  { slug: "moving-logistics", name: "Moving, freight & logistics", group: "Delivery & logistics", description: "Packers, movers, storage, cargo, furniture delivery and business logistics.", launchWave: "later" },
  { slug: "wholesale-b2b", name: "Wholesale & business supplies", group: "Business & trade", description: "Bulk buying, trade suppliers, office supplies and business procurement.", launchWave: "later" },

  // Mobility and property
  { slug: "bike-taxi-rides", name: "Bike taxi, rides & taxis", group: "Mobility", description: "Licensed two-wheeler, car, taxi and accessible ride services where permitted.", launchWave: "later", regulated: true },
  { slug: "vehicle-services", name: "Vehicle repair & roadside help", group: "Mobility", description: "Mechanics, tyre repair, towing, car wash, servicing and EV support.", launchWave: "next" },
  { slug: "vehicle-sales-rentals", name: "Vehicle sales & rentals", group: "Mobility", description: "Verified vehicle dealers, lawful rentals, leasing and fleet services.", launchWave: "later", regulated: true },
  { slug: "real-estate", name: "Real estate & rentals", group: "Property", description: "Property discovery, rentals, sales, agents, inspections and property management.", launchWave: "later", regulated: true },
  { slug: "property-maintenance", name: "Property maintenance & management", group: "Property", description: "Caretaking, inspections, repairs, cleaning and facility management.", launchWave: "next" },

  // Legal, health and professional services
  { slug: "lawyers-legal-information", name: "Lawyers & legal information", group: "Legal services", description: "Find official legal resources and eligible legal professionals; no legal advice or representation is supplied by the platform.", launchWave: "later", regulated: true },
  { slug: "online-legal-consultation", name: "Online legal consultation", group: "Legal services", description: "Consultations only where permitted by professional conduct rules and local law; advocate advertising and solicitation restrictions apply.", launchWave: "later", regulated: true },
  { slug: "doctors-online", name: "Online doctors & teleconsultation", group: "Healthcare", description: "Remote consultations with verified, appropriately registered practitioners under applicable telemedicine rules.", launchWave: "later", regulated: true },
  { slug: "clinics-hospitals", name: "Clinics, hospitals & diagnostics", group: "Healthcare", description: "Discover licensed care facilities, laboratories, imaging and appointment services.", launchWave: "later", regulated: true },
  { slug: "home-healthcare", name: "Home healthcare & nursing", group: "Healthcare", description: "Eligible home nursing, physiotherapy and care services from qualified personnel.", launchWave: "later", regulated: true },
  { slug: "mental-health", name: "Mental health & counselling", group: "Healthcare", description: "Qualified mental-health professionals, counselling and crisis-resource signposting.", launchWave: "later", regulated: true },
  { slug: "education-tutoring", name: "Education, tutors & training", group: "Education & careers", description: "Home tuition, online learning, music, languages, coaching and skills training.", launchWave: "later" },
  { slug: "jobs-gigs", name: "Jobs, gigs & local talent", group: "Education & careers", description: "Local work opportunities, freelancers, recruitment and verified specialist talent.", launchWave: "later" },
  { slug: "professional-projects", name: "Professional & project work", group: "Business & trade", description: "Architecture, engineering, design, IT, consulting, procurement and project tenders.", launchWave: "later", regulated: true },
  { slug: "finance-insurance", name: "Finance, accounting & insurance", group: "Financial services", description: "Discover appropriately authorised accountants, advisers, lenders and insurers; no unlicensed financial activity.", launchWave: "later", regulated: true },
  { slug: "tax-company-compliance", name: "Tax, company & compliance services", group: "Business & trade", description: "Tax preparation, bookkeeping, company-secretarial and compliance professionals subject to local rules.", launchWave: "later", regulated: true },

  // Government and public-interest discovery
  { slug: "government-services-directory", name: "Government services directory", group: "Government & public services", description: "Find official national, state and local government portals, offices, schemes and service information.", launchWave: "later" },
  { slug: "citizen-certificates-licenses", name: "Certificates, licences & registrations", group: "Government & public services", description: "Guidance and links to official application channels for certificates, permits, registrations and renewals.", launchWave: "later", regulated: true },
  { slug: "government-benefits-schemes", name: "Public benefits & welfare schemes", group: "Government & public services", description: "Discover eligibility information and official application links for public welfare schemes.", launchWave: "later" },
  { slug: "public-utilities", name: "Public utilities & civic services", group: "Government & public services", description: "Official information for water, electricity, sanitation, municipal services and public complaints.", launchWave: "later" },
  { slug: "public-transport-services", name: "Public transport & civic mobility", group: "Government & public services", description: "Official transit information, schedules and authorised ticketing links where available.", launchWave: "later" },
  { slug: "government-tenders-procurement", name: "Government tenders & procurement", group: "Government & public services", description: "Discover official tender notices and procurement portals; bids remain on authorised systems.", launchWave: "later", regulated: true },
  { slug: "embassies-consular", name: "Embassies & consular information", group: "Government & public services", description: "Official embassy, consulate, visa and travel-advisory information and links.", launchWave: "later" },

  // Businesses, lifestyle and specialist categories
  { slug: "business-directory", name: "All businesses & local directory", group: "Business directory", description: "Discover shops, offices, manufacturers, service companies, branches and local organisations.", launchWave: "foundation" },
  { slug: "manufacturing-industrial", name: "Manufacturing & industrial suppliers", group: "Business directory", description: "Factories, workshops, industrial equipment, components and authorised suppliers.", launchWave: "later" },
  { slug: "events-hospitality", name: "Events, travel & hospitality", group: "Lifestyle & travel", description: "Photography, event support, hotels, tours, guides and travel services.", launchWave: "later", regulated: true },
  { slug: "pet-care", name: "Pet care & veterinary", group: "Lifestyle & travel", description: "Pet grooming, sitting, walking and veterinary services where licensed.", launchWave: "later", regulated: true },
  { slug: "agriculture", name: "Agriculture & farm supplies", group: "Business & trade", description: "Farm inputs, equipment, produce, livestock services and rural logistics.", launchWave: "later", regulated: true },
  { slug: "security-safety", name: "Security & safety services", group: "Specialist services", description: "Eligible security, alarm, fire-safety and access-control providers with required licences.", launchWave: "later", regulated: true },
  { slug: "waste-recycling", name: "Waste, recycling & environmental services", group: "Specialist services", description: "Waste collection, recycling, repair, reuse and approved environmental services.", launchWave: "later", regulated: true },
  { slug: "child-family-care", name: "Child, elder & family care", group: "Specialist services", description: "Vetted care services subject to safeguarding, background checks and local requirements.", launchWave: "later", regulated: true },
  { slug: "emergency-assistance", name: "Emergency & urgent assistance", group: "Specialist services", description: "Urgent non-emergency repair dispatch and links to official emergency services.", launchWave: "later", regulated: true },
];

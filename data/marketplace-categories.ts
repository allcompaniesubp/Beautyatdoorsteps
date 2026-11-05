export type MarketplaceCategory = {
  slug: string;
  name: string;
  group: string;
  description: string;
  launchWave: "foundation" | "next" | "later";
  regulated?: boolean;
};

export const marketplaceCategories: MarketplaceCategory[] = [
  { slug: "beauty-personal-care", name: "Beauty & personal care", group: "Personal care", description: "Barbers, salons, makeup, nails, skincare and qualified wellness professionals.", launchWave: "foundation" },
  { slug: "home-cleaning", name: "Home & office cleaning", group: "Home services", description: "Housekeeping, deep cleaning, laundry, pest control and sanitation.", launchWave: "foundation" },
  { slug: "plumbing", name: "Plumbing & water systems", group: "Repairs & maintenance", description: "Leaks, taps, pipes, drains, pumps, tanks and installations.", launchWave: "foundation" },
  { slug: "electrical", name: "Electrical work", group: "Repairs & maintenance", description: "Wiring, lighting, switches, fans, inverters and electrical troubleshooting.", launchWave: "foundation", regulated: true },
  { slug: "appliance-repair", name: "Appliance & electronics repair", group: "Repairs & maintenance", description: "AC, refrigerator, washing machine, television, computer and device repair.", launchWave: "foundation" },
  { slug: "handyman-carpentry", name: "Handyman & carpentry", group: "Repairs & maintenance", description: "Furniture assembly, doors, locks, fixtures, shelves and general repairs.", launchWave: "foundation" },
  { slug: "painting-interiors", name: "Painting & interiors", group: "Building & projects", description: "Painting, flooring, ceilings, wallpaper, modular fittings and interiors.", launchWave: "next" },
  { slug: "construction-renovation", name: "Construction & renovation", group: "Building & projects", description: "Civil works, renovations, structural projects and licensed contractors.", launchWave: "later", regulated: true },
  { slug: "building-materials", name: "Building materials & equipment", group: "Shopping & supplies", description: "Cement, steel, timber, tools, sanitaryware, electrical and plumbing supplies.", launchWave: "next" },
  { slug: "groceries-essentials", name: "Groceries & daily essentials", group: "Quick commerce", description: "Fresh produce, staples, dairy, snacks, beverages and household essentials.", launchWave: "next" },
  { slug: "food-restaurants", name: "Food, restaurants & catering", group: "Quick commerce", description: "Meals, bakery, catering, meal prep and local food businesses.", launchWave: "later" },
  { slug: "pharmacy-health", name: "Pharmacy & health essentials", group: "Shopping & supplies", description: "Permitted pharmacy and wellness products from authorised sellers.", launchWave: "later", regulated: true },
  { slug: "general-ecommerce", name: "General online shopping", group: "E-commerce", description: "Clothing, footwear, electronics, books, furniture, homeware and more.", launchWave: "next" },
  { slug: "local-store-shopping", name: "Shop local & same-day delivery", group: "E-commerce", description: "Discover nearby stores, compare products and arrange pickup or delivery.", launchWave: "next" },
  { slug: "courier-parcel", name: "Courier, parcel & errands", group: "Delivery & logistics", description: "Document delivery, parcel pickup, shopping errands and business deliveries.", launchWave: "next" },
  { slug: "bike-taxi-rides", name: "Bike taxi, rides & taxis", group: "Mobility", description: "Licensed two-wheeler, car, taxi and accessible ride services where permitted.", launchWave: "later", regulated: true },
  { slug: "vehicle-services", name: "Vehicle repair & roadside help", group: "Mobility", description: "Mechanics, tyre repair, towing, car wash, servicing and EV support.", launchWave: "next" },
  { slug: "moving-logistics", name: "Moving, freight & logistics", group: "Delivery & logistics", description: "Packers, movers, storage, cargo, furniture delivery and business logistics.", launchWave: "later" },
  { slug: "real-estate", name: "Real estate & rentals", group: "Property", description: "Property discovery, rentals, sales, agents, inspections and property management.", launchWave: "later", regulated: true },
  { slug: "property-maintenance", name: "Property maintenance & management", group: "Property", description: "Caretaking, inspections, repairs, cleaning and facility management.", launchWave: "next" },
  { slug: "professional-projects", name: "Professional & project work", group: "Business & projects", description: "Architecture, design, engineering, IT, consulting, procurement and project tenders.", launchWave: "later", regulated: true },
  { slug: "education-tutoring", name: "Education, tutors & training", group: "Personal & professional", description: "Home tuition, online learning, music, languages, coaching and skills training.", launchWave: "later" },
  { slug: "health-wellness", name: "Healthcare & wellness", group: "Personal & professional", description: "Eligible care, fitness, yoga and wellness services from qualified professionals.", launchWave: "later", regulated: true },
  { slug: "pet-care", name: "Pet care & veterinary", group: "Personal & professional", description: "Pet grooming, sitting, walking and veterinary services where licensed.", launchWave: "later", regulated: true },
  { slug: "events-hospitality", name: "Events, travel & hospitality", group: "Personal & professional", description: "Photography, event support, hotels, tours, guides and travel services.", launchWave: "later" },
  { slug: "agriculture", name: "Agriculture & farm supplies", group: "Business & projects", description: "Farm inputs, equipment, produce, livestock services and rural logistics.", launchWave: "later", regulated: true },
  { slug: "wholesale-b2b", name: "Wholesale & business supplies", group: "Business & projects", description: "Bulk buying, trade suppliers, office supplies and business procurement.", launchWave: "later" },
  { slug: "jobs-gigs", name: "Jobs, gigs & local talent", group: "Personal & professional", description: "Local work opportunities, freelancers and verified specialist talent.", launchWave: "later" },
  { slug: "emergency-assistance", name: "Emergency & urgent assistance", group: "Special assistance", description: "Urgent non-emergency repair dispatch and links to appropriate emergency services.", launchWave: "later", regulated: true },
];

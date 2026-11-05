"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, CarFront, CheckCircle2, Globe2, House, Search, ShieldCheck, ShoppingBag, ShoppingBasket, Truck, Wrench, Scale, Stethoscope, Landmark, Store } from "lucide-react";
import { marketplaceCategories } from "@/data/marketplace-categories";

const groups = [
  { title: "Home repairs & maintenance", icon: Wrench, description: "Get trusted help for the jobs that keep your home running." },
  { title: "Groceries & quick delivery", icon: ShoppingBasket, description: "Everyday essentials and local-store delivery, subject to area coverage." },
  { title: "Shopping & e-commerce", icon: ShoppingBag, description: "Discover products from local merchants and online sellers." },
  { title: "Rides & mobility", icon: CarFront, description: "Request rides and local transport from eligible licensed partners." },
  { title: "Property & real estate", icon: Building2, description: "Explore rentals, property sales, agents and maintenance." },
  { title: "Construction & projects", icon: BriefcaseBusiness, description: "Find contractors, specialists, materials and project support." },
  { title: "Lawyers & legal information", icon: Scale, description: "Discover eligible legal professionals and official legal resources where permitted." },
  { title: "Doctors & healthcare", icon: Stethoscope, description: "Find approved healthcare providers and teleconsultation services where enabled." },
  { title: "Government & public services", icon: Landmark, description: "Find official portals, public schemes, civic services and government information." },
  { title: "All businesses & local directory", icon: Store, description: "Discover shops, companies, offices, manufacturers and service providers." },
  { title: "Healthy meals & fresh produce", icon: ShoppingBasket, description: "Explore breakfast, lunch, dinner, tiffin plans, fruits and vegetables from local sellers." },
  { title: "Online learning & coaching", icon: BriefcaseBusiness, description: "Find exam preparation, job coaching, tutoring, languages and professional courses." },
  { title: "Online professional services", icon: Globe2, description: "Discover remote consulting, IT support, design, writing, translation and virtual assistance." },
  { title: "Ayurveda & wellness", icon: Stethoscope, description: "Explore qualified wellness practitioners and permitted products subject to local safeguards." },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const filtered = useMemo(() => marketplaceCategories.filter((item) => {
    const matchesSearch = (item.name + " " + item.description + " " + item.group).toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (activeGroup === "All" || item.group === activeGroup);
  }), [search, activeGroup]);
  const groupNames = ["All", ...Array.from(new Set(marketplaceCategories.map((item) => item.group)))];

  return <main>
    <header className="topbar">
      <a className="brand" href="#"><span className="brand-mark">D</span><span>Door<span className="brand-accent">Sphere</span><small>EVERYTHING. EVERYONE. WITHIN REACH.</small></span></a>
      <nav className="nav"><a href="#explore">Explore</a><a href="#how">How it works</a><a href="#safety">Trust & safety</a><a href="#partners">Become a partner</a><a className="nav-cta" href="#explore">Explore marketplace <ArrowRight size={16}/></a></nav>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Globe2 size={15}/> A GLOBAL DOORSTEP MARKETPLACE</div>
        <h1>Whatever you need.<br/><em>Right to your door.</em></h1>
        <p>From a quick ride or grocery delivery to a leaking tap, a home renovation, a new sofa or a property search — discover products, people and services in one place.</p>
        <div className="hero-actions"><a className="button button-dark" href="#explore">Explore all categories <ArrowRight size={17}/></a><a className="text-link" href="#partners">List your business <ArrowRight size={16}/></a></div>
        <div className="trust-line"><span><ShieldCheck size={17}/> Trust-led onboarding</span><span><Globe2 size={17}/> Country-aware services</span><span><BadgeCheck size={17}/> Reviewed providers</span></div>
      </div>
      <div className="hero-art"><div className="hero-photo"><div className="photo-overlay"><span>YOUR CITY. YOUR EVERYDAY NEEDS.</span><strong>One doorstep.<br/>A world of help.</strong></div></div><div className="floating-note"><span className="note-icon"><CheckCircle2 size={20}/></span><span><b>One connected marketplace</b><small>Services · Shopping · Mobility · Projects</small></span></div><div className="hero-stamp"><Globe2 size={20}/><span>LOCAL<br/>PEOPLE<br/>GLOBAL REACH</span></div></div>
    </section>

    <section className="quick-strip"><div><ShieldCheck/><span><b>Safer by design</b><small>Reviews and approval controls</small></span></div><div><Truck/><span><b>Flexible fulfilment</b><small>Pickup, delivery or home visit</small></span></div><div><House/><span><b>At your doorstep</b><small>Where local partners operate</small></span></div><div><Globe2/><span><b>Built to expand</b><small>Country and city availability</small></span></div></section>

    <section className="section" id="explore">
      <div className="section-heading"><div><div className="eyebrow">ONE PLACE FOR EVERYDAY LIFE</div><h2>What can we help you with?</h2></div><p>Search across businesses, government information, legal and healthcare discovery, home services, repairs, shopping, transport, property and professional work. Categories appear as they become available in your area.</p></div>
      <div className="search-bar"><Search size={19}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Try lawyer, doctor, government services, local shop, plumbing, groceries, taxi..." aria-label="Search marketplace categories"/></div>
      <div className="group-grid">{groups.map(({title,icon:Icon,description})=><a className="group-card" href="#categories" key={title}><span className="group-icon"><Icon size={22}/></span><span><b>{title}</b><small>{description}</small></span><ArrowRight size={17}/></a>)}</div>
      <div className="category-head" id="categories"><div><div className="eyebrow">DISCOVER THE MARKETPLACE</div><h3>Explore categories</h3></div><span className="category-count">{filtered.length} categories</span></div>
      <div className="filter-row">{groupNames.map(name=><button className={activeGroup===name?"filter active":"filter"} key={name} onClick={()=>setActiveGroup(name)}>{name}</button>)}</div>
      <div className="category-grid">{filtered.map(item=><article className="category-card" key={item.slug}><div className="category-card-top"><span>{item.group}</span>{item.regulated&&<span className="regulated">Local checks</span>}</div><h3>{item.name}</h3><p>{item.description}</p><div className="category-bottom"><span className={"wave "+item.launchWave}>{item.launchWave==="foundation"?"Foundation":item.launchWave==="next"?"Next phase":"Future phase"}</span><span className="category-arrow"><ArrowRight size={15}/></span></div></article>)}</div>
      {filtered.length===0&&<p className="empty-state">No category matches that search. Try another word or choose “All”.</p>}
      <p className="fine-print">These are planned marketplace categories, not a claim that every service is currently available. Availability depends on local partners, infrastructure, safety, licensing and law.</p>
    </section>

    <section className="how-section" id="how"><div className="section narrow"><div className="eyebrow light">ONE ACCOUNT. MANY POSSIBILITIES.</div><h2>One simple way to get things done.</h2><div className="steps"><div><span>01</span><h3>Choose what you need</h3><p>Search for a product, service, ride, delivery, property or project partner.</p></div><div><span>02</span><h3>Compare local options</h3><p>Review provider profiles, seller details, service scope, price and availability.</p></div><div><span>03</span><h3>Book, buy or request</h3><p>Choose home visit, pickup, delivery, scheduled work or a project quotation.</p></div><div><span>04</span><h3>Track and complete</h3><p>Follow order or booking updates and use support if something goes wrong.</p></div></div></div></section>

    <section className="section safety-section" id="safety"><div className="safety-copy"><div className="eyebrow">RESPONSIBLE GROWTH</div><h2>Convenience with<br/><em>trust built in.</em></h2><p>Different services need different safeguards. A grocery seller, electrician, taxi driver, real-estate agent and healthcare professional should not all pass through the same approval checklist.</p><ul><li><CheckCircle2/> Identity and business checks appropriate to the role</li><li><CheckCircle2/> Extra licence and qualification checks for regulated work</li><li><CheckCircle2/> Private handling of identity documents</li><li><CheckCircle2/> Location sharing only with clear consent and purpose</li><li><CheckCircle2/> Transparent quotes, cancellation and dispute processes</li><li><CheckCircle2/> Country-by-country launch and compliance controls</li></ul></div><div className="safety-card"><div className="shield-art"><ShieldCheck size={58}/></div><h3>Not every service launches everywhere.</h3><p>Categories can be visible in the platform catalogue while ordering stays disabled until the country, city, provider, insurance, payments and legal requirements are ready.</p><div className="status-row"><span className="status-dot"/><b>Availability is checked by location and service</b></div></div></section>

    <section className="join-section" id="partners"><div className="section join-layout"><div className="join-intro"><div className="eyebrow light">GROW WITH THE MARKETPLACE</div><h2>Bring your business.<br/><em>Reach more people.</em></h2><p>We plan to welcome skilled professionals, retailers, delivery partners, drivers, property specialists, contractors, project teams and local businesses.</p><div className="join-benefits"><span><CheckCircle2/> Create a business or professional profile</span><span><CheckCircle2/> List services, products or project capabilities</span><span><CheckCircle2/> Manage availability and service locations</span><span><CheckCircle2/> Receive requests after approval and launch</span></div></div><div className="application-panel"><div className="eyebrow">PARTNER NETWORK</div><h3>Partner registration is coming in the next build phase.</h3><p>We are preparing secure customer accounts, partner onboarding, admin review and the marketplace database before accepting real applications.</p><a className="button button-dark" href="https://github.com/allcompaniesubp/Beautyatdoorsteps">View project progress <ArrowRight size={16}/></a><p className="form-disclaimer">Please do not email identity documents or share passwords, bank details or government ID numbers through this preview.</p></div></div></section>

    <footer><div className="footer-brand"><a className="brand" href="#"><span className="brand-mark">B</span><span>beauty<span className="brand-accent">doorstep</span><small>ONE MARKETPLACE. EVERYDAY NEEDS.</small></span></a><p>Local services, products and people — connected at your doorstep.</p></div><div className="footer-links"><a href="#explore">Explore</a><a href="#safety">Trust & safety</a><a href="#partners">Partner with us</a><a href="/terms">Terms of Use</a><a href="/privacy">Privacy information</a></div><small>© {new Date().getFullYear()} BeautyDoorstep. Planned categories and availability vary by country and city. This is an early product preview, not a live ordering, healthcare, legal, government, transport or property service.</small></footer>
  </main>;
}

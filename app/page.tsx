"use client";

import { useState } from "react";
import { ArrowRight, BadgeCheck, CalendarDays, Check, Globe2, HeartHandshake, MapPin, Menu, Scissors, ShieldCheck, Sparkles, Users, Wallet, X } from "lucide-react";

const categories = [
  ["Men's grooming", "Haircuts, beard shaping, shaving and styling", "✂️"],
  ["Women's beauty", "Hair styling, facials, makeup and beauty care", "🌸"],
  ["Hair & skin care", "Hair spa, colouring and cleansing", "✨"],
  ["Massage & wellness", "Qualified head, foot and body massage", "💆"],
  ["Wedding & events", "Bridal, party and celebration grooming", "💍"],
  ["Family & senior care", "Convenient grooming for the whole family", "🏡"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photo, setPhoto] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Barber / men's grooming");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!photo) { alert("Please select a profile photograph."); return; }
    setSubmitted(true);
  }

  return <main>
    <header className="topbar">
      <a className="brand" href="#"><span className="brand-mark"><Scissors size={21}/></span><span>beauty<span className="brand-accent">doorstep</span><small>CARE THAT COMES TO YOU</small></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#how" onClick={() => setMenuOpen(false)}>How it works</a><a href="#safety" onClick={() => setMenuOpen(false)}>Safety</a><a href="#join" onClick={() => setMenuOpen(false)}>Join as a professional</a><a className="nav-cta" href="#join">Get started <ArrowRight size={16}/></a>
      </nav>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Globe2 size={15}/> PERSONAL CARE, WORLDWIDE</div>
        <h1>Your favourite care.<br/><em>At your doorstep.</em></h1>
        <p>Book barbers and beauty professionals who come to your home, hotel or workplace. Your time, your space, your style.</p>
        <div className="hero-actions"><a className="button button-dark" href="#services">Explore services <ArrowRight size={17}/></a><a className="text-link" href="#join">I’m a professional <ArrowRight size={16}/></a></div>
        <div className="trust-line"><span><ShieldCheck size={17}/> Verification-first</span><span><Users size={17}/> Inclusive choices</span><span><HeartHandshake size={17}/> Customer care</span></div>
      </div>
      <div className="hero-art"><div className="hero-photo"><div className="photo-overlay"><span>YOUR PERSONAL GROOMING EXPERIENCE</span><strong>Good care.<br/>Great confidence.</strong></div></div><div className="floating-note"><span className="note-icon"><BadgeCheck size={20}/></span><span><b>Reviewed professionals</b><small>Identity checks before approval</small></span></div><div className="hero-stamp"><Sparkles size={20}/><span>CARE<br/>WITHOUT<br/>THE COMMUTE</span></div></div>
    </section>

    <section className="quick-strip"><div><ShieldCheck/><span><b>Safety-led</b><small>Identity and profile review</small></span></div><div><CalendarDays/><span><b>On your schedule</b><small>Choose a convenient time</small></span></div><div><MapPin/><span><b>At your location</b><small>Home, hotel or workplace</small></span></div><div><Wallet/><span><b>Clear pricing</b><small>See costs before confirming</small></span></div></section>

    <section className="section" id="services"><div className="section-heading"><div><div className="eyebrow">THE CARE YOU NEED</div><h2>More than a haircut.</h2></div><p>From everyday grooming to special occasions, discover services delivered by professionals with appropriate skills.</p></div><div className="service-grid">{categories.map(([title, desc, emoji]) => <article className="service-card" key={title}><div className="service-emoji">{emoji}</div><h3>{title}</h3><p>{desc}</p><a href="#join">Explore category <ArrowRight size={15}/></a></article>)}</div><p className="fine-print">Availability depends on location, local regulations and verified qualifications. Massage and specialist treatments require appropriately trained providers.</p></section>

    <section className="how-section" id="how"><div className="section narrow"><div className="eyebrow light">SIMPLE FROM START TO FINISH</div><h2>Care in four easy steps.</h2><div className="steps"><div><span>01</span><h3>Choose your service</h3><p>Browse by service, location, availability and preferences.</p></div><div><span>02</span><h3>Meet your match</h3><p>Review the professional’s profile, skills and review status.</p></div><div><span>03</span><h3>Welcome your pro</h3><p>Follow booking updates and share the appointment with someone you trust.</p></div><div><span>04</span><h3>Enjoy and review</h3><p>Confirm completion and share an honest review.</p></div></div></div></section>

    <section className="section safety-section" id="safety"><div className="safety-copy"><div className="eyebrow">TRUST IS EARNED</div><h2>Professional standards.<br/><em>Personal peace of mind.</em></h2><p>BeautyDoorstep is being designed around identity checks, transparent profiles and safety at every stage of a booking.</p><ul><li><Check/> Identity and document review before approval</li><li><Check/> Professional ID only after admin approval</li><li><Check/> Booking check-in and completion confirmation</li><li><Check/> Consent-based location sharing during active jobs</li><li><Check/> Reporting and support workflows</li></ul></div><div className="safety-card"><div className="shield-art"><ShieldCheck size={58}/></div><h3>Verified means reviewed.</h3><p>Submitting an application does not automatically approve a professional or create a licence or proof of identity.</p><div className="status-row"><span className="status-dot"/><b>Approval required before bookings</b></div></div></section>

    <section className="join-section" id="join"><div className="section join-layout"><div className="join-intro"><div className="eyebrow light">GROW YOUR CAREER</div><h2>Bring your skills.<br/><em>Build your future.</em></h2><p>Join a growing network of grooming and beauty professionals. Share your experience and apply to offer services in your area.</p><div className="join-benefits"><span><Check/> Build your professional profile</span><span><Check/> Set your service area and availability</span><span><Check/> Receive booking opportunities after approval</span></div><div className="note-box"><ShieldCheck/><span><b>Your information deserves protection.</b><small>Government ID documents must be collected through a secure private process in a later phase. Do not submit identity numbers here.</small></span></div></div>
    <div className="application-panel"><div className="form-title"><div><div className="eyebrow">PROFESSIONAL NETWORK</div><h3>Start your application</h3></div><span className="step-label">APPLICATION · DEMO</span></div>
    {submitted ? <div className="application-result"><div className="success-icon"><Check/></div><h3>Preview created, {name}!</h3><p>This is only a local demonstration. Your application has not been sent or saved.</p><div className="id-card"><div className="id-card-top"><span>BEAUTYDOORSTEP</span><small>APPLICATION PREVIEW</small></div><div className="id-card-body"><div className="id-photo">{photo && <img src={photo} alt="Profile preview"/>}</div><div className="id-info"><b>{name}</b><span>{category}</span><small>{city}, {country}</small></div></div><div className="id-card-bottom"><span>DEMO ONLY · NOT AN OFFICIAL ID</span><b className="pending-pill">PENDING REVIEW</b></div></div><p className="id-warning">No professional ID or booking access is issued until secure checks and administrator approval are completed.</p><button className="button button-outline" onClick={() => setSubmitted(false)}>Edit application</button></div> : <form onSubmit={submit}>
      <label className="photo-upload"><span className="photo-circle">{photo ? <img src={photo} alt="Selected profile"/> : <Users/>}</span><span><b>{photoName || "Add a profile photograph"}</b><small>Image only · Maximum 5 MB · Preview stays on this device</small></span><input type="file" accept="image/*" onChange={e => {const f=e.target.files?.[0]; if(!f)return; if(f.size>5*1024*1024){alert("Choose an image under 5 MB.");return;} const reader=new FileReader(); reader.onload=()=>setPhoto(String(reader.result||"")); reader.readAsDataURL(f); setPhotoName(f.name);}} required={!photo}/></label>
      <div className="form-grid"><label>Full name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label><label>Email address<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Phone number<input required value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Include country code"/></label><label>Country<input required value={country} onChange={e=>setCountry(e.target.value)} placeholder="Country"/></label><label>City / service area<input required value={city} onChange={e=>setCity(e.target.value)} placeholder="City"/></label><label>Professional category<select value={category} onChange={e=>setCategory(e.target.value)}><option>Barber / men&apos;s grooming</option><option>Women&apos;s beauty</option><option>Hair &amp; skin care</option><option>Massage &amp; wellness</option><option>Wedding &amp; events</option><option>Other</option></select></label></div>
      <p className="form-disclaimer">By continuing, you confirm that the details are yours and agree to be contacted about this demo application. This form does not transmit data. A real application flow will include a privacy notice and secure document process.</p><button className="button button-dark submit-button" type="submit">Preview my application <ArrowRight size={16}/></button>
    </form>}</div></div></section>
    <footer><div className="footer-brand"><a className="brand" href="#"><span className="brand-mark"><Scissors size={20}/></span><span>beauty<span className="brand-accent">doorstep</span><small>CARE THAT COMES TO YOU</small></span></a><p>Professional care, delivered with consideration.</p></div><div className="footer-links"><a href="#services">Services</a><a href="#safety">Safety</a><a href="#join">Become a professional</a></div><small>© {new Date().getFullYear()} BeautyDoorstep. Availability and features will vary by country. This preview is not a live booking service.</small></footer>
  </main>;
}

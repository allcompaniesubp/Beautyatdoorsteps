import Link from "next/link";

const sections = [
  ["Directory and marketplace role", "BeautyDoorstep is intended to help users discover independent businesses, products, professionals and public information. A listing is not an endorsement, guarantee, employment relationship or government approval."],
  ["Lawyers and legal services", "The platform is not a law firm and does not provide legal advice or representation. Legal-professional discovery and contact features will remain disabled until local professional-conduct rules have been reviewed. In India, advocate advertising and solicitation restrictions require particular care."],
  ["Doctors and healthcare", "The platform is not an emergency service or a substitute for a clinician. Teleconsultations may be enabled only with appropriately registered practitioners, required consent, identity checks, secure records and local legal approval. For emergencies, contact local emergency services."],
  ["Government and public services", "Government pages are independent information and links to official portals. BeautyDoorstep is not a government website and cannot issue certificates, approve benefits or guarantee an application. Official API connections require the relevant programme's authorisation."],
  ["Availability", "A category may be visible while booking, ordering or consultation remains unavailable. Launch depends on local law, qualified partners, insurance, payment access, safety and operational readiness."],
];

export default function TermsPage() {
  return <main className="section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 64, paddingBottom: 80 }}>
    <p className="eyebrow">BEAUTYDOORSTEP · LEGAL INFORMATION</p>
    <h1>Terms of Use</h1>
    <p><strong>Preview notice:</strong> This page is a draft summary for product planning, not final legal terms or legal advice. The full terms must be reviewed by qualified counsel and adapted for each launch country before the platform accepts real users or transactions.</p>
    {sections.map(([heading, body]) => <section key={heading} style={{ marginTop: 28 }}><h2>{heading}</h2><p>{body}</p></section>)}
    <section style={{ marginTop: 32 }}><h2>Full draft and launch review</h2><p>The detailed draft, including accounts, third-party listings, payments, refunds, content, safety, liability and complaints, is maintained in the project documentation. It is not yet approved for publication.</p><p><Link href="/">Return to marketplace</Link></p></section>
  </main>;
}

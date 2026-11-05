import Link from "next/link";

export default function PrivacyPage() {
  return <main className="section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 64, paddingBottom: 80 }}>
    <p className="eyebrow">DOORSPHERE · DATA PROTECTION</p>
    <h1>Privacy information</h1>
    <p><strong>Preview notice:</strong> This is a summary of planned privacy safeguards, not a final privacy notice. The actual operator, data controller, purposes, lawful bases, vendors, retention periods and user-rights contact must be confirmed before launch.</p>
    <h2>Data minimisation</h2><p>We plan to collect only information needed for the selected feature. Directory browsing should not require government identity documents, health records or precise location.</p>
    <h2>Private documents</h2><p>Identity and professional documents must be stored in private, access-controlled storage with limited staff access, audit logs, retention limits and secure deletion. They must never be placed in public profile fields or public URLs.</p>
    <h2>Health and legal information</h2><p>Any future healthcare or legal feature requires separate notices, strict access controls and purpose limitation. Sensitive information must not be used for advertising or sold as leads.</p>
    <h2>Location</h2><p>Precise location should be requested only when needed, with clear consent, and live sharing should automatically stop when the active booking or trip ends.</p>
    <h2>Contact and full framework</h2><p>The operating entity's privacy contact and applicable rights process must be inserted after legal review. <a href="https://github.com/allcompaniesubp/Beautyatdoorsteps/blob/main/docs/PRIVACY_AND_DATA_PROTECTION_FRAMEWORK.md">Read the full privacy and data-protection framework draft</a>.</p>
    <p><Link href="/">Return to marketplace</Link></p>
  </main>;
}

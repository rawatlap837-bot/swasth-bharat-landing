// Footer: contact details, quick links and the legal disclaimer.
import { SITE } from "../config/site";
import { DISCLAIMER, FOOTER_LINKS } from "../data/content";
import { phoneUrl, whatsappUrl } from "../utils/helpers";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 px-4 pb-24 pt-10 text-sm text-white/80 md:pb-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <b className="text-lg text-white">🌿 {SITE.brandEnglish}</b>
          <p className="mt-2 max-w-md">{SITE.address}</p>
        </div>

        <div>
          <b className="text-gold">त्वरित लिंक</b>
          <ul className="mt-2 space-y-1">
            {FOOTER_LINKS.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} className="hover:text-gold">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <b className="text-gold">संपर्क करें</b>
          <ul className="mt-2 space-y-1">
            <li>📞 <a href={phoneUrl}>{SITE.phoneLabel}</a></li>
            <li>💬 <a href={whatsappUrl}>WhatsApp</a></li>
            <li>✉️ {SITE.email}</li>
            <li>🕘 {SITE.workingHours}</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4 text-xs leading-relaxed text-white/60">
        <b>अस्वीकरण:</b> {DISCLAIMER}
      </p>
      <p className="mx-auto mt-4 flex max-w-7xl flex-wrap justify-between gap-2 text-xs">
        <span>© {new Date().getFullYear()} {SITE.brandEnglish}. All Rights Reserved.</span>
        <span>गोपनीयता नीति | नियम और शर्तें | डिलीवरी और वापसी</span>
      </p>
    </footer>
  );
}

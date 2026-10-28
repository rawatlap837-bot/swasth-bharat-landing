// Sticky top bar: offer strip, logo, desktop nav, call/WhatsApp buttons, mobile menu.
import { useState } from "react";
import { SITE } from "../config/site";
import { NAV_LINKS } from "../data/content";
import { OFFER_TEXT, phoneUrl, whatsappUrl } from "../utils/helpers";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-maroon-900 text-white shadow-lg">
      <div className="bg-gold px-3 py-1.5 text-center text-xs font-bold text-maroon-900 sm:text-sm">
        🎁 अपने ऑर्डर पर पाएं {OFFER_TEXT}
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-lg">🌿</span>
          <span className="leading-tight">
            <b className="block text-sm">{SITE.brandEnglish}</b>
            <i className="text-[10px] text-gold">{SITE.brandHindi}</i>
          </span>
        </a>

        <nav className="hidden gap-5 text-sm lg:flex">
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="hover:text-gold">{label}</a>
          ))}
        </nav>

        <div className="hidden gap-2 sm:flex">
          <a href={phoneUrl} className="rounded-lg bg-gold px-3 py-2 text-sm font-bold text-maroon-900">
            📞 {SITE.phoneLabel}
          </a>
          <a href={whatsappUrl} className="rounded-lg bg-leaf px-3 py-2 text-sm font-bold">
            WhatsApp करें
          </a>
        </div>

        <button
          className="text-2xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="मेनू"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="grid border-t border-white/10 bg-maroon-800 px-4 py-2 lg:hidden">
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="py-2.5">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

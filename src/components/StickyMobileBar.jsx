// Fixed bottom buttons, visible on mobile only.
import { SITE } from "../config/site";
import { scrollToSection, whatsappUrl } from "../utils/helpers";

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 bg-maroon-900 p-2 shadow-[0_-4px_12px_rgba(0,0,0,.3)] md:hidden">
      <button
        onClick={() => scrollToSection("order")}
        className="rounded-lg bg-gradient-to-b from-amber-400 to-orange-500 py-3 text-sm font-bold text-maroon-900"
      >
        {SITE.discountPercent}% छूट पाएं
      </button>
      <a href={whatsappUrl} className="rounded-lg bg-leaf py-3 text-center text-sm font-bold text-white">
        WhatsApp करें
      </a>
    </div>
  );
}

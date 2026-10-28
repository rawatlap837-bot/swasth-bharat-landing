// First screen: headline, intro, feature cards, CTAs, product image and trust bar.
import Button from "./ui/Button";
import ProductBottle from "./ui/ProductBottle";
import { HERO_FEATURES, HERO_CHECKLIST, TRUST_BAR } from "../data/content";
import { OFFER_TEXT, openWhatsApp, scrollToSection } from "../utils/helpers";

export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16">
        {/* Left: text */}
        <div>
          <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-maroon-900">
            🌿 आयुर्वेदिक उत्पाद | लैब में जांचे गए
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-snug sm:text-5xl sm:leading-tight">
            आयुर्वेदिक उत्पाद चुनें,{" "}
            <span className="text-gold">पूरी जानकारी और भरोसे के साथ</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base">
            स्वस्थ भारत हर्बल के लैब में जांचे गए उत्पादों के बारे में जानें। निर्णय लेने से पहले उनकी
            सामग्री, इस्तेमाल के तरीके और सावधानियों की स्पष्ट जानकारी पाएं।
          </p>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            किडनी, पित्ताशय या पित्त नली में पथरी की पहचान होने के बाद उत्पादों की जानकारी ढूंढ रहे हैं?
            उपलब्ध उत्पादों को समझें और उनकी उपयुक्तता पर इलाज कर रहे डॉक्टर से चर्चा करें।
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_FEATURES.map(([icon, text]) => (
              <div key={text} className="rounded-xl border border-gold/30 bg-white/5 p-3 text-center">
                <div className="text-2xl">{icon}</div>
                <p className="mt-1 text-xs font-semibold">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => scrollToSection("order")}>{OFFER_TEXT} पाएं</Button>
            <Button variant="green" onClick={openWhatsApp}>💬 उत्पाद की मुफ़्त जानकारी लें</Button>
          </div>
        </div>

        {/* Right: product + checklist */}
        <div className="relative grid items-center gap-5 sm:grid-cols-2">
          <div className="relative py-4">
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl" />
            <ProductBottle className="relative" />
            <span className="absolute right-2 top-0 grid h-16 w-16 place-items-center rounded-full bg-leaf text-center text-[10px] font-bold leading-tight ring-2 ring-gold">
              आयुर्वेदिक<br />हर्बल
            </span>
          </div>
          <ul className="space-y-2 rounded-2xl bg-white p-4 text-sm font-semibold text-maroon-800 shadow-xl">
            {HERO_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-leaf">✔</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-maroon-900/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-4 text-center text-xs sm:grid-cols-5 sm:text-sm">
          {TRUST_BAR.map((item) => (
            <p key={item} className="font-semibold text-gold">{item}</p>
          ))}
        </div>
        <p className="pb-2 text-center text-[10px] text-white/50">
          *केवल सत्यापित प्रमाणपत्र होने पर दिखाएं
        </p>
      </div>
    </section>
  );
}

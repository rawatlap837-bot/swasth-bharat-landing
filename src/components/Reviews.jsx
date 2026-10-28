// Customer video testimonials. Placeholders until real, consented reviews are added.
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { REVIEW_CARD_COUNT } from "../data/content";

export default function Reviews() {
  const cards = Array.from({ length: REVIEW_CARD_COUNT }, (_, i) => i + 1);

  return (
    <Section id="reviews">
      <SectionHeading subtitle="केवल वास्तविक ग्राहक प्रतिक्रियाएं, उनकी अनुमति से जोड़ें।">
        जानें हमारे ग्राहकों का अनुभव
      </SectionHeading>

      {/* Horizontal swipe on mobile, 4-column grid on desktop */}
      <div className="flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:overflow-visible">
        {cards.map((n) => (
          <article
            key={n}
            className="w-64 shrink-0 snap-center overflow-hidden rounded-2xl border bg-white shadow-md md:w-auto"
          >
            <div className="relative grid h-40 place-items-center bg-gradient-to-br from-stone-200 to-stone-400">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-2xl text-white shadow-lg">
                ▶
              </span>
              <span className="absolute bottom-2 left-2 text-[10px] text-white">[ग्राहक वीडियो {n}]</span>
            </div>
            <div className="p-3">
              <p className="text-sm text-stone-600">“[ग्राहक की वास्तविक प्रतिक्रिया ग्राहक की अनुमति से जोड़ें।]”</p>
              <p className="mt-2 text-sm font-bold text-maroon-800">[ग्राहक का नाम, शहर]</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-stone-500">हर व्यक्ति का अनुभव अलग हो सकता है।</p>
    </Section>
  );
}

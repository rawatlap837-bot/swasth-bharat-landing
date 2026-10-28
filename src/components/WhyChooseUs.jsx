// "Why choose us" cards and the 3-step process.
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { HOW_IT_WORKS, WHY_REASONS } from "../data/content";

export default function WhyChooseUs() {
  return (
    <Section id="why" className="bg-maroon-900 text-white">
      <SectionHeading light subtitle="स्पष्ट जानकारी। साफ़ कीमतें। सोच-समझकर निर्णय लेने की आज़ादी।">
        स्वस्थ भारत हर्बल क्यों चुनें?
      </SectionHeading>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {WHY_REASONS.map(([icon, title, description]) => (
          <div key={title} className="rounded-xl border border-gold/30 bg-white/5 p-4">
            <div className="text-3xl">{icon}</div>
            <h3 className="mt-2 font-bold text-gold">{title}</h3>
            <p className="mt-1 text-sm text-white/80">{description}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-5 mt-12 text-center text-xl font-extrabold">3 आसान चरणों में शुरुआत करें</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {HOW_IT_WORKS.map(([title, description], index) => (
          <div key={title} className="flex gap-3 rounded-xl bg-white p-4 text-maroon-800">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-lg font-black">
              {index + 1}
            </span>
            <div>
              <h4 className="font-bold">{title}</h4>
              <p className="mt-1 text-sm text-stone-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

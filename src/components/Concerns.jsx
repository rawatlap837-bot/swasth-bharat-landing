// "Questions to ask before choosing a herbal product" section.
import Button from "./ui/Button";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { CONCERN_QUESTIONS } from "../data/content";
import { scrollToSection } from "../utils/helpers";

export default function Concerns() {
  return (
    <Section id="concern" className="bg-cream">
      <SectionHeading subtitle="हर्बल उत्पादों की तुलना करते समय सही जानकारी मायने रखती है।">
        हर्बल उत्पाद चुनते समय सवालों के स्पष्ट जवाब मिलना ज़रूरी है
      </SectionHeading>

      <div className="grid items-center gap-8 lg:grid-cols-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3">
          {CONCERN_QUESTIONS.map(([icon, question]) => (
            <div key={question} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-100 text-2xl">
                {icon}
              </span>
              <p className="font-semibold text-maroon-800">{question}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-dashed border-gold bg-white p-5 lg:col-span-2">
          <p className="text-sm text-stone-700">
            स्वस्थ भारत हर्बल में हम आपको उत्पाद की जानकारी, उपलब्ध लैब रिपोर्ट और ऑर्डर की प्रक्रिया समझने
            में मदद करते हैं, ताकि आप सोच-समझकर निर्णय ले सकें।
          </p>
          <Button className="mt-4 w-full" onClick={() => scrollToSection("order")}>
            ऑर्डर से पहले अपने सवाल पूछें
          </Button>
        </div>
      </div>
    </Section>
  );
}

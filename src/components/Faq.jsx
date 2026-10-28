// FAQ accordion. Only one answer is open at a time. Edit questions in data/content.js.
import { useState } from "react";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { FAQS } from "../data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="bg-cream">
      <SectionHeading>अक्सर पूछे जाने वाले सवाल</SectionHeading>

      <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2 md:items-start">
        {FAQS.map(([question, answer], index) => {
          const isOpen = openIndex === index;
          return (
            <div key={question} className="rounded-xl border border-amber-200 bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-bold text-maroon-800"
              >
                {question}
                <span className="text-xl text-maroon-700">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="px-4 pb-4 text-sm text-stone-600">{answer}</p>}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

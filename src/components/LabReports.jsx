// Lab-testing section with a sample report card. Fill the report fields in data/content.js.
import Button from "./ui/Button";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { LAB_HIGHLIGHTS, LAB_REPORT_FIELDS } from "../data/content";
import { openWhatsApp } from "../utils/helpers";

export default function LabReports() {
  return (
    <Section id="lab" className="bg-gradient-to-b from-white to-cream">
      <SectionHeading subtitle="गुणवत्ता के लिए सिर्फ़ वादा काफ़ी नहीं। संबंधित जांच रिपोर्ट या प्रमाणपत्र देखने के लिए उपलब्ध हैं।">
        जानें आप क्या चुन रहे हैं — लैब जांच और गुणवत्ता
      </SectionHeading>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-3">
            {LAB_HIGHLIGHTS.map(([icon, text]) => (
              <div key={text} className="rounded-xl bg-white p-3 text-center shadow">
                <div className="text-3xl">{icon}</div>
                <p className="mt-1 text-xs font-semibold text-maroon-800">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-stone-600">
            जानें कि किस उत्पाद की जांच हुई, किस प्रयोगशाला ने जांच की और रिपोर्ट में किन मापदंडों को शामिल
            किया गया।
          </p>
          <Button variant="green" className="mt-4 w-full sm:w-auto" onClick={openWhatsApp}>
            लैब जांच रिपोर्ट मांगें
          </Button>
        </div>

        <div className="relative rounded-2xl border bg-white p-5 shadow-xl">
          <span className="absolute -right-2 -top-3 rounded-full bg-leaf px-3 py-1 text-xs font-bold text-white">
            नमूना / SAMPLE
          </span>
          <p className="mb-3 border-b pb-2 font-bold text-maroon-800">जांच का विवरण देखें</p>
          <dl className="space-y-2 text-sm">
            {LAB_REPORT_FIELDS.map(([label, value]) => (
              <div key={label} className="flex flex-col justify-between gap-1 border-b border-dashed pb-1.5 sm:flex-row">
                <dt className="text-stone-500">{label}</dt>
                <dd className="font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <p className="mt-6 rounded-lg bg-amber-50 p-3 text-center text-xs text-stone-600">
        जांच की जानकारी केवल रिपोर्ट में बताए गए उत्पाद, बैच और मापदंडों पर लागू होती है। केवल लैब जांच से
        यह साबित नहीं होता कि उत्पाद इलाज में प्रभावी है या हर व्यक्ति के लिए उपयुक्त है।
      </p>
    </Section>
  );
}

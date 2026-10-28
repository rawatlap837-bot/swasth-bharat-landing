// Offer + price box on the left, lead form on the right. Prices come from config/site.js.
import Button from "./ui/Button";
import LeadForm from "./LeadForm";
import ProductBottle from "./ui/ProductBottle";
import Section from "./ui/Section";
import { SITE } from "../config/site";
import { ORDER_FOOTNOTE, ORDER_PERKS } from "../data/content";
import { OFFER_TEXT, formatRupees, offerPrice, savings } from "../utils/helpers";

const focusForm = () => document.getElementById("lead-form")?.querySelector("input")?.focus();

export default function Order() {
  return (
    <Section id="order" className="bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
      <div className="grid items-center gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-center text-2xl font-extrabold sm:text-4xl lg:text-left">
            आज ही मंगाएं <span className="text-gold">{SITE.productName}</span>
          </h2>
          <p className="mt-1 text-center text-white/80 lg:text-left">{OFFER_TEXT}</p>

          <div className="mt-6 grid items-center gap-5 sm:grid-cols-2">
            <div className="relative">
              <ProductBottle />
              <span className="absolute left-0 top-0 grid h-16 w-16 place-items-center rounded-full bg-red-600 text-center text-xs font-black leading-tight shadow-lg">
                {SITE.discountPercent}%<br />OFF
              </span>
            </div>

            <div className="rounded-2xl bg-white p-5 text-center text-maroon-800 shadow-xl">
              <p className="text-sm text-stone-500">सामान्य कीमत <s>{formatRupees(SITE.mrp)}</s></p>
              <p className="text-5xl font-black text-maroon-700">{formatRupees(offerPrice)}</p>
              <p className="mt-1 text-sm font-bold text-leaf">आपकी बचत: {formatRupees(savings)}</p>
              <p className="text-xs text-stone-500">(30 टैबलेट)</p>

              <ul className="mt-3 space-y-1.5 text-left text-sm">
                {ORDER_PERKS.map(([icon, text]) => <li key={text}>{icon} {text}</li>)}
              </ul>
              <Button className="mt-4 w-full" onClick={focusForm}>{OFFER_TEXT} पाएं</Button>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-white/60">{ORDER_FOOTNOTE}</p>
        </div>

        <div id="lead-form" className="lg:col-span-2">
          <LeadForm />
        </div>
      </div>
    </Section>
  );
}

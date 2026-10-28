// Product spotlight (ingredients + details) and the three product-category cards.
import Button from "./ui/Button";
import ProductBottle from "./ui/ProductBottle";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { SITE } from "../config/site";
import { INGREDIENTS, PRODUCT_CATEGORIES, PRODUCT_DETAILS } from "../data/content";
import { scrollToSection } from "../utils/helpers";

export default function Products() {
  return (
    <Section id="products">
      <SectionHeading subtitle="उपलब्ध उत्पादों की सामग्री, लेबल पर बताए उपयोग और सावधानियों के बारे में पूछें। इस्तेमाल से पहले अपने डॉक्टर से चर्चा करें।">
        {SITE.productName} — उत्पाद चुनने से पहले ज़रूरी जानकारी
      </SectionHeading>

      {/* Product spotlight */}
      <div className="grid items-center gap-8 rounded-3xl bg-cream p-5 shadow-inner sm:p-8 lg:grid-cols-3">
        <ProductBottle />

        <div className="lg:col-span-2">
          <p className="mb-3 font-bold text-maroon-800">उत्पाद की सामग्री (लेबल के अनुसार)</p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {INGREDIENTS.map((name) => (
              <div key={name} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-green-200 to-green-600 text-xl ring-2 ring-white sm:h-16 sm:w-16">
                  🌱
                </div>
                <p className="mt-1 text-[11px] font-semibold text-maroon-800">{name}</p>
              </div>
            ))}
          </div>

          <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
            {PRODUCT_DETAILS.map(([label, value]) => (
              <div key={label} className="rounded-lg bg-white p-3">
                <dt className="text-xs text-stone-500">{label}</dt>
                <dd className="font-semibold text-maroon-800">{value}</dd>
              </div>
            ))}
          </dl>

          <Button className="mt-4 w-full sm:w-auto" onClick={() => scrollToSection("order")}>
            इस उत्पाद की जानकारी लें
          </Button>
        </div>
      </div>

      {/* Category cards */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {PRODUCT_CATEGORIES.map(([icon, title, description]) => (
          <article key={title} className="rounded-2xl border border-amber-200 bg-white p-5 shadow-md">
            <div className="text-3xl">{icon}</div>
            <h3 className="mt-2 font-bold text-maroon-800">{title}</h3>
            <p className="mt-2 text-sm text-stone-600">{description}</p>
            <button
              onClick={() => scrollToSection("order")}
              className="mt-3 text-sm font-bold text-maroon-700 underline"
            >
              उत्पाद की जानकारी मांगें
            </button>
          </article>
        ))}
      </div>
    </Section>
  );
}

// Small shared helpers: links, price maths and scrolling.
import { SITE } from "../config/site";

export const whatsappUrl = `https://wa.me/${SITE.whatsapp}`;
export const phoneUrl = `tel:${SITE.phone}`;

export const offerPrice = Math.round((SITE.mrp * (100 - SITE.discountPercent)) / 100);
export const savings = SITE.mrp - offerPrice;
export const OFFER_TEXT = `${SITE.discountPercent}% की छूट + मुफ़्त डाइट चार्ट`;

export const formatRupees = (amount) => "₹" + amount.toLocaleString("en-IN");

export const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const openWhatsApp = () => {
  window.location.href = whatsappUrl;
};

// Business details and pricing. Edit values here; they update across the whole page.
// Replace every [placeholder] with VERIFIED details before publishing.

export const SITE = {
  brandHindi: "स्वस्थ भारत हर्बल",
  brandEnglish: "Swasth Bharat Herbal",
  productName: "Stone Nil",

  phone: "+919876543210",          // used for tel: links
  phoneLabel: "+91 9876543210",    // shown on screen
  whatsapp: "919876543210",        // country code + number, no "+"
  email: "info@swasthbharatherbal.com",
  address: "[व्यवसाय का पंजीकृत पता]",
  workingHours: "[सत्यापित कार्य समय]",

  mrp: 2999,                       // regular price in rupees
  discountPercent: 50,             // offer price is calculated from these two
};

// Called when the lead form is submitted. Receives { name, mobile }.
// Connect your CRM, Google Sheet or API here.
export async function submitLead(lead) {
  console.log("New lead:", lead);
  // await fetch("YOUR_ENDPOINT", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(lead),
  // });
}

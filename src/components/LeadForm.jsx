// Name + mobile lead form with validation and a thank-you state. Logic is in hooks/useLeadForm.js.
import Button from "./ui/Button";
import { SITE } from "../config/site";
import { useLeadForm } from "../hooks/useLeadForm";
import { openWhatsApp } from "../utils/helpers";

const INPUT_STYLE =
  "mt-1 w-full rounded-lg border border-stone-300 px-3 py-3 font-normal text-stone-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200";

export default function LeadForm() {
  const { values, setField, error, submitted, handleSubmit } = useLeadForm();

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center text-maroon-800 shadow-2xl">
        <div className="text-5xl">✅</div>
        <h3 className="mt-2 text-xl font-extrabold">धन्यवाद! हमें आपका कॉलबैक अनुरोध मिल गया है।</h3>
        <p className="mt-2 text-sm text-stone-600">
          हमारी टीम {SITE.workingHours} के दौरान आपसे संपर्क करेगी।
        </p>
        <Button variant="green" className="mt-4" onClick={openWhatsApp}>WhatsApp पर बात करें</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-2xl">
      <h3 className="rounded-lg bg-maroon-800 py-2 text-center font-extrabold text-white">
        ऑर्डर से पहले कोई सवाल है?
      </h3>
      <p className="mt-2 text-center text-xs text-stone-500">
        अपना विवरण भरें। हमारी टीम से मुफ़्त कॉलबैक का अनुरोध करें।
      </p>

      <label className="mt-3 block text-sm font-semibold text-maroon-800">
        आपका नाम *
        <input
          className={INPUT_STYLE}
          placeholder="जैसे- अमित कुमार"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
        />
      </label>

      <label className="mt-3 block text-sm font-semibold text-maroon-800">
        मोबाइल नंबर *
        <input
          className={INPUT_STYLE}
          inputMode="numeric"
          maxLength={10}
          placeholder="जैसे- 9876543210"
          value={values.mobile}
          onChange={(e) => setField("mobile", e.target.value.replace(/\D/g, ""))}
        />
      </label>

      {error && <p role="alert" className="mt-2 text-sm font-semibold text-red-600">{error}</p>}

      <Button type="submit" className="mt-4 w-full">मुझे मुफ़्त कॉल करें</Button>
      <p className="mt-2 text-center text-xs font-semibold text-stone-600">
        जानकारी लेना मुफ़्त है। खरीदना ज़रूरी नहीं।
      </p>
      <p className="mt-1 text-center text-[11px] text-stone-500">
        🔒 फ़ॉर्म जमा करके आप अपनी पूछताछ के संबंध में {SITE.brandHindi} द्वारा संपर्क किए जाने की सहमति देते हैं।
      </p>
    </form>
  );
}

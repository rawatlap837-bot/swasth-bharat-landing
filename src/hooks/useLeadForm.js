// Form state, validation and submission for the lead form.
import { useState } from "react";
import { submitLead } from "../config/site";

const INDIAN_MOBILE = /^[6-9]\d{9}$/;

export function useLeadForm() {
  const [values, setValues] = useState({ name: "", mobile: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const setField = (field, value) => setValues((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.name.trim().length < 2) {
      return setError("कृपया अपना नाम लिखें।");
    }
    if (!INDIAN_MOBILE.test(values.mobile)) {
      return setError("कृपया 10 अंकों का सही मोबाइल नंबर लिखें।");
    }

    setError("");
    await submitLead({ name: values.name.trim(), mobile: values.mobile });
    setSubmitted(true);
  };

  return { values, setField, error, submitted, handleSubmit };
}

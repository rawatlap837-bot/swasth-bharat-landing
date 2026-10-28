// Reusable button. variant: "gold" (main CTA) | "green" (WhatsApp / secondary).
const VARIANTS = {
  gold: "bg-gradient-to-b from-amber-400 to-orange-500 text-maroon-900",
  green: "bg-leaf text-white",
};

export default function Button({ variant = "gold", className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-xl px-5 py-3 text-sm font-bold shadow-lg transition active:scale-95 sm:text-base ${VARIANTS[variant]} ${className}`}
    />
  );
}

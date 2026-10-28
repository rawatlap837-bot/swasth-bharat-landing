// Centred section title with optional sub-text and a gold underline.
export default function SectionHeading({ children, subtitle, light = false }) {
  return (
    <div className="mb-8 text-center">
      <h2 className={`text-2xl font-extrabold sm:text-4xl ${light ? "text-white" : "text-maroon-800"}`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-2 max-w-2xl text-sm sm:text-base ${light ? "text-white/80" : "text-stone-600"}`}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />
    </div>
  );
}

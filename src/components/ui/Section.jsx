// Page section wrapper: consistent padding and a centred max-width container.
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`px-4 py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

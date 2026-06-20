export function FooterCta() {
  return (
    <section id="check" className="bg-green px-6 py-14 text-center text-paper md:px-8 md:py-16">
      <h2 className="mb-5 font-display text-2xl font-bold md:text-[28px]">
        Stop guessing if a job is worth it.
      </h2>
      <a
        href="/login"
        className="inline-block border-2 border-ink bg-amber px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-hard transition-transform hover:-translate-y-0.5"
      >
        Check your first job offer
      </a>
    </section>
  );
}

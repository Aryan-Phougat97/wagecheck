export function Hero() {
  return (
    <section className="px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Left: copy */}
        <div>
          <div className="mb-5 flex items-center gap-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-rust">
            <span className="h-0.5 w-6 bg-rust" aria-hidden="true" />
            Before you take the job
          </div>

          <h1 className="mb-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[52px]">
            Know if the pay is{" "}
            <span className="underline decoration-amber decoration-[5px] underline-offset-[6px]">
              fair
            </span>{" "}
            before you start.
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-steel md:text-lg">
            Workers log what they actually got paid, by neighbourhood. WageCheck
            uses that history to tell you straight — good deal, fair, or risky —
            before you commit to a job.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#check"
              className="border-2 border-ink bg-amber px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-hard transition-transform hover:-translate-y-0.5"
            >
              Check a job offer
            </a>
            <a href="#how-it-works" className="text-sm font-semibold underline">
              See how it works →
            </a>
          </div>
        </div>

        {/* Right: signature stamp card */}
        <div className="relative border-2 border-ink bg-paperCard p-7 shadow-hardLg">
          <div className="mb-1 font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-steel">
            Job offer entered
          </div>
          <div className="mb-5 border-b border-dashed border-line pb-5 text-base font-semibold">
            Electrical work — Sector 12 — ₹10,000
          </div>

          <div className="flex items-center gap-5">
            <div
              className="relative flex h-28 w-28 flex-shrink-0 -rotate-[9deg] items-center justify-center rounded-full border-4 border-green before:absolute before:inset-2 before:rounded-full before:border before:border-green"
              role="img"
              aria-label="Verdict stamp: Good Deal"
            >
              <span className="text-center font-display text-base font-bold uppercase leading-tight text-green">
                Good
                <br />
                Deal
              </span>
            </div>
            <div className="text-sm leading-relaxed text-steel">
              Matches the <b className="text-ink">average pay</b> for electrical
              work in this area.
              <br />
              <br />
              Based on <b className="text-ink">14 jobs</b> logged here.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

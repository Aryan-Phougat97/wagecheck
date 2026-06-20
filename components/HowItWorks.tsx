const steps = [
  {
    num: "01",
    title: "Log the job",
    body: "Finished a job? Note the neighbourhood, the work type, and what you were paid. Takes ten seconds.",
  },
  {
    num: "02",
    title: "History builds up",
    body: "Every entry adds to that neighbourhood's record — real pay, real frequency, no names attached.",
  },
  {
    num: "03",
    title: "Get your verdict",
    body: "Before your next job, enter the offer. Get a straight answer — good, fair, or risky — in seconds.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-11 max-w-md">
          <div className="mb-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-steel">
            The process
          </div>
          <h2 className="font-display text-2xl font-bold md:text-[32px]">
            Three steps. No guesswork.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`border border-ink bg-paperCard p-6 ${
                i !== 0 ? "md:border-l-0" : ""
              } ${i !== 0 ? "border-t-0 md:border-t" : ""}`}
            >
              <div className="mb-4 flex h-7 w-7 items-center justify-center bg-ink font-heavy text-xs text-paper">
                {step.num}
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-steel">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

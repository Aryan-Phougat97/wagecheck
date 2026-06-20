const stats = [
  { num: "3", label: "Neighbourhoods live" },
  { num: "100%", label: "Anonymous data" },
  { num: "0", label: "Personal info stored" },
];

export function StatsStrip() {
  return (
    <div className="bg-ink px-6 py-7 text-paper md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center ${i !== 0 ? "border-l border-[#44483f]" : ""}`}
          >
            <div className="font-heavy text-2xl text-amber md:text-3xl">{s.num}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-[#aab0a2] md:text-xs">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

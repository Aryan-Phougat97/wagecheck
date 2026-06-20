import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between border-b-2 border-ink px-6 py-5 md:px-8">
      <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
        <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
        WAGECHECK
      </Link>

      <div className="hidden gap-8 text-sm font-medium text-steel md:flex">
        <a href="#how-it-works" className="hover:text-ink">How it works</a>
        <a href="#neighbourhoods" className="hover:text-ink">Neighbourhoods</a>
        <a href="#workers" className="hover:text-ink">For workers</a>
      </div>

      <Link
        href="/login"
        className="bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-paper hover:bg-ink/90"
      >
        Check a job
      </Link>
    </nav>
  );
}

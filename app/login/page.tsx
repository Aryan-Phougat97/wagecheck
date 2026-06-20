import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Minimal nav */}
      <nav className="flex items-center justify-between border-b-2 border-ink px-6 py-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
          WAGECHECK
        </Link>
        <Link href="/" className="text-sm font-semibold text-steel hover:text-ink">
          ← Back home
        </Link>
      </nav>

      <div className="flex flex-1 items-center justify-center px-6 py-14 md:px-8">
        <div className="w-full max-w-md">
          {/* Card styled like a worker ID / permit check-in */}
          <div className="border-2 border-ink bg-paperCard p-8 shadow-hardLg md:p-9">
            <div className="mb-1 font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-steel">
              Worker check-in
            </div>
            <h1 className="mb-2 font-display text-2xl font-bold leading-tight md:text-[28px]">
              Sign in to WageCheck
            </h1>
            <p className="mb-7 border-b border-dashed border-line pb-7 text-sm leading-relaxed text-steel">
              Log your jobs and check offers before you take them.
            </p>

            <form className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-ink"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="98765 43210"
                  className="w-full border-2 border-ink bg-paper px-4 py-3 text-base text-ink placeholder:text-steel/60 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-ink"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full border-2 border-ink bg-paper px-4 py-3 text-base text-ink placeholder:text-steel/60 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                />
              </div>

              <button
                type="submit"
                className="mt-2 border-2 border-ink bg-amber px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-hard transition-transform hover:-translate-y-0.5"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm">
              <a href="#" className="font-medium text-steel underline hover:text-ink">
                Forgot password?
              </a>
              <a href="#" className="font-semibold text-ink underline">
                New worker? Sign up
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-steel">
            Your job history stays anonymous. No personal details are shared with
            other workers or shown on neighbourhood records.
          </p>
        </div>
      </div>
    </main>
  );
}

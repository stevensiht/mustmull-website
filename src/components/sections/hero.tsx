import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden">
      <Image
        fill
        priority
        className="object-cover object-center opacity-80"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80"
        alt="Bartender pouring a cocktail with neon light reflections"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-between px-6 pb-20 pt-28 sm:px-8">
        <div className="flex flex-col gap-8">
          <Link href="/" className="w-fit">
            <Image
              src="/mustmull_logo.svg"
              alt="Must Mull logo"
              width={172}
              height={48}
              priority
              className="drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
            />
          </Link>
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur">
              Mobile cocktail bar
            </span>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We mix the drinks. You make the memories.
            </h1>
            <p className="max-w-xl text-base text-white/80 sm:text-lg">
              Must Mull brings a playful, professional crew straight to your
              celebration—signature cocktails, brilliant bartenders, and a vibe
              your guests will rave about long after the music stops.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wide text-background shadow-[0_12px_30px_-12px_rgba(255,46,142,0.7)] transition hover:translate-y-0.5 hover:shadow-[0_14px_34px_-12px_rgba(255,46,142,0.55)]"
            >
              Plan my bar
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              See services
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-gold shadow-[0_0_12px_rgba(198,166,100,0.9)]" />
              <span className="font-semibold tracking-wide text-white">
                Events booked this month
              </span>
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Weddings • Launches • Birthdays
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

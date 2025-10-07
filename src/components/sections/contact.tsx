import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-black to-background py-24"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent blur-[120px]" />
        <div className="absolute right-0 top-32 h-48 w-48 rounded-full bg-gold blur-[100px]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 text-center sm:px-8">
        <span className="text-xs uppercase tracking-[0.35em] text-accent">
          Let’s plan
        </span>
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Ready to book Must Mull?
        </h2>
        <p className="text-base text-white/70 sm:text-lg">
          Tell us about your event, guest count, and dream drinks—we&rsquo;ll
          reply within one business day.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Link
            href="mailto:hello@mustmull.com"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background shadow-[0_12px_30px_-12px_rgba(255,46,142,0.7)] transition hover:translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(255,46,142,0.55)]"
          >
            Email us
          </Link>
          <Link
            href="tel:+1234567890"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white/10"
          >
            Call or text
          </Link>
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          Serving Southern California &amp; beyond
        </p>
      </div>
    </section>
  );
}

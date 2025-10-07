const testimonials = [
  {
    name: "Alicia & Marco",
    role: "Wedding in Malibu",
    quote:
      "They handled every detail and made our night feel like a private cocktail lounge. Guests still talk about the espresso martinis.",
  },
  {
    name: "Brightside Agency",
    role: "Product launch",
    quote:
      "Logistics were seamless, branding matched our deck, and the neon signage pulled everyone straight to the bar.",
  },
  {
    name: "Jordan H.",
    role: "40th Birthday Bash",
    quote:
      "Playful, professional, and somehow remembered every guest’s favorite drink after one round.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-muted/70 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">
            Love notes
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Clients we celebrate.
          </h2>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Swap these with your own reviews once we&rsquo;ve shaken up your
            event.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-background/80 p-6"
            >
              <p className="text-sm italic text-white/70">&ldquo;{item.quote}&rdquo;</p>
              <div>
                <p className="font-display text-lg text-white">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

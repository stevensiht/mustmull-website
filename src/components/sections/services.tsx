const services = [
  {
    title: "Full-Service Bar",
    description:
      "We bring the bar, the pros, the glassware, and every garnish your crowd could crave.",
    detail: "Perfect for weddings & milestone celebrations.",
  },
  {
    title: "Signature Menu Design",
    description:
      "Custom cocktail lists built around your story, favorite spirits, or event theme.",
    detail: "Includes tastings and zero-proof pairings.",
  },
  {
    title: "Corporate & Pop-Up",
    description:
      "Keep things lively at launches, offsites, or brand activations with a slick, on-brand setup.",
    detail: "Fast build, small footprint, memorable presence.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/60 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">
            What we do
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Services made for effortless hosting.
          </h2>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Everything we offer is built to slide seamlessly into your event.
            Think premium spirits, dialed-in logistics, and bartenders who feel
            like part of the guest list.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/80 p-6 transition hover:border-accent/50 hover:shadow-[0_18px_60px_-40px_rgba(255,46,142,0.9)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
              </div>
              <div className="relative flex flex-col gap-3">
                <h3 className="font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70">{service.description}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {service.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

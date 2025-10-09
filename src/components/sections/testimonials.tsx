const testimonials = [
  {
    name: "Alicia & Marco",
    role: "Pulm Malibus",
    quote:
      "Nad hoolitsesid iga detaili eest ja muutsid meie õhtu privaatse kokteililounge'ina tunduvaks. Külalised räägivad siiani espresso-martinidest.",
  },
  {
    name: "Brightside Agency",
    role: "Toote lansseerimine",
    quote:
      "Logistika oli laitmatu, bränding sobitus meie esitlustega ja neoonreklaam tõmbas kõik otse baari.",
  },
  {
    name: "Jordan H.",
    role: "40. sünnipäeva pidu",
    quote:
      "Mängulised, professionaalsed ja kuidagi jätsid juba ühe ringi järel meelde iga külalise lemmikjoogi.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-muted/70 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">
            Kiidusõnad
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Kliendid, keda tähistame.
          </h2>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Vaheta need peagi oma arvustuste vastu, kui oleme sinu ürituse
            raputanud.
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

const testimonials = [
  {
    name: "Kerli D.",
    role: "Võidupüha pidu",
    quote:
      "MustMull on imeline kooslus, mis teeb sündmuse väga eriliseks. Mina näiteks armastan Jaanipäeva ja selle tähistamist. Mõnel aastal käib mul sel ajal kodus 100 sõpra, teisel aastal 300 ja kolmandal 8. Kui MustMull kohal on, siis teeb see olukorra pidulikuks nagu Võidupühale kohane. Ja nad ei tee mingit numbrit sellest, kui palju sul rahvast on. Imetabased kokteilid, nad selgitavad, miks ja mida tehakse, naerusuised inimeste inimesed - lõbus, maitsev, läbimõeldud ja pidulik on nende märksõnad.",
  },
  {
    name: "ED Events",
    role: "Erapidu",
    quote:
      "Koostöö Musta Mulliga on ladus, kindel, usaldusväärne ja soe! Oma ala proffidega saab teenus just selline, millist üritusele vaja on. Kogused on õiged, baaridaamid/manid on ägedad, maitsed on lummavad! MustMull ei löö risti ette ka hulljulgematele ideedele, millega rõõmuga kaasa minnakse. Enda poolt antakse alati maksimum, et nii tellija kui baarikülaline rahul oleks ja seepärast on Musta Mulli ägeda baarimajakese juures alati lõbus seltskondlik sumin. Seda ürituskorraldajad ostaksid! Ja, no - MustMull - nimi on ka väga lahe! :)",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-muted/70 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
        <div>
          <span className="mb-4 block text-xs uppercase tracking-[0.35em] text-accent">
            Kliendid meist
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Tagasiside
          </h2>
          {/* <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Vaheta need peagi oma arvustuste vastu, kui oleme sinu ürituse
            raputanud.
          </p> */}
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-background/80 p-6"
            >
              <p className="text-sm italic text-white/70">
                &ldquo;{item.quote}&rdquo;
              </p>
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

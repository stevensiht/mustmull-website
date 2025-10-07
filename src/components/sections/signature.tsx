import Image from "next/image";

export function SignatureSection() {
  return (
    <section className="relative isolate overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/60 to-background" />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
        <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10 sm:h-[26rem]">
          <Image
            fill
            className="object-cover object-center"
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2000&q=80"
            alt="Signature cocktail with vibrant pink foam and garnish"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-background/70 px-5 py-3 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur">
            House favorite: Electric Bloom
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-[2fr_1fr] sm:items-start">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Meet the Electric Bloom.
            </h2>
            <p className="text-base text-white/70 sm:text-lg">
              Gin kissed with hibiscus tea, fresh citrus, and a neon pink foam
              that lights up every toast. It&rsquo;s balanced, bold, and the
              cocktail guests remember by name.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-white/70 sm:text-base">
            <li className="rounded-2xl border border-white/10 bg-background/80 px-5 py-4">
              <strong className="block text-white">Flavor Notes</strong>
              Floral citrus, bright berries, gentle spice.
            </li>
            <li className="rounded-2xl border border-white/10 bg-background/80 px-5 py-4">
              <strong className="block text-white">Why it rocks</strong>
              Theatre at the bar, photogenic pours, crushable taste.
            </li>
            <li className="rounded-2xl border border-white/10 bg-background/80 px-5 py-4">
              <strong className="block text-white">Zero-proof twin</strong>
              Swap spirit for botanical tonic—same glow, all delight.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

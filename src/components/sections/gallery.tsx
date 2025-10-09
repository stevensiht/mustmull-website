import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=1600&q=80",
    alt: "Külalised tõstavad kokteile õhtusel üritusel",
  },
  {
    src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1600&q=80",
    alt: "Baarmen valmistab jooke mobiilses baaris",
  },
  {
    src: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1600&q=80",
    alt: "Neoonvalguses lounge särava kokteilialaga",
  },
  {
    src: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=1600&q=80",
    alt: "Kaunistatud kokteilid kandikul lähivõttes",
  },
];

export function GallerySection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 sm:px-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">
            Hetked, mida armastame
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Galerii
          </h2>
          <p className="text-base text-white/70 sm:text-lg">
            Väike pilguheit meeleolule, mille kaasa toome—vaheta need peagi oma
            võitude vastu.
          </p>
        </div>

        <div className="mask-soft overflow-hidden">
          <div className="gallery-track flex w-max gap-4 pb-4">
            {[0, 1].map((loopIndex) =>
              images.map((image, index) => {
                const isDuplicate = loopIndex === 1;

                return (
                  <figure
                    key={`${image.src}-${loopIndex}`}
                    className="relative h-60 w-[17rem] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10"
                    aria-hidden={isDuplicate}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || `Sündmuse tipphetk ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 65vw, 272px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                  </figure>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

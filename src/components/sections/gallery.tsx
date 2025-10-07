import Image from "next/image";

export function GallerySection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 sm:px-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">
            Moments we love
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Gallery
          </h2>
          <p className="text-base text-white/70 sm:text-lg">
            A peek at the vibes we bring along for the ride—swap these with your
            own wins when you&rsquo;re ready.
          </p>
        </div>

        <div className="mask-soft overflow-x-auto">
          <div className="flex min-w-full gap-4 pb-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=1600&q=80",
                alt: "Guests toasting cocktails at an evening event",
              },
              {
                src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1600&q=80",
                alt: "Bartender preparing drinks behind a mobile bar",
              },
              {
                src: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1600&q=80",
                alt: "Neon-lit lounge with a glowing cocktail setup",
              },
              {
                src: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=1600&q=80",
                alt: "Close-up of garnished cocktails on a tray",
              },
            ].map((image, index) => (
              <figure
                key={image.src}
                className="relative h-60 w-[17rem] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt || `Event highlight ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 65vw, 272px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

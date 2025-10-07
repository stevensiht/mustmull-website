import Image from "next/image";

export function StorySection() {
  return (
    <section
      id="story"
      className="relative isolate mx-auto max-w-5xl px-6 py-20 sm:px-8"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.6)] backdrop-blur">
        <div className="relative h-64 w-full sm:h-[22rem]">
          <Image
            fill
            className="object-cover object-center"
            src="https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=2000&auto=format&fit=crop"
            alt="Bartenders preparing drinks at a private event"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
        </div>

        <div className="space-y-6 px-6 pb-10 pt-8 sm:px-10 sm:pb-12">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Our story is shaken, not stirred.
          </h2>
          <p className="text-base text-white/80 sm:text-lg">
            We started Must Mull to make hosting wildly easier. No worrying
            about stocking spirits, bringing the bar, or keeping the good vibes
            flowing—we do it all with a wink, a smile, and a serious respect for
            craft cocktails.
          </p>
          <p className="text-sm text-white/60 sm:text-base">
            From intimate anniversaries to neon-lit launch parties, our mobile
            team brings the bar, the bartenders, and the kind of energy that has
            guests asking, &ldquo;Who did you book?&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

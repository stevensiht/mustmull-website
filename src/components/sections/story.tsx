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
            src="/images/DSC_1367.jpg"
            alt="Baarmenid valmistavad jooke erapeol"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
        </div>

        <div className="space-y-6 px-6 pb-10 pt-8 sm:px-10 sm:pb-12">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Meie lugu sai alguse soovist luua elamusi, mitte lihtsalt kokteile.
          </h2>
          <p className="text-base text-white/80 sm:text-lg">
            MustMull sündis soovist tuua igale üritusele kaasa midagi erilist -
            elamuse. Meie stiilne kokteilitreiler ja mobiilsed baariletid
            pakuvad värskeid, käsitööna valmistatud kokteile nii väikestel
            erapidudel kui ka suurüritustel.
          </p>
          <p className="text-sm text-white/60 sm:text-base">
            Olgu see suvefestival, jõulupidu või ettevõtte sünnipäev – meie
            toome peo kohale.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden">
      <Image
        fill
        priority
        className="object-cover object-center opacity-80"
        src="/images/IMG_20251010_104558.jpg"
        alt="MustMulli mobiilne kokteilibaar sündmusel"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-5xl flex-col gap-12 px-6 pb-20 pt-28 sm:px-8">
        <div className="flex flex-col gap-8">
          <Link href="/" className="w-fit">
            <Image
              src="/mustmull_logo.svg"
              alt="MustMulli logo"
              width={172}
              height={48}
              priority
              className="drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
            />
          </Link>
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur">
              Mobiilne kokteilibaar
            </span>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Me ei oota teid baaris - me toome kokteilibaari teie juurde!
            </h1>
            <p className="max-w-xl text-base text-white/80 sm:text-lg">
              MustMull toob teie üritusele professionaalsuse, lõbu ja
              unustamatu elamuse - maitsvad ja erilised kokteilid, säravad
              baarmenid ja õhkkonna, millest räägitakse kaua pärast viimast
              lonksu. Me ei oota, et teie meie juurde jõuaksite - me tuleme
              sinna, kus te soovite kokteile ja lahedat meeleolu nautida!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wide text-background shadow-[0_12px_30px_-12px_rgba(255,46,142,0.7)] transition hover:translate-y-0.5 hover:shadow-[0_14px_34px_-12px_rgba(255,46,142,0.55)]"
            >
              Broneeri baar
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Vaata menüüd
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";

type ServiceCard = {
  title: string;
  description: string;
  detail: string;
  icon: ReactNode;
};

const services: ServiceCard[] = [
  {
    title: "BAAR, MIS LIIGUB SINU JUURDE",
    description:
      "Meie kokteilitreiler on iga peo südameks- stiilne välimus, hea vaib ja veel paremad kokteilid. Toome kaasa energia ja maitsed, mis muudavad su ürituse elamuseks, mida meenutatakse veel kaua.",
    detail:
      "Täiuslik lahendus festivalidele, suvepäevadele, juubelitele, pulmadesse ja igale üritusele mis väärib tähistamist.",
    icon: (
      <Image
        src="/trailer.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "SISERUUM - MOBIILNE BAARILETT",
    description:
      "Kui peod kolivad siseruumidesse, siis MustMull tuleb kaasa. Nüüd paneme peo püsti mobiilse siseleti abil. See on pop-up baar, mis muudab iga ürituse pidulikuks ja eriliseks- kus iganes, kodus, kontoris, peosaalis või kasvõi spordihallis. Me usaldame sinu valikut.",
    detail:
      "Tuleme kohale, paneme leti püsti, pudelid ritta ja sina lihtsalt naudi seltskonda ja kokteile.",
    icon: (
      <Image
        src="/bar.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "KORRALDAD TEEMAPIDU - ERIMENÜÜ",
    description:
      "Aina enam korraldatakse pidusid, kus soovitakse omanäolisi kokteile. Meile sellised peod eriti meeldivad- väljakutse ja vaheldus. Oleme valmis koostama erimenüüsid ja põnevate nimedega kokteile mis haakuvad just teie peoga.",
    detail: "Sinu pidu - sinu valitud kokteilid ja nimed.",
    icon: (
      <Image
        src="/menu.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "LIHTSALT TÄHISTA ELU",
    description:
      "Oled korraldamas üritust ja soovid seda protsessi läbida võimalikult lihtsalt. Luba meil hoolitseda kõige eest mis puudutab baari - joogid, teenindus, meeleolu. Sina lihtsalt naudi hetke ja külalisi, meie teeme ülejäänu.",
    detail:
      "Täislahendus neile kes hindavad häid kokteile ja muretut meeleolu.",
    icon: (
      <Image
        src="/complete.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8"
        aria-hidden="true"
      />
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/60 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-8">
        <div>
          <span className="mb-4 block text-xs uppercase tracking-[0.35em] text-accent">
            Mida me pakume
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Kõik, mida vajad ideaalseks peoks!
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/70 sm:text-lg">
            MustMull pakub täisteenust alates mobiilsetest baarilettidest,
            suvesündmustele kokteilitreilerist, kokteilidest ja varustusest kuni
            säravate baarmenideni. Me hoolitseme detailide eest, et sina saaksid
            lihtsalt hetke nautida.
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
              <div className="relative flex flex-col gap-4">
                <div className="flex size-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70">{service.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    {service.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

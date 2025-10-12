import { ContactConfirmationEmail } from "@/emails/contact-confirmation";

export default function ContactConfirmationEmailPreviewPage() {
  return (
    <main className="min-h-screen bg-black/95 py-16 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <header className="space-y-3 text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            Email Preview
          </p>
          <h1 className="font-display text-3xl font-semibold">
            Päringu kinnitus e-kiri
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Vaata, kuidas Resendi kaudu saadetav kinnituskiri välja näeb.
            Väärtused on näidisandmetega, mis annavad ülevaate kujundusest ja
            sisust.
          </p>
        </header>
        <section className="mx-auto w-full max-w-[720px] rounded-[36px] border border-white/10 bg-background/60 p-6 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)]">
          <ContactConfirmationEmail
            fullName="Mari Maasikas"
            eventDate="2025-08-15"
            serviceType="Haagisbaar"
          />
        </section>
      </div>
    </main>
  );
}


"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const defaultStatusMessage = "Vastame 24 tunni jooksul";
const successMessage =
  "Oleme Teie päringu kätte saanud. Vastame teile 24 tunni jooksul.";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const isSubmitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setStatus("submitting");
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          data?.error ?? "Saatmine ebaõnnestus. Palun proovi uuesti."
        );
      }

      form.reset();
      setStatus("success");
      setFeedback(successMessage);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Saatmine ebaõnnestus. Palun proovi uuesti."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-black to-background py-24"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent blur-[120px]" />
        <div className="absolute right-0 top-32 h-48 w-48 rounded-full bg-gold blur-[100px]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 text-center sm:px-8">
        <span className="text-xs uppercase tracking-[0.35em] text-accent">
          Teeme plaani
        </span>
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Valmis MustMulli broneerima?
        </h2>
        <p className="text-base text-white/70 sm:text-lg">
          Räägi meile oma üritusest, külaliste arvust ja unistuste jookidest -
          vastame 24 tunni jooksul.
        </p>
        <form
          className="grid gap-6 text-left"
          onSubmit={handleSubmit}
          noValidate
        >
          {status === "success" && feedback && (
            <div
              className="flex items-center gap-4 rounded-3xl border border-accent/30 bg-accent/10 p-5 text-left shadow-[0_22px_50px_-20px_rgba(255,46,142,0.65)] backdrop-blur-sm"
              role="status"
              aria-live="polite"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M20.285 6.708a1 1 0 0 0-1.57-1.249l-8.22 10.339-4.21-4.211a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.5-.087z"
                  />
                </svg>
              </span>
              <p className="text-sm font-medium text-white sm:text-base">
                {feedback}
              </p>
            </div>
          )}
          <div className="grid gap-2">
            <label
              htmlFor="fullName"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
            >
              Täisnimi
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              disabled={isSubmitting}
              className="w-full rounded-2xl border border-white/15 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
              placeholder="Mari Maasikas"
            />
          </div>

          <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
              >
                E-post
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-white/15 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="nimi@ettevote.ee"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="phone"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
              >
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-white/15 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="+372 5555 1234"
              />
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-2">
              <label
                htmlFor="eventDate"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
              >
                Ürituse kuupäev
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                required
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-white/15 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="location"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
              >
                Asukoht
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-white/15 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="Tallinn, Telliskivi Loomelinnak"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="guestCount"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
            >
              Külaliste arv
            </label>
            <input
              id="guestCount"
              name="guestCount"
              type="number"
              min={1}
              required
              disabled={isSubmitting}
              className="w-full rounded-2xl border border-white/15 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
              placeholder="nt 120"
            />
          </div>

          <fieldset className="grid gap-3 rounded-2xl border border-white/15 bg-background/60 p-6">
            <legend className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Teenuse valik
            </legend>
            <div className="grid gap-2 text-sm text-white/80 sm:grid-cols-3 sm:gap-3">
              {[
                {
                  id: "service-trailer",
                  label: "Haagisbaar",
                  value: "trailer",
                },
                { id: "service-mobile", label: "Liikuv baar", value: "mobile" },
                { id: "service-both", label: "Mõlemad", value: "both" },
              ].map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/70 px-4 py-3 transition hover:border-accent/50"
                >
                  <input
                    id={option.id}
                    name="serviceType"
                    type="radio"
                    value={option.value}
                    required
                    disabled={isSubmitting}
                    className="size-4 border-white/40 bg-transparent text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
            >
              Sõnum
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              disabled={isSubmitting}
              className="w-full rounded-2xl border border-white/15 bg-background/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
              placeholder="Räägi meile oma ürituse visioonist, erisoovidest või detailidest."
            />
          </div>

          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
            <p
              className="text-xs uppercase tracking-[0.35em] text-white/60"
              aria-live={status === "success" ? undefined : "polite"}
              role={status === "success" ? undefined : "status"}
            >
              {status === "success"
                ? defaultStatusMessage
                : (feedback ?? defaultStatusMessage)}
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background shadow-[0_12px_30px_-12px_rgba(255,46,142,0.7)] transition hover:translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(255,46,142,0.55)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60 disabled:shadow-none"
            >
              {isSubmitting ? "Saatmine..." : "Saada päring"}
            </button>
          </div>
        </form>
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          Teenindame üle Eesti ja ka kaugemal
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg text-white">MustMull</span>
          <p className="text-xs uppercase tracking-[0.3em]">
            Kokteilid ratastel, mälestused kordusel.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-white/70 sm:text-right">
          <Link href="mailto:info@mustmull.com" className="hover:text-white">
            info@mustmull.com
          </Link>
          <Link href="tel:+3725201648" className="hover:text-white">
            +372 520 1648
          </Link>
          <div className="flex gap-4 sm:justify-end">
            <Link
              href="https://www.facebook.com/mustmullbaar/"
              className="text-xs uppercase tracking-[0.25em] hover:text-accent"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

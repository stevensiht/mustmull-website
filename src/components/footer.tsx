import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="w-fit" aria-label="MustMull avaleht">
            <Image
              src="/mustmull_logo.svg"
              alt="MustMulli logo"
              width={280}
              height={80}
              className="h-20 w-auto sm:h-24"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-white/70 sm:items-end sm:text-right">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Kontakt
          </span>
          <Link
            href="mailto:info@mustmull.com"
            className="flex items-center gap-3 hover:text-white sm:justify-end"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-white/50"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.5"
                y="4"
                width="15"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 6.5 9.48 11a1.5 1.5 0 0 0 1.76 0L17 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>info@mustmull.com</span>
          </Link>
          <Link
            href="tel:+3725201648"
            className="flex items-center gap-3 hover:text-white sm:justify-end"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-white/50"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 3.5v2.8a1.5 1.5 0 0 1-.33.95l-1.3 1.58a1 1 0 0 0-.1 1.06c1.22 2.29 3.04 4.11 5.33 5.33a1 1 0 0 0 1.06-.11l1.58-1.3a1.5 1.5 0 0 1 .95-.33h2.8a1 1 0 0 1 1 1v2.1a2 2 0 0 1-2.2 2c-8.16-.51-14.49-6.84-15-15A2 2 0 0 1 3 2.5h2.1a1 1 0 0 1 1 1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>+372 520 1648</span>
          </Link>
          <Link
            href="https://www.facebook.com/mustmullbaar/"
            className="flex items-center gap-3 hover:text-accent sm:justify-end"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 text-white/50"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.447 18v-6.263h2.104l.314-2.444h-2.418V7.558c0-.708.197-1.19 1.21-1.19h1.293V4.177C13.651 4.122 12.932 4 12.078 4c-1.867 0-3.146 1.14-3.146 3.232v1.806H6.828v2.444h2.104V18h2.515Z" />
            </svg>
            <span className="text-sm tracking-[0.08em]">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

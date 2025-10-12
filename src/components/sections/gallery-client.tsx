'use client';

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { GalleryImage } from "@/components/sections/gallery";

type GalleryClientProps = {
  images: GalleryImage[];
};

export function GalleryClient({ images }: GalleryClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasImages = images.length > 0;
  const duplicatedImages = useMemo(() => {
    if (!hasImages) {
      return [];
    }

    return [0, 1].flatMap((loopIndex) =>
      images.map((image, index) => ({
        ...image,
        index,
        isDuplicate: loopIndex === 1,
        key: `${image.src}-${loopIndex}`,
      }))
    );
  }, [hasImages, images]);

  const openLightbox = useCallback(
    (index: number) => {
      if (!hasImages) {
        return;
      }

      setActiveIndex(index);
    },
    [hasImages]
  );

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || images.length === 0) return prev;
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || images.length === 0) return prev;
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrev]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;
  const activeAlt =
    activeIndex !== null
      ? activeImage?.alt || `Sündmuse tipphetk ${activeIndex + 1}`
      : "";

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    if (activeIndex >= images.length) {
      setActiveIndex(images.length > 0 ? images.length - 1 : null);
    }
  }, [activeIndex, images.length]);

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

        {hasImages ? (
          <div className="mask-soft overflow-hidden">
            <div className="gallery-track flex w-max gap-4 pb-4">
              {duplicatedImages.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => openLightbox(item.index)}
                  className="group relative h-60 w-[17rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  aria-hidden={item.isDuplicate}
                  tabIndex={item.isDuplicate ? -1 : 0}
                  aria-label={`Ava pilt: ${
                    item.alt || `Sündmuse tipphetk ${item.index + 1}`
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt || `Sündmuse tipphetk ${item.index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 65vw, 272px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/20 bg-background/60 p-12 text-center text-white/60">
            Galerii on hetkel tühi. Lisa pilte kausta <span className="font-mono">public/images</span>, et need siin ilmuksid.
          </div>
        )}
      </div>

      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galerii vaade"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Sulge pilt"
          >
            <span className="sr-only">Sulge pilt</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6m0 12L6 6"
              />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Eelmine pilt"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Järgmine pilt"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative flex w-full max-w-4xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-black">
              <Image
                src={activeImage.src}
                alt={activeAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

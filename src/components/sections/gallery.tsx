import fs from "fs/promises";
import path from "path";

import { GalleryClient } from "@/components/sections/gallery-client";

export const dynamic = "force-dynamic";

export type GalleryImage = {
  src: string;
  alt: string;
  filename: string;
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

async function getGalleryImages(): Promise<GalleryImage[]> {
  const imagesDirectory = path.join(process.cwd(), "public", "images");

  try {
    const entries = await fs.readdir(imagesDirectory, { withFileTypes: true });

    const images = entries
      .filter((entry) => entry.isFile())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => {
        const extension = path.extname(entry.name).toLowerCase();

        if (!imageExtensions.has(extension)) {
          return null;
        }

        const baseName = path.basename(entry.name, extension);
        const readableName = baseName
          .replace(/[-_]+/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        return {
          src: `/images/${entry.name}`,
          filename: entry.name,
          alt:
            readableName.length > 0
              ? `MustMull galerii: ${readableName}`
              : "MustMull galerii foto",
        };
      })
      .filter((value): value is GalleryImage => value !== null);

    return images;
  } catch (error) {
    console.error("Failed to load gallery images", error);
    return [];
  }
}

export async function GallerySection() {
  const images = await getGalleryImages();

  return <GalleryClient images={images} />;
}

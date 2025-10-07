import { SiteFooter } from "@/components/footer";
import { ContactSection } from "@/components/sections/contact";
import { GallerySection } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { SignatureSection } from "@/components/sections/signature";
import { StorySection } from "@/components/sections/story";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <SignatureSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

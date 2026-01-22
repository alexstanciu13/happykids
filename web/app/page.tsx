import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { BestSellers } from "@/components/home/BestSellers";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { DiscountCarousel } from "@/components/home/DiscountCarousel";
import { PersonalizationShowcase } from "@/components/home/PersonalizationShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* 1. Best Sellers High Up - Instant Sales Hook */}
      <BestSellers />

      {/* 2. Categories for Navigation */}
      <CategoryGrid />

      {/* 3. The "Why Us" - Personalization */}
      <PersonalizationShowcase />

      {/* 4. More Collections - Depth */}
      <FeaturedCollections />

      {/* 5. Special Offers - Urgency */}
      <DiscountCarousel />

      {/* 6. Trust & Process */}
      <HowItWorks />

      {/* 6. Social Proof */}
      <Testimonials />

      {/* 7. Handling Objections */}
      <FAQ />

      {/* Newsletter Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-4">Abonează-te la Newsletter</h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Primești o reducere de 10% la prima comandă și ești primul care află despre noile colecții de botez.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button variant="secondary" size="lg" className="font-bold">
              Vreau Reducerea
            </Button>
          </form>
        </div>
      </section>

      <InstagramFeed />
    </>
  );
}

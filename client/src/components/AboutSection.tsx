import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-50" id="about">
      {/* Decorative Background Shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50px] left-[-50px] w-[400px] h-[400px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1 relative">
            <img
              src="src/components/assets/IETI_office_building.webp"
              alt="Modern IETI office building"
              className="rounded-2xl shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              data-testid="img-about-building"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-900"
              data-testid="text-about-title"
            >
              About IETI
            </h2>
            <p
              className="text-lg text-slate-600 leading-relaxed"
              data-testid="text-about-description"
            >
              In the 1980s, Sri Lanka saw rapid industrial growth, 
              creating new opportunities but also highlighting the need for skilled manpower.
              To address this, the Apprenticeship Training Institute (ATI) was established in 1983 with German government support. 
              Renamed in 2014 as the Industrial Engineering Training Institute (IETI), Katubedda, it now functions under NAITA with the mission of producing skilled craftsmen for both local and global markets.
              <br />  
            </p>
            <br />
            <Link href="/about">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

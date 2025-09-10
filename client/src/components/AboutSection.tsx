import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Building Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern NAITA office building" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              data-testid="img-about-building"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" data-testid="text-about-title">
              About NAITA
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed" data-testid="text-about-description">
              NAITA is an omni-directus showcase of public and private apprenticeships programs and 
              opportunities with the opportunity to provide tools to help students join and network 
              with employers. Our mission is to build a skilled workforce through comprehensive 
              training programs and industry partnerships that bridge the gap between education and employment.
            </p>
            
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

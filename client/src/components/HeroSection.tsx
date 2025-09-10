import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight" data-testid="text-hero-title">
                Building a Skilled Nation with IETI
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed" data-testid="text-hero-subtitle">
                Industrial Engineering Training Institute (IETI)
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
                data-testid="button-explore-programs"
              >
                Explore Programs
              </Button>
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
                data-testid="button-apply-online"
              >
                Apply Online
              </Button>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaborating in modern office" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              data-testid="img-hero-team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

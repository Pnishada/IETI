import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TrainingCenters() {
  const centers = [
    { 
      name: "Colombo Training Center", 
      description: "Provides industry-standard training in IT, Engineering, and Vocational skills.", 
      address: "123 Main Street, Colombo 07", 
      contact: "011-2345678",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    { 
      name: "Galle Training Center", 
      description: "Focused on hospitality, tourism, and technical training programs.", 
      address: "45 Galle Road, Galle", 
      contact: "091-2233445",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    { 
      name: "Kandy Training Center", 
      description: "Specialized in NVQ programs and advanced apprenticeships.", 
      address: "67 Peradeniya Road, Kandy", 
      contact: "081-3344556",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    { 
      name: "Jaffna Training Center", 
      description: "Offers career development and vocational training across multiple sectors.", 
      address: "21 Stanley Road, Jaffna", 
      contact: "021-5566778",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const partners = [
    {
      name: "AETI – Orugodawatta",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100"
,
      description: "Advanced training and technical education at Orugodawatta.",
    },
    {
      name: "Sri Lanka Nursing Council",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100",
      description: "Supports hospital and nursing school programs.",
      link: "https://www.slnc.lk/hospitalsandnursingschool.php",
    },
    {
      name: "Institute of Engineering Technology (IET)",
      logo: "https://images.unsplash.com/photo-1581092795442-31ad4273c997?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100",
      description: "Provides professional engineering and technical education.",
      link: "https://iet.edu.lk/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-slate-900" data-testid="text-training-centers-title">
            NAITA Training Centers
          </h1>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-training-centers-description">
            NAITA operates nationwide training centers providing high-quality vocational
            and industrial training across multiple disciplines to build a skilled nation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((center, index) => (
              <Card key={index} className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden" data-testid={`card-training-center-${index}`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={center.image} 
                    alt={`${center.name} facility`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    data-testid={`img-center-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-slate-900" data-testid={`text-center-name-${index}`}>
                    {center.name}
                  </h2>
                  <p className="text-slate-600 mb-4 leading-relaxed" data-testid={`text-center-description-${index}`}>
                    {center.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-slate-500 flex items-start" data-testid={`text-center-address-${index}`}>
                      <span className="font-medium text-slate-700 mr-2">Address:</span>
                      <span className="flex-1">{center.address}</span>
                    </p>
                    <p className="text-sm text-slate-500 flex items-center" data-testid={`text-center-contact-${index}`}>
                      <span className="font-medium text-slate-700 mr-2">Contact:</span>
                      <span>{center.contact}</span>
                    </p>
                  </div>
                  <Button 
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    data-testid={`button-view-more-${index}`}
                  >
                    View More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-slate-900" data-testid="text-partners-title">
              Our Partners
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-partners-description">
              NAITA collaborates with leading educational institutions and organizations to provide comprehensive training and development opportunities.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow" data-testid={`card-partner-${index}`}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-w-full max-h-full object-contain"
                        data-testid={`img-partner-logo-${index}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900" data-testid={`text-partner-name-${index}`}>
                      {partner.name}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed" data-testid={`text-partner-description-${index}`}>
                      {partner.description}
                    </p>
                    {partner.link ? (
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                        data-testid={`link-partner-website-${index}`}
                      >
                        Visit Website
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="text-slate-400 text-sm" data-testid={`text-partner-contact-${index}`}>
                        Partner Organization
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
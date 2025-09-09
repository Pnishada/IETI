import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Gallery() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Students collaborating on engineering projects"
    },
    {
      image: "https://images.unsplash.com/photo-1581092795442-31ad4273c997?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Advanced technical training workshop"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Modern computer lab training session"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Hospitality training program"
    },
    {
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Apprenticeship graduation ceremony"
    },
    {
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Industrial training facility"
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Vocational skills development workshop"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "Healthcare training program"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      caption: "NAITA training center building"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" data-testid="text-gallery-title">
              Our Gallery
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto" data-testid="text-gallery-description">
              Explore our comprehensive collection showcasing NAITA's training programs, 
              educational events, student achievements, and state-of-the-art facilities 
              across our nationwide training centers.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                data-testid={`gallery-item-${index}`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-gallery-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4">
                  <p className="text-slate-700 font-medium text-center leading-relaxed" data-testid={`text-caption-${index}`}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
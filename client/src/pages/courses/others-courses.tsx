"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/ui/Modal";

// Import leaflet images
import leaflet1 from "../../components/assets/Leaflets/1. BB.jpg";
import leaflet2 from "../../components/assets/Leaflets/2. CGD.jpg";
import leaflet3 from "../../components/assets/Leaflets/3. CS.jpg";
import leaflet4 from "../../components/assets/Leaflets/4. EN.jpg";
import leaflet5 from "../../components/assets/Leaflets/5. ICTT.jpg";
import leaflet6 from "../../components/assets/Leaflets/6-7. MW - MM.jpg";
import leaflet7 from "../../components/assets/Leaflets/8. WW.jpg";  
import leaflet8 from "../../components/assets/Leaflets/9. DRP.jpg";  
import leaflet9 from "../../components/assets/Leaflets/10. PL.jpg";
import leaflet10 from "../../components/assets/Leaflets/11. EL.png";
import leaflet11 from "../../components/assets/Leaflets/CELV.jpg";


const OtherCoursesPage: React.FC = () => {
  const leaflets = [leaflet1, leaflet2, leaflet3, leaflet4, leaflet5, leaflet6, leaflet7, leaflet8, leaflet9, leaflet10, leaflet11]; // add all images here
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Other Courses Leaflets</h1>
        <p className="text-center text-gray-600 mb-8">
          Browse leaflets for our other courses. Click an image to view it in full.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaflets.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Leaflet ${idx + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <div className="flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Full Leaflet"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  );
};

export default OtherCoursesPage;

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface GalleryItem {
  image: string;
  caption: string;
  category: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    { image: "src/components/assets/Students_projects.webp", caption: "Students collaborating on engineering projects", category: "Students" },
    { image: "src/components/assets/training_workshop.webp", caption: "Advanced technical training workshop", category: "Training" },
    { image: "src/components/assets/lab_training_session.webp", caption: "Modern computer lab training session", category: "Facilities" },
    { image: "src/components/assets/training_program.webp", caption: "Hospitality training program", category: "Training" },
    { image: "src/components/assets/graduation_ceremony.webp", caption: "Apprenticeship graduation ceremony", category: "Events" },
    { image: "src/components/assets/training_facility.webp", caption: "Industrial training facility", category: "Facilities" },
    { image: "src/components/assets/skills_development_workshop.webp", caption: "Vocational skills development workshop", category: "Training" },
    { image: "src/components/assets/Healthcare_training.webp", caption: "Healthcare training program", category: "Healthcare" },
    { image: "src/components/assets/training_center_building.webp", caption: "IETI training center building", category: "Facilities" },
  ];

  const categories = ["All", "Students", "Training", "Facilities", "Events", "Healthcare"];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-20 text-center bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 text-white"
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold drop-shadow-md">
          Our Gallery
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
          Explore our programs, student achievements, and modern training
          facilities across IETI centers nationwide.
        </p>
      </motion.section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Masonry Gallery */}
      <section className="py-16">
        <motion.div
          layout
          className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.image}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-lg font-semibold drop-shadow-lg">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-500"
              >
                No items in this category.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="w-full rounded-2xl object-contain shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-green-900/80 text-center py-4 rounded-b-2xl">
                <p className="text-white text-lg font-medium">
                  {selectedImage.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black rounded-full p-2 shadow-lg transition transform hover:scale-110"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

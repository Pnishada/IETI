"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsData = [
  {
    id: 1,
    title: "IETI Computer Lab Inauguration",
    date: "Wednesday, 10 September 2025",
    image: "/images/ieti-news1.jpg",
    link: "/news/1",
    description:
      "State-of-the-art computer lab inaugurated at IETI to enhance ICT learning and software training.",
  },
  {
    id: 2,
    title: "Industrial Training Program 2025",
    date: "Monday, 08 September 2025",
    image: "/images/ieti-news2.jpg",
    link: "/news/2",
    description:
      "IETI students gained hands-on experience in local industries through the annual training program.",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="relative bg-white text-black py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Industrial Engineering Training Institute</h1>
        <p className="mt-3 text-xl text-gray-600">Moratuwa</p>
      </section>
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
        >
          {newsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
                  <p className="text-sm md:text-base">{item.date}</p>
                  <a
                    href={item.link}
                    className="mt-2 inline-block bg-green-600 px-4 py-2 rounded-full hover:bg-green-800 transition"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="text-2xl font-bold mb-6 text-black">Latest News</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 hover:text-green-600">
                  <a href={item.link}>{item.title}</a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 hover:bg-green-800 text-white px-6 py-3 rounded-full shadow transition">
            Load More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

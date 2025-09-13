"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

export default function NewsSection(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const news: NewsItem[] = [
    {
      id: 1,
      title: "IETI opens new Computer Lab",
      description: "State-of-the-art lab for ICT and software development courses.",
      date: "Sep 10, 2025",
      image: "https://images.unsplash.com/photo-1581091870679-77f3f4a85a31?auto=format&fit=crop&w=500&h=300",
      link: "/news/1",
    },
    {
      id: 2,
      title: "Industrial Training Program 2025",
      description: "Hands-on training opportunities for students in local industries.",
      date: "Sep 8, 2025",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&h=300",
      link: "/news/2",
    },
    {
      id: 3,
      title: "New Welding Workshop Inaugurated",
      description: "Industry-standard welding workshop now available for trainees.",
      date: "Sep 5, 2025",
      image: "https://images.unsplash.com/photo-1600423115367-96a6b7d09e92?auto=format&fit=crop&w=500&h=300",
      link: "/news/3",
    },
  ];

  const featuredImages: string[] = [
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=500&h=300",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&h=300",
    "https://images.unsplash.com/photo-1600423115367-96a6b7d09e92?auto=format&fit=crop&w=500&h=300",
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-16">
          Latest News & Announcements
        </h2>

        {/* News Cards Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mb-20"
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={item.link}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden cursor-pointer transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-slate-500 mb-2">{item.date}</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Featured Events Slider */}
        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
          Featured Events & Announcements
        </h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={800}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-12"
        >
          {featuredImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition-transform duration-500 hover:-translate-y-1">
                <img
                  src={src}
                  alt={`Featured ${idx + 1}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/news">
            <Button className="bg-white border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium shadow-sm transition-colors">
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

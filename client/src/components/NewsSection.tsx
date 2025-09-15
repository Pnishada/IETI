"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import axios from "axios"; // Import axios for making requests

interface NewsItem {
  id: number;
  title: string;
  description: string;
  published_date: string;  // Correct field name 'published_date'
  image: string;
  link: string;
}

export default function NewsSection(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]); // State to hold fetched news data

  useEffect(() => {
    setMounted(true);
    // Fetch news data from the backend when the component is mounted
    axios
      .get("http://localhost:8000/api/news/") // Update URL if needed for production
      .then((response) => {
        setNews(response.data); // Set the fetched data to state
      })
      .catch((error) => {
        console.error("Error fetching news:", error); // Log any errors
      });
  }, []);

  if (!mounted) return null;

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
                    <div className="text-sm text-slate-500 mb-2">{item.published_date}</div>
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

        {/* You can add a separate featured section if needed */}

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

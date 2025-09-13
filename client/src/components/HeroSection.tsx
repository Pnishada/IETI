"use client";

import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useLocation } from "wouter"; // <-- wouter routing

import studentl from "@/components/assets/studentl.jpg";
import uni1 from "@/components/assets/uni1.jpg";
import uni2 from "@/components/assets/uni2.jpg";

// TypeScript interface for slides
interface Slide {
  src: string;
  heading: string;
  subheading: string;
}

export default function HeroSection(): JSX.Element {
  const [, setLocation] = useLocation(); // wouter navigation

  const slides: Slide[] = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      heading: "Building a Skilled Nation",
      subheading: "Industrial Engineering Training Institute (IETI)",
    },
    {
      src: studentl,
      heading: "Empowering Students",
      subheading: "Hands-on learning for a brighter future",
    },
    {
      src: uni1,
      heading: "Innovative Learning",
      subheading: "Modern classrooms, practical training",
    },
    {
      src: uni2,
      heading: "Achieve Excellence",
      subheading: "Preparing leaders for tomorrow",
    },
  ];

  return (
    <section className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-screen bg-center bg-cover relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative text-center text-white px-6 md:px-12 max-w-3xl space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                  {slide.heading}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl">{slide.subheading}</p>
                <div className="flex justify-center gap-4 mt-6">
                  <Button
                    onClick={() => setLocation("/apply-online")} // navigate to Apply Online
                    className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold"
                  >
                    Apply Online
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

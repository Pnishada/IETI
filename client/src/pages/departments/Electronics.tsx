"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "../../components/ui/card";

// Example images (replace with real ones in your assets folder)
import slider1 from "../../components/assets/department/Electronics1.jpg";
import slider2 from "../../components/assets/department/Electronics2.jpg";
import slider3 from "../../components/assets/department/Electronics3.jpg";

export default function Electronics() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Swiper Hero Section */}
        <div className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="h-[420px] md:h-[520px]"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider1}
                  alt="Electronics Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Electronics
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Microelectronics & Innovation
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider2}
                  alt="Microchips"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Electronics
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Digital Circuits & LSI Technology
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider3}
                  alt="Circuits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Electronics
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Practical Industrial Training
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>


        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Electronics Division
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            This Division was started in July 1989. The modern era of Electronics ushered
            in a second industrial revolution, the impact of which could be even greater
            than that of the first. This is mainly due to the advent of Microelectronics
            into the field of electronic engineering. From a large number of different
            technologies, the large-scale integration of digital circuits emerged as a
            universal fundamental technology. Thus the traditional boundaries between
            component and systems are no longer distinct.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            The applications of electronics are manifold as can be seen in the small
            selection shown. We in IETI are gearing ourselves to face this revolution by
            introducing our apprentices to this magic world of electronics. Our approach
            is practice-oriented with related theory taught in lecture rooms/workshops.
            We started training in electronics craft training in July 1989, and are sure
            that our trainees can face this electronics revolution with confidence.
          </p>

          {/* Course Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Our Courses
            </h2>
            <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Electronic Craftsman (Special) – 03 Years
                </h3>
                <p className="text-gray-600">
                  This course is a National Vocational Qualification (NVQ) offered with
                  certification as an{" "}
                  <strong>Industrial Electronic Technician</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

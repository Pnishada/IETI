"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "../../components/ui/card";

// Example images (replace with your actual assets)
import slider1 from "../../components/assets/department/Mechanical1.jpg";
import slider2 from "../../components/assets/department/Mechanical2.jpg";
import slider3 from "../../components/assets/department/Mechanical3.jpg";

export default function Mechanical() {
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
                  alt="Machining Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Mechanical
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Machining & Metal Trades
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider2}
                  alt="Welding Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Mechanical
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Welding & Fabrication
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider3}
                  alt="Advanced Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Mechanical
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Advanced Industrial Skills
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Mechanical Division
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            The Mechanical Division was started in July 1988. Training for the metal trade
            offers exposure to a wide range of skills in two specialized fields: Machining
            and Welding. During the first half year of basic training all apprentices are
            trained in bench fitting and manual processes.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            In machining, apprentices are thoroughly trained in conventional machine tools
            such as lathe, shaper, and milling machines. During advanced training,
            sophisticated machinery like surface grinding and cylindrical grinding machines
            are introduced, along with complex machining processes such as gear cutting,
            tool grinding, and the manufacture of cutting tools.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            Welders are trained in conventional welding processes such as manual arc,
            gas welding, and pipe welding. Advanced training covers modern welding
            techniques including MIG/MAG welding, TIG welding, and welding for non-ferrous
            metals.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            In both machining and welding fields, efforts are made to integrate production
            work with training. This exposes trainees to real working environments,
            motivates them to produce useful items, and instills an understanding of the
            seriousness of work. Strong links are also maintained with industry partners,
            ensuring apprentices are aligned with industry requirements.
          </p>

          {/* Course Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Our Courses
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Welder (Special) – 03 Years
                  </h3>
                  <p className="text-gray-600">
                    Training in manual arc, gas, MIG/MAG, TIG welding, and welding for
                    non-ferrous metals.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Machinist (Special) – 03 Years
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive training in lathe, shaper, milling, gear cutting,
                    grinding, and advanced machining practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

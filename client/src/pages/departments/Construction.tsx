"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "../../components/ui/card";

// Example images (replace with actual assets)
import slider1 from "../../components/assets/department/construction1.jpg";
import slider2 from "../../components/assets/department/construction2.jpg";
import slider3 from "../../components/assets/department/construction3.jpg";

export default function Construction() {
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
                  alt="Construction Site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Construction
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Modern Construction Techniques
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider2}
                  alt="High-rise Construction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Construction
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    High-Rise & Precision Projects
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider3}
                  alt="Civil Skills Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Construction
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Skilled Craftsmen Development
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Construction Division
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            This division was started in October 1983. The construction trade has entered a new
            phase with the development of modern industry. High-risk skyscrapers have steadily
            replaced the sprawling buildings of the recent past. This development is the outcome
            of the impact of modern industry on construction. The combination of expert human
            skill with an eye for detailed precision work and ultra-sophisticated equipment
            accounts for the development of such elaborate constructions. Training craftsmen
            for work of this caliber is the responsibility of the IETI.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            IETI trainees of the construction trade are geared to meet the demands of modern
            construction in the way most suitable to the facilities available. They give life
            and meaning to designs on paper and are an essential part of modern industry. There
            is a comprehensive programme for skills development in civil construction. At the
            end of the training, these craftsmen can perform all tasks related to modern building
            construction.
          </p>

          {/* Courses */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Construction Supervisor – 1.5 Years
                  </h3>
                  <p className="text-gray-600">
                    Training for supervising construction projects and managing skilled teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Plumber – 02 Years
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive training in plumbing systems, installations, and maintenance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Drafts Person – 02 Years
                  </h3>
                  <p className="text-gray-600">
                    Skills in drafting and design for modern construction projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-gray-600 mt-6 text-sm">
              * All these courses are at the Level 04 of National Vocational Qualification (NVQ).
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

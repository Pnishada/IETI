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
import slider1 from "../../components/assets/department/woodwork1.jpg";
import slider2 from "../../components/assets/department/woodwork2.jpg";
import slider3 from "../../components/assets/department/woodwork3.jpg";

export default function Woodwork() {
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
                  alt="Woodwork Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Wood Work
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Carpentry & Furniture Design
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider2}
                  alt="Precision Woodwork"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Wood Work
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Precision Equipment Training
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider3}
                  alt="Entrepreneurship Skills"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Wood Work
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Managerial & Entrepreneurial Skills
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Wood Work Division
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            This division was started in October 1983. Training is directly related to job
            opportunities in the local and foreign markets. Work experience includes handling
            precision equipment which can turn out intricate designs in wood, as required by
            this expanding industry. Wood Work specialists are given sufficient exposure within
            this trade for future career development. They are guided through all the stages
            from amateur to professional thereby strengthening their self-reliance.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            The dual system offers tradesmen the opportunity of being guided by foreign and
            local experts into adapting theory to suit the demands of contemporary industry. In
            its training programme, the IETI provides an insight into managerial and
            entrepreneurship aspects, which has long been recognized as the key to industrial
            development. Entrepreneurs take risks whilst harnessing the nation’s resources for
            productive purposes. On account of this dual approach, these craftsmen have found
            easy openings in industry.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            This is a two-year training programme.
          </p>

          {/* Courses */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Carpenter (Furniture) – 02 Years
                  </h3>
                  <p className="text-gray-600">
                    Training in carpentry and furniture design, including precision
                    equipment handling and industry-oriented skills.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-gray-600 mt-6 text-sm">
              * This course is at the level of National Vocational Qualification (NVQ) Level 04.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

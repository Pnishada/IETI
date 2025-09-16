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
import slider1 from "../../components/assets/department/Electrical1.jpg";
import slider2 from "../../components/assets/department/Electrical2.jpg";
import slider3 from "../../components/assets/department/Electrical3.jpg";

export default function Electrical() {
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
                  alt="Electrical Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Electrical
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Power & Industrial Systems
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider2}
                  alt="Power Lines"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Electrical
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Domestic & Industrial Applications
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slider3}
                  alt="Motor Repair"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Department of Electrical
                  </h1>
                  <p className="text-yellow-300 text-lg md:text-xl font-semibold mt-2">
                    Motor Winding & Refrigeration
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Electrical Division
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            This division was started in October 1983. Electrical Engineering has been a part 
            of industry for over 100 years. During this time major advances have always been 
            signaled by individual technical developments such as those in telephones and 
            telegraphy, generators and driving gear, radio and television, signal processing 
            and computers. However each technology is different and employs different methods 
            and techniques. The products of each technology were invariably aimed at specific 
            sectors of our industrial world.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            With the streamlining of technology electrical/electronic technologies became 
            more interdependent. This created the need for broad-based training. The IETI now 
            bases its training of electrical apprentices on a wide range of technical skills. 
            The electrical apprentices the IETI produces are competent in domestic electrical 
            installations, motor winding maintenance and repair, refrigeration and air 
            conditioning, and automation technology.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            By employing post–IETI craft apprentices, industry may benefit from their knowledge 
            of a wide range of electrical applications. Currently 02 courses have been started 
            in this section.
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
                    Electrician (Special) – 03 Years
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive training in electrical installations, safety, and industrial 
                    applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Refrigeration & Air Conditioning Mechanic – 02 Years
                  </h3>
                  <p className="text-gray-600">
                    Specialized training in refrigeration, cooling systems, and air conditioning 
                    maintenance.
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

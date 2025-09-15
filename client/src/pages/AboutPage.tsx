"use client";

import React from "react";
import Header from "../components/Header"; // Header component
import Footer from "../components/Footer"; // Footer component
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Building2, Award, Users, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-blue-700">IETI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The Industrial Engineering Training Institute (IETI) is committed to developing skilled 
            professionals by offering specialized industrial training programs, practical learning 
            opportunities, and career-focused education under the guidance of the National Apprentice 
            & Industrial Training Authority (NAITA).
          </p>
        </motion.div>

        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg relative"
        >
          <video
            src="src/components/assets/about_vedio.mp4"
            autoPlay
            loop
            muted
            controls
            controlsList="nodownload"
            preload="metadata"
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0" style={{ pointerEvents: "none" }}></div>
        </motion.div>
      </section>

      {/* History Section (from PDF) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our History
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            The 1980s witnessed the establishment of several new industrial ventures, 
            foreign investment in export-oriented industries, and new opportunities 
            for industrial entrepreneurs. With rising demand for skilled workers, the 
            Apprenticeship Training Institute (ATI) was established in 1983 with support 
            from the Government of the Federal Republic of Germany. In 2014, ATI was renamed 
            as the Industrial Engineering Training Institute (IETI). Today, IETI functions 
            under NAITA with the mission of producing skilled craftsmen for both local 
            and global labor markets.
          </p>

          {/* Timeline */}
          <div className="space-y-6">
            {[
              { year: "1979/1980", event: "Feasibility studies by GTZ (German Technical Cooperation)." },
              { year: "March 1981", event: "First Project Agreement for cooperation up to 1986." },
              { year: "April 1981", event: "Foundation by Hon. Minister Ranil Wickramasinghe." },
              { year: "Feb 1983", event: "Assignment of German Expert to ATI." },
              { year: "Oct 1983 – Apr 1984", event: "Commencement of training in Woodwork, Electrical & Construction." },
              { year: "Sept 1984", event: "Project planning seminar conducted by GTZ." },
              { year: "Oct 1984", event: "Feasibility study for Metal trade." },
              { year: "Sept 1985", event: "Feasibility study for Electronic trade." },
              { year: "Nov 1985", event: "Official opening of ATI by Hon. Minister Ranil Wickramasinghe." },
              { year: "Dec 1986", event: "Second Project Agreement signed (till 1990)." },
              { year: "July 1987", event: "Second GTZ project planning seminar." },
              { year: "July 1988", event: "Commencement of training in Metal trade." },
              { year: "July 1989", event: "Commencement of training in Electronics trade." },
              { year: "Oct 1989", event: "Third Project Agreement signed (till 1992)." },
              { year: "Dec 1989", event: "Preparations for National Cooperative Training Workshop." },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md"
              >
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{item.year}</h4>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={30}
            className="rounded-2xl"
          >
            {[
              {
                title: "Leading National Institute",
                text: "IETI is a leading national institute under NAITA, producing highly skilled professionals in industrial engineering.",
                image: "src/components/assets/IETI_office_building.webp",
              },
              {
                title: "Hands-On Learning",
                text: "Through industry-focused training and practical learning, we empower individuals to build successful careers.",
                image: "src/components/assets/Electrical_Eng_img.jpg",
              },
              {
                title: "Thousands of Graduates",
                text: "Over the years, IETI has trained thousands of students combining practical expertise with modern technology.",
                image: "src/components/assets/Graduates_img_1.jpg",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden max-w-3xl mx-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-gray-600">{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                To equip individuals with practical industrial engineering skills and foster a 
                competent workforce that drives innovation, productivity, and national development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-gray-600">
                To be the premier institute in industrial engineering training, 
                recognized for excellence in skill development and shaping professionals 
                who excel in both local and global industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose IETI */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose IETI</h2>
          <p className="mt-4 text-gray-600">
            We provide government-recognized industrial training, hands-on learning 
            with modern technology, and strong industry partnerships to ensure career-ready professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Building2, title: "Govt. Certified Training" },
              { icon: Award, title: "Industry Partnerships" },
              { icon: Users, title: "Global Career Pathways" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col items-center"
              >
                <item.icon className="w-12 h-12 text-green-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;

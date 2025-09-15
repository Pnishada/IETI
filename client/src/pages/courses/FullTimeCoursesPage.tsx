"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { fullTimeCourses } from "../../data/fullTimeCourses";
import CourseCard from "../../components/CourseCard";
import CourseModal from "../../components/CourseModal";

const FullTimeCoursesPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      {/* Hero Slider */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 4000 }} pagination={{ clickable: true }} loop className="h-full">
          {fullTimeCourses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10 bg-black/30">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Full-Time Courses</h1>
          <p className="mt-4 text-sm sm:text-lg max-w-2xl">Explore our industrial courses for local and global industries.</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">Available Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fullTimeCourses.map((course, idx) => (
            <CourseCard key={idx} {...course} onClick={() => setSelectedCourse(course)} />
          ))}
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          title={selectedCourse.title}
          image={selectedCourse.image}
          duration={selectedCourse.duration}
          details={selectedCourse.details}
          syllabus={selectedCourse.syllabus}
        />
      )}

      <Footer />
    </div>
  );
};

export default FullTimeCoursesPage;

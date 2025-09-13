"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/ui/Modal";
import { Card, CardContent } from "../components/ui/card";
import { BookOpen } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Slider images
import slider1 from "../components/assets/Automotive_Eng_img.jpg";
import slider2 from "../components/assets/Electrical_Eng_img.jpg";
import slider3 from "../components/assets/Graphic_Designer.jpg";

type CourseType = {
  title: string;
  description: string;
  details: string;
  icon: typeof BookOpen;
  image: string;
  duration: string;
  syllabus: string[];
};

const fullTimeCourses: CourseType[] = [
  {
    title: "Industrial Engineering Basics",
    description: "Fundamental principles of industrial engineering.",
    details: "This course covers the essential principles of industrial engineering, including workflow optimization, process analysis, and basic industrial operations. Suitable for beginners.",
    icon: BookOpen,
    image: slider1,
    duration: "6 months",
    syllabus: [
      "Introduction to Industrial Engineering",
      "Workflow and Process Optimization",
      "Basic Industrial Operations",
      "Efficiency Techniques"
    ]
  },
  {
    title: "Production Planning & Control",
    description: "Planning, scheduling, and controlling production systems.",
    details: "Learn how to plan production, manage resources, and control manufacturing operations for optimal efficiency.",
    icon: BookOpen,
    image: slider2,
    duration: "6 months",
    syllabus: [
      "Production Scheduling",
      "Resource Allocation",
      "Inventory Control",
      "Quality Management"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  {
    title: "Work Study & Ergonomics",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "4 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements"
    ]
  },
  
  
 
  // Add remaining courses as needed
];

const FullTimeCoursesPage: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);

  const openApplyModal = () => setIsApplyModalOpen(true);
  const closeApplyModal = () => setIsApplyModalOpen(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your application has been submitted!");
    closeApplyModal();
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      {/* Hero Slider */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          {[slider1, slider2, slider3].map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10 bg-black/30">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Part-Time Courses</h1>
          <p className="mt-4 text-sm sm:text-lg max-w-2xl">
            Explore our 10 part-time industrial engineering courses designed to equip you with skills for local and global industries.
          </p>
          <button
            onClick={openApplyModal}
            className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {fullTimeCourses.map((course, index) => (
          <Card
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1 rounded-lg cursor-pointer flex flex-col h-full"
          >
            <div
              className="flex flex-col items-start p-4 sm:p-6 w-full h-full"
              onClick={() => setSelectedCourse(course)}
            >
              <course.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#8B1E1E] mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                {course.title}
              </h3>
              <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base line-clamp-3">
                {course.description}
              </p>
            </div>
          </Card>
        ))}
      </section>

      {/* Apply Modal */}
      <Modal isOpen={isApplyModalOpen} onClose={closeApplyModal}>
        <h2 className="text-2xl font-bold mb-4">Apply for Part-Time Courses</h2>
        <form onSubmit={handleApply} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Select Course</label>
            <select
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"
            >
              {fullTimeCourses.map((course, index) => (
                <option key={index} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B1E1E] text-white py-2 rounded-lg font-semibold hover:bg-[#6A1616] transition-colors"
          >
            Submit Application
          </button>
        </form>
      </Modal>

      {/* Course Details Modal */}
      <Modal isOpen={!!selectedCourse} onClose={() => setSelectedCourse(null)}>
        {selectedCourse && (
          <div className="space-y-4 max-h-[80vh] overflow-y-auto">
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
            <p className="text-gray-500 font-medium">Duration: {selectedCourse.duration}</p>
            <p className="text-gray-700">{selectedCourse.details}</p>
            <div>
              <h3 className="font-semibold mb-2">Syllabus:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {selectedCourse.syllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  );
};

export default FullTimeCoursesPage;

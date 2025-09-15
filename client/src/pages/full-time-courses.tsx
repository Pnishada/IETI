"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/ui/Modal";
import { Card } from "../components/ui/card";
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
    title: "Electronics Craftsman (NVQ 4)",
    description: "Fundamental principles of industrial engineering.",
    details:
      "This course covers the essential principles of industrial engineering, including workflow optimization, process analysis, and basic industrial operations. Suitable for beginners.",
    icon: BookOpen,
    image: slider1,
    duration: "03 Year",
    syllabus: [
      "Introduction to Industrial Engineering",
      "Workflow and Process Optimization",
      "Basic Industrial Operations",
      "Efficiency Techniques",
    ],
  },
  {
    title: "Electrician (Special) (NVQ 4)",
    description: "Planning, scheduling, and controlling production systems.",
    details:
      "Learn how to plan production, manage resources, and control manufacturing operations for optimal efficiency.",
    icon: BookOpen,
    image: slider2,
    duration: "03 Year",
    syllabus: [
      "Production Scheduling",
      "Resource Allocation",
      "Inventory Control",
      "Quality Management",
    ],
  },
  {
    title: "Machinist (Special) (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "03 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Welder (Special) (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "03 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Refrigeration & Air Conditioning Mechanic (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "02 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Carpenter (Furniture) (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "02 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Plumber (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "02 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Construction Supervisor (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "01 Year 06 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Book Binder (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "01 Year 06 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Draughtperson (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "01 Year 06 months",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Quantity Surveying Assistant (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "01 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Computer Graphic Designer (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "01 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Information & Communication Technology Technician (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "01 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
  {
    title: "Aluminium Fabricator (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details:
      "Focus on time study, motion study, and ergonomic principles to improve productivity and worker comfort.",
    icon: BookOpen,
    image: slider3,
    duration: "01 Year",
    syllabus: [
      "Time Study",
      "Motion Study",
      "Workplace Ergonomics",
      "Efficiency Improvements",
    ],
  },
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Full-Time Courses
          </h1>
          <p className="mt-4 text-sm sm:text-lg max-w-2xl">
            Explore our 14 full-time industrial engineering courses designed to
            equip you with skills for local and global industries.
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
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">
          Available Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fullTimeCourses.map((course, index) => (
            <Card
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-1 rounded-xl cursor-pointer flex flex-col h-full"
            >
              <div
                className="flex flex-col items-start p-4 w-full h-full"
                onClick={() => setSelectedCourse(course)}
              >
                {/* Icon */}
                <course.icon className="w-6 h-6 text-[#8B1E1E] mb-2" />

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-gray-600 text-sm line-clamp-2">
                  {course.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Apply Modal */}
      <Modal isOpen={isApplyModalOpen} onClose={closeApplyModal}>
        <h2 className="text-2xl font-bold mb-4">Apply for Full-Time Courses</h2>
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
            <p className="text-gray-500 font-medium">
              Duration: {selectedCourse.duration}
            </p>
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

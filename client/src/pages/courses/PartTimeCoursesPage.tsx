"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { partTimeCourses } from "../../data/partTimeCourses";
import CourseCard from "../../components/CourseCard";
import CourseModal from "../../components/CourseModal";
import { sliderImages } from "../../data/sliderImages";

// Modern Apply Modal with dropdown
const ApplyModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  courses: typeof partTimeCourses;
  defaultCourse?: string;
}> = ({ isOpen, onClose, courses, defaultCourse }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedCourse, setSelectedCourse] = useState<string>(defaultCourse || "");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultCourse) setSelectedCourse(defaultCourse);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [defaultCourse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) {
      alert("Please select a course.");
      return;
    }
    console.log("Application submitted for:", selectedCourse, formData);
    onClose();
    alert(`Application submitted for ${selectedCourse}!`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Apply Online</h2>

        {/* Modern dropdown */}
        <div className="mb-4 relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full border rounded px-4 py-2 text-left flex justify-between items-center hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {selectedCourse || "Select a course"}
            <svg
              className={`w-5 h-5 ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-y-auto">
              {courses.map((course) => (
                <li
                  key={course.title}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                    selectedCourse === course.title ? "bg-blue-200 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setSelectedCourse(course.title);
                    setDropdownOpen(false);
                  }}
                >
                  {course.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

const PartTimeCoursesPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyCourse, setApplyCourse] = useState<string | undefined>(undefined);

  const openApplyModal = (courseTitle?: string) => {
    setApplyCourse(courseTitle);
    setIsApplyOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

     {/* Hero Slider */}
        <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop
            className="h-full"
        >
            {sliderImages.map((slide, idx) => (
            <SwiperSlide key={idx}>
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </SwiperSlide>
            ))}
        </Swiper>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10 bg-black/30">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Part-Time Courses</h1>
            <p className="mt-4 text-sm sm:text-lg max-w-2xl">
            Upgrade your skills with our part-time courses.
            </p>
            <button
            onClick={() => openApplyModal()}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
            >
            Apply Online
            </button>
        </div>
        </section>
      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">
          Available Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partTimeCourses.map((course, idx) => (
            <div key={idx} className="relative group">
              <CourseCard {...course} onClick={() => setSelectedCourse(course)} />
            </div>
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

      {/* Apply Online Modal */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        courses={partTimeCourses}
        defaultCourse={applyCourse}
      />

      <Footer />
    </div>
  );
};

export default PartTimeCoursesPage;

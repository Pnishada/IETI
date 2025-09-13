"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface ApplyFormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  transcript?: File | null;
}

const courses = [
  "Mechanical Engineering",
  "Electrical & Electronics",
  "Civil Engineering",
  "Automotive Engineering",
  "Computer Graphic Design",
  "ICT Technician",
];

export default function ApplyOnline() {
  const [formData, setFormData] = useState<ApplyFormData>({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    transcript: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Send formData to backend API
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
      transcript: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-green-600 py-16 text-white text-center">
        <h1 className="text-4xl lg:text-5xl font-bold">Apply Online</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Fill out the form below to apply for your preferred course at IETI.
        </p>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          {submitted && (
            <div className="bg-green-100 text-green-800 px-6 py-4 mb-6 rounded-lg shadow">
              Your application has been submitted successfully!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Select Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              >
                <option value="">-- Select a course --</option>
                {courses.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Transcript / Certificates (optional)
              </label>
              <input
                type="file"
                name="transcript"
                accept=".pdf,.jpg,.png"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Any additional information..."
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg font-medium"
            >
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

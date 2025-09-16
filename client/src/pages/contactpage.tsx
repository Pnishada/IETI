"use client";

import React, { useState, FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

// Example hero image (replace with your actual image)
import heroImg from "../components/assets/training_center_building.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />

      {/* Hero Section with full-width image */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <img
          src={heroImg}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Contact IETI
            </h1>
            <p className="text-lg md:text-xl">
              Reach out for admissions, enquiries, or guidance. We are here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            IETI is here to assist you with questions regarding admissions, courses, or campus facilities. Connect with us using the information below or send us a message directly.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-gray-800 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">IETI Main Campus, 123 Industrial Avenue, Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gray-800 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@ieti.lk</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gray-800 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+94 11 234 5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border-gray-300 focus:border-green-700 focus:ring-green-200"
              required
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border-gray-300 focus:border-green-700 focus:ring-green-200"
              required
            />
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border-gray-300 focus:border-green-700 focus:ring-green-200"
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border-gray-300 focus:border-green-700 focus:ring-green-200"
              rows={6}
              required
            />
            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-600 text-white text-lg font-semibold"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px]">
        <iframe
          className="w-full h-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7724825277223!2d79.8875065!3d6.7975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2453cbe461e05%3A0x69474ed64ee01f4!2sIndustrial%20Engineering%20Training%20Institute!5e0!3m2!1sen!2slk!4v1758001929954!5m2!1sen!2slk"
          allowFullScreen
          title="IETI Location"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}

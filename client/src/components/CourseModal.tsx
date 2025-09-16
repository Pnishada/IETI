"use client";

import React from "react";
import Modal from "./ui/Modal";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  duration: string;
  details: string;
  syllabus: string[];
}

const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose, title, image, duration, details, syllabus }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4 max-h-[80vh] overflow-y-auto">
        <img src={image} alt={title} className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500 font-medium">Duration: {duration}</p>
        <p className="text-gray-700">{details}</p>
        <div>
          <h3 className="font-semibold mb-2">Syllabus:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {syllabus.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default CourseModal;

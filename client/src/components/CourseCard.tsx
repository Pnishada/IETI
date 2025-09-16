"use client";

import React from "react";
import Card_C from "./ui/Card_C";

interface CourseCardProps {
  title: string;
  description: string;
  image: string; // 🆕 add image
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, onClick }) => {
  return (
    <Card_C className="group flex flex-col h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
      {/* Top Image */}
      <div
        className="relative w-full h-40 overflow-hidden"
        onClick={onClick}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-70 transition"></div>
        <h3 className="absolute bottom-2 left-3 text-white font-bold text-lg drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </Card_C>
  );
};

export default CourseCard;

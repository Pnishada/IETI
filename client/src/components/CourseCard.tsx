"use client";

import React from "react";
import Card_C from "./ui/Card_C";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon: Icon, onClick }) => {
  return (
    <Card_C className="flex flex-col h-full cursor-pointer">
      <div className="p-4 flex flex-col" onClick={onClick}>
        <Icon className="w-6 h-6 text-[#8B1E1E] mb-2" />
        <h3 className="font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <p className="mt-1 text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </Card_C>
  );
};

export default CourseCard;

import { BookOpen } from "lucide-react";
import slider1 from "../components/assets/Automotive_Eng_img.jpg";
import slider2 from "../components/assets/Electrical_Eng_img.jpg";
import slider3 from "../components/assets/Mechanical_Eng_img.jpg";

export const fullTimeCourses = [
  {
    title: "Electronics Craftsman (NVQ 4)",
    description: "Fundamental principles of industrial engineering.",
    details: "This course covers essential principles of industrial engineering...",
    icon: BookOpen,
    image: slider1,
    duration: "03 Year",
    syllabus: ["Introduction to Industrial Engineering", "Workflow Optimization", "Basic Industrial Operations"],
  },
  {
    title: "Electrician (Special) (NVQ 4)",
    description: "Planning, scheduling, and controlling production systems.",
    details: "Learn how to plan production, manage resources...",
    icon: BookOpen,
    image: slider2,
    duration: "03 Year",
    syllabus: ["Production Scheduling", "Resource Allocation", "Inventory Control", "Quality Management"],
  },
  {
    title: "Machinist (Special) (NVQ 4)",
    description: "Methods to improve efficiency and workplace ergonomics.",
    details: "Focus on time study, motion study, and ergonomic principles...",
    icon: BookOpen,
    image: slider3,
    duration: "03 Year",
    syllabus: ["Time Study", "Motion Study", "Workplace Ergonomics", "Efficiency Improvements"],
  },
];

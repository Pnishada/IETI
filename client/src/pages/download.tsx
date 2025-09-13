"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// TypeScript type for downloadable documents
type DownloadDocument = {
  title: string;
  category: string;
  link: string;
  fileSize?: string; // optional
};

// Sample downloads data
const downloads: DownloadDocument[] = [
  { title: "Semester 1 Registration Form", category: "Forms", link: "/downloads/registration-form.pdf", fileSize: "120KB" },
  { title: "Undergraduate Syllabus 2025", category: "Syllabus", link: "/downloads/ug-syllabus.pdf", fileSize: "2MB" },
  { title: "Academic Calendar 2025", category: "Calendar", link: "/downloads/calendar-2025.pdf", fileSize: "300KB" },
  { title: "Student Handbook", category: "Policies", link: "/downloads/student-handbook.pdf", fileSize: "1.5MB" },
];

const Downloads: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-4 text-center text-slate-900">
            Downloads
          </h1>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Access important documents, forms, syllabi, and other resources for your academic and administrative needs.
          </p>

          {/* Downloads Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((doc, idx) => (
              <Card key={idx} className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden flex flex-col justify-between">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-slate-900">{doc.title}</h2>
                    <p className="text-sm text-slate-500 mb-2">{doc.category}</p>
                    {doc.fileSize && <p className="text-xs text-slate-400 mb-4">File size: {doc.fileSize}</p>}
                  </div>

                  <a href={doc.link} target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                    <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Download
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Downloads;

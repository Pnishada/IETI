import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// TypeScript type for a downloadable document
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
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-slate-900">Downloads</h1>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Access important documents, forms, syllabi, and other resources for your academic and administrative needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((doc: DownloadDocument, index: number) => (
              <Card key={index} className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-slate-900">{doc.title}</h2>
                    <p className="text-sm text-slate-500 mb-2">{doc.category}</p>
                    {doc.fileSize && <p className="text-xs text-slate-400 mb-4">File size: {doc.fileSize}</p>}
                  </div>

                  {/* Download Button wrapped in <a> */}
                  <a href={doc.link} target="_blank" rel="noopener noreferrer" className="w-full">
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
      <Footer />
    </div>
  );
};

export default Downloads;

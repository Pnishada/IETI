"use client";

import { useRoute } from "wouter";
import { NewsArticle } from "@/types/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "NAITA Mobile Application",
    content: "Building a Skilled Nation with NAITA...",
    date: "2025-09-10",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Graduation Ceremony 2025",
    content: "Celebrating the achievements of our graduates...",
    date: "2025-08-20",
    category: "Events",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "New Training Program Launch",
    content: "Introducing advanced training programs...",
    date: "2025-09-05",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

const NewsDetails: React.FC = () => {
  const [match, params] = useRoute("/news/:id");

  if (!match) return <div>News not found</div>;

  const newsId = parseInt(params.id);
  const news = newsData.find((n) => n.id === newsId);

  if (!news) return <div>News not found</div>;

  return (
    <>
      {/* Header */}
      <Header />

      <main className="bg-gray-50 min-h-screen py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Image */}
          {news.image && (
            <div className="overflow-hidden rounded-3xl shadow-lg mb-8">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* News Content */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              {news.title}
            </h1>
            <div className="text-sm text-gray-500 mb-6">
              {news.date} • {news.category}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{news.content}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default NewsDetails;

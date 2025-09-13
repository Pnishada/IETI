"use client";

import { NewsArticle } from "@/types/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  news: NewsArticle;
}

const NewsCardPage: React.FC<Props> = ({ news }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
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

          {/* News Details */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              {news.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6">{news.date}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{news.content}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default NewsCardPage;

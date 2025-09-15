"use client";

import { useRoute } from "wouter";
import { NewsArticle } from "@/types/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

const NewsDetails: React.FC = () => {
  const [match, params] = useRoute("/news/:id");
  const [news, setNews] = useState<NewsArticle | null>(null); // Store single news item
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    if (!match) return;

    const newsId = parseInt(params.id);
    axios
      .get(`http://localhost:8000/api/news/${newsId}/`) // API URL to get specific news
      .then((response) => {
        setNews(response.data); // Set news data from backend
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  }, [match, params.id]);

  // Show loading message while the request is in progress
  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-700">Loading news...</p>
      </div>
    );
  }

  // If there is an error fetching data
  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  // If no matching news article is found
  if (!news) {
    return <div>News not found</div>;
  }

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

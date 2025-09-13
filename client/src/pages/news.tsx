"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
  description: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "IETI Computer Lab Inauguration",
    date: "Wednesday, 10 September 2025",
    image: "src/components/assets/ieti-news1.jpg",
    link: "/news/1",
    description:
      "State-of-the-art computer lab inaugurated at IETI to enhance ICT learning and software training.",
  },
  {
    id: 2,
    title: "Industrial Training Program 2025",
    date: "Monday, 08 September 2025",
    image: "src/components/assets/ieti-news2.jpg",
    link: "/news/2",
    description:
      "IETI students gained hands-on experience in local industries through the annual training program.",
  },
  {
    id: 3,
    title: "New Welding Workshop Opened",
    date: "Friday, 05 September 2025",
    image: "src/components/assets/ieti-news3.jpg",
    link: "/news/3",
    description:
      "A modern welding workshop is now available for IETI trainees to learn industry-standard techniques.",
  },
  {
    id: 4,
    title: "IETI Robotics Competition 2025",
    date: "Monday, 01 September 2025",
    image: "src/components/assets/ieti-news4.jpg",
    link: "/news/4",
    description:
      "Students showcased innovative robotics solutions at IETI’s annual Robotics Competition.",
  },
];

const NewsPage: React.FC = () => {
  const featured = newsData[0];
  const others = newsData.slice(1);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-white text-black py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Industrial Engineering Training Institute
        </h1>
        <p className="mt-3 text-xl text-gray-600">Orugodawatta</p>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-500">
          Stay updated with the latest news, events, and achievements at IETI.
        </p>
      </section>

      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Featured News */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
              <p className="text-sm mb-3">{featured.date}</p>
              <a
                href={featured.link}
                className="inline-block bg-green-600 px-5 py-2 rounded-full hover:bg-green-800 transition"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            {others.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-24 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold hover:text-green-600">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All News Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-black">Latest News</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 hover:text-green-600">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-green-600 hover:bg-green-800 text-white px-6 py-3 rounded-full shadow transition">
              Load More
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default NewsPage;

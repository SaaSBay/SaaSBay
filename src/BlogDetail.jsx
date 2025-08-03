import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

export default function BlogDetail() {
  const location = useLocation();
  const article = location.state?.article;

  


  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-primary underline flex items-center gap-2">
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Banner Image */}
      <div className="w-full relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover object-center rounded-b-3xl shadow-lg"
          style={{ maxHeight: "420px" }}
        />
        {/* Optional overlay for flare */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-b-3xl pointer-events-none"></div>
      </div>

      {/* Blog Content */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl px-6 md:px-12 py-10 -mt-16 mb-10 z-10 relative">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 text-center drop-shadow-sm">
          {article.title}
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <img src={article.avatar} alt={article.author} className="w-10 h-10 rounded-full shadow" />
          <span className="font-semibold text-base text-primary">{article.author}</span>
          <FaCalendarAlt className="text-gray-400" />
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-accent text-primary px-4 py-1 rounded-full font-semibold text-xs shadow">
            {article.category}
          </span>
        </div>
        {/* Excerpt - left aligned, slightly larger */}
        <p className="text-secondary text-lg mb-8 text-left md:text-xl font-medium">
          {article.excerpt}
        </p>
        {/* Main Content */}
        <article
          className="
            prose prose-lg
            prose-headings:font-bold
            prose-headings:text-primary
            prose-p:text-left
            prose-p:mb-5
            prose:text-left
            prose-ul:pl-6
            prose-li:marker:text-primary
            prose-img:rounded-lg
            prose-img:mx-auto
            text-gray-800
            max-w-none
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="flex justify-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary font-semibold hover:underline gap-2 transition"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allBooks = [
    {
      id: 1,
      title: "The Knight in the Panther's Skin",
      category: "Classic",
      price: 25,
    },
    { id: 2, title: "Is a Man a Human?!", category: "Classic", price: 18 },
    {
      id: 3,
      title: "One Hundred Years of Solitude",
      category: "Novel",
      price: 30,
    },
    { id: 4, title: "The Little Prince", category: "Fairy Tale", price: 15 },
    { id: 5, title: "A Brief History of Time", category: "Science", price: 22 },
  ];

  const categories = ["All", "Classic", "Novel", "Fairy Tale", "Science"];

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-emerald-100">
        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white mb-4">
          ⚡ Client Component
        </span>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          Full Book Catalog
        </h1>
        <p className="mt-2 text-emerald-100 text-sm md:text-base">
          Search for books by title or filter by category.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-80">
          <input
            type="text"
            placeholder="🔍 Search books by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                  {book.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-indigo-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-indigo-600 font-black text-lg mt-2">
                  {book.price} $
                </p>
              </div>

              <button
                onClick={() => alert(`Selected: ${book.title}`)}
                className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md shadow-indigo-100 transition-all"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-sm font-bold text-slate-700">No books found</p>
          </div>
        )}
      </div>
    </div>
  );
}

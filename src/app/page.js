export default function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Knight in the Panther's Skin",
      author: "Shota Rustaveli",
      price: 25,
      badge: "Classic",
    },
    {
      id: 2,
      title: "Is a Man a Human?!",
      author: "Ilia Chavchavadze",
      price: 18,
      badge: "Classic",
    },
    {
      id: 3,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      price: 30,
      badge: "Novel",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-indigo-100">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white mb-4">
            ✨ Server Component
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Discover Your Next Favorite Book
          </h1>
          <p className="mt-3 text-indigo-100 text-base leading-relaxed">
            Explore recommended bestsellers and dive into the world of
            literature.
          </p>
        </div>
      </div>

      {/* Featured Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          🔥 Featured Books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                    {book.badge}
                  </span>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    In Stock
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Author: {book.author}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xl font-black text-slate-900">
                  {book.price} $
                </span>
                <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

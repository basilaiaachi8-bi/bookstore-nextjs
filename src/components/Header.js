import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black tracking-tight flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
            📚
          </div>
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            BookStore
          </span>
        </Link>
        <nav className="flex items-center space-x-2 bg-slate-100/80 p-1.5 rounded-2xl">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white transition-all"
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white transition-all"
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}

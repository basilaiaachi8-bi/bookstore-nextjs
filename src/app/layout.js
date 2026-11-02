import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookStore App",
  description: "Next.js First Week Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka" className="light">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}

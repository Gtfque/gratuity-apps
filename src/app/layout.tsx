import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
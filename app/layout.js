import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "Khandoker Tahmid Sami",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-[#121212] text-white">
        <Navbar />
        {children}
        <Toaster position="bottom-center" offset={215} richColors closeButton />
      </body>
    </html>
  );
}

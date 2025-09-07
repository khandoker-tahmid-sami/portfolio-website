import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Khandoker Tahmid Sami",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#121212] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

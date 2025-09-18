"use client";
import { Menu, X } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Navlink from "./Navlink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const brandA = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="container mx-auto py-4 fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 bp320: px-2">
      <div className="flex items-center justify-between bp320: rounded-full ">
        <Link
          href="/"
          className={`text-xl md:text-3xl font-extrabold tracking-tight
             hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.35)] ${brandA.className}`}
        >
          <span className="text-white/90">Khandoker</span>{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Tahmid
          </span>{" "}
          <span className="text-white/90">Sami</span>
        </Link>
        {/* desktop */}
        <div className="hidden md:block md:w-auto ">
          <ul className="flex">
            {navLinks.map((navlink) => (
              <li key={navlink.title}>
                <Navlink title={navlink.title} href={navlink.path} />
              </li>
            ))}
          </ul>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="space-x-2 md:hidden cursor-pointer hover:text-zinc-400"
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </div>
      {showMobileMenu && (
        <MobileNavbar
          navlinks={navLinks}
          onNavigate={() => setShowMobileMenu(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

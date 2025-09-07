"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Navlink from "./Navlink";

const navLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="container mx-auto py-4 fixed top-0 left-0 right-0 z-50 bg-[#121212]/90">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-lg font-semibold md:text-3xl">
          Khandoker Tahmid Sami
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
      {showMobileMenu && <MobileNavbar navlinks={navLinks} />}
    </nav>
  );
};

export default Navbar;

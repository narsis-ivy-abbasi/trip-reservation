"use client";
import { Plane } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full text-white py-4 z-50 font-bold ${
        isScrolled ? "shadow-md backdrop-blur " : ""
      }`}
    >
      <nav
        className={`flex justify-between items-center px-4 mx-auto container   ${
          isScrolled ? "text-blue-800 " : "text-white"
        }`}
      >
        <div className="space-x-4 ">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
        <Link href="/">
          <div className="flex gap-2">
            <Plane />
            <h1>Traveling</h1>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

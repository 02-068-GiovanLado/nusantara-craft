"use client";
import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleSmoothScroll(e, "#hero")} 
          className="text-xl font-bold tracking-tight text-primary cursor-pointer"
        >
          RAKATA.
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          <a href="#collection" onClick={(e) => handleSmoothScroll(e, "#collection")} className="hover:text-primary transition-colors cursor-pointer">Shop</a>
          <a href="#features" onClick={(e) => handleSmoothScroll(e, "#features")} className="hover:text-primary transition-colors cursor-pointer">About</a>
          <a href="#b2b" onClick={(e) => handleSmoothScroll(e, "#b2b")} className="hover:text-primary transition-colors cursor-pointer">Corporate Gifts</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingBag className="w-5 h-5 text-primary" />
          </button>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
}
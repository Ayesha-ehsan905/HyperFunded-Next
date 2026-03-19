 "use client";

import Image from "next/image";
import logo from "../../../../../public/images/Logo.png";
import { useEffect, useState } from "react";
import { useTheme } from "../../../../lib/theme-context";

type NavLink = {
  label: string;
  targetId?: string;
};

const navLinks: NavLink[] = [
  { label: "How It Works", targetId: "how-it-works" },
  { label: "Pricing", targetId: "pricing" },
  { label: "Testimonials", targetId: "testimonials" },
  { label: "Leaderboard", targetId: "leaderboard" },
  { label: "FAQ's", targetId: "faqs" },
  { label: "Contact Us", targetId: "contact-us" },
];

const scrollToSection = (targetId?: string) => {
  if (!targetId || typeof document === "undefined") return;
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Navbar = () => {
  const { toggle, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-center border-t-[1.5px] border-b-[1.5px] border-border px-10 md:px-16 lg:px-20 py-4 md:py-5 transition-colors ${
        isScrolled ? "bg-page/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="inline-flex items-center gap-2 shrink-0">
        <Image src={logo} alt="Logo" className="h-10 md:h-12" />
      </div>

      {/* Nav Links */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-1">
        {navLinks.map((link) => (
          <button
            key={link.label}
            type="button"
            onClick={() => scrollToSection(link.targetId)}
            className="inline-flex items-center justify-center cursor-pointer"
          >
            <span
              className="hf-label text-muted whitespace-nowrap px-3 sm:px-4 py-2 sm:py-3 
          hover:bg-bg-orange hover:text-orange transition-colors rounded-full text-sm sm:text-base"
            >
              {link.label}
            </span>
          </button>
        ))}
      </div>

      {/* Right side actions */}
      <div className="inline-flex items-center gap-4 sm:gap-6 md:gap-8 shrink-0">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggle}
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
          className="flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center p-2 bg-surface rounded-3xl border border-solid border-border"
        >
          <Image
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            alt={theme === "dark" ? "Moon" : "Sun"}
            src={theme === "dark" ? "/images/moon.png" : "/images/sun.png"}
          />
        </button>

        {/* Divider */}
        <span className="w-0.5 h-8 sm:h-[38px] bg-disabled" />

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-4 bg-brand hover:bg-brand-hover rounded-full transition-colors">
          <span className="font-semibold text-white text-sm sm:text-base leading-5">
            Start Your Challenge
          </span>
          <Image
            width={24}
            height={24}
            className="w-6 h-6 sm:w-7 sm:h-7"
            alt="Icon wrap"
            src="/images/arrow.png"
          />
        </button>
      </div>
    </nav>
  );
};


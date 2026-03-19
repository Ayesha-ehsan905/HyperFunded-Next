 "use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useTheme } from "../../../../lib/theme-context";
import Image from "next/image";
import logo from "../../../../../public/images/Logo.png";
import { CONTACT_SECTION_CONTENT } from "../../utils/constants";

export const FAQSection = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      // Fallback: show immediately on mount
      setTimeout(() => setHasEntered(true), 0);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-12 px-60 py-20 w-full"
      id="contact-us"
    >
      {/* Inner card with gradient background */}
      <div className="relative flex flex-col items-center justify-center px-8 py-20 rounded-2xl overflow-hidden hf-gradient-hero w-full">
        {/* Background decorative image */}
        <Image
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[918px] h-[556px] pointer-events-none"
          width={918}
          height={556}
          alt="Bg"
          src={theme === "dark" ? "/images/DarkBG.png" : "/images/LightBG.png"}
          suppressHydrationWarning
        />

        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center gap-12">
          {/* Header section */}
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Brand logo + name */}
            <div
              className={`flex items-center gap-2 transform transition-all duration-1400 ease-out ${
                hasEntered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              <Image src={logo} alt="Logo" className="h-10 md:h-12" />
            </div>

            {/* Headline text */}
            <div
              className={`flex flex-col items-center gap-2 transform transition-all duration-1400 ease-out ${
                hasEntered
                  ? "opacity-100 translate-y-0 delay-200"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              <h2 className="hf-display-lg text-fg text-center w-full">
                {CONTACT_SECTION_CONTENT.titleLines[0]}
              </h2>
              <h2 className="hf-display-lg text-fg text-center whitespace-nowrap">
                {CONTACT_SECTION_CONTENT.titleLines[1]}
              </h2>
            </div>

            {/* Description */}
            <p
              className={`max-w-[712px] hf-body-lg text-muted text-center transform transition-all duration-1400 ease-out ${
                hasEntered
                  ? "opacity-100 translate-y-0 delay-400"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              {CONTACT_SECTION_CONTENT.description}
            </p>
          </div>

          {/* Email input with Send button */}
          <div
            className={`relative flex items-center w-full max-w-[434px] transform transition-all duration-1400 ease-out ${
              hasEntered
                ? "opacity-100 translate-y-0 delay-700"
                : "opacity-0 -translate-y-8"
            }`}
          >
            {/* Input field */}
            <div className="flex-1 bg-surace-card rounded-[47px] overflow-hidden border-2 border-solid border-border hf-shadow-soft" >
              <Input
                className="bg-transparent border-none outline-none px-6 py-[18px] h-auto hf-body-md text-muted placeholder:text-muted focus-visible:ring-0 focus-visible:ring-offset-0 pr-[130px]"
                placeholder={CONTACT_SECTION_CONTENT.inputPlaceholder}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Send button overlaid on the right side of the input */}
            <Button className="absolute right-[4px] bg-brand hover:bg-brand-hover text-white font-semibold text-base leading-5 rounded-[999px] px-8 py-3 h-auto border-none">
              {CONTACT_SECTION_CONTENT.sendButtonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

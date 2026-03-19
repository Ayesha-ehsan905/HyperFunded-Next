"use client";

import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useTheme } from "../../../../lib/theme-context";
import Image from "next/image";
import logo from "../../../../../public/images/Logo.png";

export const FAQSection = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-60 py-20 w-full ">
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
            <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" className="h-10 md:h-12" />

            </div>

            {/* Headline text */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="hf-display-lg text-fg text-center w-full">
                Ready to Trade Our Capital?
              </h2>
              <h2 className="hf-display-lg text-fg text-center whitespace-nowrap">
                Start your funded trading journey today.
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-[712px] hf-body-lg text-muted text-center">
              Take the challenge and prove your trading skills. Meet the targets
              while managing risk responsibly. Unlock a funded account and start
              trading with real capital.
            </p>
          </div>

          {/* Email input with Send button */}
          <div className="relative flex items-center w-full max-w-[434px]">
            {/* Input field */}
            <div className="flex-1 bg-surface rounded-[47px] overflow-hidden border-2 border-solid border-border hf-shadow-soft">
              <Input
                className="bg-transparent border-none outline-none px-6 py-[18px] h-auto hf-body-md text-muted placeholder:text-muted focus-visible:ring-0 focus-visible:ring-offset-0 pr-[130px]"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Send button overlaid on the right side of the input */}
            <Button className="absolute right-[4px] bg-brand hover:bg-brand-hover text-white font-semibold text-base leading-5 rounded-[999px] px-8 py-3 h-auto border-none">
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

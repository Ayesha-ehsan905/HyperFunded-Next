 "use client";

import { Separator } from "../../../../components/ui/separator";
import Image from "next/image";
import logo from "../../../../../public/images/Logo.png";
import facebook from "../../../../../public/images/facebook.svg";
import twitter from "../../../../../public/images/twitter.svg";
import instagram from "../../../../../public/images/instagram.svg";
import linkedin from "../../../../../public/images/linkedin.svg";

type FooterLink = {
  label: string;
  targetId?: string;
};

// Navigation link columns data
const footerColumns: {
  title: string;
  links: FooterLink[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "How It Works", targetId: "how-it-works" },
      { label: "Pricing", targetId: "pricing" },
      { label: "Leaderboard", targetId: "leaderboard" },
    ],
  },
  {
    title: "Support & Programs",
    links: [
      { label: "FAQ's", targetId: "faqs" },
      { label: "Contact Us", targetId: "contact-us" },
      // Map Help Center to FAQs for now
      { label: "Help Center",  },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
      { label: "Cookie Policy" },
    ],
  },
];

const scrollToSection = (targetId?: string) => {
  if (!targetId || typeof document === "undefined") return;
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const FooterSection = () => {
  return (
    <footer className="flex flex-col w-full items-start gap-6 pt-20 pb-6 px-16 xl:px-60 bg-page">
      {/* Main footer content row */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-[120px] self-stretch w-full">
        {/* Brand / description / social column */}
        <div className="flex flex-col max-w-[399px] items-start gap-6 flex-1">
          {/* Logo + description */}
          <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full">
            {/* Logo row */}
            <div className="flex px-0 py-0 self-stretch w-full items-center gap-2">
              <Image alt="Vector" src={logo} />
            </div>

            {/* Description */}
            <div className="flex flex-col items-start self-stretch w-full">
              <p className="self-stretch font-normal text-muted text-[18px] tracking-[-0.01em] leading-[28px]">
                Funding the next generation of crypto traders. Prove your skill
                through performance-based challenges. Trade real capital and
                keep the majority of profits.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <Separator className="bg-stroke-divider h-px w-full" />

          {/* Social icons */}
          <div className="flex items-center gap-2 self-stretch w-full">
            <Image src={facebook} alt="Facebook" />
            <Image src={twitter} alt="Twitter" />
            <Image src={instagram} alt="Instagram" />
            <Image src={linkedin} alt="Linkedin" />
          </div>
        </div>

        {/* Navigation columns */}
        <div className="flex items-start gap-8 flex-1 self-stretch">
          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-start gap-4 flex-1 self-stretch"
            >
              {/* Column heading */}
              <div className="flex items-center justify-center gap-2.5 self-stretch w-full">
                <span className="flex-1 font-semibold text-fg text-[22px] tracking-[-0.01em] leading-[28px]">
                  {column.title}
                </span>
              </div>

              {/* Column links */}
              {column.links.map((link) => (
                <div
                  key={link.label}
                  onClick={() => scrollToSection(link.targetId)}
                  className="flex items-center justify-center gap-2.5 self-stretch w-full cursor-pointer"
                >
                  <span className="flex-1 font-medium text-muted text-[16px] tracking-[-0.01em] leading-[24px] hover:text-fg transition-colors">
                    {link.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="flex flex-col items-start pt-4 pb-0 self-stretch w-full border-t border-[#2a3050]">
        <p className="self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-[#f0f0f0] text-[length:var(--body-regular-font-size)] text-center tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
          © 2026 Hyperfunded. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

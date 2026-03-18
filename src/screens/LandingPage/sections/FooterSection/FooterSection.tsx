import { Separator } from "../../../../components/ui/separator";

// Navigation link columns data
const footerColumns = [
  {
    title: "Product",
    links: ["How It Works", "Pricing", "Leaderboard"],
  },
  {
    title: "Support & Programs",
    links: ["FAQ's", "Contact Us", "Help Center"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export const FooterSection = () => {
  return (
    <footer className="flex flex-col w-full items-start gap-6 pt-20 pb-6 px-16 xl:px-60 bg-[#0d0f17]">
      {/* Main footer content row */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-[120px] self-stretch w-full">
        {/* Brand / description / social column */}
        <div className="flex flex-col max-w-[399px] items-start gap-6 flex-1">
          {/* Logo + description */}
          <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full">
            {/* Logo row */}
            <div className="flex px-0 py-3 self-stretch w-full items-center gap-2">
              <img
                className="w-[25.23px] h-[30px]"
                alt="Vector"
                src="/vector-1.svg"
              />
              <span className="flex-1 font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#ff5a44] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                Hyperfunded
              </span>
            </div>

            {/* Description */}
            <div className="flex flex-col items-start self-stretch w-full">
              <p className="self-stretch font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                Funding the next generation of crypto traders. Prove your skill
                through performance-based challenges. Trade real capital and
                keep the majority of profits.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <Separator className="bg-[#2a3050] h-px w-full" />

          {/* Social icons */}
          <img
            className="self-stretch w-full"
            alt="Social stack"
            src="/social-stack.svg"
          />
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
                <span className="flex-1 font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#f0f0f0] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                  {column.title}
                </span>
              </div>

              {/* Column links */}
              {column.links.map((link) => (
                <div
                  key={link}
                  className="flex items-center justify-center gap-2.5 self-stretch w-full cursor-pointer"
                >
                  <span className="flex-1 font-body-medium font-[number:var(--body-medium-font-weight)] text-[#8a8fa8] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] hover:text-[#f0f0f0] transition-colors">
                    {link}
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

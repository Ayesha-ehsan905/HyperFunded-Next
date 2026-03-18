"use client";

import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

// FAQ data
const faqItems = [
  {
    id: "item-1",
    question: "What is funded trading ?",
    answer:
      "A funded trading challenge is an evaluation process where you prove your trading skills by meeting specific profit targets while following risk management rules. Once you pass, you get access to a funded account with real capital and keep 80-90% of the profits you generate.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "What are the trading rules ?",
    answer: null,
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "How and when do I get paid ?",
    answer: null,
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "Can I trade any crypto pair ?",
    answer: null,
    defaultOpen: false,
  },
  {
    id: "item-5",
    question: "What happened if I fail ?",
    answer: null,
    defaultOpen: false,
  },
];

export const PerformanceAndAccountSummarySection = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const handleToggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-16 py-[120px] self-stretch w-full bg-[#0d0f17]">
      <div className="flex items-start gap-16 self-stretch w-full">
        {/* Left column */}
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-[19px] self-stretch w-full">
            <h1 className="self-stretch font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#f0f0f0] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              We&apos;re Here to Answer <br />
              All Your Questions
            </h1>

            <p className="font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] self-stretch [font-style:var(--body-large-regular-font-style)]">
              Find clear answers to the most common questions about Hyperfunded.
              Learn how our challenges, rules, and payouts work. Everything you
              need to start trading with confidence.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <p className="font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#f0f0f0] text-[length:var(--body-semobold20-font-size)] tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] self-stretch [font-style:var(--body-semobold20-font-style)]">
              Still have questions?
            </p>

            <Separator className="bg-[#2a2d3e] h-px w-full" />

            <Button className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#ff5a44] rounded-[999px] hover:bg-[#e04e3a] h-auto">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-5">
                Contact Support
              </span>
              <img className="w-10" alt="Icon wrap" src="/icon-wrap.svg" />
            </Button>
          </div>
        </div>

        {/* Right column - FAQ accordion */}
        <div className="flex flex-col items-center justify-center gap-6 flex-1">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="relative self-stretch w-full bg-[#181c2e] rounded-xl overflow-hidden"
              >
                {/* Red bottom border indicator for open item */}
                {isOpen && (
                  <div className="absolute w-full left-0 bottom-0 h-0.5 bg-[#ff5a44] z-10" />
                )}

                <button
                  className="flex items-center justify-center gap-4 p-8 w-full text-left"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center flex-1 font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#f0f0f0] text-[length:var(--body-semobold20-font-size)] tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <img
                      className="w-6 h-6 flex-shrink-0"
                      alt="Minus"
                      src="/minus.svg"
                    />
                  ) : (
                    <img
                      className="w-6 h-6 flex-shrink-0"
                      alt="Add"
                      src="/add.svg"
                    />
                  )}
                </button>

                {/* Expanded content */}
                {isOpen && item.answer && (
                  <div className="px-8 pb-8 font-body-regular font-[number:var(--body-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

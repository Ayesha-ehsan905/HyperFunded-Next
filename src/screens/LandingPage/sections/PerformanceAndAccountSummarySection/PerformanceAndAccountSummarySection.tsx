"use client";

import { useState } from "react";
import { Separator } from "../../../../components/ui/separator";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

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
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing self-stretch w-full">
      <div className="flex items-start gap-16 self-stretch w-full">
        {/* Left column */}
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-[19px] self-stretch w-full">
            <h1 className="self-stretch font-bold text-fg text-[36px] tracking-[-0.01em] leading-[44px]">
              We&apos;re Here to Answer <br />
              All Your Questions
            </h1>

            <p className="self-stretch text-muted font-normal text-[18px]  leading-[28px]">
              Find clear answers to the most common questions about Hyperfunded.
              Learn how our challenges, rules, and payouts work. Everything you
              need to start trading with confidence.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <p className="self-stretch font-semibold text-fg text-[20px] tracking-[-0.01em] leading-[28px]">
              Still have questions?
            </p>

            <Separator className="bg-[#2a2d3e] h-px w-full" />
            <button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand hover:bg-brand-hover rounded-[999px] transition-colors">
              <span className=" font-semibold text-white text-base tracking-[0] leading-5">
                Start Your Challenge
              </span>
              <Image
                width={40}
                height={39}
                className=""
                alt="Icon wrap"
                src="/images/arrow.png"
              />
            </button>
          </div>
        </div>

        {/* Right column - FAQ accordion */}
        <div className="flex flex-col items-center justify-center gap-6 flex-1">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="relative self-stretch w-full bg-surface-modal rounded-xl overflow-hidden"
              >
                {/* Red bottom border indicator for open item */}
                {isOpen && (
                  <div className="absolute w-full left-0 bottom-0 h-0.5 bg-orange z-10" />
                )}

                <button
                  className="flex items-center justify-center gap-4 p-8 w-full text-left"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center flex-1 font-semibold text-fg text-[20px] tracking-[-0.01em] leading-[28px]">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-fg cursor-pointer" />
                  ) : (
                    <Plus className="w-5 h-5 text-fg cursor-pointer" />
                  )}
                </button>

                {/* Expanded content */}
                {isOpen && item.answer && (
                  <div className="px-8 pb-8 font-normal text-muted text-[18px] tracking-[-0.01em] leading-[28px]">
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

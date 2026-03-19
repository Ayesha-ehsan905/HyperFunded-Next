"use client";

import { useState } from "react";
import { Separator } from "../../../../components/ui/separator";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS, FAQ_SECTION_CONTENT } from "../../utils/constants";

export const PerformanceAndAccountSummarySection = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const handleToggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing self-stretch w-full" id="faqs">
      <div className="flex items-start gap-16 self-stretch w-full">
        {/* Left column */}
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-[19px] self-stretch w-full">
            <h1 className="self-stretch font-bold text-fg text-[36px] tracking-[-0.01em] leading-[44px]">
              {FAQ_SECTION_CONTENT.title} <br />
              {FAQ_SECTION_CONTENT.titleSecondLine}
            </h1>

            <p className="self-stretch text-muted font-normal text-[18px]  leading-[28px]">
              {FAQ_SECTION_CONTENT.description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <p className="self-stretch font-semibold text-fg text-[20px] tracking-[-0.01em] leading-[28px]">
              {FAQ_SECTION_CONTENT.stillHaveQuestions}
            </p>

            <Separator className="bg-[#2a2d3e] h-px w-full" />
            <button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand hover:bg-brand-hover rounded-[999px] transition-colors">
              <span className=" font-semibold text-white text-base tracking-[0] leading-5">
                {FAQ_SECTION_CONTENT.ctaLabel}
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
          {FAQ_ITEMS.map((item) => {
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

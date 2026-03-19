"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { MoveLeft, MoveRight } from "lucide-react";

// Testimonial data
type Testimonial = {
  name: string;
  payout: string;
  avatarSrc: string;
  flagSrc: string;
  flagAlt: string;
  quote: string;
  accountSize: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Floyd Miles",
    payout: "$8,450",
    avatarSrc: "/images/user1.png",
    flagSrc: "/images/flag1.png",
    flagAlt: "Ellipse",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Darrell Steward",
    payout: "$4,900",
    avatarSrc: "/images/user2.png",
    flagSrc: "/images/flag2.png",
    flagAlt: "Ellipse",
    quote:
      "Clean platform, clear rules, fast payouts. Everything a funded trader needs. Already scaling to $100K account.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="flex-1 bg-bg-secondary rounded-xl border border-solid border-border flex flex-col">
      <CardContent className="flex flex-col gap-6 px-8 py-4 h-full">
        {/* Avatar, name, payout, flag row */}
        <div className="flex items-center gap-4 self-stretch w-full">
          {/* Avatar */}
          <img
            className="w-[50px] h-[50px]  object-cover rounded-full flex-shrink-0"
            alt={testimonial.name}
            src={testimonial.avatarSrc}
          />

          {/* Name and payout */}
          <div className="flex flex-col items-start gap-1 flex-1">
            <span className="self-stretch font-semibold text-fg text-[20px] tracking-[-0.01em] leading-[28px]">
              {testimonial.name}
            </span>

            <span className="self-stretch font-bold text-success text-[24px] tracking-[-0.01em] leading-[32px]">
              {testimonial.payout}
            </span>
          </div>

          {/* Flag */}
          <img
            className="w-[34px] h-[34px] object-cover flex-shrink-0"
            alt={testimonial.flagAlt}
            src={testimonial.flagSrc}
          />
        </div>

        {/* Quote */}
        <p className="self-stretch text-muted font-normal text-[18px] tracking-[-0.01em] leading-[28px]">
          {testimonial.quote}
        </p>

        {/* Divider */}
        <Separator className="bg-stroke-divider h-px w-full" />

        {/* Account Size row */}
        <div className="flex items-start gap-6 self-stretch w-full">
          <span className="flex-1 text-muted  text-[18px] leading-[28px]">
            Account Size
          </span>

          <span className="w-fit font-medium text-fg text-[20px] tracking-[-0.01em] leading-[28px] whitespace-nowrap">
            {testimonial.accountSize}
          </span>
        </div>

        {/* Date row */}
        <div className="flex items-start gap-6 self-stretch w-full">
        <span className="flex-1 text-muted  text-[18px] leading-[28px]">
        Date
          </span>

          <span className="w-fit font-medium text-fg text-[20px] tracking-[-0.01em] leading-[28px] whitespace-nowrap">
            {testimonial.date}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const canSlide = testimonials.length > visibleCount;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const canGoPrev = canSlide && activeIndex > 0;
  const canGoNext = canSlide && activeIndex < maxIndex;

  // Requirement: keep the card content static; only change the identity (name/avatar/flag).
  const base = testimonials[0];

  const visibleTestimonials = useMemo(() => {
    const identities = testimonials.slice(
      activeIndex,
      activeIndex + visibleCount,
    );
    return identities.map((t) => ({
      ...base,
      name: t.name,
      avatarSrc: t.avatarSrc,
      flagSrc: t.flagSrc,
      flagAlt: t.flagAlt,
    }));
  }, [activeIndex, visibleCount, base]);

  return (
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing self-stretch w-full">
      {/* Section header */}
      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        {/* Label */}
        <div className="flex items-center justify-center self-stretch hf-section-title">
          Testimonials
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch hf-section-heading">
            Traders Who Got Funded
          </h2>

          <p className="self-stretch hf-section-subtitle">
            Real traders. Real payouts. Real results.
          </p>
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="flex items-stretch justify-center gap-8 self-stretch w-full">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${activeIndex}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      {/* Slider arrows (same style as reference) */}
      <div className="mt-2 flex items-center justify-center gap-7">
        <button
          type="button"
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          disabled={!canGoPrev}
          className={`flex h-[48px] md:h-[64px] w-[48px] md:w-[64px] items-center justify-center rounded-full text-white transition-colors ${
            !canGoPrev
              ? "cursor-not-allowed opacity-40 border border-(--stroke-hover) bg-(--surface-modal)"
              : "bg-orange hover:bg-orange-hover border-none"
          }`}
          aria-label="Previous testimonial"
        >
          <MoveLeft className="md:h-7 md:w-7 h-5 w-5 text-white" />
        </button>

        <button
          type="button"
          onClick={() => setActiveIndex((i) => Math.min(maxIndex, i + 1))}
          disabled={!canGoNext}
          className={`flex h-[48px] md:h-[64px] w-[48px] md:w-[64px] items-center justify-center rounded-full text-white transition ${
            !canGoNext
              ? "cursor-not-allowed opacity-40 border border-(--stroke-hover) bg-(--surface-modal)"
              : "bg-orange hover:bg-orange-hover border-none"
          }`}
          aria-label="Next testimonial"
        >
          <MoveRight className="md:h-7 md:w-7 h-5 w-5 text-white" />
        </button>
      </div>

      {/* Icons/logos strip */}
      <img className="self-stretch w-full" alt="Icons" src="/icons.svg" />
    </section>
  );
};

"use client";
import Image from "next/image";
import { LEADERBOARD_CONTENT, LEADERBOARD_TRADERS } from "../../utils/constants";

export const PricingPlansSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing self-stretch w-full" id="leaderboard">
      {/* Header */}
      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        <p className="flex items-center justify-center self-stretch hf-section-title">
          {LEADERBOARD_CONTENT.sectionTitle}
        </p>

        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch hf-section-heading">
            {LEADERBOARD_CONTENT.sectionHeading}
          </h2>

          <p className="self-stretch hf-section-subtitle">
            {LEADERBOARD_CONTENT.sectionSubtitle}
          </p>
        </div>
      </div>

      {/* Trader Cards */}
      <div className="flex flex-col items-start pt-20 pb-0 px-0 self-stretch w-full">
        <div className="flex items-start justify-center gap-8 self-stretch w-full">
          {LEADERBOARD_TRADERS.map((trader, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[0.01px] pt-0 pb-10 px-5 flex-1 self-stretch rounded-[26px] relative overflow-visible"
            >
              {/* Glow overlays */}
              <div className="absolute w-[70%] h-[60%] top-0 left-0 bg-[#ffffff01] rounded-[26px] shadow-[0px_0px_15px_#1890ff] opacity-0" />
              <div className="absolute w-[70%] h-[60%] top-[40%] left-[30%] bg-[#ffffff01] rounded-[26px] shadow-[0px_0px_15px_#1890ff] opacity-0" />

              {/* Card background */}
              <div className="absolute w-[calc(100%+2px)] h-[calc(100%-1px)] top-px left-0 bg-surace-card rounded-xl border border-solid border-border" />

              {/* Trophy image area - overflows above card */}
              <div className="relative self-stretch w-full h-[272px]">
                <div
                  className="flex flex-col w-[calc(100%+1px)] items-center relative"
                  style={{ top: "-60px" }}
                >
                  <div
                    className="relative w-[200px] h-[283px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${trader.award})` }}
                  />
                </div>
              </div>

              {/* Trader info */}
              <div className="flex items-center justify-end gap-4 relative self-stretch w-full">
                <Image
                  width={72}
                  height={72}
                  className="relative w-[72px] h-[72px] mt-px mb-px ml-px  object-cover rounded-full"
                  alt={trader.name}
                  src={trader.avatar}
                />

                <div className="flex flex-col items-start gap-1 relative flex-1">
                  <p className="self-stretch font-bold text-fg text-[32px] tracking-[-0.01em] leading-[40px] relative mt-px">
                    {trader.name}
                  </p>

                  <p className="self-stretch font-bold text-success text-[24px] tracking-[-0.01em] leading-[32px] relative">
                    {trader.earnings}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

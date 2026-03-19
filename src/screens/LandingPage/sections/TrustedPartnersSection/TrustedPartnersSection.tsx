"use client";
import { Button } from "../../../../components/ui/button";
import { useTheme } from "../../../../lib/theme-context";
import Wallet from "../../../../../public/images/wallet.svg";
import WalletLight from "../../../../../public/images/walletLight.svg";
import Triangle from "../../../../../public/images/triangle.svg";
import TriangleLight from "../../../../../public/images/triangleLight.svg";
import Target from "../../../../../public/images/target.svg";
import TargetLight from "../../../../../public/images/targetLight.svg";
import VectorDark from "../../../../../public/images/VectorDark.png";
import VectorLight from "../../../../../public/images/VectorLight.png";
import Image from "next/image";
import { TRUSTED_PARTNERS_CONTENT } from "../../utils/constants";

export const TrustedPartnersSection = () => {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing w-full px-6 lg:px-20 " id="how-it-works">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[1440px] mx-auto">
        <p className="hf-section-title text-center w-full">
          {TRUSTED_PARTNERS_CONTENT.sectionTitle}
        </p>
        <h2 className="hf-section-heading text-center w-full">
          {TRUSTED_PARTNERS_CONTENT.sectionHeading}
        </h2>
        <p className="hf-section-subtitle text-center w-full">
          {TRUSTED_PARTNERS_CONTENT.sectionSubtitle}
        </p>
      </div>

      {/* Steps container */}
      <div className="relative flex flex-wrap justify-center gap-8 w-full max-w-[1440px] mx-auto h-[380px] lg:h-[379px]">
        {/* Connecting vector line */}
        <Image
          className="absolute top-[18%] left-[6%] w-[85%] h-[70%] object-contain"
          alt="Vector"
          src={theme === "dark" ? VectorDark : VectorLight}
        />

        {/* Step 1 */}
        <div className=" flex flex-col items-center px-6 py-5 w-[30%] min-w-[280px] relative">
          <div
            className="relative left-[55%] text-[120px] font-black leading-[144px] text-transparent bg-clip-text text-center w-[48px] h-[125px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 75, 51, 0.32) 0%, rgba(255, 75, 51, 0.12) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            1
          </div>
          <div className="flex flex-col items-center gap-4 mt-[-75px] text-center">
            <span className="font-semibold text-fg text-[28px] leading-[56px]">
              {TRUSTED_PARTNERS_CONTENT.stepOneTitle}
            </span>
            <p className="text-muted text-[18px] leading-[28px] max-w-[344px]">
              {TRUSTED_PARTNERS_CONTENT.stepOneDescription}
            </p>
            <Image
              className="w-[90px] h-[90px]"
              alt="Target Icon"
              src={theme === "dark" ? Target : TargetLight}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center px-6 py-5 w-[30%] min-w-[280px] relative">
          <Image
            className="w-[90px] h-[90px] mb-4"
            alt="Triangle Icon"
            src={theme === "dark" ? Triangle : TriangleLight}
          />
          <span className="font-semibold text-fg text-[28px] leading-[56px] text-center">
            {TRUSTED_PARTNERS_CONTENT.stepTwoTitle}
          </span>
          <p className="text-muted text-[18px] leading-[28px] text-center max-w-[290px] mt-2">
            {TRUSTED_PARTNERS_CONTENT.stepTwoDescription}
          </p>
          <div
            className="absolute text-[120px] font-black leading-[144px] text-transparent top-[60%] left-[87%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 184, 179, 0.32) 0%, rgba(0, 184, 179, 0.12) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            2
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center px-6 py-5 w-[30%] min-w-[280px] relative">
          <div
            className=" relative right-[-55%] text-[120px] font-black leading-[144px] text-transparent bg-clip-text text-center w-[80px] h-[125px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(14, 171, 113, 0.32) 0%, rgba(14, 171, 113, 0.12) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            3
          </div>
          <div className="flex flex-col items-center gap-4 mt-[-105px] text-center">
            <span className="font-semibold text-fg text-[28px] leading-[56px]">
              {TRUSTED_PARTNERS_CONTENT.stepThreeTitle}
            </span>
            <p className="text-muted text-[18px] leading-[28px] max-w-[344px]">
              {TRUSTED_PARTNERS_CONTENT.stepThreeDescription}
            </p>
            <Image
              className="w-[90px] h-[90px]"
              alt="Wallet Icon"
              src={theme === "dark" ? Wallet : WalletLight}
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center gap-4 self-stretch w-full mt-[60px]">
        <button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand hover:bg-brand-hover rounded-[999px] transition-colors">
          <span className=" font-semibold text-white text-base tracking-[0] leading-5">
            {TRUSTED_PARTNERS_CONTENT.ctaLabel}
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
    </section>
  );
};

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
export const TrustedPartnersSection = () => {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing self-stretch w-full ">
      {/* Header */}
      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        <p className="flex items-center justify-center self-stretch hf-section-title">
          How it Works
        </p>

        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch hf-section-heading">
            Get Funded In Three Simple Steps
          </h2>

          <p className="self-stretch hf-section-subtitle">
            Three simple steps to start trading with our capital
          </p>
        </div>
      </div>

      {/* Steps container */}
      <div className="relative self-stretch w-full h-[379px]">
        {/* Connecting vector line */}
        <Image
          className="absolute top-[70px] left-[114px] w-[1221px] h-[266px]"
          alt="Vector"
          src={theme === "dark" ? VectorDark : VectorLight}
        />

        {/* Step 1 - Choose Your Challenge */}
        <div className="flex flex-col w-[471px] items-end px-8 py-5 absolute top-[19px] left-0 rounded-[15px]">
          {/* Large gradient number */}
          <div
            className="relative flex items-center justify-center w-[38px] h-[125px] text-center text-[120px] font-black leading-[144px] whitespace-nowrap bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 75, 51, 0.32) 0%, rgba(255, 75, 51, 0.12) 100%)",

              // background: "linear-gradient(180deg, #7a1a1a 0%, #3a0a0a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            1
          </div>

          <div className="flex flex-col items-center gap-4 self-stretch w-full mt-[-75px]">
            <div className="flex-col items-center justify-center gap-4 flex self-stretch w-full">
              <span className="self-stretch mt-px font-semibold text-fg text-[28px] text-center tracking-[-0.01em] leading-[56px]">
                Choose Your Challenge
              </span>

              <p className="w-[344px] font-normal text-muted text-[18px] text-center tracking-[-0.01em] leading-[28px]">
                Select your account size from $10K to $200K. Pay a one-time
                challenge fee and get instant access to your evaluation account.
              </p>
            </div>

            <Image
              className="w-[90px] h-[90px]"
              alt="Icon"
              src={theme === "dark" ? Target : TargetLight}
            />
          </div>
        </div>

        {/* Step 2 - Pass the Evaluation */}
        <div className="absolute top-px left-[503px] w-[471px] h-[356px] rounded-[15px]">
          <div className="flex flex-col w-[407px] items-center gap-4 absolute top-5 left-8">
            {/* <div className="flex w-[90px] h-[90px] items-center justify-center gap-2.5 px-3 py-[11px]"> */}
            <Image
              className="w-[90px] h-[90px]"
              alt="Triangle"
              src={theme === "dark" ? Triangle : TriangleLight}
            />
            {/* </div> */}

            <div className="flex-col items-center justify-center gap-4 flex self-stretch w-full">
              <span className="self-stretch mt-px font-semibold text-fg text-[28px] text-center tracking-[-0.01em] leading-[56px]">
                Pass the Evaluation
              </span>

              <p className="w-[296px] font-normal text-muted text-[18px] text-center tracking-[-0.01em] leading-[28px]">
                Hit your profit target while staying within risk rules. Trade
                any crypto pair, any strategy. We measure skill, not luck.
              </p>
            </div>
          </div>

          {/* Large gradient number 2 */}
          <div
            className="absolute top-[231px] left-[401px] text-center text-[120px] font-black leading-[144px] whitespace-nowrap bg-clip-text text-transparent"
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

        {/* Step 3 - Get Funded & Earn */}
        <div className="flex flex-col w-[471px] items-end px-8 py-5 absolute top-[7px] left-[1006px] rounded-[15px]">
          {/* Large gradient number */}
          <div
            className="relative flex items-center justify-center w-[68px] h-[125px] text-center text-[120px] font-black leading-[144px] whitespace-nowrap bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(180deg, rgba(14, 171, 113, 0.32) 0%, rgba(14, 171, 113, 0.12) 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            3
          </div>

          <div className="flex flex-col items-center gap-4 self-stretch w-full mt-[-75px]">
            <div className="flex-col items-center justify-center gap-4 flex self-stretch w-full pr-[20px]">
              <span className="self-stretch mt-px font-semibold text-fg text-[28px] text-center tracking-[-0.01em] leading-[56px]">
                Get Funded &amp; Earn
              </span>

              <p className="w-[344px] font-normal text-muted text-[18px] text-center tracking-[-0.01em] leading-[28px]">
                Trade with real capital and receive 80-90% of your profits.
                Withdraw anytime. Scale up to larger accounts.
              </p>
            </div>

            {/* <div className="flex w-[90px] h-[90px] items-center justify-center gap-2.5 px-3 py-[11px] "> */}
            <Image
              className="w-[90px] h-[90px]"
              alt="Wallet"
              src={theme === "dark" ? Wallet : WalletLight}
            />
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center gap-4 self-stretch w-full">
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
    </section>
  );
};

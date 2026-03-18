import { Button } from "../../../../components/ui/button";

export const TrustedPartnersSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-60 py-[120px] self-stretch w-full bg-[#0d0f17]">
      {/* Header */}
      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        <p className="flex items-center justify-center self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#ff5a44] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
          How it Works
        </p>

        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch font-display-large font-[number:var(--display-large-font-weight)] text-[#f0f0f0] text-[length:var(--display-large-font-size)] text-center tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
            Get Funded In Three Simple Steps
          </h2>

          <p className="self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#8a8fa8] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
            Three simple steps to start trading with our capital
          </p>
        </div>
      </div>

      {/* Steps container */}
      <div className="relative self-stretch w-full h-[379px]">
        {/* Connecting vector line */}
        <img
          className="absolute top-[60px] left-[114px] w-[1221px] h-[266px]"
          alt="Vector"
          src="/vector-4.svg"
        />

        {/* Step 1 - Choose Your Challenge */}
        <div className="flex flex-col w-[471px] items-end px-8 py-5 absolute top-[19px] left-0 rounded-[15px]">
          {/* Large gradient number */}
          <div
            className="relative mt-[-1.00px] flex items-center justify-center w-[38px] h-[125px] font-display-extrabold120 font-[number:var(--display-extrabold120-font-weight)] text-[length:var(--display-extrabold120-font-size)] text-center tracking-[var(--display-extrabold120-letter-spacing)] leading-[var(--display-extrabold120-line-height)] whitespace-nowrap [font-style:var(--display-extrabold120-font-style)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
            style={{
              background:
                "linear-gradient(180deg,rgba(255,75,51,0.32) 0%,rgba(255,75,51,0.12) 100%)",
            }}
          >
            1
          </div>

          <div className="flex flex-col items-center gap-4 self-stretch w-full mt-[-75px]">
            <div className="flex-col items-center justify-center gap-4 flex self-stretch w-full">
              <h3 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#f0f0f0] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                Choose Your Challenge
              </h3>

              <p className="w-[344px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] text-center tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                Select your account size from $10K to $200K. Pay a one-time
                challenge fee and get instant access to your evaluation account.
              </p>
            </div>

            <img className="w-[90px] h-[90px]" alt="Icon" src="/icon.svg" />
          </div>
        </div>

        {/* Step 2 - Pass the Evaluation */}
        <div className="absolute top-px left-[503px] w-[471px] h-[356px] rounded-[15px]">
          <div className="flex flex-col w-[407px] items-center gap-4 absolute top-5 left-8">
            <div className="flex w-[90px] h-[90px] items-center justify-center gap-2.5 px-3 py-[11px] bg-[#014b49] rounded-[999px] border border-solid border-[#17e6e0]">
              <img className="w-14 h-14" alt="Triangle" src="/triangle.svg" />
            </div>

            <div className="flex-col items-center justify-center gap-4 flex self-stretch w-full">
              <h3 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#f0f0f0] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                Pass the Evaluation
              </h3>

              <p className="w-[296px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] text-center tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                Hit your profit target while staying within risk rules. Trade
                any crypto pair, any strategy. We measure skill, not luck.
              </p>
            </div>
          </div>

          {/* Large gradient number 2 */}
          <div
            className="absolute top-[231px] left-[401px] flex items-center justify-center w-[38px] h-[125px] font-display-extrabold120 font-[number:var(--display-extrabold120-font-weight)] text-[length:var(--display-extrabold120-font-size)] text-center tracking-[var(--display-extrabold120-letter-spacing)] leading-[var(--display-extrabold120-line-height)] whitespace-nowrap [font-style:var(--display-extrabold120-font-style)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
            style={{
              background:
                "linear-gradient(180deg,rgba(0,184,179,0.32) 0%,rgba(0,184,179,0.12) 100%)",
            }}
          >
            2
          </div>
        </div>

        {/* Step 3 - Get Funded & Earn */}
        <div className="flex flex-col w-[471px] items-end px-8 py-5 absolute top-[7px] left-[1006px] rounded-[15px]">
          {/* Large gradient number */}
          <div
            className="relative mt-[-1.00px] flex items-center justify-center w-[38px] h-[125px] font-display-extrabold120 font-[number:var(--display-extrabold120-font-weight)] text-[length:var(--display-extrabold120-font-size)] text-center tracking-[var(--display-extrabold120-letter-spacing)] leading-[var(--display-extrabold120-line-height)] whitespace-nowrap [font-style:var(--display-extrabold120-font-style)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
            style={{
              background:
                "linear-gradient(180deg,rgba(14,171,113,0.32) 0%,rgba(14,171,113,0.12) 100%)",
            }}
          >
            3
          </div>

          <div className="flex flex-col items-center gap-4 self-stretch w-full mt-[-75px]">
            <div className="flex-col items-center justify-center gap-4 flex self-stretch w-full">
              <h3 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#f0f0f0] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                Get Funded &amp; Earn
              </h3>

              <p className="w-[344px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] text-center tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                Trade with real capital and receive 80-90% of your profits.
                Withdraw anytime. Scale up to larger accounts.
              </p>
            </div>

            <div className="flex w-[90px] h-[90px] items-center justify-center gap-2.5 px-3 py-[11px] bg-[#002b1b] rounded-[999px] border border-solid border-[#00d084]">
              <img className="w-14 h-14" alt="Wallet" src="/wallet-2.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center gap-4 self-stretch w-full">
        <Button className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#ff5a44] rounded-[999px] hover:bg-[#ff4433] h-auto">
          <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-5">
            Start Your Challenge
          </span>
          <img className="w-10" alt="Icon wrap" src="/icon-wrap.svg" />
        </Button>
      </div>
    </section>
  );
};

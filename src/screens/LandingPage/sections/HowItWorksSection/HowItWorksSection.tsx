import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Pricing plan data
const pricingPlans = [
  {
    accountLabel: "Account 1",
    accountSize: "$10,000",
    fee: "$99",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "80%",
    isFeatured: false,
  },
  {
    accountLabel: "Account 2",
    accountSize: "$25,000",
    fee: "$199",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "80%",
    isFeatured: false,
  },
  {
    accountLabel: "Account\u00a0\u00a03",
    accountSize: "$50,000",
    fee: "$297",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "85%",
    isFeatured: true,
  },
  {
    accountLabel: "Account 4",
    accountSize: "$100,000",
    fee: "$497",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "85%",
    isFeatured: false,
  },
  {
    accountLabel: "Account 5",
    accountSize: "$200,000",
    fee: "$797",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "90%",
    isFeatured: false,
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-60 py-[120px] self-stretch w-full bg-[#0d0f17]">
      {/* Header */}
      <div className="pt-0 pb-6 px-0 flex flex-col items-start gap-6 self-stretch w-full">
        {/* Section label */}
        <div className="flex items-center justify-center self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#ff5a44] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
          Pricing &amp; Plans
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch font-display-large font-[number:var(--display-large-font-weight)] text-[#f0f0f0] text-[length:var(--display-large-font-size)] text-center tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
            Choose Your Account Size
          </h2>

          <p className="self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#8a8fa8] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
            One-time fee. No monthly subscriptions. Full profit split.
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="flex items-stretch justify-center gap-8 self-stretch w-full">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="relative flex-1">
            {/* "Most Popular" badge for featured card */}
            {plan.isFeatured && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center px-3 py-2 bg-[#482602] rounded-[999px] border border-solid border-[#cc8400] whitespace-nowrap">
                <span className="font-body-semibold font-[number:var(--body-semibold-font-weight)] text-[#cc8400] text-[length:var(--body-semibold-font-size)] tracking-[var(--body-semibold-letter-spacing)] leading-[var(--body-semibold-line-height)] [font-style:var(--body-semibold-font-style)]">
                  Most Popular
                </span>
              </div>
            )}

            <Card
              className={`flex flex-col gap-4 px-6 py-4 h-full bg-[#151a2d] rounded-xl ${
                plan.isFeatured
                  ? "border-2 border-solid border-[#00d084]"
                  : "border border-solid border-[#2a3050]"
              }`}
            >
              <CardContent className="flex flex-col gap-4 p-0 h-full">
                {/* Account name and size */}
                <div className="flex flex-col items-start gap-4 px-0 py-3 self-stretch w-full">
                  <div className="flex flex-col items-center gap-2 self-stretch w-full">
                    <span className="self-stretch font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] text-center tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                      {plan.accountLabel}
                    </span>

                    <span className="w-fit font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#f0f0f0] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap [font-style:var(--heading-h1-font-style)]">
                      {plan.accountSize}
                    </span>
                  </div>

                  <Separator className="bg-[#2a3050] h-px w-full" />

                  {/* One Time Fee */}
                  <div className="flex items-center justify-center gap-3 self-stretch w-full">
                    <span className="w-fit font-body-reg14 font-[number:var(--body-reg14-font-weight)] text-[#8a8fa8] text-[length:var(--body-reg14-font-size)] text-center tracking-[var(--body-reg14-letter-spacing)] leading-[var(--body-reg14-line-height)] whitespace-nowrap [font-style:var(--body-reg14-font-style)]">
                      One Time Fee
                    </span>

                    <span className="w-fit font-KPI-secondary font-[number:var(--KPI-secondary-font-weight)] text-[#ff5a44] text-[length:var(--KPI-secondary-font-size)] text-center tracking-[var(--KPI-secondary-letter-spacing)] leading-[var(--KPI-secondary-line-height)] whitespace-nowrap [font-style:var(--KPI-secondary-font-style)]">
                      {plan.fee}
                    </span>
                  </div>
                </div>

                {/* Stats section */}
                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                  <Separator className="bg-[#2a3050] h-px w-full" />

                  {/* Profit Target */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 font-body-regular font-[number:var(--body-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                      Profit Target
                    </span>
                    <span className="w-fit font-KPI-medium-16 font-[number:var(--KPI-medium-16-font-weight)] text-[#f0f0f0] text-[length:var(--KPI-medium-16-font-size)] text-center tracking-[var(--KPI-medium-16-letter-spacing)] leading-[var(--KPI-medium-16-line-height)] whitespace-nowrap [font-style:var(--KPI-medium-16-font-style)]">
                      {plan.profitTarget}
                    </span>
                  </div>

                  {/* Max Daily Loss */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 font-body-regular font-[number:var(--body-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                      Max Daily Loss
                    </span>
                    <span className="w-fit font-KPI-medium-16 font-[number:var(--KPI-medium-16-font-weight)] text-[#f0f0f0] text-[length:var(--KPI-medium-16-font-size)] text-center tracking-[var(--KPI-medium-16-letter-spacing)] leading-[var(--KPI-medium-16-line-height)] whitespace-nowrap [font-style:var(--KPI-medium-16-font-style)]">
                      {plan.maxDailyLoss}
                    </span>
                  </div>

                  {/* Max Drawdown */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 font-body-regular font-[number:var(--body-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                      Max Drawdown
                    </span>
                    <span className="w-fit font-KPI-medium-16 font-[number:var(--KPI-medium-16-font-weight)] text-[#f0f0f0] text-[length:var(--KPI-medium-16-font-size)] text-center tracking-[var(--KPI-medium-16-letter-spacing)] leading-[var(--KPI-medium-16-line-height)] whitespace-nowrap [font-style:var(--KPI-medium-16-font-style)]">
                      {plan.maxDrawdown}
                    </span>
                  </div>
                </div>

                {/* Profit Split section */}
                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                  <Separator className="bg-[#2a3050] h-px w-full" />
                </div>

                <div className="flex items-center gap-3 self-stretch w-full">
                  <span className="flex-1 font-body-regular font-[number:var(--body-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                    Profit Split
                  </span>

                  <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#4a201a] rounded-lg border border-solid border-[#ff5a44]">
                    <span className="w-fit font-KPI-secondary font-[number:var(--KPI-secondary-font-weight)] text-[#ff5a44] text-[length:var(--KPI-secondary-font-size)] text-center tracking-[var(--KPI-secondary-letter-spacing)] leading-[var(--KPI-secondary-line-height)] whitespace-nowrap [font-style:var(--KPI-secondary-font-style)]">
                      {plan.profitSplit}
                    </span>
                  </div>
                </div>

                <Separator className="bg-[#2a3050] h-px w-full" />

                {/* Get Started button */}
                <Button className="flex items-center justify-center gap-3 px-5 py-3 w-full bg-[#ff5a44] hover:bg-[#e04e3a] rounded-[999px] border-none">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-5">
                    Get Started
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

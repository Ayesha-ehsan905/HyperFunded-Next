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
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing self-stretch w-full">
      {/* Header */}
      <div className="pt-0 pb-6 px-0 flex flex-col items-start gap-6 self-stretch w-full">
        {/* Section label */}
        <div className="flex items-center justify-center self-stretch hf-section-title">
          Pricing &amp; Plans
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch hf-section-heading">
            Choose Your Account Size
          </h2>

          <p className="self-stretch hf-section-subtitle">
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
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center px-3 py-2 bg-warning-bg rounded-full border border-solid border-warning whitespace-nowrap">
                <span className="font-semibold text-warning text-base tracking-[0] leading-[24px]">
                  Most Popular
                </span>
              </div>
            )}

            <Card
              className={`flex flex-col gap-4 px-6 py-4 h-full bg-surace-card rounded-xl ${
                plan.isFeatured
                  ? "border-2 border-solid border-[#00d084]"
                  : "border border-solid border-border"
              }`}
            >
              <CardContent className="flex flex-col gap-4 p-0! h-full">
                {/* Account name and size */}
                <div className="flex flex-col items-start gap-4 px-0 py-3 self-stretch w-full">
                  <div className="flex flex-col items-center gap-2 self-stretch w-full">
                    <span className="self-stretch text-center text-muted font-normal text-[18px] tracking-[-0.01em] leading-[28px]">
                      {plan.accountLabel}
                    </span>

                    <span className="w-fit text-fg font-bold text-[36px] text-center tracking-[-0.01em] leading-[44px]">
                      {plan.accountSize}
                    </span>
                  </div>

                  <Separator className="bg-stroke-divider h-px w-full" />

                  {/* One Time Fee */}
                  <div className="flex items-center justify-center gap-3 self-stretch w-full">
                    <span className="w-fit font-normal text-muted text-[14px] tracking-[-0.01em] leading-[20px]">
                      One Time Fee
                    </span>

                    <span className="w-fit font-medium text-orange text-[16px] tracking-[-0.01em] leading-[24px]">
                      {plan.fee}
                    </span>
                  </div>
                </div>

                {/* Stats section */}
                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                  <Separator className="bg-stroke-divider h-px w-full" />

                  {/* Profit Target */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 text-muted font-normal text-[16px] tracking-[-0.01em] leading-[20px]">
                      Profit Target
                    </span>
                    <span className="w-fit text-primary font-medium text-[16px] tracking-[-0.01em] leading-[24px]">
                      {plan.profitTarget}
                    </span>
                  </div>

                  {/* Max Daily Loss */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 text-muted font-normal text-[16px] tracking-[-0.01em] leading-[20px]">
                      Max Daily Loss
                    </span>
                    <span className="w-fit text-primary font-medium text-[16px] tracking-[-0.01em] leading-[24px]">
                      {plan.maxDailyLoss}
                    </span>
                  </div>

                  {/* Max Drawdown */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 text-muted font-normal text-[16px] tracking-[-0.01em] leading-[20px]">
                      Max Drawdown
                    </span>
                    <span className="w-fit text-primary font-medium text-[16px] tracking-[-0.01em] leading-[24px]">
                      {plan.maxDrawdown}
                    </span>
                  </div>
                </div>

                {/* Profit Split section */}
                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                  <Separator className="bg-stroke-divider h-px w-full" />
                </div>

                <div className="flex items-center gap-3 self-stretch w-full">
                  <span className="flex-1 text-muted font-normal text-[16px] tracking-[-0.01em] leading-[20px]">
                    Profit Split
                  </span>

                  <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-bg-orange rounded-lg border border-solid border-[#ff5a44]">
                    <span className="w-fit text-orange font-medium text-[16px] tracking-[-0.01em] leading-[24px]">
                      {plan.profitSplit}
                    </span>
                  </div>
                </div>

                <Separator className="bg-stroke-divider h-px w-full" />

                {/* Get Started button */}
                <Button className="flex items-center justify-center gap-3 w-full h-full p-0! bg-orange hover:bg-brand-hover rounded-full border-none">
                  <span className="font-semibold text-white text-base tracking-[0] leading-5  py-3 ">
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

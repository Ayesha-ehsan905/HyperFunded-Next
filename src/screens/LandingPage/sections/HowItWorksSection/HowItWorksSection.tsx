import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { HOW_IT_WORKS_CONTENT, PRICING_PLANS } from "../../utils/constants";

export const HowItWorksSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 sectionSpacing self-stretch w-full" id="pricing">
      {/* Header */}
      <div className="pt-0 pb-6 px-0 flex flex-col items-start gap-6 self-stretch w-full">
        {/* Section label */}
        <div className="flex items-center justify-center self-stretch hf-section-title">
          {HOW_IT_WORKS_CONTENT.sectionTitle}
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch hf-section-heading">
            {HOW_IT_WORKS_CONTENT.sectionHeading}
          </h2>

          <p className="self-stretch hf-section-subtitle">
            {HOW_IT_WORKS_CONTENT.sectionSubtitle}
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="flex items-stretch justify-center gap-8 self-stretch w-full">
        {PRICING_PLANS.map((plan, index) => (
          <div key={index} className="relative flex-1">
            {/* "Most Popular" badge for featured card */}
            {plan.isFeatured && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center px-3 py-2 bg-warning-bg rounded-full border border-solid border-warning whitespace-nowrap">
                <span className="font-semibold text-warning text-base tracking-[0] leading-[24px]">
                  {HOW_IT_WORKS_CONTENT.featuredBadgeLabel}
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
                      {HOW_IT_WORKS_CONTENT.oneTimeFeeLabel}
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
                      {HOW_IT_WORKS_CONTENT.profitTargetLabel}
                    </span>
                    <span className="w-fit text-primary font-medium text-[16px] tracking-[-0.01em] leading-[24px]">
                      {plan.profitTarget}
                    </span>
                  </div>

                  {/* Max Daily Loss */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 text-muted font-normal text-[16px] tracking-[-0.01em] leading-[20px]">
                      {HOW_IT_WORKS_CONTENT.maxDailyLossLabel}
                    </span>
                    <span className="w-fit text-primary font-medium text-[16px] tracking-[-0.01em] leading-[24px]">
                      {plan.maxDailyLoss}
                    </span>
                  </div>

                  {/* Max Drawdown */}
                  <div className="flex items-center gap-3 self-stretch w-full">
                    <span className="flex-1 text-muted font-normal text-[16px] tracking-[-0.01em] leading-[20px]">
                      {HOW_IT_WORKS_CONTENT.maxDrawdownLabel}
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
                    {HOW_IT_WORKS_CONTENT.profitSplitLabel}
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
                    {HOW_IT_WORKS_CONTENT.ctaLabel}
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

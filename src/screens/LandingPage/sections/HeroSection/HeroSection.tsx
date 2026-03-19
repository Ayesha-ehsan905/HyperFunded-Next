 "use client";

import { useState } from "react";
import { useTheme } from "../../../../lib/theme-context";
import Image from "next/image";
import HeroSectionImage from "../../../../../public/images/Asset Hero - Dark.png";
import HeroSectionLight from "../../../../../public/images/Asset Hero -Light.png";
import { HERO_CONTENT } from "../../utils/constants";

// Chart time period options
// const timePeriods = ["7D", "14D", "1M", "3M"];

export const HeroSection = () => {
  const { theme } = useTheme();
  const [isWatchHover, setIsWatchHover] = useState(false);

  const watchIconSrc = isWatchHover
    ? "/images/videoIcon.svg"
    : theme === "dark"
      ? "/images/videoIcon.svg"
      : "/images/videoIconLight.svg";

  return (
    <section className="relative w-full hf-gradient-hero overflow-hidden ">
      {/* Background decorative SVG */}
      <Image
        className="absolute top-0 left-[439px] w-[1042px] h-[722px] pointer-events-none"
        width={1042}
        height={722}
        alt="Bg"
        src={theme === "dark" ? "/images/DarkBG.png" : "/images/LightBG.png"}
        suppressHydrationWarning
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-12 px-60 py-0 pt-[60px] pb-[80px]">
        {/* Headline + CTA section */}
        <div className="max-w-[876px] w-full flex flex-col items-center gap-12">
          {/* Headline */}
          <div className="flex flex-col gap-6 items-center justify-center w-full mt-[82px]">
            <div className="flex items-center justify-center relative w-full">
              <div className="flex flex-col items-center flex-1">
                <h1 className="hf-display-xl text-fg text-center whitespace-nowrap h-[86px] flex items-center justify-center">
                  {HERO_CONTENT.titleLines[0]}
                </h1>
                <h1 className="hf-display-xl text-fg text-center whitespace-nowrap h-[86px] flex items-center justify-center">
                  {HERO_CONTENT.titleLines[1]}
                </h1>
              </div>
              {/* Decorative underline vector */}
              <Image
                width={100}
                height={100}
                className="absolute w-[24%] h-[7%] top-[46.68%] left-[56.85%] pointer-events-none"
                alt="Vector"
                src="/images/Vector.png"
              />
            </div>

            {/* Subtitle */}
            <div className="flex flex-col items-center px-[15px] py-0 w-full">
              <p className="hf-body-lg text-muted text-center max-w-[634px]">
                {HERO_CONTENT.subtitle}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 w-full">
            {/* Watch How it Works */}
            <button
              onMouseEnter={() => setIsWatchHover(true)}
              onMouseLeave={() => setIsWatchHover(false)}
              onFocus={() => setIsWatchHover(true)}
              onBlur={() => setIsWatchHover(false)}
              className="inline-flex items-center justify-center gap-2 p-4 rounded-[999px] border border-solid border-fg hover:border-orange hover:bg-orange transition-all duration-300 h "
            >
              <Image
                width={24}
                height={24}
                className="w-6 h-6"
                alt="Video new"
                src={watchIconSrc}
              />
              <span className="font-semibold text-fg text-base tracking-[0] leading-5 transition-colors hover:text-white">
                {HERO_CONTENT.watchButtonLabel}
              </span>
            </button>

            {/* Start Your Challenge */}
            <button className="group inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand hover:bg-brand-hover rounded-[999px] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]">
              <span className=" font-semibold text-white text-base tracking-[0] leading-5">
                {HERO_CONTENT.ctaLabel}
              </span>
              <Image
                width={40}
                height={39}
                className="transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2"
                alt="Icon wrap"
                src="/images/arrow.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-8 w-full justify-center pb-[80px]">
        <Image
          src={theme === "dark" ? HeroSectionImage : HeroSectionLight}
          className="w-[1200px] h-full"
          alt="Hero Section"
          suppressHydrationWarning
        />
      </div>
    </section>
  );
};

{
  /* Cards Row */
}
//   <div className="flex items-start gap-8 w-full justify-center">
//   <Card className="flex flex-col w-[677px] gap-6 p-4 bg-surface rounded-2xl border border-solid border-border flex-shrink-0">
//     <CardContent className="p-0 flex flex-col gap-6">
//       {/* Chart Header */}
//       <div className="flex items-center gap-6 w-full">
//         <span className="flex-1 hf-label text-fg">
//           Performance Chart
//         </span>

//         {/* Time period selector */}
//         <div className="inline-flex items-center justify-end gap-3 px-2 py-1 bg-surface-2 rounded-lg border border-solid border-border">
//           {timePeriods.map((period) => (
//             <button
//               key={period}
//               onClick={() => setSelectedPeriod(period)}
//               className={`inline-flex flex-col items-start px-2 py-1 rounded-md transition-colors ${
//                 selectedPeriod === period
//                   ? "bg-surface border border-solid border-brand"
//                   : ""
//               }`}
//             >
//               <span
//                 className={`hf-body-sm whitespace-nowrap ${
//                   selectedPeriod === period ? "text-brand" : "text-fg"
//                 }`}
//               >
//                 {period}
//               </span>
//             </button>
//           ))}
//           {/* Calendar icon */}
//           <div className="inline-flex flex-col items-start p-2">
//             <Image
//               className="w-4 h-4"
//               alt="Calendar"
//               src="/calendar.svg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <Image className="w-full h-px" alt="Line" src="/line-9.svg" />

//       {/* Legend */}
//       <div className="flex items-center justify-end gap-2 w-full">
//         <div className="inline-flex items-center gap-2">
//           <div className="w-2 h-2 bg-brand" />
//           <span className="hf-body-sm text-fg whitespace-nowrap">
//             Equity
//           </span>
//         </div>
//         <div className="inline-flex items-center gap-2">
//           <div className="w-2 h-2 bg-success" />
//           <span className="hf-body-sm text-fg whitespace-nowrap">
//             P&amp;L
//           </span>
//         </div>
//       </div>

//       {/* Chart Area */}
//       <div className="relative w-full h-[340px]">
//         {/* Chart inner container with x-axis columns */}
//         <div className="absolute w-[93.67%] h-full top-0 left-[6.33%]">
//           {/* Mon column */}
//           <div className="absolute w-[99.84%] h-[95.65%] top-[4.29%] left-0">
//             <div className="absolute left-[calc(50.00%_-_302px)] bottom-0 w-8 h-4 flex items-center justify-center hf-body-sm text-fg text-center">
//               Mon
//             </div>
//             <div className="absolute h-[calc(100%_-_25px)] top-0 left-[calc(50.00%_-_287px)] w-px bg-grid" />
//             <div className="absolute w-[99.87%] h-0 top-[90.73%] left-0 bg-grid" />
//           </div>

//           {/* Tue column */}
//           <div className="left-[15.88%] absolute w-[5.27%] h-[95.65%] top-[4.29%]">
//             <div className="absolute left-[calc(50.00%_-_16px)] bottom-0 w-8 h-4 flex items-center justify-center hf-body-sm text-fg text-center">
//               Tue
//             </div>
//             <div className="absolute h-[calc(100%_-_25px)] top-0 left-[50.00%] w-px bg-grid" />
//             <div className="absolute w-[84.38%] h-[31.48%] top-[59.37%] left-[9.78%]">
//               <Image
//                 className="absolute top-[18px] left-3 w-0.5 h-[88px]"
//                 alt="Line"
//                 src="/line-3.svg"
//               />
//               <div className="absolute top-0 left-0 w-[27px] h-[27px] flex bg-surface rounded-[13.5px]">
//                 <div className="mt-2 w-[11px] h-[11px] ml-2 bg-brand rounded-[5.5px]" />
//               </div>
//             </div>
//           </div>

//           {/* Wed column */}
//           <div className="left-[31.62%] flex flex-col justify-end items-center gap-[8.8px] absolute w-[5.27%] h-[95.65%] top-[4.29%]">
//             <div className="ml-[-0.9px] h-[312px] w-px bg-grid" />
//             <div className="flex items-center justify-center h-4 w-8 mb-[-0.1px] hf-body-sm text-fg text-center">
//               Wed
//             </div>
//           </div>

//           {/* Thu column */}
//           <div className="left-[47.36%] flex flex-col justify-end items-center gap-[8.8px] absolute w-[5.27%] h-[95.65%] top-[4.29%]">
//             <div className="ml-0 h-[312px] w-px bg-grid" />
//             <div className="flex items-center justify-center h-4 w-8 mb-[-0.1px] hf-body-sm text-fg text-center">
//               Thu
//             </div>
//           </div>

//           {/* Fri column */}
//           <div className="left-[63.10%] flex flex-col justify-end items-center gap-[8.8px] absolute w-[5.27%] h-[95.65%] top-[4.29%]">
//             <div className="ml-[-1.1px] h-[312px] w-px bg-grid" />
//             <div className="flex items-center justify-center h-4 w-8 mb-[-0.1px] hf-body-sm text-fg text-center">
//               Fri
//             </div>
//           </div>

//           {/* Sat column */}
//           <div className="left-[78.85%] flex flex-col justify-end items-center gap-[8.8px] absolute w-[5.27%] h-[95.65%] top-[4.29%]">
//             <div className="ml-[-0.2px] h-[312px] w-px bg-grid" />
//             <div className="flex items-center justify-center h-4 w-8 mb-[-0.1px] hf-body-sm text-fg text-center">
//               Sat
//             </div>
//           </div>

//           {/* Sun column */}
//           <div className="left-[94.59%] flex flex-col justify-end items-center gap-[8.8px] absolute w-[5.27%] h-[95.65%] top-[4.29%]">
//             <div className="ml-[-1.3px] h-[312px] w-px bg-grid" />
//             <div className="flex items-center justify-center h-4 w-8 mb-[-0.1px] hf-body-sm text-fg text-center">
//               Sun
//             </div>
//           </div>

//           {/* Green chart line */}
//           <Image
//             className="absolute w-[94.40%] h-[64.69%] top-[4.29%] left-[2.80%]"
//             alt="Green"
//             src="/green.svg"
//           />

//           {/* Orange chart line */}
//           <Image
//             className="absolute top-[-22px] -left-1.5 w-[617px] h-[274px]"
//             alt="Orange"
//             src="/orange.svg"
//           />
//         </div>

//         {/* Y-axis labels */}
//         <div className="absolute left-0 bottom-4 w-8 h-[281px]">
//           <div className="absolute h-[9.76%] top-[90.24%] left-[calc(50.00%_-_3px)] w-[9px] flex items-center justify-end hf-body-sm text-fg text-right">
//             0
//           </div>
//           <div className="absolute h-[9.76%] top-[67.68%] right-0 w-8 flex items-center justify-end hf-body-sm text-fg text-right">
//             $10k
//           </div>
//           <div className="absolute h-[9.76%] top-[45.12%] right-0 w-8 flex items-center justify-end hf-body-sm text-fg text-right">
//             $20k
//           </div>
//           <div className="absolute h-[9.76%] top-[22.56%] right-0 w-8 flex items-center justify-end hf-body-sm text-fg text-right">
//             $30k
//           </div>
//           <div className="absolute h-[9.76%] top-0 right-0 w-8 flex items-center justify-end hf-body-sm text-fg text-right">
//             $40k
//           </div>
//         </div>

//         {/* Tooltip */}
//         <div className="absolute top-[-21px] left-[272px] w-[154px] h-[82px]">
//           <Image
//             className="absolute w-[81.82%] h-[65.85%] top-0 left-0"
//             alt="Tooltip"
//             src="/tooltip.png"
//           />
//           <div className="absolute w-[70.78%] h-[44.05%] top-[19.51%] left-[14.94%]">
//             <div className="absolute w-[96.33%] h-[49.83%] top-[50.17%] left-0 hf-body-sm text-white whitespace-nowrap">
//               Equity: $24,250
//             </div>
//             <div className="absolute w-[96.33%] h-[49.83%] top-0 left-0 hf-body-sm text-white whitespace-nowrap">
//               Balance:$41,250
//             </div>
//           </div>
//         </div>
//       </div>
//     </CardContent>
//   </Card>

//   {/* Right zcolumn: Hero image + social proof */}
//   <div className="inline-flex flex-col items-start gap-6 flex-shrink-0 relative">
//     {/* Hero image */}
//     <div
//       className="w-full h-[400px] rounded-2xl bg-[url(/hero-image.png)] bg-cover bg-[50%_50%]"
//       style={{ minWidth: "484px" }}
//     />

//     {/* Social proof card */}
//     <Card className="flex max-w-[484px] w-full items-center gap-4 px-6 py-4 bg-page rounded-xl border border-solid border-border">
//       <CardContent className="p-0 flex items-center gap-4 w-full">
//         <Image
//           className="w-[147.83px] h-[49.64px] flex-shrink-0"
//           alt="Image group"
//           src="/image-group.svg"
//         />
//         <div className="flex flex-col items-start flex-1">
//           <span className="hf-kpi-lg text-fg">12000+</span>
//           <span className="hf-body-sm text-muted">
//             Traders who have already joined
//           </span>
//         </div>
//       </CardContent>
//     </Card>

//     {/* Account Balance KPI card - overlapping */}
//     <Card className="flex flex-col w-[260px] items-start gap-4 px-4 py-3 bg-surface rounded-xl overflow-hidden border border-solid border-border absolute top-[51px] left-[calc(100%_-_174px)]">
//       <CardContent className="p-0 flex flex-col gap-4 w-full">
//         <div className="flex flex-col items-start gap-4 w-full">
//           {/* Icon */}
//           <div className="flex w-10 h-10 items-center justify-center gap-2.5 p-1.5 bg-success/20 rounded-lg border border-solid border-success">
//             <Image
//               className="w-6 h-6"
//               alt="Dollar circle"
//               src="/dollar-circle.svg"
//             />
//           </div>

//           {/* Label */}
//           <span className="hf-body-sm text-muted self-stretch">
//             Account Balance
//           </span>

//           {/* Value */}
//           <span className="hf-kpi-lg text-fg self-stretch">
//             $54287.50
//           </span>
//         </div>

//         {/* Growth indicator */}
//         <div className="flex items-center justify-end gap-1 w-full">
//           <span className="flex-1 hf-body-sm text-success text-right">
//             +8.57%
//           </span>
//           <Image
//             className="w-6 h-6"
//             alt="Only graph"
//             src="/only-graph.svg"
//           />
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// </div>

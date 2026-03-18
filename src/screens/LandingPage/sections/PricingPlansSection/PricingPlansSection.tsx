// Trader data for the leaderboard cards
const traders = [
  {
    award: "/award-silver-png.png",
    avatar: "/ellipse-10-3.png",
    name: "Floyd Miles",
    earnings: "$2,450",
  },
  {
    award: "/award-gold-png.png",
    avatar: "/ellipse-11.png",
    name: "Ralph Edwards",
    earnings: "$5,000",
  },
  {
    award: "/award-bronze-png.png",
    avatar: "/ellipse-11-1.png",
    name: "Darrell Steward",
    earnings: "$1,900",
  },
];

export const PricingPlansSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-60 py-[120px] self-stretch w-full bg-[#0d0f17]">
      {/* Header */}
      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        <p className="flex items-center justify-center self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#ff5a44] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
          Leaderboard
        </p>

        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch font-display-large font-[number:var(--display-large-font-weight)] text-[#f0f0f0] text-[length:var(--display-large-font-size)] text-center tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
            Top Traders This Month
          </h2>

          <p className="self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#8a8fa8] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
            Compete with the best and climb the ranks
          </p>
        </div>
      </div>

      {/* Trader Cards */}
      <div className="flex flex-col items-start pt-20 pb-0 px-0 self-stretch w-full">
        <div className="flex items-start justify-center gap-8 self-stretch w-full">
          {traders.map((trader, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[0.01px] pt-0 pb-10 px-5 flex-1 self-stretch rounded-[26px] relative overflow-visible"
            >
              {/* Glow overlays */}
              <div className="absolute w-[70%] h-[60%] top-0 left-0 bg-[#ffffff01] rounded-[26px] shadow-[0px_0px_15px_#1890ff] opacity-0" />
              <div className="absolute w-[70%] h-[60%] top-[40%] left-[30%] bg-[#ffffff01] rounded-[26px] shadow-[0px_0px_15px_#1890ff] opacity-0" />

              {/* Card background */}
              <div className="absolute w-[calc(100%+2px)] h-[calc(100%-1px)] top-px left-0 bg-[#151a2d] rounded-xl border border-solid border-[#2a3050]" />

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
                <img
                  className="relative w-[72px] h-[72px] mt-[-1px] mb-[-1px] ml-[-1px] border-2 border-solid border-[#ff5a44] object-cover rounded-full"
                  alt={trader.name}
                  src={trader.avatar}
                />

                <div className="flex flex-col items-start gap-1 relative flex-1">
                  <p className="self-stretch font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#f0f0f0] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] relative mt-[-1px] [font-style:var(--heading-h3-font-style)]">
                    {trader.name}
                  </p>

                  <p className="self-stretch font-KPI-primary font-[number:var(--KPI-primary-font-weight)] text-[#00d084] text-[length:var(--KPI-primary-font-size)] leading-[var(--KPI-primary-line-height)] relative tracking-[var(--KPI-primary-letter-spacing)] [font-style:var(--KPI-primary-font-style)]">
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

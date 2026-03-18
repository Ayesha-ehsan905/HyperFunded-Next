import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Testimonial data
const testimonials = [
  {
    name: "Floyd Miles",
    payout: "$8,450",
    avatarSrc: "/ellipse-10-3.png",
    flagSrc: "/ellipse-4577.png",
    flagAlt: "Ellipse",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Darrell Steward",
    payout: "$4,900",
    avatarSrc: "/ellipse-11-1.png",
    flagSrc: "/ellipse-4578.png",
    flagAlt: "Ellipse",
    quote:
      "Clean platform, clear rules, fast payouts. Everything a funded trader needs. Already scaling to $100K account.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/ellipse-10-2.png",
    flagSrc: "/france.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-60 py-[120px] self-stretch w-full bg-[#0d0f17]">
      {/* Section header */}
      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        {/* Label */}
        <div className="flex items-center justify-center self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#ff5a44] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
          Testimonials
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch font-display-large font-[number:var(--display-large-font-weight)] text-[#f0f0f0] text-[length:var(--display-large-font-size)] text-center tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
            Traders Who Got Funded
          </h2>

          <p className="self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#8a8fa8] text-[length:var(--body-semobold20-font-size)] text-center tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
            Real traders. Real payouts. Real results.
          </p>
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="flex items-stretch justify-center gap-8 self-stretch w-full">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex-1 bg-[#111423] rounded-xl border border-solid border-[#2a3050] flex flex-col"
          >
            <CardContent className="flex flex-col gap-6 px-8 py-4 h-full">
              {/* Avatar, name, payout, flag row */}
              <div className="flex items-center gap-4 self-stretch w-full">
                {/* Avatar */}
                <img
                  className="w-[50px] h-[50px] border-2 border-solid border-[#ff5a44] object-cover rounded-full flex-shrink-0"
                  alt={testimonial.name}
                  src={testimonial.avatarSrc}
                />

                {/* Name and payout */}
                <div className="flex flex-col items-start gap-1 flex-1">
                  <span className="self-stretch font-body-semobold20 font-[number:var(--body-semobold20-font-weight)] text-[#f0f0f0] text-[length:var(--body-semobold20-font-size)] tracking-[var(--body-semobold20-letter-spacing)] leading-[var(--body-semobold20-line-height)] [font-style:var(--body-semobold20-font-style)]">
                    {testimonial.name}
                  </span>

                  <span className="self-stretch font-KPI-bold24 font-[number:var(--KPI-bold24-font-weight)] text-[#00d084] text-[length:var(--KPI-bold24-font-size)] tracking-[var(--KPI-bold24-letter-spacing)] leading-[var(--KPI-bold24-line-height)] [font-style:var(--KPI-bold24-font-style)]">
                    {testimonial.payout}
                  </span>
                </div>

                {/* Flag */}
                <img
                  className="w-[34px] h-[34px] border border-solid border-[#2a3050] object-cover flex-shrink-0"
                  alt={testimonial.flagAlt}
                  src={testimonial.flagSrc}
                />
              </div>

              {/* Quote */}
              <p className="self-stretch font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <Separator className="bg-[#2a3050] h-px w-full" />

              {/* Account Size row */}
              <div className="flex items-start gap-6 self-stretch w-full">
                <span className="flex-1 font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                  Account Size
                </span>

                <span className="w-fit font-KPI-secondary font-[number:var(--KPI-secondary-font-weight)] text-[#f0f0f0] text-[length:var(--KPI-secondary-font-size)] tracking-[var(--KPI-secondary-letter-spacing)] leading-[var(--KPI-secondary-line-height)] whitespace-nowrap [font-style:var(--KPI-secondary-font-style)]">
                  {testimonial.accountSize}
                </span>
              </div>

              {/* Date row */}
              <div className="flex items-start gap-6 self-stretch w-full">
                <span className="flex-1 font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#8a8fa8] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
                  Date
                </span>

                <span className="w-fit font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#f0f0f0] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                  {testimonial.date}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Icons/logos strip */}
      <img className="self-stretch w-full" alt="Icons" src="/icons.svg" />
    </section>
  );
};

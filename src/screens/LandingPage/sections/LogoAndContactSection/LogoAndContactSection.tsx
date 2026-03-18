export const LogoAndContactSection = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-12 px-60 py-[120px] bg-[#0d0f17]">
      {/* Text heading block */}
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Subheading label */}
        <p className="flex items-center justify-center w-full mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#ff5a44] text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
          Trusted Worldwide
        </p>

        {/* Main heading */}
        <h2 className="flex items-center justify-center w-full font-display-large font-[number:var(--display-large-font-weight)] text-[length:var(--display-large-font-size)] text-center tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
          <span className="text-[#f0f0f0] font-display-large [font-style:var(--display-large-font-style)] font-[number:var(--display-large-font-weight)] leading-[var(--display-large-line-height)] text-[length:var(--display-large-font-size)] tracking-[var(--display-large-letter-spacing)]">
            Over 10K+ Organizations Use Our Platform
          </span>
        </h2>
      </div>

      {/* Brands image */}
      <img className="w-full" alt="Brands" src="/brands.svg" />
    </section>
  );
};

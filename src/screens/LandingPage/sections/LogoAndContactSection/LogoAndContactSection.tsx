"use client";

import brands from "../../../../../public/images/Brands.png";
import brandsLight from "../../../../../public/images/BrandsLight.png";
import Image from "next/image";
import { useTheme } from "../../../../lib/theme-context";
import { LOGO_CONTACT_CONTENT } from "../../utils/constants";
export const LogoAndContactSection = () => {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col w-full items-center justify-center gap-12 sectionSpacing ">
      {/* Text heading block */}
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Subheading label */}
        <p className="flex items-center justify-center w-full mt-px hf-section-title">
          {LOGO_CONTACT_CONTENT.title}
        </p>

        {/* Main heading */}
        <h2 className="flex items-center justify-center w-full hf-section-heading">
          {LOGO_CONTACT_CONTENT.heading}
        </h2>
      </div>

      {/* Brands image */}
      <Image
        className="w-full object-contain"
        alt="Brands"
        src={theme === "dark" ? brands : brandsLight}
      />
    </section>
  );
};

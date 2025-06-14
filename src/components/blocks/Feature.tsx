import React from "react";
import Image from "next/image";

export interface FeatureProps {
  feature: {
    icon: string;
    alt: string;
    text: string;
  };
}

export const Feature: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="flex flex-1 select-none flex-col items-center gap-4 rounded-2xl bg-white p-4 shadow-lg md:p-8">
      <div className="relative h-14 w-14 md:h-[8.625rem] md:w-[8.625rem]">
        <Image
          src={feature.icon}
          alt={feature.alt}
          fill
          sizes="auto"
          unoptimized
        />
      </div>

      <p className="text-center text-xs font-normal text-[#1B1B1B] md:text-xl">
        {feature.text}
      </p>
    </div>
  );
};

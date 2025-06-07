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
    <div className="flex flex-1 select-none flex-col items-center gap-4 rounded-[1.75rem] bg-white p-8 shadow-lg">
      <Image src={feature.icon} alt={feature.alt} width={138} height={138} />
      <p className="text-center text-xl font-normal text-[#1B1B1B]">
        {feature.text}
      </p>
    </div>
  );
};

import React from "react";
import { FeatureProps } from "./Feature";
import Image from "next/image";

const SmFeature: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="flex flex-1 select-none flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg md:p-8">
      <div className="relative h-12 w-12 md:h-16 md:w-16">
        <Image
          src={feature.icon}
          alt={feature.alt}
          fill
          sizes="auto"
          unoptimized
        />
      </div>
      <p className="text-xs text-[#1B1B1B] md:text-xl">{feature.text}</p>
    </div>
  );
};

export default SmFeature;

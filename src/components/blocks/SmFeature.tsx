import React from "react";
import { FeatureProps } from "./Feature";
import Image from "next/image";

const SmFeature: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="flex flex-1 select-none flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg">
      <Image src={feature.icon} alt={feature.alt} width={64} height={64} />
      <p className="text-xl text-[#1B1B1B]">{feature.text}</p>
    </div>
  );
};

export default SmFeature;

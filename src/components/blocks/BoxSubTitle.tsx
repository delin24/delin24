import React from "react";
import { SectionProps } from "./Section";

const BoxSubTitle: React.FC<SectionProps> = ({ children, className = "" }) => {
  return (
    <p
      className={`select-none pb-4 text-xs md:w-2/3 md:pb-6 md:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

export default BoxSubTitle;

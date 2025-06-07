import React from "react";
import { SectionProps } from "./Section";

const BoxSubTitle: React.FC<SectionProps> = ({ children, className = "" }) => {
  return (
    <p className={`w-2/3 select-none pb-6 text-xl ${className}`}>{children}</p>
  );
};

export default BoxSubTitle;

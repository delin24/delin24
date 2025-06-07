import React from "react";
interface SectionTitleProps {
  title: string;
  className?: string;
}

const BoxTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "text-[#EFEFEF]",
}) => {
  return (
    <h2
      className={`text-shadow-lg select-none pb-[2rem] text-3xl text-[2rem] font-bold ${className}`}
    >
      {title}
    </h2>
  );
};

export default BoxTitle;

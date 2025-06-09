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
      className={`text-shadow-lg select-none pb-4 text-lg font-bold md:pb-[2rem] md:text-[2rem] ${className}`}
    >
      {title}
    </h2>
  );
};

export default BoxTitle;

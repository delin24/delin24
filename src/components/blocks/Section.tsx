import React from "react";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`w-full rounded-[1.75rem] py-6 md:py-[5rem] ${className}`}
    >
      {children}
    </section>
  );
};

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
    <section className={`w-full rounded-2xl py-6 md:py-[5rem] ${className}`}>
      {children}
    </section>
  );
};

"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { useModalStore } from "@/stores/useModalStore";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  className?: string;
  goalId?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  image,
  className,
  goalId,
}) => {
  const { open } = useModalStore();
  return (
    <section
      className={`relative h-[334px] overflow-hidden rounded-2xl shadow-2xl shadow-[#2D2D5840] md:h-[47.125rem] ${className ?? ""}`}
    >
      <div className="flex w-full flex-col gap-4 px-4 py-6 md:gap-6 md:px-10 md:py-20">
        <h1 className="text-[22px] font-bold md:w-2/3 md:text-5xl">{title}</h1>
        <h2 className="w-4/5 text-xs md:w-2/3 md:pb-6 md:text-xl">
          {subtitle}
        </h2>
        <Button
          text={buttonText}
          onClick={() => open("form")}
          goalId={goalId}
        />
      </div>
      <Image src={image} alt="main" fill className="-z-10" priority />
    </section>
  );
};

export default Hero;

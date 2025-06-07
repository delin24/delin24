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
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  image,
  className,
}) => {
  const { open } = useModalStore();
  return (
    <section
      className={`rounded-4xl relative h-[47.125rem] overflow-hidden shadow-2xl shadow-[#2D2D5840] ${className ?? ""}`}
    >
      <div className="flex w-full flex-col gap-6 px-10 py-20">
        <h1 className="w-2/3 text-5xl font-bold">{title}</h1>
        <h2 className="w-2/3 pb-6 text-xl">{subtitle}</h2>
        <Button text={buttonText} onClick={open} />
      </div>
      <Image src={image} alt="main" fill className="-z-10" priority />
    </section>
  );
};

export default Hero;

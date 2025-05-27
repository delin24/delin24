import React from "react";
import Image from "next/image";

const Button = ({ text, icon }: { text: string; icon?: string }) => {
  return (
    <button
      className={`
        flex
        w-fit
        gap-4
        rounded-2xl
        px-24
        py-6
        text-xl
        font-semibold
        text-white
        shadow-lg
        cursor-pointer
        transition-all
        duration-200
        ease-in-out
        hover:bg-[#EF7035]
        hover:shadow-lg
        active:scale-95
        ${icon ? "border-2 border-[#F7783D]" : "bg-[#F7783D]"}
      `}
    >
      {text}
      {icon && <Image src={icon} alt="arrowRight" width={24} height={24} />}
    </button>
  );
};

export default Button;

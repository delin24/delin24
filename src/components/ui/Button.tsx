import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  text,
  icon,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${className} flex w-fit items-center gap-4 rounded-[10px] px-11 py-4 text-xs font-semibold text-white shadow-lg transition-all duration-200 ease-in-out md:rounded-2xl md:px-24 md:py-6 md:text-xl ${icon ? "border-2 border-[#F7783D]" : "bg-[#F7783D]"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-[#EF7035] active:scale-95"} `}
      onClick={onClick}
    >
      {text}
      {icon && (
        <Image src={icon} alt="arrowRight" width={24} height={24} unoptimized />
      )}
    </button>
  );
};

export default Button;

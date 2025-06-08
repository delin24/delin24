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
      className={`${className} flex w-fit gap-4 rounded-2xl px-24 py-6 text-xl font-semibold text-white shadow-lg transition-all duration-200 ease-in-out ${icon ? "border-2 border-[#F7783D]" : "bg-[#F7783D]"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-[#EF7035] active:scale-95"} `}
      onClick={onClick}
    >
      {text}
      {icon && <Image src={icon} alt="arrowRight" width={24} height={24} />}
    </button>
  );
};

export default Button;

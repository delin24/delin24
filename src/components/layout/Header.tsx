"use client";

import React, { useEffect, useRef, useState } from "react";
import mainLogo from "@public/mainLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useMobileMenuStore } from "@/stores/useMobileMenuStore";
import iconCall from "@public/icons/iconCall.png";

const Header = () => {
  const { open: openMenu } = useMobileMenuStore();

  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0); // используем useRef вместо useState
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;

      setHasScrolled(currentY > 0);

      if (goingDown && currentY > 80) {
        // Скролл вниз — скрыть мгновенно
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsVisible(false);
      } else {
        // Скролл вверх — задержка
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
        }, 0);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header
      className={`sticky top-2 z-40 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[150%]"}`}
    >
      <div
        className={`flex select-none items-center justify-between rounded-2xl p-4 shadow-2xl shadow-[#2D2D5840] backdrop-saturate-150 transition-all duration-500 md:px-10 md:py-6 ${
          hasScrolled ? "bg-[#48896E]/80 backdrop-blur-md" : "bg-[#48896E]"
        }`}
      >
        <Link href="/" className="w-10 md:w-full">
          <Image src={mainLogo} alt="Логотип" width={117} height={40} />
        </Link>

        <div
          className="flex cursor-pointer flex-col gap-1 md:hidden"
          onClick={openMenu}
        >
          <div className="h-0.5 w-6 rounded-2xl bg-gray-200"></div>
          <div className="h-0.5 w-6 rounded-2xl bg-gray-200"></div>
          <div className="h-0.5 w-6 rounded-2xl bg-gray-200"></div>
        </div>

        <nav className="hidden items-center gap-20 text-xl font-normal md:flex">
          <Link href="/customs-clearance" className="hover:text-gray-200">
            Таможенное&nbsp;оформление
          </Link>
          <Link href="/sourcing" className="hover:text-gray-200">
            Поиск&nbsp;поставщиков
          </Link>

          <Link href="tel:+73912051811" className="">
            <div className="flex items-center gap-1">
              <div className="relative h-6 w-6 flex-1">
                <Image
                  src={iconCall}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover"
                />
              </div>
              <p className="flex-1">+7&nbsp;931&nbsp;205&nbsp;18&nbsp;11</p>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

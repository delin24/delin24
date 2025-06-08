import React from "react";
import mainLogo from "@public/mainLogo.png";
import Image from "next/image";
import Link from "next/link";
import iconCall from "@public/icons/iconCall.png";

const Header = () => {
  return (
    <header className="flex select-none items-center justify-between rounded-3xl bg-[#48896E] px-10 py-6 shadow-2xl shadow-[#2D2D5840]">
      <Link href="/">
        <Image src={mainLogo} alt="Логотип" width={117} height={40} />
      </Link>

      <nav className="flex gap-20 text-xl font-normal">
        <Link href="/customs-clearance" className="hover:text-gray-200">
          Таможенное оформление
        </Link>

        <Link href="/sourcing" className="hover:text-gray-200">
          Поиск поставщиков
        </Link>

        <Link href="tel:+73912051811" className="flex gap-2">
          <Image src={iconCall} alt="Звонок" width={24} height={24} />
          <span className="hover:text-gray-200">+7 391 205 18 11</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

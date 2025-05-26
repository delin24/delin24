import React from "react";
import mainLogo from "../../../public/mainLogo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" select-none col-span-12 bg-[#48896E] rounded-3xl px-10 py-6 flex justify-between items-center">
      <Link href="/">
        <Image src={mainLogo} alt="Логотип" width={117} height={40} />
      </Link>

      <nav>
        <ul className="flex gap-20 text-xl">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Таможенное оформление
            </Link>
          </li>
          <li>
            <Link href="/" className=" hover:text-gray-200">
              Калькулятор
            </Link>
          </li>
          <li>
            <Link href="/" className=" hover:text-gray-200">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

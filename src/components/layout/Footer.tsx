import React from "react";
import mainLogo from "@public/mainLogo.png";
import iconCall from "@public/icons/iconCall.png";
import iconMail from "@public/icons/iconMail.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="items-top col-span-12 select-none justify-between gap-48 rounded-2xl bg-[#48896E] px-4 py-6 md:flex md:px-10 md:py-20">
      <Link
        href="/"
        className="relative flex h-[14px] w-10 items-start pb-8 md:h-[40px] md:w-[117px]"
      >
        <Image
          src={mainLogo}
          alt="Логотип"
          fill
          sizes="auto"
          className="object-contain"
        />
      </Link>

      <nav className="flex flex-col gap-2 md:flex-row md:gap-10">
        <div className="">
          <span className="flex pb-2 text-xs font-semibold md:pb-6 md:text-xl">
            Меню сайта
          </span>
          <ul className="flex flex-col text-xs md:gap-4 md:text-xl">
            <li className="flex flex-col md:min-w-[17.5rem]">
              <Link href="/" className="hover:text-gray-200">
                Главная
              </Link>
            </li>
            <li className="flex flex-col md:min-w-[17.5rem]">
              <Link href="/customs-clearance" className="hover:text-gray-200">
                Таможенное оформление
              </Link>
            </li>
            <li>
              <Link href="/sourcing" className="hover:text-gray-200">
                Поиск поставщиков
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="flex pb-2 text-xs font-semibold md:pb-6 md:text-xl">
            Адрес компании
          </span>
          <ul className="text-xs md:flex md:gap-6 md:text-xl">
            <li className="flex flex-col md:min-w-[17.5rem]">
              г. Красноярск, ул. <br className="hidden md:flex" />
              Иртышская, д. 2а пом. 2
            </li>
          </ul>
        </div>
        <div>
          <span className="flex pb-2 text-xs font-semibold md:pb-6 md:text-xl">
            Контакты
          </span>
          <ul className="flex gap-4 text-xs md:flex-col md:gap-6 md:text-xl">
            <li className="flex items-center gap-1">
              <div className="relative h-6 w-6">
                <Image
                  src={iconCall}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover"
                />
              </div>
              <p className="select-text">+7 931 205 18 11</p>
            </li>
            <li className="flex items-center gap-1">
              <div className="relative h-5 w-5">
                <Image
                  src={iconMail}
                  alt=""
                  fill
                  sizes="auto"
                  className="object-cover"
                />
              </div>
              <p className="flex select-text items-center">import@delin24.ru</p>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

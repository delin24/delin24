import React from "react";
import mainLogo from "@public/mainLogo.png";
import iconCall from "@public/icons/iconCall.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="items-top col-span-12 select-none justify-between gap-48 rounded-3xl bg-[#48896E] md:flex md:px-10 md:py-20">
      <Link href="/">
        <Image src={mainLogo} alt="Логотип" width={117} height={40} />
      </Link>

      <nav>
        <ul className="gap-6 text-xl md:flex">
          <li className="flex flex-col gap-4 md:min-w-[17.5rem]">
            <span className="pb-2 font-semibold">Меню сайта</span>
            <Link href="/customs-clearance" className="hover:text-gray-200">
              Таможенное оформление
            </Link>

            <Link href="/sourcing" className="hover:text-gray-200">
              Поиск поставщиков
            </Link>

            <Link href="/" className="hover:text-gray-200">
              Контакты
            </Link>
          </li>
          <li className="flex min-w-[17.5rem] flex-col gap-4">
            <span className="pb-2 font-semibold">Контакты</span>
            <Link href="tel:+73912051811" className="flex gap-2">
              <Image src={iconCall} alt="Звонок" width={24} height={24} />
              <span className="hover:text-gray-200">+7 391 205 18 11</span>
            </Link>

            <Link
              href="mailto:import@delin24.ru"
              className="hover:text-gray-200"
            >
              import@delin24.ru
            </Link>
          </li>
          <li className="flex min-w-[17.5rem] flex-col gap-4">
            <span className="pb-2 font-semibold">Адрес компании</span>
            <p>
              г. Красноярск,
              <br /> ул. Иртышская, <br />
              д. 2а пом. 2
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

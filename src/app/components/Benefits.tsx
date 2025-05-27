import React from "react";
import iconCompare from "../../../public/iconCompare.png";
import iconCreate from "../../../public/iconCreate.png";
import iconPuzzle from "../../../public/iconPuzzle.png";
import Image from "next/image";
import Button from "./Button";
import iconArrow from "../../../public/iconArrow.png";

const benefits = [
  {
    icon: iconCompare,
    alt: "iconCompare",
    text: "Внешнеэкономическая деятельность под ключ",
  },
  {
    icon: iconCreate,
    alt: "iconCreate",
    text: "Таможенное декларирование (снижаем пошлины, избегаем штрафов)",
  },
  {
    icon: iconPuzzle,
    alt: "iconPuzzle",
    text: "Поиск и подбор надёжных поставщиков (проверка репутации, аудит фабрик)",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-10 bg-[#48896E] rounded-3xl">
      <h2 className="text-3xl font-semibold pb-8">
        Аутсорсинг внешнеэкономической деятельности
      </h2>
      <p className="text-xl pb-6">
        Берём на себя все этапы и риски внешнеэкономической деятельности,
        <br />
        чтобы вы могли сосредоточиться на развитии бизнеса
      </p>
      <div className="flex gap-6 w-full pb-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col gap-4 bg-white rounded-2xl p-8 shadow-lg"
          >
            <Image
              src={benefit.icon}
              alt={benefit.alt}
              width={64}
              height={64}
            />
            <p className="text-[#1B1B1B] text-xl">{benefit.text}</p>
          </div>
        ))}
      </div>
      <Button text="Получить консультацию" icon={iconArrow.src} />
    </section>
  );
};

export default Benefits;

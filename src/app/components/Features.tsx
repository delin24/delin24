import React from "react";
import Image from "next/image";
import iconFullCircle from "../../../public/iconFullCircle.png";
import iconShield from "../../../public/iconShield.png";
import iconTrendingDown from "../../../public/iconTrendingDown.png";

const features = [
  {
    icon: iconFullCircle,
    alt: "iconFullCircle",
    text: "Полный цикл услуг — от поиска поставщика до таможенного оформления",
  },
  {
    icon: iconTrendingDown,
    alt: "iconTrendingDown",
    text: "Снижаем расходы на 15–30% за счёт оптимизации пошлин и логистики",
  },
  {
    icon: iconShield,
    alt: "iconShield",
    text: "Гарантия безопасности — проверка поставщиков, страховка, юридическая защита",
  },
];

const Features = () => {
  return (
    <section className="grid grid-cols-12 gap-8 py-20 select-none">
      <h2 className="text-3xl font-semibold col-span-12">С нами надёжно</h2>

      {features.map((feature, index) => (
        <article
          key={index}
          className="col-span-4 flex flex-col items-center gap-4 bg-white rounded-2xl p-8"
        >
          <Image
            src={feature.icon}
            alt={feature.alt}
            width={138}
            height={138}
          />
          <p className="text-[#1B1B1B] text-center text-xl">{feature.text}</p>
        </article>
      ))}
    </section>
  );
};

export default Features;

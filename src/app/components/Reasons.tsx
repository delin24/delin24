import React from "react";
import iconInsurance from "../../../public/iconInsurance.png";
import iconManager from "../../../public/iconManager.png";
import iconSuppliers from "../../../public/iconSuppliers.png";
import iconLegal from "../../../public/iconLegal.png";
import Button from "./Button";
import Image from "next/image";
import iconArrow from "../../../public/iconArrow.png";

const reasons = [
  {
    icon: iconInsurance,
    alt: "Страхование сделок",
    title: "Страхование сделок",
    text: "Защита от финансовых потерь",
  },
  {
    icon: iconManager,
    alt: "Персональный менеджер",
    title: "Персональный менеджер 24/7",
    text: "Оперативное решение любых вопросов круглосуточно",
  },
  {
    icon: iconSuppliers,
    alt: "Подбор иностранных поставщиков",
    title: "Подбор иностранных поставщиков",
    text: "Эксперты со знанием языков и локального рынка",
  },
  {
    icon: iconLegal,
    alt: "Юридическая поддержка",
    title: "Юридическая поддержка",
    text: "Сопровождение контрактов и споров",
  },
];

const Reasons = () => {
  return (
    <section className="select-none py-20">
      <h2 className="text-3xl font-semibold pb-8 text-shadow-lg">
        Почему нас выбирают
      </h2>
      <p className="text-xl pb-6 text-shadow-lg">
        Мы не просто оказываем услуги — мы защищаем ваш бизнес от рисков.
      </p>

      <ul className="grid grid-cols-2 gap-6 pb-10">
        {reasons.map((reason, index) => (
          <li
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md text-xl text-[#1B1B1B]"
          >
            <Image src={reason.icon} alt={reason.alt} width={48} height={48} />
            <h3 className=" font-semibold pt-4">{reason.title}</h3>
            <p className=" pt-2">{reason.text}</p>
          </li>
        ))}
      </ul>

      <Button text="Оставить заявку" icon={iconArrow.src} />
    </section>
  );
};

export default Reasons;

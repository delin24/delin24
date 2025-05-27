import React from "react";
import Image from "next/image";
import imageChart3D from "../../../public/chart3D.jpg";

const VedAdvantages = () => {
  return (
    <section className="select-none py-20 px-10 bg-[#48896E] rounded-3xl text-white">
      <div className="flex gap-6">
        <Image
          src={imageChart3D}
          alt="3D график"
          className="rounded-3xl"
          width={604}
          height={395}
        />

        <div className="flex flex-col">
          <h2 className="pb-8 text-3xl font-semibold leading-snug">
            Почему аутсорсинг ВЭД выгоднее, <br className="hidden md:block" />
            чем самостоятельное оформление
          </h2>
          <p className="pb-6 text-xl">
            Неправильное оформление ВЭД может стоить вам миллионов рублей.
          </p>
          <p className="pb-4 text-2xl">Мы исключаем</p>
          <ul className="list-disc pl-5 space-y-1 ">
            <li>Штрафы и доначисления из-за ошибок в декларировании</li>
            <li>Конфискацию груза на таможне</li>
            <li>Финансовые потери из-за недобросовестных поставщиков</li>
            <li>
              Уголовную ответственность за нарушение таможенного
              законодательства
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VedAdvantages;

import React from "react";
import Image from "next/image";
import mainCTA from "../../../public/mainCTA.jpg";
import Button from "./Button";

const Main = () => {
  return (
    <div className="h-[47.125rem] relative rounded-4xl">
      <div className="px-10 py-20 gap-6 flex flex-col">
        <h1 className="text-5xl font-bold">Аутсорсинг ВЭД под ключ</h1>
        <h2 className="pb-6 text-xl">
           — от поиска поставщика до таможенного оформления. Бесплатный аудит
          вашей <br />
          внешнеторговой сделки за 24 часа!
        </h2>
        <Button text="Оставить заявку" />
      </div>
      <Image
        src={mainCTA}
        alt="main"
        fill
        className="rounded-3xl object-cover object-[center_38%] -z-10"
      />
    </div>
  );
};

export default Main;

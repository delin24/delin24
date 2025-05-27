import React from "react";
import Image from "next/image";
import handshakeImg from "../../../public/handshakeImg.jpg";
const VedTeam = () => {
  return (
    <section className="select-none grid grid-cols-2 gap-6 py-2">
      <div className="flex flex-col gap-4 rounded-4xl bg-[#587DBB] px-10 py-20">
        <h2 className="pb-6 text-[2rem] font-semibold">Наша команда</h2>
        <div className="text-[#1B1B1B] flex flex-col gap-4">
          <div className="flex gap-4 bg-white rounded-2xl">
            <div className="relative before:absolute before:-inset-[2px] before:border-2 before:border-[#587DBB] before:rounded-2xl py-5 px-10 text-[2.5rem]">
              10+
            </div>
            <p className="text-xl items-center justify-center flex flex-1 ">
              лет в международной торговле
              <br /> и таможенном декларировании
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <div className="py-5 px-10 bg-white rounded-2xl">
              <p className=" text-xl items-center justify-center flex">
                Таможенные брокеры
              </p>
            </div>
            <div className="py-5 px-10 bg-white rounded-2xl">
              <p className="text-xl items-center justify-center flex">
                Юристы по ВЭД
              </p>
            </div>
          </div>

          <div className="py-5 px-10 bg-white rounded-2xl">
            <p className="text-xl items-center justify-center flex ">
              Специалисты по закупкам за рубежом
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={handshakeImg}
          alt="Рукопожатие — сотрудничество"
          className="rounded-4xl"
          fill
        />
      </div>
    </section>
  );
};

export default VedTeam;

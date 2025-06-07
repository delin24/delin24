import React from "react";
import Button from "./Button";

const Form = ({ className = "text-[#EFEFEF]" }) => {
  return (
    <form className={`flex flex-col gap-6 ${className} `}>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Имя"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Телефон"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
        />
      </div>
      <input
        type="text"
        placeholder="Эл. адрес"
        className="rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Комментарий"
        className="rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
      />
      <label className="inline-flex cursor-pointer select-none items-center gap-4 pb-4">
        <input type="checkbox" className="peer hidden" />
        <span className="h-[2rem] w-[2rem] rounded-lg border-2 border-[#F7986C] transition peer-checked:bg-[#F7986C]" />
        <span className="text-[1.25rem] font-normal">
          Я ознакомлен и согласен с политикой конфиденциальности
        </span>
      </label>
      <div className="flex justify-center">
        <Button text="Отправить" />
      </div>
    </form>
  );
};

export default Form;

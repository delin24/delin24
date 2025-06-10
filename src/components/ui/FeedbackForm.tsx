"use client";
import React, { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import { useModalStore } from "@/stores/useModalStore";

const Form = ({ className = "text-[#EFEFEF]" }) => {
  const { open } = useModalStore();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      alert("Пожалуйста, согласитесь с политикой конфиденциальности.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }

      await toast.promise(new Promise((resolve) => setTimeout(resolve, 500)), {
        loading: "Отправка...",
        success: "Спасибо, мы с вами свяжемся!",
        error: "Ошибка при отправке. Попробуйте позже.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast.error("Ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <form
      className={`flex flex-col gap-2 md:gap-6 ${className} `}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Имя"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Телефон"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
          title="Пожалуйста, введите номер телефона"
          required
          pattern="[0-9]{9,}" // только цифры, минимум 9
          inputMode="numeric" // открывает цифровую клавиатуру на мобилках
        />
      </div>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Эл. адрес"
        className="rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
        title="Укажите корректный email"
        required
      />
      <input
        name="message"
        value={formData.message}
        onChange={handleChange}
        type="text"
        placeholder="Комментарий"
        className="rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
      />
      <label className="relative inline-flex cursor-pointer items-center gap-4 pb-4">
        <input
          type="checkbox"
          required
          onChange={(e) => setIsAgreed(e.target.checked)}
          className="peer absolute h-full w-full cursor-pointer opacity-0"
        />
        <span className="h-[20px] w-[20px] rounded-lg border-2 border-[#F7986C] transition-all peer-checked:bg-[#F7986C] md:h-[2rem] md:w-[2rem]" />
        <span className="text-[10px] font-normal md:text-[1rem]">
          Я ознакомлен и согласен с&nbsp;
          <button
            type="button"
            onClick={() => open("policy")}
            className="underline hover:text-orange-500"
          >
            политикой конфиденциальности
          </button>
        </span>
      </label>

      <div className="flex justify-center">
        <Button text="Отправить" disabled={false} />
      </div>
    </form>
  );
};

export default Form;

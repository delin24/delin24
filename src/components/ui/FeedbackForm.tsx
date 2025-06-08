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
  const [isAgreed, setIsAgreed] = useState(false);

  const isDisabled =
    !isAgreed ||
    !formData.name.trim() ||
    !formData.phone.trim() ||
    !formData.email.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      className={`flex flex-col gap-6 ${className} `}
      onSubmit={handleSubmit}
    >
      <div className="flex gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Имя"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="phone"
          placeholder="Телефон"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
          required
        />
      </div>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Эл. адрес"
        className="rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
        required
      />
      <input
        name="message"
        value={formData.message}
        onChange={handleChange}
        type="text"
        placeholder="Комментарий"
        className="rounded-xl border-2 border-[#F7986C] px-4 py-4 focus:outline-none"
      />
      <label className="inline-flex cursor-pointer select-none items-center gap-4 pb-4">
        <input
          type="checkbox"
          className="peer hidden"
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        <span className="h-[2rem] w-[2rem] rounded-lg border-2 border-[#F7986C] transition peer-checked:bg-[#F7986C]" />
        <span className="text-[1.25rem] font-normal">
          Я ознакомлен и согласен с{" "}
          <button
            type="button"
            onClick={() => open("policy")}
            className="text-orange-600 underline hover:text-orange-500"
          >
            политикой конфиденциальности
          </button>
        </span>
      </label>

      <div className="flex justify-center">
        <Button text="Отправить" disabled={isDisabled} />
      </div>
    </form>
  );
};

export default Form;

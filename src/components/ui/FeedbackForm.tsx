"use client";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { FormSchema, formSchema } from "../../formSchema";
import Button from "./Button";
import toast from "react-hot-toast";
import { useModalStore } from "@/stores/useModalStore";

const Form = ({
  className = "text-[#EFEFEF]",
  goalId,
}: {
  className?: string;
  goalId?: string;
}) => {
  const { open } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchema>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      isAgreed: false,
    },
  });

  const onSubmit = async (data: FormSchema) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }

      await toast.promise(new Promise((resolve) => setTimeout(resolve, 500)), {
        loading: "Отправка...",
        success: "Спасибо, мы с вами свяжемся!",
        error: "Ошибка при отправке. Попробуйте позже.",
      });

      reset(); // очищает форму
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast.error("Ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <form
      className={`flex flex-col gap-2 md:gap-6 ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <div className="w-full">
          <input
            {...register("name")}
            type="text"
            placeholder="Имя"
            className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="w-full">
          <input
            {...register("phone")}
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
            inputMode="numeric"
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Эл. адрес"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("message")}
          type="text"
          placeholder="Комментарий"
          className="w-full rounded-xl border-2 border-[#F7986C] px-4 py-4 placeholder:text-xs focus:outline-none md:placeholder:text-[1.25rem]"
        />
      </div>

      <div className="pb-4">
        <label className="inline-flex cursor-pointer items-center gap-4">
          <span className="relative">
            <input
              type="checkbox"
              {...register("isAgreed")}
              className="peer absolute left-0 top-0 h-[20px] w-[20px] opacity-0 md:h-[2rem] md:w-[2rem]"
            />
            <span className="block h-[20px] w-[20px] rounded-lg border-2 border-[#F7986C] transition-all peer-checked:bg-[#F7986C] md:h-[2rem] md:w-[2rem]" />
          </span>
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
        {errors.isAgreed && (
          <p className="text-xs text-red-500">{errors.isAgreed.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <Button text="Отправить" disabled={isSubmitting} goalId={goalId} />
      </div>
    </form>
  );
};

export default Form;

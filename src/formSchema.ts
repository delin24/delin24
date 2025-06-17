import {
  object,
  string,
  email,
  minLength,
  custom,
  boolean,
  pipe,
  InferInput,
} from "valibot";

export const formSchema = object({
  name: pipe(string(), minLength(2, "Имя слишком короткое")),
  phone: pipe(
    string(),
    minLength(9, "Введите минимум 9 цифр"),
    custom(
      (val) => /^\d+$/.test(val as string),
      "Телефон должен содержать только цифры",
    ),
  ),
  email: pipe(string(), email("Введите корректный email")),
  message: string(),
  isAgreed: pipe(
    boolean(),
    custom((val) => val === true, "Необходимо согласие"),
  ),
});

export type FormSchema = InferInput<typeof formSchema>;

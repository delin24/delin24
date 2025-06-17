import {
  object,
  string,
  pipe,
  minLength,
  custom,
  email,
  literal,
  InferOutput,
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
  isAgreed: literal(true, "Необходимо согласие"),
});

// ✅ вот правильный тип
export type FormSchema = InferOutput<typeof formSchema>;

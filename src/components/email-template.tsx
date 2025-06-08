import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  phone,
  email,
  message,
}: EmailTemplateProps) => (
  <div>
    <h1>Имя {name}!</h1>
    <h1>Телефон {phone}!</h1>
    <h1>Почта {email}!</h1>
    <h1>Комментарий {message}!</h1>
  </div>
);

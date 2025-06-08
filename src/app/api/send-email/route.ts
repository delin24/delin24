import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "delin24.ru <onboarding@resend.dev>",
      to: `import@delin24.ru`,
      subject: "Пришла новая заявка с сайта!",
      react: EmailTemplate({ name, phone, email, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useModalStore } from "@/stores/useModalStore";
import Modal from "@/components/ui/Modal";
import FeedbackForm from "@/components/ui/FeedbackForm";
import BoxTitle from "@/components/blocks/BoxTitle";
import { Toaster } from "react-hot-toast";
import Policy from "@/components/blocks/Policy";
import { YandexMetrika } from "@/components/YandexMetrika";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Delin 24",
//   description: "Аутсорсинг ВЭД под ключ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { type, close } = useModalStore();
  const isOpen = type !== "none";
  return (
    <html lang="en" className={` ${inter.className} flex justify-center`}>
      <body>
        <div className="flex flex-col justify-center gap-2 px-4 py-2 md:w-[90rem] md:px-16">
          <YandexMetrika
            id={Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID)}
          />
          <Toaster position="top-center" />
          <Header />
          {children}
          <Modal isOpen={isOpen} onClose={close}>
            {type === "form" && (
              <>
                <BoxTitle title="Оставьте заявку" className="text-black" />
                <FeedbackForm className="text-black" />
              </>
            )}

            {type === "policy" && <Policy />}
          </Modal>
          <Footer />
        </div>
      </body>
    </html>
  );
}

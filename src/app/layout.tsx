"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useModalStore } from "@/stores/useModalStore";
import Modal from "@/components/ui/Modal";
import FeedbackForm from "@/components/ui/FeedbackForm";
import BoxTitle from "@/components/blocks/BoxTitle";

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
  const { isOpen, close } = useModalStore();
  return (
    <html lang="en" className={` ${inter.className} flex justify-center`}>
      <body>
        <div className="flex w-[90rem] flex-col justify-center gap-2 px-16 py-2">
          <Header />
          {children}
          <Modal isOpen={isOpen} onClose={close}>
            <BoxTitle
              title="Оставьте заявку — и мы подберём для вас лучшее решение!"
              className="text-black"
            />
            <FeedbackForm className="text-black" />
          </Modal>
          <Footer />
        </div>
      </body>
    </html>
  );
}

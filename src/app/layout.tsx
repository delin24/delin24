"use client";
import Head from "next/head";

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
import { useMobileMenuStore } from "@/stores/useMobileMenuStore";
import MobileMenu from "@/components/layout/MobileMenu";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { type, close } = useModalStore();
  const { isOpen: isMenuOpen, close: closeMenu } = useMobileMenuStore();

  useEffect(() => {
    document.title = "Delin 24";
  }, []);

  const isOpen = type !== "none";
  return (
    <html lang="ru" className={` ${inter.className} flex justify-center`}>
      <body>
        <Head>
          <title>Delin 24 — ВЭД под ключ</title>
          <meta
            name="description"
            content="Аутсорсинг внешнеэкономической деятельности в Красноярске"
          />
          <meta property="og:title" content="Delin 24 — ВЭД под ключ" />
          <meta
            property="og:description"
            content="Сопровождение внешнеэкономической деятельности, таможенное оформление, поиск поставщиков"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://delin24.ru/preview.jpg" />
          <meta property="og:url" content="https://delin24.ru" />
        </Head>

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
          <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
          <Footer />
        </div>
      </body>
    </html>
  );
}

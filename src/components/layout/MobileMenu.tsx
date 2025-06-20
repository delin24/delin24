// components/ui/MobileMenu.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import iconCall from "@public/icons/iconCall.png";
import iconMail from "@public/icons/iconMail.png";
import iconClose from "@public/icons/iconClose.png";
import BoxTitle from "../blocks/BoxTitle";
import { useEffect } from "react";

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          onClick={onClose} // закрытие при клике по фону
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5,
            }}
            className="absolute right-0 top-0 flex h-full w-[80%] flex-col bg-[#587DBB]/60 p-6 text-xl text-white backdrop-blur-md backdrop-saturate-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="self-end">
              <Image src={iconClose} alt="" width={32} height={32} />
            </button>

            <Link href="/" onClick={onClose} className="hover:underline">
              <BoxTitle title="Аутсорсинг ВЭД" />
            </Link>
            <Link
              href="/customs-clearance"
              onClick={onClose}
              className="hover:underline"
            >
              <BoxTitle title="Таможенное оформление" />
            </Link>
            <Link
              href="/sourcing"
              onClick={onClose}
              className="hover:underline"
            >
              <BoxTitle title="Поиск поставщиков" />
            </Link>

            <div className="mt-auto flex gap-4">
              <button>
                <Link href="tel:+73912051811" className="">
                  <Image src={iconCall} alt="" width={32} height={32} />
                </Link>
              </button>
              <button>
                <Link href="mailto:import@delin.ru" className="">
                  <Image src={iconMail} alt="" width={32} height={32} />
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

"use client";
import Image from "next/image";
import { ReactNode, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import iconAdd from "@public/icons/iconAdd.png";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const [isClient, setIsClient] = useState(false);

  // Обработчик клавиши Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !isClient) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onClose}
    >
      <div
        className="relative rounded-xl bg-white p-4 shadow-xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 cursor-pointer text-2xl text-gray-500 transition hover:text-black md:right-10 md:top-12"
        >
          <Image
            src={iconAdd.src}
            alt="close_icon"
            width={32}
            height={32}
            className="rotate-45 items-center"
          />
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}

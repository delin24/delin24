"use client";

import React, { useState } from "react";
// import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({
  question,
}: {
  question: Array<{ question: string; answer: string }>;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex w-full cursor-pointer flex-col gap-4">
      {question.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer overflow-hidden rounded-xl border bg-white px-4 py-5 shadow md:px-8 md:py-9"
          onClick={() => toggle(index)}
        >
          <button className="flex w-full cursor-pointer items-center justify-between text-left text-xs font-bold text-black transition md:text-xl">
            {item.question}
            <AnimatePresence mode="wait">
              {activeIndex === index ? (
                <motion.img
                  key="remove"
                  src="/icons/iconRemove.png"
                  alt="remove"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="h-6 w-6 md:h-8 md:w-8"
                />
              ) : (
                <motion.img
                  key="add"
                  src="/icons/iconAdd.png"
                  alt="add"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="h-6 w-6 md:h-8 md:w-8"
                />
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence initial={true}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { height: "auto", opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-white"
              >
                <div className="pt-4 text-xs text-gray-600 md:text-xl">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

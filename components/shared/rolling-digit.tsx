"use client";

import { motion } from "framer-motion";

type RollingDigitProps = {
  digit: number;
};

export default function RollingDigit({ digit }: RollingDigitProps) {
  return (
    <motion.div
      style={{ y: `-${digit}em` }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col items-center"
    >
      {Array.from({ length: 10 }, (_, i) => i).map((i) => (
        <span key={i} className="flex items-center justify-center h-[1em]">
          {i}
        </span>
      ))}
    </motion.div>
  );
}

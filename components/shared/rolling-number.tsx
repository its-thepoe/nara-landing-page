"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type RollingNumberProps = {
  value: number;
};

export default function RollingNumber({ value }: RollingNumberProps) {
  const spring = useSpring(value, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });
  const display = useTransform(spring, (current) =>
    Number(current).toFixed(2)
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

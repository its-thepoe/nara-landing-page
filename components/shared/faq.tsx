"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Money, ShieldTick, DocumentText, SmsStar, UserOctagon, Messages2, Book } from "iconsax-react";

export type FaqItem = { 
  q: string; 
  a: string; 
  icon: string; 
};

interface FaqProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
  allowMultipleOpen?: boolean;
  className?: string;
  showIcons?: boolean;
}

// Icon mapping
const iconMap = {
  Money,
  ShieldTick,
  DocumentText,
  SmsStar,
  UserOctagon,
  Messages2,
  Book,
};

export default function Faq({ 
  items, 
  defaultOpenIndex = 0, 
  allowMultipleOpen = false,
  className = "",
  showIcons = true
}: FaqProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set(defaultOpenIndex !== -1 ? [defaultOpenIndex] : [])
  );

  const toggle = (idx: number) => {
    const next = new Set(openIndexes);
    
    if (allowMultipleOpen) {
      // Allow multiple items to be open
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
    } else {
      // Only allow one item to be open at a time
      if (next.has(idx)) {
        next.clear();
      } else {
        next.clear();
        next.add(idx);
      }
    }
    
    setOpenIndexes(next);
  };

  return (
    <div className={`w-full space-y-3 ${className}`}>
      {items.map((item, i) => {
        const open = openIndexes.has(i);
        const IconComponent = iconMap[item.icon as keyof typeof iconMap];
        return (
          <div key={item.q} className="rounded-lg border border-[#D0D5DD] bg-white">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-2 md:gap-3 p-3 md:p-5 text-left"
              aria-expanded={open}
            >
              {/* Icon - Visible on both mobile and desktop */}
              {showIcons && (
                <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded border border-[#F2F4F7] p-1 md:p-1.5">
                  {IconComponent && (
                    <>
                      <IconComponent size={16} color="#667085" variant="Outline" strokeWidth={1.2} className="md:hidden" />
                      <IconComponent size={20} color="#667085" variant="Outline" strokeWidth={1.2} className="hidden md:block" />
                    </>
                  )}
                </div>
              )}
              
              {/* Question */}
              <p className="flex-1 text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] font-medium text-[#101828]">
                {item.q}
              </p>
              
              {/* Arrow */}
              <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
                <motion.div
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ArrowRight size={18} color="#667085" className="md:hidden" />
                  <ArrowRight size={20} color="#667085" className="hidden md:block" />
                </motion.div>
              </div>
            </button>
            <AnimatePresence>
              {open && item.a && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut",
                    opacity: { duration: 0.2 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-3 md:px-5 pb-4 md:pb-5 pt-0">
                    <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#667085]">{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight, ArrowDown, Money, ShieldTick, DocumentText, SmsStar } from "iconsax-react";

type FaqItem = { q: string; a: string; icon: React.ComponentType<any> };

const ITEMS: FaqItem[] = [
  {
    q: "Is there a cost to join as a provider?",
    a: "No. Nara is completely free for therapists. There are no sign-up or subscription fees.",
    icon: Money,
  },
  {
    q: "How is patient privacy handled?",
    a: "We're HIPAA-compliant. Patient data is encrypted, and AI summaries are only visible with explicit consent.",
    icon: ShieldTick,
  },
  {
    q: "Can I customise the homework assignments?",
    a: "Yes! You can create custom assignments tailored to each client's needs, or choose from our library of evidence-based exercises. Track progress and send reminders automatically.",
    icon: DocumentText,
  },
  {
    q: "What does AI chat visibility look like?",
    a: "You'll see a summary of the client's AI interactions—only after they give permission. This helps you stay informed between sessions.",
    icon: SmsStar,
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const toggle = (idx: number) => {
    const next = new Set(openIndexes);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setOpenIndexes(next);
  };

  return (
    <div className="w-full space-y-3">
      {ITEMS.map((item, i) => {
        const open = openIndexes.has(i);
        return (
          <div key={item.q} className="rounded-lg border border-[#D0D5DD] bg-white">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-2 md:gap-3 p-3 md:p-5 text-left"
              aria-expanded={open}
            >
              {/* Icon - Visible on both mobile and desktop */}
              <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded border border-[#F2F4F7] p-1 md:p-1.5">
                <item.icon size={16} color="#667085" variant="Outline" strokeWidth={1.2} className="md:hidden" />
                <item.icon size={20} color="#667085" variant="Outline" strokeWidth={1.2} className="hidden md:block" />
              </div>
              
              {/* Question */}
              <p className="flex-1 text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] font-medium text-[#101828]">
                {item.q}
              </p>
              
              {/* Arrow */}
              <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
                <div className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
                  <ArrowRight size={18} color="#667085" className="md:hidden" />
                  <ArrowRight size={20} color="#667085" className="hidden md:block" />
                </div>
              </div>
            </button>
            {open && item.a && (
              <div className="px-3 md:px-5 pb-4 md:pb-5 pt-0">
                <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#667085]">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}



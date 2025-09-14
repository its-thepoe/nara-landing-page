"use client";

import { useState } from "react";
import { ArrowRight, ArrowDown } from "iconsax-react";

type FaqItem = { q: string; a: string; icon: string };

const ITEMS: FaqItem[] = [
  {
    q: "Is there a cost to join as a provider?",
    a: "No. Nara is completely free for therapists. There are no sign-up or subscription fees.",
    icon: "💰",
  },
  {
    q: "How is patient privacy handled?",
    a: "We're HIPAA-compliant. Patient data is encrypted, and AI summaries are only visible with explicit consent.",
    icon: "🔒",
  },
  {
    q: "Can I customise the homework assignments?",
    a: "Yes. You can create your own or use templates based on common therapeutic goals.",
    icon: "📝",
  },
  {
    q: "What does AI chat visibility look like?",
    a: "You'll see a summary of the client's AI interactions—only after they give permission. This helps you stay informed between sessions.",
    icon: "💬",
  },
  {
    q: "Can I use my own intake forms?",
    a: "Yes. Upload any forms you already use and share them during onboarding.",
    icon: "📋",
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
    <div className="w-full space-y-3 md:space-y-3">
      {ITEMS.map((item, i) => {
        const open = openIndexes.has(i);
        return (
          <div key={item.q} className="rounded-lg border border-[#D0D5DD] bg-white">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-3 p-5 text-left"
              aria-expanded={open}
            >
              {/* Icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded border border-[#F2F4F7] p-1.5">
                <span className="text-lg">{item.icon}</span>
              </div>
              
              {/* Question */}
              <p className="flex-1 text-[18px] leading-[28px] font-medium text-[#101828]">
                {item.q}
              </p>
              
              {/* Arrow */}
              <div className="flex h-8 w-8 items-center justify-center">
                <div className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
                  <ArrowRight size={20} color="#667085" />
                </div>
              </div>
            </button>
            {open && item.a && (
              <div className="px-5 pb-5 pt-0">
                <p className="text-[16px] leading-[24px] text-[#667085]">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}



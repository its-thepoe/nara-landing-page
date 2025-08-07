"use client";

import { useState } from "react";
import { ArrowRight2, ArrowDown2 } from "iconsax-react";

export default function DesktopFaq() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());
  const items = [
    {
      q: "Is there a cost to join as a provider?",
      a: "No. Nara is completely free for therapists. There are no sign-up or subscription fees.",
    },
    {
      q: "How is patient privacy handled?",
      a: "We’re HIPAA-compliant. Patient data is encrypted, and AI summaries are only visible with explicit consent.",
    },
    {
      q: "Can I customise the homework assignments?",
      a: "Yes. You can create your own or use templates based on common therapeutic goals.",
    },
    {
      q: "What does AI chat visibility look like?",
      a: "You’ll see a summary of the client’s AI interactions—only after they give permission. This helps you stay informed between sessions.",
    },
    {
      q: "Can I use my own intake forms?",
      a: "Yes. Upload any forms you already use and share them during onboarding.",
    },
  ];

  const toggle = (idx: number) => {
    const next = new Set(openIndexes);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setOpenIndexes(next);
  };

  return (
    <div className="max-w-[640px] space-y-3">
      {items.map((item, i) => {
        const open = openIndexes.has(i);
        return (
          <div key={i} className="rounded-lg border border-[#d0d5dd] bg-white">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-3 p-5 text-left"
              aria-expanded={open}
            >
              <p className="flex-1 text-[18px] font-medium text-[#101828]">{item.q}</p>
              {open ? (
                <ArrowDown2 size={20} color="#667085" />
              ) : (
                <ArrowRight2 size={20} color="#667085" />
              )}
            </button>
            {open && item.a && (
              <div className="px-5 pb-5 pt-0">
                <p className="text-[16px] text-[#667085]">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}



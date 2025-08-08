"use client";

import React, { useMemo, useState } from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
};

const SLIDES: Testimonial[] = [
  {
    quote:
      "Assigning and tracking homework is finally easy. Clients are more engaged now.",
    author: "Kyle Cai",
    role: "Defiance Capital",
    avatarUrl:
      "http://localhost:3845/assets/3908204892c1b7e1bea8585535a6122a0a0eac4f.png",
  },
  {
    quote:
      "I spend less time on admin and more time helping clients. Nara keeps me updated even between sessions.",
    author: "Kyle Cai",
    role: "Defiance Capital",
    avatarUrl:
      "http://localhost:3845/assets/3908204892c1b7e1bea8585535a6122a0a0eac4f.png",
  },
  {
    quote:
      "Seeing mood trends helps me personalise care. I’ve caught early signs of relapse thanks to Nara.",
    author: "Kyle Cai",
    role: "Defiance Capital",
    avatarUrl:
      "http://localhost:3845/assets/3908204892c1b7e1bea8585535a6122a0a0eac4f.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  const desktopSlides = useMemo(() => {
    // Show three slides in order starting from index on desktop
    const order = [0, 1, 2].map((o) => SLIDES[(index + o) % SLIDES.length]);
    return order;
  }, [index]);

  return (
    <section className="mx-auto my-6 w-full max-w-[1440px] px-4">
      <div className="relative mx-auto w-full rounded-3xl md:rounded-[32px] border border-[#EAECF0] bg-[#F9FAFB]">
        {/* Dashed wrapper */}
        <div className="box-border mx-auto max-w-[1248px] border-x border-dashed border-[#F2F4F7] px-3 py-14 md:px-6">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 md:py-24">
            <div className="flex w-full max-w-[750px] flex-col items-center gap-4 text-center">
              <p className="text-[12px] md:text-[14px] tracking-[-0.01em] text-[#015033]">
                CUSTOMER TESTIMONIALS
              </p>
              <h2 className="text-[30px] leading-[38px] md:text-[48px] md:leading-[60px] font-medium tracking-[-0.02em] text-[#070611]">
                Trusted by therapists who want more than just video calls
              </h2>
            </div>

            {/* Desktop grid with arrows */}
            <div className="hidden w-full md:flex md:flex-col md:items-center md:gap-10">
              <div className="grid w-full max-w-[1140px] grid-cols-3 gap-4">
                {desktopSlides.map((t, i) => (
                  <Card key={i} t={t} />
                ))}
              </div>
              <div className="flex items-center justify-center gap-4">
                <GhostButton onClick={prev} ariaLabel="Previous testimonial">
                  <ArrowLeft2 size={20} color="#98A2B3" />
                </GhostButton>
                <GhostButton onClick={next} ariaLabel="Next testimonial">
                  <ArrowRight2 size={20} color="#98A2B3" />
                </GhostButton>
              </div>
            </div>

            {/* Mobile carousel */}
            <div className="w-full md:hidden">
              <div className="relative mx-auto h-[320px] max-w-[924px] overflow-hidden">
                <div
                  className="flex h-full w-[300%] transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${index * (100 / SLIDES.length)}%)` }}
                >
                  {SLIDES.map((t, i) => (
                    <div key={i} className="w-full shrink-0 basis-full px-1">
                      <Card t={t} mobile />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <GhostButton onClick={prev} ariaLabel="Previous testimonial">
                  <ArrowLeft2 size={20} color="#98A2B3" />
                </GhostButton>
                <GhostButton onClick={next} ariaLabel="Next testimonial">
                  <ArrowRight2 size={20} color="#98A2B3" />
                </GhostButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GhostButton({ children, onClick, ariaLabel }: { children: React.ReactNode; onClick: () => void; ariaLabel: string }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="grid size-12 place-items-center rounded-full border bg-white"
      style={{ borderColor: "#EDF9F5", boxShadow: "0px 1px 2px rgba(198,236,223,0.1)" }}
    >
      {children}
    </button>
  );
}

function Card({ t, mobile = false }: { t: Testimonial; mobile?: boolean }) {
  return (
    <div
      className={[
        "relative isolate flex h-[320px] w-[300px] md:h-[440px] md:w-[540px] flex-col justify-between rounded-[8px] border bg-white",
      ].join(" ")}
      style={{ borderColor: "#F9FAFB" }}
    >
      {/* decorative quote block */}
      <div
        className="absolute right-5 top-5 h-20 w-24 opacity-60 md:right-12 md:top-12 md:h-[118.81px] md:w-[142.95px]"
        style={{ background: "#EDF9F5" }}
      />

      <div className="px-5 pt-5 md:px-12 md:pt-12">
        <p className="mx-auto text-[20px] leading-[30px] tracking-[-0.01em] text-[#344054] md:text-[30px] md:leading-[44px]">
          {t.quote}
        </p>
      </div>

      <div className="mx-auto mb-4 w-full max-w-[260px] px-5 md:mb-8 md:max-w-[444px] md:px-12">
        <div className="h-px w-full" style={{ background: "#EAECF0" }} />
        <div className="mt-4 flex items-center gap-3 md:gap-4">
          <div
            className="size-9 rounded-full bg-cover md:size-11"
            style={{ backgroundImage: `url('${t.avatarUrl}')` }}
          />
          <div>
            <p className="text-[12px] md:text-[14px] text-[#101828]">{t.author}</p>
            <p className="text-[11px] md:text-[12px] text-[#667085]">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}



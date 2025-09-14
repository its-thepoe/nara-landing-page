"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image from "next/image";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
};

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Testimonials({
  testimonials,
  title = "CUSTOMER TESTIMONIALS",
  subtitle = "Trusted by therapists who want more than just video calls",
  className = "",
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };
  
  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const desktopSlides = useMemo(() => {
    // Show three slides in order starting from index on desktop
    const order = [0, 1, 2].map((o) => testimonials[(index + o) % testimonials.length]);
    return order;
  }, [index, testimonials]);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length, next]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className={`lg:px-6 lg:py-0 px-1 ${className}`}>
      <section className="py-4 lg:py-6">
        <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0] bg-[#F9FAFB] overflow-hidden">
          <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full max-w-[1440px] mx-auto" style={{ "--dash-color": "#D1EAE1" } as React.CSSProperties}>
            <div className="lg:px-6 px-3 w-full">
            <div className="flex w-full flex-col items-center gap-8">
              <div className="flex w-full max-w-[750px] flex-col items-center gap-4 text-center">
                <p className="text-[12px] md:text-[14px] tracking-[-0.01em] text-[#015033]">
                  {title}
                </p>
                <h2 className="text-[30px] leading-[38px] md:text-[48px] md:leading-[60px] font-medium tracking-[-0.02em] text-[#070611]">
                  {subtitle}
                </h2>
              </div>

              {/* Desktop grid with arrows */}
              <div className="hidden w-full md:flex md:flex-col md:items-center md:gap-10">
                <div className="flex w-full max-w-[1140px] justify-center gap-4">
                  {desktopSlides.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <Card t={t} />
                    </motion.div>
                  ))}
                </div>
                {showArrows && (
                  <div className="flex items-center justify-center gap-4 w-[112px] h-[48px]" style={{ gap: '16px' }}>
                    <GhostButton onClick={prev} ariaLabel="Previous testimonial">
                      <ArrowLeft size={20} color="#98A2B3" />
                    </GhostButton>
                    <GhostButton onClick={next} ariaLabel="Next testimonial">
                      <ArrowRight size={20} color="#98A2B3" />
                    </GhostButton>
                  </div>
                )}
              </div>

              {/* Mobile carousel */}
              <div className="w-full md:hidden">
                <div className="relative mx-auto h-[320px] w-full max-w-[280px] overflow-hidden">
                  <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ 
                      width: `${testimonials.length * 100}%`,
                      transform: `translateX(-${index * (100 / testimonials.length)}%)` 
                    }}
                  >
                    {testimonials.map((t, i) => (
                      <div key={i} className="flex justify-center shrink-0 px-1.5" style={{ width: `${100 / testimonials.length}%` }}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-50px" }}
                        >
                          <Card t={t} mobile />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
                {showArrows && (
                  <div className="mt-6 flex items-center justify-center gap-4 w-full">
                    <GhostButton onClick={prev} ariaLabel="Previous testimonial">
                      <ArrowLeft size={20} color="#98A2B3" />
                    </GhostButton>
                    <GhostButton onClick={next} ariaLabel="Next testimonial">
                      <ArrowRight size={20} color="#98A2B3" />
                    </GhostButton>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GhostButton({ children, onClick, ariaLabel }: { children: React.ReactNode; onClick: () => void; ariaLabel: string }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="flex items-center justify-center w-[48px] h-[48px] rounded-[1000px] border bg-white hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out"
      style={{ 
        borderColor: "#EDF9F5", 
        boxShadow: "0px 1px 2px rgba(198,236,223,0.1)" 
      }}
    >
      {children}
    </button>
  );
}

function Card({ t, mobile = false }: { t: Testimonial; mobile?: boolean }) {
  if (mobile) {
    return (
      <div
        className="relative isolate flex h-[320px] w-full max-w-[300px] mx-auto flex-col justify-between rounded-[8px] border bg-white"
        style={{ 
          borderColor: "#F9FAFB",
          boxShadow: "0px 1px 2px rgba(231, 235, 239, 0.1)"
        }}
      >
        {/* decorative quote SVG */}
        <div className="absolute right-5 top-5 h-20 w-24 opacity-60 -z-10">
          <Image 
            src="/testimonialquotes.svg" 
            alt="" 
            fill
            className="h-full w-full object-contain"
          />
        </div>

        <div className="px-5 pt-5 relative z-10">
          <p className="mx-auto text-[20px] leading-[30px] tracking-[-0.01em] text-[#344054]">
            &quot;{t.quote}&quot;
          </p>
        </div>
        
        <div className="px-5 pb-4">
          <div className="mx-auto w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="h-px w-full bg-[#EAECF0]" />
              <div className="flex items-center gap-2 w-full">
                <div className="w-11 h-11 rounded-full bg-[#E5F8F1] flex items-center justify-center overflow-hidden relative">
                  {t.avatarUrl ? (
                    <Image
                      src={t.avatarUrl}
                      alt={t.author}
                      fill
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-[14px] font-medium text-[#015033]">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[12px] leading-[18px] tracking-[-0.01em] text-[#101828] font-normal">{t.author}</p>
                  <p className="text-[11px] leading-[18px] tracking-[-0.01em] text-[#667085] font-normal">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative isolate flex h-[440px] w-[540px] flex-col justify-between rounded-[8px] border bg-white"
      style={{ 
        borderColor: "#F9FAFB",
        boxShadow: "0px 1px 2px rgba(231, 235, 239, 0.1)"
      }}
    >
      {/* decorative quote SVG */}
      <div className="absolute right-12 top-12 h-[118.81px] w-[142.95px] opacity-60">
        <Image 
          src="/testimonialquotes.svg" 
          alt="" 
          fill
          className="h-full w-full object-contain"
        />
      </div>

      <div className="px-12 pt-12">
        <p className="mx-auto w-[444px] text-[30px] leading-[44px] tracking-[-0.01em] text-[#344054]">
          &quot;{t.quote}&quot;
        </p>
      </div>
      
      <div className="px-12 pb-8">
        <div className="mx-auto w-[444px]">
          <div className="flex flex-col items-start gap-4 w-[444px] h-[61px]">
            <div className="w-full h-px bg-[#EAECF0]" />
            <div className="flex items-center gap-3 w-[444px] h-11">
              <div className="w-11 h-11 rounded-full bg-[#E5F8F1] flex items-center justify-center overflow-hidden relative">
                {t.avatarUrl ? (
                  <Image
                    src={t.avatarUrl}
                    alt={t.author}
                    fill
                    className="w-11 h-11 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-[14px] font-medium text-[#015033]">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start w-[388px] h-[38px]">
                <p className="text-[14px] leading-[20px] tracking-[-0.01em] text-[#101828] font-normal">{t.author}</p>
                <p className="text-[12px] leading-[18px] tracking-[-0.01em] text-[#667085] font-normal">{t.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

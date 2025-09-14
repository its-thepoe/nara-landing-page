"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FounderSpotlightProps {
  quoteIconSrc?: string;
  className?: string;
}

export default function FounderSpotlight({
  quoteIconSrc = "/testimonialquotes.svg",
  className = "",
}: FounderSpotlightProps) {
  const imageSrc = "/Perez+Nara.webp";
  const imageAlt = "Perez Willie-Nwobu with Nara";
  const quote = `At 18, I arrived in the U.S. for college, chasing big dreams. But life took an unexpected turn—I found out I was going to be a dad, and at the same time, I faced the threat of deportation. With no family around and nowhere to turn, I sank into a deep depression.

Everything changed when I met a therapist who helped me find clarity. What truly made the difference was the work I did between sessions—the daily practices and small steps that gave me the strength to keep going.

That experience shaped my life's mission: to help others find peace and healing through mental health. Therapy isn't just something we do once a week—it's a journey we live every day.`;
  const authorName = "Perez Willie-Nwobu";
  const authorTitle = "CEO, Nara Therapy";
  const authorImageSrc = "/perez-headshot.webp";
  const authorImageAlt = "Perez Willie-Nwobu";

  return (
    <div className={`relative z-10 lg:px-6 lg:py-0 px-1 ${className}`}>
      <section className="py-4 lg:py-6">
        <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0] bg-white">
          <div 
            className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full max-w-[1440px] mx-auto" 
            style={{ "--dash-color": "#F2F4F7" } as React.CSSProperties}
          >
            <div className="lg:px-6 px-3 w-full">
              <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:justify-end md:gap-4">
                {/* Image Column */}
                <motion.div 
                  className="flex flex-col w-full md:w-[580px] md:shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div
                    className="h-[300px] w-full rounded-[16px] bg-cover bg-center md:h-[580px]"
                    style={{ backgroundImage: `url('${imageSrc}')` }}
                  />
                </motion.div>

                {/* Quote card */}
                <motion.div
                  className="relative isolate w-full rounded-[16px] bg-white md:flex-1 md:h-[580px] flex flex-col justify-between md:items-start md:pt-12 md:px-12 md:pb-8"
                  style={{ borderColor: "#F2F4F7", borderWidth: "0.5px", boxShadow: "0px 1px 2px rgba(198,236,223,0.1)" }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* decorative quote */}
                  <div className="absolute right-5 top-5 h-20 w-24 opacity-80 md:right-12 md:top-12 md:h-[118.81px] md:w-[142.95px] z-0">
                    <Image src={quoteIconSrc} alt="" fill className="w-full h-full" />
                  </div>

                  {/* Text content */}
                  <div className="px-4 pt-5 md:p-0 relative z-10">
                    <div className="flex flex-col gap-5">
                      {quote.split('\n\n').map((paragraph, index) => (
                        <p 
                          key={index} 
                          className="font-normal text-base leading-6 text-[#59557B] tracking-[-0.01em]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Author section */}
                  <div className="px-4 pb-4 md:p-0 relative z-10 w-full">
                    <div className="border-t" style={{ borderColor: "#EAECF0" }} />
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden relative">
                        <Image src={authorImageSrc} alt={authorImageAlt} fill className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[12px] md:text-[14px] leading-5 text-[#101828]">{authorName}</p>
                        <p className="text-[11px] md:text-[12px] leading-[18px] text-[#667085]">{authorTitle}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

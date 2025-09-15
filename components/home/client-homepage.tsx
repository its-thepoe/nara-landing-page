"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuoteDown, UserSearch, TaskSquare, SmsStar, Messages2, Book, UserOctagon } from "iconsax-react";
import Testimonials from "../shared/testimonials";
import Faq from "../shared/faq";
import { CLIENT_FAQ_ITEMS } from "@/lib/faq-data";
import FounderSpotlight from "../shared/founder-spotlight";
import Navbar from "../layout/navbar";
import { CLIENT_NAV_CONFIG } from "@/lib/navigation-config";
import { CLIENT_TESTIMONIALS_CONFIG } from "@/lib/testimonials-data";
import RollingDigit from "../shared/rolling-digit";
import Image from "next/image";

// Client homepage - duplicated from landing page as boilerplate
export default function ClientHomepage() {
  const heroMockup = "/clientmockup.webp";
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full">
      <Navbar {...CLIENT_NAV_CONFIG} />
      <div className="relative z-10 w-full bg-white">
      {/* Hero Section with improved background structure */}
      <div className="relative z-10 lg:px-6 px-3">
        <div 
          className="lg:px-20 lg:pb-3 p-4 shadow-xs rounded-b-[24px] lg:rounded-b-[32px] border-b border-[#e7fef6] overflow-hidden"
          style={{
            background: `
              linear-gradient(to bottom, #e5f8f1 40.238%, rgba(229,248,241,0) 100%),
              url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1408 1468\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(119.75 3.492e-13 -8.7539e-14 95.54 704 733.99)\\'><stop stop-color=\\'rgba(1,80,51,0)\\' offset=\\'0.3\\'/><stop stop-color=\\'rgba(1,134,85,0.5)\\' offset=\\'0.49635\\'/><stop stop-color=\\'rgba(1,188,119,1)\\' offset=\\'0.6927\\'/><stop stop-color=\\'rgba(17,192,128,1)\\' offset=\\'0.71191\\'/><stop stop-color=\\'rgba(33,196,136,1)\\' offset=\\'0.73111\\'/><stop stop-color=\\'rgba(64,205,153,1)\\' offset=\\'0.76953\\'/><stop stop-color=\\'rgba(96,213,170,1)\\' offset=\\'0.80794\\'/><stop stop-color=\\'rgba(128,221,187,1)\\' offset=\\'0.84635\\'/><stop stop-color=\\'rgba(191,238,221,1)\\' offset=\\'0.92318\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')
            `
          }}
        >
          <div className="flex flex-col">
            <div className="pt-20 lg:pt-48">
              <div className="flex flex-col items-center justify-center lg:text-center">
                <p className="text-[#101828] font-semibold text-[36px] lg:text-[60px] lg:leading-[72px] leading-[44px]">
                Your everyday app for <br className="lg:flex hidden" />
                mental wellness 
                </p>
                <p className="text-[20px] font-normal lg:text-xl leading-[30px] text-[#475467] mt-4">
                Nara combines traditional therapy with AI-assisted support <br className="lg:flex hidden" />
                to deliver 24/7 mental health support.
                </p>
                <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-3 w-full lg:w-auto">
                  <a
                    href="https://apps.apple.com/us/app/nara-therapy/id6504929821"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00100a] flex items-center justify-center h-12 px-4 rounded-[4px] transition-all duration-200 hover:scale-105 w-full lg:w-auto"
                  >
                    <Image
                      src="/appstorebadge-black.svg"
                      alt="Download on the App Store"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.naratherapy.naramobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00100a] flex items-center justify-center h-12 px-4 rounded-[4px] transition-all duration-200 hover:scale-105 w-full lg:w-auto"
                  >
                    <Image
                      src="/playstorebadge-black.svg"
                      alt="Get it on Google Play"
                      width={135}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
                <motion.div 
                  className="w-full lg:w-[90%] lg:max-w-[1200px] relative h-[250px] lg:h-[921px] lg:max-h-screen mt-[64px] lg:mb-[56px] mb-[48px] rounded-[24px] lg:rounded-[32px] overflow-hidden"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <Image
                    alt="nara-dash"
                    src={heroMockup}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="relative z-10 lg:px-6 lg:py-0 px-1">
        <section className="py-6 lg:py-8">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0]">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-24 py-14 w-full" style={{ "--dash-color": "#F2F4F7" } as React.CSSProperties}>
              <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col gap-7 text-left lg:text-center">
                  <p className="text-[#015033] text-[12px] leading-[18px] tracking-[-0.12px]">FEATURES</p>
                  <div className="flex flex-col gap-3">
                    <p className="text-[#101828] text-[36px] leading-[44px] tracking-[-0.72px] lg:text-[60px] lg:leading-[72px] font-semibold">
                      What We Offer
                    </p>
                    <p className="text-[#475467] text-[16px] leading-[24px] tracking-[-0.16px]">
                      Tools and guidance to help you feel and live better.
                    </p>
                  </div>
                </div>

              {/* Mobile Layout - Single Column */}
                <motion.div 
                  className="flex flex-col gap-8 lg:hidden w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  {/* Self Care Feature - Image Above Description */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  >
                    {/* Image Above */}
                    <div className="w-full h-[280px] bg-[#e5f8f1] rounded-[20px] border border-[rgba(1,188,119,0.1)] flex items-center justify-center relative overflow-hidden group transition-all duration-300 ease-out">
                      <Image 
                        src="/selfcaremockup.webp" 
                        alt="Self Care App Mockup" 
                        width={400}
                        height={400}
                        className="absolute top-[48px] left-1/2 transform -translate-x-1/2 w-[240px] h-auto group-hover:-translate-y-4 group-active:-translate-y-4 transition-transform duration-300 ease-out"
                      />
                    </div>
                    
                    {/* Content Below */}
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <div className="size-12 rounded-full flex items-center justify-center w-fit">
                          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.603027" width="48" height="48" rx="24" fill="#E5F8F1"/>
                            <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#01BC77" strokeOpacity="0.1" strokeWidth="0.5"/>
                            <path d="M24 35.353C29.9371 35.353 34.75 30.5401 34.75 24.603C34.75 18.666 29.9371 13.853 24 13.853C18.0629 13.853 13.25 18.666 13.25 24.603C13.25 30.5401 18.0629 35.353 24 35.353ZM22.2373 23.3149C21.9312 23.417 21.5941 23.3113 21.4004 23.0532C20.9504 22.4532 20.0496 22.4532 19.5996 23.0532C19.351 23.3843 18.8811 23.4511 18.5498 23.2026C18.2187 22.954 18.1519 22.4841 18.4004 22.1528C18.9124 21.4704 19.6737 21.1209 20.4414 21.104C20.177 20.8095 20.1865 20.3559 20.4697 20.0728C20.7626 19.7799 21.2374 19.7799 21.5303 20.0728C21.564 20.1089 21.6711 20.223 21.7256 20.2866C21.8339 20.4129 21.9784 20.5936 22.124 20.812C22.3989 21.2244 22.75 21.8776 22.75 22.603C22.75 22.9259 22.5436 23.2129 22.2373 23.3149ZM26.5996 23.0532C26.4059 23.3113 26.0688 23.417 25.7627 23.3149C25.4564 23.2129 25.25 22.9259 25.25 22.603C25.25 21.8776 25.6011 21.2244 25.876 20.812C26.0216 20.5936 26.1661 20.4129 26.2744 20.2866C26.3289 20.223 26.436 20.1089 26.4697 20.0728C26.7626 19.7799 27.2374 19.7799 27.5303 20.0728C27.8135 20.3559 27.823 20.8095 27.5586 21.104C28.3263 21.1209 29.0876 21.4704 29.5996 22.1528C29.8481 22.4841 29.7813 22.954 29.4502 23.2026C29.1189 23.4511 28.649 23.3843 28.4004 23.0532C27.9504 22.4532 27.0496 22.4532 26.5996 23.0532ZM24 30.353C22.1185 30.353 20.4481 29.4481 19.4004 28.0532C19.1517 27.722 19.2186 27.2521 19.5498 27.0034C19.881 26.7547 20.3509 26.8216 20.5996 27.1528C21.3762 28.1867 22.6103 28.853 24 28.853C25.3897 28.853 26.6238 28.1867 27.4004 27.1528C27.6491 26.8217 28.119 26.7548 28.4502 27.0034C28.7814 27.2522 28.8483 27.722 28.5996 28.0532C27.5519 29.4481 25.8816 30.353 24 30.353Z" fill="#01BC77"/>
                          </svg>
                        </div>
                        <h3 className="text-[#353535] text-2xl font-semibold">Self Care</h3>
                        <p className="text-[#475467] text-base leading-6">Personalize your self-care with mood check-ins, gratitude, journaling, sharing love & much more</p>
                      </div>
                      <button className="w-full rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Start Self Care
                      </button>
                    </div>
                  </motion.div>

                  {/* Therapy Feature - Image Above Description */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    {/* Image Above */}
                    <div className="w-full h-[280px] bg-[#eff3fb] rounded-[20px] border border-[rgba(6,101,254,0.1)] flex items-center justify-center relative overflow-hidden group transition-all duration-300 ease-out">
                      <Image 
                        src="/therapymockup.webp" 
                        alt="Therapy App Mockup" 
                        width={400}
                        height={400}
                        className="absolute top-[48px] left-1/2 transform -translate-x-1/2 w-[240px] h-auto group-hover:-translate-y-4 group-active:-translate-y-4 transition-transform duration-300 ease-out"
                      />
                    </div>
                    
                    {/* Content Below */}
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <div className="size-12 rounded-full flex items-center justify-center w-fit">
                          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.603027" width="48" height="48" rx="24" fill="#EFF3FB"/>
                            <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#0665FE" strokeOpacity="0.1" strokeWidth="0.5"/>
                            <path d="M34 20.413V25.103H29.92C29.8 25.093 29.54 24.943 29.48 24.833L28.44 22.863C28.03 22.083 27.32 21.643 26.56 21.683C25.8 21.723 25.15 22.233 24.82 23.063L23.44 26.523L23.24 26.003C22.75 24.733 21.35 23.773 19.97 23.773L14 23.803V20.413C14 16.773 16.17 14.603 19.81 14.603H28.19C31.83 14.603 34 16.773 34 20.413Z" fill="#0665FE"/>
                            <path d="M34 28.7929V26.6029H29.92C29.25 26.6029 28.46 26.1229 28.15 25.5329L27.11 23.5629C26.83 23.0329 26.43 23.0629 26.21 23.6129L23.91 29.4229C23.66 30.0729 23.24 30.0729 22.98 29.4229L21.84 26.5429C21.57 25.8429 20.73 25.2729 19.98 25.2729L14 25.3029V28.7929C14 32.3729 16.1 34.5329 19.63 34.5929C19.74 34.6029 19.86 34.6029 19.97 34.6029H27.97C28.12 34.6029 28.27 34.6029 28.41 34.5929C31.92 34.5129 34 32.3629 34 28.7929Z" fill="#0665FE"/>
                            <path d="M13.9988 25.303V28.613C13.9787 28.293 13.9688 27.953 13.9688 27.603V25.303H13.9988Z" fill="#0665FE"/>
                          </svg>
                        </div>
                        <h3 className="text-[#353535] text-2xl font-semibold">Therapy</h3>
                        <p className="text-[#475467] text-base leading-6">Match with the right therapist for you, eliminating guesswork and awkward mismatches</p>
                      </div>
                      <button className="w-full rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Find a Therapist
                      </button>
                    </div>
                  </motion.div>

                  {/* AI Therapy Feature - Image Above Description */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  >
                    {/* Image Above */}
                    <div className="w-full h-[280px] bg-[#fef6eb] rounded-[20px] border border-[rgba(245,151,20,0.1)] flex items-center justify-center relative overflow-hidden group transition-all duration-300 ease-out">
                      <Image 
                        src="/aitherapymockup.webp" 
                        alt="AI Therapy App Mockup" 
                        width={400}
                        height={400}
                        className="absolute top-[48px] left-1/2 transform -translate-x-1/2 w-[240px] h-auto group-hover:-translate-y-4 group-active:-translate-y-4 transition-transform duration-300 ease-out"
                      />
                    </div>
                    
                    {/* Content Below */}
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <div className="size-12 rounded-full flex items-center justify-center w-fit">
                          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.603027" width="48" height="48" rx="24" fill="#FEF6EB"/>
                            <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#F59714" strokeOpacity="0.1" strokeWidth="0.5"/>
                            <path d="M31.4812 15.423L31.7612 15.993C31.9012 16.273 32.2512 16.533 32.5612 16.593L32.9412 16.653C34.0812 16.843 34.3512 17.683 33.5312 18.513L33.1812 18.863C32.9512 19.103 32.8212 19.563 32.8912 19.883L32.9412 20.093C33.2512 21.473 32.5212 22.003 31.3212 21.283L31.0612 21.133C30.7512 20.953 30.2512 20.953 29.9412 21.133L29.6812 21.283C28.4712 22.013 27.7412 21.473 28.0612 20.093L28.1112 19.883C28.1812 19.563 28.0512 19.103 27.8212 18.863L27.4712 18.503C26.6512 17.673 26.9212 16.833 28.0612 16.643L28.4412 16.583C28.7412 16.533 29.1012 16.263 29.2412 15.983L29.5212 15.413C30.0612 14.333 30.9412 14.333 31.4812 15.423Z" fill="#F59714"/>
                            <path d="M33.57 22.693C33.21 22.953 32.2 23.433 30.76 22.693C30.6 22.613 30.4 22.603 30.24 22.693C29.67 22.983 29.15 23.103 28.74 23.103C28.1 23.103 27.65 22.853 27.43 22.693C27.06 22.423 26.28 21.653 26.55 20.023C26.58 19.853 26.53 19.683 26.42 19.553C25.73 18.763 25.35 17.703 25.62 16.873C25.72 16.543 25.51 16.103 25.17 16.103H19C16 16.103 14 17.603 14 21.103V28.103C14 31.603 16 33.103 19 33.103H29C32 33.103 34 31.603 34 28.103V22.873C34 22.683 33.73 22.583 33.57 22.693ZM26.34 24.693C25.68 25.223 24.84 25.483 24 25.483C23.16 25.483 22.31 25.223 21.66 24.693L18.53 22.193C18.21 21.933 18.16 21.453 18.41 21.133C18.67 20.813 19.14 20.753 19.46 21.013L22.59 23.513C23.35 24.123 24.64 24.123 25.4 23.513C25.72 23.253 26.19 23.303 26.45 23.633C26.72 23.953 26.67 24.433 26.34 24.693Z" fill="#F59714"/>
                          </svg>
                        </div>
                        <h3 className="text-[#353535] text-2xl font-semibold">AI Therapy</h3>
                        <p className="text-[#475467] text-base leading-6">Engage with Nara AI for 24/7 personalized mental health support anytime, anywhere.</p>
                      </div>
                      <button className="w-full rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Start a chat
                      </button>
                      
                      {/* Metrics Section */}
                      <div 
                        className="bg-[#fef6eb] rounded-[20px] border border-[#cd7b09] border-opacity-20 px-4 sm:px-6 py-4 mt-6 relative overflow-hidden"
                        style={{
                          background: `
                            linear-gradient(to bottom, #fef6eb 0%, rgba(254,246,235,0) 100%),
                            url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 560 154\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(47.629 3.6633e-14 -2.4525e-15 10.248 280 77)\\'><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.22177\\'/><stop stop-color=\\'rgba(251,210,152,1)\\' offset=\\'0.71065\\'/><stop stop-color=\\'rgba(253,232,204,1)\\' offset=\\'0.85382\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.99699\\'/></radialGradient></defs></svg>')
                          `
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 relative z-10">
                          <div className="flex-1 text-left sm:text-center relative pb-6 sm:pb-0">
                            <div className="text-[30px] font-semibold text-[#101828] leading-[38px] mb-2">
                              83%
                            </div>
                            <div className="text-[14px] text-[#475467] leading-[20px]">
                              feel better after their first chat
                            </div>
                            {/* Dotted border on the bottom for mobile, right for desktop */}
                            <div className="block sm:hidden absolute bottom-0 left-0 right-0 h-0 border-b border-dashed border-[#9d5e07] border-opacity-60"></div>
                            <div className="hidden sm:block absolute top-0 right-0 w-0 h-full border-r border-dashed border-[#9d5e07] border-opacity-60"></div>
                          </div>
                          <div className="flex-1 text-left sm:text-center">
                            <div className="text-[30px] font-semibold text-[#101828] leading-[38px] mb-2">
                              100%
                            </div>
                            <div className="text-[14px] text-[#475467] leading-[20px]">
                              accurate in detecting high risk
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Meditation Feature - Image Above Description */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                  >
                    {/* Image Above */}
                    <div className="w-full h-[280px] bg-[#f0fbff] rounded-[20px] border border-[rgba(89,213,251,0.1)] flex items-center justify-center relative overflow-hidden group transition-all duration-300 ease-out">
                      <Image 
                        src="/meditationmockup.webp" 
                        alt="Meditation App Mockup" 
                        width={400}
                        height={400}
                        className="absolute bottom-[48px] left-1/2 transform -translate-x-1/2 w-[240px] h-auto group-hover:translate-y-4 group-active:translate-y-4 transition-all duration-300 ease-out"
                      />
                    </div>
                    
                    {/* Content Below */}
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <div className="size-12 rounded-full flex items-center justify-center w-fit">
                          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.603027" width="48" height="48" rx="24" fill="#F0FBFF"/>
                            <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5"/>
                            <path d="M26.75 16.603C26.75 15.0842 25.5188 13.853 24 13.853C22.4812 13.853 21.25 15.0842 21.25 16.603C21.25 18.1218 22.4812 19.353 24 19.353C25.5188 19.353 26.75 18.1218 26.75 16.603Z" fill="#59D5FB"/>
                            <path d="M24 19.853C22.1235 19.853 20.4224 20.5464 19.1896 21.6661C19.0655 21.7788 18.9461 21.8959 18.8318 22.017C18.3444 22.5331 18.161 23.1567 18.0627 23.6363C17.9065 24.398 17.5898 25.2847 17.0854 25.9569C16.5933 26.6127 15.9951 26.9831 15.225 26.9831C14.6865 26.9831 14.25 27.3821 14.25 27.8744C14.25 28.3666 14.6865 28.7656 15.225 28.7656C16.8397 28.7656 17.969 27.9306 18.6934 26.9652C19.3068 26.1478 19.6804 25.1811 19.8903 24.3529C20.2492 25.2113 20.4742 26.0318 20.3893 26.8388C20.2887 27.7958 19.665 28.5126 18.6721 29.1775C18.1789 29.5077 17.6266 29.8036 17.0515 30.1002C16.5802 30.3416 15.7996 30.7418 15.3672 30.9987C14.3771 31.5869 14.1003 32.6941 14.3235 33.5948C14.5504 34.5106 15.3294 35.353 16.5358 35.353C18.5176 35.353 20.3854 35.197 22.2897 34.3019L23.9098 33.3104L25.5681 34.3044C27.5076 35.1972 29.4098 35.353 31.4317 35.353C32.6442 35.353 33.4407 34.5228 33.6746 33.5984C33.9048 32.6886 33.6158 31.5797 32.6111 30.9952C32.1701 30.7387 31.677 30.4913 31.1957 30.2499C30.6083 29.9533 29.7398 29.5043 29.2353 29.1735C28.217 28.5058 27.5827 27.7884 27.4806 26.8372C27.3907 26.0006 27.6628 25.1289 28.0748 24.2104C28.2771 25.0686 28.6576 26.1004 29.3066 26.9652C30.031 27.9306 31.1603 28.7656 32.775 28.7656C33.3135 28.7656 33.75 28.3666 33.75 27.8744C33.75 27.3821 33.3135 26.9831 32.775 26.9831C32.0049 26.9831 31.4067 26.6127 30.9146 25.9569C30.4102 25.2847 30.0935 24.398 29.9373 23.6363C29.839 23.1567 29.6556 22.5331 29.1682 22.017C29.0367 21.8777 28.8987 21.7439 28.7544 21.6158C27.5264 20.5257 25.8481 19.853 24 19.853Z" fill="#59D5FB"/>
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-[#353535] text-2xl font-semibold">Meditation</h3>
                          <div className="bg-[#f0fbff] px-2.5 py-0.5 rounded-[16px]">
                            <span className="text-[#06b1e5] text-[14px] font-medium">Coming Soon</span>
                          </div>
                        </div>
                        <p className="text-[#475467] text-base leading-6">Discover peace and clarity with guided meditations tailored to your emotional and mental needs.</p>
                      </div>
                      <button className="w-full rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Find your inner peace
                      </button>
                    </div>
                  </motion.div>

              </motion.div>

              {/* Desktop Layout - 1x1 Single Column - Full Width */}
              <motion.div 
                className="hidden lg:flex flex-col space-y-[64px] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                  {/* Self Care (Image Left, Text Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 min-w-[800px]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  >
                    <div className="w-[560px] flex-shrink-0 overflow-hidden group">
                      <div className="w-full h-[480px] bg-[#e5f8f1] rounded-[20px] border border-[rgba(1,188,119,0.1)] flex items-center justify-center relative transition-all duration-300 ease-out">
                        <Image 
                          src="/selfcaremockup.webp" 
                          alt="Self Care App Mockup" 
                          width={400}
                          height={400}
                          className="absolute top-[48px] lg:top-[80px] left-1/2 transform -translate-x-1/2 w-[24px] lg:w-[400px] h-auto group-hover:-translate-y-4 transition-transform duration-300 ease-out"
                        />
                      </div>
                    </div>
                    <div className="flex-1 pl-8 min-w-[300px]">
                      <div className="size-12 rounded-full flex items-center justify-center mb-6 w-fit">
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.603027" width="48" height="48" rx="24" fill="#E5F8F1"/>
                          <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#01BC77" strokeOpacity="0.1" strokeWidth="0.5"/>
                          <path d="M24 35.353C29.9371 35.353 34.75 30.5401 34.75 24.603C34.75 18.666 29.9371 13.853 24 13.853C18.0629 13.853 13.25 18.666 13.25 24.603C13.25 30.5401 18.0629 35.353 24 35.353ZM22.2373 23.3149C21.9312 23.417 21.5941 23.3113 21.4004 23.0532C20.9504 22.4532 20.0496 22.4532 19.5996 23.0532C19.351 23.3843 18.8811 23.4511 18.5498 23.2026C18.2187 22.954 18.1519 22.4841 18.4004 22.1528C18.9124 21.4704 19.6737 21.1209 20.4414 21.104C20.177 20.8095 20.1865 20.3559 20.4697 20.0728C20.7626 19.7799 21.2374 19.7799 21.5303 20.0728C21.564 20.1089 21.6711 20.223 21.7256 20.2866C21.8339 20.4129 21.9784 20.5936 22.124 20.812C22.3989 21.2244 22.75 21.8776 22.75 22.603C22.75 22.9259 22.5436 23.2129 22.2373 23.3149ZM26.5996 23.0532C26.4059 23.3113 26.0688 23.417 25.7627 23.3149C25.4564 23.2129 25.25 22.9259 25.25 22.603C25.25 21.8776 25.6011 21.2244 25.876 20.812C26.0216 20.5936 26.1661 20.4129 26.2744 20.2866C26.3289 20.223 26.436 20.1089 26.4697 20.0728C26.7626 19.7799 27.2374 19.7799 27.5303 20.0728C27.8135 20.3559 27.823 20.8095 27.5586 21.104C28.3263 21.1209 29.0876 21.4704 29.5996 22.1528C29.8481 22.4841 29.7813 22.954 29.4502 23.2026C29.1189 23.4511 28.649 23.3843 28.4004 23.0532C27.9504 22.4532 27.0496 22.4532 26.5996 23.0532ZM24 30.353C22.1185 30.353 20.4481 29.4481 19.4004 28.0532C19.1517 27.722 19.2186 27.2521 19.5498 27.0034C19.881 26.7547 20.3509 26.8216 20.5996 27.1528C21.3762 28.1867 22.6103 28.853 24 28.853C25.3897 28.853 26.6238 28.1867 27.4004 27.1528C27.6491 26.8217 28.119 26.7548 28.4502 27.0034C28.7814 27.2522 28.8483 27.722 28.5996 28.0532C27.5519 29.4481 25.8816 30.353 24 30.353Z" fill="#01BC77"/>
                        </svg>
                      </div>
                      <h3 className="text-[#353535] text-2xl lg:text-[46px] lg:leading-[44px] lg:tracking-[-0.02em] font-medium mb-4">Self Care</h3>
                      <p className="text-[#736F67] leading-6 text-base lg:text-[18px] mb-6">Personalize your self-care with mood check-ins, gratitude, journaling, sharing love & much more</p>
                      <button className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Start Self Care
                      </button>
                    </div>
                  </motion.div>

                  {/* Therapy (Text Left, Image Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 min-w-[800px]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex-1 pr-8 min-w-[300px]">
                      <div className="size-12 rounded-full flex items-center justify-center mb-6 w-fit">
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.603027" width="48" height="48" rx="24" fill="#EFF3FB"/>
                          <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#0665FE" strokeOpacity="0.1" strokeWidth="0.5"/>
                          <path d="M34 20.413V25.103H29.92C29.8 25.093 29.54 24.943 29.48 24.833L28.44 22.863C28.03 22.083 27.32 21.643 26.56 21.683C25.8 21.723 25.15 22.233 24.82 23.063L23.44 26.523L23.24 26.003C22.75 24.733 21.35 23.773 19.97 23.773L14 23.803V20.413C14 16.773 16.17 14.603 19.81 14.603H28.19C31.83 14.603 34 16.773 34 20.413Z" fill="#0665FE"/>
                            <path d="M34 28.7929V26.6029H29.92C29.25 26.6029 28.46 26.1229 28.15 25.5329L27.11 23.5629C26.83 23.0329 26.43 23.0629 26.21 23.6129L23.91 29.4229C23.66 30.0729 23.24 30.0729 22.98 29.4229L21.84 26.5429C21.57 25.8429 20.73 25.2729 19.98 25.2729L14 25.3029V28.7929C14 32.3729 16.1 34.5329 19.63 34.5929C19.74 34.6029 19.86 34.6029 19.97 34.6029H27.97C28.12 34.6029 28.27 34.6029 28.41 34.5929C31.92 34.5129 34 32.3629 34 28.7929Z" fill="#0665FE"/>
                            <path d="M13.9988 25.303V28.613C13.9787 28.293 13.9688 27.953 13.9688 27.603V25.303H13.9988Z" fill="#0665FE"/>
                          </svg>
                        </div>
                        <h3 className="text-[#353535] text-2xl lg:text-[46px] lg:leading-[44px] lg:tracking-[-0.02em] font-medium mb-4">Therapy</h3>
                        <p className="text-[#736F67] leading-6 text-base lg:text-[18px] mb-6">Match with the right therapist for you, eliminating guesswork and awkward mismatches</p>
                        <button className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                          Find a Therapist
                        </button>
                    </div>
                    <div className="w-[560px] flex-shrink-0 overflow-hidden group">
                      <div className="w-full h-[480px] bg-[#eff3fb] rounded-[20px] border border-[rgba(6,101,254,0.1)] flex items-center justify-center relative transition-all duration-300 ease-out">
                        <Image 
                          src="/therapymockup.webp" 
                          alt="Therapy App Mockup" 
                          width={400}
                          height={400}
                          className="absolute top-[48px] lg:top-[80px] left-1/2 transform -translate-x-1/2 w-[24px] lg:w-[400px] h-auto group-hover:-translate-y-4 transition-transform duration-300 ease-out"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* AI Therapy (Image Left, Text Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 min-w-[800px]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  >
                    <div className="w-[560px] flex-shrink-0 overflow-hidden group">
                      <div className="w-full h-[480px] bg-[#fef6eb] rounded-[20px] border border-[rgba(245,151,20,0.1)] flex items-center justify-center relative transition-all duration-300 ease-out">
                        <Image 
                          src="/aitherapymockup.webp" 
                          alt="AI Therapy App Mockup" 
                          width={400}
                          height={400}
                          className="absolute top-[48px] lg:top-[80px] left-1/2 transform -translate-x-1/2 w-[24px] lg:w-[400px] h-auto group-hover:-translate-y-4 transition-transform duration-300 ease-out"
                        />
                      </div>
                    </div>
                    <div className="flex-1 pl-8 min-w-[300px]">
                      <div className="size-12 rounded-full flex items-center justify-center mb-6 w-fit">
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.603027" width="48" height="48" rx="24" fill="#FEF6EB"/>
                          <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#F59714" strokeOpacity="0.1" strokeWidth="0.5"/>
                          <path d="M31.4812 15.423L31.7612 15.993C31.9012 16.273 32.2512 16.533 32.5612 16.593L32.9412 16.653C34.0812 16.843 34.3512 17.683 33.5312 18.513L33.1812 18.863C32.9512 19.103 32.8212 19.563 32.8912 19.883L32.9412 20.093C33.2512 21.473 32.5212 22.003 31.3212 21.283L31.0612 21.133C30.7512 20.953 30.2512 20.953 29.9412 21.133L29.6812 21.283C28.4712 22.013 27.7412 21.473 28.0612 20.093L28.1112 19.883C28.1812 19.563 28.0512 19.103 27.8212 18.863L27.4712 18.503C26.6512 17.673 26.9212 16.833 28.0612 16.643L28.4412 16.583C28.7412 16.533 29.1012 16.263 29.2412 15.983L29.5212 15.413C30.0612 14.333 30.9412 14.333 31.4812 15.423Z" fill="#F59714"/>
                            <path d="M33.57 22.693C33.21 22.953 32.2 23.433 30.76 22.693C30.6 22.613 30.4 22.603 30.24 22.693C29.67 22.983 29.15 23.103 28.74 23.103C28.1 23.103 27.65 22.853 27.43 22.693C27.06 22.423 26.28 21.653 26.55 20.023C26.58 19.853 26.53 19.683 26.42 19.553C25.73 18.763 25.35 17.703 25.62 16.873C25.72 16.543 25.51 16.103 25.17 16.103H19C16 16.103 14 17.603 14 21.103V28.103C14 31.603 16 33.103 19 33.103H29C32 33.103 34 31.603 34 28.103V22.873C34 22.683 33.73 22.583 33.57 22.693ZM26.34 24.693C25.68 25.223 24.84 25.483 24 25.483C23.16 25.483 22.31 25.223 21.66 24.693L18.53 22.193C18.21 21.933 18.16 21.453 18.41 21.133C18.67 20.813 19.14 20.753 19.46 21.013L22.59 23.513C23.35 24.123 24.64 24.123 25.4 23.513C25.72 23.253 26.19 23.303 26.45 23.633C26.72 23.953 26.67 24.433 26.34 24.693Z" fill="#F59714"/>
                        </svg>
                      </div>
                      <h3 className="text-[#353535] text-2xl lg:text-[46px] lg:leading-[44px] lg:tracking-[-0.02em] font-medium mb-4">AI Therapy</h3>
                      <p className="text-[#736F67] leading-6 text-base lg:text-[18px] mb-6">Engage with Nara AI for 24/7 personalized mental health support anytime, anywhere.</p>
                      <button className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Start a chat
                      </button>
                      
                      {/* Metrics Section */}
                      <div 
                        className="bg-[#fef6eb] rounded-[20px] border border-[#cd7b09] border-opacity-20 px-8 py-6 mt-8 relative overflow-hidden"
                        style={{
                          background: `
                            linear-gradient(to bottom, #fef6eb 0%, rgba(254,246,235,0) 100%),
                            url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 560 154\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(47.629 3.6633e-14 -2.4525e-15 10.248 280 77)\\'><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.22177\\'/><stop stop-color=\\'rgba(251,210,152,1)\\' offset=\\'0.71065\\'/><stop stop-color=\\'rgba(253,232,204,1)\\' offset=\\'0.85382\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.99699\\'/></radialGradient></defs></svg>')
                          `
                        }}
                      >
                        <div className="flex justify-between gap-8 relative z-10">
                          <div className="flex-1 text-center relative">
                            <div className="text-[30px] font-semibold text-[#101828] leading-[38px] mb-3">
                              83%
                            </div>
                            <div className="text-[14px] text-[#475467] leading-[20px]">
                              feel better after their first chat.
                            </div>
                            {/* Dotted border on the right */}
                            <div className="absolute top-0 right-0 w-0 h-full border-r border-dashed border-[#9d5e07] border-opacity-60"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="text-[30px] font-semibold text-[#101828] leading-[38px] mb-3">
                              100%
                            </div>
                            <div className="text-[14px] text-[#475467] leading-[20px]">
                              accurate in detecting high risk.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Meditation (Text Left, Image Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 min-w-[800px]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                  >
                    <div className="flex-1 pr-8 min-w-[300px]">
                      <div className="size-12 rounded-full flex items-center justify-center mb-6 w-fit">
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.603027" width="48" height="48" rx="24" fill="#F0FBFF"/>
                          <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5"/>
                          <path d="M26.75 16.603C26.75 15.0842 25.5188 13.853 24 13.853C22.4812 13.853 21.25 15.0842 21.25 16.603C21.25 18.1218 22.4812 19.353 24 19.353C25.5188 19.353 26.75 18.1218 26.75 16.603Z" fill="#59D5FB"/>
                          <path d="M24 19.853C22.1235 19.853 20.4224 20.5464 19.1896 21.6661C19.0655 21.7788 18.9461 21.8959 18.8318 22.017C18.3444 22.5331 18.161 23.1567 18.0627 23.6363C17.9065 24.398 17.5898 25.2847 17.0854 25.9569C16.5933 26.6127 15.9951 26.9831 15.225 26.9831C14.6865 26.9831 14.25 27.3821 14.25 27.8744C14.25 28.3666 14.6865 28.7656 15.225 28.7656C16.8397 28.7656 17.969 27.9306 18.6934 26.9652C19.3068 26.1478 19.6804 25.1811 19.8903 24.3529C20.2492 25.2113 20.4742 26.0318 20.3893 26.8388C20.2887 27.7958 19.665 28.5126 18.6721 29.1775C18.1789 29.5077 17.6266 29.8036 17.0515 30.1002C16.5802 30.3416 15.7996 30.7418 15.3672 30.9987C14.3771 31.5869 14.1003 32.6941 14.3235 33.5948C14.5504 34.5106 15.3294 35.353 16.5358 35.353C18.5176 35.353 20.3854 35.197 22.2897 34.3019L23.9098 33.3104L25.5681 34.3044C27.5076 35.1972 29.4098 35.353 31.4317 35.353C32.6442 35.353 33.4407 34.5228 33.6746 33.5984C33.9048 32.6886 33.6158 31.5797 32.6111 30.9952C32.1701 30.7387 31.677 30.4913 31.1957 30.2499C30.6083 29.9533 29.7398 29.5043 29.2353 29.1735C28.217 28.5058 27.5827 27.7884 27.4806 26.8372C27.3907 26.0006 27.6628 25.1289 28.0748 24.2104C28.2771 25.0686 28.6576 26.1004 29.3066 26.9652C30.031 27.9306 31.1603 28.7656 32.775 28.7656C33.3135 28.7656 33.75 28.3666 33.75 27.8744C33.75 27.3821 33.3135 26.9831 32.775 26.9831C32.0049 26.9831 31.4067 26.6127 30.9146 25.9569C30.4102 25.2847 30.0935 24.398 29.9373 23.6363C29.839 23.1567 29.6556 22.5331 29.1682 22.017C29.0367 21.8777 28.8987 21.7439 28.7544 21.6158C27.5264 20.5257 25.8481 19.853 24 19.853Z" fill="#59D5FB"/>
                        </svg>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-[#353535] text-2xl lg:text-[46px] lg:leading-[44px] lg:tracking-[-0.02em] font-medium">Meditation</h3>
                        <div className="bg-[#f0fbff] px-2.5 py-0.5 rounded-[16px]">
                          <span className="text-[#06b1e5] text-[14px] font-medium">Coming Soon</span>
                        </div>
                      </div>
                      <p className="text-[#736F67] leading-6 text-base lg:text-[18px] mb-6">Discover peace and clarity with guided meditations tailored to your emotional and mental needs.</p>
                      <button className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Find your inner peace
                      </button>
                    </div>
                    <div className="w-[560px] flex-shrink-0 overflow-hidden group">
                      <div className="w-full h-[480px] bg-[#f0fbff] rounded-[20px] border border-[rgba(89,213,251,0.1)] flex items-center justify-center relative transition-all duration-300 ease-out">
                        <Image 
                          src="/meditationmockup.webp" 
                          alt="Meditation App Mockup" 
                          width={400}
                          height={400}
                          className="absolute bottom-[48px] lg:bottom-[80px] left-1/2 transform -translate-x-1/2 w-[240px] lg:w-[400px] h-auto group-hover:translate-y-4 transition-all duration-300 ease-out"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className="relative z-10">
        <Testimonials 
          testimonials={CLIENT_TESTIMONIALS_CONFIG.testimonials}
          title="CUSTOMER TESTIMONIALS"
          subtitle="What Our Users Are Saying"
        />
      </div>

      {/* Plans and Pricing */}
      <div id="pricing" className="relative z-10 lg:px-6 lg:py-0 px-1">
        <section className="py-4 lg:py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0] bg-white">
            <div className="custom-dashed-border flex flex-col gap-8 lg:gap-16 lg:py-[96px] pt-[56px] pb-[48px] w-full max-w-[1440px] mx-auto" style={{ "--dash-color": "#F2F4F7" } as React.CSSProperties}>
              {/* Header Section */}
              <div className="lg:px-6 px-3 w-full">
                <div className="flex flex-col items-center lg:items-center gap-8 max-w-[750px] mx-auto w-full">
                  {/* Header */}
                  <div className="flex flex-col items-center lg:items-center gap-4 text-left lg:text-center w-full">
                    <p className="text-[#015033] text-[14px] leading-[20px] tracking-[-0.14px]">PRICING</p>
                    <div className="flex flex-col gap-4 items-center w-full">
                      <h2 className="text-[#101828] text-[36px] leading-[44px] lg:text-[60px] lg:leading-[72px] font-semibold tracking-[-0.72px] lg:tracking-[-1.2px]">
                        Plans and Pricing
                      </h2>
                      <p className="text-[#344054] text-[16px] leading-[24px] tracking-[-0.16px]">
                        Flexible plans and options tailored according to your needs.
                      </p>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <div className="flex gap-1.5 items-center justify-center">
                    <p className={`text-[14px] leading-[20px] tracking-[-0.14px] font-medium transition-colors duration-200 ${!isYearly ? 'text-black' : 'text-[#667085]'}`}>
                      Monthly
                    </p>
                    <button 
                      onClick={() => setIsYearly(!isYearly)}
                      className="relative focus:outline-none"
                    >
                      <div className={`h-6 w-11 rounded-[12px] p-[2px] flex items-center transition-colors duration-200 ${isYearly ? 'bg-[#015033]' : 'bg-[#F2F4F7]'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${isYearly ? 'translate-x-5' : 'translate-x-0'}`}></div>
                      </div>
                    </button>
                    <p className={`text-[14px] leading-[20px] tracking-[-0.14px] font-medium transition-colors duration-200 ${isYearly ? 'text-black' : 'text-[#667085]'}`}>
                      Yearly
                    </p>
                    <div className="bg-[#ECFDF3] px-2 py-0.5 rounded-[16px]">
                      <p className="text-[#027A48] text-[12px] leading-[18px] text-center font-medium">Save 20%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="lg:px-6 px-3 w-full">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-[1200px] w-full mx-auto">
                {/* Basic Plan */}
                <div className="bg-gray-50 rounded-[20px] p-4 lg:p-5 w-full lg:flex-1">
                  <div className="flex flex-col gap-10 w-full">
                    <h3 className="text-[#101828] text-[20px] leading-[30px] lg:text-[24px] lg:leading-[32px] font-semibold tracking-[-0.2px] lg:tracking-[-0.24px]">
                      Basic
                    </h3>
                    
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-end justify-start gap-1">
                          <span className="text-[#101828] text-[36px] leading-[44px] lg:text-[48px] lg:leading-[60px] font-semibold tracking-[-0.72px] lg:tracking-[-0.96px]">
                            Free
                          </span>
                        </div>
                        <p className="text-[#475467] text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] tracking-[-0.14px] lg:tracking-[-0.16px] text-left">
                          All essential features
                        </p>
                      </div>
                      
                      <button className="w-full border border-[#015033] rounded-[4px] px-4 py-3 text-[#015033] text-[16px] leading-[24px] tracking-[-0.16px] hover:bg-gray-50 transition-colors duration-200">
                        Start free plan
                      </button>
                    </div>

                    <div className="flex flex-col gap-6 lg:gap-8">
                      <h4 className="text-[#101828] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-medium tracking-[-0.16px] lg:tracking-[-0.18px]">
                        Free includes:
                      </h4>
                      
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Limited AI therapy conversations
                          </p>
                        </div>
                        
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Mood check-ins
                          </p>
                        </div>
                        
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Provider matchings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plus Plan */}
                <div className="bg-gray-50 rounded-[20px] p-4 lg:p-5 w-full lg:flex-1">
                  <div className="flex flex-col gap-10 w-full">
                    <h3 className="text-[#101828] text-[20px] leading-[30px] lg:text-[24px] lg:leading-[32px] font-semibold tracking-[-0.2px] lg:tracking-[-0.24px]">
                      Plus
                    </h3>
                    
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-end justify-start">
                          <div className="text-[#101828] text-[36px] leading-[1em] lg:text-[48px] lg:leading-[1em] font-semibold tracking-[-0.72px] lg:tracking-[-0.96px] flex items-center">
                            $
                            <div className="flex">
                              {/* Hundreds digit - only for yearly */}
                              <AnimatePresence>
                                {isYearly && (
                                  <motion.div
                                    key="hundreds"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="h-[1em] overflow-hidden">
                                      <RollingDigit digit={1} />
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              {/* Tens digit */}
                              <div className="h-[1em] overflow-hidden">
                                <RollingDigit digit={isYearly ? 4 : 1} />
                              </div>
                              {/* Units digit */}
                              <div className="h-[1em] overflow-hidden">
                                <RollingDigit digit={9} />
                              </div>
                            </div>
                            .99
                          </div>
                          <AnimatePresence mode="wait">
                            <motion.span 
                              key={isYearly ? 'year' : 'month'}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="text-[#101828] text-[16px] leading-[24px] tracking-[-0.16px] ml-1"
                            >
                              {isYearly ? '/year' : '/month'}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                        <p className="text-[#475467] text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] tracking-[-0.14px] lg:tracking-[-0.16px] text-left">
                          Unlimited access
                        </p>
                      </div>
                      
                      <button className="w-full bg-[#015033] rounded-[4px] px-4 py-3 text-white text-[16px] leading-[24px] tracking-[-0.16px] hover:bg-[#013d26] transition-colors duration-200">
                        Try free for 7 days
                      </button>
                    </div>

                    <div className="flex flex-col gap-6 lg:gap-8">
                      <h4 className="text-[#101828] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-medium tracking-[-0.16px] lg:tracking-[-0.18px]">
                        Everything in Basic, plus:
                      </h4>
                      
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Unlimited AI therapy conversations
                          </p>
                        </div>
                        
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Access to full self-care tools
                          </p>
                        </div>
                        
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Unlimited guided meditations
                          </p>
                        </div>
                        
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Priority provider matchings
                          </p>
                        </div>
                        
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#015033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[#1D2939] text-[16px] leading-[24px] tracking-[-0.16px] flex-1">
                            Advanced AI insights
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Founder spotlight */}
      <FounderSpotlight />

      {/* FAQs */}
      <div id="faqs" className="relative z-10 lg:px-6 lg:py-0 px-1">
        <section className="py-4 lg:py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0] bg-[#F9FAFB]">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] pt-[56px] pb-[48px] w-full max-w-[1440px] mx-auto" style={{ "--dash-color": "#D1EAE1" } as React.CSSProperties}>
              <div className="lg:px-6 px-3 w-full">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-8 w-full">
                  {/* Left Column - Title */}
                  <div className="flex flex-col gap-4 w-full lg:w-1/2">
                    <h2 className="text-[36px] leading-[44px] lg:text-[48px] lg:leading-[60px] font-semibold tracking-[-0.02em] text-[#101828]">
                  Frequently asked
                  <br />
                  questions
                </h2>
                    <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#475467]">
                      Still got more questions? <span className="underline hover:text-[#015033] hover:no-underline transition-all duration-200 cursor-pointer">View all FAQs</span>
                </p>
              </div>
                  
                  {/* Right Column - FAQ Items */}
                  <div className="flex flex-col gap-3 w-full lg:w-1/2">
                    <Faq items={CLIENT_FAQ_ITEMS} defaultOpenIndex={0} showIcons={false} />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>

    </div>
  );
}



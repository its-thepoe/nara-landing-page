"use client";
import React from "react";
import { motion } from "framer-motion";
import { QuoteDown, UserSearch, TaskSquare, SmsStar, Messages2, Book, UserOctagon } from "iconsax-react";
import Testimonials from "../shared/testimonials";
import Faq from "../shared/faq";
import { CLIENT_FAQ_ITEMS } from "@/lib/faq-data";
import FounderSpotlight from "../shared/founder-spotlight";
import ClientNavbar from "../layout/client-navbar";
import Footer from "../layout/footer";
import { CLIENT_TESTIMONIALS_CONFIG } from "@/lib/testimonials-data";

// Client homepage - duplicated from landing page as boilerplate
export default function ClientHomepage() {
  const heroMockup = "/clientmockup.webp";

  return (
    <div className="w-full">
      <ClientNavbar />
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
                <div className="mt-8 flex lg:flex-row flex-col justify-center w-full gap-3">
                  <a href="#get-started">
                    <div className="bg-[#015033] hover:bg-[#013d26] hover:scale-[1.02] hover:shadow-sm flex items-center justify-center px-5 h-[48px] cursor-pointer rounded w-full lg:max-w-fit transition-all duration-200 ease-out">
                      <p className="text-center text-base text-white">Get started - for free</p>
                    </div>
                  </a>
                  <div className="border border-[#015033] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm flex items-center justify-center px-5 h-[48px] cursor-pointer rounded w-full lg:max-w-fit transition-all duration-200 ease-out">
                    <p className="text-center text-base text-[#015033]">Book a demo</p>
                  </div>
                </div>
                <motion.div 
                  className="w-full lg:w-[90%] lg:max-w-[1200px] relative h-[250px] lg:h-[921px] lg:max-h-screen mt-[64px] lg:mb-[56px] mb-[48px] rounded-[24px] lg:rounded-[32px overflow-hidden"
                  initial={{ opacity: 1, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <img
                    alt="nara-dash"
                    src={heroMockup}
                    className="absolute object-contain"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent"
                    }}
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
              <div className="lg:px-6 px-3 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-6 lg:gap-8 text-left lg:text-center">
                  <p className="text-[#015033] text-sm">FEATURES</p>
                  <p className="text-[#101828] lg:leading-[72px] leading-[44px] lg:text-[60px] text-[36px] font-semibold">
                    What We Offer
                  </p>
                  <p className="text-base text-[#736F67] leading-[24px] mb-4">
                    Tools and guidance to help you feel and live better.
                  </p>
                </div>

              {/* Mobile Layout - Single Column */}
                <motion.div 
                  className="flex flex-col gap-12 lg:hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Self Care Feature - Horizontal Layout */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6 h-[280px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-[#01BC77] rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex-1">
                        <div className="size-12 rounded-full flex items-center justify-center bg-[#E5F8F1] mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#01BC77"/>
                          </svg>
                        </div>
                        <h3 className="text-[#353535] text-xl font-medium mb-3">Self Care</h3>
                        <p className="text-[#736F67] text-sm leading-5 mb-4">Personalize your self-care with mood check-ins, gratitude, journaling, sharing love & much more</p>
                        <button className="px-4 py-2 bg-[#015033] text-white rounded-md text-sm font-medium">
                          Start Self Care
                        </button>
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500 text-sm">iPhone Mockup</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Therapy Feature - Vertical Stack */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-[#0665FE] rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full flex items-center justify-center bg-[#EFF3FB]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#0665FE"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#353535] text-xl font-medium">Therapy</h3>
                        <p className="text-[#736F67] text-base leading-6">Match with the right therapist for you, eliminating guesswork and awkward mismatches</p>
                      </div>
                    </div>
                    <button className="w-fit px-5 py-3 bg-[#015033] text-white rounded-md text-sm font-medium">
                      Find a Therapist
                    </button>
                  </motion.div>

                  {/* AI Therapy Feature - Vertical Stack */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-[#D92D20] rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full flex items-center justify-center bg-[#FDF2F2]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#D92D20"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#353535] text-xl font-medium">AI Therapy</h3>
                        <p className="text-[#736F67] text-base leading-6">Engage with Nara AI for 24/7 personalized mental health support anytime, anywhere.</p>
                      </div>
                    </div>
                    <button className="w-fit px-5 py-3 bg-[#015033] text-white rounded-md text-sm font-medium">
                      Start a chat
                    </button>
                  </motion.div>

                  {/* Meditation Feature - Vertical Stack */}
                  <motion.div 
                    className="flex flex-col gap-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-[#0EA5E9] rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full flex items-center justify-center bg-[#F0F9FF]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#0EA5E9"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#353535] text-xl font-medium">Meditation</h3>
                        <p className="text-[#736F67] text-base leading-6">Discover peace and clarity with guided meditations tailored to your emotional and mental needs.</p>
                      </div>
                    </div>
                    <button className="w-fit px-5 py-3 bg-[#015033] text-white rounded-md text-sm font-medium">
                      Find your inner peace
                    </button>
                  </motion.div>

              </motion.div>

              {/* Desktop Layout - 1x1 Single Column - Full Width */}
              <motion.div 
                className="hidden lg:flex flex-col space-y-16 w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                  {/* Self Care (Image Left, Text Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 h-[480px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex-1">
                      <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">iPhone Mockup</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="size-12 rounded-full flex items-center justify-center bg-[#E5F8F1] mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#01BC77"/>
                        </svg>
                      </div>
                      <h3 className="text-[#353535] text-2xl font-medium mb-4">Self Care</h3>
                      <p className="text-[#736F67] leading-6 text-base mb-6">Personalize your self-care with mood check-ins, gratitude, journaling, sharing love & much more</p>
                      <button className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Start Self Care
                      </button>
                    </div>
                  </motion.div>

                  {/* Therapy (Text Left, Image Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 h-[480px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex-1">
                      <div className="size-12 rounded-full flex items-center justify-center bg-[#EFF3FB] mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#0665FE"/>
                        </svg>
                      </div>
                      <h3 className="text-[#353535] text-2xl font-medium mb-4">Therapy</h3>
                      <p className="text-[#736F67] leading-6 text-base mb-6">Match with the right therapist for you, eliminating guesswork and awkward mismatches</p>
                      <button className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Find a Therapist
                      </button>
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">iPhone Mockup</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* AI Therapy (Image Left, Text Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 h-[480px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex-1">
                      <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">iPhone Mockup</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="size-12 rounded-full flex items-center justify-center bg-[#FDF2F2] mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#D92D20"/>
                        </svg>
                      </div>
                      <h3 className="text-[#353535] text-2xl font-medium mb-4">AI Therapy</h3>
                      <p className="text-[#736F67] leading-6 text-base mb-6">Engage with Nara AI for 24/7 personalized mental health support anytime, anywhere.</p>
                      <button className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out border border-[#015033]">
                        Start a chat
                      </button>
                    </div>
                  </motion.div>

                  {/* Meditation (Text Left, Image Right) */}
                  <motion.div 
                    className="flex items-start gap-12 w-full py-8 h-[480px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex-1">
                      <div className="size-12 rounded-full flex items-center justify-center bg-[#F0F9FF] mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#0EA5E9"/>
                        </svg>
                      </div>
                      <h3 className="text-[#353535] text-2xl font-medium mb-4">Meditation</h3>
                      <p className="text-[#736F67] leading-6 text-base mb-6">Discover peace and clarity with guided meditations tailored to your emotional and mental needs.</p>
                      <button className="px-5 py-3 bg-[#015033] text-white rounded-md text-sm font-medium">
                        Find your inner peace
                      </button>
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">iPhone Mockup</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* How it works */}
      <div id="how-it-works" className="relative z-10 lg:px-6 lg:py-0 px-1">
        <section className="py-4 lg:py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#B9DFD1] bg-[#F4FBF9]">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full max-w-[1440px] mx-auto" style={{ "--dash-color": "#D1EAE1" } as React.CSSProperties}>
              <div className="flex flex-col items-center gap-12 lg:px-6 px-3 w-full">
              {/* Header */}
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <p className="text-[12px] md:text-[14px] tracking-[-0.01em] text-[#015033]">GET STARTED</p>
                <div className="flex w-full flex-col items-center gap-3">
                  <h2 className="text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] font-semibold tracking-[-0.02em] text-[#070611]">
                    How it works
                  </h2>
                  <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] tracking-[-0.01em] text-[#475467]">
                    Built with therapists, for therapists. Every feature is shaped by real feedback and real needs.
                  </p>
                </div>
              </div>

              {/* Steps grid: mobile column, desktop 3 columns, 16px gap */}
              <motion.div 
                className="grid w-full grid-cols-1 gap-4 text-left md:grid-cols-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                  <motion.div 
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -4 }}
                    style={{ transition: "transform 0.2s ease-out" }}
                  >
                    <div className="mx-5 md:mx-8 inline-flex w-fit items-center justify-center rounded-t-md bg-[#01BC77] px-2 py-1 text-[12px] font-medium text-white">
                      STEP 1
                    </div>
                    <div className="relative rounded-[16px] md:rounded-[20px] bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <h3 className="mb-2 text-[20px] leading-[30px] md:text-[24px] md:leading-[32px] font-medium text-[#222]">
                        Apply Today
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] tracking-[-0.01em] text-[#475467]">
                        Sign up, verify your credentials, and customise your profile.
                      </p>
                      <div className="pointer-events-none absolute inset-0 rounded-[16px] md:rounded-[20px] border border-[#EDF9F5]" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -4 }}
                    style={{ transition: "transform 0.2s ease-out" }}
                  >
                    <div className="mx-5 md:mx-8 inline-flex w-fit items-center justify-center rounded-t-md bg-[#01BC77] px-2 py-1 text-[12px] font-medium text-white">
                      STEP 2
                    </div>
                    <div className="relative rounded-[16px] md:rounded-[20px] bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <h3 className="mb-2 text-[20px] leading-[30px] md:text-[24px] md:leading-[32px] font-medium text-[#222]">
                        Get Connected
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] tracking-[-0.01em] text-[#475467]">
                        Invite your clients, sync your availability, and review their onboarding info.
                      </p>
                      <div className="pointer-events-none absolute inset-0 rounded-[16px] md:rounded-[20px] border border-[#EDF9F5]" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -4 }}
                    style={{ transition: "transform 0.2s ease-out" }}
                  >
                    <div className="mx-5 md:mx-8 inline-flex w-fit items-center justify-center rounded-t-md bg-[#01BC77] px-2 py-1 text-[12px] font-medium text-white">
                      STEP 3
                    </div>
                    <div className="relative rounded-[16px] md:rounded-[20px] bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <h3 className="mb-2 text-[20px] leading-[30px] md:text-[24px] md:leading-[32px] font-medium text-[#222]">
                        Track & Support
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] tracking-[-0.01em] text-[#475467]">
                        Assign homework, monitor insights, and follow AI summaries (with consent).
                      </p>
                      <div className="pointer-events-none absolute inset-0 rounded-[16px] md:rounded-[20px] border border-[#EDF9F5]" />
                    </div>
                  </motion.div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                className="flex w-full flex-col items-center gap-[12px] md:flex-row md:justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <a
                  href="#get-started"
                  className="w-full md:w-auto rounded-[4px] bg-[#015033] hover:bg-[#013d26] hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-white transition-all duration-200 ease-out"
                >
                  Get started - for free
                </a>
                <a
                  href="#book-demo"
                  className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out"
                  style={{ borderColor: "#015033", borderWidth: 1 }}
                >
                  Book a demo
                </a>
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

      {/* Founder spotlight */}
      <FounderSpotlight />

      {/* FAQs */}
      <div id="faqs" className="relative z-10 lg:px-6 lg:py-0 px-1">
        <section className="py-4 lg:py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0] bg-[#F9FAFB]">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full max-w-[1440px] mx-auto" style={{ "--dash-color": "#D1EAE1" } as React.CSSProperties}>
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

      <Footer />
      
      {/* Post-Footer - Fixed Background Image Container */}
      <div className="fixed bottom-0 left-0 right-0 z-[-1] flex w-full items-center justify-center px-4 py-0 lg:px-36 bg-gradient-to-b from-[#080808] to-[#00100A]">
        {/* Desktop Background */}
        <div 
          className="hidden lg:block h-[210.938px] w-[1152px] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/footerlogo-desktop.webp')" 
          }}
        />
        {/* Mobile Background */}
        <div 
          className="block lg:hidden h-[69px] w-full max-w-[343px] bg-contain bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/footerlogo-mobile.webp')" 
          }}
        />
      </div>
    </div>
  );
}



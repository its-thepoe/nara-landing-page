"use client";
import React from "react";
import { motion } from "framer-motion";
import { QuoteDown, UserSearch, TaskSquare, SmsStar, Messages2, Book, UserOctagon } from "iconsax-react";
import Testimonials from "../shared/testimonials";
import Faq from "./faq";
import FounderSpotlight from "../shared/founder-spotlight";
import { THERAPIST_TESTIMONIALS_CONFIG } from "@/lib/testimonials-data";
import Image from "next/image";
import Navbar from "../layout/navbar";
import { PROVIDER_NAV_CONFIG } from "@/lib/navigation-config";

// Single responsive landing built from the desktop version and adapted down to mobile
export default function Landing() {
  const heroMockup = "/providerdashboardmockup.webp";

  return (
    <>
      <Navbar {...PROVIDER_NAV_CONFIG} />
      <div className="relative z-10 w-full bg-white">
      {/* Hero Section with improved background structure */}
      <div className="relative z-10 lg:px-6 px-3">
        <div className="lg:px-20 lg:pb-3 p-4 bg-gradient-to-b from-[#f7fefb] to-[#e7fef6] shadow-xs rounded-b-[24px] lg:rounded-b-[32px] border-b border-[#e7fef6] overflow-hidden">
          <div className="flex flex-col">
            <div className="pt-20 lg:pt-48">
              <div className="flex flex-col items-center justify-center lg:text-center">
                <p className="text-[#101828] font-semibold text-[36px] lg:text-[60px] lg:leading-[72px] leading-[44px]">
                  Managing all your patients <br className="lg:flex hidden" />
                  has never been this easy
                </p>
                <p className="text-[20px] font-normal lg:text-xl leading-[30px] text-[#475467] mt-4">
                  Save time with our smart dashboard that helps you track progress, <br className="lg:flex hidden" />
                  and stay connected between sessions.
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
                <div className="mt-8 flex items-center justify-center gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.naratherapy.naramobile"
                    className="transition-all duration-200 hover:scale-105 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/playstorebadge.svg"
                      alt="Get it on Google Play"
                      width={135}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/nara-therapy/id6504929821"
                    className="transition-all duration-200 hover:scale-105 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/appstorebadge.svg"
                      alt="Download on the App Store"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
                <motion.div 
                  className="w-full lg:w-[90%] lg:max-w-[1200px] relative h-[250px] lg:h-[921px] lg:max-h-screen mt-[64px] lg:mb-[56px] mb-[48px] rounded-[24px] lg:rounded-[32px] overflow-hidden"
                  initial={{ opacity: 1, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Image
                    alt="nara-dash"
                    src={heroMockup}
                    fill
                    className="object-fill"
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
                <div className="flex flex-col gap-6 lg:gap-8">
                  <p className="text-[#015033] text-sm">FEATURES</p>
                  <p className="text-[#101828] lg:leading-[72px] leading-[44px] lg:text-[60px] text-[36px] font-semibold">
                    One dashboard,<br className="hidden lg:flex" /> everything you need
                  </p>
                  <p className="text-base text-[#736F67] leading-[24px] mb-4">
                    Get a complete view of your client&apos;s mental health journey—from onboarding <br className="hidden lg:flex" /> to insights and ongoing support.
                  </p>
                </div>

              {/* Mobile Layout - Single Column */}
                <motion.div 
                  className="flex flex-col gap-8 lg:hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div 
                    className="flex flex-col gap-8 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#E5F8F1"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#01BC77" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M23.9982 26.1743C18.9882 26.1743 14.9082 29.5343 14.9082 33.6743C14.9082 33.9543 15.1282 34.1743 15.4082 34.1743H32.5882C32.8682 34.1743 33.0882 33.9543 33.0882 33.6743C33.0882 29.5343 29.0082 26.1743 23.9982 26.1743Z" fill="#01BC77"/>
                        <path d="M28.72 22.5243L27.76 21.5643C28.26 20.8143 28.55 19.9143 28.55 18.9443C28.55 16.3043 26.41 14.1743 23.78 14.1743C21.15 14.1743 19 16.3143 19 18.9443C19 21.5743 21.14 23.7143 23.77 23.7143C24.74 23.7143 25.64 23.4243 26.39 22.9243L27.35 23.8843C27.54 24.0743 27.79 24.1643 28.03 24.1643C28.28 24.1643 28.53 24.0743 28.71 23.8843C29.09 23.5143 29.09 22.9043 28.72 22.5243Z" fill="#01BC77"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">Remote Patient Monitoring</p>
                      <p className="text-[#736F67] text-base leading-6">Get real-time data on mood, engagement, and therapy progress.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-8 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#EFF3FB"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#0665FE" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M28.19 14.1743H19.81C16.17 14.1743 14 16.3443 14 19.9843V28.3643C14 32.0043 16.17 34.1743 19.81 34.1743H28.19C31.83 34.1743 34 32.0043 34 28.3643V19.9843C34 16.3443 31.83 14.1743 28.19 14.1743ZM21.97 27.0743L19.72 29.3243C19.57 29.4743 19.38 29.5443 19.19 29.5443C19 29.5443 18.8 29.4743 18.66 29.3243L17.91 28.5743C17.61 28.2843 17.61 27.8043 17.91 27.5143C18.2 27.2243 18.67 27.2243 18.97 27.5143L19.19 27.7343L20.91 26.0143C21.2 25.7243 21.67 25.7243 21.97 26.0143C22.26 26.3043 22.26 26.7843 21.97 27.0743ZM21.97 20.0743L19.72 22.3243C19.57 22.4743 19.38 22.5443 19.19 22.5443C19 22.5443 18.8 22.4743 18.66 22.3243L17.91 21.5743C17.61 21.2843 17.61 20.8043 17.91 20.5143C18.2 20.2243 18.67 20.2243 18.97 20.5143L19.19 20.7343L20.91 19.0143C21.2 18.7243 21.67 18.7243 21.97 19.0143C22.26 19.3043 22.26 19.7843 21.97 20.0743ZM29.56 28.7943H24.31C23.9 28.7943 23.56 28.4543 23.56 28.0443C23.56 27.6343 23.9 27.2943 24.31 27.2943H29.56C29.98 27.2943 30.31 27.6343 30.31 28.0443C30.31 28.4543 29.98 28.7943 29.56 28.7943ZM29.56 21.7943H24.31C23.9 21.7943 23.56 21.4543 23.56 21.0443C23.56 20.6343 23.9 20.2943 24.31 20.2943H29.56C29.98 20.2943 30.31 20.6343 30.31 21.0443C30.31 21.4543 29.98 21.7943 29.56 21.7943Z" fill="#0665FE"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">Assignments</p>
                      <p className="text-[#736F67] text-base leading-6">Keep clients engaged between sessions with tailored assignments—track progress effortlessly and send timely reminders.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-8 py-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#FDF2F2"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#D92D20" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M22.3623 14.1892C23.4266 13.836 24.5734 13.836 25.6377 14.1892C26.6976 14.541 27.5301 15.3753 28.3662 16.5476C29.1996 17.7163 30.1206 19.3466 31.3076 21.447L31.3545 21.5291C32.5417 23.6298 33.4623 25.2595 34.0361 26.5808C34.6127 27.9085 34.9 29.0547 34.6709 30.156C34.4402 31.2649 33.8715 32.2737 33.043 33.0359C32.2165 33.7962 31.0908 34.1172 29.6738 34.2712C28.2648 34.4244 26.4212 34.4246 24.0488 34.4246H23.9512C21.5787 34.4246 19.7353 34.4244 18.3262 34.2712C16.9091 34.1172 15.7836 33.7962 14.957 33.0359C14.1284 32.2737 13.5598 31.2649 13.3291 30.156C13.1 29.0547 13.3873 27.9085 13.9639 26.5808C14.5377 25.2594 15.4583 23.6298 16.6455 21.5291L16.6924 21.447C17.8794 19.3466 18.8004 17.7163 19.6338 16.5476C20.4698 15.3753 21.3024 14.541 22.3623 14.1892ZM23.9951 28.1746C23.4454 28.1747 23 28.6224 23 29.1746C23.0002 29.7266 23.4456 30.1744 23.9951 30.1746H24.0039C24.5536 30.1746 24.9998 29.7266 25 29.1746C25 28.6223 24.5537 28.1746 24.0039 28.1746H23.9951ZM24 20.1746C23.4477 20.1746 23 20.6223 23 21.1746V25.1746C23.0002 25.7266 23.4479 26.1746 24 26.1746C24.5521 26.1745 24.9998 25.7266 25 25.1746V21.1746C25 20.6223 24.5522 20.1746 24 20.1746Z" fill="#D92D20"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">High Risk Detection</p>
                      <p className="text-[#736F67] text-base leading-6">Identify early signs of high-risk patients through assessments, mood check-ins, AI-powered conversations, and other integrated tools.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-8 py-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#FFFBEB"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#FFC800" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M31.4792 14.9943L31.7592 15.5643C31.8992 15.8443 32.2492 16.1043 32.5592 16.1643L32.9392 16.2243C34.0792 16.4143 34.3492 17.2543 33.5292 18.0843L33.1792 18.4343C32.9492 18.6743 32.8192 19.1343 32.8892 19.4543L32.9392 19.6643C33.2492 21.0443 32.5192 21.5743 31.3192 20.8543L31.0592 20.7043C30.7492 20.5243 30.2492 20.5243 29.9392 20.7043L29.6792 20.8543C28.4692 21.5843 27.7392 21.0443 28.0592 19.6643L28.1092 19.4543C28.1792 19.1343 28.0492 18.6743 27.8192 18.4343L27.4692 18.0743C26.6492 17.2443 26.9192 16.4043 28.0592 16.2143L28.4392 16.1543C28.7392 16.1043 29.0992 15.8343 29.2392 15.5543L29.5192 14.9843C30.0592 13.9043 30.9392 13.9043 31.4792 14.9943Z" fill="#FFC800"/>
                        <path d="M33.57 22.2643C33.21 22.5243 32.2 23.0043 30.76 22.2643C30.6 22.1843 30.4 22.1743 30.24 22.2643C29.67 22.5543 29.15 22.6743 28.74 22.6743C28.1 22.6743 27.65 22.4243 27.43 22.2643C27.06 21.9943 26.28 21.2243 26.55 19.5943C26.58 19.4243 26.53 19.2543 26.42 19.1243C25.73 18.3343 25.35 17.2743 25.62 16.4443C25.72 16.1143 25.51 15.6743 25.17 15.6743H19C16 15.6743 14 17.1743 14 20.6743V27.6743C14 31.1743 16 32.6743 19 32.6743H29C32 32.6743 34 31.1743 34 27.6743V22.4443C34 22.2543 33.73 22.1543 33.57 22.2643ZM26.34 24.2643C25.68 24.7943 24.84 25.0543 24 25.0543C23.16 25.0543 22.31 24.7943 21.66 24.2643L18.53 21.7643C18.21 21.5043 18.16 21.0243 18.41 20.7043C18.67 20.3843 19.14 20.3243 19.46 20.5843L22.59 23.0843C23.35 23.6943 24.64 23.6943 25.4 23.0843C25.72 22.8243 26.19 22.8743 26.45 23.2043C26.72 23.5243 26.67 24.0043 26.34 24.2643Z" fill="#FFC800"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">AI Chat Summaries</p>
                      <p className="text-[#736F67] text-base leading-6">View summaries of patient interactions with Nara&apos;s AI (with consent). Stay informed between sessions.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-8 py-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#F0FBFF"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M29.7536 28.4674L30.1003 31.2763C30.1892 32.014 29.3981 32.5296 28.767 32.1474L25.6914 30.3163C25.4781 30.1918 25.4247 29.9252 25.5403 29.7118C25.9847 28.894 26.2247 27.9696 26.2247 27.0452C26.2247 23.7918 23.4336 21.1429 20.0025 21.1429C19.3003 21.1429 18.6158 21.2496 17.9758 21.4629C17.647 21.5696 17.327 21.2674 17.407 20.9296C18.2158 17.694 21.327 15.2852 25.0425 15.2852C29.3803 15.2852 32.8914 18.5652 32.8914 22.6096C32.8914 25.0096 31.6558 27.134 29.7536 28.4674Z" fill="#59D5FB"/>
                        <path d="M24.8911 27.0452C24.8911 28.103 24.4999 29.0808 23.8422 29.8541C22.9622 30.9208 21.5666 31.6052 20.0022 31.6052L17.6822 32.983C17.2911 33.223 16.7933 32.8941 16.8466 32.4408L17.0688 30.6897C15.8777 29.863 15.1133 28.5385 15.1133 27.0452C15.1133 25.4808 15.9488 24.103 17.2288 23.2852C18.0199 22.7697 18.9711 22.4763 20.0022 22.4763C22.7044 22.4763 24.8911 24.5208 24.8911 27.0452Z" fill="#59D5FB"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">Secure messaging</p>
                      <p className="text-[#736F67] text-base leading-6">Communicate safely with clients between appointments, keeping the therapeutic bond strong.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-8 py-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#FEF6EB"/>
                        <rect x="0.333333" y="0.50765" width="47.3333" height="47.3333" rx="23.6667" stroke="#F59714" strokeOpacity="0.1" strokeWidth="0.666667"/>
                        <path d="M34 17.0242V28.9142C34 29.8842 33.21 30.7742 32.24 30.8942L31.93 30.9342C30.29 31.1542 27.98 31.8342 26.12 32.6142C25.47 32.8842 24.75 32.3942 24.75 31.6842V17.7742C24.75 17.4042 24.96 17.0642 25.29 16.8842C27.12 15.8942 29.89 15.0142 31.77 14.8542H31.83C33.03 14.8542 34 15.8242 34 17.0242Z" fill="#F59714"/>
                        <path d="M22.7102 16.8842C20.8802 15.8942 18.1102 15.0142 16.2302 14.8542H16.1602C14.9602 14.8542 13.9902 15.8242 13.9902 17.0242V28.9142C13.9902 29.8842 14.7802 30.7742 15.7502 30.8942L16.0602 30.9342C17.7002 31.1542 20.0102 31.8342 21.8702 32.6142C22.5202 32.8842 23.2402 32.3942 23.2402 31.6842V17.7742C23.2402 17.3942 23.0402 17.0642 22.7102 16.8842ZM17.0002 19.9142H19.2502C19.6602 19.9142 20.0002 20.2542 20.0002 20.6642C20.0002 21.0842 19.6602 21.4142 19.2502 21.4142H17.0002C16.5902 21.4142 16.2502 21.0842 16.2502 20.6642C16.2502 20.2542 16.5902 19.9142 17.0002 19.9142ZM20.0002 24.4142H17.0002C16.5902 24.4142 16.2502 24.0842 16.2502 23.6642C16.2502 23.2542 16.5902 22.9142 17.0002 22.9142H20.0002C20.4102 22.9142 20.7502 23.2542 20.7502 23.6642C20.7502 24.0842 20.4102 24.4142 20.0002 24.4142Z" fill="#F59714"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">AI Notes</p>
                      <p className="text-[#736F67] text-base leading-6">Manage interest lists, approve new clients, and automate follow-ups—all from one place.</p>
                    </div>
                  </motion.div>
              </motion.div>

              {/* Desktop Layout - Grid */}
              <motion.div 
                className="hidden lg:grid grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                  <motion.div 
                    className="flex flex-col gap-8 py-6 h-[244px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#E5F8F1"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#01BC77" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M23.9982 26.1743C18.9882 26.1743 14.9082 29.5343 14.9082 33.6743C14.9082 33.9543 15.1282 34.1743 15.4082 34.1743H32.5882C32.8682 34.1743 33.0882 33.9543 33.0882 33.6743C33.0882 29.5343 29.0082 26.1743 23.9982 26.1743Z" fill="#01BC77"/>
                        <path d="M28.72 22.5243L27.76 21.5643C28.26 20.8143 28.55 19.9143 28.55 18.9443C28.55 16.3043 26.41 14.1743 23.78 14.1743C21.15 14.1743 19 16.3143 19 18.9443C19 21.5743 21.14 23.7143 23.77 23.7143C24.74 23.7143 25.64 23.4243 26.39 22.9243L27.35 23.8843C27.54 24.0743 27.79 24.1643 28.03 24.1643C28.28 24.1643 28.53 24.0743 28.71 23.8843C29.09 23.5143 29.09 22.9043 28.72 22.5243Z" fill="#01BC77"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">Remote Patient Monitoring</p>
                      <p className="text-[#736F67] leading-6 text-base">Get real-time data on mood, engagement, and therapy progress.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-8 py-6 h-[244px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#EFF3FB"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#0665FE" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M28.19 14.1743H19.81C16.17 14.1743 14 16.3443 14 19.9843V28.3643C14 32.0043 16.17 34.1743 19.81 34.1743H28.19C31.83 34.1743 34 32.0043 34 28.3643V19.9843C34 16.3443 31.83 14.1743 28.19 14.1743ZM21.97 27.0743L19.72 29.3243C19.57 29.4743 19.38 29.5443 19.19 29.5443C19 29.5443 18.8 29.4743 18.66 29.3243L17.91 28.5743C17.61 28.2843 17.61 27.8043 17.91 27.5143C18.2 27.2243 18.67 27.2243 18.97 27.5143L19.19 27.7343L20.91 26.0143C21.2 25.7243 21.67 25.7243 21.97 26.0143C22.26 26.3043 22.26 26.7843 21.97 27.0743ZM21.97 20.0743L19.72 22.3243C19.57 22.4743 19.38 22.5443 19.19 22.5443C19 22.5443 18.8 22.4743 18.66 22.3243L17.91 21.5743C17.61 21.2843 17.61 20.8043 17.91 20.5143C18.2 20.2243 18.67 20.2243 18.97 20.5143L19.19 20.7343L20.91 19.0143C21.2 18.7243 21.67 18.7243 21.97 19.0143C22.26 19.3043 22.26 19.7843 21.97 20.0743ZM29.56 28.7943H24.31C23.9 28.7943 23.56 28.4543 23.56 28.0443C23.56 27.6343 23.9 27.2943 24.31 27.2943H29.56C29.98 27.2943 30.31 27.6343 30.31 28.0443C30.31 28.4543 29.98 28.7943 29.56 28.7943ZM29.56 21.7943H24.31C23.9 21.7943 23.56 21.4543 23.56 21.0443C23.56 20.6343 23.9 20.2943 24.31 20.2943H29.56C29.98 20.2943 30.31 20.6343 30.31 21.0443C30.31 21.4543 29.98 21.7943 29.56 21.7943Z" fill="#0665FE"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">Assignments</p>
                      <p className="text-[#736F67] leading-6 text-base">Keep clients engaged between sessions with tailored assignments—track progress effortlessly and send timely reminders.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-8 py-6 h-[244px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#FDF2F2"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#D92D20" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M22.3623 14.1892C23.4266 13.836 24.5734 13.836 25.6377 14.1892C26.6976 14.541 27.5301 15.3753 28.3662 16.5476C29.1996 17.7163 30.1206 19.3466 31.3076 21.447L31.3545 21.5291C32.5417 23.6298 33.4623 25.2595 34.0361 26.5808C34.6127 27.9085 34.9 29.0547 34.6709 30.156C34.4402 31.2649 33.8715 32.2737 33.043 33.0359C32.2165 33.7962 31.0908 34.1172 29.6738 34.2712C28.2648 34.4244 26.4212 34.4246 24.0488 34.4246H23.9512C21.5787 34.4246 19.7353 34.4244 18.3262 34.2712C16.9091 34.1172 15.7836 33.7962 14.957 33.0359C14.1284 32.2737 13.5598 31.2649 13.3291 30.156C13.1 29.0547 13.3873 27.9085 13.9639 26.5808C14.5377 25.2594 15.4583 23.6298 16.6455 21.5291L16.6924 21.447C17.8794 19.3466 18.8004 17.7163 19.6338 16.5476C20.4698 15.3753 21.3024 14.541 22.3623 14.1892ZM23.9951 28.1746C23.4454 28.1747 23 28.6224 23 29.1746C23.0002 29.7266 23.4456 30.1744 23.9951 30.1746H24.0039C24.5536 30.1746 24.9998 29.7266 25 29.1746C25 28.6223 24.5537 28.1746 24.0039 28.1746H23.9951ZM24 20.1746C23.4477 20.1746 23 20.6223 23 21.1746V25.1746C23.0002 25.7266 23.4479 26.1746 24 26.1746C24.5521 26.1745 24.9998 25.7266 25 25.1746V21.1746C25 20.6223 24.5522 20.1746 24 20.1746Z" fill="#D92D20"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">High Risk Detection</p>
                      <p className="text-[#736F67] leading-6 text-base">Identify early signs of high-risk patients through assessments, mood check-ins, AI-powered conversations, and other integrated tools.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-8 py-6 h-[244px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#FFFBEB"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#FFC800" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M31.4792 14.9943L31.7592 15.5643C31.8992 15.8443 32.2492 16.1043 32.5592 16.1643L32.9392 16.2243C34.0792 16.4143 34.3492 17.2543 33.5292 18.0843L33.1792 18.4343C32.9492 18.6743 32.8192 19.1343 32.8892 19.4543L32.9392 19.6643C33.2492 21.0443 32.5192 21.5743 31.3192 20.8543L31.0592 20.7043C30.7492 20.5243 30.2492 20.5243 29.9392 20.7043L29.6792 20.8543C28.4692 21.5843 27.7392 21.0443 28.0592 19.6643L28.1092 19.4543C28.1792 19.1343 28.0492 18.6743 27.8192 18.4343L27.4692 18.0743C26.6492 17.2443 26.9192 16.4043 28.0592 16.2143L28.4392 16.1543C28.7392 16.1043 29.0992 15.8343 29.2392 15.5543L29.5192 14.9843C30.0592 13.9043 30.9392 13.9043 31.4792 14.9943Z" fill="#FFC800"/>
                        <path d="M33.57 22.2643C33.21 22.5243 32.2 23.0043 30.76 22.2643C30.6 22.1843 30.4 22.1743 30.24 22.2643C29.67 22.5543 29.15 22.6743 28.74 22.6743C28.1 22.6743 27.65 22.4243 27.43 22.2643C27.06 21.9943 26.28 21.2243 26.55 19.5943C26.58 19.4243 26.53 19.2543 26.42 19.1243C25.73 18.3343 25.35 17.2743 25.62 16.4443C25.72 16.1143 25.51 15.6743 25.17 15.6743H19C16 15.6743 14 17.1743 14 20.6743V27.6743C14 31.1743 16 32.6743 19 32.6743H29C32 32.6743 34 31.1743 34 27.6743V22.4443C34 22.2543 33.73 22.1543 33.57 22.2643ZM26.34 24.2643C25.68 24.7943 24.84 25.0543 24 25.0543C23.16 25.0543 22.31 24.7943 21.66 24.2643L18.53 21.7643C18.21 21.5043 18.16 21.0243 18.41 20.7043C18.67 20.3843 19.14 20.3243 19.46 20.5843L22.59 23.0843C23.35 23.6943 24.64 23.6943 25.4 23.0843C25.72 22.8243 26.19 22.8743 26.45 23.2043C26.72 23.5243 26.67 24.0043 26.34 24.2643Z" fill="#FFC800"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">AI Chat Summaries</p>
                      <p className="text-[#736F67] leading-6 text-base">View summaries of patient interactions with Nara&apos;s AI (with consent). Stay informed between sessions.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-8 py-6 h-[244px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#F0FBFF"/>
                        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5"/>
                        <path d="M29.7536 28.4674L30.1003 31.2763C30.1892 32.014 29.3981 32.5296 28.767 32.1474L25.6914 30.3163C25.4781 30.1918 25.4247 29.9252 25.5403 29.7118C25.9847 28.894 26.2247 27.9696 26.2247 27.0452C26.2247 23.7918 23.4336 21.1429 20.0025 21.1429C19.3003 21.1429 18.6158 21.2496 17.9758 21.4629C17.647 21.5696 17.327 21.2674 17.407 20.9296C18.2158 17.694 21.327 15.2852 25.0425 15.2852C29.3803 15.2852 32.8914 18.5652 32.8914 22.6096C32.8914 25.0096 31.6558 27.134 29.7536 28.4674Z" fill="#59D5FB"/>
                        <path d="M24.8911 27.0452C24.8911 28.103 24.4999 29.0808 23.8422 29.8541C22.9622 30.9208 21.5666 31.6052 20.0022 31.6052L17.6822 32.983C17.2911 33.223 16.7933 32.8941 16.8466 32.4408L17.0688 30.6897C15.8777 29.863 15.1133 28.5385 15.1133 27.0452C15.1133 25.4808 15.9488 24.103 17.2288 23.2852C18.0199 22.7697 18.9711 22.4763 20.0022 22.4763C22.7044 22.4763 24.8911 24.5208 24.8911 27.0452Z" fill="#59D5FB"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">Secure messaging</p>
                      <p className="text-[#736F67] leading-6 text-base">Communicate safely with clients between appointments, keeping the therapeutic bond strong.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-8 py-6 h-[244px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="size-12 rounded-full flex items-center justify-start">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.174316" width="48" height="48" rx="24" fill="#FEF6EB"/>
                        <rect x="0.333333" y="0.50765" width="47.3333" height="47.3333" rx="23.6667" stroke="#F59714" strokeOpacity="0.1" strokeWidth="0.666667"/>
                        <path d="M34 17.0242V28.9142C34 29.8842 33.21 30.7742 32.24 30.8942L31.93 30.9342C30.29 31.1542 27.98 31.8342 26.12 32.6142C25.47 32.8842 24.75 32.3942 24.75 31.6842V17.7742C24.75 17.4042 24.96 17.0642 25.29 16.8842C27.12 15.8942 29.89 15.0142 31.77 14.8542H31.83C33.03 14.8542 34 15.8242 34 17.0242Z" fill="#F59714"/>
                        <path d="M22.7102 16.8842C20.8802 15.8942 18.1102 15.0142 16.2302 14.8542H16.1602C14.9602 14.8542 13.9902 15.8242 13.9902 17.0242V28.9142C13.9902 29.8842 14.7802 30.7742 15.7502 30.8942L16.0602 30.9342C17.7002 31.1542 20.0102 31.8342 21.8702 32.6142C22.5202 32.8842 23.2402 32.3942 23.2402 31.6842V17.7742C23.2402 17.3942 23.0402 17.0642 22.7102 16.8842ZM17.0002 19.9142H19.2502C19.6602 19.9142 20.0002 20.2542 20.0002 20.6642C20.0002 21.0842 19.6602 21.4142 19.2502 21.4142H17.0002C16.5902 21.4142 16.2502 21.0842 16.2502 20.6642C16.2502 20.2542 16.5902 19.9142 17.0002 19.9142ZM20.0002 24.4142H17.0002C16.5902 24.4142 16.2502 24.0842 16.2502 23.6642C16.2502 23.2542 16.5902 22.9142 17.0002 22.9142H20.0002C20.4102 22.9142 20.7502 23.2542 20.7502 23.6642C20.7502 24.0842 20.4102 24.4142 20.0002 24.4142Z" fill="#F59714"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#353535] text-xl font-medium">AI Notes</p>
                      <p className="text-[#736F67] leading-6 text-base">Manage interest lists, approve new clients, and automate follow-ups—all from one place.</p>
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
          testimonials={THERAPIST_TESTIMONIALS_CONFIG.testimonials}
          title={THERAPIST_TESTIMONIALS_CONFIG.title}
          subtitle={THERAPIST_TESTIMONIALS_CONFIG.subtitle}
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
                      Got questions? We&apos;ve got answers. Chat with our <span className="underline hover:text-[#015033] hover:no-underline transition-all duration-200 cursor-pointer">&quot;support&quot;</span> team anytime.
                </p>
              </div>
                  
                  {/* Right Column - FAQ Items */}
                  <div className="flex flex-col gap-3 w-full lg:w-1/2">
                    <Faq />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      </div>

    </div>
    </>
  );
}



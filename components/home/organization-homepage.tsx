"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { QuoteDown, UserSearch, TaskSquare, SmsStar, Messages2, Book, UserOctagon, Star1, ArrowLeft, ArrowRight } from "iconsax-react";
import Faq from "../shared/faq";
import FounderSpotlight from "../shared/founder-spotlight";
import SectionContainer from "../shared/section-container";
import { ORGANIZATION_FAQ_ITEMS } from "@/lib/faq-data";
import Image from "next/image";
import Navbar from "../layout/navbar";
import { ORGANIZATION_NAV_CONFIG } from "@/lib/navigation-config";

type EmployeeOfferingCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  badge?: string | null;
};

type SupportPersonaCard = {
  title: string;
  description: string;
  ctaLabel: string;
  audience: string;
};

const EMPLOYEE_OFFERING_CARDS: EmployeeOfferingCard[] = [
  {
    icon: (
      <div className="flex size-12 items-center justify-center rounded-full border border-[#E5F8F1] bg-[#E5F8F1]">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.603027" width="48" height="48" rx="24" fill="#E5F8F1" />
          <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#01BC77" strokeOpacity="0.1" strokeWidth="0.5" />
          <path
            d="M24 35.353C29.9371 35.353 34.75 30.5401 34.75 24.603C34.75 18.666 29.9371 13.853 24 13.853C18.0629 13.853 13.25 18.666 13.25 24.603C13.25 30.5401 18.0629 35.353 24 35.353ZM22.2373 23.3149C21.9312 23.417 21.5941 23.3113 21.4004 23.0532C20.9504 22.4532 20.0496 22.4532 19.5996 23.0532C19.351 23.3843 18.8811 23.4511 18.5498 23.2026C18.2187 22.954 18.1519 22.4841 18.4004 22.1528C18.9124 21.4704 19.6737 21.1209 20.4414 21.104C20.177 20.8095 20.1865 20.3559 20.4697 20.0728C20.7626 19.7799 21.2374 19.7799 21.5303 20.0728C21.564 20.1089 21.6711 20.223 21.7256 20.2866C21.8339 20.4129 21.9784 20.5936 22.124 20.812C22.3989 21.2244 22.75 21.8776 22.75 22.603C22.75 22.9259 22.5436 23.2129 22.2373 23.3149Z"
            fill="#01BC77"
          />
          <path
            d="M26.5996 23.0532C26.4059 23.3113 26.0688 23.417 25.7627 23.3149C25.4564 23.2129 25.25 22.9259 25.25 22.603C25.25 21.8776 25.6011 21.2244 25.876 20.812C26.0216 20.5936 26.1661 20.4129 26.2744 20.2866C26.3289 20.223 26.436 20.1089 26.4697 20.0728C26.7626 19.7799 27.2374 19.7799 27.5303 20.0728C27.8135 20.3559 27.823 20.8095 27.5586 21.104C28.3263 21.1209 29.0876 21.4704 29.5996 22.1528C29.8481 22.4841 29.7813 22.954 29.4502 23.2026C29.1189 23.4511 28.649 23.3843 28.4004 23.0532C27.9504 22.4532 27.0496 22.4532 26.5996 23.0532ZM24 30.353C22.1185 30.353 20.4481 29.4481 19.4004 28.0532C19.1517 27.722 19.2186 27.2521 19.5498 27.0034C19.881 26.7547 20.3509 26.8216 20.5996 27.1528C21.3762 28.1867 22.6103 28.853 24 28.853C25.3897 28.853 26.6238 28.1867 27.4004 27.1528C27.6491 26.8217 28.119 26.7548 28.4502 27.0034C28.7814 27.2522 28.8483 27.722 28.5996 28.0532C27.5519 29.4481 25.8816 30.353 24 30.353Z"
            fill="#01BC77"
          />
        </svg>
      </div>
    ),
    title: "Self Care",
    description: "Personalize self-care with mood check-ins, gratitude, journaling, sharing love & more.",
    ctaLabel: "Start self care",
    badge: null,
  },
  {
    icon: (
      <div className="flex size-12 items-center justify-center rounded-full border border-[#EFF3FB] bg-[#EFF3FB]">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.603027" width="48" height="48" rx="24" fill="#EFF3FB" />
          <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#0665FE" strokeOpacity="0.1" strokeWidth="0.5" />
          <path d="M34 20.413V25.103H29.92C29.8 25.093 29.54 24.943 29.48 24.833L28.44 22.863C28.03 22.083 27.32 21.643 26.56 21.683C25.8 21.723 25.15 22.233 24.82 23.063L23.44 26.523L23.24 26.003C22.75 24.733 21.35 23.773 19.97 23.773L14 23.803V20.413C14 16.773 16.17 14.603 19.81 14.603H28.19C31.83 14.603 34 16.773 34 20.413Z" fill="#0665FE" />
          <path d="M34 28.793V26.603H29.92C29.25 26.603 28.46 26.123 28.15 25.533L27.11 23.563C26.83 23.033 26.43 23.063 26.21 23.613L23.91 29.423C23.66 30.073 23.24 30.073 22.98 29.423L21.84 26.543C21.57 25.843 20.73 25.273 19.98 25.273L14 25.303V28.793C14 32.373 16.1 34.533 19.63 34.593C19.74 34.603 19.86 34.603 19.97 34.603H27.97C28.12 34.603 28.27 34.603 28.41 34.593C31.92 34.513 34 32.363 34 28.793Z" fill="#0665FE" />
        </svg>
      </div>
    ),
    title: "Therapy",
    description: "Match teammates with the right therapist, eliminating guesswork and awkward mismatches.",
    ctaLabel: "Find a therapist",
    badge: null,
  },
  {
    icon: (
      <div className="flex size-12 items-center justify-center rounded-full border border-[#F0FBFF] bg-[#F0FBFF]">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.603027" width="48" height="48" rx="24" fill="#F0FBFF" />
          <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5" />
          <path d="M26.75 16.603C26.75 15.0842 25.5188 13.853 24 13.853C22.4812 13.853 21.25 15.0842 21.25 16.603C21.25 18.1218 22.4812 19.353 24 19.353C25.5188 19.353 26.75 18.1218 26.75 16.603Z" fill="#59D5FB" />
          <path d="M24 19.853C22.1235 19.853 20.4224 20.5464 19.1896 21.6661C19.0655 21.7788 18.9461 21.8959 18.8318 22.017C18.3444 22.5331 18.161 23.1567 18.0627 23.6363C17.9065 24.398 17.5898 25.2847 17.0854 25.9569C16.5933 26.6127 15.9951 26.9831 15.225 26.9831C14.6865 26.9831 14.25 27.3821 14.25 27.8744C14.25 28.3666 14.6865 28.7656 15.225 28.7656C16.8397 28.7656 17.969 27.9306 18.6934 26.9652C19.3068 26.1478 19.6804 25.1811 19.8903 24.3529C20.2492 25.2113 20.4742 26.0318 20.3893 26.8388C20.2887 27.7958 19.665 28.5126 18.6721 29.1775C18.1789 29.5077 17.6266 29.8036 17.0515 30.1002C16.5802 30.3416 15.7996 30.7418 15.3672 30.9987C14.3771 31.5869 14.1003 32.6941 14.3235 33.5948C14.5504 34.5106 15.3294 35.353 16.5358 35.353C18.5176 35.353 20.3854 35.197 22.2897 34.3019L23.9098 33.3104L25.5681 34.3044C27.5076 35.1972 29.4098 35.353 31.4317 35.353C32.6442 35.353 33.4407 34.5228 33.6746 33.5984C33.9048 32.6886 33.6158 31.5797 32.6111 30.9952C32.1701 30.7387 31.677 30.4913 31.1957 30.2499C30.6083 29.9533 29.7398 29.5043 29.2353 29.1735C28.217 28.5058 27.5827 27.7884 27.4806 26.8372C27.3907 26.0006 27.6628 25.1289 28.0748 24.2104C28.2771 25.0686 28.6576 26.1004 29.3066 26.9652C30.031 27.9306 31.1603 28.7656 32.775 28.7656C33.3135 28.7656 33.75 28.3666 33.75 27.8744C33.75 27.3821 33.3135 26.9831 32.775 26.9831C32.0049 26.9831 31.4067 26.6127 30.9146 25.9569C30.4102 25.2847 30.0935 24.398 29.9373 23.6363C29.839 23.1567 29.6556 22.5331 29.1682 22.017C29.0367 21.8777 28.8987 21.7439 28.7544 21.6158C27.5264 20.5257 25.8481 19.853 24 19.853Z"
            fill="#59D5FB"
          />
        </svg>
      </div>
    ),
    title: "Meditation",
    description: "Guided meditations tailored to emotional and mental needs—built for busy workdays.",
    ctaLabel: "Find your inner peace",
    badge: "Coming soon",
  },
];

const SUPPORT_PERSONA_CARDS: SupportPersonaCard[] = [
  {
    audience: "For HR leaders",
    title: "Improve outcomes and lower costs with personalized mental health care.",
    description: "Give your workforce access to therapy, meditation, and AI-guided support in one secure platform designed for busy schedules.",
    ctaLabel: "Learn more",
  },
  {
    audience: "For benefits administrators",
    title: "Measure utilization without spreadsheets or manual surveys.",
    description: "Plug Nara into your existing benefits stack and unlock real-time insights on engagement, risk, and satisfaction.",
    ctaLabel: "Learn more",
  },
  {
    audience: "For people and culture teams",
    title: "Bring calm to every day—from onboarding to big launches.",
    description: "Support managers and ICs with ready-made programs, nudges, and content that keep teams grounded and connected.",
    ctaLabel: "Learn more",
  },
];

// Single responsive landing built from the desktop version and adapted down to mobile
export default function Landing() {
  const heroMockup = "/providerdashboardmockup.webp";
  const ORGANIZATION_TESTIMONIALS = [
    {
      quote:
        "We had tried several wellbeing tools, but staff saw them as “one more thing” to do. With Nara, people started using it between meetings and on their commute. The feedback we hear most is, “This actually fits into my day.”",
      author: "Alex Carter",
      role: "Product Designer, Base",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=160&h=160&q=80",
    },
    {
      quote:
        "Nara makes mental health support effortless. Our team leans on it during crunch time, and leadership finally has visibility into engagement without extra reporting.",
      author: "Sasha Patel",
      role: "VP, People Operations at Northwind",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=160&h=160&q=80",
    },
    {
      quote:
        "Rolling out Nara took days, not months. Clinicians rave about the assignments and AI summaries, and our execs love the measurable outcomes.",
      author: "Morgan Lee",
      role: "Clinical Director, Mindful Health",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=160&h=160&q=80",
    },
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = ORGANIZATION_TESTIMONIALS[testimonialIndex];

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + ORGANIZATION_TESTIMONIALS.length) % ORGANIZATION_TESTIMONIALS.length);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % ORGANIZATION_TESTIMONIALS.length);
  };

  return (
    <>
      <Navbar {...ORGANIZATION_NAV_CONFIG} />
      <div className="relative z-10 w-full bg-white">
      {/* Hero Section with improved background structure */}
      <div id="hero" className="relative z-10 px-1 lg:px-4">
        <div className="lg:px-20 lg:pb-3 p-4 bg-gradient-to-b from-[#f7fefb] to-[#e7fef6] shadow-xs rounded-b-[24px] lg:rounded-b-[32px] border-b border-[#e7fef6] overflow-hidden">
          <div className="flex flex-col">
            <div className="pt-20 lg:pt-36">
              <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
                <p className="text-[#101828] font-semibold text-[36px] lg:text-[60px] lg:leading-[72px] leading-[44px]">
                  Support your people’s<br className="lg:flex hidden" />
                  minds, every day
                </p>
                <p className="text-[20px] font-normal lg:text-xl leading-[30px] text-[#475467] mt-4">
                  Nara helps your employees manage stress, sleep better and stay present at work with therapy, meditation, AI-assisted support and self-care in one place.
                </p>
                  <div className="mt-8 flex lg:flex-row flex-col justify-center lg:justify-start w-full gap-3">
                  <a href="javascript:void(0)">
                      <div className="bg-[#015033] hover:bg-[#013d26] hover:scale-[1.02] hover:shadow-sm flex items-center justify-center px-5 h-[48px] cursor-pointer rounded w-full lg:w-auto transition-all duration-200 ease-out">
                        <p className="text-center text-base text-white">Book Your Demo</p>
                    </div>
                  </a>
                  
                    </div>
              
                </div>
                <motion.div 
                  className="w-full lg:w-1/2 relative h-[250px] lg:h-[620px] mt-[64px] lg:mt-0 lg:mb-0 mb-[48px] rounded-[24px] lg:rounded-[32px] overflow-hidden"
                  initial={{ opacity: 1, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
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
      <SectionContainer
        id="features"
        variant="white"
        withDashedWrapper
        dashedWrapperClassName="flex flex-col gap-8 lg:py-24 py-14 w-full"
        >
          <div className="lg:px-6 px-3 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-6 lg:gap-8 text-center items-center">
                  <p className="text-[#015033] text-sm">OFFERINGS</p>
                  <p
                    className="mx-auto flex w-full max-w-[335px] items-center justify-center text-center text-[30px] leading-[38px] font-semibold text-[#101828] tracking-[-0.02em] lg:max-w-[685px] lg:text-[48px] lg:leading-[60px] lg:text-[#070611]"
                  >
                    What employees get with Nara
                  </p>
                  <p className="text-base text-[#736F67] leading-[24px] mb-4 max-w-3xl">
                    Care that is easy to reach, clinically grounded, and built for busy workdays.
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
                        <path d="M23.9982 26.1743C18.9882 26.1743 14.9082 29.5343 14.9082 33.6743C14.9082 33.9543 15.1282 34.1743 15.4082 34.1743H32.5882C32.8682 34.1743 33.0882 33.9543 33.0882 33.6743C33.0882 29.5343 29.0082 26.1743 23.9982 26.1743ZM28.72 22.5243L27.76 21.5643C28.26 20.8143 28.55 19.9143 28.55 18.9443C28.55 16.3043 26.41 14.1743 23.78 14.1743C21.15 14.1743 19 16.3143 19 18.9443C19 21.5743 21.14 23.7143 23.77 23.7143C24.74 23.7143 25.64 23.4243 26.39 22.9243L27.35 23.8843C27.54 24.0743 27.79 24.1643 28.03 24.1643C28.28 24.1643 28.53 24.0743 28.71 23.8843C29.09 23.5143 29.09 22.9043 28.72 22.5243Z" fill="#01BC77"/>
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
                            <rect y="0.603027" width="48" height="48" rx="24" fill="#F0FBFF"/>
                            <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5"/>
                            <path d="M26.75 16.603C26.75 15.0842 25.5188 13.853 24 13.853C22.4812 13.853 21.25 15.0842 21.25 16.603C21.25 18.1218 22.4812 19.353 24 19.353C25.5188 19.353 26.75 18.1218 26.75 16.603Z" fill="#59D5FB"/>
                            <path d="M24 19.853C22.1235 19.853 20.4224 20.5464 19.1896 21.6661C19.0655 21.7788 18.9461 21.8959 18.8318 22.017C18.3444 22.5331 18.161 23.1567 18.0627 23.6363C17.9065 24.398 17.5898 25.2847 17.0854 25.9569C16.5933 26.6127 15.9951 26.9831 15.225 26.9831C14.6865 26.9831 14.25 27.3821 14.25 27.8744C14.25 28.3666 14.6865 28.7656 15.225 28.7656C16.8397 28.7656 17.969 27.9306 18.6934 26.9652C19.3068 26.1478 19.6804 25.1811 19.8903 24.3529C20.2492 25.2113 20.4742 26.0318 20.3893 26.8388C20.2887 27.7958 19.665 28.5126 18.6721 29.1775C18.1789 29.5077 17.6266 29.8036 17.0515 30.1002C16.5802 30.3416 15.7996 30.7418 15.3672 30.9987C14.3771 31.5869 14.1003 32.6941 14.3235 33.5948C14.5504 34.5106 15.3294 35.353 16.5358 35.353C18.5176 35.353 20.3854 35.197 22.2897 34.3019L23.9098 33.3104L25.5681 34.3044C27.5076 35.1972 29.4098 35.353 31.4317 35.353C32.6442 35.353 33.4407 34.5228 33.6746 33.5984C33.9048 32.6886 33.6158 31.5797 32.6111 30.9952C32.1701 30.7387 31.677 30.4913 31.1957 30.2499C30.6083 29.9533 29.7398 29.5043 29.2353 29.1735C28.217 28.5058 27.5827 27.7884 27.4806 26.8372C27.3907 26.0006 27.6628 25.1289 28.0748 24.2104C28.2771 25.0686 28.6576 26.1004 29.3066 26.9652C30.031 27.9306 31.1603 28.7656 32.775 28.7656C33.3135 28.7656 33.75 28.3666 33.75 27.8744C33.75 27.3821 33.3135 26.9831 32.775 26.9831C32.0049 26.9831 31.4067 26.6127 30.9146 25.9569C30.4102 25.2847 30.0935 24.398 29.9373 23.6363C29.839 23.1567 29.6556 22.5331 29.1682 22.017C29.0367 21.8777 28.8987 21.7439 28.7544 21.6158C27.5264 20.5257 25.8481 19.853 24 19.853Z" fill="#59D5FB"/>
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
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
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
                            <rect y="0.603027" width="48" height="48" rx="24" fill="#EFF3FB"/>
                            <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#0665FE" strokeOpacity="0.1" strokeWidth="0.5"/>
                            <path d="M34 20.413V25.103H29.92C29.8 25.093 29.54 24.943 29.48 24.833L28.44 22.863C28.03 22.083 27.32 21.643 26.56 21.683C25.8 21.723 25.15 22.233 24.82 23.063L23.44 26.523L23.24 26.003C22.75 24.733 21.35 23.773 19.97 23.773L14 23.803V20.413C14 16.773 16.17 14.603 19.81 14.603H28.19C31.83 14.603 34 16.773 34 20.413Z" fill="#0665FE"/>
                            <path d="M34 28.7929V26.6029H29.92C29.25 26.6029 28.46 26.1229 28.15 25.5329L27.11 23.5629C26.83 23.0329 26.43 23.0629 26.21 23.6129L23.91 29.4229C23.66 30.0729 23.24 30.0729 22.98 29.4229L21.84 26.5429C21.57 25.8429 20.73 25.2729 19.98 25.2729L14 25.3029V28.7929C14 32.3729 16.1 34.5329 19.63 34.5929C19.74 34.6029 19.86 34.6029 19.97 34.6029H27.97C28.12 34.6029 28.27 34.6029 28.41 34.5929C31.92 34.5129 34 32.3629 34 28.7929Z" fill="#0665FE"/>
                            <path d="M13.9988 25.303V28.613C13.9787 28.293 13.9688 27.953 13.9688 27.603V25.303H13.9988Z" fill="#0665FE"/>
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
                            <rect y="0.603027" width="48" height="48" rx="24" fill="#F0FBFF"/>
                            <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5"/>
                            <path d="M26.75 16.603C26.75 15.0842 25.5188 13.853 24 13.853C22.4812 13.853 21.25 15.0842 21.25 16.603C21.25 18.1218 22.4812 19.353 24 19.353C25.5188 19.353 26.75 18.1218 26.75 16.603Z" fill="#59D5FB"/>
                            <path d="M24 19.853C22.1235 19.853 20.4224 20.5464 19.1896 21.6661C19.0655 21.7788 18.9461 21.8959 18.8318 22.017C18.3444 22.5331 18.161 23.1567 18.0627 23.6363C17.9065 24.398 17.5898 25.2847 17.0854 25.9569C16.5933 26.6127 15.9951 26.9831 15.225 26.9831C14.6865 26.9831 14.25 27.3821 14.25 27.8744C14.25 28.3666 14.6865 28.7656 15.225 28.7656C16.8397 28.7656 17.969 27.9306 18.6934 26.9652C19.3068 26.1478 19.6804 25.1811 19.8903 24.3529C20.2492 25.2113 20.4742 26.0318 20.3893 26.8388C20.2887 27.7958 19.665 28.5126 18.6721 29.1775C18.1789 29.5077 17.6266 29.8036 17.0515 30.1002C16.5802 30.3416 15.7996 30.7418 15.3672 30.9987C14.3771 31.5869 14.1003 32.6941 14.3235 33.5948C14.5504 34.5106 15.3294 35.353 16.5358 35.353C18.5176 35.353 20.3854 35.197 22.2897 34.3019L23.9098 33.3104L25.5681 34.3044C27.5076 35.1972 29.4098 35.353 31.4317 35.353C32.6442 35.353 33.4407 34.5228 33.6746 33.5984C33.9048 32.6886 33.6158 31.5797 32.6111 30.9952C32.1701 30.7387 31.677 30.4913 31.1957 30.2499C30.6083 29.9533 29.7398 29.5043 29.2353 29.1735C28.217 28.5058 27.5827 27.7884 27.4806 26.8372C27.3907 26.0006 27.6628 25.1289 28.0748 24.2104C28.2771 25.0686 28.6576 26.1004 29.3066 26.9652C30.031 27.9306 31.1603 28.7656 32.775 28.7656C33.3135 28.7656 33.75 28.3666 33.75 27.8744C33.75 27.3821 33.3135 26.9831 32.775 26.9831C32.0049 26.9831 31.4067 26.6127 30.9146 25.9569C30.4102 25.2847 30.0935 24.398 29.9373 23.6363C29.839 23.1567 29.6556 22.5331 29.1682 22.017C29.0367 21.8777 28.8987 21.7439 28.7544 21.6158C27.5264 20.5257 25.8481 19.853 24 19.853Z" fill="#59D5FB"/>
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

                      



      </SectionContainer>
      {/* How it works */}
      <SectionContainer
        id="how-it-works"
        variant="mint"
        sectionClassName="py-4"
        withDashedWrapper
        dashedWrapperClassName="flex flex-col gap-8 lg:py-[96px] py-[56px] w-full max-w-[1440px] mx-auto"
        >
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
                  href="javascript:void(0)"
                  className="w-full md:w-auto rounded-[4px] bg-[#015033] hover:bg-[#013d26] hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-white transition-all duration-200 ease-out"
                >
                  Get started - for free
                </a>
                <a
                  href="javascript:void(0)"
                  className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-sm px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out"
                  style={{ borderColor: "#015033", borderWidth: 1 }}
                >
                  Book a demo
                </a>
              </motion.div>
            </div>
      </SectionContainer>

      <SectionContainer
        id="testimonials"
        variant="white"
        sectionClassName="py-4"
        withDashedWrapper
        dashedWrapperClassName="flex flex-col gap-8 lg:py-[120px] py-[64px] w-full max-w-[1440px] mx-auto"
      >
        <div className="w-full px-3 lg:px-6 flex justify-center">
          <div className="relative w-full max-w-[1050px] rounded-[32px] bg-[#F9FAFB] px-4 py-10 text-center shadow-[0px_1px_3px_rgba(16,24,40,0.08)] lg:px-24 lg:py-16">
            {/* Desktop arrows */}
            <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrevTestimonial}
                className="flex size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-sm transition hover:scale-105"
              >
                <ArrowLeft size="20" color="#98A2B3" />
              </button>
            </div>
            <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2">
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNextTestimonial}
                className="flex size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-sm transition hover:scale-105"
              >
                <ArrowRight size="20" color="#98A2B3" />
              </button>
            </div>

            {/* Rating */}
            <div className="mb-6 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star1 key={index} size="24" color="#FEC84B" variant="Bold" />
              ))}
            </div>

            <p className="mx-auto text-[20px] leading-[30px] font-medium text-[#1D2939] md:text-[30px] md:leading-[38px] lg:max-w-4xl">
              {currentTestimonial.quote}
            </p>

            <div className="mt-10 flex flex-col items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#EAECF0] bg-white">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-[16px] font-medium leading-[24px] text-[#101828]">{currentTestimonial.author}</p>
                <p className="text-[14px] leading-[20px] text-[#667085]">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrevTestimonial}
                className="flex size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-sm"
              >
                <ArrowLeft size="20" color="#98A2B3" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNextTestimonial}
                className="flex size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-sm"
              >
                <ArrowRight size="20" color="#98A2B3" />
              </button>
            </div>
            </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="support-teams"
        variant="gray"
        sectionClassName="py-4"
        withDashedWrapper
        dashedWrapperClassName="flex flex-col gap-8 lg:py-[120px] py-[64px] w-full max-w-[1440px] mx-auto"
      >
        <div className="flex w-full flex-col items-center gap-6 px-3 lg:px-6 text-center">
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.02em] text-[#101828] md:text-[48px] md:leading-[60px]">
            Made for the people who look after people
          </h2>
          <div className="grid w-full gap-4 md:gap-6 lg:grid-cols-3">
            {SUPPORT_PERSONA_CARDS.map((card) => (
              <div
                key={card.audience}
                className="flex min-h-[400px] flex-col rounded-[8px] border border-[#F9FAFB] bg-white px-7 py-8 text-left shadow-[0px_1px_2px_rgba(231,235,239,0.1)] md:h-[440px]"
              >
                <div className="flex flex-col gap-5">
                  <p className="text-[30px] font-semibold leading-[38px] text-[#1D2939]">{card.audience}</p>
                  <p className="text-[18px] leading-[28px] text-[#475467] tracking-[-0.01em]">{card.title}</p>
                </div>
                <div className="mt-auto flex flex-col gap-5">
                  <p className="text-[18px] leading-[28px] text-[#475467] tracking-[-0.01em]">{card.description}</p>
                  <button
                    type="button"
                    className="flex w-fit items-center gap-2 text-[16px] font-medium text-[#015033] transition hover:text-[#013d26]"
                  >
                    {card.ctaLabel}
                    <ArrowRight size="20" color="#015033" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Founder spotlight */}
      <div id="founder-spotlight">
        <FounderSpotlight />
      </div>

      {/* FAQs */}
      <SectionContainer
        id="faqs"
        variant="gray"
        sectionClassName="py-4"
        withDashedWrapper
        dashedWrapperClassName="flex flex-col gap-8 lg:py-[96px] py-[56px] w-full max-w-[1440px] mx-auto"
        >
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
                      Still got more questions?{" "}
                      <span className="underline hover:text-[#015033] hover:no-underline transition-all duration-200 cursor-pointer">
                        View all FAQs
                      </span>
                </p>
              </div>
                  
                  {/* Right Column - FAQ Items */}
                  <div className="flex flex-col gap-3 w-full lg:w-1/2">
                    <Faq items={ORGANIZATION_FAQ_ITEMS} defaultOpenIndex={0} showIcons={false} />
                </div>
            </div>
        </div>
      </SectionContainer>

    </div>
    </>
  );
}



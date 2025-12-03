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

type OrganizationOffering = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type NaraDifferenceStat = {
  value: string;
  description: string;
  icon: React.ReactNode;
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

const NARA_DIFFERENCE_STATS: NaraDifferenceStat[] = [
  {
    value: "87%",
    description: "Employees report feeling calmer and much more in control of their working day after using Nara regularly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="7.75" stroke="#101828" strokeWidth="1.5" />
        <path d="M12 8.25V12L14.25 13.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "92%",
    description: "Staff describe workloads as more manageable and say they find it easier to stay focused on key tasks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="10" r="1.5" fill="#101828" />
        <circle cx="15" cy="14" r="1.5" fill="#101828" />
        <path d="M9 10L15 14" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="9" r="1.5" fill="#101828" />
      </svg>
    ),
  },
  {
    value: "60%",
    description: "HR teams gain clearer insight into engagement and can show leaders how wellbeing support is being used.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 16.5V7.5C18.75 6.80964 18.1904 6.25 17.5 6.25H6.5C5.80964 6.25 5.25 6.80964 5.25 7.5V16.5C5.25 17.1904 5.80964 17.75 6.5 17.75H17.5C18.1904 17.75 18.75 17.1904 18.75 16.5Z" stroke="#101828" strokeWidth="1.5" />
        <path d="M12 14.5V9.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 11.75L12 9.25L14.5 11.75" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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

const ORGANIZATION_OFFERINGS: OrganizationOffering[] = [
  {
    title: "Remote Patient Monitoring",
    description: "Get real-time data on mood, engagement, and therapy progress.",
    icon: (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.174316" width="48" height="48" rx="24" fill="#E5F8F1" />
        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#01BC77" strokeOpacity="0.1" strokeWidth="0.5" />
        <path d="M23.9982 26.1743C18.9882 26.1743 14.9082 29.5343 14.9082 33.6743C14.9082 33.9543 15.1282 34.1743 15.4082 34.1743H32.5882C32.8682 34.1743 33.0882 33.9543 33.0882 33.6743C33.0882 29.5343 29.0082 26.1743 23.9982 26.1743ZM28.72 22.5243L27.76 21.5643C28.26 20.8143 28.55 19.9143 28.55 18.9443C28.55 16.3043 26.41 14.1743 23.78 14.1743C21.15 14.1743 19 16.3143 19 18.9443C19 21.5743 21.14 23.7143 23.77 23.7143C24.74 23.7143 25.64 23.4243 26.39 22.9243L27.35 23.8843C27.54 24.0743 27.79 24.1643 28.03 24.1643C28.28 24.1643 28.53 24.0743 28.71 23.8843C29.09 23.5143 29.09 22.9043 28.72 22.5243Z" fill="#01BC77" />
      </svg>
    ),
  },
  {
    title: "Assignments",
    description: "Keep clients engaged between sessions with tailored assignments—track progress effortlessly and send timely reminders.",
    icon: (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.603027" width="48" height="48" rx="24" fill="#F0FBFF" />
        <rect x="0.25" y="0.853027" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5" />
        <path d="M26.75 16.603C26.75 15.0842 25.5188 13.853 24 13.853C22.4812 13.853 21.25 15.0842 21.25 16.603C21.25 18.1218 22.4812 19.353 24 19.353C25.5188 19.353 26.75 18.1218 26.75 16.603Z" fill="#59D5FB" />
        <path d="M24 19.853C22.1235 19.853 20.4224 20.5464 19.1896 21.6661C19.0655 21.7788 18.9461 21.8959 18.8318 22.017C18.3444 22.5331 18.161 23.1567 18.0627 23.6363C17.9065 24.398 17.5898 25.2847 17.0854 25.9569C16.5933 26.6127 15.9951 26.9831 15.225 26.9831C14.6865 26.9831 14.25 27.3821 14.25 27.8744C14.25 28.3666 14.6865 28.7656 15.225 28.7656C16.8397 28.7656 17.969 27.9306 18.6934 26.9652C19.3068 26.1478 19.6804 25.1811 19.8903 24.3529C20.2492 25.2113 20.4742 26.0318 20.3893 26.8388C20.2887 27.7958 19.665 28.5126 18.6721 29.1775C18.1789 29.5077 17.6266 29.8036 17.0515 30.1002C16.5802 30.3416 15.7996 30.7418 15.3672 30.9987C14.3771 31.5869 14.1003 32.6941 14.3235 33.5948C14.5504 34.5106 15.3294 35.353 16.5358 35.353C18.5176 35.353 20.3854 35.197 22.2897 34.3019L23.9098 33.3104L25.5681 34.3044C27.5076 35.1972 29.4098 35.353 31.4317 35.353C32.6442 35.353 33.4407 34.5228 33.6746 33.5984C33.9048 32.6886 33.6158 31.5797 32.6111 30.9952C32.1701 30.7387 31.677 30.4913 31.1957 30.2499C30.6083 29.9533 29.7398 29.5043 29.2353 29.1735C28.217 28.5058 27.5827 27.7884 27.4806 26.8372C27.3907 26.0006 27.6628 25.1289 28.0748 24.2104C28.2771 25.0686 28.6576 26.1004 29.3066 26.9652C30.031 27.9306 31.1603 28.7656 32.775 28.7656C33.3135 28.7656 33.75 28.3666 33.75 27.8744C33.75 27.3821 33.3135 26.9831 32.775 26.9831C32.0049 26.9831 31.4067 26.6127 30.9146 25.9569C30.4102 25.2847 30.0935 24.398 29.9373 23.6363C29.839 23.1567 29.6556 22.5331 29.1682 22.017C29.0367 21.8777 28.8987 21.7439 28.7544 21.6158C27.5264 20.5257 25.8481 19.853 24 19.853Z" fill="#59D5FB" />
      </svg>
    ),
  },
  {
    title: "High Risk Detection",
    description: "Identify early signs of high-risk patients through assessments, mood check-ins, AI-powered conversations, and other integrated tools.",
    icon: (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.174316" width="48" height="48" rx="24" fill="#FDF2F2" />
        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#D92D20" strokeOpacity="0.1" strokeWidth="0.5" />
        <path d="M22.3623 14.1892C23.4266 13.836 24.5734 13.836 25.6377 14.1892C26.6976 14.541 27.5301 15.3753 28.3662 16.5476C29.1996 17.7163 30.1206 19.3466 31.3076 21.447L31.3545 21.5291C32.5417 23.6298 33.4623 25.2595 34.0361 26.5808C34.6127 27.9085 34.9 29.0547 34.6709 30.156C34.4402 31.2649 33.8715 32.2737 33.043 33.0359C32.2165 33.7962 31.0908 34.1172 29.6738 34.2712C28.2648 34.4244 26.4212 34.4246 24.0488 34.4246H23.9512C21.5787 34.4246 19.7353 34.4244 18.3262 34.2712C16.9091 34.1172 15.7836 33.7962 14.957 33.0359C14.1284 32.2737 13.5598 31.2649 13.3291 30.156C13.1 29.0547 13.3873 27.9085 13.9639 26.5808C14.5377 25.2594 15.4583 23.6298 16.6455 21.5291L16.6924 21.447C17.8794 19.3466 18.8004 17.7163 19.6338 16.5476C20.4698 15.3753 21.3024 14.541 22.3623 14.1892ZM23.9951 28.1746C23.4454 28.1747 23 28.6224 23 29.1746C23.0002 29.7266 23.4456 30.1744 23.9951 30.1746H24.0039C24.5536 30.1746 24.9998 29.7266 25 29.1746C25 28.6223 24.5537 28.1746 24.0039 28.1746H23.9951ZM24 20.1746C23.4477 20.1746 23 20.6223 23 21.1746V25.1746C23.0002 25.7266 23.4479 26.1746 24 26.1746C24.5521 26.1745 24.9998 25.7266 25 25.1746V21.1746C25 20.6223 24.5522 20.1746 24 20.1746Z" fill="#D92D20" />
      </svg>
    ),
  },
  {
    title: "AI Chat Summaries",
    description: "View summaries of patient interactions with Nara's AI (with consent). Stay informed between sessions.",
    icon: (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.174316" width="48" height="48" rx="24" fill="#FFFBEB" />
        <rect x="0.25" y="0.424316" width="47.5" height="47.5" rx="23.75" stroke="#FFC800" strokeOpacity="0.1" strokeWidth="0.5" />
        <path
          d="M16 17.6743C16 16.3743 17.05 15.3243 18.35 15.3243H29.65C30.95 15.3243 32 16.3743 32 17.6743V25.0343C32 26.3343 30.95 27.3843 29.65 27.3843H23.42C23.14 27.3843 22.88 27.5043 22.69 27.7043L19.72 30.8843C19.16 31.4843 18.16 31.0843 18.16 30.2643V28.0443C18.16 27.4643 17.69 26.9943 17.11 26.9943H18.35C17.05 26.9943 16 25.9443 16 24.6443V17.6743Z"
          fill="#FFC800"
        />
        <path
          d="M20 33.0243H29.65C30.95 33.0243 32 31.9743 32 30.6743V29.3243H26.89C25.59 29.3243 24.54 28.2743 24.54 26.9743V26.8743H18.35C18.08 26.8743 17.82 26.8243 17.58 26.7343V30.6743C17.58 31.9743 18.63 33.0243 19.93 33.0243H20Z"
          fill="#FEC84B"
        />
        <path
          d="M28.125 20.9243H19.875C19.425 20.9243 19.0625 21.2868 19.0625 21.7368C19.0625 22.1868 19.425 22.5493 19.875 22.5493H28.125C28.575 22.5493 28.9375 22.1868 28.9375 21.7368C28.9375 21.2868 28.575 20.9243 28.125 20.9243Z"
          fill="#fff5d6"
        />
        <path
          d="M28.125 24.1743H19.875C19.425 24.1743 19.0625 24.5368 19.0625 24.9868C19.0625 25.4368 19.425 25.7993 19.875 25.7993H28.125C28.575 25.7993 28.9375 25.4368 28.9375 24.9868C28.9375 24.5368 28.575 24.1743 28.125 24.1743Z"
          fill="#fff5d6"
        />
      </svg>
    ),
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

          <motion.div
            className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {ORGANIZATION_OFFERINGS.map((offering, index) => (
              <motion.div
                key={offering.title}
                className="flex flex-col gap-4 rounded-[16px] border border-[#EDF9F5] bg-white p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="size-12 rounded-full flex items-center justify-start">{offering.icon}</div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#353535] text-xl font-medium">{offering.title}</p>
                  <p className="text-[#736F67] text-base leading-6">{offering.description}</p>
                </div>
              </motion.div>
            ))}
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
        variant="white"
        withDashedWrapper
        dashedWrapperClassName="flex flex-col gap-10 lg:py-[120px] py-[72px] w-full max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col items-center text-center gap-4 px-3 lg:px-6">
          <p className="text-[32px] leading-[40px] font-semibold tracking-[-0.02em] text-[#101828] lg:text-[48px] lg:leading-[60px]">
            The Nara difference
          </p>
        </div>
        <motion.div
          className="grid w-full grid-cols-1 gap-4 px-3 lg:px-6 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {NARA_DIFFERENCE_STATS.map((stat, index) => (
            <motion.div
              key={stat.value}
              className="flex h-full min-h-[360px] flex-col justify-between gap-4 rounded-[20px] border border-[#EAECF0] bg-[#F9FAFB] p-8 shadow-[0px_1px_2px_rgba(16,24,40,0.04)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-[#101828] shadow-[0px_1px_2px_rgba(16,24,40,0.06)] mx-auto">
                {stat.icon}
              </div>
              <div className="mx-auto mt-2 flex w-full max-w-[341px] flex-col gap-2 text-center">
                <p className="text-[48px] leading-[60px] font-semibold tracking-[-0.03em] text-[#101828]">{stat.value}</p>
                <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#667085]">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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



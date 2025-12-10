"use client";
import React, { useRef, useState } from "react";
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
  description: string;
  ctaLabel: string;
  audience: string;
};

type NaraOffering = {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string | null;
};

type NaraDifferenceStat = {
  value: string;
  description: string;
  icon: React.ReactNode;
};

type OutcomeCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ProcessStep = {
  label: string;
  title: string;
  description: string;
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

const NARA_STEPS: ProcessStep[] = [
  {
    label: "STEP 1",
    title: "Get your team onboard",
    description: "Add your eligible staff in a few clicks and keep access up to date as things change.",
  },
  {
    label: "STEP 2",
    title: "See how your people engage",
    description: "Track overall wellbeing and engagement trends by team, location, or role. Never individual data.",
  },
  {
    label: "STEP 3",
    title: "Share a clear story with leadership",
    description: "Show leaders the big-picture trends shaping your organization, without exposing personal information.",
  },
];

const OUTCOME_CARDS: OutcomeCard[] = [
  {
    title: "Lower day-to-day stress",
    description:
      "Short, guided practices help people slow their breathing, calm racing thoughts, and respond instead of react. Over time, stress feels more manageable and less constant.",
    icon: (
     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3667 4.53432L22.5667 7.43432C20.95 8.23432 19.0667 8.23432 17.45 7.43432L11.6334 4.51765C6.6667 2.03432 1.4167 7.40098 4.0167 12.3176L5.38337 14.8843C5.5667 15.2343 5.8667 15.5177 6.23337 15.6843L27.3167 25.1677C28.1834 25.551 29.2 25.201 29.6334 24.3677L35.9834 12.301C38.5667 7.40098 33.3334 2.03432 28.3667 4.53432Z" fill="currentColor"/>
<path d="M25.9998 27.186L12.1998 20.9693C10.6498 20.2693 9.0831 21.936 9.8831 23.436L14.9498 33.0527C17.0998 37.136 22.9331 37.136 25.0831 33.0527L26.8664 29.6527C27.3331 28.736 26.9331 27.6193 25.9998 27.186Z" fill="currentColor"/>
</svg>

    ),
  },
  {
    title: "Better sleep and recovery",
    description:
      "Evening wind-down sessions, audio to fall asleep to, and gentle reminders support healthier routines. People wake up clearer, less irritable, and more ready for the day.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3667 35.4657L22.5667 32.5657C20.95 31.7657 19.0667 31.7657 17.45 32.5657L11.6334 35.4823C6.6667 37.9657 1.4167 32.599 4.0167 27.6824L5.38337 25.1157C5.5667 24.7657 5.8667 24.4823 6.23337 24.3157L27.3167 14.8323C28.1834 14.449 29.2 14.799 29.6334 15.6323L35.9834 27.699C38.5667 32.599 33.3334 37.9657 28.3667 35.4657Z" fill="currentColor"/>
<path d="M25.9998 12.814L12.1998 19.0307C10.6498 19.7307 9.0831 18.064 9.8831 16.564L14.9498 6.94734C17.0998 2.86401 22.9331 2.86401 25.0831 6.94734L26.8664 10.3473C27.3331 11.264 26.9331 12.3807 25.9998 12.814Z" fill="currentColor"/>
</svg>

    ),
  },
  {
    title: "More focus and steady output",
    description:
      "Quick check-ins and focus tools help staff reset between meetings, block distractions, and get back into deep work. Workloads feel more achievable and less draining.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.983 3.33594H13.0163C6.94967 3.33594 3.33301 6.9526 3.33301 13.0193V26.9693C3.33301 33.0526 6.94967 36.6693 13.0163 36.6693H26.9663C33.033 36.6693 36.6497 33.0526 36.6497 26.9859V13.0193C36.6663 6.9526 33.0497 3.33594 26.983 3.33594ZM10.783 12.8693C11.2663 12.3859 12.0663 12.3859 12.5497 12.8693C13.733 14.0526 15.6663 14.0526 16.8497 12.8693C17.333 12.3859 18.133 12.3859 18.6163 12.8693C19.0997 13.3526 19.0997 14.1526 18.6163 14.6359C17.533 15.7193 16.1163 16.2526 14.6997 16.2526C13.283 16.2526 11.8663 15.7193 10.783 14.6359C10.2997 14.1359 10.2997 13.3526 10.783 12.8693ZM19.9997 31.3026C15.5163 31.3026 11.8663 27.6526 11.8663 23.1693C11.8663 22.0026 12.8163 21.0359 13.983 21.0359H25.983C27.1497 21.0359 28.0997 21.9859 28.0997 23.1693C28.133 27.6526 24.483 31.3026 19.9997 31.3026ZM29.2163 14.6359C28.133 15.7193 26.7163 16.2526 25.2997 16.2526C23.883 16.2526 22.4663 15.7193 21.383 14.6359C20.8997 14.1526 20.8997 13.3526 21.383 12.8693C21.8663 12.3859 22.6663 12.3859 23.1497 12.8693C24.333 14.0526 26.2663 14.0526 27.4497 12.8693C27.933 12.3859 28.733 12.3859 29.2163 12.8693Z" />
      </svg>
    ),
  },
  {
    title: "Feeling supported at work",
    description:
      "Nara gives everyone private, stigma-free support. Content reflects different backgrounds and experiences, so more people feel seen and cared for by their employer.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 3.33594H10C7.23333 3.33594 5 5.5526 5 8.28594V26.4693C5 29.2026 7.23333 31.4193 10 31.4193H11.2667C12.6 31.4193 13.8667 31.9359 14.8 32.8693L17.65 35.6859C18.95 36.9693 21.0667 36.9693 22.3667 35.6859L25.2167 32.8693C26.15 31.9359 27.4333 31.4193 28.75 31.4193H30C32.7667 31.4193 35 29.2026 35 26.4693V8.28594C35 5.5526 32.7667 3.33594 30 3.33594ZM27.8 17.5026L25.85 23.4359C25.6 24.4193 24.55 25.2193 23.4833 25.2193H20.4C19.8667 25.2193 19.1167 25.0359 18.7833 24.7026L16.3333 22.7859C16.2833 23.8526 15.8 24.3026 14.6167 24.3026H13.8167C12.5833 24.3026 12.0833 23.8193 12.0833 22.6526V14.7026C12.0833 13.5359 12.5833 13.0526 13.8167 13.0526H14.6333C15.8667 13.0526 16.3667 13.5359 16.3667 14.7026V15.3026L19.6 10.5026C19.9333 9.98594 20.7833 9.61927 21.5 9.9026C22.2833 10.1693 22.7833 11.0359 22.6167 11.8026L22.2167 14.4026C22.1667 14.6193 22.2167 14.8526 22.3667 15.0026C22.5 15.1526 22.7 15.2526 22.9167 15.2526H26.1667C26.8 15.2526 27.3333 15.5026 27.65 15.9526C27.95 16.3859 28 16.9359 27.8 17.5026Z" />
      </svg>
    ),
  },
];

const NARA_DIFFERENCE_STATS: NaraDifferenceStat[] = [
  {
    value: "87%",
    description: "Employees report feeling calmer and much more in control of their working day after using Nara regularly.",
    icon: (
     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9997 3.33594C10.8163 3.33594 3.33301 10.8193 3.33301 20.0026C3.33301 29.1859 10.8163 36.6693 19.9997 36.6693C29.183 36.6693 36.6663 29.1859 36.6663 20.0026C36.6663 10.8193 29.183 3.33594 19.9997 3.33594ZM27.2497 25.9526C27.0163 26.3526 26.5997 26.5693 26.1663 26.5693C25.9497 26.5693 25.733 26.5193 25.533 26.3859L20.3663 23.3026C19.083 22.5359 18.133 20.8526 18.133 19.3693V12.5359C18.133 11.8526 18.6997 11.2859 19.383 11.2859C20.0663 11.2859 20.633 11.8526 20.633 12.5359V19.3693C20.633 19.9693 21.133 20.8526 21.6497 21.1526L26.8163 24.2359C27.4163 24.5859 27.6163 25.3526 27.2497 25.9526Z" fill="#344054"/>
</svg>

    ),
  },
  {
    value: "92%",
    description: "Staff describe workloads as more manageable and say they find it easier to stay focused on key tasks.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9833 2.91406C21.0333 2.91406 17.0166 6.93073 17.0166 11.8807C17.0166 16.8307 21.0333 20.8474 25.9833 20.8474C30.9333 20.8474 34.9499 16.8307 34.9499 11.8807C34.9499 6.93073 30.9333 2.91406 25.9833 2.91406Z" fill="#344054"/>
<path d="M10.5998 21.7188C7.5498 21.7188 5.0498 24.2021 5.0498 27.2688C5.0498 30.3354 7.53314 32.8188 10.5998 32.8188C13.6498 32.8188 16.1498 30.3354 16.1498 27.2688C16.1498 24.2021 13.6498 21.7188 10.5998 21.7188Z" fill="#344054"/>
<path d="M27.6999 27.7031C25.1166 27.7031 23.0166 29.8031 23.0166 32.3865C23.0166 34.9698 25.1166 37.0698 27.6999 37.0698C30.2833 37.0698 32.3833 34.9698 32.3833 32.3865C32.3833 29.8031 30.2833 27.7031 27.6999 27.7031Z" fill="#344054"/>
</svg>

    ),
  },
  {
    value: "74%",
    description: "Employees say they are more likely to stay with an employer that provides Nara’s mental well-being support.",
    icon: (
     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.983 3.33594H13.0163C6.94967 3.33594 3.33301 6.9526 3.33301 13.0193V26.9693C3.33301 33.0526 6.94967 36.6693 13.0163 36.6693H26.9663C33.033 36.6693 36.6497 33.0526 36.6497 26.9859V13.0193C36.6663 6.9526 33.0497 3.33594 26.983 3.33594ZM28.033 18.0359C27.5497 18.5193 26.7497 18.5193 26.2663 18.0359L21.2497 13.0193V30.0026C21.2497 30.6859 20.683 31.2526 19.9997 31.2526C19.3163 31.2526 18.7497 30.6859 18.7497 30.0026V13.0193L13.733 18.0359C13.2497 18.5193 12.4497 18.5193 11.9663 18.0359C11.7163 17.7859 11.5997 17.4693 11.5997 17.1526C11.5997 16.8359 11.733 16.5026 11.9663 16.2693L19.1163 9.11927C19.3497 8.88594 19.6663 8.7526 19.9997 8.7526C20.333 8.7526 20.6497 8.88594 20.883 9.11927L28.033 16.2693C28.5163 16.7526 28.5163 17.5359 28.033 18.0359Z" fill="#344054"/>
</svg>

    ),
  },
];

const SUPPORT_PERSONA_CARDS: SupportPersonaCard[] = [
  {
    audience: "For HR leaders",
    description:
      "Offer a mental health resource people actually use, then back it up with clear evidence of uptake and change. Put wellbeing on equal footing with other core benefits.",
    ctaLabel: "Learn more",
  },
  {
    audience: "For benefits administrators",
    description:
      "Spend less time wrestling with CSV files and chasing providers. Use one place to manage eligibility, check engagement, and pull reports.",
    ctaLabel: "Learn more",
  },
  {
    audience: "For people and culture teams",
    description:
      "Use aggregated trends to see which parts of the organization might be under strain. Pair Nara with manager training, listening sessions, or local initiatives.",
    ctaLabel: "Learn more",
  },
];

const NARA_OFFERINGS: NaraOffering[] = [
  {
    title: "Therapy",
    description: "Licensed therapists for stress, burnout, anxiety, and personal challenges.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="#EFF3FB" />
        <rect x="0.25" y="0.25" width="47.5" height="47.5" rx="23.75" stroke="#0665FE" strokeOpacity="0.1" strokeWidth="0.5" />
        <path
          d="M34 19.81V24.5H29.92C29.8 24.49 29.54 24.34 29.48 24.23L28.44 22.26C28.03 21.48 27.32 21.04 26.56 21.08C25.8 21.12 25.15 21.63 24.82 22.46L23.44 25.92L23.24 25.4C22.75 24.13 21.35 23.17 19.97 23.17L14 23.2V19.81C14 16.17 16.17 14 19.81 14H28.19C31.83 14 34 16.17 34 19.81Z"
          fill="#0665FE"
        />
        <path
          d="M34 28.1901V26.0001H29.92C29.25 26.0001 28.46 25.5201 28.15 24.9301L27.11 22.9601C26.83 22.4301 26.43 22.4601 26.21 23.0101L23.91 28.8201C23.66 29.4701 23.24 29.4701 22.98 28.8201L21.84 25.9401C21.57 25.2401 20.73 24.6701 19.98 24.6701L14 24.7001V28.1901C14 31.7701 16.1 33.9301 19.63 33.9901C19.74 34.0001 19.86 34.0001 19.97 34.0001H27.97C28.12 34.0001 28.27 34.0001 28.41 33.9901C31.92 33.9101 34 31.7601 34 28.1901Z"
          fill="#0665FE"
        />
        <path d="M13.9987 24.7002V28.0102C13.9787 27.6902 13.9688 27.3502 13.9688 27.0002V24.7002H13.9987Z" fill="#0665FE" />
      </svg>
    ),
  },
  {
    title: "Guided Meditation",
    description: "Short calming sessions that help people reset, focus, and manage daily pressure.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="#F0FBFF" />
        <rect x="0.25" y="0.25" width="47.5" height="47.5" rx="23.75" stroke="#59D5FB" strokeOpacity="0.1" strokeWidth="0.5" />
        <path d="M26.75 16C26.75 14.4812 25.5188 13.25 24 13.25C22.4812 13.25 21.25 14.4812 21.25 16C21.25 17.5188 22.4812 18.75 24 18.75C25.5188 18.75 26.75 17.5188 26.75 16Z" fill="#59D5FB" />
        <path
          d="M24 19.25C22.1235 19.25 20.4224 19.9434 19.1896 21.0631C19.0655 21.1758 18.9461 21.2928 18.8318 21.4139C18.3444 21.9301 18.161 22.5537 18.0627 23.0333C17.9065 23.795 17.5898 24.6817 17.0854 25.3538C16.5933 26.0097 15.9951 26.3801 15.225 26.3801C14.6865 26.3801 14.25 26.7791 14.25 27.2713C14.25 27.7636 14.6865 28.1626 15.225 28.1626C16.8397 28.1626 17.969 27.3275 18.6934 26.3622C19.3068 25.5447 19.6804 24.5781 19.8903 23.7499C20.2492 24.6083 20.4742 25.4288 20.3893 26.2358C20.2887 27.1927 19.665 27.9096 18.6721 28.5744C18.1789 28.9046 17.6266 29.2006 17.0515 29.4972C16.5802 29.7385 15.7996 30.1387 15.3672 30.3956C14.3771 30.9839 14.1003 32.0911 14.3235 32.9918C14.5504 33.9075 15.3294 34.75 16.5358 34.75C18.5176 34.75 20.3854 34.594 22.2897 33.6988L23.9098 32.7074L25.5681 33.7014C27.5076 34.5941 29.4098 34.75 31.4317 34.75C32.6442 34.75 33.4407 33.9198 33.6746 32.9954C33.9048 32.0856 33.6158 30.9767 32.6111 30.3922C32.1701 30.1356 31.677 29.8883 31.1957 29.6469C30.6083 29.3503 29.7398 28.9013 29.2353 28.5704C28.217 27.9028 27.5827 27.1854 27.4806 26.2342C27.3907 25.3975 27.6628 24.5259 28.0748 23.6074C28.2771 24.4656 28.6576 25.4974 29.3066 26.3622C30.031 27.3275 31.1603 28.1626 32.775 28.1626C33.3135 28.1626 33.75 27.7636 33.75 27.2713C33.75 26.7791 33.3135 26.3801 32.775 26.3801C32.0049 26.3801 31.4067 26.0097 30.9146 25.3538C30.4102 24.6817 30.0935 23.795 29.9373 23.0333C29.839 22.5537 29.6556 21.9301 29.1682 21.4139C29.0367 21.2747 28.8987 21.1409 28.7544 21.0128C27.5264 19.9227 25.8481 19.25 24 19.25Z"
          fill="#59D5FB"
        />
      </svg>
    ),
  },
  {
    title: "AI-assisted Support",
    description: "Private on-demand chats that help employees process thoughts and regulate emotions.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="#FFFBEB" />
        <rect x="0.25" y="0.25" width="47.5" height="47.5" rx="23.75" stroke="#FFC800" strokeOpacity="0.1" strokeWidth="0.5" />
        <path
          d="M31.4802 14.8188L31.7602 15.3888C31.9002 15.6688 32.2502 15.9288 32.5602 15.9888L32.9402 16.0488C34.0802 16.2388 34.3502 17.0788 33.5302 17.9088L33.1802 18.2588C32.9502 18.4988 32.8202 18.9588 32.8902 19.2788L32.9402 19.4888C33.2502 20.8688 32.5202 21.3988 31.3202 20.6788L31.0602 20.5288C30.7502 20.3488 30.2502 20.3488 29.9402 20.5288L29.6802 20.6788C28.4702 21.4088 27.7402 20.8688 28.0602 19.4888L28.1102 19.2788C28.1802 18.9588 28.0502 18.4988 27.8202 18.2588L27.4702 17.8988C26.6502 17.0688 26.9202 16.2288 28.0602 16.0388L28.4402 15.9788C28.7402 15.9288 29.1002 15.6588 29.2402 15.3788L29.5202 14.8088C30.0602 13.7288 30.9402 13.7288 31.4802 14.8188Z"
          fill="#FFC800"
        />
        <path
          d="M33.57 22.09C33.21 22.35 32.2 22.83 30.76 22.09C30.6 22.01 30.4 22 30.24 22.09C29.67 22.38 29.15 22.5 28.74 22.5C28.1 22.5 27.65 22.25 27.43 22.09C27.06 21.82 26.28 21.05 26.55 19.42C26.58 19.25 26.53 19.08 26.42 18.95C25.73 18.16 25.35 17.1 25.62 16.27C25.72 15.94 25.51 15.5 25.17 15.5H19C16 15.5 14 17 14 20.5V27.5C14 31 16 32.5 19 32.5H29C32 32.5 34 31 34 27.5V22.27C34 22.08 33.73 21.98 33.57 22.09ZM26.34 24.09C25.68 24.62 24.84 24.88 24 24.88C23.16 24.88 22.31 24.62 21.66 24.09L18.53 21.59C18.21 21.33 18.16 20.85 18.41 20.53C18.67 20.21 19.14 20.15 19.46 20.41L22.59 22.91C23.35 23.52 24.64 23.52 25.4 22.91C25.72 22.65 26.19 22.7 26.45 23.03C26.72 23.35 26.67 23.83 26.34 24.09Z"
          fill="#FFC800"
        />
      </svg>
    ),
  },
  {
    title: "Self-care Tools",
    description: "Mood check-ins, prompts, and reflections that support daily habits and emotional balance.",
    icon: (
     <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#E5F8F1"/>
<rect x="0.25" y="0.25" width="47.5" height="47.5" rx="23.75" stroke="#01BC77" stroke-opacity="0.1" stroke-width="0.5"/>
<path d="M24 34.75C29.9371 34.75 34.75 29.9371 34.75 24C34.75 18.0629 29.9371 13.25 24 13.25C18.0629 13.25 13.25 18.0629 13.25 24C13.25 29.9371 18.0629 34.75 24 34.75ZM22.2373 22.7119C21.9312 22.814 21.5941 22.7082 21.4004 22.4502C20.9504 21.8502 20.0496 21.8502 19.5996 22.4502C19.351 22.7813 18.8811 22.8481 18.5498 22.5996C18.2187 22.351 18.1519 21.8811 18.4004 21.5498C18.9124 20.8674 19.6737 20.5179 20.4414 20.501C20.177 20.2065 20.1865 19.7529 20.4697 19.4697C20.7626 19.1768 21.2374 19.1768 21.5303 19.4697C21.564 19.5059 21.6711 19.62 21.7256 19.6836C21.8339 19.8099 21.9784 19.9906 22.124 20.209C22.3989 20.6213 22.75 21.2746 22.75 22C22.75 22.3228 22.5436 22.6098 22.2373 22.7119ZM26.5996 22.4502C26.4059 22.7082 26.0688 22.814 25.7627 22.7119C25.4564 22.6098 25.25 22.3228 25.25 22C25.25 21.2746 25.6011 20.6213 25.876 20.209C26.0216 19.9906 26.1661 19.8099 26.2744 19.6836C26.3289 19.62 26.436 19.5059 26.4697 19.4697C26.7626 19.1768 27.2374 19.1768 27.5303 19.4697C27.8135 19.7529 27.823 20.2065 27.5586 20.501C28.3263 20.5179 29.0876 20.8674 29.5996 21.5498C29.8481 21.8811 29.7813 22.351 29.4502 22.5996C29.1189 22.8481 28.649 22.7813 28.4004 22.4502C27.9504 21.8502 27.0496 21.8502 26.5996 22.4502ZM24 29.75C22.1185 29.75 20.4481 28.8451 19.4004 27.4502C19.1517 27.119 19.2186 26.6491 19.5498 26.4004C19.881 26.1517 20.3509 26.2186 20.5996 26.5498C21.3762 27.5837 22.6103 28.25 24 28.25C25.3897 28.25 26.6238 27.5837 27.4004 26.5498C27.6491 26.2186 28.119 26.1517 28.4502 26.4004C28.7814 26.6491 28.8483 27.119 28.5996 27.4502C27.5519 28.8451 25.8816 29.75 24 29.75Z" fill="#01BC77"/>
</svg>


    ),
  },
  {
    title: "High Risk Detection",
    description: "Early signs of risk are flagged so providers are notified as soon as possible.",
    icon: (
      <div className="flex size-12 items-center justify-center rounded-full bg-[#FFECEC]">
     <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#FDF2F2"/>
<rect x="0.25" y="0.25" width="47.5" height="47.5" rx="23.75" stroke="#D92D20" stroke-opacity="0.1" stroke-width="0.5"/>
<path d="M22.3623 14.0146C23.4268 13.6613 24.5742 13.6613 25.6387 14.0146C26.6987 14.3665 27.531 15.2015 28.3672 16.374C29.2005 17.5427 30.1217 19.1722 31.3086 21.2725L31.3555 21.3545C32.5427 23.4552 33.4633 25.0849 34.0371 26.4062C34.6137 27.7338 34.9009 28.8802 34.6719 29.9814C34.4411 31.0904 33.8716 32.0991 33.043 32.8613C32.2164 33.6215 31.0909 33.9426 29.6738 34.0967C28.2648 34.2498 26.4218 34.25 24.0498 34.25H23.9521C21.5798 34.25 19.7362 34.2499 18.3271 34.0967C16.91 33.9426 15.7846 33.6216 14.958 32.8613C14.1294 32.0991 13.5598 31.0904 13.3291 29.9814C13.1001 28.8803 13.3874 27.7338 13.9639 26.4062C14.5377 25.0849 15.4593 23.4553 16.6465 21.3545L16.6924 21.2725C17.8793 19.1723 18.8005 17.5426 19.6338 16.374C20.4699 15.2016 21.3024 14.3666 22.3623 14.0146ZM23.9961 28C23.4463 28 23.001 28.4477 23.001 29C23.0011 29.5521 23.4464 30 23.9961 30H24.0049C24.5546 30 25.0008 29.5521 25.001 29C25.001 28.4477 24.5547 28 24.0049 28H23.9961ZM24.001 20C23.4487 20 23.001 20.4477 23.001 21V25C23.0011 25.5521 23.4488 26 24.001 26C24.553 25.9998 25.0008 25.552 25.001 25V21C25.001 20.4478 24.5531 20.0002 24.001 20Z" fill="#D92D20"/>
</svg>

      </div>
    ),
  },
  {
    title: "Secure messaging",
    description: "Members/employees can communicate safely with providers between appointments.",
    icon: (
      <div className="flex size-12 items-center justify-center rounded-full bg-[#E8F6FF]">
       <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#FEF6EB"/>
<rect x="0.25" y="0.25" width="47.5" height="47.5" rx="23.75" stroke="#F59714" stroke-opacity="0.1" stroke-width="0.5"/>
<path d="M29.7507 28.2994L30.0974 31.1083C30.1862 31.8461 29.3951 32.3616 28.764 31.9794L25.6885 30.1483C25.4751 30.0239 25.4218 29.7572 25.5374 29.5439C25.9818 28.7261 26.2218 27.8016 26.2218 26.8772C26.2218 23.6239 23.4307 20.975 19.9996 20.975C19.2974 20.975 18.6129 21.0816 17.9729 21.295C17.644 21.4016 17.324 21.0994 17.404 20.7616C18.2129 17.5261 21.324 15.1172 25.0396 15.1172C29.3774 15.1172 32.8885 18.3972 32.8885 22.4416C32.8885 24.8416 31.6529 26.9661 29.7507 28.2994Z" fill="#F59714"/>
<path d="M24.8881 26.8736C24.8881 27.9314 24.497 28.9091 23.8392 29.6825C22.9592 30.7491 21.5637 31.4336 19.9992 31.4336L17.6792 32.8114C17.2881 33.0514 16.7904 32.7225 16.8437 32.2691L17.0659 30.518C15.8748 29.6914 15.1104 28.3669 15.1104 26.8736C15.1104 25.3091 15.9459 23.9314 17.2259 23.1136C18.017 22.598 18.9681 22.3047 19.9992 22.3047C22.7015 22.3047 24.8881 24.3491 24.8881 26.8736Z" fill="#F59714"/>
</svg>

      </div>
    ),
  },
];

const EMPLOYEE_CHALLENGES = [
  "Constant pressure, long hours, and blurred boundaries between work and home",
  "Trouble switching off at night and arriving at work already tired",
  "Worry, low mood, and stress that build up quietly over time",
];

const ORGANIZATION_IMPACTS = [
  "More sick days and unplanned absences",
  "Lower focus and slower decision-making",
  "Higher churn, especially in high-pressure roles",
];

// Single responsive landing built from the desktop version and adapted down to mobile
export default function Landing() {
  const heroMockup = "/orgmockup.webp";
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
  const outcomeScrollRef = useRef<HTMLDivElement>(null);
  const currentTestimonial = ORGANIZATION_TESTIMONIALS[testimonialIndex];

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + ORGANIZATION_TESTIMONIALS.length) % ORGANIZATION_TESTIMONIALS.length);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % ORGANIZATION_TESTIMONIALS.length);
  };

  const handleOutcomeScroll = (direction: "prev" | "next") => {
    const container = outcomeScrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar {...ORGANIZATION_NAV_CONFIG} />
      <div className="relative z-10 w-full bg-white">
        {/* Hero Section */}
        <div id="hero" className="relative z-10 w-full px-1 lg:px-4">
          <div className="rounded-b-[24px] border-b border-[#e7fef6] bg-gradient-to-b from-[#f7fefb] to-[#e7fef6] p-4 shadow-xs lg:rounded-b-[32px] lg:px-10 lg:pb-3">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col">
              <div className="pt-36 pb-12 lg:pt-54 lg:pb-54">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                  <div className="flex flex-col items-start text-left lg:w-1/2">
                    <p className="text-[#101828] font-semibold text-[36px] leading-[44px] lg:text-[60px] lg:leading-[72px]">
                      <span className="inline lg:block">Support your people’s</span>{" "}
                      <span className="inline lg:block">minds, every day</span>
                    </p>
                    <p className="mt-4 text-[16px] leading-[24px] font-normal text-[#475467] lg:text-xl lg:leading-[30px]">
                      Nara helps your employees manage stress, sleep better and stay present at work with therapy, meditation, AI-assisted support and self-care in one place.
                    </p>
                    <div className="mt-8 flex w-full flex-col justify-center gap-3 lg:flex-row lg:justify-start">
                      <a href="javascript:void(0)">
                        <div className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded bg-[#015033] px-5 text-base text-white transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[#013d26] hover:shadow-sm lg:w-auto">
                          <p className="text-center">Book Your Demo</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <motion.div
                    className="relative mb-[48px] mt-[64px] h-[250px] w-full overflow-hidden rounded-[24px] lg:mb-0 lg:mt-0 lg:h-[620px] lg:w-1/2 lg:rounded-[32px]"
                    initial={{ opacity: 1, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Image alt="nara-dash" src={heroMockup} fill className="object-contain" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offerings */}
        <SectionContainer
          id="features"
          variant="gray"
          withDashedWrapper
          dashedWrapperClassName="flex flex-col gap-10 py-14 lg:py-24 w-full max-w-[1440px] mx-auto"
        >
          <div className="w-full px-3 lg:px-6">
            <div className="flex flex-col items-start gap-4 text-left lg:items-center lg:text-center">
              <p className="text-sm tracking-[0.2em] text-[#015033]">OFFERINGS</p>
              <p className="flex w-full max-w-[720px] items-center text-left text-[32px] leading-[40px] font-semibold text-[#101828] tracking-[-0.02em] lg:mx-auto lg:justify-center lg:text-center lg:text-[48px] lg:leading-[60px]">
                What employees get with Nara
              </p>
              <p className="text-[14px] leading-[20px] text-[#475467] max-w-[620px] lg:text-base lg:leading-[24px]">
                Care that is easy to reach, clinically grounded, and built for busy workdays.
              </p>
            </div>

            <motion.div
              className="mt-12 grid w-full grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {NARA_OFFERINGS.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  className="flex h-full w-full max-w-[360px] flex-col gap-5 text-left md:max-w-[320px] xl:max-w-[340px]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <div className="flex flex-col items-start gap-8">
                    <div className="flex shrink-0 items-center justify-center">{offering.icon}</div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[20px] font-medium leading-[28px] tracking-[-0.01em] text-[#101828]">
                          {offering.title}
                        </p>
                        {offering.badge ? (
                          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#B45309]">
                            {offering.badge}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-[15px] leading-[24px] tracking-[-0.01em] text-[#475467]">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionContainer>

        {/* The Nara difference */}
        <SectionContainer
          variant="white"
          withDashedWrapper
          dashedWrapperClassName="flex flex-col gap-10 lg:py-[120px] py-[72px] w-full max-w-[1440px] mx-auto"
        >
          <div className="flex flex-col items-start text-left gap-4 px-3 lg:items-center lg:text-center lg:px-6">
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
            {NARA_DIFFERENCE_STATS.map((stat, index) => {
              const hasPercent = stat.value.includes("%");
              const numericValue = hasPercent ? stat.value.replace(/%/g, "") : stat.value;

              return (
                <motion.div
                  key={stat.value}
                  className="flex min-h-[300px] flex-col justify-between gap-4 rounded-[20px] border border-[#EAECF0] bg-[#F9FAFB] p-6 shadow-[0px_1px_2px_rgba(16,24,40,0.04)] lg:min-h-[360px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex size-10 items-center justify-center rounded-full text-[#101828]">
                    {stat.icon}
                  </div>
                  <div className="mt-2 flex w-full flex-col gap-2 text-left">
                    <p className="text-[48px] leading-[60px] font-medium tracking-[-0.03em] text-[#101828]">
                      {numericValue}
                      {hasPercent && <span className="text-[#98A2B3]">%</span>}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal tracking-[-0.01em] text-gray-500">{stat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </SectionContainer>

        {/* Challenges & impact section */}
        <SectionContainer
          variant="white"
          withDashedWrapper
          dashedWrapperClassName="flex flex-col gap-16 lg:py-[96px] py-[64px] w-full max-w-[1440px] mx-auto"
        >
          <motion.div
            className="flex flex-col items-start text-left gap-4 px-3 lg:items-center lg:text-center lg:px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-[36px] leading-[44px] font-semibold tracking-[-0.02em] text-[#101828] md:text-[48px] md:leading-[60px]">
              When minds struggle, work struggles
            </p>
          </motion.div>

          <div className="flex flex-col gap-10 px-3 lg:px-6 xl:flex-row xl:items-start xl:gap-16">
            <motion.div
              className="flex flex-col gap-8 xl:w-1/3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="text-[20px] leading-[30px] font-medium tracking-[-0.01em] text-[#1D2939]">What your people are facing</p>
              <div className="flex flex-col gap-6 lg:gap-20">
                {EMPLOYEE_CHALLENGES.map((item, index) => (
                  <div key={item} className="flex flex-col gap-2 text-left">
                    <p className="text-[12px] leading-[20px] tracking-[-0.01em] uppercase text-[#7C7C7C]">
                      {String(index + 1).padStart(2, "0")}.
                    </p>
                    <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#1D2939]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mb-6 h-[260px] max-h-[450px] overflow-hidden rounded-[20px] xl:mb-0 xl:h-[450px] xl:w-1/3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Image
                src="/struggles-worker.jpg"
                alt="Stressed employee"
                width={376}
                height={450}
                className="h-full max-h-[450px] w-full rounded-[20px] object-cover"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-8 xl:w-1/3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="text-[20px] leading-[30px] font-medium tracking-[-0.01em] text-[#1D2939]">What it means for your organization</p>
              <div className="flex flex-col gap-6 lg:gap-20">
                {ORGANIZATION_IMPACTS.map((item, index) => (
                  <div key={item} className="flex flex-col gap-2 text-left">
                    <p className="text-[12px] leading-[20px] tracking-[-0.01em] uppercase text-[#7C7C7C]">
                      {String(index + 1).padStart(2, "0")}.
                    </p>
                    <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#1D2939]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-3 px-3 text-center lg:px-6">
            <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#475467]">
              Nara focuses on everyday mental health so your people can stay well, not just “cope”.
            </p>
            <motion.button
              type="button"
              className="flex items-center gap-2 text-[16px] font-medium text-[#015033] transition-colors hover:text-[#013d26]"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              Learn more
              <motion.span
                variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="inline-flex"
              >
                <ArrowRight size="20" color="currentColor" />
              </motion.span>
            </motion.button>
          </div>
        </SectionContainer>

        {/* Outcomes */}
        <SectionContainer
          variant="sky"
          withDashedWrapper
          dashedWrapperClassName="flex flex-col gap-12 lg:py-[96px] py-[64px] w-full max-w-[1440px] mx-auto"
        >
          <div className="flex flex-col items-start text-left gap-4 px-3 lg:items-center lg:text-center lg:px-6">
            <p className="text-[14px] leading-[20px] tracking-[-0.01em] text-[#1A7283]">OUTCOMES</p>
            <div className="flex flex-col gap-4">
              <p className="text-[36px] leading-[44px] font-semibold tracking-[-0.02em] text-[#101828] md:text-[48px] md:leading-[60px]">
                The outcomes Nara works towards
              </p>
              <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#475467]">
                Nara combines science-backed tools with gentle guidance so employees can shift how they feel, one small step at a time.
              </p>
            </div>
          </div>

          <div className="flex w-full px-3 lg:px-6">
            <div className="flex w-full min-w-full flex-col gap-6 xl:flex-row xl:gap-4">
              <div
                ref={outcomeScrollRef}
                className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:flex xl:flex-row xl:flex-nowrap xl:gap-4 xl:overflow-x-auto xl:scroll-smooth xl:[scrollbar-width:none] xl:[&::-webkit-scrollbar]:hidden"
              >
                {OUTCOME_CARDS.map((card, index) => (
                  <motion.div
                    key={card.title}
                    className="group flex h-full min-h-[320px] w-full flex-col justify-between gap-4 rounded-[20px] border border-[rgba(89,213,251,0.3)] bg-white p-7 shadow-none transition duration-200 hover:-translate-y-2 hover:shadow-[0px_1px_2px_rgba(16,24,40,0.05)] active:-translate-y-1 xl:h-[360px] xl:min-h-0 xl:w-[360px] xl:flex-none"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 * index, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    <div className="flex size-10 items-center justify-center text-[#667085] transition-colors duration-200 group-active:text-[#59D5FB] group-hover:text-[#59D5FB]">
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-4 text-left">
                      <p className="text-[22px] leading-[30px] font-semibold text-[#101828] md:text-[24px] md:leading-[32px]">
                        {card.title}
                      </p>
                      <p className="text-[14px] leading-[20px] font-normal tracking-[-0.01em] text-gray-500">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden w-full items-center justify-start gap-3 px-3 xl:flex xl:px-6">
            <button
              type="button"
              className="flex size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-[0px_1px_2px_rgba(198,236,223,0.1)]"
              aria-label="Previous outcome"
              onClick={() => handleOutcomeScroll("prev")}
            >
              <ArrowLeft size="20" color="#98A2B3" />
            </button>
            <button
              type="button"
              className="flex size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-[0px_1px_2px_rgba(198,236,223,0.1)]"
              aria-label="Next outcome"
              onClick={() => handleOutcomeScroll("next")}
            >
              <ArrowRight size="20" color="#98A2B3" />
            </button>
          </div>
        </SectionContainer>

        {/* How Nara works */}
        <SectionContainer
          variant="gray"
          withDashedWrapper
          dashedWrapperClassName="flex flex-col gap-10 lg:py-[96px] py-[64px] w-full max-w-[1440px] mx-auto"
        >
          <div className="flex flex-col items-start text-left gap-4 px-3 lg:items-center lg:text-center lg:px-6">
            <p className="text-[32px] leading-[40px] font-semibold tracking-[-0.02em] text-[#101828] md:text-[48px] md:leading-[60px]">
              You open the door.
              <br />
              Nara does the daily work.
            </p>
            <p className="max-w-[428px] text-sm leading-5 tracking-[-0.01em] text-[#475467] lg:mx-auto lg:text-[16px] lg:leading-[24px]">
              Your role is to give people access, set expectations, and understand what is changing. Nara supports the rest.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 px-3 lg:grid-cols-3 lg:px-6">
            {NARA_STEPS.map((step, index) => {
              const [firstWord, ...restWords] = step.title.split(" ");
              const remainingTitle = restWords.join(" ");

              return (
                <motion.div
                  key={step.label}
                  className="flex flex-col gap-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <div className="px-8">
                    <div className="inline-flex items-center rounded-t-[8px] bg-[#01BC77] px-2 py-1 text-[12px] font-medium tracking-[-0.01em] text-white">
                      {step.label}
                    </div>
                  </div>
                  <div className="rounded-[20px] border border-[#EDF9F5] bg-white p-8 shadow-[0px_1px_2px_rgba(198,236,223,0.1)]">
                    <p className="text-[24px] leading-[32px] font-medium text-[#222222]">
                      {firstWord}
                      <br />
                      {remainingTitle}
                    </p>
                    <p className="mt-3 text-[14px] leading-[20px] font-normal tracking-[-0.01em] text-[#475467]">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-center px-3 lg:px-6">
            <a
              href="javascript:void(0)"
              className="inline-flex items-center justify-center rounded-[4px] border border-[#015033] px-5 py-3 text-[16px] font-medium text-[#015033] transition hover:bg-[#F4FBF9]"
            >
              Book Your Demo
            </a>
          </div>
        </SectionContainer>

        {/* Testimonials */}
        <SectionContainer
          id="testimonials"
          variant="white"
          sectionClassName="py-4"
          withDashedWrapper
          dashedWrapperClassName="flex flex-col gap-8 lg:py-[120px] py-[64px] w-full max-w-[1440px] mx-auto"
        >
          <div className="w-full px-3 lg:px-6 flex justify-center">
            <motion.div
              className="relative flex w-full max-w-[1248px] flex-col items-center justify-center gap-10 rounded-[24px] bg-[#F9FAFB] px-6 py-12 text-center shadow-[0px_1px_3px_rgba(16,24,40,0.08)] lg:flex-row lg:gap-10 lg:px-[60px] lg:py-[60px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Desktop arrows */}
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrevTestimonial}
                className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-sm transition hover:scale-105"
              >
                <ArrowLeft size="20" color="#98A2B3" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNextTestimonial}
                className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full border border-[#EDF9F5] bg-white shadow-sm transition hover:scale-105"
              >
                <ArrowRight size="20" color="#98A2B3" />
              </button>

              <div className="flex w-full flex-col items-center gap-6">
                {/* Rating */}
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star1 key={index} size="24" color="#FEC84B" variant="Bold" />
                  ))}
                </div>

                <p className="mx-auto text-[20px] leading-[30px] font-normal text-[#1D2939] md:text-[30px] md:leading-[38px] lg:max-w-[800px]">
                  {currentTestimonial.quote}
                </p>

                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#EAECF0] bg-white">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium leading-[24px] text-[#101828]">{currentTestimonial.author}</p>
                    <p className="text-[16px] leading-[24px] text-gray-500 font-normal">{currentTestimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Mobile arrows */}
              <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
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
            </motion.div>
          </div>
        </SectionContainer>

        {/* Support teams */}
        <SectionContainer
          id="support-teams"
          variant="gray"
          sectionClassName="py-4"
          withDashedWrapper
          dashedWrapperClassName="flex flex-col gap-8 lg:py-[120px] py-[64px] w-full max-w-[1440px] mx-auto"
        >
          <div className="flex w-full flex-col items-start gap-12 px-3 text-left lg:items-center lg:px-6 lg:text-center">
            <h2 className="text-[33px] leading-[44px] font-semibold tracking-[-0.02em] text-[#101828] md:text-[48px] md:leading-[60px]">
              Made for the people
              <br />
              who look after people
            </h2>
            <div className="grid w-full gap-4 md:gap-6 lg:grid-cols-3">
              {SUPPORT_PERSONA_CARDS.map((card, index) => (
                <motion.div
                  key={card.audience}
                  className="flex h-[360px] flex-col rounded-[8px] border border-[#F9FAFB] bg-white px-6 pt-6 pb-5 text-left shadow-[0px_1px_2px_rgba(231,235,239,0.1)] md:h-[440px] md:px-7 md:py-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <div className="flex flex-col gap-3">
                    <p className="text-[30px] font-semibold leading-[38px] text-[#1D2939]">{card.audience}</p>
                  </div>
                  <div className="mt-auto flex flex-col gap-5">
                    <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#475467] md:text-[18px] md:leading-[28px]">{card.description}</p>
                    <motion.button
                      type="button"
                      className="flex items-center gap-2 text-[16px] font-medium text-[#015033] transition-colors hover:text-[#013d26]"
                      initial="rest"
                      animate="rest"
                      whileHover="hover"
                    >
                      Learn more
                      <motion.span
                        variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                        transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        className="inline-flex"
                      >
                        <ArrowRight size="20" color="currentColor" />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
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
                <div className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#475467]">
                  <p>Still got more questions?</p>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-2 text-left text-[#015033] underline underline-offset-4 transition hover:text-[#013d26]"
                  >
                    View all FAQs
                    <ArrowRight size="16" />
                  </button>
                </div>
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

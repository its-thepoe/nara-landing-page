"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import Image from "next/image";
import useScroll from "@/lib/hooks/use-scroll";

// Local logo asset
const IMG_LOGO = "/naralogo.svg"; // nara logo

// Colors from Figma variables
const COLOR_PRIMARY_600 = "#01432B";
const COLOR_PRIMARY_500 = "#015033";
const COLOR_GRAY_600 = "#475467";

export default function ClientNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(20); // Trigger background after 20px scroll

  const handleAnchorClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        try {
          window.history.replaceState(null, "", `#${id}`);
        } catch {}
      }
    });
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed navbar with scroll-triggered background */}
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      }`}>
        <div className="mx-auto flex h-[72px] max-w-screen-xl items-center justify-between px-3 md:h-20 md:px-6">
          {/* Logo */}
          <Link href="#" className="flex items-center" aria-label="Nara home">
            <Image src={IMG_LOGO} alt="Nara" width={100} height={42} className="h-[42px] w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-[16px] tracking-[-0.01em] relative group transition-all duration-200 hover:text-[#015033]" style={{ color: COLOR_GRAY_600 }}>
              For Providers
              <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 ease-out group-hover:w-full" style={{ backgroundColor: COLOR_GRAY_600 }}></span>
            </Link>
            <Link href="#features" className="text-[16px] tracking-[-0.01em] relative group transition-all duration-200 hover:text-[#015033]" style={{ color: COLOR_GRAY_600 }}>
              Features
              <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 ease-out group-hover:w-full" style={{ backgroundColor: COLOR_GRAY_600 }}></span>
            </Link>
            <Link href="#pricing" className="text-[16px] tracking-[-0.01em] relative group transition-all duration-200 hover:text-[#015033]" style={{ color: COLOR_GRAY_600 }}>
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 ease-out group-hover:w-full" style={{ backgroundColor: COLOR_GRAY_600 }}></span>
            </Link>
            <Link href="#faqs" className="text-[16px] tracking-[-0.01em] relative group transition-all duration-200 hover:text-[#015033]" style={{ color: COLOR_GRAY_600 }}>
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 ease-out group-hover:w-full" style={{ backgroundColor: COLOR_GRAY_600 }}></span>
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="#get-started"
              className="rounded-md px-5 py-3 text-[16px] text-white transition-[transform,opacity] duration-200 ease-out-cubic"
              style={{ backgroundColor: COLOR_PRIMARY_500 }}
            >
              Get started - for free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative block size-6 md:hidden"
            aria-label="Open menu"
          >
            <HambergerMenu size="24" color="#00100A" variant="Outline" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-200 ease-out-cubic ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <aside
          className={`fixed inset-y-0 right-0 z-50 w-full transform bg-white shadow-xl transition-transform duration-200 ease-out-quart will-change-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center">
              <Image src={IMG_LOGO} alt="Nara" width={100} height={42} className="h-[42px] w-auto" />
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-md text-[#667085] hover:bg-gray-100 transition-colors duration-200 ease-out-cubic"
            >
              <CloseSquare size="24" color="#667085" variant="Outline" />
            </button>
          </div>

          <nav className="px-4 pb-4 pt-2">
            <ul className="space-y-8 text-[24px] font-medium text-[#1D2939]">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  For Providers
                </Link>
              </li>
              <li>
                <a href="#features" onClick={handleAnchorClick("features")}>
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={handleAnchorClick("pricing")}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={handleAnchorClick("faqs")}>
                  FAQs
                </a>
              </li>
            </ul>

            <div className="my-8 h-px w-full bg-gray-200" />

            <div className="grid grid-cols-2 gap-8 px-1 pb-8">
              <div>
                <h3 className="text-[14px] font-semibold text-[#344054] mb-4">Product</h3>
                <ul className="space-y-4 text-[14px] text-[#667085]">
                  <li>
                    <a href="#features" onClick={handleAnchorClick("features")}>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" onClick={handleAnchorClick("pricing")}>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#faqs" onClick={handleAnchorClick("faqs")}>
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold text-[#344054] mb-4">Support</h3>
                <ul className="space-y-4 text-[14px] text-[#667085]">
                  <li>
                    <a href="mailto:support@nara.com" className="hover:text-[#015033] transition-colors duration-200">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#015033] transition-colors duration-200">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#015033] transition-colors duration-200">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-1">
              <Link
                href="#get-started"
                onClick={handleAnchorClick("get-started")}
                className="block w-full rounded-md px-5 py-3 text-center text-[16px] font-medium text-white transition-[transform,opacity] duration-200 ease-out-cubic"
                style={{ backgroundColor: COLOR_PRIMARY_500 }}
              >
                Get started - for free
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}

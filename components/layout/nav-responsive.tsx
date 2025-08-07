"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, CloseSquare } from "iconsax-react";

// Figma MCP Server assets
const IMG_LOGO =
  "http://localhost:3845/assets/19591e929b156ef31c9ee03435ea5fb15c0d1200.png"; // nara moon logo

// Colors from Figma variables
const COLOR_PRIMARY_600 = "#01432B";
const COLOR_PRIMARY_500 = "#015033";
const COLOR_GRAY_600 = "#475467";

export default function NavResponsive() {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Fixed, transparent top bar */}
      <nav className="fixed inset-x-0 top-0 z-40 bg-transparent">
        <div className="mx-auto flex h-[72px] max-w-screen-xl items-center justify-between px-3 md:h-20 md:px-6">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2" aria-label="Nara home">
            <img src={IMG_LOGO} alt="Nara" className="h-[42px] w-[42px]" />
            <span
              className="text-[28px] font-semibold leading-[14px]"
              style={{ color: COLOR_PRIMARY_600 }}
            >
              Nara
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-[16px] tracking-[-0.01em]" style={{ color: COLOR_GRAY_600 }}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-[16px] tracking-[-0.01em]" style={{ color: COLOR_GRAY_600 }}>
              How it works
            </Link>
            <Link href="#faqs" className="text-[16px] tracking-[-0.01em]" style={{ color: COLOR_GRAY_600 }}>
              FAQs
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
            <Menu size="24" color="#00100A" variant="Outline" />
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
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-[420px] transform bg-white shadow-xl transition-transform duration-200 ease-out-quart will-change-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2">
              <img src={IMG_LOGO} alt="Nara" className="h-[42px] w-[42px]" />
              <span className="text-[28px] font-semibold" style={{ color: COLOR_PRIMARY_600 }}>
                Nara
              </span>
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
                <Link href="#features" onClick={() => setIsOpen(false)}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" onClick={() => setIsOpen(false)}>
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#faqs" onClick={() => setIsOpen(false)}>
                  FAQs
                </Link>
              </li>
            </ul>

            <div className="my-8 h-px w-full bg-gray-200" />

            <div className="grid grid-cols-2 gap-8 px-1 pb-8">
              <div>
                <p className="mb-4 text-xs font-semibold tracking-wider text-[#667085]">
                  SOLUTIONS
                </p>
                <ul className="space-y-4 text-[20px] text-[#344054]">
                  <li>
                    <Link href="#for-clients" onClick={() => setIsOpen(false)}>
                      For Clients
                    </Link>
                  </li>
                  <li>
                    <Link href="#for-therapists" onClick={() => setIsOpen(false)}>
                      For Therapists
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-semibold tracking-wider text-[#667085]">LEGAL</p>
                <ul className="space-y-4 text-[20px] text-[#344054]">
                  <li>
                    <Link href="#privacy" onClick={() => setIsOpen(false)}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#terms" onClick={() => setIsOpen(false)}>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#compliance" onClick={() => setIsOpen(false)}>
                      Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 px-1 pb-8">
              <Link
                href="#get-started"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-5 py-4 text-center text-[18px] text-white transition-[transform,opacity] duration-200 ease-out-cubic"
                style={{ backgroundColor: COLOR_PRIMARY_500 }}
              >
                Get started – for free
              </Link>
              <Link
                href="#book-demo"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-5 py-4 text-center text-[18px]"
                style={{ color: COLOR_PRIMARY_600, borderColor: COLOR_PRIMARY_600, borderWidth: 1 }}
              >
                Book a demo
              </Link>
            </div>
          </nav>
        </aside>
      </div>

      {/* Reduce motion accessibility */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          aside[role="dialog"] { transition: none !important; transform: none !important; }
        }
      `}</style>
    </>
  );
}



import { Twitter, LinkedIn, Instagram } from "../shared/icons";
import { GooglePlayBadge, AppStoreBadge } from "../shared/app-store-badges";
import { HIPAABadge } from "../shared/hipaa-badge";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00100A]">
      {/* Main Footer Content - matches Figma specs exactly */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-0 py-0 lg:gap-16">
        {/* Container */}
        <div className="flex w-full flex-col items-center justify-center px-4 pt-8 sm:px-8 lg:px-36">
          {/* Inner Container */}
          <div className="flex w-full max-w-[1152px] flex-col items-start gap-6 pt-4 lg:gap-8">
            {/* Logo Container */}
            <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
              <div className="h-12 w-12 rounded-full bg-white lg:h-16 lg:w-16"></div>
            </div>

            {/* Navigation Links Container */}
            <div className="flex w-full max-w-[1152px] flex-col items-start gap-8 sm:flex-row sm:justify-center sm:gap-16">
              {/* GET STARTED */}
              <div className="flex flex-1 flex-col items-start gap-3">
                <h3 className="h-[18px] w-full text-xs font-normal leading-[18px] tracking-[-0.01em] text-[#98A2B3]">
                  GET STARTED
                </h3>
                <div className="flex flex-col items-start gap-3">
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    Sign up
                  </a>
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>

              {/* SOLUTIONS */}
              <div className="flex flex-1 flex-col items-start gap-3">
                <h3 className="h-[18px] w-full text-xs font-normal leading-[18px] tracking-[-0.01em] text-[#98A2B3]">
                  SOLUTIONS
                </h3>
                <div className="flex flex-col items-start gap-3">
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    For Clients
                  </a>
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    For Therapists
                  </a>
                </div>
              </div>

              {/* LEGAL */}
              <div className="flex flex-1 flex-col items-start gap-3">
                <h3 className="h-[18px] w-full text-xs font-normal leading-[18px] tracking-[-0.01em] text-[#98A2B3]">
                  LEGAL
                </h3>
                <div className="flex flex-col items-start gap-3">
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="h-5 w-full text-sm font-normal leading-5 tracking-[-0.01em] text-[#F2F4F7] transition-colors duration-200 hover:text-white"
                  >
                    Compliance
                  </a>
                </div>
              </div>
            </div>

            {/* App Store Badges and HIPAA Container */}
            <div className="flex w-full max-w-[1152px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16">
              {/* Store Buttons */}
              <div className="flex flex-row items-center gap-4">
                <GooglePlayBadge />
                <AppStoreBadge />
              </div>
              {/* HIPAA Badge */}
              <div className="flex flex-1 justify-center lg:justify-end">
                <HIPAABadge />
              </div>
            </div>

            {/* Horizontal Border - Social Media and Copyright */}
            <div className="flex w-full max-w-[1152px] flex-col items-center gap-4 border-t border-dashed border-[#667085] pt-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="h-[18px] w-full text-center text-xs font-normal leading-[18px] tracking-[-0.01em] text-[#D0D5DD] sm:w-[289px] sm:text-left">
                © Copyright 2025. All Rights Reserved by Nara LLC.
              </p>
              <div className="flex flex-row items-start gap-2">
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center transition-colors duration-200 hover:text-gray-300"
                >
                  <Twitter className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center transition-colors duration-200 hover:text-gray-300"
                >
                  <LinkedIn className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center transition-colors duration-200 hover:text-gray-300"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            {/* Horizontal Border - Crisis Line Disclaimer */}
            <div className="flex w-full max-w-[1152px] flex-row items-center border-t border-dashed border-[#667085] pt-5">
              <p className="h-auto max-w-[640px] text-center text-xs font-normal leading-[18px] tracking-[-0.01em] text-[#D0D5DD] sm:text-left">
                *If you are experiencing a mental health crisis please reach out to 988 for free and confidential support 24/7. You can call or text 988 or chat at{" "}
                <a
                  href="https://988lifeline.org"
                  className="underline transition-colors duration-200 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://988lifeline.org
                </a>
                . If you are experiencing a life threatening emergency, please call 911 or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </div>

        {/* Background Watermark Container */}
        <div className="flex w-full items-center justify-center px-4 sm:px-8 lg:px-36">
          <div className="relative h-[150px] w-full max-w-[1152px] overflow-hidden bg-gradient-to-b from-[#080808] to-[#00100A] lg:h-[210.94px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[120px] font-bold text-white/10 lg:text-[200px]">Nara</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

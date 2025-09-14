import { Twitter, LinkedIn, Instagram } from "../shared/icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00100A]">
      {/* Main Footer Content - matches Figma specs exactly */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-16 px-0 py-0">
        {/* Container */}
        <div className="flex w-full flex-col items-center justify-center px-4 pt-8 lg:px-36">
          {/* Inner Container */}
          <div className="flex w-full max-w-[1152px] flex-col items-start gap-8 pt-4">
            {/* Logo Container */}
            <div className="flex h-16 w-16 items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white"></div>
            </div>

            {/* Navigation Links Container - Desktop: horizontal, Mobile: vertical columns */}
            <div className="flex w-full max-w-[1152px] flex-col items-start gap-8 lg:flex-row lg:justify-center lg:gap-16">
              {/* GET STARTED */}
              <div className="flex flex-1 flex-col items-start gap-3">
                <h3 className="text-xs font-normal leading-[18px] tracking-[-0.12px] text-[#98A2B3]">
                  GET STARTED
                </h3>
                <div className="flex flex-col items-start gap-3">
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     Sign up
                   </a>
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     Login
                   </a>
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     Book a Demo
                   </a>
                </div>
              </div>

              {/* SOLUTIONS */}
              <div className="flex flex-1 flex-col items-start gap-3">
                <h3 className="text-xs font-normal leading-[18px] tracking-[-0.12px] text-[#98A2B3]">
                  SOLUTIONS
                </h3>
                <div className="flex flex-col items-start gap-3">
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     For Clients
                   </a>
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     For Therapists
                   </a>
                </div>
              </div>

              {/* LEGAL */}
              <div className="flex flex-1 flex-col items-start gap-3">
                <h3 className="text-xs font-normal leading-[18px] tracking-[-0.12px] text-[#98A2B3]">
                  LEGAL
                </h3>
                <div className="flex flex-col items-start gap-3">
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     Privacy Policy
                   </a>
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     Terms of Service
                   </a>
                   <a
                     href="#"
                     className="text-sm font-normal leading-5 tracking-[-0.14px] text-[#F2F4F7] transition-all duration-200 hover:text-white hover:underline"
                   >
                     Compliance
                   </a>
                </div>
              </div>
            </div>

            {/* App Store Badges and HIPAA Container - Desktop: 3-column grid, Mobile: vertical */}
            <div className="grid w-full max-w-[1152px] grid-cols-1 gap-8 py-5 lg:grid-cols-3 lg:gap-16">
              {/* Store Buttons - Spans 2 columns on desktop */}
              <div className="flex items-center gap-4 col-span-2">
                <a
                  href="#"
                  className="transition-all duration-200 hover:scale-105"
                >
                  <img
                    src="/playstorebadge.svg"
                    alt="Get it on Google Play"
                    className="h-10 w-[135px]"
                  />
                </a>
                <a
                  href="#"
                  className="transition-all duration-200 hover:scale-105"
                >
                  <img
                    src="/appstorebadge.svg"
                    alt="Download on the App Store"
                    className="h-10 w-[120px]"
                  />
                </a>
              </div>
              {/* HIPAA Badge - Column 3 */}
              <div className="col-span-1 flex justify-start lg:justify-end">
                <img
                  src="/hippabadge.svg"
                  alt="HIPAA Compliant"
                  className="h-20 w-[107px]"
                />
              </div>
            </div>

            {/* Horizontal Border - Social Media and Copyright - Desktop: horizontal, Mobile: vertical */}
            <div className="flex w-full max-w-[1152px] flex-col items-start gap-8 border-t border-dashed border-[#667085] pt-5 lg:flex-row lg:items-end lg:justify-between">
              <p className="text-xs font-normal leading-[18px] tracking-[-0.12px] text-[#D0D5DD] lg:whitespace-nowrap">
                © Copyright 2025. All Rights Reserved by Nara LLC.
              </p>
              <div className="flex flex-row items-start gap-2">
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center transition-colors duration-200 hover:text-gray-300 lg:h-6 lg:w-6"
                >
                  <Twitter className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center transition-colors duration-200 hover:text-gray-300 lg:h-6 lg:w-6"
                >
                  <LinkedIn className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center transition-colors duration-200 hover:text-gray-300 lg:h-6 lg:w-6"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            {/* Horizontal Border - Crisis Line Disclaimer */}
            <div className="flex w-full max-w-[1152px] flex-col items-start gap-8 border-t border-dashed border-[#667085] pt-5 lg:flex-row lg:items-center lg:gap-[260.48px]">
              <p className="max-w-[640px] text-xs font-normal leading-[18px] tracking-[-0.12px] text-[#D0D5DD] lg:w-[640px]">
                *If you are experiencing a mental health crisis please reach out to 988 for free and confidential support 24/7. You can call or text 988 or chat at{" "}
                <a
                  href="https://988lifeline.org"
                  className="underline transition-all duration-200 hover:text-white"
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

        {/* Background Watermark Container - Different for mobile and desktop */}
        <div className="flex w-full items-center justify-center px-4 lg:px-36">
          {/* Desktop Background */}
          <div className="hidden lg:block relative h-[210.94px] w-full max-w-[1152px] overflow-hidden bg-gradient-to-b from-[#080808] to-[#00100A]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[200px] font-bold text-white/10">Nara</span>
            </div>
          </div>
          {/* Mobile Background */}
          <div className="block lg:hidden relative h-[69px] w-full max-w-[343px] overflow-hidden bg-gradient-to-b from-[#080808] to-[#00100A]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[60px] font-bold text-white/10">Nara</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

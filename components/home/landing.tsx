import React from "react";
import { QuoteDown, UserSearch, TaskSquare, SmsStar, Messages2, Book, UserOctagon } from "iconsax-react";
import Testimonials from "./testimonials";
import Faq from "./faq";

// Single responsive landing built from the desktop version and adapted down to mobile
export default function Landing() {
  // Figma MCP/local assets
  const imgHeroGradients27 =
    "http://localhost:3845/assets/782b5e614eee98d14246b1691d487d72dc3f1bd1.png";
  const heroMockup = "/Hero section mockup.webp";
  const imgContainer =
    "http://localhost:3845/assets/6ccd6fef682f0627592637ddeb500abcb5a4829b.png";
  const img67Eb90 =
    "http://localhost:3845/assets/3908204892c1b7e1bea8585535a6122a0a0eac4f.png";
  const imgFooterGrad =
    "http://localhost:3845/assets/fa660c84c18525d61ab8ceea3b74b54e1a86dcba.png";

  return (
    <div className="w-full">
      {/* Hero Section with improved background structure */}
      <div className="lg:px-6 px-3">
        <div className="lg:px-20 lg:pb-3 p-4 bg-gradient-to-b from-[#f7fefb] to-[#e7fef6] shadow-xs rounded-b-[24px] lg:rounded-b-[32px] border-b border-[#e7fef6] overflow-hidden">
          <div className="flex flex-col">
            <div className="pt-18 lg:pt-48">
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
                    <div className="bg-[#015033] hover:bg-[#013d26] hover:scale-[1.02] hover:shadow-lg flex items-center justify-center px-5 h-[48px] cursor-pointer rounded w-full lg:max-w-fit transition-all duration-200 ease-out">
                      <p className="text-center text-base text-white">Get started - for free</p>
                    </div>
                  </a>
                  <div className="border border-[#015033] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center px-5 h-[48px] cursor-pointer rounded w-full lg:max-w-fit transition-all duration-200 ease-out">
                    <p className="text-center text-base text-[#015033]">Book a demo</p>
          </div>
        </div>
                <div className="w-full lg:w-[90%] lg:max-w-[1200px] relative h-[250px] lg:h-[921px] lg:max-h-screen mt-[64px] lg:mb-[56px] mb-[48px] rounded-[24px] lg:rounded-[32px overflow-hidden">
          <img
                    alt="nara-dash"
            src={heroMockup}
                    className="absolute object-fill"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="lg:px-6 lg:py-0 px-1 py-4">
        <section className="py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0]">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full" style={{ "--dash-color": "#F2F4F7" } as React.CSSProperties}>
              <div className="lg:px-6 px-3 max-w-[1440px] mx-auto">
              <div className="flex flex-col gap-7 lg:gap-8">
                <p className="text-[#015033] text-sm">FEATURES</p>
                <p className="text-[#101828] lg:leading-[72px] leading-[44px] lg:text-[60px] text-[36px] font-semibold">
                  One dashboard,<br className="hidden lg:flex" /> everything you need
                </p>
                <p className="text-base text-[#736F67] leading-[24px]">
                  Get a complete view of your client's mental health journey—from onboarding <br className="hidden lg:flex" /> to insights and ongoing support.
                </p>
              </div>

              {/* Mobile Layout - Single Column */}
              <div className="flex flex-col gap-8 lg:hidden">
                <div className="flex flex-col gap-8 py-5">
                  <div className="bg-[#e5f8f1] size-12 rounded-full flex items-center justify-center border border-[rgba(1,188,119,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#01BC77]">
                      <circle cx="12" cy="8" r="5"></circle>
                      <path d="M20 21a8 8 0 0 0-16 0"></path>
                      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">Remote Patient Monitoring</p>
                    <p className="text-[#736F67] text-base leading-6">Get real-time data on mood, engagement, and therapy progress.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-8 py-5">
                  <div className="bg-[#eff3fb] size-12 rounded-full flex items-center justify-center border border-[rgba(6,101,254,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0665fe]">
                      <path d="m3 17 2 2 4-4"></path>
                      <path d="m3 7 2 2 4-4"></path>
                      <path d="M13 6h8"></path>
                      <path d="M13 12h8"></path>
                      <path d="M13 18h8"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">Assignments</p>
                    <p className="text-[#736F67] text-base leading-6">Keep clients engaged between sessions with tailored assignments—track progress effortlessly and send timely reminders.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-8 py-5">
                  <div className="bg-[#fdf2f2] size-12 rounded-full flex items-center justify-center border border-[rgba(217,45,32,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D92D20]">
                      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">High Risk Detection</p>
                    <p className="text-[#736F67] text-base leading-6">Identify early signs of high-risk patients through assessments, mood check-ins, AI-powered conversations, and other integrated tools.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-8 py-5">
                  <div className="bg-amber-50 size-12 rounded-full flex items-center justify-center border border-[rgba(255,200,0,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffc800]">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">AI Chat Summaries</p>
                    <p className="text-[#736F67] text-base leading-6">View summaries of patient interactions with Nara's AI (with consent). Stay informed between sessions.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-8 py-5">
                  <div className="bg-[#f0fbff] size-12 rounded-full flex items-center justify-center border border-[rgba(89,213,251,0.1)]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#59D5FB]" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M431 320.6c0-4.4 1.2-8.6 3.3-12.2.6-1.1 1.4-2.1 2.1-3.1 17.4-26 27.6-57.1 27.6-90.3.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9-2.4 11.1-3.7 22.4-3.7 34.2 0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7 11.3-3.1 22.5-7.2 25.4-8.3 2.9-1.1 6.1-1.7 9.3-1.7 3.6 0 7 .7 10.1 2l56.7 20.1s2.4 1 3.9 1c4.4 0 8-3.5 8-8 0-1-.5-2.7-.5-2.7L431 320.6z"></path>
                      <path d="M318.5 392.5c-3.6 1-8.2 2.1-13.2 3.2-10.5 2.2-23.9 4.5-34 4.5-96.2 0-171-76.8-171-169.1 0-6.6.7-15 1.5-21.4.6-4.3 1.3-8.6 2.3-12.8 1-4.5 2.2-9 3.5-13.4l-8 7.1C66.8 219.2 48 260 48 302.5c0 29.3 8.5 57.5 24.8 82 2.3 3.5 3.6 6.2 3.2 8-.4 1.8-11.9 62-11.9 62-.6 2.9.5 5.8 2.7 7.7 1.5 1.2 3.3 1.8 5.1 1.8 1 0 2-.2 2.9-.6l56.1-22.1c1.8-.7 3.7-1.1 5.7-1.1 0 0 2.4-.2 6.3 1.3 18.9 7.4 39.8 12 60.7 12 46.6 0 90.4-20.1 120.1-55.1 0 0 3.2-4.4 6.9-9.6-3.7 1.3-7.9 2.6-12.1 3.7z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">Secure messaging</p>
                    <p className="text-[#736F67] text-base leading-6">Communicate safely with clients between appointments, keeping the therapeutic bond strong.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-8 py-5">
                  <div className="bg-[#fef6eb] size-12 rounded-full flex items-center justify-center border border-[rgba(245,151,20,0.1)]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-[#F59714]" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">AI Notes</p>
                    <p className="text-[#736F67] text-base leading-6">Manage interest lists, approve new clients, and automate follow-ups—all from one place.</p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Grid */}
              <div className="hidden lg:grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-8 py-6">
                  <div className="bg-[#e5f8f1] size-12 rounded-full flex items-center justify-center border border-[rgba(1,188,119,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#01BC77]">
                      <circle cx="12" cy="8" r="5"></circle>
                      <path d="M20 21a8 8 0 0 0-16 0"></path>
                      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">Remote Patient Monitoring</p>
                    <p className="text-[#736F67] leading-6 text-base">Get real-time data on mood, engagement, and therapy progress.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-6">
                  <div className="bg-[#eff3fb] size-12 rounded-full flex items-center justify-center border border-[rgba(6,101,254,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0665fe]">
                      <path d="m3 17 2 2 4-4"></path>
                      <path d="m3 7 2 2 4-4"></path>
                      <path d="M13 6h8"></path>
                      <path d="M13 12h8"></path>
                      <path d="M13 18h8"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">Assignments</p>
                    <p className="text-[#736F67] leading-6 text-base">Keep clients engaged between sessions with tailored assignments—track progress effortlessly and send timely reminders.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-6">
                  <div className="bg-[#fdf2f2] size-12 rounded-full flex items-center justify-center border border-[rgba(217,45,32,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D92D20]">
                      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">High Risk Detection</p>
                    <p className="text-[#736F67] leading-6 text-base">Identify early signs of high-risk patients through assessments, mood check-ins, AI-powered conversations, and other integrated tools.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-6">
                  <div className="bg-amber-50 size-12 rounded-full flex items-center justify-center border border-[rgba(255,200,0,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffc800]">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">AI Chat Summaries</p>
                    <p className="text-[#736F67] leading-6 text-base">View summaries of patient interactions with Nara's AI (with consent). Stay informed between sessions.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-6">
                  <div className="bg-[#f0fbff] size-12 rounded-full flex items-center justify-center border border-[rgba(89,213,251,0.1)]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#59D5FB]" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M431 320.6c0-4.4 1.2-8.6 3.3-12.2.6-1.1 1.4-2.1 2.1-3.1 17.4-26 27.6-57.1 27.6-90.3.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9-2.4 11.1-3.7 22.4-3.7 34.2 0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7 11.3-3.1 22.5-7.2 25.4-8.3 2.9-1.1 6.1-1.7 9.3-1.7 3.6 0 7 .7 10.1 2l56.7 20.1s2.4 1 3.9 1c4.4 0 8-3.5 8-8 0-1-.5-2.7-.5-2.7L431 320.6z"></path>
                      <path d="M318.5 392.5c-3.6 1-8.2 2.1-13.2 3.2-10.5 2.2-23.9 4.5-34 4.5-96.2 0-171-76.8-171-169.1 0-6.6.7-15 1.5-21.4.6-4.3 1.3-8.6 2.3-12.8 1-4.5 2.2-9 3.5-13.4l-8 7.1C66.8 219.2 48 260 48 302.5c0 29.3 8.5 57.5 24.8 82 2.3 3.5 3.6 6.2 3.2 8-.4 1.8-11.9 62-11.9 62-.6 2.9.5 5.8 2.7 7.7 1.5 1.2 3.3 1.8 5.1 1.8 1 0 2-.2 2.9-.6l56.1-22.1c1.8-.7 3.7-1.1 5.7-1.1 0 0 2.4-.2 6.3 1.3 18.9 7.4 39.8 12 60.7 12 46.6 0 90.4-20.1 120.1-55.1 0 0 3.2-4.4 6.9-9.6-3.7 1.3-7.9 2.6-12.1 3.7z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">Secure messaging</p>
                    <p className="text-[#736F67] leading-6 text-base">Communicate safely with clients between appointments, keeping the therapeutic bond strong.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-6">
                  <div className="bg-[#fef6eb] size-12 rounded-full flex items-center justify-center border border-[rgba(245,151,20,0.1)]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-[#F59714]" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#353535] text-xl font-medium">AI Notes</p>
                    <p className="text-[#736F67] leading-6 text-base">Manage interest lists, approve new clients, and automate follow-ups—all from one place.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>

      {/* How it works */}
      <div id="how-it-works" className="lg:px-6 lg:py-0 px-1 py-4">
        <section className="py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#B9DFD1] bg-[#F4FBF9]">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full" style={{ "--dash-color": "#D1EAE1" } as React.CSSProperties}>
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
              <div className="grid w-full grid-cols-1 gap-4 text-left md:grid-cols-3">
                  <div className="flex flex-col">
                    <div className="mx-5 md:mx-8 inline-flex w-fit items-center justify-center rounded-t-md bg-[#01BC77] px-2 py-1 text-[12px] font-medium text-white">
                      STEP 1
                    </div>
                    <div className="relative rounded-[16px] md:rounded-[20px] bg-white p-6 md:p-8">
                      <h3 className="mb-2 text-[20px] leading-[30px] md:text-[24px] md:leading-[32px] font-medium text-[#222]">
                        Apply Today
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] tracking-[-0.01em] text-[#475467]">
                        Sign up, verify your credentials, and customise your profile.
                      </p>
                      <div className="pointer-events-none absolute inset-0 rounded-[16px] md:rounded-[20px] border border-[#EDF9F5]" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mx-5 md:mx-8 inline-flex w-fit items-center justify-center rounded-t-md bg-[#01BC77] px-2 py-1 text-[12px] font-medium text-white">
                      STEP 2
                    </div>
                    <div className="relative rounded-[16px] md:rounded-[20px] bg-white p-6 md:p-8">
                      <h3 className="mb-2 text-[20px] leading-[30px] md:text-[24px] md:leading-[32px] font-medium text-[#222]">
                        Get Connected
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] tracking-[-0.01em] text-[#475467]">
                        Invite your clients, sync your availability, and review their onboarding info.
                      </p>
                      <div className="pointer-events-none absolute inset-0 rounded-[16px] md:rounded-[20px] border border-[#EDF9F5]" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mx-5 md:mx-8 inline-flex w-fit items-center justify-center rounded-t-md bg-[#01BC77] px-2 py-1 text-[12px] font-medium text-white">
                      STEP 3
                    </div>
                    <div className="relative rounded-[16px] md:rounded-[20px] bg-white p-6 md:p-8">
                      <h3 className="mb-2 text-[20px] leading-[30px] md:text-[24px] md:leading-[32px] font-medium text-[#222]">
                        Track & Support
                      </h3>
                      <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] tracking-[-0.01em] text-[#475467]">
                        Assign homework, monitor insights, and follow AI summaries (with consent).
                      </p>
                      <div className="pointer-events-none absolute inset-0 rounded-[16px] md:rounded-[20px] border border-[#EDF9F5]" />
                    </div>
                  </div>
              </div>

              {/* CTAs */}
              <div className="flex w-full flex-col items-center gap-[12px] md:flex-row md:justify-center">
                <a
                  href="#get-started"
                  className="w-full md:w-auto rounded-[4px] bg-[#015033] hover:bg-[#013d26] hover:scale-[1.02] hover:shadow-lg px-5 py-3 text-center text-[16px] text-white transition-all duration-200 ease-out"
                >
                  Get started - for free
                </a>
                <a
                  href="#book-demo"
                  className="w-full md:w-auto rounded-[4px] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-lg px-5 py-3 text-center text-[16px] text-[#015033] transition-all duration-200 ease-out"
                  style={{ borderColor: "#015033", borderWidth: 1 }}
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Testimonials />

      {/* Founder spotlight */}
      <div className="lg:px-6 lg:py-0 px-1 py-4">
        <section className="py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0] bg-white">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full" style={{ "--dash-color": "#F2F4F7" } as React.CSSProperties}>
              <div className="lg:px-6 px-3 w-full">
              <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:justify-end md:gap-4">
              {/* Image Column */}
              <div className="flex flex-col w-full md:w-[580px] md:shrink-0">
                <div
                  className="h-[300px] w-full rounded-[16px] bg-cover bg-center md:h-[580px]"
                  style={{ backgroundImage: `url('/Perez+Nara.webp')` }}
                />
              </div>

              {/* Quote card */}
              <div
                className="relative isolate w-full rounded-[8px] border bg-white md:rounded-[16px] md:flex-1 md:h-[580px] flex flex-col justify-between"
                style={{ borderColor: "#F2F4F7", boxShadow: "0px 1px 2px rgba(198,236,223,0.1)" }}
              >
                {/* decorative quote */}
                <div className="absolute right-5 top-5 h-20 w-24 opacity-80 md:right-12 md:top-12 md:h-[118.81px] md:w-[142.95px] z-0">
                  <img src="/testimonialquotes.svg" alt="" className="w-full h-full" />
                </div>

                {/* Text content */}
                <div className="px-4 pt-5 md:px-12 md:pt-12 relative z-10">
                  <div className="space-y-5 text-[16px] leading-[24px] tracking-[-0.01em] text-[#59557B]">
                    <p>
                      At 18, I arrived in the U.S. for college, chasing big dreams. But life took an unexpected turn—I found out I was going to be a dad, and at the same time, I faced the threat of deportation. With no family around and nowhere to turn, I sank into a deep depression.
                    </p>
                    <p>
                      Everything changed when I met a therapist who helped me find clarity. What truly made the difference was the work I did between sessions—the daily practices and small steps that gave me the strength to keep going.
                    </p>
                    <p>
                      That experience shaped my life's mission: to help others find peace and healing through mental health. Therapy isn't just something we do once a week—it's a journey we live every day.
                    </p>
                  </div>
                  </div>

                {/* Author section */}
                <div className="px-4 pb-4 md:px-12 md:pb-8 relative z-10">
                  <div className="border-t" style={{ borderColor: "#EAECF0" }} />
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                      <img src="/perez-headshot.webp" alt="Perez Willie-Nwobu" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[12px] md:text-[14px] text-[#101828]">Perez Willie-Nwobu</p>
                      <p className="text-[11px] md:text-[12px] text-[#667085]">CEO, Nara Therapy</p>
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

      {/* FAQs */}
      <div className="lg:px-6 lg:py-0 px-1 py-4">
        <section className="py-6">
          <div className="rounded-[24px] lg:rounded-[32px] lg:px-[80px] px-3 border-[0.5px] border-[#EAECF0] bg-[#F9FAFB]">
            <div className="custom-dashed-border flex flex-col gap-8 lg:py-[96px] py-[56px] w-full" style={{ "--dash-color": "#D1EAE1" } as React.CSSProperties}>
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
                      Got questions? We've got answers. Chat with our <span className="underline hover:text-[#015033] hover:no-underline transition-all duration-200 cursor-pointer">support</span> team anytime.
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
  );
}



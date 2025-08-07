import React from "react";
import { QuoteDown, UserSearch, TaskSquare, SmsStar, Messages2, Book, UserOctagon } from "iconsax-react";
import DesktopFaq from "./faq-desktop";
import MobileFaq from "./faq-mobile";

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
    <div className="w-full bg-[#fcfcfd]">
      {/* Hero */}
      <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-4 pt-36 pb-12 md:pt-48 md:pb-14">
        <div
          className="pointer-events-none absolute left-1/2 -z-10 h-[881px] w-[1566px] -translate-x-1/2 bg-top bg-no-repeat opacity-40 md:h-[1541px] md:w-[2739.56px]"
          style={{ backgroundImage: `url('${imgHeroGradients27}')` }}
        />
        <div className="mx-auto max-w-[768px] text-center">
          <h1 className="font-semibold text-[#101828] text-[36px] leading-[44px] tracking-[-0.02em] md:text-[60px] md:leading-[72px] md:tracking-[-1.2px]">
            Managing all your patients has never been this easy
          </h1>
          <p className="mt-3 text-[18px] leading-[28px] text-[#475467] md:mt-4 md:text-[20px] md:leading-[30px]">
            Save time with our smart dashboard that helps you track progress, and
            stay connected between sessions.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
            <a className="rounded bg-[#015033] px-5 py-3 text-[16px] text-white" href="#get-started">
              Get started - for free
            </a>
            <a className="relative rounded px-5 py-3 text-[16px] text-[#015033]" href="#book-demo">
              <span className="pointer-events-none absolute inset-0 rounded border border-[#015033]" />
              Book a demo
            </a>
          </div>
        </div>

        {/* Simple hero mockup image (no masks) */}
        <div className="mt-10 md:mt-16 flex items-center justify-center">
          <img
            src={heroMockup}
            alt="Product mockup"
            className="w-full max-w-[1200px] rounded-[12px] md:rounded-[24px]"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto my-6 w-full max-w-[1440px] scroll-mt-[72px] px-4 md:scroll-mt-20">
        <div className="relative mx-auto w-full rounded-3xl md:rounded-[32px] bg-white border border-[#EAECF0]">
          {/* Inner dashed wrapper */}
          <div className="box-border mx-auto max-w-[1248px] border-x border-dashed border-[#F2F4F7] px-3 py-14 md:px-20 md:py-24">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-7 md:gap-8">
              <p className="text-[12px] md:text-[14px] tracking-[-0.01em] text-[#015033]">FEATURES</p>
              <div className="max-w-[574px] space-y-3 md:space-y-4">
                <h2 className="font-semibold text-[#101828] text-[36px] leading-[44px] tracking-[-0.02em] md:text-[60px] md:leading-[72px]">
                  One dashboard,
                  <br />
                  everything you need
                </h2>
                <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#736F67]">
                  Get a complete view of your client’s mental health journey—from onboarding to insights and ongoing
                  support.
                </p>
              </div>

              {/* Feature grid */}
              <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Patient Insights",
                    body:
                      "Get real-time data on mood, engagement, and therapy progress. Spot early signs of distress or disengagement.",
                    Icon: UserSearch,
                    frameBg: "#E5F8F1",
                    iconColor: "#01BC77",
                    borderColor: "rgba(1,188,119,0.1)",
                  },
                  {
                    title: "Homework Assignment",
                    body:
                      "Assign from templates or create custom tasks. Track completion and send reminders with ease.",
                    Icon: TaskSquare,
                    frameBg: "#EFF3FB",
                    iconColor: "#0665FE",
                    borderColor: "rgba(6,101,254,0.1)",
                  },
                  {
                    title: "AI Chat Summaries",
                    body:
                      "View summaries of patient interactions with Nara’s AI (with consent). Stay informed between sessions.",
                    Icon: SmsStar,
                    frameBg: "#FFFBEB",
                    iconColor: "#FFC800",
                    borderColor: "rgba(255,200,0,0.1)",
                  },
                  {
                    title: "Secure messaging",
                    body:
                      "Communicate safely with clients between appointments, keeping the therapeutic bond strong.",
                    Icon: Messages2,
                    frameBg: "#F0FBFF",
                    iconColor: "#59D5FB",
                    borderColor: "rgba(89,213,251,0.1)",
                  },
                  {
                    title: "Smart Onboarding",
                    body:
                      "Manage interest lists, approve new clients, and automate follow-ups—all from one place.",
                    Icon: Book,
                    frameBg: "#FEF6EB",
                    iconColor: "#F59714",
                    borderColor: "rgba(245,151,20,0.1)",
                  },
                  {
                    title: "Profile & Availability",
                    body:
                      "Edit your bio, update your schedule, manage insurance options, and add specialties.",
                    Icon: UserOctagon,
                    frameBg: "#FDF2F2",
                    iconColor: "#D92D20",
                    borderColor: "rgba(217,45,32,0.1)",
                  },
                ].map(({ title, body, Icon, frameBg, iconColor, borderColor }) => (
                  <div key={title} className="flex flex-col items-start gap-2 py-5 md:py-6">
                    <div
                      className="mb-2 flex size-12 items-center justify-center rounded-full border"
                      style={{ backgroundColor: frameBg, borderColor }}
                    >
                      <Icon size={24} color={iconColor} variant="Bold" />
                    </div>
                    <h3 className="text-[20px] font-medium leading-[30px] tracking-[-0.01em] text-[#353535]">{title}</h3>
                    <p className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#736F67]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto my-6 w-full max-w-[1440px] scroll-mt-[72px] px-4 md:scroll-mt-20">
        <div className="relative mx-auto w-full rounded-[32px] bg-[#f4fbf9]">
          <div className="px-4 md:px-20">
            <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-6 px-2 py-14 text-center md:gap-8 md:px-6 md:py-24">
              <p className="text-[12px] md:text-[14px] tracking-[-0.14px] text-[#015033]">GET STARTED</p>
              <h2 className="font-semibold text-[#070611] text-[36px] leading-[44px] md:text-[48px] md:leading-[60px]">
                How it works
              </h2>
              <p className="max-w-[428px] text-[14px] md:text-[16px] tracking-[-0.16px] text-[#475467]">
                Built with therapists, for therapists. Every feature is shaped by real feedback and real needs.
              </p>
              <div className="grid w-full grid-cols-1 gap-4 text-left md:grid-cols-3">
                {[
                  { step: "STEP 1", title: "Apply Today", body: "Sign up, verify your credentials, and customise your profile." },
                  { step: "STEP 2", title: "Get Connected", body: "Invite your clients, sync your availability, and review their onboarding info." },
                  { step: "STEP 3", title: "Track & Support", body: "Assign homework, monitor insights, and follow AI summaries (with consent)." },
                ].map((s) => (
                  <div key={s.step}>
                    <div className="inline-block rounded-t-lg bg-[#01bc77] px-2 py-1 text-[12px] text-white">{s.step}</div>
                    <div className="relative rounded-[20px] bg-white p-5 md:p-8">
                      <h3 className="mb-2 text-[20px] md:text-[24px] font-medium text-[#222]">{s.title}</h3>
                      <p className="text-[14px] md:text-[16px] text-[#475467]">{s.body}</p>
                      <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#edf9f5]" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex flex-col gap-3 md:flex-row">
                <a className="rounded bg-[#015033] px-5 py-3 text-center text-[16px] text-white" href="#get-started">
                  Get started - for free
                </a>
                <a className="relative rounded px-5 py-3 text-center text-[16px] text-[#015033]" href="#book-demo">
                  <span className="pointer-events-none absolute inset-0 rounded border border-[#015033]" />
                  Book a demo
                </a>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#b9dfd1]" aria-hidden />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto my-6 w-full max-w-[1440px] px-4">
        <div className="relative mx-auto w-full rounded-[32px] bg-gray-50">
          <div className="px-4 md:px-20">
            <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-6 px-2 py-14 md:gap-8 md:px-6 md:py-24">
              <div className="max-w-[750px] text-center">
                <p className="text-[12px] md:text-[14px] tracking-[-0.14px] text-[#015033]">CUSTOMER TESTIMONIALS</p>
                <h2 className="mt-2 text-[30px] md:text-[48px] leading-[44px] md:leading-[60px] text-[#070611] font-medium">
                  Trusted by therapists who want more than just video calls
                </h2>
              </div>
              <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
                {[
                  "Assigning and tracking homework is finally easy. Clients are more engaged now.",
                  "I spend less time on admin and more time helping clients. Nara keeps me updated even between sessions.",
                  "Seeing mood trends helps me personalise care. I’ve caught early signs of relapse thanks to Nara.",
                ].map((quote, i) => (
                  <div key={i} className="relative h-80 md:h-[440px] rounded-lg bg-white p-5 md:p-12">
                    <div className="absolute right-5 top-5 md:right-12 md:top-12">
                      <QuoteDown size="48" color="#EAECF0" variant="Bold" className="hidden md:block" />
                      <QuoteDown size="48" color="#EAECF0" variant="Bold" className="md:hidden" />
                    </div>
                    <p className="text-[20px] leading-[30px] md:text-[30px] md:leading-[44px] text-[#344054]">{quote}</p>
                    <div className="absolute inset-x-5 bottom-5 md:inset-x-12 md:bottom-8 border-t border-[#eaecf0] pt-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 md:size-11 rounded-full bg-cover" style={{ backgroundImage: `url('${img67Eb90}')` }} />
                        <div>
                          <p className="text-[12px] md:text-[14px] text-[#101828]">Kyle Cai</p>
                          <p className="text-[11px] md:text-[12px] text-[#667085]">Defiance Capital</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#eaecf0]" aria-hidden />
        </div>
      </section>

      {/* Founder spotlight */}
      <section className="mx-auto my-6 w-full max-w-[1440px] px-4">
        <div className="relative mx-auto w-full rounded-[32px] bg-white">
          <div className="mx-auto flex max-w-[1140px] flex-col-reverse items-center gap-4 px-3 py-14 md:flex-row-reverse md:items-center md:px-12 md:py-24">
            <div className="order-2 size-[300px] rounded-2xl bg-cover bg-center md:order-2 md:size-[580px]" style={{ backgroundImage: `url('${imgContainer}')` }} />
            <div className="order-1 relative w-full rounded-2xl bg-white p-4 md:order-1 md:flex-1 md:p-12">
              <div className="absolute right-5 top-5 md:right-12 md:top-12">
                <QuoteDown size="48" color="#EAECF0" variant="Bold" className="md:hidden" />
                <QuoteDown size="64" color="#EAECF0" variant="Bold" className="hidden md:block" />
              </div>
              <div className="space-y-4 text-[16px] tracking-[-0.16px] text-[#59557b] md:space-y-5">
                <p>
                  Artemis is honestly the best tool for Excel integration and Excel is where every fund I know does
                  their real work. At the end of the day, we just want clean, reliable data.
                </p>
                <p>Protocol revenue, user metrics, fees, TVL etc. Artemis makes that easy to pull and model.</p>
                <p>It just works and saves hours each week.</p>
              </div>
              <div className="mt-4 flex items-center gap-6 border-t border-[#eaecf0] pt-4 md:gap-8">
                <div className="flex -space-x-3">
                  <div className="size-[36px] md:size-[43px] rounded-full bg-cover border-2 border-white" style={{ backgroundImage: `url('${img67Eb90}')` }} />
                  <div className="size-[36px] md:size-[43px] rounded-full bg-cover border-2 border-white" style={{ backgroundImage: `url('${img67Eb90}')` }} />
                </div>
                <div>
                  <p className="text-[12px] md:text-[14px] text-[#101828]">Joshua x Perez</p>
                  <p className="text-[11px] md:text-[12px] text-[#667085]">Cofounders, Nara Therapy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#eaecf0]" />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mx-auto my-6 w-full max-w-[1440px] scroll-mt-[72px] px-4 md:scroll-mt-20">
        <div className="relative mx-auto w-full rounded-[32px] bg-gray-50">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-6 px-4 py-14 md:grid-cols-2 md:gap-8 md:px-20 md:py-24">
            <div>
              <h2 className="text-[#101828] text-[36px] leading-[44px] font-semibold md:text-[48px] md:leading-[60px]">
                Frequently asked
                <br />
                questions
              </h2>
              <p className="mt-4 text-[14px] md:text-[16px] text-[#475467]">
                Got questions? We’ve got answers. Chat with our <span className="underline">support</span> team anytime.
              </p>
            </div>
            <div>
              <div className="hidden md:block"><DesktopFaq /></div>
              <div className="md:hidden"><MobileFaq /></div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#eaecf0]" />
        </div>
      </section>

      {/* Decorative footer gradient */}
      <div className="w-full">
        <div className="flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080808] to-[#00100a] px-10 md:px-36">
          <div className="h-[69px] w-full max-w-[1152px] bg-cover bg-center md:h-[210.938px]" style={{ backgroundImage: `url('${imgFooterGrad}')` }} />
        </div>
      </div>
    </div>
  );
}



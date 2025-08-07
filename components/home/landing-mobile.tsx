import React from "react";
import { QuoteDown } from "iconsax-react";
import MobileFaq from "./faq-mobile";

// Mobile landing (trimmed from Figma)
export default function LandingMobile() {
  const imgHeroGradients27 =
    "http://localhost:3845/assets/782b5e614eee98d14246b1691d487d72dc3f1bd1.png";
  const imgIPadPro12 =
    "http://localhost:3845/assets/3a8f85cba1f91538cb90cde59859fc15577bbf67.png";
  // Replace the iPad screen content with the local hero mockup served from /public
  const imgPasteImageHere1 = "/hero-section-mockup.webp";
  const imgPasteImageHere =
    "http://localhost:3845/assets/c2b89a8e085e6ec07dcb7b0763c8b489ba94ed61.svg";
  // decorative quote image replaced by Iconsax QuoteDown
  const imgContainer =
    "http://localhost:3845/assets/6ccd6fef682f0627592637ddeb500abcb5a4829b.png";
  const img67Eb90 =
    "http://localhost:3845/assets/3908204892c1b7e1bea8585535a6122a0a0eac4f.png";

  return (
    <div className="bg-[#fcfcfd] w-full">
      {/* Hero */}
      <section className="relative mx-auto max-w-[1440px] px-4 pt-36 pb-12 overflow-hidden">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[881px] w-[1566px] -translate-x-1/2 opacity-40 bg-top bg-no-repeat"
          style={{ backgroundImage: `url('${imgHeroGradients27}')` }}
        />
        <h1 className="text-[36px] leading-[44px] font-semibold text-[#101828]">
          Managing all your patients has never been this easy
        </h1>
        <p className="mt-3 text-[18px] leading-[28px] text-[#475467]">
          Save time with our smart dashboard that helps you track progress, and
          stay connected between sessions.
        </p>
        <div className="mt-6 space-y-3">
          <a className="block rounded bg-[#015033] px-5 py-3 text-center text-[16px] text-white" href="#get-started">
            Get started - for free
          </a>
          <a className="relative block rounded px-5 py-3 text-center text-[16px] text-[#015033]" href="#book-demo">
            <span className="pointer-events-none absolute inset-0 rounded border border-[#015033]" />
            Book a demo
          </a>
        </div>
        {/* Mockup */}
        <div className="mt-10 overflow-hidden rounded-md w-[329px]">
          <div className="relative h-[253px] w-[329px]">
            <div className="rotate-[0deg]">
              <div className="relative h-[252.657px] w-[329px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${imgIPadPro12}')` }}
                />
                <div className="absolute left-[11.74px] top-[12.29px]">
                  <div className="absolute left-[11.74px] top-[12.29px] h-[305px] w-[229px]">
                    <div className="rotate-90">
                      <div
                        className="relative h-[228.893px] w-[305.373px]"
                        style={{
                          maskImage: `url('${imgPasteImageHere}')`,
                          maskRepeat: "no-repeat",
                          maskPosition: "0 -0.001px",
                          maskSize: "305.373px 228.894px",
                        } as unknown as React.CSSProperties}
                      >
                        <img
                          src={imgPasteImageHere1}
                          alt="App"
                          className="block h-full w-full max-w-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[11.75px] top-[12.24px] h-[305.32px] w-[228.833px] rounded bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto mt-4 max-w-[1440px] rounded-3xl bg-white px-3 py-14 scroll-mt-[72px]">
        <p className="text-[12px] text-[#015033]">FEATURES</p>
        <h2 className="mt-2 text-[36px] leading-[44px] font-semibold text-[#101828]">
          One dashboard,
          <br />
          everything you need
        </h2>
        <p className="mt-2 text-[16px] text-[#736f67]">
          Get a complete view of your client’s mental health journey—from
          onboarding to insights and ongoing support.
        </p>
        <div className="mt-8 space-y-8">
          {[
            {
              title: "Patient Insights",
              body:
                "Real-time data on mood, engagement, and therapy progress. Spot early signs of distress or disengagement.",
            },
            {
              title: "Homework Assignment",
              body:
                "Assign from templates or create custom tasks. Track completion and send reminders.",
            },
            {
              title: "AI Chat Summaries",
              body:
                "View summaries of patient interactions with Nara’s AI (with consent).",
            },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-[20px] font-medium text-[#353535]">{f.title}</h3>
              <p className="mt-2 text-[16px] text-[#736f67]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto mt-4 max-w-[1440px] rounded-3xl bg-[#f4fbf9] px-3 py-14 scroll-mt-[72px]">
        <p className="text-[12px] text-[#015033]">GET STARTED</p>
        <h2 className="mt-2 text-[36px] leading-[44px] font-semibold text-[#101828]">How it works</h2>
        <p className="mt-1 text-[14px] text-[#475467]">
          Built with therapists, for therapists. Every feature is shaped by real
          feedback and real needs.
        </p>
        <div className="mt-6 space-y-4">
          {[
            { step: "STEP 1", title: "Apply Today", body: "Sign up, verify your credentials, and customise your profile." },
            { step: "STEP 2", title: "Get Connected", body: "Invite your clients, sync your availability, and review their onboarding info." },
            { step: "STEP 3", title: "Track & Support", body: "Assign homework, monitor insights, and follow AI summaries (with consent)." },
          ].map((s) => (
            <div key={s.step}>
              <div className="inline-block rounded-t-lg bg-[#01bc77] px-2 py-1 text-[12px] text-white">
                {s.step}
              </div>
              <div className="relative rounded-2xl border border-[#edf9f5] bg-white p-5">
                <h3 className="mb-2 text-[20px] font-medium text-[#222]">{s.title}</h3>
                <p className="text-[14px] text-[#475467]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          <a className="block rounded bg-[#015033] px-5 py-3 text-center text-[16px] text-white" href="#get-started">
            Get started - for free
          </a>
          <a className="relative block rounded px-5 py-3 text-center text-[16px] text-[#015033]" href="#book-demo">
            <span className="pointer-events-none absolute inset-0 rounded border border-[#015033]" />
            Book a demo
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto mt-4 max-w-[1440px] rounded-3xl bg-gray-50 px-3 py-14">
        <p className="text-[12px] text-[#015033]">CUSTOMER TESTIMONIALS</p>
        <h2 className="mt-2 text-[30px] font-medium text-[#101828]">
          Trusted by therapists who want more than just video calls
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-3">
          <div className="relative h-80 rounded-lg bg-white p-5">
            <div className="absolute right-5 top-5">
              <QuoteDown size="48" color="#EAECF0" variant="Bold" />
            </div>
            <p className="text-[20px] leading-[30px] text-[#344054]">
              I spend less time on admin and more time helping clients. Nara keeps me
              updated even between sessions.
            </p>
            <div className="mt-4 flex items-center gap-2 border-t border-[#eaecf0] pt-4">
              <div
                className="size-9 rounded-full bg-cover"
                style={{ backgroundImage: `url('${img67Eb90}')` }}
              />
              <div>
                <p className="text-[12px] text-[#101828]">Kyle Cai</p>
                <p className="text-[11px] text-[#667085]">Defiance Capital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder spotlight */}
      <section className="mx-auto mt-4 max-w-[1440px] rounded-3xl bg-white px-3 py-14">
        <div
          className="h-[300px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url('${imgContainer}')` }}
        />
        <div className="relative mt-4 rounded-lg border border-[#f2f4f7] bg-white p-4">
            <div className="absolute right-5 top-5">
              <QuoteDown size="48" color="#EAECF0" variant="Bold" />
            </div>
          <div className="space-y-4 text-[16px] text-[#59557b]">
            <p>
              Artemis is honestly the best tool for Excel integration and Excel is
              where every fund I know does their real work.
            </p>
            <p>
              At the end of the day, we just want clean, reliable data. Artemis makes
              that easy to pull and model.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mx-auto mt-4 max-w-[1440px] rounded-3xl bg-gray-50 px-3 py-14 scroll-mt-[72px]">
        <h2 className="text-[36px] leading-[44px] font-semibold text-[#101828]">
          Frequently asked
          <br />
          questions
        </h2>
        <p className="mt-2 text-[14px] text-[#475467]">
          Got questions? We’ve got answers. Chat with our support team anytime.
        </p>
        <MobileFaq />
      </section>

      {/* Bottom gradient */}
      <div className="mt-4 h-[69px] bg-gradient-to-b from-[#080808] to-[#00100a]" />
    </div>
  );
}



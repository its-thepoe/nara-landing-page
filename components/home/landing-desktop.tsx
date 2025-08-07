import React from "react";
import { QuoteDown } from "iconsax-react";
import DesktopFaq from "./faq-desktop";

// Desktop landing (trimmed from Figma)
export default function LandingDesktop() {
  // Image/SVG assets served by the local Figma MCP server
  const imgHeroGradients27 =
    "http://localhost:3845/assets/782b5e614eee98d14246b1691d487d72dc3f1bd1.png";
  const imgIPadPro12 =
    "http://localhost:3845/assets/3a8f85cba1f91538cb90cde59859fc15577bbf67.png";
  const imgPasteImageHere1 =
    "http://localhost:3845/assets/0083168dba7110dbe104f05586d5313d68477582.png";
  const imgPasteImageHere =
    "http://localhost:3845/assets/f07d71d508121fbc31265874ffee2f374f2146f3.svg";
  // decorative quote image replaced by Iconsax QuoteDown
  const imgContainer =
    "http://localhost:3845/assets/6ccd6fef682f0627592637ddeb500abcb5a4829b.png";
  const img67Eb90 =
    "http://localhost:3845/assets/3908204892c1b7e1bea8585535a6122a0a0eac4f.png";
  const imgFooterGrad =
    "http://localhost:3845/assets/fa660c84c18525d61ab8ceea3b74b54e1a86dcba.png";

  return (
    <div className="bg-[#fcfcfd] w-full">
      {/* Hero */}
      <section className="relative mx-auto max-w-[1440px] px-4 pt-48 pb-14">
        <div
          className="pointer-events-none absolute inset-x-1/2 -z-10 h-[1541px] w-[2739.56px] -translate-x-1/2 opacity-40 bg-top bg-no-repeat"
          style={{ backgroundImage: `url('${imgHeroGradients27}')` }}
        />
        <div className="mx-auto max-w-[768px] text-center">
          <h1 className="text-[#101828] text-[60px] leading-[72px] tracking-[-1.2px] font-semibold">
            Managing all your patients has never been this easy
          </h1>
          <p className="mt-4 text-[#475467] text-[20px] leading-[30px] tracking-[-0.2px]">
            Save time with our smart dashboard that helps you track progress, and
            stay connected between sessions.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a className="rounded bg-[#015033] px-5 py-3 text-[16px] text-white" href="#get-started">
              Get started - for free
            </a>
            <a className="relative rounded px-5 py-3 text-[16px] text-[#015033]" href="#book-demo">
              <span className="pointer-events-none absolute inset-0 rounded border border-[#015033]" />
              Book a demo
            </a>
          </div>
        </div>
        {/* Mock iPad */}
        <div className="mt-16 flex items-center justify-center">
          <div className="relative h-[922px] w-[1200px] overflow-hidden rounded-[24px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rotate-[270deg]">
                <div className="relative h-[1200px] w-[921.544px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${imgIPadPro12}')` }}
                  />
                  <div className="absolute left-[42.83px] top-[44.83px]">
                    <div className="absolute left-[42.83px] top-[44.83px] h-[1114px] w-[835px]">
                      <div className="rotate-90">
                        <div
                          className="relative h-[834.869px] w-[1113.82px]"
                          style={{
                            maskImage: `url('${imgPasteImageHere}')`,
                            maskRepeat: "no-repeat",
                            maskPosition: "0 -0.006px",
                            maskSize: "1113.82px 834.869px",
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-4 my-6 scroll-mt-[72px] md:scroll-mt-20">
        <div className="relative mx-auto w-full max-w-[1440px] rounded-[32px] bg-white">
          <div className="px-20">
            <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-8 px-6 py-24">
              <p className="text-[14px] tracking-[-0.14px] text-[#015033]">FEATURES</p>
              <div>
                <h2 className="text-[60px] leading-[72px] tracking-[-1.2px] text-[#101828] font-semibold">
                  One dashboard,
                  <br />
                  everything you need
                </h2>
                <p className="mt-4 max-w-[640px] text-[16px] leading-[24px] tracking-[-0.16px] text-[#736f67]">
                  Get a complete view of your client’s mental health journey—from
                  onboarding to insights and ongoing support.
                </p>
              </div>
              <div className="grid w-full grid-cols-3 gap-8">
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
                  <div key={f.title} className="flex flex-col gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#e5f8f1]" />
                    <h3 className="text-[20px] font-medium text-[#353535]">{f.title}</h3>
                    <p className="text-[16px] text-[#736f67]">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#eaecf0]"
            aria-hidden
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-4 my-6 scroll-mt-[72px] md:scroll-mt-20">
        <div className="relative mx-auto w-full max-w-[1440px] rounded-[32px] bg-[#f4fbf9]">
          <div className="px-20">
            <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8 px-6 py-24 text-center">
              <p className="text-[14px] tracking-[-0.14px] text-[#015033]">GET STARTED</p>
              <h2 className="text-[48px] leading-[60px] text-[#070611] font-semibold">How it works</h2>
              <p className="max-w-[428px] text-[16px] tracking-[-0.16px] text-[#475467]">
                Built with therapists, for therapists. Every feature is shaped by
                real feedback and real needs.
              </p>
              <div className="grid w-full grid-cols-3 gap-4 text-left">
                {[
                  { step: "STEP 1", title: "Apply Today", body: "Sign up, verify your credentials, and customise your profile." },
                  { step: "STEP 2", title: "Get Connected", body: "Invite your clients, sync your availability, and review their onboarding info." },
                  { step: "STEP 3", title: "Track & Support", body: "Assign homework, monitor insights, and follow AI summaries (with consent)." },
                ].map((s) => (
                  <div key={s.step}>
                    <div className="inline-block rounded-t-lg bg-[#01bc77] px-2 py-1 text-[12px] text-white">
                      {s.step}
                    </div>
                    <div className="relative rounded-[20px] bg-white p-8">
                      <h3 className="mb-2 text-[24px] font-medium text-[#222]">{s.title}</h3>
                      <p className="text-[16px] text-[#475467]">{s.body}</p>
                      <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#edf9f5]" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex gap-3">
                <a className="rounded bg-[#015033] px-5 py-3 text-[16px] text-white" href="#get-started">
                  Get started - for free
                </a>
                <a className="relative rounded px-5 py-3 text-[16px] text-[#015033]" href="#book-demo">
                  <span className="pointer-events-none absolute inset-0 rounded border border-[#015033]" />
                  Book a demo
                </a>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#b9dfd1]"
            aria-hidden
          />
        </div>
      </section>

      {/* Testimonials (3 cards) */}
      <section className="mx-4 my-6">
        <div className="relative mx-auto w-full max-w-[1440px] rounded-[32px] bg-gray-50">
          <div className="px-20">
            <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8 px-6 py-24">
              <div className="max-w-[750px] text-center">
                <p className="text-[14px] tracking-[-0.14px] text-[#015033]">CUSTOMER TESTIMONIALS</p>
                <h2 className="mt-2 text-[48px] leading-[60px] text-[#070611] font-medium">
                  Trusted by therapists who want more than just video calls
                </h2>
              </div>
              <div className="grid w-full grid-cols-3 gap-4">
                {[
                  "Assigning and tracking homework is finally easy. Clients are more engaged now.",
                  "I spend less time on admin and more time helping clients. Nara keeps me updated even between sessions.",
                  "Seeing mood trends helps me personalise care. I’ve caught early signs of relapse thanks to Nara.",
                ].map((quote, i) => (
                  <div key={i} className="relative h-[440px] rounded-lg bg-white p-12">
                    <div className="absolute right-12 top-12">
                      <QuoteDown size="64" color="#EAECF0" variant="Bold" />
                    </div>
                    <p className="text-[30px] leading-[44px] text-[#344054]">{quote}</p>
                    <div className="absolute inset-x-12 bottom-8 border-t border-[#eaecf0] pt-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-11 rounded-full bg-cover"
                          style={{ backgroundImage: `url('${img67Eb90}')` }}
                        />
                        <div>
                          <p className="text-[14px] text-[#101828]">Kyle Cai</p>
                          <p className="text-[12px] text-[#667085]">Defiance Capital</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#eaecf0]"
            aria-hidden
          />
        </div>
      </section>

      {/* Founder spotlight (image + text) */}
      <section className="mx-4 my-6">
        <div className="relative mx-auto w-full max-w-[1440px] rounded-[32px] bg-white">
          <div className="mx-auto flex max-w-[1140px] flex-row-reverse items-center gap-4 px-12 py-24">
            <div
              className="order-2 size-[580px] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url('${imgContainer}')` }}
            />
            <div className="order-1 relative flex-1 rounded-2xl bg-white p-12">
              <div className="absolute right-12 top-12">
                <QuoteDown size="64" color="#EAECF0" variant="Bold" />
              </div>
              <div className="space-y-5 text-[16px] tracking-[-0.16px] text-[#59557b]">
                <p>
                  Artemis is honestly the best tool for Excel integration and Excel is where every fund I
                  know does their real work. At the end of the day, we just want clean, reliable data.
                </p>
                <p>
                  Protocol revenue, user metrics, fees, TVL etc. Artemis makes that easy to pull and model.
                </p>
                <p>It just works and saves hours each week.</p>
              </div>
              <div className="mt-4 flex items-center gap-8 border-t border-[#eaecf0] pt-4">
                <div className="flex -space-x-3">
                  <div
                    className="size-[43px] rounded-full bg-cover border-2 border-white"
                    style={{ backgroundImage: `url('${img67Eb90}')` }}
                  />
                  <div
                    className="size-[43px] rounded-full bg-cover border-2 border-white"
                    style={{ backgroundImage: `url('${img67Eb90}')` }}
                  />
                </div>
                <div>
                  <p className="text-[14px] text-[#101828]">Joshua x Perez</p>
                  <p className="text-[12px] text-[#667085]">Cofounders, Nara Therapy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#eaecf0]" />
        </div>
      </section>

      {/* FAQs (compact) */}
      <section id="faqs" className="mx-4 my-6 scroll-mt-[72px] md:scroll-mt-20">
        <div className="relative mx-auto w-full max-w-[1440px] rounded-[32px] bg-gray-50">
          <div className="mx-auto grid max-w-[1140px] grid-cols-2 items-start gap-8 px-20 py-24">
            <div>
              <h2 className="text-[48px] leading-[60px] font-semibold text-[#101828]">
                Frequently asked
                <br />
                questions
              </h2>
              <p className="mt-4 text-[16px] text-[#475467]">
                Got questions? We’ve got answers. Chat with our <span className="underline">support</span>
                {" "}team anytime.
              </p>
            </div>
            <DesktopFaq />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#eaecf0]" />
        </div>
      </section>

      {/* Decorative footer gradient */}
      <div className="w-full">
        <div className="flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080808] to-[#00100a] px-36">
          <div
            className="h-[210.938px] w-[1152px] bg-cover bg-center"
            style={{ backgroundImage: `url('${imgFooterGrad}')` }}
          />
        </div>
      </div>
    </div>
  );
}



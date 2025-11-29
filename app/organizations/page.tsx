"use client";

import OrganizationHomepage from "@/components/home/organization-homepage";
import Footer from "@/components/layout/footer";

export default function OrganizationsPage() {
  return (
    <div className="w-full">
      <OrganizationHomepage />
      <Footer />

      {/* Post-Footer - Fixed Background Image Container */}
      <div className="fixed bottom-0 left-0 right-0 z-[-1] flex w-full items-center justify-center px-4 py-0 lg:px-36 bg-gradient-to-b from-[#080808] to-[#00100A]">
        {/* Desktop Background */}
        <div
          className="hidden lg:block h-[210.938px] w-[1152px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/footerlogo-desktop.webp')" }}
        />
        {/* Mobile Background */}
        <div
          className="block lg:hidden h-[69px] w-full max-w-[343px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/footerlogo-mobile.webp')" }}
        />
      </div>
    </div>
  );
}

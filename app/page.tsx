import LandingDesktop from "@/components/home/landing-desktop";
import LandingMobile from "@/components/home/landing-mobile";
import NavResponsive from "@/components/layout/nav-responsive";

export default function Page() {
  return (
    <div className="w-full">
      <NavResponsive />
      {/* push content below fixed nav: 72px on mobile per Figma, 80px on md+ */}
      <div className="h-[72px] md:h-20" />
      <div className="hidden md:block">
        <LandingDesktop />
      </div>
      <div className="md:hidden">
        <LandingMobile />
      </div>
    </div>
  );
}

import LandingDesktop from "@/components/home/landing-desktop";
import LandingMobile from "@/components/home/landing-mobile";

export default function Page() {
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <LandingDesktop />
      </div>
      <div className="md:hidden">
        <LandingMobile />
      </div>
    </div>
  );
}

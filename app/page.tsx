import Landing from "@/components/home/landing";
import NavResponsive from "@/components/layout/nav-responsive";

export default function Page() {
  return (
    <div className="w-full">
      <NavResponsive />
      {/* push content below fixed nav: 72px on mobile per Figma, 80px on md+ */}
      <div className="h-[72px] md:h-20" />
      <Landing />
    </div>
  );
}

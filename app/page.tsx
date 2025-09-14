import Landing from "@/components/home/landing";
import NavResponsive from "@/components/layout/nav-responsive";
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <div className="w-full">
      <NavResponsive />
      <Landing />
      <Footer />
    </div>
  );
}

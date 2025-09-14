import Landing from "@/components/home/landing";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

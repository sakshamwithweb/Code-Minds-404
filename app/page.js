import Footer from "@/components/Footer";
import KnowMoreAbout from "@/components/KnowMoreAbout";
import MainBanner from "@/components/MainBanner";
import Navbar from "@/components/Navbar";
import Support from "@/components/Support";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <MainBanner/>
      <Testimonials/>
      <KnowMoreAbout/>
      <Support/>
      <Footer/>
    </div>
  );
}
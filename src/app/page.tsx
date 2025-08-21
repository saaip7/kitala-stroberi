import Gallery from "@/components/Galeri";
import WhyVisit from "@/components/WhyVisit";
import AboutUs from "@/components/AboutUs";
import LocationInfo from "@/components/LocationInfo";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import CTA from "@/components/CTA";
import Herov2 from "@/components/Herov2";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Herov2/>
      <Gallery/>
      <WhyVisit/>
      <AboutUs/>
      <LocationInfo/>
      <Testimonials/>
      <Articles/>
      <CTA/>
    </div>
  );
}

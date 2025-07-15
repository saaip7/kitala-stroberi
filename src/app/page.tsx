import Hero from "../components/Hero";
import Gallery from "@/components/Galeri";
import WhyVisit from "@/components/WhyVisit";
import AboutUs from "@/components/AboutUs";
import LocationInfo from "@/components/LocationInfo";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero/>
      <Gallery/>
      <WhyVisit/>
      <AboutUs/>
      <LocationInfo/>
      <Testimonials/>
      <Articles/>
      <CTA/>
      <Footer/>

    </div>
  );
}

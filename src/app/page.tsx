import AppearText from "@/components/AppearText";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Manifesto from "@/components/Manifesto";
import Pricing from "@/components/Pricing";
import MarqueeFooter from "@/utils/MarqueeFooter";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <Manifesto/>
    <Pricing/>
    <Faqs/>
    <ContactUs/>
    <Footer/>
   </main>
  );
}

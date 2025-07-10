import AppearText from "@/components/AppearText";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Manifesto from "@/components/Manifesto";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <Manifesto/>
    <AppearText/>
    <Pricing/>
    <Faqs/>
    <ContactUs/>
    <Footer/>
   </main>
  );
}

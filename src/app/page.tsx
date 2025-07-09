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
    <Services/>
    <Projects/>
    <Pricing/>
   </main>
  );
}

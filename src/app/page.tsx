"use client"

import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Manifesto from "@/components/Manifesto";
import Pricing from "@/components/Pricing";
import Lenis from "lenis"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time:any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },[])
  return (
    <main>
      <HeroSection />
      {/* <Manifesto /> */}
      {/* <AboutUs /> */}
      {/* <Pricing /> */}
      {/* <Faqs /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </main>
  );
}
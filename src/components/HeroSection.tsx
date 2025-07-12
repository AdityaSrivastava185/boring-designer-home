"use client";

import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import MarqueeFooter from "@/utils/MarqueeFooter";
import { HeroVideo } from "@/utils/VideoComponent";

const HomeDetails = [
  { title: "manifesto", description: " We design perception. We're for the ones who dare to be loud without shouting. Who build in public, with a wild heart and a clean layout. If your vision shakes the ground — we'll give it the face it deserves." },
  { title: "companies", description: "Partners in rebellion. Every brand we build with becomes a part of our tribe. If you made it to this wall, it means you didn't just pay us — you sparked with us. These are our portfolio companies — where fire met form" },
  { title: "go pro", description: "Great brands don't wait. They go pro. Pick your tier, drop the brief, and let's turn your chaos into clarity. Whether it's just design or design + code — we go beast mode either way" },
]

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {/* <div className="mt-7 md:mt-0">
        <MarqueeFooter />
      </div> */}
      <div className="max-width">
        <div className=" mt-24 md:mt-14 mb-7">
          <div className="my-7">
            <h1 className="text-center capitalize alise text-5xl md:text-7xl font-bold bebas">
              Just design it with
            </h1>
            <h1 className="text-center text-5xl md:text-7xl font-bold bebas">BoringDesigner</h1>
          </div>
          <div className=" mb-7 md:mb-14 md:max-w-[40%] mx-auto">
            <p className="text-center text-muted-foreground text-sm md:text-xl font-semibold capitalize">You build the startup. We make it look unstoppable . We co-design high-trust, conversion-obsessed websites for founders, developers, and indie hackers</p>
          </div>
          <div className="mb-14 flex flex-col md:flex-row justify-center items-center gap-7 w-full md:w-auto">
            <Button className="font-semibold cursor-pointer bebas rounded-xl px-7 py-5 bg-foreground text-background w-full">Schedule a Call</Button>
            <Button className="font-semibold cursor-pointer hover:bg-sidebar-accent hover:text-muted-foreground bebas transition-color duration-300 rounded-xl px-7 py-5 bg-muted text-foreground capitalize w-full">Explore valut</Button>
          </div>
          <div>
            <HeroVideo />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="my-7">
              <h1 className=" text-4xl md:text-7xl font-bold bebas md:tracking-tighter uppercase">Where brilliance leaves a mark</h1>
            </div>
            <div className=" md:my-14 md:flex md:flex-col md:items-end md:justify-end">
              <div className="max-w-[50%]">
                <p className="text-sm font-semibold bebas">Place where the underestimation reveals the beast you never saw coming ….</p>
              </div>
            </div>
          </div>
          <div className="mt-14 md:mt-0">
            <MarqueeFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
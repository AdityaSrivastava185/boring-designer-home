"use client";

import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import MarqueeFooter from "@/utils/MarqueeFooter";
import { HeroVideo } from "@/utils/VideoComponent";
import Badge from "@/utils/Badge";

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
      <div className="max-width">
        <div className="mt-14 mb-7">
          {/* <Badge /> */}
          <div className="mt-7 mb-4 md:my-7">
            <h1 className=" uppercase alise text-4xl md:text-8xl font-bold bebas tracking-tighter">
              We create
            </h1>
            <h1 className="tracking-tighter alise text-4xl md:text-8xl font-bold  uppercase  bebas">
              <div className="h-7 w-14 md:w-32 md:h-20 bg-foreground rounded-lg inline-block"></div> scroll-stopping
            </h1>
            <h1 className=" text-4xl md:text-8xl font-bold bebas uppercase tracking-tighter">landing pages</h1>
          </div>
          <div className=" mb-7 md:mb-14 md:max-w-[50%] max-w-[90%]">
            <p className=" text-muted-foreground text-xs md:text-lg bebas uppercase md:leading-5">You build the vision — we shape the face of it.
              Boring Designer partners with ambitious founders, indie hackers & devs to design high-trust, high-conversion websites that look as powerful as your product feels.</p>
          </div>

          <div className="mb-14 flex flex-col md:flex-row justify-start gap-7 item-start md:items-start md:justify-start w-full md:w-auto">
            <Button className="font-semibold cursor-pointer bebas rounded-xl px-7 py-5 bg-foreground text-background uppercase ">Initiate project</Button>
            <Button className="font-semibold cursor-pointer hover:bg-sidebar-accent hover:text-muted-foreground bebas transition-color duration-300 rounded-xl px-7 py-5 bg-muted text-foreground uppercase">Explore the valut</Button>
          </div>
          <div>
            <HeroVideo />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="my-7">
              <h1 className=" text-4xl md:text-7xl font-bold bebas md:tracking-tighter uppercase ">Where brilliance leaves a mark</h1>
            </div>
            <div className=" md:my-14 md:flex md:flex-col md:items-end md:justify-end">
              <div className="max-w-[60%]">
                <p className="text-sm font-semibold jetbrains-mono uppercase">Place where the underestimation reveals the beast you never saw coming ….</p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <MarqueeFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
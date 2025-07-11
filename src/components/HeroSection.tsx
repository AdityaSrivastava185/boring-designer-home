"use client";

import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import MarqueeFooter from "@/utils/MarqueeFooter";

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
      <div className="mt-7 md:mt-0">
        <MarqueeFooter />
      </div>
      <div className="border-b-2 border-border">
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 md:my-10">
          {HomeDetails.map((item, index) => (
            <div key={index} className="border-l-1 border-r-1 border-border md:px-5 overflow-hidden ">
              <div className=" text-foreground aspect-[5/1] md:flex md:items-center md:justify-center w-full">
                <h2 className="uppercase title text-left md:px-4 md:leading-none md:text-[clamp(2rem,2vw,10rem)] md:tracking-tighter w-full">
                  {item.title}
                </h2>
              </div>

              <div className="md:px-4">
                <p className="text-wrap text-sm uppercase bebas text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="md:max-w-[70%] md:pt-0 mt-10 md:mt-0">
            <h1 className="md:hidden text-4xl font-bold bebas uppercase "> You build the startup. <br /> We make it look unstoppable</h1>
            <p className="text-sm md:text-5xl md:font-bold md:text-left uppercase md:px-4 bebas text-wrap py-7 md:py-0">
              <span className="hidden md:block">You build the startup. We make it look unstoppable</span> We co-design high-trust, conversion-obsessed websites for founders, developers, and indie hackers
            </p>
          </div>
          <div className="my-5 md:px-5">
            <div onClick={() => router.push("/pricing")}>
              <Button className='uppercase cursor-pointer md:font-medium transition-colors duration-300 md:px-7 rounded-full px-10 py-5'>
                be pro
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
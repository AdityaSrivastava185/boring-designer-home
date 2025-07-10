"use client";

import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import MarqueeFooter from "@/utils/MarqueeFooter";

const HomeDetails = [
  { title: "manifesto", description: "Deception in Simplicity. Mastery in Every Pixel. We turn “boring” into a powerhouse of high-impact design, redefine what's possible with subscription-based web design" },
  { title: "companies", description: "Deception in Simplicity. Mastery in Every Pixel. We turn “boring” into a powerhouse of high-impact design, redefine what's possible with subscription-based web design" },
  { title: "go pro", description: "A necessary investment for your startup or your personal brand.Boring Designer is your unfair design advantage" },
]

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <MarqueeFooter/>
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
        <div>
          <div className="md:max-w-[70%] my-10 md:my-0">
            <p className="text-xl md:text-5xl font-bold md:text-left uppercase md:px-4 bebas text-wrap">
              You build the startup. We make it look unstoppable . We co-design high-trust, conversion-obsessed websites for founders, developers, and indie hackers
            </p>
          </div>
          <div className="my-5 md:px-5">
            <div onClick={() => router.push("/pricing")}>
              <Button className='uppercase cursor-pointer md:font-medium transition-colors duration-300 md:px-7 rounded-full'>
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
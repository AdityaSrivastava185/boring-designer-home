"use client";

import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { HeroVideo } from "@/utils/VideoComponent";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-8 lg:px-12">
        <div className="my-5 md:my-10 w-full">
          <p className="text-sm md:text-base text-secondary-title uppercase font-medium tracking-wide text-center md:text-center">
            Every pixel handpicked, every client - rare
          </p>
        </div>
        <div className="text-foreground w-full">
          <h1 className="text-center uppercase font-bold text-[8vw] md:text-[5vw] max-w-[90vw] md:max-w-[100vw] leading-20 title">
            Built to convert. <br /> Designed to speak.
          </h1>
        </div>
        <div className="w-full md:max-w-[50vw] my-6 md:my-10 text-justify">
          <p className="text-lg md:text-md text-secondary-title uppercase text-justify font-medium leading-relaxed text-wrap">
            You build the startup. We make it look unstoppable.
            We co-design high-trust, conversion-obsessed websites for founders, developers, and indie hackers.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            onClick={() => router.push("/pricing")}
            className="uppercase font-medium bg-lime-300 text-black hover:bg-lime-400 transition-colors duration-300"
          >
            Explore Pricing
          </Button>
          <Button
            onClick={() => router.push("/vault")}
            className="uppercase font-medium bg-secondary text-foreground border border-border hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Schedule a Call
          </Button>

        </div>
        <div className="w-full mt-10">
          <HeroVideo />
        </div>
        <div className="w-full mt-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-12">
          <p className="text-2xl md:text-7xl font-bold text-foreground uppercase leading-17">
            where brilliance <br /> leaves a mark
          </p>
          <div className="md:max-w-[20vw] flex flex-col items-end justify-end h-full ">
           <div className="">
             <p className="font-medium text-muted-foreground uppercase leading-relaxed">
              Place where the underestimation reveals the beast you never saw coming…
            </p>
           </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
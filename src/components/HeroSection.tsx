"use client";

import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import MarqueeFooter from "@/utils/MarqueeFooter";
import { HeroVideo } from "@/utils/VideoComponent";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="max-width">
        <div className="md:mt-7 mb-7 ">
          <div className="flex justify-center md:block">
            <div className="px-2 py-2 inline-flex items-center justify-center md:px-5 md:py-2 rounded-full border-2 border-border bg-[#111111] text-muted-foreground mb-2 mt-4 md:mt-0 md:mb-0 mx-auto">
              <div className="mr-2 h-3 w-3 rounded-full animate-pulse bg-foreground">
                <div className="mr-2 h-2 w-2 rounded-full animate-pulse bg-foreground"></div>
              </div>
              <span className="text-xs md:tracking-tight font-semibold uppercase pr-2 md:pr-1 bebas text-foreground">
                The vault is going to be live soon
              </span>
            </div>
          </div>

          <div className="mt-4 mb-4">
            <h1 className=" uppercase alise text-4xl md:text-8xl font-bold bebas tracking-tighter">
              We create
            </h1>
            <h1 className="tracking-tighter alise text-4xl md:text-8xl font-bold  uppercase  bebas">
              scroll-stopping
            </h1>
            <h1 className=" text-4xl md:text-8xl font-bold bebas uppercase tracking-tighter">landing pages</h1>
          </div>
          <div className=" mb-7 md:max-w-[50%] max-w-[90%]">
            <p className=" text-muted-foreground text-xs md:text-lg bebas uppercase md:leading-5">You build the vision — we shape the face of it.
              Boring Designer partners with ambitious founders, indie hackers & devs to design high-trust, high-conversion websites that look as powerful as your product feels.</p>
          </div>

          <div className="mb-14 flex flex-col md:flex-row justify-start gap-7 item-start md:items-start md:justify-start w-full md:w-auto">
            <Button onClick={() => router.push("/#contactus")} className="font-semibold cursor-pointer bebas rounded-xl px-7 py-5 bg-foreground text-background uppercase ">Apply Now</Button>
            <Button onClick={() => router.push("/vault/waitlist")} className="font-semibold cursor-pointer hover:bg-sidebar-accent hover:text-muted-foreground bebas transition-color duration-300 rounded-xl px-7 py-5 bg-muted text-foreground uppercase">Explore the vault</Button>
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
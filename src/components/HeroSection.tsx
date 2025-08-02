"use client";

import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import MarqueeFooter from "@/utils/MarqueeFooter";
import { HeroVideo } from "@/utils/VideoComponent";
import Image from "next/image";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="max-width">
        <div className="md:mt-7 mb-7 ">
          <div className="flex items-center justify-center cursor-pointer" onClick={() => router.push('/vault/waitlist')}>
            <div className="px-2 py-2 inline-flex items-center justify-center md:px-5 md:py-2 rounded-full border-2 border-border bg-[#111111] text-muted-foreground mb-2 md:mt-0 md:mb-0 mx-auto mt-12">
              <div className="mr-2 h-3 w-3 rounded-full animate-pulse bg-foreground">
                <div className="mr-2 h-2 w-2 rounded-full animate-pulse bg-foreground"></div>
              </div>
              <span className="text-xs md:tracking-tight font-semibold uppercase pr-2 md:pr-1 bebas text-foreground">
                Join the waitlist for the vault :)
              </span>
            </div>
          </div>

          <div className="mt-4 mb-4 max-w-2xl md:max-w-3xl mx-auto text-balance">
            <h1 className="text-balance alise text-5xl md:text-7xl font-bold bebas tracking-tighter text-center">
              it's time to launch your vision faster.
            </h1>
          </div>
          <div className=" my-4 md:my-7 md:max-w-[50%] max-w-[90%] mx-auto">
            <p className=" text-muted-foreground text-md md:text-lg bebas text-center md:leading-5">the space which helps ambitious founders, indie hackers & devs go live faster with ready-to-use templates — high-trust, high-conversion designs to match the power of your product.</p>
          </div>

          <div className="mb-14 flex flex-col md:flex-row items-center justify-center gap-7 max-w-[14rem] w-full mx-auto">
            <Button onClick={() => router.push("/#contactus")} className="font-semibold cursor-pointer bebas rounded-xl px-7 py-5 bg-foreground text-background w-full">apply now</Button>
            <Button onClick={() => router.push("/vault/waitlist")} className="font-semibold cursor-pointer hover:bg-sidebar-accent hover:text-muted-foreground bebas transition-color duration-300 rounded-xl px-7 py-5 bg-muted text-foreground w-full ">Join the waitlist for the vault</Button>
          </div>
          <div className="md:max-w-xl max-w-[90%] mx-auto md:px-8 px-4 space-y-6 ">
            <p className=" text-md">most early-stage builders spend hours scrolling through Dribbble, remixing Figma kits, or DM&apos;ing friends for design feedback.
            </p>
            <p>
              but they&apos;re doing it alone. Every single time.
            </p>
            <p className="text-md">
              we didn&apos;t think this was a big deal — until we started talking to a few founders.
            </p>
            <p>
              one founder stitched a hero section from three different template screenshots. Another had a full-on SaaS idea but didn&apos;t launch for months because the landing page “didn&apos;t feel right.” Some were paying hundreds to freelancers just for a prettier waitlist page. "Do you have anything clean and launch-ready?" they asked.
            </p>
            <p className="text-md">
             that&apos;s when it hit us — builders weren&apos;t stuck on code. They were stuck on presentation.
            </p>
            <p>
              so we built Boring Designer Vault — a launchpad of clean, high-conversion templates that make your product look ready for YC Demo Day, even if it&apos;s just day one.
            </p>
            <p className="text-md">
              You don&apos;t need a designer. You don&apos;t need a wait. You just need to ship.
            </p>
            <p>
             And we&apos;re shipping it publicly — so others can too.
            </p>
            <Link href="/vault/waitlist" className="text-lg font-medium underline italic block">– join the vault</Link>
            <Link href="https://www.linkedin.com/in/aditya-srivastava-92396a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-lg font-medium underline italic block">– Aditya</Link>
          </div>
          {/* <div className="mt-10">
            <HeroVideo />
          </div> */}
          {/* <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="my-7">
              <h1 className=" text-4xl md:text-7xl font-bold bebas md:tracking-tighter uppercase ">Where brilliance leaves a mark</h1>
            </div>
            <div className=" md:my-14 md:flex md:flex-col md:items-end md:justify-end">
              <div className="max-w-[60%]">
                <p className="text-sm font-semibold jetbrains-mono uppercase">Place where the underestimation reveals the beast you never saw coming ….</p>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-14">
            <MarqueeFooter />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { HeroVideo } from "@/utils/VideoComponent";
import AppearText from "./AppearText";

const text = `Deception in Simplicity. Mastery in Every Pixel. We turn “boring” into a
powerhouse of high-impact design, redefine what's possible with
subscription-based web design. You get high-quality, custom UI/UX
designs, rapid frontend development, and open-source website
maintenance—all seamlessly delivered under one simple monthly
plan.`;

const words = text.split(" ");

const Manifesto = () => {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <div className="border-b-2 border-border md:py-10">
            <div className="md:flex flex-col md:flex-row md:items-start md:justify-start">
                <div className="py-7 md:py-0 md:max-w-[40%] md:border-r-2 border-border md:px-7">
                    <h2 className=" text-5xl md:text-7xl font-bold font-bebas md:tracking-tighter uppercase">interactive</h2>
                    <h2 className="pb-7 md:pb-0 text-5xl md:text-7xl font-bold font-bebas md:tracking-tighter uppercase">designer !</h2>
                    <div className="md:pt-7">
                        <HeroVideo />
                    </div>
                    <p className="text-sm bebas uppercase py-5">based in india</p>

                </div>
                <div className="w-full">
                    <div className="md:px-7">
                        <h1 className="text-5xl md:text-left md:text-7xl font-bold font-bebas md:tracking-tighter uppercase">
                            (Manifesto)
                        </h1>
                        <p className="text-sm bebas uppercase py-5"><span className="md:text-xl font-medium text-muted-foreground font-bebas md:tracking-tighter uppercase">Deception in Simplicity ,  Mastery in Every Pixel We turn “boring” into a powerhouse of high-impact design, redefine what&apos;s possible with subscription-based web design. You get high-quality, custom UI/UX designs, rapid frontend development, and open-source website maintenance—all seamlessly delivered under one simple monthly plan.No hidden fees. No delays. Just pixel-perfect execution.We ensure every design is lightweight, responsive, and built for the future. Still think web design is boring?Scroll down and rethink! <br />we embrace minimalism, silence, and precision to craft designs that dominate. We thrive in the shadows, where the overlooked transforms into the unforgettable.This is not just design. This is calculated impact
                        </span></p>
                        <h1 className="text-2xl py-7 md:py-7 md:text-left md:text-6xl font-bold font-bebas md:tracking-tighter uppercase">
                            We invest in the world changers , because game changers are overrated
                        </h1>
                    </div>
                </div>
            </div>
            <AppearText />
        </div>
    );
};

export default Manifesto;


{/* <section className=" md:px-24 px-10 w-full">
    <div className="container mx-auto">
        <div className="sticky md:top-20 top-20">
            <h1 className="text-left text-7xl font-bold font-bebas tracking-tighter uppercase">
                Manifesto
            </h1>

            <div className="mt-10 text-md md:text-4xl md:text-left bebas leading-snug tracking-wide">
                <span className="uppercase">
                    Your Organization needs better and customized devices to work{" "}
                </span>
                <span className="text-white/15 uppercase font-bold">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={
                                index < currentWord
                                    ? "transition duration-300 text-white"
                                    : ""
                            }
                        >
                            {`${word} `}
                        </span>
                    ))}
                </span>
                <span className="text-white block mt-4 uppercase">
                    That&apos;s why we created BoringDesigner.
                </span>
            </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
    </div>
</section> */}
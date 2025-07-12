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
        <div className="md:py-10">
            <div className="md:flex flex-col md:flex-row md:items-start md:justify-start">
                <div className="py-7 md:py-0 md:max-w-[40%] md:border-r-2 border-border md:px-7 max-w-[70%]">
                    <p className="text-muted-background font-mono uppercase text-sm">[ Our Manifesto ]</p>
                    <h2 className="text-3xl md:text-7xl font-bold font-bebas md:tracking-tighter">Not everything powerful has to look complicated</h2>
                </div>
                <div>
                    <p className="text-muted-foreground bebas text-sm">Deception in Simplicity ,  Mastery in Every Pixel We turn “boring” into a powerhouse of high-impact design, redefine what&apos;s possible with subscription-based web design. You get high-quality, custom UI/UX designs, rapid frontend development, and open-source website maintenance—all seamlessly delivered under one simple monthly plan.No hidden fees. No delays. Just pixel-perfect execution.We ensure every design is lightweight, responsive, and built for the future. <br /> <br /> <span className="text-foreground font-bold bebas tracking-wide">Still think web design is boring?<br />Scroll down and rethink! </span></p>
                </div>
            </div>
            {/* <AppearText /> */}
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
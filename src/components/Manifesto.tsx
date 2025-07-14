"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const text = `Deception in Simplicity. Mastery in Every Pixel. We turn “boring” into a
powerhouse of high-impact design, redefine what's possible with
subscription-based web design. You get high-quality, custom UI/UX
designs, rapid frontend development, and open-source website
maintenance—all seamlessly delivered under one simple monthly
plan.That's why we created BoringDesigner.`;

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
        <div className=" pt-7 md:my-14">
            <div className="md:flex flex-col md:items-center md:justify-center w-full">
                <div className=" md:py-14 md:px-7 max-w-[70%] md:w-full mx-auto">
                    <p className="text-muted-background jetbrains-mono uppercase text-sm text-center">[ Our Manifesto ]</p>
                    <h2 className="text-2xl md:text-7xl font-bold font-bebas md:tracking-tighter text-center uppercase w-full md:max-w-[90%] mx-auto">Not everything powerful has to look complicated</h2>
                </div>
            </div>
            <section className="md:px-24 w-full">
                <div className="container md:mx-auto">
                    <div className="sticky top-20">
                        <div className="mt-7 text-md md:text-3xl md:text-left bebas leading-snug tracking-wide max-w-[90%] md:max-w-[70%] mx-auto text-justify">
                            <span className="uppercase tracking-tighter text-muted-foreground">
                                Your Organization needs better and customized devices to work{" "}
                            </span>
                            <span className="text-transparent  bebas md:tracking-tighter md:leading-tight uppercase">
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        className={
                                            index <= Math.floor(currentWord)
                                                ? "transition duration-500 text-white font-semibold"
                                                : ""
                                        }
                                    >
                                        {`${word} `}
                                    </span>
                                ))}
                            </span>
                            <div className="text-5xl">
                                hello
                            </div>
                            <span className="text-white block capitalise">
                            </span>
                        </div>
                    </div>
                    <div
                        ref={scrollTarget}
                        className="h-[300vh]"
                    ></div>
                </div>
            </section>

        </div>
    );
};

export default Manifesto;

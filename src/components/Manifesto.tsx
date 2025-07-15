"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDownUp, ArrowUpRightFromSquare, MoveRight, MoveUpRight } from "lucide-react";

const text = `We don't design websites.
We design trust, clarity, and momentum.

We're not here for everyone.
We co-build with founders, indie hackers, and misfits who dare to disrupt.

We believe your product is only as powerful as the page that presents it.
No fluff. No friction. Just focused, conversion-led design.

We ship fast. We ship sharp.
You lead the idea — we lead the interface.

This is not a service.
This is a partnership — in pixels, performance, and punch.

If your mission is loud,
your landing page shouldn't whisper.`;

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
                <div className=" md:py-14 md:px-7 max-w-[70%] md:w-full md:mx-auto">
                    <p className="text-muted-background jetbrains-mono uppercase text-sm md:text-center pb-2">[ Our Manifesto ]</p>
                    <h2 className="text-2xl md:text-7xl font-bold font-bebas md:tracking-tighter md:text-center uppercase w-full md:max-w-[90%] mx-auto">Not everything powerful has to look complicated</h2>
                </div>
            </div>
            <section className="md:px-24 w-full">
                <div className="container md:mx-auto">
                    <div className="sticky top-20">
                        <div className="mt-7 text-md md:text-2xl md:text-left bebas leading-snug tracking-wide  mx-auto">
                            <span className="uppercase tracking-tighter text-muted-foreground">
                                Your Organization needs better and customized devices to work{" "}
                            </span>
                            <span className="text-transparent  bebas md:tracking-tighter md:leading-tight uppercase">
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        className={
                                            index <= Math.floor(currentWord)
                                                ? "transition duration-500 text-white "
                                                : ""
                                        }
                                    >
                                        {`${word} `}
                                    </span>
                                ))}
                            </span>
                            <div className="text-xl my-24 md:mt-14 border-t-1 border-border flex flex-col md:flex-row md:items-center md:justify-between pt-7">
                                <div>
                                    <Link href={""} className="text-sm uppercase">For startups and founders</Link>
                                </div>
                                <div>
                                    <Link href={""} className="text-sm uppercase">from design to deploy</Link>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center md:justify-start">
                                    <Link
                                        href={""}
                                        className="md:px-7 md:py-3 text-sm md:border md:border-border rounded-full uppercase flex items-center"
                                    >
                                        Start the project
                                        <MoveRight  className="h-3"/>
                                    </Link>
                                </div>
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

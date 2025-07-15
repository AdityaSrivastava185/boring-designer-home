import React from 'react'

const paragraph = `We're not your typical design studio. Boring Designer is a one-man, zero-fluff design sprint for founders, indie hackers, and developers who are too busy building to waste time explaining “what they want.” We move fast, build sharper, and ship designs that feel unfairly good. No agencies. No bureaucracy`;

const words = paragraph.split(' ');


const AboutUs = () => {
    return (
        <div className=' pt-14 md:py-14 md:px-24'>
            <div className=''>
                <h1 className="text-muted-background pb-2 jetbrians-mono uppercase text-sm md:text-center">[ about us ]</h1>
            </div>
            <div className=' border-b-1 border-border md:pb-14 w-full'>
                <h2 className="md:mt-7 text-foreground md:text-5xl uppercase font-bold tracking-tight bebas text-2xl bebas md:tracking-tighter md:text-center pb-7 md:max-w-[60%] md:mx-auto">
                    Wanna know about us ? we always believe in simplicity and minimalism
                </h2>
                <div className=" md:px-0">
                    <h2 className="text-xs md:text-lg text-foreground bebas tracking-tighter uppercase flex flex-wrap justify-center md:justify-start md:gap-2">
                        {words.map((word, index) => (
                            <span
                                key={index}
                                className="border border-border px-3 py-2 rounded-full min-w-[80px] md:min-w-[110px] min-h-[20px] flex items-center justify-center "
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>
            <div className="mt-10 w-full flex flex-col md:items-center md:justify-center">
                <div className="w-full mx-auto">
                    <h1 className="md:text-center text-3xl md:text-5xl font-bold bebas tracking-tight md:tracking-tighter text-foreground uppercase max-w-[70%] md:max-w-[40%] md:mx-auto">
                        What to expect from us
                    </h1>
                </div>

                <div className="mt-6 space-y-6 md:space-y-7">
                    <h4 className="text-muted-foreground md:tracking-tighter  text-wrap uppercase text-sm md:text-2xl mx-auto md:mx-0">
                        Boring Designer is your unfair design advantage — a trusted one-man studio where ambitious founders, indie hackers, and early-stage startups turn their bold digital vision into high-converting, minimal realities. This isn't just a design portfolio. It&apos;s a hall of builders. If your startup makes it here, it means you're signal, not noise.
                        People won&apos;t ask who built your site — <span className="text-foreground">they&apos;ll ask, who the hell are you?</span>
                    </h4>
                </div>
            </div>

        </div>
    )
}

export default AboutUs

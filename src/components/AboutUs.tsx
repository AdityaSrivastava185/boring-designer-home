import React from 'react'

const AboutUs = () => {
    return (
        <div className=' pt-14 md:py-14 md:px-24'>
            <div className=''>
                <h1 className="text-muted-background jetbrians-mono uppercase text-sm text-center">[ about us ]</h1>
            </div>
            <div className=' border-b-1 border-border pb-14'>
                <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold bebas tracking-tight md:tracking-tighter text-foreground uppercase max-w-[90%] md:max-w-[70%] mx-auto md:mx-0 py-7">
                    Wanna know who we are ?
                </h1>
                <h2 className=' text-md text-muted-foreground md:text-3xl bebas tracking-tighter uppercase mx-auto'>We&apos;re not your typical design studio.
                    Boring Designer is a one-man, zero-fluff design sprint for founders, indie hackers, and developers who are too busy building to waste time explaining “what they want.” We move fast, build sharper, and ship designs that feel unfairly good. No agencies. No bureaucracy</h2>
            </div>
            <div className="mt-10">
                <div className="w-full mx-auto">
                    <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold bebas tracking-tight md:tracking-tighter text-foreground uppercase max-w-[90%] md:max-w-[70%] mx-auto md:mx-0">
                        What to expect from us
                    </h1>
                </div>

                <div className="mt-6 space-y-6 md:space-y-7">
                    <h4 className="text-muted-foreground jetbrains-mono md:tracking-tighter md:max-w-[30vw] text-wrap uppercase text-sm mx-auto md:mx-0">
                        Boring Designer is your unfair design advantage — a trusted one-man studio where ambitious founders, indie hackers, and early-stage startups turn their bold digital vision into high-converting, minimal realities.
                    </h4>

                    <h4 className="text-muted-foreground jetbrains-mono md:tracking-tighter md:max-w-[30vw] text-wrap uppercase text-sm mx-auto md:mx-0">
                        This isn't just a design portfolio. It&apos;s a hall of builders. If your startup makes it here, it means you're signal, not noise.
                        People won&apos;t ask who built your site — <span className="text-foreground">they&apos;ll ask, who the hell are you?</span>
                    </h4>
                </div>
            </div>

        </div>
    )
}

export default AboutUs

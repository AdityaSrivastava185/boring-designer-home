import React from 'react'

const AboutUs = () => {
    return (
        <div className=' pt-14 md:py-14 md:px-24'>
            <div className=''>
                <h1 className="text-muted-background jetbrians-mono uppercase text-sm text-center">[ about us ]</h1>
            </div>
            <div className=' border-b-1 border-border pb-14'>
                <h2 className=' text-md text-muted-foreground md:text-3xl bebas tracking-tighter uppercase mx-auto text-justify'>We&apos;re not your typical design studio.
                    Boring Designer is a one-man, zero-fluff design sprint for founders, indie hackers, and developers who are too busy building to waste time explaining “what they want.” We move fast, build sharper, and ship designs that feel unfairly good. No agencies. No bureaucracy</h2>
            </div>
            <div className='flex flex-col md:flex-row md:items-start md:justify-between mt-7 items-center justify-center'>
                <div className=''> <h1 className="text-center md:text-left text-2xl md:text-5xl font-bold md:font-bold bebas tracking-tight md:tracking-tighter text-foreground uppercase max-w-[70%] mx-auto md:mx-0">
                    what to expect from us
                </h1></div>
                <div className='mt-7 md:mt-0'>
                    <h4 className='text-muted-foreground jetbrains-mono md:tracking-tighter md:max-w-[50vw] text-wrap uppercase text-sm text-justify mx-auto'>Boring Designer is your unfair design advantage — a trusted one-man studio where ambitious founders, indie hackers, and early-stage startups turn their bold digital vision into high-converting, minimal realities.</h4>

                    <h4 className='text-muted-foreground jetbrains-mono md:tracking-tighter md:max-w-[50vw] text-wrap uppercase text-sm mt-7 mx-auto'>This isn&apos;t just a design portfolio. It&apos;s a hall of builders.If your startup makes it here, it means you're signal, not noise.People won&apos;t ask who built your site — <span className='text-foreground'>they&apos;ll ask who the hell are you?</span></h4>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

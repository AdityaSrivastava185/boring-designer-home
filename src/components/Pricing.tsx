import PricingCards from '@/utils/PricingCards'
import React from 'react'

const Pricing = () => {
    return (
        <div className='py-17' id='pricing'>
            <div className='md:px-24'>
                <div className=''>
                    <h1 className="text-muted-background jetbrians-mono uppercase text-sm md:text-center pb-2 md:pb-7">[ be part of pro ]</h1>
                </div>
                <div className='flex flex-col md:items-center md:justify-between w-full h-auto mx-auto md:mb-10'>
                    <div className='md:mt-10'>
                        <div className="w-full max-w-[80%] md:max-w-[50%] md:mx-auto pb-7">
                            <h1 className="md:text-center text-2xl md:text-5xl font-bold bebas tracking-tight md:tracking-tighter text-foreground uppercase">
                                A necessary investment for your startup or your personal brand.
                            </h1>
                        </div>
                        <h4 className='text-muted-foreground jetbrains-mono md:tracking-tighter  text-wrap uppercase md:text-2xl text-sm mx-auto'>Go Pro with Boring Designer — your unfair design advantage.
                            For founders, indie hackers, and early-stage startups who are serious about standing out — we craft sharp, minimal, conversion-obsessed design that turns bold digital ideas into unstoppable brands.</h4>

                        <h4 className='text-muted-foreground jetbrains-mono md:tracking-tighter md:max-w-[50vw] text-wrap uppercase md:text-2xl text-sm mt-7 mx-auto'>This isn&apos;t a portfolio. It&apos;s a gallery of the bold.
                            If your startup&apos;s listed here, it means you're signal — not noise.
                            People won&apos;t ask who built your site.
                            <span className="text-foreground font-bold">They&apos;ll ask — who the hell are you?</span></h4>
                    </div>
                </div>
            </div>
            <div className='mt-7'>
                <div>
                    <PricingCards />
                </div>
            </div>
        </div>
    )
}

export default Pricing

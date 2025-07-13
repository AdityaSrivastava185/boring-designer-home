import PricingCards from '@/utils/PricingCards'
import React from 'react'

const Pricing = () => {
    return (
        <div className='py-17'>
            <div className=''>
                <div className=''>
                    <h1 className="text-muted-background jetbrians-mono uppercase text-sm text-center">[ be part of pro ]</h1>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full h-auto mx-auto md:my-10'>
                    <div className='flex flex-col items-center justify-between w-full h-auto  my-7 md:my-14'>
                        <div className='hidden md:block w-full pt-2'>
                            <p className='text-muted-foreground font-bold uppercase jetbrains-mono'>Founder Plans</p>
                        </div>
                        <div className="w-full">
                            <div className="w-full max-w-[80%] mx-auto md:mx-0">
                                <h1 className="text-center md:text-left text-3xl md:text-7xl font-bold md:font-medium bebas tracking-tight md:tracking-tighter text-foreground uppercase">
                                    A necessary investment for your startup or your personal brand.
                                </h1>
                            </div>
                        </div>

                    </div>
                    <div className='md:mt-10 mt-7'>
                        <h4 className='text-muted-foreground jetbrains-mono md:tracking-tighter md:max-w-[50vw] text-wrap uppercase text-sm'>Boring Designer is your unfair design advantage — a trusted one-man studio where ambitious founders, indie hackers, and early-stage startups turn their bold digital vision into high-converting, minimal realities.</h4>

                        <h4 className='text-muted-foreground jetbrains-mono md:tracking-tighter md:max-w-[50vw] text-wrap uppercase text-sm mt-7'>This isn&apos;t just a design portfolio. It&apos;s a hall of builders.If your startup makes it here, it means you're signal, not noise.People won&apos;t ask who built your site — <span className='text-foreground'>they&apos;ll ask who the hell are you?</span></h4>
                    </div>
                </div>
            </div>
            <div className='mt-14 md:my-14'>
                <div className="md:flex flex-col md:items-center md:justify-between mt-14 md:my-0">
                    <div className='w-full mb-7'>
                        <h2 className="md:mt-7 text-foreground md:text-5xl uppercase font-bold tracking-tight bebas text-3xl bebas md:tracking-tighter text-center md:leading-3">
                            design that doesn't
                        </h2>
                        <h2 className="md:mt-7 text-foreground md:text-5xl uppercase font-bold tracking-tight bebas text-3xl font-bebas md:tracking-tighter max-w-[70%] md:max-w-[30%] mx-auto text-center">
                            confuse neither does pricing
                        </h2>
                    </div>
                    <div>
                        <p className='hidden md:block text-muted-foreground uppercase md:max-w-[20vw] jetbrains-mono text-center'>pick your monthly charges and get the credibility of bein amazing</p>
                    </div>
                </div>
                <div>
                    <PricingCards />
                </div>
            </div>
        </div>
    )
}

export default Pricing

import PricingCards from '@/utils/PricingCards'
import React from 'react'

const Pricing = () => {
    return (
        <div className='md:pt-17 border-b-2 border-border'>
            <div className=''>
                <div className='mt-14'>
                   <h1 className="text-muted-background font-mono uppercase text-sm">[ be part of pro ]</h1>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full h-auto mx-auto md:my-10'>
                    <div className='flex flex-col items-center justify-between w-full h-auto my-auto'>
                        <div className='hidden md:block w-full pt-2'>
                            <p className='text-muted-foreground font-bold uppercase'>Founder Plans</p>
                        </div>
                        <div className='w-full'>
                            <h1 className='md:text-foreground max-w-[80%]  md:max-w-[35vw] text-wrap md:font-medium md:uppercase text-3xl md:text-7xl font-bold font-bebas md:tracking-tighter'>A necessary investment for your startup or your personal brand.</h1>
                        </div>
                    </div>
                    <div className='md:mt-10 mt-7'>
                        <h4 className='text-muted-foreground bebas md:max-w-[50vw] text-wrap capitalize text-sm'>Boring Designer is your unfair design advantage — a trusted one-man studio where ambitious founders, indie hackers, and early-stage startups turn their bold digital vision into high-converting, minimal realities.</h4>

                        <p className='text-muted-foreground bebas md:mt-7 capitalize text-sm md:max-w-[50vw]'>This isn&apos;t just a design portfolio. It&apos;s a hall of builders.
                            If your startup makes it here, it means you're signal, not noise.
                            People won&apos;t ask who built your site — <span className='text-foreground'>they&apos;ll ask who the hell are you?</span></p>
                    </div>
                </div>
            </div>
            <div className='mt-14 md:my-20'>
                <div className="md:flex md:flex-row md:items-center md:justify-between my-7 md:my-0">
                    <div className=''>
                         <p className=" font-mono uppercase text-sm">[ Choose the right plan ]</p>
                        <h2 className="md:mt-7 text-left text-foreground md:text-5xl capitalize font-bold tracking-tight bebas text-3xl font-bebas md:tracking-tighter">
                            design that doesn't confuse
                        </h2>
                        <h2 className="md:mt-7 text-left text-foreground md:text-5xl capitalize font-bold tracking-tight bebas text-3xl font-bebas md:tracking-tighter">
                            neither does pricing
                        </h2>
                    </div>
                    <div>
                        <p className='hidden md:block text-muted-foreground mt-7 uppercase md:max-w-[20vw]'>pick your monthly charges and get the credibility of bein amazing</p>
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

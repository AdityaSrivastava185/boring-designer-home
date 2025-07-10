import PricingCards from '@/utils/PricingCards'
import React from 'react'

const Pricing = () => {
    return (
        <div className='my-52'>
            <div className='my-52'>
                <div className='bebas'>
                    <h1 className='text-center text-7xl font-bold tracking-tighter uppercase'>be part of pro</h1>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full h-auto mx-auto md:my-10'>
                    <div className='flex flex-col items-center justify-between w-full h-auto my-auto'>
                        <div className='w-full'>
                            <p className='text-muted-foreground font-bold uppercase'>Founder Plans</p>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-foreground text-5xl max-w-[35vw] text-wrap font-medium uppercase'>A necessary investment for your startup or your personal brand.</h1>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-foreground font-medium md:max-w-[50vw] text-wrap uppercase'>Boring Designer is your unfair design advantage — a trusted one-man studio where ambitious founders, indie hackers, and early-stage startups turn their bold digital vision into high-converting, minimal realities.</h4>

                        <p className='text-muted-foreground mt-7 uppercase md:max-w-[50vw]'>This isn&apos;t just a design portfolio. It&apos;s a hall of builders.
                            If your startup makes it here, it means you're signal, not noise.
                            People won&apos;t ask who built your site — <span className='text-foreground'>they&apos;ll ask who the hell are you?</span></p>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-44 ">
                    <h2 className="text-center text-foreground text-5xl uppercase font-bold tracking-tight bebas">
                        design that doesn't confuse
                    </h2>
                    <h2 className="text-center text-7xl uppercase font-bold tracking-tight bebas">
                        neither does pricing
                    </h2>
                </div>
                <div>
                    <PricingCards />
                </div>
            </div>
        </div>
    )
}

export default Pricing

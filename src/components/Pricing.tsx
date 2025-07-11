import PricingCards from '@/utils/PricingCards'
import React from 'react'

const Pricing = () => {
    return (
        <div className='md:pt-17 border-b-2 border-border'>
            <div className=''>
                <div className='bebas'>
                    <h1 className='py-7 md:py-0 text-left text-4xl md:text-7xl font-bold tracking-tighter uppercase'>(be part of pro)</h1>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full h-auto mx-auto md:my-10'>
                    <div className='flex flex-col items-center justify-between w-full h-auto my-auto'>
                        <div className='w-full'>
                            <p className='text-muted-foreground font-bold uppercase'>Founder Plans</p>
                        </div>
                        <div className='w-full'>
                            <h1 className='text-foreground text-2xl md:text-5xl md:max-w-[35vw] text-wrap font-medium uppercase'>A necessary investment for your startup or your personal brand.</h1>
                        </div>
                    </div>
                    <div className='md:mt-10 mt-7'>
                        <h4 className='text-foreground bebas font-medium md:max-w-[50vw] text-wrap uppercase'>Boring Designer is your unfair design advantage — a trusted one-man studio where ambitious founders, indie hackers, and early-stage startups turn their bold digital vision into high-converting, minimal realities.</h4>

                        <p className=' text-muted-foreground bebas mt-7 uppercase md:max-w-[50vw]'>This isn&apos;t just a design portfolio. It&apos;s a hall of builders.
                            If your startup makes it here, it means you're signal, not noise.
                            People won&apos;t ask who built your site — <span className='text-foreground'>they&apos;ll ask who the hell are you?</span></p>
                    </div>
                </div>
            </div>
            <div className='md:my-20'>
                <div className="md:flex md:flex-row md:items-center md:justify-between my-7 md:my-0">
                    <div>
                        <h2 className="mt-7 md:mt-0 text-xl text-left text-foreground md:text-5xl uppercase font-bold tracking-tight bebas">
                            design that doesn't confuse
                        </h2>
                        <h2 className="text-left text-3xl md:text-7xl uppercase font-bold tracking-tight bebas">
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

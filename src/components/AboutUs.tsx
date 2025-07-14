import React from 'react'

const AboutUs = () => {
    return (
        <div className=' pt-14 md:py-14'>
            <div>
                <p className="text-muted-background jetbrains-mono uppercase text-sm text-center">[ About Us ]</p>
                <h1 className='text-2xl md:text-7xl font-bold font-bebas md:tracking-tighter text-center uppercase w-full md:max-w-[90%] mx-auto'>learn more</h1>
                <h1 className='text-2xl md:text-7xl font-bold font-bebas md:tracking-tighter text-center uppercase w-full md:max-w-[90%] mx-auto'>about us</h1>
            </div>
            <div className="md:flex flex-col md:items-center md:justify-between mb-14 md:my-7">
                <div>
                    <p className='hidden md:block text-muted-foreground uppercase md:max-w-[20vw] jetbrains-mono text-center'>We don&apos;t work for you.We build with you.</p>
                </div>
            </div>
            <div>
                <p className='bebas font-bold md:text-2xl uppercase md:max-w-[70%] max-w-[90%] mx-auto text-justify text-muted-foreground'><span className='text-foreground'>boringdesigner</span> is a studio, zero-fluff design sprint for founders, indie hackers, and developers who are too busy building to waste time explaining <span className='text-foreground'>“what they want.”</span> We move fast, build sharper, and ship designs that feel unfairly good. <span className='text-foreground'>No agencies</span>. No bureaucracy. <span className='text-foreground'>Just high-trust, and obvisouly high-conviction collaboration</span>.</p>
            </div>
        </div>
    )
}

export default AboutUs

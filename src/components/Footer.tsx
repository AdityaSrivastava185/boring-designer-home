import Link from 'next/link'
import React from 'react'


const HomeDetails = [
  { title: "manifesto", description: "Deception in Simplicity. Mastery in Every Pixel. We turn “boring” into a powerhouse of high-impact design, redefine what's possible with subscription-based web design" },
  { title: "companies", description: "Deception in Simplicity. Mastery in Every Pixel. We turn “boring” into a powerhouse of high-impact design, redefine what's possible with subscription-based web design" },
  { title: "go pro", description: "A necessary investment for your startup or your personal brand.Boring Designer is your unfair design advantage" },
]

const Footer = () => {
  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-3 gap-4 md:my-10">
        {HomeDetails.map((item, index) => (
          <div key={index} className="border-l-1 border-r-1 border-border md:px-5 overflow-hidden ">
            <div className=" text-foreground aspect-[5/1] md:flex md:items-center md:justify-center w-full">
              <h2 className="uppercase title text-left md:px-4 md:leading-none md:text-[clamp(2rem,2vw,10rem)] md:tracking-tighter w-full">
                {item.title}
              </h2>
            </div>

            <div className="md:px-4">
              <p className="text-wrap text-sm uppercase bebas text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center w-full leading-tight'>
        <h2 className='bebas w-full font-bold uppercase'>boringdesigner</h2>
      </div>
      <div className='flex items-center justify-between w-full h-auto '>
        <Link href="" className='bebas font-bold uppercase'>©2025 All RIGHTS Reserved</Link>
        <Link href="" className='bebas font-bold uppercase'>back to top</Link>
      </div>
    </div>
  )
}

export default Footer

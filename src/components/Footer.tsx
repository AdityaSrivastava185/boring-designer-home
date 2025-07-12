import MarqueeFooter from '@/utils/MarqueeFooter'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'


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
      <MarqueeFooter />
      <div>
        <div className="rounded-lg shadow-sm my-4">
          <div className="w-full  mx-auto py-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src="" className="h-8" alt="Flowbite Logo" /> */}
                <span className="self-center text-[290%] font-bold tracking-tighter whitespace-nowrap dark:text-white">BORINGDESIGNER</span>
              </a>
              <ul className="flex flex-col md:flex-row md:items-center mb-6 text-sm font-medium sm:mb-0  ">
                <li className='mb-3'>
                  <a href="#" className="hover:underline ">About</a>
                </li>
                <li className='mb-3'>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className='mb-3'>
                  <a href="#" className="hover:underline ">Licensing</a>
                </li>
                <li className='mb-3'>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <hr className="my-6  sm:mx-auto border-border lg:my-8" />
            <span className="block text-sm sm:text-center ">© 2025 <a href="" className="hover:underline">BORINGDESIGNER</a>. All Rights Reserved.</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer

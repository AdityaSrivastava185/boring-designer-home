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
      <div className="hidden lg:grid lg:grid-cols-3 gap-4 md:my-10 md:px-24">
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
        <div className="rounded-lg shadow-sm my-14 md:px-24">
          <div className="w-full mx-auto py-4 md:py-8">
            <div className="sm:flex sm:items-start sm:justify-between gap-10">
              <div className="flex flex-col">
                <a href="/" className="flex items-center mb-4 space-x-3">
                  <span className="self-center text-[290%] md:text-[400%] font-bold tracking-tighter whitespace-nowrap dark:text-white bebas">
                    BORINGDESIGNER.
                  </span>
                </a>
                <h1 className="text-[220%] md:text-[300%] font-bold tracking-tighter text-muted-foreground uppercase bebas">
                  Ready to initiate
                </h1>
                <h1 className="text-[220%] md:text-[300%] font-bold tracking-tighter text-muted-foreground uppercase bebas">
                  project
                </h1>
              </div>

              <footer className="p-4 sm:p-6">
                <div className="mx-auto max-w-screen-xl">
                  <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                      <div>
                        <h2 className="mb-6 text-sm font-semibold text-muted-foreground uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                          <li className="mb-4">
                            <a href="" className="hover:underline">Valut</a>
                          </li>
                          <li className="mb-4">
                            <a href="" className="hover:underline">Community</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                          <li className="mb-4">
                            <a href="" className="hover:underline ">Mail</a>
                          </li>
                          <li>
                            <a href="" className="hover:underline">Linkedin</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>

            <hr className="my-6 sm:mx-auto border-border lg:my-8" />

            <span className="block text-sm text-center">
              © 2025 <a href="/" className="hover:underline">BORINGDESIGNER</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer

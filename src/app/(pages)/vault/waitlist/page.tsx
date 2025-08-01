'use client'

import React from 'react'
import { Waitlist } from '@clerk/nextjs'
import { Card, CardContent } from '@/components/ui/card'

const Page = () => {
  return (
    <>
      <div className=' md:max-w-4xl mx-auto'>
        <h1 className=' text-6xl md:text-8xl font-bold text-center text-balance md:leading-20'>introducing the vault
        </h1>
        <p className='text-md text-center text-muted-foreground md:text-2xl font-medium text-balance md:max-w-3xl mx-auto mt-5 leading-5 md:leading-7'> The Vault is a curated drop of unique web templates — inspired by real products, real founders.Pick a template. Download the code. Tweak it. Launch your thing.Each template comes with a full case study of the founder and the product that inspired it.No fluff. Just the tools to help you ship faster
        </p>
        <p className='text-center font-medium text-balance md:max-w-lg mx-auto mt-5 text-xs'>join the waitlist and be the first to know when we launch. we will send the invite later for the community</p>
      </div>
      <div className="hidden md:flex md:mt-10 flex-col items-center justify-center">
        <div className="w-full max-w-sm md:max-w-3xl">
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <Waitlist />
              <div className="bg-muted relative hidden md:block">
                <img
                  src="/waitlist-image.jpg"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover grayscale "
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='md:hidden flex items-center justify-center mt-10'>
        <Waitlist />
      </div>
    </>
  )
}

export default Page

'use client'

import React from 'react'
import { Waitlist } from '@clerk/nextjs'
import { Card, CardContent } from '@/components/ui/card'

const Page = () => {
  return (
   <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
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
  )
}

export default Page

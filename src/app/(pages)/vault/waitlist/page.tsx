'use client'

import React from 'react'
import { Waitlist } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen waitlist-container">
      <Waitlist />
    </div>
  )
}

export default Page

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='max-width pb-7 mt:pb-0'>
        <h1 className='text-[9vw] font-bold text-center bebas'>BORINGDESIGNER</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm md:text-base px-7 py-4 border-t border-border'>
        <div>
          <p className='text-xl font-bold uppercase text-foreground bebas'>©2025 All RIGHTS Reserved</p>
        </div>
        <div className='cursor-pointer text-xl font-bold text-foreground bebas' onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</div>
      </div>
    </div>
  )
}

export default Footer

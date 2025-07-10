import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex items-center justify-center w-full leading-tight'>
        <h2 className='bebas w-full font-bold uppercase text-[10rem]'>boringdesigner</h2>
      </div>
      <div className='flex items-center justify-between w-full h-auto '>
        <Link href="" className='bebas font-bold uppercase'>©2025 All RIGHTS Reserved</Link>
        <Link href="" className='bebas font-bold uppercase'>back to top</Link>
      </div>
    </div>
  )
}

export default Footer

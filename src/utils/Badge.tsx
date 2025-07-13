import React from 'react'
import Link from 'next/link'

const Badge = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <Link href="#">
                    <div className="px-2 py-2 inline-flex items-center md:px-5 md:py-2 rounded-full border-1 border-border bg-foreground backdrop-blur-sm text-secondary text-sm">
                        <div className="pr-2"><div className='h-4 w-4 rounded-full bg-background animate-pulse'></div></div>
                        <span className="text-sm md:text-base md:tracking-wide bebas uppercase tracking-tighter font-semibold pr-2 md:pr-1">
                            The valut is going to live soon
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Badge

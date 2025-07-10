"use client"

import React from 'react'
import { motion } from 'motion/react'

const word = `Boring-Designer is always here for every vision -and obvisouly not for boring stuff`

const AppearText = () => {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                    filter: 'blur(10px)',
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
                className='text-foreground text-3xl md:text-5xl font-bold bebas md:tracking-tighter uppercase text-left md:text-center '
            >
                <div className='py-7 md:py-0 md:my-17'>
                    {word}
                </div>
            </motion.div>
        </>
    )
}

export default AppearText

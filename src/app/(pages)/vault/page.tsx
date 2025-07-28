import TemplateCards from '@/components/TemplateCards'
import { products } from '@/data/valutData'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-2.5 my-14'>
                <div className='md:max-w-[800px] '>
                    <h1 className='text-center md:text-4xl bebas font-bold uppercase md:leading-[1em] text-balance'>we believe in you - the misfits , the builders , the ones who go first</h1>
                </div>
                <div className='md:max-w-[700px]'>
                    <p className='text-center md:text-md font-medium md:leading-[1.3em] uppercase text-balance text-muted-foreground'>We are a community of creators, innovators, and dreamers who embrace the unconventional. Join us in our journey to redefine design and creativity.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'>

                {
                    products.map((product) => (
                        <TemplateCards key={product.id} template={product} />
                    ))
                }

            </div>
        </div>
    )

}

export default page

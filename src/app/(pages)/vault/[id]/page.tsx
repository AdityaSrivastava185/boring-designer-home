import { products } from '@/data/valutData'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
  params: {
    id: string
  }
}

const page = ({ params }: Props) => {
  const tempalte = products.find((product) => product.id === params.id)

  if (!tempalte) {
    return <div className='text-center my-10'>Template not found</div>
  }

  return (
    <div>
      <div className='pt-40 border-b-1 border-border'>
        <h1 className=' text-5xl text-balance my-5 max-w-2xl mx-auto'>{tempalte.name}</h1>
        <div className='max-w-2xl mx-auto flex flex-col md:flex-row gap-3 '>
          <Link href={tempalte.companyWebsite} className='bg-muted text-foreground px-4 rounded-xl py-2'>checkout {tempalte.companyName}</Link>
          <Link href={tempalte.downloadLink} className='bg-foreground text-background px-4 rounded-xl py-2'>download now</Link>
          <Link href={tempalte.PreviewLink} target='_blank' className='bg-muted text-foreground px-4 rounded-xl py-2'>Preview Page</Link>
        </div>
        <p className='text-right text-muted-foreground text-sm mb-3'>scroll more to explore</p>
      </div>
      <div className="bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 border-r border-border px-6 py-8">
            <div className="flex space-x-4 text-xs font-semibold tracking-wide mb-6">
              <span className="text-purple-400">education</span>
              <span className="text-green-400">ecosystem</span>
            </div>
            <h2 className="text-sm font-medium mb-4">check out</h2>
            <hr className="border-border mb-6" />
            <ul className="space-y-5 text-sm text-muted-foreground">
              <li className=' max-w-full md:max-w-[200px]'>
                <a href="#section1" className="hover:text-white md:block">
                  [ 01 ] introducing {tempalte.companyName}
                </a>
              </li>
              <li>
                <a href="#section2" className="hover:text-white block">
                  [ 02 ]why {tempalte.companyName}<br />
                  <span className="ml-8 block text-balance">
                    {tempalte.preferCompany}
                  </span>
                </a>
              </li>
              <li>
                <a href="#section3" className="hover:text-white">
                  [ 03 ] inspiration
                </a>
              </li>
              <li>
                <a href="#section4" className="hover:text-white">
                  [ 04 ] careers
                </a>
              </li>
            </ul>
          </aside>
          <main className="flex-1 px-6 py-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-6">
              <span>
                <strong className="text-white">{`v@${tempalte.templateName}`}</strong> |  special credit to : <Link href={tempalte.companyWebsite} className='underline' target='_blank'>{tempalte.companyName}</Link>
              </span>
              <span>5 min read</span>
            </div>
            <div className="flex justify-center items-center bg-gradient-to-t from-black to-purple-900 rounded-lg overflow-hidden mb-8 h-80">
              <Image
                src="/waitlist-image.jpg" // logo or image in public/waitlist-image.jpg
                alt="Hero"
                width={1000}
                height={1200}
                className="object-cover w-full h-auto"
              />
            </div>
            <article className="prose prose-invert max-w-none">
              <section id="section1" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">introduction</h2>
                <p className='text-muted-foreground text-balance'>
                  {tempalte.introduction}

                </p>
              </section>

              <section id="section2" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  why {tempalte.companyName}?
                </h2>
                <p className='text-muted-foreground lowercase text-balance'>
                  {tempalte.preferdescription}
                </p>
              </section>

              <section id="section3">
                <h2 className="text-2xl font-bold mb-4">
                  inspiration
                </h2>
                <p className='text-muted-foreground lowercase text-balance'>
                  {tempalte.inspiration}
                </p>
              </section>

              <section id="section2" className="my-12">
                <h2 className="text-2xl font-bold mb-4">
                  explore careers
                </h2>
                <p className='text-muted-foreground'>
                  👉 Curious how {tempalte.companyName} attracts top talent? <span className='text-foreground '>
                    <Link href={tempalte.careerLink} className='underline' target='_blank'>Check out their careers page here</Link>
                  </span>
                </p>
              </section>
              <div>
                <p className='text-muted-foreground'>
                  special credit to : <Link href={tempalte.companyWebsite} className='underline' target='_blank'>{tempalte.companyName}</Link>
                </p>
                <p className='text-muted-foreground'>
                  information source : <Link href={tempalte.source} className='underline' target='_blank'>{tempalte.companyName}</Link>
                </p>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}

export default page


// {tempalte.name && (
// <h1 className='text-center text-2xl font-bold my-5'>{tempalte.name}</h1>
// )}
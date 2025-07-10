import React from 'react'

const servicesData = [
  {
    title: 'Open Source Project Development & Maintenance',
  },
  {
    title: 'Open Source Documentation & Technical Writing',
   },
  {
    title: 'Complete Website Design',
    
  },
  {
    title:'Wireframing & Prototyping',
  },
  {
    title:'Frontend Development', 
  }
]

const Services = () => {
  return (
    <div className='my-40 w-auto'>
      <div>
        <h1 className='bebas text-7xl text-center w-full mx-auto uppercase font-bold'>services</h1>
      </div>
      <div className='max-w-[20vw] mx-auto my-6'>
        <p className='text-muted-foreground text-sm uppercase text-center font-bold'>We design compelling, high-impact experiences , transform ideas into visuals . </p>
      </div>
      <div className='flex items-center justify-evenly'>
        <div className='my-20 flex flex-row flex-wrap justify-center items-center gap-10'>
          {
            servicesData.map((service, index) => (
              <div key={index} className='border-2 border-border rounded-full px-5 py-3 flex flex-col items-center justify-center hover:bg-muted transition-all duration-300 ease-in-out'>
                <h2 className='bebas text-md uppercase'>{service.title}</h2>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services

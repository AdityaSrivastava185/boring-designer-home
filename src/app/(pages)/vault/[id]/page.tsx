import { products } from '@/data/valutData'
import React from 'react'

interface Props {
    params:{
        id:string
    }
}

const page = ({params} : Props) => {
    const tempalte = products.find((product) => product.id === params.id)

    if(!tempalte) {
        return <div className='text-center my-10'>Template not found</div>
    }

  return (
    <div>
      {tempalte.name && (
        <h1 className='text-center text-2xl font-bold my-5'>{tempalte.name}</h1>
      )}
    </div>
  )
}

export default page

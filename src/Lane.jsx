import React, { useEffect, useState } from 'react'
import Card from './Card'

const Lane = ({title,data}) => {

  return (
    <div className='flex-1  rounded-md min-h-full  text-center text-wrap font-bold font-mono  '>
        <span className='text-4xl'>{title}</span>
        <div className='bg-yellow-50 h-full border border-black overflow-auto p-2'>
          {
            data?.map(card=>{
              return (
                <Card key={card.index} name={card.company} desc={card.desc} status={card.status}  />
              )
            })
          }
        </div>
        </div>
  )
}

export default Lane
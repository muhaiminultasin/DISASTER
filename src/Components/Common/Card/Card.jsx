import React from 'react'

function Card({img, title, addr, price},i) {
  return (
    <div className=''>
      <div key={i} className='w-[306px] p-2 mt-6 hover:shadow-lg transition delay-100 rounded cursor-pointer'>
        <img src={img} alt="" />
        <div>
            <h1 className='font-[700] text-base leading-[30px] mt-2'>{title}</h1>
            <p className='font-[400] text-[14px] leading-[30px] text-primaryText'>{addr}</p>
            <h2 className='font-[700] text-base leading-[30px]'>{price}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card

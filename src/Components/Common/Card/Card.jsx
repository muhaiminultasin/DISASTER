import React from 'react'
import { cn } from '../../../lib/utils/utility'

function Card({img, title, addr, price,className,classNameTitle, subClassName,priceClass,imgClass},i) {
  return (
    <div className=''>
      <div key={i} className={cn(`w-[306px] mx-auto p-2 mt-6 hover:shadow-lg transition delay-100 rounded cursor-pointer`,className)}>
        <img src={img} alt="" className={cn(``,imgClass)}/>
        <div>
            <h1 className={cn(`font-[700] text-base leading-[30px] mt-2`,classNameTitle)}>{title}</h1>
            <p className={cn(`font-[400] text-[14px] leading-[30px] text-primaryText`,subClassName)}>{addr}</p>
            <h2 className={cn(`font-[700] text-base leading-[30px]`, priceClass)}>{price}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import { cn } from '../../../lib/utils/utility';

function Button({children,className}) {
  return (
    <>
      <div className='w-fit mx-auto'>
      <button className={cn(`bg-orange w-fit h-[42px] px-2.5 py-3.5 my-5 font-[700] text-[12px] leading-[15.3px] text-white rounded-md`,className)}>{children}</button>
      </div>
    </>
  )
}

export default Button;

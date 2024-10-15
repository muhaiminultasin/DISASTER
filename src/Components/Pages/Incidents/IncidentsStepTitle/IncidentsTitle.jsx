import React from 'react'
import { cn } from '../../../../lib/utils/utility';

function IncidentsTitle({title, subTitle,className}) {
  return (
    <div className='mt-[50px]'>
      <h1 className={cn(`font-700 text-[32px] leading-[40.8px]`,className)}>{title}</h1>
      <p className={cn(`font-400 text-[16px] leading-[26px] `,className)}>{subTitle}</p>
    </div>
  )
}

export default IncidentsTitle;

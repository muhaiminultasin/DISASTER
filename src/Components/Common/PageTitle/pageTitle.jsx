import React from 'react'
import { cn } from '../../../lib/utils/utility';

function PageTitle({title,subtitle,maxWidth,flexCol,titleClass,subtitleClass,borderB}) {
  return (
    <div className={cn(`my-5`,flexCol,borderB)}>
      <h1 className={cn(`font-[700] text-[24px] leading-[30px]`, titleClass)}>{title}</h1>
      <p className={cn(`font-[400] text-[14px] leading-[22px] text-primaryText`, maxWidth,subtitleClass)}>{subtitle}</p>
    </div>
  )
}

export default PageTitle;

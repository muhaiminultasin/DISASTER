import React from 'react'
import { cn } from '../../../lib/utils/utility';
function SectionTitle ({subTitle,title, button1,button2,className,btnClass, hidden}) {
  return (
    
    <div className='bg-[#E4E4E780]'>
      <div className='flex justify-between px-[20px] lg:px-[80px] py-5 bg-[]'>
        <div className={cn(``,className)}>
          <p className='font-[400] text-[12px] leading-[15.3px] text-primaryText'>{subTitle}</p>
          <h1 className='font-[700] text-[26px] leading-[33px]'>{title}</h1>
        </div>

        <div className='flex gap-5'>
          <input className={cn(`h-[42px] px-2.5 py-3 rounded-md border-2 outline-none placeholder:text-[12px] placeholder:text-primaryText placeholder:font-[400] hidden md:block`,hidden)}  type="text" placeholder='Search incident'/>
          <button className={cn(`bg-[#FFFFFF] h-[42px] px-2.5 py-3 rounded-md border-2 outline-none text-[12px] text-primaryText font-[400] hidden md:block`, btnClass)} >{button1}</button>  
          <button className={cn(`bg-orange h-[42px] px-2.5 py-3.5 font-[700] text-[12px] leading-[15.3px] text-white rounded-md`,btnClass)}>{button2}</button>
        </div>
      </div>
      
    </div>
    
  )
}

export default SectionTitle;

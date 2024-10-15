import React from 'react'
import SecTitleButton from '../Button/SecTitleButton';

function SectionTitle ({subTitle,title}) {
  return (
    
    <div className='bg-[#E4E4E780]'>
      <div className='flex justify-between px-[80px] py-5 bg-[]'>
        <div>
          <p className='font-[400] text-[12px] leading-[15.3px] text-primaryText'>{subTitle}</p>
          <h1 className='font-[700] text-[26px] leading-[33px]'>{title}</h1>
        </div>

        <div className='flex gap-5'>
          <input className='h-[42px] px-2.5 py-3 rounded-md border-2 outline-none placeholder:text-[12px] placeholder:text-primaryText placeholder:font-[400]'  type="text" placeholder='Search incident'/>
          <button className='bg-[#FFFFFF] h-[42px] px-2.5 py-3 rounded-md border-2 outline-none text-[12px] text-primaryText font-[400]' >Sort by: Date Modified</button>  
          <SecTitleButton children={"Cypher AI"}/>
        </div>
      </div>
      
    </div>
    
  )
}

export default SectionTitle;

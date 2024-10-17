import React from 'react'

function PageTitle({title,subtitle}) {
  return (
    <div className='my-5'>
      <h1 className='font-[700] text-[24px] leading-[30px]'>{title}</h1>
      <p className='font-[400] text-[14px] leading-[22px] text-primaryText'>{subtitle}</p>
    </div>
  )
}

export default PageTitle;

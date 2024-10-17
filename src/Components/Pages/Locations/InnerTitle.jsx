import React from 'react'
import PageTitle from '../../Common/PageTitle/pageTitle'

function InnerTitle({img,title,subtitle,className}) {
  return (
    <div className='flex gap-3 items-center'>
        <div>
            <div className='w-fit p-2 bg-[#F4F4F5] rounded-full'>
                <img src={img} alt="" className='w-[19px] h-[19px] '/>
            </div>
        </div>
      <div>
        <PageTitle title={title} subtitle={subtitle} flexCol={"flex flex-col-reverse"} titleClass={"text-[20px]"} subtitleClass={"text-[14px] leading-[22px]"} />
      </div>
    </div>
  )
}

export default InnerTitle

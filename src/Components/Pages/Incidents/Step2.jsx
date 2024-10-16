import React from 'react'
import SectionTitle from '../../Common/SectionTitle/SectionTitle'
import Cross from '../../Common/Button/Cross'

function Step2() {

  const describeItem = [
    {
      img:"./public/PBImage/avalanche.png",
      text:"Avalanche"
    },
    {
      img:"./public/PBImage/biological.png",
      text:"Biological"
    },
    {
      img:"./public/PBImage/blizzard.png",
      text:"Blizzard"
    },
    {
      img:"./public/PBImage/cold.png",
      text:"Cold/Freezing"
    },
    {
      img:"./public/PBImage/drought.png",
      text:"Drought"
    },
    {
      img:"./public/PBImage/earthquake.png",
      text:"Earthquake"
    },
    {
      img:"./public/PBImage/floding.png",
      text:"Flooding"
    },
    {
      img:"./public/PBImage/hitwave.png",
      text:"Heat Wave"
    },
    {
      img:"./public/PBImage/hail.png",
      text:"Hail"
    },
    {
      img:"./public/PBImage/lightning.png",
      text:"Lightning"
    },
    {
      img:"./public/PBImage/hand.png",
      text:"Man Made"
    },
    {
      img:"./public/PBImage/mudslide.png",
      text:"Mudslide"
    },
    {
      img:"./public/PBImage/volcanic.png",
      text:"Volcanic Eruption"
    },
    {
      img:"./public/PBImage/storm.png",
      text:"Severe Storm"
    },
    {
      img:"./public/PBImage/wind.png",
      text:"Strong Wind"
    },
    {
      img:"./public/PBImage/tornado.png",
      text:"Tornado"
    },
    {
      img:"./public/PBImage/tsunami.png",
      text:"Tsunami"
    },
    {
      img:"./public/PBImage/avalanche.png",
      text:"Volcanic Eruption"
    },
  ]

  return (
    <div className='relative'>
        <Cross position="absolute top-5 left-4"/>
      <SectionTitle className="flex flex-col " btnClass="w-[139px]" hidden="md:hidden" subTitle={"Home - Incidents - New Incident"} title={"New Incident"} button1={"Back"} button2={"Next"}/>
        <h1 className='font-[700] text-[24px] my-5 leading-[30px] w-[62%] mx-auto'>Which of these best describes the incident?</h1>
      <div className='grid grid-cols-4 gap-5 justify-center w-fit mx-auto'>
        {describeItem.map( ({img,text},i)=>{
          return <div key={i} className={`w-[180px] h-[70px] bg-[#F4F4F5] border py-5 px-6 rounded-md flex items-center gap-3`}>
            <img src={img} alt="" />
            <p className='font-[400] text-[14px] leading-[17px] text-[#71717A]'>{text}</p>
             </div>
        })}
      </div>
    </div>
  )
}

export default Step2

import React from 'react'
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import PageTitle from '../../Common/PageTitle/pageTitle';
import Cross from '../../Common/Button/Cross';

function LastStep() {
  return (
    <div className='relative'>
      <Cross position="absolute top-5 left-4"/>
      <SectionTitle className="flex flex-col " btnClass="w-[139px]" hidden="md:hidden" subTitle={"Home - Incidents - New Incident"} title={"New Incident"} button1={"Back"} button2={"Finished"}/>

      <div className='w-[90%] md:w-[752px]  h-[366px] mx-auto my-10 '>
            <PageTitle title={"Let’s give the incident a title?"} subtitle={"Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide"} maxWidth={"mx-w-[518px]"}/>

            <div className='py-5 relative'>
                <img src="./public/PBImage/Map.png" alt="" className='rounded-lg'/>

                <div className='absolute top-10 left-5'>
                  <div className='flex relative'>
                    <input type="text" placeholder='Enter incident address or GPS' className='py-3 pe-5 ps-10 outline-none rounded-lg placeholder:font-400 placeholder:text-[12px] leading-[15px]'/>
                    <img src="./public/PBImage/search.png" alt="" className='absolute top-4 left-3'/>
                  </div>

                  <div className='flex relative mt-4'>
                    <input type="text" placeholder='Pinpoint damage' className='py-3 pe-5 ps-10 outline-none rounded-lg placeholder:font-400 placeholder:text-[12px] leading-[15px]'/>
                    <img src="./public/PBImage/search.png" alt="" className='absolute top-4 left-3'/>
                  </div>
                </div>
            </div>
      </div>

        
      </div>
  )
}

export default LastStep

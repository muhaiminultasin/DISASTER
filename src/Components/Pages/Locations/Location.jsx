import React from 'react'
import SectionTitle from '../../Common/SectionTitle/SectionTitle'
import InnerTitle from './InnerTitle'

function Location() {
  return (
    <div className=''>
      <SectionTitle subTitle="Incidents - DR-4699 March 2023 Severe Storms" title="DR-4699 March 2023 Severe Storms" button1={"Sorted by : Date modified"} button2={"+ New Location"} btnClass={"w-[139px]" } btn1Width={"w-fit"} flexCol={"flex flex-col-reverse"}/>
        <div className='px-5 md:px-[80px] grid md:grid-cols-2 gap-5'>
            {/* first div */}
            <div>
                <div className='border-b-2 pb-10'>
                <InnerTitle img={"./public/PBImage/Location2.png"} title={"Tulare County,  Los Angles, CA 23415"} subtitle={"Location:"}/>
                <InnerTitle img={"./public/PBImage/Cost.png"} title={"$60,607,456.00"} subtitle={"Approx. Cost:"} className={"border-b-2 pb-10"}/>
                </div>
            </div>
            {/* second-div */}
            <div>
                <p className='font-400 text-[12px] text-primaryText leading-[15px] my-2'>Incident Map</p>
                <img src="./public/PBImage/Map2.png" alt="" />
                <p className='font-400 text-[12px] text-primaryText leading-[15px] my-2'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
            </div>
        </div>
      
    </div>
  )
}

export default Location

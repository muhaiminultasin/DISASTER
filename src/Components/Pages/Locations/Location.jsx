import React from 'react'
import SectionTitle from '../../Common/SectionTitle/SectionTitle'
import InnerTitle from './InnerTitle'
import Card from '../../Common/Card/Card'

function Location() {

    const IncidentLocation = [
        {
            id:3,
            img:"./public/PBImage/card3.png",
            title:"Whitechapel Rd.",
            address:"Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00",
          },
          {
            id:4,
            img:"./public/PBImage/card4.png",
            title:"Whitechapel Rd.",
            address:"Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00",
          },
          {
            id:5,
            img:"./public/PBImage/card5.png",
            title:"Whitechapel Rd.",
            address:"Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00",
          },
          {
            id:6,
            img:"./public/PBImage/card6.png",
            title:"Whitechapel Rd.",
            address:"Tulare County,  Los Angles, CA 23415",
            price: "$1,456,654.00",
          },
    ]

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

                <div className='py-10 border-b-2'>
                    <h1 className='font-[700] text-[14px] leading-[22px]'>Description</h1>
                    <p className='font-[400] text-[16px] leading-[22px] text-primaryText'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                </div>

                <div className='py-10'>
                    <h1 className='font-[700] text-[14px] leading-[22px]'>Location</h1>

                    <div className='grid md:grid-cols-3'>
                        {
                            IncidentLocation.map( ({img,title,address,price},i) => {
                                return <Card className={"w-fit"} img={img} classNameTitle={"text-[14px] leading-[21px]"} subClassName={"text-[12px]"} priceClass={"text-[14px]"} key={i} title={title} addr={address} price={price}/>
                            }) 
                        }
                    </div>
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

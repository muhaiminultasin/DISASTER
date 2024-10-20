import React from 'react'
import SectionTitle from '../../Common/SectionTitle/SectionTitle'
import Card from '../../Common/Card/Card'
import Chat from './Chat';
import { useState } from 'react';


function Dashboard() {

  const CardItems = [
    {
      id:1,
      img:"./PBImage/card1.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
    {
      id:2,
      img:"/PBImage/card2.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
    {
      id:3,
      img:"PBImage/card3.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
    {
      id:4,
      img:"PBImage/card4.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
    {
      id:5,
      img:"/PBImage/card5.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
    {
      id:6,
      img:"/PBImage/card6.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
  ];

  const [isHidden, setIsHidden] = useState(false);
  const toggleVisibility = () => {
    setIsHidden(!isHidden)
  }
  

  return (
    <>
      <div className='relative'>
        <SectionTitle btn1Width={"w-[149px]"} subTitle="Welcome back" title="Dashboard" button1={"Sort by: date modified"} button2={"Cypher AI"} btnClass={"w-[139px]" }/>
        <div key={CardItems.id} className='sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[50px] '>
          {
            CardItems.map(({img, title, address, price},i) => {
              return <Card key={i} img={img} title={title} addr={address} price={price}/>
            })
          }
        </div>
        
        <div className=' w-[77px] h-[77px] '>
        <Chat className={!isHidden ? "hidden":"visible"} />
          <img onClick={toggleVisibility}  src="PBImage/C_icon.png" alt="" className='absolute right-[40px] bottom-[60px] rounded-full hover:shadow-lg transition delay-75 duration-75'/>
        </div>
      </div>
    </>
  )
}

export default Dashboard;

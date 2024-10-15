import React from 'react'
import SectionTitle from '../../Common/SectionTitle/SectionTitle'
import Card from '../../Common/Card/Card'


function Dashboard() {

  const CardItems = [
    {
      id:1,
      img:"./public/PBImage/card1.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
    {
      id:2,
      img:"./public/PBImage/card2.png",
      title:"Whitechapel Rd.",
      address:"Tulare County,  Los Angles, CA 23415",
      price: "$1,456,654.00",
    },
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
    <>
      <div className=']'>
        <SectionTitle subTitle="Welcome back" title="Dashboard"/>
        <div key={CardItems.id} className='flex flex-start flex-wrap mt-[50px]'>
          {
            CardItems.map(({img, title, address, price}) => {
              return <Card img={img} title={title} addr={address} price={price}/>
            })
          }
        </div>
        
      </div>
    </>
  )
}

export default Dashboard;

import React from 'react'
import Card from '../../Common/Card/Card'
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';


function Incidents() {

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
  ];

  const navigate = useNavigate();

  const handleNewIncidentbtn = () => {
    navigate("/new-incident")
  }



  return (
    <>
      <div className='relative'>
        <SectionTitle subTitle="Welcome back" title="Incidents" button1={"sorted by: Date modified"} link2={handleNewIncidentbtn} button2={"+ New Icidents"}/>
        <div key={CardItems.id} className='sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[50px] '>
          {
            CardItems.map(({img, title, address, price},i) => {
              return <Card key={i} img={img} title={title} addr={address} price={price}/>
            })
          }
        </div>
        
        
      </div>
    </>
  )
}

export default Incidents;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const NavItems = [
        {
            label: "Dash board",
            link: "/"
        },
        {
            label: "Incidents",
            link:"/Incidents"
        },
        {
            label: "Locations",
            link:"/Location"
        },
        {
            label: "Activities",
            link:"#"
        },
        {
            label: "Documents",
            link:"#"
        },
        {
            label: "Cypher AI",
            link:"#"
        },
    ]

  return (
    <nav className='bg-[#E4E4E780] border-b-2 '>
      <div className='h-[59px] px-[20px] md:px-[80px] py-2 flex justify-between'>
        <div className="logo">
            <img src="./public/PBImage/Logo.png" alt="" />
        </div>
        <div className="navLinks pt-1.5">
            <ul className='hidden md:flex space-x-5 '>
                {NavItems.map(({label, link} ,i) => {
                    return <li key={i} className='font-[400] text-[14px] leading-[17.85px] text-primaryText hover:text-primary'>
                            <Link to={link}>{label}</Link>
                    </li>
                })}
            </ul>
        </div>
        <div className='flex items-center gap-5'>
            <img src="./public/PBImage/notification.png" alt="" />
            <div className='user flex gap-3 items-center'>
                    <img src="./public/PBImage/avatar.png" alt="" className='w-[40px] h-[40px]'/>
                <div className='hidden lg:block'>
                    <h3 className='font-[600] text-base leading-[20px] text-primaryText'>Usman Zafar</h3>
                    <p className='font-[400] text-[14px] leading-[17px] text-primaryText'>usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

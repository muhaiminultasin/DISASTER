import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../MobileMenu/Menu';

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const  toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className='bg-[#E4E4E780] border-b-2 '>
      <div className='h-[59px] px-[20px] md:px-[80px] py-2 flex justify-between'>
        <div className="logo">
            <img src="PBImage/Logo.png" alt="" />
        </div>
        <div className="navLinks pt-1.5 mx-auto">
            <ul className='hidden md:flex space-x-5 '>
                {NavItems.map(({label, link} ,i) => {
                    return <li key={i} className='font-[400] text-[14px] leading-[17.85px] text-primaryText hover:text-primary'>
                            <Link to={link}>{label}</Link>
                    </li>
                })}
            </ul>
        </div>
        <div className='flex items-center gap-5 ms-auto'>
            <img src="PBImage/notification.png" alt="" />
            <div className='user flex gap-3 items-center'>
                    <img src="/PBImage/avatar.png" alt="" className='w-[40px] h-[40px]'/>
                <div className='hidden lg:block'>
                    <h3 className='font-[600] text-base leading-[20px] text-primaryText'>Usman Zafar</h3>
                    <p className='font-[400] text-[14px] leading-[17px] text-primaryText'>usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center gap-2.5">
            <button onClick={toggleMenu} aria-label='Toggle Menu' className='md:hidden block'>
                <div className='space-y-1'>
                    <span className='block w-6 h-0.5 bg-black'></span>
                    <span className='block w-6 h-0.5 bg-black'></span>
                    <span className='block w-6 h-0.5 bg-black'></span>
                </div>
            </button>
        </div>

        {isMenuOpen && <Menu toggleMenu={toggleMenu}/>}

      </div>
    </nav>
  )
}

export default Navbar

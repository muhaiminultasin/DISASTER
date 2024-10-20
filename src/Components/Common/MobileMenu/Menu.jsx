import React from 'react';
import { Link } from 'react-router-dom';

function Menu({toggleMenu}) {
  const NavItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Incidents', link: '/Incidents' },
    { label: 'Locations', link: '/Location' },
    { label: 'Activities', link: '#' },
    { label: 'Documents', link: '#' },
    { label: 'Cypher AI', link: '#' },
  ];

  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 overflow-y-auto p-6'>
      <div className='flex justify-between px-5'>
        <img src="/PBImage/Logo.png" alt="Logo" />

        <div className='user flex gap-3 items-center ms-auto'>
                    <img src="/PBImage/avatar.png" alt="" className='w-[40px] h-[40px]'/>
                <div className='hidden lg:block'>
                    <h3 className='font-[600] text-base leading-[20px] text-primaryText'>Usman Zafar</h3>
                    <p className='font-[400] text-[14px] leading-[17px] text-primaryText'>usmanzafar@gmail.com</p>
                </div>
            </div>

        <button onClick={toggleMenu} className='w-[30px] text-[50px] absolute top-[0] right-2'>&times;</button>
      </div>

            

      <div className='px-5 my-10'>
        <ul className='space-y-5 '>
          {NavItems.map(({ label, link }, i) => (
            <li key={i} className='font-[400] text-[14px] leading-[17.85px] text-primaryText hover:text-primary'>
              <Link to={link} >{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;

import React from 'react';
import IncidentsTitle from './IncidentsStepTitle/incidentsTitle';
import Button from '../../Common/Button/Button';

function Step1() {

    const cardItem = [
        {
            img:"./public/PBImage/Fan.png",
            title:"What type of incident?",
            desc:"Choose the category that best describes the incident.",
        },
        {
            img:"./public/PBImage/I.png",
            title:"Where did the incident occur?",
            desc:"Let’s connect the dots and see where to start.",
        },
        {
            img:"./public/PBImage/Location.png",
            title:"Tell us about the incident?",
            desc:"Lorem ipsum dolar sit general sac mascho werho",
        }
    ]

  return (
    <div>
      <IncidentsTitle className="text-center w-[90%] md:w-[50%] mx-auto" title={"Let’s get started"} subTitle={'Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene'}/>

      <div className=''>
        <div className='w-[60%] mx-auto mt-[20px]'>
            <ol className="flex  items-center w-full mx-auto  ">
                <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                    <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                        <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                </li>
                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                    <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                </li>
                <li className="flex items-center ">
                    <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                        </svg>
                    </span>
                </li>
            </ol>
        </div>

        <div className='w-fit mx-auto flex flex-wrap gap-10 md:gap-20 mt-5'>
            {cardItem.map(({img, title, desc},i)=>{
                return <div key={i} className='w-[235px] h-[270px] bg-[#E4E4E7] px-5 py-6 rounded-md border shadow-md hover:shadow-lg relative mx-auto'>
                        <img src={img} alt="" />
                        <h1 className='font-[700] text-[20px] leading-[29px] absolute bottom-[70px]'>{title}</h1>
                        <p className='font-[400] text-[14px] leading-[22px] text-primaryText absolute bottom-[20px]'>{desc}</p>
                </div>
            })}
        </div>
      </div>
      <Button children={"Get started"} className="mx-auto"/>
    </div>
  )
}

export default Step1

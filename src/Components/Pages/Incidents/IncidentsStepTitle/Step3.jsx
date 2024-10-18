import React from 'react'
import Cross from '../../../Common/Button/Cross';
import SectionTitle from '../../../Common/SectionTitle/SectionTitle';
import PageTitle from '../../../Common/PageTitle/pageTitle';
import { useNavigate } from 'react-router-dom';

function Step3() {

  const navigate = useNavigate();

    
    const Next = () => {
        navigate("/save-incident")
    }

    const Prev = () => {
        navigate("/describe-sec")
    }

  return (
    <div className='relative'>
      <Cross position="absolute top-5 left-4"/>
      <SectionTitle className="flex flex-col " btnClass="w-[139px]" hidden="md:hidden" subTitle={"Home - Incidents - New Incident"} title={"New Incident"} link1={Prev} link2={Next} button1={"Back"} button2={"Next step"}/>

      <div className='w-[90%] md:w-[752px]  h-[366px] mx-auto my-10 '>
        <div>
        <PageTitle title={"Let’s give the incident a title?"} subtitle={"Make a title that will easily identify the incidents"}/>
        <input placeholder='Add title ' className='bg-[#E4E4E7] outline-none border w-full py-3 px-2.5 placeholder:font-[400] placeholder:text-[12px] placeholder:leading-[50px] rounded-sm shadow-sm'></input>
        </div>

        <div className='mt-10'>
        <PageTitle title={"Describe what happened during the incident?"} subtitle={"Share some information about the incident. The when, where, how. "}/>
        <textarea rows={5} placeholder='Type here' name="text-aria" id="" className='bg-[#E4E4E7] w-full  px-2.5 outline-none border placeholder:font-[400] placeholder:text-[12px]  rounded-sm shadow-sm'></textarea>
        </div>
      </div>
    </div>
  )
}

export default Step3;

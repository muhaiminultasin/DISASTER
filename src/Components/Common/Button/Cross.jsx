import React from 'react'
import { cn } from '../../../lib/utils/utility'
import { useNavigate } from 'react-router-dom'

function Cross({position}) {

  const navigate = useNavigate()

  const close = () => {
    navigate("/Incidents")
  }

  return (
    <div onClick={close} className= {cn(`w-fit p-2 bg-[#FAFAFA] rounded-full border shadow-md hover:shadow-lg`, position)}>
      <img src="./public/PBImage/Cross.png" alt="" />
    </div>
  )
}

export default Cross

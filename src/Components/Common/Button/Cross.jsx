import React from 'react'
import { cn } from '../../../lib/utils/utility'

function Cross({position}) {
  return (
    <div className= {cn(`w-fit p-2 bg-[#FAFAFA] rounded-full border shadow-md hover:shadow-lg`, position)}>
      <img src="./public/PBImage/Cross.png" alt="" />
    </div>
  )
}

export default Cross

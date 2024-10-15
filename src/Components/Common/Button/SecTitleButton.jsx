import React from 'react'
import {cn} from "../../../lib/utils/utility"

function SecTitleButton({children, className}) {
  return (
    <div>
      <button className={cn(`bg-orange h-[42px] px-2.5 py-3.5 font-[700] text-[12px] leading-[15.3px] text-white rounded-md`,className)}>{children}</button>
    </div>
  )
}

export default SecTitleButton

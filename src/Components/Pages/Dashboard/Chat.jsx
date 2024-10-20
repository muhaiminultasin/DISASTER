import React from 'react'
import { cn } from '../../../lib/utils/utility';

function Chat({className}) {
  return (
    <div>
      <img src="PBImage/chat_icon.png" alt="" className={cn(`absolute right-[40px] bottom-[140px] rounded-md shadow-md hover:shadow-lg transition delay-75 duration-75`,className,)}/>
    </div>
  )
}

export default Chat;

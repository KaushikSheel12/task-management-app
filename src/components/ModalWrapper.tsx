import { motion} from 'framer-motion';
import React, { ReactNode, useState } from 'react';



export const ModalWrapper = ({children,...props}:{children:ReactNode}) => {
    const [closeModal,setCloseModal] =useState(false)
  return (
    <div {...props} className={`grid w-screen h-screen place-content-center fixed bg-[rgba(0,0,0,.4)] z-30 ${closeModal && "hidden"}`} 
    // onClick={()=>setCloseModal(true)}
    >
        <motion.div
        initial={{ scale: 0,rotate:180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="relative z-50 w-[480px] h-fit p-[32px] bg-white-200 rounded-md">{children}</motion.div>
    </div>
  )
}

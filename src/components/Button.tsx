import { motion } from 'framer-motion'

export interface IButton{
    title:string
    className?:string
    onClick?:any,
    buttonColor?:string
}

export const Button = ({title,className,onClick,buttonColor="purple-200"}:IButton) => {
  return (
    <motion.button whileTap={{
      scale:0.9
    }} onClick={onClick} className={`text-[15px] font-normal text-white-200 rounded-full bg-${buttonColor} w-fit px-[24px] py-[15px] hover:bg-purple-100 transition-colors capitalize ${className}`}>{title}</motion.button>
  )
}

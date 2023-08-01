import { motion } from "framer-motion"



export const TaskCard=()=>{
    return (
      <motion.div
      whileTap={{scale:.9}}
      className="w-full px-[16px] py-[23px] bg-white-200 rounded-[8px] shadow-task-card-shadow mb-[20px] cursor-pointer">
        <p className="text-[15px] font-semibold">
          Build UI for onboarding flow
        </p>
        <p className="text-gray-100 font-medium mt-[8px]">0 of 3 subtasks</p>
      </motion.div>
    )
  }
  
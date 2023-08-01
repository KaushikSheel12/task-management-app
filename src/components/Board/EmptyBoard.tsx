
import { motion } from "framer-motion"
import { TaskCard } from "../TaskCard"
import { ColoumnWrapper } from "./ColoumnWrapper"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"




export const EmptyBoard = () => {
  const boards=useSelector((state:RootState)=>state.boards.selectedBoard)

  return (
    <div className="px-[24px] py-[7px] flex space-x-[24px] overflow-x-auto w-screen ">
      {boards?.columns?.map(board=>
      <ColoumnWrapper key={board.id} color="#49C4E5" title={`${board.columnTitle} (${board.content?.length})`}>
      <div className="mt-[24px]  max-h-[80vh] overflow-y-scroll  ">
        {board?.content?.map((content,index)=>
    <TaskCard key={index}/>
          )}
        
   
      </div>
      </ColoumnWrapper>
        )}
     
     
   
      <div className="bg-gray-200 min-w-[280px] h-[80vh] grid place-content-center rounded-[6px] text-[24px] font-semibold text-gray-100 cursor-pointer mt-[39px]">
        <motion.p 
        whileTap={{scale:.9}}
        >+ New Column</motion.p>

      </div>
    
    </div>
  )
}

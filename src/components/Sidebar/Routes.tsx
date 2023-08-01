import { useState } from "react"
import SidebarIcon from "../../assets/SidebarIcon.svg"
import { routes as Route} from "../../constant/routes"
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/features/modal/newBoardSlice";
import { motion } from "framer-motion";
import { RootState } from "../../redux/store";
import { selectBoard } from "../../redux/features/boards-coloumns/newBoardSlice";



export const Routes = () => {
  const dispatch = useDispatch();
  const selectedBoard=useSelector((state:RootState)=>state.boards.selectedBoard)
  const [routes,setRoutes]=useState(Route)
  const boards=useSelector((state:RootState)=>state.boards.boards)

 
  // handling the active routes
const handleRoute=(title:string)=>{
 const activeRoute=routes.map(route=>route.title===title?{...route,active:true}:{...route,active:false})
 setRoutes(activeRoute)
}


  return (
    <div className="pr-[24px] mt-[19px]">
      {boards.map((board)=>
      
    <motion.button
    initial={{opacity:0,scale:.9}}
    animate={{opacity:1,scale:1}}
   
    onClick={()=>{handleRoute(board.title)
      dispatch(selectBoard(board))
    }} key={board.id} className={`text-[15px] text-black rounded-r-full w-full font-semibold bg-white  text-white py-[14px] text-left pl-[32px] flex items-center ${selectedBoard.title===board.title && "bg-purple-200"} ${selectedBoard.title===board.title && "text-gray-200"}` }>
      <img src={SidebarIcon} alt="sidebar icon" className="mr-[16px]" />
      {board.title}
    </motion.button>
        )}
    <button  onClick={()=>dispatch(toggle(true))} className="text-[15px] text-gray-100 rounded-r-full w-full font-semibold  text-white py-[14px] text-left pl-[32px] flex items-center hover:bg-purple-100 hover:text-white-200">
      <img src={SidebarIcon} alt="sidebar icon" className="mr-[16px]" />+
      Create New Board
    </button>
  </div>
  )
}
 
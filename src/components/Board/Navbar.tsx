import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Button } from "../Button"
import { VerticalDottedLine } from "../SvgIcons"
import { toggle } from "../../redux/features/modal/newTaskModalSlice"


export const Navbar = () => { 
  const dispatch=useDispatch()
  const selectedBoard=useSelector((state:RootState)=>state.boards.selectedBoard)
  
  return (
    <nav className="px-[24px] py-[15px] bg-white-200 flex items-center justify-between  sticky top-0 border border-b-gray-300 max-w-full w-full">
    <h3 className="text-[24px] text-dark-100 font-normal">
        {selectedBoard?.title}
    </h3>
    <div className="flex items-center space-x-[24px]">
        <Button onClick={()=>dispatch(toggle(true))} title="+ Add New Task" className={""}/>
        <VerticalDottedLine/>
    </div>
</nav>
  )
}

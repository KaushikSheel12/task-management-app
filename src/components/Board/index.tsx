
import { useDispatch, useSelector } from "react-redux"
import {  EyeWhite } from "../SvgIcons"
import { EmptyBoard } from "./EmptyBoard"
import { Navbar } from "./Navbar"
import { RootState } from "../../redux/store"
import { toggle } from "../../redux/features/sidebar/sidebarSlice"


export const Board = () => {
  const dispatch=useDispatch()
  const sidebarStatus=useSelector((state:RootState)=>state.sidebarStatus.status)
  return (
    <div className="bg-white-100
     h-screen  w-screen relative">
      <div className="w-full h-[80%]  ">
      <Navbar/>
      <div >

    <EmptyBoard/>
      </div>
      </div>
      {!sidebarStatus && 
      <div onClick={()=>dispatch(toggle(true))} className="open absolute left-0 bottom-8 bg-purple-200 hover:bg-purple-100 py-6 px-10 rounded-r-full cursor-pointer">
        <EyeWhite/>
      </div>
      }
    </div>
  )
}

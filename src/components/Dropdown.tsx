
import Select from "react-select";

interface IOptions{
    value:string,
    label:string,
  }
  
  interface IProps {
    options:IOptions[]
    setCurrentNewTaskStatus:(value:string)=>void
}


export const Dropdown = ({options,setCurrentNewTaskStatus}:IProps) => {
  return (
    <Select
   onChange={(e)=>setCurrentNewTaskStatus(e?.value as string)}
    options={options}
   className='text-xl'
/>
  )
}

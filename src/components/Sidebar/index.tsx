import Logo from "../../assets/logo.svg";
import { Routes } from "./Routes";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Sidebar = () => {
  const boards=useSelector((state:RootState)=>state.boards.boards)
  return (
    <motion.div
    initial={{opacity:0,x:-424}}
    animate={{opacity:1,x:0,}}
    className="border border-gray-300 h-screen min-w-[300px] ">
      <header className="px-[32px] py-[32px]">
        <img src={Logo} alt="app logo" />
      </header>
      <p className="text-gray-400 text-[12px] uppercase letter tracking-[3px] px-[32px]">
        all boards ({boards?.length})
      </p>
      <div className="flex flex-col justify-between  h-[670px]">
       <Routes/>
       <Footer/>
      </div>
    </motion.div>
  );
};

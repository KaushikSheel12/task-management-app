import SunIcon from "../../assets/SunIcon.svg";
import EyeIcon from "../../assets/EyeIcon.svg";
import MoonIcon from "../../assets/MoonIcon.svg";
import { ThemeToggle } from "./ThemeToggle";
import { useDispatch } from "react-redux";

import { toggle } from "../../redux/features/sidebar/sidebarSlice";

export const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className="px-[25px]">
      <div className="flex items-center justify-center bg-gray-200 py-[16px] space-x-6">
        <img src={SunIcon} alt="sun icon" />
        <ThemeToggle />
        <img src={MoonIcon} alt="moon icon" />
      </div>
      <div
        className="flex mt-[22px] space-x-4 cursor-pointer w-fit"
        onClick={() => dispatch(toggle(false))}
      >
        <img src={EyeIcon} alt="eye icon" />
        <p className="text-[15px]">Hide Sidebar</p>
      </div>
    </footer>
  );
};

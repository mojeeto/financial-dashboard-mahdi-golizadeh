import { ReactFunctionComponent } from "./consts/types";
import Logo from "./utils/Logo";
import Menu from "./utils/Menu";

const Sidebar: ReactFunctionComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex lg:flex-col justify-between bg-[#020B08] fixed w-[100vw] lg:w-auto lg:h-[100vh] p-5 ${className}`}
    >
      <Logo />
      <Menu />
    </div>
  );
};

export default Sidebar;

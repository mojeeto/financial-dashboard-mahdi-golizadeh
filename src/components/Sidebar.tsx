import { ReactFunctionComponent } from "./consts/types";
import Logo from "./utils/Logo";
import Menu from "./utils/Menu";

const Sidebar: ReactFunctionComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex lg:flex-col justify-between bg-[#020B08] lg:fixed w-[100vw] lg:w-auto lg:h-[100vh] px-5 py-2.5 lg:p-5 ${className}`}
    >
      <Logo />
      <Menu />
    </div>
  );
};

export default Sidebar;

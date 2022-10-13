import { ReactFunctionComponent } from "./consts/types";
import Logo from "./utils/Logo";
import Menu from "./utils/Menu";

const Sidebar: ReactFunctionComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col bg-[#020B08] fixed h-[100vh] p-5 ${className}`}
    >
      <Logo />
      <Menu />
    </div>
  );
};

export default Sidebar;

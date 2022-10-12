import { ReactFunctionComponent } from "./consts/types";
import Logo from "./utils/Logo";

const SliderMenu: ReactFunctionComponent = ({ className }) => {
  return (
    <div className={`flex flex-col${className}`}>
      <Logo />
    </div>
  );
};

export default SliderMenu;

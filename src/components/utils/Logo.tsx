import { ReactFunctionComponent } from "components/consts/types";

const Logo: ReactFunctionComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-10 h-10 bg-emerald-500 rounded-lg relative overflow-hidden ${className}`}
    >
      <a
        href="/"
        className="text-white italic font-bold text-6xl absolute -right-1 -top-1"
      >
        F
      </a>
    </div>
  );
};

export default Logo;

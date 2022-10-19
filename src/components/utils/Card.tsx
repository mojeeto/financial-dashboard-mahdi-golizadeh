import { BaseProps } from "components/consts/interface";
import { ReactFunctionComponent } from "components/consts/types";
import CreditCard from "./CreditCard";
import StatusShow from "./StatusShow";

interface CardProps extends BaseProps {
  status: "Active" | "Disable";
}

const Card: ReactFunctionComponent<CardProps> = ({ className, status }) => {
  return (
    <div
      className={`flex flex-col p-5 pb-0 border-[1px] border-gray-200 rounded-3xl bg-white gap-5 dark:bg-[#020B08] dark:border-[#4c4c4c] min-w-[320px]
      md:min-w-[330px] ${className} ${status === "Disable" ? "opacity-50" : "opacity-100"
        }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <div className="font-bold text-2xl">Inventory</div>
          <StatusShow status={status} />
        </div>
        <div className="flex gap-1 text-2xl">
          <span className="text-emerald-500">$</span>
          <span>23,234</span>
        </div>
      </div>
      <CreditCard />
    </div>
  );
};

export default Card;

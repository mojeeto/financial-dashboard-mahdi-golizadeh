import React from "react";
import TransactionRowUserInfo from "./utils/TransactionRowUserInfo";

export type dataUserType = {
  id: number;
  name: string;
  imageSrc: string;
  type: string;
  date: string;
  time: string;
  transaction: string;
  state: string;
};

const dataUsers: dataUserType[] = [
  {
    id: 1,
    name: "Chelsey Dietrich",
    imageSrc: "./assets/images/Chelsey_Dietrich.jpg",
    type: "Monthly Salary",
    date: "5/16/2022",
    time: "6:14:21 PM",
    transaction: "8239",
    state: "Completed",
  },
  {
    id: 2,
    name: "Clementina DuBuque",
    imageSrc: "./assets/images/Clementina_DuBuque.jpg",
    type: "Online Payment",
    date: "4/16/2022",
    time: "4:25:12 PM",
    transaction: "-245.00",
    state: "Completed",
  },
];

const TransactionSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 flex flex-col p-5 dark:bg-[#232323] dark:border-[#4c4c4c] gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Transactions</h3>
        <select className="outline-none cursor-pointer border-[1px] border-zinc-300 rounded-lg p-2 text-sm text-zinc-400 dark:bg-[#232323] dark:text-zinc-200">
          <option>Recent</option>
        </select>
      </div>
      <div className="flex flex-col divide-y-2 divide-gray-200 dark:divide-[#4c4c4c]">
        {dataUsers.map((user) => {
          return <TransactionRowUserInfo userInfo={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};

export default TransactionSection;

import { dataUserType } from "components/TransactionSection";
import React from "react";

interface TransactionRowUserInfoProps {
  userInfo: dataUserType;
}

const TransactionRowUserInfo: React.FC<TransactionRowUserInfoProps> = ({
  userInfo,
}) => {
  const { name, date, time, type, state, imageSrc, transaction } = userInfo;
  const numberVersionTrasaction = Number.parseFloat(transaction);
  const stringVersionTransaction = Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(
    numberVersionTrasaction < 0
      ? numberVersionTrasaction * -1
      : numberVersionTrasaction
  );
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-5">
        <img
          src={imageSrc}
          alt={name}
          width="40px"
          height="40px"
          className="rounded-full"
        />
        <span>{name}</span>
      </div>
      <span>{type}</span>
      <span>{date}</span>
      <span>{time}</span>
      <span
        className={`${numberVersionTrasaction > 0 ? "text-green-500" : "text-red-500"
          }`}
      >
        {numberVersionTrasaction > 0 ? "+" : "-"}$
        {numberVersionTrasaction < 0
          ? stringVersionTransaction
          : stringVersionTransaction}
      </span>
      <select className="outline-none cursor-pointer text-green-500 bg-transparent">
        <option>{state}</option>
      </select>
    </div>
  );
};

export default TransactionRowUserInfo;

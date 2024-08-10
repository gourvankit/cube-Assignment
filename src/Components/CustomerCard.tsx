import React from "react";
import CustomerType from "../types/CustomerType";

interface CustomerCardProps {
  customer: CustomerType;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 mb-2  h-40  cursor-pointer border-t-2 border-r-2 border-gray-100 ${
        isSelected ? "bg-gray-200 border-r-4 border-gray-600" : "bg-white"
      }`}
    >
      <h2 className=" text-xl font-light text-gray-800">{customer.name}</h2>
      <p className="text-gray-500 text-sm font-normal	text-justify break-words overflow-hidden text-ellipsis h-full">
        {customer.title}
      </p>
    </div>
  );
};

export default CustomerCard;

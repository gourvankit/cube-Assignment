import React from "react";
import CustomerType from "../types/CustomerType.ts";
import CustomerCard from "./CustomerCard.tsx";

interface CustomerListProps {
  customers: CustomerType[];
  selectedCustomerId: string | null;
  onSelect: (id: string) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomerId,
  onSelect,
}) => {
  return (
    <div className="w-1/4  overflow-y-auto">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomerId === customer.id}
          onClick={() => onSelect(customer.id)}
        />
      ))}
    </div>
  );
};

export default CustomerList;

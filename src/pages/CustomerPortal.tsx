import React, { useState } from "react";
import CustomerType from "../types/CustomerType.ts";
import CustomerList from "../Components/CustomerList.tsx";
import CustomerDetails from "../Components/CustomerDetails.tsx";

const customers: CustomerType[] = [
  {
    id: "1",
    name: "John Doe",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam dolor molestias doloremque iure consequatur odio, modi quod sapiente, rerum facere aliquid, vitae accusamus incidunt laborum iste ipsam nam neque.",
    address: "123 Main St",
  },
  {
    id: "2",
    name: "John Doe",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam dolor molestias doloremque iure consequatur odio, modi quod sapiente, rerum facere aliquid, vitae accusamus incidunt laborum iste ipsam nam neque.",
    address: "123 Main St",
  },
  {
    id: "3",
    name: "John Doe",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam dolor molestias doloremque iure consequatur odio, modi quod sapiente, rerum facere aliquid, vitae accusamus incidunt laborum iste ipsam nam neque.",
    address: "123 Main St",
  },
  {
    id: "4",
    name: "John Doe",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam dolor molestias doloremque iure consequatur odio, modi quod sapiente, rerum facere aliquid, vitae accusamus incidunt laborum iste ipsam nam neque.",
    address: "123 Main St",
  },
  {
    id: "5",
    name: "John Doe",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam dolor molestias doloremque iure consequatur odio, modi quod sapiente, rerum facere aliquid, vitae accusamus incidunt laborum iste ipsam nam neque.",
    address: "123 Main St",
  },
  {
    id: "6",
    name: "John Doe",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam dolor molestias doloremque iure consequatur odio, modi quod sapiente, rerum facere aliquid, vitae accusamus incidunt laborum iste ipsam nam neque.",
    address: "123 Main St",
  },
  { id: "7", name: "John Doe", title: "CEO", address: "123 Main St" },
  { id: "8", name: "John Doe", title: "CEO", address: "123 Main St" },
  { id: "9", name: "John Doe", title: "CEO", address: "123 Main St" },
  { id: "10", name: "John Doe", title: "CEO", address: "123 Main St" },
  { id: "11", name: "John Doe", title: "CEO", address: "123 Main St" },
  { id: "12", name: "John Doe", title: "CEO", address: "123 Main St" },
  { id: "13", name: "John Doe", title: "CEO", address: "123 Main St" },
  // More customers
];

const CustomerPortal: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(
    customers[0]?.id
  );

  const selectedCustomer = customers.find(
    (customer) => customer.id === selectedCustomerId
  );

  return (
    <div className="flex h-screen">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelect={setSelectedCustomerId}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default CustomerPortal;

import React, { useEffect, useState } from "react";
import CustomerType from "../types/CustomerType";
// import { fetchPhotos } from "../utils/fetchPhotos";
import { createClient } from "pexels";

interface CustomerDetailsProps {
  customer: CustomerType;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const updatePhotos = () => {
      const client = createClient(`${process.env.REACT_APP_API_KEY}` ?? "");
      client.photos.curated({ per_page: 10 }).then((res) => {
        const newPhotos = res.photos.map((photo) => photo.src.medium);
        setPhotos(newPhotos); // Correctly setting the new photos
      });
      // fetch("https://api.api-ninjas.com/v1/randomimage?category=nature", {
      //   headers: {
      //     Authorization:"Bearer NrIHeimvc8kHb6ht56MOAJKAbhuLOAFFEXCVtPIv8A5VXPK6FyIzXO0P"
      //   },
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   });
      // console.log(newPhotos);
      // setPhotos(newPhotos);
    };

    updatePhotos();
    const interval = setInterval(updatePhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-3/4 p-4 overflow-y-scroll">
      <h1 className="text-2xl font-light text-gray-800 text-center">
        {customer.name}
      </h1>
      <p className="text-center text-gray-500 text-lg">{customer.title}</p>
      <p className="text-center">{customer.address}</p>
      <div className="grid grid-cols-3 gap-2 mt-4 ">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Customer ${index}`}
            className="w-50 h-50 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;

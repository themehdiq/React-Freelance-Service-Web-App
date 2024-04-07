import React from "react";
import { useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ServiceListing = ({ service }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = service.description;
  if (!showFullDescription) {
    description = description.substring(0, 90);
  }

  return (
    <div key={service.id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{service.freelancer.name}</div>
          <h3 className="text-xl font-bold">{service.service}</h3>
        </div>

        <div className="mb-5 h-28">
          {description}{" "}
          <button
            className="text-indigo-700 hover:text-indigo-400"
            onClick={() => {
              setShowFullDescription((previousState) => !previousState);
            }}
          >
            {showFullDescription ? "Less" : "...More"}
          </button>
        </div>

        <h3 className="text-green-600 mb-2">
          <RiMoneyDollarCircleLine className="inline text-lg mb-1 mr-1"></RiMoneyDollarCircleLine>
          {service.price} $
        </h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">{service.category}</div>
          <Link
            to={`/jobs/${service.id}`}
            className="h-[36px] bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceListing;

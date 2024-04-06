import React from "react";
import services from "../services.json";
import ServiceListing from "./ServiceListing";

const ServiceListings = () => {
  const recentServices = services.slice(0, 3);
  return (
    // <!-- Browse Services -->
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Browse Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Service Listing  --> */}
          {recentServices.map((service) => (
            <ServiceListing key={service.id} service={service}></ServiceListing>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListings;

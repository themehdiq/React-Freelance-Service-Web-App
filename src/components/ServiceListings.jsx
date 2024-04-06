import React from "react";
import services from "../services.json";
import JobListing from "./JobListing";

const ServiceListings = () => {
  return (
    // <!-- Browse Services -->
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Service Listing  --> */}
          {services.map((service) => (
            <JobListing service={service}></JobListing>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListings;

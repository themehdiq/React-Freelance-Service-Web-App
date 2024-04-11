import { React, useState, useEffect } from "react";

import ServiceListing from "./ServiceListing";
import Spinner from "./Spinner";

const ServiceListings = ({ isHome = false }) => {
  let [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchServices = async () => {
        const res = await fetch("api/services");
        const data = await res.json();
        setServices(data);
      };
      fetchServices();
    } catch (error) {
      console.log("error fetching", error);
    } finally {
      setLoading(false);
    }
  }, []);

  services = isHome ? services.slice(0, 3) : services;

  return (
    // <!-- Browse Services -->
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
          {isHome ? "Recent Services" : "Browse Services"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Service Listing  --> */}
            {services.map((service) => (
              <ServiceListing
                key={service.id}
                service={service}
              ></ServiceListing>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceListings;

import { React, useState, useEffect } from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const ServicePage = ({ deleteService }) => {
  const navigate = useNavigate();

  let { id } = useParams();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${id}`);
        const data = await res.json();
        setService(data);
        // console.log(data);
      } catch (error) {
        console.log("error fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, []);

  const onDeleteService = (serviceId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this service ?"
    );

    if (!confirm) return;

    deleteService(serviceId);
    navigate("/services");
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/services"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">
                  Delivery time: {service.delivery_time}
                </div>
                <h1 className="text-3xl font-bold mb-4">{service.service}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className=" text-orange-700 mr-2 mt-[2px]"></FaMapMarker>
                  <p className="text-orange-700">
                    {service.freelancer.location}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{service.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4"> {service.price} $</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Freelancer Info</h3>

                <h2 className="text-2xl"></h2>

                <p className="my-2">{service.freelancer.name}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {service.freelancer.email}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {service.freelancer.phone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/services/edit/${service.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteService(service.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;

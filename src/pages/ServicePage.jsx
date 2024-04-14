import { React } from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { useParams, Link, useNavigate, useLoaderData } from "react-router-dom";
// For toastify package to notice that the service is successfully deleted
import { toast } from "react-toastify";

const ServicePage = ({ deleteService }) => {
  const navigate = useNavigate();

  // let { id } = useParams();

  // Service data now is in service variable using useLoaderData
  const service = useLoaderData();
  // Fetching single service by id (method 1)

  // const [service, setService] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchService = async () => {
  //     try {
  //       const res = await fetch(`/api/services/${id}`);
  //       const data = await res.json();
  //       setService(data);
  //       // console.log(data);
  //     } catch (error) {
  //       console.log("error fetching", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchService();
  // }, []);

  const onDeleteService = (serviceId) => {
    // confirmation pop-up to validate the delition decision
    const confirm = window.confirm(
      "Are you sure you want to delete this service ?"
    );

    if (!confirm) return;

    deleteService(serviceId);

    // using toastify package to declare that the service is deleted !
    toast.success("Job Deleted Successfully");
    navigate("/services");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/services"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Services
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
                  Service Description
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
                <h3 className="text-xl font-bold mb-6">Manage Service</h3>
                <Link
                  to={`/services/edit/${service.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Service
                </Link>
                <button
                  onClick={() => onDeleteService(service.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Service
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// loader feature to fetch data and use it somewhere also
const serviceLoader = async ({ params }) => {
  const res = await fetch(`/api/services/${params.id}`);
  const data = await res.json();
  return data;
};

export { ServicePage as default, serviceLoader };

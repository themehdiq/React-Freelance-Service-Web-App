import { React, useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditServicePage = ({ editServiceSubmit }) => {
  const myService = useLoaderData();

  const [name, setName] = useState(myService.freelancer.name);
  const [email, setEmail] = useState(myService.freelancer.email);
  const [phone, setPhone] = useState(myService.freelancer.phone);
  const [location, setLocation] = useState(myService.freelancer.location);
  const [category, setCategory] = useState(myService.category);
  const [description, setDescription] = useState(myService.description);
  const [service, setService] = useState(myService.service);
  const [price, setPrice] = useState(myService.price);
  const [deliveryTime, setDeliveryTime] = useState(myService.delivery_time);

  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(myService.category);

  const submitForm = (e) => {
    e.preventDefault();

    //

    const updatedService = {
      id,
      freelancer: {
        name,
        email,
        phone,
        location,
      },
      category,
      service,
      description,
      price,
      delivery_time: deliveryTime,
    };

    editServiceSubmit(updatedService);

    // using toastify package to declare that the service is added !
    toast.success("Service Edited Successfully !");

    // navigate to services page when submitting
    return navigate(`/services/${id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Service
            </h2>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                Service Category
              </label>
              <select
                id="category"
                name="category"
                className="border rounded w-full py-2 px-3"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Seo Optimization">Seo Optimization</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Content Writing">Content Writing</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="service-name"
              >
                Service Listing Name
              </label>
              <input
                type="text"
                id="service-name"
                name="service-name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Responsive Website Development"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any service duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3"
                placeholder="Service Price in $"
                required
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>

            <div className="mb-4">
              <label
                htmlFor="delivery-time"
                className="block text-gray-700 font-bold mb-2"
              >
                Delivery Time
              </label>
              <input
                type="text"
                id="delivery-time"
                name="delivery-time"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Delivery Time"
                required
                value={deliveryTime}
                onChange={(e) => {
                  setDeliveryTime(e.target.value);
                }}
              />
            </div>

            <h3 className="text-2xl mb-5">Freelancer Info</h3>

            <div className="mb-4">
              <label
                htmlFor="freelancer"
                className="block text-gray-700 font-bold mb-2"
              >
                Freelancer Name
              </label>
              <input
                type="text"
                id="freelancer"
                name="freelancer"
                className="border rounded w-full py-2 px-3"
                placeholder="Freelancer Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="freelancer-location"
                className="block text-gray-700 font-bold mb-2"
              >
                Freelancer Location
              </label>
              <input
                id="freelancer-location"
                name="freelancer-location"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What is your location ?"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              ></input>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for clients"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditServicePage;

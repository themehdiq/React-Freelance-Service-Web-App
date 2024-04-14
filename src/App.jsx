import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useParams,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ServicesPage from "./pages/ServicesPage";
import AddServicePage from "./pages/AddServicePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage, { serviceLoader } from "./pages/ServicePage";
import EditServicePage from "./pages/EditServicePage";

const App = () => {
  //
  // Add New Service Function that we pass in as a props
  const addService = async (newService) => {
    const res = await fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    });
    return;
  };

  // Delete Service by Id that we pass in as a props
  const deleteService = async (id) => {
    const res = await fetch(`/api/services/${id}`, {
      method: "Delete",
    });
    return;
  };

  // Update Service by Id that we pass in EditPage component as a props

  const updateService = async (service) => {
    const res = await fetch(`/api/services/${service.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      // Route path with layout pages (navbar and toastcontainer )
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />

        {/* path to single service with function delete as a props */}
        <Route
          path="services/:id"
          element={<ServicePage deleteService={deleteService} />}
          loader={serviceLoader}
        />
        {/* path to add-service page with addService as a props */}
        <Route
          path="add-service"
          element={<AddServicePage addServiceSubmit={addService} />}
        />
        <Route
          path="services/edit/:id"
          element={<EditServicePage editServiceSubmit={updateService} />}
          loader={serviceLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

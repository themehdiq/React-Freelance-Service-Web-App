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
import ServicePage from "./pages/ServicePage";
import EditServicePage from "./pages/EditServicePage";

const App = () => {
  // Add new service
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

  // delete service
  const deleteService = async (id) => {
    const res = await fetch(`/api/services/${id}`, {
      method: "Delete",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route
          path="services/:id"
          element={<ServicePage deleteService={deleteService} />}
        />
        <Route
          path="add-service"
          element={<AddServicePage addServiceSubmit={addService} />}
        />
        <Route path="services/edit/:id" element={<EditServicePage />} />
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

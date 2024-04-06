import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import ServiceListings from "./components/ServiceListings";
import ViewAllServices from "./components/ViewAllServices";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <HomeCards />
      <ServiceListings></ServiceListings>
      <ViewAllServices></ViewAllServices>
    </>
  );
};

export default App;

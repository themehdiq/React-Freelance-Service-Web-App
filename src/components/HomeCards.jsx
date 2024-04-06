import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Clients</h2>
            <p className="mt-2 mb-4">
              Browse services to find the perfect freelancer for your project
              needs.
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Services
            </a>
          </Card>
          <Card bg="bg-green-200">
            <h2 className="text-2xl font-bold">For Freelancers</h2>
            <p className="mt-2 mb-4">
              List your services to offer your expertise and connect with
              potential clients.
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-green-700 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Service
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;

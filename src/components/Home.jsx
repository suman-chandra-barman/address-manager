import React, { useEffect, useState } from "react";
import Header from "./Header";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContacts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="container mx-auto">
      <Header />
      <section className="flex">
        // Search Section
        <div className="w-1/2">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search by name or phone"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">2</div>
      </section>
    </main>
  );
};

export default Home;

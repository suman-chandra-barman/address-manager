import React, { useEffect, useState } from "react";
import Header from "./Header";
import ContactCard from "./ContactCard";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery)
  );

  return (
    <main className="container mx-auto">
      <Header />
      <section className="flex">
        <div className="w-1/2">
          {/* Search Section */}
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search by name or phone"
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-square bg-blue-500 border-blue-500 hover:bg-blue-700 hover:border-blue-700">
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

          {/*All contacts  */}
          <div>
            {filteredContacts.map((contact) => (
              <ContactCard key={contact._id} contact={contact} />
            ))}
          </div>
        </div>
        <div className="w-1/2">2</div>
      </section>
    </main>
  );
};

export default Home;

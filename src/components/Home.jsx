import React, { useEffect, useState } from "react";
import Header from "./Header";
import ContactCard from "./ContactCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(
      "https://address-manager-server-suman-chandra-barman.vercel.app/contacts"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContacts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loading]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery)
  );

  const handleDelate = (id) => {
    fetch(
      `https://address-manager-server-suman-chandra-barman.vercel.app/contacts/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          setLoading(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="container mx-auto px-2">
      <Header setLoading={setLoading} />
      <section>
        <div className="md:w-1/2 mx-auto">
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
              <ContactCard
                key={contact._id}
                contact={contact}
                handleDelate={handleDelate}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

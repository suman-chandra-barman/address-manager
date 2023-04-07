import React from "react";
import AddContactForm from "./AddContactForm";

const Header = ({ setLoading }) => {
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <h2 className="text-blue-500 text-2xl md:text-3xl font-bold">
          Contacts
        </h2>
        <label
          htmlFor="add-contact-form"
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 rounded-full border-none"
        >
          Add Contact
        </label>
      </div>
      <AddContactForm setLoading={setLoading} />
    </>
  );
};

export default Header;

import React from "react";

const ContactCard = ({ contact, handleDelate }) => {
  const { name, phone, image, email, _id } = contact;
  return (
    <>
      <div className="md:flex justify-between items-center mt-2 border-b p-2">
        <div className="flex gap-5 items-center">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={image} />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="text-sm">{email}</p>
          </div>
          <p className="font-semibold">{phone}</p>
        </div>
        <div className="text-end md:text-start">
          <label
            htmlFor="add-contact-form"
            className="btn btn-sm bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 border-none mr-2"
          >
            Edit
          </label>
          <button
            onClick={() => handleDelate(_id)}
            className="btn btn-sm btn-error px-5 text-white font-bold"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

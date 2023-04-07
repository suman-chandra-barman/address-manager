import React from "react";

const ContactCard = ({ contact }) => {
  const { name, phone, image, email } = contact;
  return (
    <div className="flex gap-4 items-center mt-2 border-b p-2 hover:bg-slate-200 cursor-pointer">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={image} />
        </div>
      </div>
      <h4 className="text-xl font-semibold">{name}</h4>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default ContactCard;

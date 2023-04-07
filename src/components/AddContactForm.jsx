import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AddContactForm = ({ setLoading }) => {
  const [error, setError] = useState("");
  const [updateData, setUpdateData] = useState({});

  const handleUpdate = () => {
    fetch(
      `https://address-manager-server-suman-chandra-barman.vercel.app/contacts/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imgApi = import.meta.env.Image_Bb_Api;
  const handleNewContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    const profile = form.profile.files[0];
    console.log(name, phone, email, profile);

    const formData = new FormData();
    formData.append("image", profile);
    const url = `https://api.imgbb.com/1/upload?key=7e74aeef43f1128d0f03678519a7718e`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        const image = imageData.data.url;

        const contact = {
          name,
          phone,
          email,
          image,
        };
        setUpdateData(contact);

        // store address data
        fetch(
          "https://address-manager-server-suman-chandra-barman.vercel.app/contacts",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(contact),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoading(true);
            if (data.message) {
              setError(data.message);
            }
            if (data.acknowledged) {
              setError("");
              form.reset();
              toast("New contact create!");
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="checkbox" id="add-contact-form" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-contact-form"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold text-center">New Contact!</h3>
          <form onSubmit={handleNewContact}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name *</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Sam Roy"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number *</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="01xxxxxxxxx"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address *</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="ex@gmail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile </span>
              </label>
              <input type="file" name="profile" accept="image/*" />
              <label className="label">
                <p className="text-error">{error}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                onClick={() => handleUpdate()}
                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 rounded-full border-none"
              >
                New Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContactForm;

import React from "react";

const AddContactForm = () => {
  const handleNewContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    console.log(name, phone, email);
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
                placeholder="Sam Barman"
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
                <span className="label-text">Email address</span>
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
                <span className="label-text">Profile</span>
              </label>
              <input type="text" className="input input-bordered" />
              <label className="label">
                <p className="text-error">error</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
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

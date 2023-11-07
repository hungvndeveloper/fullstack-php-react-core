import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //window.location.href = "/contact/success";
    navigate("/contact/success");
  };

  return (
    <div>
      <h2>Contact</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" placeholder="Name..." />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input type="email" className="form-control" placeholder="Email..." />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const registrationData = { name, email, phone };
    console.log("Registration Data: ", registrationData);

    try {
      await axios.post("http://localhost:5000/registration", registrationData);
      setMessage("Registration successful!");
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Registration failed:", error);
      setMessage("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container sectionPadding">
        <div className="row">
          <div className="col-lg-12">
            <div className="registrationBanner">
              {/* <img src={registrationBanner} alt="Registration Banner" /> */}
            </div>
          </div>
        </div>
        <h2>Event Registration</h2>
        {message && (
          <p
            style={{ color: message.includes("successful") ? "green" : "red" }}
          >
            {message}
          </p>
        )}

        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-lg-6">
              <label style={{ width: "70px" }}>Name:</label>
              <input
                className="mt-1 mb-3"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-lg-6">
              <label style={{ width: "70px" }}>Email:</label>
              <input
                className="mt-1 mb-3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-lg-6">
              <label style={{ width: "70px" }}>Phone:</label>
              <input
                className="mt-1 mb-3"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="col-lg-6">
              <button
                className="btn btn-primary mt-4 mb-3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Register"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;

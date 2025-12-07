import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const SubmitEvent = async (e) => {
    e.preventDefault();
    const data = { name, password, email };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        data
      );
      res.data;
      console.log("Success:", res.data);
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="container sectionPadding">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card p-5">
              <form>
                <div className="row">
                  <div className="input-field col-lg-12 mt-3">
                    <lable>Name</lable>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-field col-lg-12 mt-3">
                    <lable>Email</lable>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-field col-lg-12 mt-3">
                    <lable>Password</lable>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-field col-lg-12 mt-3">
                    <button className="btn" onClick={SubmitEvent}>
                      LogIn
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

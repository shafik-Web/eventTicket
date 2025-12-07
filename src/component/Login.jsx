import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { name, password });
    
  };

  return (
    <div className="container sectionPadding">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card p-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12 mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-field col s12 mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="input-field col s12 mt-3">
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                    >
                      Log In
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

export default Login;

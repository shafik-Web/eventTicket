import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/registrationData.css";
const RegistrationData = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/registration");
        const data = response.data;
        console.log("Fetched registrations:", data);
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="registrationData">
      <div className="container mt-5">
        <div className="row">
          <h2>Registered Participants</h2>
          {registrations.map((reg) => (
            <div className="col-md-6" key={reg._id}>
              <div className="mt-3">
                <div className="card mb-3">
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      paddingLeft: "20px",
                    }}
                  >
                    <div>
                      <h5>
                        <strong>Person Details:</strong>
                      </h5>
                      <h5 className="card-title mb-1 mt-3">
                        <strong>Name:</strong> {reg.name}
                      </h5>
                      <p className="card-text mb-1">
                        <strong>Email:</strong> {reg.email}
                      </p>
                      <p className="card-text mb-1">
                        <strong>Phone:</strong> {reg.phone}
                      </p>
                    </div>
                    <p className="card-text mb-1">
                      <img src={reg.qrCode} alt="QR Code" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationData;

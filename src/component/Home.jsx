import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container mt-5 mb-3 text-center">
        <h4>Welcome to the Event Registration Portal</h4>
        <div className="row">
          <div className="col-md-6">
            <Link to="/Registration" className="btn btn-primary m-2">
              Register for Event
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/RegistrationData" className="btn btn-secondary m-2">
              View Registrations
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/Login" className="btn btn-secondary m-2">
              LogIn
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/SignUp" className="btn btn-secondary m-2">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

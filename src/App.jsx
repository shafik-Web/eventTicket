import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Registration from "./component/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import RegistrationData from "./component/RegistrationData";
import Login from "./component/Login";
import Signup from "./component/Signup";


function App() {
  return (
    <div className="mainDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/RegistrationData" element={<RegistrationData />} />
          <Route path="/LogIn" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

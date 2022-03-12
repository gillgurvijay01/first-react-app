// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Profile from "./components/auth/profile";
import ForgetPassword from "./components/auth/forgetPassword";
import ChangePassword from "./components/auth/changePassowrd";
function App() {
  return (
    <BrowserRouter>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
        </div> */}

        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="/forget-password" element={<ForgetPassword />} />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/changePassword" element={<ChangePassword />} />
                  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

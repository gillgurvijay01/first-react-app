import { Routes,Route } from "react-router-dom";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import ForgetPassword from "./auth/forgetPassword";
import ResetPassword from "./auth/resetPassowrd";

function PublicLayout() {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/reset-password" element={<ResetPassword/>}/>
            </Routes>

        </div>

    )
}

export default PublicLayout;
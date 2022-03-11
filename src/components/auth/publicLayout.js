import { Outlet, Link } from "react-router-dom";
import Meta from './meta';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from './signin';
import SignUp from './signup';

function PublicLayout(){
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            <div id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <Routes>
                <Route exact path="/" element={<SignIn/>} />
                <Route exact path="/signup" element={<SignUp/>} />
            </Routes>
        </div>
    );
}

export default PublicLayout;
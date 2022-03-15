import { Routes, Route } from "react-router-dom";
import Profile from "./Panel/profile";
import SideBar from './Panel/sidebar';
import Header from './Panel/header';
import Spinner from './Panel/spinner';
import ChangePassword from './Panel/changePassword';
import User from "./Panel/users";
import Roles from "./Panel/roles";
import CreateUser from "./Panel/createUser";
import CreateRole from "./Panel/createRole";

function PrivateLayout() {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            {/* Spinner Start */}
            <Spinner />
            {/* Spinner End */}
            {/* Sidebar Start */}
            <SideBar/>
            {/* Sidebar End */}

            {/* Content Start */}
            <div className="content">
                {/* Header Start */}
                <Header />
                {/* Header End */}

                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/roles" element={<Roles />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/create-role" element={<CreateRole />} />
                
                </Routes>
            </div>

            {/* Back to Top */}
            {/* <a href="javascript:;" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a> */}
        </div>

    )
}

export default PrivateLayout;
import { Outlet, Link } from "react-router-dom";
import Meta from './meta';

function Layout(){
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <div id="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Layout;
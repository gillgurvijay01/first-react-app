function SideBar() {
    return (
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
            <a href="/panel/users" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-hashtag me-2" />DASHMIN</h3>
            </a>
            <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                <img className="rounded-circle" src="/img/user.jpg" alt="i" style={{width: 40, height: 40}} />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                </div>
                </div>
                <div className="ms-3">
                <h6 className="mb-0">Jhon Doe</h6>
                <span>Admin</span>
                </div>
            </div>
            <div className="navbar-nav w-100">
                <a href="/panel/users" className="nav-item nav-link"><i className="fa fa-user me-2" />Users</a>
                <a href="/panel/roles" className="nav-item nav-link"><i className="fa fa-user me-2" />Roles</a>
            </div>
            </nav>
        </div>
    )
}

export default SideBar;
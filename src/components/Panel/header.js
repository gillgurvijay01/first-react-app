function Header() {
    return (
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
            </a>
            <a href="w" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars" />
            </a>
            <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
                <a href="my-profile.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <img className="rounded-circle me-lg-2" src="/img/user.jpg" alt="x" style={{width: 40, height: 40}} />
                <span className="d-none d-lg-inline-flex">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="/panel/profile" className="dropdown-item">My Profile</a>
                <a href="/panel/change-password" className="dropdown-item">Change Password</a>
                <a href="/logout" className="dropdown-item">Log Out</a>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Header;
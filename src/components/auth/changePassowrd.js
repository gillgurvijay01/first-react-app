function ChangePassword() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
            <div className="col-12">
                <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Create User</h6>
                <form>
                    <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">Password</label>
                    <input type="password" name="oldPassword" className="form-control" id="oldPassword" />
                    <i className="fa fa-eye" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">Password</label>
                    <input type="password" name="newPassword" className="form-control" id="newPassword" />
                    <i className="fa fa-eye" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">Password</label>
                    <input type="password" name="currentPassword" className="form-control" id="currentPassword" />
                    <i className="fa fa-eye" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
}
export default ChangePassword;
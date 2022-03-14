function Profile() {
    return (    <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-12">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">My Profile</h6>
                            <form>
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="col-6">
                                <label htmlFor="file" className="form-label">Upload File</label>
                                <input type="file" name="file" className="form-control" id="file" aria-describedby="emailHelp" />
                                </div>
                                <div className="col-5">
                                <div style={{width: 200, height: 200}}>
                                    <img src="img/user.jpg" style={{width: '100%', height: '100%'}} alt="Responsive" />
                                </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input disabled type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            )
}

export default Profile;
function ForgetPassword() {
  return (
    <div className="container-fluid">
      <div
        className="row h-100 align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h3>Forget Password</h3>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <button type="submit" className="btn btn-primary py-3 w-100 mb-4">
              Send
            </button>
            <p className="text-center mb-0">
              Don't have an Account? <a href="signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;

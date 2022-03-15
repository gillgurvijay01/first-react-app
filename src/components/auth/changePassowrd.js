import React from "react";
class ChangePassword extends React.Component {
 constructor(){
    super();
    this.state = {oldPassword: 'password', newPassword:'password', newPasswordConfirm:'password'};
  }


showPasswordOld(e) {
    e.target.classList.toggle('fa-eye-slash')
    var oldPassword = this.state.oldPassword === 'password' ? 'text' : 'password'
    this.setState({oldPassword:oldPassword})
}


showPasswordNew(f) {
    f.target.classList.toggle('fa-eye-slash')
    var newPassword = this.state.newPassword === 'password' ? 'text' : 'password'
    this.setState({newPassword:newPassword})
}

showPasswordNewConfirm(g) {
    g.target.classList.toggle('fa-eye-slash')
    var newPasswordConfirm = this.state.newPasswordConfirm === 'password' ? 'text' : 'password'
    this.setState({newPasswordConfirm:newPasswordConfirm})
}
    render() {
        return (
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Reset Password</h6>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                    <input type={this.state.oldPassword} name="oldPassword" className="form-control" id="oldPassword" />
                                    <i className="fa fa-eye" onClick={(e)=>this.showPasswordOld(e)}></i>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">New Password</label>
                                    <input type={this.state.newPassword} name="newPassword" className="form-control" id="newPassword" />
                                    <i className="fa fa-eye" onClick={(e)=>this.showPasswordNew(e)}></i>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="currentPassword" className="form-label">Confirm Password</label>
                                    <input type={this.state.newPasswordConfirm} name="currentPassword" className="form-control" id="currentPassword" />
                                    <i className="fa fa-eye" onClick={(e)=>this.showPasswordNewConfirm(e)}></i>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChangePassword;
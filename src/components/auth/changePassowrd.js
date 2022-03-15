import React from "react";
class ChangePassword extends React.Component {
    constructor() {
        super();
        this.state = { oldPassword:'password', passwordType: 'password', confirm: 'password'};
      }

      showPasswordOld(old) {
        old.target.classList.toggle('fa-eye-slash')
        var oldPassword = this.state.oldPassword === 'password' ? 'text' : 'password'
        this.setState({oldPassword:oldPassword})
    }
    
    showPassword(e) {
        e.target.classList.toggle('fa-eye-slash')
        var passwordType = this.state.passwordType === 'password' ? 'text' : 'password'
        this.setState({passwordType:passwordType})
    }

    showPasswordConf(f) {
        f.target.classList.toggle('fa-eye-slash')
        var confirm = this.state.confirm === 'password' ? 'text' : 'password'
        this.setState({confirm:confirm})
    }
    render() {
        return (
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Create User</h6>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="oldPassword" className="form-label">Password</label>
                                    <input type={this.state.oldPassword} name="oldPassword" className="form-control" id="oldPassword" />
                                    <i className="fa fa-eye" onClick={(old)=>this.showPasswordOld(old)}></i>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">Password</label>
                                    <input type={this.state.passwordType} name="newPassword" className="form-control" id="newPassword" />
                                    <i className="fa fa-eye" onClick={(e)=>this.showPassword(e)}></i>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="currentPassword" className="form-label">Password</label>
                                    <input type={this.state.confirm} name="currentPassword" className="form-control" id="currentPassword" />
                                    <i className="fa fa-eye" onClick={(f)=>this.showPasswordConf(f)}></i>
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
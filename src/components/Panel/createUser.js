import React from "react";
import axios from "axios";

class CreateUser extends React.Component {
    constructor() {
        super()
        this.state = { form: {}};
    }

    componentDidMount() {
        
    }

    CreateUser = (e) => {
        e.preventDefault();
        console.log(this.state.form)
    }

    handleChange = (event) => {
        var form = {}
        form[event.target.name] = event.target.value
        var newForm = {...form, ...this.state.form}
        this.setState({ form: newForm });
    }
    

    render() {
        return (
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Create User</h6>
                                <form onSubmit={this.CreateUser}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" name="name" onChange={this.handleChange}  className="form-control" id="name" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" name="email" onChange={this.handleChange}  className="form-control" id="email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name="password" onChange={this.handleChange}  className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } ;
}
export default CreateUser;
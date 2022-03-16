import React from "react";
import axios from "axios";

class User extends React.Component {
    constructor() {
        super();
        this.state = { users : [] };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        axios.get("https://gorest.co.in/public/v2/users")
        .then((response)=> {
            this.setState({users:response.data})
        })
        .catch(function(error) {
            console.log(error);
        });   
    }

    render() {
        return (<div className="container-xxl position-relative bg-white d-flex p-0">
                    <div className="container-fluid pt-4 px-4">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="bg-light rounded h-100 p-4">
                                    <div className="d-flex">
                                        <h6 className="mb-4 col-6">Users</h6>
                                        <div className="col-6 mb-4"><a href="/panel/create-user" className="btn btn-primary">Create
                                            User</a>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">id</th>
                                                    <th scope="col" className="text-center">Name</th>
                                                    <th scope="col" className="text-center">Email</th>
                                                    <th scope="col" className="text-center">Status</th>
                                                    <th scope="col" className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.users.map(item => 
                                                    <tr>
                                                        <th scope="row">{ item.id }</th>
                                                        <th scope="row" className="text-center">{ item.name }</th>
                                                        <th scope="row" className="text-center">{ item.email }</th>
                                                        <th scope="row" className="text-center">
                                                            <span className={ item.status === 'active' ? 'badge bg-success' : 'badge bg-danger' }>
                                                            { item.status }
                                                            </span>
                                                        </th>
                                                        <th scope="row" className="text-center">
                                                            <span className="col-6">
                                                                <i className="fa fa-edit me-2" />
                                                            </span>
                                                            <span className="col-6">
                                                                <i className="fa fa-trash me-2" />
                                                            </span>
                                                            <span className="col-6">
                                                                <input type="checkbox" defaultChecked data-toggle="toggle" />
                                                            </span>
                                                        </th>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
               
    };
}

 export default User;
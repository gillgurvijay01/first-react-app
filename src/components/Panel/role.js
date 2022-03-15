import SideBar from './sidebar';
import Header from './header';
import Spinner from './spinner';

function Roles() {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="bg-light rounded h-100 p-4">
                                <div className="d-flex">
                                    <h6 className="mb-4 col-6">Roles</h6>
                                    <div className="col-6 mb-4"><a href="create-role.html" className="btn btn-primary">Create
                                        Role</a>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">id</th>
                                                <th scope="col" className="text-center">Name</th>
                                                <th scope="col" className="text-center">Status</th>
                                                <th scope="col" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td scope="row" className="text-center">user</td>
                                                <td scope="row" className="text-center">
                                                    <span className="badge bg-success">
                                                        activated
                                                    </span>
                                                </td>
                                                <td scope="row" className="text-center">
                                                    <span className="col-6">
                                                        <i className="fa fa-edit me-2" />
                                                    </span>
                                                    <span className="col-6">
                                                        <i className="fa fa-trash me-2" />
                                                    </span>
                                                    <span className="col-6">
                                                        <input type="checkbox" defaultChecked data-toggle="toggle" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td scope="row" className="text-center">user</td>
                                                <td scope="row" className="text-center">
                                                    <span className="badge bg-success">
                                                        activated
                                                    </span>
                                                </td>
                                                <td scope="row" className="text-center">
                                                    <span className="col-6">
                                                        <i className="fa fa-edit me-2" />
                                                    </span>
                                                    <span className="col-6">
                                                        <i className="fa fa-trash me-2" />
                                                    </span>
                                                    <span className="col-6">
                                                        <input type="checkbox" defaultChecked data-toggle="toggle" />
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    );
}
export default Roles;
import React,{ useState } from "react";
import axios from "axios";


const CreateUser = () => {
    const [getForm, setForm] = useState({ form: {} });

    const createUser = (e) => {
        e.preventDefault();

        console.log(getForm.form)
        // delete this.state.form['password']
        // axios.post("https://gorest.co.in/public/v2/users?access-token=react",this.state.form, this.state.config)
        // .then((response)=> {
        //     console.log(response)
        // })
        // .catch(function(error) {
        //     console.log(error);
        // });
    }
    
    const handleChange = (event) => {
        var newform = {}
        newform[event.target.name] = event.target.value
        var newForm = { ...getForm.form, ...newform }
        setForm({ form: newForm });
    }

    return (<div className="container-xxl position-relative bg-white d-flex p-0">
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Create User</h6>
                                <form onSubmit={createUser}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" name="name" onChange={handleChange}  className="form-control" id="name" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" name="email" onChange={handleChange}  className="form-control" id="email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name="password" onChange={handleChange}  className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}



export default CreateUser;
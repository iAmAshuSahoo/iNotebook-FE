import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import alertContext from '../context/alerts/alertContext';

function Signup() {
    const host = "http://localhost:5000";
    const [credentials, setCredentials] = useState({name: '', email: '', password: '', confirmPassword: ''});
    const navigate = useNavigate();
    const context = useContext(alertContext);
    const {showAlert} = context;

    const createUser = async () => {
        const url = `${host}/api/auth/createuser`
        const {name, email, password} = credentials;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email, password}) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        if (json && json.success) {
            showAlert("success", "User Logged In Successfully");
            localStorage.setItem("token", json.authtoken);
            navigate("/");
        } else {
            showAlert("danger", "Invalid Credentials");
        }
    }

    const handleChange = (e) => {
        setCredentials ({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");
        if (credentials.password === credentials.confirmPassword) {
            createUser();
        } else {
            alert('Password Not Same');
        }
    }

    return (
        <div className='mt-5'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" name="email" minLength={5} required onChange={handleChange} value={credentials.email}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name" minLength={5} required onChange={handleChange} value={credentials.name}/>
                    </div>
            </div>
                <div className="row mb-3">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" minLength={5} required onChange={handleChange} value={credentials.password}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" minLength={5} required onChange={handleChange} value={credentials.confirmPassword}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}

export default Signup

import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import alertContext from '../context/alerts/alertContext';

function Login() {
    const host = "http://localhost:5000";
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const navigate = useNavigate();
    const context = useContext(alertContext);
    const {showAlert} = context;

    const fetchUser = async () => {
        const url = `${host}/api/auth/login`
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials) // body data type must match "Content-Type" header
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

    const handleCahnge = (e) => {
        setCredentials ({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello");
        fetchUser()
    }

    return (
        <div className='mt-5'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" name="email" onChange={handleCahnge} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" onChange={handleCahnge} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login

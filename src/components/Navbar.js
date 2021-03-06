import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Alert from './Alert';
import alertContext from '../context/alerts/alertContext';
import { useContext } from 'react'

export default function Navbar() {
    let location = useLocation();
    let navigate = useNavigate();
    const context = useContext(alertContext);
    const { alert } = context;

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    {!localStorage.getItem('token') ?
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                        </div> :
                        <button className='btn btn-primary' onClick={handleLogout}>LogOut</button>}
                </div>
            </nav>
            <div style={{ height: '50px' }}>
                {alert.show && <Alert alert={{ type: alert.type, message: alert.message }} />}
            </div>
        </>
    )
}

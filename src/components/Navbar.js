import React from 'react'
import {
    Link, useLocation
} from "react-router-dom";
import zock from '../zock.png'

const Navbar = () => {
    let location = useLocation();

    React.useEffect(() => {
        // console.log(location.pathname)
    }, [location]);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" href="#">
                    <img src={zock} alt="" width="35" height="29" style={{"marginRight":"0.8vw"}} className="d-inline-block align-text-top"/>
                        Campaign
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${`location.pathname ==="" ? "active" : ""`}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${`location.pathname ==="/campaign" ? "active" : ""`}`} to="/campaign">Campaigns</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${`location.pathname ==="/products" ? "active" : ""`}`} to="/allprod">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Customers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar (props) {
    const location = useLocation();
    return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
        <div className="container navbar-header">
            <Link to="/About"className = {location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Suneetha Burla</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav nav-item">
                    <li ><Link to="/About" className = {location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                        About</Link></li>
                    <li ><Link to="/Portfolio" className = {location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio</Link></li>
                    <li ><Link to="/Contact" className = {location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                        Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
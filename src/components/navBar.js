import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-link active" to="/">Home</Link>
                    </ul>

                    <Link to="/cart">
                        <button type="button" className="btn btn-success mx-3">
                            <i className="bi bi-bag"></i>
                            <span className="badge mx-1 text-bg-danger">
                        </span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;
import React from 'react';

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Link</a>
                        </li>
                    </ul>

                    <button type="button" className="btn btn-success mx-3">
                        <i className="bi bi-bag"></i>
                        <span className="badge mx-1 text-bg-danger">
                            50
                        </span>
                    </button>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>




        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //             </ul>
        //             <div className="d-flex">
        //                 <input className="form-control me-2" type="search" placeholder="Search" />
        //                 <button className="btn btn-outline-success">Search</button>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default NavBar;
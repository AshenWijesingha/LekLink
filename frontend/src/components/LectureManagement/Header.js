import React from "react";
import { Link } from "react-router-dom";



function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <a className="navbar-brand fw-bold fst-italic fs-2" href="#" style={{color:"#050756"}}>Lec Link</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        
                    <form class="form-inline">
                       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                       <button class="btn btn-outline-success form-control mr-sm-2" type="submit">Search</button>
                       </form>
                       
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="/allLECTURE-table">Add Lectures</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-6" href="/">Lectures</a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link fs-6" href="/allNOTICE-table">Add notice</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="/N">Notice</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link active fs-6 " aria-current="page" href="http://localhost:3000/Home"></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link fs-6" href="#">Login  </a> 
                    </li>

                    <li className="nav-item">
                        <a className="nav-link fs-6" href="#">Signin  </a>
                    </li>

                    <li className="nav-item">
                       <a className="nav-link fs-6" href="#">Profile </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;
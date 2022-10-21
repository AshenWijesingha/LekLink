import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useState } from "react";
import "./topbar.css";


export default function TopBar(props) {

  const toggleClass = () => {
    props.setActive(!props.isActive);
  };

  return (
    <>
      <div className="col-md-12 m-0 p-0">
        <nav className="navbar primary-background mb-0">
          <div id='tcontainer' className="container container-topbar">
            <div className="top-logo d-flex justify-content-between">
              <a className="navbar-brand text-light fw-bold">Eye Care</a>
              <a href="#" onClick={toggleClass} className="navbar-brand text-light" id="sidebar-toggle"><i className="fa fa-bars"></i></a>
            </div>
            <form className="d-flex search-box">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn topbar-font-color topbar-hover tcontainerbtn" type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div className="btn-group ">
              <button type="button" className="btn dropdown-toggle d-flex align-items-center topbar-font-color topbar-hover" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user-circle fa-2x tcontainerbtn" id='iprofile'></i> Amal
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Setting</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </>
  );
}

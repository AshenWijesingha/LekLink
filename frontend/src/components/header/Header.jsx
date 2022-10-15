import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
          <div class="w-100 d-flex justify-content-between">
            <div>
              <i class="fa fa-envelope mx-2"></i>
              <a class="navbar-sm-brand text-light text-decoration-none" href="#">info@leklink.lk</a>
              <i class="fa fa-phone mx-2"></i>
              <a class="navbar-sm-brand text-light text-decoration-none" href="#">+94 11 340 1721</a>
            </div>
            <div>
              <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
              <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
              <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
              <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
          <a class="navbar-brand text-success logo top-logo h2 align-self-center" href="#">
            LekLink

          </a>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div class="flex-fill">
              <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li class="nav-item">
                  <Link to='/' class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to='/leklink' class="nav-link">LekLink</Link>
                </li>
                {/* <li class="nav-item">
                  <Link to='/cusSpectacle' class="nav-link">Custom Eyewear</Link>
                </li> */}
                <li class="nav-item">
                  <Link to='/' class="nav-link">About</Link>
                </li>
                <li class="nav-item">
                  <Link to='/' class="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
            <div class="navbar align-self-center d-flex">
              <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div class="input-group">
                  <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                  <div class="input-group-text">
                    <i class="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                <i class="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a class="nav-icon position-relative text-decoration-none" href="#">
                <i class="fa fa-fw fa-user text-dark mr-3"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form action="" method="get" class="modal-content modal-body border-0 p-0">
            <div class="input-group mb-2">
              <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
              <button type="submit" class="input-group-text bg-success text-light">
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

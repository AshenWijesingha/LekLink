import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (

    <footer class="bg-dark" id="tempaltemo_footer">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-4 pt-5">
            <h2 class="h2 text-light border-bottom pb-3 border-light logo">LekLink</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li>
                <i class="fas fa-map-marker-alt fa-fw"></i>
                Sri Lanka
              </li>
              <li>
                <i class="fa fa-phone fa-fw"></i>
                <a class="text-decoration-none" href="#">+94 11 123 4567</a>
              </li>
              <li>
                <i class="fa fa-envelope fa-fw"></i>
                <a class="text-decoration-none" href="#">info@leklink.lk</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 pt-5">
            <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li><Link class="text-decoration-none" to='/'>Home</Link></li>
              <li><Link class="text-decoration-none" to='/leklink'>leklink</Link></li>
              <li><Link class="text-decoration-none" to='/'>About Us</Link></li>
              <li><Link class="text-decoration-none" to='/'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-100 bg-black py-3">
        <div class="container">
          <div class="row pt-2">
            <div class="col-6">
              <p class="text-left text-light">
                Copyright &copy; 2022 LekLink
              </p>
            </div>
            <div class="col-auto me-auto col-6 d-flex justify-content-end">
              <ul class="list-inline text-left footer-icons">
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

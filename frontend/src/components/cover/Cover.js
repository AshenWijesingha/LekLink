import React from "react";
import "./cover.css";

export default function Cover() {
  return (
    <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row p-5 pt-1 pb-1">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="./img/girl.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success"><b>BEST</b>Lecture Link Management System</h1>
                  <p>
                   best Lecture link management system designed by a single team. since 2017
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5  pt-1 pb-1">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="./img/spec1.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">Easy to Use</h1>
                  <h3 class="h2">User friendly Interfaces</h3>
                  <p>
                   For the betterment of link management and user friendlyness we have implemented that the system with minimalist suer design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5  pt-1 pb-1">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="./img/spec2.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">what are you looking for</h1>
                  <p>Easiest way to manage and access lecture links without having any problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
      </a>
      <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

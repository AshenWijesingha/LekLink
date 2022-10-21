import React from "react";

function Home() {

 return(
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg" alt="First slide" width="400" height="600"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.natgeofe.com/n/d6bd5cdc-528f-4887-9cc3-3fb4e10d6651/sri-lanka-travel.jpg" alt="Second slide" width="400" height="600"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.stokedtotravel.com/wp-content/uploads/2019/05/IMG_5379-1000x667.jpg" alt="Third slide" width="400" height="600"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 )

}
export default Home;
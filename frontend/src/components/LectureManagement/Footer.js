import React from "react";

function Footer() {

    return(
        <footer className="p-3 mb-2 bg-dark text-white">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <a className="navbar-brand fw-bold fst-italic fs-2" href="#" style={{color:"#050756"}}>Lec Link</a>
            
            <div class="container ">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-skype"></i></a>
            </div>

                
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"style={{color:"#050756"}}>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"style={{color:"black"}}>Home</a></li>
                    <li><a href="#!"style={{color:"black"}}>Lectures</a></li>
                    <li><a href="#!"style={{color:"black"}}>News</a></li>
                    <li><a href="#!"style={{color:"black"}}>Lecture Link</a></li>
                    <li><a href="#!"style={{color:"black"}}>Profile</a></li>
                  
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"style={{color:"#050756"}}>DO YOU NEED ANY

SUPPORT ?</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"style={{color:"black"}}>About US</a></li>
                    <li><a href="#!"style={{color:"black"}}>Terms and Conditions</a></li>
                    <li><a href="#!"style={{color:"black"}}>Help</a></li>
                    <li><a href="#!"style={{color:"black"}}>Contact us</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> Lec Link</a>
    </div>

</footer>
    )
}

export default Footer;
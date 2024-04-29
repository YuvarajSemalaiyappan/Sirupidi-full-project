import React from "react";
import { Link, useHistory } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      

      <footer className="footer-distributed">
        <div className="footer-section">
          <h3>
            SiruPidi
          </h3>
          <p className="footer-links">
            <a href="/" className="link-1">
              Home
            </a>
            <a href="/"></a>
            
            <a href="/aboutUs">About Us</a>

            <a href="/"></a>
            
            <a href="/contactUs">Contact Us</a>
          </p>
          {/* <p className="footer-company-name">Company Name © 2015</p> */}
        </div>
  
        <div className="footer-section">
          <div>
            <i  className="fa fa-map-marker"></i>
            <p>
              <span>6/69, Mahaliyamman Koil St</span> Nasiyanur, Erode - 638107
              </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+91 93630 80020</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:contact@sirupidi.com">contact@sirupidi.com</a>
            </p>
          </div>
        </div>
  
        <div className="footer-section">
         
            <h3>About the company</h3>
            <p className="footer-company-about">
            We deliver natural food products—health mix,<br></br> millets, and rice—directly to your doorstep. <br></br>
            Sourcing grains and greens from local farmers, <br></br>
            we prioritize quality through rigorous inspections, <br></br>
            ensuring only the best materials are used. Our <br></br>
            mission is to make natural food accessible to all.
          </p>
          <div className="footer-icons">
          <Link to="/">
                <i style={{ color: "#ffffff" }} className="fab fa-facebook-f"></i>
              </Link>
              <a href="https://www.instagram.com/sirupidi/"
            target="_blank"
            >
                <i style={{ color: "#E101A8" }} className="fab fa-instagram"></i>
              </a>
              
              <Link to="/">
                <i style={{ color: "#b02325" }} className="fab fa-youtube"></i>
              </Link>
              <a href="https://api.whatsapp.com/send?phone=9363080020"
            target="_blank"
            >
              <i className="fab fa-whatsapp" style={{ color: "#25D366" }} ></i>
            </a>
              
          </div>
        </div>
        
      </footer>

    
    {/* Top Header */}
       <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none text-center">
             
              <p>Copyright © 2023 - SiruPidi.com </p>
            </div>
            {/* <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div> */}
          </div>
        </div>
      </div> 
      {/* <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo-1536x864.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="discover"
            src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
          />
        </div>
      </div>
    </div> */}
      
    
    </div>
  );
};

export default Footer;

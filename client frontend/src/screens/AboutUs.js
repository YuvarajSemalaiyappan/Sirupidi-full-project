import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";



const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center mb-2 mb-sm-5">About Us</h4>
          <img
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
            src="http://bmcollegebalotra.com/img/aboutus.jpg"
            alt="Not-found"
          />
          <img
            style={{ width: "300%", height: "600px", objectFit: "contain" }}
            src="https://i.postimg.cc/5tmr3TrJ/About-us.png"
            alt="Not-found"
          />
          
          <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
            <Link to="/" className="text-white text-decoration-none">
              Home page
            </Link>
          </button>
        </div>
      </div>
    
          
          {/* <div className="container d-flex flex-column justify-content-center align-items-center login-center">
          <p >Welcome to our firm,we are here to provide the taste of natural food products like health mix,millets and rice at your doorstep…

We purchase grains and greens from local farmers. Our items are all subjected to rigorous quality inspections. This is to guarantee that we manufacture our items using only the best materials.

We are able to ensure the quality of our products since we frequently get the materials we use from reputable manufacturers that have undergone quality checks.

Our company's mission is to provide natural food to everyone.</p>
              
          
          </div> */}
          <Footer/>
          </>
  );
};

export default AboutUs;
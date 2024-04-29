import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center mb-2 mb-sm-5">Contact Us</h4>
          <img
            style={{ width: "300%", height: "600px", objectFit: "contain" , paddingBottom: "35px"}}
            src="https://i.postimg.cc/zvN063wb/Contactus.png"
            alt="Not-found"
          />
        
          {/* <h4>Trade Name: SiruPidi</h4>
          <h4>Phone Number: +91 93630 80020</h4>
          <h4>Email: contact@sirupidi.com</h4>
          <h4>Physical Address: 6/69, mahaliamman koil st, Nasiyanur.</h4>
          <h4>City: Erode - 638107</h4>
          <h4>Fssai: 22423416000341</h4> */}


          <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
            <Link to="/" className="text-white text-decoration-none">
              Home page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
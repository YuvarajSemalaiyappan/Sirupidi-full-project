import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const Success = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center mb-2 mb-sm-5">Order Created Successfully</h4>
          <img
            style={{ width: "30%", height: "100px", objectFit: "contain" }}
            src="https://i.postimg.cc/zX2YH4KH/35514495-green-eco-loop-leaf-check-mark.jpg"
            alt="Not-found"
          />
          <h4 className="text-center mb-2 mb-sm-5"> To Confirm Order Share Payment Screenshot<br></br> On Our  Whatsapp <b>9363080020</b></h4>
          <h4 className="text-center mb-2 mb-sm-5"> Redirect to whatsapp</h4>
          <h4 className="text-center mb-2 mb-sm-5"> click here : 
          
            <a href="https://wa.me/9363080020" target="blank"><b>https://wa.me/9363080020</b></a>
          </h4>
          
          <img
            style={{ width: "40%", height: "130px", objectFit: "contain" }}
            src="https://i.postimg.cc/Kz0yR06c/whatsapp-QR.png"
            alt="Not-found"
          />
          <h4 className="text-center mb-2 mb-sm-5"> Scan using whatsapp camera</h4>
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

export default Success;
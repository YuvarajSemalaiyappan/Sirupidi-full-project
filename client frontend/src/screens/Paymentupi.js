import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "./../components/Header";

const Paymentupi = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(savePaymentMethod(paymentMethod));
    history.push("/success");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h4>Scan QR code to 
            <br></br>
            pay ₹ {cart.totalPrice}
          </h4>
          <img
            src="https://i.postimg.cc/dV5pjJKm/Whats-App-Image-2023-11-18-at-7-05-22-PM.jpg"  // Replace with the actual path or URL of your QR code image
            alt="QR Code"
            style={{ width: "100%", maxWidth: "300px", margin: "10px 0" }}  // Adjust the styling as needed
          />
          
          <button type="submit">Pay ₹ {cart.totalPrice} and Continue</button>
        </form>
      </div>
    </>
  );
};

export default Paymentupi;

import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import axios from "axios";

const OrderConfirmation = (props) => {

const {sendEmail} = props

useEffect(() => {

  sendEmail()

}, [])


  const { email } = props;

  return (
    <div className="order-confirmation">
      <h1>Thank you for your order</h1>
      <p>An email confirmation has been sent to {email} with all your flight details.
      Thank you for choosing us for your vacation needs.
      </p>
      <p>
        Please click <Link to="/">here</Link> to return to the homepage.
      </p>
    </div>
  );
}

export default OrderConfirmation;
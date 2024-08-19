import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import axios from "axios";
import '../styles/OrderConfirmation.css';

const OrderConfirmation = (props) => {

const {sendEmail} = props

useEffect(() => {

  sendEmail()

}, [])


  const { email } = props;

  return (
    <div className="order-confirmation-container">
    <div className="order-confirmation">
      <h1>Thank you for your order</h1>
      <p>An email confirmation has been sent to you {email} with all your flight details.
      Thank you for choosing us for your vacation needs.
      </p>
      <p>
        Please click <Link to="/">here</Link> to return to the homepage.
      </p>
      </div>

      <div className="moving-plane">
        <div className="cloud cloud1">
          <div className="light"></div>
          <img src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" alt="Plane in flight" />
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
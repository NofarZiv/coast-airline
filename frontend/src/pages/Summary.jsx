import TripSum from "../components/TripSum";
import PaymentSum from "../components/PaymentSum";
import { Link } from "react-router-dom";
import '../styles/Summary.css';

const Summary = (props) => {

  const { departureFlight, returnFlight, handleConfirmBooking, searchData, totalPassengers, total, sendEmail  } = props;


  return(
    <div className="summary-container">
    <h1>Trip Summary</h1>
    <div className="trip-summary">
      <TripSum flight={departureFlight} isDeparture={true} />
      <TripSum flight={returnFlight} isDeparture={false} />
    </div>
    {searchData && (
      <div className="payment-summary">
        <PaymentSum
          searchData={searchData}
          departureFlightPrice={departureFlight.flight_price}
          returnFlightPrice={returnFlight.flight_price}
          totalPassengers={totalPassengers}
          total={total}
        />
      </div>
    )}
    <Link to="/payment">
      <button className="next-button" onClick={sendEmail}>
        Next
      </button>
    </Link>
  </div>
  )
}


export default Summary;
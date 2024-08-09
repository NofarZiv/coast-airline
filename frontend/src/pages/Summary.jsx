import TripSum from "../components/TripSum";
import PaymentSum from "../components/PaymentSum";
import { Link } from "react-router-dom";

const Summary = (props) => {

  const { departureFlight, returnFlight, handleConfirmBooking, searchData, totalPassengers, total  } = props;


  return(
    <div>
      <h2>Trip Summary</h2>
      <TripSum flight={departureFlight} isDeparture={true}/>
      <TripSum flight={returnFlight} isDeparture={false}/>
      {searchData && (
      <PaymentSum searchData={searchData} departureFlightPrice={departureFlight.flight_price} returnFlightPrice={returnFlight.flight_price} totalPassengers={totalPassengers} total={total} />
      )}
      <Link to="/payment">
      <button onClick={handleConfirmBooking }>Next</button>
      </Link>
    </div>
  )
}


export default Summary;
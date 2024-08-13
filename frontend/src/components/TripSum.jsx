import { Link } from "react-router-dom";
import '../styles/TripSum.css';
import { format, parseISO } from "date-fns";

const TripSum = (props) => {

  const { flight, isDeparture } = props;

  const formattedDepartureTime = format(parseISO(flight.departure_time), "HH:mm"); 
  const formattedArrivalTime = format(parseISO(flight.arrival_time), "HH:mm");

  const convertDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formattedFlightDuration = convertDuration(flight.flight_duration);

  return (
    <div className="trip-summary-container">
      <h2 className="trip-summary-title">
        {isDeparture ? "Departing Flight" : "Returning Flight"}
      </h2>
      <div className="trip-summary-row">
        <div className="trip-summary-item">
          <span className="trip-summary-time">{formattedDepartureTime}</span>
          <div>{flight.origin_airport}</div>
          <span>{flight.departure_date}</span>
        </div>
        <div className="trip-summary-line"></div>
        <div className="trip-summary-duration">
          Duration: {formattedFlightDuration}
        </div>
        <div className="trip-summary-line"></div>
        <div className="trip-summary-item">
          <span className="trip-summary-time">{formattedArrivalTime}</span>
          <div>{flight.destination_airport}</div>
          <span>{flight.arrival_date}</span>
        </div>
      </div>
      <div className="trip-summary-info">
        <div>Flight number: {flight.flight_number}</div>
        <span>Price: ${flight.flight_price}</span>
      </div>
      <Link to={isDeparture ? "/departure" : "/return"}>
        <button className="trip-summary-button">Change</button>
      </Link>
    </div>


  )
}


export default TripSum;
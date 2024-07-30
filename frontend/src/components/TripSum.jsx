import { Link } from "react-router-dom";


const TripSum = (props) => {

  const { flight, isDeparture } = props;


  return(
    <div>
      <span>{flight.origin_airport}</span>
      <div>{flight.destination_airport}</div>
      <span>{flight.departure_date}</span>
      <div>{flight.arrival_date}</div>
      <span>{flight.departure_time}</span>
      <div>{flight.arrival_time}</div>
      <span>{flight.flight_duration}</span>
      <div>{flight.flight_number}</div>
      <span>{flight.price}</span>
      <Link to={isDeparture ? "/departure" : "/return"}>
      <button>Change</button>
      </Link>
    </div>
  )
}


export default TripSum;
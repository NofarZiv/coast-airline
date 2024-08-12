import FlightDetailsItem from "./FlightDetailsItem";
import '../styles/FlightDetailsList.css';

const FlightDetailsList = (props) => {

  const { flights, onSelectFlight  } = props;

  const flightList = flights.map(flight => {
    return(
      <FlightDetailsItem 
        key={flight.flight_number} 
        flightNumber={flight.flight_number}
        originAirport={flight.origin_airport}
        departureTime={flight.departure_time}
        destinationAirport={flight.destination_airport}
        arrivalTime={flight.arrival_time}
        price={flight.flight_price}
        flights={flights}
        onSelectFlight={onSelectFlight }
      />
    )
  })

  return(
    <div className="flight-details-list">
    {flightList}
    </div>
  )
}

export default FlightDetailsList;
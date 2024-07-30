import FlightDetailsItem from "./FlightDetailsItem";

const FlightDetailsList = (props) => {

  const { flights, onSelectFlight  } = props;

  const flightList = flights.map(flight => {
    return(
      <FlightDetailsItem 
        key={flight.flight_number} 
        originAirport={flight.origin_airport}
        departureTime={flight.departure_time}
        destinationAirport={flight.destination_airport}
        arrivalTime={flight.arrival_time}
        price={flight.price}
        flights={flights}
        onSelectFlight={onSelectFlight }
      />
    )
  })

  return(
    <div>
    {flightList}
    </div>
  )
}

export default FlightDetailsList;
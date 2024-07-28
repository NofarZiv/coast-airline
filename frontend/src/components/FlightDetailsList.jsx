import FlightDetailsItem from "./FlightDetailsItem";

const FlightDetailsList = (props) => {

  const {searchResult, onFlight} = props;

  const flightList = searchResult.map(flight => {
    return(
      <FlightDetailsItem 
        key={flight.flight_number} 
        originAirport={flight.origin_airport}
        departureTime={flight.departure_time}
        destinationAirport={flight.destination_airport}
        arrivalTime={flight.arrival_time}
        price={flight.price}
        flightNumber={flight.flight_number}
        onFlight={onFlight}
        searchResult={searchResult}
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
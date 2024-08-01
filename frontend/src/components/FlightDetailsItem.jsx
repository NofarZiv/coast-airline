import { useState } from "react";
import FlightDetailModal from "./FlightDetailModal";



const FlightDetailsItem = (props) => {

  const { originAirport, departureTime, destinationAirport, arrivalTime, price, flightNumber, flights, onSelectFlight } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleArticleClick = () => {
    onSelectFlight(flightDetails)
  }

  const onClickFlight = () => {
    setIsOpen(!isOpen)
  }

  const flightDetails = flights.find(flight => flight.flight_number === flightNumber);

  return(
    <>
    <article onClick={handleArticleClick}>
      <span>{originAirport}</span>
      <div>{departureTime}</div>
      <span>{destinationAirport}</span>
      <div>{arrivalTime}</div>
      <span>${price}</span>
      <button onClick={onClickFlight}>Details</button>
    </article>
    {isOpen && flightDetails && <FlightDetailModal flights={flightDetails} onClickFlight={onClickFlight} />}
    </>
  )
}

export default FlightDetailsItem;
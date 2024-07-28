import { useState } from "react";
import FlightDetailModal from "./FlightDetailModal";

const FlightDetailsItem = (props) => {

  const {originAirport, departureTime, destinationAirport, arrivalTime, price, flightNumber, onFlight, searchResult} = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleArticleClick = (e) => {
    // Check if the click target is not the button
    if (e.target.tagName !== 'BUTTON') {
      onFlight(flightNumber);
    }
  }

  const onClickFlight = () => {
    setIsOpen(!isOpen)
  }

  const flightDetails = searchResult.find(flight => flight.flight_number === flightNumber);

  return(
    <>
    <article onClick={handleArticleClick}>
      <span>{originAirport}</span>
      <div>{departureTime}</div>
      <span>{destinationAirport}</span>
      <div>{arrivalTime}</div>
      <span>{price}</span>
      <button onClick={onClickFlight}>Details</button>
    </article>
    {isOpen && flightDetails && <FlightDetailModal searchResult={flightDetails} onClickFlight={onClickFlight} />}
    </>
  )
}

export default FlightDetailsItem;
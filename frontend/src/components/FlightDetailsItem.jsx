import { useState } from "react";
import FlightDetailModal from "./FlightDetailModal";
import { format, parseISO } from "date-fns";


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

  const formattedDepartureTime = format(parseISO(departureTime), "HH:mm"); 
  const formattedArrivalTime = format(parseISO(arrivalTime), "HH:mm");

  return(
    <>
    <article onClick={handleArticleClick}>
      <span>{originAirport}</span>
      <div>{formattedDepartureTime}</div>
      <span>{destinationAirport}</span>
      <div>{formattedArrivalTime}</div>
      <span>${price}</span>
      <button onClick={onClickFlight}>Details</button>
    </article>
    {isOpen && flightDetails && <FlightDetailModal flights={flightDetails} onClickFlight={onClickFlight} />}
    </>
  )
}

export default FlightDetailsItem;
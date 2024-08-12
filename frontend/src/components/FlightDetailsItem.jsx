import { useState } from "react";
import FlightDetailModal from "./FlightDetailModal";
import { format, parseISO } from "date-fns";
import '../styles/FlightDetailsItem.css';


const FlightDetailsItem = (props) => {

  const { originAirport, departureTime, destinationAirport, arrivalTime, price, flightNumber, flights, onSelectFlight } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [isSelected, setIsSelected] = useState(false);

  const handleArticleClick = () => {
    onSelectFlight(flightDetails)
    setIsSelected(!isSelected);
  }

  const onClickFlight = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen(!isOpen)
  }

  const flightDetails = flights.find(flight => flight.flight_number === flightNumber);

  const formattedDepartureTime = format(parseISO(departureTime), "HH:mm"); 
  const formattedArrivalTime = format(parseISO(arrivalTime), "HH:mm");

  return(
    <>
    <div className="flight-details-wrapper">
    <article className={`flight-details-item ${isSelected ? 'selected' : ''}`} onClick={handleArticleClick}>
      <div className="flight-details-item-content flight-time">
        <div className="departure-time">{formattedDepartureTime}</div>
        <div className="flight-line"></div>
        <div className="arrival-time">{formattedArrivalTime}</div>
      </div>
      <div className="flight-details-item-content">
        <div className="departure-airport">{originAirport}</div>
        {/* <div className="flight-line"></div> */}
        <div className="flight-path">
              <div className="line"></div>
              <div className="plane-icon">&#9992;</div> {/* Unicode plane icon */}
              <div className="line"></div>
            </div>
        <div className="arrival-airport">{destinationAirport}</div>
      </div>
      <div className="flight-details-item-content">
        <button className="details-button" onClick={onClickFlight}>Details</button>
      </div>
      <div className="price">${price}</div>
    </article>
    {isOpen && flightDetails && <FlightDetailModal flights={flightDetails} onClickFlight={onClickFlight} />}
    </div>
  </>
  )
}

export default FlightDetailsItem;
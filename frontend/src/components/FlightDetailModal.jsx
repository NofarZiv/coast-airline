import { useState } from "react"; 
import '../styles/FlightDetailModal.css';
import { format, parseISO } from "date-fns";

const FlightDetailModal = (props) => {

  const {flights, onClickFlight} = props;

  const [close, setClose] = useState(false)

  const onClose = () => {
    setClose(!close)
    onClickFlight()
  }

  const formattedDepartureTime = format(parseISO(flights.departure_time), "HH:mm"); 
  const formattedArrivalTime = format(parseISO(flights.arrival_time), "HH:mm");

  const convertDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formattedFlightDuration = convertDuration(flights.flight_duration);

  return(
    <article className="modal-overlay">
      <div className="modal-content">
        <h3>Flight Details</h3>
        <div className="detail-line">
          <span>Departure Date:</span><span>{flights.departure_date}</span>
        </div>
        <div className="detail-line">
          <span>Departure Time:</span><span>{formattedDepartureTime}</span>
        </div>
        <div className="detail-line">
          <span>Departure Airport:</span><span>{flights.origin_airport}</span>
        </div>
        <div className="detail-line">
          <span>Departure Terminal:</span><span>{flights.departure_terminal}</span>
        </div>
        <div className="detail-line">
          <span>Flight Number:</span><span>{flights.flight_number}</span>
        </div>
        <div className="detail-line">
          <span>Aircraft ID:</span><span>{flights.aircraft_id}</span>
        </div>
        <div className="detail-line">
          <span>Flight Duration:</span><span>{formattedFlightDuration}</span>
        </div>
        <div className="detail-line">
          <span>Wi-Fi Available:</span><span>{flights.wifi_available}</span>
        </div>
        <div className="detail-line">
          <span>Arrival Terminal:</span><span>{flights.arrival_terminal}</span>
        </div>
        <div className="detail-line">
          <span>Destination Airport:</span><span>{flights.destination_airport}</span>
        </div>
        <div className="detail-line">
          <span>Arrival Time:</span><span>{formattedArrivalTime}</span>
        </div>
        <div className="detail-line">
          <span>Arrival Date:</span><span>{flights.arrival_date}</span>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </article>
  )
}

export default FlightDetailModal;
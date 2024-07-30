import { useState } from "react"; 
import '../styles/FlightDetailModal.css';

const FlightDetailModal = (props) => {

  const {flights, onClickFlight} = props;

  const [close, setClose] = useState(false)

  const onClose = () => {
    setClose(!close)
    onClickFlight()
  }

  return(
    <article className="modal-overlay">
      <div className="modal-content">
      <h3>Flight Details</h3>
      <span>{flights.departure_date}</span>
      <span>{flights.departure_time}</span>
      <span>{flights.origin_airport}</span>
      <span>{flights.origin_terminal}</span>
      <span>{flights.flight_number}</span>
      <span>{flights.aircraft_number}</span>
      <span>{flights.flight_duration}</span>
      <span>{flights.wifi_available}</span>
      <span>{flights.destination_terminal}</span>
      <span>{flights.destination_airport}</span>
      <span>{flights.arrival_time}</span>
      <span>{flights.arrival_date}</span>
      <button onClick={onClose}>Close</button>
      </div>
    </article>
  )
}

export default FlightDetailModal;
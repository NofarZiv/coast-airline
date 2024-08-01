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
      <span>{flights.departure_date}</span>
      <span>{formattedDepartureTime}</span>
      <span>{flights.origin_airport}</span>
      <span>{flights.departure_terminal}</span>
      <span>{flights.flight_number}</span>
      <span>{flights.aircraft_id}</span>
      <span>{formattedFlightDuration}</span>
      <span>{flights.wifi_available}</span>
      <span>{flights.arrival_terminal}</span>
      <span>{flights.destination_airport}</span>
      <span>{formattedArrivalTime}</span>
      <span>{flights.arrival_date}</span>
      <button onClick={onClose}>Close</button>
      </div>
    </article>
  )
}

export default FlightDetailModal;
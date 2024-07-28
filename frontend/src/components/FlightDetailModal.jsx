import { useState } from "react"; 
import '../styles/FlightDetailModal.css';

const FlightDetailModal = (props) => {

  const {searchResult, onClickFlight} = props;

  const [close, setClose] = useState(false)

  const onClose = () => {
    setClose(!close)
    onClickFlight()
  }

  return(
    <article className="modal-overlay">
      <div className="modal-content">
      <h3>Flight Details</h3>
      <span>{searchResult.departure_date}</span>
      <span>{searchResult.departure_time}</span>
      <span>{searchResult.origin_airport}</span>
      <span>{searchResult.origin_terminal}</span>
      <span>{searchResult.flight_number}</span>
      <span>{searchResult.aircraft_number}</span>
      <span>{searchResult.flight_duration}</span>
      <span>{searchResult.wifi_available}</span>
      <span>{searchResult.destination_terminal}</span>
      <span>{searchResult.destination_airport}</span>
      <span>{searchResult.arrival_time}</span>
      <span>{searchResult.arrival_date}</span>
      <button onClick={onClose}>Close</button>
      </div>
    </article>
  )
}

export default FlightDetailModal;
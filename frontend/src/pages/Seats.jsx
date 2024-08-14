import Seat from "../components/Seat";
import { useState } from "react";
import '../styles/Seats.css';


const Seats = (props) => {

  const { setSeatDeparture, setSeatReturn, handleSeatsSelection, seatDeparture, seatReturn } = props;

  const [isDeparture, setIsDeparture] = useState(true);
 
  
  const onSelectedSeat = (seat) => {

    if (isDeparture) {
      setSeatDeparture((prevSeats) => {
        if (prevSeats.includes(seat)) {
          return prevSeats.filter((s) => s !== seat);
        } else {
          return [...prevSeats, seat];
        }
      });
    } else {
      setSeatReturn((prevSeats) => {
        if (prevSeats.includes(seat)) {
          return prevSeats.filter((s) => s !== seat);
        } else {
          return [...prevSeats, seat];
        }
      });
    }
  };

  
  const handleToggle = () => {
    setIsDeparture(!isDeparture);
  }
  

  return(
    <div className="seat-selection-container">
      <div className="buttons-container">
      <div id="cloud1"></div>
      <div id="cloud2"></div>
      <div className="seats-button-group">
      <button className={`seats-button ${isDeparture ? 'selected' : ''}`} onClick={handleToggle} disabled={isDeparture}>Departure</button>
      <button className={`seats-button ${!isDeparture ? 'selected' : ''}`} onClick={handleToggle} disabled={!isDeparture}>Return</button>
      </div>
      <Seat
        key={isDeparture ? 'departure' : 'return'}
        onSelectedSeat={onSelectedSeat} selectedSeat={isDeparture ? seatDeparture : seatReturn}
      />
      </div>
      <div id="cloud1"></div>
      <div id="cloud2"></div>
      <div className="seats-button-container">
      <button className="button" onClick={handleSeatsSelection}>Next</button>
      </div>
    </div>
  )
}


export default Seats;
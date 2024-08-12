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
      <button onClick={handleToggle} disabled={isDeparture}>Departure</button>
      <button onClick={handleToggle} disabled={!isDeparture}>Return</button>
      </div>
      <Seat
        key={isDeparture ? 'departure' : 'return'}
        onSelectedSeat={onSelectedSeat} selectedSeat={isDeparture ? seatDeparture : seatReturn}
      />
      <button className="button" onClick={handleSeatsSelection}>Next</button>
    </div>
  )
}


export default Seats;
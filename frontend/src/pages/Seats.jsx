import Seat from "../components/Seat";
import { useState } from "react";


const Seats = (props) => {

  const { setSeatDeparture, setSeatReturn, handleSeatsSelection } = props;

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
    <div>
      <button onClick={handleToggle} disabled={isDeparture}>Departure</button>
      <button onClick={handleToggle} disabled={!isDeparture}>Return</button>
      <Seat
        key={isDeparture ? 'departure' : 'return'}
        onSelectedSeat={onSelectedSeat}
      />
      <button onClick={handleSeatsSelection}>Next</button>
    </div>
  )
}


export default Seats;
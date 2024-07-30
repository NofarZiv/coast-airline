import Seat from "../components/Seat";

const Seats = (props) => {

  const { onSelectedSeat } = props;


  return(
    <div>
      <button>Departure</button>
      <button>Return</button>
      <Seat onSelectedSeat={onSelectedSeat} />
      <button>Next</button>
    </div>
  )
}


export default Seats;
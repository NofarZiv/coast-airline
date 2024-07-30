import TripSum from "../components/TripSum";
import PaymentSum from "../components/PaymentSum"; 

const Summary = (props) => {

  const { departureFlight, returnFlight, handleConfirmBooking, searchData  } = props;


  return(
    <div>
      <h2>Trip Summary</h2>
      <TripSum flight={departureFlight} isDeparture={true}/>
      <TripSum flight={returnFlight} isDeparture={false}/>
      <PaymentSum searchData={searchData} departureFlightPrice={departureFlight.price} returnFlightPrice={returnFlight.price} />
      <button onClick={handleConfirmBooking }>Next</button>
    </div>
  )
}


export default Summary;
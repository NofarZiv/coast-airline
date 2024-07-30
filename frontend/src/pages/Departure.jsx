import FlightDetailsList from "../components/FlightDetailsList";

const Departure = (props) => {

  const { searchResult, onSelectFlight } = props;

  const { flights_to_destination } = searchResult;

  return(
    <>
    <h2>Departure Flights</h2>
    <FlightDetailsList flights={flights_to_destination} onSelectFlight ={onSelectFlight } />
    <button>Next</button>
    </>
  )
}


export default Departure;
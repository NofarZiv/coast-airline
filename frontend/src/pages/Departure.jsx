import FlightDetailsList from "../components/FlightDetailsList";
import { Link } from "react-router-dom";

const Departure = (props) => {

  const { searchResult, onSelectFlight } = props;

  const { flights_to_destination } = searchResult;

  return(
    <>
    <h2>Departure Flights</h2>
    <FlightDetailsList flights={flights_to_destination} onSelectFlight ={onSelectFlight } />
    <Link to="/return">
    <button>Next</button>
    </Link>
    </>
  )
}


export default Departure;
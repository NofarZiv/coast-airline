import FlightDetailsList from "../components/FlightDetailsList";
import { Link } from "react-router-dom";

const Return = (props) => {

  const { searchResult, onSelectFlight } = props;

  const { flights_from_destination } = searchResult;

  return(
    <>
    <h2>Return Flights</h2>
    <FlightDetailsList flights={flights_from_destination} onSelectFlight={onSelectFlight } />
    <Link to="/form">
    <button>Next</button>
    </Link>
    </>
  )
}


export default Return;
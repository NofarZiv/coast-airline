import FlightDetailsList from "../components/FlightDetailsList";
import { Link } from "react-router-dom";
import '../styles/Return.css';

const Return = (props) => {

  const { searchResult, onSelectFlight } = props;

  const { flights_from_destination } = searchResult;

  return(
    <>
    <div className="return">
    <h2>Returning Flights</h2>
    <FlightDetailsList flights={flights_from_destination} onSelectFlight={onSelectFlight } />
    <Link to="/form">
    <button className="link-button">Next</button>
    </Link>
    </div>
    </>
  )
}


export default Return;
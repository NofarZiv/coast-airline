import FlightDetailsList from "../components/FlightDetailsList";
import { Link } from "react-router-dom";
import '../styles/Departure.css';

const Departure = (props) => {

  const { searchResult, onSelectFlight } = props;

  const { flights_to_destination } = searchResult;

  return(
    <>
    <div className="departure">
    <h2>Departing Flights</h2>
    <FlightDetailsList flights={flights_to_destination} onSelectFlight ={onSelectFlight } />
    <Link to="/return" >
    <button className="link-button">Next</button>
    </Link>
    </div>
    
    </>
  )
}


export default Departure;
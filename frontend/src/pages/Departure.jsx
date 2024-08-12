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
      <div className="return-link-container">
        <Link to="/return" >
          <button className="depature-link-button">Next</button>
        </Link>
      </div>
    </div>
    
    </>
  )
}


export default Departure;
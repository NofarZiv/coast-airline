import FlightDetailsList from "../components/FlightDetailsList";

const Return = (props) => {

  const { searchResult, onSelectFlight } = props;

  const { flights_from_destination } = searchResult;

  return(
    <>
    <h2>Return Flights</h2>
    <FlightDetailsList flights={flights_from_destination} onSelectFlight={onSelectFlight } />
    <button>Next</button>
    </>
  )
}


export default Return;
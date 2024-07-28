import FlightDetailsList from "../components/FlightDetailsList";

const Departure = (props) => {

  const {searchResult, onFlight} = props;

  return(
    <>
    <FlightDetailsList searchResult={searchResult} onFlight={onFlight}/>
    <button>Next</button>
    </>
  )
}


export default Departure;
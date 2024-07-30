

const PaymentSum = (props) => {

  const { searchData, departureFlightPrice, returnFlightPrice } = props;

  const totalPassengers = searchData.adult + searchData.child + searchData.pet;
  const total = totalPassengers * (departureFlightPrice + returnFlightPrice);

  
  return(
    <div>
      <p>Number of Adults: {searchData.adult}</p>
      <p>Number of Children: {searchData.child}</p>
      <p>Number of Pets: {searchData.pet}</p>
      <p>Total number of passengers: {totalPassengers}</p>
      <p>Price per passenger for departure flight: {departureFlightPrice}</p>
      <p>Price per passenger for return flight: {returnFlightPrice}</p>
      <p>Total for trip: {total} </p>
    </div>
  )
}


export default PaymentSum;
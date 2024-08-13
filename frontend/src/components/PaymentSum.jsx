import '../styles/PaymentSum.css';

const PaymentSum = (props) => {

  const { searchData, departureFlightPrice, returnFlightPrice, totalPassengers, total } = props;


  
  return(
    <div className="payment-summary-container">
      <h2 className="payment-summary-title">Price Breakdown</h2>
      <div className="payment-summary-content">
        <div className="payment-summary-left">
          <p>Number of Adults: <span>{searchData.adult}</span></p>
          <p>Number of Children: <span>{searchData.child}</span></p>
          <p>Number of Pets: <span>{searchData.pet}</span></p>
          <p>Total number of passengers: <span>{totalPassengers}</span></p>
        </div>
        <div className="payment-summary-right">
          <p>Price per passenger for departure flight: <span>${departureFlightPrice}</span></p>
          <p>Price per passenger for return flight: <span>${returnFlightPrice}</span></p>
        </div>
      </div>
      <div className="payment-summary-total">
        Total for trip: <span>${total}</span>
      </div>
    </div>
  )
}


export default PaymentSum;
import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Form from './pages/Form';
import Payment from './pages/Payment';
import Departure from './pages/Departure';
import Return from './pages/Return';
import Summary from './pages/Summary';
import OrderConfirmation from './pages/OrderConfirmation';
import Seats from './pages/Seats';
import axios from 'axios';
import './App.css'


function App() {

  const [searchResult, setSearchResult] = useState();
  const [searchData, setSearchData] = useState();
  const [selectedDepartureFlight, setSelectedDepartureFlight] = useState(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState(null);
  const [seatDeparture, setSeatDeparture] = useState([]);
  const [seatReturn, setSeatReturn] = useState([]);
  const [email, setEmail] = useState();

  console.log(seatDeparture)
  console.log(seatReturn)
  
  const navigate = useNavigate()


  const onSubmitSearch = async (data) => {
    console.log(data)
    setSearchData(data)
    try {
    const res = await axios.get('/api/flights', { params: data })
      setSearchResult(res.data)
      console.log(res.data)
      navigate('/departure')
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  }

  const handleConfirmBooking  = async () => {
    try {
      await axios.post('/api/bookings', {
        departureFlightNumber: selectedDepartureFlight.flight_number,
        returnFlightNumber: selectedReturnFlight.flight_number
      });
      alert('Booking confirmed!');
    } catch (error) {
      console.error('Error confirming booking:', error);
    }
  }

  const handleSeatsSelection = async () => {
    try {
      await axios.post('/api/seat-selection', {
        seatDeparture,
        seatReturn
      });
      
    } catch (error) {
      console.error('Error submitting seat selection:', error);
      
    }
  };


  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home onSubmitSearch={onSubmitSearch}/>} />
        <Route path="/form" element={<Form searchData={searchData} email={setEmail} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/departure" element={<Departure searchResult={searchResult} onSelectFlight={setSelectedDepartureFlight} />} />
        <Route path="/return" element={<Return searchResult={searchResult} onSelectFlight={setSelectedReturnFlight} />} />
        <Route path="/summary" element={<Summary departureFlight={selectedDepartureFlight} returnFlight={selectedReturnFlight} handleConfirmBooking={handleConfirmBooking } searchData={searchData}/>} />
        <Route path="/order-confirmation" element={<OrderConfirmation email={email} />} />
        <Route path="/seats" element={<Seats setSeatDeparture={setSeatDeparture} setSeatReturn={setSeatReturn} handleSeatsSelection={handleSeatsSelection} />} />
      </Routes>
    </>
  )
}

export default App;

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
  const [formData, setFormData] = useState()

  console.log(formData)
  console.log(email)
  
  const navigate = useNavigate()


  const onSubmitSearch = async (data) => {
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

  const onSubmitForm = async (data) => {
    setFormData(data)
    setEmail(data.email_address)
    try {
      await axios.post('/api/forms', data)
      navigate('/seats')
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  }

  const handleConfirmBooking  = async () => {
    try {
      await axios.post('/api/bookings', {
        departureFlightNumber: selectedDepartureFlight.id,
        returnFlightNumber: selectedReturnFlight.id
      });
      alert('Booking confirmed!');
    } catch (error) {
      console.error('Error confirming booking:', error);
    }
  }

  const handleSeatsSelection = async () => {
    console.log(formData)
    let updatedFormData = { ...formData };

    if (formData.pets && formData.pets.length > 0) {
    const updatedPets = formData.pets.map((pet, index) => {
    const associatedPassenger = formData.adults[index % formData.adults.length]; 
    return {
      ...pet,
      passenger_passport_number: associatedPassenger.passport, 
    };
  });

   updatedFormData = {
    ...formData,
    pets: updatedPets,
  };
}

    try {
      await axios.post('/api/seats', {
        seatDeparture,
        seatReturn,
        passenger: updatedFormData,
        departure_flight_id: selectedDepartureFlight.id,
        return_flight_id: selectedReturnFlight.id,
        departure_aircrart_id: selectedDepartureFlight.aircraft_id,
        return_aircraft_id: selectedReturnFlight.aircraft_id
      });
      navigate('/summary')
    } catch (error) {
      console.error('Error submitting seat selection:', error);
    }
  };

  const totalPassengers = searchData ? (searchData.adult + searchData.child + searchData.pet) : 0;
  const total = searchData && selectedDepartureFlight && selectedReturnFlight ? 
    totalPassengers * (selectedDepartureFlight.flight_price + selectedReturnFlight.flight_price) : 0;

    const sendEmail = async () => {
      console.log(formData);
      await axios.post("/api/send_email", {
        formData, 
        selectedDepartureFlight, 
        selectedReturnFlight,
        total,
        seatDeparture,
        seatReturn
      });
    };


  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home onSubmitSearch={onSubmitSearch}/>} />
        <Route path="/form" element={<Form searchData={searchData} onSubmitForm={onSubmitForm} />} />
        <Route path="/payment" element={<Payment total={total} />} />
        <Route path="/departure" element={<Departure searchResult={searchResult} onSelectFlight={setSelectedDepartureFlight} />} />
        <Route path="/return" element={<Return searchResult={searchResult} onSelectFlight={setSelectedReturnFlight} />} />
        <Route path="/summary" element={<Summary departureFlight={selectedDepartureFlight} returnFlight={selectedReturnFlight} handleConfirmBooking={handleConfirmBooking } searchData={searchData} totalPassengers={totalPassengers} total={total} sendEmail={sendEmail} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation email={email} sendEmail={sendEmail} />} />
        <Route path="/seats" element={<Seats setSeatDeparture={setSeatDeparture} setSeatReturn={setSeatReturn} handleSeatsSelection={handleSeatsSelection} seatDeparture={seatDeparture} seatReturn={seatReturn} />} />
      </Routes>
    </>
  )
}

export default App;

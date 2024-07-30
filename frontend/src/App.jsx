import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Form from './pages/Form';
import Payment from './pages/Payment';
import Departure from './pages/Departure';
import OrderConfirmation from './pages/OrderConfirmation';
import axios from 'axios';
import './App.css'


function App() {

  const [searchResult, setSearchResult] = useState([{
    aircraft_id: 2,
    flight_number: 'AC102',
    aircraft_number: 'Boeing 777-300ER',
    pilot_name: 'Captain Jane Doe',
    departure_date: '2024-08-02',
    departure_time: '10:00:00',
    origin_airport: 'Toronto',
    origin_terminal: '3A',
    destination_airport: 'Paris',
    destination_terminal: '2B',
    arrival_date: '2024-08-02',
    arrival_time: '11:30:00',
    flight_duration: '1.5 hours',
    wifi_available: false,
    price: 150.00}, {
      aircraft_id: 1,
      flight_number: 'AC101',
      aircraft_number: 'Boeing 737-400BR',
      pilot_name: 'Captain John Smith',
      departure_date: '2024-08-01',
      departure_time: '08:00:00',
      origin_airport: 'Vancouver',
      origin_terminal: '1',
      destination_airport: 'Amsterdam',
      destination_terminal: '10X',
      arrival_date: '2024-08-01',
      arrival_time: '14:00:00',
      flight_duration: '6 hours',
      wifi_available: true,
      price: 350.00}]);
  const [searchData, setSearchData] = useState();

  const [email, setEmail] = useState();


  const onSubmitSearch = async (data) => {
    console.log(data)
    setSearchData(data)
    try {
    const res = await axios.get('/departure', data)
      setSearchResult(res)
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  }

  const onFlight = async (flightNumber) => {
    try {
    const res = await axios.post('/', {flightNumber})
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  }


  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home onSubmitSearch={onSubmitSearch}/>} />
        <Route path="/form" element={<Form searchData={searchData} email={setEmail} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/departure" element={<Departure searchResult={searchResult} onFlight={onFlight} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation email={email} />} />
      </Routes>
    </>
  )
}

export default App;

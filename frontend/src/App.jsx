import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Form from './pages/Form';
import axios from 'axios';
import './App.css'

function App() {

  const [searchResult, setSearchResult] = useState();
  const [searchData, setSearchData] = useState();


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


  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home onSubmitSearch={onSubmitSearch}/>} />
        <Route path="/form" element={<Form searchData={searchData}/>} />
      </Routes>
    </>
  )
}

export default App;

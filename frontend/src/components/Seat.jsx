import '../styles/Seat.css';

const Seat = (props) => {

  const { onSelectedSeat, selectedSeat } = props;


  return(
    <div className="plane">
  <div className="cockpit">
    <h1>Coast Airline</h1>
  </div>
  <div className="exit exit--front fuselage">
    
  </div>
  <ol className="cabin fuselage">
    <li className="row row--1">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("1A")} onClick={() => onSelectedSeat('1A')} type="checkbox" id="1A" />
          <label htmlFor="1A">1A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("1B")} onClick={() => onSelectedSeat('1B')} type="checkbox" id="1B" />
          <label htmlFor="1B">1B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("1C")} onClick={() => onSelectedSeat('1C')} type="checkbox" id="1C" />
          <label htmlFor="1C">1C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("1D")} onClick={() => onSelectedSeat('1D')} type="checkbox" disabled id="1D" />
          <label htmlFor="1D">Occupied</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("1E")} onClick={() => onSelectedSeat('1E')} type="checkbox" id="1E" />
          <label htmlFor="1E">1E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("1F")} onClick={() => onSelectedSeat('1F')} type="checkbox" id="1F" />
          <label htmlFor="1F">1F</label>
        </li>
      </ol>
    </li>
    <li className="row row--2">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("2A")} onClick={() => onSelectedSeat('2A')} type="checkbox" id="2A" />
          <label htmlFor="2A">2A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("2B")} onClick={() => onSelectedSeat('2B')} type="checkbox" id="2B" />
          <label htmlFor="2B">2B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("2C")} onClick={() => onSelectedSeat('2C')} type="checkbox" id="2C" />
          <label htmlFor="2C">2C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("2D")} onClick={() => onSelectedSeat('2D')} type="checkbox" id="2D" />
          <label htmlFor="2D">2D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("2E")} onClick={() => onSelectedSeat('2E')} type="checkbox" id="2E" />
          <label htmlFor="2E">2E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("2F")} onClick={() => onSelectedSeat('2F')} type="checkbox" id="2F" />
          <label htmlFor="2F">2F</label>
        </li>
      </ol>
    </li>
    <li className="row row--3">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("3A")} onClick={() => onSelectedSeat('3A')} type="checkbox" id="3A" />
          <label htmlFor="3A">3A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("3B")} onClick={() => onSelectedSeat('3B')} type="checkbox" id="3B" />
          <label htmlFor="3B">3B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("3C")} onClick={() => onSelectedSeat('3C')} type="checkbox" id="3C" />
          <label htmlFor="3C">3C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("3D")} onClick={() => onSelectedSeat('3D')} type="checkbox" id="3D" />
          <label htmlFor="3D">3D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("3E")} onClick={() => onSelectedSeat('3E')} type="checkbox" id="3E" />
          <label htmlFor="3E">3E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("3F")} onClick={() => onSelectedSeat('3F')} type="checkbox" id="3F" />
          <label htmlFor="3F">3F</label>
        </li>
      </ol>
    </li>
    <li className="row row--4">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("4A")} onClick={() => onSelectedSeat('4A')} type="checkbox" id="4A" />
          <label htmlFor="4A">4A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("4B")} onClick={() => onSelectedSeat('4B')} type="checkbox" id="4B" />
          <label htmlFor="4B">4B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("4C")} onClick={() => onSelectedSeat('4C')} type="checkbox" id="4C" />
          <label htmlFor="4C">4C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("4D")} onClick={() => onSelectedSeat('4D')} type="checkbox" id="4D" />
          <label htmlFor="4D">4D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("4E")} onClick={() => onSelectedSeat('4E')} type="checkbox" id="4E" />
          <label htmlFor="4E">4E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("4F")} onClick={() => onSelectedSeat('4F')} type="checkbox" id="4F" />
          <label htmlFor="4F">4F</label>
        </li>
      </ol>
    </li>
    <li className="row row--5">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("5A")} onClick={() => onSelectedSeat('5A')} type="checkbox" id="5A" />
          <label htmlFor="5A">5A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("5B")} onClick={() => onSelectedSeat('5B')} type="checkbox" id="5B" />
          <label htmlFor="5B">5B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("5C")} onClick={() => onSelectedSeat('5C')} type="checkbox" id="5C" />
          <label htmlFor="5C">5C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("5D")} onClick={() => onSelectedSeat('5D')} type="checkbox" id="5D" />
          <label htmlFor="5D">5D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("5E")} onClick={() => onSelectedSeat('5E')} type="checkbox" id="5E" />
          <label htmlFor="5E">5E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("5F")} onClick={() => onSelectedSeat('5F')} type="checkbox" id="5F" />
          <label htmlFor="5F">5F</label>
        </li>
      </ol>
    </li>
    <li className="row row--6">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("6A")} onClick={() => onSelectedSeat('6A')} type="checkbox" id="6A" />
          <label htmlFor="6A">6A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("6B")} onClick={() => onSelectedSeat('6B')} type="checkbox" id="6B" />
          <label htmlFor="6B">6B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("6C")} onClick={() => onSelectedSeat('6C')} type="checkbox" id="6C" />
          <label htmlFor="6C">6C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("6D")} onClick={() => onSelectedSeat('6D')} type="checkbox" id="6D" />
          <label htmlFor="6D">6D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("6E")} onClick={() => onSelectedSeat('6E')} type="checkbox" id="6E" />
          <label htmlFor="6E">6E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("6F")} onClick={() => onSelectedSeat('6F')} type="checkbox" id="6F" />
          <label htmlFor="6F">6F</label>
        </li>
      </ol>
    </li>
    <li className="row row--7">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("7A")} onClick={() => onSelectedSeat('7A')} type="checkbox" id="7A" />
          <label htmlFor="7A">7A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("7B")} onClick={() => onSelectedSeat('7B')} type="checkbox" id="7B" />
          <label htmlFor="7B">7B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("7C")} onClick={() => onSelectedSeat('7C')} type="checkbox" id="7C" />
          <label htmlFor="7C">7C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("7D")} onClick={() => onSelectedSeat('7D')} type="checkbox" id="7D" />
          <label htmlFor="7D">7D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("7E")} onClick={() => onSelectedSeat('7E')} type="checkbox" id="7E" />
          <label htmlFor="7E">7E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("7F")} onClick={() => onSelectedSeat('7F')} type="checkbox" id="7F" />
          <label htmlFor="7F">7F</label>
        </li>
      </ol>
    </li>
    <li className="row row--8">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("8A")} onClick={() => onSelectedSeat('8A')} type="checkbox" id="8A" />
          <label htmlFor="8A">8A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("8B")} onClick={() => onSelectedSeat('8B')} type="checkbox" id="8B" />
          <label htmlFor="8B">8B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("8C")} onClick={() => onSelectedSeat('8C')} type="checkbox" id="8C" />
          <label htmlFor="8C">8C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("8D")} onClick={() => onSelectedSeat('8D')} type="checkbox" id="8D" />
          <label htmlFor="8D">8D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("8E")} onClick={() => onSelectedSeat('8E')} type="checkbox" id="8E" />
          <label htmlFor="8E">8E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("8F")} onClick={() => onSelectedSeat('8F')} type="checkbox" id="8F" />
          <label htmlFor="8F">8F</label>
        </li>
      </ol>
    </li>
    <li className="row row--9">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("9A")} onClick={() => onSelectedSeat('9A')} type="checkbox" id="9A" />
          <label htmlFor="9A">9A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("9B")} onClick={() => onSelectedSeat('9B')} type="checkbox" id="9B" />
          <label htmlFor="9B">9B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("9C")} onClick={() => onSelectedSeat('9C')} type="checkbox" id="9C" />
          <label htmlFor="9C">9C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("9D")} onClick={() => onSelectedSeat('9D')} type="checkbox" id="9D" />
          <label htmlFor="9D">9D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("9E")} onClick={() => onSelectedSeat('9E')} type="checkbox" id="9E" />
          <label htmlFor="9E">9E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("9F")} onClick={() => onSelectedSeat('9F')} type="checkbox" id="9F" />
          <label htmlFor="9F">9F</label>
        </li>
      </ol>
    </li>
    <li className="row row--10">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("10A")} onClick={() => onSelectedSeat('10A')} type="checkbox" id="10A" />
          <label htmlFor="10A">10A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("10B")} onClick={() => onSelectedSeat('10B')} type="checkbox" id="10B" />
          <label htmlFor="10B">10B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("10C")} onClick={() => onSelectedSeat('10C')} type="checkbox" id="10C" />
          <label htmlFor="10C">10C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("10D")} onClick={() => onSelectedSeat('10D')} type="checkbox" id="10D" />
          <label htmlFor="10D">10D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("10E")} onClick={() => onSelectedSeat('10E')} type="checkbox" id="10E" />
          <label htmlFor="10E">10E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("10F")} onClick={() => onSelectedSeat('10F')} type="checkbox" id="10F" />
          <label htmlFor="10F">10F</label>
        </li>
      </ol>
    </li>
    <li className="row row--11">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("11A")} onClick={() => onSelectedSeat('11A')} type="checkbox" id="11A" />
          <label htmlFor="11A">11A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("11B")} onClick={() => onSelectedSeat('11B')} type="checkbox" id="11B" />
          <label htmlFor="11B">11B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("11C")} onClick={() => onSelectedSeat('11C')} type="checkbox" id="11C" />
          <label htmlFor="11C">11C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("11D")} onClick={() => onSelectedSeat('11D')} type="checkbox" id="2D" />
          <label htmlFor="11D">11D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("11E")} onClick={() => onSelectedSeat('11E')} type="checkbox" id="11E" />
          <label htmlFor="11E">11E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("11F")} onClick={() => onSelectedSeat('11F')} type="checkbox" id="11F" />
          <label htmlFor="11F">11F</label>
        </li>
      </ol>
    </li>
    <li className="row row--12">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("12A")} onClick={() => onSelectedSeat('12A')} type="checkbox" id="12A" />
          <label htmlFor="12A">12A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("12B")} onClick={() => onSelectedSeat('12B')} type="checkbox" id="12B" />
          <label htmlFor="12B">12B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("12C")} onClick={() => onSelectedSeat('12C')} type="checkbox" id="12C" />
          <label htmlFor="12C">12C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("12D")} onClick={() => onSelectedSeat('12D')} type="checkbox" id="12D" />
          <label htmlFor="12D">12D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("12E")} onClick={() => onSelectedSeat('12E')} type="checkbox" id="12E" />
          <label htmlFor="12E">12E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("12F")} onClick={() => onSelectedSeat('12F')} type="checkbox" id="12F" />
          <label htmlFor="12F">12F</label>
        </li>
      </ol>
    </li>
    <li className="row row--13">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("13A")} onClick={() => onSelectedSeat('13A')} type="checkbox" id="13A" />
          <label htmlFor="13A">13A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("13B")} onClick={() => onSelectedSeat('13B')} type="checkbox" id="13B" />
          <label htmlFor="13B">13B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("13C")} onClick={() => onSelectedSeat('13C')} type="checkbox" id="13C" />
          <label htmlFor="13C">13C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("13D")} onClick={() => onSelectedSeat('13D')} type="checkbox" id="13D" />
          <label htmlFor="13D">13</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("13E")} onClick={() => onSelectedSeat('13E')} type="checkbox" id="13E" />
          <label htmlFor="13E">13E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("13F")} onClick={() => onSelectedSeat('13F')} type="checkbox" id="13F" />
          <label htmlFor="13F">13F</label>
        </li>
      </ol>
    </li>
    <li className="row row--14">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("14A")} onClick={() => onSelectedSeat('14A')} type="checkbox" id="14A" />
          <label htmlFor="14A">14A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("14B")} onClick={() => onSelectedSeat('14B')} type="checkbox" id="14B" />
          <label htmlFor="14B">14B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("14C")} onClick={() => onSelectedSeat('14C')} type="checkbox" id="14C" />
          <label htmlFor="14C">14C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("14D")} onClick={() => onSelectedSeat('14D')} type="checkbox" id="14D" />
          <label htmlFor="14D">14D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("14E")} onClick={() => onSelectedSeat('14E')} type="checkbox" id="14E" />
          <label htmlFor="14E">14E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("14F")} onClick={() => onSelectedSeat('14F')} type="checkbox" id="14F" />
          <label htmlFor="14F">14F</label>
        </li>
      </ol>
    </li>
    <div className="exit exit--front fuselage">
    
  </div>
    <li className="row row--15">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("15A")} onClick={() => onSelectedSeat('15A')} type="checkbox" id="15A" />
          <label htmlFor="15A">15A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("15B")} onClick={() => onSelectedSeat('15B')} type="checkbox" id="15B" />
          <label htmlFor="15B">15B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("15C")} onClick={() => onSelectedSeat('15C')} type="checkbox" id="15C" />
          <label htmlFor="15C">15C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("15D")} onClick={() => onSelectedSeat('15D')} type="checkbox" id="15D" />
          <label htmlFor="15D">15D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("15E")} onClick={() => onSelectedSeat('15E')} type="checkbox" id="15E" />
          <label htmlFor="15E">15E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("15F")} onClick={() => onSelectedSeat('15F')} type="checkbox" id="15F" />
          <label htmlFor="15F">15F</label>
        </li>
      </ol>
    </li>
    <li className="row row--16">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("16A")} onClick={() => onSelectedSeat('16A')} type="checkbox" id="16A" />
          <label htmlFor="16A">16A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("16B")} onClick={() => onSelectedSeat('16B')} type="checkbox" id="16B" />
          <label htmlFor="16B">16B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("16C")} onClick={() => onSelectedSeat('16C')} type="checkbox" id="16C" />
          <label htmlFor="16C">16C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("16D")} onClick={() => onSelectedSeat('16D')} type="checkbox" id="16D" />
          <label htmlFor="16D">16D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("16E")} onClick={() => onSelectedSeat('16E')} type="checkbox" id="16E" />
          <label htmlFor="16E">16E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("16F")} onClick={() => onSelectedSeat('16F')} type="checkbox" id="16F" />
          <label htmlFor="16F">16F</label>
        </li>
      </ol>
    </li>
    <li className="row row--17">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("17A")} onClick={() => onSelectedSeat('17A')} type="checkbox" id="17A" />
          <label htmlFor="17A">17A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("17B")} onClick={() => onSelectedSeat('17B')} type="checkbox" id="17B" />
          <label htmlFor="17B">17B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("17C")} onClick={() => onSelectedSeat('17C')} type="checkbox" id="17C" />
          <label htmlFor="17C">17C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("17D")} onClick={() => onSelectedSeat('17D')} type="checkbox" id="17D" />
          <label htmlFor="17D">17D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("17E")} onClick={() => onSelectedSeat('17E')} type="checkbox" id="17E" />
          <label htmlFor="17E">17E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("17F")} onClick={() => onSelectedSeat('17F')} type="checkbox" id="17F" />
          <label htmlFor="17F">17F</label>
        </li>
      </ol>
    </li>
    <li className="row row--18">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("18A")} onClick={() => onSelectedSeat('18A')} type="checkbox" id="18A" />
          <label htmlFor="18A">18A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("18B")} onClick={() => onSelectedSeat('18B')} type="checkbox" id="18B" />
          <label htmlFor="18B">18B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("18C")} onClick={() => onSelectedSeat('18C')} type="checkbox" id="18C" />
          <label htmlFor="18C">18C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("18D")} onClick={() => onSelectedSeat('18D')} type="checkbox" id="18D" />
          <label htmlFor="18D">18D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("18E")} onClick={() => onSelectedSeat('18E')} type="checkbox" id="18E" />
          <label htmlFor="18E">18E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("18F")} onClick={() => onSelectedSeat('18F')} type="checkbox" id="18F" />
          <label htmlFor="18F">18F</label>
        </li>
      </ol>
    </li>
    <li className="row row--19">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("19A")} onClick={() => onSelectedSeat('19A')} type="checkbox" id="19A" />
          <label htmlFor="19A">19A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("19B")} onClick={() => onSelectedSeat('19B')} type="checkbox" id="19B" />
          <label htmlFor="19B">19B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("19C")} onClick={() => onSelectedSeat('19C')} type="checkbox" id="19C" />
          <label htmlFor="19C">19C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("19D")} onClick={() => onSelectedSeat('19D')} type="checkbox" id="19D" />
          <label htmlFor="19D">19D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("19E")} onClick={() => onSelectedSeat('19E')} type="checkbox" id="19E" />
          <label htmlFor="19E">19E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("19F")} onClick={() => onSelectedSeat('19F')} type="checkbox" id="19F" />
          <label htmlFor="19F">19F</label>
        </li>
      </ol>
    </li>
    <li className="row row--20">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("20A")} onClick={() => onSelectedSeat('20A')} type="checkbox" id="20A" />
          <label htmlFor="20A">20A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("20B")}onClick={() => onSelectedSeat('20B')} type="checkbox" id="20B" />
          <label htmlFor="20B">20B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("20C")} onClick={() => onSelectedSeat('20C')} type="checkbox" id="20C" />
          <label htmlFor="20C">20C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("20D")} onClick={() => onSelectedSeat('20D')} type="checkbox" id="20D" />
          <label htmlFor="20D">20D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("20E")} onClick={() => onSelectedSeat('20E')} type="checkbox" id="20E" />
          <label htmlFor="20E">20E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("20F")} onClick={() => onSelectedSeat('20F')} type="checkbox" id="20F" />
          <label htmlFor="20F">20F</label>
        </li>
      </ol>
    </li>
    <li className="row row--21">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("21A")} onClick={() => onSelectedSeat('21A')} type="checkbox" id="21A" />
          <label htmlFor="21A">21A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("21B")} onClick={() => onSelectedSeat('21B')} type="checkbox" id="21B" />
          <label htmlFor="21B">21B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("21C")} onClick={() => onSelectedSeat('21C')} type="checkbox" id="21C" />
          <label htmlFor="21C">21C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("21D")} onClick={() => onSelectedSeat('21D')} type="checkbox" id="21D" />
          <label htmlFor="21D">21D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("21E")} onClick={() => onSelectedSeat('21E')} type="checkbox" id="21E" />
          <label htmlFor="21E">21E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("21F")} onClick={() => onSelectedSeat('21F')} type="checkbox" id="21F" />
          <label htmlFor="21F">21F</label>
        </li>
      </ol>
    </li>
    <li className="row row--22">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("22A")} onClick={() => onSelectedSeat('22A')} type="checkbox" id="22A" />
          <label htmlFor="22A">22A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("22B")} onClick={() => onSelectedSeat('22B')} type="checkbox" id="22B" />
          <label htmlFor="22B">22B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("22C")} onClick={() => onSelectedSeat('22C')} type="checkbox" id="22C" />
          <label htmlFor="22C">22C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("22D")} onClick={() => onSelectedSeat('22D')} type="checkbox" id="22D" />
          <label htmlFor="22D">22D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("22E")} onClick={() => onSelectedSeat('22E')} type="checkbox" id="22E" />
          <label htmlFor="22E">22E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("22F")} onClick={() => onSelectedSeat('22F')} type="checkbox" id="22F" />
          <label htmlFor="22F">22F</label>
        </li>
      </ol>
    </li>
    <li className="row row--23">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("23A")} onClick={() => onSelectedSeat('23A')} type="checkbox" id="23A" />
          <label htmlFor="23A">23A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("23B")} onClick={() => onSelectedSeat('23B')} type="checkbox" id="23B" />
          <label htmlFor="23B">23B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("23C")} onClick={() => onSelectedSeat('23C')} type="checkbox" id="23C" />
          <label htmlFor="23C">23C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("23D")} onClick={() => onSelectedSeat('23D')} type="checkbox" id="23D" />
          <label htmlFor="23D">23D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("23E")} onClick={() => onSelectedSeat('23E')} type="checkbox" id="23E" />
          <label htmlFor="23E">23E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("23F")} onClick={() => onSelectedSeat('23F')} type="checkbox" id="23F" />
          <label htmlFor="23F">23F</label>
        </li>
      </ol>
    </li>
    <li className="row row--24">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("24A")} onClick={() => onSelectedSeat('24A')} type="checkbox" id="24A" />
          <label htmlFor="24A">24A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("24B")} onClick={() => onSelectedSeat('24B')} type="checkbox" id="24B" />
          <label htmlFor="24B">24B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("24C")} onClick={() => onSelectedSeat('24C')} type="checkbox" id="24C" />
          <label htmlFor="24C">24C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("24D")} onClick={() => onSelectedSeat('24D')} type="checkbox" id="24D" />
          <label htmlFor="24D">24D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("24E")} onClick={() => onSelectedSeat('24E')} type="checkbox" id="24E" />
          <label htmlFor="24E">24E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("24F")} onClick={() => onSelectedSeat('24F')} type="checkbox" id="24F" />
          <label htmlFor="24F">24F</label>
        </li>
      </ol>
    </li>
    <li className="row row--25">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("25A")} onClick={() => onSelectedSeat('25A')} type="checkbox" id="25A" />
          <label htmlFor="25A">25A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("25B")} onClick={() => onSelectedSeat('25B')} type="checkbox" id="25B" />
          <label htmlFor="25B">25B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("25C")} onClick={() => onSelectedSeat('25C')} type="checkbox" id="25C" />
          <label htmlFor="25C">25C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("25D")} onClick={() => onSelectedSeat('25D')} type="checkbox" id="25D" />
          <label htmlFor="25D">25D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("25E")} onClick={() => onSelectedSeat('25E')} type="checkbox" id="25E" />
          <label htmlFor="25E">25E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("25F")} onClick={() => onSelectedSeat('25F')} type="checkbox" id="25F" />
          <label htmlFor="25F">25F</label>
        </li>
      </ol>
    </li>
    <li className="row row--26">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("26A")} onClick={() => onSelectedSeat('26A')} type="checkbox" id="26A" />
          <label htmlFor="26A">26A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("26B")} onClick={() => onSelectedSeat('26B')} type="checkbox" id="26B" />
          <label htmlFor="26B">26B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("26C")} onClick={() => onSelectedSeat('26C')} type="checkbox" id="26C" />
          <label htmlFor="26C">26C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("26D")} onClick={() => onSelectedSeat('26D')} type="checkbox" id="26D" />
          <label htmlFor="26D">26D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("26E")} onClick={() => onSelectedSeat('26E')} type="checkbox" id="26E" />
          <label htmlFor="26E">26E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("26F")} onClick={() => onSelectedSeat('26F')} type="checkbox" id="26F" />
          <label htmlFor="26F">26F</label>
        </li>
      </ol>
    </li>
    <li className="row row--27">
      <ol className="seats" type="A">
        <li className="seat">
          <input checked={selectedSeat.includes("27A")} onClick={() => onSelectedSeat('27A')} type="checkbox" id="27A" />
          <label htmlFor="27A">27A</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("27B")} onClick={() => onSelectedSeat('27B')} type="checkbox" id="27B" />
          <label htmlFor="27B">27B</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("28C")} onClick={() => onSelectedSeat('27C')} type="checkbox" id="27C" />
          <label htmlFor="27C">27C</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("27D")} onClick={() => onSelectedSeat('27D')} type="checkbox" id="27D" />
          <label htmlFor="27D">27D</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("27E")} onClick={() => onSelectedSeat('27E')} type="checkbox" id="27E" />
          <label htmlFor="27E">27E</label>
        </li>
        <li className="seat">
          <input checked={selectedSeat.includes("27F")} onClick={() => onSelectedSeat('27F')} type="checkbox" id="27F" />
          <label htmlFor="27F">27F</label>
        </li>
      </ol>
    </li>
  </ol>
  <div className="exit exit--back fuselage">
    
  </div>
</div>
  )
}



export default Seat;
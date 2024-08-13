import { useState } from "react";
import PassengerModal from "./PassengerModal";

const Select = (props) => {

  const { register, errors, setValue } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onClickPassenger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
    <input className='passenger-button' placeholder="Passenger" onClick={onClickPassenger} >
    </input>
    {isOpen && <PassengerModal onClickPassenger={onClickPassenger} register={register} errors={errors} setValue={setValue} />}
  </div>

  )
}


export default Select;
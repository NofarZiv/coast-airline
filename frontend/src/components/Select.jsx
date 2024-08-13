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
      <button className='passenger-button' onClick={onClickPassenger} > Passenger
      </button>
      {isOpen && <PassengerModal onClickPassenger={onClickPassenger} register={register} errors={errors} setValue={setValue} />}
    </div>

  )
}


export default Select;
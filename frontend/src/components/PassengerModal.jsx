import { useState, useEffect } from "react";
import '../styles/PassengerModal.css';

const PassengerModal = (props) => {

  const {onClickPassenger, register, setValue} = props;

  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [pet, setPet] = useState(0)
  const [close, setClose] = useState(false)

  const onClose = () => {
    setClose(!close)
    onClickPassenger()
  }

  const handleIncrement = (type) => {
    if (type === 'adult') {
      setAdult(adult + 1)
    } else if (type === 'child') {
      setChild(child + 1)
    } else {
      setPet(pet + 1)
    }
  }

  const handleDecrement = (type) => {
    if (type === 'adult' && adult > 1) {
      setAdult(adult - 1)
    } else if (type === 'child' && child > 0) {
      setChild(child - 1)
    } else if (type === 'pet' && pet > 0) {
      setPet(pet - 1)
    }
  }

  useEffect(() => {
    setValue("adult", adult);
    setValue("child", child);
    setValue("pet", pet);
  }, [adult, child, pet, setValue]);


  return(
    <article >
      <p>Adults(18+)</p>
      <button type="button" onClick={() => handleDecrement('adult')}>-</button>
      <span>{adult}</span>
      <input
        type="hidden"
        value={adult}
        {...register("adult")}
      />
      <button type="button" onClick={() => handleIncrement('adult')}>+</button>
      <p>Child</p>
      <button type="button" onClick={() => handleDecrement('child')}>-</button>
      <span>{child}</span>
      <input
        type="hidden"
        value={child}
        {...register("child")}
      />
      <button type="button" onClick={() => handleIncrement('child')}>+</button>
      <p>Pet</p>
      <button type="button" onClick={() => handleDecrement('pet')}>-</button>
      <span>{pet}</span>
      <input
        type="hidden"
        value={pet}
        {...register("pet")}
      />
      <button type="button" onClick={() => handleIncrement('pet')}>+</button>
      
      <button type="button" onClick={onClose}>Close</button>
    </article>

  )
}


export default PassengerModal;
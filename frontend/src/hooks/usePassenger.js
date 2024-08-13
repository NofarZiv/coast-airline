import { useState, useEffect } from "react";

const usePassenger = (setValue) => {

  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [pet, setPet] = useState(0)
  const [selection, setSelection] = useState('adult')

  const handleIncrement = () => {
    if (selection === 'adult') {
      setAdult(adult + 1)
    } else if (selection === 'child') {
      setChild(child + 1)
    } else {
      setPet(pet + 1)
    }
  }
  
  const handleDecrement = () => {
    if (selection === 'adult' && adult > 1) {
      setAdult(adult - 1)
    } else if (selection === 'child' && child > 0) {
      setChild(child - 1)
    } else if (selection === 'pet' && pet > 0) {
      setPet(pet - 1)
    }
  }
  
  useEffect(() => {
    setValue("adult", adult);
    setValue("child", child);
    setValue("pet", pet);
  }, [adult, child, pet, setValue]);
  
return {
  
adult, child, pet, handleIncrement, handleDecrement, selection, setSelection

}

}



export default usePassenger
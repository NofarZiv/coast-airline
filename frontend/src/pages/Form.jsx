import { useForm } from "react-hook-form";
import Passenger from "../components/Passenger";
import Pet from "../components/Pet";
import Contact from "../components/Contact";
import '../styles/Form.css';


const Form = (props) => {

  const { searchData, onSubmitForm } = props;

  const { register, handleSubmit, formState: { errors } } = useForm();


  
  const adultRender = [...Array(searchData.adult)].map((_, index) => (
    <Passenger 
      key={index}
      index={index}
      register={register}  
      errors={errors} 
      passengerType={`Adult ${index + 1}`} 
      type={"adults"}
    />
  ))

  const childRender = [...Array(searchData.child)].map((_, index) => (
    <Passenger 
      key={index}
      index={index}
      register={register} 
      errors={errors} 
      passengerType={`Child ${index + 1}`} 
      type={"children"}
    />
  ))

  const petRender = [...Array(searchData.pet)].map((_, index) => (
    <Pet 
      key={index}
      index={index}
      register={register} 
      errors={errors} 
      passengerType={`Pet ${index + 1}`}
      type={"pets"}
    />
  ))

  return(
    <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="overlay">
      <h1>Tell us about yourself !</h1>
      </div>
      {adultRender}
      {childRender}
      {petRender}
      <Contact register={register} handleSubmit={handleSubmit} errors={errors}/>
      <div className="form-button-container">
      <button className="form-button" type="submit">Next</button>
      </div>
    </form>
  )
}



export default Form;
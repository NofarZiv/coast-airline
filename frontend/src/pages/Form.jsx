import { useForm } from "react-hook-form";
import Passenger from "../components/Passenger";
import Pet from "../components/Pet";
import Contact from "../components/Contact";
import '../styles/Form.css';


const Form = (props) => {

  const { searchData, email } = props;

  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmitForm = async (data) => {
    console.log(data)
    email(data.email)
    try {
    const res = await axios.post('/?', data)
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  }

  
  const adultRender = [...Array(searchData.adult)].map((_, index) => (
    <Passenger 
      key={`adult_${index}`} 
      register={register} 
      handleSubmit={handleSubmit} 
      errors={errors} 
      passengerType={`adult ${index + 1}`} 
    />
  ))

  const childRender = [...Array(searchData.child)].map((_, index) => (
    <Passenger 
      key={`child_${index}`} 
      register={register} 
      handleSubmit={handleSubmit} 
      errors={errors} 
      passengerType={`child ${index + 1}`} 
    />
  ))

  const petRender = [...Array(searchData.pet)].map((_, index) => (
    <Pet 
      key={`pet ${index}`} 
      register={register} 
      handleSubmit={handleSubmit} 
      errors={errors} 
      passengerType={`pet ${index + 1}`}
    />
  ))

  return(
    <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
      <h1>Tell us about yourself !</h1>
      {adultRender}
      {childRender}
      {petRender}
      <Contact register={register} handleSubmit={handleSubmit} errors={errors}/>
      <button className="button" type="submit">Next</button>
    </form>
  )
}



export default Form;
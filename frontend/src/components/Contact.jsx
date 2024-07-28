


const Contant = (props) => {

const { register, errors } = props;

  return(
    <div>
      <h3>Contact information</h3>
      <input placeholder="Email Address" {...register("email_address", { required: "Please provide a valid email address" })}></input>
      <p>{errors.email_address?.message}</p>
      <input placeholder="Phone number" {...register("phone_number", { required: "Please provide a valid phone number" })}></input>
      <p>{errors.phone_number?.message}</p>
    </div>
  )
}


export default Contant;
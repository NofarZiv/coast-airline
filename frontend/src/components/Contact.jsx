import '../styles/Contact.css';


const Contant = (props) => {

const { register, errors } = props;

  return(
    <div className="contact-section">
      <h3>Contact information</h3>
      <div className="contact-row">
      <div className="input-group">
      <input placeholder="Email Address" {...register("email_address", { required: "Please provide a valid email address" })}></input>
      <p>{errors.email_address?.message}</p>
      </div>
      <div className="input-group">
      <input placeholder="Phone number" {...register("phone_number", { required: "Please provide a valid phone number" })}></input>
      <p>{errors.phone_number?.message}</p>
    </div>
    </div>
    </div>
  )
}


export default Contant;
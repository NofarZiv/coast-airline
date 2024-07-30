import { useForm } from "react-hook-form";
import '../styles/Payment.css';
import countries from "../data";
import { useCreditCardValidator, images } from 'react-creditcard-validator';

const Payment = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitPayment = (data) => {
    console.log(data)
  }

    const countriesList = countries.map((country, index) => (
      <option key={index} value={country}>{country}</option>
    ))

    const validateExpiryDate = (value) => {
      const [month, year] = value.split('/');
      const expiryDate = new Date(`20${year}`, month - 1); // Month is 0-indexed in Date
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Set to the beginning of the day for comparison
      return expiryDate >= now || "Expiry date cannot be in the past";
      };

      const {
        getCardNumberProps,
        getCardImageProps,
      } = useCreditCardValidator();
    


  return (
    <form className={`credit-card-form`} onSubmit={handleSubmit(onSubmitPayment)}>
      <h2>Payment</h2>
      <div className="credit-card-input">
        <h4>Card details</h4>

        <svg {...getCardImageProps({ images })} />
        <input placeholder="Card number" {...register("card", { required: "Please enter your credit card number",
    minLength: {
      value: 16,
      message: "Card number must be exactly 16 digits"
    },
    maxLength: {
      value: 16,
      message: "Card number must be exactly 16 digits"
    }})} {...getCardNumberProps()}></input>
        <p>{errors.card?.message}</p>
        

        <input placeholder="CVC" {...register("cvc", { 
            required: "Please enter your 3 digit security code (CVC)", 
            minLength: { value: 3, message: "CVV must have at least 3 digits" }, 
            maxLength: { value: 3, message: "CVV can have at most 3 digits" }
          })} ></input>
        <p>{errors.cvc?.message}</p>

        
        <input placeholder="Expiry MM/YY" {...register("expiry", {
          required: "Please enter the payment card expiry date", 
          pattern: { 
            value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/, 
            message: "Expiry date must be in MM/YY format" 
          }, validate: validateExpiryDate
        })}></input>
        <p>{errors.expiry?.message}</p>

        <input placeholder="First name" {...register("first_name", { required: "Please enter a first name as it appears on the card" })}></input>
        <p>{errors.first_name?.message}</p>

        <input placeholder="Last name" {...register("last_name", { required: "Please provide a last name as it appears on the card" })}></input>
        <p>{errors.last_name?.message}</p>

        <h4>Billing address</h4>
        <input placeholder="Address" {...register("address", { required: "Please provide a billing address" })}></input>
        <p>{errors.address?.message}</p>

        <select {...register("country")}>
          <option>Select Country</option>
          {countriesList}
        </select>

        <input placeholder="City" {...register("city", { required: "Please enter a valid city name" })}></input>
        <p>{errors.city?.message}</p>

        <input placeholder="Province/State" {...register("province", { required: "Please enter province or state" })}></input>
        <p>{errors.province?.message}</p>

        <input placeholder="Postal/ZIP code" {...register("postal", { required: "Please enter a valid postal code" })}></input>
        <p>{errors.postal?.message}</p>
      </div>
      <div>Total: total</div>
      <button className="button">Next</button>
    </form>
  )
}


export default Payment;
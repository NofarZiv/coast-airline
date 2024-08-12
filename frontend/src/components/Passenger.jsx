import '../styles/Passenger.css';

const Passenger = (props) => {

  const { passengerType, register, errors, index, type } = props;

  const passengerErrors = errors[type] && errors[type][index] ? errors[type][index] : {};

  return(
    <div className="passenger-section">
      <h3>{passengerType}</h3>

      <div className="passenger-row">
      <div className="input-group">
      <input placeholder="First name" {...register(`${type}[${index}].first_name`, { required: "Please provide first name" })} />
      <p>{passengerErrors.first_name?.message}</p>
      </div>
      <div className="input-group">
      <input placeholder="Middle name" {...register(`${type}[${index}].middle_name`)} />
      </div>
      <div className="input-group">
      <input placeholder="Last name" {...register(`${type}[${index}].last_name`, { required: "Please provide last name" })} />
      <p>{passengerErrors.last_name?.message}</p>
      </div>
      <div className="input-group">
      <select {...register(`${type}[${index}].gender`, { required: "Please provide gender" })}>
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="undisclosed">Undisclosed</option>
        <option value="unspecified">Unspecified</option>
      </select>
      <p>{passengerErrors.gender?.message}</p>
      </div>
      <div className="input-group">
          <input placeholder="Passport" {...register(`${type}[${index}].passport`, { required: "Please provide a valid passport" })} />
          <p>{passengerErrors.passport?.message}</p>
        </div>
      </div>
      

      <div className="birthday">
       <div className="passenger-row">
        <div className="input-group">
          <input placeholder="DD" {...register(`${type}[${index}].DD`, { required: "Please provide day of birth" })} />
          <p>{passengerErrors.DD?.message}</p>
        </div>
        <div className="input-group">
          <input placeholder="MM" {...register(`${type}[${index}].MM`, { required: "Please provide month of birth" })} />
          <p>{passengerErrors.MM?.message}</p>
        </div>
        <div className="input-group">
          <input placeholder="YYYY" {...register(`${type}[${index}].YYYY`, { required: "Please provide year of birth" })} />
          <p>{passengerErrors.YYYY?.message}</p>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Passenger;
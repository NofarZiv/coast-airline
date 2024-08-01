

const Passenger = (props) => {

  const { passengerType, register, errors, index, type } = props;

  return(
    <div>
      <h3>{passengerType}</h3>
      <input placeholder="First name" {...register(`${type}[${index}].first_name`, { required: "Please provide first name" })}></input>
      <p>{errors.first_name?.message}</p>
      <input placeholder="Middle name" {...register(`${type}[${index}].middle_name`)}></input>
      <input placeholder="Last name" {...register(`${type}[${index}].last_name`, { required: "Please provide last name" })}></input>
      <p>{errors.last_name?.message}</p>
      <select placeholder="Gender" {...register(`${type}[${index}].gender`, { required: "Please provide gender" })}>
        <option value="gender">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="undisclosed">Undisclosed</option>
        <option value="unspecified">Unspecified</option>
      </select>
      <p>{errors.gender?.message}</p>
      <input placeholder="DD" {...register(`${type}[${index}].DD`, { required: "Please provide day of birth" })}></input>
      <p>{errors.DD?.message}</p>
      <input placeholder="MM" {...register(`${type}[${index}].MM`, { required: "Please provide month of birth" })}></input>
      <p>{errors.MM?.message}</p>
      <input placeholder="YYYY" {...register(`${type}[${index}].YYYY`, { required: "Please provide year of birth" })}></input>
      <p>{errors.YYYY?.message}</p>
      <input placeholder="Passport" {...register(`${type}[${index}].passport`, { required: "Please provide a valid passport" })}></input>
      <p>{errors.passport?.message}</p>
    </div>
  )
}


export default Passenger;
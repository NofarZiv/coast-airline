

const Pet = (props) => {

  const { register, errors, passengerType } = props;

  return(
    <div>
      <h3>{passengerType}</h3>
      <input placeholder="Name" {...register(`${passengerType}.pet_name`, { required: "Please provide pet name" })}></input>
      <p>{errors.pet_name?.message}</p>
      <select placeholder="Gender" {...register(`${passengerType}.pet_gender`, { required: "Please provide pet gender" })}>
        <option value="gender">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      <p>{errors.pet_gender?.message}</p>
    </div>
  )
}



export default Pet;
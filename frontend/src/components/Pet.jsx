

const Pet = (props) => {

  const { register, errors, passengerType, index, type } = props;

  return(
    <div>
      <h3>{passengerType}</h3>
      <input placeholder="Name" {...register(`${type}[${index}].pet_name`, { required: "Please provide pet name" })}></input>
      <p>{errors.pet_name?.message}</p>
      <select placeholder="Gender" {...register(`${type}[${index}].pet_gender`, { required: "Please provide pet gender" })}>
        <option value="gender">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      <select placeholder="species" {...register(`${type}[${index}].species`, { required: "Please provide pet species" })}>
        <option value="species">Species</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="other">Other</option>
      </select>
      <p>{errors.species?.message}</p>
    </div>
  )
}



export default Pet;
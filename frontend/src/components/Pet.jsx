import '../styles/Pet.css';


const Pet = (props) => {

  const { register, errors, passengerType, index, type } = props;

  const petErrors = errors[type] && errors[type][index] ? errors[type][index] : {};

  return(
    <div className="pet-section">
      <h3>{passengerType}</h3>

      <div className="pet-row">
      <div className="input-group">
      <input placeholder="Name" {...register(`${type}[${index}].pet_name`, { required: "Please provide pet name" })}></input>
      <p>{petErrors.pet_name?.message}</p>
      </div>
      <div className="input-group">
      <select placeholder="Gender" {...register(`${type}[${index}].pet_gender`, { required: "Please provide pet gender" })}>
        <option value="gender">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      </div>
      <div className="input-group">
      <select placeholder="species" {...register(`${type}[${index}].species`, { required: "Please provide pet species" })}>
        <option value="species">Species</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="other">Other</option>
      </select>
      <p>{petErrors.species?.message}</p>
      </div>
    </div>
    </div>
    
  )
}



export default Pet;
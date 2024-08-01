import '../styles/Search.css';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from './Select';

const Search = (props) => {

  const { onSubmitSearch } = props;

  const { register, handleSubmit, formState: { errors }, control, setValue } = useForm();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  return (
    <form className="search" onSubmit={handleSubmit((onSubmitSearch))}>

      <select {...register("origin_airport", { required: "Please select a valid point of origin" })}>
        <option value="">Where to?</option>
        <option value="Toronto">Toronto</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Montreal">Montreal</option>
        <option value="Nassau">Nassau, The Bahamas</option>
        <option value="Bridgetown">Bridgetown, Barbados</option>
        <option value="Kingston">Kingston, Jamaica</option>
        <option value="Santo Domingo">Santo Domingo, Dominican Republic</option>
        <option value="San Juan">San Juan, Puerto Rico</option>
        <option value="Havana">Havana, Cuba</option>
        <option value="Oranjestad">Oranjestad, Aruba</option>
        <option value="Philipsburg">Philipsburg, Sint Maarten</option>
        <option value="Castries">Castries, Saint Lucia</option>
        <option value="Grenada">St. George's, Grenada</option>
        <option value="Basseterre">Basseterre, Saint Kitts and Nevis</option>
        <option value="Roseau">Roseau, Dominica</option>
        <option value="Gustavia">Gustavia, Saint Barthélemy</option>
        <option value="Road Town">Road Town, British Virgin Islands</option>
      </select>
      <p>{errors.origin_airport?.message}</p>

      <select {...register("destination_airport", { required: "Please select a valid destination" })}>
        <option value="">Where from?</option>
        <option value="Toronto">Toronto</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Montreal">Montreal</option>
        <option value="Nassau">Nassau, The Bahamas</option>
        <option value="Bridgetown">Bridgetown, Barbados</option>
        <option value="Kingston">Kingston, Jamaica</option>
        <option value="Santo Domingo">Santo Domingo, Dominican Republic</option>
        <option value="San Juan">San Juan, Puerto Rico</option>
        <option value="Havana">Havana, Cuba</option>
        <option value="Oranjestad">Oranjestad, Aruba</option>
        <option value="Philipsburg">Philipsburg, Sint Maarten</option>
        <option value="Castries">Castries, Saint Lucia</option>
        <option value="Grenada">St. George's, Grenada</option>
        <option value="Basseterre">Basseterre, Saint Kitts and Nevis</option>
        <option value="Roseau">Roseau, Dominica</option>
        <option value="Gustavia">Gustavia, Saint Barthélemy</option>
        <option value="Road Town">Road Town, British Virgin Islands</option>
      </select>
      <p>{errors.destination_airport?.message}</p>

      <Controller
        control={control}
        name="departure_date"
        rules={{ required: "Please select a valid departure date" }}
        render={({ field }) => (
          <DatePicker
            selectsStart
            placeholderText="Departure"
            selected={field.value || startDate}
            onChange={(date) => {
              field.onChange(date)
              setStartDate(date);
            }}
            startDate={startDate}
            className="datepicker-input"
          />
        )}
      />
      <p>{errors.departure_date?.message}</p>

      <Controller
        control={control}
        name="return_date"
        rules={{ required: "Please select a valid return date" }}
        render={({ field }) => (
          <DatePicker
            selectsEnd
            placeholderText="Return"
            selected={field.value || endDate}
            onChange={(date) => {
              field.onChange(date);
              setEndDate(date);
            }}
            endDate={endDate}
            startDate={startDate}
            minDate={startDate}
            className="datepicker-input"
          />
        )}
      />
      <p>{errors.return_date?.message}</p>

      
      <Select register={register} errors={errors} setValue={setValue}/>

      <button className="button" type="submit">Find me a flight</button>

    </form>
  )
}


export default Search;
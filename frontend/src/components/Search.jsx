import '../styles/Search.css';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from './Select';
import beachImage from '../images/beach.jpg'; // Import the image

const Search = (props) => {
  const { onSubmitSearch } = props;

  const { register, handleSubmit, formState: { errors }, control, setValue } = useForm();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="search-background" style={{ backgroundImage: `url(${beachImage})` }}>
      <form className="search" onSubmit={handleSubmit((onSubmitSearch))}>
        <div className="search__inputs-container">
          <div className="search__row">
          <div className="search__input-group large-input">
              <select className="search__input" {...register("origin_airport", { required: "Please select a valid destination" })}>
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
              <p className="search__error">{errors.origin_airport?.message}</p>
            </div>
          </div>

          <div className="search__input-group large-input">
              <select className="search__input" {...register("destination_airport", { required: "Please select a valid point of origin" })}>
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
              <p className="search__error">{errors.destination_airport?.message}</p>
            </div>

          <div className="search__grid">
            <div className="search__input-group small-input">
              <div className="search__date-picker">
                <Controller
                  control={control}
                  name="departure_date"
                  rules={{ required: "Please select a valid departure date" }}
                  render={({ field }) => (
                    <DatePicker
                      selectsStart
                      placeholderText="Departure date"
                      selected={field.value || startDate}
                      onChange={(date) => {
                        field.onChange(date)
                        setStartDate(date);
                      }}
                      startDate={startDate}
                      className="datepicker-input with-icon"
                    />
                  )}
                />
              </div>
              <p className="search__error">{errors.departure_date?.message}</p>
            </div>

            <div className="search__input-group small-input">
              <div className="search__date-picker">
                <Controller
                  control={control}
                  name="return_date"
                  rules={{ required: "Please select a valid return date" }}
                  render={({ field }) => (
                    <DatePicker
                      selectsEnd
                      placeholderText="Return date"
                      selected={field.value || endDate}
                      onChange={(date) => {
                        field.onChange(date);
                        setEndDate(date);
                      }}
                      endDate={endDate}
                      startDate={startDate}
                      minDate={startDate}
                      className="datepicker-input with-icon"
                    />
                  )}
                />
              </div>
              <p className="search__error">{errors.return_date?.message}</p>
            </div>

            <div className="search__input-group small-input">
              <Select register={register} errors={errors} setValue={setValue} />
            </div>
          </div>
        </div>

        <div className="search__actions-row">
          <button className="button" type="submit">Find me a flight</button>
        </div>
      </form>
    </div>
  )
}

export default Search;

class SeatsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]


  def create

    seat_departure_params = params[:seatDeparture]
    seat_return_params = params[:seatReturn]
    passenger_info = params[:passenger]
    departure_flight_id = params[:departure_flight_id]
    return_flight_id = params[:return_flight_id]
    d_aircraft_id = params[:departure_aircrart_id]
    r_aircraft_id = params[:return_aircraft_id]

    passengers = []
    passengers.concat(passenger_info[:adults]) if passenger_info[:adults]
    passengers.concat(passenger_info[:children]) if passenger_info[:children]
    pets = passenger_info[:pets] || []

    # Ensure all passengers and pets have corresponding seats
    total_passengers_and_pets = passengers.size + pets.size
    if total_passengers_and_pets != seat_departure_params.size || total_passengers_and_pets != seat_return_params.size
      render json: { error: 'Mismatch between number of passengers and seats' }, status: :unprocessable_entity
      return
    end

    ActiveRecord::Base.transaction do
      passengers.each_with_index do |passenger_data, index|
        # Create or find passenger
        passenger = Passenger.find_by(
          passport_number: passenger_data[:passport]
        )

    # Assign seats to departure flight
    seat_number_departure = seat_departure_params[index]
    seat_departure = Seat.find_by(seat_number: seat_number_departure, available: true, aircraft_id: d_aircraft_id)
        unless seat_departure
          raise ActiveRecord::Rollback, "Seat #{seat_number_departure} is not available"
        end

        seat_departure.update!(available: false)
        Order.create!(
          passenger_id: passenger.id,
          flight_id: departure_flight_id,
          seat_id: seat_departure.id,
          flight_type: 'departure'
        )

    # Assign seats to return flight
    seat_number_return = seat_return_params[index]
    seat_return = Seat.find_by(seat_number: seat_number_return, available: true, aircraft_id: r_aircraft_id)
        unless seat_return
          raise ActiveRecord::Rollback, "Seat #{seat_number_return} is not available"
        end

        seat_return.update!(available: false)
        Order.create!(
          passenger_id: passenger.id,
          flight_id: return_flight_id,
          seat_id: seat_return.id,
          flight_type: 'return'
        )
      end
    

      pets.each_with_index do |pet_data, index|
        seat_index = passengers.size + index
        pet = Pet.find_by!(
          name: pet_data[:pet_name],
          gender: pet_data[:pet_gender],
          species: pet_data[:species]
        )

        passenger = Passenger.find_by(passport_number: pet_data[:passenger_passport_number])
      raise ActiveRecord::Rollback, "Passenger with passport #{pet_data[:passenger_passport_number]} not found" unless passenger


         # Assign seats to departure flight for pets
         seat_number_departure = seat_departure_params[seat_index]
         seat_departure = Seat.find_by(seat_number: seat_number_departure, available: true, aircraft_id: d_aircraft_id)
         unless seat_departure
           raise ActiveRecord::Rollback, "Seat #{seat_number_departure} is not available"
         end
 
         seat_departure.update!(available: false)
         Order.create!(
           pet_id: pet.id,
           passenger_id: passenger.id,
           flight_id: departure_flight_id,
           seat_id: seat_departure.id,
           flight_type: 'departure'
         )

         # Assign seats to return flight for pets
        seat_number_return = seat_return_params[seat_index]
        seat_return = Seat.find_by(seat_number: seat_number_return, available: true, aircraft_id: r_aircraft_id)
        unless seat_return
          raise ActiveRecord::Rollback, "Seat #{seat_number_return} is not available"
        end

        seat_return.update!(available: false)
        Order.create!(
          pet_id: pet.id,
          passenger_id: passenger.id,
          flight_id: return_flight_id,
          seat_id: seat_return.id,
          flight_type: 'return'
        )
      end
    end
  


    render json: { message: 'Seats assigned successfully' }, status: :ok
  rescue ActiveRecord::RecordInvalid, ActiveRecord::Rollback => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  
  # rescue StandardError => e
  #   Rails.logger.error("Error in SeatsController#create: #{e.message}")
  #   render json: { error: e.message }, status: :unprocessable_entity
  # end


  private

  def seat_params
    params.require(:seat).permit(
      seatDeparture: [],
      seatReturn: [],
      passenger: [
        adults: [:passport_number],
        children: [:passport_number],
        pets: [:pet_name, :pet_gender, :species, :passenger_passport_number]
      ],
      departure_flight_id: [],
      return_flight_id: []
    )
  end

end

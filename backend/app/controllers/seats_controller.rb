class SeatsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]


  def create

    seat_departure_params = params[:seatDeparture]
    seat_return_params = params[:seatReturn]
    passenger_info = params[:passenger]
    departure_flight_id = params[:departure_flight_id]
    return_flight_id = params[:return_flight_id]
    d_aircrafe_id = params[:departure_aircrart_id]
    r_aircraft_id = params[:return_aircraft_id]

    passengers = []
    passengers.concat(passenger_info[:adults]) if passenger_info[:adults]
    passengers.concat(passenger_info[:children]) if passenger_info[:children]
    passengers.concat(passenger_info[:pets]) if passenger_info[:pets]

    if passengers.size != seat_departure_params.size || passengers.size != seat_return_params.size
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
    seat_departure = Seat.find_by(seat_number: seat_number_departure, available: true, aircraft_id: d_aircrafe_id)
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
    end

    render json: { message: 'Seats assigned successfully' }, status: :ok
  rescue ActiveRecord::RecordInvalid, ActiveRecord::Rollback => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  private

  def seat_params
    params.require(:seat).permit(
      seatDeparture: [],
      seatReturn: [],
      passenger: [
        adults: [:passport_number],
        children: [:passport_number],
        pets: [:name, :gender]
      ],
      departure_flight_id: [],
      return_flight_id: []
    )
  end

end

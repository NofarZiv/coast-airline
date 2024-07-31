class FlightsController < ApplicationController
  def index

    origin_airport = params[:origin_airport]
    destination_airport = params[:destination_airport]
    departure_date = DateTime.parse(params[:departure_date]).to_date
    return_date = DateTime.parse(params[:return_date]).to_date


   flights_to_destination = Flight.where(
      origin_airport: origin_airport,
      destination_airport: destination_airport,
      departure_date: departure_date)
   flights_from_destination= Flight.where(
      origin_airport: destination_airport,
      destination_airport: origin_airport,
      departure_date: return_date
   ) 

   puts "Flights to Destination: #{flights_to_destination.inspect}"
   puts "Flights from Destination: #{flights_from_destination.inspect}"
  

  @flights = {
    flights_to_destination: flights_to_destination, 
    flights_from_destination: flights_from_destination}

      render json: @flights
  end
end

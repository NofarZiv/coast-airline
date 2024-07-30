class FlightsController < ApplicationController
  def index
   flights_to_destination = activerecordcallhere
   flights_from_destination= activerecordcallhere 
  #  @flights = [{flights_to_destination: [{
  #   aircraft_id: 2,
  #   flight_number: 'AC102',
  #   aircraft_number: 'Boeing 777-300ER',
  #   pilot_name: 'Captain Jane Doe',
  #   departure_date: '2024-08-02',
  #   departure_time: '10:00:00',
  #   origin_airport: 'Toronto',
  #   origin_terminal: '3A',
  #   destination_airport: 'Paris',
  #   destination_terminal: '2B',
  #   arrival_date: '2024-08-02',
  #   arrival_time: '11:30:00',
  #   flight_duration: '1.5 hours',
  #   wifi_available: false,
  #   price: 150.00}]}]

  @flights = {flights_to_destination: flights_to_destination, flights_from_destination: flights_from_destination}

      render json: @flights
  end
end

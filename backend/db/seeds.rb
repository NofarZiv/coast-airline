require 'date'

# Create Aircraft
aircrafts = Aircraft.create([
  { number_of_seats: 150, aircraft_number: 'AC123' },
  { number_of_seats: 200, aircraft_number: 'AC456' },
  { number_of_seats: 180, aircraft_number: 'AC789' }
])

# Define dates and times
start_date = Date.parse('2024-08-16')
departure_times = ['06:00', '12:00', '18:00']

# Define airports
origins = ['Montreal', 'Toronto', 'Vancouver']
destinations = [
  'Nassau', 'Bridgetown', 'Kingston', 'Santo Domingo', 'San Juan', 'Port of Spain',
  'Havana', 'Oranjestad', 'Philipsburg', 'Castries', 'St. George\'s', 'Basseterre',
  'Roseau', 'Gustavia', 'Road Town', 'Playa del Carmen', 'Tulum', 'Cozumel',
  'Isla Mujeres', 'Puerto Morelos', 'Akumal', 'Puerto Aventuras'
]

# Initialize flight number counter
$flight_number_counter = 0

# Helper function to generate unique flight numbers
def generate_unique_flight_number
  $flight_number_counter += 1
  "F#{format('%04d', $flight_number_counter)}"
end

# Helper function to generate random terminals
def random_terminal
  "#{('A'..'Z').to_a.sample}#{rand(1..9)}"
end

# Create Flights
flights = []
departures = 0

while departures < 4
  origin = origins.sample
  destination = destinations.sample
  departure_time = departure_times.sample
  flight_number = generate_unique_flight_number
  arrival_time = (DateTime.parse("#{start_date} #{departure_time}") + Rational(4, 24)).strftime('%H:%M')

  flight = Flight.create(
    aircraft_id: aircrafts.sample.id,
    flight_number: flight_number,
    pilot_name: "Pilot #{rand(1..100)}",
    departure_date: start_date,
    departure_time: departure_time,
    departure_terminal: random_terminal,
    origin_airport: origin,
    destination_airport: destination,
    arrival_date: start_date,
    arrival_time: arrival_time,
    arrival_terminal: random_terminal,
    flight_duration: rand(60..480), # in minutes
    flight_price: rand(100..500).to_d,
    wifi_available: [true, false].sample
  )
  
  # Return flight
  Flight.create!(
    aircraft_id: flight.aircraft_id,
    flight_number: "R#{flight_number}",
    pilot_name: "Pilot #{rand(101..200)}",
    departure_date: start_date + 1, # Assuming a 1-day return
    departure_time: departure_time,
    departure_terminal: random_terminal,
    origin_airport: destination,
    destination_airport: origin,
    arrival_date: start_date + 1,
    arrival_time: arrival_time,
    arrival_terminal: random_terminal,
    flight_duration: flight.flight_duration,
    flight_price: flight.flight_price,
    wifi_available: flight.wifi_available
  )
  
  departures += 1
end

# Create Passengers
passengers = Passenger.create([
  { first_name: 'Michael', last_name: 'Brown', passport_number: 'A1234567', date_of_birth: '1985-05-15' },
  { first_name: 'Sarah', last_name: 'Miller', passport_number: 'B2345678', date_of_birth: '1990-10-22' },
  { first_name: 'Robert', last_name: 'Davis', passport_number: 'C3456789', date_of_birth: '1978-07-30' }
])

# Create Checkouts
checkouts = Checkout.create([
  { no_of_persons: 1, price_per_person: 500, total_price: 500 },
  { no_of_persons: 1, price_per_person: 700, total_price: 700 },
  { no_of_persons: 1, price_per_person: 600, total_price: 600 }
])

# Create Orders
# Randomly pair flights and passengers
flights.each_with_index do |flight, index|
  Order.create(
    passenger_id: passengers[index % passengers.size].id,
    outbound_flight_id: flight.id,
    return_flight_id: Flight.where(
      origin_airport: flight.destination_airport,
      destination_airport: flight.origin_airport,
      departure_date: flight.departure_date + 1
    ).first.id,
    seat_id: index + 1,
    checkout_id: checkouts[index % checkouts.size].id,
    order_price: flight.flight_price
  )
end

# Create Seats
seats = []
aircrafts.each do |aircraft|
  Flight.where(aircraft_id: aircraft.id).each do |flight|
    (1..aircraft.number_of_seats).to_a.each do |seat_number|
      seats << Seat.create(
        aircraft_id: aircraft.id,
        flight_id: flight.id,
        seat_number: "#{seat_number}A",
        available: [true, false].sample
      )
    end
  end
end
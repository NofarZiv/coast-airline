# db/seeds.rb

# Clear existing data
Order.delete_all
Seat.delete_all
Pet.delete_all
Passenger.delete_all
Flight.delete_all
Aircraft.delete_all

# Create sample aircrafts
aircrafts = Aircraft.create!([
  { number_of_seats: 162, aircraft_number: 'AC1001' },
  { number_of_seats: 162, aircraft_number: 'AC1002' },
  { number_of_seats: 162, aircraft_number: 'AC1003' }
])

# Method to generate seat numbers based on the specified layout
def generate_seat_numbers
  seat_numbers = []
  (1..27).each do |row|
    ('A'..'F').each do |letter|
      seat_numbers << "#{row}#{letter}"
    end
  end
  seat_numbers
end

# Create sample seats for each aircraft
seats = []
aircrafts.each do |aircraft|
  generate_seat_numbers.each do |seat_number|
    seats << { aircraft: aircraft, seat_number: seat_number, available: true }
  end
end
Seat.create!(seats)

# Define cities
ORIGIN_CITIES = ['Toronto', 'Montreal', 'Vancouver']
DESTINATION_CITIES = [
  'Nassau', 'Bridgetown', 'Kingston', 'Santo Domingo', 'San Juan', 
  'Port of Spain', 'Havana', 'Oranjestad', 'Philipsburg', 'Castries', 
  "St. George's", 'Basseterre', 'Roseau', 'Gustavia', 'Road Town', 
  'Playa del Carmen', 'Tulum', 'Cozumel', 'Isla Mujeres', 'Puerto Morelos', 
  'Akumal', 'Puerto Aventuras'
]

# Generate unique flight numbers
def generate_flight_number(index)
  format('CA%04d', index + 1)
end

# Create sample departing and return flights
def create_flights(start_date, end_date)
  flights = []
  flight_index = 0
  (start_date..end_date).each do |date|
    ORIGIN_CITIES.each do |origin|
      DESTINATION_CITIES.each do |destination|
        ['06:00', '12:00', '17:30'].each do |departure_time|
          flight_number = generate_flight_number(flight_index)
          flights << {
            aircraft: Aircraft.order('RANDOM()').first,
            flight_number: flight_number,
            pilot_name: "Captain #{Faker::Name.name}",
            departure_date: date,
            departure_terminal: 'A1',
            departure_time: departure_time,
            origin_airport: origin,
            destination_airport: destination,
            arrival_date: date,
            arrival_terminal: 'B1',
            arrival_time: (Time.parse(departure_time) + 3.hours).strftime('%H:%M'),
            flight_duration: 180,
            flight_price: rand(200..500).to_f,
            wifi_available: [true, false].sample
          }
          flight_index += 1
        end
      end
    end
  end

  flights
end

# Create flights for the specified date range
departing_flights = create_flights(Date.new(2024, 9, 1), Date.new(2024, 9, 30))
return_flights = departing_flights.map do |flight|
  flight.merge(
    departure_date: flight[:departure_date] + 1.day,
    departure_time: flight[:arrival_time],
    origin_airport: flight[:destination_airport],
    destination_airport: flight[:origin_airport],
    flight_number: generate_flight_number(departing_flights.size + flight[:flight_number].gsub('CA', '').to_i - 1)
  )
end

# Insert flights into the database
Flight.create!(departing_flights + return_flights)
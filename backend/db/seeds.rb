# db/seeds.rb

# Clear existing data
Order.delete_all
Seat.delete_all
Pet.delete_all
Passenger.delete_all
Flight.delete_all
Aircraft.delete_all

# Create sample passengers
passengers = Passenger.create!([
  {
    first_name: 'John',
    last_name: 'Doe',
    passport_number: 'A1234567',
    date_of_birth: '1980-01-15',
    email: 'john.doe@example.com',
    phone_number: '555-1234',
    gender: 'Male'
  },
  {
    first_name: 'Jane',
    last_name: 'Smith',
    passport_number: 'B7654321',
    date_of_birth: '1992-05-30',
    email: 'jane.smith@example.com',
    phone_number: '555-5678',
    gender: 'Female'
  },
  {
    first_name: 'Alice',
    last_name: 'Johnson',
    passport_number: 'C9876543',
    date_of_birth: '1985-09-22',
    email: 'alice.johnson@example.com',
    phone_number: '555-8765',
    gender: 'Female'
  },
  {
    first_name: 'Extra',
    last_name: 'Passenger',
    passport_number: 'D1234567',
    date_of_birth: '1975-07-07',
    email: 'extra.passenger@example.com',
    phone_number: '555-0000',
    gender: 'Male'
  }
])

# Create sample pets for each passenger
Pet.create!([
  {
    passenger: passengers[0],
    name: 'Buddy',
    gender: 'Male',
    species: 'Dog'
  },
  {
    passenger: passengers[0],
    name: 'Mittens',
    gender: 'Female',
    species: 'Cat'
  },
  {
    passenger: passengers[1],
    name: 'Charlie',
    gender: 'Male',
    species: 'Bird'
  },
  {
    passenger: passengers[2],
    name: 'Max',
    gender: 'Male',
    species: 'Dog'
  },
  {
    passenger: passengers[2],
    name: 'Bella',
    gender: 'Female',
    species: 'Cat'
  }
])

# Create sample aircrafts
aircrafts = Aircraft.create!([
  { number_of_seats: 162, aircraft_number: 'AC1001' },
  { number_of_seats: 162, aircraft_number: 'AC1002' },
  { number_of_seats: 162, aircraft_number: 'AC1003' }
])

# Create sample departing flights
departing_flights = [
  {
    aircraft: aircrafts[0],
    flight_number: 'AC101',
    pilot_name: 'Captain John Doe',
    departure_date: '2024-08-16',
    departure_terminal: 'A1',
    departure_time: '06:00',
    origin_airport: 'Toronto',
    destination_airport: 'Nassau',
    arrival_date: '2024-08-16',
    arrival_terminal: 'B2',
    arrival_time: '09:00',
    flight_duration: 180,
    flight_price: 300.00,
    wifi_available: true
  },
  {
    aircraft: aircrafts[1],
    flight_number: 'AC102',
    pilot_name: 'Captain Jane Smith',
    departure_date: '2024-08-16',
    departure_terminal: 'A1',
    departure_time: '12:00',
    origin_airport: 'Montreal',
    destination_airport: 'Bridgetown',
    arrival_date: '2024-08-16',
    arrival_terminal: 'B3',
    arrival_time: '15:00',
    flight_duration: 180,
    flight_price: 320.00,
    wifi_available: false
  },
  {
    aircraft: aircrafts[2],
    flight_number: 'AC103',
    pilot_name: 'Captain Alice Johnson',
    departure_date: '2024-08-16',
    departure_terminal: 'A2',
    departure_time: '18:00',
    origin_airport: 'Vancouver',
    destination_airport: 'Santo Domingo',
    arrival_date: '2024-08-16',
    arrival_terminal: 'C1',
    arrival_time: '21:00',
    flight_duration: 180,
    flight_price: 350.00,
    wifi_available: true
  }
]

# Create sample return flights
return_flights = [
  {
    aircraft: aircrafts[0],
    flight_number: 'AC104',
    pilot_name: 'Captain John Doe',
    departure_date: '2024-08-17',
    departure_terminal: 'B2',
    departure_time: '06:00',
    origin_airport: 'Nassau',
    destination_airport: 'Toronto',
    arrival_date: '2024-08-17',
    arrival_terminal: 'A1',
    arrival_time: '09:00',
    flight_duration: 180,
    flight_price: 300.00,
    wifi_available: true
  },
  {
    aircraft: aircrafts[1],
    flight_number: 'AC105',
    pilot_name: 'Captain Jane Smith',
    departure_date: '2024-08-17',
    departure_terminal: 'B3',
    departure_time: '12:00',
    origin_airport: 'Bridgetown',
    destination_airport: 'Montreal',
    arrival_date: '2024-08-17',
    arrival_terminal: 'A1',
    arrival_time: '15:00',
    flight_duration: 180,
    flight_price: 320.00,
    wifi_available: false
  },
  {
    aircraft: aircrafts[2],
    flight_number: 'AC106',
    pilot_name: 'Captain Alice Johnson',
    departure_date: '2024-08-17',
    departure_terminal: 'C1',
    departure_time: '18:00',
    origin_airport: 'Santo Domingo',
    destination_airport: 'Vancouver',
    arrival_date: '2024-08-17',
    arrival_terminal: 'A2',
    arrival_time: '21:00',
    flight_duration: 180,
    flight_price: 350.00,
    wifi_available: true
  }
]

# Insert flights into database
flights = Flight.create!(departing_flights + return_flights)

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
seats = Seat.create!(seats)

# Find the aircraft for the specified flights
ac101_flight = Flight.find_by(flight_number: 'AC101')
ac104_flight = Flight.find_by(flight_number: 'AC104')

# Mark specific seats as unavailable by finding the corresponding seat in the aircraft
Seat.find_by(aircraft: ac101_flight.aircraft, seat_number: '1A').update!(available: false)
Seat.find_by(aircraft: ac104_flight.aircraft, seat_number: '1F').update!(available: false)

# Create orders to represent the taken seats
Order.create!([
  {
    seat: Seat.find_by(aircraft: aircrafts[0], seat_number: '1A'),
    flight: flights[0], # AC101
    passenger: passengers[3], # Extra Passenger
    flight_type: 'one-way'
  },
  {
    seat: Seat.find_by(aircraft: aircrafts[0], seat_number: '1F'),
    flight: flights[3], # AC104
    passenger: passengers[3], # Extra Passenger
    flight_type: 'return'
  },
  # Add other sample orders for the remaining flights and passengers
  {
    seat: seats[0],
    flight: flights[0],
    passenger: passengers[0],
    flight_type: 'one-way'
  },
  {
    seat: seats[1],
    flight: flights[1],
    passenger: passengers[1],
    flight_type: 'one-way'
  },
  {
    seat: seats[2],
    flight: flights[2],
    passenger: passengers[2],
    flight_type: 'one-way'
  },
  {
    seat: seats[3],
    flight: flights[3],
    passenger: passengers[0],
    flight_type: 'return'
  },
  {
    seat: seats[4],
    flight: flights[4],
    passenger: passengers[1],
    flight_type: 'return'
  },
  {
    seat: seats[5],
    flight: flights[5],
    passenger: passengers[2],
    flight_type: 'return'
  }
])

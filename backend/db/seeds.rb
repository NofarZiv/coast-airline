# db/seeds.rb

# Clear existing data
Pet.delete_all
Passenger.delete_all
Flight.delete_all

# Create sample passengers
passengers = Passenger.create!([
  {
    first_name: 'John',
    last_name: 'Doe',
    passport_number: 'A1234567',
    date_of_birth: '1980-01-15',
    email: 'john.doe@example.com',
    phone_number: '555-1234'
  },
  {
    first_name: 'Jane',
    last_name: 'Smith',
    passport_number: 'B7654321',
    date_of_birth: '1992-05-30',
    email: 'jane.smith@example.com',
    phone_number: '555-5678'
  },
  {
    first_name: 'Alice',
    last_name: 'Johnson',
    passport_number: 'C9876543',
    date_of_birth: '1985-09-22',
    email: 'alice.johnson@example.com',
    phone_number: '555-8765'
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

# Create sample departing flights
departing_flights = [
  {
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
Flight.create!(departing_flights + return_flights)
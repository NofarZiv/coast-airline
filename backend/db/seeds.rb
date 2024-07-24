# Clear existing data
FlightPassenger.delete_all
Order.delete_all
Passenger.delete_all
Seat.delete_all
Flight.delete_all
Aircraft.delete_all

# Create Aircrafts
aircraft1 = Aircraft.create!(number_of_seats: 180, aircraft_number: "A123")
aircraft2 = Aircraft.create!(number_of_seats: 200, aircraft_number: "B456")

# Create Flights
flight1 = Flight.create!(
  aircraft: aircraft1,
  flight_number: "FL123",
  pilot_name: "John Doe",
  departure_date: Date.new(2024, 8, 1),
  departure_time: Time.parse("08:00"),
  origin_airport: "Vancouver",
  destination_airport: "Nassau",
  arrival_date: Date.new(2024, 8, 1),
  arrival_time: Time.parse("12:00"),
  flight_duration: "4 hours",
  wifi_available: true
)

flight2 = Flight.create!(
  aircraft: aircraft2,
  flight_number: "FL456",
  pilot_name: "Jane Smith",
  departure_date: Date.new(2024, 8, 2),
  departure_time: Time.parse("09:00"),
  origin_airport: "Toronto",
  destination_airport: "Kingston",
  arrival_date: Date.new(2024, 8, 2),
  arrival_time: Time.parse("13:00"),
  flight_duration: "4 hours",
  wifi_available: true
)

# Create Seats
seat1 = Seat.create!(aircraft: aircraft1, flight: flight1, seat_number: "1A", available: true)
seat2 = Seat.create!(aircraft: aircraft1, flight: flight1, seat_number: "1B", available: true)
seat3 = Seat.create!(aircraft: aircraft2, flight: flight2, seat_number: "2A", available: true)
seat4 = Seat.create!(aircraft: aircraft2, flight: flight2, seat_number: "2B", available: true)

# Create Passengers
passenger1 = Passenger.create!(first_name: "Alice", last_name: "Johnson", passport_number: "P12345", date_of_birth: Date.new(1990, 1, 1))
passenger2 = Passenger.create!(first_name: "Bob", last_name: "Smith", passport_number: "P67890", date_of_birth: Date.new(1985, 2, 2))

# Create Orders
order1 = Order.create!(passenger: passenger1, outbound_flight: flight1, return_flight: flight2, price: 500.00)
order2 = Order.create!(passenger: passenger2, outbound_flight: flight2, return_flight: flight1, price: 450.00)

# Create FlightPassengers
FlightPassenger.create!(flight: flight1, passenger: passenger1, seat: seat1)
FlightPassenger.create!(flight: flight2, passenger: passenger2, seat: seat3)
FlightPassenger.create!(flight: flight2, passenger: passenger1, seat: seat4)
FlightPassenger.create!(flight: flight1, passenger: passenger2, seat: seat2)

# db/seeds.rb

# Create Aircraft
aircrafts = Aircraft.create([
  { number_of_seats: 150, aircraft_number: 'AC123' },
  { number_of_seats: 200, aircraft_number: 'AC456' },
  { number_of_seats: 180, aircraft_number: 'AC789' }
])

# Create Flights
flights = Flight.create([
  { aircraft_id: aircrafts[0].id, flight_number: 'FL123', pilot_name: 'John Doe', departure_date: '2024-08-01', departure_time: '08:00', origin_airport: 'Montreal', destination_airport: 'Nassau', arrival_date: '2024-08-01', arrival_time: '12:00', flight_duration: '4h', wifi_available: true },
  { aircraft_id: aircrafts[1].id, flight_number: 'FL456', pilot_name: 'Jane Smith', departure_date: '2024-08-02', departure_time: '09:00', origin_airport: 'Toronto', destination_airport: 'Bridgetown', arrival_date: '2024-08-02', arrival_time: '14:00', flight_duration: '5h', wifi_available: false },
  { aircraft_id: aircrafts[2].id, flight_number: 'FL789', pilot_name: 'Alice Johnson', departure_date: '2024-08-03', departure_time: '10:00', origin_airport: 'Vancouver', destination_airport: 'Kingston', arrival_date: '2024-08-03', arrival_time: '16:00', flight_duration: '6h', wifi_available: true }
])

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
orders = Order.create([
  { passenger_id: passengers[0].id, outbound_flight_id: flights[0].id, return_flight_id: flights[1].id, seat_id: 1, checkout_id: checkouts[0].id, price: 500 },
  { passenger_id: passengers[1].id, outbound_flight_id: flights[1].id, return_flight_id: flights[2].id, seat_id: 2, checkout_id: checkouts[1].id, price: 700 },
  { passenger_id: passengers[2].id, outbound_flight_id: flights[2].id, return_flight_id: flights[0].id, seat_id: 3, checkout_id: checkouts[2].id, price: 600 }
])

# Create Seats
seats = Seat.create([
  { aircraft_id: aircrafts[0].id, flight_id: flights[0].id, seat_number: '12A', available: false },
  { aircraft_id: aircrafts[1].id, flight_id: flights[1].id, seat_number: '14B', available: false },
  { aircraft_id: aircrafts[2].id, flight_id: flights[2].id, seat_number: '16C', available: false },
  { aircraft_id: aircrafts[0].id, flight_id: flights[0].id, seat_number: '18D', available: true },
  { aircraft_id: aircrafts[1].id, flight_id: flights[1].id, seat_number: '20E', available: true },
  { aircraft_id: aircrafts[2].id, flight_id: flights[2].id, seat_number: '22F', available: true }
])

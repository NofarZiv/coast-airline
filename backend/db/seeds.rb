# db/seeds.rb

# Clear existing data
Pet.delete_all
Passenger.delete_all

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

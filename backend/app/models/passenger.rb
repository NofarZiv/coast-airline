class Passenger < ApplicationRecord
  has_many :orders
  has_many :flight_passengers
  has_many :flights, through: :flight_passengers
  has_many :seats, through: :flight_passengers
end
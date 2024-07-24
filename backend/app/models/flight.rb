class Flight < ApplicationRecord
  belongs_to :aircraft
  has_many :flight_passengers
  has_many :passengers, through: :flight_passengers
  has_many :seats
end

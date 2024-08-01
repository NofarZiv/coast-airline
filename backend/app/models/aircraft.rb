class Aircraft < ApplicationRecord
  has_many :flights
  has_many :seats

  validates :number_of_seats, :aircraft_number, presence: true
  validates :aircraft_number, uniqueness: true
end
class Flight < ApplicationRecord
  belongs_to :aircraft
  has_many :orders

  validates :flight_number, :pilot_name, :departure_date, :departure_terminal, :departure_time, :origin_airport, :destination_airport, :arrival_date, :arrival_terminal, :arrival_time, :flight_duration, :flight_price, presence: true
  validates :wifi_available, inclusion: { in: [true, false] }
end
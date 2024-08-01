class Order < ApplicationRecord
  belongs_to :seat
  belongs_to :flight
  belongs_to :passenger

  validates :flight_type, presence: true
end
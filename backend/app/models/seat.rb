class Seat < ApplicationRecord
  belongs_to :aircraft
  belongs_to :flight
  has_one :order
end
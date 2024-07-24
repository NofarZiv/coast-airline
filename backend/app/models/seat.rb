class Seat < ApplicationRecord
  belongs_to :aircraft
  belongs_to :flight
end
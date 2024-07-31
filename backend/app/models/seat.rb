class Seat < ApplicationRecord
  belongs_to :aircraft
  belongs_to :flight, optional: true  # Make the association optional
  has_one :order
end
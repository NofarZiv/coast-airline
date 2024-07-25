class Aircraft < ApplicationRecord
  has_many :seats
  has_many :flights
end
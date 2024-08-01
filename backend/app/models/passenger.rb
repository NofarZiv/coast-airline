class Passenger < ApplicationRecord
  has_many :pets, dependent: :destroy
end
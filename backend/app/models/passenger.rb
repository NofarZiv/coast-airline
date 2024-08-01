class Passenger < ApplicationRecord
  has_many :pets
  has_many :orders

  validates :first_name, :last_name, :passport_number, :date_of_birth, :email, :phone_number, :gender, presence: true
end